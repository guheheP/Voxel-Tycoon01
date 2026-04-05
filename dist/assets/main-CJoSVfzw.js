var _c=Object.defineProperty;var gc=(s,e,t)=>e in s?_c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ls=(s,e,t)=>gc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nr="172",vc=0,uo=1,yc=2,El=1,Tl=2,fn=3,Ln=0,It=1,sn=2,In=0,wi=1,ho=2,fo=3,po=4,xc=5,Xn=100,bc=101,Mc=102,Sc=103,Ec=104,Tc=200,wc=201,Ac=202,Cc=203,Va=204,Ha=205,Rc=206,Ic=207,Pc=208,Lc=209,Dc=210,Uc=211,Nc=212,Fc=213,kc=214,qa=0,Wa=1,$a=2,Ri=3,Xa=4,Ya=5,ja=6,Ka=7,Fr=0,Bc=1,Oc=2,Pn=0,zc=1,Gc=2,Vc=3,wl=4,Hc=5,qc=6,Wc=7,Al=300,Ii=301,Pi=302,Za=303,Ja=304,na=306,Qa=1e3,jn=1001,er=1002,Ft=1003,$c=1004,cs=1005,an=1006,ra=1007,Kn=1008,xn=1009,Cl=1010,Rl=1011,ns=1012,kr=1013,Jn=1014,rn=1015,is=1016,Br=1017,Or=1018,Li=1020,Il=35902,Pl=1021,Ll=1022,Jt=1023,Dl=1024,Ul=1025,Ai=1026,Di=1027,zr=1028,Gr=1029,Nl=1030,Vr=1031,Hr=1033,zs=33776,Gs=33777,Vs=33778,Hs=33779,tr=35840,nr=35841,ir=35842,sr=35843,ar=36196,rr=37492,or=37496,lr=37808,cr=37809,dr=37810,ur=37811,hr=37812,fr=37813,pr=37814,mr=37815,_r=37816,gr=37817,vr=37818,yr=37819,xr=37820,br=37821,qs=36492,Mr=36494,Sr=36495,Fl=36283,Er=36284,Tr=36285,wr=36286,Xc=3200,Yc=3201,qr=0,jc=1,Cn="",Vt="srgb",Ui="srgb-linear",js="linear",Ke="srgb",ii=7680,mo=519,Kc=512,Zc=513,Jc=514,kl=515,Qc=516,ed=517,td=518,nd=519,_o=35044,go="300 es",gn=2e3,Ks=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Ar=180/Math.PI;function ss(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function id(s,e){return(s%e+e)%e}function oa(s,e,t){return(1-t)*s+t*e}function Gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,a,r,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],u=i[6],E=i[1],M=i[4],b=i[7],C=i[2],A=i[5],w=i[8];return a[0]=r*g+o*E+l*C,a[3]=r*m+o*M+l*A,a[6]=r*u+o*b+l*w,a[1]=c*g+d*E+h*C,a[4]=c*m+d*M+h*A,a[7]=c*u+d*b+h*w,a[2]=f*g+p*E+_*C,a[5]=f*m+p*M+_*A,a[8]=f*u+p*b+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*a*d+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*r-o*c,f=o*l-d*a,p=c*a-r*l,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*r)*g,e[3]=f*g,e[4]=(d*t-i*l)*g,e[5]=(i*a-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Pe;function Bl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sd(){const s=Zs("canvas");return s.style.display="block",s}const vo={};function yi(s){s in vo||(vo[s]=!0,console.warn(s))}function ad(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function rd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function od(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yo=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const s={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ke&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ke&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b))),i},fromWorkingColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},toWorkingColorSpace:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?js:this.spaces[i].transfer},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ui]:{primaries:e,whitePoint:n,transfer:js,toXYZ:yo,fromXYZ:xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:yo,fromXYZ:xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}const $e=ld();function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class cd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Zs("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=yn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ca(i[r].image)):a.push(ca(i[r]))}else a=ca(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class wt extends Fi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=jn,i=jn,a=an,r=Kn,o=Jt,l=xn,c=wt.DEFAULT_ANISOTROPY,d=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ss(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Al;wt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(p+1)/2,C=(u+1)/2,A=(d+f)/4,w=(h+g)/4,P=(_+m)/4;return M>b&&M>C?M<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(M),i=A/n,a=w/n):b>C?b<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(b),n=A/i,a=P/i):C<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(C),n=w/a,i=P/a),this.set(n,i,a,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(f-d)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zl extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const f=a[r+0],p=a[r+1],_=a[r+2],g=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==p||d!==_){let m=1-o;const u=l*f+c*p+d*_+h*g,E=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,u*E);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const b=o*E;if(l=l*m+f*b,c=c*m+p*b,d=d*m+_*b,h=h*m+g*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return e[t]=o*_+d*h+l*p-c*f,e[t+1]=l*_+d*f+c*h-o*p,e[t+2]=c*_+d*p+o*f-l*h,e[t+3]=d*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(a/2),f=l(n/2),p=l(i/2),_=l(a/2);switch(r){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+i*c-a*l,this._y=i*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-i*o,this._w=r*d-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),d=2*(o*t-a*i),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*d,this.y=n+l*d+o*c-a*h,this.z=i+l*h+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new F,bo=new as;class ei{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Yt):Yt.fromBufferAttribute(a,r),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),us.subVectors(this.max,Vi),ai.subVectors(e.a,Vi),ri.subVectors(e.b,Vi),oi.subVectors(e.c,Vi),bn.subVectors(ri,ai),Mn.subVectors(oi,ri),On.subVectors(ai,oi);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!ua(t,ai,ri,oi,us)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,ai,ri,oi,us))?!1:(hs.crossVectors(bn,Mn),t=[hs.x,hs.y,hs.z],ua(t,ai,ri,oi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,ds=new ei,ai=new F,ri=new F,oi=new F,bn=new F,Mn=new F,On=new F,Vi=new F,us=new F,hs=new F,zn=new F;function ua(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){zn.fromArray(s,a);const o=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const pd=new ei,Hi=new F,ha=new F;class ki{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(ha)),this.expandByPoint(Hi.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new F,fa=new F,fs=new F,Sn=new F,pa=new F,ps=new F,ma=new F;class Gl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fa.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(fa);const a=e.distanceTo(t)*.5,r=-this.direction.dot(fs),o=Sn.dot(this.direction),l=-Sn.dot(fs),c=Sn.lengthSq(),d=Math.abs(1-r*r);let h,f,p,_;if(d>0)if(h=r*l-o,f=r*o-l,_=a*d,h>=0)if(f>=-_)if(f<=_){const g=1/d;h*=g,f*=g,p=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=a,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-r*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(h=Math.max(0,-(r*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c);else f=r>0?-a:a,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(fa).addScaledVector(fs,f),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,a){pa.subVectors(t,e),ps.subVectors(n,e),ma.crossVectors(pa,ps);let r=this.direction.dot(ma),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(Sn,ps));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Sn));if(c<0||l+c>r)return null;const d=-o*Sn.dot(ma);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,a,r,o,l,c,d,h,f,p,_,g,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,d,h,f,p,_,g,m)}set(e,t,n,i,a,r,o,l,c,d,h,f,p,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),a=1/li.setFromMatrixColumn(e,1).length(),r=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=r*d,p=r*h,_=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,g=c*h;t[0]=f+g*o,t[4]=_*o-p,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=p*o-_,t[6]=g+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,g=c*h;t[0]=f-g*o,t[4]=-r*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=r*d,t[9]=g-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*d,p=r*h,_=o*d,g=o*h;t[0]=l*d,t[4]=_*c-p,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-f*h,t[8]=_*h+p,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=r*l,p=r*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+g,t[5]=r*d,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*d,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,_d)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),En.crossVectors(n,Lt),En.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),En.crossVectors(n,Lt)),En.normalize(),ms.crossVectors(Lt,En),i[0]=En.x,i[4]=ms.x,i[8]=Lt.x,i[1]=En.y,i[5]=ms.y,i[9]=Lt.y,i[2]=En.z,i[6]=ms.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],u=n[14],E=n[3],M=n[7],b=n[11],C=n[15],A=i[0],w=i[4],P=i[8],S=i[12],x=i[1],I=i[5],H=i[9],z=i[13],j=i[2],K=i[6],$=i[10],J=i[14],V=i[3],ae=i[7],ue=i[11],ye=i[15];return a[0]=r*A+o*x+l*j+c*V,a[4]=r*w+o*I+l*K+c*ae,a[8]=r*P+o*H+l*$+c*ue,a[12]=r*S+o*z+l*J+c*ye,a[1]=d*A+h*x+f*j+p*V,a[5]=d*w+h*I+f*K+p*ae,a[9]=d*P+h*H+f*$+p*ue,a[13]=d*S+h*z+f*J+p*ye,a[2]=_*A+g*x+m*j+u*V,a[6]=_*w+g*I+m*K+u*ae,a[10]=_*P+g*H+m*$+u*ue,a[14]=_*S+g*z+m*J+u*ye,a[3]=E*A+M*x+b*j+C*V,a[7]=E*w+M*I+b*K+C*ae,a[11]=E*P+M*H+b*$+C*ue,a[15]=E*S+M*z+b*J+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+a*l*h-i*c*h-a*o*f+n*c*f+i*o*p-n*l*p)+g*(+t*l*p-t*c*f+a*r*f-i*r*p+i*c*d-a*l*d)+m*(+t*c*h-t*o*p-a*r*h+n*r*p+a*o*d-n*c*d)+u*(-i*o*d-t*l*h+t*o*f+i*r*h-n*r*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],u=e[15],E=h*m*c-g*f*c+g*l*p-o*m*p-h*l*u+o*f*u,M=_*f*c-d*m*c-_*l*p+r*m*p+d*l*u-r*f*u,b=d*g*c-_*h*c+_*o*p-r*g*p-d*o*u+r*h*u,C=_*h*l-d*g*l-_*o*f+r*g*f+d*o*m-r*h*m,A=t*E+n*M+i*b+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(g*f*a-h*m*a-g*i*p+n*m*p+h*i*u-n*f*u)*w,e[2]=(o*m*a-g*l*a+g*i*c-n*m*c-o*i*u+n*l*u)*w,e[3]=(h*l*a-o*f*a-h*i*c+n*f*c+o*i*p-n*l*p)*w,e[4]=M*w,e[5]=(d*m*a-_*f*a+_*i*p-t*m*p-d*i*u+t*f*u)*w,e[6]=(_*l*a-r*m*a-_*i*c+t*m*c+r*i*u-t*l*u)*w,e[7]=(r*f*a-d*l*a+d*i*c-t*f*c-r*i*p+t*l*p)*w,e[8]=b*w,e[9]=(_*h*a-d*g*a-_*n*p+t*g*p+d*n*u-t*h*u)*w,e[10]=(r*g*a-_*o*a+_*n*c-t*g*c-r*n*u+t*o*u)*w,e[11]=(d*o*a-r*h*a-d*n*c+t*h*c+r*n*p-t*o*p)*w,e[12]=C*w,e[13]=(d*g*i-_*h*i+_*n*f-t*g*f-d*n*m+t*h*m)*w,e[14]=(_*o*i-r*g*i-_*n*l+t*g*l+r*n*m-t*o*m)*w,e[15]=(r*h*i-d*o*i+d*n*l-t*h*l-r*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*r,0,c*l-i*o,d*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,h=o+o,f=a*c,p=a*d,_=a*h,g=r*d,m=r*h,u=o*h,E=l*c,M=l*d,b=l*h,C=n.x,A=n.y,w=n.z;return i[0]=(1-(g+u))*C,i[1]=(p+b)*C,i[2]=(_-M)*C,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(f+u))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(_+M)*w,i[9]=(m-E)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=li.set(i[0],i[1],i[2]).length();const r=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const c=1/a,d=1/r,h=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=d,jt.elements[5]*=d,jt.elements[6]*=d,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=gn){const l=this.elements,c=2*a/(t-e),d=2*a/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(o===gn)p=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Ks)p=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=gn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(r-a),f=(t+e)*c,p=(n+i)*d;let _,g;if(o===gn)_=(r+a)*h,g=-2*h;else if(o===Ks)_=a*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new F,jt=new Qe,md=new F(0,0,0),_d=new F(1,1,1),En=new F,ms=new F,Lt=new F,Mo=new Qe,So=new as;class tn{constructor(e=0,t=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const Eo=new F,ci=new as,dn=new Qe,_s=new F,qi=new F,vd=new F,yd=new as,To=new F(1,0,0),wo=new F(0,1,0),Ao=new F(0,0,1),Co={type:"added"},xd={type:"removed"},di={type:"childadded",child:null},_a={type:"childremoved",child:null};class ut extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new F,t=new tn,n=new as,i=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(To,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(Ao,e)}translateOnAxis(e,t){return Eo.copy(e).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(To,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(Ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(qi,_s,this.up):dn.lookAt(_s,qi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(dn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Co),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Co),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new F(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new F,un=new F,ga=new F,hn=new F,ui=new F,hi=new F,Ro=new F,va=new F,ya=new F,xa=new F,ba=new ot,Ma=new ot,Sa=new ot;class qt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Kt.subVectors(i,t),un.subVectors(n,t),ga.subVectors(e,t);const r=Kt.dot(Kt),o=Kt.dot(un),l=Kt.dot(ga),c=un.dot(un),d=un.dot(ga),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,_=(r*d-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,hn.x),l.addScaledVector(r,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return ba.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),ba.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,n),Sa.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(ba,a.x),r.addScaledVector(Ma,a.y),r.addScaledVector(Sa,a.z),r}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),un.subVectors(e,t),Kt.cross(un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Kt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;ui.subVectors(i,n),hi.subVectors(a,n),va.subVectors(e,n);const l=ui.dot(va),c=hi.dot(va);if(l<=0&&c<=0)return t.copy(n);ya.subVectors(e,i);const d=ui.dot(ya),h=hi.dot(ya);if(d>=0&&h<=d)return t.copy(i);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(ui,r);xa.subVectors(e,a);const p=ui.dot(xa),_=hi.dot(xa);if(_>=0&&p<=_)return t.copy(a);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(hi,o);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Ro.subVectors(a,i),o=(h-d)/(h-d+(p-_)),t.copy(i).addScaledVector(Ro,o);const u=1/(m+g+f);return r=g*u,o=f*u,t.copy(n).addScaledVector(ui,r).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=id(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Ea(r,a,e+1/3),this.g=Ea(r,a,e),this.b=Ea(r,a,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return $e.fromWorkingColorSpace(xt.copy(this),e),Math.round(ke(xt.r*255,0,255))*65536+Math.round(ke(xt.g*255,0,255))*256+Math.round(ke(xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,i=xt.g,a=xt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Vt){$e.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,i=xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(gs);const n=oa(Tn.h,gs.h,t),i=oa(Tn.s,gs.s,t),a=oa(Tn.l,gs.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Se;Se.NAMES=Hl;let bd=0;class ti extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=wi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ha,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ql extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new F,vs=new Ge;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class Wl extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Md=0;const Gt=new Qe,Ta=new ut,fi=new F,Dt=new ei,Wi=new ei,pt=new F;class Wt extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bl(e)?$l:Wl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Dt.min,Wi.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,Wi.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(Wi.min),Dt.expandByPoint(Wi.max))}Dt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)pt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)pt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),pt.add(fi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new F,l[P]=new F;const c=new F,d=new F,h=new F,f=new Ge,p=new Ge,_=new Ge,g=new F,m=new F;function u(P,S,x){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),f.fromBufferAttribute(a,P),p.fromBufferAttribute(a,S),_.fromBufferAttribute(a,x),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(I),o[P].add(g),o[S].add(g),o[x].add(g),l[P].add(m),l[S].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,S=E.length;P<S;++P){const x=E[P],I=x.start,H=x.count;for(let z=I,j=I+H;z<j;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new F,b=new F,C=new F,A=new F;function w(P){C.fromBufferAttribute(i,P),A.copy(C);const S=o[P];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),b.crossVectors(A,S);const I=b.dot(l[P])<0?-1:1;r.setXYZW(P,M.x,M.y,M.z,I)}for(let P=0,S=E.length;P<S;++P){const x=E[P],I=x.start,H=x.count;for(let z=I,j=I+H;z<j;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,a=new F,r=new F,o=new F,l=new F,c=new F,d=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new Qt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new Qe,Gn=new Gl,ys=new ki,Po=new F,xs=new F,bs=new F,Ms=new F,wa=new F,Ss=new F,Lo=new F,Es=new F;class Mt extends ut{constructor(e=new Wt,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Ss.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(wa.fromBufferAttribute(h,e),r?Ss.addScaledVector(wa,d):Ss.addScaledVector(wa.sub(t),d))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(a),Gn.copy(e.ray).recast(e.near),!(ys.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ys,Po)===null||Gn.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Io.copy(a).invert(),Gn.copy(e.ray).applyMatrix4(Io),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,g=f.length;_<g;_++){const m=f[_],u=r[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,C=M;b<C;b+=3){const A=o.getX(b),w=o.getX(b+1),P=o.getX(b+2);i=Ts(this,u,e,n,c,d,h,A,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const E=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);i=Ts(this,r,e,n,c,d,h,E,M,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,g=f.length;_<g;_++){const m=f[_],u=r[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,C=M;b<C;b+=3){const A=b,w=b+1,P=b+2;i=Ts(this,u,e,n,c,d,h,A,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const E=m,M=m+1,b=m+2;i=Ts(this,r,e,n,c,d,h,E,M,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Sd(s,e,t,n,i,a,r,o){let l;if(e.side===It?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===Ln,o),l===null)return null;Es.copy(o),Es.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:s}}function Ts(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,xs),s.getVertexPosition(l,bs),s.getVertexPosition(c,Ms);const d=Sd(s,e,t,n,xs,bs,Ms,Lo);if(d){const h=new F;qt.getBarycoord(Lo,xs,bs,Ms,h),i&&(d.uv=qt.getInterpolatedAttribute(i,o,l,c,h,new Ge)),a&&(d.uv1=qt.getInterpolatedAttribute(a,o,l,c,h,new Ge)),r&&(d.normal=qt.getInterpolatedAttribute(r,o,l,c,h,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};qt.getNormal(xs,bs,Ms,f.normal),d.face=f,d.barycoord=h}return d}class Dn extends Wt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,r,a,0),_("z","y","x",1,-1,n,t,-e,r,a,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,a,4),_("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function _(g,m,u,E,M,b,C,A,w,P,S){const x=b/w,I=C/P,H=b/2,z=C/2,j=A/2,K=w+1,$=P+1;let J=0,V=0;const ae=new F;for(let ue=0;ue<$;ue++){const ye=ue*I-z;for(let Ue=0;Ue<K;Ue++){const Ze=Ue*x-H;ae[g]=Ze*E,ae[m]=ye*M,ae[u]=j,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[u]=A>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(Ue/w),h.push(1-ue/P),J+=1}}for(let ue=0;ue<P;ue++)for(let ye=0;ye<w;ye++){const Ue=f+ye+K*ue,Ze=f+ye+K*(ue+1),W=f+(ye+1)+K*(ue+1),te=f+(ye+1)+K*ue;l.push(Ue,Ze,te),l.push(Ze,W,te),V+=6}o.addGroup(p,V,S),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(s){const e={};for(let t=0;t<s.length;t++){const n=Ni(s[t]);for(const i in n)e[i]=n[i]}return e}function Ed(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Td={clone:Ni,merge:Et};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yl extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new F,Do=new Ge,Uo=new Ge;class Ht extends Yl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Uo),t.subVectors(Uo,Do)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Cd extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(pi,mi,e,t);i.layers=this.layers,this.add(i);const a=new Ht(pi,mi,e,t);a.layers=this.layers,this.add(a);const r=new Ht(pi,mi,e,t);r.layers=this.layers,this.add(r);const o=new Ht(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Ht(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jl extends wt{constructor(e,t,n,i,a,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Dn(5,5,5),a=new Un({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:In});a.uniforms.tEquirect.value=t;const r=new Mt(i,a),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=an),new Cd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}class Wr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new Wr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Id extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pd extends wt{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Ft,d=Ft,h,f){super(null,r,o,l,c,d,i,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _i=new Qe,Fo=new Qe,ws=[],ko=new ei,Ld=new Qe,$i=new Mt,Xi=new ki;class Dd extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ld)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),ko.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(ko)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Xi.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,_i),Fo.multiplyMatrices(n,_i),$i.matrixWorld=Fo,$i.raycast(e,ws);for(let r=0,o=ws.length;r<o;r++){const l=ws[r];l.instanceId=a,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(i*this.count),i,this.count,zr,rn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Aa=new F,Ud=new F,Nd=new Pe;class Wn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Aa.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nd.getNormalMatrix(e),i=this.coplanarPoint(Aa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ki,As=new F;class $r{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,a=new Wn,r=new Wn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],f=i[7],p=i[8],_=i[9],g=i[10],m=i[11],u=i[12],E=i[13],M=i[14],b=i[15];if(n[0].setComponents(l-a,f-c,m-p,b-u).normalize(),n[1].setComponents(l+a,f+c,m+p,b+u).normalize(),n[2].setComponents(l+r,f+d,m+_,b+E).normalize(),n[3].setComponents(l-r,f-d,m-_,b-E).normalize(),n[4].setComponents(l-o,f-h,m-g,b-M).normalize(),t===gn)n[5].setComponents(l+o,f+h,m+g,b+M).normalize();else if(t===Ks)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xr extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new F,Qs=new F,Bo=new Qe,Yi=new Gl,Cs=new ki,Ca=new F,Oo=new F;class Fd extends ut{constructor(e=new Wt,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Js.fromBufferAttribute(t,i-1),Qs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=a,e.ray.intersectsSphere(Cs)===!1)return;Bo.copy(i).invert(),Yi.copy(e.ray).applyMatrix4(Bo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,r.start),_=Math.min(d.count,r.start+r.count);for(let g=p,m=_-1;g<m;g+=c){const u=d.getX(g),E=d.getX(g+1),M=Rs(this,e,Yi,l,u,E);M&&t.push(M)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(p),u=Rs(this,e,Yi,l,g,m);u&&t.push(u)}}else{const p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let g=p,m=_-1;g<m;g+=c){const u=Rs(this,e,Yi,l,g,g+1);u&&t.push(u)}if(this.isLineLoop){const g=Rs(this,e,Yi,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Rs(s,e,t,n,i,a){const r=s.geometry.attributes.position;if(Js.fromBufferAttribute(r,i),Qs.fromBufferAttribute(r,a),t.distanceSqToSegment(Js,Qs,Ca,Oo)>n)return;Ca.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ca);if(!(l<e.near||l>e.far))return{distance:l,point:Oo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const zo=new F,Go=new F;class Kl extends Fd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)zo.fromBufferAttribute(t,i),Go.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zo.distanceTo(Go);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Zl extends wt{constructor(e,t,n,i,a,r,o,l,c,d=Ai){if(d!==Ai&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ai&&(n=Jn),n===void 0&&d===Di&&(n=Li),super(null,i,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yr extends Wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),c(n),d(),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(a.slice(),3)),this.setAttribute("uv",new mt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new F,b=new F,C=new F;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],b),p(t[A+2],C),l(M,b,C,E)}function l(E,M,b,C){const A=C+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const S=E.clone().lerp(b,P/A),x=M.clone().lerp(b,P/A),I=A-P;for(let H=0;H<=I;H++)H===0&&P===A?w[P][H]=S:w[P][H]=S.clone().lerp(x,H/I)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){const x=Math.floor(S/2);S%2===0?(f(w[P][x+1]),f(w[P+1][x]),f(w[P][x])):(f(w[P][x+1]),f(w[P+1][x+1]),f(w[P+1][x]))}}function c(E){const M=new F;for(let b=0;b<a.length;b+=3)M.x=a[b+0],M.y=a[b+1],M.z=a[b+2],M.normalize().multiplyScalar(E),a[b+0]=M.x,a[b+1]=M.y,a[b+2]=M.z}function d(){const E=new F;for(let M=0;M<a.length;M+=3){E.x=a[M+0],E.y=a[M+1],E.z=a[M+2];const b=m(E)/2/Math.PI+.5,C=u(E)/Math.PI+.5;r.push(b,1-C)}_(),h()}function h(){for(let E=0;E<r.length;E+=6){const M=r[E+0],b=r[E+2],C=r[E+4],A=Math.max(M,b,C),w=Math.min(M,b,C);A>.9&&w<.1&&(M<.2&&(r[E+0]+=1),b<.2&&(r[E+2]+=1),C<.2&&(r[E+4]+=1))}}function f(E){a.push(E.x,E.y,E.z)}function p(E,M){const b=E*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function _(){const E=new F,M=new F,b=new F,C=new F,A=new Ge,w=new Ge,P=new Ge;for(let S=0,x=0;S<a.length;S+=9,x+=6){E.set(a[S+0],a[S+1],a[S+2]),M.set(a[S+3],a[S+4],a[S+5]),b.set(a[S+6],a[S+7],a[S+8]),A.set(r[x+0],r[x+1]),w.set(r[x+2],r[x+3]),P.set(r[x+4],r[x+5]),C.copy(E).add(M).add(b).divideScalar(3);const I=m(C);g(A,x+0,E,I),g(w,x+2,M,I),g(P,x+4,b,I)}}function g(E,M,b,C){C<0&&E.x===1&&(r[M]=E.x-1),b.x===0&&b.z===0&&(r[M]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.vertices,e.indices,e.radius,e.details)}}const Is=new F,Ps=new F,Ra=new F,Ls=new qt;class kd extends Wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),a=Math.cos(Ws*t),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:u}=Ls;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Ls.getNormal(Ra),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const M=(E+1)%3,b=h[E],C=h[M],A=Ls[d[E]],w=Ls[d[M]],P=`${b}_${C}`,S=`${C}_${b}`;S in f&&f[S]?(Ra.dot(f[S].normal)<=a&&(p.push(A.x,A.y,A.z),p.push(w.x,w.y,w.z)),f[S]=null):P in f||(f[P]={index0:c[E],index1:c[M],normal:Ra.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];Is.fromBufferAttribute(o,g),Ps.fromBufferAttribute(o,m),p.push(Is.x,Is.y,Is.z),p.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new mt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class jr extends Yr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jr(e.radius,e.detail)}}class Bi extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,f=t/l,p=[],_=[],g=[],m=[];for(let u=0;u<d;u++){const E=u*f-r;for(let M=0;M<c;M++){const b=M*h-a;_.push(b,-E,0),g.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const M=E+c*u,b=E+c*(u+1),C=E+1+c*(u+1),A=E+1+c*u;p.push(M,b,A),p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends Wt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new F,f=new F,p=[],_=[],g=[],m=[];for(let u=0;u<=n;u++){const E=[],M=u/n;let b=0;u===0&&r===0?b=.5/t:u===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const A=C/t;h.x=-e*Math.cos(i+A*a)*Math.sin(r+M*o),h.y=e*Math.cos(r+M*o),h.z=e*Math.sin(i+A*a)*Math.sin(r+M*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+b,1-M),E.push(c++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const M=d[u][E+1],b=d[u][E],C=d[u+1][E],A=d[u+1][E+1];(u!==0||r>0)&&p.push(M,b,A),(u!==n-1||l<Math.PI)&&p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ds extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cr extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bd extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Od extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zd extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ia=new Qe,Vo=new F,Ho=new F;class Gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jl extends Yl{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends Gd{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hd extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qd extends Zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wd extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qo(){return performance.now()}class Xd extends Kl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Se(n),i=new Se(i);const a=t/2,r=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,_=-o;f<=t;f++,_+=r){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=f===a?n:i;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const d=new Wt;d.setAttribute("position",new mt(l,3)),d.setAttribute("color",new mt(c,3));const h=new Xr({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wo(s,e,t,n){const i=Yd(n);switch(t){case Pl:return s*e;case Dl:return s*e;case Ul:return s*e*2;case zr:return s*e/i.components*i.byteLength;case Gr:return s*e/i.components*i.byteLength;case Nl:return s*e*2/i.components*i.byteLength;case Vr:return s*e*2/i.components*i.byteLength;case Ll:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case Hr:return s*e*4/i.components*i.byteLength;case zs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Hs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nr:case sr:return Math.max(s,16)*Math.max(e,8)/4;case tr:case ir:return Math.max(s,8)*Math.max(e,8)/2;case ar:case rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ur:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _r:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case br:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qs:case Mr:case Sr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fl:case Er:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tr:case wr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(s){switch(s){case xn:case Cl:return{byteLength:1,components:1};case ns:case Rl:case is:return{byteLength:2,components:1};case Br:case Or:return{byteLength:2,components:4};case Jn:case kr:case rn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ql(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function jd(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];s.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
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
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cu=`#ifdef USE_IRIDESCENCE
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
#endif`,du=`#ifdef USE_BUMPMAP
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yu=`#define PI 3.141592653589793
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gu=`uniform bool receiveShadow;
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
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,Yu=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ah=`#if defined( USE_POINTS_UV )
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
#endif`,rh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uh=`#ifdef USE_MORPHTARGETS
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
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ph=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
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
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uh=`float getShadowMask() {
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
}`,Nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fh=`#ifdef USE_SKINNING
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
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
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
#endif`,Oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
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
#endif`,qh=`#ifdef USE_TRANSMISSION
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
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kh=`uniform sampler2D t2D;
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
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`#include <common>
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
}`,nf=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
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
}`,cf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,uf=`uniform vec3 diffuse;
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
}`,hf=`#define LAMBERT
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define MATCAP
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
}`,mf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,gf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,yf=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,Ef=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Af=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Kd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:eu,alphatest_pars_fragment:tu,aomap_fragment:nu,aomap_pars_fragment:iu,batching_pars_vertex:su,batching_vertex:au,begin_vertex:ru,beginnormal_vertex:ou,bsdfs:lu,iridescence_fragment:cu,bumpmap_pars_fragment:du,clipping_planes_fragment:uu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:fu,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:_u,color_pars_vertex:gu,color_vertex:vu,common:yu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:Eu,emissivemap_pars_fragment:Tu,colorspace_fragment:wu,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Iu,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Vu,envmap_vertex:Lu,fog_vertex:Du,fog_pars_vertex:Uu,fog_fragment:Nu,fog_pars_fragment:Fu,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Bu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:zu,lights_pars_begin:Gu,lights_toon_fragment:Hu,lights_toon_pars_fragment:qu,lights_phong_fragment:Wu,lights_phong_pars_fragment:$u,lights_physical_fragment:Xu,lights_physical_pars_fragment:Yu,lights_fragment_begin:ju,lights_fragment_maps:Ku,lights_fragment_end:Zu,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:eh,logdepthbuf_vertex:th,map_fragment:nh,map_pars_fragment:ih,map_particle_fragment:sh,map_particle_pars_fragment:ah,metalnessmap_fragment:rh,metalnessmap_pars_fragment:oh,morphinstance_vertex:lh,morphcolor_vertex:ch,morphnormal_vertex:dh,morphtarget_pars_vertex:uh,morphtarget_vertex:hh,normal_fragment_begin:fh,normal_fragment_maps:ph,normal_pars_fragment:mh,normal_pars_vertex:_h,normal_vertex:gh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:xh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:Mh,opaque_fragment:Sh,packing:Eh,premultiplied_alpha_fragment:Th,project_vertex:wh,dithering_fragment:Ah,dithering_pars_fragment:Ch,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ih,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:Lh,shadowmap_vertex:Dh,shadowmask_pars_fragment:Uh,skinbase_vertex:Nh,skinning_pars_vertex:Fh,skinning_vertex:kh,skinnormal_vertex:Bh,specularmap_fragment:Oh,specularmap_pars_fragment:zh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Vh,transmission_fragment:Hh,transmission_pars_fragment:qh,uv_pars_fragment:Wh,uv_pars_vertex:$h,uv_vertex:Xh,worldpos_vertex:Yh,background_vert:jh,background_frag:Kh,backgroundCube_vert:Zh,backgroundCube_frag:Jh,cube_vert:Qh,cube_frag:ef,depth_vert:tf,depth_frag:nf,distanceRGBA_vert:sf,distanceRGBA_frag:af,equirect_vert:rf,equirect_frag:of,linedashed_vert:lf,linedashed_frag:cf,meshbasic_vert:df,meshbasic_frag:uf,meshlambert_vert:hf,meshlambert_frag:ff,meshmatcap_vert:pf,meshmatcap_frag:mf,meshnormal_vert:_f,meshnormal_frag:gf,meshphong_vert:vf,meshphong_frag:yf,meshphysical_vert:xf,meshphysical_frag:bf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:Ef,points_frag:Tf,shadow_vert:wf,shadow_frag:Af,sprite_vert:Cf,sprite_frag:Rf},ne={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},nn={basic:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Et([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Et([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Et([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Et([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Et([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Et([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Et([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Et([ne.lights,ne.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};nn.physical={uniforms:Et([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Us={r:0,b:0,g:0},Hn=new tn,If=new Qe;function Pf(s,e,t,n,i,a,r){const o=new Se(0);let l=a===!0?0:1,c,d,h=null,f=0,p=null;function _(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function g(M){let b=!1;const C=_(M);C===null?u(o,l):C&&C.isColor&&(u(C,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,b){const C=_(b);C&&(C.isCubeTexture||C.mapping===na)?(d===void 0&&(d=new Mt(new Dn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ni(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Hn.copy(b.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(If.makeRotationFromEuler(Hn)),d.material.toneMapped=$e.getTransfer(C.colorSpace)!==Ke,(h!==C||f!==C.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=C,f=C.version,p=s.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mt(new Bi(2,2),new Un({name:"BackgroundMaterial",uniforms:Ni(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(C.colorSpace)!==Ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,b){M.getRGB(Us,Xl(s)),n.buffers.color.setClear(Us.r,Us.g,Us.b,b,r)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:g,addToRenderList:m,dispose:E}}function Lf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let a=i,r=!1;function o(x,I,H,z,j){let K=!1;const $=h(z,H,I);a!==$&&(a=$,c(a.object)),K=p(x,z,H,j),K&&_(x,z,H,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,b(x,I,H,z),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function h(x,I,H){const z=H.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let K=j[I.id];K===void 0&&(K={},j[I.id]=K);let $=K[z];return $===void 0&&($=f(l()),K[z]=$),$}function f(x){const I=[],H=[],z=[];for(let j=0;j<t;j++)I[j]=0,H[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,I,H,z){const j=a.attributes,K=I.attributes;let $=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){const ue=j[V];let ye=K[V];if(ye===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),ue===void 0||ue.attribute!==ye||ye&&ue.data!==ye.data)return!0;$++}return a.attributesNum!==$||a.index!==z}function _(x,I,H,z){const j={},K=I.attributes;let $=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){let ue=K[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const ye={};ye.attribute=ue,ue&&ue.data&&(ye.data=ue.data),j[V]=ye,$++}a.attributes=j,a.attributesNum=$,a.index=z}function g(){const x=a.newAttributes;for(let I=0,H=x.length;I<H;I++)x[I]=0}function m(x){u(x,0)}function u(x,I){const H=a.newAttributes,z=a.enabledAttributes,j=a.attributeDivisors;H[x]=1,z[x]===0&&(s.enableVertexAttribArray(x),z[x]=1),j[x]!==I&&(s.vertexAttribDivisor(x,I),j[x]=I)}function E(){const x=a.newAttributes,I=a.enabledAttributes;for(let H=0,z=I.length;H<z;H++)I[H]!==x[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function M(x,I,H,z,j,K,$){$===!0?s.vertexAttribIPointer(x,I,H,j,K):s.vertexAttribPointer(x,I,H,z,j,K)}function b(x,I,H,z){g();const j=z.attributes,K=H.getAttributes(),$=I.defaultAttributeValues;for(const J in K){const V=K[J];if(V.location>=0){let ae=j[J];if(ae===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const ue=ae.normalized,ye=ae.itemSize,Ue=e.get(ae);if(Ue===void 0)continue;const Ze=Ue.buffer,W=Ue.type,te=Ue.bytesPerElement,_e=W===s.INT||W===s.UNSIGNED_INT||ae.gpuType===kr;if(ae.isInterleavedBufferAttribute){const re=ae.data,Te=re.stride,Ce=ae.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)u(V.location+Ne,re.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<V.locationSize;Ne++)M(V.location+Ne,ye/V.locationSize,W,ue,Te*te,(Ce+ye/V.locationSize*Ne)*te,_e)}else{if(ae.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)u(V.location+re,ae.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let re=0;re<V.locationSize;re++)M(V.location+re,ye/V.locationSize,W,ue,ye*te,ye/V.locationSize*re*te,_e)}}else if($!==void 0){const ue=$[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(V.location,ue);break;case 3:s.vertexAttrib3fv(V.location,ue);break;case 4:s.vertexAttrib4fv(V.location,ue);break;default:s.vertexAttrib1fv(V.location,ue)}}}}E()}function C(){P();for(const x in n){const I=n[x];for(const H in I){const z=I[H];for(const j in z)d(z[j].object),delete z[j];delete I[H]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const H in I){const z=I[H];for(const j in z)d(z[j].object),delete z[j];delete I[H]}delete n[x.id]}function w(x){for(const I in n){const H=n[I];if(H[x.id]===void 0)continue;const z=H[x.id];for(const j in z)d(z[j].object),delete z[j];delete H[x.id]}}function P(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function Df(s,e,t){let n;function i(c){n=c}function a(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function r(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];t.update(p,n,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uf(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==Jt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rn&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:C,maxSamples:A}}function Nf(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Wn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,u=s.get(h);if(!i||_===null||_.length===0||a&&!m)a?d(null):c();else{const E=a?0:n,M=E*4;let b=u.clippingState||null;l.value=b,b=d(_,f,M,p);for(let C=0;C!==M;++C)b[C]=t[C];u.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=p+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,b=p;M!==g;++M,b+=4)r.copy(h[M]).applyMatrix4(E,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ff(s){let e=new WeakMap;function t(r,o){return o===Za?r.mapping=Ii:o===Ja&&(r.mapping=Pi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Za||o===Ja)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const bi=4,$o=[.125,.215,.35,.446,.526,.582],Yn=20,Pa=new Jl,Xo=new Se;let La=null,Da=0,Ua=0,Na=!1;const $n=(1+Math.sqrt(5))/2,gi=1/$n,Yo=[new F(-$n,gi,0),new F($n,gi,0),new F(-gi,0,$n),new F(gi,0,$n),new F(0,$n,-gi),new F(0,$n,gi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:is,format:Jt,colorSpace:Ui,depthBuffer:!1},i=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(a)),this._blurMaterial=Bf(a,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const o=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xo),d.toneMapping=Pn,d.autoClear=!1;const p=new ql({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Mt(new Dn,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Xo),g=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):E===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;Ns(i,E*M,u>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Mt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Yo[(i-a-1)%Yo.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Mt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),g=a/_,m=isFinite(a)?1+Math.floor(d*g):Yn;m>Yn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const u=[];let E=0;for(let w=0;w<Yn;++w){const P=w/g,S=Math.exp(-P*P/2);u.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const b=this._sizeLods[i],C=3*b*(i>M-bi?i-M+bi:0),A=4*(this._cubeSize-b);Ns(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(h,Pa)}}function kf(s){const e=[],t=[],n=[];let i=s;const a=s-bi+1+$o.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-bi?l=$o[r-s+bi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,g=3,m=2,u=1,E=new Float32Array(g*_*p),M=new Float32Array(m*_*p),b=new Float32Array(u*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];E.set(S,g*_*A),M.set(f,m*_*A);const x=[A,A,A,A,A,A];b.set(x,u*_*A)}const C=new Wt;C.setAttribute("position",new Qt(E,g)),C.setAttribute("uv",new Qt(M,m)),C.setAttribute("faceIndex",new Qt(b,u)),e.push(C),i>bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ko(s,e,t){const n=new Qn(s,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bf(s,e,t){const n=new Float32Array(Yn),i=new F(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Zo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Jo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Jr(){return`

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
	`}function Of(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,d=l===Ii||l===Pi;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new jo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new jo(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function zf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gf(s,e,t,n){const i={},a=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete i[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let M=0,b=E.length;M<b;M+=3){const C=E[M+0],A=E[M+1],w=E[M+2];f.push(C,A,A,w,w,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,b=E.length/3-1;M<b;M+=3){const C=M+0,A=M+1,w=M+2;f.push(C,A,A,w,w,C)}}else return;const m=new(Bl(f)?$l:Wl)(f,1);m.version=g;const u=a.get(h);u&&e.remove(u),a.set(h,m)}function d(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Vf(s,e,t){let n;function i(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){s.drawElements(n,p,a,f*r),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,a,f*r,_),t.update(p,n,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function h(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,g,0,_);let u=0;for(let E=0;E<_;E++)u+=p[E]*g[E];t.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Hf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qf(s,e,t){const n=new WeakMap,i=new ot;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*h),P=new zl(w,C,A,h);P.type=rn,P.needsUpdate=!0;const S=b*4;for(let I=0;I<h;I++){const H=u[I],z=E[I],j=M[I],K=C*A*4*I;for(let $=0;$<H.count;$++){const J=$*S;_===!0&&(i.fromBufferAttribute(H,$),w[K+J+0]=i.x,w[K+J+1]=i.y,w[K+J+2]=i.z,w[K+J+3]=0),g===!0&&(i.fromBufferAttribute(z,$),w[K+J+4]=i.x,w[K+J+5]=i.y,w[K+J+6]=i.z,w[K+J+7]=0),m===!0&&(i.fromBufferAttribute(j,$),w[K+J+8]=i.x,w[K+J+9]=i.y,w[K+J+10]=i.z,w[K+J+11]=j.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new Ge(C,A)},n.set(o,f),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function Wf(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const ec=new wt,Qo=new Zl(1,1),tc=new zl,nc=new fd,ic=new jl,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Oi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=el[i];if(a===void 0&&(a=new Float32Array(i),el[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ia(s,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function Kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;sl.set(n),s.uniformMatrix2fv(this.addr,!1,sl),ft(t,n)}}function Zf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;il.set(n),s.uniformMatrix3fv(this.addr,!1,il),ft(t,n)}}function Jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;nl.set(n),s.uniformMatrix4fv(this.addr,!1,nl),ft(t,n)}}function Qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function ip(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Qo.compareFunction=kl,a=Qo):a=ec,t.setTexture2D(e||a,i)}function lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nc,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ic,i)}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tc,i)}function up(s){switch(s){case 5126:return $f;case 35664:return Xf;case 35665:return Yf;case 35666:return jf;case 35674:return Kf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return ap;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return dp}}function hp(s,e){s.uniform1fv(this.addr,e)}function fp(s,e){const t=Oi(e,this.size,2);s.uniform2fv(this.addr,t)}function pp(s,e){const t=Oi(e,this.size,3);s.uniform3fv(this.addr,t)}function mp(s,e){const t=Oi(e,this.size,4);s.uniform4fv(this.addr,t)}function _p(s,e){const t=Oi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gp(s,e){const t=Oi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vp(s,e){const t=Oi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yp(s,e){s.uniform1iv(this.addr,e)}function xp(s,e){s.uniform2iv(this.addr,e)}function bp(s,e){s.uniform3iv(this.addr,e)}function Mp(s,e){s.uniform4iv(this.addr,e)}function Sp(s,e){s.uniform1uiv(this.addr,e)}function Ep(s,e){s.uniform2uiv(this.addr,e)}function Tp(s,e){s.uniform3uiv(this.addr,e)}function wp(s,e){s.uniform4uiv(this.addr,e)}function Ap(s,e,t){const n=this.cache,i=e.length,a=ia(t,i);ht(n,a)||(s.uniform1iv(this.addr,a),ft(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ec,a[r])}function Cp(s,e,t){const n=this.cache,i=e.length,a=ia(t,i);ht(n,a)||(s.uniform1iv(this.addr,a),ft(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||nc,a[r])}function Rp(s,e,t){const n=this.cache,i=e.length,a=ia(t,i);ht(n,a)||(s.uniform1iv(this.addr,a),ft(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||ic,a[r])}function Ip(s,e,t){const n=this.cache,i=e.length,a=ia(t,i);ht(n,a)||(s.uniform1iv(this.addr,a),ft(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||tc,a[r])}function Pp(s){switch(s){case 5126:return hp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return _p;case 35675:return gp;case 35676:return vp;case 5124:case 35670:return yp;case 35667:case 35671:return xp;case 35668:case 35672:return bp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return Ep;case 36295:return Tp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pp(t.type)}}class Up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function al(s,e){s.seq.push(e),s.map[e.id]=e}function Np(s,e,t){const n=s.name,i=n.length;for(Fa.lastIndex=0;;){const a=Fa.exec(n),r=Fa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){al(t,c===void 0?new Lp(o,s,e):new Dp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Up(o),al(t,h)),t=h}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Np(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function rl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Fp=37297;let kp=0;function Bp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const ol=new Pe;function Op(s){$e._getMatrix(ol,$e.workingColorSpace,s);const e=`mat3( ${ol.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case js:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ll(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Bp(s.getShaderSource(e),r)}else return i}function zp(s,e){const t=Op(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gp(s,e){let t;switch(e){case zc:t="Linear";break;case Gc:t="Reinhard";break;case Vc:t="Cineon";break;case wl:t="ACESFilmic";break;case qc:t="AgX";break;case Wc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new F;function Vp(){$e.getLuminanceCoefficients(Fs);const s=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function qp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function es(s){return s!==""}function cl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(s){return s.replace($p,Yp)}const Xp=new Map;function Yp(s,e){let t=De[e];if(t===void 0){const n=Xp.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rr(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(s){return s.replace(jp,Kp)}function Kp(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function hl(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Pi:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function em(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fr:e="ENVMAP_BLENDING_MULTIPLY";break;case Bc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function tm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nm(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Zp(t),c=Jp(t),d=Qp(t),h=em(t),f=tm(t),p=Hp(t),_=qp(a),g=i.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),u.length>0&&(u+=`
`)):(m=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),u=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?De.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,zp("linearToOutputTexel",t.outputColorSpace),Vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),r=Rr(r),r=cl(r,t),r=dl(r,t),o=Rr(o),o=cl(o,t),o=dl(o,t),r=ul(r),o=ul(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=E+m+r,b=E+u+o,C=rl(i,i.VERTEX_SHADER,M),A=rl(i,i.FRAGMENT_SHADER,b);i.attachShader(g,C),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(I){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),j=i.getShaderInfoLog(A).trim();let K=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,A);else{const J=ll(i,C,"vertex"),V=ll(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+J+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||j==="")&&($=!1);$&&(I.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:u}})}i.deleteShader(C),i.deleteShader(A),P=new $s(i,g),S=Wp(i,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,Fp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let im=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new am(e),t.set(e,n)),n}}class am{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}}function rm(s,e,t,n,i,a,r){const o=new Vl,l=new sm,c=new Set,d=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,I,H,z){const j=H.fog,K=z.geometry,$=S.isMeshStandardMaterial?H.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),V=J&&J.mapping===na?J.image.height:null,ae=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=ue!==void 0?ue.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let Ze,W,te,_e;if(ae){const je=nn[ae];Ze=je.vertexShader,W=je.fragmentShader}else Ze=S.vertexShader,W=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const re=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,it=!!S.map,Ve=!!S.matcap,lt=!!J,R=!!S.aoMap,Bt=!!S.lightMap,Be=!!S.bumpMap,Oe=!!S.normalMap,xe=!!S.displacementMap,et=!!S.emissiveMap,ve=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,k=S.clearcoat>0,X=S.dispersion>0,Z=S.iridescence>0,q=S.sheen>0,ge=S.transmission>0,oe=v&&!!S.anisotropyMap,he=k&&!!S.clearcoatMap,He=k&&!!S.clearcoatNormalMap,ee=k&&!!S.clearcoatRoughnessMap,fe=Z&&!!S.iridescenceMap,Ee=Z&&!!S.iridescenceThicknessMap,we=q&&!!S.sheenColorMap,pe=q&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Le=!!S.specularColorMap,Je=!!S.specularIntensityMap,L=ge&&!!S.transmissionMap,ie=ge&&!!S.thicknessMap,G=!!S.gradientMap,Y=!!S.alphaMap,ce=S.alphaTest>0,le=!!S.alphaHash,Ie=!!S.extensions;let st=Pn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(st=s.toneMapping);const vt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:Ve,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:Bt,bumpMap:Be,normalMap:Oe,displacementMap:f&&xe,emissiveMap:et,normalMapObjectSpace:Oe&&S.normalMapType===jc,normalMapTangentSpace:Oe&&S.normalMapType===qr,metalnessMap:ve,roughnessMap:T,anisotropy:v,anisotropyMap:oe,clearcoat:k,clearcoatMap:he,clearcoatNormalMap:He,clearcoatRoughnessMap:ee,dispersion:X,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:q,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:ze,specularColorMap:Le,specularIntensityMap:Je,transmission:ge,transmissionMap:L,thicknessMap:ie,gradientMap:G,opaque:S.transparent===!1&&S.blending===wi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:le,combine:S.combine,mapUv:it&&g(S.map.channel),aoMapUv:R&&g(S.aoMap.channel),lightMapUv:Bt&&g(S.lightMap.channel),bumpMapUv:Be&&g(S.bumpMap.channel),normalMapUv:Oe&&g(S.normalMap.channel),displacementMapUv:xe&&g(S.displacementMap.channel),emissiveMapUv:et&&g(S.emissiveMap.channel),metalnessMapUv:ve&&g(S.metalnessMap.channel),roughnessMapUv:T&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:he&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(S.sheenRoughnessMap.channel),specularMapUv:ze&&g(S.specularMap.channel),specularColorMapUv:Le&&g(S.specularColorMap.channel),specularIntensityMapUv:Je&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:ie&&g(S.thicknessMap.channel),alphaMapUv:Y&&g(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Oe||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(it||Y),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===Ke,decodeVideoTextureEmissive:et&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===Ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)x.push(I),x.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(x,S),M(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const x=_[S.type];let I;if(x){const H=nn[x];I=Td.clone(H.uniforms)}else I=S.uniforms;return I}function C(S,x){let I;for(let H=0,z=d.length;H<z;H++){const j=d[H];if(j.cacheKey===x){I=j,++I.usedTimes;break}}return I===void 0&&(I=new nm(s,x,S,a),d.push(I)),I}function A(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:P}}function om(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function lm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pl(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,p,_,g,m){let u=s[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=g,u.group=m),e++,u}function o(h,f,p,_,g,m){const u=r(h,f,p,_,g,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(h,f,p,_,g,m){const u=r(h,f,p,_,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||lm),n.length>1&&n.sort(f||fl),i.length>1&&i.sort(f||fl)}function d(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:d,sort:c}}function cm(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new pl,s.set(n,[r])):i>=a.length?(r=new pl,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function dm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Se};break;case"SpotLight":t={position:new F,direction:new F,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function um(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hm=0;function fm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pm(s){const e=new dm,t=um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,a=new Qe,r=new Qe;function o(c){let d=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,u=0,E=0,M=0,b=0,C=0,A=0,w=0;c.sort(fm);for(let S=0,x=c.length;S<x;S++){const I=c[S],H=I.color,z=I.intensity,j=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*z,h+=H.g*z,f+=H.b*z;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],z);w++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(H).multiplyScalar(z),$.distance=j,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[g]=$;const J=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[g]=J.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=K,b++}g++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(H).multiplyScalar(z),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const J=I.shadow,V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=$,_++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(z),$.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[u]=$,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==b||P.numSpotMaps!==C||P.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=b,P.numSpotMaps=C,P.numLightProbes=w,n.version=hm++)}function l(c,d){let h=0,f=0,p=0,_=0,g=0;const m=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const M=c[u];if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function ml(s){const e=new pm(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function mm(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new ml(s),e.set(i,[o])):a>=r.length?(o=new ml(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
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
}`;function vm(s,e,t){let n=new $r;const i=new Ge,a=new Ge,r=new ot,o=new Bd({depthPacking:Yc}),l=new Od,c={},d=t.maxTextureSize,h={[Ln]:It,[It]:Ln,[sn]:sn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:_m,fragmentShader:gm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(In),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==fn&&this.type===fn,j=u===fn&&this.type!==fn;for(let K=0,$=A.length;K<$;K++){const J=A[K],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ae=V.getFrameExtents();if(i.multiply(ae),a.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/ae.x),i.x=a.x*ae.x,V.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/ae.y),i.y=a.y*ae.y,V.mapSize.y=a.y)),V.map===null||z===!0||j===!0){const ye=this.type!==fn?{minFilter:Ft,magFilter:Ft}:{};V.map!==null&&V.map.dispose(),V.map=new Qn(i.x,i.y,ye),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ue=V.getViewportCount();for(let ye=0;ye<ue;ye++){const Ue=V.getViewport(ye);r.set(a.x*Ue.x,a.y*Ue.y,a.x*Ue.z,a.y*Ue.w),H.viewport(r),V.updateMatrices(J,ye),n=V.getFrustum(),b(w,P,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&E(V,P),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,I)};function E(A,w){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,P,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,P,p,g,null)}function M(A,w,P,S){let x=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)x=I;else if(x=P.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=x.uuid,z=w.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let K=j[z];K===void 0&&(K=x.clone(),j[z]=K,w.addEventListener("dispose",C)),x=K}if(x.visible=w.visible,x.wireframe=w.wireframe,S===fn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=s.properties.get(x);H.light=P}return x}function b(A,w,P,S,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const K=z.groups;for(let $=0,J=K.length;$<J;$++){const V=K[$],ae=j[V.materialIndex];if(ae&&ae.visible){const ue=M(A,ae,S,x);A.onBeforeShadow(s,A,w,P,z,ue,V),s.renderBufferDirect(P,null,z,ue,A,V),A.onAfterShadow(s,A,w,P,z,ue,V)}}}else if(j.visible){const K=M(A,j,S,x);A.onBeforeShadow(s,A,w,P,z,K,null),s.renderBufferDirect(P,null,z,K,A,null),A.onAfterShadow(s,A,w,P,z,K,null)}}const H=A.children;for(let z=0,j=H.length;z<j;z++)b(H[z],w,P,S,x)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const ym={[qa]:Wa,[$a]:ja,[Xa]:Ka,[Ri]:Ya,[Wa]:qa,[ja]:$a,[Ka]:Xa,[Ya]:Ri};function xm(s,e){function t(){let L=!1;const ie=new ot;let G=null;const Y=new ot(0,0,0,0);return{setMask:function(ce){G!==ce&&!L&&(s.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){L=ce},setClear:function(ce,le,Ie,st,vt){vt===!0&&(ce*=st,le*=st,Ie*=st),ie.set(ce,le,Ie,st),Y.equals(ie)===!1&&(s.clearColor(ce,le,Ie,st),Y.copy(ie))},reset:function(){L=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,G=null,Y=null,ce=null;return{setReversed:function(le){if(ie!==le){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const st=ce;ce=null,this.setClear(st)}ie=le},getReversed:function(){return ie},setTest:function(le){le?re(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(le){G!==le&&!L&&(s.depthMask(le),G=le)},setFunc:function(le){if(ie&&(le=ym[le]),Y!==le){switch(le){case qa:s.depthFunc(s.NEVER);break;case Wa:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case Ri:s.depthFunc(s.LEQUAL);break;case Xa:s.depthFunc(s.EQUAL);break;case Ya:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=le}},setLocked:function(le){L=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),s.clearDepth(le),ce=le)},reset:function(){L=!1,G=null,Y=null,ce=null,ie=!1}}}function i(){let L=!1,ie=null,G=null,Y=null,ce=null,le=null,Ie=null,st=null,vt=null;return{setTest:function(je){L||(je?re(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(je){ie!==je&&!L&&(s.stencilMask(je),ie=je)},setFunc:function(je,$t,on){(G!==je||Y!==$t||ce!==on)&&(s.stencilFunc(je,$t,on),G=je,Y=$t,ce=on)},setOp:function(je,$t,on){(le!==je||Ie!==$t||st!==on)&&(s.stencilOp(je,$t,on),le=je,Ie=$t,st=on)},setLocked:function(je){L=je},setClear:function(je){vt!==je&&(s.clearStencil(je),vt=je)},reset:function(){L=!1,ie=null,G=null,Y=null,ce=null,le=null,Ie=null,st=null,vt=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,u=null,E=null,M=null,b=null,C=null,A=null,w=new Se(0,0,0),P=0,S=!1,x=null,I=null,H=null,z=null,j=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=J>=2);let ae=null,ue={};const ye=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ze=new ot().fromArray(ye),W=new ot().fromArray(Ue);function te(L,ie,G,Y){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(L,le),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<G;Ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return le}const _e={};_e[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(s.DEPTH_TEST),r.setFunc(Ri),Be(!1),Oe(uo),re(s.CULL_FACE),R(In);function re(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Te(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ce(L,ie){return h[L]!==ie?(s.bindFramebuffer(L,ie),h[L]=ie,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(L,ie){let G=p,Y=!1;if(L){G=f.get(ie),G===void 0&&(G=[],f.set(ie,G));const ce=L.textures;if(G.length!==ce.length||G[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Ie=ce.length;le<Ie;le++)G[le]=s.COLOR_ATTACHMENT0+le;G.length=ce.length,Y=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Y=!0);Y&&s.drawBuffers(G)}function it(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const Ve={[Xn]:s.FUNC_ADD,[bc]:s.FUNC_SUBTRACT,[Mc]:s.FUNC_REVERSE_SUBTRACT};Ve[Sc]=s.MIN,Ve[Ec]=s.MAX;const lt={[Tc]:s.ZERO,[wc]:s.ONE,[Ac]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[Dc]:s.SRC_ALPHA_SATURATE,[Pc]:s.DST_COLOR,[Rc]:s.DST_ALPHA,[Cc]:s.ONE_MINUS_SRC_COLOR,[Ha]:s.ONE_MINUS_SRC_ALPHA,[Lc]:s.ONE_MINUS_DST_COLOR,[Ic]:s.ONE_MINUS_DST_ALPHA,[Uc]:s.CONSTANT_COLOR,[Nc]:s.ONE_MINUS_CONSTANT_COLOR,[Fc]:s.CONSTANT_ALPHA,[kc]:s.ONE_MINUS_CONSTANT_ALPHA};function R(L,ie,G,Y,ce,le,Ie,st,vt,je){if(L===In){g===!0&&(Te(s.BLEND),g=!1);return}if(g===!1&&(re(s.BLEND),g=!0),L!==xc){if(L!==m||je!==S){if((u!==Xn||b!==Xn)&&(s.blendEquation(s.FUNC_ADD),u=Xn,b=Xn),je)switch(L){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ho:s.blendFunc(s.ONE,s.ONE);break;case fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ho:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case po:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,M=null,C=null,A=null,w.set(0,0,0),P=0,m=L,S=je}return}ce=ce||ie,le=le||G,Ie=Ie||Y,(ie!==u||ce!==b)&&(s.blendEquationSeparate(Ve[ie],Ve[ce]),u=ie,b=ce),(G!==E||Y!==M||le!==C||Ie!==A)&&(s.blendFuncSeparate(lt[G],lt[Y],lt[le],lt[Ie]),E=G,M=Y,C=le,A=Ie),(st.equals(w)===!1||vt!==P)&&(s.blendColor(st.r,st.g,st.b,vt),w.copy(st),P=vt),m=L,S=!1}function Bt(L,ie){L.side===sn?Te(s.CULL_FACE):re(s.CULL_FACE);let G=L.side===It;ie&&(G=!G),Be(G),L.blending===wi&&L.transparent===!1?R(In):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){x!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),x=L)}function Oe(L){L!==vc?(re(s.CULL_FACE),L!==I&&(L===uo?s.cullFace(s.BACK):L===yc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),I=L}function xe(L){L!==H&&($&&s.lineWidth(L),H=L)}function et(L,ie,G){L?(re(s.POLYGON_OFFSET_FILL),(z!==ie||j!==G)&&(s.polygonOffset(ie,G),z=ie,j=G)):Te(s.POLYGON_OFFSET_FILL)}function ve(L){L?re(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function T(L){L===void 0&&(L=s.TEXTURE0+K-1),ae!==L&&(s.activeTexture(L),ae=L)}function v(L,ie,G){G===void 0&&(ae===null?G=s.TEXTURE0+K-1:G=ae);let Y=ue[G];Y===void 0&&(Y={type:void 0,texture:void 0},ue[G]=Y),(Y.type!==L||Y.texture!==ie)&&(ae!==G&&(s.activeTexture(G),ae=G),s.bindTexture(L,ie||_e[L]),Y.type=L,Y.texture=ie)}function k(){const L=ue[ae];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){Ze.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function pe(L){W.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function ze(L,ie){let G=c.get(ie);G===void 0&&(G=new WeakMap,c.set(ie,G));let Y=G.get(L);Y===void 0&&(Y=s.getUniformBlockIndex(ie,L.name),G.set(L,Y))}function Le(L,ie){const Y=c.get(ie).get(L);l.get(ie)!==Y&&(s.uniformBlockBinding(ie,Y,L.__bindingPointIndex),l.set(ie,Y))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ae=null,ue={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,u=null,E=null,M=null,b=null,C=null,A=null,w=new Se(0,0,0),P=0,S=!1,x=null,I=null,H=null,z=null,j=null,Ze.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:re,disable:Te,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:it,setBlending:R,setMaterial:Bt,setFlipSided:Be,setCullFace:Oe,setLineWidth:xe,setPolygonOffset:et,setScissorTest:ve,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:He,texStorage3D:ee,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:we,viewport:pe,reset:Je}}function bm(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):Zs("canvas")}function g(T,v,k){let X=1;const Z=ve(T);if((Z.width>k||Z.height>k)&&(X=k/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*Z.width),ge=Math.floor(X*Z.height);h===void 0&&(h=_(q,ge));const oe=v?_(q,ge):h;return oe.width=q,oe.height=ge,oe.getContext("2d").drawImage(T,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ge+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(T,v,k,X,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),v===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),v===s.RGBA){const ge=Z?js:$e.getTransfer(X);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=ge===Ke?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(T,v){let k;return T?v===null||v===Jn||v===Li?k=s.DEPTH24_STENCIL8:v===rn?k=s.DEPTH32F_STENCIL8:v===ns&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===Li?k=s.DEPTH_COMPONENT24:v===rn?k=s.DEPTH_COMPONENT32F:v===ns&&(k=s.DEPTH_COMPONENT16),k}function C(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&d.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),x(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,X=f.get(k);if(X){const Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(X).length===0&&f.delete(k)}n.remove(T)}function S(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const k=T.source,X=f.get(k);delete X[v.__cacheKey],r.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)s.deleteFramebuffer(v.__webglFramebuffer[X]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let X=0,Z=k.length;X<Z;X++){const q=n.get(k[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(k[X])}n.remove(T)}let I=0;function H(){I=0}function z(){const T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function j(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function K(T,v){const k=n.get(T);if(T.isVideoTexture&&xe(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,T,v);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function $(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){W(k,T,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function J(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){W(k,T,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function V(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){te(k,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const ae={[Qa]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[er]:s.MIRRORED_REPEAT},ue={[Ft]:s.NEAREST,[$c]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ye={[Kc]:s.NEVER,[nd]:s.ALWAYS,[Zc]:s.LESS,[kl]:s.LEQUAL,[Jc]:s.EQUAL,[td]:s.GEQUAL,[Qc]:s.GREATER,[ed]:s.NOTEQUAL};function Ue(T,v){if(v.type===rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===ra||v.magFilter===cs||v.magFilter===Kn||v.minFilter===an||v.minFilter===ra||v.minFilter===cs||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ae[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ae[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ae[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ue[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==cs&&v.minFilter!==Kn||v.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const X=v.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const q=j(v);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Z[q].usedTimes++;const ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&S(v)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return k}function W(T,v,k){let X=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=s.TEXTURE_3D);const Z=Ze(T,v),q=v.source;t.bindTexture(X,T.__webglTexture,s.TEXTURE0+k);const ge=n.get(q);if(q.version!==ge.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const oe=$e.getPrimaries($e.workingColorSpace),he=v.colorSpace===Cn?null:$e.getPrimaries(v.colorSpace),He=v.colorSpace===Cn||oe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ee=g(v.image,!1,i.maxTextureSize);ee=et(v,ee);const fe=a.convert(v.format,v.colorSpace),Ee=a.convert(v.type);let we=M(v.internalFormat,fe,Ee,v.colorSpace,v.isVideoTexture);Ue(X,v);let pe;const ze=v.mipmaps,Le=v.isVideoTexture!==!0,Je=ge.__version===void 0||Z===!0,L=q.dataReady,ie=C(v,ee);if(v.isDepthTexture)we=b(v.format===Di,v.type),Je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Ee,null));else if(v.isDataTexture)if(ze.length>0){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,ze[0].width,ze[0].height);for(let G=0,Y=ze.length;G<Y;G++)pe=ze[G],Le?L&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Ee,pe.data):t.texImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,fe,Ee,pe.data);v.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Ee,ee.data)):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Ee,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,ze[0].width,ze[0].height,ee.depth);for(let G=0,Y=ze.length;G<Y;G++)if(pe=ze[G],v.format!==Jt)if(fe!==null)if(Le){if(L)if(v.layerUpdates.size>0){const ce=Wo(pe.width,pe.height,v.format,v.type);for(const le of v.layerUpdates){const Ie=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,le,pe.width,pe.height,1,fe,Ie)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,ee.depth,fe,Ee,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,ee.depth,0,fe,Ee,pe.data)}else{Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,ze[0].width,ze[0].height);for(let G=0,Y=ze.length;G<Y;G++)pe=ze[G],v.format!==Jt?fe!==null?Le?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Ee,pe.data):t.texImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,fe,Ee,pe.data)}else if(v.isDataArrayTexture)if(Le){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,ee.width,ee.height,ee.depth),L)if(v.layerUpdates.size>0){const G=Wo(ee.width,ee.height,v.format,v.type);for(const Y of v.layerUpdates){const ce=ee.data.subarray(Y*G/ee.data.BYTES_PER_ELEMENT,(Y+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,fe,Ee,ce)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ee,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,fe,Ee,ee.data);else if(v.isData3DTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_3D,ie,we,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ee,ee.data)):t.texImage3D(s.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,fe,Ee,ee.data);else if(v.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height);else{let G=ee.width,Y=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,we,G,Y,0,fe,Ee,null),G>>=1,Y>>=1}}else if(ze.length>0){if(Le&&Je){const G=ve(ze[0]);t.texStorage2D(s.TEXTURE_2D,ie,we,G.width,G.height)}for(let G=0,Y=ze.length;G<Y;G++)pe=ze[G],Le?L&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,fe,Ee,pe):t.texImage2D(s.TEXTURE_2D,G,we,fe,Ee,pe);v.generateMipmaps=!1}else if(Le){if(Je){const G=ve(ee);t.texStorage2D(s.TEXTURE_2D,ie,we,G.width,G.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Ee,ee)}else t.texImage2D(s.TEXTURE_2D,0,we,fe,Ee,ee);m(v)&&u(X),ge.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function te(T,v,k){if(v.image.length!==6)return;const X=Ze(T,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const q=n.get(Z);if(Z.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+k);const ge=$e.getPrimaries($e.workingColorSpace),oe=v.colorSpace===Cn?null:$e.getPrimaries(v.colorSpace),he=v.colorSpace===Cn||ge===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!He&&!ee?fe[Y]=g(v.image[Y],!0,i.maxCubemapSize):fe[Y]=ee?v.image[Y].image:v.image[Y],fe[Y]=et(v,fe[Y]);const Ee=fe[0],we=a.convert(v.format,v.colorSpace),pe=a.convert(v.type),ze=M(v.internalFormat,we,pe,v.colorSpace),Le=v.isVideoTexture!==!0,Je=q.__version===void 0||X===!0,L=Z.dataReady;let ie=C(v,Ee);Ue(s.TEXTURE_CUBE_MAP,v);let G;if(He){Le&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ze,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){G=fe[Y].mipmaps;for(let ce=0;ce<G.length;ce++){const le=G[ce];v.format!==Jt?we!==null?Le?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,ze,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,we,pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,ze,le.width,le.height,0,we,pe,le.data)}}}else{if(G=v.mipmaps,Le&&Je){G.length>0&&ie++;const Y=ve(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Le?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,we,pe,fe[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,fe[Y].width,fe[Y].height,0,we,pe,fe[Y].data);for(let ce=0;ce<G.length;ce++){const Ie=G[ce].image[Y].image;Le?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ie.width,Ie.height,we,pe,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,ze,Ie.width,Ie.height,0,we,pe,Ie.data)}}else{Le?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,pe,fe[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,we,pe,fe[Y]);for(let ce=0;ce<G.length;ce++){const le=G[ce];Le?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,we,pe,le.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,ze,we,pe,le.image[Y])}}}m(v)&&u(s.TEXTURE_CUBE_MAP),q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _e(T,v,k,X,Z,q){const ge=a.convert(k.format,k.colorSpace),oe=a.convert(k.type),he=M(k.internalFormat,ge,oe,k.colorSpace),He=n.get(v),ee=n.get(k);if(ee.__renderTarget=v,!He.__hasExternalTextures){const fe=Math.max(1,v.width>>q),Ee=Math.max(1,v.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,he,fe,Ee,v.depth,0,ge,oe,null):t.texImage2D(Z,q,he,fe,Ee,0,ge,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,ee.__webglTexture,0,Be(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,q=b(v.stencilBuffer,Z),ge=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Be(v);Oe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,T)}else{const X=v.textures;for(let Z=0;Z<X.length;Z++){const q=X[Z],ge=a.convert(q.format,q.colorSpace),oe=a.convert(q.type),he=M(q.internalFormat,ge,oe,q.colorSpace),He=Be(v);k&&Oe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,he,v.width,v.height):Oe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,he,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,he,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const Z=X.__webglTexture,q=Be(v);if(v.depthTexture.format===Ai)Oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Di)Oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=s.createRenderbuffer(),re(v.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),re(v.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(T,v,k){const X=n.get(T);v!==void 0&&_e(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ce(T)}function it(T){const v=T.texture,k=n.get(T),X=n.get(v);T.addEventListener("dispose",w);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=v.version,r.memory.textures++),q){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let he=0;he<v.mipmaps.length;he++)k.__webglFramebuffer[oe][he]=s.createFramebuffer()}else k.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)k.__webglFramebuffer[oe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ge)for(let oe=0,he=Z.length;oe<he;oe++){const He=n.get(Z[oe]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&Oe(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const he=Z[oe];k.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const He=a.convert(he.format,he.colorSpace),ee=a.convert(he.type),fe=M(he.internalFormat,He,ee,he.colorSpace,T.isXRRenderTarget===!0),Ee=Be(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),re(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(k.__webglFramebuffer[oe][he],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else _e(k.__webglFramebuffer[oe],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,he=Z.length;oe<he;oe++){const He=Z[oe],ee=n.get(He);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Ue(s.TEXTURE_2D,He),_e(k.__webglFramebuffer,T,He,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(He)&&u(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),Ue(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(k.__webglFramebuffer[he],T,v,s.COLOR_ATTACHMENT0,oe,he);else _e(k.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,oe,0);m(v)&&u(oe),t.unbindTexture()}T.depthBuffer&&Ce(T)}function Ve(T){const v=T.textures;for(let k=0,X=v.length;k<X;k++){const Z=v[k];if(m(Z)){const q=E(T),ge=n.get(Z).__webglTexture;t.bindTexture(q,ge),u(q),t.unbindTexture()}}}const lt=[],R=[];function Bt(T){if(T.samples>0){if(Oe(T)===!1){const v=T.textures,k=T.width,X=T.height;let Z=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(T),oe=v.length>1;if(oe)for(let he=0;he<v.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<v.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const He=n.get(v[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,Z,s.NEAREST),l===!0&&(lt.length=0,R.length=0,lt.push(s.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(lt.push(q),R.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<v.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const He=n.get(v[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Be(T){return Math.min(i.maxSamples,T.samples)}function Oe(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(T){const v=r.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function et(T,v){const k=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ui&&k!==Cn&&($e.getTransfer(k)===Ke?(X!==Jt||Z!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe}function Mm(s,e){function t(n,i=Cn){let a;const r=$e.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Br)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Or)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return s.BYTE;if(n===Rl)return s.SHORT;if(n===ns)return s.UNSIGNED_SHORT;if(n===kr)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===is)return s.HALF_FLOAT;if(n===Pl)return s.ALPHA;if(n===Ll)return s.RGB;if(n===Jt)return s.RGBA;if(n===Dl)return s.LUMINANCE;if(n===Ul)return s.LUMINANCE_ALPHA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===zr)return s.RED;if(n===Gr)return s.RED_INTEGER;if(n===Nl)return s.RG;if(n===Vr)return s.RG_INTEGER;if(n===Hr)return s.RGBA_INTEGER;if(n===zs||n===Gs||n===Vs||n===Hs)if(r===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tr||n===nr||n===ir||n===sr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ar||n===rr||n===or)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ar||n===rr)return r===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===or)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lr||n===cr||n===dr||n===ur||n===hr||n===fr||n===pr||n===mr||n===_r||n===gr||n===vr||n===yr||n===xr||n===br)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===lr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ur)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_r)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xr)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===br)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Mr||n===Sr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===qs)return r===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Er||n===Tr||n===wr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===qs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Er)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Sm={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tm=`
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

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Em,fragmentShader:Tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends Fi{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const g=new wm,m=t.getContextAttributes();let u=null,E=null;const M=[],b=[],C=new Ge;let A=null;const w=new Ht;w.viewport=new ot;const P=new Ht;P.viewport=new ot;const S=[w,P],x=new Wd;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=M[W];return te===void 0&&(te=new ka,M[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=M[W];return te===void 0&&(te=new ka,M[W]=te),te.getGripSpace()},this.getHand=function(W){let te=M[W];return te===void 0&&(te=new ka,M[W]=te),te.getHandSpace()};function z(W){const te=b.indexOf(W.inputSource);if(te===-1)return;const _e=M[te];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||r),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",K);for(let W=0;W<M.length;W++){const te=b[W];te!==null&&(b[W]=null,M[W].disconnect(te))}I=null,H=null,g.reset(),e.setRenderTarget(u),p=null,f=null,h=null,i=null,E=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",j),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _e=null,re=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Di:Ai,re=m.stencil?Li:Jn);const Ce={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Qn(f.textureWidth,f.textureHeight,{format:Jt,type:xn,depthTexture:new Zl(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(W){for(let te=0;te<W.removed.length;te++){const _e=W.removed[te],re=b.indexOf(_e);re>=0&&(b[re]=null,M[re].disconnect(_e))}for(let te=0;te<W.added.length;te++){const _e=W.added[te];let re=b.indexOf(_e);if(re===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=b.length){b.push(_e),re=Ce;break}else if(b[Ce]===null){b[Ce]=_e,re=Ce;break}if(re===-1)break}const Te=M[re];Te&&Te.connect(_e)}}const $=new F,J=new F;function V(W,te,_e){$.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const re=$.distanceTo(J),Te=te.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),it=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],lt=(Te[9]-1)/Te[5],R=(Te[8]-1)/Te[0],Bt=(Ce[8]+1)/Ce[0],Be=Ne*R,Oe=Ne*Bt,xe=re/(-R+Bt),et=xe*-R;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(et),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ve=Ne+xe,T=it+xe,v=Be-et,k=Oe+(re-et),X=Ve*it/T*ve,Z=lt*it/T*ve;W.projectionMatrix.makePerspective(v,k,X,Z,ve,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let te=W.near,_e=W.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),x.near=P.near=w.near=te,x.far=P.far=w.far=_e,(I!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,H=x.far),w.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,x.layers.mask=w.layers.mask|P.layers.mask;const re=W.parent,Te=x.cameras;ae(x,re);for(let Ce=0;Ce<Te.length;Ce++)ae(Te[Ce],re);Te.length===2?V(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),ue(W,x,re)};function ue(W,te,_e){_e===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ar*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ye=null;function Ue(W,te){if(d=te.getViewerPose(c||r),_=te,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let re=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];let it=null;if(p!==null)it=p.getViewport(Ne);else{const lt=h.getViewSubImage(f,Ne);it=lt.viewport,Ce===0&&(e.setRenderTargetTextures(E,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(E))}let Ve=S[Ce];Ve===void 0&&(Ve=new Ht,Ve.layers.enable(Ce),Ve.viewport=new ot,S[Ce]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Ce===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(Ve)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=h.getDepthInformation(_e[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,i.renderState)}}for(let _e=0;_e<M.length;_e++){const re=b[_e],Te=M[_e];re!==null&&Te!==void 0&&Te.update(re,te,c||r)}ye&&ye(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ze=new Ql;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(W){ye=W},this.dispose=function(){}}}const qn=new tn,Cm=new Qe;function Rm(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Xl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,E,M,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),h(m,u)):u.isMeshPhongMaterial?(a(m,u),d(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),g(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===It&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===It&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),M=E.envMap,b=E.envMapRotation;M&&(m.envMap.value=M,qn.copy(b),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(qn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Im(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const b=M.program;n.uniformBlockBinding(E,b)}function c(E,M){let b=i[E.id];b===void 0&&(_(E),b=d(E),i[E.id]=b,E.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(E,C);const A=e.render.frame;a[E.id]!==A&&(f(E),a[E.id]=A)}function d(E){const M=h();E.__bindingPointIndex=M;const b=s.createBuffer(),C=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function h(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],b=E.uniforms,C=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,w=b.length;A<w;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,x=P.length;S<x;S++){const I=P[S];if(p(I,A,S,C)===!0){const H=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let K=0;K<z.length;K++){const $=z[K],J=g($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,H+j,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,M,b,C){const A=E.value,w=M+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(E){const M=E.uniforms;let b=0;const C=16;for(let w=0,P=M.length;w<P;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,I=S.length;x<I;x++){const H=S[x],z=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=z.length;j<K;j++){const $=z[j],J=g($),V=b%C,ae=V%J.boundary,ue=V+ae;b+=ae,ue!==0&&C-ue<J.storage&&(b+=C-ue),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=J.storage}}}const A=b%C;return A>0&&(b+=C-A),E.__size=b,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const b=r.indexOf(M.__bindingPointIndex);r.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete a[M.id]}function u(){for(const E in i)s.deleteBuffer(i[E]);r=[],i={},a={}}return{bind:l,update:c,dispose:u}}class Pm{constructor(e={}){const{canvas:t=sd(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Pn,this.toneMappingExposure=1;const b=this;let C=!1,A=0,w=0,P=null,S=-1,x=null;const I=new ot,H=new ot;let z=null;const j=new Se(0);let K=0,$=t.width,J=t.height,V=1,ae=null,ue=null;const ye=new ot(0,0,$,J),Ue=new ot(0,0,$,J);let Ze=!1;const W=new $r;let te=!1,_e=!1;this.transmissionResolutionScale=1;const re=new Qe,Te=new Qe,Ce=new F,Ne=new ot,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function lt(){return P===null?V:1}let R=n;function Bt(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nr}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const D="webgl2";if(R=Bt(D,y),R===null)throw Bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Be,Oe,xe,et,ve,T,v,k,X,Z,q,ge,oe,he,He,ee,fe,Ee,we,pe,ze,Le,Je,L;function ie(){Be=new zf(R),Be.init(),Le=new Mm(R,Be),Oe=new Uf(R,Be,e,Le),xe=new xm(R,Be),Oe.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),et=new Hf(R),ve=new om,T=new bm(R,Be,xe,ve,Oe,Le,et),v=new Ff(b),k=new Of(b),X=new jd(R),Je=new Lf(R,X),Z=new Gf(R,X,et,Je),q=new Wf(R,Z,X,et),we=new qf(R,Oe,T),ee=new Nf(ve),ge=new rm(b,v,k,Be,Oe,Je,ee),oe=new Rm(b,ve),he=new cm,He=new mm(Be),Ee=new Pf(b,v,k,xe,q,p,l),fe=new vm(b,q,Oe),L=new Im(R,et,Oe,xe),pe=new Df(R,Be,et),ze=new Vf(R,Be,et),et.programs=ge.programs,b.capabilities=Oe,b.extensions=Be,b.properties=ve,b.renderLists=he,b.shadowMap=fe,b.state=xe,b.info=et}ie();const G=new Am(b,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,J,!1))},this.getSize=function(y){return y.set($,J)},this.setSize=function(y,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,J=D,t.width=Math.floor(y*V),t.height=Math.floor(D*V),B===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set($*V,J*V).floor()},this.setDrawingBufferSize=function(y,D,B){$=y,J=D,V=B,t.width=Math.floor(y*B),t.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,D,B,O){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,D,B,O),xe.viewport(I.copy(ye).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ue)},this.setScissor=function(y,D,B,O){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,D,B,O),xe.scissor(H.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){xe.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(y=!0,D=!0,B=!0){let O=0;if(y){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===Hr||Q===Vr||Q===Gr}if(U){const Q=P.texture.type,se=Q===xn||Q===Jn||Q===ns||Q===Li||Q===Br||Q===Or,de=Ee.getClearColor(),me=Ee.getClearAlpha(),Ae=de.r,Re=de.g,be=de.b;se?(_[0]=Ae,_[1]=Re,_[2]=be,_[3]=me,R.clearBufferuiv(R.COLOR,0,_)):(g[0]=Ae,g[1]=Re,g[2]=be,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else O|=R.COLOR_BUFFER_BIT}D&&(O|=R.DEPTH_BUFFER_BIT),B&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ee.dispose(),he.dispose(),He.dispose(),ve.dispose(),v.dispose(),k.dispose(),q.dispose(),Je.dispose(),L.dispose(),ge.dispose(),G.dispose(),G.removeEventListener("sessionstart",io),G.removeEventListener("sessionend",so),kn.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=et.autoReset,D=fe.enabled,B=fe.autoUpdate,O=fe.needsUpdate,U=fe.type;ie(),et.autoReset=y,fe.enabled=D,fe.autoUpdate=B,fe.needsUpdate=O,fe.type=U}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const D=y.target;D.removeEventListener("dispose",Ie),st(D)}function st(y){vt(y),ve.remove(y)}function vt(y){const D=ve.get(y).programs;D!==void 0&&(D.forEach(function(B){ge.releaseProgram(B)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,O,U,Q){D===null&&(D=it);const se=U.isMesh&&U.matrixWorld.determinant()<0,de=dc(y,D,B,O,U);xe.setMaterial(O,se);let me=B.index,Ae=1;if(O.wireframe===!0){if(me=Z.getWireframeAttribute(B),me===void 0)return;Ae=2}const Re=B.drawRange,be=B.attributes.position;let qe=Re.start*Ae,Xe=(Re.start+Re.count)*Ae;Q!==null&&(qe=Math.max(qe,Q.start*Ae),Xe=Math.min(Xe,(Q.start+Q.count)*Ae)),me!==null?(qe=Math.max(qe,0),Xe=Math.min(Xe,me.count)):be!=null&&(qe=Math.max(qe,0),Xe=Math.min(Xe,be.count));const ct=Xe-qe;if(ct<0||ct===1/0)return;Je.setup(U,O,de,B,me);let at,We=pe;if(me!==null&&(at=X.get(me),We=ze,We.setIndex(at)),U.isMesh)O.wireframe===!0?(xe.setLineWidth(O.wireframeLinewidth*lt()),We.setMode(R.LINES)):We.setMode(R.TRIANGLES);else if(U.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),xe.setLineWidth(Me*lt()),U.isLineSegments?We.setMode(R.LINES):U.isLineLoop?We.setMode(R.LINE_LOOP):We.setMode(R.LINE_STRIP)}else U.isPoints?We.setMode(R.POINTS):U.isSprite&&We.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)We.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))We.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,_t=U._multiDrawCounts,Ye=U._multiDrawCount,Xt=me?X.get(me).bytesPerElement:1,ni=ve.get(O).currentProgram.getUniforms();for(let Pt=0;Pt<Ye;Pt++)ni.setValue(R,"_gl_DrawID",Pt),We.render(Me[Pt]/Xt,_t[Pt])}else if(U.isInstancedMesh)We.renderInstances(qe,ct,U.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,Me);We.renderInstances(qe,ct,_t)}else We.render(qe,ct)};function je(y,D,B){y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,os(y,D,B),y.side=Ln,y.needsUpdate=!0,os(y,D,B),y.side=sn):os(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),u=He.get(B),u.init(D),M.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const de=Q[se];je(de,B,U),O.add(de)}else je(Q,B,U),O.add(Q)}),M.pop(),u=null,O},this.compileAsync=function(y,D,B=null){const O=this.compile(y,D,B);return new Promise(U=>{function Q(){if(O.forEach(function(se){ve.get(se).currentProgram.isReady()&&O.delete(se)}),O.size===0){U(y);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $t=null;function on(y){$t&&$t(y)}function io(){kn.stop()}function so(){kn.start()}const kn=new Ql;kn.setAnimationLoop(on),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(y){$t=y,G.setAnimationLoop(y),y===null?kn.stop():kn.start()},G.addEventListener("sessionstart",io),G.addEventListener("sessionend",so),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,D,P),u=He.get(y,M.length),u.init(D),M.push(u),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,te=ee.init(this.clippingPlanes,_e),m=he.get(y,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=b.xr.getDepthSensingMesh();Q!==null&&sa(Q,D,-1/0,b.sortObjects)}sa(y,D,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ae,ue),Ve=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(m,y),this.info.render.frame++,te===!0&&ee.beginShadows();const B=u.state.shadowsArray;fe.render(B,y,D),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let se=0,de=Q.length;se<de;se++){const me=Q[se];ro(O,U,y,me)}Ve&&Ee.render(y);for(let se=0,de=Q.length;se<de;se++){const me=Q[se];ao(m,y,me,me.viewport)}}else U.length>0&&ro(O,U,y,D),Ve&&Ee.render(y),ao(m,y,D);P!==null&&w===0&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(b,y,D),Je.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(u=M[M.length-1],te===!0&&ee.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function sa(y,D,B,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){O&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const se=q.update(y),de=y.material;de.visible&&m.push(y,se,de,B,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const se=q.update(y),de=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ne.copy(se.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(de)){const me=se.groups;for(let Ae=0,Re=me.length;Ae<Re;Ae++){const be=me[Ae],qe=de[be.materialIndex];qe&&qe.visible&&m.push(y,se,qe,B,Ne.z,be)}}else de.visible&&m.push(y,se,de,B,Ne.z,null)}}const Q=y.children;for(let se=0,de=Q.length;se<de;se++)sa(Q[se],D,B,O)}function ao(y,D,B,O){const U=y.opaque,Q=y.transmissive,se=y.transparent;u.setupLightsView(B),te===!0&&ee.setGlobalState(b.clippingPlanes,B),O&&xe.viewport(I.copy(O)),U.length>0&&rs(U,D,B),Q.length>0&&rs(Q,D,B),se.length>0&&rs(se,D,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ro(y,D,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new Qn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?is:xn,minFilter:Kn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const Q=u.state.transmissionRenderTarget[O.id],se=O.viewport||I;Q.setSize(se.z*b.transmissionResolutionScale,se.w*b.transmissionResolutionScale);const de=b.getRenderTarget();b.setRenderTarget(Q),b.getClearColor(j),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&Ee.render(B);const me=b.toneMapping;b.toneMapping=Pn;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),te===!0&&ee.setGlobalState(b.clippingPlanes,O),rs(y,B,O),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let be=0,qe=D.length;be<qe;be++){const Xe=D[be],ct=Xe.object,at=Xe.geometry,We=Xe.material,Me=Xe.group;if(We.side===sn&&ct.layers.test(O.layers)){const _t=We.side;We.side=It,We.needsUpdate=!0,oo(ct,B,O,at,We,Me),We.side=_t,We.needsUpdate=!0,Re=!0}}Re===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}b.setRenderTarget(de),b.setClearColor(j,K),Ae!==void 0&&(O.viewport=Ae),b.toneMapping=me}function rs(y,D,B){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const se=y[U],de=se.object,me=se.geometry,Ae=O===null?se.material:O,Re=se.group;de.layers.test(B.layers)&&oo(de,D,B,me,Ae,Re)}}function oo(y,D,B,O,U,Q){y.onBeforeRender(b,D,B,O,U,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(b,D,B,O,y,Q),U.transparent===!0&&U.side===sn&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,b.renderBufferDirect(B,D,O,U,y,Q),U.side=Ln,U.needsUpdate=!0,b.renderBufferDirect(B,D,O,U,y,Q),U.side=sn):b.renderBufferDirect(B,D,O,U,y,Q),y.onAfterRender(b,D,B,O,U,Q)}function os(y,D,B){D.isScene!==!0&&(D=it);const O=ve.get(y),U=u.state.lights,Q=u.state.shadowsArray,se=U.state.version,de=ge.getParameters(y,U.state,Q,D,B),me=ge.getProgramCacheKey(de);let Ae=O.programs;O.environment=y.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Ie),Ae=new Map,O.programs=Ae);let Re=Ae.get(me);if(Re!==void 0){if(O.currentProgram===Re&&O.lightsStateVersion===se)return co(y,de),Re}else de.uniforms=ge.getUniforms(y),y.onBeforeCompile(de,b),Re=ge.acquireProgram(de,me),Ae.set(me,Re),O.uniforms=de.uniforms;const be=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=ee.uniform),co(y,de),O.needsLights=hc(y),O.lightsStateVersion=se,O.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Re,O.uniformsList=null,Re}function lo(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=$s.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function co(y,D){const B=ve.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function dc(y,D,B,O,U){D.isScene!==!0&&(D=it),T.resetTextureUnits();const Q=D.fog,se=O.isMeshStandardMaterial?D.environment:null,de=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,me=(O.isMeshStandardMaterial?k:v).get(O.envMap||se),Ae=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!B.morphAttributes.position,qe=!!B.morphAttributes.normal,Xe=!!B.morphAttributes.color;let ct=Pn;O.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=b.toneMapping);const at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,We=at!==void 0?at.length:0,Me=ve.get(O),_t=u.state.lights;if(te===!0&&(_e===!0||y!==x)){const St=y===x&&O.id===S;ee.setState(O,y,St)}let Ye=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==_t.state.version||Me.outputColorSpace!==de||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==me||O.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Re||Me.morphTargets!==be||Me.morphNormals!==qe||Me.morphColors!==Xe||Me.toneMapping!==ct||Me.morphTargetsCount!==We)&&(Ye=!0):(Ye=!0,Me.__version=O.version);let Xt=Me.currentProgram;Ye===!0&&(Xt=os(O,D,U));let ni=!1,Pt=!1,zi=!1;const nt=Xt.getUniforms(),Ot=Me.uniforms;if(xe.useProgram(Xt.program)&&(ni=!0,Pt=!0,zi=!0),O.id!==S&&(S=O.id,Pt=!0),ni||x!==y){xe.buffers.depth.getReversed()?(re.copy(y.projectionMatrix),rd(re),od(re),nt.setValue(R,"projectionMatrix",re)):nt.setValue(R,"projectionMatrix",y.projectionMatrix),nt.setValue(R,"viewMatrix",y.matrixWorldInverse);const At=nt.map.cameraPosition;At!==void 0&&At.setValue(R,Ce.setFromMatrixPosition(y.matrixWorld)),Oe.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Pt=!0,zi=!0)}if(U.isSkinnedMesh){nt.setOptional(R,U,"bindMatrix"),nt.setOptional(R,U,"bindMatrixInverse");const St=U.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),nt.setValue(R,"boneTexture",St.boneTexture,T))}U.isBatchedMesh&&(nt.setOptional(R,U,"batchingTexture"),nt.setValue(R,"batchingTexture",U._matricesTexture,T),nt.setOptional(R,U,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",U._indirectTexture,T),nt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",U._colorsTexture,T));const zt=B.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&we.update(U,B,Xt),(Pt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,nt.setValue(R,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ot.envMap.value=me,Ot.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),Pt&&(nt.setValue(R,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&uc(Ot,zi),Q&&O.fog===!0&&oe.refreshFogUniforms(Ot,Q),oe.refreshMaterialUniforms(Ot,O,V,J,u.state.transmissionRenderTarget[y.id]),$s.upload(R,lo(Me),Ot,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($s.upload(R,lo(Me),Ot,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(R,"center",U.center),nt.setValue(R,"modelViewMatrix",U.modelViewMatrix),nt.setValue(R,"normalMatrix",U.normalMatrix),nt.setValue(R,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const St=O.uniformsGroups;for(let At=0,aa=St.length;At<aa;At++){const Bn=St[At];L.update(Bn,Xt),L.bind(Bn,Xt)}}return Xt}function uc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function hc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,D,B){ve.get(y.texture).__webglTexture=D,ve.get(y.depthTexture).__webglTexture=B;const O=ve.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=ve.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const fc=R.createFramebuffer();this.setRenderTarget=function(y,D=0,B=0){P=y,A=D,w=B;let O=!0,U=null,Q=!1,se=!1;if(y){const me=ve.get(y);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(me.__hasExternalTextures)T.rebindTextures(y,ve.get(y.texture).__webglTexture,ve.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const be=y.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(y.width!==be.image.width||y.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(se=!0);const Re=ve.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][B]:U=Re[D],Q=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=ve.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,I.copy(y.viewport),H.copy(y.scissor),z=y.scissorTest}else I.copy(ye).multiplyScalar(V).floor(),H.copy(Ue).multiplyScalar(V).floor(),z=Ze;if(B!==0&&(U=fc),xe.bindFramebuffer(R.FRAMEBUFFER,U)&&O&&xe.drawBuffers(y,U),xe.viewport(I),xe.scissor(H),xe.setScissorTest(z),Q){const me=ve.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,B)}else if(se){const me=ve.get(y.texture),Ae=D;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,B,Ae)}else if(y!==null&&B!==0){const me=ve.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(y,D,B,O,U,Q,se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){xe.bindFramebuffer(R.FRAMEBUFFER,de);try{const me=y.texture,Ae=me.format,Re=me.type;if(!Oe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&B>=0&&B<=y.height-U&&R.readPixels(D,B,O,U,Le.convert(Ae),Le.convert(Re),Q)}finally{const me=P!==null?ve.get(P).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,O,U,Q,se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){const me=y.texture,Ae=me.format,Re=me.type;if(!Oe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-O&&B>=0&&B<=y.height-U){xe.bindFramebuffer(R.FRAMEBUFFER,de);const be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),R.readPixels(D,B,O,U,Le.convert(Ae),Le.convert(Re),0);const qe=P!==null?ve.get(P).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,qe);const Xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ad(R,Xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(be),R.deleteSync(Xe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const O=Math.pow(2,-B),U=Math.floor(y.image.width*O),Q=Math.floor(y.image.height*O),se=D!==null?D.x:0,de=D!==null?D.y:0;T.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,se,de,U,Q),xe.unbindTexture()};const pc=R.createFramebuffer(),mc=R.createFramebuffer();this.copyTextureToTexture=function(y,D,B=null,O=null,U=0,Q=null){y.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],D=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(U!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let se,de,me,Ae,Re,be,qe,Xe,ct;const at=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(B!==null)se=B.max.x-B.min.x,de=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Re=B.min.y,be=B.isBox3?B.min.z:0;else{const zt=Math.pow(2,-U);se=Math.floor(at.width*zt),de=Math.floor(at.height*zt),y.isDataArrayTexture?me=at.depth:y.isData3DTexture?me=Math.floor(at.depth*zt):me=1,Ae=0,Re=0,be=0}O!==null?(qe=O.x,Xe=O.y,ct=O.z):(qe=0,Xe=0,ct=0);const We=Le.convert(D.format),Me=Le.convert(D.type);let _t;D.isData3DTexture?(T.setTexture3D(D,0),_t=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),_t=R.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),_t=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),Xt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ni=R.getParameter(R.UNPACK_SKIP_PIXELS),Pt=R.getParameter(R.UNPACK_SKIP_ROWS),zi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);const nt=y.isDataArrayTexture||y.isData3DTexture,Ot=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const zt=ve.get(y),St=ve.get(D),At=ve.get(zt.__renderTarget),aa=ve.get(St.__renderTarget);xe.bindFramebuffer(R.READ_FRAMEBUFFER,At.__webglFramebuffer),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let Bn=0;Bn<me;Bn++)nt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(y).__webglTexture,U,be+Bn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,Q,ct+Bn)),R.blitFramebuffer(Ae,Re,se,de,qe,Xe,se,de,R.DEPTH_BUFFER_BIT,R.NEAREST);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ve.has(y)){const zt=ve.get(y),St=ve.get(D);xe.bindFramebuffer(R.READ_FRAMEBUFFER,pc),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,mc);for(let At=0;At<me;At++)nt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,U,be+At):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,U),Ot?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.__webglTexture,Q,ct+At):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,St.__webglTexture,Q),U!==0?R.blitFramebuffer(Ae,Re,se,de,qe,Xe,se,de,R.COLOR_BUFFER_BIT,R.NEAREST):Ot?R.copyTexSubImage3D(_t,Q,qe,Xe,ct+At,Ae,Re,se,de):R.copyTexSubImage2D(_t,Q,qe,Xe,Ae,Re,se,de);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ot?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(_t,Q,qe,Xe,ct,se,de,me,We,Me,at.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(_t,Q,qe,Xe,ct,se,de,me,We,at.data):R.texSubImage3D(_t,Q,qe,Xe,ct,se,de,me,We,Me,at):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,qe,Xe,se,de,We,Me,at.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,qe,Xe,at.width,at.height,We,at.data):R.texSubImage2D(R.TEXTURE_2D,Q,qe,Xe,se,de,We,Me,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Xt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ni),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zi),Q===0&&D.generateMipmaps&&R.generateMipmap(_t),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,O=null,U=0){return y.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,O=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,O,U)},this.initRenderTarget=function(y){ve.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,xe.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Lm{constructor(e="game-canvas"){this.canvas=document.getElementById(e),this.renderer=new Pm({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(8900331),this.scene=new Id,this.scene.fog=new Wr(8900331,.003),this.camera=new Ht(50,1,.1,500),this.camera.position.set(0,20,30),this._setupLighting(),this._setupGround(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_setupLighting(){this.ambientLight=new qd(13163248,.8),this.scene.add(this.ambientLight),this.hemiLight=new zd(8900331,7049054,.6),this.scene.add(this.hemiLight),this.sunLight=new Hd(16775400,1.6),this.sunLight.position.set(20,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight)}_setupGround(){const e=new Mt(new Bi(200,200),new Cr({color:5938799}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e);const t=new Xd(40,40,8239250,6991232);t.position.y=.01,t.material.transparent=!0,t.material.opacity=.3,this.scene.add(t)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize)}}const Fe={dayDurationSeconds:90,startingDay:1,initialGold:250,dailyRent:25,rentIncreasePerRank:12,bankruptcyThreshold:0,shopMaxDisplaySlots:4,shopSellInterval:8,customerBonusMultiplier:1.5,initialInventoryCapacity:20,exploreDropCountMin:1,exploreDropCountMax:2,exploreQualityMin:10,exploreQualityMax:40,traitChance:.35,maxTraitSlots:3,customerSpawnInterval:12,maxCustomersPerDay:6,customerPatienceSeconds:20,goalShopRank:8,questRequiredRatio:.67,bossBattle:{atbFillRate:1,itemCooldownSeconds:5},ranks:[{rank:1,name:"駆け出しの店",requiredSales:0,newRecipes:[],newAreas:[]},{rank:2,name:"町の小さな店",requiredSales:500,requiredBossId:"boss_plains_slime",newRecipes:["fire_sword","ice_shield","antidote","silver_dagger","leather_armor","iron_spear","amber_ring","bone_charm","stamina_drink","iron_helm"],newAreas:["cave"]},{rank:3,name:"繁盛する道具屋",requiredSales:1500,requiredBossId:"boss_cave_golem",newRecipes:["mage_staff","chainmail","elixir","wind_bow","spirit_robe","strength_potion","spider_cloak","crystal_orb","dark_blade","fairy_necklace","poison_dagger","magic_ink"],newAreas:["forest"]},{rank:4,name:"名高き工房",requiredSales:3500,requiredBossId:"boss_forest_treant",newRecipes:["holy_sword","dragon_armor","phoenix_feather_acc","flame_lance","moonlight_staff","silver_mail","spirit_potion","thunder_hammer","cursed_ring","lava_shield","fire_cloak","enchant_scroll"],newAreas:["volcano"]},{rank:5,name:"王都の名店",requiredSales:7e3,requiredBossId:"boss_volcano_ifrit",newRecipes:["trident","coral_armor","pearl_tiara","tidal_bow","deep_elixir","mithril_sword","mithril_shield","void_amulet","frost_blade","elder_staff","sea_serpent_whip","lotus_perfume"],newAreas:["deep_sea"]},{rank:6,name:"大陸一の店",requiredSales:12e3,requiredBossId:"boss_sea_kraken",newRecipes:["dragon_slayer","storm_cloak","ancient_crown","sage_stone","mystic_amulet","dragon_bow","phoenix_robe","void_blade","dragon_potion","thunder_spear","cursed_crown","scale_shield"],newAreas:["dragon_nest"]},{rank:7,name:"王国御用達",requiredSales:2e4,requiredBossId:"boss_elder_dragon",newRecipes:["sky_sword","time_hourglass","star_shield","divine_armor","aether_staff","sky_bow","rainbow_robe","divine_elixir","chaos_ring","star_pendant","wind_lance","phoenix_bow"],newAreas:["sky_tower"]},{rank:8,name:"伝説のアイテム工房",requiredSales:35e3,requiredBossId:"boss_sky_titan",newRecipes:["legendary_blade","world_tree_staff","genesis_armor","time_blade","primordial_crown","eternity_ring","cosmos_bow","panacea","oblivion_shield","astral_robe"],newAreas:["time_corridor"]}],initialItems:[{blueprintId:"stone",quality:15,traits:[]},{blueprintId:"wood",quality:20,traits:[]},{blueprintId:"wood",quality:12,traits:[]},{blueprintId:"herb",quality:18,traits:[]},{blueprintId:"clay",quality:10,traits:[]},{blueprintId:"sand",quality:25,traits:[]}]},tt={wood:{id:"wood",name:"木材",type:"material",tier:1,baseValue:4,image:"/art/items/wood.png"},stone:{id:"stone",name:"石材",type:"material",tier:1,baseValue:4,image:"/art/items/stone.png"},herb:{id:"herb",name:"薬草",type:"material",tier:1,baseValue:6,image:"/art/items/herb.png"},slime_jelly:{id:"slime_jelly",name:"スライムゼリー",type:"material",tier:1,baseValue:8,image:"/art/items/slime_jelly.png"},clay:{id:"clay",name:"粘土",type:"material",tier:1,baseValue:3,image:"/art/items/clay.png"},flower_petal:{id:"flower_petal",name:"花びら",type:"material",tier:1,baseValue:5,image:"/art/items/flower_petal.png"},bug_shell:{id:"bug_shell",name:"虫の殻",type:"material",tier:1,baseValue:6,image:"/art/items/bug_shell.png"},feather_small:{id:"feather_small",name:"小さな羽根",type:"material",tier:1,baseValue:5,image:"/art/items/feather_small.png"},sand:{id:"sand",name:"砂",type:"material",tier:1,baseValue:3,image:"/art/items/sand.png"},mushroom:{id:"mushroom",name:"キノコ",type:"material",tier:1,baseValue:7,image:"/art/items/mushroom.png"},iron_ore:{id:"iron_ore",name:"鉄鉱石",type:"material",tier:2,baseValue:12,image:"/art/items/iron_ore.png"},cloth:{id:"cloth",name:"魔法の布",type:"material",tier:2,baseValue:10,image:"/art/items/cloth.png"},crystal:{id:"crystal",name:"水晶",type:"material",tier:2,baseValue:15,image:"/art/items/crystal.png"},poison_herb:{id:"poison_herb",name:"毒草",type:"material",tier:2,baseValue:14,image:"/art/items/poison_herb.png"},silver_ore:{id:"silver_ore",name:"銀鉱石",type:"material",tier:2,baseValue:16,image:"/art/items/silver_ore.png"},moss_stone:{id:"moss_stone",name:"苔石",type:"material",tier:2,baseValue:11,image:"/art/items/moss_stone.png"},spider_silk:{id:"spider_silk",name:"蜘蛛の糸",type:"material",tier:2,baseValue:13,image:"/art/items/spider_silk.png"},dark_stone:{id:"dark_stone",name:"暗黒石",type:"material",tier:2,baseValue:15,image:"/art/items/dark_stone.png"},bone:{id:"bone",name:"古びた骨",type:"material",tier:2,baseValue:10,image:"/art/items/bone.png"},amber:{id:"amber",name:"琥珀",type:"material",tier:2,baseValue:14,image:"/art/items/amber.png"},fire_stone:{id:"fire_stone",name:"火石",type:"material",tier:3,baseValue:25,image:"/art/items/fire_stone.png"},ice_shard:{id:"ice_shard",name:"氷片",type:"material",tier:3,baseValue:25,image:"/art/items/ice_shard.png"},feather:{id:"feather",name:"不死鳥の羽",type:"material",tier:3,baseValue:40,image:"/art/items/feather.png"},dragon_scale:{id:"dragon_scale",name:"竜の鱗",type:"material",tier:3,baseValue:50,image:"/art/items/dragon_scale.png"},fairy_dust:{id:"fairy_dust",name:"妖精の粉",type:"material",tier:3,baseValue:30,image:"/art/items/fairy_dust.png"},lava_core:{id:"lava_core",name:"溶岩核",type:"material",tier:3,baseValue:28,image:"/art/items/lava_core.png"},spirit_essence:{id:"spirit_essence",name:"精霊のエッセンス",type:"material",tier:3,baseValue:35,image:"/art/items/spirit_essence.png"},enchanted_wood:{id:"enchanted_wood",name:"霊樹の枝",type:"material",tier:3,baseValue:22,image:"/art/items/enchanted_wood.png"},thunder_stone:{id:"thunder_stone",name:"雷石",type:"material",tier:3,baseValue:30,image:"/art/items/thunder_stone.png"},cursed_gem:{id:"cursed_gem",name:"呪いの宝石",type:"material",tier:3,baseValue:32,image:"/art/items/cursed_gem.png"},deep_pearl:{id:"deep_pearl",name:"深海の真珠",type:"material",tier:4,baseValue:55,image:"/art/items/deep_pearl.png"},moonstone:{id:"moonstone",name:"月光石",type:"material",tier:4,baseValue:60,image:"/art/items/moonstone.png"},wind_crystal:{id:"wind_crystal",name:"風の結晶",type:"material",tier:4,baseValue:50,image:"/art/items/wind_crystal.png"},coral_fragment:{id:"coral_fragment",name:"古代珊瑚",type:"material",tier:4,baseValue:45,image:"/art/items/coral_fragment.png"},mithril_ore:{id:"mithril_ore",name:"ミスリル鉱",type:"material",tier:4,baseValue:65,image:"/art/items/mithril_ore.png"},void_shard:{id:"void_shard",name:"虚空の欠片",type:"material",tier:4,baseValue:55,image:"/art/items/void_shard.png"},elder_bark:{id:"elder_bark",name:"長老樹の樹皮",type:"material",tier:4,baseValue:48,image:"/art/items/elder_bark.png"},sea_serpent_fin:{id:"sea_serpent_fin",name:"海竜のヒレ",type:"material",tier:4,baseValue:58,image:"/art/items/sea_serpent_fin.png"},frozen_tear:{id:"frozen_tear",name:"凍れる涙",type:"material",tier:4,baseValue:52,image:"/art/items/frozen_tear.png"},black_lotus:{id:"black_lotus",name:"黒蓮華",type:"material",tier:4,baseValue:62,image:"/art/items/black_lotus.png"},sky_fragment:{id:"sky_fragment",name:"天空の欠片",type:"material",tier:5,baseValue:80,image:"/art/items/sky_fragment.png"},time_sand:{id:"time_sand",name:"時の砂",type:"material",tier:5,baseValue:90,image:"/art/items/time_sand.png"},rainbow_scale:{id:"rainbow_scale",name:"虹色の鱗",type:"material",tier:5,baseValue:85,image:"/art/items/rainbow_scale.png"},star_dust:{id:"star_dust",name:"星屑",type:"material",tier:5,baseValue:75,image:"/art/items/star_dust.png"},world_tree_sap:{id:"world_tree_sap",name:"世界樹の樹液",type:"material",tier:5,baseValue:100,image:"/art/items/world_tree_sap.png"},divine_ore:{id:"divine_ore",name:"神鉄鉱",type:"material",tier:5,baseValue:95,image:"/art/items/divine_ore.png"},chaos_crystal:{id:"chaos_crystal",name:"混沌の結晶",type:"material",tier:5,baseValue:88,image:"/art/items/chaos_crystal.png"},phoenix_ash:{id:"phoenix_ash",name:"不死鳥の灰",type:"material",tier:5,baseValue:92,image:"/art/items/phoenix_ash.png"},aether_essence:{id:"aether_essence",name:"エーテルの精",type:"material",tier:5,baseValue:110,image:"/art/items/aether_essence.png"},primordial_gem:{id:"primordial_gem",name:"始原の宝玉",type:"material",tier:5,baseValue:120,image:"/art/items/primordial_gem.png"},sword:{id:"sword",name:"鉄の剣",type:"equipment",baseValue:35,image:"/art/items/sword.png"},shield:{id:"shield",name:"木の盾",type:"equipment",baseValue:25,image:"/art/items/shield.png"},potion:{id:"potion",name:"回復薬",type:"consumable",baseValue:18,image:"/art/items/potion.png",battleEffect:{type:"heal",target:"ally",value:40}},wooden_bow:{id:"wooden_bow",name:"木の弓",type:"equipment",baseValue:30,image:"/art/items/wooden_bow.png"},herb_tea:{id:"herb_tea",name:"ハーブティー",type:"consumable",baseValue:12,image:"/art/items/herb_tea.png",battleEffect:{type:"heal",target:"ally",value:20}},stone_axe:{id:"stone_axe",name:"石斧",type:"equipment",baseValue:28,image:"/art/items/stone_axe.png"},clay_pot:{id:"clay_pot",name:"粘土の壺",type:"accessory",baseValue:15,image:"/art/items/clay_pot.png"},antidote_basic:{id:"antidote_basic",name:"毒消し薬",type:"consumable",baseValue:20,image:"/art/items/antidote.png",battleEffect:{type:"buff",target:"ally",stat:"def",amount:5,duration:15}},mud_ball:{id:"mud_ball",name:"泥団子",type:"consumable",baseValue:8,battleEffect:{type:"debuff",target:"enemy",stat:"spd",amount:-10,duration:10}},fire_sword:{id:"fire_sword",name:"炎の剣",type:"equipment",baseValue:80,image:"/art/items/fire_sword.png"},ice_shield:{id:"ice_shield",name:"氷の盾",type:"equipment",baseValue:65,image:"/art/items/ice_shield.png"},antidote:{id:"antidote",name:"解毒薬",type:"consumable",baseValue:30,image:"/art/items/antidote.png",battleEffect:{type:"buff",target:"ally",stat:"def",amount:10,duration:20}},silver_dagger:{id:"silver_dagger",name:"銀の短剣",type:"equipment",baseValue:55,image:"/art/items/silver_dagger.png"},leather_armor:{id:"leather_armor",name:"革鎧",type:"equipment",baseValue:60,image:"/art/items/leather_armor.png"},iron_spear:{id:"iron_spear",name:"鉄の槍",type:"equipment",baseValue:50,image:"/art/items/iron_spear.png"},amber_ring:{id:"amber_ring",name:"琥珀の指輪",type:"accessory",baseValue:45,image:"/art/items/amber_ring.png"},bone_charm:{id:"bone_charm",name:"骨のお守り",type:"accessory",baseValue:35,image:"/art/items/bone_charm.png"},stamina_drink:{id:"stamina_drink",name:"スタミナドリンク",type:"consumable",baseValue:25,image:"/art/items/stamina_drink.png",battleEffect:{type:"buff",target:"ally",stat:"spd",amount:30,duration:15}},iron_helm:{id:"iron_helm",name:"鉄兜",type:"equipment",baseValue:48,image:"/art/items/iron_helm.png"},iron_spike:{id:"iron_spike",name:"鉄の棘",type:"consumable",baseValue:22,battleEffect:{type:"damage",target:"enemy",value:35}},mage_staff:{id:"mage_staff",name:"魔法の杖",type:"equipment",baseValue:120,image:"/art/items/mage_staff.png"},chainmail:{id:"chainmail",name:"鎖帷子",type:"equipment",baseValue:100,image:"/art/items/chainmail.png"},elixir:{id:"elixir",name:"万能薬",type:"consumable",baseValue:75,image:"/art/items/elixir.png",battleEffect:{type:"heal",target:"ally",value:90}},wind_bow:{id:"wind_bow",name:"風の弓",type:"equipment",baseValue:95,image:"/art/items/wind_bow.png"},spirit_robe:{id:"spirit_robe",name:"精霊のローブ",type:"equipment",baseValue:110,image:"/art/items/spirit_robe.png"},strength_potion:{id:"strength_potion",name:"力の薬",type:"consumable",baseValue:55,image:"/art/items/strength_potion.png",battleEffect:{type:"buff",target:"ally",stat:"atk",amount:20,duration:20}},spider_cloak:{id:"spider_cloak",name:"蜘蛛糸のマント",type:"equipment",baseValue:85,image:"/art/items/spider_cloak.png"},crystal_orb:{id:"crystal_orb",name:"水晶の宝珠",type:"accessory",baseValue:90,image:"/art/items/crystal_orb.png"},dark_blade:{id:"dark_blade",name:"暗黒の刃",type:"equipment",baseValue:105,image:"/art/items/dark_blade.png"},fairy_necklace:{id:"fairy_necklace",name:"妖精のネックレス",type:"accessory",baseValue:70,image:"/art/items/fairy_necklace.png"},poison_dagger:{id:"poison_dagger",name:"毒塗りの短剣",type:"equipment",baseValue:88,image:"/art/items/poison_dagger.png"},magic_ink:{id:"magic_ink",name:"魔法のインク",type:"consumable",baseValue:40,image:"/art/items/magic_ink.png",battleEffect:{type:"debuff",target:"enemy",stat:"spd",amount:-15,duration:15}},weakness_draught:{id:"weakness_draught",name:"弱体化の薬",type:"consumable",baseValue:60,battleEffect:{type:"debuff",target:"enemy",stat:"atk",amount:-20,duration:20}},holy_sword:{id:"holy_sword",name:"聖剣",type:"equipment",baseValue:250,image:"/art/items/holy_sword.png"},dragon_armor:{id:"dragon_armor",name:"竜鱗の鎧",type:"equipment",baseValue:220,image:"/art/items/dragon_armor.png"},phoenix_feather_acc:{id:"phoenix_feather_acc",name:"不死鳥のお守り",type:"accessory",baseValue:180,image:"/art/items/phoenix_feather_acc.png"},flame_lance:{id:"flame_lance",name:"炎の槍",type:"equipment",baseValue:200,image:"/art/items/flame_lance.png"},moonlight_staff:{id:"moonlight_staff",name:"月光の杖",type:"equipment",baseValue:190,image:"/art/items/moonlight_staff.png"},silver_mail:{id:"silver_mail",name:"銀糸の鎧",type:"equipment",baseValue:210,image:"/art/items/silver_mail.png"},spirit_potion:{id:"spirit_potion",name:"霊薬",type:"consumable",baseValue:120,image:"/art/items/spirit_potion.png",battleEffect:{type:"buff",target:"ally",stat:"def",amount:15,duration:20}},thunder_hammer:{id:"thunder_hammer",name:"雷鳴のハンマー",type:"equipment",baseValue:230,image:"/art/items/thunder_hammer.png"},cursed_ring:{id:"cursed_ring",name:"呪いの指輪",type:"accessory",baseValue:160,image:"/art/items/cursed_ring.png"},lava_shield:{id:"lava_shield",name:"溶岩の盾",type:"equipment",baseValue:195,image:"/art/items/lava_shield.png"},fire_cloak:{id:"fire_cloak",name:"焔纏いのマント",type:"equipment",baseValue:175,image:"/art/items/fire_cloak.png"},enchant_scroll:{id:"enchant_scroll",name:"付呪の巻物",type:"consumable",baseValue:140,image:"/art/items/enchant_scroll.png",battleEffect:{type:"debuff",target:"enemy",stat:"def",amount:-15,duration:20}},thunder_bomb:{id:"thunder_bomb",name:"雷鳴の爆弾",type:"consumable",baseValue:100,battleEffect:{type:"stun",target:"enemy",duration:8}},trident:{id:"trident",name:"海神の三叉槍",type:"equipment",baseValue:320,image:"/art/items/trident.png"},coral_armor:{id:"coral_armor",name:"珊瑚の鎧",type:"equipment",baseValue:280,image:"/art/items/coral_armor.png"},pearl_tiara:{id:"pearl_tiara",name:"真珠のティアラ",type:"accessory",baseValue:250,image:"/art/items/pearl_tiara.png"},tidal_bow:{id:"tidal_bow",name:"潮流の弓",type:"equipment",baseValue:300,image:"/art/items/tidal_bow.png"},deep_elixir:{id:"deep_elixir",name:"深海の霊薬",type:"consumable",baseValue:200,image:"/art/items/deep_elixir.png",battleEffect:{type:"heal",target:"all",value:60}},mithril_sword:{id:"mithril_sword",name:"ミスリルの剣",type:"equipment",baseValue:350,image:"/art/items/mithril_sword.png"},mithril_shield:{id:"mithril_shield",name:"ミスリルの盾",type:"equipment",baseValue:310,image:"/art/items/mithril_shield.png"},void_amulet:{id:"void_amulet",name:"虚空のアミュレット",type:"accessory",baseValue:270,image:"/art/items/void_amulet.png"},frost_blade:{id:"frost_blade",name:"凍てつく刃",type:"equipment",baseValue:290,image:"/art/items/frost_blade.png"},elder_staff:{id:"elder_staff",name:"長老樹の杖",type:"equipment",baseValue:260,image:"/art/items/elder_staff.png"},sea_serpent_whip:{id:"sea_serpent_whip",name:"海竜の鞭",type:"equipment",baseValue:330,image:"/art/items/sea_serpent_whip.png"},lotus_perfume:{id:"lotus_perfume",name:"黒蓮の香水",type:"consumable",baseValue:180,image:"/art/items/lotus_perfume.png",battleEffect:{type:"buff",target:"all",stat:"spd",amount:25,duration:20}},revival_herb:{id:"revival_herb",name:"蘇生草",type:"consumable",baseValue:250,battleEffect:{type:"revive",target:"ally",value:60}},dragon_slayer:{id:"dragon_slayer",name:"竜殺しの大剣",type:"equipment",baseValue:450,image:"/art/items/dragon_slayer.png"},storm_cloak:{id:"storm_cloak",name:"嵐のマント",type:"equipment",baseValue:380,image:"/art/items/storm_cloak.png"},ancient_crown:{id:"ancient_crown",name:"古代王の冠",type:"accessory",baseValue:420,image:"/art/items/ancient_crown.png"},sage_stone:{id:"sage_stone",name:"賢者の石",type:"consumable",baseValue:350,image:"/art/items/sage_stone.png",battleEffect:{type:"heal",target:"all",value:100}},mystic_amulet:{id:"mystic_amulet",name:"神秘のアミュレット",type:"accessory",baseValue:400,image:"/art/items/mystic_amulet.png"},dragon_bow:{id:"dragon_bow",name:"竜骨の弓",type:"equipment",baseValue:430,image:"/art/items/dragon_bow.png"},phoenix_robe:{id:"phoenix_robe",name:"不死鳥のローブ",type:"equipment",baseValue:410,image:"/art/items/phoenix_robe.png"},void_blade:{id:"void_blade",name:"虚無の剣",type:"equipment",baseValue:460,image:"/art/items/void_blade.png"},dragon_potion:{id:"dragon_potion",name:"竜の血薬",type:"consumable",baseValue:300,image:"/art/items/dragon_potion.png",battleEffect:{type:"buff",target:"all",stat:"atk",amount:30,duration:20}},thunder_spear:{id:"thunder_spear",name:"雷光の槍",type:"equipment",baseValue:440,image:"/art/items/thunder_spear.png"},cursed_crown:{id:"cursed_crown",name:"呪王の冠",type:"accessory",baseValue:360,image:"/art/items/cursed_crown.png"},scale_shield:{id:"scale_shield",name:"竜鱗の大盾",type:"equipment",baseValue:390,image:"/art/items/scale_shield.png"},sky_sword:{id:"sky_sword",name:"天空の剣",type:"equipment",baseValue:600,image:"/art/items/sky_sword.png"},time_hourglass:{id:"time_hourglass",name:"時の砂時計",type:"accessory",baseValue:550,image:"/art/items/time_hourglass.png"},star_shield:{id:"star_shield",name:"星盾",type:"equipment",baseValue:520,image:"/art/items/star_shield.png"},divine_armor:{id:"divine_armor",name:"神鉄の鎧",type:"equipment",baseValue:580,image:"/art/items/divine_armor.png"},aether_staff:{id:"aether_staff",name:"エーテルの杖",type:"equipment",baseValue:560,image:"/art/items/aether_staff.png"},sky_bow:{id:"sky_bow",name:"天翔ける弓",type:"equipment",baseValue:540,image:"/art/items/sky_bow.png"},rainbow_robe:{id:"rainbow_robe",name:"虹のローブ",type:"equipment",baseValue:530,image:"/art/items/rainbow_robe.png"},divine_elixir:{id:"divine_elixir",name:"神酒",type:"consumable",baseValue:400,image:"/art/items/divine_elixir.png",battleEffect:{type:"revive",target:"ally",value:50}},chaos_ring:{id:"chaos_ring",name:"混沌の指輪",type:"accessory",baseValue:480,image:"/art/items/chaos_ring.png"},star_pendant:{id:"star_pendant",name:"星のペンダント",type:"accessory",baseValue:500,image:"/art/items/star_pendant.png"},wind_lance:{id:"wind_lance",name:"疾風の槍",type:"equipment",baseValue:570,image:"/art/items/wind_lance.png"},phoenix_bow:{id:"phoenix_bow",name:"不死鳥の弓",type:"equipment",baseValue:590,image:"/art/items/phoenix_bow.png"},legendary_blade:{id:"legendary_blade",name:"伝説の刃",type:"equipment",baseValue:800,image:"/art/items/legendary_blade.png"},world_tree_staff:{id:"world_tree_staff",name:"世界樹の杖",type:"equipment",baseValue:850,image:"/art/items/world_tree_staff.png"},genesis_armor:{id:"genesis_armor",name:"始原の鎧",type:"equipment",baseValue:900,image:"/art/items/genesis_armor.png"},time_blade:{id:"time_blade",name:"時渡りの剣",type:"equipment",baseValue:820,image:"/art/items/time_blade.png"},primordial_crown:{id:"primordial_crown",name:"始原の冠",type:"accessory",baseValue:780,image:"/art/items/primordial_crown.png"},eternity_ring:{id:"eternity_ring",name:"永遠の指輪",type:"accessory",baseValue:750,image:"/art/items/eternity_ring.png"},cosmos_bow:{id:"cosmos_bow",name:"星界弓コスモス",type:"equipment",baseValue:830,image:"/art/items/cosmos_bow.png"},panacea:{id:"panacea",name:"万象の霊薬",type:"consumable",baseValue:600,image:"/art/items/panacea.png",battleEffect:{type:"healfull",target:"all"}},oblivion_shield:{id:"oblivion_shield",name:"忘却の盾",type:"equipment",baseValue:770,image:"/art/items/oblivion_shield.png"},astral_robe:{id:"astral_robe",name:"星衣アストラル",type:"equipment",baseValue:860,image:"/art/items/astral_robe.png"}},en={sword:{id:"r_sword",targetId:"sword",materials:["stone","wood"],unlocked:!0,apCost:1},shield:{id:"r_shield",targetId:"shield",materials:["wood","wood"],unlocked:!0,apCost:1},potion:{id:"r_potion",targetId:"potion",materials:["herb","slime_jelly"],unlocked:!0,apCost:1},wooden_bow:{id:"r_wooden_bow",targetId:"wooden_bow",materials:["wood","feather_small"],unlocked:!0,apCost:1},herb_tea:{id:"r_herb_tea",targetId:"herb_tea",materials:["herb","flower_petal"],unlocked:!0,apCost:1},stone_axe:{id:"r_stone_axe",targetId:"stone_axe",materials:["stone","wood"],unlocked:!0,apCost:1},clay_pot:{id:"r_clay_pot",targetId:"clay_pot",materials:["clay","sand"],unlocked:!0,apCost:1},antidote_basic:{id:"r_antidote_basic",targetId:"antidote_basic",materials:["bug_shell","slime_jelly"],unlocked:!0,apCost:1},mud_ball:{id:"r_mud_ball",targetId:"mud_ball",materials:["clay","slime_jelly"],unlocked:!0,apCost:1},fire_sword:{id:"r_fire_sword",targetId:"fire_sword",materials:["iron_ore","fire_stone"],unlocked:!1,apCost:2},ice_shield:{id:"r_ice_shield",targetId:"ice_shield",materials:["wood","ice_shard"],unlocked:!1,apCost:2},antidote:{id:"r_antidote",targetId:"antidote",materials:["herb","poison_herb"],unlocked:!1,apCost:1},silver_dagger:{id:"r_silver_dagger",targetId:"silver_dagger",materials:["silver_ore","bone"],unlocked:!1,apCost:2},leather_armor:{id:"r_leather_armor",targetId:"leather_armor",materials:["cloth","iron_ore"],unlocked:!1,apCost:2},iron_spear:{id:"r_iron_spear",targetId:"iron_spear",materials:["iron_ore","wood"],unlocked:!1,apCost:2},amber_ring:{id:"r_amber_ring",targetId:"amber_ring",materials:["amber","silver_ore"],unlocked:!1,apCost:2},bone_charm:{id:"r_bone_charm",targetId:"bone_charm",materials:["bone","herb"],unlocked:!1,apCost:1},stamina_drink:{id:"r_stamina_drink",targetId:"stamina_drink",materials:["mushroom","slime_jelly"],unlocked:!1,apCost:1},iron_helm:{id:"r_iron_helm",targetId:"iron_helm",materials:["iron_ore","cloth"],unlocked:!1,apCost:2},iron_spike:{id:"r_iron_spike",targetId:"iron_spike",materials:["iron_ore","bone"],unlocked:!1,apCost:1},mage_staff:{id:"r_mage_staff",targetId:"mage_staff",materials:["crystal","enchanted_wood"],unlocked:!1,apCost:2},chainmail:{id:"r_chainmail",targetId:"chainmail",materials:["iron_ore","iron_ore","cloth"],unlocked:!1,apCost:2},elixir:{id:"r_elixir",targetId:"elixir",materials:["herb","crystal","slime_jelly"],unlocked:!1,apCost:2},wind_bow:{id:"r_wind_bow",targetId:"wind_bow",materials:["enchanted_wood","spider_silk"],unlocked:!1,apCost:2},spirit_robe:{id:"r_spirit_robe",targetId:"spirit_robe",materials:["cloth","spirit_essence"],unlocked:!1,apCost:2},strength_potion:{id:"r_strength_potion",targetId:"strength_potion",materials:["mushroom","fairy_dust"],unlocked:!1,apCost:2},spider_cloak:{id:"r_spider_cloak",targetId:"spider_cloak",materials:["spider_silk","cloth"],unlocked:!1,apCost:2},crystal_orb:{id:"r_crystal_orb",targetId:"crystal_orb",materials:["crystal","fairy_dust"],unlocked:!1,apCost:2},dark_blade:{id:"r_dark_blade",targetId:"dark_blade",materials:["dark_stone","iron_ore"],unlocked:!1,apCost:2},fairy_necklace:{id:"r_fairy_necklace",targetId:"fairy_necklace",materials:["fairy_dust","silver_ore"],unlocked:!1,apCost:2},poison_dagger:{id:"r_poison_dagger",targetId:"poison_dagger",materials:["silver_ore","poison_herb"],unlocked:!1,apCost:2},magic_ink:{id:"r_magic_ink",targetId:"magic_ink",materials:["crystal","flower_petal"],unlocked:!1,apCost:1},weakness_draught:{id:"r_weakness_draught",targetId:"weakness_draught",materials:["poison_herb","mushroom","slime_jelly"],unlocked:!1,apCost:2},holy_sword:{id:"r_holy_sword",targetId:"holy_sword",materials:["iron_ore","crystal","feather"],unlocked:!1,apCost:3},dragon_armor:{id:"r_dragon_armor",targetId:"dragon_armor",materials:["dragon_scale","iron_ore","cloth"],unlocked:!1,apCost:3},phoenix_feather_acc:{id:"r_phoenix_feather_acc",targetId:"phoenix_feather_acc",materials:["feather","crystal"],unlocked:!1,apCost:2},flame_lance:{id:"r_flame_lance",targetId:"flame_lance",materials:["fire_stone","iron_ore","enchanted_wood"],unlocked:!1,apCost:3},moonlight_staff:{id:"r_moonlight_staff",targetId:"moonlight_staff",materials:["enchanted_wood","crystal","fairy_dust"],unlocked:!1,apCost:3},silver_mail:{id:"r_silver_mail",targetId:"silver_mail",materials:["silver_ore","silver_ore","spider_silk"],unlocked:!1,apCost:2},spirit_potion:{id:"r_spirit_potion",targetId:"spirit_potion",materials:["spirit_essence","herb","fairy_dust"],unlocked:!1,apCost:2},thunder_hammer:{id:"r_thunder_hammer",targetId:"thunder_hammer",materials:["thunder_stone","iron_ore","lava_core"],unlocked:!1,apCost:3},cursed_ring:{id:"r_cursed_ring",targetId:"cursed_ring",materials:["cursed_gem","silver_ore"],unlocked:!1,apCost:2},lava_shield:{id:"r_lava_shield",targetId:"lava_shield",materials:["lava_core","iron_ore","stone"],unlocked:!1,apCost:3},fire_cloak:{id:"r_fire_cloak",targetId:"fire_cloak",materials:["fire_stone","cloth","spider_silk"],unlocked:!1,apCost:2},enchant_scroll:{id:"r_enchant_scroll",targetId:"enchant_scroll",materials:["crystal","fairy_dust","spirit_essence"],unlocked:!1,apCost:2},thunder_bomb:{id:"r_thunder_bomb",targetId:"thunder_bomb",materials:["thunder_stone","lava_core"],unlocked:!1,apCost:2},trident:{id:"r_trident",targetId:"trident",materials:["mithril_ore","deep_pearl","coral_fragment"],unlocked:!1,apCost:3},coral_armor:{id:"r_coral_armor",targetId:"coral_armor",materials:["coral_fragment","mithril_ore","cloth"],unlocked:!1,apCost:3},pearl_tiara:{id:"r_pearl_tiara",targetId:"pearl_tiara",materials:["deep_pearl","moonstone"],unlocked:!1,apCost:2},tidal_bow:{id:"r_tidal_bow",targetId:"tidal_bow",materials:["elder_bark","sea_serpent_fin"],unlocked:!1,apCost:3},deep_elixir:{id:"r_deep_elixir",targetId:"deep_elixir",materials:["deep_pearl","black_lotus","herb"],unlocked:!1,apCost:3},mithril_sword:{id:"r_mithril_sword",targetId:"mithril_sword",materials:["mithril_ore","mithril_ore","moonstone"],unlocked:!1,apCost:3},mithril_shield:{id:"r_mithril_shield",targetId:"mithril_shield",materials:["mithril_ore","coral_fragment"],unlocked:!1,apCost:3},void_amulet:{id:"r_void_amulet",targetId:"void_amulet",materials:["void_shard","moonstone"],unlocked:!1,apCost:3},frost_blade:{id:"r_frost_blade",targetId:"frost_blade",materials:["frozen_tear","mithril_ore"],unlocked:!1,apCost:3},elder_staff:{id:"r_elder_staff",targetId:"elder_staff",materials:["elder_bark","crystal","fairy_dust"],unlocked:!1,apCost:3},sea_serpent_whip:{id:"r_sea_serpent_whip",targetId:"sea_serpent_whip",materials:["sea_serpent_fin","spider_silk"],unlocked:!1,apCost:3},lotus_perfume:{id:"r_lotus_perfume",targetId:"lotus_perfume",materials:["black_lotus","flower_petal","fairy_dust"],unlocked:!1,apCost:2},revival_herb:{id:"r_revival_herb",targetId:"revival_herb",materials:["black_lotus","spirit_essence","herb"],unlocked:!1,apCost:3},dragon_slayer:{id:"r_dragon_slayer",targetId:"dragon_slayer",materials:["dragon_scale","mithril_ore","fire_stone"],unlocked:!1,apCost:3},storm_cloak:{id:"r_storm_cloak",targetId:"storm_cloak",materials:["wind_crystal","spider_silk","thunder_stone"],unlocked:!1,apCost:3},ancient_crown:{id:"r_ancient_crown",targetId:"ancient_crown",materials:["moonstone","deep_pearl","dragon_scale"],unlocked:!1,apCost:3},sage_stone:{id:"r_sage_stone",targetId:"sage_stone",materials:["crystal","moonstone","spirit_essence"],unlocked:!1,apCost:3},mystic_amulet:{id:"r_mystic_amulet",targetId:"mystic_amulet",materials:["void_shard","deep_pearl","fairy_dust"],unlocked:!1,apCost:3},dragon_bow:{id:"r_dragon_bow",targetId:"dragon_bow",materials:["dragon_scale","elder_bark","spider_silk"],unlocked:!1,apCost:3},phoenix_robe:{id:"r_phoenix_robe",targetId:"phoenix_robe",materials:["feather","cloth","spirit_essence"],unlocked:!1,apCost:3},void_blade:{id:"r_void_blade",targetId:"void_blade",materials:["void_shard","mithril_ore","dark_stone"],unlocked:!1,apCost:3},dragon_potion:{id:"r_dragon_potion",targetId:"dragon_potion",materials:["dragon_scale","black_lotus","fire_stone"],unlocked:!1,apCost:3},thunder_spear:{id:"r_thunder_spear",targetId:"thunder_spear",materials:["thunder_stone","mithril_ore","wind_crystal"],unlocked:!1,apCost:3},cursed_crown:{id:"r_cursed_crown",targetId:"cursed_crown",materials:["cursed_gem","moonstone","dark_stone"],unlocked:!1,apCost:3},scale_shield:{id:"r_scale_shield",targetId:"scale_shield",materials:["dragon_scale","dragon_scale","iron_ore"],unlocked:!1,apCost:3},sky_sword:{id:"r_sky_sword",targetId:"sky_sword",materials:["sky_fragment","divine_ore","star_dust"],unlocked:!1,apCost:4},time_hourglass:{id:"r_time_hourglass",targetId:"time_hourglass",materials:["time_sand","crystal","moonstone"],unlocked:!1,apCost:3},star_shield:{id:"r_star_shield",targetId:"star_shield",materials:["star_dust","mithril_ore","divine_ore"],unlocked:!1,apCost:4},divine_armor:{id:"r_divine_armor",targetId:"divine_armor",materials:["divine_ore","divine_ore","dragon_scale"],unlocked:!1,apCost:4},aether_staff:{id:"r_aether_staff",targetId:"aether_staff",materials:["aether_essence","elder_bark","sky_fragment"],unlocked:!1,apCost:4},sky_bow:{id:"r_sky_bow",targetId:"sky_bow",materials:["sky_fragment","wind_crystal","feather"],unlocked:!1,apCost:3},rainbow_robe:{id:"r_rainbow_robe",targetId:"rainbow_robe",materials:["rainbow_scale","cloth","fairy_dust"],unlocked:!1,apCost:3},divine_elixir:{id:"r_divine_elixir",targetId:"divine_elixir",materials:["aether_essence","world_tree_sap","deep_pearl"],unlocked:!1,apCost:3},chaos_ring:{id:"r_chaos_ring",targetId:"chaos_ring",materials:["chaos_crystal","cursed_gem","moonstone"],unlocked:!1,apCost:3},star_pendant:{id:"r_star_pendant",targetId:"star_pendant",materials:["star_dust","deep_pearl","sky_fragment"],unlocked:!1,apCost:3},wind_lance:{id:"r_wind_lance",targetId:"wind_lance",materials:["wind_crystal","divine_ore","sky_fragment"],unlocked:!1,apCost:4},phoenix_bow:{id:"r_phoenix_bow",targetId:"phoenix_bow",materials:["phoenix_ash","elder_bark","feather"],unlocked:!1,apCost:3},legendary_blade:{id:"r_legendary_blade",targetId:"legendary_blade",materials:["divine_ore","dragon_scale","sky_fragment","primordial_gem"],unlocked:!1,apCost:5},world_tree_staff:{id:"r_world_tree_staff",targetId:"world_tree_staff",materials:["world_tree_sap","aether_essence","star_dust"],unlocked:!1,apCost:4},genesis_armor:{id:"r_genesis_armor",targetId:"genesis_armor",materials:["primordial_gem","divine_ore","dragon_scale","mithril_ore"],unlocked:!1,apCost:5},time_blade:{id:"r_time_blade",targetId:"time_blade",materials:["time_sand","divine_ore","chaos_crystal"],unlocked:!1,apCost:4},primordial_crown:{id:"r_primordial_crown",targetId:"primordial_crown",materials:["primordial_gem","moonstone","star_dust"],unlocked:!1,apCost:4},eternity_ring:{id:"r_eternity_ring",targetId:"eternity_ring",materials:["time_sand","primordial_gem","aether_essence"],unlocked:!1,apCost:4},cosmos_bow:{id:"r_cosmos_bow",targetId:"cosmos_bow",materials:["rainbow_scale","sky_fragment","phoenix_ash"],unlocked:!1,apCost:4},panacea:{id:"r_panacea",targetId:"panacea",materials:["world_tree_sap","phoenix_ash","primordial_gem"],unlocked:!1,apCost:4},oblivion_shield:{id:"r_oblivion_shield",targetId:"oblivion_shield",materials:["chaos_crystal","divine_ore","void_shard"],unlocked:!1,apCost:4},astral_robe:{id:"r_astral_robe",targetId:"astral_robe",materials:["aether_essence","rainbow_scale","star_dust"],unlocked:!1,apCost:4}},Fn={丈夫:{name:"丈夫",rarity:"common",color:"gray",description:"探索成功率+3%",effects:{exploreSuccess:3}},軽い:{name:"軽い",rarity:"common",color:"gray",description:"探索速度+8%",effects:{speedBonus:8}},硬い:{name:"硬い",rarity:"common",color:"gray",description:"成功率+2%, 調合+1",effects:{exploreSuccess:2,craftQualityBonus:1}},光る:{name:"光る",rarity:"common",color:"gray",description:"売値+10%",effects:{sellBonus:10}},水溶性:{name:"水溶性",rarity:"common",color:"gray",description:"調合品質+2",effects:{craftQualityBonus:2}},"攻撃力+1":{name:"攻撃力+1",rarity:"uncommon",color:"green",description:"バトル攻撃力+8",effects:{battleAtk:8}},"防御力+1":{name:"防御力+1",rarity:"uncommon",color:"green",description:"バトル防御力+5",effects:{battleDef:5}},"HP回復+":{name:"HP回復+",rarity:"uncommon",color:"green",description:"バトル最大HP+20",effects:{battleHp:20}},売値UP:{name:"売値UP",rarity:"uncommon",color:"green",description:"売値+20%",effects:{sellBonus:20}},採取量UP:{name:"採取量UP",rarity:"uncommon",color:"green",description:"ドロップ+1",effects:{dropBonus:1}},燃えやすい:{name:"燃えやすい",rarity:"uncommon",color:"green",description:"速度+12%, 成功率-3%",effects:{speedBonus:12,exploreSuccess:-3}},猛毒:{name:"猛毒",rarity:"uncommon",color:"green",description:"探索成功率+6%",effects:{exploreSuccess:6}},練磨:{name:"練磨",rarity:"uncommon",color:"green",description:"調合品質+3",effects:{craftQualityBonus:3}},先制:{name:"先制",rarity:"uncommon",color:"green",description:"バトル開始時ATB+25",effects:{startAtb:25}},体力強化:{name:"体力強化",rarity:"uncommon",color:"green",description:"バトル最大HP+30, 防御力+3",effects:{battleHp:30,battleDef:3}},"攻撃力+2":{name:"攻撃力+2",rarity:"rare",color:"blue",description:"バトル攻撃力+16",effects:{battleAtk:16}},"防御力+2":{name:"防御力+2",rarity:"rare",color:"blue",description:"バトル防御力+10",effects:{battleDef:10}},"HP回復++":{name:"HP回復++",rarity:"rare",color:"blue",description:"バトル最大HP+40",effects:{battleHp:40}},"売値UP+":{name:"売値UP+",rarity:"rare",color:"blue",description:"売値+40%",effects:{sellBonus:40}},風の加護:{name:"風の加護",rarity:"rare",color:"blue",description:"速度+12%, 成功率+5%",effects:{speedBonus:12,exploreSuccess:5}},雷撃:{name:"雷撃",rarity:"rare",color:"blue",description:"バトル素早さ+20",effects:{battleSpd:20}},吸血:{name:"吸血",rarity:"rare",color:"blue",description:"成功率+5%, 売値+15%",effects:{exploreSuccess:5,sellBonus:15}},聖なる力:{name:"聖なる力",rarity:"rare",color:"blue",description:"成功率+8%, 調合+3",effects:{exploreSuccess:8,craftQualityBonus:3}},鉄壁:{name:"鉄壁",rarity:"rare",color:"blue",description:"バトルダメージ軽減+4",effects:{battleDmgReduction:4}},疾走:{name:"疾走",rarity:"rare",color:"blue",description:"バトル素早さ+18, ATB+15",effects:{battleSpd:18,startAtb:15}},"攻撃力+3":{name:"攻撃力+3",rarity:"epic",color:"purple",description:"バトル攻撃力+28",effects:{battleAtk:28}},"防御力+3":{name:"防御力+3",rarity:"epic",color:"purple",description:"バトル防御力+18",effects:{battleDef:18}},混沌:{name:"混沌",rarity:"epic",color:"purple",description:"成功率+15%, 売値-10%",effects:{exploreSuccess:15,sellBonus:-10}},名匠の技:{name:"名匠の技",rarity:"epic",color:"purple",description:"調合品質+8",effects:{craftQualityBonus:8}},再生:{name:"再生",rarity:"epic",color:"purple",description:"バトル中HP2/秒回復",effects:{battleRegen:2}},時の祝福:{name:"時の祝福",rarity:"legendary",color:"gold",description:"速度+15%, 調合+5",effects:{speedBonus:15,craftQualityBonus:5}},星の輝き:{name:"星の輝き",rarity:"legendary",color:"gold",description:"売値+25%, 調合+3",effects:{sellBonus:25,craftQualityBonus:3}},武神:{name:"武神",rarity:"legendary",color:"gold",description:"バトル攻撃力+15, 素早さ+15, ATB+20",effects:{battleAtk:15,battleSpd:15,startAtb:20}},不死鳥:{name:"不死鳥",rarity:"legendary",color:"gold",description:"HP4/秒回復, 防御力+12, HP+30",effects:{battleRegen:4,battleDef:12,battleHp:30}}},gt={plains:{id:"plains",name:"草原",description:"のどかな草原。基本的な素材が手に入る。",icon:"🌿",unlocked:!0,difficulty:0,baseTime:25,dropTable:[{blueprintId:"wood",weight:20},{blueprintId:"stone",weight:18},{blueprintId:"herb",weight:15},{blueprintId:"slime_jelly",weight:10},{blueprintId:"clay",weight:10},{blueprintId:"flower_petal",weight:8},{blueprintId:"bug_shell",weight:7},{blueprintId:"feather_small",weight:5},{blueprintId:"sand",weight:4},{blueprintId:"mushroom",weight:3}],traitPool:["丈夫","軽い","硬い"],dropCountMin:1,dropCountMax:2,qualityMin:15,qualityMax:45,boss:{id:"boss_plains_slime",name:"巨大化スライム",icon:"💧",maxHp:100,atk:10,def:5,spd:50,preset:"/presets/RPG_Characters/Slime.json",phases:[{hpThreshold:.4,name:"粘液暴走",effect:{stat:"spd",amount:20},message:"スライムが震え始めた！"}]}},cave:{id:"cave",name:"地底洞窟",description:"暗い洞窟の奥深く。鉱石や水晶が眠る。",icon:"⛏️",unlocked:!1,difficulty:1,baseTime:35,dropTable:[{blueprintId:"iron_ore",weight:22},{blueprintId:"stone",weight:15},{blueprintId:"crystal",weight:12},{blueprintId:"silver_ore",weight:10},{blueprintId:"cloth",weight:10},{blueprintId:"dark_stone",weight:8},{blueprintId:"bone",weight:8},{blueprintId:"moss_stone",weight:8},{blueprintId:"amber",weight:7}],traitPool:["硬い","光る","防御力+1","先制"],dropCountMin:1,dropCountMax:2,qualityMin:20,qualityMax:55,boss:{id:"boss_cave_golem",name:"岩窟ゴーレム",icon:"🗿",maxHp:240,atk:18,def:8,spd:60,preset:"/presets/TD_Enemies/Troll.json",phases:[{hpThreshold:.5,name:"岩石硬化",effect:{stat:"def",amount:10},message:"ゴーレムの体が硬く輝き始めた！"}]}},forest:{id:"forest",name:"妖精の森",description:"不思議な力が満ちた深い森。稀少な薬草が育つ。",icon:"🌲",unlocked:!1,difficulty:1,baseTime:45,dropTable:[{blueprintId:"herb",weight:12},{blueprintId:"poison_herb",weight:12},{blueprintId:"spider_silk",weight:12},{blueprintId:"enchanted_wood",weight:10},{blueprintId:"fairy_dust",weight:10},{blueprintId:"cloth",weight:10},{blueprintId:"crystal",weight:8},{blueprintId:"spirit_essence",weight:8},{blueprintId:"mushroom",weight:8},{blueprintId:"wood",weight:10}],traitPool:["HP回復+","採取量UP","猛毒","軽い","風の加護","体力強化"],dropCountMin:1,dropCountMax:3,qualityMin:25,qualityMax:65,boss:{id:"boss_forest_treant",name:"森の番人ツリーアント",icon:"🌳",maxHp:380,atk:22,def:12,spd:50,preset:"/presets/TD_Enemies/Gargoyle.json",phases:[{hpThreshold:.6,name:"根の再生",effect:{stat:"def",amount:8},message:"ツリーアントの根が地中から伸び始めた！"},{hpThreshold:.3,name:"森の怒り",effect:{stat:"atk",amount:15},message:"ツリーアントが咆哮を上げた！"}]}},volcano:{id:"volcano",name:"灼熱の火山",description:"溶岩が流れる危険な火山。貴重な火石が採れる。",icon:"🌋",unlocked:!1,difficulty:2,baseTime:55,dropTable:[{blueprintId:"fire_stone",weight:20},{blueprintId:"lava_core",weight:15},{blueprintId:"iron_ore",weight:12},{blueprintId:"thunder_stone",weight:12},{blueprintId:"dragon_scale",weight:8},{blueprintId:"cursed_gem",weight:8},{blueprintId:"ice_shard",weight:10},{blueprintId:"stone",weight:8},{blueprintId:"feather",weight:7}],traitPool:["攻撃力+1","攻撃力+2","燃えやすい","丈夫","雷撃","疾走"],dropCountMin:1,dropCountMax:2,qualityMin:30,qualityMax:75,boss:{id:"boss_volcano_ifrit",name:"炎帝イフリート",icon:"🔥",maxHp:520,atk:35,def:10,spd:80,preset:"/presets/TD_Enemies/Orc.json",phases:[{hpThreshold:.5,name:"灼熱の怒り",effect:{stat:"atk",amount:20},message:"イフリートが炎に包まれた！"},{hpThreshold:.2,name:"炎帝覚醒",effect:{stat:"spd",amount:30},message:"イフリートの怒りが頂点に達した！"}]}},deep_sea:{id:"deep_sea",name:"深海の遺跡",description:"海底に眠る古代遺跡。稀少な真珠やミスリルが見つかる。",icon:"🌊",unlocked:!1,difficulty:2,baseTime:65,dropTable:[{blueprintId:"deep_pearl",weight:18},{blueprintId:"coral_fragment",weight:16},{blueprintId:"mithril_ore",weight:12},{blueprintId:"sea_serpent_fin",weight:10},{blueprintId:"moonstone",weight:10},{blueprintId:"frozen_tear",weight:10},{blueprintId:"void_shard",weight:8},{blueprintId:"black_lotus",weight:8},{blueprintId:"elder_bark",weight:8}],traitPool:["防御力+2","水溶性","HP回復+","光る","鉄壁"],dropCountMin:1,dropCountMax:3,qualityMin:35,qualityMax:80,boss:{id:"boss_sea_kraken",name:"深海の悪魔クラーケン",icon:"🦑",maxHp:680,atk:40,def:15,spd:70,preset:"/presets/TD_Enemies/Giant Spider.json",phases:[{hpThreshold:.6,name:"墨の防壁",effect:{stat:"def",amount:12},message:"クラーケンが墨を吐いた！"},{hpThreshold:.3,name:"触手乱舞",effect:{stat:"atk",amount:18},message:"クラーケンの触手が暴れ始めた！"}]}},dragon_nest:{id:"dragon_nest",name:"竜の巣",description:"古代竜の住処。最強の素材が眠るが極めて危険。",icon:"🐉",unlocked:!1,difficulty:3,baseTime:70,dropTable:[{blueprintId:"dragon_scale",weight:22},{blueprintId:"feather",weight:14},{blueprintId:"fire_stone",weight:12},{blueprintId:"mithril_ore",weight:10},{blueprintId:"void_shard",weight:10},{blueprintId:"wind_crystal",weight:10},{blueprintId:"crystal",weight:8},{blueprintId:"thunder_stone",weight:7},{blueprintId:"moonstone",weight:7}],traitPool:["攻撃力+2","攻撃力+3","防御力+2","聖なる力","光る","再生"],dropCountMin:1,dropCountMax:3,qualityMin:40,qualityMax:90,boss:{id:"boss_elder_dragon",name:"古竜ヴェルムドラゴ",icon:"🐉",maxHp:900,atk:55,def:20,spd:65,preset:"/presets/RPG_Characters/Bat.json",phases:[{hpThreshold:.7,name:"竜の咆哮",effect:{stat:"atk",amount:15},message:"古竜が天を揺るがす咆哮を上げた！"},{hpThreshold:.4,name:"古竜覚醒",effect:{stat:"spd",amount:25},message:"古竜の瞳が赤く燃え始めた！"},{hpThreshold:.15,name:"最後の抵抗",effect:{stat:"def",amount:15},message:"古竜が翼で身を守り始めた！"}]}},sky_tower:{id:"sky_tower",name:"天空の塔",description:"雲を突き抜ける塔。天空の素材と神鉄が手に入る。",icon:"☁️",unlocked:!1,difficulty:3,baseTime:80,dropTable:[{blueprintId:"sky_fragment",weight:18},{blueprintId:"wind_crystal",weight:15},{blueprintId:"divine_ore",weight:12},{blueprintId:"star_dust",weight:12},{blueprintId:"aether_essence",weight:10},{blueprintId:"phoenix_ash",weight:10},{blueprintId:"rainbow_scale",weight:8},{blueprintId:"chaos_crystal",weight:8},{blueprintId:"feather",weight:7}],traitPool:["攻撃力+3","防御力+3","風の加護","星の輝き","聖なる力","武神"],dropCountMin:2,dropCountMax:3,qualityMin:50,qualityMax:95,boss:{id:"boss_sky_titan",name:"天空巨神スカイタイタン",icon:"⚡",maxHp:1100,atk:65,def:25,spd:75,preset:"/presets/RPG_Characters/Knight.json",phases:[{hpThreshold:.6,name:"雷神降臨",effect:{stat:"spd",amount:20},message:"タイタンの体に雷が纏い始めた！"},{hpThreshold:.3,name:"天空の裁き",effect:{stat:"atk",amount:25},message:"タイタンが天の力を解放した！"}]}},time_corridor:{id:"time_corridor",name:"時の回廊",description:"時空の狭間。始原の素材が眠る最果ての地。",icon:"⏳",unlocked:!1,difficulty:4,baseTime:90,dropTable:[{blueprintId:"time_sand",weight:18},{blueprintId:"primordial_gem",weight:10},{blueprintId:"world_tree_sap",weight:10},{blueprintId:"aether_essence",weight:12},{blueprintId:"divine_ore",weight:10},{blueprintId:"chaos_crystal",weight:10},{blueprintId:"rainbow_scale",weight:10},{blueprintId:"star_dust",weight:10},{blueprintId:"phoenix_ash",weight:10}],traitPool:["時の祝福","星の輝き","混沌","攻撃力+3","防御力+3","売値UP+","不死鳥"],dropCountMin:2,dropCountMax:4,qualityMin:60,qualityMax:100,boss:{id:"boss_time_lord",name:"時を支配する者",icon:"🕰️",maxHp:1400,atk:80,def:30,spd:90,preset:"/presets/RPG_Characters/Skeleton.json",phases:[{hpThreshold:.7,name:"時間減速",effect:{stat:"spd",amount:30},message:"時の支配者が時間を歪め始めた！"},{hpThreshold:.4,name:"因果崩壊",effect:{stat:"atk",amount:30},message:"因果律が乱れ始めた！"},{hpThreshold:.15,name:"時の終焉",effect:{stat:"def",amount:20},message:"時の支配者が最後の力を解き放った！"}]}}};class Dm{constructor(){this._listeners=new Map}on(e,t){return this._listeners.has(e)||this._listeners.set(e,new Set),this._listeners.get(e).add(t),()=>this.off(e,t)}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);n&&(n.delete(t),n.size===0&&this._listeners.delete(e))}emit(e,t){const n=this._listeners.get(e);if(n)for(const i of n)try{i(t)}catch(a){console.error(`[EventBus] Error in listener for "${e}":`,a)}}}const N=new Dm;class Um{constructor(){this.totalGoldEarned=0,this.totalItemsSold=0,this.totalItemsCrafted=0,this.totalCustomersServed=0,this.totalCustomersLost=0,this.totalPuzzlesPlayed=0,this.bestPuzzleScore=0,this.dailySales=[],this._currentDaySales=0,this.salesByType={equipment:0,consumable:0,accessory:0,material:0},this._bindEvents()}_bindEvents(){N.on("item:sold",e=>{var i,a;const t=e.price||((i=e.item)==null?void 0:i.value)||0;this.totalGoldEarned+=t,this.totalItemsSold++,this._currentDaySales+=t;const n=((a=e.item)==null?void 0:a.type)||"material";this.salesByType[n]!==void 0&&(this.salesByType[n]+=t)}),N.on("item:crafted",()=>{this.totalItemsCrafted++}),N.on("customer:bought",()=>{this.totalCustomersServed++}),N.on("customer:left",()=>{this.totalCustomersLost++}),N.on("day:newDay",()=>{this.dailySales.push(this._currentDaySales),this.dailySales.length>30&&this.dailySales.shift(),this._currentDaySales=0})}recordPuzzle(e){this.totalPuzzlesPlayed++,e>this.bestPuzzleScore&&(this.bestPuzzleScore=e)}add(e,t=1){this[e]!==void 0?this[e]+=t:this[e]=t}getAverageDailySales(e=7){const t=this.dailySales.slice(-e);return t.length===0?0:Math.round(t.reduce((n,i)=>n+i,0)/t.length)}toSaveData(){return{totalGoldEarned:this.totalGoldEarned,totalItemsSold:this.totalItemsSold,totalItemsCrafted:this.totalItemsCrafted,totalCustomersServed:this.totalCustomersServed,totalCustomersLost:this.totalCustomersLost,totalPuzzlesPlayed:this.totalPuzzlesPlayed,bestPuzzleScore:this.bestPuzzleScore,dailySales:this.dailySales,salesByType:{...this.salesByType}}}loadSaveData(e){e&&(this.totalGoldEarned=e.totalGoldEarned||0,this.totalItemsSold=e.totalItemsSold||0,this.totalItemsCrafted=e.totalItemsCrafted||0,this.totalCustomersServed=e.totalCustomersServed||0,this.totalCustomersLost=e.totalCustomersLost||0,this.totalPuzzlesPlayed=e.totalPuzzlesPlayed||0,this.bestPuzzleScore=e.bestPuzzleScore||0,this.dailySales=e.dailySales||[],e.salesByType&&Object.assign(this.salesByType,e.salesByType))}}const Nn=new Um,vi="voxelshop_save_v5",ks=["voxelshop_save_v4","voxelshop_save_v3","voxelshop_save_v2","voxelshop_save_v1"],Nm=30;class Xs{constructor(e,t,n,i,a,r){this.inventory=e,this.adventurers=t,this.dayCycle=n,this.shop=i,this.reputation=a,this.quest=r,this.timer=0}update(e){this.timer+=e,this.timer>=Nm&&(this.timer=0,this.save())}save(){try{const e={version:5,timestamp:Date.now(),gold:this.inventory.gold,maxCapacity:this.inventory.maxCapacity,items:this.inventory.items.map(t=>({blueprintId:t.blueprintId,quality:t.quality,traits:t.traits})),displayedItems:this.shop.displayedItems.map(t=>({blueprintId:t.blueprintId,quality:t.quality,traits:t.traits})),maxSlots:this.shop.maxSlots,purchasedUpgrades:this.shop.purchasedUpgrades,adventurers:this.adventurers.adventurers.map(t=>({id:t.id,level:t.level,exp:t.exp,assignedArea:t.assignedArea,weapon:t.equipment.weapon?{blueprintId:t.equipment.weapon.blueprintId,quality:t.equipment.weapon.quality,traits:t.equipment.weapon.traits}:null})),day:this.dayCycle.day,dayTimer:this.dayCycle.dayTimer,totalSales:this.dayCycle.totalSales,currentRankIndex:this.dayCycle.currentRankIndex,unlockedRecipes:Object.keys(en).filter(t=>en[t].unlocked),unlockedAreas:Object.keys(gt).filter(t=>gt[t].unlocked),reputation:this.reputation?this.reputation.toSaveData():null,stats:Nn.toSaveData(),quest:this.quest?this.quest.toSaveData():null,rankBossAvailable:this.dayCycle.rankBossAvailable,defeatedBosses:this.dayCycle.defeatedBosses||[]};localStorage.setItem(vi,JSON.stringify(e)),console.log("[Save] ゲームを保存しました (v5)"),N.emit("save:completed")}catch(e){console.error("[Save] 保存失敗:",e)}}static hasSave(){if(localStorage.getItem(vi))return!0;for(const e of ks)if(localStorage.getItem(e))return!0;return!1}static getSaveInfo(){try{let e=localStorage.getItem(vi);if(!e){for(const n of ks)if(e=localStorage.getItem(n),e)break}if(!e)return null;const t=JSON.parse(e);return{day:t.day,gold:t.gold,totalSales:t.totalSales,rankIndex:t.currentRankIndex,timestamp:t.timestamp}}catch{return null}}static deleteSave(){localStorage.removeItem(vi);for(const e of ks)localStorage.removeItem(e)}static loadSaveData(){try{let e=localStorage.getItem(vi);if(e)return JSON.parse(e);for(const t of ks)if(e=localStorage.getItem(t),e){const n=JSON.parse(e);return n.version<5&&(n.version=5,n.rankBossAvailable=!1,n.defeatedBosses=[]),n.version<4&&(n.maxCapacity=n.maxCapacity||Fe.initialInventoryCapacity,n.maxSlots=n.maxSlots||Fe.shopMaxDisplaySlots,n.purchasedUpgrades=n.purchasedUpgrades||[],n.quest=n.quest||null,n.dayTimer=0,delete n.ap,delete n.maxAP),localStorage.removeItem(t),localStorage.setItem(vi,JSON.stringify(n)),console.log(`[Save] ${t} → v5 マイグレーション完了`),n}return null}catch{return null}}}class Fm{constructor(){this.currentAnim=null,this.currentDef=null,this.time=0,this.playing=!1,this.speed=1,this.prevAnim=null,this.prevDef=null,this.prevTime=0,this.blendDuration=.3,this.blendElapsed=0,this.blending=!1}play(e,t,n=!1){this.currentAnim===e&&!n||(this.currentDef&&this.playing&&(this.prevAnim=this.currentAnim,this.prevDef=this.currentDef,this.prevTime=this.time,this.blending=!0,this.blendElapsed=0),this.currentAnim=e,this.currentDef=t,this.time=0,this.playing=!0)}stop(){this.playing=!1}update(e){if(!this.playing||!this.currentDef)return{};this.time+=e*this.speed;const t=this.currentDef.duration||1;this.currentDef.loop?this.time=this.time%t:this.time>=t&&(this.time=t,this.playing=!1);const n=this.time/t,i=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1,a=this._interpolate(this.currentDef.keyframes,n*i);if(this.blending){this.blendElapsed+=e;const r=Math.min(this.blendElapsed/this.blendDuration,1),o=r*r*(3-2*r);if(this.prevDef){const l=this.prevDef.duration||1,c=this.prevTime/l,d=this.prevDef.keyframes.length>0?this.prevDef.keyframes[this.prevDef.keyframes.length-1].time:1,h=this._interpolate(this.prevDef.keyframes,c*d),f=this._blendTransforms(h,a,o);return r>=1&&(this.blending=!1,this.prevDef=null),f}r>=1&&(this.blending=!1)}return a}_interpolate(e,t){if(!e||e.length===0)return{};if(e.length===1)return this._cloneFrame(e[0].parts||{});let n=e[0],i=e[e.length-1];for(let l=0;l<e.length-1;l++)if(t>=e[l].time&&t<=e[l+1].time){n=e[l],i=e[l+1];break}const a=i.time-n.time,r=a>0?(t-n.time)/a:0,o=r*r*(3-2*r);return this._lerpFrames(n.parts||{},i.parts||{},o)}_lerpFrames(e,t,n){const i={},a=new Set([...Object.keys(e),...Object.keys(t)]);for(const r of a){const o=e[r]||{},l=t[r]||{};i[r]={rotation:this._lerpVec(o.rotation||[0,0,0],l.rotation||[0,0,0],n),position:this._lerpVec(o.position||[0,0,0],l.position||[0,0,0],n)}}return i}_blendTransforms(e,t,n){const i={},a=new Set([...Object.keys(e),...Object.keys(t)]);for(const r of a){const o=e[r]||{rotation:[0,0,0],position:[0,0,0]},l=t[r]||{rotation:[0,0,0],position:[0,0,0]};i[r]={rotation:this._lerpVec(o.rotation,l.rotation,n),position:this._lerpVec(o.position,l.position,n)}}return i}_lerpVec(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}_cloneFrame(e){const t={};for(const[n,i]of Object.entries(e))t[n]={rotation:[...i.rotation||[0,0,0]],position:[...i.position||[0,0,0]]};return t}seekTo(e){if(!this.currentDef)return{};this.time=e*(this.currentDef.duration||1),this.playing=!1,this.blending=!1;const t=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1;return this._interpolate(this.currentDef.keyframes,e*t)}getTransformsAt(e,t){if(!e||!e.keyframes)return{};const n=e.keyframes.length>0?e.keyframes[e.keyframes.length-1].time:1;return this._interpolate(e.keyframes,t*n)}}class km{constructor(e,t={}){this.definition=e,this.voxelSize=e.voxelSize||1,this.root=new xi,this.root.name=e.name,this.partGroups={},this.animController=new Fm,this.currentAnimName=null,this.materials=e.palette.map(i=>new Cr({color:new Se(i)}));const n=this.voxelSize;if(this.boxGeom=new Dn(n*.98,n*.98,n*.98),this.edgeMat=new Xr({color:0,transparent:!0,opacity:.12}),this._buildParts(),t.position&&this.root.position.set(...t.position),t.rotation&&(this.root.rotation.y=t.rotation),t.scale){const i=t.scale;this.root.scale.set(i,i,i)}}_buildParts(){const e=this.voxelSize;for(const t of this.definition.parts){const n=new xi;n.name=t.name,n.position.set(t.position[0]*e,t.position[1]*e,t.position[2]*e),n.userData.restPosition=n.position.clone(),this._addVoxelMeshes(n,t);const i=t.parent?this.partGroups[t.parent]:this.root;i?i.add(n):this.root.add(n),this.partGroups[t.name]=n}}_addVoxelMeshes(e,t){const n=this.voxelSize,i=t.center[0],a=t.center[1],r=t.center[2],o=new Map;for(let d=0;d<t.voxels.length;d++){const[h,f,p,_]=t.voxels[d];_<0||_>=this.materials.length||(o.has(_)||o.set(_,[]),o.get(_).push({vx:h,vy:f,vz:p,origIdx:d}))}const l=new ut,c=new kd(new Dn(n,n,n));for(const[d,h]of o){const f=new Dd(this.boxGeom,this.materials[d],h.length);f.castShadow=!0,f.receiveShadow=!0,f.userData.isVoxelBatch=!0,f.userData.partName=t.name,f.userData.colorIndex=d,f.userData.voxelMap=[];for(let p=0;p<h.length;p++){const{vx:_,vy:g,vz:m,origIdx:u}=h[p],E=(_-i+.5)*n,M=(g-a+.5)*n,b=(m-r+.5)*n;l.position.set(E,M,b),l.updateMatrix(),f.setMatrixAt(p,l.matrix),f.userData.voxelMap[p]={coord:[_,g,m],origIdx:u};const C=new Kl(c,this.edgeMat);C.position.set(E,M,b),e.add(C)}f.instanceMatrix.needsUpdate=!0,e.add(f)}e.userData._edgeGeom=c}rebuildPart(e){const t=this.partGroups[e];if(!t)return;const n=this.definition.parts.find(a=>a.name===e);if(!n)return;t.userData._edgeGeom&&t.userData._edgeGeom.dispose();const i=[...t.children];for(const a of i)t.remove(a),a.isInstancedMesh&&a.dispose(),a.geometry&&a.geometry!==this.boxGeom&&a.geometry.dispose(),a.material&&a.material!==this.edgeMat&&!this.materials.includes(a.material)&&a.material.dispose();for(let a=0;a<this.definition.palette.length;a++)a<this.materials.length?this.materials[a].color.set(this.definition.palette[a]):this.materials.push(new Cr({color:new Se(this.definition.palette[a])}));this._addVoxelMeshes(t,n)}getVoxelMeshes(){const e=[];return this.root.traverse(t=>{t.isInstancedMesh&&t.userData.isVoxelBatch&&e.push(t)}),e}playAnimation(e){var n;const t=(n=this.definition.animations)==null?void 0:n[e];t&&(this.currentAnimName=e,this.animController.play(e,t))}getAnimationNames(){return Object.keys(this.definition.animations||{})}update(e){const t=this.animController.update(e),n=this.voxelSize;for(const[i,a]of Object.entries(t)){const r=this.partGroups[i];if(r&&(a.rotation&&r.rotation.set(a.rotation[0],a.rotation[1],a.rotation[2]),a.position)){const o=r.userData.restPosition;r.position.set(o.x+a.position[0]*n,o.y+a.position[1]*n,o.z+a.position[2]*n)}}}addTo(e){e.add(this.root)}removeFrom(e){e.remove(this.root)}dispose(){this.root.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry!==this.boxGeom&&e.geometry.dispose()}),this.boxGeom.dispose(),this.edgeMat.dispose(),this.materials.forEach(e=>e.dispose())}}const ta=class ta{constructor(e){this.scene=e,this.particles=[],this.geometries={box:new Dn(1,.3,1),octahedron:new jr(1,0),plane:new Bi(1,1),sphere:new Kr(1,4,4)},this._tempVec=new F}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.particles.splice(t,1);continue}n.velocity.y-=n.gravity*e,this._tempVec.copy(n.velocity).multiplyScalar(e),n.mesh.position.add(this._tempVec),n.mesh.rotation.x+=n.spin.x*e,n.mesh.rotation.y+=n.spin.y*e,n.mesh.rotation.z+=n.spin.z*e;const i=Math.min(1,n.life/n.fadeTime);n.mesh.material.opacity=i,n.mesh.scale.setScalar(n.baseScale*(.5+.5*i))}}_enforceLimit(){for(;this.particles.length>ta.MAX_PARTICLES;){const e=this.particles.shift();this.scene.remove(e.mesh),e.mesh.material.dispose()}}spawnCoinBurst(e=new F(0,2,5),t=12){for(let n=0;n<t;n++){const i=.15+Math.random()*.15,a=this.geometries.box,r=new Ds({color:new Se().setHSL(.12+Math.random()*.05,.9,.55+Math.random()*.15),metalness:.8,roughness:.2,transparent:!0,opacity:1}),o=new Mt(a,r);o.scale.set(i,i,i),o.position.copy(e),o.position.x+=(Math.random()-.5)*1,o.position.z+=(Math.random()-.5)*1,this.scene.add(o),this.particles.push({mesh:o,velocity:new F((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),gravity:12,spin:new F((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),life:1.2+Math.random()*.8,fadeTime:.6,baseScale:1})}this._enforceLimit()}spawnCraftStars(e=new F(6,1,0),t=10,n="q-common"){const a={"q-poor":8947848,"q-common":13943968,"q-fine":8235624,"q-excellent":8040644,"q-legendary":15251531}[n]||16777215;for(let r=0;r<t;r++){const o=.08+Math.random()*.12,l=this.geometries.octahedron,c=new Ds({color:a,emissive:a,emissiveIntensity:.5,transparent:!0,opacity:1}),d=new Mt(l,c);d.scale.set(o,o,o),d.position.copy(e),d.position.x+=(Math.random()-.5)*2,d.position.z+=(Math.random()-.5)*2,this.scene.add(d),this.particles.push({mesh:d,velocity:new F((Math.random()-.5)*2,2+Math.random()*3,(Math.random()-.5)*2),gravity:-.5,spin:new F(Math.random()*4,Math.random()*4,Math.random()*4),life:1.5+Math.random()*1,fadeTime:.8,baseScale:1})}this._enforceLimit()}spawnConfetti(e=40){const t=[15251531,8235624,12876378,8040644,16115400,16750933];for(let n=0;n<e;n++){const i=.15+Math.random()*.15,a=.08+Math.random()*.08,r=this.geometries.plane,o=new Ds({color:t[Math.floor(Math.random()*t.length)],transparent:!0,opacity:1,side:sn}),l=new Mt(r,o);l.scale.set(i,a,1),l.position.set((Math.random()-.5)*30,15+Math.random()*10,(Math.random()-.5)*30),this.scene.add(l),this.particles.push({mesh:l,velocity:new F((Math.random()-.5)*3,-(1+Math.random()*2),(Math.random()-.5)*3),gravity:1.5,spin:new F((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),life:4+Math.random()*3,fadeTime:2,baseScale:1})}this._enforceLimit()}spawnAmbientParticle(e=.5){let t;e<.15?t=16771264:e<.5?t=16775400:e<.75?t=16750933:t=6719675;const n=.04+Math.random()*.06,i=this.geometries.sphere,a=new Ds({color:t,emissive:t,emissiveIntensity:e>.75?1:.3,transparent:!0,opacity:.6}),r=new Mt(i,a);r.scale.set(n,n,n),r.position.set((Math.random()-.5)*40,Math.random()*2,(Math.random()-.5)*40),this.scene.add(r),this.particles.push({mesh:r,velocity:new F((Math.random()-.5)*.3,.2+Math.random()*.4,(Math.random()-.5)*.3),gravity:-.05,spin:new F(0,Math.random()*2,0),life:8+Math.random()*6,fadeTime:3,baseScale:1}),this._enforceLimit()}dispose(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles.length=0,Object.values(this.geometries).forEach(e=>e.dispose())}};ls(ta,"MAX_PARTICLES",200);let Ir=ta;function kt(s){const e="/Voxel-Tycoon01/",t=s.startsWith("/")?s.slice(1):s;return`${e}${t}`}class Bm{constructor(e,t,n,i){this.scene=e,this.camera=t,this.entities=n,this.renderer=i,this.wanderers=[],this.returningNpcs=[],this.dayProgress=0,this._skyColors={dawn:new Se(16764040),noon:new Se(8900331),sunset:new Se(16750933),night:new Se(1710650)},this._sunColors={dawn:new Se(16771264),noon:new Se(16775400),sunset:new Se(16746564),night:new Se(3359846)},this._tempColor=new Se,this._sunTempColor=new Se}async init(){this.camera.position.set(20,25,25),this.camera.lookAt(0,0,0),this.particles=new Ir(this.scene),await this.spawnEnvironment(),N.on("adventurer:return",e=>this._onAdventurerReturn(e)),N.on("rank:up",e=>{this._evolveShopExterior(e.rank),this.particles.spawnConfetti(50)}),N.on("item:sold",()=>{this.particles.spawnCoinBurst(new F(-2,2,5),10+Math.floor(Math.random()*8))}),N.on("item:crafted",e=>{const t=e.item&&e.item.quality>=81?"q-legendary":e.item&&e.item.quality>=61?"q-excellent":e.item&&e.item.quality>=41?"q-fine":"q-common",n=t==="q-legendary"?20:t==="q-excellent"?15:10;this.particles.spawnCraftStars(new F(6,1,0),n,t)}),await this._spawnWanderers()}update(e){for(let t=this.returningNpcs.length-1;t>=0;t--){const n=this.returningNpcs[t],i=n.entity;if(!i||!i.root){this.returningNpcs.splice(t,1),this._returnNpcCount=Math.max(0,(this._returnNpcCount||0)-1);continue}if(n.state==="walking")i.root.position.x-=4.5*e,i.root.rotation.y=Math.PI/2,i.root.position.x<=4&&(n.state="idle",n.timer=3,i.playAnimation("idle"));else if(n.state==="idle"&&(n.timer-=e,n.timer<=0)){i.root.visible=!1;const a=this.entities.indexOf(i);a!==-1&&this.entities.splice(a,1),i.removeFrom(this.scene),i.dispose(),this.returningNpcs.splice(t,1),this._returnNpcCount=Math.max(0,(this._returnNpcCount||0)-1)}}for(const t of this.wanderers){t.timer-=e,t.timer<=0&&(t.targetX=(Math.random()-.5)*30,t.targetZ=(Math.random()-.5)*30,t.timer=5+Math.random()*8);const n=t.entity;if(n&&n.root){const i=1.5*e,a=t.targetX-n.root.position.x,r=t.targetZ-n.root.position.z,o=Math.sqrt(a*a+r*r);o>.5&&(n.root.position.x+=a/o*i,n.root.position.z+=r/o*i,n.root.rotation.y=Math.atan2(a,r))}}if(this._updateDayNightCycle(),this.particles&&(this.particles.update(e),this._ambientTimer=(this._ambientTimer||0)+e,this._ambientTimer>=3)){this._ambientTimer=0;const t=1+Math.floor(Math.random()*2);for(let n=0;n<t;n++)this.particles.spawnAmbientParticle(this.dayProgress)}}setDayProgress(e){this.dayProgress=e}_updateDayNightCycle(){if(!this.renderer)return;const e=this.dayProgress;let t,n,i,a;if(e<.15){const r=e/.15;t=this._tempColor.lerpColors(this._skyColors.night,this._skyColors.dawn,r),n=this._sunTempColor.lerpColors(this._sunColors.night,this._sunColors.dawn,r),i=.4+r*.8,a=.3+r*.3}else if(e<.5){const r=(e-.15)/.35;t=this._tempColor.lerpColors(this._skyColors.dawn,this._skyColors.noon,r),n=this._sunTempColor.lerpColors(this._sunColors.dawn,this._sunColors.noon,r),i=1.2+r*.4,a=.6+r*.2}else if(e<.75){const r=(e-.5)/.25;t=this._tempColor.lerpColors(this._skyColors.noon,this._skyColors.sunset,r),n=this._sunTempColor.lerpColors(this._sunColors.noon,this._sunColors.sunset,r),i=1.6-r*.6,a=.8-r*.2}else{const r=(e-.75)/.25;t=this._tempColor.lerpColors(this._skyColors.sunset,this._skyColors.night,r),n=this._sunTempColor.lerpColors(this._sunColors.sunset,this._sunColors.night,r),i=1-r*.6,a=.6-r*.3}this.renderer.renderer&&this.renderer.renderer.setClearColor(t),this.scene.fog&&this.scene.fog.color.copy(t),this.renderer.sunLight&&(this.renderer.sunLight.color.copy(n),this.renderer.sunLight.intensity=i),this.renderer.ambientLight&&(this.renderer.ambientLight.intensity=a),this.renderer.hemiLight&&(this.renderer.hemiLight.intensity=.3+a*.5)}async loadEntity(e,t={}){try{const i=await(await fetch(kt(e))).json(),a=new km(i,t);return a.addTo(this.scene),this.entities.push(a),a}catch(n){return console.error("[SceneManager] Failed to load entity:",e,n),null}}async spawnEnvironment(){await this.loadEntity("/presets/RPG_Props/House.json",{position:[0,0,-5],scale:1,rotation:0}),await this.loadEntity("/presets/RPG_Props/Chest.json",{position:[-2,0,5],scale:.6,rotation:Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Barrel.json",{position:[2,0,5],scale:.5}),await this.loadEntity("/presets/RPG_Props/Anvil.json",{position:[6,0,0],scale:.6,rotation:-Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Campfire.json",{position:[-6,0,-2],scale:.6});const e=[{path:"Pine Tree.json",pos:[-15,-15],scale:1},{path:"Pine Tree.json",pos:[12,-10],scale:.8},{path:"Pine Tree.json",pos:[10,15],scale:.9},{path:"Pine Tree.json",pos:[-18,8],scale:.7},{path:"Rock.json",pos:[8,12],scale:.6},{path:"Rock.json",pos:[-10,10],scale:.5},{path:"Rock.json",pos:[15,-5],scale:.4}];for(const n of e)await this.loadEntity(`/presets/RPG_Props/${n.path}`,{position:[n.pos[0],0,n.pos[1]],scale:n.scale});const t=await this.loadEntity("/presets/RPG_Characters/King.json",{position:[0,0,3],scale:.5});t&&t.playAnimation("idle")}async _spawnWanderers(){const e=[{path:"Chibi Human.json",x:-8,z:8},{path:"Cat.json",x:10,z:10},{path:"Dog.json",x:-12,z:-8}];for(const t of e)try{const n=await this.loadEntity(`/presets/RPG_Characters/${t.path}`,{position:[t.x,0,t.z],scale:.4});n&&(n.playAnimation("walk"),this.wanderers.push({entity:n,targetX:t.x,targetZ:t.z,timer:Math.random()*3}))}catch(n){console.warn("[SceneManager] Wanderer load failed:",n)}}async _onAdventurerReturn(e){if(!(this._returnNpcCount>=2)){this._returnNpcCount=(this._returnNpcCount||0)+1;try{const t=await this.loadEntity("/presets/RPG_Characters/Knight.json",{position:[18,0,0],scale:.5});if(!t){this._returnNpcCount--;return}t.playAnimation("walk"),this.returningNpcs.push({entity:t,state:"walking",timer:0})}catch{this._returnNpcCount--}}}async _evolveShopExterior(e){const t=e==null?void 0:e.index;if(t===void 0)return;const i={1:[{path:"Banner.json",pos:[-4,0,3],scale:.6,rot:0},{path:"Banner.json",pos:[4,0,3],scale:.6,rot:0},{path:"Fence.json",pos:[-5,0,7],scale:.5,rot:0},{path:"Fence.json",pos:[5,0,7],scale:.5,rot:0}],2:[{path:"Street Light.json",pos:[-7,0,5],scale:.7,rot:0},{path:"Street Light.json",pos:[7,0,5],scale:.7,rot:0},{path:"Well.json",pos:[-8,0,-3],scale:.5,rot:Math.PI/4}],3:[{path:"Tree.json",pos:[-5,0,-8],scale:.7,rot:0},{path:"Tree.json",pos:[5,0,-8],scale:.6,rot:0},{path:"Chest.json",pos:[4,0,5],scale:.5,rot:-Math.PI/6},{path:"Street Light.json",pos:[0,0,8],scale:.7,rot:0}],4:[{path:"Tent.json",pos:[10,0,4],scale:.5,rot:-Math.PI/4},{path:"Banner.json",pos:[-3,0,8],scale:.5,rot:Math.PI/4},{path:"Banner.json",pos:[3,0,8],scale:.5,rot:-Math.PI/4},{path:"Street Light.json",pos:[-10,0,0],scale:.7,rot:0},{path:"Street Light.json",pos:[10,0,0],scale:.7,rot:0}]}[t];if(i)for(const a of i)try{const r=await this.loadEntity(`/presets/RPG_Props/${a.path}`,{position:a.pos,scale:a.scale,rotation:a.rot});if(r&&r.root){const o=r.root.position.y;r.root.position.y=-3,r.root.scale.set(0,0,0);const l=performance.now(),c=800,d=()=>{const h=performance.now()-l,f=Math.min(1,h/c),p=1-Math.pow(1-f,3);r.root.position.y=-3+(o+3)*p,r.root.scale.setScalar(a.scale*p),f<1&&requestAnimationFrame(d)};requestAnimationFrame(d)}}catch(r){console.warn("[SceneManager] Shop decoration failed:",r)}}}function Zn(s,e,t=[]){const n=tt[s];if(!n)throw new Error(`Unknown blueprint: ${s}`);return{uid:crypto.randomUUID(),blueprintId:s,name:n.name,type:n.type,quality:Math.floor(e),traits:[...t],value:Math.floor(n.baseValue*(1+e/100))}}function Om(s,e,t=[],n=0){const i=en[s];if(!i)throw new Error(`Unknown recipe: ${s}`);const a=[...i.materials].sort(),r=e.map(p=>p.blueprintId).sort();if(a.length!==r.length)throw new Error("素材の数が合いません");for(let p=0;p<a.length;p++)if(a[p]!==r[p])throw new Error(`素材が異なります: expected ${a[p]}, got ${r[p]}`);const o=e.reduce((p,_)=>p+_.quality,0),l=e.length>0?o/e.length:50,c=new Set;e.forEach(p=>{p.traits.forEach(_=>c.add(_))});const d=[];for(const p of t)c.has(p)&&d.length<Fe.maxTraitSlots&&d.push(p);let h=0;for(const p of e)for(const _ of p.traits||[]){const g=Fn[_];g&&g.effects&&g.effects.craftQualityBonus&&(h+=g.effects.craftQualityBonus)}const f=Math.min(100,Math.max(0,l+n+h));return Zn(i.targetId,f,d)}class zm{constructor(){this.gold=Fe.initialGold,this.items=[],this.maxCapacity=Fe.initialInventoryCapacity;for(const e of Fe.initialItems)this.items.push(Zn(e.blueprintId,e.quality,e.traits))}get isFull(){return this.items.length>=this.maxCapacity}get freeSlots(){return Math.max(0,this.maxCapacity-this.items.length)}addGold(e){this.gold+=e,N.emit("gold:changed",{gold:this.gold})}spendGold(e){return this.gold>=e?(this.gold-=e,N.emit("gold:changed",{gold:this.gold}),!0):!1}addItem(e){if(this.isFull){const t=Date.now();return(!this._lastFullToast||t-this._lastFullToast>5e3)&&(N.emit("toast",{message:"⚠️ 倉庫がいっぱいです！素材を整理しましょう",type:"warning"}),this._lastFullToast=t),!1}return this.items.push(e),N.emit("inventory:changed"),!0}forceAddItem(e){this.items.push(e),N.emit("inventory:changed")}removeItem(e){const t=this.items.findIndex(n=>n.uid===e);return t!==-1?this.items.splice(t,1)[0]:null}getItems(){return this.items}getItemsByBlueprint(e){return this.items.filter(t=>t.blueprintId===e)}expandCapacity(e){this.maxCapacity+=e,N.emit("toast",{message:`📦 倉庫容量が ${e} 増えました！（${this.maxCapacity}枠）`,type:"success"})}}const sc=[{id:"shop_slots_1",category:"shop",name:"販売棚 拡張I",description:"陳列枠 +2",icon:"🏪",cost:150,requiredRank:1,effect:{type:"display_slots",value:2}},{id:"shop_slots_2",category:"shop",name:"販売棚 拡張II",description:"陳列枠 +2",icon:"🏪",cost:500,requiredRank:3,effect:{type:"display_slots",value:2}},{id:"shop_slots_3",category:"shop",name:"販売棚 拡張III",description:"陳列枠 +2",icon:"🏪",cost:1200,requiredRank:5,effect:{type:"display_slots",value:2}},{id:"shop_slots_4",category:"shop",name:"販売棚 拡張IV",description:"陳列枠 +2",icon:"🏪",cost:3e3,requiredRank:7,effect:{type:"display_slots",value:2}},{id:"storage_1",category:"storage",name:"倉庫 拡張I",description:"倉庫容量 +10",icon:"📦",cost:100,requiredRank:1,effect:{type:"inventory_capacity",value:10}},{id:"storage_2",category:"storage",name:"倉庫 拡張II",description:"倉庫容量 +10",icon:"📦",cost:300,requiredRank:2,effect:{type:"inventory_capacity",value:10}},{id:"storage_3",category:"storage",name:"倉庫 拡張III",description:"倉庫容量 +15",icon:"📦",cost:800,requiredRank:4,effect:{type:"inventory_capacity",value:15}},{id:"storage_4",category:"storage",name:"倉庫 拡張IV",description:"倉庫容量 +15",icon:"📦",cost:2e3,requiredRank:6,effect:{type:"inventory_capacity",value:15}},{id:"storage_5",category:"storage",name:"倉庫 拡張V",description:"倉庫容量 +20",icon:"📦",cost:5e3,requiredRank:8,effect:{type:"inventory_capacity",value:20}},{id:"craft_quality_1",category:"workshop",name:"品質管理台",description:"品質安定 +10",icon:"🔨",cost:400,requiredRank:3,effect:{type:"quality_bonus",value:10}},{id:"craft_quality_2",category:"workshop",name:"精密作業台",description:"品質安定 +10",icon:"🔨",cost:1500,requiredRank:6,effect:{type:"quality_bonus",value:10}},{id:"trait_slot_1",category:"workshop",name:"特性研究室",description:"特性枠 +1",icon:"🔨",cost:1800,requiredRank:5,effect:{type:"trait_slots",value:1}},{id:"trait_slot_2",category:"workshop",name:"特性研究室・改",description:"特性枠 +1",icon:"🔨",cost:5e3,requiredRank:7,effect:{type:"trait_slots",value:1}},{id:"dispatch_slot_1",category:"barracks",name:"派遣所 拡張I",description:"同時派遣枠 +1",icon:"👥",cost:200,requiredRank:2,effect:{type:"dispatch_slots",value:1}},{id:"dispatch_slot_2",category:"barracks",name:"派遣所 拡張II",description:"同時派遣枠 +1",icon:"👥",cost:700,requiredRank:4,effect:{type:"dispatch_slots",value:1}},{id:"dispatch_slot_3",category:"barracks",name:"派遣所 拡張III",description:"同時派遣枠 +1",icon:"👥",cost:2500,requiredRank:6,effect:{type:"dispatch_slots",value:1}},{id:"sign_board",category:"decor",name:"看板設置",description:"来客率 +15%",icon:"🎪",cost:80,requiredRank:1,effect:{type:"customer_rate",value:.15}},{id:"interior_1",category:"decor",name:"内装改善",description:"お客の滞在 +1AP",icon:"🎪",cost:400,requiredRank:3,effect:{type:"patience_ap",value:1}},{id:"vip_room",category:"decor",name:"VIPルーム",description:"貴族出現率UP",icon:"🎪",cost:1200,requiredRank:5,effect:{type:"noble_rate",value:.3}},{id:"fame_banner",category:"decor",name:"名声の旗",description:"評判獲得 +30%",icon:"🎪",cost:2e3,requiredRank:6,effect:{type:"reputation_bonus",value:.3}},{id:"lucky_cat",category:"decor",name:"招き猫",description:"売値 +10%",icon:"🎪",cost:3e3,requiredRank:7,effect:{type:"sell_bonus",value:.1}},{id:"ap_boost_1",category:"stamina",name:"体力トレーニング",description:"最大AP +2",icon:"⚡",cost:300,requiredRank:2,effect:{type:"max_ap",value:2}},{id:"ap_boost_2",category:"stamina",name:"滋養強壮薬",description:"最大AP +2",icon:"⚡",cost:1e3,requiredRank:4,effect:{type:"max_ap",value:2}},{id:"ap_boost_3",category:"stamina",name:"仙人の秘薬",description:"最大AP +3",icon:"⚡",cost:3500,requiredRank:6,effect:{type:"max_ap",value:3}}],Gm={shop:{name:"🏪 販売棚",order:1},storage:{name:"📦 倉庫",order:2},workshop:{name:"🔨 工房",order:3},barracks:{name:"👥 冒険者",order:4},decor:{name:"🎪 装飾",order:5},stamina:{name:"⚡ 行動力",order:6}},Vm=.15,Bs=50;class Hm{constructor(e){this.inventory=e,this.displayedItems=[],this.maxSlots=Fe.shopMaxDisplaySlots,this.sellTimer=0,this.purchasedUpgrades=[]}update(e){this.displayedItems.length!==0&&(this.sellTimer+=e,this.sellTimer>=Fe.shopSellInterval&&(this.sellTimer=0,this._tryAutoSell()))}displayItem(e){if(this.displayedItems.length>=this.maxSlots)return!1;const t=this.inventory.removeItem(e);return t?(t.value=this._calcValue(t),this.displayedItems.push(t),N.emit("shop:displayed",{item:t}),!0):!1}removeDisplayedItem(e){const t=this.displayedItems.findIndex(i=>i.uid===e);if(t===-1)return null;if(this.inventory.isFull)return N.emit("toast",{message:"⚠️ 倉庫がいっぱいのため取り下げできません！",type:"warning"}),null;const n=this.displayedItems.splice(t,1)[0];return this.inventory.addItem(n),n}processSale(e,t=1){const n=this.displayedItems.findIndex(a=>a.uid===e.uid);if(n===-1)return!1;this.displayedItems.splice(n,1);const i=Math.floor((e.value||10)*t);return this.inventory.addGold(i),N.emit("item:sold",{item:e,price:i}),Nn.add("itemsSold",1),!0}_tryAutoSell(){if(this.displayedItems.length===0)return;const e=this.displayedItems[Math.floor(Math.random()*this.displayedItems.length)];Math.random()<Vm&&this.processSale(e)}_calcValue(e){const t=tt[e.blueprintId];if(!t)return 10;let n;if(e.quality<=Bs)n=e.quality/Bs;else{const a=(e.quality-Bs)/Bs;n=1+4*(a*a)}let i=Math.max(1,Math.floor(t.baseValue*n));if(e.traits&&e.traits.length>0){let a=0;for(const r of e.traits){const o=Fn[r];o&&o.effects&&o.effects.sellBonus&&(a+=o.effects.sellBonus)}a!==0&&(i=Math.max(1,Math.floor(i*(1+a/100))))}return i}purchaseUpgrade(e,t){if(this.isPurchased(e))return!1;const n=sc.find(a=>a.id===e);if(!n||t<n.requiredRank||!this.inventory.spendGold(n.cost))return!1;this.purchasedUpgrades.push(e);const i=n.effect;switch(i.type){case"display_slots":this.maxSlots+=i.value,N.emit("toast",{message:`🏪 販売棚が ${i.value} 枠増えました！（${this.maxSlots}枠）`,type:"success"});break;case"inventory_capacity":this.inventory.expandCapacity(i.value);break}return N.emit("upgrade:purchased",{upgradeId:e,effect:i}),!0}isPurchased(e){return this.purchasedUpgrades.includes(e)}}const ac=[{id:"adv_knight",name:"新人騎士アーサー",icon:"🛡️",exploreTimeMultiplier:1,battle:{maxHp:120,atk:22,def:15,spd:70}},{id:"adv_archer",name:"狩人ロビン",icon:"🏹",exploreTimeMultiplier:.85,battle:{maxHp:90,atk:28,def:8,spd:90}}],Qr=[{id:"adv_mage",name:"見習い魔女リリー",icon:"🧙‍♀️",exploreTimeMultiplier:1.1,unlockRank:2,battle:{maxHp:80,atk:35,def:5,spd:75}},{id:"adv_thief",name:"盗賊キャット",icon:"🐱",exploreTimeMultiplier:.7,unlockRank:3,battle:{maxHp:100,atk:25,def:10,spd:100}},{id:"adv_paladin",name:"聖騎士セシル",icon:"⚜️",exploreTimeMultiplier:1.2,unlockRank:4,battle:{maxHp:140,atk:18,def:20,spd:60}}],ts=[0,3,8,15,25,40,60,85,120,170],Ys={qualityBonus:1,timeReduction:.03,successBonus:5},qm=50,Wm=30;class $m{constructor(e){this.inventory=e,this.adventurers=[],ac.forEach(t=>{this.adventurers.push({...t,level:1,exp:0,status:"idle",timer:0,maxTimer:0,assignedArea:"plains",currentArea:null,equipment:{weapon:null}})}),this._unlockUnsub=N.on("adventurer:unlock",t=>{const n=t.adventurer;if(!n||this.adventurers.find(a=>a.id===n.id))return;const i={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}};this.adventurers.push(i),N.emit("adventurer:joined",{adventurer:i})})}update(e){this.adventurers.forEach(t=>{t.status==="exploring"?(t.timer-=e,t.timer<=0&&this._completeExploration(t)):t.status==="idle"&&this._autoDispatch(t)})}assignArea(e,t){const n=this.adventurers.find(a=>a.id===e);if(!n)return!1;const i=gt[t];return!i||!i.unlocked?!1:(n.assignedArea=t,!0)}_autoDispatch(e){if(this.inventory.items.length>=this.inventory.maxCapacity*2)return;const t=e.assignedArea,n=gt[t];if(!n||!n.unlocked){e.assignedArea="plains";return}const i=this._calcExploreTime(e,n);e.status="exploring",e.currentArea=t,e.timer=i,e.maxTimer=i,Nn.add("expeditionsSent",1)}_calcExploreTime(e,t){const n=1-(e.level-1)*Ys.timeReduction,a=1-(this._getWeaponTraitEffects(e).speedBonus||0)/100;return Math.max(8,Math.ceil(t.baseTime*(e.exploreTimeMultiplier||1)*n*a))}calcSuccessRate(e,t){const n=(e.level-1)*Ys.successBonus,i=this._getWeaponTraitEffects(e).exploreSuccess||0,a=(t.difficulty||0)*Wm,r=qm+n+i-a;return Math.min(100,Math.max(10,r))}_getWeaponTraitEffects(e){const t={};if(!e.equipment.weapon||!e.equipment.weapon.traits)return t;for(const n of e.equipment.weapon.traits){const i=Fn[n];if(!(!i||!i.effects))for(const[a,r]of Object.entries(i.effects))t[a]=(t[a]||0)+r}return t}_completeExploration(e){const t=gt[e.currentArea],n=e.currentArea;if(!t){e.status="idle";return}const i=this.calcSuccessRate(e,t),a=Math.random()*100<i,r=[];if(a){const c=this._getWeaponTraitEffects(e),d=t.dropCountMin||Fe.exploreDropCountMin,h=t.dropCountMax||Fe.exploreDropCountMax,f=c.dropBonus||0,p=d+Math.floor(Math.random()*(h-d+1))+f,_=t.dropTable,g=_.reduce((m,u)=>m+u.weight,0);for(let m=0;m<p;m++){let u=Math.random()*g,E=_[0].blueprintId;for(const x of _)if(u-=x.weight,u<=0){E=x.blueprintId;break}const M=tt[E];if(!M)continue;const b=t.qualityMin||Fe.exploreQualityMin,C=t.qualityMax||Fe.exploreQualityMax;let A;if(e.equipment.weapon){const x=e.equipment.weapon.quality,I=b+(C-b)*(x/100),H=(C-b)*.1;A=Math.round(I+(Math.random()*H*2-H))}else A=b+Math.floor(Math.random()*10);A+=(e.level-1)*Ys.qualityBonus,A+=c.qualityBonus||0,A=Math.min(100,Math.max(1,A));const w=[],P=t.traitPool||[];for(const x of P)Math.random()<Fe.traitChance&&w.push(x);const S={uid:crypto.randomUUID(),blueprintId:E,name:M.name,type:M.type,quality:A,traits:w,tier:M.tier||1};r.push(S),this.inventory.addItem(S)||r.pop()}}const o=t.expReward||1,l=a?o:Math.max(1,Math.floor(o/2));e.exp+=l,this._checkLevelUp(e),e.status="idle",e.currentArea=null,e.timer=0,N.emit("adventurer:return",{adventurer:e,items:r,areaId:n,success:a,successRate:i}),a&&Nn.add("materialsGathered",r.length)}_checkLevelUp(e){for(;e.level<ts.length&&e.exp>=ts[e.level];)e.level++,N.emit("adventurer:levelUp",{adventurer:e})}equipWeapon(e,t){const n=this.adventurers.find(a=>a.id===e);if(!n)return!1;const i=this.inventory.removeItem(t);return i?(n.equipment.weapon&&this.inventory.addItem(n.equipment.weapon),n.equipment.weapon=i,N.emit("inventory:changed"),!0):!1}unequipWeapon(e){const t=this.adventurers.find(n=>n.id===e);return!t||!t.equipment.weapon?!1:(this.inventory.addItem(t.equipment.weapon),t.equipment.weapon=null,N.emit("inventory:changed"),!0)}getAdventurers(){return this.adventurers}getUnlockedAreas(){return Object.values(gt).filter(e=>e.unlocked)}dispose(){var e;(e=this._unlockUnsub)==null||e.call(this)}}class Xm{constructor(e,t){this.inventory=e,this.quest=t,this.day=Fe.startingDay,this.dayTimer=0,this.dayDuration=Fe.dayDurationSeconds,this.totalSales=0,this.isGameOver=!1,this.paused=!1,this.currentRankIndex=0,this.rankBossAvailable=!1,this.defeatedBosses=[],this._unsubs=[],this._unsubs.push(N.on("item:sold",n=>{this.totalSales+=n.price||0,Nn.add("totalRevenue",n.price||0),this.quest&&typeof this.quest.updateTotalSales=="function"&&this.quest.updateTotalSales(this.totalSales),this._checkRankUp()})),this._unsubs.push(N.on("item:crafted",()=>this._checkRankUp())),this._unsubs.push(N.on("day:newDay",()=>this._checkRankUp())),this._unsubs.push(N.on("upgrade:purchased",()=>this._checkRankUp())),this._unsubs.push(N.on("adventurer:return",()=>this._checkRankUp())),this._unsubs.push(N.on("game:pause",()=>{this.paused=!0})),this._unsubs.push(N.on("game:resume",()=>{this.paused=!1})),this._unsubs.push(N.on("battle:win",n=>{n.rankIndex&&this._doRankUp(n.rankIndex)}))}get dayProgress(){return Math.min(1,this.dayTimer/this.dayDuration)}get currentRank(){return Fe.ranks[this.currentRankIndex]}get currentRent(){return Fe.dailyRent+this.currentRankIndex*Fe.rentIncreasePerRank}update(e){this.isGameOver||this.paused||(this.dayTimer+=e,this.dayTimer>=this.dayDuration&&this._advanceDay())}skipDay(){this.isGameOver||this._advanceDay()}setPaused(e){this.paused=e}_advanceDay(){this.dayTimer=0;const e=this.currentRent;if(this.inventory.gold<e){this.isGameOver=!0,N.emit("game:over",{day:this.day,totalSales:this.totalSales,rank:this.currentRank.name,rent:e,reason:`維持費 ${e}G を支払えませんでした…`});return}this.inventory.spendGold(e),this.day++,Nn.add("totalDays",1),N.emit("day:newDay",{day:this.day,rent:e})}_checkRankUp(){const e=Fe.ranks;if(this.currentRankIndex<e.length-1){const t=e[this.currentRankIndex+1];this.totalSales>=t.requiredSales&&(!this.quest||this.quest.isRankQuestSatisfied(this.currentRankIndex+1))&&(this.rankBossAvailable||(this.rankBossAvailable=!0,N.emit("rank:boss_available",{rankIndex:this.currentRankIndex+1,bossId:t.requiredBossId})))}}_doRankUp(e){if(e!==this.currentRankIndex+1)return;this.currentRankIndex=e,this.rankBossAvailable=!1;const n=Fe.ranks[this.currentRankIndex];if(n.newRecipes)for(const a of n.newRecipes)en[a]&&(en[a].unlocked=!0,N.emit("recipe:unlocked",{name:en[a].targetId,key:a}));if(n.newAreas)for(const a of n.newAreas)gt[a]&&(gt[a].unlocked=!0,N.emit("area:unlocked",{name:gt[a].name,key:a}));const i=Qr.filter(a=>a.unlockRank===n.rank);for(const a of i)N.emit("adventurer:unlock",{adventurer:a});N.emit("rank:up",{rank:n.name,index:this.currentRankIndex}),this.currentRankIndex>=Fe.goalShopRank-1&&N.emit("game:clear",{day:this.day,totalSales:this.totalSales,rank:n.name}),this._checkRankUp()}dispose(){this._unsubs.forEach(e=>e())}}const _l=[{name:"旅の商人",icon:"🧳",dialogue:"珍しいものはないかね？"},{name:"見習い騎士",icon:"⚔️",dialogue:"武器を探しています！"},{name:"森の薬師",icon:"🌿",dialogue:"良い薬草はある？"},{name:"お嬢様",icon:"👗",dialogue:"キラキラしたものが欲しいわ"},{name:"鍛冶屋の親方",icon:"🔨",dialogue:"素材を仕入れたい"},{name:"冒険者",icon:"🗡️",dialogue:"冒険に必要なものを！"},{name:"魔法使い",icon:"🧙",dialogue:"魔法の触媒を探している"},{name:"村の子供",icon:"👦",dialogue:"かっこいいの、ある？"}],gl=[["equipment"],["consumable"],["accessory"],["material"],["equipment","consumable"],["equipment","accessory"],["consumable","material"]];class Ym{constructor(e,t,n,i){this.inventory=e,this.shop=t,this.events=n,this.reputation=i,this.customers=[],this.spawnTimer=0,this.customersToday=0,this._unsub=N.on("day:newDay",()=>{this.customersToday=0,this.spawnTimer=0,this.customers=[]})}update(e){const t=this.reputation?this.reputation.getCustomerRateMultiplier():1,n=Fe.customerSpawnInterval/t;this.spawnTimer+=e,this.spawnTimer>=n&&(this.spawnTimer=0,this.customersToday<Fe.maxCustomersPerDay&&this._spawnCustomer());for(let i=this.customers.length-1;i>=0;i--){const a=this.customers[i];a.timer-=e,a.checkTimer=(a.checkTimer||0)+e,a.checkTimer>=3&&(a.checkTimer=0,this._tryPurchase(a)),a.timer<=0&&(this.customers.splice(i,1),N.emit("customer:left",{customer:a,reason:"timeout"}))}}_spawnCustomer(){const e=_l[Math.floor(Math.random()*_l.length)],t=gl[Math.floor(Math.random()*gl.length)],n=Fe.customerPatienceSeconds,i={id:crypto.randomUUID(),...e,demandTypes:t,timer:n,maxTimer:n,checkTimer:0};this.customers.push(i),this.customersToday++,N.emit("customer:arrived",{customer:i})}_tryPurchase(e){const t=this.shop.displayedItems.filter(o=>e.demandTypes.includes(o.type));if(t.length===0)return;const n=t.sort((o,l)=>(l.value||0)-(o.value||0))[0],i=this.reputation?this.reputation.getPriceBonus():0,a=Fe.customerBonusMultiplier*(1+i);if(this.shop.processSale(n,a)){const o=this.customers.indexOf(e);o!==-1&&this.customers.splice(o,1),N.emit("customer:bought",{customer:e,item:n})}}getActiveCustomers(){return this.customers}dispose(){var e;(e=this._unsub)==null||e.call(this)}}const Ba=[{id:"merchant_visit",name:"旅の商人",icon:"🧳",description:"旅の商人が珍しい素材を持ってきた！安く買える。",effect:"bonus_material",duration:0,weight:25},{id:"storm",name:"暴風雨",icon:"🌧️",description:"激しい嵐が来た。探索時間が50%長くなる。",effect:"explore_slow",multiplier:1.5,duration:1,weight:15},{id:"festival",name:"収穫祭",icon:"🎉",description:"町でお祭り！来客数が2倍に。",effect:"double_customers",duration:1,weight:15},{id:"tax",name:"王国の徴税",icon:"📜",description:"王国から臨時の税金が課されました…",effect:"pay_tax",taxAmount:50,duration:0,weight:12},{id:"lucky_find",name:"幸運の発見",icon:"🍀",description:"道端で素材を拾った！",effect:"free_material",duration:0,weight:20},{id:"reputation",name:"評判の広まり",icon:"📢",description:"店の評判が広まった！次の売却価格が30%アップ。",effect:"sell_bonus",multiplier:1.3,duration:1,weight:13}];class jm{constructor(e){this.inventory=e,this.activeEffects=[],this._newDayUnsub=N.on("day:newDay",()=>this._onNewDay())}getActiveEffects(){return this.activeEffects}hasEffect(e){return this.activeEffects.some(t=>t.effect===e)}getEffectMultiplier(e){const t=this.activeEffects.find(n=>n.effect===e);return t?t.multiplier:1}_onNewDay(){this.activeEffects=this.activeEffects.filter(e=>(e.remainingDays--,e.remainingDays>0)),Math.random()<.5&&this._triggerRandomEvent()}_triggerRandomEvent(){const e=this._rollEvent();if(e)switch(N.emit("event:triggered",{name:e.name,icon:e.icon,description:e.description}),e.effect){case"bonus_material":{const t=Object.values(gt).filter(i=>i.unlocked),n=t[Math.floor(Math.random()*t.length)];if(n)for(let i=0;i<2;i++){const a=n.dropTable[Math.floor(Math.random()*n.dropTable.length)],r=Zn(a.blueprintId,30+Math.floor(Math.random()*30),[]);this.inventory.addItem(r)}N.emit("inventory:changed");break}case"free_material":{const t=["wood","stone","herb","slime_jelly"],n=t[Math.floor(Math.random()*t.length)],i=Zn(n,40+Math.floor(Math.random()*30),[]);this.inventory.addItem(i),N.emit("inventory:changed");break}case"pay_tax":{this.inventory.spendGold(e.taxAmount);break}case"explore_slow":case"double_customers":case"sell_bonus":{this.activeEffects.push({effect:e.effect,multiplier:e.multiplier||1,remainingDays:e.duration,name:e.name,icon:e.icon});break}}}dispose(){var e;(e=this._newDayUnsub)==null||e.call(this)}_rollEvent(){const e=Ba.reduce((n,i)=>n+i.weight,0);let t=Math.random()*e;for(const n of Ba)if(t-=n.weight,t<=0)return n;return Ba[0]}}const Km=kt("/bgm/title_01.mp3"),Zm=kt("/bgm/Ending_01.mp3"),Jm=kt("/bgm/battle_01.mp3"),Qm=Array.from({length:15},(s,e)=>kt(`/bgm/bgm_${String(e+1).padStart(2,"0")}.mp3`));class e_{constructor(){this.ctx=null,this.masterGain=null,this.bgmGain=null,this.seGain=null,this.muted=!1,this.initialized=!1,this.masterVolume=.3,this.bgmVolume=.5,this.seVolume=.5,this.audioEl=null,this.bgmSource=null,this.shuffledPlaylist=[],this.currentTrackIndex=0,this.isTitleBGM=!1,this.isBattleBGM=!1,this.preBattleTrackSrc=null,this.preBattleTrackTime=0,this.isFading=!1,this.proceduralActive=!1,this._bgmTimeout=null;const e=localStorage.getItem("voxelshop_sound");if(e)try{const t=JSON.parse(e);this.muted=t.muted||!1,t.masterVolume!==void 0&&(this.masterVolume=t.masterVolume),t.bgmVolume!==void 0&&(this.bgmVolume=t.bgmVolume),t.seVolume!==void 0&&(this.seVolume=t.seVolume)}catch{}}init(){if(!this.initialized){this.initialized=!0,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.masterVolume,this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=this.bgmVolume,this.bgmGain.connect(this.masterGain),this.seGain=this.ctx.createGain(),this.seGain.gain.value=this.seVolume,this.seGain.connect(this.masterGain),this.audioEl=new Audio,this.audioEl.crossOrigin="anonymous",this.audioEl.loop=!1,this.audioEl.volume=1;try{this.bgmSource=this.ctx.createMediaElementSource(this.audioEl),this.bgmSource.connect(this.bgmGain)}catch{console.warn("[SoundManager] MediaElementSource not supported, using direct audio")}this.audioEl.addEventListener("ended",()=>{this.isTitleBGM?(this.audioEl.currentTime=0,this.audioEl.play().catch(()=>{})):this.playNextTrack()}),this._shufflePlaylist(),this._bindEvents()}}_bindEvents(){N.on("item:crafted",e=>{var t;((t=e==null?void 0:e.item)==null?void 0:t.quality)>=81?this.playLegendaryCraft():this.playCraftSuccess()}),N.on("item:sold",()=>this.playSellCoin()),N.on("customer:arrived",()=>this.playDoorBell()),N.on("rank:up",()=>this.playFanfare()),N.on("adventurer:levelUp",()=>this.playLevelUp()),N.on("event:triggered",()=>this.playEventChime()),N.on("day:tick",()=>this.playDayTick()),N.on("game:over",()=>this.playGameOver()),N.on("tab:switched",()=>this.playTabSwitch()),N.on("item:displayed",()=>this.playItemDisplay()),N.on("item:removed",()=>this.playItemRemove()),N.on("adventurer:return",()=>this.playItemAcquire()),N.on("day:newDay",()=>this._onNewDay()),N.on("game:clear",()=>this.playEndingBGM()),N.on("battle:start",()=>this.startBattleBGM()),N.on("battle:win",()=>{this.playBattleVictory(),setTimeout(()=>this.stopBattleBGM(),2500)}),N.on("battle:lose",()=>{this.playBattleDefeat(),setTimeout(()=>this.stopBattleBGM(),2e3)}),N.on("battle:se:advAttack",()=>this.playBattleAdvAttack()),N.on("battle:se:bossAttack",()=>this.playBattleBossAttack()),N.on("battle:se:itemUse",()=>this.playBattleItemUse()),N.on("battle:se:heal",()=>this.playBattleHeal()),N.on("battle:se:buff",()=>this.playBattleBuff()),N.on("battle:se:debuff",()=>this.playBattleDebuff()),N.on("battle:se:damage",()=>this.playBattleDamage()),N.on("battle:se:stun",()=>this.playBattleStun()),N.on("battle:se:ko",()=>this.playBattleKO()),N.on("battle:se:revive",()=>this.playBattleRevive()),N.on("battle:se:phaseShift",()=>this.playBattlePhaseShift())}_saveSettings(){localStorage.setItem("voxelshop_sound",JSON.stringify({muted:this.muted,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,seVolume:this.seVolume}))}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.masterGain.gain.setTargetAtTime(this.muted?0:this.masterVolume,this.ctx.currentTime,.1),!this.bgmSource&&this.audioEl&&(this.audioEl.volume=this.muted?0:this.masterVolume),this._saveSettings(),this.muted}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.masterGain&&!this.muted&&this.masterGain.gain.setTargetAtTime(this.masterVolume,this.ctx.currentTime,.05),this._saveSettings()}setBgmVolume(e){this.bgmVolume=Math.max(0,Math.min(1,e)),this.bgmGain&&this.bgmGain.gain.setTargetAtTime(this.bgmVolume,this.ctx.currentTime,.05),this._saveSettings()}setSeVolume(e){this.seVolume=Math.max(0,Math.min(1,e)),this.seGain&&this.seGain.gain.setTargetAtTime(this.seVolume,this.ctx.currentTime,.05),this._saveSettings()}waitForCurrentTrack(){return new Promise(e=>{if(!this.audioEl||this.audioEl.readyState>=3)return e();const t=()=>{this.audioEl.removeEventListener("canplaythrough",t),this.audioEl.removeEventListener("error",t),e()};this.audioEl.addEventListener("canplaythrough",t,{once:!0}),this.audioEl.addEventListener("error",t,{once:!0})})}startTitleBGM(){this.isTitleBGM=!0,this._playTrack(Km)}startGameBGM(){if(this.isTitleBGM=!1,this.audioEl&&!this.audioEl.paused&&this.audioEl.src.includes("title_01")){this.audioEl.loop=!1;const e=()=>{this.audioEl.removeEventListener("ended",e),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])};this.audioEl.addEventListener("ended",e,{once:!0});return}this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])}startBattleBGM(){this.audioEl&&!this.isBattleBGM&&(this.preBattleTrackSrc=this.audioEl.src,this.preBattleTrackTime=this.audioEl.currentTime),this.isBattleBGM=!0,this._fadeOutThen(()=>{this._playTrack(Jm),this.audioEl&&(this.audioEl.loop=!0)},800)}stopBattleBGM(){this.isBattleBGM&&(this.isBattleBGM=!1,this._fadeOutThen(()=>{this.audioEl&&(this.audioEl.loop=!1),this.preBattleTrackSrc?(this._playTrack(this.preBattleTrackSrc),this.audioEl&&(this.audioEl.currentTime=Math.max(0,this.preBattleTrackTime-2)),this.preBattleTrackSrc=null):this.playNextTrack()},1200))}playEndingBGM(){this.isTitleBGM=!1,this._fadeOutThen(()=>{this._playTrack(Zm)})}playNextTrack(){this.isTitleBGM||(this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this._shufflePlaylist(),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex]))}stopBGM(){this.audioEl&&(this.audioEl.pause(),this.audioEl.currentTime=0),this._stopProcedural()}_onNewDay(){this.isTitleBGM||this.isBattleBGM||this._fadeOutThen(()=>{this.playNextTrack()})}_fadeOutThen(e,t=2e3){if(!this.bgmGain||this.isFading){e();return}this.isFading=!0;const n=this.ctx.currentTime;this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value,n),this.bgmGain.gain.linearRampToValueAtTime(0,n+t/1e3),setTimeout(()=>{this.audioEl&&this.audioEl.pause(),this.bgmGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.isFading=!1,e()},t)}_playTrack(e){if(!this.audioEl)return;this._stopProcedural(),this.audioEl.pause(),this.audioEl.src=e,this.audioEl.load();const t=this.audioEl.play();t&&t.catch(n=>{n.name!=="AbortError"&&(console.warn("[SoundManager] Track play failed:",n.message),this._startProcedural())})}_shufflePlaylist(){this.shuffledPlaylist=[...Qm];for(let e=this.shuffledPlaylist.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.shuffledPlaylist[e],this.shuffledPlaylist[t]]=[this.shuffledPlaylist[t],this.shuffledPlaylist[e]]}this.currentTrackIndex=0}_startProcedural(){this.proceduralActive||(this.proceduralActive=!0,this._playProceduralLoop())}_stopProcedural(){this.proceduralActive=!1,this._bgmTimeout&&(clearTimeout(this._bgmTimeout),this._bgmTimeout=null)}_playProceduralLoop(){if(!this.proceduralActive||!this.ctx)return;const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],t=this.ctx.currentTime,n=6+Math.floor(Math.random()*4),i=n*1.2;for(let r=0;r<n;r++){const o=e[Math.floor(Math.random()*e.length)],l=t+r*1.2+Math.random()*.2,c=.8+Math.random()*.6;this._playBGMNote(o,l,c)}const a=e[Math.floor(Math.random()*4)];this._playPad(a,t,i+1),this._bgmTimeout=setTimeout(()=>this._playProceduralLoop(),(i+1.5)*1e3)}_playBGMNote(e,t,n){const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="sine",i.frequency.value=e,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.15,t+.08),a.gain.exponentialRampToValueAtTime(.001,t+n),i.connect(a),a.connect(this.bgmGain),i.start(t),i.stop(t+n+.1),i.onended=()=>{i.disconnect(),a.disconnect()}}_playPad(e,t,n){[e*.5,e*.5*1.25,e*.5*1.5].forEach(a=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();r.type="triangle",r.frequency.value=a,l.type="lowpass",l.frequency.value=400,l.Q.value=.5,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.04,t+1),o.gain.linearRampToValueAtTime(.04,t+n-1),o.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(l),l.connect(o),o.connect(this.bgmGain),r.start(t),r.stop(t+n+.1),r.onended=()=>{r.disconnect(),l.disconnect(),o.disconnect()}})}playCraftSuccess(){if(!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{this._playSENote(n,e+i*.08,.3,"sine",.15)})}playPuzzleMatch(e=1){if(!this.ctx)return;const t=this.ctx.currentTime,n=440+e*80;this._playSENote(n,t,.15,"square",.08),this._playSENote(n*1.25,t+.06,.12,"square",.06)}playSellCoin(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(1200,e,.08,"square",.06),this._playSENote(1800,e+.04,.06,"square",.04),this._playSENote(2400,e+.07,.1,"sine",.05)}playDoorBell(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(880,e,.4,"sine",.12),this._playSENote(1108.73,e+.15,.35,"sine",.1)}playFanfare(){if(!this.ctx)return;const e=this.ctx.currentTime,t=[523.25,523.25,659.25,783.99,659.25,783.99,1046.5],n=[0,.12,.24,.36,.48,.6,.72],i=[.1,.1,.1,.15,.1,.15,.6];t.forEach((a,r)=>{this._playSENote(a,e+n[r],i[r],"square",.1)})}playLevelUp(){if(!this.ctx)return;const e=this.ctx.currentTime;for(let t=0;t<6;t++)this._playSENote(400+t*120,e+t*.06,.15,"sine",.1)}playEventChime(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(660,e,.25,"sine",.1),this._playSENote(880,e+.12,.3,"sine",.08),this._playSENote(1100,e+.24,.25,"sine",.06)}playDayTick(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(440,e,.15,"triangle",.05)}playGameOver(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(110,e,1.5,"sawtooth",.15),this._playSENote(82.41,e+.1,1.2,"sine",.12)}playLegendaryCraft(){if(!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51,1567.98].forEach((n,i)=>{this._playSENote(n,e+i*.06,.4,"sine",.12)}),this._playSENote(1046.5,e+.4,.8,"sine",.08),this._playSENote(1318.51,e+.4,.8,"sine",.06),this._playSENote(1567.98,e+.4,.8,"sine",.05)}playTabSwitch(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(600,e,.05,"sine",.04),this._playSENote(800,e+.03,.04,"sine",.03)}playItemDisplay(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(300,e,.1,"triangle",.06),this._playSENote(450,e+.05,.08,"sine",.04)}playItemRemove(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(500,e,.06,"sine",.04),this._playSENote(350,e+.04,.08,"sine",.03)}playItemAcquire(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(880,e,.12,"sine",.08),this._playSENote(1320,e+.06,.15,"sine",.06),this._playSENote(1760,e+.12,.1,"sine",.04)}playError(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(150,e,.08,"square",.08),this._playSENote(120,e+.1,.1,"square",.06)}playBattleAdvAttack(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(800,e,.06,"sawtooth",.1),this._playSENote(1200,e+.02,.04,"square",.08),this._playSENote(600,e+.05,.08,"triangle",.05),this._playNoiseBurst(e+.01,.04,.06)}playBattleBossAttack(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(120,e,.15,"sawtooth",.14),this._playSENote(80,e+.02,.2,"sine",.1),this._playSENote(200,e+.04,.08,"square",.08),this._playNoiseBurst(e,.06,.1)}playBattleItemUse(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(660,e,.08,"sine",.1),this._playSENote(990,e+.04,.06,"sine",.08),this._playSENote(1320,e+.08,.1,"sine",.06)}playBattleHeal(){if(!this.ctx)return;const e=this.ctx.currentTime;[523,659,784,1047,1319].forEach((n,i)=>{this._playSENote(n,e+i*.06,.25,"sine",.08)})}playBattleBuff(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(440,e,.12,"triangle",.08),this._playSENote(554,e+.06,.12,"triangle",.07),this._playSENote(659,e+.12,.2,"sine",.09),this._playSENote(880,e+.18,.25,"sine",.06)}playBattleDebuff(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(500,e,.12,"sawtooth",.06),this._playSENote(350,e+.08,.15,"sawtooth",.05),this._playSENote(200,e+.16,.2,"sine",.07)}playBattleKO(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(300,e,.1,"sawtooth",.1),this._playSENote(200,e+.08,.15,"sine",.08),this._playSENote(100,e+.18,.3,"sine",.06)}playBattleDamage(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(150,e,.12,"sawtooth",.12),this._playSENote(300,e+.02,.08,"square",.1),this._playSENote(100,e+.05,.15,"sine",.08),this._playNoiseBurst(e,.08,.1),this._playSENote(500,e+.08,.06,"sawtooth",.06)}playBattleStun(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(800,e,.04,"square",.1),this._playSENote(1200,e+.03,.03,"square",.08),this._playSENote(600,e+.06,.05,"sawtooth",.07),this._playSENote(1e3,e+.09,.04,"square",.06),this._playSENote(400,e+.12,.08,"triangle",.05),this._playNoiseBurst(e+.02,.06,.06)}playBattlePhaseShift(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(80,e,.6,"sawtooth",.12),this._playSENote(100,e+.1,.5,"sine",.1),this._playSENote(60,e+.2,.4,"sawtooth",.08),this._playSENote(200,e+.3,.2,"square",.06),this._playSENote(400,e+.4,.2,"square",.05),this._playSENote(600,e+.5,.3,"sine",.04),this._playNoiseBurst(e+.1,.15,.08)}playBattleRevive(){if(!this.ctx)return;const e=this.ctx.currentTime;[330,440,554,659,880,1047].forEach((n,i)=>{this._playSENote(n,e+i*.07,.3,"sine",.07)})}playBattleVictory(){if(!this.ctx)return;const e=this.ctx.currentTime,t=[523,523,659,784,1047,784,1047,1319],n=[0,.15,.3,.45,.6,.75,.95,1.15],i=[.12,.12,.12,.15,.12,.15,.2,.8];t.forEach((a,r)=>{this._playSENote(a,e+n[r],i[r],"square",.12)}),this._playSENote(1047,e+1.15,.8,"sine",.06),this._playSENote(1319,e+1.15,.8,"sine",.05),this._playSENote(1568,e+1.15,.8,"sine",.04)}playBattleDefeat(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(220,e,.5,"sine",.1),this._playSENote(196,e+.3,.5,"sine",.08),this._playSENote(165,e+.6,.6,"sine",.1),this._playSENote(110,e+1,1.2,"sine",.12)}_playNoiseBurst(e,t,n=.05){if(!this.ctx)return;const i=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=a.getChannelData(0);for(let d=0;d<i;d++)r[d]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=a;const l=this.ctx.createGain();l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(.001,e+t);const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1e3,c.Q.value=.8,o.connect(c),c.connect(l),l.connect(this.seGain),o.start(e),o.stop(e+t+.05),o.onended=()=>{o.disconnect(),c.disconnect(),l.disconnect()}}playHover(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(700,e,.02,"sine",.02)}_playSENote(e,t,n,i="sine",a=.1){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=i,r.frequency.value=e,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(a,t+.01),o.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(o),o.connect(this.seGain),r.start(t),r.stop(t+n+.1),r.onended=()=>{r.disconnect(),o.disconnect()}}}const bt=new e_,vl=[{name:"粗悪",min:0,max:20,css:"q-poor",icon:"▪",color:"#888"},{name:"普通",min:21,max:40,css:"q-common",icon:"▫",color:"#c8bea7"},{name:"良品",min:41,max:60,css:"q-fine",icon:"◆",color:"#7daa68"},{name:"優品",min:61,max:80,css:"q-excellent",icon:"★",color:"#7ab0c4"},{name:"極上",min:81,max:100,css:"q-legendary",icon:"✦",color:"#e8b84b"}],yl={material:{icon:"🪨",label:"素材",css:"type-material",emoji:"🪨"},equipment:{icon:"⚔️",label:"装備",css:"type-equipment",emoji:"⚔️"},consumable:{icon:"🧪",label:"消耗品",css:"type-consumable",emoji:"🧪"},accessory:{icon:"💎",label:"アクセサリ",css:"type-accessory",emoji:"💎"}};function vn(s){return vl.find(e=>s>=e.min&&s<=e.max)||vl[0]}function pn(s){return yl[s]||yl.material}function eo(s){const e=Fn[s];return e?`trait-rarity-${e.rarity||"common"}`:""}function t_(s){const e=tt[s.blueprintId];return e&&e.image?kt(e.image):null}function n_(s){const e=tt[s.blueprintId];if(!e||!e.battleEffect)return"";const t=e.battleEffect;let n="",i="⚔️";return t.type==="heal"?(i="❤️",n=`HP ${t.value} 回復`):t.type==="healfull"?(i="❤️‍🩹",n="HP 全回復"):t.type==="revive"?(i="✨",n=`復活 (HP ${t.value})`):t.type==="buff"?(i="⬆️",n=`${t.stat==="atk"?"攻撃":t.stat==="def"?"防御":"素早さ"}+${t.amount} (${t.duration}秒)`):t.type==="debuff"&&(i="⬇️",n=`敵${t.stat==="atk"?"攻撃":t.stat==="def"?"防御":"素早さ"}${t.amount} (${t.duration}秒)`),`<div class="item-battle-effect"><span class="battle-effect-icon">${i}</span><span class="battle-effect-desc">戦闘: ${n}</span></div>`}function to(s,e){const t=t_(s);return t?`<div class="item-card-image"><img src="${t}" alt="${s.name}" /></div>`:`<div class="item-card-image item-card-image-placeholder"><span class="item-card-emoji">${e.emoji}</span></div>`}function rc(s){const e=vn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${eo(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css}">
      ${to(s,t)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${t.icon}</span>
          <span class="item-type-label">${t.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${e.icon} Q: ${s.quality}</span>
          <span class="item-quality-name">${e.name}</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${s.quality}%"></div>
        </div>
        <div class="item-traits">${n}</div>
        ${n_(s)}
      </div>
    </div>
  `}function i_(s){const e=vn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${eo(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css} shop-displayable-card" data-uid="${s.uid}">
      ${to(s,t)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${t.icon}</span>
          <span class="item-type-label">${t.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${e.icon} Q: ${s.quality}</span>
          <span class="item-card-price">💰 ${s.value}G</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${s.quality}%"></div>
        </div>
        <div class="item-traits">${n}</div>
        <div class="shop-display-hint">🏪 クリックで陳列</div>
      </div>
    </div>
  `}function s_(s){const e=vn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${eo(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css} displayed-glow" data-uid="${s.uid}">
      ${to(s,t)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${t.icon}</span>
          <span class="item-type-label">${t.label}</span>
          <span class="displayed-badge">陳列中</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${e.icon} Q: ${s.quality}</span>
          <span class="item-card-price">💰 ${s.value}G</span>
        </div>
        <div class="item-traits">${n}</div>
      </div>
    </div>
  `}class a_{constructor(e){this.inventory=e,this.el=document.getElementById("inventory-list"),this.filter="all",this.sort="type"}render(){let e=this.inventory.getItems();const n=[...this.filter==="all"?e:e.filter(o=>o.type===this.filter)].sort((o,l)=>{if(this.sort==="quality")return l.quality-o.quality;if(this.sort==="name")return o.name.localeCompare(l.name);const c={material:0,equipment:1,consumable:2,accessory:3},d=(c[o.type]||0)-(c[l.type]||0);return d!==0?d:l.quality-o.quality}),i={all:e.length,material:0,equipment:0,consumable:0,accessory:0};e.forEach(o=>i[o.type]=(i[o.type]||0)+1);const a=[{key:"all",label:`📦 すべて (${e.length}/${this.inventory.maxCapacity})`},{key:"material",label:"🪨 素材"},{key:"equipment",label:"⚔️ 装備"},{key:"consumable",label:"🧪 消耗品"},{key:"accessory",label:"💎 アクセ"}];let r='<div class="inv-toolbar">';if(r+='<div class="inv-filters">',a.forEach(o=>{const l=this.filter===o.key?"active":"",c=i[o.key]||0;r+=`<button class="btn inv-filter-btn ${l}" data-filter="${o.key}">${o.label} <span class="inv-count">${c}</span></button>`}),r+="</div>",r+='<div class="inv-sort">',r+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="type"?"active":""}" data-sort="type">種類</button>`,r+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="quality"?"active":""}" data-sort="quality">品質</button>`,r+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="name"?"active":""}" data-sort="name">名前</button>`,r+="</div></div>",n.length===0){const o=this.filter==="all";r+=`<div class="empty-state">
        <div class="empty-state-icon">${o?"📦":"🔍"}</div>
        <div class="empty-state-text">${o?"まだ何も持っていません":"このカテゴリのアイテムはありません"}</div>
        <div class="empty-state-hint">${o?"冒険者を派遣して素材を集めましょう！":"他のカテゴリを見てみましょう"}</div>
      </div>`}else r+='<div class="item-grid">',r+=n.map(o=>rc(o)).join(""),r+="</div>";this.el.innerHTML=r,this.el.querySelectorAll(".inv-filter-btn").forEach(o=>{o.addEventListener("click",l=>{this.filter=l.currentTarget.dataset.filter,this.render()})}),this.el.querySelectorAll(".inv-sort-btn").forEach(o=>{o.addEventListener("click",l=>{this.sort=l.currentTarget.dataset.sort,this.render()})})}}const Rt=6,Ut=12,rt=40,Os=45,Oa=1,r_=.3,o_=.02,ji=[{id:0,emoji:"🪨",label:"石",color:"#8a8a7a",glow:"rgba(138,138,122,0.4)"},{id:1,emoji:"🌿",label:"草",color:"#7daa68",glow:"rgba(125,170,104,0.4)"},{id:2,emoji:"🔥",label:"火",color:"#c46a5a",glow:"rgba(196,106,90,0.4)"},{id:3,emoji:"💎",label:"結晶",color:"#7ab0c4",glow:"rgba(122,176,196,0.4)"},{id:4,emoji:"⚔️",label:"金属",color:"#c4a87a",glow:"rgba(196,168,122,0.4)"},{id:5,emoji:"🧪",label:"薬品",color:"#b87ae8",glow:"rgba(184,122,232,0.4)"}],Ki=[{min:0,bonus:0,rank:"なし",color:"#888"},{min:300,bonus:1,rank:"銅",color:"#c4a87a"},{min:800,bonus:2,rank:"銀",color:"#c0c0c0"},{min:1500,bonus:3,rank:"金",color:"#e8b84b"},{min:2800,bonus:5,rank:"極",color:"#e87ae8"}];class l_{constructor(){this.overlay=null,this.canvas=null,this.ctx=null,this.running=!1,this.resolveCallback=null,this.grid=[],this.currentPiece=null,this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Os,this.dropTimer=0,this.dropInterval=Oa,this.linesCleared=0,this.paused=!1,this.clearingCells=[],this.shakeTimer=0,this._boundKeyDown=this._onKeyDown.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundMouseMove=this._onMouseMove.bind(this),this._boundTouchStart=this._onTouchStart.bind(this),this._boundTouchMove=this._onTouchMove.bind(this),this._touchStartX=0,this._touchStartY=0,this._mouseCol=-1}start(e,t=[]){return new Promise(n=>{this.resolveCallback=n,this.recipeName=e,this.materialHints=t,this._initGame(),this._createUI(),this._startLoop()})}_initGame(){this.grid=[];for(let e=0;e<Ut;e++)this.grid.push(new Array(Rt).fill(-1));this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Os,this.dropTimer=0,this.dropInterval=Oa,this.linesCleared=0,this.clearingCells=[],this.shakeTimer=0,this.paused=!1,this.running=!0,this._spawnPiece()}_spawnPiece(){const e=Math.floor(Math.random()*ji.length);this.currentPiece={col:Math.floor(Rt/2),row:0,blocks:[e,ji[Math.floor(Math.random()*ji.length)].id],rotation:0},this.grid[0][this.currentPiece.col]!==-1&&this._endGame()}_createUI(){this.overlay=document.createElement("div"),this.overlay.className="puzzle-overlay",this.overlay.innerHTML=`
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>🧩 錬金パズル — ${this.recipeName}</h3>
          <div class="puzzle-timer" id="puzzle-timer">${Os}秒</div>
        </div>
        <div class="puzzle-body">
          <canvas id="puzzle-canvas" width="${Rt*rt}" height="${Ut*rt}"></canvas>
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
    `,document.body.appendChild(this.overlay),this.canvas=document.getElementById("puzzle-canvas"),this.ctx=this.canvas.getContext("2d"),document.getElementById("puzzle-skip").addEventListener("click",()=>{this._endGame(!0)}),document.addEventListener("keydown",this._boundKeyDown),this.canvas.addEventListener("mousedown",this._boundMouseDown),this.canvas.addEventListener("mousemove",this._boundMouseMove),this.canvas.addEventListener("touchstart",this._boundTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._boundTouchMove,{passive:!1}),requestAnimationFrame(()=>this.overlay.classList.add("puzzle-visible"))}_startLoop(){this._lastTime=performance.now(),this._loop()}_loop(){if(!this.running)return;const e=performance.now(),t=(e-this._lastTime)/1e3;this._lastTime=e,this.paused||this._update(t),this._draw(),this._animFrame=requestAnimationFrame(()=>this._loop())}_update(e){if(this.timeLeft-=e,this.timeLeft<=0){this.timeLeft=0,this._endGame();return}const t=document.getElementById("puzzle-timer");if(t){const n=Math.ceil(this.timeLeft);t.textContent=`${n}秒`,t.style.color=n<=10?"#c46a5a":""}if(this.clearingCells.length>0){let n=!0;for(const i of this.clearingCells)i.timer-=e*4,i.timer>0&&(n=!1);if(n){for(const a of this.clearingCells)this.grid[a.row][a.col]=-1;this.clearingCells=[],this._applyGravity();const i=this._findMatches();i.length>0?(this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this._scoreMatches(i),this.clearingCells=i.map(a=>({...a,timer:1}))):this.combo=0}return}this.dropInterval=Math.max(r_,Oa-(Os-this.timeLeft)*o_),this.dropTimer+=e,this.dropTimer>=this.dropInterval&&(this.dropTimer=0,this._movePiece(0,1)||this._placePiece())}_movePiece(e,t){if(!this.currentPiece)return!1;const n=this.currentPiece,i=n.col+e,a=n.row+t,r=this._getPiecePositions(i,a,n.rotation);for(const[o,l]of r)if(o<0||o>=Ut||l<0||l>=Rt||this.grid[o][l]!==-1)return!1;return n.col=i,n.row=a,!0}_rotatePiece(){if(!this.currentPiece)return;const e=this.currentPiece,t=(e.rotation+1)%2,n=this._getPiecePositions(e.col,e.row,t);for(const[i,a]of n)if(i<0||i>=Ut||a<0||a>=Rt||this.grid[i][a]!==-1)return;e.rotation=t}_getPiecePositions(e,t,n){return n===0?[[t,e],[t+1,e]]:[[t,e],[t,e+1]]}_hardDrop(){if(this.currentPiece){for(;this._movePiece(0,1););this._placePiece()}}_placePiece(){if(!this.currentPiece)return;const e=this.currentPiece,t=this._getPiecePositions(e.col,e.row,e.rotation);for(let i=0;i<t.length;i++){const[a,r]=t[i];a>=0&&a<Ut&&r>=0&&r<Rt&&(this.grid[a][r]=e.blocks[i])}const n=this._findMatches();n.length>0&&(this.combo=1,this.maxCombo=Math.max(this.maxCombo,1),this._scoreMatches(n),this.clearingCells=n.map(i=>({...i,timer:1}))),this._spawnPiece()}_findMatches(){const e=new Set;for(let t=0;t<Ut;t++)for(let n=0;n<=Rt-3;n++){const i=this.grid[t][n];if(i!==-1&&this.grid[t][n+1]===i&&this.grid[t][n+2]===i){let a=n+2;for(;a+1<Rt&&this.grid[t][a+1]===i;)a++;for(let r=n;r<=a;r++)e.add(`${t},${r}`)}}for(let t=0;t<Rt;t++)for(let n=0;n<=Ut-3;n++){const i=this.grid[n][t];if(i!==-1&&this.grid[n+1][t]===i&&this.grid[n+2][t]===i){let a=n+2;for(;a+1<Ut&&this.grid[a+1][t]===i;)a++;for(let r=n;r<=a;r++)e.add(`${r},${t}`)}}return Array.from(e).map(t=>{const[n,i]=t.split(",").map(Number);return{row:n,col:i,type:this.grid[n][i]}})}_scoreMatches(e){const t=e.length*50,n=1+(this.combo-1)*.5,i=Math.floor(t*n);this.score+=i,this.linesCleared+=e.length,this._updateScoreUI()}_updateScoreUI(){const e=document.getElementById("puzzle-score");e&&(e.textContent=this.score);const t=document.getElementById("puzzle-combo");t&&(t.textContent=this.combo>0?`x${this.combo}`:"-",t.style.color=this.combo>=3?"#e8b84b":"");const n=this._getCurrentTier(),i=document.getElementById("puzzle-bonus");i&&(i.textContent=`+${n.bonus}`,i.style.color=n.color);const a=document.getElementById("puzzle-bonus-fill");if(a){const r=Ki[Ki.length-1].min,o=Math.min(100,this.score/r*100);a.style.width=`${o}%`,a.style.background=n.color}}_getCurrentTier(){let e=Ki[0];for(const t of Ki)this.score>=t.min&&(e=t);return e}_applyGravity(){for(let e=0;e<Rt;e++){let t=Ut-1;for(let n=Ut-1;n>=0;n--)this.grid[n][e]!==-1&&(n!==t&&(this.grid[t][e]=this.grid[n][e],this.grid[n][e]=-1),t--)}}_draw(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.fillStyle="rgba(30, 25, 18, 0.95)",e.fillRect(0,0,t,n),e.strokeStyle="rgba(160, 132, 92, 0.1)",e.lineWidth=1;for(let i=0;i<=Ut;i++)e.beginPath(),e.moveTo(0,i*rt),e.lineTo(t,i*rt),e.stroke();for(let i=0;i<=Rt;i++)e.beginPath(),e.moveTo(i*rt,0),e.lineTo(i*rt,n),e.stroke();for(let i=0;i<Ut;i++)for(let a=0;a<Rt;a++)if(this.grid[i][a]!==-1){const r=this.clearingCells.find(o=>o.row===i&&o.col===a);r?this._drawBlock(a,i,this.grid[i][a],r.timer):this._drawBlock(a,i,this.grid[i][a],1)}if(this.currentPiece&&this.clearingCells.length===0){const i=this.currentPiece;let a=i.row;for(;;){const l=this._getPiecePositions(i.col,a+1,i.rotation);let c=!0;for(const[d,h]of l)if(d>=Ut||h<0||h>=Rt||d>=0&&this.grid[d][h]!==-1){c=!1;break}if(!c)break;a++}const r=this._getPiecePositions(i.col,a,i.rotation);for(let l=0;l<r.length;l++){const[c,d]=r[l];c>=0&&this._drawGhost(d,c,i.blocks[l])}const o=this._getPiecePositions(i.col,i.row,i.rotation);for(let l=0;l<o.length;l++){const[c,d]=o[l];c>=0&&this._drawBlock(d,c,i.blocks[l],1)}}this._mouseCol>=0&&this._mouseCol<Rt&&(e.fillStyle="rgba(232, 184, 75, 0.04)",e.fillRect(this._mouseCol*rt,0,rt,n))}_drawBlock(e,t,n,i){const a=this.ctx,r=ji[n],o=e*rt,l=t*rt,c=2;a.globalAlpha=i,a.fillStyle=r.color,a.beginPath(),a.roundRect(o+c,l+c,rt-c*2,rt-c*2,4),a.fill(),a.fillStyle=r.glow,a.beginPath(),a.roundRect(o+c,l+c,rt-c*2,(rt-c*2)*.4,[4,4,0,0]),a.fill(),a.font="18px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(r.emoji,o+rt/2,l+rt/2),a.globalAlpha=1}_drawGhost(e,t,n){const i=this.ctx,a=ji[n],r=e*rt,o=t*rt,l=2;i.globalAlpha=.2,i.strokeStyle=a.color,i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.roundRect(r+l,o+l,rt-l*2,rt-l*2,4),i.stroke(),i.setLineDash([]),i.globalAlpha=1}_onKeyDown(e){if(!(!this.running||this.clearingCells.length>0))switch(e.key){case"ArrowLeft":e.preventDefault(),this._movePiece(-1,0);break;case"ArrowRight":e.preventDefault(),this._movePiece(1,0);break;case"ArrowDown":e.preventDefault(),this._movePiece(0,1),this.dropTimer=0;break;case"ArrowUp":e.preventDefault(),this._rotatePiece();break;case" ":e.preventDefault(),this._hardDrop();break}}_onMouseDown(e){if(!this.running||this.clearingCells.length>0)return;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=Math.floor(n/rt);if(e.button===0&&this.currentPiece){const a=i-this.currentPiece.col;a!==0?this._movePiece(a>0?1:-1,0):this._rotatePiece()}e.button===2&&(e.preventDefault(),this._hardDrop())}_onMouseMove(e){const t=this.canvas.getBoundingClientRect();this._mouseCol=Math.floor((e.clientX-t.left)/rt)}_onTouchStart(e){if(!this.running)return;e.preventDefault();const t=e.touches[0];this._touchStartX=t.clientX,this._touchStartY=t.clientY}_onTouchMove(e){if(!this.running||this.clearingCells.length>0)return;e.preventDefault();const t=e.touches[0],n=t.clientX-this._touchStartX,i=t.clientY-this._touchStartY;Math.abs(n)>30&&(this._movePiece(n>0?1:-1,0),this._touchStartX=t.clientX),i>40&&(this._movePiece(0,1),this._touchStartY=t.clientY,this.dropTimer=0),i<-40&&(this._rotatePiece(),this._touchStartY=t.clientY)}_endGame(e=!1){this.running=!1,cancelAnimationFrame(this._animFrame),document.removeEventListener("keydown",this._boundKeyDown),this.canvas.removeEventListener("mousedown",this._boundMouseDown),this.canvas.removeEventListener("mousemove",this._boundMouseMove),this.canvas.removeEventListener("touchstart",this._boundTouchStart),this.canvas.removeEventListener("touchmove",this._boundTouchMove);const t=e?Ki[0]:this._getCurrentTier(),n={bonus:t.bonus,score:e?0:this.score,rank:e?"スキップ":t.rank,rankColor:t.color,maxCombo:this.maxCombo,linesCleared:this.linesCleared,skipped:e};this._showResult(n)}_showResult(e){const t=this.overlay.querySelector(".puzzle-container");t.innerHTML=`
      <div class="puzzle-result">
        <h3>${e.skipped?"⏭️ スキップ":"✨ パズル完了！"}</h3>
        <div class="puzzle-result-stats">
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">スコア</span>
            <span class="puzzle-result-value">${e.score}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">最大コンボ</span>
            <span class="puzzle-result-value">x${e.maxCombo}</span>
          </div>
          <div class="puzzle-result-stat">
            <span class="puzzle-result-label">消去数</span>
            <span class="puzzle-result-value">${e.linesCleared}</span>
          </div>
        </div>
        <div class="puzzle-result-bonus" style="color:${e.rankColor}">
          <div class="puzzle-result-rank">${e.rank}</div>
          <div class="puzzle-result-bonus-value">品質ボーナス: +${e.bonus}</div>
        </div>
        <button class="btn primary puzzle-result-btn" id="puzzle-done">完成！</button>
      </div>
    `,document.getElementById("puzzle-done").addEventListener("click",()=>{this.overlay.classList.remove("puzzle-visible"),setTimeout(()=>{this.overlay.remove(),this.overlay=null},300),this.resolveCallback&&this.resolveCallback(e)})}}function xl(s){const e=Fn[s];return e?`trait-${e.color}`:""}class c_{constructor(e){this.inventory=e,this.el=document.querySelector("#tab-crafting"),this.selectedRecipeId=null,this.selectedMaterials={},this.expandedSlot=null,this.recipeFilter="all",this.craftableOnly=!1}render(){const e=Object.entries(en).filter(([,o])=>o.unlocked),t={all:0,equipment:0,consumable:0,accessory:0};e.forEach(([,o])=>{const l=tt[o.targetId];l&&(t.all++,t[l.type]!==void 0&&t[l.type]++)});let n=e;this.recipeFilter!=="all"&&(n=n.filter(([,o])=>{const l=tt[o.targetId];return l&&l.type===this.recipeFilter})),this.craftableOnly&&(n=n.filter(([,o])=>this._canCraft(o)));const i=n.map(([o,l])=>{const c=tt[l.targetId];if(!c)return"";const d=this.selectedRecipeId===o,h=this._canCraft(l),f=pn(c.type),p=c.image?kt(c.image):null,_=p?`<div class="craft-rcard-img"><img src="${p}" alt="${c.name}" /></div>`:`<div class="craft-rcard-img craft-rcard-img-placeholder"><span>${f.emoji}</span></div>`,g={};l.materials.forEach(u=>{g[u]=(g[u]||0)+1});const m=Object.entries(g).map(([u,E])=>{var A;const M=this.inventory.getItemsByBlueprint(u).length,b=M>=E,C=((A=tt[u])==null?void 0:A.name)??u;return`<span class="craft-mat-badge ${b?"ok":"ng"}">${C} ${M}/${E}</span>`}).join("");return`
        <div class="craft-rcard ${d?"craft-rcard-selected":""} ${h?"":"craft-rcard-disabled"}" data-recipe-id="${o}">
          ${_}
          <div class="craft-rcard-body">
            <span class="craft-rcard-name">${c.name}</span>
            <span class="craft-rcard-meta">${f.icon} ${c.baseValue}G</span>
            <div class="craft-rcard-mats">${m}</div>
          </div>
        </div>
      `}).join(""),a=`
      <div class="craft-panel craft-panel-left">
        <div class="craft-panel-header">
          <h4>📖 レシピ一覧</h4>
          <span class="craft-recipe-count">${t.all}種</span>
        </div>
        <div class="shop-inv-filters">
          <button class="shop-filter-btn ${this.recipeFilter==="all"?"active":""}" data-craft-filter="all">すべて <span class="shop-filter-count">${t.all}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="equipment"?"active":""}" data-craft-filter="equipment">⚔️ 武具 <span class="shop-filter-count">${t.equipment}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="consumable"?"active":""}" data-craft-filter="consumable">🧪 消耗品 <span class="shop-filter-count">${t.consumable}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="accessory"?"active":""}" data-craft-filter="accessory">💎 アクセ <span class="shop-filter-count">${t.accessory}</span></button>
          <button class="shop-filter-btn craft-craftable-toggle ${this.craftableOnly?"active":""}" id="craft-toggle-craftable">✅ 作成可能のみ</button>
        </div>
        <div class="craft-recipe-grid">${i}</div>
      </div>
    `,r=`
      <div class="craft-panel craft-panel-right">
        <div class="craft-panel-header">
          <h4>⚒️ 調合ワークスペース</h4>
        </div>
        <div class="craft-workspace" id="craft-workspace">${this._renderWorkspace()}</div>
      </div>
    `;this.el.innerHTML=`
      <div class="craft-layout">
        <div class="craft-columns">${a}${r}</div>
      </div>
    `,this._bindEvents()}_canCraft(e){const t={};e.materials.forEach(n=>{t[n]=(t[n]||0)+1});for(const[n,i]of Object.entries(t))if(this.inventory.getItemsByBlueprint(n).length<i)return!1;return!0}_renderWorkspace(){if(!this.selectedRecipeId)return`
        <div class="crafting-empty-state">
          <div class="crafting-empty-icon">⚗️</div>
          <p>左のレシピ一覧から<br>作りたいアイテムを選択してください</p>
        </div>`;const e=en[this.selectedRecipeId];if(!e||!e.unlocked)return this.selectedRecipeId=null,"<p>レシピを選択してください</p>";const t=tt[e.targetId],n=[];e.materials.forEach((l,c)=>{n.push({matId:l,slotKey:`${l}_${c}`})});let i=`
      <div class="crafting-header">
        <h4>⚒️ ${t.name}</h4>
        <span class="crafting-header-type">${pn(t.type).icon} ${pn(t.type).label}</span>
      </div>
      <div class="crafting-section-label">素材を選択</div>
      <div class="crafting-slots">
    `;const a=[],r=new Set;let o=!0;for(const l of n){const d=this.inventory.getItemsByBlueprint(l.matId).sort((u,E)=>E.quality-u.quality).filter(u=>!r.has(u.uid)||this.selectedMaterials[l.slotKey]===u.uid),h=tt[l.matId].name,f=d.length>0;let p=this.selectedMaterials[l.slotKey];if(!d.find(u=>u.uid===p)&&f&&(p=d[0].uid,this.selectedMaterials[l.slotKey]=p),p){r.add(p);const u=d.find(E=>E.uid===p);u&&a.push(u)}const g=this.expandedSlot===l.slotKey,m=!!p&&!!d.find(u=>u.uid===p);if(m||(o=!1),!f){i+=`
          <div class="craft-slot craft-slot-empty">
            <div class="craft-slot-label">${h}</div>
            <div class="craft-slot-placeholder craft-slot-missing">
              <span class="craft-slot-missing-icon">✖</span>
              <span>素材不足</span>
            </div>
          </div>
        `,o=!1;continue}if(m){const u=d.find(C=>C.uid===p),E=vn(u.quality),M=pn(u.type),b=u.traits.map(C=>`<span class="trait-badge ${xl(C)}">${C}</span>`).join("");i+=`
          <div class="craft-slot craft-slot-filled ${E.css}" data-slot="${l.slotKey}">
            <div class="craft-slot-label">${h} <span class="craft-slot-change">変更 ▾</span></div>
            <div class="craft-slot-card">
              <div class="craft-slot-card-icon">${M.emoji}</div>
              <div class="craft-slot-card-info">
                <div class="craft-slot-card-name">${u.name}</div>
                <div class="craft-slot-card-quality">${E.icon} Q: ${u.quality} <span class="craft-slot-tier">${E.name}</span></div>
                <div class="craft-slot-card-traits">${b||'<span class="text-dim">特性なし</span>'}</div>
              </div>
            </div>
          </div>
        `}else i+=`
          <div class="craft-slot craft-slot-unfilled" data-slot="${l.slotKey}">
            <div class="craft-slot-label">${h}</div>
            <div class="craft-slot-placeholder">
              <span class="craft-slot-placeholder-icon">＋</span>
              <span>クリックで素材を選択 (${d.length}個)</span>
            </div>
          </div>
        `;if(g){i+='<div class="craft-slot-candidates">';for(const u of d){const E=vn(u.quality),M=pn(u.type),b=u.uid===p,C=u.traits.map(A=>`<span class="trait-badge ${xl(A)}">${A}</span>`).join("");i+=`
            <div class="craft-candidate-card ${E.css} ${b?"craft-candidate-selected":""}" data-slot="${l.slotKey}" data-uid="${u.uid}">
              <div class="craft-candidate-icon">${M.emoji}</div>
              <div class="craft-candidate-body">
                <div class="craft-candidate-header">
                  <span class="craft-candidate-name">${u.name}</span>
                  <span class="craft-candidate-quality">${E.icon} Q: ${u.quality}</span>
                </div>
                <div class="item-quality-bar"><div class="item-quality-fill" style="width:${u.quality}%"></div></div>
                <div class="craft-candidate-traits">${C||'<span class="text-dim">特性なし</span>'}</div>
              </div>
              ${b?'<div class="craft-candidate-check">✓</div>':""}
            </div>
          `}i+="</div>"}}if(i+="</div>",o&&a.length===n.length){const l=Math.floor(a.reduce((_,g)=>_+g.quality,0)/a.length),c=new Set;a.forEach(_=>_.traits.forEach(g=>c.add(g)));const d=Array.from(c).slice(0,Fe.maxTraitSlots),h=Math.floor(t.baseValue*(1+l/100)),f=vn(l),p=pn(t.type);i+=`
        <div class="crafting-preview">
          <div class="crafting-section-label">完成予測</div>
          <div class="crafting-preview-card ${f.css}">
            <div class="craft-preview-icon">${p.emoji}</div>
            <div class="craft-preview-info">
              <div class="craft-preview-name">${t.name}</div>
              <div class="craft-preview-quality">${f.icon} Q ≈ ${l} <span class="craft-slot-tier">${f.name}</span></div>
              <div class="item-quality-bar"><div class="item-quality-fill" style="width:${l}%"></div></div>
              <div class="craft-preview-traits">
                ${d.map(_=>{const g=Fn[_];return`<span class="trait-badge ${g?`trait-${g.color}`:""}">${_}</span>`}).join("")||'<span class="text-dim">特性なし</span>'}
              </div>
              <div class="craft-preview-value">💰 推定売値: ${h}G</div>
            </div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `}else if(!o&&n.length>0){const l=a.length;i+=`
        <div class="crafting-progress-hint">
          <span>素材: ${l} / ${n.length} 選択済み</span>
        </div>
      `}return i}_bindEvents(){this.el.querySelectorAll(".craft-rcard").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.recipeId;this.selectedRecipeId!==n&&(this.selectedRecipeId=n,this.selectedMaterials={},this.expandedSlot=null,this.render())})}),this.el.querySelectorAll("[data-craft-filter]").forEach(t=>{t.addEventListener("click",n=>{this.recipeFilter=n.currentTarget.dataset.craftFilter,this.render()})});const e=document.getElementById("craft-toggle-craftable");e&&e.addEventListener("click",()=>{this.craftableOnly=!this.craftableOnly,this.render()}),this._bindWorkspaceEvents()}_bindWorkspaceEvents(){const e=document.getElementById("craft-workspace");if(!e)return;const t=this.selectedRecipeId?en[this.selectedRecipeId]:null;if(!t)return;const n=tt[t.targetId],i=t.materials.map((c,d)=>({matId:c,slotKey:`${c}_${d}`})),a=[],r=new Set;for(const c of i){const d=this.selectedMaterials[c.slotKey];if(d){const h=this.inventory.getItemsByBlueprint(c.matId).find(f=>f.uid===d);h&&(a.push(h),r.add(d))}}e.querySelectorAll(".craft-slot-filled, .craft-slot-unfilled").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.slot;this.expandedSlot=this.expandedSlot===d?null:d,e.innerHTML=this._renderWorkspace(),this._bindWorkspaceEvents()})}),e.querySelectorAll(".craft-candidate-card").forEach(c=>{c.addEventListener("click",d=>{d.stopPropagation();const h=c.dataset.slot,f=c.dataset.uid;this.selectedMaterials[h]=f,this.expandedSlot=null,e.innerHTML=this._renderWorkspace(),this._bindWorkspaceEvents()})});const o=document.getElementById("btn-do-craft");o&&o.addEventListener("click",()=>{this._executeCrafting(this.selectedRecipeId,a)});const l=document.getElementById("btn-puzzle-craft");l&&l.addEventListener("click",()=>{this._executePuzzleCrafting(this.selectedRecipeId,a,n.name)})}async _executeCrafting(e,t,n=0){const i=new Set;t.forEach(o=>o.traits.forEach(l=>i.add(l)));const a=Array.from(i).slice(0,Fe.maxTraitSlots),r=document.getElementById("craft-workspace");r&&(r.innerHTML=`
        <div class="crafting-loading">
          <div class="crafting-loading-icon">⚗️</div>
          <div class="crafting-loading-text">調合中...</div>
          <div class="crafting-loading-dots"><span></span><span></span><span></span></div>
        </div>
      `),await new Promise(o=>setTimeout(o,600));try{const o=Om(e,t,a,n);t.forEach(c=>this.inventory.removeItem(c.uid)),this.inventory.forceAddItem(o),N.emit("inventory:changed"),N.emit("item:crafted",{item:o}),this.selectedMaterials={},this.expandedSlot=null,this.render();const l=document.createElement("div");l.className="craft-flash",document.body.appendChild(l),requestAnimationFrame(()=>l.classList.add("fade-out")),setTimeout(()=>l.remove(),550),this._showCraftResult(o)}catch(o){console.error("[CraftingTab]",o)}}_showCraftResult(e){const t=vn(e.quality),n=tt[e.blueprintId],i=e.value||Math.floor(n.baseValue*(1+e.quality/100)),a=document.createElement("div");a.className="craft-result-overlay",a.innerHTML=`
      <div class="craft-result-modal">
        <div class="craft-result-sparkle">✨</div>
        <h3 class="craft-result-title">調合成功！</h3>
        <div class="craft-result-card">
          ${rc(e)}
        </div>
        <div class="craft-result-stats">
          <span class="craft-result-quality ${t.css}">品質: ${t.icon} ${e.quality}</span>
          <span class="craft-result-value">💰 ${i.toLocaleString("ja-JP")}G</span>
        </div>
        <button class="btn primary craft-result-close">OK</button>
      </div>
    `,document.body.appendChild(a);const r=()=>{a.classList.add("craft-result-fade-out"),setTimeout(()=>a.remove(),300)};a.querySelector(".craft-result-close").addEventListener("click",r),a.addEventListener("click",o=>{o.target===a&&r()})}async _executePuzzleCrafting(e,t,n){N.emit("game:pause");const a=await new l_().start(n);N.emit("game:resume"),this._executeCrafting(e,t,a.bonus)}}const d_={material:"🪨",equipment:"⚔️",consumable:"🧪",accessory:"💎"};class u_{constructor(e,t,n){this.inventory=e,this.shop=t,this.customers=n,this.el=document.querySelector("#tab-shop"),this.shopFilter="craftable"}render(){const e=this.customers?this.customers.getActiveCustomers():[],t=this.shop.displayedItems,n=this.shop.maxSlots;let i="";e.length>0&&(i=`<div class="shop-customer-bar"><span class="shop-cust-label">🔔 来店中</span>${e.map(g=>{const m=Math.max(0,g.timer/g.maxTimer*100),u=g.demandTypes.map(E=>d_[E]||E).join("");return`
          <div class="shop-cust-chip" data-customer-id="${g.id}">
            <span class="shop-cust-icon">${g.icon}</span>
            <span class="shop-cust-name">${g.name}</span>
            <span class="shop-cust-wants">${u}</span>
            <div class="shop-cust-bar"><div class="shop-cust-bar-fill" data-customer-bar="${g.id}" style="width:${m}%"></div></div>
          </div>
        `}).join("")}</div>`);let a="";a+=t.map(_=>s_(_)).join("");for(let _=t.length;_<n;_++)a+='<div class="shop-shelf-slot shop-shelf-empty"><span class="shop-shelf-empty-icon">＋</span><span class="shop-shelf-empty-text">空きスロット</span></div>';const r=`
      <div class="shop-panel shop-panel-left">
        <div class="shop-panel-header">
          <h4>📋 陳列棚</h4>
          <span class="shop-shelf-count">${t.length} / ${n}</span>
        </div>
        <div class="shop-shelf-grid">${a}</div>
        ${t.length>0?'<p class="shop-shelf-hint">クリックで取り下げ</p>':""}
      </div>
    `,o=this.inventory.getItems(),l=o.filter(_=>_.type!=="material"),c=o.filter(_=>_.type==="material");let d;this.shopFilter==="craftable"?d=l:this.shopFilter==="material"?d=c:d=o,d=[...d].sort((_,g)=>g.quality-_.quality);let h="";d.length>0?h=`<div class="item-grid shop-inv-grid">${d.map(_=>i_(_)).join("")}</div>`:o.length===0?h='<div class="shop-inv-empty"><span>📦</span><span>倉庫にアイテムがありません</span></div>':h='<div class="shop-inv-empty"><span>🔍</span><span>該当するアイテムがありません</span></div>';const f=t.length>=n,p=`
      <div class="shop-panel shop-panel-right">
        <div class="shop-panel-header">
          <h4>📦 倉庫から陳列</h4>
          ${f?'<span class="shop-shelf-full-badge">棚がいっぱい</span>':""}
        </div>
        <div class="shop-inv-filters">
          <button class="shop-filter-btn ${this.shopFilter==="craftable"?"active":""}" data-shop-filter="craftable">⚔️ クラフト品 <span class="shop-filter-count">${l.length}</span></button>
          <button class="shop-filter-btn ${this.shopFilter==="material"?"active":""}" data-shop-filter="material">🪨 素材 <span class="shop-filter-count">${c.length}</span></button>
          <button class="shop-filter-btn ${this.shopFilter==="all"?"active":""}" data-shop-filter="all">すべて <span class="shop-filter-count">${o.length}</span></button>
        </div>
        <div class="shop-inv-scroll ${f?"shop-inv-disabled":""}">${h}</div>
      </div>
    `;this.el.innerHTML=`
      <div class="shop-layout">
        ${i}
        <div class="shop-columns">${r}${p}</div>
      </div>
    `,this._bindEvents()}_bindEvents(){this.el.querySelectorAll(".shop-displayable-card").forEach(e=>{e.addEventListener("click",()=>{if(this.shop.displayedItems.length>=this.shop.maxSlots)return;const t=e.getAttribute("data-uid");this.shop.displayItem(t),N.emit("inventory:changed"),N.emit("item:displayed"),this.render()})}),this.el.querySelectorAll(".displayed-glow").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",()=>{const t=e.dataset.uid;t&&(this.shop.removeDisplayedItem(t),N.emit("inventory:changed"),N.emit("item:removed"),this.render())})}),this.el.querySelectorAll(".shop-filter-btn").forEach(e=>{e.addEventListener("click",t=>{this.shopFilter=t.currentTarget.dataset.shopFilter,this.render()})})}updateCustomerTimers(){(this.customers?this.customers.getActiveCustomers():[]).forEach(t=>{const n=this.el.querySelector(`[data-customer-bar="${t.id}"]`);n&&(n.style.width=`${Math.max(0,t.timer/t.maxTimer*100)}%`)})}}class h_{constructor(e,t){this.adventurers=e,this.inventory=t,this.el=document.querySelector("#tab-dispatch")}render(){const e=this.adventurers.getUnlockedAreas(),t=this.adventurers.getAdventurers(),n={};t.forEach(l=>{l.assignedArea&&(n[l.assignedArea]=(n[l.assignedArea]||0)+1)});const i=e.map(l=>{const d=(l.dropTable||[]).sort((f,p)=>p.weight-f.weight).slice(0,5).map(f=>{const p=tt[f.blueprintId];return p?p.name:f.blueprintId}).join("、"),h=n[l.id]||0;return`
        <div class="disp-area-card">
          <div class="disp-area-header">
            <span class="disp-area-icon">${l.icon}</span>
            <span class="disp-area-name">${l.name}</span>
            ${h>0?`<span class="disp-area-badge">👤×${h}</span>`:""}
          </div>
          <div class="disp-area-desc">${l.description||""}</div>
          <div class="disp-area-stats">
            <span class="disp-area-stat">💎 Q${l.qualityMin}〜${l.qualityMax}</span>
            <span class="disp-area-stat">⏱ ${l.baseTime}s</span>
            <span class="disp-area-stat disp-area-diff">☠${"★".repeat(l.difficulty||0)}${"☆".repeat(Math.max(0,4-(l.difficulty||0)))}</span>
          </div>
          <div class="disp-area-drops">📦 ${d}</div>
        </div>
      `}).join(""),a=`
      <div class="disp-panel disp-panel-left">
        <div class="disp-panel-header">
          <h4>🗺️ エリア一覧</h4>
          <span class="disp-area-count">${e.length}エリア</span>
        </div>
        <div class="disp-area-grid">${i}</div>
      </div>
    `,r=t.map(l=>{const c=l.status==="exploring",d=c&&l.maxTimer>0?Math.max(0,(1-l.timer/l.maxTimer)*100):0,h=gt[l.assignedArea],f=l.equipment.weapon,p=e.map(_=>`<button class="disp-area-btn ${l.assignedArea===_.id?"disp-area-btn-active":""}" data-adv-id="${l.id}" data-area-id="${_.id}" title="${_.name}">${_.icon}</button>`).join("");return`
        <div class="disp-adv-card">
          <div class="disp-adv-header">
            <div class="disp-adv-identity">
              <span class="disp-adv-icon">${l.icon}</span>
              <span class="disp-adv-name">${l.name}</span>
              <span class="disp-adv-level">Lv.${l.level}</span>
            </div>
            <span class="disp-adv-status ${c?"disp-status-exploring":""}" data-adv-id="${l.id}">
              ${c?"🚶 探索中":"☕ 準備中"}
            </span>
          </div>

          <div class="disp-adv-exp">
            <div class="disp-exp-bar"><div class="disp-exp-fill" style="width:${this._expPct(l)}%"></div></div>
            <span class="disp-exp-text">EXP ${l.exp}/${ts[l.level]||"—"}</span>
          </div>

          <div class="disp-adv-progress">
            <div class="progress-bar-container">
              <div class="progress-bar-fill" data-adv-progress="${l.id}" style="width:${d}%"></div>
            </div>
          </div>

          <div class="disp-adv-info">
            <div class="disp-adv-area">
              <span class="disp-info-label">探索先:</span>
              <span class="disp-info-value">${h?`${h.icon} ${h.name}`:"未設定"}</span>
              ${h?`<span class="disp-time-hint">${this._calcTimeText(l,h)}</span>`:""}
            </div>
            ${h?this._renderSuccessRate(l,h):""}
          </div>

          <div class="disp-equip-slot" data-adv-id="${l.id}">
            ${this._renderEquipSlot(f)}
          </div>
          ${f&&f.traits&&f.traits.length>0?this._renderTraitEffects(f):""}

          <div class="disp-area-select">
            ${p}
          </div>
        </div>
      `}).join(""),o=`
      <div class="disp-panel disp-panel-right">
        <div class="disp-panel-header">
          <h4>👥 冒険者</h4>
          <span class="disp-adv-count">${t.length}人</span>
        </div>
        <div class="disp-adv-list">${r}</div>
      </div>
    `;this.el.innerHTML=`
      <div class="disp-layout">
        <p class="text-dim disp-description">冒険者は割り当てられたエリアを自動で繰り返し探索します。レベルが上がると探索が速くなります。</p>
        <div class="disp-columns">${a}${o}</div>
      </div>
    `,this._bindEvents()}_bindEvents(){this.el.querySelectorAll(".disp-area-btn").forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget.dataset.advId,i=t.currentTarget.dataset.areaId;this.adventurers.assignArea(n,i),this.render()})}),this.el.querySelectorAll(".disp-equip-slot").forEach(e=>{e.addEventListener("click",t=>{const n=e.dataset.advId;this._showEquipmentPanel(n)})})}_expPct(e){const t=ts[e.level];if(!t)return 100;const n=ts[e.level-1]||0;return Math.min(100,(e.exp-n)/(t-n)*100)}_renderSuccessRate(e,t){const n=this.adventurers.calcSuccessRate(e,t);let i="disp-rate-low";return n>=70?i="disp-rate-high":n>=40&&(i="disp-rate-mid"),`
      <div class="disp-success-bar-wrap" title="探索成功率: ${n}%">
        <div class="disp-success-bar-fill ${i}" style="width:${n}%"></div>
        <span class="disp-success-bar-label">🎯 ${n}%</span>
      </div>
    `}_renderTraitEffects(e){return`<div class="disp-trait-row">${e.traits.map(n=>{const i=Fn[n];return i?`<span class="trait-badge ${`trait-rarity-${i.rarity||"common"}`}" title="${i.description}">${n}</span>`:""}).join("")}</div>`}_calcTimeText(e,t){const n=1-(e.level-1)*Ys.timeReduction,i=Math.max(8,Math.ceil(t.baseTime*(e.exploreTimeMultiplier||1)*n));return i<=12?"とても速い":i<=20?"速い":i<=35?"ふつう":i<=55?"やや遅い":"ゆっくり"}_renderEquipSlot(e){if(!e)return`
        <div class="disp-equip-empty">
          <span class="disp-equip-empty-icon">＋</span>
          <span class="disp-equip-empty-text">装備なし — クリックで装備</span>
        </div>
      `;const t=tt[e.blueprintId],n=vn(e.quality),i=t&&t.image?kt(t.image):null,a=i?`<img class="disp-equip-img" src="${i}" alt="${e.name}" />`:'<span class="disp-equip-emoji">⚔️</span>';return`
      <div class="disp-equip-item ${n.css}">
        ${a}
        <div class="disp-equip-info">
          <span class="disp-equip-name">${e.name}</span>
          <span class="disp-equip-quality" style="color:${n.color}">${n.icon} Q${e.quality}</span>
        </div>
        <span class="disp-equip-change">変更 ▾</span>
      </div>
    `}_showEquipmentPanel(e){var o;const t=this.adventurers.getAdventurers().find(l=>l.id===e);if(!t)return;const n=this.inventory.getItems().filter(l=>l.type==="equipment").sort((l,c)=>c.quality-l.quality);let i="";t.equipment.weapon&&(i+=`<button class="disp-equip-option disp-equip-unequip" data-adv-id="${e}">❌ 装備を外す</button>`),n.length===0&&!t.equipment.weapon?i='<p class="text-dim" style="padding:12px;text-align:center;">装備可能なアイテムがありません</p>':n.forEach(l=>{const c=tt[l.blueprintId],d=vn(l.quality),h=c&&c.image?kt(c.image):null,f=h?`<img class="disp-equip-opt-img" src="${h}" alt="${l.name}" />`:'<span class="disp-equip-opt-emoji">⚔️</span>';i+=`
          <button class="disp-equip-option ${d.css}" data-adv-id="${e}" data-uid="${l.uid}">
            ${f}
            <div class="disp-equip-opt-info">
              <span class="disp-equip-opt-name">${l.name}</span>
              <span class="disp-equip-opt-quality" style="color:${d.color}">${d.icon} Q${l.quality}</span>
            </div>
          </button>
        `});const a=`
      <div class="disp-equip-panel">
        <div class="disp-equip-panel-header">
          <h4>⚔️ 装備選択 — ${t.name}</h4>
          <button class="disp-equip-panel-close">✕</button>
        </div>
        <div class="disp-equip-panel-list">${i}</div>
      </div>
    `,r=document.createElement("div");r.className="disp-equip-overlay",r.innerHTML=a,this.el.appendChild(r),r.querySelectorAll(".disp-equip-option[data-uid]").forEach(l=>{l.addEventListener("click",c=>{this.adventurers.equipWeapon(c.currentTarget.dataset.advId,c.currentTarget.dataset.uid),r.remove(),this.render()})}),r.querySelectorAll(".disp-equip-unequip").forEach(l=>{l.addEventListener("click",c=>{this.adventurers.unequipWeapon(c.currentTarget.dataset.advId),r.remove(),this.render()})}),(o=r.querySelector(".disp-equip-panel-close"))==null||o.addEventListener("click",()=>r.remove()),r.addEventListener("click",l=>{l.target===r&&r.remove()})}updateTimers(){const e=this.adventurers.getAdventurers();this.el.querySelectorAll(".disp-adv-status").forEach(t=>{const n=t.getAttribute("data-adv-id"),i=e.find(a=>a.id===n);i&&(i.status==="exploring"&&i.timer<3?t.textContent="🏠 帰還中...":t.textContent=i.status==="idle"?"☕ 準備中":"🚶 探索中")}),this.el.querySelectorAll(".progress-bar-fill").forEach(t=>{const n=t.getAttribute("data-adv-progress"),i=e.find(a=>a.id===n);if(i&&i.status==="exploring"&&i.maxTimer>0){const a=Math.max(0,(1-i.timer/i.maxTimer)*100);t.style.width=`${a}%`}})}}class f_{constructor(e,t){this.dayCycle=e,this.reputation=t}render(){const e=document.getElementById("tab-stats");if(!e)return;const t=Nn,n=t.getAverageDailySales(7),i=t.totalCustomersServed+t.totalCustomersLost>0?Math.round(t.totalCustomersServed/(t.totalCustomersServed+t.totalCustomersLost)*100):0;e.innerHTML=`
      <h2 class="section-title">📊 経営ダッシュボード</h2>

      <div class="stats-grid">
        <div class="stats-card stats-card-gold">
          <div class="stats-card-icon">🪙</div>
          <div class="stats-card-value">${t.totalGoldEarned}G</div>
          <div class="stats-card-label">累計売上</div>
        </div>
        <div class="stats-card stats-card-items">
          <div class="stats-card-icon">📦</div>
          <div class="stats-card-value">${t.totalItemsSold}</div>
          <div class="stats-card-label">販売数</div>
        </div>
        <div class="stats-card stats-card-craft">
          <div class="stats-card-icon">⚒️</div>
          <div class="stats-card-value">${t.totalItemsCrafted}</div>
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
          <canvas id="stats-chart" height="160"></canvas>
        </div>
        <div class="stats-avg">直近7日平均: <strong>${n}G</strong> / 日</div>
      </div>

      <div class="stats-two-col">
        <div class="stats-section">
          <h3 class="stats-section-title">🏷️ カテゴリ別売上</h3>
          <div class="stats-category-list">
            ${this._renderCategoryBars(t)}
          </div>
        </div>

        <div class="stats-section">
          <h3 class="stats-section-title">🏆 実績</h3>
          <div class="stats-achievements">
            ${this._renderAchievements(t)}
          </div>
        </div>
      </div>
    `,this._drawChart(t.dailySales)}_renderCategoryBars(e){const t=[{key:"equipment",name:"装備",icon:"⚔️",color:"#e8b84b"},{key:"consumable",name:"消耗品",icon:"🧪",color:"#7bc96f"},{key:"accessory",name:"アクセ",icon:"💎",color:"#6bb5e8"},{key:"material",name:"素材",icon:"🪨",color:"#a08060"}],n=Object.values(e.salesByType).reduce((i,a)=>i+a,0)||1;return t.map(i=>{const a=e.salesByType[i.key]||0,r=Math.round(a/n*100);return`
        <div class="stats-category-row">
          <span class="stats-cat-label">${i.icon} ${i.name}</span>
          <div class="stats-cat-bar">
            <div class="stats-cat-fill" style="width:${r}%; background:${i.color}"></div>
          </div>
          <span class="stats-cat-value">${a}G (${r}%)</span>
        </div>
      `}).join("")}_renderAchievements(e){return[{name:"初めての販売",check:e.totalItemsSold>=1,icon:"🎯"},{name:"10個販売",check:e.totalItemsSold>=10,icon:"📦"},{name:"50個販売",check:e.totalItemsSold>=50,icon:"🏬"},{name:"初めてのパズル",check:e.totalPuzzlesPlayed>=1,icon:"🧩"},{name:"パズルマスター",check:e.bestPuzzleScore>=500,icon:"🌟"},{name:"接客率80%以上",check:e.totalCustomersServed/Math.max(1,e.totalCustomersServed+e.totalCustomersLost)>=.8,icon:"💫"},{name:"累計売上1000G",check:e.totalGoldEarned>=1e3,icon:"💰"},{name:"累計売上5000G",check:e.totalGoldEarned>=5e3,icon:"👑"}].map(n=>`
      <div class="stats-achievement ${n.check?"achieved":""}">
        <span class="stats-ach-icon">${n.icon}</span>
        <span class="stats-ach-name">${n.name}</span>
        ${n.check?'<span class="stats-ach-done">✓</span>':""}
      </div>
    `).join("")}_drawChart(e){const t=document.getElementById("stats-chart");if(!t)return;const n=t.getContext("2d"),i=t.parentElement;i&&(t.width=i.clientWidth);const a=t.width,r=t.height,o={top:10,right:10,bottom:25,left:40},l=a-o.left-o.right,c=r-o.top-o.bottom;if(n.clearRect(0,0,a,r),e.length===0){n.fillStyle="rgba(200,180,140,0.3)",n.font="13px sans-serif",n.textAlign="center",n.fillText("データなし — 1日目が完了すると表示されます",a/2,r/2);return}const d=Math.max(...e,1),h=Math.min(30,l/e.length-2),f=(l-h*e.length)/(e.length+1);n.strokeStyle="rgba(200,180,140,0.15)",n.lineWidth=1;for(let _=0;_<=4;_++){const g=o.top+c*(1-_/4);n.beginPath(),n.moveTo(o.left,g),n.lineTo(a-o.right,g),n.stroke(),n.fillStyle="rgba(200,180,140,0.4)",n.font="9px sans-serif",n.textAlign="right",n.fillText(`${Math.round(d*_/4)}`,o.left-4,g+3)}const p=n.createLinearGradient(0,o.top,0,r-o.bottom);p.addColorStop(0,"#e8b84b"),p.addColorStop(1,"#a07830"),e.forEach((_,g)=>{const m=o.left+f+g*(h+f),u=_/d*c,E=o.top+c-u;n.fillStyle=p,n.beginPath(),n.roundRect(m,E,h,u,[3,3,0,0]),n.fill(),n.fillStyle="rgba(200,180,140,0.5)",n.font="8px sans-serif",n.textAlign="center",n.fillText(`${g+1}日`,m+h/2,r-5)})}}const bl={rank2:[{id:"q2_sell_3",name:"初めての商売",description:"商品を3個売る",conditionType:"sell_count",target:3,icon:"💰"},{id:"q2_craft_3",name:"調合入門",description:"アイテムを3個調合する",conditionType:"craft_count",target:3,icon:"🔨"},{id:"q2_explore_2",name:"冒険の始まり",description:"探索を2回完了する",conditionType:"explore_count",target:2,icon:"🗺️"}],rank3:[{id:"q3_quality_50",name:"品質へのこだわり",description:"品質50以上のアイテムを調合する",conditionType:"craft_quality",target:50,icon:"⭐"},{id:"q3_daily_100",name:"一日百金",description:"1日の売上100Gを達成する",conditionType:"daily_sales",target:100,icon:"📈"},{id:"q3_cave_3",name:"洞窟探検家",description:"洞窟を3回探索する",conditionType:"explore_area",target:3,targetArea:"cave",icon:"⛏️"}],rank4:[{id:"q4_serve_noble",name:"貴族のお気に入り",description:"貴族に商品を売る",conditionType:"serve_customer",target:1,targetCustomer:"noble",icon:"👑"},{id:"q4_trait_5",name:"特性マスター",description:"特性付きアイテムを5個調合する",conditionType:"craft_with_trait",target:5,icon:"✨"},{id:"q4_sell_equip_8",name:"武器商人",description:"装備品を8個売る",conditionType:"sell_type",target:8,targetType:"equipment",icon:"⚔️"}],rank5:[{id:"q5_quality_70",name:"匠の技",description:"品質70以上のアイテムを調合する",conditionType:"craft_quality",target:70,icon:"🏅"},{id:"q5_sell_10k",name:"一万金の壁",description:"累計売上10,000Gを達成する",conditionType:"total_sales",target:1e4,icon:"💎"},{id:"q5_explore_forest",name:"森の守護者",description:"妖精の森を5回探索する",conditionType:"explore_area",target:5,targetArea:"forest",icon:"🌲"}],rank6:[{id:"q6_customers_20",name:"人気店の証",description:"お客様を20人接客する",conditionType:"total_customers",target:20,icon:"🤝"},{id:"q6_craft_30",name:"熟練の調合師",description:"アイテムを30個調合する",conditionType:"craft_count",target:30,icon:"🔬"},{id:"q6_daily_300",name:"三百金の日",description:"1日の売上300Gを達成する",conditionType:"daily_sales",target:300,icon:"📊"},{id:"q6_sell_consumable",name:"薬師の道",description:"消耗品を12個売る",conditionType:"sell_type",target:12,targetType:"consumable",icon:"🧪"}],rank7:[{id:"q7_quality_85",name:"至高の品質",description:"品質85以上のアイテムを調合する",conditionType:"craft_quality",target:85,icon:"👑"},{id:"q7_explore_dragon",name:"竜狩り",description:"竜の巣を3回探索する",conditionType:"explore_area",target:3,targetArea:"dragon_nest",icon:"🐉"},{id:"q7_sell_acc_5",name:"宝飾品鑑定士",description:"アクセサリーを5個売る",conditionType:"sell_type",target:5,targetType:"accessory",icon:"💍"},{id:"q7_upgrades_10",name:"設備投資家",description:"アップグレードを10個購入する",conditionType:"upgrade_count",target:10,icon:"🏗️"}],rank8:[{id:"q8_quality_95",name:"伝説の調合",description:"品質95以上のアイテムを調合する",conditionType:"craft_quality",target:95,icon:"🌟"},{id:"q8_sell_50k",name:"五万金の王",description:"累計売上50,000Gを達成する",conditionType:"total_sales",target:5e4,icon:"👸"},{id:"q8_explore_sky",name:"天空の覇者",description:"天空の塔を3回探索する",conditionType:"explore_area",target:3,targetArea:"sky_tower",icon:"☁️"},{id:"q8_serve_50",name:"百客万来",description:"お客様を50人接客する",conditionType:"total_customers",target:50,icon:"🏆"},{id:"q8_craft_trait_3",name:"究極の付呪",description:"特性3つ付きのアイテムを調合する",conditionType:"craft_max_traits",target:3,icon:"🔮"}]};class p_{constructor(e,t,n,i){this.inventory=e,this.shop=t,this.dayCycle=n,this.quest=i}render(){const e=document.getElementById("section-upgrade");if(!e)return;const t=this.dayCycle.currentRankIndex+1,n=this.dayCycle.currentRankIndex+1,i=n<Fe.ranks.length?Fe.ranks[n]:null;let a="";this.dayCycle.rankBossAvailable&&i&&i.requiredBossId&&(a=`
        <div class="upgrade-boss-panel">
          <h3 class="upgrade-section-title" style="color: #ffcccc;">⚠️ 昇格試験に挑戦可能！</h3>
          <p style="margin-bottom: 1rem;">ランクアップ条件を満たしました。ボスを撃破して新しいランクとエリアを解放しましょう！</p>
          <button id="btn-challenge-boss" class="btn btn-boss-challenge">⚔️ ボスに挑戦する</button>
        </div>
      `);let r="";if(i&&this.quest){const h=this.quest.getQuestsForRank(i.rank),f=this.quest.getRequiredCount(i.rank),p=h.filter(_=>_.complete).length;h.length>0&&(r=`
          <div class="upgrade-quest-panel">
            <h3 class="upgrade-section-title">🗺️ ランク${i.rank}昇格クエスト <span class="quest-progress-badge">${p}/${f} 達成</span></h3>
            <div class="quest-list">
              ${h.map(_=>`
                <div class="quest-item ${_.complete?"quest-complete":""}">
                  <span class="quest-icon">${_.icon}</span>
                  <div class="quest-info">
                    <span class="quest-name">${_.name}</span>
                    <span class="quest-desc">${_.description}</span>
                  </div>
                  <div class="quest-counter">
                    <span class="quest-count">${Math.min(_.current,_.target)}/${_.target}</span>
                    ${_.complete?'<span class="quest-check">✅</span>':""}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `)}else i||(r='<div class="upgrade-quest-panel"><p class="quest-max">🏆 最高ランク達成！</p></div>');const o=Object.entries(Gm).sort((h,f)=>h[1].order-f[1].order);let l="";for(const[h,f]of o){const p=sc.filter(_=>_.category===h);p.length!==0&&(l+=`
        <div class="upgrade-category">
          <h3 class="upgrade-section-title">${f.name}</h3>
          <div class="upgrade-grid">
            ${p.map(_=>{const g=this.shop.isPurchased(_.id),m=this.inventory.gold>=_.cost,E=!(t>=_.requiredRank);let M="",b="";return g?(M="upgrade-purchased",b="購入済み"):E?(M="upgrade-locked",b=`Rank ${_.requiredRank} 必要`):m?(M="upgrade-available",b=`${_.cost}G`):(M="upgrade-expensive",b=`${_.cost}G`),`
                <div class="upgrade-card ${M}" data-id="${_.id}">
                  <div class="upgrade-card-icon">${_.icon}</div>
                  <div class="upgrade-card-body">
                    <span class="upgrade-card-name">${_.name}</span>
                    <span class="upgrade-card-desc">${_.description}</span>
                  </div>
                  <div class="upgrade-card-price">
                    ${g?"✅":E?"🔒":b}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `)}const c=`
      <div class="upgrade-capacity-bar">
        <span>📦 倉庫: ${this.inventory.items.length} / ${this.inventory.maxCapacity}</span>
        <span>🏪 販売棚: ${this.shop.displayedItems.length} / ${this.shop.maxSlots}</span>
      </div>
    `;e.innerHTML=c+a+r+l,e.querySelectorAll(".upgrade-available").forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.id;this.shop.purchaseUpgrade(f,t)&&(this.render(),N.emit("inventory:changed"))})});const d=e.querySelector("#btn-challenge-boss");d&&d.addEventListener("click",()=>{N.emit("battle:requestStart",{rankIndex:n,bossId:i.requiredBossId})})}}class no{constructor(){this.el=null,this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this._create(),document.body.appendChild(this.el),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.el.classList.add("settings-visible")})}))}close(){this.isOpen&&(this.isOpen=!1,this.el.classList.remove("settings-visible"),setTimeout(()=>{var e;(e=this.el)==null||e.remove(),this.el=null},300))}_create(){this.el=document.createElement("div"),this.el.className="settings-overlay",this.el.innerHTML=`
      <div class="settings-panel">
        <div class="settings-header">
          <h2 class="settings-title">⚙ 設定</h2>
          <button class="settings-close-btn" id="settings-close">✕</button>
        </div>
        <div class="settings-body">
          <div class="settings-section">
            <h3 class="settings-section-title">🔊 サウンド</h3>

            <div class="settings-row">
              <label class="settings-label" for="vol-master">マスター音量</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-master" class="settings-slider"
                  min="0" max="100" value="${Math.round(bt.masterVolume*100)}" />
                <span class="settings-slider-val" id="val-master">${Math.round(bt.masterVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-bgm">BGM</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-bgm" class="settings-slider"
                  min="0" max="100" value="${Math.round(bt.bgmVolume*100)}" />
                <span class="settings-slider-val" id="val-bgm">${Math.round(bt.bgmVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-se">効果音</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-se" class="settings-slider"
                  min="0" max="100" value="${Math.round(bt.seVolume*100)}" />
                <span class="settings-slider-val" id="val-se">${Math.round(bt.seVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label">ミュート</label>
              <button class="settings-toggle-btn ${bt.muted?"active":""}" id="btn-mute">
                ${bt.muted?"ON":"OFF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.el.querySelector("#settings-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",e=>{e.target===this.el&&this.close()}),this._bindSlider("vol-master","val-master",e=>bt.setMasterVolume(e/100)),this._bindSlider("vol-bgm","val-bgm",e=>bt.setBgmVolume(e/100)),this._bindSlider("vol-se","val-se",e=>bt.setSeVolume(e/100)),this.el.querySelector("#btn-mute").addEventListener("click",e=>{const t=bt.toggleMute();e.target.textContent=t?"ON":"OFF",e.target.classList.toggle("active",t)})}_bindSlider(e,t,n){const i=this.el.querySelector(`#${e}`),a=this.el.querySelector(`#${t}`);i.addEventListener("input",()=>{const r=parseInt(i.value);a.textContent=`${r}%`,n(r)})}static createGearButton(){const e=document.createElement("button");return e.className="settings-gear-btn",e.title="設定",e.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>`,e.addEventListener("click",()=>m_.toggle()),e}}const m_=new no,Zi=.25,Ji=.6,Qi=.8,__=15;class g_{constructor(e,t,n,i,a,r,o,l){this.inventory=e,this.shop=t,this.customer=i,this.dayCycle=a,this.events=r,this.reputation=o,this.quest=l,this.activeTab="tab-inventory",this._displayedGold=e.gold,this._targetGold=e.gold,this._lastDayProgressPct=-1,this._lastPaused=!1,this._lastDayBg="",this._cachedPauseText="",this._cachedGoldText="",this._lastTimePercent=-1,this._lastTimeTint="",this._updateScheduled=!1,this.elGold=document.getElementById("gold-value"),this.elDay=document.getElementById("day-value"),this.elRent=document.getElementById("rent-value"),this.elRank=document.getElementById("rank-value"),this.elDayProgress=document.getElementById("day-progress-fill"),this.elEventBanner=document.getElementById("event-banner"),this.elTabs=document.querySelectorAll(".tab-btn"),this.elSections=document.querySelectorAll(".content-section"),this._createRankProgressBar(),this.tabs={"tab-inventory":new a_(e),"tab-crafting":new c_(e),"tab-shop":new u_(e,t,i),"tab-dispatch":new h_(n,e),"tab-stats":new f_(a,o),"tab-upgrade":new p_(e,t,a,l)},this._unsubscribers=[N.on("item:sold",()=>this.updateAll()),N.on("adventurer:return",()=>this.updateAll()),N.on("inventory:changed",()=>this.updateAll()),N.on("gold:changed",()=>this._onGoldChanged()),N.on("day:newDay",()=>this.updateAll()),N.on("rank:up",()=>this.updateAll()),N.on("recipe:unlocked",()=>{this.activeTab==="tab-crafting"&&this.updateAll()}),N.on("customer:arrived",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),N.on("customer:left",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),N.on("customer:bought",()=>{this._updateCustomerBadge(),this.updateAll()}),N.on("reputation:changed",()=>this._updateStatusBar()),N.on("reputation:levelUp",c=>{N.emit("toast",{message:`⭐ 評判UP！「${c.name}」になりました！`,type:"success"})}),N.on("upgrade:purchased",()=>this.updateAll()),N.on("save:completed",()=>this._showSaveIndicator()),N.on("item:sold",c=>this._showSaleFloatingText(c)),N.on("rank:up",c=>this._showRankUpOverlay(c)),N.on("item:crafted",c=>this._onItemCrafted(c))],this._init()}update(e){if(this._updateDayProgressBar(),this._animateGold(e),this._updateTimeOfDayUI(),this.activeTab==="tab-dispatch"){const t=this.tabs["tab-dispatch"];t&&t.updateTimers&&t.updateTimers()}if(this.activeTab==="tab-shop"){const t=this.tabs["tab-shop"];t&&t.updateCustomerTimers&&t.updateCustomerTimers()}}updateAll(){this._updateScheduled||(this._updateScheduled=!0,requestAnimationFrame(()=>{this._updateScheduled=!1,this._updateStatusBar(),this._updateCustomerBadge();const e=this.tabs[this.activeTab];e&&e.render()}))}_init(){this.elTabs.forEach(t=>{t.addEventListener("click",n=>{const i=n.currentTarget.getAttribute("data-target");this._switchTab(i)})});const e=document.getElementById("skip-day-btn");e&&e.addEventListener("click",()=>{this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()}),this.updateAll(),N.emit("tab:switched",{tabId:this.activeTab}),this._addSettingsButton(),this._initKeyboardShortcuts(),this._initAmbientParticles()}_initAmbientParticles(){const e=document.createElement("div");e.className="ambient-particles",document.body.insertBefore(e,document.body.firstChild);for(let t=0;t<__;t++){const n=document.createElement("div");n.className="ambient-particle",n.style.left=`${Math.random()*100}%`,n.style.animationDuration=`${12+Math.random()*18}s`,n.style.animationDelay=`${Math.random()*15}s`,n.style.width=`${2+Math.random()*3}px`,n.style.height=n.style.width,e.appendChild(n)}}_addSettingsButton(){const e=document.querySelector(".status-bar");if(!e)return;const t=no.createGearButton();t.classList.add("game-gear-btn"),e.appendChild(t)}_switchTab(e){this.activeTab=e,this.elTabs.forEach(t=>{t.classList.toggle("active",t.getAttribute("data-target")===e)}),this.elSections.forEach(t=>{t.classList.toggle("active",t.id===e)}),this.updateAll(),N.emit("tab:switched",{tabId:e})}_onGoldChanged(){const e=this.inventory.gold,t=e-this._targetGold;if(this._targetGold=e,this._goldAnimTimer=0,this.elGold){const n=this.elGold.closest(".gold-display");n&&(t>0?(n.classList.add("gold-flash-up"),setTimeout(()=>n.classList.remove("gold-flash-up"),600)):t<0&&(n.classList.add("gold-flash-down"),setTimeout(()=>n.classList.remove("gold-flash-down"),600)))}}_animateGold(e){if(Math.abs(this._displayedGold-this._targetGold)<1)if(this._displayedGold!==this._targetGold)this._displayedGold=this._targetGold;else return;else{const t=Math.max(1,Math.abs(this._targetGold-this._displayedGold)*5);this._displayedGold<this._targetGold?this._displayedGold=Math.min(this._targetGold,this._displayedGold+t*e):this._displayedGold=Math.max(this._targetGold,this._displayedGold-t*e)}if(this.elGold){const t=this._formatGold(Math.round(this._displayedGold));this._cachedGoldText!==t&&(this._cachedGoldText=t,this.elGold.textContent=t)}}_formatGold(e){return e.toLocaleString("ja-JP")}_updateStatusBar(){if(this._targetGold=this.inventory.gold,this.dayCycle&&(this.elDay&&(this.elDay.textContent=`${this.dayCycle.day}日目`),this.elRent&&(this.elRent.textContent=`${this._formatGold(this.dayCycle.currentRent)}G`),this.elRank&&(this.elRank.textContent=this.dayCycle.currentRank.name),this._updateRankProgress()),this.reputation){const e=document.getElementById("reputation-value");if(e){const t=this.reputation.currentLevel;e.textContent=`${t.icon} ${t.name}`}}if(this.events&&this.elEventBanner){const e=this.events.getActiveEffects();e.length>0?(this.elEventBanner.innerHTML=e.map(t=>`<span class="event-badge">${t.icon} ${t.name}</span>`).join(""),this.elEventBanner.style.display="flex"):this.elEventBanner.style.display="none"}}_createRankProgressBar(){const e=document.querySelector(".status-item:has(#rank-value)");if(!e)return;const t=document.createElement("div");t.className="rank-progress-container",t.innerHTML=`
      <div class="rank-progress-bar">
        <div id="rank-progress-fill" class="rank-progress-fill"></div>
      </div>
      <span id="rank-progress-text" class="rank-progress-text"></span>
    `,e.appendChild(t),this.elRankProgress=document.getElementById("rank-progress-fill"),this.elRankProgressText=document.getElementById("rank-progress-text")}_updateRankProgress(){if(!this.elRankProgress||!this.dayCycle)return;const e=Fe.ranks,t=this.dayCycle.currentRankIndex;if(t>=e.length-1){this.elRankProgress.style.width="100%",this.elRankProgressText&&(this.elRankProgressText.textContent="MAX");return}const n=e[t].requiredSales,a=e[t+1].requiredSales-n,r=this.dayCycle.totalSales-n,o=Math.min(100,Math.max(0,r/a*100));this.elRankProgress.style.width=`${o}%`,this.elRankProgressText&&(this.elRankProgressText.textContent=`${this._formatGold(Math.floor(r))} / ${this._formatGold(a)}G`)}_updateCustomerBadge(){const e=document.querySelector('[data-target="tab-shop"]');if(!e)return;const t=e.querySelector(".tab-badge");t&&t.remove();const n=this.customer?this.customer.getActiveCustomers().length:0;if(n>0){const i=document.createElement("span");i.className="tab-badge",i.textContent=n,e.appendChild(i)}}_updateDayProgressBar(){if(!this.dayCycle||!this.elDayProgress)return;const e=Math.floor(this.dayCycle.dayProgress*100);if(this._lastDayProgressPct===e&&this._lastPaused===this.dayCycle.paused)return;this._lastDayProgressPct=e,this._lastPaused=this.dayCycle.paused,this.elDayProgress.style.width=`${e}%`;const t=e/100;let n="",i="";t<Zi?(n="linear-gradient(90deg, #27ae60, #2ecc71)",i="🌅 朝"):t<Ji?(n="linear-gradient(90deg, #2ecc71, #f1c40f)",i="☀️ 昼"):t<Qi?(n="linear-gradient(90deg, #f39c12, #e67e22)",i="🌇 夕方"):(n="linear-gradient(90deg, #e74c3c, #c0392b)",i="🌙 夜"),this._lastDayBg!==n&&(this.elDayProgress.style.background=n,this._lastDayBg=n);const a=document.getElementById("ap-label");if(a){const r=this.dayCycle.paused?"⏸ 調合中…":i;this._cachedPauseText!==r&&(this._cachedPauseText=r,a.textContent=r)}}_showSaveIndicator(){const e=document.querySelector(".save-indicator");e&&e.remove();const t=document.createElement("div");t.className="save-indicator",t.textContent="💾 保存しました",document.body.appendChild(t),setTimeout(()=>{t.classList.add("save-indicator-hide"),setTimeout(()=>t.remove(),500)},1500)}_showSaleFloatingText(e){var a;const t=(e==null?void 0:e.price)||((a=e==null?void 0:e.item)==null?void 0:a.value)||0;if(t<=0)return;const n=document.createElement("div");n.className="sale-floating-text",n.textContent=`+${t.toLocaleString("ja-JP")}G`;const i=document.querySelector(".gold-display");if(i){const r=i.getBoundingClientRect();n.style.left=`${r.left+r.width/2}px`,n.style.top=`${r.top}px`}else n.style.right="200px",n.style.top="40px";document.body.appendChild(n),setTimeout(()=>n.remove(),1500)}_showRankUpOverlay(e){const t=(e==null?void 0:e.rank)||"ランクアップ！",n=document.createElement("div");n.className="rankup-overlay",n.innerHTML=`
      <div class="rankup-confetti-layer"></div>
      <div class="rankup-content">
        <div class="rankup-icon">👑</div>
        <div class="rankup-label">ランクアップ！</div>
        <div class="rankup-name">${t}</div>
      </div>
    `,document.body.appendChild(n);const i=n.querySelector(".rankup-confetti-layer"),a=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff"];for(let r=0;r<60;r++){const o=document.createElement("div");o.className="rankup-confetti-particle",o.style.left=`${Math.random()*100}%`,o.style.backgroundColor=a[Math.floor(Math.random()*a.length)],o.style.animationDelay=`${Math.random()*2}s`,o.style.animationDuration=`${2+Math.random()*2}s`,o.style.width=`${4+Math.random()*6}px`,o.style.height=`${3+Math.random()*5}px`,i.appendChild(o)}setTimeout(()=>{n.classList.add("rankup-overlay-hide"),setTimeout(()=>n.remove(),600)},3e3)}_onItemCrafted(e){if(!(e!=null&&e.item))return;const t=e.item.quality;if(t>=81){const n=document.createElement("div");n.className="legendary-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),1200)}else if(t>=61){const n=document.createElement("div");n.className="excellent-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),800)}}_updateTimeOfDayUI(){if(!this.dayCycle)return;const e=Math.floor(this.dayCycle.dayTimer/this.dayCycle.dayDuration*100)/100;if(this._lastTimePercent===e)return;this._lastTimePercent=e;const t=document.documentElement;let n,i,a,r,o;if(e<Zi){const c=e/Zi;n=255,i=220,a=180,r=.03*c,o=`rgba(255, 200, 140, ${.08*c})`}else if(e<Ji){const c=(e-Zi)/(Ji-Zi);n=255,i=248,a=230,r=.03*(1-c),o="rgba(160, 132, 92, 0.08)"}else if(e<Qi){const c=(e-Ji)/(Qi-Ji);n=255,i=150,a=80,r=.04*c,o=`rgba(196, 122, 90, ${.12*c})`}else{const c=(e-Qi)/(1-Qi);n=30,i=40,a=80,r=.04*(.5+c*.5),o=`rgba(50, 60, 120, ${.08*c})`}const l=`rgba(${n}, ${i}, ${a}, ${r})`;this._lastTimeTint!==l&&(this._lastTimeTint=l,t.style.setProperty("--time-tint",l),t.style.setProperty("--time-border",o))}_initKeyboardShortcuts(){const e={1:"tab-inventory",2:"tab-crafting",3:"tab-shop",4:"tab-dispatch",5:"tab-upgrade",6:"tab-stats"};this._keyHandler=t=>{document.querySelector(".puzzle-overlay, .craft-result-overlay, .gameover-overlay, .title-overlay")||t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"||(e[t.key]&&(t.preventDefault(),this._switchTab(e[t.key])),t.code==="Space"&&(t.preventDefault(),this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()))},document.addEventListener("keydown",this._keyHandler)}dispose(){this._unsubscribers.forEach(e=>e()),this._keyHandler&&document.removeEventListener("keydown",this._keyHandler)}}const za=5;class v_{constructor(){this.container=document.createElement("div"),this.container.className="toast-container",document.body.appendChild(this.container),N.on("item:sold",e=>this.show(`${e.item.name} が ${e.price||e.item.value}G で売れました！`,"gold")),N.on("adventurer:return",e=>this._showAdventurerReturn(e)),N.on("day:newDay",e=>this.show(`${e.day}日目 — 維持費 ${e.rent}G を支払いました`,"default")),N.on("rank:up",e=>this.show(`🎉 ランクアップ！ ${e.rank}`,"special")),N.on("recipe:unlocked",e=>this.show(`📜 新レシピ解放: ${e.name}`,"green")),N.on("area:unlocked",e=>this.show(`🗺️ 新エリア解放: ${e.name}`,"green")),N.on("customer:arrived",e=>this.show(`${e.customer.icon} ${e.customer.name}が来店！「${e.customer.dialogue}」`,"default")),N.on("customer:left",e=>this.show(`${e.customer.name}は帰ってしまった…`,"red")),N.on("customer:bought",e=>this.show(`${e.customer.name}が ${e.item.name} を購入！`,"gold")),N.on("adventurer:levelUp",e=>this.show(`⬆️ ${e.adventurer.name} が Lv.${e.adventurer.level} になった！`,"special")),N.on("adventurer:joined",e=>this.show(`🆕 ${e.adventurer.name} が仲間に加わった！`,"special")),N.on("event:triggered",e=>this.show(`${e.icon} ${e.name}：${e.description}`,"special"))}_showAdventurerReturn(e){var l;const t=e.items||[],n=((l=e.adventurer)==null?void 0:l.name)||"冒険者",i=e.success!==!1,a=document.createElement("div");a.className="toast-text",i?a.textContent=`✅ ${n} が帰還！ ${t.length}個の素材を入手`:a.textContent=`❌ ${n} の探索失敗… 素材を入手できなかった`;const r=document.createElement("div");r.className="toast-item-icons";const o=Math.min(t.length,za);for(let c=0;c<o;c++){const d=t[c],h=tt[d.blueprintId],f=h==null?void 0:h.image,p=document.createElement("div");if(p.className="toast-item-icon",p.title=d.name,f){const _=document.createElement("img");_.src=kt(f),_.alt=d.name,_.loading="lazy",p.appendChild(_)}else p.textContent=(d.name||"?")[0];r.appendChild(p)}if(t.length>za){const c=document.createElement("div");c.className="toast-item-icon toast-item-more",c.textContent=`+${t.length-za}`,r.appendChild(c)}this.showHtml([a,r],i?"green":"red")}show(e,t="default"){const n=document.createElement("div");n.className=`toast toast-${t}`,n.textContent=e,this._present(n)}showHtml(e,t="default"){const n=document.createElement("div");n.className=`toast toast-${t}`;for(const i of e)n.appendChild(i);this._present(n)}_present(e){for(e.addEventListener("click",()=>this._dismiss(e)),this.container.appendChild(e),requestAnimationFrame(()=>e.classList.add("toast-show")),setTimeout(()=>this._dismiss(e),5e3);this.container.children.length>5;)this._dismiss(this.container.firstChild)}_dismiss(e){!e||!e.parentNode||(e.classList.add("toast-hide"),setTimeout(()=>e.remove(),300))}}class y_{constructor(){this.el=document.createElement("div"),this.el.className="gameover-overlay",this.el.style.display="none",document.body.appendChild(this.el),N.on("game:over",e=>this._showGameOver(e)),N.on("game:clear",e=>this._showGameClear(e))}_showGameOver(e){var t;this.el.innerHTML=`
      <div class="gameover-particles gameover-dark-particles"></div>
      <div class="gameover-box gameover-fail">
        <h2>💀 閉店…</h2>
        <p class="gameover-reason">${e.reason||"維持費を支払えませんでした…"}</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">営業日数</span>
            <span class="gameover-stat-value">${e.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${((t=e.totalSales)==null?void 0:t.toLocaleString("ja-JP"))||0}G</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">最終ランク</span>
            <span class="gameover-stat-value">${e.rank}</span>
          </div>
        </div>
        <button class="btn primary gameover-retry-btn" id="btn-retry">もう一度挑戦する</button>
      </div>
    `,this.el.style.display="flex",this._spawnParticles(".gameover-dark-particles",30,["#555","#777","#444","#666"],!0),document.getElementById("btn-retry").addEventListener("click",()=>{location.reload()})}_showGameClear(e){var n;this.el.innerHTML=`
      <div class="gameover-particles gameover-confetti-layer"></div>
      <div class="gameover-particles gameover-fireworks-layer"></div>
      <div class="gameover-box gameover-clear">
        <h2>🎉 おめでとう！</h2>
        <p class="gameover-reason">伝説のアイテム工房に到達しました！</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">達成日数</span>
            <span class="gameover-stat-value">${e.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${((n=e.totalSales)==null?void 0:n.toLocaleString("ja-JP"))||0}G</span>
          </div>
        </div>
        <p class="gameover-continue-msg">このまま経営を続けることもできます。</p>
        <div class="gameover-buttons">
          <button class="btn gameover-continue-btn" id="btn-continue">経営を続ける</button>
          <button class="btn primary gameover-retry-btn" id="btn-newgame">新しく始める</button>
        </div>
      </div>
    `,this.el.style.display="flex";const t=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff","#ffd700"];this._spawnParticles(".gameover-confetti-layer",80,t,!1),this._spawnFireworks(".gameover-fireworks-layer",30),document.getElementById("btn-continue").addEventListener("click",()=>{this.el.style.display="none"}),document.getElementById("btn-newgame").addEventListener("click",()=>{location.reload()})}_spawnParticles(e,t,n,i){const a=this.el.querySelector(e);if(a)for(let r=0;r<t;r++){const o=document.createElement("div");o.className=i?"gameover-dark-particle":"gameover-confetti-piece",o.style.left=`${Math.random()*100}%`,o.style.backgroundColor=n[Math.floor(Math.random()*n.length)],o.style.animationDelay=`${Math.random()*4}s`,o.style.animationDuration=`${2+Math.random()*3}s`,i||(o.style.width=`${4+Math.random()*8}px`,o.style.height=`${3+Math.random()*6}px`),a.appendChild(o)}}_spawnFireworks(e,t){const n=this.el.querySelector(e);if(!n)return;const i=["#e8b84b","#ff6b6b","#7daa68","#7ab0c4","#ff9955","#ffd700"];for(let a=0;a<t;a++){const r=document.createElement("div");r.className="gameover-firework",r.style.left=`${10+Math.random()*80}%`,r.style.backgroundColor=i[Math.floor(Math.random()*i.length)],r.style.animationDelay=`${Math.random()*5}s`,r.style.animationDuration=`${1.5+Math.random()*2}s`,n.appendChild(r)}}}const Ti=class Ti{constructor(e){this.onStart=e,this.el=document.createElement("div"),this.el.className="title-overlay",this._render(),document.body.appendChild(this.el),this._waitForAssets().then(()=>{this._startRippleSequence()})}async _waitForAssets(){const e=[],t=this.el.querySelector(".title-logo-img");t&&!t.complete&&e.push(new Promise(n=>{t.onload=n,t.onerror=n})),e.push(bt.waitForCurrentTrack()),await Promise.all(e)}_startRippleSequence(){const e=this.el.querySelector(".title-ripple-container"),t=Ti.RIPPLE_DELAYS;t.forEach(i=>{setTimeout(()=>{const a=20+Math.random()*40,r=20+Math.random()*40,o=document.createElement("div");o.className="title-ripple",o.style.left=`${a}%`,o.style.top=`${r}%`,e.appendChild(o),o.addEventListener("animationend",()=>o.remove())},i)});const n=t[t.length-1];setTimeout(()=>{this.el.classList.add("title-animate")},n+Ti.FOREST_DELAY_AFTER_RIPPLES)}_render(){var c;const e=Xs.getSaveInfo(),t=e?((c=Fe.ranks[e.rankIndex])==null?void 0:c.name)||"—":"",n=e?new Date(e.timestamp).toLocaleString("ja-JP"):"";let i="";const a=5;for(let d=0;d<a;d++){const h=4+d*2;let f="";for(let m=0;m<h;m++){const u=m/h*100+(Math.random()-.5)*(70/h),E=50+Math.random()*50,M=Math.random()>.45?"pine":"oak",b=8+Math.random()*6+d*2;f+=`<div class="tree-sil tree-${M}"
          style="left:${u}%; height:${E}%; width:${b}%;"></div>`}const p=d*.35,_=2.5+d*.3,g=.15+d*.2;i+=`<div class="forest-depth-layer" style="
        --layer-delay:${p}s; --layer-dur:${_}s; --start-scale:${g};
        z-index:${d+1};">${f}</div>`}let r="";for(let d=0;d<25;d++){const h=Math.random()*100,f=20+Math.random()*70,p=2+Math.random()*3,_=3+Math.random()*4,g=Math.random()*6;r+=`<div class="title-particle"
        style="left:${h}%; top:${f}%; width:${p}px; height:${p}px;
               --dur:${_}s; --delay:${g}s;"></div>`}this.el.innerHTML=`
      <div class="title-ripple-container"></div>
      <div class="title-sky-layer"></div>
      <div class="title-forest-tunnel">${i}</div>
      <div class="title-light-rays"></div>
      <div class="title-fog-layer"></div>
      <div class="title-particles">${r}</div>
      <div class="title-content">
        <div class="title-logo">
          <img src="${kt("/art/Title_logo.png")}" alt="ひだまり森の錬金工房" class="title-logo-img" />
        </div>
        <div class="title-buttons">
          <button class="title-menu-btn title-menu-btn-primary" id="btn-new-game">
            <span class="title-menu-label">はじめから</span>
          </button>
          ${e?`
            <button class="title-menu-btn title-menu-btn-secondary" id="btn-continue">
              <span class="title-menu-label">つづきから</span>
              <span class="title-save-info">${e.day}日目 / ${t} / ${e.gold}G</span>
              <span class="title-save-date">${n}</span>
            </button>
          `:""}
        </div>
      </div>
    `,this.el.querySelector("#btn-new-game").addEventListener("click",()=>{if(e){if(!confirm("セーブデータを削除して新しく始めますか？"))return;Xs.deleteSave()}this._close(null)});const o=no.createGearButton();o.classList.add("title-gear-btn"),this.el.appendChild(o);const l=this.el.querySelector("#btn-continue");l&&l.addEventListener("click",()=>{this._close(Xs.loadSaveData())})}_close(e){this.el.classList.add("title-fade-out"),setTimeout(()=>{this.el.remove(),this.onStart(e)},600)}};ls(Ti,"RIPPLE_DELAYS",[200,900,1500]),ls(Ti,"FOREST_DELAY_AFTER_RIPPLES",800);let Pr=Ti;const Ml="voxelshop_tab_guides",x_={"tab-inventory":{icon:"📦",title:"倉庫",lines:["集めた素材やクラフト品を管理する場所です","フィルタで種類ごとに絞り込めます","品質(Q)が高いほどアイテムの価値が上がります"]},"tab-crafting":{icon:"🔨",title:"調合",lines:["素材を組み合わせてアイテムを作れます","パズルをうまくクリアすると品質がアップ！","ランクが上がると新しいレシピが解放されます"]},"tab-shop":{icon:"🏪",title:"お店",lines:["アイテムを陳列するとお客さんが買いに来ます","品質が高いアイテムほど高く売れます","売上を貯めてランクアップを目指しましょう"]},"tab-dispatch":{icon:"🗺️",title:"派遣",lines:["冒険者が自動で探索に出かけ素材を集めます","エリアを選んで割り当て、装備で成功率UP！","レベルが上がると探索が速く・成功しやすくなります"]},"tab-upgrade":{icon:"⬆️",title:"設備",lines:["売上目標とクエストを達成するとランクアップ！","新エリア・新レシピ・新冒険者が解放されます","ボス討伐に挑戦してランクを上げましょう"]},"tab-stats":{icon:"📊",title:"統計",lines:["これまでの冒険の記録を振り返れます","売上やクラフト数など各種実績を確認できます"]}};class b_{constructor(){this._shown={};try{const e=localStorage.getItem(Ml);e&&(this._shown=JSON.parse(e))}catch{}this._activeGuide=null,this._autoHideTimer=null,this._shown._welcome||(this._shown._welcome=!0,this._shown["tab-inventory"]=!0,this._save(),setTimeout(()=>this._showWelcome(),600)),this._unsub=N.on("tab:switched",e=>{e!=null&&e.tabId&&this._onTabVisit(e.tabId)})}_onTabVisit(e){if(this._shown[e])return;const t=x_[e];t&&(this._shown[e]=!0,this._save(),this._showGuide(t))}_showWelcome(){this._showGuide({icon:"🌿",title:"ひだまり森の錬金工房へようこそ！",lines:["冒険者が集めた素材を調合して販売しましょう","売上を伸ばしてお店のランクを上げていきます","各タブを開くと使い方をお教えします"]})}_showGuide(e){this._dismiss();const t=document.createElement("div");t.className="tab-guide",t.innerHTML=`
      <div class="tab-guide-card">
        <div class="tab-guide-header">
          <span class="tab-guide-icon">${e.icon}</span>
          <span class="tab-guide-title">${e.title}</span>
          <button class="tab-guide-close" aria-label="閉じる">✕</button>
        </div>
        <ul class="tab-guide-list">
          ${e.lines.map(n=>`<li>${n}</li>`).join("")}
        </ul>
      </div>
    `,document.body.appendChild(t),this._activeGuide=t,t.querySelector(".tab-guide-close").addEventListener("click",()=>this._dismiss()),t.addEventListener("click",n=>{n.target===t&&this._dismiss()}),this._autoHideTimer=setTimeout(()=>this._dismiss(),8e3)}_dismiss(){if(this._autoHideTimer&&(clearTimeout(this._autoHideTimer),this._autoHideTimer=null),this._activeGuide){const e=this._activeGuide;e.classList.add("tab-guide-exit"),setTimeout(()=>e.remove(),400),this._activeGuide=null}}_save(){try{localStorage.setItem(Ml,JSON.stringify(this._shown))}catch{}}dispose(){this._unsub&&this._unsub(),this._dismiss()}}const An=[{level:1,name:"無名の店",icon:"☆",minRep:0,customerRate:1,priceBonus:0,customerPool:["villager","adventurer_customer"]},{level:2,name:"知られた店",icon:"★",minRep:30,customerRate:1.3,priceBonus:.05,customerPool:["villager","adventurer_customer","soldier","healer"]},{level:3,name:"人気店",icon:"★★",minRep:80,customerRate:1.6,priceBonus:.1,customerPool:["villager","adventurer_customer","soldier","healer","merchant","scholar","alchemist"]},{level:4,name:"王国御用達",icon:"★★★",minRep:150,customerRate:2,priceBonus:.15,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch","scholar","alchemist","knight","dancer"]},{level:5,name:"伝説の名店",icon:"🌟",minRep:250,customerRate:2.5,priceBonus:.2,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch","scholar","alchemist","knight","dancer","pirate","fairy"]}];class M_{constructor(){this.reputation=0,this.currentLevel=An[0],this._bindEvents()}_bindEvents(){this._unsubBought=N.on("customer:bought",e=>{var i;const t=((i=e.item)==null?void 0:i.quality)||30;let n=1;t>=80?n=4:t>=60?n=3:t>=40&&(n=2),this.addReputation(n)}),this._unsubLeft=N.on("customer:left",e=>{((e==null?void 0:e.reason)==="no_match"||(e==null?void 0:e.reason)==="timeout")&&this.addReputation(-2)}),this._unsubRankUp=N.on("rank:up",()=>{this.addReputation(10)}),this._unsubCrafted=N.on("item:crafted",()=>{this.addReputation(1)})}addReputation(e){const t=this.currentLevel;this.reputation=Math.max(0,this.reputation+e),this._updateLevel(),this.currentLevel!==t&&N.emit("reputation:levelUp",{level:this.currentLevel.level,name:this.currentLevel.name,icon:this.currentLevel.icon}),N.emit("reputation:changed",{reputation:this.reputation,level:this.currentLevel})}_updateLevel(){for(let e=An.length-1;e>=0;e--)if(this.reputation>=An[e].minRep){this.currentLevel=An[e];return}this.currentLevel=An[0]}getCustomerRateMultiplier(){return this.currentLevel.customerRate}getPriceBonus(){return this.currentLevel.priceBonus}getAvailableCustomerPool(){return this.currentLevel.customerPool}getProgress(){const e=An.indexOf(this.currentLevel);if(e>=An.length-1)return 1;const n=An[e+1].minRep-this.currentLevel.minRep,i=this.reputation-this.currentLevel.minRep;return Math.min(1,i/n)}toSaveData(){return{reputation:this.reputation}}loadSaveData(e){e&&typeof e.reputation=="number"&&(this.reputation=e.reputation,this._updateLevel())}dispose(){var e,t,n,i;(e=this._unsubBought)==null||e.call(this),(t=this._unsubLeft)==null||t.call(this),(n=this._unsubRankUp)==null||n.call(this),(i=this._unsubCrafted)==null||i.call(this)}}class S_{constructor(){this.progress={},this._currentDaySales=0,this._bestDaySales=0,this.upgradeCount=0,this._initProgress(),this._bindEvents()}_initProgress(){this._forEachQuest(e=>{e.id in this.progress||(this.progress[e.id]=0)})}_bindEvents(){this._unsubSold=N.on("item:sold",e=>{var n,i;this._increment("sell_count",1);const t=(n=e.item)==null?void 0:n.type;t&&this._incrementFiltered("sell_type",t,1),this._currentDaySales+=((i=e.item)==null?void 0:i.value)||0}),this._unsubBought=N.on("customer:bought",e=>{var n;this._increment("total_customers",1);const t=(n=e.customer)==null?void 0:n.id;t&&this._incrementFiltered("serve_customer",t,1)}),this._unsubCrafted=N.on("item:crafted",e=>{var i,a,r,o,l;this._increment("craft_count",1);const t=((i=e.item)==null?void 0:i.quality)||0;this._updateMax("craft_quality",t),((r=(a=e.item)==null?void 0:a.traits)==null?void 0:r.length)>0&&this._increment("craft_with_trait",1);const n=((l=(o=e.item)==null?void 0:o.traits)==null?void 0:l.length)||0;this._updateMax("craft_max_traits",n)}),this._unsubReturn=N.on("adventurer:return",e=>{this._increment("explore_count",1);const t=e.areaId;t&&this._incrementFiltered("explore_area",t,1)}),this._unsubNewDay=N.on("day:newDay",()=>{this._currentDaySales>this._bestDaySales&&(this._bestDaySales=this._currentDaySales),this._updateDailySales(),this._currentDaySales=0}),this._unsubUpgrade=N.on("upgrade:purchased",()=>{this.upgradeCount++,this._updateUpgradeCount()})}_forEachQuest(e){for(const[,t]of Object.entries(bl))for(const n of t)e(n)}_increment(e,t){this._forEachQuest(n=>{n.conditionType===e&&(this.progress[n.id]=(this.progress[n.id]||0)+t)})}_incrementFiltered(e,t,n){this._forEachQuest(i=>{if(i.conditionType!==e)return;(i.targetArea&&i.targetArea===t||i.targetType&&i.targetType===t||i.targetCustomer&&i.targetCustomer===t)&&(this.progress[i.id]=(this.progress[i.id]||0)+n)})}_updateMax(e,t){this._forEachQuest(n=>{n.conditionType===e&&(this.progress[n.id]=Math.max(this.progress[n.id]||0,t))})}_updateDailySales(){this._forEachQuest(e=>{e.conditionType==="daily_sales"&&(this.progress[e.id]=Math.max(this.progress[e.id]||0,this._bestDaySales))})}_updateUpgradeCount(){this._forEachQuest(e=>{e.conditionType==="upgrade_count"&&(this.progress[e.id]=this.upgradeCount)})}updateTotalSales(e){this._forEachQuest(t=>{t.conditionType==="total_sales"&&(this.progress[t.id]=e)})}isQuestComplete(e){const t=this._findQuest(e);return t?(this.progress[e]||0)>=t.target:!1}getQuestsForRank(e){const t=`rank${e}`;return(bl[t]||[]).map(i=>({...i,current:this.progress[i.id]||0,complete:(this.progress[i.id]||0)>=i.target}))}isRankQuestSatisfied(e){const t=this.getQuestsForRank(e);if(t.length===0)return!0;const n=t.filter(a=>a.complete).length,i=Math.ceil(t.length*Fe.questRequiredRatio);return n>=i}getRequiredCount(e){const t=this.getQuestsForRank(e);return Math.ceil(t.length*Fe.questRequiredRatio)}_findQuest(e){let t=null;return this._forEachQuest(n=>{n.id===e&&(t=n)}),t}toSaveData(){return{progress:{...this.progress},bestDaySales:this._bestDaySales,upgradeCount:this.upgradeCount}}loadSaveData(e){e&&(e.progress&&Object.assign(this.progress,e.progress),this._bestDaySales=e.bestDaySales||0,this.upgradeCount=e.upgradeCount||0)}dispose(){var e,t,n,i,a,r;(e=this._unsubSold)==null||e.call(this),(t=this._unsubBought)==null||t.call(this),(n=this._unsubCrafted)==null||n.call(this),(i=this._unsubReturn)==null||i.call(this),(a=this._unsubNewDay)==null||a.call(this),(r=this._unsubUpgrade)==null||r.call(this)}}const E_=[...ac,...Qr];function T_(s){return E_.find(e=>e.id===s)}class w_{constructor(e,t){this.adventurers=e,this.inventory=t,this.active=!1,this.state=null}startBattle(e,t,n=null){this.selectedItems=n;const i=this.adventurers.adventurers.map(a=>{var b;const r=T_(a.id),o=a.level||1,l=r&&r.battle||{maxHp:100,atk:10,def:5,spd:50},c=l.spd+(o-1)*2,d=l.maxHp+(o-1)*5,h=l.atk+(o-1)*2,f=l.def+(o-1)*1;let p=0,_=0,g=0,m=0,u=0,E=0,M=0;if((b=a.equipment)!=null&&b.weapon){const C=a.equipment.weapon.value||0;p+=Math.floor(C/10);for(const A of a.equipment.weapon.traits||[]){const w=Fn[A];w!=null&&w.effects&&(p+=w.effects.battleAtk||0,_+=w.effects.battleDef||0,g+=w.effects.battleSpd||0,m+=w.effects.battleHp||0,u=Math.max(u,w.effects.startAtb||0),E+=w.effects.battleRegen||0,M+=w.effects.battleDmgReduction||0)}}return{id:a.id,name:a.name,icon:a.icon,level:o,hp:d+m,maxHp:d+m,baseAtk:h+p,baseDef:f+_,baseSpd:c+g,atbGauge:Math.min(50,u),status:"active",regen:E,dmgReduction:M,activeBuffs:[]}});return i.length===0?(N.emit("toast",{message:"冒険者がいません！",type:"error"}),!1):(this.state={rankIndex:e,phase:"fighting",boss:{id:t.id,name:t.name,icon:t.icon,hp:t.maxHp,maxHp:t.maxHp,baseAtk:t.atk,baseDef:t.def,baseSpd:t.spd,atbGauge:0,activeBuffs:[],stunTimer:0,phases:t.phases||[],triggeredPhases:[],currentPhaseName:null},adventurers:i,log:[],itemCooldown:0,selectedItems:n},this.active=!0,N.emit("battle:start",this.state),this._log("ボスバトル開始！"),!0)}update(e){if(!this.active||!this.state||this.state.phase!=="fighting")return;const t=this.state,n=Fe.bossBattle.atbFillRate;t.itemCooldown>0&&(t.itemCooldown-=e,t.itemCooldown<0&&(t.itemCooldown=0)),this._updateBuffs(t.boss,e);for(const i of t.adventurers)i.status==="active"&&this._updateBuffs(i,e);t.boss.stunTimer>0?t.boss.stunTimer=Math.max(0,t.boss.stunTimer-e):(t.boss.atbGauge+=this._getSpd(t.boss)*e*n,t.boss.atbGauge>=100&&this.state.phase==="fighting"&&this._executeBossAction());for(const i of t.adventurers)i.status==="active"&&i.regen>0&&(i.hp=Math.min(i.maxHp,i.hp+i.regen*e));for(const i of t.adventurers)i.status!=="dead"&&(i.atbGauge+=this._getSpd(i)*e*n,i.atbGauge>=100&&this.state.phase==="fighting"&&this._executeAdvAction(i));N.emit("battle:tick",this.state)}useItem(e,t=null){if(!this.active||this.state.phase!=="fighting"||this.state.itemCooldown>0)return!1;const n=this.inventory.items.find(o=>o.uid===e);if(!n)return!1;const i=tt[n.blueprintId];if(!i||!i.battleEffect)return!1;const a=i.battleEffect;this.inventory.removeItem(e),this._log(`プレイヤーが ${n.name} を使った！`),N.emit("battle:se:itemUse");const r=this._resolveTargets(a.target,t);for(const o of r)if(a.type==="heal"){if(o.status==="dead")continue;const l=typeof a.value=="number"?a.value:50;o.hp=Math.min(o.maxHp,o.hp+l),this._log(`${o.name}のHPが ${l} 回復！`),N.emit("battle:se:heal")}else if(a.type==="healfull"){if(o.status==="dead")continue;o.hp=o.maxHp,this._log(`${o.name}のHPが 全回復！`),N.emit("battle:se:heal")}else if(a.type==="revive")o.status==="dead"&&(o.status="active",o.hp=typeof a.value=="number"?a.value:Math.floor(o.maxHp/2),o.atbGauge=0,this._log(`${o.name}が復活した！`),N.emit("battle:se:revive"));else if(a.type==="damage"){const l=a.value??30;if(this.state.boss.hp=Math.max(0,this.state.boss.hp-l),this._log(`${n.name} がボスに ${l} ダメージ！`),N.emit("battle:se:damage"),this.state.boss.hp<=0){this._doWin();break}}else if(a.type==="stun")this.state.boss.atbGauge=0,this.state.boss.stunTimer=a.duration??8,this._log(`${n.name} がボスをスタンさせた！`),N.emit("battle:se:stun");else if(a.type==="buff"||a.type==="debuff"){if(o.status==="dead")continue;o.activeBuffs.push({stat:a.stat,amount:a.amount,timer:a.duration});const l=a.stat==="atk"?"攻撃力":a.stat==="def"?"防御力":"素早さ",c=a.type==="buff"?"アップ":"ダウン";this._log(`${o.name}の${l}が${c}！`),a.type==="buff"?N.emit("battle:se:buff"):N.emit("battle:se:debuff")}return this.state.itemCooldown=Fe.bossBattle.itemCooldownSeconds,N.emit("battle:tick",this.state),!0}flee(){this.active&&(this._log("逃走した..."),this.state.phase="lose",this.active=!1,N.emit("battle:lose",{reason:"flee"}))}getState(){return this.state}dispose(){}_updateBuffs(e,t){e.activeBuffs&&(e.activeBuffs.forEach(n=>n.timer-=t),e.activeBuffs=e.activeBuffs.filter(n=>n.timer>0))}_getSpd(e){let t=e.baseSpd;if(e.activeBuffs)for(const n of e.activeBuffs)n.stat==="spd"&&(t+=n.amount);return Math.max(10,t)}_getAtk(e){let t=e.baseAtk;if(e.activeBuffs)for(const n of e.activeBuffs)n.stat==="atk"&&(t+=n.amount);return Math.max(1,t)}_getDef(e){let t=e.baseDef;if(e.activeBuffs)for(const n of e.activeBuffs)n.stat==="def"&&(t+=n.amount);return Math.max(0,t)}_executeBossAction(){const e=this.state;e.boss.atbGauge=0;const t=e.adventurers.filter(l=>l.status==="active");if(t.length===0)return;const n=t[Math.floor(Math.random()*t.length)],i=this._getAtk(e.boss),a=this._getDef(n),r=n.dmgReduction||0,o=Math.max(1,Math.floor(i*(1+Math.random()*.2)-a)-r);n.hp-=o,this._log(`ボスの攻撃！ ${n.name}に ${o} のダメージ！`),N.emit("battle:se:bossAttack"),n.hp<=0&&(n.hp=0,n.status="dead",n.atbGauge=0,n.activeBuffs=[],this._log(`${n.name}は倒れた！`),N.emit("battle:se:ko"),this._checkLose())}_executeAdvAction(e){const t=this.state;e.atbGauge=0;const n=this._getAtk(e),i=this._getDef(t.boss),a=Math.max(1,Math.floor(n*(1+Math.random()*.2)-i));t.boss.hp-=a,this._log(`${e.name}の攻撃！ ボスに ${a} のダメージ！`),N.emit("battle:se:advAttack"),this._checkPhaseShift(),t.boss.hp<=0&&(t.boss.hp=0,this._doWin())}_resolveTargets(e,t){const n=this.state;if(e==="all")return n.adventurers;if(e==="enemy")return[n.boss];if(e==="ally"){if(t){const a=n.adventurers.find(r=>r.id===t);return a?[a]:[]}const i=n.adventurers.filter(a=>a.status==="active");return i.length===0?[]:(i.sort((a,r)=>a.hp/a.maxHp-r.hp/r.maxHp),[i[0]])}return[]}_checkLose(){if(this.state.phase!=="fighting")return;this.state.adventurers.filter(t=>t.status==="active").length===0&&(this._log("パーティは全滅した..."),this.state.phase="lose",this.active=!1,N.emit("battle:lose",{reason:"wipeout"}))}_doWin(){this.state.phase==="fighting"&&(this._log("ボスを撃破した！！"),this.state.phase="win",this.active=!1,N.emit("battle:win",{rankIndex:this.state.rankIndex}))}_log(e){this.state&&(this.state.log.unshift({time:Date.now(),msg:e}),this.state.log.length>50&&this.state.log.pop())}_checkPhaseShift(){var n,i,a;const e=this.state.boss;if(!e.phases||e.phases.length===0)return;const t=e.hp/e.maxHp;for(const r of e.phases)if(!e.triggeredPhases.includes(r.name)&&t<=r.hpThreshold){if(e.triggeredPhases.push(r.name),e.currentPhaseName=r.name,r.effect){const l=r.effect.stat,c=r.effect.amount;l==="atk"?e.baseAtk+=c:l==="def"?e.baseDef+=c:l==="spd"&&(e.baseSpd+=c)}this._log(`── ${r.name} ──`),r.message&&this._log(r.message);const o=((n=r.effect)==null?void 0:n.stat)==="atk"?"攻撃力":((i=r.effect)==null?void 0:i.stat)==="def"?"防御力":((a=r.effect)==null?void 0:a.stat)==="spd"?"素早さ":"";o&&this._log(`ボスの${o}が上がった！`),N.emit("battle:phaseShift",{phase:r}),N.emit("battle:se:phaseShift");break}}}class A_{constructor(e){this.inventory=e,this.overlay=null,this.state=null,this.itemsWithEffects=[],this._lastLogLength=0,this._lastItemCount=-1,this._els={},this._resultShown=!1,this._unsubs=[N.on("battle:start",t=>this.show(t)),N.on("battle:tick",t=>this.update(t)),N.on("battle:win",()=>this.showResult("win")),N.on("battle:lose",t=>this.showResult(t.reason)),N.on("battle:phaseShift",t=>this._onPhaseShift(t))]}show(e){this.state=e,this._lastLogLength=0,this._lastItemCount=-1,N.emit("game:pause");const t=this.inventory.items.filter(n=>{const i=tt[n.blueprintId];return i&&i.battleEffect});e.selectedItems&&e.selectedItems.length>0?this.itemsWithEffects=t.filter(n=>e.selectedItems.includes(n.uid)):this.itemsWithEffects=t,this.overlay=document.createElement("div"),this.overlay.className="battle-overlay",this.overlay.innerHTML=`
      <div class="battle-container">
        <!-- HEADER / BOSS -->
        <div class="battle-header">
           <div class="boss-info">
             <div class="boss-icon" id="boss-icon">${e.boss.icon}</div>
             <div class="boss-name">${e.boss.name}</div>
             <div class="bar-container">
               <div class="bar-fill hp-fill boss-hp" id="boss-hp-fill" style="width:100%"></div>
             </div>
             <div class="bar-text" id="boss-hp-text">${e.boss.hp}/${e.boss.maxHp}</div>
             <div class="boss-phase-badge" id="boss-phase-badge"></div>
             <div class="bar-container atb-container">
               <div class="bar-fill atb-fill boss-atb" id="boss-atb-fill" style="width:0%"></div>
             </div>
           </div>
        </div>
        
        <div class="battle-main">
           <!-- PARTY -->
           <div class="party-container" id="party-container">
              ${this._renderParty(e)}
           </div>

           <!-- LOG -->
           <div class="battle-log" id="battle-log"></div>
        </div>

        <!-- ITEMS / FOOTER -->
        <div class="battle-footer">
           <h3 class="footer-title">サポートアイテム (インベントリ)</h3>
           <div class="item-cooldown-bar" id="item-cooldown-bar"></div>
           <div class="battle-inventory" id="battle-inventory">
              ${this._renderItems()}
           </div>
        </div>

        <div class="battle-actions">
           <button class="btn btn-danger" id="btn-flee">逃げる</button>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this._els={bossHpFill:this.overlay.querySelector("#boss-hp-fill"),bossHpText:this.overlay.querySelector("#boss-hp-text"),bossAtbFill:this.overlay.querySelector("#boss-atb-fill"),bossIcon:this.overlay.querySelector("#boss-icon"),logContainer:this.overlay.querySelector("#battle-log"),cdBar:this.overlay.querySelector("#item-cooldown-bar"),inventory:this.overlay.querySelector("#battle-inventory"),advEls:{}};for(const n of e.adventurers)this._els.advEls[n.id]={card:this.overlay.querySelector(`#adv-${n.id}`),hpFill:this.overlay.querySelector(`#adv-hp-fill-${n.id}`),hpText:this.overlay.querySelector(`#adv-hp-text-${n.id}`),atbFill:this.overlay.querySelector(`#adv-atb-fill-${n.id}`),buffs:this.overlay.querySelector(`#adv-buffs-${n.id}`)};this.overlay.querySelector("#btn-flee").addEventListener("click",()=>{this._showConfirmModal("本当に逃げますか？（HPは回復しません）",()=>{N.emit("battle:command",{action:"flee"})})}),this._bindItemClicks(),this.update(e)}_bindItemClicks(){this.overlay&&this.overlay.querySelectorAll(".battle-item-btn").forEach(e=>{e.addEventListener("click",()=>{if(this.state&&this.state.itemCooldown>0)return;const t=e.dataset.uid;N.emit("battle:command",{action:"useItem",uid:t})})})}_renderParty(e){return e.adventurers.map(t=>`
      <div class="party-member ${t.status==="dead"?"dead":""}" id="adv-${t.id}">
        <div class="adv-icon">${t.icon}</div>
        <div class="adv-details">
           <div class="adv-name">${t.name}</div>
           <div class="bar-container">
             <div class="bar-fill hp-fill adv-hp" id="adv-hp-fill-${t.id}" style="width:${t.hp/t.maxHp*100}%"></div>
           </div>
           <div class="bar-text" id="adv-hp-text-${t.id}">${t.hp}/${t.maxHp}</div>
           <div class="bar-container atb-container">
             <div class="bar-fill atb-fill adv-atb" id="adv-atb-fill-${t.id}" style="width:${Math.min(100,t.atbGauge)}%"></div>
           </div>
           <div class="adv-buffs" id="adv-buffs-${t.id}"></div>
           <div class="adv-passives">
             ${t.regen>0?'<span class="adv-passive-badge regen">再生</span>':""}
             ${t.dmgReduction>0?'<span class="adv-passive-badge guard">鉄壁</span>':""}
             ${t.atbGauge>0?'<span class="adv-passive-badge quick">先制</span>':""}
           </div>
        </div>
      </div>
    `).join("")}_renderItems(){return this.itemsWithEffects.length===0?'<div class="no-items">使えるアイテムがありません</div>':this.itemsWithEffects.map(e=>{const t=tt[e.blueprintId];return`
        <div class="battle-item-btn" data-uid="${e.uid}">
          <img src="${t.image}" alt="${e.name}" />
          <div class="item-name">${e.name}</div>
          <div class="item-qty">Q${e.quality}</div>
        </div>
      `}).join("")}update(e){if(!this.overlay||!e)return;this.state=e;const t=this._els,n=Math.max(0,e.boss.hp/e.boss.maxHp*100);t.bossHpFill&&(t.bossHpFill.style.width=`${n}%`),t.bossHpText&&(t.bossHpText.textContent=`${e.boss.hp}/${e.boss.maxHp}`),t.bossAtbFill&&(t.bossAtbFill.style.width=`${Math.min(100,e.boss.atbGauge)}%`),t.bossIcon&&(e.boss.stunTimer>0?t.bossIcon.classList.add("boss-stunned"):t.bossIcon.classList.remove("boss-stunned"));for(const i of e.adventurers){const a=t.advEls[i.id];if(!a||!a.hpFill)continue;i.status==="dead"?a.card.classList.add("dead"):a.card.classList.remove("dead");const r=Math.max(0,i.hp/i.maxHp*100);a.hpFill.style.width=`${r}%`,a.hpText.textContent=`${i.hp}/${i.maxHp}`,a.atbFill.style.width=`${Math.min(100,i.atbGauge)}%`,a.buffs&&(i.activeBuffs&&i.activeBuffs.length>0?a.buffs.innerHTML=i.activeBuffs.map(o=>{const l=o.stat==="atk"?"攻撃":o.stat==="def"?"防御":"速度",c=o.amount>0;return`<span class="adv-buff-badge ${c?"buff-up":"buff-down"}">${l}${c?"↑":"↓"}</span>`}).join(""):a.buffs.innerHTML="")}if(t.logContainer&&e.log.length!==this._lastLogLength&&(this._lastLogLength=e.log.length,t.logContainer.innerHTML=e.log.map(i=>`<div class="log-line">${i.msg}</div>`).join("")),t.cdBar)if(e.itemCooldown>0){const i=Fe.bossBattle.itemCooldownSeconds,a=e.itemCooldown/i*100;t.cdBar.style.width=`${Math.min(100,a)}%`,t.cdBar.style.display="block",t.inventory&&t.inventory.classList.add("cooldown-active")}else{t.cdBar.style.width="0%",t.cdBar.style.display="none",t.inventory&&t.inventory.classList.remove("cooldown-active");const i=this.inventory.items.filter(a=>{var r;return(r=tt[a.blueprintId])==null?void 0:r.battleEffect}).length;i!==this._lastItemCount&&(this._lastItemCount=i,this.itemsWithEffects=this.inventory.items.filter(a=>{var r;return(r=tt[a.blueprintId])==null?void 0:r.battleEffect}),t.inventory&&(t.inventory.innerHTML=this._renderItems(),this._bindItemClicks()))}}showResult(e){if(!this.overlay||this._resultShown)return;this._resultShown=!0;let t="",n="戻る";e==="win"?t='<div class="result-win">WIN! ボスを撃破した！</div>':e==="wipeout"?t='<div class="result-lose">LOSE... 全滅してしまった。</div>':t='<div class="result-lose">逃走した。</div>';const i=document.createElement("div");i.className="battle-result-overlay",i.innerHTML=`
      <div class="battle-result-box">
         ${t}
         <button class="btn btn-primary mt-4 w-full" id="btn-close-result">${n}</button>
      </div>
    `,this.overlay.appendChild(i),i.querySelector("#btn-close-result").addEventListener("click",()=>{N.emit("game:resume"),this.overlay.remove(),this.overlay=null,this.state=null,this._els={},this._resultShown=!1})}_onPhaseShift(e){if(!this.overlay||!(e!=null&&e.phase))return;const t=e.phase,n=this._els.bossIcon;n&&(n.classList.add("boss-phase-shake"),setTimeout(()=>n.classList.remove("boss-phase-shake"),1e3));const i=this.overlay.querySelector("#boss-phase-badge");i&&(i.textContent=`🔥 ${t.name}`,i.classList.add("phase-badge-active"));const a=document.createElement("div");a.className="battle-phase-flash",this.overlay.appendChild(a),setTimeout(()=>a.remove(),800)}_showConfirmModal(e,t){if(!this.overlay)return;const n=document.createElement("div");n.className="battle-result-overlay",n.innerHTML=`
      <div class="battle-result-box">
        <div class="result-lose" style="font-size:14px; margin-bottom:12px">${e}</div>
        <div style="display:flex; gap:8px; justify-content:center">
          <button class="btn btn-danger" id="confirm-yes">はい</button>
          <button class="btn" id="confirm-no">いいえ</button>
        </div>
      </div>
    `,this.overlay.appendChild(n),n.querySelector("#confirm-yes").addEventListener("click",()=>{n.remove(),t()}),n.querySelector("#confirm-no").addEventListener("click",()=>{n.remove()})}dispose(){this._unsubs.forEach(e=>e())}}class C_{constructor(e,t){var n;this.inventory=e,this.adventurers=t,this.overlay=null,this.selectedItems=[],this.maxSlots=((n=Fe.bossBattle)==null?void 0:n.playerItemSlots)||4,this._pendingBattle=null}show(e,t){this._pendingBattle={rankIndex:e,bossDef:t},this.selectedItems=[];const i=this.inventory.items.filter(r=>{const o=tt[r.blueprintId];return o&&o.battleEffect}),a=this.adventurers.adventurers;this.overlay=document.createElement("div"),this.overlay.className="battle-prep-overlay",this.overlay.innerHTML=`
      <div class="battle-prep-container">
        <div class="prep-header">
          <h2>⚔️ 戦闘準備</h2>
          <div class="prep-boss-info">
            <span class="prep-boss-icon">${t.icon}</span>
            <span class="prep-boss-name">${t.name}</span>
            <span class="prep-boss-hp">HP: ${t.maxHp}</span>
          </div>
        </div>

        <div class="prep-body">
          <div class="prep-section prep-party">
            <h3>👥 参加冒険者</h3>
            <div class="prep-party-list" id="prep-party-list">
              ${a.map(r=>this._renderAdvCard(r)).join("")}
            </div>
          </div>

          <div class="prep-section prep-items">
            <h3>🎒 持ち込みアイテム（最大${this.maxSlots}つ）</h3>
            <div class="prep-slots" id="prep-slots">
              ${Array.from({length:this.maxSlots},(r,o)=>`
                <div class="prep-slot" data-slot="${o}">
                  <span class="prep-slot-empty">＋</span>
                </div>
              `).join("")}
            </div>
            <div class="prep-item-grid" id="prep-item-grid">
              ${i.length>0?i.map(r=>this._renderItemOption(r)).join(""):'<p class="prep-no-items">戦闘用アイテムがありません</p>'}
            </div>
          </div>
        </div>

        <div class="prep-footer">
          <button class="prep-btn prep-btn-cancel" id="prep-cancel">← 戻る</button>
          <button class="prep-btn prep-btn-start" id="prep-start">⚔️ バトル開始！</button>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this._bindEvents(i)}_renderAdvCard(e){return`
      <div class="prep-adv-card">
        <span class="prep-adv-icon">${e.icon}</span>
        <div class="prep-adv-info">
          <div class="prep-adv-name">${e.name} <span class="prep-adv-lv">Lv.${e.level}</span></div>
          <div class="prep-adv-stats">
            <span>❤️ ${e.baseHp||"?"}</span>
            <span>⚔ ${e.baseAtk||"?"}</span>
            <span>🛡 ${e.baseDef||"?"}</span>
            <span>💨 ${e.baseSpd||"?"}</span>
          </div>
        </div>
      </div>
    `}_renderItemOption(e){const t=tt[e.blueprintId],n=this._getEffectText(t.battleEffect),i=t.image?kt(t.image):null,a=i?`<img class="prep-item-img" src="${i}" alt="${e.name}" />`:'<span class="prep-item-emoji">💊</span>';return`
      <button class="prep-item-option" data-uid="${e.uid}" title="${n}">
        ${a}
        <div class="prep-item-info">
          <span class="prep-item-name">${e.name}</span>
          <span class="prep-item-effect">${n}</span>
        </div>
      </button>
    `}_getEffectText(e){if(!e)return"";switch(e.type){case"heal":return`回復 ${e.value}HP`;case"healfull":return"全体完全回復";case"revive":return`蘇生 ${e.value||50}%`;case"buff":return`${e.stat}↑${e.amount} (${e.duration}s)`;case"debuff":return`敵${e.stat}↓${Math.abs(e.amount)} (${e.duration}s)`;case"damage":return`敵に${e.value}ダメージ`;case"stun":return`敵スタン ${e.duration}s`;default:return e.type}}_bindEvents(e){this.overlay.querySelectorAll(".prep-item-option").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.uid;this.selectedItems.includes(n)?(this.selectedItems=this.selectedItems.filter(i=>i!==n),t.classList.remove("prep-item-selected")):this.selectedItems.length<this.maxSlots&&(this.selectedItems.push(n),t.classList.add("prep-item-selected")),this._updateSlots(e)})}),this.overlay.querySelector("#prep-cancel").addEventListener("click",()=>{this._close()}),this.overlay.querySelector("#prep-start").addEventListener("click",()=>{if(!this._pendingBattle)return;const{rankIndex:t,bossDef:n}=this._pendingBattle,i=[...this.selectedItems];this._close(),N.emit("battle:prepComplete",{rankIndex:t,bossDef:n,selectedItems:i})})}_updateSlots(e){const t=this.overlay.querySelector("#prep-slots");if(!t)return;const n=this.inventory.items;t.querySelectorAll(".prep-slot").forEach((a,r)=>{if(r<this.selectedItems.length){const o=this.selectedItems[r],l=n.find(c=>c.uid===o);if(l){const c=tt[l.blueprintId],d=c!=null&&c.image?kt(c.image):null;a.innerHTML=d?`<img class="prep-slot-img" src="${d}" alt="${l.name}" />`:`<span class="prep-slot-name">${l.name.slice(0,2)}</span>`,a.classList.add("prep-slot-filled")}}else a.innerHTML='<span class="prep-slot-empty">＋</span>',a.classList.remove("prep-slot-filled")})}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null),this._pendingBattle=null,this.selectedItems=[]}}const oc=[];let Rn=null,Mi=null,Tt=null,Zt=null,mn=null,Nt=null,ea=null,Ga=null,Si=null,Ei=null,Lr=null,Dr=null,_n=null,Sl=null,lc=!1;async function R_(){Rn=new Lm("game-canvas"),Mi=new Bm(Rn.scene,Rn.camera,oc,Rn),await Mi.init()}async function I_(){try{await R_(),P_(()=>{bt.init(),bt.startTitleBGM(),new Pr(async s=>{const e=L_();await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t))),await U_(s),D_(e)})})}catch(s){console.error("[VoxelGame] Failed to load:",s)}}function P_(s){const e=document.createElement("div");e.className="splash-overlay",e.innerHTML=`
    <div class="splash-content">
      <p class="splash-text">Click to Start</p>
    </div>
  `,document.body.appendChild(e);const t=document.getElementById("initial-loader");t&&t.remove();const n=()=>{e.removeEventListener("click",n),s(),e.classList.add("splash-fade-out"),setTimeout(()=>{e.remove()},600)};e.addEventListener("click",n)}function L_(){const s=document.createElement("div");return s.className="loading-overlay",s.innerHTML=`
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p class="loading-text">Now Loading...</p>
    </div>
  `,document.body.appendChild(s),s}function D_(s){s&&(s.classList.add("loading-fade-out"),setTimeout(()=>s.remove(),500))}async function U_(s){Tt=new zm,Zt=new Hm(Tt),mn=new $m(Tt),Ei=new S_,Nt=new Xm(Tt,Ei),Ga=new jm(Tt),Si=new M_,ea=new Ym(Tt,Zt,Ga,Si),s&&N_(s),Lr=new Xs(Tt,mn,Nt,Zt,Si,Ei),Dr=new g_(Tt,Zt,mn,ea,Nt,Ga,Si,Ei),new v_,new y_,new b_,_n=new w_(mn,Tt),new A_(Tt),Sl=new C_(Tt,mn),N.on("battle:requestStart",e=>{let t=null;for(const n in gt)if(gt[n].boss&&gt[n].boss.id===e.bossId){t=gt[n].boss;break}t?Sl.show(e.rankIndex,t):N.emit("toast",{message:"ボスの情報が見つかりません",type:"error"})}),N.on("battle:prepComplete",e=>{_n.startBattle(e.rankIndex,e.bossDef,e.selectedItems)}),N.on("battle:command",e=>{e.action==="flee"?_n.flee():e.action==="useItem"&&_n.useItem(e.uid)}),lc=!0,N.on("game:pause",()=>{Ur=!0}),N.on("game:resume",()=>{Ur=!1}),bt.startGameBGM(),console.log("[VoxelGame] Game started."+(s?" (loaded save)":""))}function N_(s){Tt.gold=s.gold,Tt.items=[];for(const e of s.items)Tt.items.push(Zn(e.blueprintId,e.quality,e.traits));Zt.displayedItems=[];for(const e of s.displayedItems||[]){const t=Zn(e.blueprintId,e.quality,e.traits);t.value=Zt._calcValue(t),Zt.displayedItems.push(t)}for(const e of s.unlockedRecipes||[])en[e]&&(en[e].unlocked=!0);for(const e of s.unlockedAreas||[])gt[e]&&(gt[e].unlocked=!0);if(Nt.day=s.day||1,Nt.dayTimer=s.dayTimer||0,Nt.totalSales=s.totalSales||0,Nt.currentRankIndex=s.currentRankIndex||0,Nt.rankBossAvailable=s.rankBossAvailable||!1,Nt.defeatedBosses=s.defeatedBosses||[],s.purchasedUpgrades&&(Zt.purchasedUpgrades=[...s.purchasedUpgrades]),s.maxSlots&&(Zt.maxSlots=s.maxSlots),s.maxCapacity&&(Tt.maxCapacity=s.maxCapacity),s.quest&&Ei&&Ei.loadSaveData(s.quest),s.adventurers)for(const e of s.adventurers){let t=mn.adventurers.find(n=>n.id===e.id);if(!t){const n=Qr.find(i=>i.id===e.id);n&&(t={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}},mn.adventurers.push(t))}t&&(t.level=e.level||1,t.exp=e.exp||0,t.assignedArea=e.assignedArea||"plains",e.weapon&&(t.equipment.weapon=Zn(e.weapon.blueprintId,e.weapon.quality,e.weapon.traits)))}s.reputation&&Si&&Si.loadSaveData(s.reputation),s.stats&&Nn.loadSaveData(s.stats)}I_();const F_=new $d;let Ur=!1;function cc(){requestAnimationFrame(cc);const s=Math.min(F_.getDelta(),.1);for(const e of oc)e.update(s);if(!lc){Rn&&Rn.render();return}_n&&_n.active&&_n.update(s),!Ur&&!(_n&&_n.active)&&(Mi&&Mi.update(s),Nt&&Nt.update(s),Zt&&Zt.update(s),mn&&mn.update(s),ea&&ea.update(s),Lr&&Lr.update(s),Mi&&Nt&&Mi.setDayProgress(Nt.dayProgress)),Dr&&Dr.update(s),Rn&&Rn.render()}cc();
