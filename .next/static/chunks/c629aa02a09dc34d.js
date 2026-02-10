(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76676,e=>{"use strict";var o=e.i(43476),t=e.i(71645),r=e.i(21663),n=e.i(56850),i=e.i(80075);let l={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function a(e){4===e.length&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255]}function s(e){if(void 0===e)return[0,0,0];if(3==arguments.length)return arguments;if(!isNaN(e)){var o;return[((o=parseInt(o=e))>>16&255)/255,(o>>8&255)/255,(255&o)/255]}return"#"===e[0]?a(e):l[e.toLowerCase()]?a(l[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0])}class u extends Array{constructor(e){if(Array.isArray(e))return super(...e);return super(...s(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(s(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}var c=e.i(94964);class f extends c.Geometry{constructor(e,{attributes:o={}}={}){Object.assign(o,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,o)}}let v=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,p=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187,
      0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                              \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                           \
  ColorStop currentColor = colors[index];                    \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function x(e){let{colorStops:l=["#5227FF","#7cff67","#5227FF"],amplitude:a=1,blend:s=.5}=e,c=(0,t.useRef)(e);c.current=e;let x=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e,o,t=x.current;if(!t)return;let m=document.createElement("canvas");if(!(m.getContext("webgl2")||m.getContext("webgl")))return;try{e=new r.Renderer({alpha:!0,premultipliedAlpha:!0,antialias:!0})}catch{return}let d=e.gl;function h(){if(!t)return;let r=t.offsetWidth,n=t.offsetHeight;e.setSize(r,n),o&&(o.uniforms.uResolution.value=[r,n])}d.clearColor(0,0,0,0),d.enable(d.BLEND),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA),d.canvas.style.backgroundColor="transparent",window.addEventListener("resize",h);let C=new f(d);C.attributes.uv&&delete C.attributes.uv;let g=l.map(e=>{let o=new u(e);return[o.r,o.g,o.b]});o=new n.Program(d,{vertex:v,fragment:p,uniforms:{uTime:{value:0},uAmplitude:{value:a},uColorStops:{value:g},uResolution:{value:[t.offsetWidth,t.offsetHeight]},uBlend:{value:s}}});let y=new i.Mesh(d,{geometry:C,program:o});t.appendChild(d.canvas);let w=0,A=t=>{w=requestAnimationFrame(A);let{time:r=.01*t,speed:n=1}=c.current;if(o){o.uniforms.uTime.value=r*n*.1,o.uniforms.uAmplitude.value=c.current.amplitude??1,o.uniforms.uBlend.value=c.current.blend??s;let t=c.current.colorStops??l;o.uniforms.uColorStops.value=t.map(e=>{let o=new u(e);return[o.r,o.g,o.b]}),e.render({scene:y})}};return w=requestAnimationFrame(A),h(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",h),t&&d.canvas.parentNode===t&&t.removeChild(d.canvas),d.getExtension("WEBGL_lose_context")?.loseContext()}},[a]),(0,o.jsx)("div",{ref:x,className:"w-full h-full"})}e.s(["default",()=>x],76676)},47858,e=>{e.n(e.i(76676))}]);