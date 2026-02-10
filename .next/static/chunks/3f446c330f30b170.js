(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21810,t=>{"use strict";var e=t.i(43476),i=t.i(71645),r=t.i(21663),o=t.i(37821),n=t.i(83566),s=t.i(47385);let a=new n.Mat4,u=new s.Vec3,l=new s.Vec3;class c extends o.Transform{constructor(t,{near:e=.1,far:i=100,fov:r=45,aspect:o=1,left:a,right:u,bottom:l,top:c,zoom:h=1}={}){super(),Object.assign(this,{near:e,far:i,fov:r,aspect:o,left:a,right:u,bottom:l,top:c,zoom:h}),this.projectionMatrix=new n.Mat4,this.viewMatrix=new n.Mat4,this.projectionViewMatrix=new n.Mat4,this.worldPosition=new s.Vec3,this.type=a||u?"orthographic":"perspective","orthographic"===this.type?this.orthographic():this.perspective()}perspective({near:t=this.near,far:e=this.far,fov:i=this.fov,aspect:r=this.aspect}={}){return Object.assign(this,{near:t,far:e,fov:i,aspect:r}),this.projectionMatrix.fromPerspective({fov:Math.PI/180*i,aspect:r,near:t,far:e}),this.type="perspective",this}orthographic({near:t=this.near,far:e=this.far,left:i=this.left||-1,right:r=this.right||1,bottom:o=this.bottom||-1,top:n=this.top||1,zoom:s=this.zoom}={}){return Object.assign(this,{near:t,far:e,left:i,right:r,bottom:o,top:n,zoom:s}),i/=s,r/=s,o/=s,n/=s,this.projectionMatrix.fromOrthogonal({left:i,right:r,bottom:o,top:n,near:t,far:e}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return"perspective"===this.type?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(a.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new s.Vec3,new s.Vec3,new s.Vec3,new s.Vec3,new s.Vec3,new s.Vec3]);let t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let t=0;t<6;t++){let e=1/this.frustum[t].distance();this.frustum[t].multiply(e),this.frustum[t].constant*=e}}frustumIntersectsMesh(t,e=t.worldMatrix){if(!t.geometry.attributes.position||(t.geometry.bounds&&t.geometry.bounds.radius!==1/0||t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;u.copy(t.geometry.bounds.center),u.applyMatrix4(e);let i=t.geometry.bounds.radius*e.getMaxScaleOnAxis();return this.frustumIntersectsSphere(u,i)}frustumIntersectsSphere(t,e){for(let i=0;i<6;i++){let r=this.frustum[i];if(l.copy(r).dot(t)+r.constant<-e)return!1}return!0}}var h=t.i(94964),m=t.i(56850),p=t.i(80075);let d=["#ffffff","#ffffff","#ffffff"],f=t=>{3===(t=t.replace(/^#/,"")).length&&(t=t.split("").map(t=>t+t).join(""));let e=parseInt(t,16);return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]},v=`
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
`,x=`
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
`;t.s(["default",0,({particleCount:t=200,particleSpread:o=10,speed:n=.1,particleColors:s,moveParticlesOnHover:a=!1,particleHoverFactor:u=1,alphaParticles:l=!1,particleBaseSize:g=100,sizeRandomness:M=1,cameraDistance:w=20,disableRotation:y=!1,pixelRatio:P=1,className:z})=>{let j=(0,i.useRef)(null),S=(0,i.useRef)({x:0,y:0});return(0,i.useEffect)(()=>{let e,i,z=j.current;if(!z)return;let b=document.createElement("canvas");if(!(b.getContext("webgl2")||b.getContext("webgl")))return;try{e=new r.Renderer({dpr:P,depth:!1,alpha:!0})}catch{return}let C=e.gl;z.appendChild(C.canvas),C.clearColor(0,0,0,0);let R=new c(C,{fov:15});R.position.set(0,0,w);let T=()=>{let t=z.clientWidth,i=z.clientHeight;e.setSize(t,i),R.perspective({aspect:C.canvas.width/C.canvas.height})};window.addEventListener("resize",T,!1),T();let A=t=>{let e=z.getBoundingClientRect();S.current={x:(t.clientX-e.left)/e.width*2-1,y:-((t.clientY-e.top)/e.height*2-1)}};a&&z.addEventListener("mousemove",A);let V=new Float32Array(3*t),F=new Float32Array(4*t),B=new Float32Array(3*t),O=s&&s.length>0?s:d;for(let e=0;e<t;e++){let t,i,r,o;do o=(t=2*Math.random()-1)*t+(i=2*Math.random()-1)*i+(r=2*Math.random()-1)*r;while(o>1||0===o)let n=Math.cbrt(Math.random());V.set([t*n,i*n,r*n],3*e),F.set([Math.random(),Math.random(),Math.random(),Math.random()],4*e);let s=f(O[Math.floor(Math.random()*O.length)]);B.set(s,3*e)}let E=new h.Geometry(C,{position:{size:3,data:V},random:{size:4,data:F},color:{size:3,data:B}}),I=new m.Program(C,{vertex:v,fragment:x,uniforms:{uTime:{value:0},uSpread:{value:o},uBaseSize:{value:g*P},uSizeRandomness:{value:M},uAlphaParticles:{value:+!!l}},transparent:!0,depthTest:!1}),_=new p.Mesh(C,{mode:C.POINTS,geometry:E,program:I}),L=performance.now(),W=0,k=t=>{i=requestAnimationFrame(k);let r=t-L;L=t,W+=r*n,I.uniforms.uTime.value=.001*W,a?(_.position.x=-S.current.x*u,_.position.y=-S.current.y*u):(_.position.x=0,_.position.y=0),y||(_.rotation.x=.1*Math.sin(2e-4*W),_.rotation.y=.15*Math.cos(5e-4*W),_.rotation.z+=.01*n),e.render({scene:_,camera:R})};return i=requestAnimationFrame(k),()=>{window.removeEventListener("resize",T),a&&z.removeEventListener("mousemove",A),cancelAnimationFrame(i),z.contains(C.canvas)&&z.removeChild(C.canvas)}},[t,o,n,a,u,l,g,M,w,y,P]),(0,e.jsx)("div",{ref:j,className:`relative w-full h-full ${z}`})}],21810)},3811,t=>{t.n(t.i(21810))}]);