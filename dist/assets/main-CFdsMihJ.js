(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="172",Wl=0,Ga=1,Xl=2,Zo=1,Jo=2,ln=3,wn=0,be=1,cn=2,bn=0,mi=1,Ha=2,Va=3,Wa=4,ql=5,zn=100,$l=101,Yl=102,jl=103,Kl=104,Zl=200,Jl=201,Ql=202,tc=203,Rr=204,Cr=205,ec=206,nc=207,ic=208,sc=209,rc=210,ac=211,oc=212,lc=213,cc=214,Pr=0,Lr=1,Ir=2,xi=3,Dr=4,Ur=5,Nr=6,Fr=7,xa=0,uc=1,hc=2,Tn=0,dc=1,fc=2,pc=3,Qo=4,mc=5,gc=6,_c=7,tl=300,Mi=301,yi=302,Or=303,Br=304,ks=306,zr=1e3,Gn=1001,kr=1002,Pe=1003,vc=1004,Zi=1005,Ke=1006,qs=1007,Hn=1008,fn=1009,el=1010,nl=1011,Wi=1012,Ma=1013,Wn=1014,Ze=1015,Xi=1016,ya=1017,Sa=1018,Si=1020,il=35902,sl=1021,rl=1022,qe=1023,al=1024,ol=1025,gi=1026,Ei=1027,Ea=1028,ba=1029,ll=1030,Ta=1031,Aa=1033,As=33776,ws=33777,Rs=33778,Cs=33779,Gr=35840,Hr=35841,Vr=35842,Wr=35843,Xr=36196,qr=37492,$r=37496,Yr=37808,jr=37809,Kr=37810,Zr=37811,Jr=37812,Qr=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Ps=36492,la=36494,ca=36495,cl=36283,ua=36284,ha=36285,da=36286,xc=3200,Mc=3201,ul=0,yc=1,Sn="",Ne="srgb",bi="srgb-linear",Us="linear",jt="srgb",jn=7680,Xa=519,Sc=512,Ec=513,bc=514,hl=515,Tc=516,Ac=517,wc=518,Rc=519,qa=35044,$a="300 es",un=2e3,Ns=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,fa=180/Math.PI;function qi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[s&255]+ge[s>>8&255]+ge[s>>16&255]+ge[s>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Ft(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function $s(s,t,e){return(1-e)*s+e*t}function Li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,i,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],h=i[6],T=i[1],b=i[4],E=i[7],D=i[2],P=i[5],w=i[8];return r[0]=a*x+o*T+l*D,r[3]=a*m+o*b+l*P,r[6]=a*h+o*E+l*w,r[1]=c*x+u*T+f*D,r[4]=c*m+u*b+f*P,r[7]=c*h+u*E+f*w,r[2]=d*x+p*T+g*D,r[5]=d*m+p*b+g*P,r[8]=d*h+p*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Lt;function dl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pc(){const s=Fs("canvas");return s.style.display="block",s}const Ya={};function ui(s){s in Ya||(Ya[s]=!0,console.warn(s))}function Lc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ic(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ja=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?Us:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:ja,fromXYZ:Ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:ja,fromXYZ:Ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const Wt=Uc();function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Kn;class Nc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Fs("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fc=0;class fl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(js(i[a].image)):r.push(js(i[a]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class Me extends Ai{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Gn,i=Gn,r=Ke,a=Hn,o=qe,l=fn,c=Me.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=qi(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=tl;Me.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,E=(p+1)/2,D=(h+1)/2,P=(u+d)/4,w=(f+x)/4,U=(g+m)/4;return b>E&&b>D?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=P/n,r=w/n):E>D?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=P/i,r=U/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=U/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bc extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new fl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pl extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zc extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==p||u!==g){let m=1-o;const h=l*d+c*p+u*g+f*x,T=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const D=Math.sqrt(b),P=Math.atan2(D,h*T);m=Math.sin(m*P)/D,o=Math.sin(o*P)/D}const E=o*T;if(l=l*m+d*E,c=c*m+p*E,u=u*m+g*E,f=f*m+x*E,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-o*p,t[e+2]=c*g+u*p+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new F,Za=new $i;class $n{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),Qi.subVectors(this.max,Ii),Zn.subVectors(t.a,Ii),Jn.subVectors(t.b,Ii),Qn.subVectors(t.c,Ii),pn.subVectors(Jn,Zn),mn.subVectors(Qn,Jn),Ln.subVectors(Zn,Qn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Ln.z,Ln.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Ln.z,0,-Ln.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Ln.y,Ln.x,0];return!Zs(e,Zn,Jn,Qn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Zn,Jn,Qn,Qi))?!1:(ts.crossVectors(pn,mn),e=[ts.x,ts.y,ts.z],Zs(e,Zn,Jn,Qn,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new F,new F,new F,new F,new F,new F,new F,new F],He=new F,Ji=new $n,Zn=new F,Jn=new F,Qn=new F,pn=new F,mn=new F,Ln=new F,Ii=new F,Qi=new F,ts=new F,In=new F;function Zs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),u=n.dot(In);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kc=new $n,Di=new F,Js=new F;class wi{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(Js)),this.expandByPoint(Di.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new F,Qs=new F,es=new F,gn=new F,tr=new F,ns=new F,er=new F;class ml{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qs.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=gn.dot(this.direction),l=-gn.dot(es),c=gn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Qs).addScaledVector(es,d),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){tr.subVectors(e,t),ns.subVectors(n,t),er.crossVectors(tr,ns);let a=this.direction.dot(er),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot(ns.crossVectors(gn,ns));if(l<0)return null;const c=o*this.direction.dot(tr.cross(gn));if(c<0||l+c>a)return null;const u=-o*gn.dot(er);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,i,r,a,o,l,c,u,f,d,p,g,x,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,f,d,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,u,f,d,p,g,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=i,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),a=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,g=c*u,x=c*f;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,g=c*u,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gc,t,Hc)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),_n.crossVectors(n,Ae),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),_n.crossVectors(n,Ae)),_n.normalize(),is.crossVectors(Ae,_n),i[0]=_n.x,i[4]=is.x,i[8]=Ae.x,i[1]=_n.y,i[5]=is.y,i[9]=Ae.y,i[2]=_n.z,i[6]=is.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],h=n[14],T=n[3],b=n[7],E=n[11],D=n[15],P=i[0],w=i[4],U=i[8],y=i[12],M=i[1],R=i[5],V=i[9],z=i[13],Y=i[2],j=i[6],X=i[10],Z=i[14],G=i[3],rt=i[7],ht=i[11],xt=i[15];return r[0]=a*P+o*M+l*Y+c*G,r[4]=a*w+o*R+l*j+c*rt,r[8]=a*U+o*V+l*X+c*ht,r[12]=a*y+o*z+l*Z+c*xt,r[1]=u*P+f*M+d*Y+p*G,r[5]=u*w+f*R+d*j+p*rt,r[9]=u*U+f*V+d*X+p*ht,r[13]=u*y+f*z+d*Z+p*xt,r[2]=g*P+x*M+m*Y+h*G,r[6]=g*w+x*R+m*j+h*rt,r[10]=g*U+x*V+m*X+h*ht,r[14]=g*y+x*z+m*Z+h*xt,r[3]=T*P+b*M+E*Y+D*G,r[7]=T*w+b*R+E*j+D*rt,r[11]=T*U+b*V+E*X+D*ht,r[15]=T*y+b*z+E*Z+D*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],h=t[15];return g*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*u-n*c*u)+h*(-i*o*u-e*l*f+e*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],h=t[15],T=f*m*c-x*d*c+x*l*p-o*m*p-f*l*h+o*d*h,b=g*d*c-u*m*c-g*l*p+a*m*p+u*l*h-a*d*h,E=u*x*c-g*f*c+g*o*p-a*x*p-u*o*h+a*f*h,D=g*f*l-u*x*l-g*o*d+a*x*d+u*o*m-a*f*m,P=e*T+n*b+i*E+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return t[0]=T*w,t[1]=(x*d*r-f*m*r-x*i*p+n*m*p+f*i*h-n*d*h)*w,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*h+n*l*h)*w,t[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*p-n*l*p)*w,t[4]=b*w,t[5]=(u*m*r-g*d*r+g*i*p-e*m*p-u*i*h+e*d*h)*w,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*h-e*l*h)*w,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*p+e*l*p)*w,t[8]=E*w,t[9]=(g*f*r-u*x*r-g*n*p+e*x*p+u*n*h-e*f*h)*w,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*h+e*o*h)*w,t[11]=(u*o*r-a*f*r-u*n*c+e*f*c+a*n*p-e*o*p)*w,t[12]=D*w,t[13]=(u*x*i-g*f*i+g*n*d-e*x*d-u*n*m+e*f*m)*w,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*f*i-u*o*i+u*n*l-e*f*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,g=r*f,x=a*u,m=a*f,h=o*f,T=l*c,b=l*u,E=l*f,D=n.x,P=n.y,w=n.z;return i[0]=(1-(x+h))*D,i[1]=(p+E)*D,i[2]=(g-b)*D,i[3]=0,i[4]=(p-E)*P,i[5]=(1-(d+h))*P,i[6]=(m+T)*P,i[7]=0,i[8]=(g+b)*w,i[9]=(m-T)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const a=ti.set(i[4],i[5],i[6]).length(),o=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);const c=1/r,u=1/a,f=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=un){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===un)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=un){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(a-r),d=(e+t)*c,p=(n+i)*u;let g,x;if(o===un)g=(a+r)*f,x=-2*f;else if(o===Ns)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new F,Ve=new Jt,Gc=new F(0,0,0),Hc=new F(1,1,1),_n=new F,is=new F,Ae=new F,Ja=new Jt,Qa=new $i;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vc=0;const to=new F,ei=new $i,rn=new Jt,ss=new F,Ui=new F,Wc=new F,Xc=new $i,eo=new F(1,0,0),no=new F(0,1,0),io=new F(0,0,1),so={type:"added"},qc={type:"removed"},ni={type:"childadded",child:null},nr={type:"childremoved",child:null};class ue extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new F,e=new Qe,n=new $i,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Lt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(eo,t)}rotateY(t){return this.rotateOnAxis(no,t)}rotateZ(t){return this.rotateOnAxis(io,t)}translateOnAxis(t,e){return to.copy(t).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eo,t)}translateY(t){return this.translateOnAxis(no,t)}translateZ(t){return this.translateOnAxis(io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ui,ss,this.up):rn.lookAt(ss,Ui,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(rn),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(so),ni.child=t,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qc),nr.child=t,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(so),ni.child=t,this.dispatchEvent(ni),ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new F(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new F,an=new F,ir=new F,on=new F,ii=new F,si=new F,ro=new F,sr=new F,rr=new F,ar=new F,or=new ae,lr=new ae,cr=new ae;class Oe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){We.subVectors(i,e),an.subVectors(n,e),ir.subVectors(t,e);const a=We.dot(We),o=We.dot(an),l=We.dot(ir),c=an.dot(an),u=an.dot(ir),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return or.setScalar(0),lr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(t,e),lr.fromBufferAttribute(t,n),cr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(or,r.x),a.addScaledVector(lr,r.y),a.addScaledVector(cr,r.z),a}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),an.subVectors(t,e),We.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),an.subVectors(this.a,this.b),We.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),sr.subVectors(t,n);const l=ii.dot(sr),c=si.dot(sr);if(l<=0&&c<=0)return e.copy(n);rr.subVectors(t,i);const u=ii.dot(rr),f=si.dot(rr);if(u>=0&&f<=u)return e.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ii,a);ar.subVectors(t,r);const p=ii.dot(ar),g=si.dot(ar);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(si,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ro.subVectors(r,i),o=(f-u)/(f-u+(p-g)),e.copy(i).addScaledVector(ro,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function ur(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Cc(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ur(a,r,t+1/3),this.g=ur(a,r,t),this.b=ur(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=_l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Wt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Ft(_e.r*255,0,255))*65536+Math.round(Ft(_e.g*255,0,255))*256+Math.round(Ft(_e.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,i=_e.g,r=_e.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Ne){Wt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,i=_e.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(rs);const n=$s(vn.h,rs.h,e),i=$s(vn.s,rs.s,e),r=$s(vn.l,rs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Et;Et.NAMES=_l;let $c=0;class Ri extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=mi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vl extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new F,as=new $t;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class xl extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ml extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yc=0;const Ue=new Jt,hr=new ue,ri=new F,we=new $n,Ni=new $n,fe=new F;class tn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?Ml:xl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return hr.lookAt(t),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(we.min,Ni.min),we.expandByPoint(fe),fe.addVectors(we.max,Ni.max),we.expandByPoint(fe)):(we.expandByPoint(Ni.min),we.expandByPoint(Ni.max))}we.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fe.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(t,c),fe.add(ri)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;const c=new F,u=new F,f=new F,d=new $t,p=new $t,g=new $t,x=new F,m=new F;function h(U,y,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[U].add(x),o[y].add(x),o[M].add(x),l[U].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,y=T.length;U<y;++U){const M=T[U],R=M.start,V=M.count;for(let z=R,Y=R+V;z<Y;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new F,E=new F,D=new F,P=new F;function w(U){D.fromBufferAttribute(i,U),P.copy(D);const y=o[U];b.copy(y),b.sub(D.multiplyScalar(D.dot(y))).normalize(),E.crossVectors(P,y);const R=E.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,R)}for(let U=0,y=T.length;U<y;++U){const M=T[U],R=M.start,V=M.count;for(let z=R,Y=R+V;z<Y;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new $e(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new Jt,Dn=new ml,os=new wi,oo=new F,ls=new F,cs=new F,us=new F,dr=new F,hs=new F,lo=new F,ds=new F;class Be extends ue{constructor(t=new tn,e=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(dr.fromBufferAttribute(f,t),a?hs.addScaledVector(dr,u):hs.addScaledVector(dr.sub(e),u))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(os.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(os,oo)===null||Dn.origin.distanceToSquared(oo)>(t.far-t.near)**2))&&(ao.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(ao),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,D=b;E<D;E+=3){const P=o.getX(E),w=o.getX(E+1),U=o.getX(E+2);i=fs(this,h,t,n,c,u,f,P,w,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);i=fs(this,a,t,n,c,u,f,T,b,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,D=b;E<D;E+=3){const P=E,w=E+1,U=E+2;i=fs(this,h,t,n,c,u,f,P,w,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=m,b=m+1,E=m+2;i=fs(this,a,t,n,c,u,f,T,b,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jc(s,t,e,n,i,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===wn,o),l===null)return null;ds.copy(o),ds.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ds);return c<e.near||c>e.far?null:{distance:c,point:ds.clone(),object:s}}function fs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ls),s.getVertexPosition(l,cs),s.getVertexPosition(c,us);const u=jc(s,t,e,n,ls,cs,us,lo);if(u){const f=new F;Oe.getBarycoord(lo,ls,cs,us,f),i&&(u.uv=Oe.getInterpolatedAttribute(i,o,l,c,f,new $t)),r&&(u.uv1=Oe.getInterpolatedAttribute(r,o,l,c,f,new $t)),a&&(u.normal=Oe.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Oe.getNormal(ls,cs,us,d.normal),u.face=d,u.barycoord=f}return u}class qn extends tn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(f,2));function g(x,m,h,T,b,E,D,P,w,U,y){const M=E/w,R=D/U,V=E/2,z=D/2,Y=P/2,j=w+1,X=U+1;let Z=0,G=0;const rt=new F;for(let ht=0;ht<X;ht++){const xt=ht*R-z;for(let Ut=0;Ut<j;Ut++){const Kt=Ut*M-V;rt[x]=Kt*T,rt[m]=xt*b,rt[h]=Y,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[h]=P>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ut/w),f.push(1-ht/U),Z+=1}}for(let ht=0;ht<U;ht++)for(let xt=0;xt<w;xt++){const Ut=d+xt+j*ht,Kt=d+xt+j*(ht+1),W=d+(xt+1)+j*(ht+1),et=d+(xt+1)+j*ht;l.push(Ut,Kt,et),l.push(Kt,W,et),G+=6}o.addGroup(p,G,y),p+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xe(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function Kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Zc={clone:Ti,merge:xe};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sl extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new F,co=new $t,uo=new $t;class Fe extends Sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,co,uo),e.subVectors(uo,co)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class tu extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(ai,oi,t,e);i.layers=this.layers,this.add(i);const r=new Fe(ai,oi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(ai,oi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ai,oi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ai,oi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ai,oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends Me{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eu extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:bn});r.uniforms.tEquirect.value=e;const a=new Be(i,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Ke),new tu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class wa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nu extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iu extends Me{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Pe,u=Pe,f,d){super(null,a,o,l,c,u,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho extends $e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const li=new Jt,fo=new Jt,ps=[],po=new $n,su=new Jt,Fi=new Be,Oi=new wi;class ru extends Be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,su)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,li),po.copy(t.boundingBox).applyMatrix4(li),this.boundingBox.union(po)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,li),Oi.copy(t.boundingSphere).applyMatrix4(li),this.boundingSphere.union(Oi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),t.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,li),fo.multiplyMatrices(n,li),Fi.matrixWorld=fo,Fi.raycast(t,ps);for(let a=0,o=ps.length;a<o;a++){const l=ps[a];l.instanceId=r,l.object=this,e.push(l)}ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(i*this.count),i,this.count,Ea,Ze));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const fr=new F,au=new F,ou=new Lt;class On{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fr.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ou.getNormalMatrix(t),i=this.coplanarPoint(fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new wi,ms=new F;class Ra{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,a=new On){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],h=i[12],T=i[13],b=i[14],E=i[15];if(n[0].setComponents(l-r,d-c,m-p,E-h).normalize(),n[1].setComponents(l+r,d+c,m+p,E+h).normalize(),n[2].setComponents(l+a,d+u,m+g,E+T).normalize(),n[3].setComponents(l-a,d-u,m-g,E-T).normalize(),n[4].setComponents(l-o,d-f,m-x,E-b).normalize(),e===un)n[5].setComponents(l+o,d+f,m+x,E+b).normalize();else if(e===Ns)n[5].setComponents(o,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ca extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Os=new F,Bs=new F,mo=new Jt,Bi=new ml,gs=new wi,pr=new F,go=new F;class lu extends ue{constructor(t=new tn,e=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Os.fromBufferAttribute(e,i-1),Bs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Os.distanceTo(Bs);t.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;mo.copy(i).invert(),Bi.copy(t.ray).applyMatrix4(mo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const h=u.getX(x),T=u.getX(x+1),b=_s(this,t,Bi,l,h,T);b&&e.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),h=_s(this,t,Bi,l,x,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const h=_s(this,t,Bi,l,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=_s(this,t,Bi,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _s(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Os.fromBufferAttribute(a,i),Bs.fromBufferAttribute(a,r),e.distanceSqToSegment(Os,Bs,pr,go)>n)return;pr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(pr);if(!(l<t.near||l>t.far))return{distance:l,point:go.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const _o=new F,vo=new F;class bl extends lu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)_o.fromBufferAttribute(e,i),vo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_o.distanceTo(vo);t.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Tl extends Me{constructor(t,e,n,i,r,a,o,l,c,u=gi){if(u!==gi&&u!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gi&&(n=Wn),n===void 0&&u===Ei&&(n=Si),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vs=new F,xs=new F,mr=new F,Ms=new Oe;class cu extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ls*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:h}=Ms;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Ms.getNormal(mr),f[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(h.x*i)},${Math.round(h.y*i)},${Math.round(h.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const b=(T+1)%3,E=f[T],D=f[b],P=Ms[u[T]],w=Ms[u[b]],U=`${E}_${D}`,y=`${D}_${E}`;y in d&&d[y]?(mr.dot(d[y].normal)<=r&&(p.push(P.x,P.y,P.z),p.push(w.x,w.y,w.z)),d[y]=null):U in d||(d[U]={index0:c[T],index1:c[b],normal:mr.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];vs.fromBufferAttribute(o,x),xs.fromBufferAttribute(o,m),p.push(vs.x,vs.y,vs.z),p.push(xs.x,xs.y,xs.z)}this.setAttribute("position",new ze(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yi extends tn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const T=h*d-a;for(let b=0;b<c;b++){const E=b*f-r;g.push(E,-T,0),x.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const b=T+c*h,E=T+c*(h+1),D=T+1+c*(h+1),P=T+1+c*h;p.push(b,E,P),p.push(E,D,P)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uu extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hu extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pa extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class du extends Pa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gr=new Jt,xo=new F,Mo=new F;class fu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(xo),Mo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mo),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Al extends Sl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pu extends fu{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mu extends Pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new pu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gu extends Pa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _u extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yo(){return performance.now()}class xu extends bl{constructor(t=10,e=10,n=4473924,i=8947848){n=new Et(n),i=new Et(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=d===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new tn;u.setAttribute("position",new ze(l,3)),u.setAttribute("color",new ze(c,3));const f=new Ca({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function So(s,t,e,n){const i=Mu(n);switch(e){case sl:return s*t;case al:return s*t;case ol:return s*t*2;case Ea:return s*t/i.components*i.byteLength;case ba:return s*t/i.components*i.byteLength;case ll:return s*t*2/i.components*i.byteLength;case Ta:return s*t*2/i.components*i.byteLength;case rl:return s*t*3/i.components*i.byteLength;case qe:return s*t*4/i.components*i.byteLength;case Aa:return s*t*4/i.components*i.byteLength;case As:case ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Cs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:case Wr:return Math.max(s,16)*Math.max(t,8)/4;case Gr:case Vr:return Math.max(s,8)*Math.max(t,8)/2;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ps:case la:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cl:case ua:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ha:case da:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mu(s){switch(s){case fn:case el:return{byteLength:1,components:1};case Wi:case nl:case Xi:return{byteLength:2,components:1};case ya:case Sa:return{byteLength:2,components:4};case Wn:case Ma:case Ze:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function yu(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,th=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ph=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Su,alphahash_pars_fragment:Eu,alphamap_fragment:bu,alphamap_pars_fragment:Tu,alphatest_fragment:Au,alphatest_pars_fragment:wu,aomap_fragment:Ru,aomap_pars_fragment:Cu,batching_pars_vertex:Pu,batching_vertex:Lu,begin_vertex:Iu,beginnormal_vertex:Du,bsdfs:Uu,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:ku,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:Vu,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:$u,displacementmap_pars_vertex:Yu,displacementmap_vertex:ju,emissivemap_fragment:Ku,emissivemap_pars_fragment:Zu,colorspace_fragment:Ju,colorspace_pars_fragment:Qu,envmap_fragment:th,envmap_common_pars_fragment:eh,envmap_pars_fragment:nh,envmap_pars_vertex:ih,envmap_physical_pars_fragment:ph,envmap_vertex:sh,fog_vertex:rh,fog_pars_vertex:ah,fog_fragment:oh,fog_pars_fragment:lh,gradientmap_pars_fragment:ch,lightmap_pars_fragment:uh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:dh,lights_pars_begin:fh,lights_toon_fragment:mh,lights_toon_pars_fragment:gh,lights_phong_fragment:_h,lights_phong_pars_fragment:vh,lights_physical_fragment:xh,lights_physical_pars_fragment:Mh,lights_fragment_begin:yh,lights_fragment_maps:Sh,lights_fragment_end:Eh,logdepthbuf_fragment:bh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Ah,logdepthbuf_vertex:wh,map_fragment:Rh,map_pars_fragment:Ch,map_particle_fragment:Ph,map_particle_pars_fragment:Lh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Dh,morphinstance_vertex:Uh,morphcolor_vertex:Nh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:zh,normal_fragment_maps:kh,normal_pars_fragment:Gh,normal_pars_vertex:Hh,normal_vertex:Vh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:Yh,opaque_fragment:jh,packing:Kh,premultiplied_alpha_fragment:Zh,project_vertex:Jh,dithering_fragment:Qh,dithering_pars_fragment:td,roughnessmap_fragment:ed,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:sd,shadowmap_vertex:rd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:ud,specularmap_fragment:hd,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:yd,background_frag:Sd,backgroundCube_vert:Ed,backgroundCube_frag:bd,cube_vert:Td,cube_frag:Ad,depth_vert:wd,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Pd,equirect_vert:Ld,equirect_frag:Id,linedashed_vert:Dd,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:zd,meshmatcap_frag:kd,meshnormal_vert:Gd,meshnormal_frag:Hd,meshphong_vert:Vd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:$d,meshtoon_frag:Yd,points_vert:jd,points_frag:Kd,shadow_vert:Zd,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:tf},nt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},je={basic:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:xe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:xe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:xe([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:xe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:xe([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:xe([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:xe([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:xe([nt.lights,nt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};je.physical={uniforms:xe([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ys={r:0,b:0,g:0},Nn=new Qe,ef=new Jt;function nf(s,t,e,n,i,r,a){const o=new Et(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function x(b){let E=!1;const D=g(b);D===null?h(o,l):D&&D.isColor&&(h(D,1),E=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,E){const D=g(E);D&&(D.isCubeTexture||D.mapping===ks)?(u===void 0&&(u=new Be(new qn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ti(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Nn.copy(E.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(Nn)),u.material.toneMapped=Wt.getTransfer(D.colorSpace)!==jt,(f!==D||d!==D.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=D,d=D.version,p=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Be(new Yi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ti(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(D.colorSpace)!==jt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,E){b.getRGB(ys,yl(s)),n.buffers.color.setClear(ys.r,ys.g,ys.b,E,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:x,addToRenderList:m,dispose:T}}function sf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,R,V,z,Y){let j=!1;const X=f(z,V,R);r!==X&&(r=X,c(r.object)),j=p(M,z,V,Y),j&&g(M,z,V,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,R,V,z),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function f(M,R,V){const z=V.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let j=Y[R.id];j===void 0&&(j={},Y[R.id]=j);let X=j[z];return X===void 0&&(X=d(l()),j[z]=X),X}function d(M){const R=[],V=[],z=[];for(let Y=0;Y<e;Y++)R[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,V,z){const Y=r.attributes,j=R.attributes;let X=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){const ht=Y[G];let xt=j[G];if(xt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ht===void 0||ht.attribute!==xt||xt&&ht.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,R,V,z){const Y={},j=R.attributes;let X=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){let ht=j[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const xt={};xt.attribute=ht,ht&&ht.data&&(xt.data=ht.data),Y[G]=xt,X++}r.attributes=Y,r.attributesNum=X,r.index=z}function x(){const M=r.newAttributes;for(let R=0,V=M.length;R<V;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const V=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;V[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),Y[M]!==R&&(s.vertexAttribDivisor(M,R),Y[M]=R)}function T(){const M=r.newAttributes,R=r.enabledAttributes;for(let V=0,z=R.length;V<z;V++)R[V]!==M[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function b(M,R,V,z,Y,j,X){X===!0?s.vertexAttribIPointer(M,R,V,Y,j):s.vertexAttribPointer(M,R,V,z,Y,j)}function E(M,R,V,z){x();const Y=z.attributes,j=V.getAttributes(),X=R.defaultAttributeValues;for(const Z in j){const G=j[Z];if(G.location>=0){let rt=Y[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ht=rt.normalized,xt=rt.itemSize,Ut=t.get(rt);if(Ut===void 0)continue;const Kt=Ut.buffer,W=Ut.type,et=Ut.bytesPerElement,gt=W===s.INT||W===s.UNSIGNED_INT||rt.gpuType===Ma;if(rt.isInterleavedBufferAttribute){const at=rt.data,Tt=at.stride,Rt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)h(G.location+Nt,at.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)m(G.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Nt=0;Nt<G.locationSize;Nt++)b(G.location+Nt,xt/G.locationSize,W,ht,Tt*et,(Rt+xt/G.locationSize*Nt)*et,gt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)h(G.location+at,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let at=0;at<G.locationSize;at++)b(G.location+at,xt/G.locationSize,W,ht,xt*et,xt/G.locationSize*at*et,gt)}}else if(X!==void 0){const ht=X[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(G.location,ht);break;case 3:s.vertexAttrib3fv(G.location,ht);break;case 4:s.vertexAttrib4fv(G.location,ht);break;default:s.vertexAttrib1fv(G.location,ht)}}}}T()}function D(){U();for(const M in n){const R=n[M];for(const V in R){const z=R[V];for(const Y in z)u(z[Y].object),delete z[Y];delete R[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const V in R){const z=R[V];for(const Y in z)u(z[Y].object),delete z[Y];delete R[V]}delete n[M.id]}function w(M){for(const R in n){const V=n[R];if(V[M.id]===void 0)continue;const z=V[M.id];for(const Y in z)u(z[Y].object),delete z[Y];delete V[M.id]}}function U(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function rf(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(s.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function af(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==qe&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ze&&!U)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),h=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:D,maxSamples:P}}function of(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new On,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,b=T*4;let E=h.clippingState||null;l.value=E,E=u(g,d,b,p);for(let D=0;D!==b;++D)E[D]=e[D];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,E=p;b!==x;++b,E+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function lf(s){let t=new WeakMap;function e(a,o){return o===Or?a.mapping=Mi:o===Br&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const di=4,Eo=[.125,.215,.35,.446,.526,.582],kn=20,_r=new Al,bo=new Et;let vr=null,xr=0,Mr=0,yr=!1;const Bn=(1+Math.sqrt(5))/2,ci=1/Bn,To=[new F(-Bn,ci,0),new F(Bn,ci,0),new F(-ci,0,Bn),new F(ci,0,Bn),new F(0,Bn,-ci),new F(0,Bn,ci),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,xr,Mr),this._renderer.xr.enabled=yr,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Xi,format:qe,colorSpace:bi,depthBuffer:!1},i=wo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cf(r)),this._blurMaterial=uf(r,t,e)}return i}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bo),u.toneMapping=Tn,u.autoClear=!1;const p=new vl({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Be(new qn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(bo),x=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const b=this._cubeSize;Ss(i,T*b,h>2?b:0,b,b),u.setRenderTarget(i),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=To[(i-r-1)%To.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Be(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const h=[];let T=0;for(let w=0;w<kn;++w){const U=w/x,y=Math.exp(-U*U/2);h.push(y),w===0?T+=y:w<m&&(T+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const E=this._sizeLods[i],D=3*E*(i>b-di?i-b+di:0),P=4*(this._cubeSize-E);Ss(e,D,P,3*E,2*E),l.setRenderTarget(e),l.render(f,_r)}}function cf(s){const t=[],e=[],n=[];let i=s;const r=s-di+1+Eo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-di?l=Eo[a-s+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,T=new Float32Array(x*g*p),b=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let P=0;P<p;P++){const w=P%3*2/3-1,U=P>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];T.set(y,x*g*P),b.set(d,m*g*P);const M=[P,P,P,P,P,P];E.set(M,h*g*P)}const D=new tn;D.setAttribute("position",new $e(T,x)),D.setAttribute("uv",new $e(b,m)),D.setAttribute("faceIndex",new $e(E,h)),t.push(D),i>di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wo(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function uf(s,t,e){const n=new Float32Array(kn),i=new F(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ro(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Co(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Or||l===Br,u=l===Mi||l===yi;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ao(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Ao(s)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function df(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ui("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ff(s,t,e,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let b=0,E=T.length;b<E;b+=3){const D=T[b+0],P=T[b+1],w=T[b+2];d.push(D,P,P,w,w,D)}}else if(g!==void 0){const T=g.array;x=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const D=b+0,P=b+1,w=b+2;d.push(D,P,P,w,w,D)}}else return;const m=new(dl(d)?Ml:xl)(d,1);m.version=x;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function pf(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function f(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let h=0;for(let T=0;T<g;T++)h+=p[T]*x[T];e.update(h,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gf(s,t,e){const n=new WeakMap,i=new ae;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let D=o.attributes.position.count*E,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*P*4*f),U=new pl(w,D,P,f);U.type=Ze,U.needsUpdate=!0;const y=E*4;for(let R=0;R<f;R++){const V=h[R],z=T[R],Y=b[R],j=D*P*4*R;for(let X=0;X<V.count;X++){const Z=X*y;g===!0&&(i.fromBufferAttribute(V,X),w[j+Z+0]=i.x,w[j+Z+1]=i.y,w[j+Z+2]=i.z,w[j+Z+3]=0),x===!0&&(i.fromBufferAttribute(z,X),w[j+Z+4]=i.x,w[j+Z+5]=i.y,w[j+Z+6]=i.z,w[j+Z+7]=0),m===!0&&(i.fromBufferAttribute(Y,X),w[j+Z+8]=i.x,w[j+Z+9]=i.y,w[j+Z+10]=i.z,w[j+Z+11]=Y.itemSize===4?i.w:1)}}d={count:f,texture:U,size:new $t(D,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _f(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Rl=new Me,Po=new Tl(1,1),Cl=new pl,Pl=new zc,Ll=new El,Lo=[],Io=[],Do=new Float32Array(16),Uo=new Float32Array(9),No=new Float32Array(4);function Ci(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Lo[i];if(r===void 0&&(r=new Float32Array(i),Lo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=Io[t];e===void 0&&(e=new Int32Array(t),Io[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function Sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;No.set(n),s.uniformMatrix2fv(this.addr,!1,No),de(e,n)}}function Ef(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;Uo.set(n),s.uniformMatrix3fv(this.addr,!1,Uo),de(e,n)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;Do.set(n),s.uniformMatrix4fv(this.addr,!1,Do),de(e,n)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function Cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function Df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Po.compareFunction=hl,r=Po):r=Rl,e.setTexture2D(t||r,i)}function Uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pl,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ll,i)}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cl,i)}function Of(s){switch(s){case 5126:return vf;case 35664:return xf;case 35665:return Mf;case 35666:return yf;case 35674:return Sf;case 35675:return Ef;case 35676:return bf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return wf;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Ff}}function Bf(s,t){s.uniform1fv(this.addr,t)}function zf(s,t){const e=Ci(t,this.size,2);s.uniform2fv(this.addr,e)}function kf(s,t){const e=Ci(t,this.size,3);s.uniform3fv(this.addr,e)}function Gf(s,t){const e=Ci(t,this.size,4);s.uniform4fv(this.addr,e)}function Hf(s,t){const e=Ci(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vf(s,t){const e=Ci(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wf(s,t){const e=Ci(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xf(s,t){s.uniform1iv(this.addr,t)}function qf(s,t){s.uniform2iv(this.addr,t)}function $f(s,t){s.uniform3iv(this.addr,t)}function Yf(s,t){s.uniform4iv(this.addr,t)}function jf(s,t){s.uniform1uiv(this.addr,t)}function Kf(s,t){s.uniform2uiv(this.addr,t)}function Zf(s,t){s.uniform3uiv(this.addr,t)}function Jf(s,t){s.uniform4uiv(this.addr,t)}function Qf(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Rl,r[a])}function tp(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Pl,r[a])}function ep(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ll,r[a])}function np(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Cl,r[a])}function ip(s){switch(s){case 5126:return Bf;case 35664:return zf;case 35665:return kf;case 35666:return Gf;case 35674:return Hf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return $f;case 35669:case 35673:return Yf;case 5125:return jf;case 36294:return Kf;case 36295:return Zf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Of(e.type)}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Fo(s,t){s.seq.push(t),s.map[t.id]=t}function op(s,t,e){const n=s.name,i=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Fo(e,c===void 0?new sp(o,s,t):new rp(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new ap(o),Fo(e,f)),e=f}}}class Is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);op(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Oo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lp=37297;let cp=0;function up(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Bo=new Lt;function hp(s){Wt._getMatrix(Bo,Wt.workingColorSpace,s);const t=`mat3( ${Bo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Us:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+up(s.getShaderSource(t),a)}else return i}function dp(s,t){const e=hp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fp(s,t){let e;switch(t){case dc:e="Linear";break;case fc:e="Reinhard";break;case pc:e="Cineon";break;case Qo:e="ACESFilmic";break;case gc:e="AgX";break;case _c:e="Neutral";break;case mc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new F;function pp(){Wt.getLuminanceCoefficients(Es);const s=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function gp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _p(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Hi(s){return s!==""}function ko(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Go(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(s){return s.replace(vp,Mp)}const xp=new Map;function Mp(s,t){let e=Dt[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(s){return s.replace(yp,Sp)}function Sp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ep(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function bp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case yi:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ap(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case uc:t="ENVMAP_BLENDING_MIX";break;case hc:t="ENVMAP_BLENDING_ADD";break}return t}function wp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ep(e),c=bp(e),u=Tp(e),f=Ap(e),d=wp(e),p=mp(e),g=gp(r),x=i.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),h.length>0&&(h+=`
`)):(m=[Vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),h=[Vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,dp("linearToOutputTexel",e.outputColorSpace),pp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),a=ma(a),a=ko(a,e),a=Go(a,e),o=ma(o),o=ko(o,e),o=Go(o,e),a=Ho(a),o=Ho(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=T+m+a,E=T+h+o,D=Oo(i,i.VERTEX_SHADER,b),P=Oo(i,i.FRAGMENT_SHADER,E);i.attachShader(x,D),i.attachShader(x,P),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(R){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(x).trim(),z=i.getShaderInfoLog(D).trim(),Y=i.getShaderInfoLog(P).trim();let j=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,D,P);else{const Z=zo(i,D,"vertex"),G=zo(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Z+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:j,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:h}})}i.deleteShader(D),i.deleteShader(P),U=new Is(i,x),y=_p(i,x)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,lp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=P,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Cp++,this.code=t,this.usedTimes=0}}function Ip(s,t,e,n,i,r,a){const o=new gl,l=new Pp,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,V,z){const Y=V.fog,j=z.geometry,X=y.isMeshStandardMaterial?V.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),G=Z&&Z.mapping===ks?Z.image.height:null,rt=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=ht!==void 0?ht.length:0;let Ut=0;j.morphAttributes.position!==void 0&&(Ut=1),j.morphAttributes.normal!==void 0&&(Ut=2),j.morphAttributes.color!==void 0&&(Ut=3);let Kt,W,et,gt;if(rt){const Yt=je[rt];Kt=Yt.vertexShader,W=Yt.fragmentShader}else Kt=y.vertexShader,W=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,ee=!!y.map,kt=!!y.matcap,oe=!!Z,A=!!y.aoMap,Le=!!y.lightMap,Ot=!!y.bumpMap,Bt=!!y.normalMap,Mt=!!y.displacementMap,Qt=!!y.emissiveMap,vt=!!y.metalnessMap,S=!!y.roughnessMap,_=y.anisotropy>0,N=y.clearcoat>0,q=y.dispersion>0,K=y.iridescence>0,H=y.sheen>0,_t=y.transmission>0,ot=_&&!!y.anisotropyMap,dt=N&&!!y.clearcoatMap,Gt=N&&!!y.clearcoatNormalMap,tt=N&&!!y.clearcoatRoughnessMap,ft=K&&!!y.iridescenceMap,bt=K&&!!y.iridescenceThicknessMap,At=H&&!!y.sheenColorMap,pt=H&&!!y.sheenRoughnessMap,zt=!!y.specularMap,It=!!y.specularColorMap,Zt=!!y.specularIntensityMap,C=_t&&!!y.transmissionMap,it=_t&&!!y.thicknessMap,k=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,lt=!!y.alphaHash,Pt=!!y.extensions;let ie=Tn;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ie=s.toneMapping);const me={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:W,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:bi,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:kt,envMap:oe,envMapMode:oe&&Z.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:Le,bumpMap:Ot,normalMap:Bt,displacementMap:d&&Mt,emissiveMap:Qt,normalMapObjectSpace:Bt&&y.normalMapType===yc,normalMapTangentSpace:Bt&&y.normalMapType===ul,metalnessMap:vt,roughnessMap:S,anisotropy:_,anisotropyMap:ot,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:tt,dispersion:q,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:H,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:zt,specularColorMap:It,specularIntensityMap:Zt,transmission:_t,transmissionMap:C,thicknessMap:it,gradientMap:k,opaque:y.transparent===!1&&y.blending===mi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:lt,combine:y.combine,mapUv:ee&&x(y.map.channel),aoMapUv:A&&x(y.aoMap.channel),lightMapUv:Le&&x(y.lightMap.channel),bumpMapUv:Ot&&x(y.bumpMap.channel),normalMapUv:Bt&&x(y.normalMap.channel),displacementMapUv:Mt&&x(y.displacementMap.channel),emissiveMapUv:Qt&&x(y.emissiveMap.channel),metalnessMapUv:vt&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(y.sheenRoughnessMap.channel),specularMapUv:zt&&x(y.specularMap.channel),specularColorMapUv:It&&x(y.specularColorMap.channel),specularIntensityMapUv:Zt&&x(y.specularIntensityMap.channel),transmissionMapUv:C&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Bt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ee||$),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===jt,decodeVideoTextureEmissive:Qt&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(M,y),b(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const M=g[y.type];let R;if(M){const V=je[M];R=Zc.clone(V.uniforms)}else R=y.uniforms;return R}function D(y,M){let R;for(let V=0,z=u.length;V<z;V++){const Y=u[V];if(Y.cacheKey===M){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new Rp(s,M,y,r),u.push(R)),R}function P(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:D,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:U}}function Dp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Up(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,d,p,g,x,m){let h=s[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):e.push(h)}function l(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||Up),n.length>1&&n.sort(d||Wo),i.length>1&&i.sort(d||Wo)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Np(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xo,s.set(n,[a])):i>=r.length?(a=new Xo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Et};break;case"SpotLight":e={position:new F,direction:new F,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Op(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bp=0;function zp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kp(s){const t=new Fp,e=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new Jt,a=new Jt;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,T=0,b=0,E=0,D=0,P=0,w=0;c.sort(zp);for(let y=0,M=c.length;y<M;y++){const R=c[y],V=R.color,z=R.intensity,Y=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*z,f+=V.g*z,d+=V.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);w++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=X,p++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[x]=X;const Z=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,Z.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,E++}x++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(V).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Z=R.shadow,G=e.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[h]=X,h++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==D||U.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=D,U.numLightProbes=w,n.version=Bp++)}function l(c,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const b=c[h];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(b.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function qo(s){const t=new kp(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new qo(s),t.set(i,[o])):r>=a.length?(o=new qo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(s,t,e){let n=new Ra;const i=new $t,r=new $t,a=new ae,o=new uu({depthPacking:Mc}),l=new hu,c={},u=e.maxTextureSize,f={[wn]:be,[be]:wn,[cn]:cn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Hp,fragmentShader:Vp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let h=this.type;this.render=function(P,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=h!==ln&&this.type===ln,Y=h===ln&&this.type!==ln;for(let j=0,X=P.length;j<X;j++){const Z=P[j],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||z===!0||Y===!0){const xt=this.type!==ln?{minFilter:Pe,magFilter:Pe}:{};G.map!==null&&G.map.dispose(),G.map=new Xn(i.x,i.y,xt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ht=G.getViewportCount();for(let xt=0;xt<ht;xt++){const Ut=G.getViewport(xt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),V.viewport(a),G.updateMatrices(Z,xt),n=G.getFrustum(),E(w,U,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===ln&&T(G,U),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,R)};function T(P,w){const U=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(w,null,U,d,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(w,null,U,p,x,null)}function b(P,w,U,y){let M=null;const R=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,z=w.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let j=Y[z];j===void 0&&(j=M.clone(),Y[z]=j,w.addEventListener("dispose",D)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,y===ln?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=s.properties.get(M);V.light=U}return M}function E(P,w,U,y,M){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ln)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const z=t.update(P),Y=P.material;if(Array.isArray(Y)){const j=z.groups;for(let X=0,Z=j.length;X<Z;X++){const G=j[X],rt=Y[G.materialIndex];if(rt&&rt.visible){const ht=b(P,rt,y,M);P.onBeforeShadow(s,P,w,U,z,ht,G),s.renderBufferDirect(U,null,z,ht,P,G),P.onAfterShadow(s,P,w,U,z,ht,G)}}}else if(Y.visible){const j=b(P,Y,y,M);P.onBeforeShadow(s,P,w,U,z,j,null),s.renderBufferDirect(U,null,z,j,P,null),P.onAfterShadow(s,P,w,U,z,j,null)}}const V=P.children;for(let z=0,Y=V.length;z<Y;z++)E(V[z],w,U,y,M)}function D(P){P.target.removeEventListener("dispose",D);for(const U in c){const y=c[U],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Xp={[Pr]:Lr,[Ir]:Nr,[Dr]:Fr,[xi]:Ur,[Lr]:Pr,[Nr]:Ir,[Fr]:Dr,[Ur]:xi};function qp(s,t){function e(){let C=!1;const it=new ae;let k=null;const $=new ae(0,0,0,0);return{setMask:function(ct){k!==ct&&!C&&(s.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){C=ct},setClear:function(ct,lt,Pt,ie,me){me===!0&&(ct*=ie,lt*=ie,Pt*=ie),it.set(ct,lt,Pt,ie),$.equals(it)===!1&&(s.clearColor(ct,lt,Pt,ie),$.copy(it))},reset:function(){C=!1,k=null,$.set(-1,0,0,0)}}}function n(){let C=!1,it=!1,k=null,$=null,ct=null;return{setReversed:function(lt){if(it!==lt){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const ie=ct;ct=null,this.setClear(ie)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(lt){k!==lt&&!C&&(s.depthMask(lt),k=lt)},setFunc:function(lt){if(it&&(lt=Xp[lt]),$!==lt){switch(lt){case Pr:s.depthFunc(s.NEVER);break;case Lr:s.depthFunc(s.ALWAYS);break;case Ir:s.depthFunc(s.LESS);break;case xi:s.depthFunc(s.LEQUAL);break;case Dr:s.depthFunc(s.EQUAL);break;case Ur:s.depthFunc(s.GEQUAL);break;case Nr:s.depthFunc(s.GREATER);break;case Fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=lt}},setLocked:function(lt){C=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),s.clearDepth(lt),ct=lt)},reset:function(){C=!1,k=null,$=null,ct=null,it=!1}}}function i(){let C=!1,it=null,k=null,$=null,ct=null,lt=null,Pt=null,ie=null,me=null;return{setTest:function(Yt){C||(Yt?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Yt){it!==Yt&&!C&&(s.stencilMask(Yt),it=Yt)},setFunc:function(Yt,ke,en){(k!==Yt||$!==ke||ct!==en)&&(s.stencilFunc(Yt,ke,en),k=Yt,$=ke,ct=en)},setOp:function(Yt,ke,en){(lt!==Yt||Pt!==ke||ie!==en)&&(s.stencilOp(Yt,ke,en),lt=Yt,Pt=ke,ie=en)},setLocked:function(Yt){C=Yt},setClear:function(Yt){me!==Yt&&(s.clearStencil(Yt),me=Yt)},reset:function(){C=!1,it=null,k=null,$=null,ct=null,lt=null,Pt=null,ie=null,me=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,b=null,E=null,D=null,P=null,w=new Et(0,0,0),U=0,y=!1,M=null,R=null,V=null,z=null,Y=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let rt=null,ht={};const xt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Kt=new ae().fromArray(xt),W=new ae().fromArray(Ut);function et(C,it,k,$){const ct=new Uint8Array(4),lt=s.createTexture();s.bindTexture(C,lt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<k;Pt++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(it+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return lt}const gt={};gt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(xi),Ot(!1),Bt(Ga),at(s.CULL_FACE),A(bn);function at(C){u[C]!==!0&&(s.enable(C),u[C]=!0)}function Tt(C){u[C]!==!1&&(s.disable(C),u[C]=!1)}function Rt(C,it){return f[C]!==it?(s.bindFramebuffer(C,it),f[C]=it,C===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=it),C===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Nt(C,it){let k=p,$=!1;if(C){k=d.get(it),k===void 0&&(k=[],d.set(it,k));const ct=C.textures;if(k.length!==ct.length||k[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Pt=ct.length;lt<Pt;lt++)k[lt]=s.COLOR_ATTACHMENT0+lt;k.length=ct.length,$=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,$=!0);$&&s.drawBuffers(k)}function ee(C){return g!==C?(s.useProgram(C),g=C,!0):!1}const kt={[zn]:s.FUNC_ADD,[$l]:s.FUNC_SUBTRACT,[Yl]:s.FUNC_REVERSE_SUBTRACT};kt[jl]=s.MIN,kt[Kl]=s.MAX;const oe={[Zl]:s.ZERO,[Jl]:s.ONE,[Ql]:s.SRC_COLOR,[Rr]:s.SRC_ALPHA,[rc]:s.SRC_ALPHA_SATURATE,[ic]:s.DST_COLOR,[ec]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[Cr]:s.ONE_MINUS_SRC_ALPHA,[sc]:s.ONE_MINUS_DST_COLOR,[nc]:s.ONE_MINUS_DST_ALPHA,[ac]:s.CONSTANT_COLOR,[oc]:s.ONE_MINUS_CONSTANT_COLOR,[lc]:s.CONSTANT_ALPHA,[cc]:s.ONE_MINUS_CONSTANT_ALPHA};function A(C,it,k,$,ct,lt,Pt,ie,me,Yt){if(C===bn){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),C!==ql){if(C!==m||Yt!==y){if((h!==zn||E!==zn)&&(s.blendEquation(s.FUNC_ADD),h=zn,E=zn),Yt)switch(C){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,b=null,D=null,P=null,w.set(0,0,0),U=0,m=C,y=Yt}return}ct=ct||it,lt=lt||k,Pt=Pt||$,(it!==h||ct!==E)&&(s.blendEquationSeparate(kt[it],kt[ct]),h=it,E=ct),(k!==T||$!==b||lt!==D||Pt!==P)&&(s.blendFuncSeparate(oe[k],oe[$],oe[lt],oe[Pt]),T=k,b=$,D=lt,P=Pt),(ie.equals(w)===!1||me!==U)&&(s.blendColor(ie.r,ie.g,ie.b,me),w.copy(ie),U=me),m=C,y=!1}function Le(C,it){C.side===cn?Tt(s.CULL_FACE):at(s.CULL_FACE);let k=C.side===be;it&&(k=!k),Ot(k),C.blending===mi&&C.transparent===!1?A(bn):A(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const $=C.stencilWrite;o.setTest($),$&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Qt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(C){M!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),M=C)}function Bt(C){C!==Wl?(at(s.CULL_FACE),C!==R&&(C===Ga?s.cullFace(s.BACK):C===Xl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),R=C}function Mt(C){C!==V&&(X&&s.lineWidth(C),V=C)}function Qt(C,it,k){C?(at(s.POLYGON_OFFSET_FILL),(z!==it||Y!==k)&&(s.polygonOffset(it,k),z=it,Y=k)):Tt(s.POLYGON_OFFSET_FILL)}function vt(C){C?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function S(C){C===void 0&&(C=s.TEXTURE0+j-1),rt!==C&&(s.activeTexture(C),rt=C)}function _(C,it,k){k===void 0&&(rt===null?k=s.TEXTURE0+j-1:k=rt);let $=ht[k];$===void 0&&($={type:void 0,texture:void 0},ht[k]=$),($.type!==C||$.texture!==it)&&(rt!==k&&(s.activeTexture(k),rt=k),s.bindTexture(C,it||gt[C]),$.type=C,$.texture=it)}function N(){const C=ht[rt];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(C){Kt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Kt.copy(C))}function pt(C){W.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),W.copy(C))}function zt(C,it){let k=c.get(it);k===void 0&&(k=new WeakMap,c.set(it,k));let $=k.get(C);$===void 0&&($=s.getUniformBlockIndex(it,C.name),k.set(C,$))}function It(C,it){const $=c.get(it).get(C);l.get(it)!==$&&(s.uniformBlockBinding(it,$,C.__bindingPointIndex),l.set(it,$))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},rt=null,ht={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,b=null,E=null,D=null,P=null,w=new Et(0,0,0),U=0,y=!1,M=null,R=null,V=null,z=null,Y=null,Kt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Tt,bindFramebuffer:Rt,drawBuffers:Nt,useProgram:ee,setBlending:A,setMaterial:Le,setFlipSided:Ot,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:Qt,setScissorTest:vt,activeTexture:S,bindTexture:_,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:ft,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:tt,texSubImage2D:H,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:At,viewport:pt,reset:Zt}}function $p(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Fs("canvas")}function x(S,_,N){let q=1;const K=vt(S);if((K.width>N||K.height>N)&&(q=N/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(q*K.width),_t=Math.floor(q*K.height);f===void 0&&(f=g(H,_t));const ot=_?g(H,_t):f;return ot.width=H,ot.height=_t,ot.getContext("2d").drawImage(S,0,0,H,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+_t+")."),ot}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){s.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?s.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(S,_,N,q,K=!1){if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=_;if(_===s.RED&&(N===s.FLOAT&&(H=s.R32F),N===s.HALF_FLOAT&&(H=s.R16F),N===s.UNSIGNED_BYTE&&(H=s.R8)),_===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.R8UI),N===s.UNSIGNED_SHORT&&(H=s.R16UI),N===s.UNSIGNED_INT&&(H=s.R32UI),N===s.BYTE&&(H=s.R8I),N===s.SHORT&&(H=s.R16I),N===s.INT&&(H=s.R32I)),_===s.RG&&(N===s.FLOAT&&(H=s.RG32F),N===s.HALF_FLOAT&&(H=s.RG16F),N===s.UNSIGNED_BYTE&&(H=s.RG8)),_===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RG8UI),N===s.UNSIGNED_SHORT&&(H=s.RG16UI),N===s.UNSIGNED_INT&&(H=s.RG32UI),N===s.BYTE&&(H=s.RG8I),N===s.SHORT&&(H=s.RG16I),N===s.INT&&(H=s.RG32I)),_===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGB8UI),N===s.UNSIGNED_SHORT&&(H=s.RGB16UI),N===s.UNSIGNED_INT&&(H=s.RGB32UI),N===s.BYTE&&(H=s.RGB8I),N===s.SHORT&&(H=s.RGB16I),N===s.INT&&(H=s.RGB32I)),_===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),N===s.UNSIGNED_INT&&(H=s.RGBA32UI),N===s.BYTE&&(H=s.RGBA8I),N===s.SHORT&&(H=s.RGBA16I),N===s.INT&&(H=s.RGBA32I)),_===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),_===s.RGBA){const _t=K?Us:Wt.getTransfer(q);N===s.FLOAT&&(H=s.RGBA32F),N===s.HALF_FLOAT&&(H=s.RGBA16F),N===s.UNSIGNED_BYTE&&(H=_t===jt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function E(S,_){let N;return S?_===null||_===Wn||_===Si?N=s.DEPTH24_STENCIL8:_===Ze?N=s.DEPTH32F_STENCIL8:_===Wi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===Si?N=s.DEPTH_COMPONENT24:_===Ze?N=s.DEPTH_COMPONENT32F:_===Wi&&(N=s.DEPTH_COMPONENT16),N}function D(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pe&&S.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function P(S){const _=S.target;_.removeEventListener("dispose",P),U(_),_.isVideoTexture&&u.delete(_)}function w(S){const _=S.target;_.removeEventListener("dispose",w),M(_)}function U(S){const _=n.get(S);if(_.__webglInit===void 0)return;const N=S.source,q=d.get(N);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(S),Object.keys(q).length===0&&d.delete(N)}n.remove(S)}function y(S){const _=n.get(S);s.deleteTexture(_.__webglTexture);const N=S.source,q=d.get(N);delete q[_.__cacheKey],a.memory.textures--}function M(S){const _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[q][K]);else s.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)s.deleteFramebuffer(_.__webglFramebuffer[q]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=S.textures;for(let q=0,K=N.length;q<K;q++){const H=n.get(N[q]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(S)}let R=0;function V(){R=0}function z(){const S=R;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),R+=1,S}function Y(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function j(S,_){const N=n.get(S);if(S.isVideoTexture&&Mt(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,S,_);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+_)}function X(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){W(N,S,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+_)}function Z(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){W(N,S,_);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+_)}function G(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){et(N,S,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+_)}const rt={[zr]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},ht={[Pe]:s.NEAREST,[vc]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[qs]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},xt={[Sc]:s.NEVER,[Rc]:s.ALWAYS,[Ec]:s.LESS,[hl]:s.LEQUAL,[bc]:s.EQUAL,[wc]:s.GEQUAL,[Tc]:s.GREATER,[Ac]:s.NOTEQUAL};function Ut(S,_){if(_.type===Ze&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===qs||_.magFilter===Zi||_.magFilter===Hn||_.minFilter===Ke||_.minFilter===qs||_.minFilter===Zi||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(S,s.TEXTURE_WRAP_S,rt[_.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,rt[_.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,rt[_.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,ht[_.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pe||_.minFilter!==Zi&&_.minFilter!==Hn||_.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(S,_){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",P));const q=_.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const H=Y(_);if(H!==S.__cacheKey){K[H]===void 0&&(K[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[H].usedTimes++;const _t=K[S.__cacheKey];_t!==void 0&&(K[S.__cacheKey].usedTimes--,_t.usedTimes===0&&y(_)),S.__cacheKey=H,S.__webglTexture=K[H].texture}return N}function W(S,_,N){let q=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=s.TEXTURE_3D);const K=Kt(S,_),H=_.source;e.bindTexture(q,S.__webglTexture,s.TEXTURE0+N);const _t=n.get(H);if(H.version!==_t.__version||K===!0){e.activeTexture(s.TEXTURE0+N);const ot=Wt.getPrimaries(Wt.workingColorSpace),dt=_.colorSpace===Sn?null:Wt.getPrimaries(_.colorSpace),Gt=_.colorSpace===Sn||ot===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let tt=x(_.image,!1,i.maxTextureSize);tt=Qt(_,tt);const ft=r.convert(_.format,_.colorSpace),bt=r.convert(_.type);let At=b(_.internalFormat,ft,bt,_.colorSpace,_.isVideoTexture);Ut(q,_);let pt;const zt=_.mipmaps,It=_.isVideoTexture!==!0,Zt=_t.__version===void 0||K===!0,C=H.dataReady,it=D(_,tt);if(_.isDepthTexture)At=E(_.format===Ei,_.type),Zt&&(It?e.texStorage2D(s.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,ft,bt,null));else if(_.isDataTexture)if(zt.length>0){It&&Zt&&e.texStorage2D(s.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let k=0,$=zt.length;k<$;k++)pt=zt[k],It?C&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(s.TEXTURE_2D,k,At,pt.width,pt.height,0,ft,bt,pt.data);_.generateMipmaps=!1}else It?(Zt&&e.texStorage2D(s.TEXTURE_2D,it,At,tt.width,tt.height),C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,bt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,ft,bt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,At,zt[0].width,zt[0].height,tt.depth);for(let k=0,$=zt.length;k<$;k++)if(pt=zt[k],_.format!==qe)if(ft!==null)if(It){if(C)if(_.layerUpdates.size>0){const ct=So(pt.width,pt.height,_.format,_.type);for(const lt of _.layerUpdates){const Pt=pt.data.subarray(lt*ct/pt.data.BYTES_PER_ELEMENT,(lt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,lt,pt.width,pt.height,1,ft,Pt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,At,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?C&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,tt.depth,ft,bt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,k,At,pt.width,pt.height,tt.depth,0,ft,bt,pt.data)}else{It&&Zt&&e.texStorage2D(s.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let k=0,$=zt.length;k<$;k++)pt=zt[k],_.format!==qe?ft!==null?It?C&&e.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,k,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?C&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(s.TEXTURE_2D,k,At,pt.width,pt.height,0,ft,bt,pt.data)}else if(_.isDataArrayTexture)if(It){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,At,tt.width,tt.height,tt.depth),C)if(_.layerUpdates.size>0){const k=So(tt.width,tt.height,_.format,_.type);for(const $ of _.layerUpdates){const ct=tt.data.subarray($*k/tt.data.BYTES_PER_ELEMENT,($+1)*k/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,ft,bt,ct)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(_.isData3DTexture)It?(Zt&&e.texStorage3D(s.TEXTURE_3D,it,At,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(_.isFramebufferTexture){if(Zt)if(It)e.texStorage2D(s.TEXTURE_2D,it,At,tt.width,tt.height);else{let k=tt.width,$=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(s.TEXTURE_2D,ct,At,k,$,0,ft,bt,null),k>>=1,$>>=1}}else if(zt.length>0){if(It&&Zt){const k=vt(zt[0]);e.texStorage2D(s.TEXTURE_2D,it,At,k.width,k.height)}for(let k=0,$=zt.length;k<$;k++)pt=zt[k],It?C&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,ft,bt,pt):e.texImage2D(s.TEXTURE_2D,k,At,ft,bt,pt);_.generateMipmaps=!1}else if(It){if(Zt){const k=vt(tt);e.texStorage2D(s.TEXTURE_2D,it,At,k.width,k.height)}C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,bt,tt)}else e.texImage2D(s.TEXTURE_2D,0,At,ft,bt,tt);m(_)&&h(q),_t.__version=H.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function et(S,_,N){if(_.image.length!==6)return;const q=Kt(S,_),K=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+N);const H=n.get(K);if(K.version!==H.__version||q===!0){e.activeTexture(s.TEXTURE0+N);const _t=Wt.getPrimaries(Wt.workingColorSpace),ot=_.colorSpace===Sn?null:Wt.getPrimaries(_.colorSpace),dt=_.colorSpace===Sn||_t===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Gt&&!tt?ft[$]=x(_.image[$],!0,i.maxCubemapSize):ft[$]=tt?_.image[$].image:_.image[$],ft[$]=Qt(_,ft[$]);const bt=ft[0],At=r.convert(_.format,_.colorSpace),pt=r.convert(_.type),zt=b(_.internalFormat,At,pt,_.colorSpace),It=_.isVideoTexture!==!0,Zt=H.__version===void 0||q===!0,C=K.dataReady;let it=D(_,bt);Ut(s.TEXTURE_CUBE_MAP,_);let k;if(Gt){It&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,zt,bt.width,bt.height);for(let $=0;$<6;$++){k=ft[$].mipmaps;for(let ct=0;ct<k.length;ct++){const lt=k[ct];_.format!==qe?At!==null?It?C&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,At,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,At,pt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,zt,lt.width,lt.height,0,At,pt,lt.data)}}}else{if(k=_.mipmaps,It&&Zt){k.length>0&&it++;const $=vt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,zt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){It?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,At,pt,ft[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,ft[$].width,ft[$].height,0,At,pt,ft[$].data);for(let ct=0;ct<k.length;ct++){const Pt=k[ct].image[$].image;It?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Pt.width,Pt.height,At,pt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,zt,Pt.width,Pt.height,0,At,pt,Pt.data)}}else{It?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,pt,ft[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,At,pt,ft[$]);for(let ct=0;ct<k.length;ct++){const lt=k[ct];It?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,At,pt,lt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,zt,At,pt,lt.image[$])}}}m(_)&&h(s.TEXTURE_CUBE_MAP),H.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function gt(S,_,N,q,K,H){const _t=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),dt=b(N.internalFormat,_t,ot,N.colorSpace),Gt=n.get(_),tt=n.get(N);if(tt.__renderTarget=_,!Gt.__hasExternalTextures){const ft=Math.max(1,_.width>>H),bt=Math.max(1,_.height>>H);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,H,dt,ft,bt,_.depth,0,_t,ot,null):e.texImage2D(K,H,dt,ft,bt,0,_t,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,tt.__webglTexture,0,Ot(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,tt.__webglTexture,H),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(S,_,N){if(s.bindRenderbuffer(s.RENDERBUFFER,S),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,H=E(_.stencilBuffer,K),_t=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Ot(_);Bt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,H,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,H,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,H,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,S)}else{const q=_.textures;for(let K=0;K<q.length;K++){const H=q[K],_t=r.convert(H.format,H.colorSpace),ot=r.convert(H.type),dt=b(H.internalFormat,_t,ot,H.colorSpace),Gt=Ot(_);N&&Bt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,dt,_.width,_.height):Bt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,dt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,dt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const K=q.__webglTexture,H=Ot(_);if(_.depthTexture.format===gi)Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(_.depthTexture.format===Ei)Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(S){const _=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const q=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,S)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=s.createRenderbuffer(),at(_.__webglDepthbuffer[q],S,!1);else{const K=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,H)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),at(_.__webglDepthbuffer,S,!1);else{const q=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(S,_,N){const q=n.get(S);_!==void 0&&gt(q.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Rt(S)}function ee(S){const _=S.texture,N=n.get(S),q=n.get(_);S.addEventListener("dispose",w);const K=S.textures,H=S.isWebGLCubeRenderTarget===!0,_t=K.length>1;if(_t||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=_.version,a.memory.textures++),H){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let dt=0;dt<_.mipmaps.length;dt++)N.__webglFramebuffer[ot][dt]=s.createFramebuffer()}else N.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)N.__webglFramebuffer[ot]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(_t)for(let ot=0,dt=K.length;ot<dt;ot++){const Gt=n.get(K[ot]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(S.samples>0&&Bt(S)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const dt=K[ot];N.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);const Gt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),ft=b(dt.internalFormat,Gt,tt,dt.colorSpace,S.isXRRenderTarget===!0),bt=Ot(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ft,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),at(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(N.__webglFramebuffer[ot][dt],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else gt(N.__webglFramebuffer[ot],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&h(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,dt=K.length;ot<dt;ot++){const Gt=K[ot],tt=n.get(Gt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Ut(s.TEXTURE_2D,Gt),gt(N.__webglFramebuffer,S,Gt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Gt)&&h(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ot=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Ut(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(N.__webglFramebuffer[dt],S,_,s.COLOR_ATTACHMENT0,ot,dt);else gt(N.__webglFramebuffer,S,_,s.COLOR_ATTACHMENT0,ot,0);m(_)&&h(ot),e.unbindTexture()}S.depthBuffer&&Rt(S)}function kt(S){const _=S.textures;for(let N=0,q=_.length;N<q;N++){const K=_[N];if(m(K)){const H=T(S),_t=n.get(K).__webglTexture;e.bindTexture(H,_t),h(H),e.unbindTexture()}}}const oe=[],A=[];function Le(S){if(S.samples>0){if(Bt(S)===!1){const _=S.textures,N=S.width,q=S.height;let K=s.COLOR_BUFFER_BIT;const H=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(S),ot=_.length>1;if(ot)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Gt=n.get(_[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,N,q,0,0,N,q,K,s.NEAREST),l===!0&&(oe.length=0,A.length=0,oe.push(s.COLOR_ATTACHMENT0+dt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(oe.push(H),A.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Gt=n.get(_[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Ot(S){return Math.min(i.maxSamples,S.samples)}function Bt(S){const _=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Mt(S){const _=a.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function Qt(S,_){const N=S.colorSpace,q=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==bi&&N!==Sn&&(Wt.getTransfer(N)===jt?(q!==qe||K!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function vt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Bt}function Yp(s,t){function e(n,i=Sn){let r;const a=Wt.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===ya)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===el)return s.BYTE;if(n===nl)return s.SHORT;if(n===Wi)return s.UNSIGNED_SHORT;if(n===Ma)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===Ze)return s.FLOAT;if(n===Xi)return s.HALF_FLOAT;if(n===sl)return s.ALPHA;if(n===rl)return s.RGB;if(n===qe)return s.RGBA;if(n===al)return s.LUMINANCE;if(n===ol)return s.LUMINANCE_ALPHA;if(n===gi)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===Ea)return s.RED;if(n===ba)return s.RED_INTEGER;if(n===ll)return s.RG;if(n===Ta)return s.RG_INTEGER;if(n===Aa)return s.RGBA_INTEGER;if(n===As||n===ws||n===Rs||n===Cs)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Hr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===$r)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$r)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yr||n===jr||n===Kr||n===Zr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ua||n===ha||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const jp={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Me,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends Ai{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const x=new Jp,m=e.getContextAttributes();let h=null,T=null;const b=[],E=[],D=new $t;let P=null;const w=new Fe;w.viewport=new ae;const U=new Fe;U.viewport=new ae;const y=[w,U],M=new _u;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=b[W];return et===void 0&&(et=new Er,b[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=b[W];return et===void 0&&(et=new Er,b[W]=et),et.getGripSpace()},this.getHand=function(W){let et=b[W];return et===void 0&&(et=new Er,b[W]=et),et.getHandSpace()};function z(W){const et=E.indexOf(W.inputSource);if(et===-1)return;const gt=b[et];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||a),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",j);for(let W=0;W<b.length;W++){const et=E[W];et!==null&&(E[W]=null,b[W].disconnect(et))}R=null,V=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,i=null,T=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(h=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let gt=null,at=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Ei:gi,at=m.stencil?Si:Wn);const Rt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Xn(d.textureWidth,d.textureHeight,{format:qe,type:fn,depthTexture:new Tl(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Xn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let et=0;et<W.removed.length;et++){const gt=W.removed[et],at=E.indexOf(gt);at>=0&&(E[at]=null,b[at].disconnect(gt))}for(let et=0;et<W.added.length;et++){const gt=W.added[et];let at=E.indexOf(gt);if(at===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=E.length){E.push(gt),at=Rt;break}else if(E[Rt]===null){E[Rt]=gt,at=Rt;break}if(at===-1)break}const Tt=b[at];Tt&&Tt.connect(gt)}}const X=new F,Z=new F;function G(W,et,gt){X.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const at=X.distanceTo(Z),Tt=et.projectionMatrix.elements,Rt=gt.projectionMatrix.elements,Nt=Tt[14]/(Tt[10]-1),ee=Tt[14]/(Tt[10]+1),kt=(Tt[9]+1)/Tt[5],oe=(Tt[9]-1)/Tt[5],A=(Tt[8]-1)/Tt[0],Le=(Rt[8]+1)/Rt[0],Ot=Nt*A,Bt=Nt*Le,Mt=at/(-A+Le),Qt=Mt*-A;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Qt),W.translateZ(Mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const vt=Nt+Mt,S=ee+Mt,_=Ot-Qt,N=Bt+(at-Qt),q=kt*ee/S*vt,K=oe*ee/S*vt;W.projectionMatrix.makePerspective(_,N,q,K,vt,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function rt(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let et=W.near,gt=W.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),M.near=U.near=w.near=et,M.far=U.far=w.far=gt,(R!==M.near||V!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,V=M.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const at=W.parent,Tt=M.cameras;rt(M,at);for(let Rt=0;Rt<Tt.length;Rt++)rt(Tt[Rt],at);Tt.length===2?G(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ht(W,M,at)};function ht(W,et,gt){gt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let xt=null;function Ut(W,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let at=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Rt=0;Rt<gt.length;Rt++){const Nt=gt[Rt];let ee=null;if(p!==null)ee=p.getViewport(Nt);else{const oe=f.getViewSubImage(d,Nt);ee=oe.viewport,Rt===0&&(t.setRenderTargetTextures(T,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(T))}let kt=y[Rt];kt===void 0&&(kt=new Fe,kt.layers.enable(Rt),kt.viewport=new ae,y[Rt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ee.x,ee.y,ee.width,ee.height),Rt===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(kt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Rt=f.getDepthInformation(gt[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let gt=0;gt<b.length;gt++){const at=E[gt],Tt=b[gt];at!==null&&Tt!==void 0&&Tt.update(at,et,c||a)}xt&&xt(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Kt=new wl;Kt.setAnimationLoop(Ut),this.setAnimationLoop=function(W){xt=W},this.dispose=function(){}}}const Fn=new Qe,tm=new Jt;function em(s,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,yl(s)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,T,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,T,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===be&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===be&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),b=T.envMap,E=T.envMapRotation;b&&(m.envMap.value=b,Fn.copy(E),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Fn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=b*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===be&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const E=b.program;n.uniformBlockBinding(T,E)}function c(T,b){let E=i[T.id];E===void 0&&(g(T),E=u(T),i[T.id]=E,T.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(T,D);const P=t.render.frame;r[T.id]!==P&&(d(T),r[T.id]=P)}function u(T){const b=f();T.__bindingPointIndex=b;const E=s.createBuffer(),D=T.__size,P=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,D,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=i[T.id],E=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let P=0,w=E.length;P<w;P++){const U=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,M=U.length;y<M;y++){const R=U[y];if(p(R,P,y,D)===!0){const V=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let j=0;j<z.length;j++){const X=z[j],Z=x(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,V+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,b,E,D){const P=T.value,w=b+"_"+E;if(D[w]===void 0)return typeof P=="number"||typeof P=="boolean"?D[w]=P:D[w]=P.clone(),!0;{const U=D[w];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return D[w]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(T){const b=T.uniforms;let E=0;const D=16;for(let w=0,U=b.length;w<U;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,R=y.length;M<R;M++){const V=y[M],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,j=z.length;Y<j;Y++){const X=z[Y],Z=x(X),G=E%D,rt=G%Z.boundary,ht=G+rt;E+=rt,ht!==0&&D-ht<Z.storage&&(E+=D-ht),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=Z.storage}}}const P=E%D;return P>0&&(E+=D-P),T.__size=E,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function h(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:h}}class im{constructor(t={}){const{canvas:e=Pc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Tn,this.toneMappingExposure=1;const E=this;let D=!1,P=0,w=0,U=null,y=-1,M=null;const R=new ae,V=new ae;let z=null;const Y=new Et(0);let j=0,X=e.width,Z=e.height,G=1,rt=null,ht=null;const xt=new ae(0,0,X,Z),Ut=new ae(0,0,X,Z);let Kt=!1;const W=new Ra;let et=!1,gt=!1;this.transmissionResolutionScale=1;const at=new Jt,Tt=new Jt,Rt=new F,Nt=new ae,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function oe(){return U===null?G:1}let A=n;function Le(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),A===null){const L="webgl2";if(A=Le(L,v),A===null)throw Le(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ot,Bt,Mt,Qt,vt,S,_,N,q,K,H,_t,ot,dt,Gt,tt,ft,bt,At,pt,zt,It,Zt,C;function it(){Ot=new df(A),Ot.init(),It=new Yp(A,Ot),Bt=new af(A,Ot,t,It),Mt=new qp(A,Ot),Bt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Qt=new mf(A),vt=new Dp,S=new $p(A,Ot,Mt,vt,Bt,It,Qt),_=new lf(E),N=new hf(E),q=new yu(A),Zt=new sf(A,q),K=new ff(A,q,Qt,Zt),H=new _f(A,K,q,Qt),At=new gf(A,Bt,S),tt=new of(vt),_t=new Ip(E,_,N,Ot,Bt,Zt,tt),ot=new em(E,vt),dt=new Np,Gt=new Gp(Ot),bt=new nf(E,_,N,Mt,H,p,l),ft=new Wp(E,H,Bt),C=new nm(A,Qt,Bt,Mt),pt=new rf(A,Ot,Qt),zt=new pf(A,Ot,Qt),Qt.programs=_t.programs,E.capabilities=Bt,E.extensions=Ot,E.properties=vt,E.renderLists=dt,E.shadowMap=ft,E.state=Mt,E.info=Qt}it();const k=new Qp(E,A);this.xr=k,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Ot.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ot.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,Z,!1))},this.getSize=function(v){return v.set(X,Z)},this.setSize=function(v,L,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,Z=L,e.width=Math.floor(v*G),e.height=Math.floor(L*G),O===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(v,L,O){X=v,Z=L,G=O,e.width=Math.floor(v*O),e.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(xt)},this.setViewport=function(v,L,O,B){v.isVector4?xt.set(v.x,v.y,v.z,v.w):xt.set(v,L,O,B),Mt.viewport(R.copy(xt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,L,O,B){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,L,O,B),Mt.scissor(V.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(v){Mt.setScissorTest(Kt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(v=!0,L=!0,O=!0){let B=0;if(v){let I=!1;if(U!==null){const J=U.texture.format;I=J===Aa||J===Ta||J===ba}if(I){const J=U.texture.type,st=J===fn||J===Wn||J===Wi||J===Si||J===ya||J===Sa,ut=bt.getClearColor(),mt=bt.getClearAlpha(),wt=ut.r,Ct=ut.g,yt=ut.b;st?(g[0]=wt,g[1]=Ct,g[2]=yt,g[3]=mt,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=wt,x[1]=Ct,x[2]=yt,x[3]=mt,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}L&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),bt.dispose(),dt.dispose(),Gt.dispose(),vt.dispose(),_.dispose(),N.dispose(),H.dispose(),Zt.dispose(),C.dispose(),_t.dispose(),k.dispose(),k.removeEventListener("sessionstart",Ua),k.removeEventListener("sessionend",Na),Cn.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const v=Qt.autoReset,L=ft.enabled,O=ft.autoUpdate,B=ft.needsUpdate,I=ft.type;it(),Qt.autoReset=v,ft.enabled=L,ft.autoUpdate=O,ft.needsUpdate=B,ft.type=I}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pt(v){const L=v.target;L.removeEventListener("dispose",Pt),ie(L)}function ie(v){me(v),vt.remove(v)}function me(v){const L=vt.get(v).programs;L!==void 0&&(L.forEach(function(O){_t.releaseProgram(O)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,B,I,J){L===null&&(L=ee);const st=I.isMesh&&I.matrixWorld.determinant()<0,ut=Bl(v,L,O,B,I);Mt.setMaterial(B,st);let mt=O.index,wt=1;if(B.wireframe===!0){if(mt=K.getWireframeAttribute(O),mt===void 0)return;wt=2}const Ct=O.drawRange,yt=O.attributes.position;let Ht=Ct.start*wt,Xt=(Ct.start+Ct.count)*wt;J!==null&&(Ht=Math.max(Ht,J.start*wt),Xt=Math.min(Xt,(J.start+J.count)*wt)),mt!==null?(Ht=Math.max(Ht,0),Xt=Math.min(Xt,mt.count)):yt!=null&&(Ht=Math.max(Ht,0),Xt=Math.min(Xt,yt.count));const le=Xt-Ht;if(le<0||le===1/0)return;Zt.setup(I,B,ut,O,mt);let se,Vt=pt;if(mt!==null&&(se=q.get(mt),Vt=zt,Vt.setIndex(se)),I.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*oe()),Vt.setMode(A.LINES)):Vt.setMode(A.TRIANGLES);else if(I.isLine){let St=B.linewidth;St===void 0&&(St=1),Mt.setLineWidth(St*oe()),I.isLineSegments?Vt.setMode(A.LINES):I.isLineLoop?Vt.setMode(A.LINE_LOOP):Vt.setMode(A.LINE_STRIP)}else I.isPoints?Vt.setMode(A.POINTS):I.isSprite&&Vt.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Vt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Vt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const St=I._multiDrawStarts,pe=I._multiDrawCounts,qt=I._multiDrawCount,Ge=mt?q.get(mt).bytesPerElement:1,Yn=vt.get(B).currentProgram.getUniforms();for(let Te=0;Te<qt;Te++)Yn.setValue(A,"_gl_DrawID",Te),Vt.render(St[Te]/Ge,pe[Te])}else if(I.isInstancedMesh)Vt.renderInstances(Ht,le,I.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,pe=Math.min(O.instanceCount,St);Vt.renderInstances(Ht,le,pe)}else Vt.render(Ht,le)};function Yt(v,L,O){v.transparent===!0&&v.side===cn&&v.forceSinglePass===!1?(v.side=be,v.needsUpdate=!0,Ki(v,L,O),v.side=wn,v.needsUpdate=!0,Ki(v,L,O),v.side=cn):Ki(v,L,O)}this.compile=function(v,L,O=null){O===null&&(O=v),h=Gt.get(O),h.init(L),b.push(h),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),v!==O&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const B=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ut=J[st];Yt(ut,O,I),B.add(ut)}else Yt(J,O,I),B.add(J)}),b.pop(),h=null,B},this.compileAsync=function(v,L,O=null){const B=this.compile(v,L,O);return new Promise(I=>{function J(){if(B.forEach(function(st){vt.get(st).currentProgram.isReady()&&B.delete(st)}),B.size===0){I(v);return}setTimeout(J,10)}Ot.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let ke=null;function en(v){ke&&ke(v)}function Ua(){Cn.stop()}function Na(){Cn.start()}const Cn=new wl;Cn.setAnimationLoop(en),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(v){ke=v,k.setAnimationLoop(v),v===null?Cn.stop():Cn.start()},k.addEventListener("sessionstart",Ua),k.addEventListener("sessionend",Na),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(L),L=k.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,L,U),h=Gt.get(v,b.length),h.init(L),b.push(h),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),W.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,gt),m=dt.get(v,T.length),m.init(),T.push(m),k.enabled===!0&&k.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&Ws(J,L,-1/0,E.sortObjects)}Ws(v,L,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(rt,ht),kt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,kt&&bt.addToRenderList(m,v),this.info.render.frame++,et===!0&&tt.beginShadows();const O=h.state.shadowsArray;ft.render(O,v,L),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(h.setupLights(),L.isArrayCamera){const J=L.cameras;if(I.length>0)for(let st=0,ut=J.length;st<ut;st++){const mt=J[st];Oa(B,I,v,mt)}kt&&bt.render(v);for(let st=0,ut=J.length;st<ut;st++){const mt=J[st];Fa(m,v,mt,mt.viewport)}}else I.length>0&&Oa(B,I,v,L),kt&&bt.render(v),Fa(m,v,L);U!==null&&w===0&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(E,v,L),Zt.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(h=b[b.length-1],et===!0&&tt.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ws(v,L,O,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){B&&Nt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Tt);const st=H.update(v),ut=v.material;ut.visible&&m.push(v,st,ut,O,Nt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const st=H.update(v),ut=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Nt.copy(v.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Nt.copy(st.boundingSphere.center)),Nt.applyMatrix4(v.matrixWorld).applyMatrix4(Tt)),Array.isArray(ut)){const mt=st.groups;for(let wt=0,Ct=mt.length;wt<Ct;wt++){const yt=mt[wt],Ht=ut[yt.materialIndex];Ht&&Ht.visible&&m.push(v,st,Ht,O,Nt.z,yt)}}else ut.visible&&m.push(v,st,ut,O,Nt.z,null)}}const J=v.children;for(let st=0,ut=J.length;st<ut;st++)Ws(J[st],L,O,B)}function Fa(v,L,O,B){const I=v.opaque,J=v.transmissive,st=v.transparent;h.setupLightsView(O),et===!0&&tt.setGlobalState(E.clippingPlanes,O),B&&Mt.viewport(R.copy(B)),I.length>0&&ji(I,L,O),J.length>0&&ji(J,L,O),st.length>0&&ji(st,L,O),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Oa(v,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Xn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Xi:fn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const J=h.state.transmissionRenderTarget[B.id],st=B.viewport||R;J.setSize(st.z*E.transmissionResolutionScale,st.w*E.transmissionResolutionScale);const ut=E.getRenderTarget();E.setRenderTarget(J),E.getClearColor(Y),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),kt&&bt.render(O);const mt=E.toneMapping;E.toneMapping=Tn;const wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),et===!0&&tt.setGlobalState(E.clippingPlanes,B),ji(v,O,B),S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let yt=0,Ht=L.length;yt<Ht;yt++){const Xt=L[yt],le=Xt.object,se=Xt.geometry,Vt=Xt.material,St=Xt.group;if(Vt.side===cn&&le.layers.test(B.layers)){const pe=Vt.side;Vt.side=be,Vt.needsUpdate=!0,Ba(le,O,B,se,Vt,St),Vt.side=pe,Vt.needsUpdate=!0,Ct=!0}}Ct===!0&&(S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J))}E.setRenderTarget(ut),E.setClearColor(Y,j),wt!==void 0&&(B.viewport=wt),E.toneMapping=mt}function ji(v,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let I=0,J=v.length;I<J;I++){const st=v[I],ut=st.object,mt=st.geometry,wt=B===null?st.material:B,Ct=st.group;ut.layers.test(O.layers)&&Ba(ut,L,O,mt,wt,Ct)}}function Ba(v,L,O,B,I,J){v.onBeforeRender(E,L,O,B,I,J),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(E,L,O,B,v,J),I.transparent===!0&&I.side===cn&&I.forceSinglePass===!1?(I.side=be,I.needsUpdate=!0,E.renderBufferDirect(O,L,B,I,v,J),I.side=wn,I.needsUpdate=!0,E.renderBufferDirect(O,L,B,I,v,J),I.side=cn):E.renderBufferDirect(O,L,B,I,v,J),v.onAfterRender(E,L,O,B,I,J)}function Ki(v,L,O){L.isScene!==!0&&(L=ee);const B=vt.get(v),I=h.state.lights,J=h.state.shadowsArray,st=I.state.version,ut=_t.getParameters(v,I.state,J,L,O),mt=_t.getProgramCacheKey(ut);let wt=B.programs;B.environment=v.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(v.isMeshStandardMaterial?N:_).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Pt),wt=new Map,B.programs=wt);let Ct=wt.get(mt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===st)return ka(v,ut),Ct}else ut.uniforms=_t.getUniforms(v),v.onBeforeCompile(ut,E),Ct=_t.acquireProgram(ut,mt),wt.set(mt,Ct),B.uniforms=ut.uniforms;const yt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=tt.uniform),ka(v,ut),B.needsLights=kl(v),B.lightsStateVersion=st,B.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function za(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Is.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ka(v,L){const O=vt.get(v);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Bl(v,L,O,B,I){L.isScene!==!0&&(L=ee),S.resetTextureUnits();const J=L.fog,st=B.isMeshStandardMaterial?L.environment:null,ut=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:bi,mt=(B.isMeshStandardMaterial?N:_).get(B.envMap||st),wt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!O.morphAttributes.position,Ht=!!O.morphAttributes.normal,Xt=!!O.morphAttributes.color;let le=Tn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=E.toneMapping);const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=se!==void 0?se.length:0,St=vt.get(B),pe=h.state.lights;if(et===!0&&(gt===!0||v!==M)){const ve=v===M&&B.id===y;tt.setState(B,v,ve)}let qt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==pe.state.version||St.outputColorSpace!==ut||I.isBatchedMesh&&St.batching===!1||!I.isBatchedMesh&&St.batching===!0||I.isBatchedMesh&&St.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&St.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&St.instancing===!1||!I.isInstancedMesh&&St.instancing===!0||I.isSkinnedMesh&&St.skinning===!1||!I.isSkinnedMesh&&St.skinning===!0||I.isInstancedMesh&&St.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&St.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&St.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&St.instancingMorph===!1&&I.morphTexture!==null||St.envMap!==mt||B.fog===!0&&St.fog!==J||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==wt||St.vertexTangents!==Ct||St.morphTargets!==yt||St.morphNormals!==Ht||St.morphColors!==Xt||St.toneMapping!==le||St.morphTargetsCount!==Vt)&&(qt=!0):(qt=!0,St.__version=B.version);let Ge=St.currentProgram;qt===!0&&(Ge=Ki(B,L,I));let Yn=!1,Te=!1,Pi=!1;const te=Ge.getUniforms(),Ie=St.uniforms;if(Mt.useProgram(Ge.program)&&(Yn=!0,Te=!0,Pi=!0),B.id!==y&&(y=B.id,Te=!0),Yn||M!==v){Mt.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),Ic(at),Dc(at),te.setValue(A,"projectionMatrix",at)):te.setValue(A,"projectionMatrix",v.projectionMatrix),te.setValue(A,"viewMatrix",v.matrixWorldInverse);const ye=te.map.cameraPosition;ye!==void 0&&ye.setValue(A,Rt.setFromMatrixPosition(v.matrixWorld)),Bt.logarithmicDepthBuffer&&te.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Te=!0,Pi=!0)}if(I.isSkinnedMesh){te.setOptional(A,I,"bindMatrix"),te.setOptional(A,I,"bindMatrixInverse");const ve=I.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),te.setValue(A,"boneTexture",ve.boneTexture,S))}I.isBatchedMesh&&(te.setOptional(A,I,"batchingTexture"),te.setValue(A,"batchingTexture",I._matricesTexture,S),te.setOptional(A,I,"batchingIdTexture"),te.setValue(A,"batchingIdTexture",I._indirectTexture,S),te.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&te.setValue(A,"batchingColorTexture",I._colorsTexture,S));const De=O.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&At.update(I,O,Ge),(Te||St.receiveShadow!==I.receiveShadow)&&(St.receiveShadow=I.receiveShadow,te.setValue(A,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ie.envMap.value=mt,Ie.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Ie.envMapIntensity.value=L.environmentIntensity),Te&&(te.setValue(A,"toneMappingExposure",E.toneMappingExposure),St.needsLights&&zl(Ie,Pi),J&&B.fog===!0&&ot.refreshFogUniforms(Ie,J),ot.refreshMaterialUniforms(Ie,B,G,Z,h.state.transmissionRenderTarget[v.id]),Is.upload(A,za(St),Ie,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Is.upload(A,za(St),Ie,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(A,"center",I.center),te.setValue(A,"modelViewMatrix",I.modelViewMatrix),te.setValue(A,"normalMatrix",I.normalMatrix),te.setValue(A,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ve=B.uniformsGroups;for(let ye=0,Xs=ve.length;ye<Xs;ye++){const Pn=ve[ye];C.update(Pn,Ge),C.bind(Pn,Ge)}}return Ge}function zl(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function kl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,L,O){vt.get(v.texture).__webglTexture=L,vt.get(v.depthTexture).__webglTexture=O;const B=vt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const O=vt.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const Gl=A.createFramebuffer();this.setRenderTarget=function(v,L=0,O=0){U=v,P=L,w=O;let B=!0,I=null,J=!1,st=!1;if(v){const mt=vt.get(v);if(mt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)S.setupRenderTarget(v);else if(mt.__hasExternalTextures)S.rebindTextures(v,vt.get(v.texture).__webglTexture,vt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const yt=v.depthTexture;if(mt.__boundDepthTexture!==yt){if(yt!==null&&vt.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(st=!0);const Ct=vt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?I=Ct[L][O]:I=Ct[L],J=!0):v.samples>0&&S.useMultisampledRTT(v)===!1?I=vt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[O]:I=Ct,R.copy(v.viewport),V.copy(v.scissor),z=v.scissorTest}else R.copy(xt).multiplyScalar(G).floor(),V.copy(Ut).multiplyScalar(G).floor(),z=Kt;if(O!==0&&(I=Gl),Mt.bindFramebuffer(A.FRAMEBUFFER,I)&&B&&Mt.drawBuffers(v,I),Mt.viewport(R),Mt.scissor(V),Mt.setScissorTest(z),J){const mt=vt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,O)}else if(st){const mt=vt.get(v.texture),wt=L;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.__webglTexture,O,wt)}else if(v!==null&&O!==0){const mt=vt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mt.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(v,L,O,B,I,J,st){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=vt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){Mt.bindFramebuffer(A.FRAMEBUFFER,ut);try{const mt=v.texture,wt=mt.format,Ct=mt.type;if(!Bt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&O>=0&&O<=v.height-I&&A.readPixels(L,O,B,I,It.convert(wt),It.convert(Ct),J)}finally{const mt=U!==null?vt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(A.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,L,O,B,I,J,st){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=vt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){const mt=v.texture,wt=mt.format,Ct=mt.type;if(!Bt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-B&&O>=0&&O<=v.height-I){Mt.bindFramebuffer(A.FRAMEBUFFER,ut);const yt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),A.readPixels(L,O,B,I,It.convert(wt),It.convert(Ct),0);const Ht=U!==null?vt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(A.FRAMEBUFFER,Ht);const Xt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Lc(A,Xt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(yt),A.deleteSync(Xt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,O=0){v.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),I=Math.floor(v.image.width*B),J=Math.floor(v.image.height*B),st=L!==null?L.x:0,ut=L!==null?L.y:0;S.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,st,ut,I,J),Mt.unbindTexture()};const Hl=A.createFramebuffer(),Vl=A.createFramebuffer();this.copyTextureToTexture=function(v,L,O=null,B=null,I=0,J=null){v.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],L=arguments[2],J=arguments[3]||0,O=null),J===null&&(I!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let st,ut,mt,wt,Ct,yt,Ht,Xt,le;const se=v.isCompressedTexture?v.mipmaps[J]:v.image;if(O!==null)st=O.max.x-O.min.x,ut=O.max.y-O.min.y,mt=O.isBox3?O.max.z-O.min.z:1,wt=O.min.x,Ct=O.min.y,yt=O.isBox3?O.min.z:0;else{const De=Math.pow(2,-I);st=Math.floor(se.width*De),ut=Math.floor(se.height*De),v.isDataArrayTexture?mt=se.depth:v.isData3DTexture?mt=Math.floor(se.depth*De):mt=1,wt=0,Ct=0,yt=0}B!==null?(Ht=B.x,Xt=B.y,le=B.z):(Ht=0,Xt=0,le=0);const Vt=It.convert(L.format),St=It.convert(L.type);let pe;L.isData3DTexture?(S.setTexture3D(L,0),pe=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),pe=A.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),pe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const qt=A.getParameter(A.UNPACK_ROW_LENGTH),Ge=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Yn=A.getParameter(A.UNPACK_SKIP_PIXELS),Te=A.getParameter(A.UNPACK_SKIP_ROWS),Pi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,se.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,se.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ct),A.pixelStorei(A.UNPACK_SKIP_IMAGES,yt);const te=v.isDataArrayTexture||v.isData3DTexture,Ie=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const De=vt.get(v),ve=vt.get(L),ye=vt.get(De.__renderTarget),Xs=vt.get(ve.__renderTarget);Mt.bindFramebuffer(A.READ_FRAMEBUFFER,ye.__webglFramebuffer),Mt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Pn=0;Pn<mt;Pn++)te&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,vt.get(v).__webglTexture,I,yt+Pn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,J,le+Pn)),A.blitFramebuffer(wt,Ct,st,ut,Ht,Xt,st,ut,A.DEPTH_BUFFER_BIT,A.NEAREST);Mt.bindFramebuffer(A.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||vt.has(v)){const De=vt.get(v),ve=vt.get(L);Mt.bindFramebuffer(A.READ_FRAMEBUFFER,Hl),Mt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Vl);for(let ye=0;ye<mt;ye++)te?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.__webglTexture,I,yt+ye):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,De.__webglTexture,I),Ie?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.__webglTexture,J,le+ye):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ve.__webglTexture,J),I!==0?A.blitFramebuffer(wt,Ct,st,ut,Ht,Xt,st,ut,A.COLOR_BUFFER_BIT,A.NEAREST):Ie?A.copyTexSubImage3D(pe,J,Ht,Xt,le+ye,wt,Ct,st,ut):A.copyTexSubImage2D(pe,J,Ht,Xt,wt,Ct,st,ut);Mt.bindFramebuffer(A.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ie?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(pe,J,Ht,Xt,le,st,ut,mt,Vt,St,se.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(pe,J,Ht,Xt,le,st,ut,mt,Vt,se.data):A.texSubImage3D(pe,J,Ht,Xt,le,st,ut,mt,Vt,St,se):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,Ht,Xt,st,ut,Vt,St,se.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,Ht,Xt,se.width,se.height,Vt,se.data):A.texSubImage2D(A.TEXTURE_2D,J,Ht,Xt,st,ut,Vt,St,se);A.pixelStorei(A.UNPACK_ROW_LENGTH,qt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ge),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Yn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Te),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pi),J===0&&L.generateMipmaps&&A.generateMipmap(pe),Mt.unbindTexture()},this.copyTextureToTexture3D=function(v,L,O=null,B=null,I=0){return v.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],L=arguments[3],I=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,O,B,I)},this.initRenderTarget=function(v){vt.get(v).__webglFramebuffer===void 0&&S.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?S.setTextureCube(v,0):v.isData3DTexture?S.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?S.setTexture2DArray(v,0):S.setTexture2D(v,0),Mt.unbindTexture()},this.resetState=function(){P=0,w=0,U=null,Mt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class sm{constructor(t="game-canvas"){this.canvas=document.getElementById(t),this.renderer=new im({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jo,this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(8900331),this.scene=new nu,this.scene.fog=new wa(8900331,.003),this.camera=new Fe(50,1,.1,500),this.camera.position.set(0,20,30),this._setupLighting(),this._setupGround(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_setupLighting(){this.ambientLight=new gu(13163248,.8),this.scene.add(this.ambientLight),this.hemiLight=new du(8900331,7049054,.6),this.scene.add(this.hemiLight),this.sunLight=new mu(16775400,1.6),this.sunLight.position.set(20,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight)}_setupGround(){const t=new Be(new Yi(200,200),new pa({color:5938799}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t);const e=new xu(40,40,8239250,6991232);e.position.y=.01,e.material.transparent=!0,e.material.opacity=.3,this.scene.add(e)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize)}}const ne={dayDurationSeconds:60,startingDay:1,initialGold:300,dailyRent:30,rentIncreasePerRank:15,shopSellInterval:8,shopMaxDisplaySlots:4,customerBonusMultiplier:1.5,equipmentQualityBonus:.5,traitChance:.35,maxTraitSlots:3,customerSpawnChance:.4,maxCustomersPerDay:3,customerPatienceSeconds:25,goalShopRank:5,ranks:[{rank:1,name:"駆け出しの店",requiredSales:0,displaySlots:4,newRecipes:[],newAreas:[]},{rank:2,name:"町の小さな店",requiredSales:500,displaySlots:6,newRecipes:["fire_sword","ice_shield","antidote"],newAreas:["cave"]},{rank:3,name:"人気の道具屋",requiredSales:1500,displaySlots:8,newRecipes:["mage_staff","chainmail","elixir"],newAreas:["forest"]},{rank:4,name:"王国御用達の名店",requiredSales:4e3,displaySlots:10,newRecipes:["holy_sword","dragon_armor","phoenix_feather_acc"],newAreas:["volcano"]},{rank:5,name:"伝説のアイテム工房",requiredSales:1e4,displaySlots:12,newRecipes:["legendary_blade"],newAreas:["dragon_nest"]}],initialItems:[{blueprintId:"stone",quality:45,traits:[]},{blueprintId:"wood",quality:50,traits:[]},{blueprintId:"wood",quality:35,traits:[]},{blueprintId:"herb",quality:40,traits:[]}]},Vi={wood:{id:"wood",name:"木材",type:"material",tier:1,baseValue:4},stone:{id:"stone",name:"石材",type:"material",tier:1,baseValue:4},herb:{id:"herb",name:"薬草",type:"material",tier:1,baseValue:6},slime_jelly:{id:"slime_jelly",name:"スライムゼリー",type:"material",tier:1,baseValue:8},iron_ore:{id:"iron_ore",name:"鉄鉱石",type:"material",tier:2,baseValue:12},cloth:{id:"cloth",name:"魔法の布",type:"material",tier:2,baseValue:10},crystal:{id:"crystal",name:"水晶",type:"material",tier:2,baseValue:15},poison_herb:{id:"poison_herb",name:"毒草",type:"material",tier:2,baseValue:14},fire_stone:{id:"fire_stone",name:"火石",type:"material",tier:3,baseValue:25},ice_shard:{id:"ice_shard",name:"氷片",type:"material",tier:3,baseValue:25},feather:{id:"feather",name:"不死鳥の羽",type:"material",tier:3,baseValue:40},dragon_scale:{id:"dragon_scale",name:"竜の鱗",type:"material",tier:3,baseValue:50},sword:{id:"sword",name:"鉄の剣",type:"equipment",baseValue:35},shield:{id:"shield",name:"木の盾",type:"equipment",baseValue:25},potion:{id:"potion",name:"回復薬",type:"consumable",baseValue:18},fire_sword:{id:"fire_sword",name:"炎の剣",type:"equipment",baseValue:80},ice_shield:{id:"ice_shield",name:"氷の盾",type:"equipment",baseValue:65},antidote:{id:"antidote",name:"解毒薬",type:"consumable",baseValue:30},mage_staff:{id:"mage_staff",name:"魔法の杖",type:"equipment",baseValue:120},chainmail:{id:"chainmail",name:"鎖帷子",type:"equipment",baseValue:100},elixir:{id:"elixir",name:"万能薬",type:"consumable",baseValue:75},holy_sword:{id:"holy_sword",name:"聖剣",type:"equipment",baseValue:250},dragon_armor:{id:"dragon_armor",name:"竜鱗の鎧",type:"equipment",baseValue:220},phoenix_feather_acc:{id:"phoenix_feather_acc",name:"不死鳥のお守り",type:"accessory",baseValue:180},legendary_blade:{id:"legendary_blade",name:"伝説の刃",type:"equipment",baseValue:500}},Je={sword:{id:"recipe_sword",targetId:"sword",materials:["stone","wood"],unlocked:!0},shield:{id:"recipe_shield",targetId:"shield",materials:["wood","wood"],unlocked:!0},potion:{id:"recipe_potion",targetId:"potion",materials:["herb","slime_jelly"],unlocked:!0},fire_sword:{id:"recipe_fire_sword",targetId:"fire_sword",materials:["iron_ore","fire_stone"],unlocked:!1},ice_shield:{id:"recipe_ice_shield",targetId:"ice_shield",materials:["wood","ice_shard"],unlocked:!1},antidote:{id:"recipe_antidote",targetId:"antidote",materials:["herb","poison_herb"],unlocked:!1},mage_staff:{id:"recipe_mage_staff",targetId:"mage_staff",materials:["crystal","wood"],unlocked:!1},chainmail:{id:"recipe_chainmail",targetId:"chainmail",materials:["iron_ore","iron_ore","cloth"],unlocked:!1},elixir:{id:"recipe_elixir",targetId:"elixir",materials:["herb","crystal","slime_jelly"],unlocked:!1},holy_sword:{id:"recipe_holy_sword",targetId:"holy_sword",materials:["iron_ore","crystal","feather"],unlocked:!1},dragon_armor:{id:"recipe_dragon_armor",targetId:"dragon_armor",materials:["dragon_scale","iron_ore","cloth"],unlocked:!1},phoenix_feather_acc:{id:"recipe_phoenix_feather_acc",targetId:"phoenix_feather_acc",materials:["feather","crystal"],unlocked:!1},legendary_blade:{id:"recipe_legendary_blade",targetId:"legendary_blade",materials:["dragon_scale","fire_stone","ice_shard","crystal"],unlocked:!1}},Il={"攻撃力+1":{name:"攻撃力+1",color:"red",description:"攻撃力が少し上がる"},"攻撃力+2":{name:"攻撃力+2",color:"red",description:"攻撃力が上がる"},"防御力+1":{name:"防御力+1",color:"blue",description:"防御力が少し上がる"},"防御力+2":{name:"防御力+2",color:"blue",description:"防御力が上がる"},"HP回復+":{name:"HP回復+",color:"green",description:"回復量が増える"},採取量UP:{name:"採取量UP",color:"yellow",description:"探索での収穫量が増える"},売値UP:{name:"売値UP",color:"gold",description:"売却価格が20%上がる"},丈夫:{name:"丈夫",color:"brown",description:"耐久性が高い"},軽い:{name:"軽い",color:"cyan",description:"軽くて扱いやすい"},硬い:{name:"硬い",color:"gray",description:"非常に硬い"},光る:{name:"光る",color:"yellow",description:"神秘的に光る"},燃えやすい:{name:"燃えやすい",color:"orange",description:"火に弱い"},水溶性:{name:"水溶性",color:"blue",description:"水に溶けやすい"},猛毒:{name:"猛毒",color:"purple",description:"致死量の毒を含む"},聖なる力:{name:"聖なる力",color:"white",description:"聖なる光を宿す"}},Ye={plains:{id:"plains",name:"草原",description:"のどかな草原。基本的な素材が手に入る。",icon:"🌿",unlocked:!0,baseTime:12,dropTable:[{blueprintId:"wood",weight:35},{blueprintId:"stone",weight:30},{blueprintId:"herb",weight:25},{blueprintId:"slime_jelly",weight:10}],traitPool:["丈夫","軽い","硬い"],dropCountMin:1,dropCountMax:2,qualityMin:15,qualityMax:45},cave:{id:"cave",name:"地底洞窟",description:"暗い洞窟の奥深く。鉱石や水晶が眠る。",icon:"⛏️",unlocked:!1,baseTime:18,dropTable:[{blueprintId:"iron_ore",weight:35},{blueprintId:"stone",weight:25},{blueprintId:"crystal",weight:20},{blueprintId:"cloth",weight:20}],traitPool:["硬い","光る","防御力+1"],dropCountMin:1,dropCountMax:2,qualityMin:20,qualityMax:55},forest:{id:"forest",name:"妖精の森",description:"不思議な力が満ちた深い森。稀少な薬草が育つ。",icon:"🌲",unlocked:!1,baseTime:22,dropTable:[{blueprintId:"herb",weight:20},{blueprintId:"poison_herb",weight:25},{blueprintId:"cloth",weight:25},{blueprintId:"crystal",weight:15},{blueprintId:"wood",weight:15}],traitPool:["HP回復+","採取量UP","猛毒","軽い"],dropCountMin:1,dropCountMax:3,qualityMin:25,qualityMax:65},volcano:{id:"volcano",name:"灼熱の火山",description:"溶岩が流れる危険な火山。貴重な火石が採れる。",icon:"🌋",unlocked:!1,baseTime:28,dropTable:[{blueprintId:"fire_stone",weight:30},{blueprintId:"iron_ore",weight:25},{blueprintId:"ice_shard",weight:15},{blueprintId:"stone",weight:15},{blueprintId:"dragon_scale",weight:15}],traitPool:["攻撃力+1","攻撃力+2","燃えやすい","丈夫"],dropCountMin:1,dropCountMax:2,qualityMin:30,qualityMax:75},dragon_nest:{id:"dragon_nest",name:"竜の巣",description:"古代竜の住処。最強の素材が眠るが極めて危険。",icon:"🐉",unlocked:!1,baseTime:35,dropTable:[{blueprintId:"dragon_scale",weight:30},{blueprintId:"feather",weight:20},{blueprintId:"fire_stone",weight:15},{blueprintId:"ice_shard",weight:15},{blueprintId:"crystal",weight:20}],traitPool:["攻撃力+2","防御力+2","聖なる力","光る"],dropCountMin:1,dropCountMax:3,qualityMin:40,qualityMax:90}};class rm{constructor(){this._listeners=new Map}on(t,e){return this._listeners.has(t)||this._listeners.set(t,new Set),this._listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this._listeners.get(t);n&&(n.delete(e),n.size===0&&this._listeners.delete(t))}emit(t,e){const n=this._listeners.get(t);if(n)for(const i of n)try{i(e)}catch(r){console.error(`[EventBus] Error in listener for "${t}":`,r)}}}const Q=new rm;class am{constructor(){this.totalGoldEarned=0,this.totalItemsSold=0,this.totalItemsCrafted=0,this.totalCustomersServed=0,this.totalCustomersLost=0,this.totalPuzzlesPlayed=0,this.bestPuzzleScore=0,this.dailySales=[],this._currentDaySales=0,this.salesByType={equipment:0,consumable:0,accessory:0,material:0},this._bindEvents()}_bindEvents(){Q.on("item:sold",t=>{var i,r;const e=((i=t.item)==null?void 0:i.value)||0;this.totalGoldEarned+=e,this.totalItemsSold++,this._currentDaySales+=e;const n=((r=t.item)==null?void 0:r.type)||"material";this.salesByType[n]!==void 0&&(this.salesByType[n]+=e)}),Q.on("item:crafted",()=>{this.totalItemsCrafted++}),Q.on("customer:bought",()=>{this.totalCustomersServed++}),Q.on("customer:left",()=>{this.totalCustomersLost++}),Q.on("day:newDay",()=>{this.dailySales.push(this._currentDaySales),this.dailySales.length>30&&this.dailySales.shift(),this._currentDaySales=0})}recordPuzzle(t){this.totalPuzzlesPlayed++,t>this.bestPuzzleScore&&(this.bestPuzzleScore=t)}getAverageDailySales(t=7){const e=this.dailySales.slice(-t);return e.length===0?0:Math.round(e.reduce((n,i)=>n+i,0)/e.length)}toSaveData(){return{totalGoldEarned:this.totalGoldEarned,totalItemsSold:this.totalItemsSold,totalItemsCrafted:this.totalItemsCrafted,totalCustomersServed:this.totalCustomersServed,totalCustomersLost:this.totalCustomersLost,totalPuzzlesPlayed:this.totalPuzzlesPlayed,bestPuzzleScore:this.bestPuzzleScore,dailySales:this.dailySales,salesByType:{...this.salesByType}}}loadSaveData(t){t&&(this.totalGoldEarned=t.totalGoldEarned||0,this.totalItemsSold=t.totalItemsSold||0,this.totalItemsCrafted=t.totalItemsCrafted||0,this.totalCustomersServed=t.totalCustomersServed||0,this.totalCustomersLost=t.totalCustomersLost||0,this.totalPuzzlesPlayed=t.totalPuzzlesPlayed||0,this.bestPuzzleScore=t.bestPuzzleScore||0,this.dailySales=t.dailySales||[],t.salesByType&&Object.assign(this.salesByType,t.salesByType))}}const Ia=new am,zi="voxelshop_save_v1",om=30;class Ds{constructor(t,e,n,i,r){this.inventory=t,this.adventurers=e,this.dayCycle=n,this.shop=i,this.reputation=r,this.timer=0}update(t){this.timer+=t,this.timer>=om&&(this.timer=0,this.save())}save(){try{const t={version:1,timestamp:Date.now(),gold:this.inventory.gold,items:this.inventory.items.map(e=>({blueprintId:e.blueprintId,quality:e.quality,traits:e.traits})),displayedItems:this.shop.displayedItems.map(e=>({blueprintId:e.blueprintId,quality:e.quality,traits:e.traits})),adventurers:this.adventurers.adventurers.map(e=>({id:e.id,level:e.level,exp:e.exp,weapon:e.equipment.weapon?{blueprintId:e.equipment.weapon.blueprintId,quality:e.equipment.weapon.quality,traits:e.equipment.weapon.traits}:null})),day:this.dayCycle.day,dayTimer:this.dayCycle.dayTimer,totalSales:this.dayCycle.totalSales,currentRankIndex:this.dayCycle.currentRankIndex,unlockedRecipes:Object.keys(Je).filter(e=>Je[e].unlocked),unlockedAreas:Object.keys(Ye).filter(e=>Ye[e].unlocked),reputation:this.reputation?this.reputation.toSaveData():null,stats:Ia.toSaveData()};localStorage.setItem(zi,JSON.stringify(t)),console.log("[Save] ゲームを保存しました")}catch(t){console.error("[Save] 保存失敗:",t)}}static hasSave(){return localStorage.getItem(zi)!==null}static getSaveInfo(){try{const t=localStorage.getItem(zi);if(!t)return null;const e=JSON.parse(t);return{day:e.day,gold:e.gold,totalSales:e.totalSales,rankIndex:e.currentRankIndex,timestamp:e.timestamp}}catch{return null}}static deleteSave(){localStorage.removeItem(zi)}static loadSaveData(){try{const t=localStorage.getItem(zi);return t?JSON.parse(t):null}catch{return null}}}class lm{constructor(){this.currentAnim=null,this.currentDef=null,this.time=0,this.playing=!1,this.speed=1,this.prevAnim=null,this.prevDef=null,this.prevTime=0,this.blendDuration=.3,this.blendElapsed=0,this.blending=!1}play(t,e,n=!1){this.currentAnim===t&&!n||(this.currentDef&&this.playing&&(this.prevAnim=this.currentAnim,this.prevDef=this.currentDef,this.prevTime=this.time,this.blending=!0,this.blendElapsed=0),this.currentAnim=t,this.currentDef=e,this.time=0,this.playing=!0)}stop(){this.playing=!1}update(t){if(!this.playing||!this.currentDef)return{};this.time+=t*this.speed;const e=this.currentDef.duration||1;this.currentDef.loop?this.time=this.time%e:this.time>=e&&(this.time=e,this.playing=!1);const n=this.time/e,i=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1,r=this._interpolate(this.currentDef.keyframes,n*i);if(this.blending){this.blendElapsed+=t;const a=Math.min(this.blendElapsed/this.blendDuration,1),o=a*a*(3-2*a);if(this.prevDef){const l=this.prevDef.duration||1,c=this.prevTime/l,u=this.prevDef.keyframes.length>0?this.prevDef.keyframes[this.prevDef.keyframes.length-1].time:1,f=this._interpolate(this.prevDef.keyframes,c*u),d=this._blendTransforms(f,r,o);return a>=1&&(this.blending=!1,this.prevDef=null),d}a>=1&&(this.blending=!1)}return r}_interpolate(t,e){if(!t||t.length===0)return{};if(t.length===1)return this._cloneFrame(t[0].parts||{});let n=t[0],i=t[t.length-1];for(let l=0;l<t.length-1;l++)if(e>=t[l].time&&e<=t[l+1].time){n=t[l],i=t[l+1];break}const r=i.time-n.time,a=r>0?(e-n.time)/r:0,o=a*a*(3-2*a);return this._lerpFrames(n.parts||{},i.parts||{},o)}_lerpFrames(t,e,n){const i={},r=new Set([...Object.keys(t),...Object.keys(e)]);for(const a of r){const o=t[a]||{},l=e[a]||{};i[a]={rotation:this._lerpVec(o.rotation||[0,0,0],l.rotation||[0,0,0],n),position:this._lerpVec(o.position||[0,0,0],l.position||[0,0,0],n)}}return i}_blendTransforms(t,e,n){const i={},r=new Set([...Object.keys(t),...Object.keys(e)]);for(const a of r){const o=t[a]||{rotation:[0,0,0],position:[0,0,0]},l=e[a]||{rotation:[0,0,0],position:[0,0,0]};i[a]={rotation:this._lerpVec(o.rotation,l.rotation,n),position:this._lerpVec(o.position,l.position,n)}}return i}_lerpVec(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n]}_cloneFrame(t){const e={};for(const[n,i]of Object.entries(t))e[n]={rotation:[...i.rotation||[0,0,0]],position:[...i.position||[0,0,0]]};return e}seekTo(t){if(!this.currentDef)return{};this.time=t*(this.currentDef.duration||1),this.playing=!1,this.blending=!1;const e=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1;return this._interpolate(this.currentDef.keyframes,t*e)}getTransformsAt(t,e){if(!t||!t.keyframes)return{};const n=t.keyframes.length>0?t.keyframes[t.keyframes.length-1].time:1;return this._interpolate(t.keyframes,e*n)}}class cm{constructor(t,e={}){this.definition=t,this.voxelSize=t.voxelSize||1,this.root=new hi,this.root.name=t.name,this.partGroups={},this.animController=new lm,this.currentAnimName=null,this.materials=t.palette.map(i=>new pa({color:new Et(i)}));const n=this.voxelSize;if(this.boxGeom=new qn(n*.98,n*.98,n*.98),this.edgeMat=new Ca({color:0,transparent:!0,opacity:.12}),this._buildParts(),e.position&&this.root.position.set(...e.position),e.rotation&&(this.root.rotation.y=e.rotation),e.scale){const i=e.scale;this.root.scale.set(i,i,i)}}_buildParts(){const t=this.voxelSize;for(const e of this.definition.parts){const n=new hi;n.name=e.name,n.position.set(e.position[0]*t,e.position[1]*t,e.position[2]*t),n.userData.restPosition=n.position.clone(),this._addVoxelMeshes(n,e);const i=e.parent?this.partGroups[e.parent]:this.root;i?i.add(n):this.root.add(n),this.partGroups[e.name]=n}}_addVoxelMeshes(t,e){const n=this.voxelSize,i=e.center[0],r=e.center[1],a=e.center[2],o=new Map;for(let u=0;u<e.voxels.length;u++){const[f,d,p,g]=e.voxels[u];g<0||g>=this.materials.length||(o.has(g)||o.set(g,[]),o.get(g).push({vx:f,vy:d,vz:p,origIdx:u}))}const l=new ue,c=new cu(new qn(n,n,n));for(const[u,f]of o){const d=new ru(this.boxGeom,this.materials[u],f.length);d.castShadow=!0,d.receiveShadow=!0,d.userData.isVoxelBatch=!0,d.userData.partName=e.name,d.userData.colorIndex=u,d.userData.voxelMap=[];for(let p=0;p<f.length;p++){const{vx:g,vy:x,vz:m,origIdx:h}=f[p],T=(g-i+.5)*n,b=(x-r+.5)*n,E=(m-a+.5)*n;l.position.set(T,b,E),l.updateMatrix(),d.setMatrixAt(p,l.matrix),d.userData.voxelMap[p]={coord:[g,x,m],origIdx:h};const D=new bl(c,this.edgeMat);D.position.set(T,b,E),t.add(D)}d.instanceMatrix.needsUpdate=!0,t.add(d)}t.userData._edgeGeom=c}rebuildPart(t){const e=this.partGroups[t];if(!e)return;const n=this.definition.parts.find(r=>r.name===t);if(!n)return;e.userData._edgeGeom&&e.userData._edgeGeom.dispose();const i=[...e.children];for(const r of i)e.remove(r),r.isInstancedMesh&&r.dispose(),r.geometry&&r.geometry!==this.boxGeom&&r.geometry.dispose(),r.material&&r.material!==this.edgeMat&&!this.materials.includes(r.material)&&r.material.dispose();for(let r=0;r<this.definition.palette.length;r++)r<this.materials.length?this.materials[r].color.set(this.definition.palette[r]):this.materials.push(new pa({color:new Et(this.definition.palette[r])}));this._addVoxelMeshes(e,n)}getVoxelMeshes(){const t=[];return this.root.traverse(e=>{e.isInstancedMesh&&e.userData.isVoxelBatch&&t.push(e)}),t}playAnimation(t){var n;const e=(n=this.definition.animations)==null?void 0:n[t];e&&(this.currentAnimName=t,this.animController.play(t,e))}getAnimationNames(){return Object.keys(this.definition.animations||{})}update(t){const e=this.animController.update(t),n=this.voxelSize;for(const[i,r]of Object.entries(e)){const a=this.partGroups[i];if(a&&(r.rotation&&a.rotation.set(r.rotation[0],r.rotation[1],r.rotation[2]),r.position)){const o=a.userData.restPosition;a.position.set(o.x+r.position[0]*n,o.y+r.position[1]*n,o.z+r.position[2]*n)}}}addTo(t){t.add(this.root)}removeFrom(t){t.remove(this.root)}dispose(){this.root.traverse(t=>{t.isInstancedMesh&&t.dispose(),t.geometry&&t.geometry!==this.boxGeom&&t.geometry.dispose()}),this.boxGeom.dispose(),this.edgeMat.dispose(),this.materials.forEach(t=>t.dispose())}}class um{constructor(t,e,n,i){this.scene=t,this.camera=e,this.entities=n,this.renderer=i,this.npcEntities={},this.wanderers=[],this.dayProgress=0,this._skyColors={dawn:new Et(16764040),noon:new Et(8900331),sunset:new Et(16750933),night:new Et(1710650)},this._sunColors={dawn:new Et(16771264),noon:new Et(16775400),sunset:new Et(16746564),night:new Et(3359846)},this._tempColor=new Et}async init(){this.camera.position.set(20,25,25),this.camera.lookAt(0,0,0),await this.spawnEnvironment(),Q.on("adventurer:return",t=>this._onAdventurerReturn(t)),Q.on("rank:up",t=>this._evolveShopExterior(t.rank)),await this._spawnWanderers()}update(t){for(const e of this.wanderers){e.timer-=t,e.timer<=0&&(e.targetX=(Math.random()-.5)*30,e.targetZ=(Math.random()-.5)*30,e.timer=5+Math.random()*8);const n=e.entity;if(n&&n.group){const i=1.5*t,r=e.targetX-n.group.position.x,a=e.targetZ-n.group.position.z,o=Math.sqrt(r*r+a*a);o>.5&&(n.group.position.x+=r/o*i,n.group.position.z+=a/o*i,n.group.rotation.y=Math.atan2(r,a))}}this._updateDayNightCycle()}setDayProgress(t){this.dayProgress=t}_updateDayNightCycle(){if(!this.renderer)return;const t=this.dayProgress;let e,n,i,r;if(t<.15){const a=t/.15;e=this._tempColor.lerpColors(this._skyColors.night,this._skyColors.dawn,a),n=new Et().lerpColors(this._sunColors.night,this._sunColors.dawn,a),i=.4+a*.8,r=.3+a*.3}else if(t<.5){const a=(t-.15)/.35;e=this._tempColor.lerpColors(this._skyColors.dawn,this._skyColors.noon,a),n=new Et().lerpColors(this._sunColors.dawn,this._sunColors.noon,a),i=1.2+a*.4,r=.6+a*.2}else if(t<.75){const a=(t-.5)/.25;e=this._tempColor.lerpColors(this._skyColors.noon,this._skyColors.sunset,a),n=new Et().lerpColors(this._sunColors.noon,this._sunColors.sunset,a),i=1.6-a*.6,r=.8-a*.2}else{const a=(t-.75)/.25;e=this._tempColor.lerpColors(this._skyColors.sunset,this._skyColors.night,a),n=new Et().lerpColors(this._sunColors.sunset,this._sunColors.night,a),i=1-a*.6,r=.6-a*.3}this.renderer.renderer&&this.renderer.renderer.setClearColor(e),this.scene.fog&&this.scene.fog.color.copy(e),this.renderer.sunLight&&(this.renderer.sunLight.color.copy(n),this.renderer.sunLight.intensity=i),this.renderer.ambientLight&&(this.renderer.ambientLight.intensity=r),this.renderer.hemiLight&&(this.renderer.hemiLight.intensity=.3+r*.5)}async loadEntity(t,e={}){try{const i=await(await fetch(t)).json(),r=new cm(i,e);return r.addTo(this.scene),this.entities.push(r),r}catch(n){return console.error("[SceneManager] Failed to load entity:",t,n),null}}async spawnEnvironment(){await this.loadEntity("/presets/RPG_Props/House.json",{position:[0,0,-5],scale:1,rotation:0}),await this.loadEntity("/presets/RPG_Props/Chest.json",{position:[-2,0,5],scale:.6,rotation:Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Barrel.json",{position:[2,0,5],scale:.5}),await this.loadEntity("/presets/RPG_Props/Anvil.json",{position:[6,0,0],scale:.6,rotation:-Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Campfire.json",{position:[-6,0,-2],scale:.6});const t=[{path:"Pine Tree.json",pos:[-15,-15],scale:1},{path:"Pine Tree.json",pos:[12,-10],scale:.8},{path:"Pine Tree.json",pos:[10,15],scale:.9},{path:"Pine Tree.json",pos:[-18,8],scale:.7},{path:"Rock.json",pos:[8,12],scale:.6},{path:"Rock.json",pos:[-10,10],scale:.5},{path:"Rock.json",pos:[15,-5],scale:.4}];for(const n of t)await this.loadEntity(`/presets/RPG_Props/${n.path}`,{position:[n.pos[0],0,n.pos[1]],scale:n.scale});const e=await this.loadEntity("/presets/RPG_Characters/King.json",{position:[0,0,3],scale:.5});e&&e.playAnimation("idle")}async _spawnWanderers(){const t=[{path:"Chibi Human.json",x:-8,z:8},{path:"Cat.json",x:10,z:10},{path:"Dog.json",x:-12,z:-8}];for(const e of t)try{const n=await this.loadEntity(`/presets/RPG_Characters/${e.path}`,{position:[e.x,0,e.z],scale:.4});n&&(n.playAnimation("walk"),this.wanderers.push({entity:n,targetX:e.x,targetZ:e.z,timer:Math.random()*3}))}catch(n){console.warn("[SceneManager] Wanderer load failed:",n)}}async _onAdventurerReturn(t){try{const e=await this.loadEntity("/presets/RPG_Characters/Knight.json",{position:[18,0,0],scale:.5});if(!e)return;e.playAnimation("walk");const n=setInterval(()=>{e.group&&(e.group.position.x-=.15,e.group.rotation.y=Math.PI/2,e.group.position.x<=4&&(clearInterval(n),e.playAnimation("idle"),setTimeout(()=>{e.group.visible=!1;const i=this.entities.indexOf(e);i!==-1&&this.entities.splice(i,1),e.removeFrom(this.scene)},3e3)))},33)}catch{}}async _evolveShopExterior(t){const e=(t==null?void 0:t.rank)||t;if(!e)return;const i={2:[{path:"Banner.json",pos:[-4,0,3],scale:.6,rot:0},{path:"Banner.json",pos:[4,0,3],scale:.6,rot:0},{path:"Fence.json",pos:[-5,0,7],scale:.5,rot:0},{path:"Fence.json",pos:[5,0,7],scale:.5,rot:0}],3:[{path:"Street Light.json",pos:[-7,0,5],scale:.7,rot:0},{path:"Street Light.json",pos:[7,0,5],scale:.7,rot:0},{path:"Well.json",pos:[-8,0,-3],scale:.5,rot:Math.PI/4}],4:[{path:"Tree.json",pos:[-5,0,-8],scale:.7,rot:0},{path:"Tree.json",pos:[5,0,-8],scale:.6,rot:0},{path:"Chest.json",pos:[4,0,5],scale:.5,rot:-Math.PI/6},{path:"Street Light.json",pos:[0,0,8],scale:.7,rot:0}],5:[{path:"Tent.json",pos:[10,0,4],scale:.5,rot:-Math.PI/4},{path:"Banner.json",pos:[-3,0,8],scale:.5,rot:Math.PI/4},{path:"Banner.json",pos:[3,0,8],scale:.5,rot:-Math.PI/4},{path:"Street Light.json",pos:[-10,0,0],scale:.7,rot:0},{path:"Street Light.json",pos:[10,0,0],scale:.7,rot:0}]}[e];if(i)for(const r of i)try{const a=await this.loadEntity(`/presets/RPG_Props/${r.path}`,{position:r.pos,scale:r.scale,rotation:r.rot});if(a&&a.group){const o=a.group.position.y;a.group.position.y=-3,a.group.scale.set(0,0,0);const l=performance.now(),c=800,u=()=>{const f=performance.now()-l,d=Math.min(1,f/c),p=1-Math.pow(1-d,3);a.group.position.y=-3+(o+3)*p,a.group.scale.setScalar(r.scale*p),d<1&&requestAnimationFrame(u)};requestAnimationFrame(u)}}catch(a){console.warn("[SceneManager] Shop decoration failed:",a)}}}let hm=0;function An(s,t,e=[]){const n=Vi[s];if(!n)throw new Error(`Unknown blueprint: ${s}`);return{uid:`item_${hm++}`,blueprintId:s,name:n.name,type:n.type,quality:Math.floor(t),traits:[...e],value:Math.floor(n.baseValue*(1+t/100))}}function dm(s,t,e=[],n=0){const i=Je[s];if(!i)throw new Error(`Unknown recipe: ${s}`);const r=[...i.materials].sort(),a=t.map(d=>d.blueprintId).sort();if(r.length!==a.length)throw new Error("素材の数が合いません");for(let d=0;d<r.length;d++)if(r[d]!==a[d])throw new Error(`素材が異なります: expected ${r[d]}, got ${a[d]}`);const o=t.reduce((d,p)=>d+p.quality,0),l=t.length>0?o/t.length:50,c=new Set;t.forEach(d=>{d.traits.forEach(p=>c.add(p))});const u=[];for(const d of e)c.has(d)&&u.length<ne.maxTraitSlots&&u.push(d);const f=Math.min(100,Math.max(0,l+n));return An(i.targetId,f,u)}class fm{constructor(){this.gold=ne.initialGold,this.items=[];for(const t of ne.initialItems)this.items.push(An(t.blueprintId,t.quality,t.traits))}addGold(t){this.gold+=t,Q.emit("gold:changed",{gold:this.gold})}spendGold(t){return this.gold>=t?(this.gold-=t,Q.emit("gold:changed",{gold:this.gold}),!0):!1}addItem(t){this.items.push(t)}removeItem(t){const e=this.items.findIndex(n=>n.uid===t);return e!==-1?this.items.splice(e,1)[0]:null}getItems(){return this.items}getItemsByBlueprint(t){return this.items.filter(e=>e.blueprintId===t)}}class pm{constructor(t){this.inventory=t,this.displayedItems=[],this.maxSlots=ne.shopMaxDisplaySlots,this.sellTimer=0,this.sellInterval=ne.shopSellInterval,Q.on("rank:up",e=>{this.maxSlots=e.displaySlots})}displayItem(t){if(this.displayedItems.length>=this.maxSlots)return!1;const e=this.inventory.removeItem(t);return e?(this.displayedItems.push(e),!0):!1}update(t){this.displayedItems.length!==0&&(this.sellTimer+=t,this.sellTimer>=this.sellInterval&&(this.sellTimer=0,this._processSale()))}_processSale(){const t=this.displayedItems.shift();t&&(this.inventory.addGold(t.value),Q.emit("item:sold",{item:t}),console.log(`[Shop] ${t.name} が ${t.value}G で売れました！`))}}const mm=[{id:"adv_knight",name:"新人騎士アーサー",icon:"🛡️",exploreTimeMultiplier:1},{id:"adv_archer",name:"狩人ロビン",icon:"🏹",exploreTimeMultiplier:.85}],Dl=[{id:"adv_mage",name:"見習い魔女リリー",icon:"🧙‍♀️",exploreTimeMultiplier:1.1,unlockRank:2},{id:"adv_thief",name:"盗賊キャット",icon:"🐱",exploreTimeMultiplier:.7,unlockRank:3},{id:"adv_paladin",name:"聖騎士セシル",icon:"⚜️",exploreTimeMultiplier:1.2,unlockRank:4}],yn=[0,3,8,15,25,40,60,85,120,170],br={qualityBonus:2,timeReduction:.05,dropBonus:.06};class gm{constructor(t){this.inventory=t,this.adventurers=mm.map(e=>this._createAdventurer(e)),Q.on("rank:up",e=>this._checkUnlocks(e.rank))}_createAdventurer(t){return{id:t.id,name:t.name,icon:t.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:t.exploreTimeMultiplier,currentArea:null,level:1,exp:0,equipment:{weapon:null,armor:null}}}_checkUnlocks(t){for(const e of Dl)if(e.unlockRank===t&&!this.adventurers.find(n=>n.id===e.id)){const n=this._createAdventurer(e);this.adventurers.push(n),Q.emit("adventurer:joined",{adventurer:n})}}getAdventurers(){return this.adventurers}getUnlockedAreas(){return Object.values(Ye).filter(t=>t.unlocked)}equipWeapon(t,e){const n=this.adventurers.find(r=>r.id===t);if(!n||n.status!=="idle")return!1;const i=this.inventory.removeItem(e);return i?(n.equipment.weapon&&this.inventory.addItem(n.equipment.weapon),n.equipment.weapon=i,Q.emit("inventory:changed"),!0):!1}unequipWeapon(t){const e=this.adventurers.find(n=>n.id===t);return!e||e.status!=="idle"||!e.equipment.weapon?!1:(this.inventory.addItem(e.equipment.weapon),e.equipment.weapon=null,Q.emit("inventory:changed"),!0)}dispatch(t,e){const n=this.adventurers.find(o=>o.id===t);if(!n||n.status!=="idle")return!1;const i=Ye[e];if(!i||!i.unlocked)return!1;const r=1-(n.level-1)*br.timeReduction,a=Math.max(5,Math.ceil(i.baseTime*n.exploreTimeMultiplier*r));return n.status="exploring",n.timer=a,n.maxTimer=a,n.currentArea=e,Q.emit("inventory:changed"),!0}update(t){for(const e of this.adventurers)e.status==="exploring"&&(e.timer-=t,e.timer<=0&&this._returnFromExplore(e))}_returnFromExplore(t){const e=Ye[t.currentArea];if(t.status="idle",t.timer=0,t.currentArea=null,!e)return;const n=(t.level-1)*br.qualityBonus;let i=0;t.equipment.weapon&&(i=Math.floor(t.equipment.weapon.quality*ne.equipmentQualityBonus));const r=(t.level-1)*br.dropBonus;let a=Math.floor(Math.random()*(e.dropCountMax-e.dropCountMin+1))+e.dropCountMin;Math.random()<r&&a++;const o=[];for(let l=0;l<a;l++){const c=this._rollDrop(e.dropTable),u=Math.floor(Math.random()*(e.qualityMax-e.qualityMin+1))+e.qualityMin,f=Math.min(100,u+n+i),d=[];Math.random()<ne.traitChance&&e.traitPool.length>0&&d.push(e.traitPool[Math.floor(Math.random()*e.traitPool.length)]);const p=An(c,f,d);this.inventory.addItem(p),o.push(p)}this._gainExp(t,1),Q.emit("adventurer:return",{adventurer:t,loot:o})}_gainExp(t,e){t.exp+=e;const n=yn.length;for(;t.level<n&&t.exp>=yn[t.level];)t.level++,Q.emit("adventurer:levelUp",{adventurer:t,newLevel:t.level})}_rollDrop(t){const e=t.reduce((i,r)=>i+r.weight,0);let n=Math.random()*e;for(const i of t)if(n-=i.weight,n<=0)return i.blueprintId;return t[0].blueprintId}}class _m{constructor(t){this.inventory=t,this.day=ne.startingDay,this.dayTimer=0,this.totalSales=0,this.currentRankIndex=0,this.isGameOver=!1,this.isGameCleared=!1,Q.on("item:sold",e=>{this.totalSales+=e.item.value,this._checkRankUp()})}get currentRank(){return ne.ranks[this.currentRankIndex]}get currentRent(){return ne.dailyRent+this.currentRankIndex*ne.rentIncreasePerRank}get dayProgress(){return this.dayTimer/ne.dayDurationSeconds}update(t){this.isGameOver||(this.dayTimer+=t,this.dayTimer>=ne.dayDurationSeconds&&(this.dayTimer=0,this._processNewDay()))}_processNewDay(){this.day++;const t=this.currentRent;if(!this.inventory.spendGold(t)){this.isGameOver=!0,Q.emit("game:over",{day:this.day,reason:`維持費 ${t}G を支払えませんでした。`,totalSales:this.totalSales,rank:this.currentRank.name});return}Q.emit("day:newDay",{day:this.day,rent:t}),Q.emit("day:tick")}_checkRankUp(){const t=this.currentRankIndex+1;if(t>=ne.ranks.length)return;const e=ne.ranks[t];if(this.totalSales>=e.requiredSales){this.currentRankIndex=t,Q.emit("rank:up",{rank:e.rank,rankName:e.name,displaySlots:e.displaySlots});for(const n of e.newRecipes)if(Je[n]){Je[n].unlocked=!0;const i=Vi[Je[n].targetId];Q.emit("recipe:unlocked",{id:n,name:i?i.name:n})}for(const n of e.newAreas)Ye[n]&&(Ye[n].unlocked=!0,Q.emit("area:unlocked",{id:n,name:Ye[n].name}));e.rank>=ne.goalShopRank&&!this.isGameCleared&&(this.isGameCleared=!0,Q.emit("game:cleared",{day:this.day,totalSales:this.totalSales,rank:e.name}))}}}const $o=[{id:"villager",name:"村人",icon:"👤",demandTypes:["consumable"],patienceMultiplier:1,priceMultiplier:1,dialogue:"なにか回復できるものはないかな…"},{id:"merchant",name:"旅の商人",icon:"🧳",demandTypes:["equipment","accessory"],patienceMultiplier:.8,priceMultiplier:1.3,dialogue:"良い武具を仕入れたいんだ！"},{id:"soldier",name:"兵士",icon:"⚔️",demandTypes:["equipment"],patienceMultiplier:1,priceMultiplier:1.1,dialogue:"戦場で使える武器が欲しい。"},{id:"healer",name:"僧侶",icon:"✝️",demandTypes:["consumable"],patienceMultiplier:1.2,priceMultiplier:1.2,dialogue:"回復薬を補充させてください。"},{id:"noble",name:"貴族",icon:"👑",demandTypes:["equipment","accessory"],patienceMultiplier:.5,priceMultiplier:2,dialogue:"最高級の品を見せてもらおうか！"},{id:"witch",name:"魔女",icon:"🧙‍♀️",demandTypes:["consumable","material"],patienceMultiplier:.9,priceMultiplier:1.4,dialogue:"珍しい素材はあるかしら…？"},{id:"adventurer_customer",name:"冒険者",icon:"🗡️",demandTypes:["equipment","consumable"],patienceMultiplier:1,priceMultiplier:1,dialogue:"ダンジョン探索の準備をしたいんだ。"}];class vm{constructor(t,e,n,i){this.inventory=t,this.shop=e,this.events=n,this.reputation=i,this.activeCustomers=[],Q.on("day:tick",()=>this._spawnDailyCustomers())}update(t){for(let e=this.activeCustomers.length-1;e>=0;e--){const n=this.activeCustomers[e];if(n.timer-=t,n.timer<=0){this.activeCustomers.splice(e,1),Q.emit("customer:left",{name:n.name,icon:n.icon}),Q.emit("inventory:changed");continue}const i=this._findMatch(n);i&&this._processPurchase(n,i,e)}}getActiveCustomers(){return this.activeCustomers}_spawnDailyCustomers(){this.activeCustomers=[];let t=ne.maxCustomersPerDay;this.reputation&&(t=Math.floor(t*this.reputation.getCustomerRateMultiplier())),this.events&&this.events.hasEffect("double_customers")&&(t*=2);const e=this.reputation?$o.filter(n=>this.reputation.getAvailableCustomerPool().includes(n.id)):$o;for(let n=0;n<t;n++)if(Math.random()<ne.customerSpawnChance){const i=e[Math.floor(Math.random()*e.length)],r=ne.customerPatienceSeconds*i.patienceMultiplier,a={...i,timer:r,maxTimer:r};this.activeCustomers.push(a),Q.emit("customer:arrived",{name:i.name,icon:i.icon,dialogue:i.dialogue})}}_findMatch(t){for(const e of this.shop.displayedItems)if(t.demandTypes.includes(e.type))return e;return null}_processPurchase(t,e,n){const i=this.shop.displayedItems.indexOf(e);if(i===-1)return;this.shop.displayedItems.splice(i,1);let r=Math.floor(e.value*ne.customerBonusMultiplier*t.priceMultiplier);this.reputation&&(r=Math.floor(r*(1+this.reputation.getPriceBonus()))),this.events&&this.events.hasEffect("sell_bonus")&&(r=Math.floor(r*this.events.getEffectMultiplier("sell_bonus"))),this.inventory.addGold(r),this.activeCustomers.splice(n,1),Q.emit("customer:bought",{customerName:t.name,item:e,price:r}),Q.emit("item:sold",{item:{...e,value:r}}),Q.emit("inventory:changed")}}const Tr=[{id:"merchant_visit",name:"旅の商人",icon:"🧳",description:"旅の商人が珍しい素材を持ってきた！安く買える。",effect:"bonus_material",duration:0,weight:25},{id:"storm",name:"暴風雨",icon:"🌧️",description:"激しい嵐が来た。探索時間が50%長くなる。",effect:"explore_slow",multiplier:1.5,duration:1,weight:15},{id:"festival",name:"収穫祭",icon:"🎉",description:"町でお祭り！来客数が2倍に。",effect:"double_customers",duration:1,weight:15},{id:"tax",name:"王国の徴税",icon:"📜",description:"王国から臨時の税金が課されました…",effect:"pay_tax",taxAmount:50,duration:0,weight:12},{id:"lucky_find",name:"幸運の発見",icon:"🍀",description:"道端で素材を拾った！",effect:"free_material",duration:0,weight:20},{id:"reputation",name:"評判の広まり",icon:"📢",description:"店の評判が広まった！次の売却価格が30%アップ。",effect:"sell_bonus",multiplier:1.3,duration:1,weight:13}];class xm{constructor(t){this.inventory=t,this.activeEffects=[],Q.on("day:tick",()=>this._onNewDay())}getActiveEffects(){return this.activeEffects}hasEffect(t){return this.activeEffects.some(e=>e.effect===t)}getEffectMultiplier(t){const e=this.activeEffects.find(n=>n.effect===t);return e?e.multiplier:1}_onNewDay(){this.activeEffects=this.activeEffects.filter(t=>(t.remainingDays--,t.remainingDays>0)),Math.random()<.5&&this._triggerRandomEvent()}_triggerRandomEvent(){const t=this._rollEvent();if(t)switch(Q.emit("event:triggered",{name:t.name,icon:t.icon,description:t.description}),t.effect){case"bonus_material":{const e=Object.values(Ye).filter(i=>i.unlocked),n=e[Math.floor(Math.random()*e.length)];if(n)for(let i=0;i<2;i++){const r=n.dropTable[Math.floor(Math.random()*n.dropTable.length)],a=An(r.blueprintId,30+Math.floor(Math.random()*30),[]);this.inventory.addItem(a)}Q.emit("inventory:changed");break}case"free_material":{const e=["wood","stone","herb","slime_jelly"],n=e[Math.floor(Math.random()*e.length)],i=An(n,40+Math.floor(Math.random()*30),[]);this.inventory.addItem(i),Q.emit("inventory:changed");break}case"pay_tax":{this.inventory.spendGold(t.taxAmount);break}case"explore_slow":case"double_customers":case"sell_bonus":{this.activeEffects.push({effect:t.effect,multiplier:t.multiplier||1,remainingDays:t.duration,name:t.name,icon:t.icon});break}}}_rollEvent(){const t=Tr.reduce((n,i)=>n+i.weight,0);let e=Math.random()*t;for(const n of Tr)if(e-=n.weight,e<=0)return n;return Tr[0]}}const Mm="/bgm/title_01.mp3",ym="/bgm/Endeing_01.mp3",Sm=Array.from({length:15},(s,t)=>`/bgm/bgm_${String(t+1).padStart(2,"0")}.mp3`);class Em{constructor(){this.ctx=null,this.masterGain=null,this.bgmGain=null,this.seGain=null,this.muted=!1,this.initialized=!1,this.audioEl=null,this.bgmSource=null,this.shuffledPlaylist=[],this.currentTrackIndex=0,this.isTitleBGM=!1,this.isFading=!1,this.proceduralActive=!1,this._bgmTimeout=null;const t=localStorage.getItem("voxelshop_sound");if(t)try{this.muted=JSON.parse(t).muted||!1}catch{}}init(){if(!this.initialized){this.initialized=!0,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:1,this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.35,this.bgmGain.connect(this.masterGain),this.seGain=this.ctx.createGain(),this.seGain.gain.value=.25,this.seGain.connect(this.masterGain),this.audioEl=new Audio,this.audioEl.crossOrigin="anonymous",this.audioEl.loop=!1,this.audioEl.volume=1;try{this.bgmSource=this.ctx.createMediaElementSource(this.audioEl),this.bgmSource.connect(this.bgmGain)}catch{console.warn("[SoundManager] MediaElementSource not supported, using direct audio")}this.audioEl.addEventListener("ended",()=>{this.isTitleBGM?(this.audioEl.currentTime=0,this.audioEl.play().catch(()=>{})):this.playNextTrack()}),this._shufflePlaylist(),this._bindEvents()}}_bindEvents(){Q.on("item:crafted",()=>this.playCraftSuccess()),Q.on("item:sold",()=>this.playSellCoin()),Q.on("customer:arrived",()=>this.playDoorBell()),Q.on("rank:up",()=>this.playFanfare()),Q.on("adventurer:levelUp",()=>this.playLevelUp()),Q.on("event:triggered",()=>this.playEventChime()),Q.on("day:tick",()=>this.playDayTick()),Q.on("game:over",()=>this.playGameOver()),Q.on("day:newDay",()=>this._onNewDay()),Q.on("game:clear",()=>this.playEndingBGM())}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.masterGain.gain.setTargetAtTime(this.muted?0:1,this.ctx.currentTime,.1),!this.bgmSource&&this.audioEl&&(this.audioEl.volume=this.muted?0:1),localStorage.setItem("voxelshop_sound",JSON.stringify({muted:this.muted})),this.muted}startTitleBGM(){this.isTitleBGM=!0,this._playTrack(Mm)}startGameBGM(){if(this.isTitleBGM=!1,this.audioEl&&!this.audioEl.paused&&this.audioEl.src.includes("title_01")){this.audioEl.loop=!1;const t=()=>{this.audioEl.removeEventListener("ended",t),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])};this.audioEl.addEventListener("ended",t,{once:!0});return}this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])}playEndingBGM(){this.isTitleBGM=!1,this._fadeOutThen(()=>{this._playTrack(ym)})}playNextTrack(){this.isTitleBGM||(this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this._shufflePlaylist(),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex]))}stopBGM(){this.audioEl&&(this.audioEl.pause(),this.audioEl.currentTime=0),this._stopProcedural()}_onNewDay(){this.isTitleBGM||this._fadeOutThen(()=>{this.playNextTrack()})}_fadeOutThen(t,e=2e3){if(!this.bgmGain||this.isFading){t();return}this.isFading=!0;const n=this.ctx.currentTime;this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value,n),this.bgmGain.gain.linearRampToValueAtTime(0,n+e/1e3),setTimeout(()=>{this.audioEl&&this.audioEl.pause(),this.bgmGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.isFading=!1,t()},e)}_playTrack(t){if(!this.audioEl)return;this._stopProcedural(),this.audioEl.src=t,this.audioEl.load();const e=this.audioEl.play();e&&e.catch(n=>{console.warn("[SoundManager] Track play failed, fallback to procedural:",n.message),this._startProcedural()})}_shufflePlaylist(){this.shuffledPlaylist=[...Sm];for(let t=this.shuffledPlaylist.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[this.shuffledPlaylist[t],this.shuffledPlaylist[e]]=[this.shuffledPlaylist[e],this.shuffledPlaylist[t]]}this.currentTrackIndex=0}_startProcedural(){this.proceduralActive||(this.proceduralActive=!0,this._playProceduralLoop())}_stopProcedural(){this.proceduralActive=!1,this._bgmTimeout&&(clearTimeout(this._bgmTimeout),this._bgmTimeout=null)}_playProceduralLoop(){if(!this.proceduralActive||!this.ctx)return;const t=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],e=this.ctx.currentTime,n=6+Math.floor(Math.random()*4),i=n*1.2;for(let a=0;a<n;a++){const o=t[Math.floor(Math.random()*t.length)],l=e+a*1.2+Math.random()*.2,c=.8+Math.random()*.6;this._playBGMNote(o,l,c)}const r=t[Math.floor(Math.random()*4)];this._playPad(r,e,i+1),this._bgmTimeout=setTimeout(()=>this._playProceduralLoop(),(i+1.5)*1e3)}_playBGMNote(t,e,n){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=t,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.15,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+n),i.connect(r),r.connect(this.bgmGain),i.start(e),i.stop(e+n+.1)}_playPad(t,e,n){[t*.5,t*.5*1.25,t*.5*1.5].forEach(r=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="triangle",a.frequency.value=r,l.type="lowpass",l.frequency.value=400,l.Q.value=.5,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.04,e+1),o.gain.linearRampToValueAtTime(.04,e+n-1),o.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(l),l.connect(o),o.connect(this.bgmGain),a.start(e),a.stop(e+n+.1)})}playCraftSuccess(){if(!this.ctx)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{this._playSENote(n,t+i*.08,.3,"sine",.15)})}playPuzzleMatch(t=1){if(!this.ctx)return;const e=this.ctx.currentTime,n=440+t*80;this._playSENote(n,e,.15,"square",.08),this._playSENote(n*1.25,e+.06,.12,"square",.06)}playSellCoin(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(1200,t,.08,"square",.06),this._playSENote(1800,t+.04,.06,"square",.04),this._playSENote(2400,t+.07,.1,"sine",.05)}playDoorBell(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(880,t,.4,"sine",.12),this._playSENote(1108.73,t+.15,.35,"sine",.1)}playFanfare(){if(!this.ctx)return;const t=this.ctx.currentTime,e=[523.25,523.25,659.25,783.99,659.25,783.99,1046.5],n=[0,.12,.24,.36,.48,.6,.72],i=[.1,.1,.1,.15,.1,.15,.6];e.forEach((r,a)=>{this._playSENote(r,t+n[a],i[a],"square",.1)})}playLevelUp(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<6;e++)this._playSENote(400+e*120,t+e*.06,.15,"sine",.1)}playEventChime(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(660,t,.25,"sine",.1),this._playSENote(880,t+.12,.3,"sine",.08),this._playSENote(1100,t+.24,.25,"sine",.06)}playDayTick(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(440,t,.15,"triangle",.05)}playGameOver(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(110,t,1.5,"sawtooth",.15),this._playSENote(82.41,t+.1,1.2,"sine",.12)}_playSENote(t,e,n,i="sine",r=.1){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=i,a.frequency.value=t,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(r,e+.01),o.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(o),o.connect(this.seGain),a.start(e),a.stop(e+n+.1)}}const vi=new Em,Yo=[{name:"粗悪",min:0,max:20,css:"q-poor",icon:"▪"},{name:"普通",min:21,max:40,css:"q-common",icon:"▫"},{name:"良品",min:41,max:60,css:"q-fine",icon:"◆"},{name:"優品",min:61,max:80,css:"q-excellent",icon:"★"},{name:"極上",min:81,max:100,css:"q-legendary",icon:"✦"}],jo={material:{icon:"🪨",label:"素材",css:"type-material"},equipment:{icon:"⚔️",label:"装備",css:"type-equipment"},consumable:{icon:"🧪",label:"消耗品",css:"type-consumable"},accessory:{icon:"💎",label:"アクセサリ",css:"type-accessory"}};function Hs(s){return Yo.find(t=>s>=t.min&&s<=t.max)||Yo[0]}function Vs(s){return jo[s]||jo.material}function Ul(s){const t=Il[s];return t?`trait-${t.color}`:""}function bm(s){const t=Hs(s.quality),e=Vs(s.type),n=s.traits.map(i=>`<span class="trait-badge ${Ul(i)}">${i}</span>`).join("");return`
    <div class="item-card ${t.css} ${e.css}">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${e.icon}</span>
        <span class="item-type-label">${e.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${s.name}</span>
        <span class="item-quality">${t.icon} Q: ${s.quality}</span>
      </div>
      <div class="item-quality-bar">
        <div class="item-quality-fill" style="width:${s.quality}%"></div>
      </div>
      <div class="item-traits">${n}</div>
    </div>
  `}function Tm(s){const t=Hs(s.quality),e=Vs(s.type);return`
    <div class="item-card ${t.css} ${e.css}">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${e.icon}</span>
        <span class="item-type-label">${e.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${s.name}</span>
        <span class="item-quality">${t.icon} ${s.value}G</span>
      </div>
      <div class="item-quality-bar">
        <div class="item-quality-fill" style="width:${s.quality}%"></div>
      </div>
      <button class="btn btn-display-item" data-uid="${s.uid}">🏪 お店に出す</button>
    </div>
  `}function Am(s){const t=Hs(s.quality),e=Vs(s.type),n=s.traits.map(i=>`<span class="trait-badge ${Ul(i)}">${i}</span>`).join("");return`
    <div class="item-card ${t.css} ${e.css} displayed-glow">
      <div class="item-card-type-strip">
        <span class="item-type-icon">${e.icon}</span>
        <span class="item-type-label">${e.label}</span>
      </div>
      <div class="item-card-header">
        <span class="item-name">${s.name}</span>
        <span class="item-quality">${t.icon} ${s.value}G</span>
      </div>
      <div class="item-traits">${n}</div>
    </div>
  `}class wm{constructor(t){this.inventory=t,this.el=document.getElementById("inventory-list"),this.filter="all",this.sort="type"}render(){let t=this.inventory.getItems();const n=[...this.filter==="all"?t:t.filter(o=>o.type===this.filter)].sort((o,l)=>{if(this.sort==="quality")return l.quality-o.quality;if(this.sort==="name")return o.name.localeCompare(l.name);const c={material:0,equipment:1,consumable:2,accessory:3},u=(c[o.type]||0)-(c[l.type]||0);return u!==0?u:l.quality-o.quality}),i={all:t.length,material:0,equipment:0,consumable:0,accessory:0};t.forEach(o=>i[o.type]=(i[o.type]||0)+1);const r=[{key:"all",label:"📦 すべて"},{key:"material",label:"🪨 素材"},{key:"equipment",label:"⚔️ 装備"},{key:"consumable",label:"🧪 消耗品"},{key:"accessory",label:"💎 アクセ"}];let a='<div class="inv-toolbar">';a+='<div class="inv-filters">',r.forEach(o=>{const l=this.filter===o.key?"active":"",c=i[o.key]||0;a+=`<button class="btn inv-filter-btn ${l}" data-filter="${o.key}">${o.label} <span class="inv-count">${c}</span></button>`}),a+="</div>",a+='<div class="inv-sort">',a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="type"?"active":""}" data-sort="type">種類</button>`,a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="quality"?"active":""}" data-sort="quality">品質</button>`,a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="name"?"active":""}" data-sort="name">名前</button>`,a+="</div></div>",n.length===0?a+=`<p class="inv-empty">${this.filter==="all"?"所持品がありません。":"このカテゴリのアイテムはありません。"}</p>`:(a+='<div class="item-grid">',a+=n.map(o=>bm(o)).join(""),a+="</div>"),this.el.innerHTML=a,this.el.querySelectorAll(".inv-filter-btn").forEach(o=>{o.addEventListener("click",l=>{this.filter=l.currentTarget.dataset.filter,this.render()})}),this.el.querySelectorAll(".inv-sort-btn").forEach(o=>{o.addEventListener("click",l=>{this.sort=l.currentTarget.dataset.sort,this.render()})})}}const Ee=6,Re=12,re=40,bs=45,Ar=1,Rm=.3,Cm=.02,ki=[{id:0,emoji:"🪨",label:"石",color:"#8a8a7a",glow:"rgba(138,138,122,0.4)"},{id:1,emoji:"🌿",label:"草",color:"#7daa68",glow:"rgba(125,170,104,0.4)"},{id:2,emoji:"🔥",label:"火",color:"#c46a5a",glow:"rgba(196,106,90,0.4)"},{id:3,emoji:"💎",label:"結晶",color:"#7ab0c4",glow:"rgba(122,176,196,0.4)"},{id:4,emoji:"⚔️",label:"金属",color:"#c4a87a",glow:"rgba(196,168,122,0.4)"},{id:5,emoji:"🧪",label:"薬品",color:"#b87ae8",glow:"rgba(184,122,232,0.4)"}],Gi=[{min:0,bonus:0,rank:"なし",color:"#888"},{min:300,bonus:5,rank:"銅",color:"#c4a87a"},{min:800,bonus:10,rank:"銀",color:"#c0c0c0"},{min:1500,bonus:18,rank:"金",color:"#e8b84b"},{min:2800,bonus:25,rank:"極",color:"#e87ae8"}];class Pm{constructor(){this.overlay=null,this.canvas=null,this.ctx=null,this.running=!1,this.resolveCallback=null,this.grid=[],this.currentPiece=null,this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=bs,this.dropTimer=0,this.dropInterval=Ar,this.linesCleared=0,this.paused=!1,this.clearingCells=[],this.shakeTimer=0,this._boundKeyDown=this._onKeyDown.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundMouseMove=this._onMouseMove.bind(this),this._boundTouchStart=this._onTouchStart.bind(this),this._boundTouchMove=this._onTouchMove.bind(this),this._touchStartX=0,this._touchStartY=0,this._mouseCol=-1}start(t,e=[]){return new Promise(n=>{this.resolveCallback=n,this.recipeName=t,this.materialHints=e,this._initGame(),this._createUI(),this._startLoop()})}_initGame(){this.grid=[];for(let t=0;t<Re;t++)this.grid.push(new Array(Ee).fill(-1));this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=bs,this.dropTimer=0,this.dropInterval=Ar,this.linesCleared=0,this.clearingCells=[],this.shakeTimer=0,this.paused=!1,this.running=!0,this._spawnPiece()}_spawnPiece(){const t=Math.floor(Math.random()*ki.length);this.currentPiece={col:Math.floor(Ee/2),row:0,blocks:[t,ki[Math.floor(Math.random()*ki.length)].id],rotation:0},this.grid[0][this.currentPiece.col]!==-1&&this._endGame()}_createUI(){this.overlay=document.createElement("div"),this.overlay.className="puzzle-overlay",this.overlay.innerHTML=`
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>🧩 錬金パズル — ${this.recipeName}</h3>
          <div class="puzzle-timer" id="puzzle-timer">${bs}秒</div>
        </div>
        <div class="puzzle-body">
          <canvas id="puzzle-canvas" width="${Ee*re}" height="${Re*re}"></canvas>
          <div class="puzzle-sidebar">
            <div class="puzzle-score-box">
              <div class="puzzle-score-label">スコア</div>
              <div class="puzzle-score-value" id="puzzle-score">0</div>
            </div>
            <div class="puzzle-combo-box">
              <div class="puzzle-score-label">コンボ</div>
              <div class="puzzle-combo-value" id="puzzle-combo">x0</div>
            </div>
            <div class="puzzle-bonus-box">
              <div class="puzzle-score-label">品質ボーナス</div>
              <div class="puzzle-bonus-bar">
                <div class="puzzle-bonus-fill" id="puzzle-bonus-fill"></div>
              </div>
              <div class="puzzle-bonus-value" id="puzzle-bonus">+0</div>
            </div>
            <div class="puzzle-next-box">
              <div class="puzzle-score-label">操作</div>
              <div class="puzzle-controls-hint">
                ← → 移動<br>
                ↑ 回転<br>
                ↓ 加速<br>
                Space 即落
              </div>
            </div>
            <button class="btn puzzle-skip-btn" id="puzzle-skip">スキップ (ボーナスなし)</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this.canvas=document.getElementById("puzzle-canvas"),this.ctx=this.canvas.getContext("2d"),document.getElementById("puzzle-skip").addEventListener("click",()=>{this._endGame(!0)}),document.addEventListener("keydown",this._boundKeyDown),this.canvas.addEventListener("mousedown",this._boundMouseDown),this.canvas.addEventListener("mousemove",this._boundMouseMove),this.canvas.addEventListener("touchstart",this._boundTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._boundTouchMove,{passive:!1}),requestAnimationFrame(()=>this.overlay.classList.add("puzzle-visible"))}_startLoop(){this._lastTime=performance.now(),this._loop()}_loop(){if(!this.running)return;const t=performance.now(),e=(t-this._lastTime)/1e3;this._lastTime=t,this.paused||this._update(e),this._draw(),this._animFrame=requestAnimationFrame(()=>this._loop())}_update(t){if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this._endGame();return}const e=document.getElementById("puzzle-timer");if(e){const n=Math.ceil(this.timeLeft);e.textContent=`${n}秒`,e.style.color=n<=10?"#c46a5a":""}if(this.clearingCells.length>0){let n=!0;for(const i of this.clearingCells)i.timer-=t*4,i.timer>0&&(n=!1);if(n){for(const r of this.clearingCells)this.grid[r.row][r.col]=-1;this.clearingCells=[],this._applyGravity();const i=this._findMatches();i.length>0?(this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this._scoreMatches(i),this.clearingCells=i.map(r=>({...r,timer:1}))):this.combo=0}return}this.dropInterval=Math.max(Rm,Ar-(bs-this.timeLeft)*Cm),this.dropTimer+=t,this.dropTimer>=this.dropInterval&&(this.dropTimer=0,this._movePiece(0,1)||this._placePiece())}_movePiece(t,e){if(!this.currentPiece)return!1;const n=this.currentPiece,i=n.col+t,r=n.row+e,a=this._getPiecePositions(i,r,n.rotation);for(const[o,l]of a)if(o<0||o>=Re||l<0||l>=Ee||this.grid[o][l]!==-1)return!1;return n.col=i,n.row=r,!0}_rotatePiece(){if(!this.currentPiece)return;const t=this.currentPiece,e=(t.rotation+1)%2,n=this._getPiecePositions(t.col,t.row,e);for(const[i,r]of n)if(i<0||i>=Re||r<0||r>=Ee||this.grid[i][r]!==-1)return;t.rotation=e}_getPiecePositions(t,e,n){return n===0?[[e,t],[e+1,t]]:[[e,t],[e,t+1]]}_hardDrop(){if(this.currentPiece){for(;this._movePiece(0,1););this._placePiece()}}_placePiece(){if(!this.currentPiece)return;const t=this.currentPiece,e=this._getPiecePositions(t.col,t.row,t.rotation);for(let i=0;i<e.length;i++){const[r,a]=e[i];r>=0&&r<Re&&a>=0&&a<Ee&&(this.grid[r][a]=t.blocks[i])}const n=this._findMatches();n.length>0&&(this.combo=1,this.maxCombo=Math.max(this.maxCombo,1),this._scoreMatches(n),this.clearingCells=n.map(i=>({...i,timer:1}))),this._spawnPiece()}_findMatches(){const t=new Set;for(let e=0;e<Re;e++)for(let n=0;n<=Ee-3;n++){const i=this.grid[e][n];if(i!==-1&&this.grid[e][n+1]===i&&this.grid[e][n+2]===i){let r=n+2;for(;r+1<Ee&&this.grid[e][r+1]===i;)r++;for(let a=n;a<=r;a++)t.add(`${e},${a}`)}}for(let e=0;e<Ee;e++)for(let n=0;n<=Re-3;n++){const i=this.grid[n][e];if(i!==-1&&this.grid[n+1][e]===i&&this.grid[n+2][e]===i){let r=n+2;for(;r+1<Re&&this.grid[r+1][e]===i;)r++;for(let a=n;a<=r;a++)t.add(`${a},${e}`)}}return Array.from(t).map(e=>{const[n,i]=e.split(",").map(Number);return{row:n,col:i,type:this.grid[n][i]}})}_scoreMatches(t){const e=t.length*50,n=1+(this.combo-1)*.5,i=Math.floor(e*n);this.score+=i,this.linesCleared+=t.length,this._updateScoreUI()}_updateScoreUI(){const t=document.getElementById("puzzle-score");t&&(t.textContent=this.score);const e=document.getElementById("puzzle-combo");e&&(e.textContent=this.combo>0?`x${this.combo}`:"-",e.style.color=this.combo>=3?"#e8b84b":"");const n=this._getCurrentTier(),i=document.getElementById("puzzle-bonus");i&&(i.textContent=`+${n.bonus}`,i.style.color=n.color);const r=document.getElementById("puzzle-bonus-fill");if(r){const a=Gi[Gi.length-1].min,o=Math.min(100,this.score/a*100);r.style.width=`${o}%`,r.style.background=n.color}}_getCurrentTier(){let t=Gi[0];for(const e of Gi)this.score>=e.min&&(t=e);return t}_applyGravity(){for(let t=0;t<Ee;t++){let e=Re-1;for(let n=Re-1;n>=0;n--)this.grid[n][t]!==-1&&(n!==e&&(this.grid[e][t]=this.grid[n][t],this.grid[n][t]=-1),e--)}}_draw(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="rgba(30, 25, 18, 0.95)",t.fillRect(0,0,e,n),t.strokeStyle="rgba(160, 132, 92, 0.1)",t.lineWidth=1;for(let i=0;i<=Re;i++)t.beginPath(),t.moveTo(0,i*re),t.lineTo(e,i*re),t.stroke();for(let i=0;i<=Ee;i++)t.beginPath(),t.moveTo(i*re,0),t.lineTo(i*re,n),t.stroke();for(let i=0;i<Re;i++)for(let r=0;r<Ee;r++)if(this.grid[i][r]!==-1){const a=this.clearingCells.find(o=>o.row===i&&o.col===r);a?this._drawBlock(r,i,this.grid[i][r],a.timer):this._drawBlock(r,i,this.grid[i][r],1)}if(this.currentPiece&&this.clearingCells.length===0){const i=this.currentPiece;let r=i.row;for(;;){const l=this._getPiecePositions(i.col,r+1,i.rotation);let c=!0;for(const[u,f]of l)if(u>=Re||f<0||f>=Ee||u>=0&&this.grid[u][f]!==-1){c=!1;break}if(!c)break;r++}const a=this._getPiecePositions(i.col,r,i.rotation);for(let l=0;l<a.length;l++){const[c,u]=a[l];c>=0&&this._drawGhost(u,c,i.blocks[l])}const o=this._getPiecePositions(i.col,i.row,i.rotation);for(let l=0;l<o.length;l++){const[c,u]=o[l];c>=0&&this._drawBlock(u,c,i.blocks[l],1)}}this._mouseCol>=0&&this._mouseCol<Ee&&(t.fillStyle="rgba(232, 184, 75, 0.04)",t.fillRect(this._mouseCol*re,0,re,n))}_drawBlock(t,e,n,i){const r=this.ctx,a=ki[n],o=t*re,l=e*re,c=2;r.globalAlpha=i,r.fillStyle=a.color,r.beginPath(),r.roundRect(o+c,l+c,re-c*2,re-c*2,4),r.fill(),r.fillStyle=a.glow,r.beginPath(),r.roundRect(o+c,l+c,re-c*2,(re-c*2)*.4,[4,4,0,0]),r.fill(),r.font="18px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(a.emoji,o+re/2,l+re/2),r.globalAlpha=1}_drawGhost(t,e,n){const i=this.ctx,r=ki[n],a=t*re,o=e*re,l=2;i.globalAlpha=.2,i.strokeStyle=r.color,i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.roundRect(a+l,o+l,re-l*2,re-l*2,4),i.stroke(),i.setLineDash([]),i.globalAlpha=1}_onKeyDown(t){if(!(!this.running||this.clearingCells.length>0))switch(t.key){case"ArrowLeft":t.preventDefault(),this._movePiece(-1,0);break;case"ArrowRight":t.preventDefault(),this._movePiece(1,0);break;case"ArrowDown":t.preventDefault(),this._movePiece(0,1),this.dropTimer=0;break;case"ArrowUp":t.preventDefault(),this._rotatePiece();break;case" ":t.preventDefault(),this._hardDrop();break}}_onMouseDown(t){if(!this.running||this.clearingCells.length>0)return;const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=Math.floor(n/re);if(t.button===0&&this.currentPiece){const r=i-this.currentPiece.col;r!==0?this._movePiece(r>0?1:-1,0):this._rotatePiece()}t.button===2&&(t.preventDefault(),this._hardDrop())}_onMouseMove(t){const e=this.canvas.getBoundingClientRect();this._mouseCol=Math.floor((t.clientX-e.left)/re)}_onTouchStart(t){if(!this.running)return;t.preventDefault();const e=t.touches[0];this._touchStartX=e.clientX,this._touchStartY=e.clientY}_onTouchMove(t){if(!this.running||this.clearingCells.length>0)return;t.preventDefault();const e=t.touches[0],n=e.clientX-this._touchStartX,i=e.clientY-this._touchStartY;Math.abs(n)>30&&(this._movePiece(n>0?1:-1,0),this._touchStartX=e.clientX),i>40&&(this._movePiece(0,1),this._touchStartY=e.clientY,this.dropTimer=0),i<-40&&(this._rotatePiece(),this._touchStartY=e.clientY)}_endGame(t=!1){this.running=!1,cancelAnimationFrame(this._animFrame),document.removeEventListener("keydown",this._boundKeyDown),this.canvas.removeEventListener("mousedown",this._boundMouseDown),this.canvas.removeEventListener("mousemove",this._boundMouseMove),this.canvas.removeEventListener("touchstart",this._boundTouchStart),this.canvas.removeEventListener("touchmove",this._boundTouchMove);const e=t?Gi[0]:this._getCurrentTier(),n={bonus:e.bonus,score:t?0:this.score,rank:t?"スキップ":e.rank,rankColor:e.color,maxCombo:this.maxCombo,linesCleared:this.linesCleared,skipped:t};this._showResult(n)}_showResult(t){const e=this.overlay.querySelector(".puzzle-container");e.innerHTML=`
      <div class="puzzle-result">
        <h3>${t.skipped?"⏭️ スキップ":"✨ パズル完了！"}</h3>
        <div class="puzzle-result-stats">
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">スコア</span>
            <span class="puzzle-result-value">${t.score}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">最大コンボ</span>
            <span class="puzzle-result-value">x${t.maxCombo}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">消去数</span>
            <span class="puzzle-result-value">${t.linesCleared}</span>
          </div>
        </div>
        <div class="puzzle-result-bonus" style="color:${t.rankColor}">
          <div class="puzzle-result-rank">${t.rank}</div>
          <div class="puzzle-result-bonus-value">品質ボーナス: +${t.bonus}</div>
        </div>
        <button class="btn primary puzzle-result-btn" id="puzzle-done">完成！</button>
      </div>
    `,document.getElementById("puzzle-done").addEventListener("click",()=>{this.overlay.classList.remove("puzzle-visible"),setTimeout(()=>{this.overlay.remove(),this.overlay=null},300),this.resolveCallback&&this.resolveCallback(t)})}}class Lm{constructor(t){this.inventory=t,this.elRecipeList=document.getElementById("recipe-list"),this.elDetails=document.getElementById("crafting-details"),this.selectedRecipeId=null}render(){this._renderRecipeList(),this._renderDetails()}_renderRecipeList(){const t=Object.entries(Je).filter(([,e])=>e.unlocked);this.elRecipeList.innerHTML=t.map(([e,n])=>{const i=this.selectedRecipeId===e,r=Vi[n.targetId];return`<button class="btn ${i?"primary":""}" data-recipe-id="${e}">${r.name}</button>`}).join(""),this.elRecipeList.querySelectorAll("button").forEach(e=>{e.addEventListener("click",n=>{this.selectedRecipeId=n.currentTarget.getAttribute("data-recipe-id"),this.render()})})}_renderDetails(){if(!this.selectedRecipeId){this.elDetails.innerHTML="<p>レシピを選択してください</p>";return}const t=Je[this.selectedRecipeId];if(!t||!t.unlocked){this.elDetails.innerHTML="<p>レシピを選択してください</p>",this.selectedRecipeId=null;return}const e=Vi[t.targetId],n={};t.materials.forEach(c=>{n[c]=(n[c]||0)+1});let i=`<h4>製作: ${e.name}</h4><div class="crafting-details-body">`,r=!0;const a=[];for(const[c,u]of Object.entries(n)){const f=this.inventory.getItemsByBlueprint(c),d=Vi[c].name,p=f.length>=u;p||(r=!1);const g=p?f.slice(0,u):[];a.push(...g),i+=`
        <div class="crafting-material-slot">
          <div class="crafting-material-header">
            <span>${d}</span>
            <span class="${p?"text-ok":"text-ng"}">${f.length} / ${u} 所持</span>
          </div>
          ${g.map(x=>`<div class="crafting-material-detail">- [Q:${x.quality}] ${x.traits.join(", ")}</div>`).join("")}
        </div>
      `}if(r){const c=a.length?Math.floor(a.reduce((x,m)=>x+m.quality,0)/a.length):0,u=new Set;a.forEach(x=>x.traits.forEach(m=>u.add(m)));const f=Array.from(u).slice(0,ne.maxTraitSlots),d=Math.floor(e.baseValue*(c/50)),p=Hs(c),g=Vs(e.type);i+=`
        <div class="crafting-preview">
          <h5>完成予測</h5>
          <div class="item-card ${p.css} ${g.css}">
            <div class="item-card-type-strip">
              <span class="item-type-icon">${g.icon}</span>
              <span class="item-type-label">${g.label}</span>
            </div>
            <div class="item-card-header">
              <span class="item-name">${e.name}</span>
              <span class="item-quality">${p.icon} Q ≈ ${c}</span>
            </div>
            <div class="item-quality-bar">
              <div class="item-quality-fill" style="width:${c}%"></div>
            </div>
            <div class="item-traits">
              ${f.map(x=>{const m=Il[x];return`<span class="trait-badge ${m?`trait-${m.color}`:""}">${x}</span>`}).join("")}
            </div>
            <div class="crafting-value-preview">💰 推定売値: ${d}G</div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `}else i+='<div class="text-ng crafting-insufficient">素材が足りません</div>';i+="</div>",this.elDetails.innerHTML=i;const o=document.getElementById("btn-do-craft");o&&o.addEventListener("click",()=>{this._executeCrafting(this.selectedRecipeId,a)});const l=document.getElementById("btn-puzzle-craft");l&&l.addEventListener("click",()=>{this._executePuzzleCrafting(this.selectedRecipeId,a,e.name)})}_executeCrafting(t,e,n=0){const i=new Set;e.forEach(a=>a.traits.forEach(o=>i.add(o)));const r=Array.from(i).slice(0,ne.maxTraitSlots);try{const a=dm(t,e,r,n);e.forEach(l=>this.inventory.removeItem(l.uid)),this.inventory.addItem(a),Q.emit("inventory:changed"),Q.emit("item:crafted",{item:a}),this.render();const o=document.createElement("div");o.className="craft-flash",document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("fade-out")),setTimeout(()=>o.remove(),550)}catch(a){console.error("[CraftingTab]",a)}}async _executePuzzleCrafting(t,e,n){Q.emit("game:pause");const r=await new Pm().start(n);Q.emit("game:resume"),this._executeCrafting(t,e,r.bonus)}}class Im{constructor(t,e,n){this.inventory=t,this.shop=e,this.customers=n,this.el=document.querySelector("#tab-shop"),this.shopFilter="craftable"}render(){let t="<h3>🏪 お店の管理</h3>";const e=this.customers?this.customers.getActiveCustomers():[];e.length>0?(t+='<div class="customer-section">',t+="<h4>🔔 来店中のお客さん</h4>",t+='<div class="customer-list">',e.forEach(a=>{const o=Math.max(0,a.timer/a.maxTimer*100);t+=`
          <div class="customer-card">
            <div class="customer-header">
              <span class="customer-name">${a.icon} ${a.name}</span>
              <span class="customer-timer" data-customer-id="${a.id}">${Math.ceil(a.timer)}秒</span>
            </div>
            <div class="customer-dialogue">「${a.dialogue}」</div>
            <div class="customer-demand">欲しいもの: ${a.demandTypes.map(l=>({equipment:"⚔️ 武具",consumable:"🧪 消耗品",accessory:"💎 アクセサリ",material:"🪨 素材"})[l]||l).join("・")}</div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill customer-patience-bar" data-customer-patience="${a.id}" style="width:${o}%"></div>
            </div>
          </div>
        `}),t+="</div></div>"):t+='<div class="customer-empty">お客さんはまだ来ていません… 日が変わると来店します。</div>',t+=`<h4>📋 陳列中 (${this.shop.displayedItems.length} / ${this.shop.maxSlots})</h4>`,this.shop.displayedItems.length>0?(t+='<div class="item-grid shop-displayed-grid">',t+=this.shop.displayedItems.map(a=>Am(a)).join(""),t+="</div>"):t+='<p class="shop-empty-message">陳列棚は空です。倉庫からアイテムを陳列しましょう！</p>';const n=this.inventory.getItems(),i=n.filter(a=>a.type!=="material"),r=n.filter(a=>a.type==="material");if(t+="<h4>📦 倉庫から陳列する</h4>",n.length>0){t+='<div class="shop-inv-filters">',t+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="craftable"?"active":""}" data-shop-filter="craftable">⚔️ クラフト品 (${i.length})</button>`,t+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="material"?"active":""}" data-shop-filter="material">🪨 素材 (${r.length})</button>`,t+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="all"?"active":""}" data-shop-filter="all">すべて (${n.length})</button>`,t+="</div>";let a;this.shopFilter==="craftable"?a=i:this.shopFilter==="material"?a=r:a=n,a=[...a].sort((o,l)=>l.quality-o.quality),a.length>0?(t+='<div class="item-grid">',t+=a.map(o=>Tm(o)).join(""),t+="</div>"):t+='<p class="shop-empty-message">このカテゴリのアイテムはありません。</p>'}else t+='<p class="shop-empty-message">倉庫にアイテムがありません。冒険者を派遣して素材を集めましょう！</p>';this.el.innerHTML=t,this.el.querySelectorAll(".btn-display-item").forEach(a=>{a.addEventListener("click",o=>{const l=o.currentTarget.getAttribute("data-uid");this.shop.displayItem(l),Q.emit("inventory:changed"),this.render()})}),this.el.querySelectorAll(".shop-filter-btn").forEach(a=>{a.addEventListener("click",o=>{this.shopFilter=o.currentTarget.dataset.shopFilter,this.render()})})}updateCustomerTimers(){if(!this.customers)return;const t=this.customers.getActiveCustomers();this.el.querySelectorAll(".customer-timer").forEach(e=>{const n=e.getAttribute("data-customer-id"),i=t.find(r=>r.id===n);i&&(e.textContent=Math.ceil(i.timer)+"秒")}),this.el.querySelectorAll(".customer-patience-bar").forEach(e=>{const n=e.getAttribute("data-customer-patience"),i=t.find(r=>r.id===n);i&&i.maxTimer>0&&(e.style.width=`${Math.max(0,i.timer/i.maxTimer*100)}%`)})}}class Dm{constructor(t,e){this.adventurers=t,this.inventory=e,this.el=document.querySelector("#tab-dispatch"),this.selectedArea={},this.equipMode=null,Q.on("adventurer:joined",()=>this.render())}render(){const t=this.adventurers.getUnlockedAreas(),e=this.adventurers.getAdventurers();let n="<h3>冒険者の派遣</h3>";n+='<p class="text-dim dispatch-description">冒険者に探索を依頼し、素材を集めてもらいます。</p>',n+='<div class="dispatch-list">',e.forEach(i=>{const r=i.status==="exploring",a=r?Math.max(0,(1-i.timer/i.maxTimer)*100):0,o=i.level<yn.length?yn[i.level]:"—",l=i.level<yn.length?(i.exp-(yn[i.level-1]||0))/((yn[i.level]||1)-(yn[i.level-1]||0))*100:100;n+=`
        <div class="panel dispatch-card">
          <div class="dispatch-card-header">
            <div class="adv-identity">
              <h4>${i.icon} ${i.name}</h4>
              <span class="adv-level">Lv.${i.level}</span>
            </div>
            <span class="timer-display ${r?"timer-exploring":""}" data-adv-id="${i.id}">
              ${r?Math.ceil(i.timer)+"秒":"待機中"}
            </span>
          </div>
          <div class="adv-exp-bar">
            <div class="adv-exp-fill" style="width:${l}%"></div>
            <span class="adv-exp-text">EXP: ${i.exp} / ${o}</span>
          </div>
      `,r&&(n+=`
          <div class="progress-bar-container">
            <div class="progress-bar-fill" data-adv-progress="${i.id}" style="width:${a}%"></div>
          </div>
        `);const c=i.equipment.weapon?`${i.equipment.weapon.name} (Q:${i.equipment.weapon.quality})`:"なし";if(n+=`
        <div class="dispatch-equipment-row">
          <span class="equip-label">⚔️ 武器: ${c}</span>
      `,r||(i.equipment.weapon&&(n+=`<button class="btn btn-sm btn-unequip" data-adv-id="${i.id}">外す</button>`),n+=`<button class="btn btn-sm btn-equip-toggle" data-adv-id="${i.id}">装備変更</button>`),n+="</div>",this.equipMode===i.id&&!r){const u=this.inventory.getItems().filter(f=>f.type==="equipment");u.length>0?(n+='<div class="equip-select-panel">',u.forEach(f=>{const d=f.traits.length>0?` [${f.traits.join(", ")}]`:"";n+=`
              <button class="btn btn-sm btn-equip-item" data-adv-id="${i.id}" data-item-uid="${f.uid}">
                ${f.name} (Q:${f.quality})${d}
              </button>
            `}),n+="</div>"):n+='<p class="text-dim" style="font-size:12px; padding:4px 8px;">装備可能なアイテムがありません。</p>'}if(!r){n+='<div class="area-select-row">',t.forEach(f=>{const d=this.selectedArea[i.id]===f.id,p=1-(i.level-1)*.05,g=Math.max(5,Math.ceil(f.baseTime*i.exploreTimeMultiplier*p));n+=`
            <button class="btn area-btn ${d?"area-btn-selected":""}"
                    data-adv-id="${i.id}" data-area-id="${f.id}">
              <span class="area-icon">${f.icon}</span>
              <span class="area-name">${f.name}</span>
              <span class="area-time">${g}秒</span>
            </button>
          `}),n+="</div>";const u=!!this.selectedArea[i.id];n+=`
          <button class="btn primary btn-dispatch" data-adv-id="${i.id}" ${u?"":"disabled"}>
            探索へ向かわせる
          </button>
        `}n+="</div>"}),n+="</div>",this.el.innerHTML=n,this._bindEvents()}_bindEvents(){this.el.querySelectorAll(".area-btn").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-adv-id"),i=e.currentTarget.getAttribute("data-area-id");this.selectedArea[n]=i,this.render()})}),this.el.querySelectorAll(".btn-dispatch").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-adv-id"),i=this.selectedArea[n];i&&(this.adventurers.dispatch(n,i),this.render())})}),this.el.querySelectorAll(".btn-equip-toggle").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-adv-id");this.equipMode=this.equipMode===n?null:n,this.render()})}),this.el.querySelectorAll(".btn-equip-item").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-adv-id"),i=e.currentTarget.getAttribute("data-item-uid");this.adventurers.equipWeapon(n,i),this.equipMode=null,this.render()})}),this.el.querySelectorAll(".btn-unequip").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-adv-id");this.adventurers.unequipWeapon(n),this.render()})})}updateTimers(){const t=this.adventurers.getAdventurers();this.el.querySelectorAll(".timer-display").forEach(e=>{const n=e.getAttribute("data-adv-id"),i=t.find(r=>r.id===n);i&&(e.textContent=i.status==="idle"?"待機中":Math.ceil(i.timer)+"秒")}),this.el.querySelectorAll(".progress-bar-fill").forEach(e=>{const n=e.getAttribute("data-adv-progress"),i=t.find(r=>r.id===n);if(i&&i.status==="exploring"&&i.maxTimer>0){const r=Math.max(0,(1-i.timer/i.maxTimer)*100);e.style.width=`${r}%`}})}}class Um{constructor(t,e){this.dayCycle=t,this.reputation=e}render(){const t=document.getElementById("tab-stats");if(!t)return;const e=Ia,n=e.getAverageDailySales(7),i=e.totalCustomersServed+e.totalCustomersLost>0?Math.round(e.totalCustomersServed/(e.totalCustomersServed+e.totalCustomersLost)*100):0;t.innerHTML=`
      <h2 class="section-title">📊 経営ダッシュボード</h2>

      <div class="stats-grid">
        <div class="stats-card stats-card-gold">
          <div class="stats-card-icon">🪙</div>
          <div class="stats-card-value">${e.totalGoldEarned}G</div>
          <div class="stats-card-label">累計売上</div>
        </div>
        <div class="stats-card stats-card-items">
          <div class="stats-card-icon">📦</div>
          <div class="stats-card-value">${e.totalItemsSold}</div>
          <div class="stats-card-label">販売数</div>
        </div>
        <div class="stats-card stats-card-craft">
          <div class="stats-card-icon">⚒️</div>
          <div class="stats-card-value">${e.totalItemsCrafted}</div>
          <div class="stats-card-label">調合数</div>
        </div>
        <div class="stats-card stats-card-cust">
          <div class="stats-card-icon">👥</div>
          <div class="stats-card-value">${i}%</div>
          <div class="stats-card-label">接客成功率</div>
        </div>
      </div>

      <div class="stats-section">
        <h3 class="stats-section-title">📈 日別売上推移</h3>
        <div class="stats-chart-container">
          <canvas id="stats-chart" width="500" height="160"></canvas>
        </div>
        <div class="stats-avg">直近7日平均: <strong>${n}G</strong> / 日</div>
      </div>

      <div class="stats-two-col">
        <div class="stats-section">
          <h3 class="stats-section-title">🏷️ カテゴリ別売上</h3>
          <div class="stats-category-list">
            ${this._renderCategoryBars(e)}
          </div>
        </div>

        <div class="stats-section">
          <h3 class="stats-section-title">🏆 実績</h3>
          <div class="stats-achievements">
            ${this._renderAchievements(e)}
          </div>
        </div>
      </div>
    `,this._drawChart(e.dailySales)}_renderCategoryBars(t){const e=[{key:"equipment",name:"装備",icon:"⚔️",color:"#e8b84b"},{key:"consumable",name:"消耗品",icon:"🧪",color:"#7bc96f"},{key:"accessory",name:"アクセ",icon:"💎",color:"#6bb5e8"},{key:"material",name:"素材",icon:"🪨",color:"#a08060"}],n=Object.values(t.salesByType).reduce((i,r)=>i+r,0)||1;return e.map(i=>{const r=t.salesByType[i.key]||0,a=Math.round(r/n*100);return`
        <div class="stats-category-row">
          <span class="stats-cat-label">${i.icon} ${i.name}</span>
          <div class="stats-cat-bar">
            <div class="stats-cat-fill" style="width:${a}%; background:${i.color}"></div>
          </div>
          <span class="stats-cat-value">${r}G (${a}%)</span>
        </div>
      `}).join("")}_renderAchievements(t){return[{name:"初めての販売",check:t.totalItemsSold>=1,icon:"🎯"},{name:"10個販売",check:t.totalItemsSold>=10,icon:"📦"},{name:"50個販売",check:t.totalItemsSold>=50,icon:"🏬"},{name:"初めてのパズル",check:t.totalPuzzlesPlayed>=1,icon:"🧩"},{name:"パズルマスター",check:t.bestPuzzleScore>=500,icon:"🌟"},{name:"接客率80%以上",check:t.totalCustomersServed/Math.max(1,t.totalCustomersServed+t.totalCustomersLost)>=.8,icon:"💫"},{name:"累計売上1000G",check:t.totalGoldEarned>=1e3,icon:"💰"},{name:"累計売上5000G",check:t.totalGoldEarned>=5e3,icon:"👑"}].map(n=>`
      <div class="stats-achievement ${n.check?"achieved":""}">
        <span class="stats-ach-icon">${n.icon}</span>
        <span class="stats-ach-name">${n.name}</span>
        ${n.check?'<span class="stats-ach-done">✓</span>':""}
      </div>
    `).join("")}_drawChart(t){const e=document.getElementById("stats-chart");if(!e)return;const n=e.getContext("2d"),i=e.width,r=e.height,a={top:10,right:10,bottom:25,left:40},o=i-a.left-a.right,l=r-a.top-a.bottom;if(n.clearRect(0,0,i,r),t.length===0){n.fillStyle="rgba(200,180,140,0.3)",n.font="13px sans-serif",n.textAlign="center",n.fillText("データなし — 1日目が完了すると表示されます",i/2,r/2);return}const c=Math.max(...t,1),u=Math.min(30,o/t.length-2),f=(o-u*t.length)/(t.length+1);n.strokeStyle="rgba(200,180,140,0.15)",n.lineWidth=1;for(let p=0;p<=4;p++){const g=a.top+l*(1-p/4);n.beginPath(),n.moveTo(a.left,g),n.lineTo(i-a.right,g),n.stroke(),n.fillStyle="rgba(200,180,140,0.4)",n.font="9px sans-serif",n.textAlign="right",n.fillText(`${Math.round(c*p/4)}`,a.left-4,g+3)}const d=n.createLinearGradient(0,a.top,0,r-a.bottom);d.addColorStop(0,"#e8b84b"),d.addColorStop(1,"#a07830"),t.forEach((p,g)=>{const x=a.left+f+g*(u+f),m=p/c*l,h=a.top+l-m;n.fillStyle=d,n.beginPath(),n.roundRect(x,h,u,m,[3,3,0,0]),n.fill(),n.fillStyle="rgba(200,180,140,0.5)",n.font="8px sans-serif",n.textAlign="center",n.fillText(`${g+1}日`,x+u/2,r-5)})}}class Nm{constructor(t,e,n,i,r,a,o){this.inventory=t,this.dayCycle=r,this.events=a,this.reputation=o,this.activeTab="tab-inventory",this.elGold=document.getElementById("gold-value"),this.elDay=document.getElementById("day-value"),this.elRent=document.getElementById("rent-value"),this.elRank=document.getElementById("rank-value"),this.elDayProgress=document.getElementById("day-progress-fill"),this.elEventBanner=document.getElementById("event-banner"),this.elTabs=document.querySelectorAll(".tab-btn"),this.elSections=document.querySelectorAll(".content-section"),this.tabs={"tab-inventory":new wm(t),"tab-crafting":new Lm(t),"tab-shop":new Im(t,e,i),"tab-dispatch":new Dm(n,t),"tab-stats":new Um(r,o)},this._unsubscribers=[Q.on("item:sold",()=>this.updateAll()),Q.on("adventurer:return",()=>this.updateAll()),Q.on("inventory:changed",()=>this.updateAll()),Q.on("gold:changed",()=>this._updateStatusBar()),Q.on("day:newDay",()=>this._updateStatusBar()),Q.on("rank:up",()=>this.updateAll()),Q.on("recipe:unlocked",()=>{this.activeTab==="tab-crafting"&&this.updateAll()}),Q.on("customer:arrived",()=>{this.activeTab==="tab-shop"&&this.updateAll()}),Q.on("customer:left",()=>{this.activeTab==="tab-shop"&&this.updateAll()}),Q.on("customer:bought",()=>this.updateAll()),Q.on("reputation:changed",()=>this._updateStatusBar()),Q.on("reputation:levelUp",l=>{Q.emit("toast",{message:`⭐ 評判UP！「${l.name}」になりました！`,type:"success"})})],this._init()}update(t){this.activeTab==="tab-dispatch"&&this.tabs["tab-dispatch"].updateTimers(),this.activeTab==="tab-shop"&&this.tabs["tab-shop"].updateCustomerTimers(),this.dayCycle&&this.elDayProgress&&(this.elDayProgress.style.width=`${this.dayCycle.dayProgress*100}%`)}updateAll(){this._updateStatusBar();const t=this.tabs[this.activeTab];t&&t.render()}_init(){this.elTabs.forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.getAttribute("data-target");this._switchTab(n)})}),this.updateAll(),this._addMuteButton()}_addMuteButton(){const t=document.querySelector(".status-bar");if(!t)return;const e=document.createElement("button");e.className="btn btn-sm sound-toggle-btn",e.id="btn-sound-toggle",e.textContent=vi.muted?"🔇":"🔊",e.title="サウンド ON/OFF",e.addEventListener("click",()=>{vi.init();const n=vi.toggleMute();e.textContent=n?"🔇":"🔊"}),t.appendChild(e)}_switchTab(t){this.activeTab=t,this.elTabs.forEach(e=>{e.classList.toggle("active",e.getAttribute("data-target")===t)}),this.elSections.forEach(e=>{e.classList.toggle("active",e.id===t)}),this.updateAll()}_updateStatusBar(){if(this.elGold&&(this.elGold.textContent=this.inventory.gold),this.dayCycle&&(this.elDay&&(this.elDay.textContent=`${this.dayCycle.day}日目`),this.elRent&&(this.elRent.textContent=`${this.dayCycle.currentRent}G`),this.elRank&&(this.elRank.textContent=this.dayCycle.currentRank.name)),this.reputation){const t=document.getElementById("reputation-value");if(t){const e=this.reputation.currentLevel;t.textContent=`${e.icon} ${e.name}`}}if(this.events&&this.elEventBanner){const t=this.events.getActiveEffects();t.length>0?(this.elEventBanner.innerHTML=t.map(e=>`<span class="event-badge">${e.icon} ${e.name}</span>`).join(""),this.elEventBanner.style.display="flex"):this.elEventBanner.style.display="none"}}dispose(){this._unsubscribers.forEach(t=>t())}}class Fm{constructor(){this.container=document.createElement("div"),this.container.className="toast-container",document.body.appendChild(this.container),Q.on("item:sold",t=>this.show(`${t.item.name} が ${t.item.value}G で売れました！`,"gold")),Q.on("adventurer:return",t=>this.show(`${t.adventurer.name} が帰還！ ${t.loot.length}個の素材を入手`,"green")),Q.on("day:newDay",t=>this.show(`${t.day}日目 — 維持費 ${t.rent}G を支払いました`,"default")),Q.on("rank:up",t=>this.show(`🎉 ランクアップ！ ${t.rankName}`,"special")),Q.on("recipe:unlocked",t=>this.show(`📜 新レシピ解放: ${t.name}`,"green")),Q.on("area:unlocked",t=>this.show(`🗺️ 新エリア解放: ${t.name}`,"green")),Q.on("customer:arrived",t=>this.show(`${t.icon} ${t.name}が来店！「${t.dialogue}」`,"default")),Q.on("customer:left",t=>this.show(`${t.name}は帰ってしまった…`,"red")),Q.on("customer:bought",t=>this.show(`${t.customerName}が ${t.item.name} を ${t.price}G で購入！`,"gold")),Q.on("adventurer:levelUp",t=>this.show(`⬆️ ${t.adventurer.name} が Lv.${t.newLevel} になった！`,"special")),Q.on("adventurer:joined",t=>this.show(`🆕 ${t.adventurer.name} が仲間に加わった！`,"special")),Q.on("event:triggered",t=>this.show(`${t.icon} ${t.name}：${t.description}`,"special"))}show(t,e="default"){const n=document.createElement("div");for(n.className=`toast toast-${e}`,n.textContent=t,n.addEventListener("click",()=>this._dismiss(n)),this.container.appendChild(n),requestAnimationFrame(()=>n.classList.add("toast-show")),setTimeout(()=>this._dismiss(n),4e3);this.container.children.length>5;)this._dismiss(this.container.firstChild)}_dismiss(t){!t||!t.parentNode||(t.classList.add("toast-hide"),setTimeout(()=>t.remove(),300))}}class Om{constructor(){this.el=document.createElement("div"),this.el.className="gameover-overlay",this.el.style.display="none",document.body.appendChild(this.el),Q.on("game:over",t=>this._showGameOver(t)),Q.on("game:cleared",t=>this._showGameClear(t))}_showGameOver(t){this.el.innerHTML=`
      <div class="gameover-box gameover-fail">
        <h2>💀 閉店…</h2>
        <p class="gameover-reason">${t.reason}</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">営業日数</span>
            <span class="gameover-stat-value">${t.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${t.totalSales}G</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">最終ランク</span>
            <span class="gameover-stat-value">${t.rank}</span>
          </div>
        </div>
        <button class="btn primary gameover-retry-btn" id="btn-retry">もう一度挑戦する</button>
      </div>
    `,this.el.style.display="flex",document.getElementById("btn-retry").addEventListener("click",()=>{location.reload()})}_showGameClear(t){this.el.innerHTML=`
      <div class="gameover-box gameover-clear">
        <h2>🎉 おめでとう！</h2>
        <p class="gameover-reason">伝説のアイテム工房に到達しました！</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">達成日数</span>
            <span class="gameover-stat-value">${t.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${t.totalSales}G</span>
          </div>
        </div>
        <p class="gameover-continue-msg">このまま経営を続けることもできます。</p>
        <div class="gameover-buttons">
          <button class="btn gameover-continue-btn" id="btn-continue">経営を続ける</button>
          <button class="btn primary gameover-retry-btn" id="btn-newgame">新しく始める</button>
        </div>
      </div>
    `,this.el.style.display="flex",document.getElementById("btn-continue").addEventListener("click",()=>{this.el.style.display="none"}),document.getElementById("btn-newgame").addEventListener("click",()=>{location.reload()})}}class Bm{constructor(t){this.onStart=t,this.el=document.createElement("div"),this.el.className="title-overlay",this._render(),document.body.appendChild(this.el),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.el.classList.add("title-animate")})})}_render(){var l;const t=Ds.getSaveInfo(),e=t?((l=ne.ranks[t.rankIndex])==null?void 0:l.name)||"—":"",n=t?new Date(t.timestamp).toLocaleString("ja-JP"):"";let i="";const r=14;for(let c=0;c<r;c++){const u=c<r/2?"left":"right",f=c<r/2?c:c-r/2,d=Math.random()*.4+.3,p=60+Math.random()*40,g=-5+Math.random()*10,x=f*14+Math.random()*8,m=d*1.2,h=Math.random()>.5?"pine":"oak";i+=`<div class="tree-silhouette tree-${u} tree-${h}"
        style="--depth:${d}; --h-offset:${x}%; height:${p}%;
               bottom:${g}%; --delay:${m}s;"></div>`}let a="";for(let c=0;c<20;c++){const u=Math.random()*100,f=Math.random()*100,d=2+Math.random()*3,p=3+Math.random()*4,g=Math.random()*5;a+=`<div class="title-particle"
        style="left:${u}%; top:${f}%; width:${d}px; height:${d}px;
               --dur:${p}s; --delay:${g}s;"></div>`}this.el.innerHTML=`
      <div class="title-forest-layer">${i}</div>
      <div class="title-fog-layer"></div>
      <div class="title-particles">${a}</div>
      <div class="title-content">
        <div class="title-logo">
          <span class="title-icon">🏰</span>
          <h1>Voxel Shop Tycoon</h1>
          <p class="title-subtitle">ファンタジーアイテムショップ経営シミュレーション</p>
        </div>
        <div class="title-buttons">
          <button class="btn primary title-btn" id="btn-new-game">🆕 はじめから</button>
          ${t?`
            <button class="btn title-btn title-continue-btn" id="btn-continue">
              ▶️ つづきから
              <span class="title-save-info">${t.day}日目 / ${e} / ${t.gold}G</span>
              <span class="title-save-date">${n}</span>
            </button>
          `:""}
        </div>
      </div>
    `,document.getElementById("btn-new-game").addEventListener("click",()=>{if(t){if(!confirm("セーブデータを削除して新しく始めますか？"))return;Ds.deleteSave()}this._close(null)});const o=document.getElementById("btn-continue");o&&o.addEventListener("click",()=>{this._close(Ds.loadSaveData())})}_close(t){this.el.classList.add("title-fade-out"),setTimeout(()=>{this.el.remove(),this.onStart(t)},600)}}const Ko="voxelshop_tutorial_done",Ts=[{id:"welcome",title:"ようこそ！",text:`Voxel Shop Tycoon へようこそ！
ファンタジー世界で小さなアイテムショップを経営しましょう。`,highlight:null,trigger:null},{id:"dispatch",title:"① 冒険者を派遣しよう",text:`まずは「派遣」タブを開いて、冒険者を草原に派遣しましょう。
帰還すると素材が手に入ります。`,highlight:'[data-target="tab-dispatch"]',trigger:"adventurer:return"},{id:"crafting",title:"② アイテムを調合しよう",text:`集めた素材で「調合」タブからアイテムを作りましょう。
品質(Q)が高いほど高く売れます！`,highlight:'[data-target="tab-crafting"]',trigger:"inventory:changed"},{id:"shop",title:"③ お店に陳列しよう",text:`「お店」タブでアイテムを陳列しましょう。
お客さんが来て、欲しいものを買ってくれます。`,highlight:'[data-target="tab-shop"]',trigger:"item:sold"},{id:"survive",title:"④ 維持費に注意！",text:`毎日 維持費がかかります。払えなくなるとゲームオーバー！
探索→調合→販売のサイクルを回して生き残りましょう。`,highlight:"#rent-value",trigger:null}];class zm{constructor(){localStorage.getItem(Ko)||(this.stepIndex=0,this.el=document.createElement("div"),this.el.className="tutorial-overlay",document.body.appendChild(this.el),this._unsubscribers=[],this._showStep())}_showStep(){if(this.stepIndex>=Ts.length){this._complete();return}const t=Ts[this.stepIndex];if(this.el.innerHTML=`
      <div class="tutorial-box">
        <div class="tutorial-step-indicator">
          ${Ts.map((e,n)=>`<span class="tutorial-dot ${n===this.stepIndex?"active":n<this.stepIndex?"done":""}"></span>`).join("")}
        </div>
        <h3 class="tutorial-title">${t.title}</h3>
        <p class="tutorial-text">${t.text.replace(/\n/g,"<br>")}</p>
        <div class="tutorial-actions">
          <button class="btn tutorial-skip-btn" id="btn-tutorial-skip">スキップ</button>
          <button class="btn primary tutorial-next-btn" id="btn-tutorial-next">${t.trigger?"了解！":this.stepIndex===Ts.length-1?"はじめる！":"次へ"}</button>
        </div>
      </div>
    `,t.highlight){const e=document.querySelector(t.highlight);e&&(e.classList.add("tutorial-highlight"),this._lastHighlight=e)}document.getElementById("btn-tutorial-skip").addEventListener("click",()=>this._complete()),document.getElementById("btn-tutorial-next").addEventListener("click",()=>{if(this._clearHighlight(),t.trigger){this.el.innerHTML=`
          <div class="tutorial-box tutorial-waiting">
            <p class="tutorial-text">やってみましょう…！</p>
          </div>
        `;const e=Q.on(t.trigger,()=>{e(),this.stepIndex++,this._showStep()});this._unsubscribers.push(e)}else this.stepIndex++,this._showStep()})}_clearHighlight(){this._lastHighlight&&(this._lastHighlight.classList.remove("tutorial-highlight"),this._lastHighlight=null)}_complete(){this._clearHighlight(),localStorage.setItem(Ko,"1"),this._unsubscribers.forEach(t=>t()),this.el.classList.add("tutorial-fade-out"),setTimeout(()=>this.el.remove(),400)}}const Mn=[{level:1,name:"無名の店",icon:"☆",minRep:0,customerRate:1,priceBonus:0,customerPool:["villager","adventurer_customer"]},{level:2,name:"知られた店",icon:"★",minRep:30,customerRate:1.3,priceBonus:.05,customerPool:["villager","adventurer_customer","soldier","healer"]},{level:3,name:"人気店",icon:"★★",minRep:80,customerRate:1.6,priceBonus:.1,customerPool:["villager","adventurer_customer","soldier","healer","merchant"]},{level:4,name:"王国御用達",icon:"★★★",minRep:150,customerRate:2,priceBonus:.15,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch"]},{level:5,name:"伝説の名店",icon:"🌟",minRep:250,customerRate:2.5,priceBonus:.2,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch"]}];class km{constructor(){this.reputation=0,this.currentLevel=Mn[0],this._bindEvents()}_bindEvents(){Q.on("customer:bought",t=>{var i;const e=((i=t.item)==null?void 0:i.quality)||30;let n=1;e>=80?n=4:e>=60?n=3:e>=40&&(n=2),this.addReputation(n)}),Q.on("customer:left",t=>{((t==null?void 0:t.reason)==="no_match"||(t==null?void 0:t.reason)==="timeout")&&this.addReputation(-2)}),Q.on("rank:up",()=>{this.addReputation(10)}),Q.on("item:crafted",()=>{this.addReputation(1)})}addReputation(t){const e=this.currentLevel;this.reputation=Math.max(0,this.reputation+t),this._updateLevel(),this.currentLevel!==e&&Q.emit("reputation:levelUp",{level:this.currentLevel.level,name:this.currentLevel.name,icon:this.currentLevel.icon}),Q.emit("reputation:changed",{reputation:this.reputation,level:this.currentLevel})}_updateLevel(){for(let t=Mn.length-1;t>=0;t--)if(this.reputation>=Mn[t].minRep){this.currentLevel=Mn[t];return}this.currentLevel=Mn[0]}getCustomerRateMultiplier(){return this.currentLevel.customerRate}getPriceBonus(){return this.currentLevel.priceBonus}getAvailableCustomerPool(){return this.currentLevel.customerPool}getProgress(){const t=Mn.indexOf(this.currentLevel);if(t>=Mn.length-1)return 1;const n=Mn[t+1].minRep-this.currentLevel.minRep,i=this.reputation-this.currentLevel.minRep;return Math.min(1,i/n)}toSaveData(){return{reputation:this.reputation}}loadSaveData(t){t&&typeof t.reputation=="number"&&(this.reputation=t.reputation,this._updateLevel())}}const Nl=[];let En=null,fi=null,Xe=null,hn=null,Vn=null,Ce=null,zs=null,wr=null,pi=null,ga=null,_a=null,Fl=!1;async function Gm(){En=new sm("game-canvas"),fi=new um(En.scene,En.camera,Nl,En),await fi.init()}async function Hm(){try{await Gm(),Vm(()=>{vi.init(),vi.startTitleBGM(),new Bm(s=>{Wm(s)})})}catch(s){console.error("[VoxelGame] Failed to load:",s)}}function Vm(s){const t=document.createElement("div");t.className="splash-overlay",t.innerHTML=`
    <div class="splash-content">
      <div class="splash-icon">🏰</div>
      <p class="splash-text">Click to Start</p>
    </div>
  `,document.body.appendChild(t);const e=()=>{t.removeEventListener("click",e),t.classList.add("splash-fade-out"),setTimeout(()=>{t.remove(),s()},600)};t.addEventListener("click",e)}function Wm(s){Xe=new fm,hn=new pm(Xe),Vn=new gm(Xe),Ce=new _m(Xe),wr=new xm(Xe),pi=new km,zs=new vm(Xe,hn,wr,pi),s&&Xm(s),ga=new Ds(Xe,Vn,Ce,hn,pi),_a=new Nm(Xe,hn,Vn,zs,Ce,wr,pi),new Fm,new Om,s||new zm,Fl=!0,vi.startGameBGM(),console.log("[VoxelGame] Game started."+(s?" (loaded save)":""))}function Xm(s){Xe.gold=s.gold,Xe.items=[];for(const e of s.items)Xe.items.push(An(e.blueprintId,e.quality,e.traits));hn.displayedItems=[];for(const e of s.displayedItems||[])hn.displayedItems.push(An(e.blueprintId,e.quality,e.traits));for(const e of s.unlockedRecipes||[])Je[e]&&(Je[e].unlocked=!0);for(const e of s.unlockedAreas||[])Ye[e]&&(Ye[e].unlocked=!0);Ce.day=s.day||1,Ce.dayTimer=s.dayTimer||0,Ce.totalSales=s.totalSales||0,Ce.currentRankIndex=s.currentRankIndex||0;const t=Ce.currentRank;if(t&&(hn.maxSlots=t.displaySlots),s.adventurers)for(const e of s.adventurers){let n=Vn.adventurers.find(i=>i.id===e.id);if(!n){const i=Dl.find(r=>r.id===e.id);i&&(n={id:i.id,name:i.name,icon:i.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:i.exploreTimeMultiplier,currentArea:null,level:1,exp:0,equipment:{weapon:null,armor:null}},Vn.adventurers.push(n))}n&&(n.level=e.level||1,n.exp=e.exp||0,e.weapon&&(n.equipment.weapon=An(e.weapon.blueprintId,e.weapon.quality,e.weapon.traits)))}s.reputation&&pi&&pi.loadSaveData(s.reputation),s.stats&&Ia.loadSaveData(s.stats)}Hm();const qm=new vu;let Da=!1;Q.on("game:pause",()=>{Da=!0});Q.on("game:resume",()=>{Da=!1});function Ol(){requestAnimationFrame(Ol);const s=qm.getDelta();for(const t of Nl)t.update(s);if(!Fl){En&&En.render();return}Da||(fi&&fi.update(s),Ce&&!Ce.isGameOver&&(Ce.update(s),hn&&hn.update(s),Vn&&Vn.update(s),zs&&zs.update(s)),ga&&ga.update(s),fi&&Ce&&fi.setDayProgress(Ce.dayProgress)),_a&&_a.update(s),En&&En.render()}Ol();
