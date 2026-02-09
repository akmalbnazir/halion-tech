'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function GlassesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Check WebGL support before attempting to create renderer
    const testCanvas = document.createElement('canvas');
    const webglSupported = !!(testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'));
    if (!webglSupported) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Materials ---
    const lineMat = new THREE.LineBasicMaterial({ color: '#7c5cff', transparent: true, opacity: 0.7 });
    const glowMat = new THREE.LineBasicMaterial({ color: '#5227FF', transparent: true, opacity: 0.3 });
    const fillMat = new THREE.MeshBasicMaterial({ color: '#5227FF', transparent: true, opacity: 0.03, side: THREE.DoubleSide });
    const dotMat = new THREE.MeshBasicMaterial({ color: '#B19EEF', transparent: true, opacity: 0.6 });
    const particleMat = new THREE.PointsMaterial({ size: 0.02, color: '#5227FF', transparent: true, opacity: 0.4, sizeAttenuation: true });

    // --- Glasses group ---
    const glassesGroup = new THREE.Group();
    glassesGroup.scale.setScalar(1.8);

    // Rounded rectangle lens shape
    const lensShape = new THREE.Shape();
    const w = 1.2, h = 0.8, r = 0.2;
    lensShape.moveTo(-w / 2 + r, -h / 2);
    lensShape.lineTo(w / 2 - r, -h / 2);
    lensShape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    lensShape.lineTo(w / 2, h / 2 - r);
    lensShape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
    lensShape.lineTo(-w / 2 + r, h / 2);
    lensShape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
    lensShape.lineTo(-w / 2, -h / 2 + r);
    lensShape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

    const lensLineGeo = new THREE.BufferGeometry().setFromPoints(lensShape.getPoints(50));
    const lensFillGeo = new THREE.ShapeGeometry(lensShape);

    // Left lens
    const leftLens = new THREE.Group();
    leftLens.position.x = -0.75;
    leftLens.add(new THREE.Line(lensLineGeo, lineMat));
    leftLens.add(new THREE.Line(lensLineGeo.clone(), glowMat));
    leftLens.add(new THREE.Mesh(lensFillGeo, fillMat));
    glassesGroup.add(leftLens);

    // Right lens
    const rightLens = new THREE.Group();
    rightLens.position.x = 0.75;
    rightLens.add(new THREE.Line(lensLineGeo.clone(), lineMat));
    rightLens.add(new THREE.Line(lensLineGeo.clone(), glowMat));
    rightLens.add(new THREE.Mesh(lensFillGeo.clone(), fillMat));
    glassesGroup.add(rightLens);

    // Bridge
    const bridgeCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.15, 0.1, 0),
      new THREE.Vector3(0, 0.25, 0.05),
      new THREE.Vector3(0.15, 0.1, 0)
    );
    glassesGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bridgeCurve.getPoints(20)), lineMat));

    // Temple arms
    const templeCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.3, -0.05, -0.8),
      new THREE.Vector3(-0.2, -0.15, -1.6)
    );
    const templeGeo = new THREE.BufferGeometry().setFromPoints(templeCurve.getPoints(30));

    const leftTemple = new THREE.Line(templeGeo, lineMat);
    leftTemple.position.set(-1.35, 0.1, 0);
    glassesGroup.add(leftTemple);

    const rightTemple = new THREE.Line(templeGeo.clone(), lineMat);
    rightTemple.position.set(1.35, 0.1, 0);
    rightTemple.scale.x = -1;
    glassesGroup.add(rightTemple);

    // Glow dots at key vertices
    const dotGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const dotPositions: [number, number, number][] = [
      [-1.35, 0.1, 0], [1.35, 0.1, 0], [0, 0.25, 0.05], [-0.75, 0.4, 0], [0.75, 0.4, 0]
    ];
    dotPositions.forEach(([x, y, z]) => {
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(x, y, z);
      glassesGroup.add(dot);
    });

    scene.add(glassesGroup);

    // --- Floating particles ---
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Animation ---
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle rotation & float
      glassesGroup.rotation.y = Math.sin(t * 0.3) * 0.15;
      glassesGroup.rotation.x = Math.sin(t * 0.2) * 0.05;
      glassesGroup.position.y = Math.sin(t * 0.5) * 0.08;

      // Slow particle rotation
      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // --- Cleanup ---
    cleanupRef.current = () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
