(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GlassesScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlassesScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GlassesScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlassesScene.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, container.clientWidth / container.clientHeight, 0.1, 100);
            camera.position.set(0, 0, 5);
            const testCanvas = document.createElement('canvas');
            const webglSupported = !!(testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'));
            if (!webglSupported) return;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true
                });
            } catch (e) {
                return;
            }
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);
            /* ── Materials ── */ const frameMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: '#7c5cff',
                transparent: true,
                opacity: 0.85
            });
            const frameGlowMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: '#5227FF',
                transparent: true,
                opacity: 0.3,
                linewidth: 1
            });
            const lensFillMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: '#5227FF',
                transparent: true,
                opacity: 0.04,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            });
            const dotMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: '#B19EEF',
                transparent: true,
                opacity: 0.6
            });
            const particleMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.02,
                color: '#5227FF',
                transparent: true,
                opacity: 0.4,
                sizeAttenuation: true
            });
            /* ── Glasses group ── */ const glassesGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            glassesGroup.scale.setScalar(1.7);
            /* Wayfarer lens shape — trapezoidal, wider at top, narrower at bottom, slight rounding */ const createWayfarerLens = {
                "GlassesScene.useEffect.createWayfarerLens": ()=>{
                    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
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
                }
            }["GlassesScene.useEffect.createWayfarerLens"];
            const lensShape = createWayfarerLens();
            const lensLineGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(lensShape.getPoints(60));
            const lensFillGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](lensShape);
            /* Left lens */ const leftLens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            leftLens.position.x = -0.78;
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo, frameMat));
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), frameGlowMat));
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lensFillGeo, lensFillMat));
            glassesGroup.add(leftLens);
            /* Right lens */ const rightLens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            rightLens.position.x = 0.78;
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), frameMat));
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), frameGlowMat));
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lensFillGeo.clone(), lensFillMat));
            glassesGroup.add(rightLens);
            /* Top frame bar — thick brow line across both lenses (Wayfarer signature) */ const browPoints = [];
            const browSteps = 40;
            for(let i = 0; i <= browSteps; i++){
                const t = i / browSteps;
                const x = -1.44 + t * 2.88; // from left edge to right edge
                const y = 0.475 + Math.sin(t * Math.PI) * 0.03; // very subtle arch
                browPoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, 0));
            }
            const browGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(browPoints);
            glassesGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](browGeo, frameMat));
            // Second brow line slightly above for thickness effect
            const browPoints2 = browPoints.map({
                "GlassesScene.useEffect.browPoints2": (p)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](p.x, p.y + 0.04, p.z)
            }["GlassesScene.useEffect.browPoints2"]);
            const browGeo2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(browPoints2);
            glassesGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](browGeo2, frameGlowMat));
            /* Bridge — keyhole style */ const bridgeCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.12, 0.2, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.04, -0.05, 0.06), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.04, -0.05, 0.06), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.12, 0.2, 0));
            glassesGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(bridgeCurve.getPoints(24)), frameMat));
            /* Temple arms — thick and angular like Wayfarers */ const createTemple = {
                "GlassesScene.useEffect.createTemple": ()=>{
                    const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.15, 0, -0.6), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.2, -0.06, -1.1), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.18, -0.12, -1.7));
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(curve.getPoints(36));
                }
            }["GlassesScene.useEffect.createTemple"];
            const templeGeo = createTemple();
            const leftTemple = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo, frameMat);
            leftTemple.position.set(-1.44, 0.3, 0);
            glassesGroup.add(leftTemple);
            // Thickness line for left temple
            const leftTemple2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo.clone(), frameGlowMat);
            leftTemple2.position.set(-1.44, 0.25, 0);
            glassesGroup.add(leftTemple2);
            const rightTemple = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo.clone(), frameMat);
            rightTemple.position.set(1.44, 0.3, 0);
            rightTemple.scale.x = -1;
            glassesGroup.add(rightTemple);
            const rightTemple2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo.clone(), frameGlowMat);
            rightTemple2.position.set(1.44, 0.25, 0);
            rightTemple2.scale.x = -1;
            glassesGroup.add(rightTemple2);
            /* Hinge dots */ const dotGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.035, 10, 10);
            const hingePositions = [
                [
                    -1.44,
                    0.3,
                    0
                ],
                [
                    1.44,
                    0.3,
                    0
                ],
                [
                    0,
                    -0.04,
                    0.06
                ],
                [
                    -0.78,
                    0.475,
                    0
                ],
                [
                    0.78,
                    0.475,
                    0
                ] // brow corners
            ];
            hingePositions.forEach({
                "GlassesScene.useEffect": (param)=>{
                    let [x, y, z] = param;
                    const dot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](dotGeo, dotMat);
                    dot.position.set(x, y, z);
                    glassesGroup.add(dot);
                }
            }["GlassesScene.useEffect"]);
            scene.add(glassesGroup);
            /* ── Floating particles ── */ const particleCount = 80;
            const positions = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount; i++){
                positions[i * 3] = (Math.random() - 0.5) * 8;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
            }
            const particleGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            particleGeo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](particleGeo, particleMat);
            scene.add(particles);
            /* ── Animation ── */ const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            let animId;
            const animate = {
                "GlassesScene.useEffect.animate": ()=>{
                    animId = requestAnimationFrame(animate);
                    const t = clock.getElapsedTime();
                    glassesGroup.rotation.y = Math.sin(t * 0.3) * 0.18;
                    glassesGroup.rotation.x = Math.sin(t * 0.2) * 0.04;
                    glassesGroup.position.y = Math.sin(t * 0.5) * 0.06;
                    particles.rotation.y = t * 0.015;
                    renderer.render(scene, camera);
                }
            }["GlassesScene.useEffect.animate"];
            animate();
            /* ── Resize ── */ const onResize = {
                "GlassesScene.useEffect.onResize": ()=>{
                    if (!container) return;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                }
            }["GlassesScene.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            /* ── Cleanup ── */ cleanupRef.current = ({
                "GlassesScene.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener('resize', onResize);
                    renderer.dispose();
                    container.removeChild(renderer.domElement);
                }
            })["GlassesScene.useEffect"];
            return ({
                "GlassesScene.useEffect": ()=>{
                    var _cleanupRef_current;
                    (_cleanupRef_current = cleanupRef.current) === null || _cleanupRef_current === void 0 ? void 0 : _cleanupRef_current.call(cleanupRef);
                }
            })["GlassesScene.useEffect"];
        }
    }["GlassesScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full"
    }, void 0, false, {
        fileName: "[project]/src/components/GlassesScene.tsx",
        lineNumber: 220,
        columnNumber: 10
    }, this);
}
_s(GlassesScene, "7HConDru4M77YuPdINsRopO3o60=");
_c = GlassesScene;
var _c;
__turbopack_context__.k.register(_c, "GlassesScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlassesScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/GlassesScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_GlassesScene_tsx_97e21eb6._.js.map