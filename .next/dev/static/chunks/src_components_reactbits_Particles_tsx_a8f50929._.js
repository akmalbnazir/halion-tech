(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/reactbits/Particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Geometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const defaultColors = [
    '#ffffff',
    '#ffffff',
    '#ffffff'
];
const hexToRgb = (hex)=>{
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map((c)=>c + c).join('');
    }
    const int = parseInt(hex, 16);
    const r = (int >> 16 & 255) / 255;
    const g = (int >> 8 & 255) / 255;
    const b = (int & 255) / 255;
    return [
        r,
        g,
        b
    ];
};
const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    
    gl_Position = projectionMatrix * mvPos;
  }
`;
const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;
const Particles = ({ particleCount = 200, particleSpread = 10, speed = 0.1, particleColors, moveParticlesOnHover = false, particleHoverFactor = 1, alphaParticles = false, particleBaseSize = 100, sizeRandomness = 1, cameraDistance = 20, disableRotation = false, pixelRatio = 1, className })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            // Check WebGL support before attempting to create renderer
            const testCanvas = document.createElement('canvas');
            const webglSupported = !!(testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'));
            if (!webglSupported) return;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                    dpr: pixelRatio,
                    depth: false,
                    alpha: true
                });
            } catch  {
                return;
            }
            const gl = renderer.gl;
            container.appendChild(gl.canvas);
            gl.clearColor(0, 0, 0, 0);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"](gl, {
                fov: 15
            });
            camera.position.set(0, 0, cameraDistance);
            const resize = {
                "Particles.useEffect.resize": ()=>{
                    const width = container.clientWidth;
                    const height = container.clientHeight;
                    renderer.setSize(width, height);
                    camera.perspective({
                        aspect: gl.canvas.width / gl.canvas.height
                    });
                }
            }["Particles.useEffect.resize"];
            window.addEventListener('resize', resize, false);
            resize();
            const handleMouseMove = {
                "Particles.useEffect.handleMouseMove": (e)=>{
                    const rect = container.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
                    const y = -((e.clientY - rect.top) / rect.height * 2 - 1);
                    mouseRef.current = {
                        x,
                        y
                    };
                }
            }["Particles.useEffect.handleMouseMove"];
            if (moveParticlesOnHover) {
                container.addEventListener('mousemove', handleMouseMove);
            }
            const count = particleCount;
            const positions = new Float32Array(count * 3);
            const randoms = new Float32Array(count * 4);
            const colors = new Float32Array(count * 3);
            const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;
            for(let i = 0; i < count; i++){
                let x, y, z, len;
                do {
                    x = Math.random() * 2 - 1;
                    y = Math.random() * 2 - 1;
                    z = Math.random() * 2 - 1;
                    len = x * x + y * y + z * z;
                }while (len > 1 || len === 0)
                const r = Math.cbrt(Math.random());
                positions.set([
                    x * r,
                    y * r,
                    z * r
                ], i * 3);
                randoms.set([
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random()
                ], i * 4);
                const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
                colors.set(col, i * 3);
            }
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geometry"](gl, {
                position: {
                    size: 3,
                    data: positions
                },
                random: {
                    size: 4,
                    data: randoms
                },
                color: {
                    size: 3,
                    data: colors
                }
            });
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex,
                fragment,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uSpread: {
                        value: particleSpread
                    },
                    uBaseSize: {
                        value: particleBaseSize * pixelRatio
                    },
                    uSizeRandomness: {
                        value: sizeRandomness
                    },
                    uAlphaParticles: {
                        value: alphaParticles ? 1 : 0
                    }
                },
                transparent: true,
                depthTest: false
            });
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                mode: gl.POINTS,
                geometry,
                program
            });
            let animationFrameId;
            let lastTime = performance.now();
            let elapsed = 0;
            const update = {
                "Particles.useEffect.update": (t)=>{
                    animationFrameId = requestAnimationFrame(update);
                    const delta = t - lastTime;
                    lastTime = t;
                    elapsed += delta * speed;
                    program.uniforms.uTime.value = elapsed * 0.001;
                    if (moveParticlesOnHover) {
                        particles.position.x = -mouseRef.current.x * particleHoverFactor;
                        particles.position.y = -mouseRef.current.y * particleHoverFactor;
                    } else {
                        particles.position.x = 0;
                        particles.position.y = 0;
                    }
                    if (!disableRotation) {
                        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
                        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
                        particles.rotation.z += 0.01 * speed;
                    }
                    renderer.render({
                        scene: particles,
                        camera
                    });
                }
            }["Particles.useEffect.update"];
            animationFrameId = requestAnimationFrame(update);
            return ({
                "Particles.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    if (moveParticlesOnHover) {
                        container.removeEventListener('mousemove', handleMouseMove);
                    }
                    cancelAnimationFrame(animationFrameId);
                    if (container.contains(gl.canvas)) {
                        container.removeChild(gl.canvas);
                    }
                }
            })["Particles.useEffect"];
        }
    }["Particles.useEffect"], [
        particleCount,
        particleSpread,
        speed,
        moveParticlesOnHover,
        particleHoverFactor,
        alphaParticles,
        particleBaseSize,
        sizeRandomness,
        cameraDistance,
        disableRotation,
        pixelRatio
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full h-full ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/reactbits/Particles.tsx",
        lineNumber: 249,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Particles, "+nF1yJvQLVO//ZYCcNavPZmnV1A=");
_c = Particles;
const __TURBOPACK__default__export__ = Particles;
var _c;
__turbopack_context__.k.register(_c, "Particles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reactbits/Particles.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/reactbits/Particles.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_reactbits_Particles_tsx_a8f50929._.js.map