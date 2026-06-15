'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function GlassesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

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

    /* ── Materials ── */
    const frameMat = new THREE.LineBasicMaterial({ color: '#C7C9D1', transparent: true, opacity: 0.85 });
    const frameGlowMat = new THREE.LineBasicMaterial({ color: '#8A8D99', transparent: true, opacity: 0.3, linewidth: 1 });
    const lensFillMat = new THREE.MeshBasicMaterial({ color: '#8A8D99', transparent: true, opacity: 0.04, side: THREE.DoubleSide });
    const dotMat = new THREE.MeshBasicMaterial({ color: '#A6A9B4', transparent: true, opacity: 0.6 });
    const particleMat = new THREE.PointsMaterial({ size: 0.02, color: '#8A8D99', transparent: true, opacity: 0.4, sizeAttenuation: true });

    /* ── Glasses group ── */
    const glassesGroup = new THREE.Group();
    glassesGroup.scale.setScalar(1.7);

    /* Wayfarer lens shape — trapezoidal, wider at top, narrower at bottom, slight rounding */
    const createWayfarerLens = () => {
      const shape = new THREE.Shape();
      // Wayfarer proportions: wider top, narrower rounded bottom
      const topW = 1.3;
      const botW = 1.1;
      const h = 0.95;
      const r = 0.12; // corner radius

      // Start bottom-left, go clockwise
      shape.moveTo(-botW / 2 + r, -h / 2);
      // Bottom edge
      shape.lineTo(botW / 2 - r, -h / 2);
      // Bottom-right corner (rounded)
      shape.quadraticCurveTo(botW / 2, -h / 2, botW / 2, -h / 2 + r);
      // Right edge — angled outward toward top
      shape.lineTo(topW / 2, h / 2 - r);
      // Top-right corner (rounded)
      shape.quadraticCurveTo(topW / 2, h / 2, topW / 2 - r, h / 2);
      // Top edge — flat/slightly wider
      shape.lineTo(-topW / 2 + r, h / 2);
      // Top-left corner (rounded)
      shape.quadraticCurveTo(-topW / 2, h / 2, -topW / 2, h / 2 - r);
      // Left edge — angled inward toward bottom
      shape.lineTo(-botW / 2, -h / 2 + r);
      // Bottom-left corner (rounded)
      shape.quadraticCurveTo(-botW / 2, -h / 2, -botW / 2 + r, -h / 2);

      return shape;
    };

    const lensShape = createWayfarerLens();
    const lensLineGeo = new THREE.BufferGeometry().setFromPoints(lensShape.getPoints(60));
    const lensFillGeo = new THREE.ShapeGeometry(lensShape);

    /* Left lens */
    const leftLens = new THREE.Group();
    leftLens.position.x = -0.78;
    leftLens.add(new THREE.Line(lensLineGeo, frameMat));
    leftLens.add(new THREE.Line(lensLineGeo.clone(), frameGlowMat));
    leftLens.add(new THREE.Mesh(lensFillGeo, lensFillMat));
    glassesGroup.add(leftLens);

    /* Right lens */
    const rightLens = new THREE.Group();
    rightLens.position.x = 0.78;
    rightLens.add(new THREE.Line(lensLineGeo.clone(), frameMat));
    rightLens.add(new THREE.Line(lensLineGeo.clone(), frameGlowMat));
    rightLens.add(new THREE.Mesh(lensFillGeo.clone(), lensFillMat));
    glassesGroup.add(rightLens);

    /* Top frame bar — thick brow line across both lenses (Wayfarer signature) */
    const browPoints: THREE.Vector3[] = [];
    const browSteps = 40;
    for (let i = 0; i <= browSteps; i++) {
      const t = i / browSteps;
      const x = -1.44 + t * 2.88; // from left edge to right edge
      const y = 0.475 + Math.sin(t * Math.PI) * 0.03; // very subtle arch
      browPoints.push(new THREE.Vector3(x, y, 0));
    }
    const browGeo = new THREE.BufferGeometry().setFromPoints(browPoints);
    glassesGroup.add(new THREE.Line(browGeo, frameMat));
    // Second brow line slightly above for thickness effect
    const browPoints2 = browPoints.map(p => new THREE.Vector3(p.x, p.y + 0.04, p.z));
    const browGeo2 = new THREE.BufferGeometry().setFromPoints(browPoints2);
    glassesGroup.add(new THREE.Line(browGeo2, frameGlowMat));

    /* Bridge — keyhole style */
    const bridgeCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.12, 0.2, 0),
      new THREE.Vector3(-0.04, -0.05, 0.06),
      new THREE.Vector3(0.04, -0.05, 0.06),
      new THREE.Vector3(0.12, 0.2, 0)
    );
    glassesGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bridgeCurve.getPoints(24)), frameMat));

    /* Temple arms — thick and angular like Wayfarers */
    const createTemple = () => {
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-0.15, 0, -0.6),
        new THREE.Vector3(-0.2, -0.06, -1.1),
        new THREE.Vector3(-0.18, -0.12, -1.7)
      );
      return new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
    };

    const templeGeo = createTemple();

    const leftTemple = new THREE.Line(templeGeo, frameMat);
    leftTemple.position.set(-1.44, 0.3, 0);
    glassesGroup.add(leftTemple);
    // Thickness line for left temple
    const leftTemple2 = new THREE.Line(templeGeo.clone(), frameGlowMat);
    leftTemple2.position.set(-1.44, 0.25, 0);
    glassesGroup.add(leftTemple2);

    const rightTemple = new THREE.Line(templeGeo.clone(), frameMat);
    rightTemple.position.set(1.44, 0.3, 0);
    rightTemple.scale.x = -1;
    glassesGroup.add(rightTemple);
    const rightTemple2 = new THREE.Line(templeGeo.clone(), frameGlowMat);
    rightTemple2.position.set(1.44, 0.25, 0);
    rightTemple2.scale.x = -1;
    glassesGroup.add(rightTemple2);

    /* Hinge dots */
    const dotGeo = new THREE.SphereGeometry(0.035, 10, 10);
    const hingePositions: [number, number, number][] = [
      [-1.44, 0.3, 0], [1.44, 0.3, 0],  // hinge points
      [0, -0.04, 0.06],                   // bridge center
      [-0.78, 0.475, 0], [0.78, 0.475, 0] // brow corners
    ];
    hingePositions.forEach(([x, y, z]) => {
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(x, y, z);
      glassesGroup.add(dot);
    });

    scene.add(glassesGroup);

    /* ── Floating particles ── */
    const particleCount = 80;
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

    /* ── Animation ── */
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      glassesGroup.rotation.y = Math.sin(t * 0.3) * 0.18;
      glassesGroup.rotation.x = Math.sin(t * 0.2) * 0.04;
      glassesGroup.position.y = Math.sin(t * 0.5) * 0.06;

      particles.rotation.y = t * 0.015;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Resize ── */
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    /* ── Cleanup ── */
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
