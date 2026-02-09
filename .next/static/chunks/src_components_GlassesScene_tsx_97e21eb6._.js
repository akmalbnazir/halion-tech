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
            // --- Setup ---
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, container.clientWidth / container.clientHeight, 0.1, 100);
            camera.position.set(0, 0, 5);
            // Check WebGL support before attempting to create renderer
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
            // --- Materials ---
            const lineMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: '#7c5cff',
                transparent: true,
                opacity: 0.7
            });
            const glowMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: '#5227FF',
                transparent: true,
                opacity: 0.3
            });
            const fillMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: '#5227FF',
                transparent: true,
                opacity: 0.03,
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
            // --- Glasses group ---
            const glassesGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            glassesGroup.scale.setScalar(1.8);
            // Rounded rectangle lens shape
            const lensShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
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
            const lensLineGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(lensShape.getPoints(50));
            const lensFillGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](lensShape);
            // Left lens
            const leftLens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            leftLens.position.x = -0.75;
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo, lineMat));
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), glowMat));
            leftLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lensFillGeo, fillMat));
            glassesGroup.add(leftLens);
            // Right lens
            const rightLens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            rightLens.position.x = 0.75;
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), lineMat));
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](lensLineGeo.clone(), glowMat));
            rightLens.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lensFillGeo.clone(), fillMat));
            glassesGroup.add(rightLens);
            // Bridge
            const bridgeCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadraticBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.15, 0.1, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.25, 0.05), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.15, 0.1, 0));
            glassesGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(bridgeCurve.getPoints(20)), lineMat));
            // Temple arms
            const templeCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadraticBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.3, -0.05, -0.8), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.2, -0.15, -1.6));
            const templeGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(templeCurve.getPoints(30));
            const leftTemple = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo, lineMat);
            leftTemple.position.set(-1.35, 0.1, 0);
            glassesGroup.add(leftTemple);
            const rightTemple = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](templeGeo.clone(), lineMat);
            rightTemple.position.set(1.35, 0.1, 0);
            rightTemple.scale.x = -1;
            glassesGroup.add(rightTemple);
            // Glow dots at key vertices
            const dotGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.03, 8, 8);
            const dotPositions = [
                [
                    -1.35,
                    0.1,
                    0
                ],
                [
                    1.35,
                    0.1,
                    0
                ],
                [
                    0,
                    0.25,
                    0.05
                ],
                [
                    -0.75,
                    0.4,
                    0
                ],
                [
                    0.75,
                    0.4,
                    0
                ]
            ];
            dotPositions.forEach({
                "GlassesScene.useEffect": (param)=>{
                    let [x, y, z] = param;
                    const dot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](dotGeo, dotMat);
                    dot.position.set(x, y, z);
                    glassesGroup.add(dot);
                }
            }["GlassesScene.useEffect"]);
            scene.add(glassesGroup);
            // --- Floating particles ---
            const particleCount = 100;
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
            // --- Animation ---
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            let animId;
            const animate = {
                "GlassesScene.useEffect.animate": ()=>{
                    animId = requestAnimationFrame(animate);
                    const t = clock.getElapsedTime();
                    // Gentle rotation & float
                    glassesGroup.rotation.y = Math.sin(t * 0.3) * 0.15;
                    glassesGroup.rotation.x = Math.sin(t * 0.2) * 0.05;
                    glassesGroup.position.y = Math.sin(t * 0.5) * 0.08;
                    // Slow particle rotation
                    particles.rotation.y = t * 0.02;
                    renderer.render(scene, camera);
                }
            }["GlassesScene.useEffect.animate"];
            animate();
            // --- Resize ---
            const onResize = {
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
            // --- Cleanup ---
            cleanupRef.current = ({
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
        lineNumber: 173,
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