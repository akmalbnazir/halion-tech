(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/reactbits/Noise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Noise = (param)=>{
    let { patternSize = 250, patternScaleX = 1, patternScaleY = 1, patternRefreshInterval = 2, patternAlpha = 15 } = param;
    _s();
    const grainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Noise.useEffect": ()=>{
            const canvas = grainRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d', {
                alpha: true
            });
            if (!ctx) return;
            let frame = 0;
            let animationId;
            const canvasSize = 1024;
            const resize = {
                "Noise.useEffect.resize": ()=>{
                    if (!canvas) return;
                    canvas.width = canvasSize;
                    canvas.height = canvasSize;
                    canvas.style.width = '100vw';
                    canvas.style.height = '100vh';
                }
            }["Noise.useEffect.resize"];
            const drawGrain = {
                "Noise.useEffect.drawGrain": ()=>{
                    const imageData = ctx.createImageData(canvasSize, canvasSize);
                    const data = imageData.data;
                    for(let i = 0; i < data.length; i += 4){
                        const value = Math.random() * 255;
                        data[i] = value;
                        data[i + 1] = value;
                        data[i + 2] = value;
                        data[i + 3] = patternAlpha;
                    }
                    ctx.putImageData(imageData, 0, 0);
                }
            }["Noise.useEffect.drawGrain"];
            const loop = {
                "Noise.useEffect.loop": ()=>{
                    if (frame % patternRefreshInterval === 0) {
                        drawGrain();
                    }
                    frame++;
                    animationId = window.requestAnimationFrame(loop);
                }
            }["Noise.useEffect.loop"];
            window.addEventListener('resize', resize);
            resize();
            loop();
            return ({
                "Noise.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    window.cancelAnimationFrame(animationId);
                }
            })["Noise.useEffect"];
        }
    }["Noise.useEffect"], [
        patternSize,
        patternScaleX,
        patternScaleY,
        patternRefreshInterval,
        patternAlpha
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        className: "pointer-events-none absolute top-0 left-0 h-screen w-screen",
        ref: grainRef,
        style: {
            imageRendering: 'pixelated'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/reactbits/Noise.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Noise, "WiWT72+hkcUFZ8yqI+ISlWIcJf4=");
_c = Noise;
const __TURBOPACK__default__export__ = Noise;
var _c;
__turbopack_context__.k.register(_c, "Noise");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reactbits/Noise.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/reactbits/Noise.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_reactbits_Noise_tsx_3773c2ad._.js.map