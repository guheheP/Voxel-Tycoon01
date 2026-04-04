var uc=Object.defineProperty;var hc=(s,e,t)=>e in s?uc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var nr=(s,e,t)=>hc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="172",fc=0,oo=1,pc=2,yl=1,xl=2,fn=3,Rn=0,At=1,Qt=2,An=0,Ci=1,lo=2,co=3,uo=4,mc=5,Hn=100,_c=101,gc=102,vc=103,yc=104,xc=200,Mc=201,bc=202,Sc=203,Br=204,zr=205,Ec=206,Tc=207,wc=208,Ac=209,Cc=210,Rc=211,Ic=212,Pc=213,Lc=214,Vr=0,Gr=1,Hr=2,Pi=3,qr=4,Wr=5,$r=6,Xr=7,Da=0,Dc=1,Uc=2,Cn=0,Nc=1,Fc=2,Oc=3,Ml=4,kc=5,Bc=6,zc=7,bl=300,Li=301,Di=302,Yr=303,jr=304,Js=306,Kr=1e3,Wn=1001,Zr=1002,Dt=1003,Vc=1004,os=1005,en=1006,ir=1007,$n=1008,gn=1009,Sl=1010,El=1011,ts=1012,Ua=1013,Kn=1014,tn=1015,ns=1016,Na=1017,Fa=1018,Ui=1020,Tl=35902,wl=1021,Al=1022,Yt=1023,Cl=1024,Rl=1025,Ri=1026,Ni=1027,Oa=1028,ka=1029,Il=1030,Ba=1031,za=1033,ks=33776,Bs=33777,zs=33778,Vs=33779,Jr=35840,Qr=35841,ea=35842,ta=35843,na=36196,ia=37492,sa=37496,ra=37808,aa=37809,oa=37810,la=37811,ca=37812,da=37813,ua=37814,ha=37815,fa=37816,pa=37817,ma=37818,_a=37819,ga=37820,va=37821,Gs=36492,ya=36494,xa=36495,Pl=36283,Ma=36284,ba=36285,Sa=36286,Gc=3200,Hc=3201,Va=0,qc=1,Tn="",Bt="srgb",Fi="srgb-linear",$s="linear",Ke="srgb",ni=7680,ho=519,Wc=512,$c=513,Xc=514,Ll=515,Yc=516,jc=517,Kc=518,Zc=519,fo=35044,po="300 es",mn=2e3,Xs=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,Ea=180/Math.PI;function is(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Jc(s,e){return(s%e+e)%e}function sr(s,e,t){return(1-t)*s+t*e}function Hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,r,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],_=n[8],v=i[0],m=i[3],u=i[6],S=i[1],E=i[4],M=i[7],C=i[2],A=i[5],w=i[8];return r[0]=a*v+o*S+l*C,r[3]=a*m+o*E+l*A,r[6]=a*u+o*M+l*w,r[1]=c*v+d*S+f*C,r[4]=c*m+d*E+f*A,r[7]=c*u+d*M+f*w,r[2]=h*v+p*S+_*C,r[5]=h*m+p*E+_*A,r[8]=h*u+p*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*r,p=c*r-a*l,_=t*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new Pe;function Dl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qc(){const s=Ys("canvas");return s.style.display="block",s}const mo={};function Mi(s){s in mo||(mo[s]=!0,console.warn(s))}function ed(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function td(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _o=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const s={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?$s:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Fi]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:_o,fromXYZ:go,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:_o,fromXYZ:go,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}const $e=id();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Ys("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rd=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ar(i[a].image)):r.push(ar(i[a]))}else r=ar(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class St extends ki{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Wn,i=Wn,r=en,a=$n,o=Yt,l=gn,c=St.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=is(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=bl;St.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(p+1)/2,C=(u+1)/2,A=(d+h)/4,w=(f+v)/4,L=(_+m)/4;return E>M&&E>C?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=w/n):M>C?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(h-d)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],f=n[i+3];const h=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||d!==_){let m=1-o;const u=l*h+c*p+d*_+f*v,S=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const C=Math.sqrt(E),A=Math.atan2(C,u*S);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const M=o*S;if(l=l*m+h*M,c=c*m+p*M,d=d*m+_*M,f=f*m+v*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*f+l*p-c*h,e[t+1]=l*_+d*h+c*f-o*p,e[t+2]=c*_+d*p+o*h-l*f,e[t+3]=d*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),f=o(r/2),h=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=i+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new N,vo=new ss;class Jn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),cs.subVectors(this.max,qi),si.subVectors(e.a,qi),ri.subVectors(e.b,qi),ai.subVectors(e.c,qi),vn.subVectors(ri,si),yn.subVectors(ai,ri),Nn.subVectors(si,ai);let t=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-Nn.z,Nn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,Nn.z,0,-Nn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-Nn.y,Nn.x,0];return!lr(t,si,ri,ai,cs)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,si,ri,ai,cs))?!1:(ds.crossVectors(vn,yn),t=[ds.x,ds.y,ds.z],lr(t,si,ri,ai,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new N,new N,new N,new N,new N,new N,new N,new N],Wt=new N,ls=new Jn,si=new N,ri=new N,ai=new N,vn=new N,yn=new N,Nn=new N,qi=new N,cs=new N,ds=new N,Fn=new N;function lr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fn.fromArray(s,r);const o=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),d=n.dot(Fn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const cd=new Jn,Wi=new N,cr=new N;class Bi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(cr)),this.expandByPoint(Wi.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new N,dr=new N,us=new N,xn=new N,ur=new N,hs=new N,hr=new N;class Fl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dr.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=xn.dot(this.direction),l=-xn.dot(us),c=xn.lengthSq(),d=Math.abs(1-a*a);let f,h,p,_;if(d>0)if(f=a*l-o,h=a*o-l,_=r*d,f>=0)if(h>=-_)if(h<=_){const v=1/d;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(dr).addScaledVector(us,h),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,r){ur.subVectors(t,e),hs.subVectors(n,e),hr.crossVectors(ur,hs);let a=this.direction.dot(hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const l=o*this.direction.dot(hs.crossVectors(xn,hs));if(l<0)return null;const c=o*this.direction.dot(ur.cross(xn));if(c<0||l+c>a)return null;const d=-o*xn.dot(hr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,r,a,o,l,c,d,f,h,p,_,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,f,h,p,_,v,m)}set(e,t,n,i,r,a,o,l,c,d,f,h,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*d,p=a*f,_=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,v=c*f;t[0]=h+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*f,_=o*d,v=o*f;t[0]=l*d,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*d,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+v,t[5]=a*d,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*d,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,ud)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Mn.crossVectors(n,Rt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Mn.crossVectors(n,Rt)),Mn.normalize(),fs.crossVectors(Rt,Mn),i[0]=Mn.x,i[4]=fs.x,i[8]=Rt.x,i[1]=Mn.y,i[5]=fs.y,i[9]=Rt.y,i[2]=Mn.z,i[6]=fs.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],_=n[2],v=n[6],m=n[10],u=n[14],S=n[3],E=n[7],M=n[11],C=n[15],A=i[0],w=i[4],L=i[8],b=i[12],x=i[1],I=i[5],G=i[9],B=i[13],j=i[2],K=i[6],$=i[10],J=i[14],V=i[3],re=i[7],ue=i[11],xe=i[15];return r[0]=a*A+o*x+l*j+c*V,r[4]=a*w+o*I+l*K+c*re,r[8]=a*L+o*G+l*$+c*ue,r[12]=a*b+o*B+l*J+c*xe,r[1]=d*A+f*x+h*j+p*V,r[5]=d*w+f*I+h*K+p*re,r[9]=d*L+f*G+h*$+p*ue,r[13]=d*b+f*B+h*J+p*xe,r[2]=_*A+v*x+m*j+u*V,r[6]=_*w+v*I+m*K+u*re,r[10]=_*L+v*G+m*$+u*ue,r[14]=_*b+v*B+m*J+u*xe,r[3]=S*A+E*x+M*j+C*V,r[7]=S*w+E*I+M*K+C*re,r[11]=S*L+E*G+M*$+C*ue,r[15]=S*b+E*B+M*J+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+r*l*f-i*c*f-r*o*h+n*c*h+i*o*p-n*l*p)+v*(+t*l*p-t*c*h+r*a*h-i*a*p+i*c*d-r*l*d)+m*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*d-n*c*d)+u*(-i*o*d-t*l*f+t*o*h+i*a*f-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],S=f*m*c-v*h*c+v*l*p-o*m*p-f*l*u+o*h*u,E=_*h*c-d*m*c-_*l*p+a*m*p+d*l*u-a*h*u,M=d*v*c-_*f*c+_*o*p-a*v*p-d*o*u+a*f*u,C=_*f*l-d*v*l-_*o*h+a*v*h+d*o*m-a*f*m,A=t*S+n*E+i*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(v*h*r-f*m*r-v*i*p+n*m*p+f*i*u-n*h*u)*w,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*u+n*l*u)*w,e[3]=(f*l*r-o*h*r-f*i*c+n*h*c+o*i*p-n*l*p)*w,e[4]=E*w,e[5]=(d*m*r-_*h*r+_*i*p-t*m*p-d*i*u+t*h*u)*w,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*u-t*l*u)*w,e[7]=(a*h*r-d*l*r+d*i*c-t*h*c-a*i*p+t*l*p)*w,e[8]=M*w,e[9]=(_*f*r-d*v*r-_*n*p+t*v*p+d*n*u-t*f*u)*w,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*u+t*o*u)*w,e[11]=(d*o*r-a*f*r-d*n*c+t*f*c+a*n*p-t*o*p)*w,e[12]=C*w,e[13]=(d*v*i-_*f*i+_*n*h-t*v*h-d*n*m+t*f*m)*w,e[14]=(_*o*i-a*v*i-_*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*f*i-d*o*i+d*n*l-t*f*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,h=r*c,p=r*d,_=r*f,v=a*d,m=a*f,u=o*f,S=l*c,E=l*d,M=l*f,C=n.x,A=n.y,w=n.z;return i[0]=(1-(v+u))*C,i[1]=(p+M)*C,i[2]=(_-E)*C,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(h+u))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(_+E)*w,i[9]=(m-S)*w,i[10]=(1-(h+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=oi.set(i[0],i[1],i[2]).length();const a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/r,d=1/a,f=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=d,$t.elements[5]*=d,$t.elements[6]*=d,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=mn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(o===mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Xs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn){const l=this.elements,c=1/(t-e),d=1/(n-i),f=1/(a-r),h=(t+e)*c,p=(n+i)*d;let _,v;if(o===mn)_=(a+r)*f,v=-2*f;else if(o===Xs)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new N,$t=new Qe,dd=new N(0,0,0),ud=new N(1,1,1),Mn=new N,fs=new N,Rt=new N,yo=new Qe,xo=new ss;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hd=0;const Mo=new N,li=new ss,cn=new Qe,ps=new N,$i=new N,fd=new N,pd=new ss,bo=new N(1,0,0),So=new N(0,1,0),Eo=new N(0,0,1),To={type:"added"},md={type:"removed"},ci={type:"childadded",child:null},fr={type:"childremoved",child:null};class dt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new Zt,n=new ss,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(So,e)}rotateZ(e){return this.rotateOnAxis(Eo,e)}translateOnAxis(e,t){return Mo.copy(e).applyQuaternion(this.quaternion),this.position.add(Mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(So,e)}translateZ(e){return this.translateOnAxis(Eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt($i,ps,this.up):cn.lookAt(ps,$i,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(To),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(To),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new N,dn=new N,pr=new N,un=new N,di=new N,ui=new N,wo=new N,mr=new N,_r=new N,gr=new N,vr=new at,yr=new at,xr=new at;class Vt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),dn.subVectors(n,t),pr.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(dn),l=Xt.dot(pr),c=dn.dot(dn),d=dn.dot(pr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,_=(a*d-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vr.setScalar(0),yr.setScalar(0),xr.setScalar(0),vr.fromBufferAttribute(e,t),yr.fromBufferAttribute(e,n),xr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(yr,r.y),a.addScaledVector(xr,r.z),a}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),dn.subVectors(e,t),Xt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),ui.subVectors(r,n),mr.subVectors(e,n);const l=di.dot(mr),c=ui.dot(mr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,i);const d=di.dot(_r),f=ui.dot(_r);if(d>=0&&f<=d)return t.copy(i);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(di,a);gr.subVectors(e,r);const p=di.dot(gr),_=ui.dot(gr);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ui,o);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return wo.subVectors(r,i),o=(f-d)/(f-d+(p-_)),t.copy(i).addScaledVector(wo,o);const u=1/(m+v+h);return a=v*u,o=h*u,t.copy(n).addScaledVector(di,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Mr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Jc(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mr(a,r,e+1/3),this.g=Mr(a,r,e),this.b=Mr(a,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return $e.fromWorkingColorSpace(vt.copy(this),e),Math.round(Fe(vt.r*255,0,255))*65536+Math.round(Fe(vt.g*255,0,255))*256+Math.round(Fe(vt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,r=vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Bt){$e.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ms);const n=sr(bn.h,ms.h,t),i=sr(bn.s,ms.s,t),r=sr(bn.l,ms.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new ye;ye.NAMES=kl;let _d=0;class Qn extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ci,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=zr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Br&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bl extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new N,_s=new ze;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}}class zl extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vl extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gd=0;const Ot=new Qe,br=new dt,hi=new N,It=new Jn,Xi=new Jn,ft=new N;class Gt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Vl:zl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(It.min,Xi.min),It.expandByPoint(ft),ft.addVectors(It.max,Xi.max),It.expandByPoint(ft)):(It.expandByPoint(Xi.min),It.expandByPoint(Xi.max))}It.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ft.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),ft.add(hi)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,d=new N,f=new N,h=new ze,p=new ze,_=new ze,v=new N,m=new N;function u(L,b,x){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,x),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(I),o[L].add(v),o[b].add(v),o[x].add(v),l[L].add(m),l[b].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,b=S.length;L<b;++L){const x=S[L],I=x.start,G=x.count;for(let B=I,j=I+G;B<j;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new N,M=new N,C=new N,A=new N;function w(L){C.fromBufferAttribute(i,L),A.copy(C);const b=o[L];E.copy(b),E.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(A,b);const I=M.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,b=S.length;L<b;++L){const x=S[L],I=x.start,G=x.count;for(let B=I,j=I+G;B<j;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Kt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ao=new Qe,On=new Fl,gs=new Bi,Co=new N,vs=new N,ys=new N,xs=new N,Sr=new N,Ms=new N,Ro=new N,bs=new N;class xt extends dt{constructor(e=new Gt,t=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Sr.fromBufferAttribute(f,e),a?Ms.addScaledVector(Sr,d):Ms.addScaledVector(Sr.sub(t),d))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(gs.containsPoint(On.origin)===!1&&(On.intersectSphere(gs,Co)===null||On.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ao.copy(r).invert(),On.copy(e.ray).applyMatrix4(Ao),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=E;M<C;M+=3){const A=o.getX(M),w=o.getX(M+1),L=o.getX(M+2);i=Ss(this,u,e,n,c,d,f,A,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const S=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=Ss(this,a,e,n,c,d,f,S,E,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=E;M<C;M+=3){const A=M,w=M+1,L=M+2;i=Ss(this,u,e,n,c,d,f,A,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const S=m,E=m+1,M=m+2;i=Ss(this,a,e,n,c,d,f,S,E,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vd(s,e,t,n,i,r,a,o){let l;if(e.side===At?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Rn,o),l===null)return null;bs.copy(o),bs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:s}}function Ss(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,vs),s.getVertexPosition(l,ys),s.getVertexPosition(c,xs);const d=vd(s,e,t,n,vs,ys,xs,Ro);if(d){const f=new N;Vt.getBarycoord(Ro,vs,ys,xs,f),i&&(d.uv=Vt.getInterpolatedAttribute(i,o,l,c,f,new ze)),r&&(d.uv1=Vt.getInterpolatedAttribute(r,o,l,c,f,new ze)),a&&(d.normal=Vt.getInterpolatedAttribute(a,o,l,c,f,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Vt.getNormal(vs,ys,xs,h.normal),d.face=h,d.barycoord=f}return d}class In extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function _(v,m,u,S,E,M,C,A,w,L,b){const x=M/w,I=C/L,G=M/2,B=C/2,j=A/2,K=w+1,$=L+1;let J=0,V=0;const re=new N;for(let ue=0;ue<$;ue++){const xe=ue*I-B;for(let Ue=0;Ue<K;Ue++){const Ze=Ue*x-G;re[v]=Ze*S,re[m]=xe*E,re[u]=j,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[u]=A>0?1:-1,d.push(re.x,re.y,re.z),f.push(Ue/w),f.push(1-ue/L),J+=1}}for(let ue=0;ue<L;ue++)for(let xe=0;xe<w;xe++){const Ue=h+xe+K*ue,Ze=h+xe+K*(ue+1),W=h+(xe+1)+K*(ue+1),te=h+(xe+1)+K*ue;l.push(Ue,Ze,te),l.push(Ze,W,te),V+=6}o.addGroup(p,V,b),p+=V,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const n=Oi(s[t]);for(const i in n)e[i]=n[i]}return e}function yd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const xd={clone:Oi,merge:bt};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new N,Io=new ze,Po=new ze;class zt extends Hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Po),t.subVectors(Po,Io)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Sd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(fi,pi,e,t);i.layers=this.layers,this.add(i);const r=new zt(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new zt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new zt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new zt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new zt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ql extends St{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ed extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ql(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new In(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:An});r.uniforms.tEquirect.value=t;const a=new xt(i,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=en),new Sd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Ga{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Td extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wd extends St{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Dt,d=Dt,f,h){super(null,a,o,l,c,d,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new Qe,Do=new Qe,Es=[],Uo=new Jn,Ad=new Qe,Yi=new xt,ji=new Bi;class Cd extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ad)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Uo.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(Uo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),ji.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),e.ray.intersectsSphere(ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mi),Do.multiplyMatrices(n,mi),Yi.matrixWorld=Do,Yi.raycast(e,Es);for(let a=0,o=Es.length;a<o;a++){const l=Es[a];l.instanceId=r,l.object=this,t.push(l)}Es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wd(new Float32Array(i*this.count),i,this.count,Oa,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Er=new N,Rd=new N,Id=new Pe;class Vn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Bi,Ts=new N;class Ha{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],f=i[6],h=i[7],p=i[8],_=i[9],v=i[10],m=i[11],u=i[12],S=i[13],E=i[14],M=i[15];if(n[0].setComponents(l-r,h-c,m-p,M-u).normalize(),n[1].setComponents(l+r,h+c,m+p,M+u).normalize(),n[2].setComponents(l+a,h+d,m+_,M+S).normalize(),n[3].setComponents(l-a,h-d,m-_,M-S).normalize(),n[4].setComponents(l-o,h-f,m-v,M-E).normalize(),t===mn)n[5].setComponents(l+o,h+f,m+v,M+E).normalize();else if(t===Xs)n[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qa extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const js=new N,Ks=new N,No=new Qe,Ki=new Fl,ws=new Bi,Tr=new N,Fo=new N;class Pd extends dt{constructor(e=new Gt,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)js.fromBufferAttribute(t,i-1),Ks.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=js.distanceTo(Ks);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;No.copy(i).invert(),Ki.copy(e.ray).applyMatrix4(No);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const u=d.getX(v),S=d.getX(v+1),E=As(this,e,Ki,l,u,S);E&&t.push(E)}if(this.isLineLoop){const v=d.getX(_-1),m=d.getX(p),u=As(this,e,Ki,l,v,m);u&&t.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const u=As(this,e,Ki,l,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=As(this,e,Ki,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function As(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(js.fromBufferAttribute(a,i),Ks.fromBufferAttribute(a,r),t.distanceSqToSegment(js,Ks,Tr,Fo)>n)return;Tr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Tr);if(!(l<e.near||l>e.far))return{distance:l,point:Fo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Oo=new N,ko=new N;class Wl extends Pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Oo.fromBufferAttribute(t,i),ko.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oo.distanceTo(ko);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $l extends St{constructor(e,t,n,i,r,a,o,l,c,d=Ri){if(d!==Ri&&d!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ri&&(n=Kn),n===void 0&&d===Ni&&(n=Ui),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wa extends Gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),d(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new N,M=new N,C=new N;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],C),l(E,M,C,S)}function l(S,E,M,C){const A=C+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const b=S.clone().lerp(M,L/A),x=E.clone().lerp(M,L/A),I=A-L;for(let G=0;G<=I;G++)G===0&&L===A?w[L][G]=b:w[L][G]=b.clone().lerp(x,G/I)}for(let L=0;L<A;L++)for(let b=0;b<2*(A-L)-1;b++){const x=Math.floor(b/2);b%2===0?(h(w[L][x+1]),h(w[L+1][x]),h(w[L][x])):(h(w[L][x+1]),h(w[L+1][x+1]),h(w[L+1][x]))}}function c(S){const E=new N;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(S),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function d(){const S=new N;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const M=m(S)/2/Math.PI+.5,C=u(S)/Math.PI+.5;a.push(M,1-C)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){const E=a[S+0],M=a[S+2],C=a[S+4],A=Math.max(E,M,C),w=Math.min(E,M,C);A>.9&&w<.1&&(E<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,E){const M=S*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){const S=new N,E=new N,M=new N,C=new N,A=new ze,w=new ze,L=new ze;for(let b=0,x=0;b<r.length;b+=9,x+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),C.copy(S).add(E).add(M).divideScalar(3);const I=m(C);v(A,x+0,S,I),v(w,x+2,E,I),v(L,x+4,M,I)}}function v(S,E,M,C){C<0&&S.x===1&&(a[E]=S.x-1),M.x===0&&M.z===0&&(a[E]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.vertices,e.indices,e.radius,e.details)}}const Cs=new N,Rs=new N,wr=new N,Is=new Vt;class Ld extends Gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Hs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:u}=Is;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Is.getNormal(wr),f[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const E=(S+1)%3,M=f[S],C=f[E],A=Is[d[S]],w=Is[d[E]],L=`${M}_${C}`,b=`${C}_${M}`;b in h&&h[b]?(wr.dot(h[b].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(w.x,w.y,w.z)),h[b]=null):L in h||(h[L]={index0:c[S],index1:c[E],normal:wr.clone()})}}for(const _ in h)if(h[_]){const{index0:v,index1:m}=h[_];Cs.fromBufferAttribute(o,v),Rs.fromBufferAttribute(o,m),p.push(Cs.x,Cs.y,Cs.z),p.push(Rs.x,Rs.y,Rs.z)}this.setAttribute("position",new pt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $a extends Wa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $a(e.radius,e.detail)}}class zi extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,f=e/o,h=t/l,p=[],_=[],v=[],m=[];for(let u=0;u<d;u++){const S=u*h-a;for(let E=0;E<c;E++){const M=E*f-r;_.push(M,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const E=S+c*u,M=S+c*(u+1),C=S+1+c*(u+1),A=S+1+c*u;p.push(E,M,A),p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xa extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new N,h=new N,p=[],_=[],v=[],m=[];for(let u=0;u<=n;u++){const S=[],E=u/n;let M=0;u===0&&a===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;f.x=-e*Math.cos(i+A*r)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(i+A*r)*Math.sin(a+E*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+M,1-E),S.push(c++)}d.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const E=d[u][S+1],M=d[u][S],C=d[u+1][S],A=d[u+1][S+1];(u!==0||a>0)&&p.push(E,M,A),(u!==n-1||l<Math.PI)&&p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ps extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ta extends Qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dd extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ud extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ya extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nd extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new Qe,Bo=new N,zo=new N;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bo),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xl extends Hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Od extends Fd{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kd extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Od}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bd extends Ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zd extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vo(){return performance.now()}class Gd extends Wl{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,_=-o;h<=t;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const v=h===r?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const d=new Gt;d.setAttribute("position",new pt(l,3)),d.setAttribute("color",new pt(c,3));const f=new qa({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Go(s,e,t,n){const i=Hd(n);switch(t){case wl:return s*e;case Cl:return s*e;case Rl:return s*e*2;case Oa:return s*e/i.components*i.byteLength;case ka:return s*e/i.components*i.byteLength;case Il:return s*e*2/i.components*i.byteLength;case Ba:return s*e*2/i.components*i.byteLength;case Al:return s*e*3/i.components*i.byteLength;case Yt:return s*e*4/i.components*i.byteLength;case za:return s*e*4/i.components*i.byteLength;case ks:case Bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zs:case Vs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qr:case ta:return Math.max(s,16)*Math.max(e,8)/4;case Jr:case ea:return Math.max(s,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gs:case ya:case xa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pl:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ba:case Sa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(s){switch(s){case gn:case Sl:return{byteLength:1,components:1};case ts:case El:case ns:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case Kn:case Ua:case tn:return{byteLength:4,components:1};case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qd(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Su=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
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
}`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Hu=`struct PhysicalMaterial {
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
}`,qu=`
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eh=`#if defined( USE_POINTS_UV )
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
#endif`,th=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ih=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ah=`#ifdef USE_MORPHTARGETS
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
#endif`,oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ch=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fh=`#ifdef USE_NORMALMAP
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
#endif`,ph=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rh=`float getShadowMask() {
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
}`,Ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dh=`#ifdef USE_SKINNING
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
#endif`,Uh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kh=`#ifdef USE_TRANSMISSION
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
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wh=`uniform sampler2D t2D;
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`#include <common>
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
}`,Zh=`#if DEPTH_PACKING == 3200
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
}`,Jh=`#define DISTANCE
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
}`,Qh=`#define DISTANCE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,cf=`#define MATCAP
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
}`,df=`#define MATCAP
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
}`,uf=`#define NORMAL
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
}`,hf=`#define NORMAL
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
}`,ff=`#define PHONG
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
}`,pf=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,gf=`#define TOON
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
}`,vf=`#define TOON
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
}`,yf=`uniform float size;
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
}`,xf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,bf=`uniform vec3 color;
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
}`,Sf=`uniform float rotation;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Wd,alphahash_pars_fragment:$d,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:jd,alphatest_pars_fragment:Kd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:du,color_pars_fragment:uu,color_pars_vertex:hu,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:_u,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:yu,emissivemap_pars_fragment:xu,colorspace_fragment:Mu,colorspace_pars_fragment:bu,envmap_fragment:Su,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Ou,envmap_vertex:Au,fog_vertex:Cu,fog_pars_vertex:Ru,fog_fragment:Iu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Du,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:ku,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Hu,lights_fragment_begin:qu,lights_fragment_maps:Wu,lights_fragment_end:$u,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:Ku,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:eh,metalnessmap_fragment:th,metalnessmap_pars_fragment:nh,morphinstance_vertex:ih,morphcolor_vertex:sh,morphnormal_vertex:rh,morphtarget_pars_vertex:ah,morphtarget_vertex:oh,normal_fragment_begin:lh,normal_fragment_maps:ch,normal_pars_fragment:dh,normal_pars_vertex:uh,normal_vertex:hh,normalmap_pars_fragment:fh,clearcoat_normal_fragment_begin:ph,clearcoat_normal_fragment_maps:mh,clearcoat_pars_fragment:_h,iridescence_pars_fragment:gh,opaque_fragment:vh,packing:yh,premultiplied_alpha_fragment:xh,project_vertex:Mh,dithering_fragment:bh,dithering_pars_fragment:Sh,roughnessmap_fragment:Eh,roughnessmap_pars_fragment:Th,shadowmap_pars_fragment:wh,shadowmap_pars_vertex:Ah,shadowmap_vertex:Ch,shadowmask_pars_fragment:Rh,skinbase_vertex:Ih,skinning_pars_vertex:Ph,skinning_vertex:Lh,skinnormal_vertex:Dh,specularmap_fragment:Uh,specularmap_pars_fragment:Nh,tonemapping_fragment:Fh,tonemapping_pars_fragment:Oh,transmission_fragment:kh,transmission_pars_fragment:Bh,uv_pars_fragment:zh,uv_pars_vertex:Vh,uv_vertex:Gh,worldpos_vertex:Hh,background_vert:qh,background_frag:Wh,backgroundCube_vert:$h,backgroundCube_frag:Xh,cube_vert:Yh,cube_frag:jh,depth_vert:Kh,depth_frag:Zh,distanceRGBA_vert:Jh,distanceRGBA_frag:Qh,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:of,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:df,meshnormal_vert:uf,meshnormal_frag:hf,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:_f,meshtoon_vert:gf,meshtoon_frag:vf,points_vert:yf,points_frag:xf,shadow_vert:Mf,shadow_frag:bf,sprite_vert:Sf,sprite_frag:Ef},ne={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Jt={basic:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:bt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:bt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:bt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:bt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:bt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:bt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:bt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:bt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:bt([ne.common,ne.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:bt([ne.lights,ne.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Jt.physical={uniforms:bt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ls={r:0,b:0,g:0},Bn=new Zt,Tf=new Qe;function wf(s,e,t,n,i,r,a){const o=new ye(0);let l=r===!0?0:1,c,d,f=null,h=0,p=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function v(E){let M=!1;const C=_(E);C===null?u(o,l):C&&C.isColor&&(u(C,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,M){const C=_(M);C&&(C.isCubeTexture||C.mapping===Js)?(d===void 0&&(d=new xt(new In(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Oi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Bn.copy(M.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(Bn)),d.material.toneMapped=$e.getTransfer(C.colorSpace)!==Ke,(f!==C||h!==C.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new xt(new zi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Oi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$e.getTransfer(C.colorSpace)!==Ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,M){E.getRGB(Ls,Gl(s)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,M,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:v,addToRenderList:m,dispose:S}}function Af(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(x,I,G,B,j){let K=!1;const $=f(B,G,I);r!==$&&(r=$,c(r.object)),K=p(x,B,G,j),K&&_(x,B,G,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(x,I,G,B),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function f(x,I,G){const B=G.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let K=j[I.id];K===void 0&&(K={},j[I.id]=K);let $=K[B];return $===void 0&&($=h(l()),K[B]=$),$}function h(x){const I=[],G=[],B=[];for(let j=0;j<t;j++)I[j]=0,G[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,I,G,B){const j=r.attributes,K=I.attributes;let $=0;const J=G.getAttributes();for(const V in J)if(J[V].location>=0){const ue=j[V];let xe=K[V];if(xe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function _(x,I,G,B){const j={},K=I.attributes;let $=0;const J=G.getAttributes();for(const V in J)if(J[V].location>=0){let ue=K[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),j[V]=xe,$++}r.attributes=j,r.attributesNum=$,r.index=B}function v(){const x=r.newAttributes;for(let I=0,G=x.length;I<G;I++)x[I]=0}function m(x){u(x,0)}function u(x,I){const G=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;G[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),j[x]!==I&&(s.vertexAttribDivisor(x,I),j[x]=I)}function S(){const x=r.newAttributes,I=r.enabledAttributes;for(let G=0,B=I.length;G<B;G++)I[G]!==x[G]&&(s.disableVertexAttribArray(G),I[G]=0)}function E(x,I,G,B,j,K,$){$===!0?s.vertexAttribIPointer(x,I,G,j,K):s.vertexAttribPointer(x,I,G,B,j,K)}function M(x,I,G,B){v();const j=B.attributes,K=G.getAttributes(),$=I.defaultAttributeValues;for(const J in K){const V=K[J];if(V.location>=0){let re=j[J];if(re===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const ue=re.normalized,xe=re.itemSize,Ue=e.get(re);if(Ue===void 0)continue;const Ze=Ue.buffer,W=Ue.type,te=Ue.bytesPerElement,_e=W===s.INT||W===s.UNSIGNED_INT||re.gpuType===Ua;if(re.isInterleavedBufferAttribute){const ae=re.data,Te=ae.stride,Ce=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)u(V.location+Ne,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<V.locationSize;Ne++)E(V.location+Ne,xe/V.locationSize,W,ue,Te*te,(Ce+xe/V.locationSize*Ne)*te,_e)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)u(V.location+ae,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ae=0;ae<V.locationSize;ae++)E(V.location+ae,xe/V.locationSize,W,ue,xe*te,xe/V.locationSize*ae*te,_e)}}else if($!==void 0){const ue=$[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(V.location,ue);break;case 3:s.vertexAttrib3fv(V.location,ue);break;case 4:s.vertexAttrib4fv(V.location,ue);break;default:s.vertexAttrib1fv(V.location,ue)}}}}S()}function C(){L();for(const x in n){const I=n[x];for(const G in I){const B=I[G];for(const j in B)d(B[j].object),delete B[j];delete I[G]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const G in I){const B=I[G];for(const j in B)d(B[j].object),delete B[j];delete I[G]}delete n[x.id]}function w(x){for(const I in n){const G=n[I];if(G[x.id]===void 0)continue;const B=G[x.id];for(const j in B)d(B[j].object),delete B[j];delete G[x.id]}}function L(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Cf(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,f){f!==0&&(s.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];t.update(p,n,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v]*h[v];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Yt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!L)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function If(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?d(null):c();else{const S=r?0:n,E=S*4;let M=u.clippingState||null;l.value=M,M=d(_,h,E,p);for(let C=0;C!==E;++C)M[C]=t[C];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=p;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pf(s){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=Li:o===jr&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===jr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ed(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,Ho=[.125,.215,.35,.446,.526,.582],qn=20,Cr=new Xl,qo=new ye;let Rr=null,Ir=0,Pr=0,Lr=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,Wo=[new N(-Gn,_i,0),new N(Gn,_i,0),new N(-_i,0,Gn),new N(_i,0,Gn),new N(0,Gn,-_i),new N(0,Gn,_i),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Rr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Ir,Pr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ns,format:Yt,colorSpace:Fi,depthBuffer:!1},i=Xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(r)),this._blurMaterial=Df(r,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qo),d.toneMapping=Cn,d.autoClear=!1;const p=new Bl({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new xt(new In,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(qo),v=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;Ds(i,S*E,u>2?E:0,E,E),d.setRenderTarget(i),v&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wo[(i-r-1)%Wo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new xt(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),v=r/_,m=isFinite(r)?1+Math.floor(d*v):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const u=[];let S=0;for(let w=0;w<qn;++w){const L=w/v,b=Math.exp(-L*L/2);u.push(b),w===0?S+=b:w<m&&(S+=2*b)}for(let w=0;w<u.length;w++)u[w]=u[w]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const M=this._sizeLods[i],C=3*M*(i>E-Si?i-E+Si:0),A=4*(this._cubeSize-M);Ds(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(f,Cr)}}function Lf(s){const e=[],t=[],n=[];let i=s;const r=s-Si+1+Ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Si?l=Ho[a-s+Si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,v=3,m=2,u=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,L=A>2?0:-1,b=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];S.set(b,v*_*A),E.set(h,m*_*A);const x=[A,A,A,A,A,A];M.set(x,u*_*A)}const C=new Gt;C.setAttribute("position",new Kt(S,v)),C.setAttribute("uv",new Kt(E,m)),C.setAttribute("faceIndex",new Kt(M,u)),e.push(C),i>Si&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xo(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Df(s,e,t){const n=new Float32Array(qn),i=new N(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Yo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function jo(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Uf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yr||l===jr,d=l===Li||l===Di;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new $o(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new $o(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Mi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ff(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],s.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,M=S.length;E<M;E+=3){const C=S[E+0],A=S[E+1],w=S[E+2];h.push(C,A,A,w,w,C)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const C=E+0,A=E+1,w=E+2;h.push(C,A,A,w,w,C)}}else return;const m=new(Dl(h)?Vl:zl)(h,1);m.version=v;const u=r.get(f);u&&e.remove(u),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Of(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){s.drawElements(n,p,r,h*a),t.update(p,n,1)}function c(h,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,h*a,_),t.update(p,n,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,v,0,_);let u=0;for(let S=0;S<_;S++)u+=p[S]*v[S];t.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function kf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bf(s,e,t){const n=new WeakMap,i=new at;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*f),L=new Nl(w,C,A,f);L.type=tn,L.needsUpdate=!0;const b=M*4;for(let I=0;I<f;I++){const G=u[I],B=S[I],j=E[I],K=C*A*4*I;for(let $=0;$<G.count;$++){const J=$*b;_===!0&&(i.fromBufferAttribute(G,$),w[K+J+0]=i.x,w[K+J+1]=i.y,w[K+J+2]=i.z,w[K+J+3]=0),v===!0&&(i.fromBufferAttribute(B,$),w[K+J+4]=i.x,w[K+J+5]=i.y,w[K+J+6]=i.z,w[K+J+7]=0),m===!0&&(i.fromBufferAttribute(j,$),w[K+J+8]=i.x,w[K+J+9]=i.y,w[K+J+10]=i.z,w[K+J+11]=j.itemSize===4?i.w:1)}}h={count:f,texture:L,size:new ze(C,A)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function zf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const jl=new St,Ko=new $l(1,1),Kl=new Nl,Zl=new ld,Jl=new ql,Zo=[],Jo=[],Qo=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Vi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Zo[i];if(r===void 0&&(r=new Float32Array(i),Zo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qs(s,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function Wf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;tl.set(n),s.uniformMatrix2fv(this.addr,!1,tl),ht(t,n)}}function $f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;el.set(n),s.uniformMatrix3fv(this.addr,!1,el),ht(t,n)}}function Xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Qo.set(n),s.uniformMatrix4fv(this.addr,!1,Qo),ht(t,n)}}function Yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function Jf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function np(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ko.compareFunction=Ll,r=Ko):r=jl,t.setTexture2D(e||r,i)}function ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zl,i)}function sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jl,i)}function rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kl,i)}function ap(s){switch(s){case 5126:return Vf;case 35664:return Gf;case 35665:return Hf;case 35666:return qf;case 35674:return Wf;case 35675:return $f;case 35676:return Xf;case 5124:case 35670:return Yf;case 35667:case 35671:return jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function op(s,e){s.uniform1fv(this.addr,e)}function lp(s,e){const t=Vi(e,this.size,2);s.uniform2fv(this.addr,t)}function cp(s,e){const t=Vi(e,this.size,3);s.uniform3fv(this.addr,t)}function dp(s,e){const t=Vi(e,this.size,4);s.uniform4fv(this.addr,t)}function up(s,e){const t=Vi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hp(s,e){const t=Vi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fp(s,e){const t=Vi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pp(s,e){s.uniform1iv(this.addr,e)}function mp(s,e){s.uniform2iv(this.addr,e)}function _p(s,e){s.uniform3iv(this.addr,e)}function gp(s,e){s.uniform4iv(this.addr,e)}function vp(s,e){s.uniform1uiv(this.addr,e)}function yp(s,e){s.uniform2uiv(this.addr,e)}function xp(s,e){s.uniform3uiv(this.addr,e)}function Mp(s,e){s.uniform4uiv(this.addr,e)}function bp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jl,r[a])}function Sp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Zl,r[a])}function Ep(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jl,r[a])}function Tp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kl,r[a])}function wp(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return dp;case 35674:return up;case 35675:return hp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return _p;case 35669:case 35673:return gp;case 5125:return vp;case 36294:return yp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class Ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ap(t.type)}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function nl(s,e){s.seq.push(e),s.map[e.id]=e}function Ip(s,e,t){const n=s.name,i=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),a=Dr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nl(t,c===void 0?new Ap(o,s,e):new Cp(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Rp(o),nl(t,f)),t=f}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ip(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function il(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Pp=37297;let Lp=0;function Dp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sl=new Pe;function Up(s){$e._getMatrix(sl,$e.workingColorSpace,s);const e=`mat3( ${sl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case $s:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function rl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dp(s.getShaderSource(e),a)}else return i}function Np(s,e){const t=Up(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fp(s,e){let t;switch(e){case Nc:t="Linear";break;case Fc:t="Reinhard";break;case Oc:t="Cineon";break;case Ml:t="ACESFilmic";break;case Bc:t="AgX";break;case zc:t="Neutral";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new N;function Op(){$e.getLuminanceCoefficients(Us);const s=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Bp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Qi(s){return s!==""}function al(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(s){return s.replace(Vp,Hp)}const Gp=new Map;function Hp(s,e){let t=De[e];if(t===void 0){const n=Gp.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wa(t)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(s){return s.replace(qp,Wp)}function Wp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function $p(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Di:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function jp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$p(t),c=Xp(t),d=Yp(t),f=jp(t),h=Kp(t),p=kp(t),_=Bp(r),v=i.createProgram();let m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qi).join(`
`),u.length>0&&(u+=`
`)):(m=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),u=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?De.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Np("linearToOutputTexel",t.outputColorSpace),Op(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),a=wa(a),a=al(a,t),a=ol(a,t),o=wa(o),o=al(o,t),o=ol(o,t),a=ll(a),o=ll(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=S+m+a,M=S+u+o,C=il(i,i.VERTEX_SHADER,E),A=il(i,i.FRAGMENT_SHADER,M);i.attachShader(v,C),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(I){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(C).trim(),j=i.getShaderInfoLog(A).trim();let K=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,A);else{const J=rl(i,C,"vertex"),V=rl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+J+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||j==="")&&($=!1);$&&(I.diagnostics={runnable:K,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:u}})}i.deleteShader(C),i.deleteShader(A),L=new qs(i,v),b=zp(i,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Pp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function tm(s,e,t,n,i,r,a){const o=new Ol,l=new Qp,c=new Set,d=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,I,G,B){const j=G.fog,K=B.geometry,$=b.isMeshStandardMaterial?G.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),V=J&&J.mapping===Js?J.image.height:null,re=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let Ze,W,te,_e;if(re){const je=Jt[re];Ze=je.vertexShader,W=je.fragmentShader}else Ze=b.vertexShader,W=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const ae=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,nt=!!b.map,Ve=!!b.matcap,ot=!!J,R=!!b.aoMap,Ut=!!b.lightMap,Oe=!!b.bumpMap,ke=!!b.normalMap,Me=!!b.displacementMap,et=!!b.emissiveMap,ve=!!b.metalnessMap,T=!!b.roughnessMap,g=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,Z=b.iridescence>0,q=b.sheen>0,ge=b.transmission>0,oe=g&&!!b.anisotropyMap,he=F&&!!b.clearcoatMap,Ge=F&&!!b.clearcoatNormalMap,ee=F&&!!b.clearcoatRoughnessMap,fe=Z&&!!b.iridescenceMap,Ee=Z&&!!b.iridescenceThicknessMap,we=q&&!!b.sheenColorMap,pe=q&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Le=!!b.specularColorMap,Je=!!b.specularIntensityMap,P=ge&&!!b.transmissionMap,ie=ge&&!!b.thicknessMap,z=!!b.gradientMap,Y=!!b.alphaMap,ce=b.alphaTest>0,le=!!b.alphaHash,Ie=!!b.extensions;let it=Cn;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(it=s.toneMapping);const _t={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:W,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Fi,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:Ve,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:Ut,bumpMap:Oe,normalMap:ke,displacementMap:h&&Me,emissiveMap:et,normalMapObjectSpace:ke&&b.normalMapType===qc,normalMapTangentSpace:ke&&b.normalMapType===Va,metalnessMap:ve,roughnessMap:T,anisotropy:g,anisotropyMap:oe,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ee,dispersion:X,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:q,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:Be,specularColorMap:Le,specularIntensityMap:Je,transmission:ge,transmissionMap:P,thicknessMap:ie,gradientMap:z,opaque:b.transparent===!1&&b.blending===Ci&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:le,combine:b.combine,mapUv:nt&&v(b.map.channel),aoMapUv:R&&v(b.aoMap.channel),lightMapUv:Ut&&v(b.lightMap.channel),bumpMapUv:Oe&&v(b.bumpMap.channel),normalMapUv:ke&&v(b.normalMap.channel),displacementMapUv:Me&&v(b.displacementMap.channel),emissiveMapUv:et&&v(b.emissiveMap.channel),metalnessMapUv:ve&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:oe&&v(b.anisotropyMap.channel),clearcoatMapUv:he&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Be&&v(b.specularMap.channel),specularColorMapUv:Le&&v(b.specularColorMap.channel),specularIntensityMapUv:Je&&v(b.specularIntensityMap.channel),transmissionMapUv:P&&v(b.transmissionMap.channel),thicknessMapUv:ie&&v(b.thicknessMap.channel),alphaMapUv:Y&&v(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ke||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(nt||Y),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===Ke,decodeVideoTextureEmissive:et&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qt,flipSided:b.side===At,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function u(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)x.push(I),x.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(x,b),E(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function E(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const x=_[b.type];let I;if(x){const G=Jt[x];I=xd.clone(G.uniforms)}else I=b.uniforms;return I}function C(b,x){let I;for(let G=0,B=d.length;G<B;G++){const j=d[G];if(j.cacheKey===x){I=j,++I.usedTimes;break}}return I===void 0&&(I=new Zp(s,x,b,r),d.push(I)),I}function A(b){if(--b.usedTimes===0){const x=d.indexOf(b);d[x]=d[d.length-1],d.pop(),b.destroy()}}function w(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:L}}function nm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function dl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ul(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,p,_,v,m){let u=s[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},s[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function o(f,h,p,_,v,m){const u=a(f,h,p,_,v,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(f,h,p,_,v,m){const u=a(f,h,p,_,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||im),n.length>1&&n.sort(h||dl),i.length>1&&i.sort(h||dl)}function d(){for(let f=e,h=s.length;f<h;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function sm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ul,s.set(n,[a])):i>=r.length?(a=new ul,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function rm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ye};break;case"SpotLight":t={position:new N,direction:new N,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function am(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let om=0;function lm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cm(s){const e=new rm,t=am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new Qe,a=new Qe;function o(c){let d=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,S=0,E=0,M=0,C=0,A=0,w=0;c.sort(lm);for(let b=0,x=c.length;b<x;b++){const I=c[b],G=I.color,B=I.intensity,j=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*B,f+=G.g*B,h+=G.b*B;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],B);w++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(G).multiplyScalar(B),$.distance=j,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[v]=$;const J=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=K,M++}v++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const J=I.shadow,V=t.get(I);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=I.shadow.matrix,E++}n.point[_]=$,_++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(B),$.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[u]=$,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=p,L.pointLength=_,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=w,n.version=om++)}function l(c,d){let f=0,h=0,p=0,_=0,v=0;const m=d.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const E=c[u];if(E.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function hl(s){const e=new cm(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new hl(s),e.set(i,[o])):r>=a.length?(o=new hl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
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
}`;function fm(s,e,t){let n=new Ha;const i=new ze,r=new ze,a=new at,o=new Dd({depthPacking:Hc}),l=new Ud,c={},d=t.maxTextureSize,f={[Rn]:At,[At]:Rn,[Qt]:Qt},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:um,fragmentShader:hm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let u=this.type;this.render=function(A,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),G=s.state;G.setBlending(An),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=u!==fn&&this.type===fn,j=u===fn&&this.type!==fn;for(let K=0,$=A.length;K<$;K++){const J=A[K],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const re=V.getFrameExtents();if(i.multiply(re),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/re.x),i.x=r.x*re.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/re.y),i.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||B===!0||j===!0){const xe=this.type!==fn?{minFilter:Dt,magFilter:Dt}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(i.x,i.y,xe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ue=V.getViewportCount();for(let xe=0;xe<ue;xe++){const Ue=V.getViewport(xe);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),G.viewport(a),V.updateMatrices(J,xe),n=V.getFrustum(),M(w,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&S(V,L),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,I)};function S(A,w){const L=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,L,h,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,L,p,v,null)}function E(A,w,L,b){let x=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)x=I;else if(x=L.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=x.uuid,B=w.uuid;let j=c[G];j===void 0&&(j={},c[G]=j);let K=j[B];K===void 0&&(K=x.clone(),j[B]=K,w.addEventListener("dispose",C)),x=K}if(x.visible=w.visible,x.wireframe=w.wireframe,b===fn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=L}return x}function M(A,w,L,b,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),j=A.material;if(Array.isArray(j)){const K=B.groups;for(let $=0,J=K.length;$<J;$++){const V=K[$],re=j[V.materialIndex];if(re&&re.visible){const ue=E(A,re,b,x);A.onBeforeShadow(s,A,w,L,B,ue,V),s.renderBufferDirect(L,null,B,ue,A,V),A.onAfterShadow(s,A,w,L,B,ue,V)}}}else if(j.visible){const K=E(A,j,b,x);A.onBeforeShadow(s,A,w,L,B,K,null),s.renderBufferDirect(L,null,B,K,A,null),A.onAfterShadow(s,A,w,L,B,K,null)}}const G=A.children;for(let B=0,j=G.length;B<j;B++)M(G[B],w,L,b,x)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const b=c[L],x=A.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const pm={[Vr]:Gr,[Hr]:$r,[qr]:Xr,[Pi]:Wr,[Gr]:Vr,[$r]:Hr,[Xr]:qr,[Wr]:Pi};function mm(s,e){function t(){let P=!1;const ie=new at;let z=null;const Y=new at(0,0,0,0);return{setMask:function(ce){z!==ce&&!P&&(s.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){P=ce},setClear:function(ce,le,Ie,it,_t){_t===!0&&(ce*=it,le*=it,Ie*=it),ie.set(ce,le,Ie,it),Y.equals(ie)===!1&&(s.clearColor(ce,le,Ie,it),Y.copy(ie))},reset:function(){P=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let P=!1,ie=!1,z=null,Y=null,ce=null;return{setReversed:function(le){if(ie!==le){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const it=ce;ce=null,this.setClear(it)}ie=le},getReversed:function(){return ie},setTest:function(le){le?ae(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(le){z!==le&&!P&&(s.depthMask(le),z=le)},setFunc:function(le){if(ie&&(le=pm[le]),Y!==le){switch(le){case Vr:s.depthFunc(s.NEVER);break;case Gr:s.depthFunc(s.ALWAYS);break;case Hr:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case qr:s.depthFunc(s.EQUAL);break;case Wr:s.depthFunc(s.GEQUAL);break;case $r:s.depthFunc(s.GREATER);break;case Xr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=le}},setLocked:function(le){P=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),s.clearDepth(le),ce=le)},reset:function(){P=!1,z=null,Y=null,ce=null,ie=!1}}}function i(){let P=!1,ie=null,z=null,Y=null,ce=null,le=null,Ie=null,it=null,_t=null;return{setTest:function(je){P||(je?ae(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(je){ie!==je&&!P&&(s.stencilMask(je),ie=je)},setFunc:function(je,Ht,an){(z!==je||Y!==Ht||ce!==an)&&(s.stencilFunc(je,Ht,an),z=je,Y=Ht,ce=an)},setOp:function(je,Ht,an){(le!==je||Ie!==Ht||it!==an)&&(s.stencilOp(je,Ht,an),le=je,Ie=Ht,it=an)},setLocked:function(je){P=je},setClear:function(je){_t!==je&&(s.clearStencil(je),_t=je)},reset:function(){P=!1,ie=null,z=null,Y=null,ce=null,le=null,Ie=null,it=null,_t=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,S=null,E=null,M=null,C=null,A=null,w=new ye(0,0,0),L=0,b=!1,x=null,I=null,G=null,B=null,j=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=J>=2);let re=null,ue={};const xe=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ze=new at().fromArray(xe),W=new at().fromArray(Ue);function te(P,ie,z,Y){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(P,le),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<z;Ie++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return le}const _e={};_e[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(s.DEPTH_TEST),a.setFunc(Pi),Oe(!1),ke(oo),ae(s.CULL_FACE),R(An);function ae(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function Te(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Ce(P,ie){return f[P]!==ie?(s.bindFramebuffer(P,ie),f[P]=ie,P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ie),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(P,ie){let z=p,Y=!1;if(P){z=h.get(ie),z===void 0&&(z=[],h.set(ie,z));const ce=P.textures;if(z.length!==ce.length||z[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Ie=ce.length;le<Ie;le++)z[le]=s.COLOR_ATTACHMENT0+le;z.length=ce.length,Y=!0}}else z[0]!==s.BACK&&(z[0]=s.BACK,Y=!0);Y&&s.drawBuffers(z)}function nt(P){return _!==P?(s.useProgram(P),_=P,!0):!1}const Ve={[Hn]:s.FUNC_ADD,[_c]:s.FUNC_SUBTRACT,[gc]:s.FUNC_REVERSE_SUBTRACT};Ve[vc]=s.MIN,Ve[yc]=s.MAX;const ot={[xc]:s.ZERO,[Mc]:s.ONE,[bc]:s.SRC_COLOR,[Br]:s.SRC_ALPHA,[Cc]:s.SRC_ALPHA_SATURATE,[wc]:s.DST_COLOR,[Ec]:s.DST_ALPHA,[Sc]:s.ONE_MINUS_SRC_COLOR,[zr]:s.ONE_MINUS_SRC_ALPHA,[Ac]:s.ONE_MINUS_DST_COLOR,[Tc]:s.ONE_MINUS_DST_ALPHA,[Rc]:s.CONSTANT_COLOR,[Ic]:s.ONE_MINUS_CONSTANT_COLOR,[Pc]:s.CONSTANT_ALPHA,[Lc]:s.ONE_MINUS_CONSTANT_ALPHA};function R(P,ie,z,Y,ce,le,Ie,it,_t,je){if(P===An){v===!0&&(Te(s.BLEND),v=!1);return}if(v===!1&&(ae(s.BLEND),v=!0),P!==mc){if(P!==m||je!==b){if((u!==Hn||M!==Hn)&&(s.blendEquation(s.FUNC_ADD),u=Hn,M=Hn),je)switch(P){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFunc(s.ONE,s.ONE);break;case co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,E=null,C=null,A=null,w.set(0,0,0),L=0,m=P,b=je}return}ce=ce||ie,le=le||z,Ie=Ie||Y,(ie!==u||ce!==M)&&(s.blendEquationSeparate(Ve[ie],Ve[ce]),u=ie,M=ce),(z!==S||Y!==E||le!==C||Ie!==A)&&(s.blendFuncSeparate(ot[z],ot[Y],ot[le],ot[Ie]),S=z,E=Y,C=le,A=Ie),(it.equals(w)===!1||_t!==L)&&(s.blendColor(it.r,it.g,it.b,_t),w.copy(it),L=_t),m=P,b=!1}function Ut(P,ie){P.side===Qt?Te(s.CULL_FACE):ae(s.CULL_FACE);let z=P.side===At;ie&&(z=!z),Oe(z),P.blending===Ci&&P.transparent===!1?R(An):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Y=P.stencilWrite;o.setTest(Y),Y&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){x!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),x=P)}function ke(P){P!==fc?(ae(s.CULL_FACE),P!==I&&(P===oo?s.cullFace(s.BACK):P===pc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),I=P}function Me(P){P!==G&&($&&s.lineWidth(P),G=P)}function et(P,ie,z){P?(ae(s.POLYGON_OFFSET_FILL),(B!==ie||j!==z)&&(s.polygonOffset(ie,z),B=ie,j=z)):Te(s.POLYGON_OFFSET_FILL)}function ve(P){P?ae(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function T(P){P===void 0&&(P=s.TEXTURE0+K-1),re!==P&&(s.activeTexture(P),re=P)}function g(P,ie,z){z===void 0&&(re===null?z=s.TEXTURE0+K-1:z=re);let Y=ue[z];Y===void 0&&(Y={type:void 0,texture:void 0},ue[z]=Y),(Y.type!==P||Y.texture!==ie)&&(re!==z&&(s.activeTexture(z),re=z),s.bindTexture(P,ie||_e[P]),Y.type=P,Y.texture=ie)}function F(){const P=ue[re];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){Ze.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Ze.copy(P))}function pe(P){W.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function Be(P,ie){let z=c.get(ie);z===void 0&&(z=new WeakMap,c.set(ie,z));let Y=z.get(P);Y===void 0&&(Y=s.getUniformBlockIndex(ie,P.name),z.set(P,Y))}function Le(P,ie){const Y=c.get(ie).get(P);l.get(ie)!==Y&&(s.uniformBlockBinding(ie,Y,P.__bindingPointIndex),l.set(ie,Y))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},re=null,ue={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,S=null,E=null,M=null,C=null,A=null,w=new ye(0,0,0),L=0,b=!1,x=null,I=null,G=null,B=null,j=null,Ze.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:nt,setBlending:R,setMaterial:Ut,setFlipSided:Oe,setCullFace:ke,setLineWidth:Me,setPolygonOffset:et,setScissorTest:ve,activeTexture:T,bindTexture:g,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:we,viewport:pe,reset:Je}}function _m(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Ys("canvas")}function v(T,g,F){let X=1;const Z=ve(T);if((Z.width>F||Z.height>F)&&(X=F/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*Z.width),ge=Math.floor(X*Z.height);f===void 0&&(f=_(q,ge));const oe=g?_(q,ge):f;return oe.width=q,oe.height=ge,oe.getContext("2d").drawImage(T,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ge+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){s.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,g,F,X,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=g;if(g===s.RED&&(F===s.FLOAT&&(q=s.R32F),F===s.HALF_FLOAT&&(q=s.R16F),F===s.UNSIGNED_BYTE&&(q=s.R8)),g===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.R8UI),F===s.UNSIGNED_SHORT&&(q=s.R16UI),F===s.UNSIGNED_INT&&(q=s.R32UI),F===s.BYTE&&(q=s.R8I),F===s.SHORT&&(q=s.R16I),F===s.INT&&(q=s.R32I)),g===s.RG&&(F===s.FLOAT&&(q=s.RG32F),F===s.HALF_FLOAT&&(q=s.RG16F),F===s.UNSIGNED_BYTE&&(q=s.RG8)),g===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RG8UI),F===s.UNSIGNED_SHORT&&(q=s.RG16UI),F===s.UNSIGNED_INT&&(q=s.RG32UI),F===s.BYTE&&(q=s.RG8I),F===s.SHORT&&(q=s.RG16I),F===s.INT&&(q=s.RG32I)),g===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGB8UI),F===s.UNSIGNED_SHORT&&(q=s.RGB16UI),F===s.UNSIGNED_INT&&(q=s.RGB32UI),F===s.BYTE&&(q=s.RGB8I),F===s.SHORT&&(q=s.RGB16I),F===s.INT&&(q=s.RGB32I)),g===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),F===s.UNSIGNED_INT&&(q=s.RGBA32UI),F===s.BYTE&&(q=s.RGBA8I),F===s.SHORT&&(q=s.RGBA16I),F===s.INT&&(q=s.RGBA32I)),g===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),g===s.RGBA){const ge=Z?$s:$e.getTransfer(X);F===s.FLOAT&&(q=s.RGBA32F),F===s.HALF_FLOAT&&(q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(q=ge===Ke?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(T,g){let F;return T?g===null||g===Kn||g===Ui?F=s.DEPTH24_STENCIL8:g===tn?F=s.DEPTH32F_STENCIL8:g===ts&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Kn||g===Ui?F=s.DEPTH_COMPONENT24:g===tn?F=s.DEPTH_COMPONENT32F:g===ts&&(F=s.DEPTH_COMPONENT16),F}function C(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),L(g),g.isVideoTexture&&d.delete(g)}function w(T){const g=T.target;g.removeEventListener("dispose",w),x(g)}function L(T){const g=n.get(T);if(g.__webglInit===void 0)return;const F=T.source,X=h.get(F);if(X){const Z=X[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys(X).length===0&&h.delete(F)}n.remove(T)}function b(T){const g=n.get(T);s.deleteTexture(g.__webglTexture);const F=T.source,X=h.get(F);delete X[g.__cacheKey],a.memory.textures--}function x(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Z=0;Z<g.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(g.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)s.deleteFramebuffer(g.__webglFramebuffer[X]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,Z=F.length;X<Z;X++){const q=n.get(F[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[X])}n.remove(T)}let I=0;function G(){I=0}function B(){const T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function j(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function K(T,g){const F=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,T,g);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+g)}function $(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,g);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+g)}function J(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,g);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+g)}function V(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){te(F,T,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+g)}const re={[Kr]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Zr]:s.MIRRORED_REPEAT},ue={[Dt]:s.NEAREST,[Vc]:s.NEAREST_MIPMAP_NEAREST,[os]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[ir]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},xe={[Wc]:s.NEVER,[Zc]:s.ALWAYS,[$c]:s.LESS,[Ll]:s.LEQUAL,[Xc]:s.EQUAL,[Kc]:s.GEQUAL,[Yc]:s.GREATER,[jc]:s.NOTEQUAL};function Ue(T,g){if(g.type===tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===ir||g.magFilter===os||g.magFilter===$n||g.minFilter===en||g.minFilter===ir||g.minFilter===os||g.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,re[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,re[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,re[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ue[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==os&&g.minFilter!==$n||g.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const X=g.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const q=j(g);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[q].usedTimes++;const ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&b(g)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return F}function W(T,g,F){let X=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=s.TEXTURE_3D);const Z=Ze(T,g),q=g.source;t.bindTexture(X,T.__webglTexture,s.TEXTURE0+F);const ge=n.get(q);if(q.version!==ge.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const oe=$e.getPrimaries($e.workingColorSpace),he=g.colorSpace===Tn?null:$e.getPrimaries(g.colorSpace),Ge=g.colorSpace===Tn||oe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=v(g.image,!1,i.maxTextureSize);ee=et(g,ee);const fe=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let we=E(g.internalFormat,fe,Ee,g.colorSpace,g.isVideoTexture);Ue(X,g);let pe;const Be=g.mipmaps,Le=g.isVideoTexture!==!0,Je=ge.__version===void 0||Z===!0,P=q.dataReady,ie=C(g,ee);if(g.isDepthTexture)we=M(g.format===Ni,g.type),Je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Ee,null));else if(g.isDataTexture)if(Be.length>0){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,Be[0].width,Be[0].height);for(let z=0,Y=Be.length;z<Y;z++)pe=Be[z],Le?P&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,Ee,pe.data):t.texImage2D(s.TEXTURE_2D,z,we,pe.width,pe.height,0,fe,Ee,pe.data);g.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Ee,ee.data)):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Ee,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,Be[0].width,Be[0].height,ee.depth);for(let z=0,Y=Be.length;z<Y;z++)if(pe=Be[z],g.format!==Yt)if(fe!==null)if(Le){if(P)if(g.layerUpdates.size>0){const ce=Go(pe.width,pe.height,g.format,g.type);for(const le of g.layerUpdates){const Ie=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,le,pe.width,pe.height,1,fe,Ie)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,we,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,ee.depth,fe,Ee,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,we,pe.width,pe.height,ee.depth,0,fe,Ee,pe.data)}else{Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,we,Be[0].width,Be[0].height);for(let z=0,Y=Be.length;z<Y;z++)pe=Be[z],g.format!==Yt?fe!==null?Le?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,z,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?P&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,Ee,pe.data):t.texImage2D(s.TEXTURE_2D,z,we,pe.width,pe.height,0,fe,Ee,pe.data)}else if(g.isDataArrayTexture)if(Le){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,ee.width,ee.height,ee.depth),P)if(g.layerUpdates.size>0){const z=Go(ee.width,ee.height,g.format,g.type);for(const Y of g.layerUpdates){const ce=ee.data.subarray(Y*z/ee.data.BYTES_PER_ELEMENT,(Y+1)*z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,fe,Ee,ce)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ee,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,fe,Ee,ee.data);else if(g.isData3DTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_3D,ie,we,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ee,ee.data)):t.texImage3D(s.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,fe,Ee,ee.data);else if(g.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height);else{let z=ee.width,Y=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,we,z,Y,0,fe,Ee,null),z>>=1,Y>>=1}}else if(Be.length>0){if(Le&&Je){const z=ve(Be[0]);t.texStorage2D(s.TEXTURE_2D,ie,we,z.width,z.height)}for(let z=0,Y=Be.length;z<Y;z++)pe=Be[z],Le?P&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,fe,Ee,pe):t.texImage2D(s.TEXTURE_2D,z,we,fe,Ee,pe);g.generateMipmaps=!1}else if(Le){if(Je){const z=ve(ee);t.texStorage2D(s.TEXTURE_2D,ie,we,z.width,z.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Ee,ee)}else t.texImage2D(s.TEXTURE_2D,0,we,fe,Ee,ee);m(g)&&u(X),ge.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function te(T,g,F){if(g.image.length!==6)return;const X=Ze(T,g),Z=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const q=n.get(Z);if(Z.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+F);const ge=$e.getPrimaries($e.workingColorSpace),oe=g.colorSpace===Tn?null:$e.getPrimaries(g.colorSpace),he=g.colorSpace===Tn||ge===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ge=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!Ge&&!ee?fe[Y]=v(g.image[Y],!0,i.maxCubemapSize):fe[Y]=ee?g.image[Y].image:g.image[Y],fe[Y]=et(g,fe[Y]);const Ee=fe[0],we=r.convert(g.format,g.colorSpace),pe=r.convert(g.type),Be=E(g.internalFormat,we,pe,g.colorSpace),Le=g.isVideoTexture!==!0,Je=q.__version===void 0||X===!0,P=Z.dataReady;let ie=C(g,Ee);Ue(s.TEXTURE_CUBE_MAP,g);let z;if(Ge){Le&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Be,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){z=fe[Y].mipmaps;for(let ce=0;ce<z.length;ce++){const le=z[ce];g.format!==Yt?we!==null?Le?P&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,we,pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,le.width,le.height,0,we,pe,le.data)}}}else{if(z=g.mipmaps,Le&&Je){z.length>0&&ie++;const Y=ve(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Le?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,we,pe,fe[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,fe[Y].width,fe[Y].height,0,we,pe,fe[Y].data);for(let ce=0;ce<z.length;ce++){const Ie=z[ce].image[Y].image;Le?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ie.width,Ie.height,we,pe,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,Ie.width,Ie.height,0,we,pe,Ie.data)}}else{Le?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,pe,fe[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,we,pe,fe[Y]);for(let ce=0;ce<z.length;ce++){const le=z[ce];Le?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,we,pe,le.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,we,pe,le.image[Y])}}}m(g)&&u(s.TEXTURE_CUBE_MAP),q.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function _e(T,g,F,X,Z,q){const ge=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),he=E(F.internalFormat,ge,oe,F.colorSpace),Ge=n.get(g),ee=n.get(F);if(ee.__renderTarget=g,!Ge.__hasExternalTextures){const fe=Math.max(1,g.width>>q),Ee=Math.max(1,g.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,he,fe,Ee,g.depth,0,ge,oe,null):t.texImage2D(Z,q,he,fe,Ee,0,ge,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ke(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,ee.__webglTexture,0,Oe(g)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(T,g,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){const X=g.depthTexture,Z=X&&X.isDepthTexture?X.type:null,q=M(g.stencilBuffer,Z),ge=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Oe(g);ke(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,q,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,T)}else{const X=g.textures;for(let Z=0;Z<X.length;Z++){const q=X[Z],ge=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),he=E(q.internalFormat,ge,oe,q.colorSpace),Ge=Oe(g);F&&ke(g)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,he,g.width,g.height):ke(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,he,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,he,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const Z=X.__webglTexture,q=Oe(g);if(g.depthTexture.format===Ri)ke(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Ni)ke(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=X}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(g.__webglFramebuffer,T)}else if(F){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=s.createRenderbuffer(),ae(g.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),ae(g.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(T,g,F){const X=n.get(T);g!==void 0&&_e(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ce(T)}function nt(T){const g=T.texture,F=n.get(T),X=n.get(g);T.addEventListener("dispose",w);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=g.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let he=0;he<g.mipmaps.length;he++)F.__webglFramebuffer[oe][he]=s.createFramebuffer()}else F.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)F.__webglFramebuffer[oe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ge)for(let oe=0,he=Z.length;oe<he;oe++){const Ge=n.get(Z[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&ke(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const he=Z[oe];F.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Ge=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),fe=E(he.internalFormat,Ge,ee,he.colorSpace,T.isXRRenderTarget===!0),Ee=Oe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)_e(F.__webglFramebuffer[oe][he],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else _e(F.__webglFramebuffer[oe],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,he=Z.length;oe<he;oe++){const Ge=Z[oe],ee=n.get(Ge);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Ue(s.TEXTURE_2D,Ge),_e(F.__webglFramebuffer,T,Ge,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ge)&&u(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),Ue(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)_e(F.__webglFramebuffer[he],T,g,s.COLOR_ATTACHMENT0,oe,he);else _e(F.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,oe,0);m(g)&&u(oe),t.unbindTexture()}T.depthBuffer&&Ce(T)}function Ve(T){const g=T.textures;for(let F=0,X=g.length;F<X;F++){const Z=g[F];if(m(Z)){const q=S(T),ge=n.get(Z).__webglTexture;t.bindTexture(q,ge),u(q),t.unbindTexture()}}}const ot=[],R=[];function Ut(T){if(T.samples>0){if(ke(T)===!1){const g=T.textures,F=T.width,X=T.height;let Z=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(T),oe=g.length>1;if(oe)for(let he=0;he<g.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<g.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Ge=n.get(g[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,F,X,0,0,F,X,Z,s.NEAREST),l===!0&&(ot.length=0,R.length=0,ot.push(s.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ot.push(q),R.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<g.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Ge=n.get(g[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function Oe(T){return Math.min(i.maxSamples,T.samples)}function ke(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function et(T,g){const F=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Fi&&F!==Tn&&($e.getTransfer(F)===Ke?(X!==Yt||Z!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke}function gm(s,e){function t(n,i=Tn){let r;const a=$e.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===Na)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return s.BYTE;if(n===El)return s.SHORT;if(n===ts)return s.UNSIGNED_SHORT;if(n===Ua)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===wl)return s.ALPHA;if(n===Al)return s.RGB;if(n===Yt)return s.RGBA;if(n===Cl)return s.LUMINANCE;if(n===Rl)return s.LUMINANCE_ALPHA;if(n===Ri)return s.DEPTH_COMPONENT;if(n===Ni)return s.DEPTH_STENCIL;if(n===Oa)return s.RED;if(n===ka)return s.RED_INTEGER;if(n===Il)return s.RG;if(n===Ba)return s.RG_INTEGER;if(n===za)return s.RGBA_INTEGER;if(n===ks||n===Bs||n===zs||n===Vs)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===aa||n===oa||n===la||n===ca||n===da||n===ua||n===ha||n===fa||n===pa||n===ma||n===_a||n===ga||n===va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===ya||n===xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gs)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Ma||n===ba||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const vm={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
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

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new St,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:ym,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bm extends ki{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const v=new Mm,m=t.getContextAttributes();let u=null,S=null;const E=[],M=[],C=new ze;let A=null;const w=new zt;w.viewport=new at;const L=new zt;L.viewport=new at;const b=[w,L],x=new zd;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=E[W];return te===void 0&&(te=new Ur,E[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=E[W];return te===void 0&&(te=new Ur,E[W]=te),te.getGripSpace()},this.getHand=function(W){let te=E[W];return te===void 0&&(te=new Ur,E[W]=te),te.getHandSpace()};function B(W){const te=M.indexOf(W.inputSource);if(te===-1)return;const _e=E[te];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||a),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",K);for(let W=0;W<E.length;W++){const te=M[W];te!==null&&(M[W]=null,E[W].disconnect(te))}I=null,G=null,v.reset(),e.setRenderTarget(u),p=null,h=null,f=null,i=null,S=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",j),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _e=null,ae=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Ni:Ri,ae=m.stencil?Ui:Kn);const Ce={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Zn(h.textureWidth,h.textureHeight,{format:Yt,type:gn,depthTexture:new $l(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(W){for(let te=0;te<W.removed.length;te++){const _e=W.removed[te],ae=M.indexOf(_e);ae>=0&&(M[ae]=null,E[ae].disconnect(_e))}for(let te=0;te<W.added.length;te++){const _e=W.added[te];let ae=M.indexOf(_e);if(ae===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=M.length){M.push(_e),ae=Ce;break}else if(M[Ce]===null){M[Ce]=_e,ae=Ce;break}if(ae===-1)break}const Te=E[ae];Te&&Te.connect(_e)}}const $=new N,J=new N;function V(W,te,_e){$.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const ae=$.distanceTo(J),Te=te.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),nt=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],ot=(Te[9]-1)/Te[5],R=(Te[8]-1)/Te[0],Ut=(Ce[8]+1)/Ce[0],Oe=Ne*R,ke=Ne*Ut,Me=ae/(-R+Ut),et=Me*-R;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(et),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ve=Ne+Me,T=nt+Me,g=Oe-et,F=ke+(ae-et),X=Ve*nt/T*ve,Z=ot*nt/T*ve;W.projectionMatrix.makePerspective(g,F,X,Z,ve,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let te=W.near,_e=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),x.near=L.near=w.near=te,x.far=L.far=w.far=_e,(I!==x.near||G!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,G=x.far),w.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,x.layers.mask=w.layers.mask|L.layers.mask;const ae=W.parent,Te=x.cameras;re(x,ae);for(let Ce=0;Ce<Te.length;Ce++)re(Te[Ce],ae);Te.length===2?V(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),ue(W,x,ae)};function ue(W,te,_e){_e===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ea*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let xe=null;function Ue(W,te){if(d=te.getViewerPose(c||a),_=te,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ae=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];let nt=null;if(p!==null)nt=p.getViewport(Ne);else{const ot=f.getViewSubImage(h,Ne);nt=ot.viewport,Ce===0&&(e.setRenderTargetTextures(S,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(S))}let Ve=b[Ce];Ve===void 0&&(Ve=new zt,Ve.layers.enable(Ce),Ve.viewport=new at,b[Ce]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(nt.x,nt.y,nt.width,nt.height),Ce===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Ve)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=f.getDepthInformation(_e[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,i.renderState)}}for(let _e=0;_e<E.length;_e++){const ae=M[_e],Te=E[_e];ae!==null&&Te!==void 0&&Te.update(ae,te,c||a)}xe&&xe(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ze=new Yl;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}}const zn=new Zt,Sm=new Qe;function Em(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,S,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,S,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===At&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===At&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=e.get(u),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,zn.copy(M),zn.x*=-1,zn.y*=-1,zn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(zn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===At&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const M=E.program;n.uniformBlockBinding(S,M)}function c(S,E){let M=i[S.id];M===void 0&&(_(S),M=d(S),i[S.id]=M,S.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(S,C);const A=e.render.frame;r[S.id]!==A&&(h(S),r[S.id]=A)}function d(S){const E=f();S.__bindingPointIndex=E;const M=s.createBuffer(),C=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=i[S.id],M=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,w=M.length;A<w;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,x=L.length;b<x;b++){const I=L[b];if(p(I,A,b,C)===!0){const G=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let K=0;K<B.length;K++){const $=B[K],J=v($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,G+j,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,E,M,C){const A=S.value,w=E+"_"+M;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const L=C[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(S){const E=S.uniforms;let M=0;const C=16;for(let w=0,L=E.length;w<L;w++){const b=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,I=b.length;x<I;x++){const G=b[x],B=Array.isArray(G.value)?G.value:[G.value];for(let j=0,K=B.length;j<K;j++){const $=B[j],J=v($),V=M%C,re=V%J.boundary,ue=V+re;M+=re,ue!==0&&C-ue<J.storage&&(M+=C-ue),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=J.storage}}}const A=M%C;return A>0&&(M+=C-A),S.__size=M,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class wm{constructor(e={}){const{canvas:t=Qc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=Cn,this.toneMappingExposure=1;const M=this;let C=!1,A=0,w=0,L=null,b=-1,x=null;const I=new at,G=new at;let B=null;const j=new ye(0);let K=0,$=t.width,J=t.height,V=1,re=null,ue=null;const xe=new at(0,0,$,J),Ue=new at(0,0,$,J);let Ze=!1;const W=new Ha;let te=!1,_e=!1;this.transmissionResolutionScale=1;const ae=new Qe,Te=new Qe,Ce=new N,Ne=new at,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ot(){return L===null?V:1}let R=n;function Ut(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const D="webgl2";if(R=Ut(D,y),R===null)throw Ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Oe,ke,Me,et,ve,T,g,F,X,Z,q,ge,oe,he,Ge,ee,fe,Ee,we,pe,Be,Le,Je,P;function ie(){Oe=new Nf(R),Oe.init(),Le=new gm(R,Oe),ke=new Rf(R,Oe,e,Le),Me=new mm(R,Oe),ke.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),et=new kf(R),ve=new nm,T=new _m(R,Oe,Me,ve,ke,Le,et),g=new Pf(M),F=new Uf(M),X=new qd(R),Je=new Af(R,X),Z=new Ff(R,X,et,Je),q=new zf(R,Z,X,et),we=new Bf(R,ke,T),ee=new If(ve),ge=new tm(M,g,F,Oe,ke,Je,ee),oe=new Em(M,ve),he=new sm,Ge=new dm(Oe),Ee=new wf(M,g,F,Me,q,p,l),fe=new fm(M,q,ke),P=new Tm(R,et,ke,Me),pe=new Cf(R,Oe,et),Be=new Of(R,Oe,et),et.programs=ge.programs,M.capabilities=ke,M.extensions=Oe,M.properties=ve,M.renderLists=he,M.shadowMap=fe,M.state=Me,M.info=et}ie();const z=new bm(M,R);this.xr=z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,J,!1))},this.getSize=function(y){return y.set($,J)},this.setSize=function(y,D,O=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,J=D,t.width=Math.floor(y*V),t.height=Math.floor(D*V),O===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set($*V,J*V).floor()},this.setDrawingBufferSize=function(y,D,O){$=y,J=D,V=O,t.width=Math.floor(y*O),t.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,D,O,k){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,D,O,k),Me.viewport(I.copy(xe).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ue)},this.setScissor=function(y,D,O,k){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,D,O,k),Me.scissor(G.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){Me.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(y=!0,D=!0,O=!0){let k=0;if(y){let U=!1;if(L!==null){const Q=L.texture.format;U=Q===za||Q===Ba||Q===ka}if(U){const Q=L.texture.type,se=Q===gn||Q===Kn||Q===ts||Q===Ui||Q===Na||Q===Fa,de=Ee.getClearColor(),me=Ee.getClearAlpha(),Ae=de.r,Re=de.g,be=de.b;se?(_[0]=Ae,_[1]=Re,_[2]=be,_[3]=me,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=Ae,v[1]=Re,v[2]=be,v[3]=me,R.clearBufferiv(R.COLOR,0,v))}else k|=R.COLOR_BUFFER_BIT}D&&(k|=R.DEPTH_BUFFER_BIT),O&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ee.dispose(),he.dispose(),Ge.dispose(),ve.dispose(),g.dispose(),F.dispose(),q.dispose(),Je.dispose(),P.dispose(),ge.dispose(),z.dispose(),z.removeEventListener("sessionstart",eo),z.removeEventListener("sessionend",to),Dn.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=et.autoReset,D=fe.enabled,O=fe.autoUpdate,k=fe.needsUpdate,U=fe.type;ie(),et.autoReset=y,fe.enabled=D,fe.autoUpdate=O,fe.needsUpdate=k,fe.type=U}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const D=y.target;D.removeEventListener("dispose",Ie),it(D)}function it(y){_t(y),ve.remove(y)}function _t(y){const D=ve.get(y).programs;D!==void 0&&(D.forEach(function(O){ge.releaseProgram(O)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,k,U,Q){D===null&&(D=nt);const se=U.isMesh&&U.matrixWorld.determinant()<0,de=rc(y,D,O,k,U);Me.setMaterial(k,se);let me=O.index,Ae=1;if(k.wireframe===!0){if(me=Z.getWireframeAttribute(O),me===void 0)return;Ae=2}const Re=O.drawRange,be=O.attributes.position;let He=Re.start*Ae,Xe=(Re.start+Re.count)*Ae;Q!==null&&(He=Math.max(He,Q.start*Ae),Xe=Math.min(Xe,(Q.start+Q.count)*Ae)),me!==null?(He=Math.max(He,0),Xe=Math.min(Xe,me.count)):be!=null&&(He=Math.max(He,0),Xe=Math.min(Xe,be.count));const lt=Xe-He;if(lt<0||lt===1/0)return;Je.setup(U,k,de,O,me);let st,We=pe;if(me!==null&&(st=X.get(me),We=Be,We.setIndex(st)),U.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*ot()),We.setMode(R.LINES)):We.setMode(R.TRIANGLES);else if(U.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*ot()),U.isLineSegments?We.setMode(R.LINES):U.isLineLoop?We.setMode(R.LINE_LOOP):We.setMode(R.LINE_STRIP)}else U.isPoints?We.setMode(R.POINTS):U.isSprite&&We.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)We.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))We.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,mt=U._multiDrawCounts,Ye=U._multiDrawCount,qt=me?X.get(me).bytesPerElement:1,ti=ve.get(k).currentProgram.getUniforms();for(let Ct=0;Ct<Ye;Ct++)ti.setValue(R,"_gl_DrawID",Ct),We.render(Se[Ct]/qt,mt[Ct])}else if(U.isInstancedMesh)We.renderInstances(He,lt,U.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,mt=Math.min(O.instanceCount,Se);We.renderInstances(He,lt,mt)}else We.render(He,lt)};function je(y,D,O){y.transparent===!0&&y.side===Qt&&y.forceSinglePass===!1?(y.side=At,y.needsUpdate=!0,as(y,D,O),y.side=Rn,y.needsUpdate=!0,as(y,D,O),y.side=Qt):as(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),u=Ge.get(O),u.init(D),E.push(u),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const de=Q[se];je(de,O,U),k.add(de)}else je(Q,O,U),k.add(Q)}),E.pop(),u=null,k},this.compileAsync=function(y,D,O=null){const k=this.compile(y,D,O);return new Promise(U=>{function Q(){if(k.forEach(function(se){ve.get(se).currentProgram.isReady()&&k.delete(se)}),k.size===0){U(y);return}setTimeout(Q,10)}Oe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ht=null;function an(y){Ht&&Ht(y)}function eo(){Dn.stop()}function to(){Dn.start()}const Dn=new Yl;Dn.setAnimationLoop(an),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(y){Ht=y,z.setAnimationLoop(y),y===null?Dn.stop():Dn.start()},z.addEventListener("sessionstart",eo),z.addEventListener("sessionend",to),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,L),u=Ge.get(y,E.length),u.init(D),E.push(u),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,te=ee.init(this.clippingPlanes,_e),m=he.get(y,S.length),m.init(),S.push(m),z.enabled===!0&&z.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&er(Q,D,-1/0,M.sortObjects)}er(y,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,ue),Ve=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(m,y),this.info.render.frame++,te===!0&&ee.beginShadows();const O=u.state.shadowsArray;fe.render(O,y,D),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let se=0,de=Q.length;se<de;se++){const me=Q[se];io(k,U,y,me)}Ve&&Ee.render(y);for(let se=0,de=Q.length;se<de;se++){const me=Q[se];no(m,y,me,me.viewport)}}else U.length>0&&io(k,U,y,D),Ve&&Ee.render(y),no(m,y,D);L!==null&&w===0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,D),Je.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?(u=E[E.length-1],te===!0&&ee.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function er(y,D,O,k){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const se=q.update(y),de=y.material;de.visible&&m.push(y,se,de,O,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const se=q.update(y),de=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ne.copy(se.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(de)){const me=se.groups;for(let Ae=0,Re=me.length;Ae<Re;Ae++){const be=me[Ae],He=de[be.materialIndex];He&&He.visible&&m.push(y,se,He,O,Ne.z,be)}}else de.visible&&m.push(y,se,de,O,Ne.z,null)}}const Q=y.children;for(let se=0,de=Q.length;se<de;se++)er(Q[se],D,O,k)}function no(y,D,O,k){const U=y.opaque,Q=y.transmissive,se=y.transparent;u.setupLightsView(O),te===!0&&ee.setGlobalState(M.clippingPlanes,O),k&&Me.viewport(I.copy(k)),U.length>0&&rs(U,D,O),Q.length>0&&rs(Q,D,O),se.length>0&&rs(se,D,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function io(y,D,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ns:gn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const Q=u.state.transmissionRenderTarget[k.id],se=k.viewport||I;Q.setSize(se.z*M.transmissionResolutionScale,se.w*M.transmissionResolutionScale);const de=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(j),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&Ee.render(O);const me=M.toneMapping;M.toneMapping=Cn;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),te===!0&&ee.setGlobalState(M.clippingPlanes,k),rs(y,O,k),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let be=0,He=D.length;be<He;be++){const Xe=D[be],lt=Xe.object,st=Xe.geometry,We=Xe.material,Se=Xe.group;if(We.side===Qt&&lt.layers.test(k.layers)){const mt=We.side;We.side=At,We.needsUpdate=!0,so(lt,O,k,st,We,Se),We.side=mt,We.needsUpdate=!0,Re=!0}}Re===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}M.setRenderTarget(de),M.setClearColor(j,K),Ae!==void 0&&(k.viewport=Ae),M.toneMapping=me}function rs(y,D,O){const k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const se=y[U],de=se.object,me=se.geometry,Ae=k===null?se.material:k,Re=se.group;de.layers.test(O.layers)&&so(de,D,O,me,Ae,Re)}}function so(y,D,O,k,U,Q){y.onBeforeRender(M,D,O,k,U,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,D,O,k,y,Q),U.transparent===!0&&U.side===Qt&&U.forceSinglePass===!1?(U.side=At,U.needsUpdate=!0,M.renderBufferDirect(O,D,k,U,y,Q),U.side=Rn,U.needsUpdate=!0,M.renderBufferDirect(O,D,k,U,y,Q),U.side=Qt):M.renderBufferDirect(O,D,k,U,y,Q),y.onAfterRender(M,D,O,k,U,Q)}function as(y,D,O){D.isScene!==!0&&(D=nt);const k=ve.get(y),U=u.state.lights,Q=u.state.shadowsArray,se=U.state.version,de=ge.getParameters(y,U.state,Q,D,O),me=ge.getProgramCacheKey(de);let Ae=k.programs;k.environment=y.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(y.isMeshStandardMaterial?F:g).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Ie),Ae=new Map,k.programs=Ae);let Re=Ae.get(me);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===se)return ao(y,de),Re}else de.uniforms=ge.getUniforms(y),y.onBeforeCompile(de,M),Re=ge.acquireProgram(de,me),Ae.set(me,Re),k.uniforms=de.uniforms;const be=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=ee.uniform),ao(y,de),k.needsLights=oc(y),k.lightsStateVersion=se,k.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function ro(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=qs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function ao(y,D){const O=ve.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function rc(y,D,O,k,U){D.isScene!==!0&&(D=nt),T.resetTextureUnits();const Q=D.fog,se=k.isMeshStandardMaterial?D.environment:null,de=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fi,me=(k.isMeshStandardMaterial?F:g).get(k.envMap||se),Ae=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!O.morphAttributes.position,He=!!O.morphAttributes.normal,Xe=!!O.morphAttributes.color;let lt=Cn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=M.toneMapping);const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,We=st!==void 0?st.length:0,Se=ve.get(k),mt=u.state.lights;if(te===!0&&(_e===!0||y!==x)){const Mt=y===x&&k.id===b;ee.setState(k,y,Mt)}let Ye=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==mt.state.version||Se.outputColorSpace!==de||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==me||k.fog===!0&&Se.fog!==Q||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ae||Se.vertexTangents!==Re||Se.morphTargets!==be||Se.morphNormals!==He||Se.morphColors!==Xe||Se.toneMapping!==lt||Se.morphTargetsCount!==We)&&(Ye=!0):(Ye=!0,Se.__version=k.version);let qt=Se.currentProgram;Ye===!0&&(qt=as(k,D,U));let ti=!1,Ct=!1,Gi=!1;const tt=qt.getUniforms(),Nt=Se.uniforms;if(Me.useProgram(qt.program)&&(ti=!0,Ct=!0,Gi=!0),k.id!==b&&(b=k.id,Ct=!0),ti||x!==y){Me.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),td(ae),nd(ae),tt.setValue(R,"projectionMatrix",ae)):tt.setValue(R,"projectionMatrix",y.projectionMatrix),tt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Et=tt.map.cameraPosition;Et!==void 0&&Et.setValue(R,Ce.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&tt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&tt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ct=!0,Gi=!0)}if(U.isSkinnedMesh){tt.setOptional(R,U,"bindMatrix"),tt.setOptional(R,U,"bindMatrixInverse");const Mt=U.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),tt.setValue(R,"boneTexture",Mt.boneTexture,T))}U.isBatchedMesh&&(tt.setOptional(R,U,"batchingTexture"),tt.setValue(R,"batchingTexture",U._matricesTexture,T),tt.setOptional(R,U,"batchingIdTexture"),tt.setValue(R,"batchingIdTexture",U._indirectTexture,T),tt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&tt.setValue(R,"batchingColorTexture",U._colorsTexture,T));const Ft=O.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&we.update(U,O,qt),(Ct||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,tt.setValue(R,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nt.envMap.value=me,Nt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Nt.envMapIntensity.value=D.environmentIntensity),Ct&&(tt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&ac(Nt,Gi),Q&&k.fog===!0&&oe.refreshFogUniforms(Nt,Q),oe.refreshMaterialUniforms(Nt,k,V,J,u.state.transmissionRenderTarget[y.id]),qs.upload(R,ro(Se),Nt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qs.upload(R,ro(Se),Nt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&tt.setValue(R,"center",U.center),tt.setValue(R,"modelViewMatrix",U.modelViewMatrix),tt.setValue(R,"normalMatrix",U.normalMatrix),tt.setValue(R,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Mt=k.uniformsGroups;for(let Et=0,tr=Mt.length;Et<tr;Et++){const Un=Mt[Et];P.update(Un,qt),P.bind(Un,qt)}}return qt}function ac(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function oc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,D,O){ve.get(y.texture).__webglTexture=D,ve.get(y.depthTexture).__webglTexture=O;const k=ve.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const O=ve.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const lc=R.createFramebuffer();this.setRenderTarget=function(y,D=0,O=0){L=y,A=D,w=O;let k=!0,U=null,Q=!1,se=!1;if(y){const me=ve.get(y);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(me.__hasExternalTextures)T.rebindTextures(y,ve.get(y.texture).__webglTexture,ve.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const be=y.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(y.width!==be.image.width||y.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(se=!0);const Re=ve.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][O]:U=Re[D],Q=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=ve.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[O]:U=Re,I.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else I.copy(xe).multiplyScalar(V).floor(),G.copy(Ue).multiplyScalar(V).floor(),B=Ze;if(O!==0&&(U=lc),Me.bindFramebuffer(R.FRAMEBUFFER,U)&&k&&Me.drawBuffers(y,U),Me.viewport(I),Me.scissor(G),Me.setScissorTest(B),Q){const me=ve.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,O)}else if(se){const me=ve.get(y.texture),Ae=D;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,O,Ae)}else if(y!==null&&O!==0){const me=ve.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,O)}b=-1},this.readRenderTargetPixels=function(y,D,O,k,U,Q,se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){Me.bindFramebuffer(R.FRAMEBUFFER,de);try{const me=y.texture,Ae=me.format,Re=me.type;if(!ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-k&&O>=0&&O<=y.height-U&&R.readPixels(D,O,k,U,Le.convert(Ae),Le.convert(Re),Q)}finally{const me=L!==null?ve.get(L).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,k,U,Q,se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){const me=y.texture,Ae=me.format,Re=me.type;if(!ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-k&&O>=0&&O<=y.height-U){Me.bindFramebuffer(R.FRAMEBUFFER,de);const be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),R.readPixels(D,O,k,U,Le.convert(Ae),Le.convert(Re),0);const He=L!==null?ve.get(L).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,He);const Xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ed(R,Xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(be),R.deleteSync(Xe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,O=0){y.isTexture!==!0&&(Mi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-O),U=Math.floor(y.image.width*k),Q=Math.floor(y.image.height*k),se=D!==null?D.x:0,de=D!==null?D.y:0;T.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,se,de,U,Q),Me.unbindTexture()};const cc=R.createFramebuffer(),dc=R.createFramebuffer();this.copyTextureToTexture=function(y,D,O=null,k=null,U=0,Q=null){y.isTexture!==!0&&(Mi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],D=arguments[2],Q=arguments[3]||0,O=null),Q===null&&(U!==0?(Mi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let se,de,me,Ae,Re,be,He,Xe,lt;const st=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)se=O.max.x-O.min.x,de=O.max.y-O.min.y,me=O.isBox3?O.max.z-O.min.z:1,Ae=O.min.x,Re=O.min.y,be=O.isBox3?O.min.z:0;else{const Ft=Math.pow(2,-U);se=Math.floor(st.width*Ft),de=Math.floor(st.height*Ft),y.isDataArrayTexture?me=st.depth:y.isData3DTexture?me=Math.floor(st.depth*Ft):me=1,Ae=0,Re=0,be=0}k!==null?(He=k.x,Xe=k.y,lt=k.z):(He=0,Xe=0,lt=0);const We=Le.convert(D.format),Se=Le.convert(D.type);let mt;D.isData3DTexture?(T.setTexture3D(D,0),mt=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),mt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ti=R.getParameter(R.UNPACK_SKIP_PIXELS),Ct=R.getParameter(R.UNPACK_SKIP_ROWS),Gi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);const tt=y.isDataArrayTexture||y.isData3DTexture,Nt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Ft=ve.get(y),Mt=ve.get(D),Et=ve.get(Ft.__renderTarget),tr=ve.get(Mt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Et.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Un=0;Un<me;Un++)tt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(y).__webglTexture,U,be+Un),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,Q,lt+Un)),R.blitFramebuffer(Ae,Re,se,de,He,Xe,se,de,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ve.has(y)){const Ft=ve.get(y),Mt=ve.get(D);Me.bindFramebuffer(R.READ_FRAMEBUFFER,cc),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,dc);for(let Et=0;Et<me;Et++)tt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,U,be+Et):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,U),Nt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.__webglTexture,Q,lt+Et):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,Q),U!==0?R.blitFramebuffer(Ae,Re,se,de,He,Xe,se,de,R.COLOR_BUFFER_BIT,R.NEAREST):Nt?R.copyTexSubImage3D(mt,Q,He,Xe,lt+Et,Ae,Re,se,de):R.copyTexSubImage2D(mt,Q,He,Xe,Ae,Re,se,de);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Nt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(mt,Q,He,Xe,lt,se,de,me,We,Se,st.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(mt,Q,He,Xe,lt,se,de,me,We,st.data):R.texSubImage3D(mt,Q,He,Xe,lt,se,de,me,We,Se,st):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,He,Xe,se,de,We,Se,st.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,He,Xe,st.width,st.height,We,st.data):R.texSubImage2D(R.TEXTURE_2D,Q,He,Xe,se,de,We,Se,st);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ti),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ct),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gi),Q===0&&D.generateMipmaps&&R.generateMipmap(mt),Me.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O=null,k=null,U=0){return y.isTexture!==!0&&(Mi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),Mi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,O,k,U)},this.initRenderTarget=function(y){ve.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,Me.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Am{constructor(e="game-canvas"){this.canvas=document.getElementById(e),this.renderer=new wm({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xl,this.renderer.toneMapping=Ml,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(8900331),this.scene=new Td,this.scene.fog=new Ga(8900331,.003),this.camera=new zt(50,1,.1,500),this.camera.position.set(0,20,30),this._setupLighting(),this._setupGround(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_setupLighting(){this.ambientLight=new Bd(13163248,.8),this.scene.add(this.ambientLight),this.hemiLight=new Nd(8900331,7049054,.6),this.scene.add(this.hemiLight),this.sunLight=new kd(16775400,1.6),this.sunLight.position.set(20,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight)}_setupGround(){const e=new xt(new zi(200,200),new Ta({color:5938799}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e);const t=new Gd(40,40,8239250,6991232);t.position.y=.01,t.material.transparent=!0,t.material.opacity=.3,this.scene.add(t)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize)}}const qe={dayDurationSeconds:90,startingDay:1,initialGold:250,dailyRent:25,rentIncreasePerRank:12,bankruptcyThreshold:0,shopMaxDisplaySlots:4,shopSellInterval:8,customerBonusMultiplier:1.5,initialInventoryCapacity:20,exploreDropCountMin:1,exploreDropCountMax:2,exploreQualityMin:10,exploreQualityMax:40,equipmentQualityBonus:.5,traitChance:.35,maxTraitSlots:3,customerSpawnInterval:12,maxCustomersPerDay:6,customerPatienceSeconds:20,goalShopRank:8,questRequiredRatio:.67,ranks:[{rank:1,name:"駆け出しの店",requiredSales:0,newRecipes:[],newAreas:[]},{rank:2,name:"町の小さな店",requiredSales:500,newRecipes:["fire_sword","ice_shield","antidote","silver_dagger","leather_armor","iron_spear","amber_ring","bone_charm","stamina_drink","iron_helm"],newAreas:["cave"]},{rank:3,name:"繁盛する道具屋",requiredSales:1500,newRecipes:["mage_staff","chainmail","elixir","wind_bow","spirit_robe","strength_potion","spider_cloak","crystal_orb","dark_blade","fairy_necklace","poison_dagger","magic_ink"],newAreas:["forest"]},{rank:4,name:"名高き工房",requiredSales:3500,newRecipes:["holy_sword","dragon_armor","phoenix_feather_acc","flame_lance","moonlight_staff","silver_mail","spirit_potion","thunder_hammer","cursed_ring","lava_shield","fire_cloak","enchant_scroll"],newAreas:["volcano"]},{rank:5,name:"王都の名店",requiredSales:7e3,newRecipes:["trident","coral_armor","pearl_tiara","tidal_bow","deep_elixir","mithril_sword","mithril_shield","void_amulet","frost_blade","elder_staff","sea_serpent_whip","lotus_perfume"],newAreas:["deep_sea"]},{rank:6,name:"大陸一の店",requiredSales:12e3,newRecipes:["dragon_slayer","storm_cloak","ancient_crown","sage_stone","mystic_amulet","dragon_bow","phoenix_robe","void_blade","dragon_potion","thunder_spear","cursed_crown","scale_shield"],newAreas:["dragon_nest"]},{rank:7,name:"王国御用達",requiredSales:2e4,newRecipes:["sky_sword","time_hourglass","star_shield","divine_armor","aether_staff","sky_bow","rainbow_robe","divine_elixir","chaos_ring","star_pendant","wind_lance","phoenix_bow"],newAreas:["sky_tower"]},{rank:8,name:"伝説のアイテム工房",requiredSales:35e3,newRecipes:["legendary_blade","world_tree_staff","genesis_armor","time_blade","primordial_crown","eternity_ring","cosmos_bow","panacea","oblivion_shield","astral_robe"],newAreas:["time_corridor"]}],initialItems:[{blueprintId:"stone",quality:45,traits:[]},{blueprintId:"wood",quality:50,traits:[]},{blueprintId:"wood",quality:35,traits:[]},{blueprintId:"herb",quality:40,traits:[]},{blueprintId:"clay",quality:30,traits:[]},{blueprintId:"sand",quality:25,traits:[]}]},nn={wood:{id:"wood",name:"木材",type:"material",tier:1,baseValue:4,image:"/art/items/wood.jpeg"},stone:{id:"stone",name:"石材",type:"material",tier:1,baseValue:4,image:"/art/items/stone.jpeg"},herb:{id:"herb",name:"薬草",type:"material",tier:1,baseValue:6,image:"/art/items/herb.jpeg"},slime_jelly:{id:"slime_jelly",name:"スライムゼリー",type:"material",tier:1,baseValue:8,image:"/art/items/slime_jelly.png"},clay:{id:"clay",name:"粘土",type:"material",tier:1,baseValue:3,image:"/art/items/clay.png"},flower_petal:{id:"flower_petal",name:"花びら",type:"material",tier:1,baseValue:5,image:"/art/items/flower_petal.png"},bug_shell:{id:"bug_shell",name:"虫の殻",type:"material",tier:1,baseValue:6,image:"/art/items/bug_shell.png"},feather_small:{id:"feather_small",name:"小さな羽根",type:"material",tier:1,baseValue:5,image:"/art/items/feather_small.png"},sand:{id:"sand",name:"砂",type:"material",tier:1,baseValue:3,image:"/art/items/sand.png"},mushroom:{id:"mushroom",name:"キノコ",type:"material",tier:1,baseValue:7,image:"/art/items/mushroom.png"},iron_ore:{id:"iron_ore",name:"鉄鉱石",type:"material",tier:2,baseValue:12,image:"/art/items/iron_ore.png"},cloth:{id:"cloth",name:"魔法の布",type:"material",tier:2,baseValue:10,image:"/art/items/cloth.png"},crystal:{id:"crystal",name:"水晶",type:"material",tier:2,baseValue:15,image:"/art/items/crystal.png"},poison_herb:{id:"poison_herb",name:"毒草",type:"material",tier:2,baseValue:14,image:"/art/items/poison_herb.png"},silver_ore:{id:"silver_ore",name:"銀鉱石",type:"material",tier:2,baseValue:16,image:"/art/items/silver_ore.png"},moss_stone:{id:"moss_stone",name:"苔石",type:"material",tier:2,baseValue:11,image:"/art/items/moss_stone.png"},spider_silk:{id:"spider_silk",name:"蜘蛛の糸",type:"material",tier:2,baseValue:13,image:"/art/items/spider_silk.png"},dark_stone:{id:"dark_stone",name:"暗黒石",type:"material",tier:2,baseValue:15,image:"/art/items/dark_stone.png"},bone:{id:"bone",name:"古びた骨",type:"material",tier:2,baseValue:10,image:"/art/items/bone.png"},amber:{id:"amber",name:"琥珀",type:"material",tier:2,baseValue:14,image:"/art/items/amber.png"},fire_stone:{id:"fire_stone",name:"火石",type:"material",tier:3,baseValue:25,image:"/art/items/fire_stone.png"},ice_shard:{id:"ice_shard",name:"氷片",type:"material",tier:3,baseValue:25,image:"/art/items/ice_shard.png"},feather:{id:"feather",name:"不死鳥の羽",type:"material",tier:3,baseValue:40,image:"/art/items/feather.png"},dragon_scale:{id:"dragon_scale",name:"竜の鱗",type:"material",tier:3,baseValue:50,image:"/art/items/dragon_scale.png"},fairy_dust:{id:"fairy_dust",name:"妖精の粉",type:"material",tier:3,baseValue:30,image:"/art/items/fairy_dust.png"},lava_core:{id:"lava_core",name:"溶岩核",type:"material",tier:3,baseValue:28,image:"/art/items/lava_core.png"},spirit_essence:{id:"spirit_essence",name:"精霊のエッセンス",type:"material",tier:3,baseValue:35,image:"/art/items/spirit_essence.png"},enchanted_wood:{id:"enchanted_wood",name:"霊樹の枝",type:"material",tier:3,baseValue:22,image:"/art/items/enchanted_wood.png"},thunder_stone:{id:"thunder_stone",name:"雷石",type:"material",tier:3,baseValue:30,image:"/art/items/thunder_stone.png"},cursed_gem:{id:"cursed_gem",name:"呪いの宝石",type:"material",tier:3,baseValue:32,image:"/art/items/cursed_gem.png"},deep_pearl:{id:"deep_pearl",name:"深海の真珠",type:"material",tier:4,baseValue:55,image:"/art/items/deep_pearl.png"},moonstone:{id:"moonstone",name:"月光石",type:"material",tier:4,baseValue:60,image:"/art/items/moonstone.png"},wind_crystal:{id:"wind_crystal",name:"風の結晶",type:"material",tier:4,baseValue:50,image:"/art/items/wind_crystal.png"},coral_fragment:{id:"coral_fragment",name:"古代珊瑚",type:"material",tier:4,baseValue:45,image:"/art/items/coral_fragment.png"},mithril_ore:{id:"mithril_ore",name:"ミスリル鉱",type:"material",tier:4,baseValue:65,image:"/art/items/mithril_ore.png"},void_shard:{id:"void_shard",name:"虚空の欠片",type:"material",tier:4,baseValue:55,image:"/art/items/void_shard.png"},elder_bark:{id:"elder_bark",name:"長老樹の樹皮",type:"material",tier:4,baseValue:48,image:"/art/items/elder_bark.png"},sea_serpent_fin:{id:"sea_serpent_fin",name:"海竜のヒレ",type:"material",tier:4,baseValue:58,image:"/art/items/sea_serpent_fin.png"},frozen_tear:{id:"frozen_tear",name:"凍れる涙",type:"material",tier:4,baseValue:52,image:"/art/items/frozen_tear.png"},black_lotus:{id:"black_lotus",name:"黒蓮華",type:"material",tier:4,baseValue:62,image:"/art/items/black_lotus.png"},sky_fragment:{id:"sky_fragment",name:"天空の欠片",type:"material",tier:5,baseValue:80,image:"/art/items/sky_fragment.png"},time_sand:{id:"time_sand",name:"時の砂",type:"material",tier:5,baseValue:90,image:"/art/items/time_sand.png"},rainbow_scale:{id:"rainbow_scale",name:"虹色の鱗",type:"material",tier:5,baseValue:85,image:"/art/items/rainbow_scale.png"},star_dust:{id:"star_dust",name:"星屑",type:"material",tier:5,baseValue:75,image:"/art/items/star_dust.png"},world_tree_sap:{id:"world_tree_sap",name:"世界樹の樹液",type:"material",tier:5,baseValue:100,image:"/art/items/world_tree_sap.png"},divine_ore:{id:"divine_ore",name:"神鉄鉱",type:"material",tier:5,baseValue:95,image:"/art/items/divine_ore.png"},chaos_crystal:{id:"chaos_crystal",name:"混沌の結晶",type:"material",tier:5,baseValue:88,image:"/art/items/chaos_crystal.png"},phoenix_ash:{id:"phoenix_ash",name:"不死鳥の灰",type:"material",tier:5,baseValue:92,image:"/art/items/phoenix_ash.png"},aether_essence:{id:"aether_essence",name:"エーテルの精",type:"material",tier:5,baseValue:110,image:"/art/items/aether_essence.png"},primordial_gem:{id:"primordial_gem",name:"始原の宝玉",type:"material",tier:5,baseValue:120,image:"/art/items/primordial_gem.png"},sword:{id:"sword",name:"鉄の剣",type:"equipment",baseValue:35,image:"/art/items/sword.png"},shield:{id:"shield",name:"木の盾",type:"equipment",baseValue:25,image:"/art/items/shield.png"},potion:{id:"potion",name:"回復薬",type:"consumable",baseValue:18,image:"/art/items/potion.png"},wooden_bow:{id:"wooden_bow",name:"木の弓",type:"equipment",baseValue:30,image:"/art/items/wooden_bow.png"},herb_tea:{id:"herb_tea",name:"ハーブティー",type:"consumable",baseValue:12,image:"/art/items/herb_tea.png"},stone_axe:{id:"stone_axe",name:"石斧",type:"equipment",baseValue:28,image:"/art/items/stone_axe.png"},clay_pot:{id:"clay_pot",name:"粘土の壺",type:"accessory",baseValue:15,image:"/art/items/clay_pot.png"},antidote_basic:{id:"antidote_basic",name:"毒消し薬",type:"consumable",baseValue:20,image:"/art/items/antidote.png"},fire_sword:{id:"fire_sword",name:"炎の剣",type:"equipment",baseValue:80,image:"/art/items/fire_sword.png"},ice_shield:{id:"ice_shield",name:"氷の盾",type:"equipment",baseValue:65,image:"/art/items/ice_shield.png"},antidote:{id:"antidote",name:"解毒薬",type:"consumable",baseValue:30,image:"/art/items/antidote.png"},silver_dagger:{id:"silver_dagger",name:"銀の短剣",type:"equipment",baseValue:55,image:"/art/items/silver_dagger.png"},leather_armor:{id:"leather_armor",name:"革鎧",type:"equipment",baseValue:60,image:"/art/items/leather_armor.png"},iron_spear:{id:"iron_spear",name:"鉄の槍",type:"equipment",baseValue:50,image:"/art/items/iron_spear.png"},amber_ring:{id:"amber_ring",name:"琥珀の指輪",type:"accessory",baseValue:45,image:"/art/items/amber_ring.png"},bone_charm:{id:"bone_charm",name:"骨のお守り",type:"accessory",baseValue:35,image:"/art/items/bone_charm.png"},stamina_drink:{id:"stamina_drink",name:"スタミナドリンク",type:"consumable",baseValue:25,image:"/art/items/stamina_drink.png"},iron_helm:{id:"iron_helm",name:"鉄兜",type:"equipment",baseValue:48,image:"/art/items/iron_helm.png"},mage_staff:{id:"mage_staff",name:"魔法の杖",type:"equipment",baseValue:120,image:"/art/items/mage_staff.png"},chainmail:{id:"chainmail",name:"鎖帷子",type:"equipment",baseValue:100,image:"/art/items/chainmail.png"},elixir:{id:"elixir",name:"万能薬",type:"consumable",baseValue:75,image:"/art/items/elixir.png"},wind_bow:{id:"wind_bow",name:"風の弓",type:"equipment",baseValue:95,image:"/art/items/wind_bow.png"},spirit_robe:{id:"spirit_robe",name:"精霊のローブ",type:"equipment",baseValue:110,image:"/art/items/spirit_robe.png"},strength_potion:{id:"strength_potion",name:"力の薬",type:"consumable",baseValue:55,image:"/art/items/strength_potion.png"},spider_cloak:{id:"spider_cloak",name:"蜘蛛糸のマント",type:"equipment",baseValue:85,image:"/art/items/spider_cloak.png"},crystal_orb:{id:"crystal_orb",name:"水晶の宝珠",type:"accessory",baseValue:90,image:"/art/items/crystal_orb.png"},dark_blade:{id:"dark_blade",name:"暗黒の刃",type:"equipment",baseValue:105,image:"/art/items/dark_blade.png"},fairy_necklace:{id:"fairy_necklace",name:"妖精のネックレス",type:"accessory",baseValue:70,image:"/art/items/fairy_necklace.png"},poison_dagger:{id:"poison_dagger",name:"毒塗りの短剣",type:"equipment",baseValue:88,image:"/art/items/poison_dagger.png"},magic_ink:{id:"magic_ink",name:"魔法のインク",type:"consumable",baseValue:40,image:"/art/items/magic_ink.png"},holy_sword:{id:"holy_sword",name:"聖剣",type:"equipment",baseValue:250},dragon_armor:{id:"dragon_armor",name:"竜鱗の鎧",type:"equipment",baseValue:220},phoenix_feather_acc:{id:"phoenix_feather_acc",name:"不死鳥のお守り",type:"accessory",baseValue:180},flame_lance:{id:"flame_lance",name:"炎の槍",type:"equipment",baseValue:200},moonlight_staff:{id:"moonlight_staff",name:"月光の杖",type:"equipment",baseValue:190},silver_mail:{id:"silver_mail",name:"銀糸の鎧",type:"equipment",baseValue:210},spirit_potion:{id:"spirit_potion",name:"霊薬",type:"consumable",baseValue:120},thunder_hammer:{id:"thunder_hammer",name:"雷鳴のハンマー",type:"equipment",baseValue:230},cursed_ring:{id:"cursed_ring",name:"呪いの指輪",type:"accessory",baseValue:160},lava_shield:{id:"lava_shield",name:"溶岩の盾",type:"equipment",baseValue:195},fire_cloak:{id:"fire_cloak",name:"焔纏いのマント",type:"equipment",baseValue:175},enchant_scroll:{id:"enchant_scroll",name:"付呪の巻物",type:"consumable",baseValue:140},trident:{id:"trident",name:"海神の三叉槍",type:"equipment",baseValue:320},coral_armor:{id:"coral_armor",name:"珊瑚の鎧",type:"equipment",baseValue:280},pearl_tiara:{id:"pearl_tiara",name:"真珠のティアラ",type:"accessory",baseValue:250},tidal_bow:{id:"tidal_bow",name:"潮流の弓",type:"equipment",baseValue:300},deep_elixir:{id:"deep_elixir",name:"深海の霊薬",type:"consumable",baseValue:200},mithril_sword:{id:"mithril_sword",name:"ミスリルの剣",type:"equipment",baseValue:350},mithril_shield:{id:"mithril_shield",name:"ミスリルの盾",type:"equipment",baseValue:310},void_amulet:{id:"void_amulet",name:"虚空のアミュレット",type:"accessory",baseValue:270},frost_blade:{id:"frost_blade",name:"凍てつく刃",type:"equipment",baseValue:290},elder_staff:{id:"elder_staff",name:"長老樹の杖",type:"equipment",baseValue:260},sea_serpent_whip:{id:"sea_serpent_whip",name:"海竜の鞭",type:"equipment",baseValue:330},lotus_perfume:{id:"lotus_perfume",name:"黒蓮の香水",type:"consumable",baseValue:180},dragon_slayer:{id:"dragon_slayer",name:"竜殺しの大剣",type:"equipment",baseValue:450},storm_cloak:{id:"storm_cloak",name:"嵐のマント",type:"equipment",baseValue:380},ancient_crown:{id:"ancient_crown",name:"古代王の冠",type:"accessory",baseValue:420},sage_stone:{id:"sage_stone",name:"賢者の石",type:"consumable",baseValue:350},mystic_amulet:{id:"mystic_amulet",name:"神秘のアミュレット",type:"accessory",baseValue:400},dragon_bow:{id:"dragon_bow",name:"竜骨の弓",type:"equipment",baseValue:430},phoenix_robe:{id:"phoenix_robe",name:"不死鳥のローブ",type:"equipment",baseValue:410},void_blade:{id:"void_blade",name:"虚無の剣",type:"equipment",baseValue:460},dragon_potion:{id:"dragon_potion",name:"竜の血薬",type:"consumable",baseValue:300},thunder_spear:{id:"thunder_spear",name:"雷光の槍",type:"equipment",baseValue:440},cursed_crown:{id:"cursed_crown",name:"呪王の冠",type:"accessory",baseValue:360},scale_shield:{id:"scale_shield",name:"竜鱗の大盾",type:"equipment",baseValue:390},sky_sword:{id:"sky_sword",name:"天空の剣",type:"equipment",baseValue:600},time_hourglass:{id:"time_hourglass",name:"時の砂時計",type:"accessory",baseValue:550},star_shield:{id:"star_shield",name:"星盾",type:"equipment",baseValue:520},divine_armor:{id:"divine_armor",name:"神鉄の鎧",type:"equipment",baseValue:580},aether_staff:{id:"aether_staff",name:"エーテルの杖",type:"equipment",baseValue:560},sky_bow:{id:"sky_bow",name:"天翔ける弓",type:"equipment",baseValue:540},rainbow_robe:{id:"rainbow_robe",name:"虹のローブ",type:"equipment",baseValue:530},divine_elixir:{id:"divine_elixir",name:"神酒",type:"consumable",baseValue:400},chaos_ring:{id:"chaos_ring",name:"混沌の指輪",type:"accessory",baseValue:480},star_pendant:{id:"star_pendant",name:"星のペンダント",type:"accessory",baseValue:500},wind_lance:{id:"wind_lance",name:"疾風の槍",type:"equipment",baseValue:570},phoenix_bow:{id:"phoenix_bow",name:"不死鳥の弓",type:"equipment",baseValue:590},legendary_blade:{id:"legendary_blade",name:"伝説の刃",type:"equipment",baseValue:800},world_tree_staff:{id:"world_tree_staff",name:"世界樹の杖",type:"equipment",baseValue:850},genesis_armor:{id:"genesis_armor",name:"始原の鎧",type:"equipment",baseValue:900},time_blade:{id:"time_blade",name:"時渡りの剣",type:"equipment",baseValue:820},primordial_crown:{id:"primordial_crown",name:"始原の冠",type:"accessory",baseValue:780},eternity_ring:{id:"eternity_ring",name:"永遠の指輪",type:"accessory",baseValue:750},cosmos_bow:{id:"cosmos_bow",name:"星界弓コスモス",type:"equipment",baseValue:830},panacea:{id:"panacea",name:"万象の霊薬",type:"consumable",baseValue:600},oblivion_shield:{id:"oblivion_shield",name:"忘却の盾",type:"equipment",baseValue:770},astral_robe:{id:"astral_robe",name:"星衣アストラル",type:"equipment",baseValue:860}},rn={sword:{id:"r_sword",targetId:"sword",materials:["stone","wood"],unlocked:!0,apCost:1},shield:{id:"r_shield",targetId:"shield",materials:["wood","wood"],unlocked:!0,apCost:1},potion:{id:"r_potion",targetId:"potion",materials:["herb","slime_jelly"],unlocked:!0,apCost:1},wooden_bow:{id:"r_wooden_bow",targetId:"wooden_bow",materials:["wood","feather_small"],unlocked:!0,apCost:1},herb_tea:{id:"r_herb_tea",targetId:"herb_tea",materials:["herb","flower_petal"],unlocked:!0,apCost:1},stone_axe:{id:"r_stone_axe",targetId:"stone_axe",materials:["stone","wood"],unlocked:!0,apCost:1},clay_pot:{id:"r_clay_pot",targetId:"clay_pot",materials:["clay","sand"],unlocked:!0,apCost:1},antidote_basic:{id:"r_antidote_basic",targetId:"antidote_basic",materials:["bug_shell","slime_jelly"],unlocked:!0,apCost:1},fire_sword:{id:"r_fire_sword",targetId:"fire_sword",materials:["iron_ore","fire_stone"],unlocked:!1,apCost:2},ice_shield:{id:"r_ice_shield",targetId:"ice_shield",materials:["wood","ice_shard"],unlocked:!1,apCost:2},antidote:{id:"r_antidote",targetId:"antidote",materials:["herb","poison_herb"],unlocked:!1,apCost:1},silver_dagger:{id:"r_silver_dagger",targetId:"silver_dagger",materials:["silver_ore","bone"],unlocked:!1,apCost:2},leather_armor:{id:"r_leather_armor",targetId:"leather_armor",materials:["cloth","iron_ore"],unlocked:!1,apCost:2},iron_spear:{id:"r_iron_spear",targetId:"iron_spear",materials:["iron_ore","wood"],unlocked:!1,apCost:2},amber_ring:{id:"r_amber_ring",targetId:"amber_ring",materials:["amber","silver_ore"],unlocked:!1,apCost:2},bone_charm:{id:"r_bone_charm",targetId:"bone_charm",materials:["bone","herb"],unlocked:!1,apCost:1},stamina_drink:{id:"r_stamina_drink",targetId:"stamina_drink",materials:["mushroom","slime_jelly"],unlocked:!1,apCost:1},iron_helm:{id:"r_iron_helm",targetId:"iron_helm",materials:["iron_ore","cloth"],unlocked:!1,apCost:2},mage_staff:{id:"r_mage_staff",targetId:"mage_staff",materials:["crystal","enchanted_wood"],unlocked:!1,apCost:2},chainmail:{id:"r_chainmail",targetId:"chainmail",materials:["iron_ore","iron_ore","cloth"],unlocked:!1,apCost:2},elixir:{id:"r_elixir",targetId:"elixir",materials:["herb","crystal","slime_jelly"],unlocked:!1,apCost:2},wind_bow:{id:"r_wind_bow",targetId:"wind_bow",materials:["enchanted_wood","spider_silk"],unlocked:!1,apCost:2},spirit_robe:{id:"r_spirit_robe",targetId:"spirit_robe",materials:["cloth","spirit_essence"],unlocked:!1,apCost:2},strength_potion:{id:"r_strength_potion",targetId:"strength_potion",materials:["mushroom","fairy_dust"],unlocked:!1,apCost:2},spider_cloak:{id:"r_spider_cloak",targetId:"spider_cloak",materials:["spider_silk","cloth"],unlocked:!1,apCost:2},crystal_orb:{id:"r_crystal_orb",targetId:"crystal_orb",materials:["crystal","fairy_dust"],unlocked:!1,apCost:2},dark_blade:{id:"r_dark_blade",targetId:"dark_blade",materials:["dark_stone","iron_ore"],unlocked:!1,apCost:2},fairy_necklace:{id:"r_fairy_necklace",targetId:"fairy_necklace",materials:["fairy_dust","silver_ore"],unlocked:!1,apCost:2},poison_dagger:{id:"r_poison_dagger",targetId:"poison_dagger",materials:["silver_ore","poison_herb"],unlocked:!1,apCost:2},magic_ink:{id:"r_magic_ink",targetId:"magic_ink",materials:["crystal","flower_petal"],unlocked:!1,apCost:1},holy_sword:{id:"r_holy_sword",targetId:"holy_sword",materials:["iron_ore","crystal","feather"],unlocked:!1,apCost:3},dragon_armor:{id:"r_dragon_armor",targetId:"dragon_armor",materials:["dragon_scale","iron_ore","cloth"],unlocked:!1,apCost:3},phoenix_feather_acc:{id:"r_phoenix_feather_acc",targetId:"phoenix_feather_acc",materials:["feather","crystal"],unlocked:!1,apCost:2},flame_lance:{id:"r_flame_lance",targetId:"flame_lance",materials:["fire_stone","iron_ore","enchanted_wood"],unlocked:!1,apCost:3},moonlight_staff:{id:"r_moonlight_staff",targetId:"moonlight_staff",materials:["enchanted_wood","crystal","fairy_dust"],unlocked:!1,apCost:3},silver_mail:{id:"r_silver_mail",targetId:"silver_mail",materials:["silver_ore","silver_ore","spider_silk"],unlocked:!1,apCost:2},spirit_potion:{id:"r_spirit_potion",targetId:"spirit_potion",materials:["spirit_essence","herb","fairy_dust"],unlocked:!1,apCost:2},thunder_hammer:{id:"r_thunder_hammer",targetId:"thunder_hammer",materials:["thunder_stone","iron_ore","lava_core"],unlocked:!1,apCost:3},cursed_ring:{id:"r_cursed_ring",targetId:"cursed_ring",materials:["cursed_gem","silver_ore"],unlocked:!1,apCost:2},lava_shield:{id:"r_lava_shield",targetId:"lava_shield",materials:["lava_core","iron_ore","stone"],unlocked:!1,apCost:3},fire_cloak:{id:"r_fire_cloak",targetId:"fire_cloak",materials:["fire_stone","cloth","spider_silk"],unlocked:!1,apCost:2},enchant_scroll:{id:"r_enchant_scroll",targetId:"enchant_scroll",materials:["crystal","fairy_dust","spirit_essence"],unlocked:!1,apCost:2},trident:{id:"r_trident",targetId:"trident",materials:["mithril_ore","deep_pearl","coral_fragment"],unlocked:!1,apCost:3},coral_armor:{id:"r_coral_armor",targetId:"coral_armor",materials:["coral_fragment","mithril_ore","cloth"],unlocked:!1,apCost:3},pearl_tiara:{id:"r_pearl_tiara",targetId:"pearl_tiara",materials:["deep_pearl","moonstone"],unlocked:!1,apCost:2},tidal_bow:{id:"r_tidal_bow",targetId:"tidal_bow",materials:["elder_bark","sea_serpent_fin"],unlocked:!1,apCost:3},deep_elixir:{id:"r_deep_elixir",targetId:"deep_elixir",materials:["deep_pearl","black_lotus","herb"],unlocked:!1,apCost:3},mithril_sword:{id:"r_mithril_sword",targetId:"mithril_sword",materials:["mithril_ore","mithril_ore","moonstone"],unlocked:!1,apCost:3},mithril_shield:{id:"r_mithril_shield",targetId:"mithril_shield",materials:["mithril_ore","coral_fragment"],unlocked:!1,apCost:3},void_amulet:{id:"r_void_amulet",targetId:"void_amulet",materials:["void_shard","moonstone"],unlocked:!1,apCost:3},frost_blade:{id:"r_frost_blade",targetId:"frost_blade",materials:["frozen_tear","mithril_ore"],unlocked:!1,apCost:3},elder_staff:{id:"r_elder_staff",targetId:"elder_staff",materials:["elder_bark","crystal","fairy_dust"],unlocked:!1,apCost:3},sea_serpent_whip:{id:"r_sea_serpent_whip",targetId:"sea_serpent_whip",materials:["sea_serpent_fin","spider_silk"],unlocked:!1,apCost:3},lotus_perfume:{id:"r_lotus_perfume",targetId:"lotus_perfume",materials:["black_lotus","flower_petal","fairy_dust"],unlocked:!1,apCost:2},dragon_slayer:{id:"r_dragon_slayer",targetId:"dragon_slayer",materials:["dragon_scale","mithril_ore","fire_stone"],unlocked:!1,apCost:3},storm_cloak:{id:"r_storm_cloak",targetId:"storm_cloak",materials:["wind_crystal","spider_silk","thunder_stone"],unlocked:!1,apCost:3},ancient_crown:{id:"r_ancient_crown",targetId:"ancient_crown",materials:["moonstone","deep_pearl","dragon_scale"],unlocked:!1,apCost:3},sage_stone:{id:"r_sage_stone",targetId:"sage_stone",materials:["crystal","moonstone","spirit_essence"],unlocked:!1,apCost:3},mystic_amulet:{id:"r_mystic_amulet",targetId:"mystic_amulet",materials:["void_shard","deep_pearl","fairy_dust"],unlocked:!1,apCost:3},dragon_bow:{id:"r_dragon_bow",targetId:"dragon_bow",materials:["dragon_scale","elder_bark","spider_silk"],unlocked:!1,apCost:3},phoenix_robe:{id:"r_phoenix_robe",targetId:"phoenix_robe",materials:["feather","cloth","spirit_essence"],unlocked:!1,apCost:3},void_blade:{id:"r_void_blade",targetId:"void_blade",materials:["void_shard","mithril_ore","dark_stone"],unlocked:!1,apCost:3},dragon_potion:{id:"r_dragon_potion",targetId:"dragon_potion",materials:["dragon_scale","black_lotus","fire_stone"],unlocked:!1,apCost:3},thunder_spear:{id:"r_thunder_spear",targetId:"thunder_spear",materials:["thunder_stone","mithril_ore","wind_crystal"],unlocked:!1,apCost:3},cursed_crown:{id:"r_cursed_crown",targetId:"cursed_crown",materials:["cursed_gem","moonstone","dark_stone"],unlocked:!1,apCost:3},scale_shield:{id:"r_scale_shield",targetId:"scale_shield",materials:["dragon_scale","dragon_scale","iron_ore"],unlocked:!1,apCost:3},sky_sword:{id:"r_sky_sword",targetId:"sky_sword",materials:["sky_fragment","divine_ore","star_dust"],unlocked:!1,apCost:4},time_hourglass:{id:"r_time_hourglass",targetId:"time_hourglass",materials:["time_sand","crystal","moonstone"],unlocked:!1,apCost:3},star_shield:{id:"r_star_shield",targetId:"star_shield",materials:["star_dust","mithril_ore","divine_ore"],unlocked:!1,apCost:4},divine_armor:{id:"r_divine_armor",targetId:"divine_armor",materials:["divine_ore","divine_ore","dragon_scale"],unlocked:!1,apCost:4},aether_staff:{id:"r_aether_staff",targetId:"aether_staff",materials:["aether_essence","elder_bark","sky_fragment"],unlocked:!1,apCost:4},sky_bow:{id:"r_sky_bow",targetId:"sky_bow",materials:["sky_fragment","wind_crystal","feather"],unlocked:!1,apCost:3},rainbow_robe:{id:"r_rainbow_robe",targetId:"rainbow_robe",materials:["rainbow_scale","cloth","fairy_dust"],unlocked:!1,apCost:3},divine_elixir:{id:"r_divine_elixir",targetId:"divine_elixir",materials:["aether_essence","world_tree_sap","deep_pearl"],unlocked:!1,apCost:3},chaos_ring:{id:"r_chaos_ring",targetId:"chaos_ring",materials:["chaos_crystal","cursed_gem","moonstone"],unlocked:!1,apCost:3},star_pendant:{id:"r_star_pendant",targetId:"star_pendant",materials:["star_dust","deep_pearl","sky_fragment"],unlocked:!1,apCost:3},wind_lance:{id:"r_wind_lance",targetId:"wind_lance",materials:["wind_crystal","divine_ore","sky_fragment"],unlocked:!1,apCost:4},phoenix_bow:{id:"r_phoenix_bow",targetId:"phoenix_bow",materials:["phoenix_ash","elder_bark","feather"],unlocked:!1,apCost:3},legendary_blade:{id:"r_legendary_blade",targetId:"legendary_blade",materials:["divine_ore","dragon_scale","sky_fragment","primordial_gem"],unlocked:!1,apCost:5},world_tree_staff:{id:"r_world_tree_staff",targetId:"world_tree_staff",materials:["world_tree_sap","aether_essence","star_dust"],unlocked:!1,apCost:4},genesis_armor:{id:"r_genesis_armor",targetId:"genesis_armor",materials:["primordial_gem","divine_ore","dragon_scale","mithril_ore"],unlocked:!1,apCost:5},time_blade:{id:"r_time_blade",targetId:"time_blade",materials:["time_sand","divine_ore","chaos_crystal"],unlocked:!1,apCost:4},primordial_crown:{id:"r_primordial_crown",targetId:"primordial_crown",materials:["primordial_gem","moonstone","star_dust"],unlocked:!1,apCost:4},eternity_ring:{id:"r_eternity_ring",targetId:"eternity_ring",materials:["time_sand","primordial_gem","aether_essence"],unlocked:!1,apCost:4},cosmos_bow:{id:"r_cosmos_bow",targetId:"cosmos_bow",materials:["rainbow_scale","sky_fragment","phoenix_ash"],unlocked:!1,apCost:4},panacea:{id:"r_panacea",targetId:"panacea",materials:["world_tree_sap","phoenix_ash","primordial_gem"],unlocked:!1,apCost:4},oblivion_shield:{id:"r_oblivion_shield",targetId:"oblivion_shield",materials:["chaos_crystal","divine_ore","void_shard"],unlocked:!1,apCost:4},astral_robe:{id:"r_astral_robe",targetId:"astral_robe",materials:["aether_essence","rainbow_scale","star_dust"],unlocked:!1,apCost:4}},Ka={"攻撃力+1":{name:"攻撃力+1",color:"red",description:"攻撃力が少し上がる"},"攻撃力+2":{name:"攻撃力+2",color:"red",description:"攻撃力が上がる"},"攻撃力+3":{name:"攻撃力+3",color:"red",description:"攻撃力が大幅に上がる"},"防御力+1":{name:"防御力+1",color:"blue",description:"防御力が少し上がる"},"防御力+2":{name:"防御力+2",color:"blue",description:"防御力が上がる"},"防御力+3":{name:"防御力+3",color:"blue",description:"防御力が大幅に上がる"},"HP回復+":{name:"HP回復+",color:"green",description:"回復量が増える"},"HP回復++":{name:"HP回復++",color:"green",description:"回復量が大幅に増える"},採取量UP:{name:"採取量UP",color:"yellow",description:"探索での収穫量が増える"},売値UP:{name:"売値UP",color:"gold",description:"売却価格が20%上がる"},"売値UP+":{name:"売値UP+",color:"gold",description:"売却価格が40%上がる"},丈夫:{name:"丈夫",color:"brown",description:"耐久性が高い"},軽い:{name:"軽い",color:"cyan",description:"軽くて扱いやすい"},硬い:{name:"硬い",color:"gray",description:"非常に硬い"},光る:{name:"光る",color:"yellow",description:"神秘的に光る"},燃えやすい:{name:"燃えやすい",color:"orange",description:"火に弱い"},水溶性:{name:"水溶性",color:"blue",description:"水に溶けやすい"},猛毒:{name:"猛毒",color:"purple",description:"致死量の毒を含む"},聖なる力:{name:"聖なる力",color:"white",description:"聖なる光を宿す"},風の加護:{name:"風の加護",color:"cyan",description:"風の精霊の加護"},雷撃:{name:"雷撃",color:"yellow",description:"雷の力が宿る"},吸血:{name:"吸血",color:"purple",description:"HPを吸収する"},時の祝福:{name:"時の祝福",color:"gold",description:"時の力で強化される"},星の輝き:{name:"星の輝き",color:"white",description:"星の力を宿す"},混沌:{name:"混沌",color:"purple",description:"混沌のエネルギーを秘める"}},Lt={plains:{id:"plains",name:"草原",description:"のどかな草原。基本的な素材が手に入る。",icon:"🌿",unlocked:!0,baseTime:25,dropTable:[{blueprintId:"wood",weight:20},{blueprintId:"stone",weight:18},{blueprintId:"herb",weight:15},{blueprintId:"slime_jelly",weight:10},{blueprintId:"clay",weight:10},{blueprintId:"flower_petal",weight:8},{blueprintId:"bug_shell",weight:7},{blueprintId:"feather_small",weight:5},{blueprintId:"sand",weight:4},{blueprintId:"mushroom",weight:3}],traitPool:["丈夫","軽い","硬い"],dropCountMin:1,dropCountMax:2,qualityMin:15,qualityMax:45},cave:{id:"cave",name:"地底洞窟",description:"暗い洞窟の奥深く。鉱石や水晶が眠る。",icon:"⛏️",unlocked:!1,baseTime:35,dropTable:[{blueprintId:"iron_ore",weight:22},{blueprintId:"stone",weight:15},{blueprintId:"crystal",weight:12},{blueprintId:"silver_ore",weight:10},{blueprintId:"cloth",weight:10},{blueprintId:"dark_stone",weight:8},{blueprintId:"bone",weight:8},{blueprintId:"moss_stone",weight:8},{blueprintId:"amber",weight:7}],traitPool:["硬い","光る","防御力+1"],dropCountMin:1,dropCountMax:2,qualityMin:20,qualityMax:55},forest:{id:"forest",name:"妖精の森",description:"不思議な力が満ちた深い森。稀少な薬草が育つ。",icon:"🌲",unlocked:!1,baseTime:45,dropTable:[{blueprintId:"herb",weight:12},{blueprintId:"poison_herb",weight:12},{blueprintId:"spider_silk",weight:12},{blueprintId:"enchanted_wood",weight:10},{blueprintId:"fairy_dust",weight:10},{blueprintId:"cloth",weight:10},{blueprintId:"crystal",weight:8},{blueprintId:"spirit_essence",weight:8},{blueprintId:"mushroom",weight:8},{blueprintId:"wood",weight:10}],traitPool:["HP回復+","採取量UP","猛毒","軽い","風の加護"],dropCountMin:1,dropCountMax:3,qualityMin:25,qualityMax:65},volcano:{id:"volcano",name:"灼熱の火山",description:"溶岩が流れる危険な火山。貴重な火石が採れる。",icon:"🌋",unlocked:!1,baseTime:55,dropTable:[{blueprintId:"fire_stone",weight:20},{blueprintId:"lava_core",weight:15},{blueprintId:"iron_ore",weight:12},{blueprintId:"thunder_stone",weight:12},{blueprintId:"dragon_scale",weight:8},{blueprintId:"cursed_gem",weight:8},{blueprintId:"ice_shard",weight:10},{blueprintId:"stone",weight:8},{blueprintId:"feather",weight:7}],traitPool:["攻撃力+1","攻撃力+2","燃えやすい","丈夫","雷撃"],dropCountMin:1,dropCountMax:2,qualityMin:30,qualityMax:75},deep_sea:{id:"deep_sea",name:"深海の遺跡",description:"海底に眠る古代遺跡。稀少な真珠やミスリルが見つかる。",icon:"🌊",unlocked:!1,baseTime:65,dropTable:[{blueprintId:"deep_pearl",weight:18},{blueprintId:"coral_fragment",weight:16},{blueprintId:"mithril_ore",weight:12},{blueprintId:"sea_serpent_fin",weight:10},{blueprintId:"moonstone",weight:10},{blueprintId:"frozen_tear",weight:10},{blueprintId:"void_shard",weight:8},{blueprintId:"black_lotus",weight:8},{blueprintId:"elder_bark",weight:8}],traitPool:["防御力+2","水溶性","HP回復+","光る"],dropCountMin:1,dropCountMax:3,qualityMin:35,qualityMax:80},dragon_nest:{id:"dragon_nest",name:"竜の巣",description:"古代竜の住処。最強の素材が眠るが極めて危険。",icon:"🐉",unlocked:!1,baseTime:70,dropTable:[{blueprintId:"dragon_scale",weight:22},{blueprintId:"feather",weight:14},{blueprintId:"fire_stone",weight:12},{blueprintId:"mithril_ore",weight:10},{blueprintId:"void_shard",weight:10},{blueprintId:"wind_crystal",weight:10},{blueprintId:"crystal",weight:8},{blueprintId:"thunder_stone",weight:7},{blueprintId:"moonstone",weight:7}],traitPool:["攻撃力+2","攻撃力+3","防御力+2","聖なる力","光る"],dropCountMin:1,dropCountMax:3,qualityMin:40,qualityMax:90},sky_tower:{id:"sky_tower",name:"天空の塔",description:"雲を突き抜ける塔。天空の素材と神鉄が手に入る。",icon:"☁️",unlocked:!1,baseTime:80,dropTable:[{blueprintId:"sky_fragment",weight:18},{blueprintId:"wind_crystal",weight:15},{blueprintId:"divine_ore",weight:12},{blueprintId:"star_dust",weight:12},{blueprintId:"aether_essence",weight:10},{blueprintId:"phoenix_ash",weight:10},{blueprintId:"rainbow_scale",weight:8},{blueprintId:"chaos_crystal",weight:8},{blueprintId:"feather",weight:7}],traitPool:["攻撃力+3","防御力+3","風の加護","星の輝き","聖なる力"],dropCountMin:2,dropCountMax:3,qualityMin:50,qualityMax:95},time_corridor:{id:"time_corridor",name:"時の回廊",description:"時空の狭間。始原の素材が眠る最果ての地。",icon:"⏳",unlocked:!1,baseTime:90,dropTable:[{blueprintId:"time_sand",weight:18},{blueprintId:"primordial_gem",weight:10},{blueprintId:"world_tree_sap",weight:10},{blueprintId:"aether_essence",weight:12},{blueprintId:"divine_ore",weight:10},{blueprintId:"chaos_crystal",weight:10},{blueprintId:"rainbow_scale",weight:10},{blueprintId:"star_dust",weight:10},{blueprintId:"phoenix_ash",weight:10}],traitPool:["時の祝福","星の輝き","混沌","攻撃力+3","防御力+3","売値UP+"],dropCountMin:2,dropCountMax:4,qualityMin:60,qualityMax:100}};class Cm{constructor(){this._listeners=new Map}on(e,t){return this._listeners.has(e)||this._listeners.set(e,new Set),this._listeners.get(e).add(t),()=>this.off(e,t)}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);n&&(n.delete(t),n.size===0&&this._listeners.delete(e))}emit(e,t){const n=this._listeners.get(e);if(n)for(const i of n)try{i(t)}catch(r){console.error(`[EventBus] Error in listener for "${e}":`,r)}}}const H=new Cm;class Rm{constructor(){this.totalGoldEarned=0,this.totalItemsSold=0,this.totalItemsCrafted=0,this.totalCustomersServed=0,this.totalCustomersLost=0,this.totalPuzzlesPlayed=0,this.bestPuzzleScore=0,this.dailySales=[],this._currentDaySales=0,this.salesByType={equipment:0,consumable:0,accessory:0,material:0},this._bindEvents()}_bindEvents(){H.on("item:sold",e=>{var i,r;const t=e.price||((i=e.item)==null?void 0:i.value)||0;this.totalGoldEarned+=t,this.totalItemsSold++,this._currentDaySales+=t;const n=((r=e.item)==null?void 0:r.type)||"material";this.salesByType[n]!==void 0&&(this.salesByType[n]+=t)}),H.on("item:crafted",()=>{this.totalItemsCrafted++}),H.on("customer:bought",()=>{this.totalCustomersServed++}),H.on("customer:left",()=>{this.totalCustomersLost++}),H.on("day:newDay",()=>{this.dailySales.push(this._currentDaySales),this.dailySales.length>30&&this.dailySales.shift(),this._currentDaySales=0})}recordPuzzle(e){this.totalPuzzlesPlayed++,e>this.bestPuzzleScore&&(this.bestPuzzleScore=e)}add(e,t=1){this[e]!==void 0?this[e]+=t:this[e]=t}getAverageDailySales(e=7){const t=this.dailySales.slice(-e);return t.length===0?0:Math.round(t.reduce((n,i)=>n+i,0)/t.length)}toSaveData(){return{totalGoldEarned:this.totalGoldEarned,totalItemsSold:this.totalItemsSold,totalItemsCrafted:this.totalItemsCrafted,totalCustomersServed:this.totalCustomersServed,totalCustomersLost:this.totalCustomersLost,totalPuzzlesPlayed:this.totalPuzzlesPlayed,bestPuzzleScore:this.bestPuzzleScore,dailySales:this.dailySales,salesByType:{...this.salesByType}}}loadSaveData(e){e&&(this.totalGoldEarned=e.totalGoldEarned||0,this.totalItemsSold=e.totalItemsSold||0,this.totalItemsCrafted=e.totalItemsCrafted||0,this.totalCustomersServed=e.totalCustomersServed||0,this.totalCustomersLost=e.totalCustomersLost||0,this.totalPuzzlesPlayed=e.totalPuzzlesPlayed||0,this.bestPuzzleScore=e.bestPuzzleScore||0,this.dailySales=e.dailySales||[],e.salesByType&&Object.assign(this.salesByType,e.salesByType))}}const Ln=new Rm,gi="voxelshop_save_v4",Ns=["voxelshop_save_v3","voxelshop_save_v2","voxelshop_save_v1"],Im=30;class Ws{constructor(e,t,n,i,r,a){this.inventory=e,this.adventurers=t,this.dayCycle=n,this.shop=i,this.reputation=r,this.quest=a,this.timer=0}update(e){this.timer+=e,this.timer>=Im&&(this.timer=0,this.save())}save(){try{const e={version:4,timestamp:Date.now(),gold:this.inventory.gold,maxCapacity:this.inventory.maxCapacity,items:this.inventory.items.map(t=>({blueprintId:t.blueprintId,quality:t.quality,traits:t.traits})),displayedItems:this.shop.displayedItems.map(t=>({blueprintId:t.blueprintId,quality:t.quality,traits:t.traits})),maxSlots:this.shop.maxSlots,purchasedUpgrades:this.shop.purchasedUpgrades,adventurers:this.adventurers.adventurers.map(t=>({id:t.id,level:t.level,exp:t.exp,assignedArea:t.assignedArea,weapon:t.equipment.weapon?{blueprintId:t.equipment.weapon.blueprintId,quality:t.equipment.weapon.quality,traits:t.equipment.weapon.traits}:null})),day:this.dayCycle.day,dayTimer:this.dayCycle.dayTimer,totalSales:this.dayCycle.totalSales,currentRankIndex:this.dayCycle.currentRankIndex,unlockedRecipes:Object.keys(rn).filter(t=>rn[t].unlocked),unlockedAreas:Object.keys(Lt).filter(t=>Lt[t].unlocked),reputation:this.reputation?this.reputation.toSaveData():null,stats:Ln.toSaveData(),quest:this.quest?this.quest.toSaveData():null};localStorage.setItem(gi,JSON.stringify(e)),console.log("[Save] ゲームを保存しました (v4)"),H.emit("save:completed")}catch(e){console.error("[Save] 保存失敗:",e)}}static hasSave(){if(localStorage.getItem(gi))return!0;for(const e of Ns)if(localStorage.getItem(e))return!0;return!1}static getSaveInfo(){try{let e=localStorage.getItem(gi);if(!e){for(const n of Ns)if(e=localStorage.getItem(n),e)break}if(!e)return null;const t=JSON.parse(e);return{day:t.day,gold:t.gold,totalSales:t.totalSales,rankIndex:t.currentRankIndex,timestamp:t.timestamp}}catch{return null}}static deleteSave(){localStorage.removeItem(gi);for(const e of Ns)localStorage.removeItem(e)}static loadSaveData(){try{let e=localStorage.getItem(gi);if(e)return JSON.parse(e);for(const t of Ns)if(e=localStorage.getItem(t),e){const n=JSON.parse(e);return n.version=4,n.maxCapacity=n.maxCapacity||qe.initialInventoryCapacity,n.maxSlots=n.maxSlots||qe.shopMaxDisplaySlots,n.purchasedUpgrades=n.purchasedUpgrades||[],n.quest=n.quest||null,n.dayTimer=0,delete n.ap,delete n.maxAP,localStorage.removeItem(t),localStorage.setItem(gi,JSON.stringify(n)),console.log(`[Save] ${t} → v4 マイグレーション完了`),n}return null}catch{return null}}}class Pm{constructor(){this.currentAnim=null,this.currentDef=null,this.time=0,this.playing=!1,this.speed=1,this.prevAnim=null,this.prevDef=null,this.prevTime=0,this.blendDuration=.3,this.blendElapsed=0,this.blending=!1}play(e,t,n=!1){this.currentAnim===e&&!n||(this.currentDef&&this.playing&&(this.prevAnim=this.currentAnim,this.prevDef=this.currentDef,this.prevTime=this.time,this.blending=!0,this.blendElapsed=0),this.currentAnim=e,this.currentDef=t,this.time=0,this.playing=!0)}stop(){this.playing=!1}update(e){if(!this.playing||!this.currentDef)return{};this.time+=e*this.speed;const t=this.currentDef.duration||1;this.currentDef.loop?this.time=this.time%t:this.time>=t&&(this.time=t,this.playing=!1);const n=this.time/t,i=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1,r=this._interpolate(this.currentDef.keyframes,n*i);if(this.blending){this.blendElapsed+=e;const a=Math.min(this.blendElapsed/this.blendDuration,1),o=a*a*(3-2*a);if(this.prevDef){const l=this.prevDef.duration||1,c=this.prevTime/l,d=this.prevDef.keyframes.length>0?this.prevDef.keyframes[this.prevDef.keyframes.length-1].time:1,f=this._interpolate(this.prevDef.keyframes,c*d),h=this._blendTransforms(f,r,o);return a>=1&&(this.blending=!1,this.prevDef=null),h}a>=1&&(this.blending=!1)}return r}_interpolate(e,t){if(!e||e.length===0)return{};if(e.length===1)return this._cloneFrame(e[0].parts||{});let n=e[0],i=e[e.length-1];for(let l=0;l<e.length-1;l++)if(t>=e[l].time&&t<=e[l+1].time){n=e[l],i=e[l+1];break}const r=i.time-n.time,a=r>0?(t-n.time)/r:0,o=a*a*(3-2*a);return this._lerpFrames(n.parts||{},i.parts||{},o)}_lerpFrames(e,t,n){const i={},r=new Set([...Object.keys(e),...Object.keys(t)]);for(const a of r){const o=e[a]||{},l=t[a]||{};i[a]={rotation:this._lerpVec(o.rotation||[0,0,0],l.rotation||[0,0,0],n),position:this._lerpVec(o.position||[0,0,0],l.position||[0,0,0],n)}}return i}_blendTransforms(e,t,n){const i={},r=new Set([...Object.keys(e),...Object.keys(t)]);for(const a of r){const o=e[a]||{rotation:[0,0,0],position:[0,0,0]},l=t[a]||{rotation:[0,0,0],position:[0,0,0]};i[a]={rotation:this._lerpVec(o.rotation,l.rotation,n),position:this._lerpVec(o.position,l.position,n)}}return i}_lerpVec(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}_cloneFrame(e){const t={};for(const[n,i]of Object.entries(e))t[n]={rotation:[...i.rotation||[0,0,0]],position:[...i.position||[0,0,0]]};return t}seekTo(e){if(!this.currentDef)return{};this.time=e*(this.currentDef.duration||1),this.playing=!1,this.blending=!1;const t=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1;return this._interpolate(this.currentDef.keyframes,e*t)}getTransformsAt(e,t){if(!e||!e.keyframes)return{};const n=e.keyframes.length>0?e.keyframes[e.keyframes.length-1].time:1;return this._interpolate(e.keyframes,t*n)}}class Lm{constructor(e,t={}){this.definition=e,this.voxelSize=e.voxelSize||1,this.root=new bi,this.root.name=e.name,this.partGroups={},this.animController=new Pm,this.currentAnimName=null,this.materials=e.palette.map(i=>new Ta({color:new ye(i)}));const n=this.voxelSize;if(this.boxGeom=new In(n*.98,n*.98,n*.98),this.edgeMat=new qa({color:0,transparent:!0,opacity:.12}),this._buildParts(),t.position&&this.root.position.set(...t.position),t.rotation&&(this.root.rotation.y=t.rotation),t.scale){const i=t.scale;this.root.scale.set(i,i,i)}}_buildParts(){const e=this.voxelSize;for(const t of this.definition.parts){const n=new bi;n.name=t.name,n.position.set(t.position[0]*e,t.position[1]*e,t.position[2]*e),n.userData.restPosition=n.position.clone(),this._addVoxelMeshes(n,t);const i=t.parent?this.partGroups[t.parent]:this.root;i?i.add(n):this.root.add(n),this.partGroups[t.name]=n}}_addVoxelMeshes(e,t){const n=this.voxelSize,i=t.center[0],r=t.center[1],a=t.center[2],o=new Map;for(let d=0;d<t.voxels.length;d++){const[f,h,p,_]=t.voxels[d];_<0||_>=this.materials.length||(o.has(_)||o.set(_,[]),o.get(_).push({vx:f,vy:h,vz:p,origIdx:d}))}const l=new dt,c=new Ld(new In(n,n,n));for(const[d,f]of o){const h=new Cd(this.boxGeom,this.materials[d],f.length);h.castShadow=!0,h.receiveShadow=!0,h.userData.isVoxelBatch=!0,h.userData.partName=t.name,h.userData.colorIndex=d,h.userData.voxelMap=[];for(let p=0;p<f.length;p++){const{vx:_,vy:v,vz:m,origIdx:u}=f[p],S=(_-i+.5)*n,E=(v-r+.5)*n,M=(m-a+.5)*n;l.position.set(S,E,M),l.updateMatrix(),h.setMatrixAt(p,l.matrix),h.userData.voxelMap[p]={coord:[_,v,m],origIdx:u};const C=new Wl(c,this.edgeMat);C.position.set(S,E,M),e.add(C)}h.instanceMatrix.needsUpdate=!0,e.add(h)}e.userData._edgeGeom=c}rebuildPart(e){const t=this.partGroups[e];if(!t)return;const n=this.definition.parts.find(r=>r.name===e);if(!n)return;t.userData._edgeGeom&&t.userData._edgeGeom.dispose();const i=[...t.children];for(const r of i)t.remove(r),r.isInstancedMesh&&r.dispose(),r.geometry&&r.geometry!==this.boxGeom&&r.geometry.dispose(),r.material&&r.material!==this.edgeMat&&!this.materials.includes(r.material)&&r.material.dispose();for(let r=0;r<this.definition.palette.length;r++)r<this.materials.length?this.materials[r].color.set(this.definition.palette[r]):this.materials.push(new Ta({color:new ye(this.definition.palette[r])}));this._addVoxelMeshes(t,n)}getVoxelMeshes(){const e=[];return this.root.traverse(t=>{t.isInstancedMesh&&t.userData.isVoxelBatch&&e.push(t)}),e}playAnimation(e){var n;const t=(n=this.definition.animations)==null?void 0:n[e];t&&(this.currentAnimName=e,this.animController.play(e,t))}getAnimationNames(){return Object.keys(this.definition.animations||{})}update(e){const t=this.animController.update(e),n=this.voxelSize;for(const[i,r]of Object.entries(t)){const a=this.partGroups[i];if(a&&(r.rotation&&a.rotation.set(r.rotation[0],r.rotation[1],r.rotation[2]),r.position)){const o=a.userData.restPosition;a.position.set(o.x+r.position[0]*n,o.y+r.position[1]*n,o.z+r.position[2]*n)}}}addTo(e){e.add(this.root)}removeFrom(e){e.remove(this.root)}dispose(){this.root.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry!==this.boxGeom&&e.geometry.dispose()}),this.boxGeom.dispose(),this.edgeMat.dispose(),this.materials.forEach(e=>e.dispose())}}class Dm{constructor(e){this.scene=e,this.particles=[],this.geometries={box:new In(1,.3,1),octahedron:new $a(1,0),plane:new zi(1,1),sphere:new Xa(1,4,4)}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.particles.splice(t,1);continue}n.velocity.y-=n.gravity*e,n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.mesh.rotation.x+=n.spin.x*e,n.mesh.rotation.y+=n.spin.y*e,n.mesh.rotation.z+=n.spin.z*e;const i=Math.min(1,n.life/n.fadeTime);n.mesh.material.opacity=i,n.mesh.scale.setScalar(n.baseScale*(.5+.5*i))}}spawnCoinBurst(e=new N(0,2,5),t=12){for(let n=0;n<t;n++){const i=.15+Math.random()*.15,r=this.geometries.box,a=new Ps({color:new ye().setHSL(.12+Math.random()*.05,.9,.55+Math.random()*.15),metalness:.8,roughness:.2,transparent:!0,opacity:1}),o=new xt(r,a);o.scale.set(i,i,i),o.position.copy(e),o.position.x+=(Math.random()-.5)*1,o.position.z+=(Math.random()-.5)*1,this.scene.add(o),this.particles.push({mesh:o,velocity:new N((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),gravity:12,spin:new N((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),life:1.2+Math.random()*.8,fadeTime:.6,baseScale:1})}}spawnCraftStars(e=new N(6,1,0),t=10,n="q-common"){const r={"q-poor":8947848,"q-common":13943968,"q-fine":8235624,"q-excellent":8040644,"q-legendary":15251531}[n]||16777215;for(let a=0;a<t;a++){const o=.08+Math.random()*.12,l=this.geometries.octahedron,c=new Ps({color:r,emissive:r,emissiveIntensity:.5,transparent:!0,opacity:1}),d=new xt(l,c);d.scale.set(o,o,o),d.position.copy(e),d.position.x+=(Math.random()-.5)*2,d.position.z+=(Math.random()-.5)*2,this.scene.add(d),this.particles.push({mesh:d,velocity:new N((Math.random()-.5)*2,2+Math.random()*3,(Math.random()-.5)*2),gravity:-.5,spin:new N(Math.random()*4,Math.random()*4,Math.random()*4),life:1.5+Math.random()*1,fadeTime:.8,baseScale:1})}}spawnConfetti(e=40){const t=[15251531,8235624,12876378,8040644,16115400,16750933];for(let n=0;n<e;n++){const i=.15+Math.random()*.15,r=.08+Math.random()*.08,a=this.geometries.plane,o=new Ps({color:t[Math.floor(Math.random()*t.length)],transparent:!0,opacity:1,side:Qt}),l=new xt(a,o);l.scale.set(i,r,1),l.position.set((Math.random()-.5)*30,15+Math.random()*10,(Math.random()-.5)*30),this.scene.add(l),this.particles.push({mesh:l,velocity:new N((Math.random()-.5)*3,-(1+Math.random()*2),(Math.random()-.5)*3),gravity:1.5,spin:new N((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),life:4+Math.random()*3,fadeTime:2,baseScale:1})}}spawnAmbientParticle(e=.5){let t;e<.15?t=16771264:e<.5?t=16775400:e<.75?t=16750933:t=6719675;const n=.04+Math.random()*.06,i=this.geometries.sphere,r=new Ps({color:t,emissive:t,emissiveIntensity:e>.75?1:.3,transparent:!0,opacity:.6}),a=new xt(i,r);a.scale.set(n,n,n),a.position.set((Math.random()-.5)*40,Math.random()*2,(Math.random()-.5)*40),this.scene.add(a),this.particles.push({mesh:a,velocity:new N((Math.random()-.5)*.3,.2+Math.random()*.4,(Math.random()-.5)*.3),gravity:-.05,spin:new N(0,Math.random()*2,0),life:8+Math.random()*6,fadeTime:3,baseScale:1})}dispose(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles.length=0,Object.values(this.geometries).forEach(e=>e.dispose())}}function ei(s){const e="/Voxel-Tycoon01/",t=s.startsWith("/")?s.slice(1):s;return`${e}${t}`}class Um{constructor(e,t,n,i){this.scene=e,this.camera=t,this.entities=n,this.renderer=i,this.npcEntities={},this.wanderers=[],this.dayProgress=0,this._skyColors={dawn:new ye(16764040),noon:new ye(8900331),sunset:new ye(16750933),night:new ye(1710650)},this._sunColors={dawn:new ye(16771264),noon:new ye(16775400),sunset:new ye(16746564),night:new ye(3359846)},this._tempColor=new ye}async init(){this.camera.position.set(20,25,25),this.camera.lookAt(0,0,0),this.particles=new Dm(this.scene),await this.spawnEnvironment(),H.on("adventurer:return",e=>this._onAdventurerReturn(e)),H.on("rank:up",e=>{this._evolveShopExterior(e.rank),this.particles.spawnConfetti(50)}),H.on("item:sold",()=>{this.particles.spawnCoinBurst(new N(-2,2,5),10+Math.floor(Math.random()*8))}),H.on("item:crafted",e=>{const t=e.item&&e.item.quality>=81?"q-legendary":e.item&&e.item.quality>=61?"q-excellent":e.item&&e.item.quality>=41?"q-fine":"q-common",n=t==="q-legendary"?20:t==="q-excellent"?15:10;this.particles.spawnCraftStars(new N(6,1,0),n,t)}),await this._spawnWanderers()}update(e){for(const t of this.wanderers){t.timer-=e,t.timer<=0&&(t.targetX=(Math.random()-.5)*30,t.targetZ=(Math.random()-.5)*30,t.timer=5+Math.random()*8);const n=t.entity;if(n&&n.group){const i=1.5*e,r=t.targetX-n.group.position.x,a=t.targetZ-n.group.position.z,o=Math.sqrt(r*r+a*a);o>.5&&(n.group.position.x+=r/o*i,n.group.position.z+=a/o*i,n.group.rotation.y=Math.atan2(r,a))}}if(this._updateDayNightCycle(),this.particles&&(this.particles.update(e),this._ambientTimer=(this._ambientTimer||0)+e,this._ambientTimer>=3)){this._ambientTimer=0;const t=1+Math.floor(Math.random()*2);for(let n=0;n<t;n++)this.particles.spawnAmbientParticle(this.dayProgress)}}setDayProgress(e){this.dayProgress=e}_updateDayNightCycle(){if(!this.renderer)return;const e=this.dayProgress;let t,n,i,r;if(e<.15){const a=e/.15;t=this._tempColor.lerpColors(this._skyColors.night,this._skyColors.dawn,a),n=new ye().lerpColors(this._sunColors.night,this._sunColors.dawn,a),i=.4+a*.8,r=.3+a*.3}else if(e<.5){const a=(e-.15)/.35;t=this._tempColor.lerpColors(this._skyColors.dawn,this._skyColors.noon,a),n=new ye().lerpColors(this._sunColors.dawn,this._sunColors.noon,a),i=1.2+a*.4,r=.6+a*.2}else if(e<.75){const a=(e-.5)/.25;t=this._tempColor.lerpColors(this._skyColors.noon,this._skyColors.sunset,a),n=new ye().lerpColors(this._sunColors.noon,this._sunColors.sunset,a),i=1.6-a*.6,r=.8-a*.2}else{const a=(e-.75)/.25;t=this._tempColor.lerpColors(this._skyColors.sunset,this._skyColors.night,a),n=new ye().lerpColors(this._sunColors.sunset,this._sunColors.night,a),i=1-a*.6,r=.6-a*.3}this.renderer.renderer&&this.renderer.renderer.setClearColor(t),this.scene.fog&&this.scene.fog.color.copy(t),this.renderer.sunLight&&(this.renderer.sunLight.color.copy(n),this.renderer.sunLight.intensity=i),this.renderer.ambientLight&&(this.renderer.ambientLight.intensity=r),this.renderer.hemiLight&&(this.renderer.hemiLight.intensity=.3+r*.5)}async loadEntity(e,t={}){try{const i=await(await fetch(ei(e))).json(),r=new Lm(i,t);return r.addTo(this.scene),this.entities.push(r),r}catch(n){return console.error("[SceneManager] Failed to load entity:",e,n),null}}async spawnEnvironment(){await this.loadEntity("/presets/RPG_Props/House.json",{position:[0,0,-5],scale:1,rotation:0}),await this.loadEntity("/presets/RPG_Props/Chest.json",{position:[-2,0,5],scale:.6,rotation:Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Barrel.json",{position:[2,0,5],scale:.5}),await this.loadEntity("/presets/RPG_Props/Anvil.json",{position:[6,0,0],scale:.6,rotation:-Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Campfire.json",{position:[-6,0,-2],scale:.6});const e=[{path:"Pine Tree.json",pos:[-15,-15],scale:1},{path:"Pine Tree.json",pos:[12,-10],scale:.8},{path:"Pine Tree.json",pos:[10,15],scale:.9},{path:"Pine Tree.json",pos:[-18,8],scale:.7},{path:"Rock.json",pos:[8,12],scale:.6},{path:"Rock.json",pos:[-10,10],scale:.5},{path:"Rock.json",pos:[15,-5],scale:.4}];for(const n of e)await this.loadEntity(`/presets/RPG_Props/${n.path}`,{position:[n.pos[0],0,n.pos[1]],scale:n.scale});const t=await this.loadEntity("/presets/RPG_Characters/King.json",{position:[0,0,3],scale:.5});t&&t.playAnimation("idle")}async _spawnWanderers(){const e=[{path:"Chibi Human.json",x:-8,z:8},{path:"Cat.json",x:10,z:10},{path:"Dog.json",x:-12,z:-8}];for(const t of e)try{const n=await this.loadEntity(`/presets/RPG_Characters/${t.path}`,{position:[t.x,0,t.z],scale:.4});n&&(n.playAnimation("walk"),this.wanderers.push({entity:n,targetX:t.x,targetZ:t.z,timer:Math.random()*3}))}catch(n){console.warn("[SceneManager] Wanderer load failed:",n)}}async _onAdventurerReturn(e){if(!(this._returnNpcCount>=2)){this._returnNpcCount=(this._returnNpcCount||0)+1;try{const t=await this.loadEntity("/presets/RPG_Characters/Knight.json",{position:[18,0,0],scale:.5});if(!t){this._returnNpcCount--;return}t.playAnimation("walk");const n=setInterval(()=>{t.group&&(t.group.position.x-=.15,t.group.rotation.y=Math.PI/2,t.group.position.x<=4&&(clearInterval(n),t.playAnimation("idle"),setTimeout(()=>{t.group.visible=!1;const i=this.entities.indexOf(t);i!==-1&&this.entities.splice(i,1),t.removeFrom(this.scene),t.dispose(),this._returnNpcCount--},3e3)))},33)}catch{this._returnNpcCount--}}}async _evolveShopExterior(e){const t=e==null?void 0:e.index;if(t===void 0)return;const i={1:[{path:"Banner.json",pos:[-4,0,3],scale:.6,rot:0},{path:"Banner.json",pos:[4,0,3],scale:.6,rot:0},{path:"Fence.json",pos:[-5,0,7],scale:.5,rot:0},{path:"Fence.json",pos:[5,0,7],scale:.5,rot:0}],2:[{path:"Street Light.json",pos:[-7,0,5],scale:.7,rot:0},{path:"Street Light.json",pos:[7,0,5],scale:.7,rot:0},{path:"Well.json",pos:[-8,0,-3],scale:.5,rot:Math.PI/4}],3:[{path:"Tree.json",pos:[-5,0,-8],scale:.7,rot:0},{path:"Tree.json",pos:[5,0,-8],scale:.6,rot:0},{path:"Chest.json",pos:[4,0,5],scale:.5,rot:-Math.PI/6},{path:"Street Light.json",pos:[0,0,8],scale:.7,rot:0}],4:[{path:"Tent.json",pos:[10,0,4],scale:.5,rot:-Math.PI/4},{path:"Banner.json",pos:[-3,0,8],scale:.5,rot:Math.PI/4},{path:"Banner.json",pos:[3,0,8],scale:.5,rot:-Math.PI/4},{path:"Street Light.json",pos:[-10,0,0],scale:.7,rot:0},{path:"Street Light.json",pos:[10,0,0],scale:.7,rot:0}]}[t];if(i)for(const r of i)try{const a=await this.loadEntity(`/presets/RPG_Props/${r.path}`,{position:r.pos,scale:r.scale,rotation:r.rot});if(a&&a.group){const o=a.group.position.y;a.group.position.y=-3,a.group.scale.set(0,0,0);const l=performance.now(),c=800,d=()=>{const f=performance.now()-l,h=Math.min(1,f/c),p=1-Math.pow(1-h,3);a.group.position.y=-3+(o+3)*p,a.group.scale.setScalar(r.scale*p),h<1&&requestAnimationFrame(d)};requestAnimationFrame(d)}}catch(a){console.warn("[SceneManager] Shop decoration failed:",a)}}}function Yn(s,e,t=[]){const n=nn[s];if(!n)throw new Error(`Unknown blueprint: ${s}`);return{uid:crypto.randomUUID(),blueprintId:s,name:n.name,type:n.type,quality:Math.floor(e),traits:[...t],value:Math.floor(n.baseValue*(1+e/100))}}function Nm(s,e,t=[],n=0){const i=rn[s];if(!i)throw new Error(`Unknown recipe: ${s}`);const r=[...i.materials].sort(),a=e.map(h=>h.blueprintId).sort();if(r.length!==a.length)throw new Error("素材の数が合いません");for(let h=0;h<r.length;h++)if(r[h]!==a[h])throw new Error(`素材が異なります: expected ${r[h]}, got ${a[h]}`);const o=e.reduce((h,p)=>h+p.quality,0),l=e.length>0?o/e.length:50,c=new Set;e.forEach(h=>{h.traits.forEach(p=>c.add(p))});const d=[];for(const h of t)c.has(h)&&d.length<qe.maxTraitSlots&&d.push(h);const f=Math.min(100,Math.max(0,l+n));return Yn(i.targetId,f,d)}class Fm{constructor(){this.gold=qe.initialGold,this.items=[],this.maxCapacity=qe.initialInventoryCapacity;for(const e of qe.initialItems)this.items.push(Yn(e.blueprintId,e.quality,e.traits))}get isFull(){return this.items.length>=this.maxCapacity}get freeSlots(){return Math.max(0,this.maxCapacity-this.items.length)}addGold(e){this.gold+=e,H.emit("gold:changed",{gold:this.gold})}spendGold(e){return this.gold>=e?(this.gold-=e,H.emit("gold:changed",{gold:this.gold}),!0):!1}addItem(e){return this.isFull?(H.emit("toast",{message:"⚠️ 倉庫がいっぱいです！",type:"warning"}),!1):(this.items.push(e),H.emit("inventory:changed"),!0)}forceAddItem(e){this.items.push(e),H.emit("inventory:changed")}removeItem(e){const t=this.items.findIndex(n=>n.uid===e);return t!==-1?this.items.splice(t,1)[0]:null}getItems(){return this.items}getItemsByBlueprint(e){return this.items.filter(t=>t.blueprintId===e)}expandCapacity(e){this.maxCapacity+=e,H.emit("toast",{message:`📦 倉庫容量が ${e} 増えました！（${this.maxCapacity}枠）`,type:"success"})}}const Ql=[{id:"shop_slots_1",category:"shop",name:"販売棚 拡張I",description:"陳列枠 +2",icon:"🏪",cost:150,requiredRank:1,effect:{type:"display_slots",value:2}},{id:"shop_slots_2",category:"shop",name:"販売棚 拡張II",description:"陳列枠 +2",icon:"🏪",cost:500,requiredRank:3,effect:{type:"display_slots",value:2}},{id:"shop_slots_3",category:"shop",name:"販売棚 拡張III",description:"陳列枠 +2",icon:"🏪",cost:1200,requiredRank:5,effect:{type:"display_slots",value:2}},{id:"shop_slots_4",category:"shop",name:"販売棚 拡張IV",description:"陳列枠 +2",icon:"🏪",cost:3e3,requiredRank:7,effect:{type:"display_slots",value:2}},{id:"storage_1",category:"storage",name:"倉庫 拡張I",description:"倉庫容量 +10",icon:"📦",cost:100,requiredRank:1,effect:{type:"inventory_capacity",value:10}},{id:"storage_2",category:"storage",name:"倉庫 拡張II",description:"倉庫容量 +10",icon:"📦",cost:300,requiredRank:2,effect:{type:"inventory_capacity",value:10}},{id:"storage_3",category:"storage",name:"倉庫 拡張III",description:"倉庫容量 +15",icon:"📦",cost:800,requiredRank:4,effect:{type:"inventory_capacity",value:15}},{id:"storage_4",category:"storage",name:"倉庫 拡張IV",description:"倉庫容量 +15",icon:"📦",cost:2e3,requiredRank:6,effect:{type:"inventory_capacity",value:15}},{id:"storage_5",category:"storage",name:"倉庫 拡張V",description:"倉庫容量 +20",icon:"📦",cost:5e3,requiredRank:8,effect:{type:"inventory_capacity",value:20}},{id:"craft_quality_1",category:"workshop",name:"品質管理台",description:"品質安定 +10",icon:"🔨",cost:400,requiredRank:3,effect:{type:"quality_bonus",value:10}},{id:"craft_quality_2",category:"workshop",name:"精密作業台",description:"品質安定 +10",icon:"🔨",cost:1500,requiredRank:6,effect:{type:"quality_bonus",value:10}},{id:"trait_slot_1",category:"workshop",name:"特性研究室",description:"特性枠 +1",icon:"🔨",cost:1800,requiredRank:5,effect:{type:"trait_slots",value:1}},{id:"trait_slot_2",category:"workshop",name:"特性研究室・改",description:"特性枠 +1",icon:"🔨",cost:5e3,requiredRank:7,effect:{type:"trait_slots",value:1}},{id:"dispatch_slot_1",category:"barracks",name:"派遣所 拡張I",description:"同時派遣枠 +1",icon:"👥",cost:200,requiredRank:2,effect:{type:"dispatch_slots",value:1}},{id:"dispatch_slot_2",category:"barracks",name:"派遣所 拡張II",description:"同時派遣枠 +1",icon:"👥",cost:700,requiredRank:4,effect:{type:"dispatch_slots",value:1}},{id:"dispatch_slot_3",category:"barracks",name:"派遣所 拡張III",description:"同時派遣枠 +1",icon:"👥",cost:2500,requiredRank:6,effect:{type:"dispatch_slots",value:1}},{id:"sign_board",category:"decor",name:"看板設置",description:"来客率 +15%",icon:"🎪",cost:80,requiredRank:1,effect:{type:"customer_rate",value:.15}},{id:"interior_1",category:"decor",name:"内装改善",description:"お客の滞在 +1AP",icon:"🎪",cost:400,requiredRank:3,effect:{type:"patience_ap",value:1}},{id:"vip_room",category:"decor",name:"VIPルーム",description:"貴族出現率UP",icon:"🎪",cost:1200,requiredRank:5,effect:{type:"noble_rate",value:.3}},{id:"fame_banner",category:"decor",name:"名声の旗",description:"評判獲得 +30%",icon:"🎪",cost:2e3,requiredRank:6,effect:{type:"reputation_bonus",value:.3}},{id:"lucky_cat",category:"decor",name:"招き猫",description:"売値 +10%",icon:"🎪",cost:3e3,requiredRank:7,effect:{type:"sell_bonus",value:.1}},{id:"ap_boost_1",category:"stamina",name:"体力トレーニング",description:"最大AP +2",icon:"⚡",cost:300,requiredRank:2,effect:{type:"max_ap",value:2}},{id:"ap_boost_2",category:"stamina",name:"滋養強壮薬",description:"最大AP +2",icon:"⚡",cost:1e3,requiredRank:4,effect:{type:"max_ap",value:2}},{id:"ap_boost_3",category:"stamina",name:"仙人の秘薬",description:"最大AP +3",icon:"⚡",cost:3500,requiredRank:6,effect:{type:"max_ap",value:3}}],Om={shop:{name:"🏪 販売棚",order:1},storage:{name:"📦 倉庫",order:2},workshop:{name:"🔨 工房",order:3},barracks:{name:"👥 冒険者",order:4},decor:{name:"🎪 装飾",order:5},stamina:{name:"⚡ 行動力",order:6}},km=.15,Bm=50;class zm{constructor(e){this.inventory=e,this.displayedItems=[],this.maxSlots=qe.shopMaxDisplaySlots,this.sellTimer=0,this.purchasedUpgrades=[]}update(e){this.displayedItems.length!==0&&(this.sellTimer+=e,this.sellTimer>=qe.shopSellInterval&&(this.sellTimer=0,this._tryAutoSell()))}displayItem(e){if(this.displayedItems.length>=this.maxSlots)return!1;const t=this.inventory.removeItem(e);return t?(t.value=this._calcValue(t),this.displayedItems.push(t),H.emit("shop:displayed",{item:t}),!0):!1}removeDisplayedItem(e){const t=this.displayedItems.findIndex(i=>i.uid===e);if(t===-1)return null;const n=this.displayedItems.splice(t,1)[0];return this.inventory.addItem(n),n}processSale(e,t=1){const n=this.displayedItems.findIndex(r=>r.uid===e.uid);if(n===-1)return!1;this.displayedItems.splice(n,1);const i=Math.floor((e.value||10)*t);return this.inventory.addGold(i),H.emit("item:sold",{item:e,price:i}),Ln.add("itemsSold",1),!0}_tryAutoSell(){if(this.displayedItems.length===0)return;const e=this.displayedItems[Math.floor(Math.random()*this.displayedItems.length)];Math.random()<km&&this.processSale(e)}_calcValue(e){const t=nn[e.blueprintId];return t?Math.max(1,Math.floor(t.baseValue*(e.quality/Bm))):10}purchaseUpgrade(e,t){if(this.isPurchased(e))return!1;const n=Ql.find(r=>r.id===e);if(!n||t<n.requiredRank||!this.inventory.spendGold(n.cost))return!1;this.purchasedUpgrades.push(e);const i=n.effect;switch(i.type){case"display_slots":this.maxSlots+=i.value,H.emit("toast",{message:`🏪 販売棚が ${i.value} 枠増えました！（${this.maxSlots}枠）`,type:"success"});break;case"inventory_capacity":this.inventory.expandCapacity(i.value);break}return H.emit("upgrade:purchased",{upgradeId:e,effect:i}),!0}isPurchased(e){return this.purchasedUpgrades.includes(e)}}const Vm=[{id:"adv_knight",name:"新人騎士アーサー",icon:"🛡️",exploreTimeMultiplier:1},{id:"adv_archer",name:"狩人ロビン",icon:"🏹",exploreTimeMultiplier:.85}],ec=[{id:"adv_mage",name:"見習い魔女リリー",icon:"🧙‍♀️",exploreTimeMultiplier:1.1,unlockRank:2},{id:"adv_thief",name:"盗賊キャット",icon:"🐱",exploreTimeMultiplier:.7,unlockRank:3},{id:"adv_paladin",name:"聖騎士セシル",icon:"⚜️",exploreTimeMultiplier:1.2,unlockRank:4}],es=[0,3,8,15,25,40,60,85,120,170],Aa={qualityBonus:2,timeReduction:.08};class Gm{constructor(e){this.inventory=e,this.adventurers=[],Vm.forEach(t=>{this.adventurers.push({...t,level:1,exp:0,status:"idle",timer:0,maxTimer:0,assignedArea:"plains",currentArea:null,equipment:{weapon:null}})}),H.on("adventurer:unlock",t=>{const n=t.adventurer;if(!n||this.adventurers.find(r=>r.id===n.id))return;const i={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}};this.adventurers.push(i),H.emit("adventurer:joined",{adventurer:i})})}update(e){this.adventurers.forEach(t=>{t.status==="exploring"?(t.timer-=e,t.timer<=0&&this._completeExploration(t)):t.status==="idle"&&this._autoDispatch(t)})}assignArea(e,t){const n=this.adventurers.find(r=>r.id===e);if(!n)return!1;const i=Lt[t];return!i||!i.unlocked?!1:(n.assignedArea=t,!0)}_autoDispatch(e){const t=e.assignedArea,n=Lt[t];if(!n||!n.unlocked){e.assignedArea="plains";return}const i=this._calcExploreTime(e,n);e.status="exploring",e.currentArea=t,e.timer=i,e.maxTimer=i,Ln.add("expeditionsSent",1)}_calcExploreTime(e,t){const n=1-(e.level-1)*Aa.timeReduction;return Math.max(8,Math.ceil(t.baseTime*(e.exploreTimeMultiplier||1)*n))}_completeExploration(e){const t=Lt[e.currentArea],n=e.currentArea;if(!t){e.status="idle";return}const i=t.dropCountMin||qe.exploreDropCountMin,r=t.dropCountMax||qe.exploreDropCountMax,a=i+Math.floor(Math.random()*(r-i+1)),o=[],l=t.dropTable;for(let d=0;d<a;d++){let f=0;l.forEach(C=>f+=C.weight);let h=Math.random()*f,p=l[0].blueprintId;for(const C of l)if(h-=C.weight,h<=0){p=C.blueprintId;break}const _=nn[p];if(!_)continue;const v=t.qualityMin||qe.exploreQualityMin,m=t.qualityMax||qe.exploreQualityMax;let u=v+Math.floor(Math.random()*(m-v));e.equipment.weapon&&(u+=Math.floor(e.equipment.weapon.quality*qe.equipmentQualityBonus)),u+=(e.level-1)*Aa.qualityBonus,u=Math.min(100,Math.max(1,u));const S=[],E=t.traitPool||[];for(const C of E)Math.random()<qe.traitChance&&S.push(C);const M={uid:crypto.randomUUID(),blueprintId:p,name:_.name,type:_.type,quality:u,traits:S,tier:_.tier||1};o.push(M),this.inventory.addItem(M)}const c=t.expReward||1;e.exp+=c,this._checkLevelUp(e),e.status="idle",e.currentArea=null,e.timer=0,H.emit("adventurer:return",{adventurer:e,items:o,areaId:n}),Ln.add("materialsGathered",o.length)}_checkLevelUp(e){for(;e.level<es.length&&e.exp>=es[e.level];)e.level++,H.emit("adventurer:levelUp",{adventurer:e})}equipWeapon(e,t){const n=this.adventurers.find(r=>r.id===e);if(!n)return!1;const i=this.inventory.removeItem(t);return i?(n.equipment.weapon&&this.inventory.addItem(n.equipment.weapon),n.equipment.weapon=i,H.emit("inventory:changed"),!0):!1}unequipWeapon(e){const t=this.adventurers.find(n=>n.id===e);return!t||!t.equipment.weapon?!1:(this.inventory.addItem(t.equipment.weapon),t.equipment.weapon=null,H.emit("inventory:changed"),!0)}getAdventurers(){return this.adventurers}getUnlockedAreas(){return Object.values(Lt).filter(e=>e.unlocked)}}class Hm{constructor(e,t){this.inventory=e,this.quest=t,this.day=qe.startingDay,this.dayTimer=0,this.dayDuration=qe.dayDurationSeconds,this.totalSales=0,this.isGameOver=!1,this.paused=!1,this.currentRankIndex=0,this._unsubs=[],this._unsubs.push(H.on("item:sold",n=>{this.totalSales+=n.price||0,Ln.add("totalRevenue",n.price||0),this.quest&&typeof this.quest.updateTotalSales=="function"&&this.quest.updateTotalSales(this.totalSales),this._checkRankUp()})),this._unsubs.push(H.on("game:pause",()=>{this.paused=!0})),this._unsubs.push(H.on("game:resume",()=>{this.paused=!1}))}get dayProgress(){return Math.min(1,this.dayTimer/this.dayDuration)}get currentRank(){return qe.ranks[this.currentRankIndex]}get currentRent(){return qe.dailyRent+this.currentRankIndex*qe.rentIncreasePerRank}update(e){this.isGameOver||this.paused||(this.dayTimer+=e,this.dayTimer>=this.dayDuration&&this._advanceDay())}skipDay(){this.isGameOver||this._advanceDay()}setPaused(e){this.paused=e}_advanceDay(){this.dayTimer=0;const e=this.currentRent;if(this.inventory.gold<e){this.isGameOver=!0,H.emit("game:over",{day:this.day,totalSales:this.totalSales,rank:this.currentRank.name,rent:e,reason:`維持費 ${e}G を支払えませんでした…`});return}this.inventory.spendGold(e),this.day++,Ln.add("totalDays",1),this.quest&&typeof this.quest.onNewDay=="function"&&this.quest.onNewDay(this.day),H.emit("day:newDay",{day:this.day,rent:e})}_checkRankUp(){const e=qe.ranks;for(;this.currentRankIndex<e.length-1&&this.totalSales>=e[this.currentRankIndex+1].requiredSales;){this.currentRankIndex++;const t=e[this.currentRankIndex];if(t.newRecipes)for(const i of t.newRecipes)rn[i]&&(rn[i].unlocked=!0,H.emit("recipe:unlocked",{name:rn[i].targetId,key:i}));if(t.newAreas)for(const i of t.newAreas)Lt[i]&&(Lt[i].unlocked=!0,H.emit("area:unlocked",{name:Lt[i].name,key:i}));const n=ec.filter(i=>i.unlockRank===t.rank);for(const i of n)H.emit("adventurer:unlock",{adventurer:i});H.emit("rank:up",{rank:t.name,index:this.currentRankIndex}),this.currentRankIndex>=qe.goalShopRank-1&&H.emit("game:clear",{day:this.day,totalSales:this.totalSales,rank:t.name})}}dispose(){this._unsubs.forEach(e=>e())}}const fl=[{name:"旅の商人",icon:"🧳",dialogue:"珍しいものはないかね？"},{name:"見習い騎士",icon:"⚔️",dialogue:"武器を探しています！"},{name:"森の薬師",icon:"🌿",dialogue:"良い薬草はある？"},{name:"お嬢様",icon:"👗",dialogue:"キラキラしたものが欲しいわ"},{name:"鍛冶屋の親方",icon:"🔨",dialogue:"素材を仕入れたい"},{name:"冒険者",icon:"🗡️",dialogue:"冒険に必要なものを！"},{name:"魔法使い",icon:"🧙",dialogue:"魔法の触媒を探している"},{name:"村の子供",icon:"👦",dialogue:"かっこいいの、ある？"}],pl=[["equipment"],["consumable"],["accessory"],["material"],["equipment","consumable"],["equipment","accessory"],["consumable","material"]];class qm{constructor(e,t,n,i){this.inventory=e,this.shop=t,this.events=n,this.reputation=i,this.customers=[],this.spawnTimer=0,this.customersToday=0,this.currentDay=1,this._unsub=H.on("day:newDay",()=>{this.customersToday=0,this.spawnTimer=0,this.customers=[]})}update(e){const t=this.reputation?this.reputation.getCustomerRateMultiplier():1,n=qe.customerSpawnInterval/t;this.spawnTimer+=e,this.spawnTimer>=n&&(this.spawnTimer=0,this.customersToday<qe.maxCustomersPerDay&&this._spawnCustomer());for(let i=this.customers.length-1;i>=0;i--){const r=this.customers[i];r.timer-=e,r.checkTimer=(r.checkTimer||0)+e,r.checkTimer>=3&&(r.checkTimer=0,this._tryPurchase(r)),r.timer<=0&&(this.customers.splice(i,1),H.emit("customer:left",{customer:r,reason:"timeout"}))}}_spawnCustomer(){const e=fl[Math.floor(Math.random()*fl.length)],t=pl[Math.floor(Math.random()*pl.length)],n=qe.customerPatienceSeconds,i={id:crypto.randomUUID(),...e,demandTypes:t,timer:n,maxTimer:n,checkTimer:0};this.customers.push(i),this.customersToday++,H.emit("customer:arrived",{customer:i})}_tryPurchase(e){const t=this.shop.displayedItems.filter(o=>e.demandTypes.includes(o.type));if(t.length===0)return;const n=t.sort((o,l)=>(l.value||0)-(o.value||0))[0],i=this.reputation?this.reputation.getPriceBonus():0,r=qe.customerBonusMultiplier*(1+i);if(this.shop.processSale(n,r)){const o=this.customers.indexOf(e);o!==-1&&this.customers.splice(o,1),H.emit("customer:bought",{customer:e,item:n})}}getActiveCustomers(){return this.customers}dispose(){var e;(e=this._unsub)==null||e.call(this)}}const Nr=[{id:"merchant_visit",name:"旅の商人",icon:"🧳",description:"旅の商人が珍しい素材を持ってきた！安く買える。",effect:"bonus_material",duration:0,weight:25},{id:"storm",name:"暴風雨",icon:"🌧️",description:"激しい嵐が来た。探索時間が50%長くなる。",effect:"explore_slow",multiplier:1.5,duration:1,weight:15},{id:"festival",name:"収穫祭",icon:"🎉",description:"町でお祭り！来客数が2倍に。",effect:"double_customers",duration:1,weight:15},{id:"tax",name:"王国の徴税",icon:"📜",description:"王国から臨時の税金が課されました…",effect:"pay_tax",taxAmount:50,duration:0,weight:12},{id:"lucky_find",name:"幸運の発見",icon:"🍀",description:"道端で素材を拾った！",effect:"free_material",duration:0,weight:20},{id:"reputation",name:"評判の広まり",icon:"📢",description:"店の評判が広まった！次の売却価格が30%アップ。",effect:"sell_bonus",multiplier:1.3,duration:1,weight:13}];class Wm{constructor(e){this.inventory=e,this.activeEffects=[],H.on("day:newDay",()=>this._onNewDay())}getActiveEffects(){return this.activeEffects}hasEffect(e){return this.activeEffects.some(t=>t.effect===e)}getEffectMultiplier(e){const t=this.activeEffects.find(n=>n.effect===e);return t?t.multiplier:1}_onNewDay(){this.activeEffects=this.activeEffects.filter(e=>(e.remainingDays--,e.remainingDays>0)),Math.random()<.5&&this._triggerRandomEvent()}_triggerRandomEvent(){const e=this._rollEvent();if(e)switch(H.emit("event:triggered",{name:e.name,icon:e.icon,description:e.description}),e.effect){case"bonus_material":{const t=Object.values(Lt).filter(i=>i.unlocked),n=t[Math.floor(Math.random()*t.length)];if(n)for(let i=0;i<2;i++){const r=n.dropTable[Math.floor(Math.random()*n.dropTable.length)],a=Yn(r.blueprintId,30+Math.floor(Math.random()*30),[]);this.inventory.addItem(a)}H.emit("inventory:changed");break}case"free_material":{const t=["wood","stone","herb","slime_jelly"],n=t[Math.floor(Math.random()*t.length)],i=Yn(n,40+Math.floor(Math.random()*30),[]);this.inventory.addItem(i),H.emit("inventory:changed");break}case"pay_tax":{this.inventory.spendGold(e.taxAmount);break}case"explore_slow":case"double_customers":case"sell_bonus":{this.activeEffects.push({effect:e.effect,multiplier:e.multiplier||1,remainingDays:e.duration,name:e.name,icon:e.icon});break}}}_rollEvent(){const e=Nr.reduce((n,i)=>n+i.weight,0);let t=Math.random()*e;for(const n of Nr)if(t-=n.weight,t<=0)return n;return Nr[0]}}const $m=ei("/bgm/title_01.mp3"),Xm=ei("/bgm/Ending_01.mp3"),Ym=Array.from({length:15},(s,e)=>ei(`/bgm/bgm_${String(e+1).padStart(2,"0")}.mp3`));class jm{constructor(){this.ctx=null,this.masterGain=null,this.bgmGain=null,this.seGain=null,this.muted=!1,this.initialized=!1,this.masterVolume=.3,this.bgmVolume=.5,this.seVolume=.5,this.audioEl=null,this.bgmSource=null,this.shuffledPlaylist=[],this.currentTrackIndex=0,this.isTitleBGM=!1,this.isFading=!1,this.proceduralActive=!1,this._bgmTimeout=null;const e=localStorage.getItem("voxelshop_sound");if(e)try{const t=JSON.parse(e);this.muted=t.muted||!1,t.masterVolume!==void 0&&(this.masterVolume=t.masterVolume),t.bgmVolume!==void 0&&(this.bgmVolume=t.bgmVolume),t.seVolume!==void 0&&(this.seVolume=t.seVolume)}catch{}}init(){if(!this.initialized){this.initialized=!0,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.masterVolume,this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=this.bgmVolume,this.bgmGain.connect(this.masterGain),this.seGain=this.ctx.createGain(),this.seGain.gain.value=this.seVolume,this.seGain.connect(this.masterGain),this.audioEl=new Audio,this.audioEl.crossOrigin="anonymous",this.audioEl.loop=!1,this.audioEl.volume=1;try{this.bgmSource=this.ctx.createMediaElementSource(this.audioEl),this.bgmSource.connect(this.bgmGain)}catch{console.warn("[SoundManager] MediaElementSource not supported, using direct audio")}this.audioEl.addEventListener("ended",()=>{this.isTitleBGM?(this.audioEl.currentTime=0,this.audioEl.play().catch(()=>{})):this.playNextTrack()}),this._shufflePlaylist(),this._bindEvents()}}_bindEvents(){H.on("item:crafted",e=>{var t;((t=e==null?void 0:e.item)==null?void 0:t.quality)>=81?this.playLegendaryCraft():this.playCraftSuccess()}),H.on("item:sold",()=>this.playSellCoin()),H.on("customer:arrived",()=>this.playDoorBell()),H.on("rank:up",()=>this.playFanfare()),H.on("adventurer:levelUp",()=>this.playLevelUp()),H.on("event:triggered",()=>this.playEventChime()),H.on("day:tick",()=>this.playDayTick()),H.on("game:over",()=>this.playGameOver()),H.on("tab:switched",()=>this.playTabSwitch()),H.on("item:displayed",()=>this.playItemDisplay()),H.on("item:removed",()=>this.playItemRemove()),H.on("adventurer:return",()=>this.playItemAcquire()),H.on("day:newDay",()=>this._onNewDay()),H.on("game:clear",()=>this.playEndingBGM())}_saveSettings(){localStorage.setItem("voxelshop_sound",JSON.stringify({muted:this.muted,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,seVolume:this.seVolume}))}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.masterGain.gain.setTargetAtTime(this.muted?0:this.masterVolume,this.ctx.currentTime,.1),!this.bgmSource&&this.audioEl&&(this.audioEl.volume=this.muted?0:this.masterVolume),this._saveSettings(),this.muted}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.masterGain&&!this.muted&&this.masterGain.gain.setTargetAtTime(this.masterVolume,this.ctx.currentTime,.05),this._saveSettings()}setBgmVolume(e){this.bgmVolume=Math.max(0,Math.min(1,e)),this.bgmGain&&this.bgmGain.gain.setTargetAtTime(this.bgmVolume,this.ctx.currentTime,.05),this._saveSettings()}setSeVolume(e){this.seVolume=Math.max(0,Math.min(1,e)),this.seGain&&this.seGain.gain.setTargetAtTime(this.seVolume,this.ctx.currentTime,.05),this._saveSettings()}waitForCurrentTrack(){return new Promise(e=>{if(!this.audioEl||this.audioEl.readyState>=3)return e();const t=()=>{this.audioEl.removeEventListener("canplaythrough",t),this.audioEl.removeEventListener("error",t),e()};this.audioEl.addEventListener("canplaythrough",t,{once:!0}),this.audioEl.addEventListener("error",t,{once:!0})})}startTitleBGM(){this.isTitleBGM=!0,this._playTrack($m)}startGameBGM(){if(this.isTitleBGM=!1,this.audioEl&&!this.audioEl.paused&&this.audioEl.src.includes("title_01")){this.audioEl.loop=!1;const e=()=>{this.audioEl.removeEventListener("ended",e),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])};this.audioEl.addEventListener("ended",e,{once:!0});return}this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])}playEndingBGM(){this.isTitleBGM=!1,this._fadeOutThen(()=>{this._playTrack(Xm)})}playNextTrack(){this.isTitleBGM||(this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this._shufflePlaylist(),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex]))}stopBGM(){this.audioEl&&(this.audioEl.pause(),this.audioEl.currentTime=0),this._stopProcedural()}_onNewDay(){this.isTitleBGM||this._fadeOutThen(()=>{this.playNextTrack()})}_fadeOutThen(e,t=2e3){if(!this.bgmGain||this.isFading){e();return}this.isFading=!0;const n=this.ctx.currentTime;this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value,n),this.bgmGain.gain.linearRampToValueAtTime(0,n+t/1e3),setTimeout(()=>{this.audioEl&&this.audioEl.pause(),this.bgmGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.isFading=!1,e()},t)}_playTrack(e){if(!this.audioEl)return;this._stopProcedural(),this.audioEl.pause(),this.audioEl.src=e,this.audioEl.load();const t=this.audioEl.play();t&&t.catch(n=>{n.name!=="AbortError"&&(console.warn("[SoundManager] Track play failed:",n.message),this._startProcedural())})}_shufflePlaylist(){this.shuffledPlaylist=[...Ym];for(let e=this.shuffledPlaylist.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.shuffledPlaylist[e],this.shuffledPlaylist[t]]=[this.shuffledPlaylist[t],this.shuffledPlaylist[e]]}this.currentTrackIndex=0}_startProcedural(){this.proceduralActive||(this.proceduralActive=!0,this._playProceduralLoop())}_stopProcedural(){this.proceduralActive=!1,this._bgmTimeout&&(clearTimeout(this._bgmTimeout),this._bgmTimeout=null)}_playProceduralLoop(){if(!this.proceduralActive||!this.ctx)return;const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],t=this.ctx.currentTime,n=6+Math.floor(Math.random()*4),i=n*1.2;for(let a=0;a<n;a++){const o=e[Math.floor(Math.random()*e.length)],l=t+a*1.2+Math.random()*.2,c=.8+Math.random()*.6;this._playBGMNote(o,l,c)}const r=e[Math.floor(Math.random()*4)];this._playPad(r,t,i+1),this._bgmTimeout=setTimeout(()=>this._playProceduralLoop(),(i+1.5)*1e3)}_playBGMNote(e,t,n){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=e,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.15,t+.08),r.gain.exponentialRampToValueAtTime(.001,t+n),i.connect(r),r.connect(this.bgmGain),i.start(t),i.stop(t+n+.1)}_playPad(e,t,n){[e*.5,e*.5*1.25,e*.5*1.5].forEach(r=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="triangle",a.frequency.value=r,l.type="lowpass",l.frequency.value=400,l.Q.value=.5,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.04,t+1),o.gain.linearRampToValueAtTime(.04,t+n-1),o.gain.exponentialRampToValueAtTime(.001,t+n),a.connect(l),l.connect(o),o.connect(this.bgmGain),a.start(t),a.stop(t+n+.1)})}playCraftSuccess(){if(!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{this._playSENote(n,e+i*.08,.3,"sine",.15)})}playPuzzleMatch(e=1){if(!this.ctx)return;const t=this.ctx.currentTime,n=440+e*80;this._playSENote(n,t,.15,"square",.08),this._playSENote(n*1.25,t+.06,.12,"square",.06)}playSellCoin(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(1200,e,.08,"square",.06),this._playSENote(1800,e+.04,.06,"square",.04),this._playSENote(2400,e+.07,.1,"sine",.05)}playDoorBell(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(880,e,.4,"sine",.12),this._playSENote(1108.73,e+.15,.35,"sine",.1)}playFanfare(){if(!this.ctx)return;const e=this.ctx.currentTime,t=[523.25,523.25,659.25,783.99,659.25,783.99,1046.5],n=[0,.12,.24,.36,.48,.6,.72],i=[.1,.1,.1,.15,.1,.15,.6];t.forEach((r,a)=>{this._playSENote(r,e+n[a],i[a],"square",.1)})}playLevelUp(){if(!this.ctx)return;const e=this.ctx.currentTime;for(let t=0;t<6;t++)this._playSENote(400+t*120,e+t*.06,.15,"sine",.1)}playEventChime(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(660,e,.25,"sine",.1),this._playSENote(880,e+.12,.3,"sine",.08),this._playSENote(1100,e+.24,.25,"sine",.06)}playDayTick(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(440,e,.15,"triangle",.05)}playGameOver(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(110,e,1.5,"sawtooth",.15),this._playSENote(82.41,e+.1,1.2,"sine",.12)}playLegendaryCraft(){if(!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51,1567.98].forEach((n,i)=>{this._playSENote(n,e+i*.06,.4,"sine",.12)}),this._playSENote(1046.5,e+.4,.8,"sine",.08),this._playSENote(1318.51,e+.4,.8,"sine",.06),this._playSENote(1567.98,e+.4,.8,"sine",.05)}playTabSwitch(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(600,e,.05,"sine",.04),this._playSENote(800,e+.03,.04,"sine",.03)}playItemDisplay(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(300,e,.1,"triangle",.06),this._playSENote(450,e+.05,.08,"sine",.04)}playItemRemove(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(500,e,.06,"sine",.04),this._playSENote(350,e+.04,.08,"sine",.03)}playItemAcquire(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(880,e,.12,"sine",.08),this._playSENote(1320,e+.06,.15,"sine",.06),this._playSENote(1760,e+.12,.1,"sine",.04)}playError(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(150,e,.08,"square",.08),this._playSENote(120,e+.1,.1,"square",.06)}playHover(){if(!this.ctx)return;const e=this.ctx.currentTime;this._playSENote(700,e,.02,"sine",.02)}_playSENote(e,t,n,i="sine",r=.1){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=i,a.frequency.value=e,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(r,t+.01),o.gain.exponentialRampToValueAtTime(.001,t+n),a.connect(o),o.connect(this.seGain),a.start(t),a.stop(t+n+.1)}}const yt=new jm,ml=[{name:"粗悪",min:0,max:20,css:"q-poor",icon:"▪",color:"#888"},{name:"普通",min:21,max:40,css:"q-common",icon:"▫",color:"#c8bea7"},{name:"良品",min:41,max:60,css:"q-fine",icon:"◆",color:"#7daa68"},{name:"優品",min:61,max:80,css:"q-excellent",icon:"★",color:"#7ab0c4"},{name:"極上",min:81,max:100,css:"q-legendary",icon:"✦",color:"#e8b84b"}],_l={material:{icon:"🪨",label:"素材",css:"type-material",emoji:"🪨"},equipment:{icon:"⚔️",label:"装備",css:"type-equipment",emoji:"⚔️"},consumable:{icon:"🧪",label:"消耗品",css:"type-consumable",emoji:"🧪"},accessory:{icon:"💎",label:"アクセサリ",css:"type-accessory",emoji:"💎"}};function Xn(s){return ml.find(e=>s>=e.min&&s<=e.max)||ml[0]}function pn(s){return _l[s]||_l.material}function Za(s){const e=Ka[s];return e?`trait-${e.color}`:""}function Km(s){const e=nn[s.blueprintId];return e&&e.image?ei(e.image):null}function Ja(s,e){const t=Km(s);return t?`<div class="item-card-image"><img src="${t}" alt="${s.name}" /></div>`:`<div class="item-card-image item-card-image-placeholder"><span class="item-card-emoji">${e.emoji}</span></div>`}function tc(s){const e=Xn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${Za(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css}">
      ${Ja(s,t)}
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
      </div>
    </div>
  `}function Zm(s){const e=Xn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${Za(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css} shop-displayable-card" data-uid="${s.uid}">
      ${Ja(s,t)}
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
  `}function Jm(s){const e=Xn(s.quality),t=pn(s.type),n=s.traits.map(i=>`<span class="trait-badge ${Za(i)}">${i}</span>`).join("");return`
    <div class="item-card ${e.css} ${t.css} displayed-glow" data-uid="${s.uid}">
      ${Ja(s,t)}
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
  `}class Qm{constructor(e){this.inventory=e,this.el=document.getElementById("inventory-list"),this.filter="all",this.sort="type"}render(){let e=this.inventory.getItems();const n=[...this.filter==="all"?e:e.filter(o=>o.type===this.filter)].sort((o,l)=>{if(this.sort==="quality")return l.quality-o.quality;if(this.sort==="name")return o.name.localeCompare(l.name);const c={material:0,equipment:1,consumable:2,accessory:3},d=(c[o.type]||0)-(c[l.type]||0);return d!==0?d:l.quality-o.quality}),i={all:e.length,material:0,equipment:0,consumable:0,accessory:0};e.forEach(o=>i[o.type]=(i[o.type]||0)+1);const r=[{key:"all",label:`📦 すべて (${e.length}/${this.inventory.maxCapacity})`},{key:"material",label:"🪨 素材"},{key:"equipment",label:"⚔️ 装備"},{key:"consumable",label:"🧪 消耗品"},{key:"accessory",label:"💎 アクセ"}];let a='<div class="inv-toolbar">';if(a+='<div class="inv-filters">',r.forEach(o=>{const l=this.filter===o.key?"active":"",c=i[o.key]||0;a+=`<button class="btn inv-filter-btn ${l}" data-filter="${o.key}">${o.label} <span class="inv-count">${c}</span></button>`}),a+="</div>",a+='<div class="inv-sort">',a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="type"?"active":""}" data-sort="type">種類</button>`,a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="quality"?"active":""}" data-sort="quality">品質</button>`,a+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="name"?"active":""}" data-sort="name">名前</button>`,a+="</div></div>",n.length===0){const o=this.filter==="all";a+=`<div class="empty-state">
        <div class="empty-state-icon">${o?"📦":"🔍"}</div>
        <div class="empty-state-text">${o?"まだ何も持っていません":"このカテゴリのアイテムはありません"}</div>
        <div class="empty-state-hint">${o?"冒険者を派遣して素材を集めましょう！":"他のカテゴリを見てみましょう"}</div>
      </div>`}else a+='<div class="item-grid">',a+=n.map(o=>tc(o)).join(""),a+="</div>";this.el.innerHTML=a,this.el.querySelectorAll(".inv-filter-btn").forEach(o=>{o.addEventListener("click",l=>{this.filter=l.currentTarget.dataset.filter,this.render()})}),this.el.querySelectorAll(".inv-sort-btn").forEach(o=>{o.addEventListener("click",l=>{this.sort=l.currentTarget.dataset.sort,this.render()})})}}const wt=6,Pt=12,rt=40,Fs=45,Fr=1,e_=.3,t_=.02,Zi=[{id:0,emoji:"🪨",label:"石",color:"#8a8a7a",glow:"rgba(138,138,122,0.4)"},{id:1,emoji:"🌿",label:"草",color:"#7daa68",glow:"rgba(125,170,104,0.4)"},{id:2,emoji:"🔥",label:"火",color:"#c46a5a",glow:"rgba(196,106,90,0.4)"},{id:3,emoji:"💎",label:"結晶",color:"#7ab0c4",glow:"rgba(122,176,196,0.4)"},{id:4,emoji:"⚔️",label:"金属",color:"#c4a87a",glow:"rgba(196,168,122,0.4)"},{id:5,emoji:"🧪",label:"薬品",color:"#b87ae8",glow:"rgba(184,122,232,0.4)"}],Ji=[{min:0,bonus:0,rank:"なし",color:"#888"},{min:300,bonus:5,rank:"銅",color:"#c4a87a"},{min:800,bonus:10,rank:"銀",color:"#c0c0c0"},{min:1500,bonus:18,rank:"金",color:"#e8b84b"},{min:2800,bonus:25,rank:"極",color:"#e87ae8"}];class n_{constructor(){this.overlay=null,this.canvas=null,this.ctx=null,this.running=!1,this.resolveCallback=null,this.grid=[],this.currentPiece=null,this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Fs,this.dropTimer=0,this.dropInterval=Fr,this.linesCleared=0,this.paused=!1,this.clearingCells=[],this.shakeTimer=0,this._boundKeyDown=this._onKeyDown.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundMouseMove=this._onMouseMove.bind(this),this._boundTouchStart=this._onTouchStart.bind(this),this._boundTouchMove=this._onTouchMove.bind(this),this._touchStartX=0,this._touchStartY=0,this._mouseCol=-1}start(e,t=[]){return new Promise(n=>{this.resolveCallback=n,this.recipeName=e,this.materialHints=t,this._initGame(),this._createUI(),this._startLoop()})}_initGame(){this.grid=[];for(let e=0;e<Pt;e++)this.grid.push(new Array(wt).fill(-1));this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Fs,this.dropTimer=0,this.dropInterval=Fr,this.linesCleared=0,this.clearingCells=[],this.shakeTimer=0,this.paused=!1,this.running=!0,this._spawnPiece()}_spawnPiece(){const e=Math.floor(Math.random()*Zi.length);this.currentPiece={col:Math.floor(wt/2),row:0,blocks:[e,Zi[Math.floor(Math.random()*Zi.length)].id],rotation:0},this.grid[0][this.currentPiece.col]!==-1&&this._endGame()}_createUI(){this.overlay=document.createElement("div"),this.overlay.className="puzzle-overlay",this.overlay.innerHTML=`
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>🧩 錬金パズル — ${this.recipeName}</h3>
          <div class="puzzle-timer" id="puzzle-timer">${Fs}秒</div>
        </div>
        <div class="puzzle-body">
          <canvas id="puzzle-canvas" width="${wt*rt}" height="${Pt*rt}"></canvas>
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
    `,document.body.appendChild(this.overlay),this.canvas=document.getElementById("puzzle-canvas"),this.ctx=this.canvas.getContext("2d"),document.getElementById("puzzle-skip").addEventListener("click",()=>{this._endGame(!0)}),document.addEventListener("keydown",this._boundKeyDown),this.canvas.addEventListener("mousedown",this._boundMouseDown),this.canvas.addEventListener("mousemove",this._boundMouseMove),this.canvas.addEventListener("touchstart",this._boundTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._boundTouchMove,{passive:!1}),requestAnimationFrame(()=>this.overlay.classList.add("puzzle-visible"))}_startLoop(){this._lastTime=performance.now(),this._loop()}_loop(){if(!this.running)return;const e=performance.now(),t=(e-this._lastTime)/1e3;this._lastTime=e,this.paused||this._update(t),this._draw(),this._animFrame=requestAnimationFrame(()=>this._loop())}_update(e){if(this.timeLeft-=e,this.timeLeft<=0){this.timeLeft=0,this._endGame();return}const t=document.getElementById("puzzle-timer");if(t){const n=Math.ceil(this.timeLeft);t.textContent=`${n}秒`,t.style.color=n<=10?"#c46a5a":""}if(this.clearingCells.length>0){let n=!0;for(const i of this.clearingCells)i.timer-=e*4,i.timer>0&&(n=!1);if(n){for(const r of this.clearingCells)this.grid[r.row][r.col]=-1;this.clearingCells=[],this._applyGravity();const i=this._findMatches();i.length>0?(this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this._scoreMatches(i),this.clearingCells=i.map(r=>({...r,timer:1}))):this.combo=0}return}this.dropInterval=Math.max(e_,Fr-(Fs-this.timeLeft)*t_),this.dropTimer+=e,this.dropTimer>=this.dropInterval&&(this.dropTimer=0,this._movePiece(0,1)||this._placePiece())}_movePiece(e,t){if(!this.currentPiece)return!1;const n=this.currentPiece,i=n.col+e,r=n.row+t,a=this._getPiecePositions(i,r,n.rotation);for(const[o,l]of a)if(o<0||o>=Pt||l<0||l>=wt||this.grid[o][l]!==-1)return!1;return n.col=i,n.row=r,!0}_rotatePiece(){if(!this.currentPiece)return;const e=this.currentPiece,t=(e.rotation+1)%2,n=this._getPiecePositions(e.col,e.row,t);for(const[i,r]of n)if(i<0||i>=Pt||r<0||r>=wt||this.grid[i][r]!==-1)return;e.rotation=t}_getPiecePositions(e,t,n){return n===0?[[t,e],[t+1,e]]:[[t,e],[t,e+1]]}_hardDrop(){if(this.currentPiece){for(;this._movePiece(0,1););this._placePiece()}}_placePiece(){if(!this.currentPiece)return;const e=this.currentPiece,t=this._getPiecePositions(e.col,e.row,e.rotation);for(let i=0;i<t.length;i++){const[r,a]=t[i];r>=0&&r<Pt&&a>=0&&a<wt&&(this.grid[r][a]=e.blocks[i])}const n=this._findMatches();n.length>0&&(this.combo=1,this.maxCombo=Math.max(this.maxCombo,1),this._scoreMatches(n),this.clearingCells=n.map(i=>({...i,timer:1}))),this._spawnPiece()}_findMatches(){const e=new Set;for(let t=0;t<Pt;t++)for(let n=0;n<=wt-3;n++){const i=this.grid[t][n];if(i!==-1&&this.grid[t][n+1]===i&&this.grid[t][n+2]===i){let r=n+2;for(;r+1<wt&&this.grid[t][r+1]===i;)r++;for(let a=n;a<=r;a++)e.add(`${t},${a}`)}}for(let t=0;t<wt;t++)for(let n=0;n<=Pt-3;n++){const i=this.grid[n][t];if(i!==-1&&this.grid[n+1][t]===i&&this.grid[n+2][t]===i){let r=n+2;for(;r+1<Pt&&this.grid[r+1][t]===i;)r++;for(let a=n;a<=r;a++)e.add(`${a},${t}`)}}return Array.from(e).map(t=>{const[n,i]=t.split(",").map(Number);return{row:n,col:i,type:this.grid[n][i]}})}_scoreMatches(e){const t=e.length*50,n=1+(this.combo-1)*.5,i=Math.floor(t*n);this.score+=i,this.linesCleared+=e.length,this._updateScoreUI()}_updateScoreUI(){const e=document.getElementById("puzzle-score");e&&(e.textContent=this.score);const t=document.getElementById("puzzle-combo");t&&(t.textContent=this.combo>0?`x${this.combo}`:"-",t.style.color=this.combo>=3?"#e8b84b":"");const n=this._getCurrentTier(),i=document.getElementById("puzzle-bonus");i&&(i.textContent=`+${n.bonus}`,i.style.color=n.color);const r=document.getElementById("puzzle-bonus-fill");if(r){const a=Ji[Ji.length-1].min,o=Math.min(100,this.score/a*100);r.style.width=`${o}%`,r.style.background=n.color}}_getCurrentTier(){let e=Ji[0];for(const t of Ji)this.score>=t.min&&(e=t);return e}_applyGravity(){for(let e=0;e<wt;e++){let t=Pt-1;for(let n=Pt-1;n>=0;n--)this.grid[n][e]!==-1&&(n!==t&&(this.grid[t][e]=this.grid[n][e],this.grid[n][e]=-1),t--)}}_draw(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.fillStyle="rgba(30, 25, 18, 0.95)",e.fillRect(0,0,t,n),e.strokeStyle="rgba(160, 132, 92, 0.1)",e.lineWidth=1;for(let i=0;i<=Pt;i++)e.beginPath(),e.moveTo(0,i*rt),e.lineTo(t,i*rt),e.stroke();for(let i=0;i<=wt;i++)e.beginPath(),e.moveTo(i*rt,0),e.lineTo(i*rt,n),e.stroke();for(let i=0;i<Pt;i++)for(let r=0;r<wt;r++)if(this.grid[i][r]!==-1){const a=this.clearingCells.find(o=>o.row===i&&o.col===r);a?this._drawBlock(r,i,this.grid[i][r],a.timer):this._drawBlock(r,i,this.grid[i][r],1)}if(this.currentPiece&&this.clearingCells.length===0){const i=this.currentPiece;let r=i.row;for(;;){const l=this._getPiecePositions(i.col,r+1,i.rotation);let c=!0;for(const[d,f]of l)if(d>=Pt||f<0||f>=wt||d>=0&&this.grid[d][f]!==-1){c=!1;break}if(!c)break;r++}const a=this._getPiecePositions(i.col,r,i.rotation);for(let l=0;l<a.length;l++){const[c,d]=a[l];c>=0&&this._drawGhost(d,c,i.blocks[l])}const o=this._getPiecePositions(i.col,i.row,i.rotation);for(let l=0;l<o.length;l++){const[c,d]=o[l];c>=0&&this._drawBlock(d,c,i.blocks[l],1)}}this._mouseCol>=0&&this._mouseCol<wt&&(e.fillStyle="rgba(232, 184, 75, 0.04)",e.fillRect(this._mouseCol*rt,0,rt,n))}_drawBlock(e,t,n,i){const r=this.ctx,a=Zi[n],o=e*rt,l=t*rt,c=2;r.globalAlpha=i,r.fillStyle=a.color,r.beginPath(),r.roundRect(o+c,l+c,rt-c*2,rt-c*2,4),r.fill(),r.fillStyle=a.glow,r.beginPath(),r.roundRect(o+c,l+c,rt-c*2,(rt-c*2)*.4,[4,4,0,0]),r.fill(),r.font="18px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(a.emoji,o+rt/2,l+rt/2),r.globalAlpha=1}_drawGhost(e,t,n){const i=this.ctx,r=Zi[n],a=e*rt,o=t*rt,l=2;i.globalAlpha=.2,i.strokeStyle=r.color,i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.roundRect(a+l,o+l,rt-l*2,rt-l*2,4),i.stroke(),i.setLineDash([]),i.globalAlpha=1}_onKeyDown(e){if(!(!this.running||this.clearingCells.length>0))switch(e.key){case"ArrowLeft":e.preventDefault(),this._movePiece(-1,0);break;case"ArrowRight":e.preventDefault(),this._movePiece(1,0);break;case"ArrowDown":e.preventDefault(),this._movePiece(0,1),this.dropTimer=0;break;case"ArrowUp":e.preventDefault(),this._rotatePiece();break;case" ":e.preventDefault(),this._hardDrop();break}}_onMouseDown(e){if(!this.running||this.clearingCells.length>0)return;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=Math.floor(n/rt);if(e.button===0&&this.currentPiece){const r=i-this.currentPiece.col;r!==0?this._movePiece(r>0?1:-1,0):this._rotatePiece()}e.button===2&&(e.preventDefault(),this._hardDrop())}_onMouseMove(e){const t=this.canvas.getBoundingClientRect();this._mouseCol=Math.floor((e.clientX-t.left)/rt)}_onTouchStart(e){if(!this.running)return;e.preventDefault();const t=e.touches[0];this._touchStartX=t.clientX,this._touchStartY=t.clientY}_onTouchMove(e){if(!this.running||this.clearingCells.length>0)return;e.preventDefault();const t=e.touches[0],n=t.clientX-this._touchStartX,i=t.clientY-this._touchStartY;Math.abs(n)>30&&(this._movePiece(n>0?1:-1,0),this._touchStartX=t.clientX),i>40&&(this._movePiece(0,1),this._touchStartY=t.clientY,this.dropTimer=0),i<-40&&(this._rotatePiece(),this._touchStartY=t.clientY)}_endGame(e=!1){this.running=!1,cancelAnimationFrame(this._animFrame),document.removeEventListener("keydown",this._boundKeyDown),this.canvas.removeEventListener("mousedown",this._boundMouseDown),this.canvas.removeEventListener("mousemove",this._boundMouseMove),this.canvas.removeEventListener("touchstart",this._boundTouchStart),this.canvas.removeEventListener("touchmove",this._boundTouchMove);const t=e?Ji[0]:this._getCurrentTier(),n={bonus:t.bonus,score:e?0:this.score,rank:e?"スキップ":t.rank,rankColor:t.color,maxCombo:this.maxCombo,linesCleared:this.linesCleared,skipped:e};this._showResult(n)}_showResult(e){const t=this.overlay.querySelector(".puzzle-container");t.innerHTML=`
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
    `,document.getElementById("puzzle-done").addEventListener("click",()=>{this.overlay.classList.remove("puzzle-visible"),setTimeout(()=>{this.overlay.remove(),this.overlay=null},300),this.resolveCallback&&this.resolveCallback(e)})}}function gl(s){const e=Ka[s];return e?`trait-${e.color}`:""}class i_{constructor(e){this.inventory=e,this.elRecipeList=document.getElementById("recipe-list"),this.elDetails=document.getElementById("crafting-details"),this.selectedRecipeId=null,this.selectedMaterials={},this.expandedSlot=null}render(){this._renderRecipeList(),this._renderDetails()}_renderRecipeList(){const e=Object.entries(rn).filter(([,t])=>t.unlocked);this.elRecipeList.innerHTML=e.map(([t,n])=>{const i=this.selectedRecipeId===t,r=nn[n.targetId];return`<button class="btn ${i?"primary":""}" data-recipe-id="${t}">${r.name}</button>`}).join(""),this.elRecipeList.querySelectorAll("button").forEach(t=>{t.addEventListener("click",n=>{this.selectedRecipeId=n.currentTarget.getAttribute("data-recipe-id"),this.selectedMaterials={},this.expandedSlot=null,this.render()})})}_renderDetails(){if(!this.selectedRecipeId){this.elDetails.innerHTML=`
        <div class="crafting-empty-state">
          <div class="crafting-empty-icon">⚗️</div>
          <p>左のレシピ一覧から<br>作りたいアイテムを選択してください</p>
        </div>`;return}const e=rn[this.selectedRecipeId];if(!e||!e.unlocked){this.elDetails.innerHTML="<p>レシピを選択してください</p>",this.selectedRecipeId=null;return}const t=nn[e.targetId],n=[];e.materials.forEach((l,c)=>{n.push({matId:l,slotKey:`${l}_${c}`})});let i=`
      <div class="crafting-header">
        <h4>⚒️ ${t.name}</h4>
        <span class="crafting-header-type">${pn(t.type).icon} ${pn(t.type).label}</span>
      </div>
      <div class="crafting-section-label">素材を選択</div>
      <div class="crafting-slots">
    `;const r=[],a=new Set;let o=!0;for(const l of n){const d=this.inventory.getItemsByBlueprint(l.matId).sort((u,S)=>S.quality-u.quality).filter(u=>!a.has(u.uid)||this.selectedMaterials[l.slotKey]===u.uid),f=nn[l.matId].name,h=d.length>0;let p=this.selectedMaterials[l.slotKey];if(!d.find(u=>u.uid===p)&&h&&(d.length===1?(p=d[0].uid,this.selectedMaterials[l.slotKey]=p):p=null),p){a.add(p);const u=d.find(S=>S.uid===p);u&&r.push(u)}const v=this.expandedSlot===l.slotKey,m=!!p&&!!d.find(u=>u.uid===p);if(m||(o=!1),!h){i+=`
          <div class="craft-slot craft-slot-empty">
            <div class="craft-slot-label">${f}</div>
            <div class="craft-slot-placeholder craft-slot-missing">
              <span class="craft-slot-missing-icon">✖</span>
              <span>素材不足</span>
            </div>
          </div>
        `,o=!1;continue}if(m){const u=d.find(C=>C.uid===p),S=Xn(u.quality),E=pn(u.type),M=u.traits.map(C=>`<span class="trait-badge ${gl(C)}">${C}</span>`).join("");i+=`
          <div class="craft-slot craft-slot-filled ${S.css}" data-slot="${l.slotKey}">
            <div class="craft-slot-label">${f} <span class="craft-slot-change">変更 ▾</span></div>
            <div class="craft-slot-card">
              <div class="craft-slot-card-icon">${E.emoji}</div>
              <div class="craft-slot-card-info">
                <div class="craft-slot-card-name">${u.name}</div>
                <div class="craft-slot-card-quality">${S.icon} Q: ${u.quality} <span class="craft-slot-tier">${S.name}</span></div>
                <div class="craft-slot-card-traits">${M||'<span class="text-dim">特性なし</span>'}</div>
              </div>
            </div>
          </div>
        `}else i+=`
          <div class="craft-slot craft-slot-unfilled" data-slot="${l.slotKey}">
            <div class="craft-slot-label">${f}</div>
            <div class="craft-slot-placeholder">
              <span class="craft-slot-placeholder-icon">＋</span>
              <span>クリックで素材を選択 (${d.length}個)</span>
            </div>
          </div>
        `;if(v){i+='<div class="craft-slot-candidates">';for(const u of d){const S=Xn(u.quality),E=pn(u.type),M=u.uid===p,C=u.traits.map(A=>`<span class="trait-badge ${gl(A)}">${A}</span>`).join("");i+=`
            <div class="craft-candidate-card ${S.css} ${M?"craft-candidate-selected":""}" data-slot="${l.slotKey}" data-uid="${u.uid}">
              <div class="craft-candidate-icon">${E.emoji}</div>
              <div class="craft-candidate-body">
                <div class="craft-candidate-header">
                  <span class="craft-candidate-name">${u.name}</span>
                  <span class="craft-candidate-quality">${S.icon} Q: ${u.quality}</span>
                </div>
                <div class="item-quality-bar"><div class="item-quality-fill" style="width:${u.quality}%"></div></div>
                <div class="craft-candidate-traits">${C||'<span class="text-dim">特性なし</span>'}</div>
              </div>
              ${M?'<div class="craft-candidate-check">✓</div>':""}
            </div>
          `}i+="</div>"}}if(i+="</div>",o&&r.length===n.length){const l=Math.floor(r.reduce((_,v)=>_+v.quality,0)/r.length),c=new Set;r.forEach(_=>_.traits.forEach(v=>c.add(v)));const d=Array.from(c).slice(0,qe.maxTraitSlots),f=Math.floor(t.baseValue*(1+l/100)),h=Xn(l),p=pn(t.type);i+=`
        <div class="crafting-preview">
          <div class="crafting-section-label">完成予測</div>
          <div class="crafting-preview-card ${h.css}">
            <div class="craft-preview-icon">${p.emoji}</div>
            <div class="craft-preview-info">
              <div class="craft-preview-name">${t.name}</div>
              <div class="craft-preview-quality">${h.icon} Q ≈ ${l} <span class="craft-slot-tier">${h.name}</span></div>
              <div class="item-quality-bar"><div class="item-quality-fill" style="width:${l}%"></div></div>
              <div class="craft-preview-traits">
                ${d.map(_=>{const v=Ka[_];return`<span class="trait-badge ${v?`trait-${v.color}`:""}">${_}</span>`}).join("")||'<span class="text-dim">特性なし</span>'}
              </div>
              <div class="craft-preview-value">💰 推定売値: ${f}G</div>
            </div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `}else if(!o&&n.length>0){const l=r.length;i+=`
        <div class="crafting-progress-hint">
          <span>素材: ${l} / ${n.length} 選択済み</span>
        </div>
      `}this.elDetails.innerHTML=i,this._bindDetailsEvents(r,t)}_bindDetailsEvents(e,t){this.elDetails.querySelectorAll(".craft-slot-filled, .craft-slot-unfilled").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.slot;this.expandedSlot=this.expandedSlot===a?null:a,this._renderDetails()})}),this.elDetails.querySelectorAll(".craft-candidate-card").forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation();const o=r.dataset.slot,l=r.dataset.uid;this.selectedMaterials[o]=l,this.expandedSlot=null,this._renderDetails()})});const n=document.getElementById("btn-do-craft");n&&n.addEventListener("click",()=>{this._executeCrafting(this.selectedRecipeId,e)});const i=document.getElementById("btn-puzzle-craft");i&&i.addEventListener("click",()=>{this._executePuzzleCrafting(this.selectedRecipeId,e,t.name)})}async _executeCrafting(e,t,n=0){const i=new Set;t.forEach(a=>a.traits.forEach(o=>i.add(o)));const r=Array.from(i).slice(0,qe.maxTraitSlots);this.elDetails.innerHTML=`
      <div class="crafting-loading">
        <div class="crafting-loading-icon">⚗️</div>
        <div class="crafting-loading-text">調合中...</div>
        <div class="crafting-loading-dots"><span></span><span></span><span></span></div>
      </div>
    `,await new Promise(a=>setTimeout(a,600));try{const a=Nm(e,t,r,n);t.forEach(l=>this.inventory.removeItem(l.uid)),this.inventory.addItem(a),H.emit("inventory:changed"),H.emit("item:crafted",{item:a}),this.selectedMaterials={},this.expandedSlot=null,this.render();const o=document.createElement("div");o.className="craft-flash",document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("fade-out")),setTimeout(()=>o.remove(),550),this._showCraftResult(a)}catch(a){console.error("[CraftingTab]",a)}}_showCraftResult(e){const t=Xn(e.quality);pn(e.type);const n=nn[e.blueprintId],i=e.value||Math.floor(n.baseValue*(1+e.quality/100)),r=document.createElement("div");r.className="craft-result-overlay",r.innerHTML=`
      <div class="craft-result-modal">
        <div class="craft-result-sparkle">✨</div>
        <h3 class="craft-result-title">調合成功！</h3>
        <div class="craft-result-card">
          ${tc(e)}
        </div>
        <div class="craft-result-stats">
          <span class="craft-result-quality ${t.css}">品質: ${t.icon} ${e.quality}</span>
          <span class="craft-result-value">💰 ${i.toLocaleString("ja-JP")}G</span>
        </div>
        <button class="btn primary craft-result-close">OK</button>
      </div>
    `,document.body.appendChild(r);const a=()=>{r.classList.add("craft-result-fade-out"),setTimeout(()=>r.remove(),300)};r.querySelector(".craft-result-close").addEventListener("click",a),r.addEventListener("click",o=>{o.target===r&&a()})}async _executePuzzleCrafting(e,t,n){H.emit("game:pause");const r=await new n_().start(n);H.emit("game:resume"),this._executeCrafting(e,t,r.bonus)}}class s_{constructor(e,t,n){this.inventory=e,this.shop=t,this.customers=n,this.el=document.querySelector("#tab-shop"),this.shopFilter="craftable"}render(){let e="<h3>🏪 お店の管理</h3>";const t=this.customers?this.customers.getActiveCustomers():[];t.length>0?(e+='<div class="customer-section">',e+="<h4>🔔 来店中のお客さん</h4>",e+='<div class="customer-list">',t.forEach(a=>{const o=Math.max(0,a.timer/a.maxTimer*100);e+=`
          <div class="customer-card">
            <div class="customer-header">
              <span class="customer-name">${a.icon} ${a.name}</span>
              <span class="customer-timer" data-customer-id="${a.id}">⏳ 品定め中...</span>
            </div>
            <div class="customer-dialogue">「${a.dialogue}」</div>
            <div class="customer-demand">欲しいもの: ${a.demandTypes.map(l=>({equipment:"⚔️ 武具",consumable:"🧪 消耗品",accessory:"💎 アクセサリ",material:"🪨 素材"})[l]||l).join("・")}</div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill customer-patience-bar" data-customer-bar="${a.id}" style="width:${o}%"></div>
            </div>
          </div>
        `}),e+="</div></div>"):e+='<div class="empty-state"><div class="empty-state-icon">🏪</div><div class="empty-state-text">お客さんはまだ来ていません</div><div class="empty-state-hint">時間が経つと来店します</div></div>',e+=`<h4>📋 陳列中 (${this.shop.displayedItems.length} / ${this.shop.maxSlots})</h4>`,this.shop.displayedItems.length>0?(e+='<div class="item-grid shop-displayed-grid">',e+=this.shop.displayedItems.map(a=>Jm(a)).join(""),e+="</div>"):e+='<div class="empty-state"><div class="empty-state-icon">🗄️</div><div class="empty-state-text">陳列棚は空です</div><div class="empty-state-hint">下の倉庫一覧からアイテムを陳列しましょう</div></div>',this.shop.displayedItems.length>0&&(e+='<p class="shop-hint text-dim">※ 陳列中のアイテムをクリックすると取り下げます</p>');const n=this.inventory.getItems(),i=n.filter(a=>a.type!=="material"),r=n.filter(a=>a.type==="material");if(e+="<h4>📦 倉庫から陳列する</h4>",n.length>0){e+='<div class="shop-inv-filters">',e+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="craftable"?"active":""}" data-shop-filter="craftable">⚔️ クラフト品 (${i.length})</button>`,e+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="material"?"active":""}" data-shop-filter="material">🪨 素材 (${r.length})</button>`,e+=`<button class="btn btn-sm shop-filter-btn ${this.shopFilter==="all"?"active":""}" data-shop-filter="all">すべて (${n.length})</button>`,e+="</div>";let a;this.shopFilter==="craftable"?a=i:this.shopFilter==="material"?a=r:a=n,a=[...a].sort((o,l)=>l.quality-o.quality),a.length>0?(e+='<div class="item-grid">',e+=a.map(o=>Zm(o)).join(""),e+="</div>"):e+='<p class="shop-empty-message">このカテゴリのアイテムはありません。</p>'}else e+='<p class="shop-empty-message">倉庫にアイテムがありません。冒険者を派遣して素材を集めましょう！</p>';this.el.innerHTML=e,this.el.querySelectorAll(".shop-displayable-card").forEach(a=>{a.addEventListener("click",()=>{const o=a.getAttribute("data-uid");this.shop.displayItem(o),H.emit("inventory:changed"),H.emit("item:displayed"),this.render()})}),this.el.querySelectorAll(".shop-filter-btn").forEach(a=>{a.addEventListener("click",o=>{this.shopFilter=o.currentTarget.dataset.shopFilter,this.render()})}),this.el.querySelectorAll(".displayed-glow").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{const o=a.dataset.uid;o&&(this.shop.removeDisplayedItem(o),H.emit("inventory:changed"),H.emit("item:removed"),this.render())})})}updateCustomerTimers(){(this.customers?this.customers.getActiveCustomers():[]).forEach(t=>{const n=this.el.querySelector(`[data-customer-id="${t.id}"]`);n&&t.timer<5&&(n.textContent="⏳ もうすぐ帰る...");const i=this.el.querySelector(`[data-customer-bar="${t.id}"]`);i&&(i.style.width=`${Math.max(0,t.timer/t.maxTimer*100)}%`)})}}class r_{constructor(e,t){this.adventurers=e,this.inventory=t,this.el=document.querySelector("#tab-dispatch")}render(){const e=this.adventurers.getUnlockedAreas(),t=this.adventurers.getAdventurers();let n="<h3>🗺️ 冒険者の探索</h3>";n+='<p class="text-dim dispatch-description">冒険者は割り当てられたエリアを自動で繰り返し探索します。<br>レベルが上がると探索が速くなります。</p>',n+='<div class="dispatch-list">',t.forEach(i=>{const r=i.status==="exploring",a=r&&i.maxTimer>0?Math.max(0,(1-i.timer/i.maxTimer)*100):0,o=Lt[i.assignedArea];if(n+=`
        <div class="dispatch-card">
          <div class="dispatch-card-header">
            <div>
              <h4>${i.icon} ${i.name}</h4>
              <span class="adv-level">Lv.${i.level}</span>
            </div>
            <span class="timer-display ${r?"timer-exploring":""}" data-adv-id="${i.id}">
              ${r?"🚶 探索中...":"☕ 準備中..."}
            </span>
          </div>
          <div class="adv-exp-bar">
            <div class="adv-exp-fill" style="width:${this._expPct(i)}%"></div>
            <span class="adv-exp-text">EXP: ${i.exp} / ${es[i.level]||"—"}</span>
          </div>
      `,n+=`
        <div class="progress-bar-container">
          <div class="progress-bar-fill" data-adv-progress="${i.id}" style="width:${a}%"></div>
        </div>
      `,n+='<div class="assigned-area-info">',n+='<span class="assigned-label">探索先:</span>',n+=`<span class="assigned-area-name">${o?`${o.icon} ${o.name}`:"未設定"}</span>`,o){const c=this._calcTimeText(i,o);n+=`<span class="explore-time-hint">（${c}）</span>`}n+="</div>",n+='<div class="area-select-row">',e.forEach(c=>{const d=i.assignedArea===c.id,h=(c.dropTable||[]).sort((_,v)=>v.weight-_.weight).slice(0,5).map(_=>{const v=nn[_.blueprintId];return v?v.name:_.blueprintId}).join("、"),p=`${c.description||""}
📦 主な素材: ${h}
⏱ 基本時間: ${c.baseTime}秒
💎 品質: ${c.qualityMin||"?"}〜${c.qualityMax||"?"}`;n+=`
          <button class="btn area-btn ${d?"area-btn-selected":""}"
                  data-adv-id="${i.id}" data-area-id="${c.id}"
                  title="${p}">
            <span class="area-icon">${c.icon}</span>
            <span class="area-name">${c.name}</span>
            <span class="area-quality-hint">Q${c.qualityMin||"?"}-${c.qualityMax||"?"}</span>
          </button>
        `}),n+="</div>";const l=i.equipment.weapon;n+=`<button class="btn btn-sm btn-equip" data-adv-id="${i.id}">${l?`⚔️ ${l.name} (Q:${l.quality})`:"🔧 装備変更"}</button>`,n+="</div>"}),n+="</div>",this.el.innerHTML=n,this.el.querySelectorAll(".area-btn").forEach(i=>{i.addEventListener("click",r=>{const a=r.currentTarget.dataset.advId,o=r.currentTarget.dataset.areaId;this.adventurers.assignArea(a,o),this.render()})}),this.el.querySelectorAll(".btn-equip").forEach(i=>{i.addEventListener("click",r=>{const a=r.currentTarget.dataset.advId;this._showEquipmentPanel(a)})})}_expPct(e){const t=es[e.level];if(!t)return 100;const n=es[e.level-1]||0;return Math.min(100,(e.exp-n)/(t-n)*100)}_calcTimeText(e,t){const n=1-(e.level-1)*Aa.timeReduction,i=Math.max(8,Math.ceil(t.baseTime*(e.exploreTimeMultiplier||1)*n));return i<=12?"とても速い":i<=20?"速い":i<=35?"ふつう":i<=55?"やや遅い":"ゆっくり"}_showEquipmentPanel(e){var a;const t=this.adventurers.getAdventurers().find(o=>o.id===e);if(!t)return;const n=this.inventory.getItems().filter(o=>o.type==="equipment");let i=`<div class="equipment-panel"><h4>装備選択 — ${t.name}</h4>`;t.equipment.weapon&&(i+=`<button class="btn btn-sm btn-unequip" data-adv-id="${e}">❌ ${t.equipment.weapon.name}を外す</button>`),n.length===0?i+='<p class="text-dim">装備可能なアイテムがありません。</p>':n.forEach(o=>{i+=`<button class="btn btn-sm btn-select-weapon" data-adv-id="${e}" data-uid="${o.uid}">
          ⚔️ ${o.name} (Q:${o.quality})
        </button>`}),i+='<button class="btn btn-sm btn-close-equip">閉じる</button></div>';const r=document.createElement("div");r.className="equipment-overlay",r.innerHTML=i,this.el.appendChild(r),r.querySelectorAll(".btn-select-weapon").forEach(o=>{o.addEventListener("click",l=>{this.adventurers.equipWeapon(l.currentTarget.dataset.advId,l.currentTarget.dataset.uid),r.remove(),this.render()})}),r.querySelectorAll(".btn-unequip").forEach(o=>{o.addEventListener("click",l=>{this.adventurers.unequipWeapon(l.currentTarget.dataset.advId),r.remove(),this.render()})}),(a=r.querySelector(".btn-close-equip"))==null||a.addEventListener("click",()=>{r.remove()})}updateTimers(){const e=this.adventurers.getAdventurers();this.el.querySelectorAll(".timer-display").forEach(t=>{const n=t.getAttribute("data-adv-id"),i=e.find(r=>r.id===n);i&&(i.status==="exploring"&&i.timer<3?t.textContent="🏠 もうすぐ帰還...":t.textContent=i.status==="idle"?"☕ 準備中...":"🚶 探索中...")}),this.el.querySelectorAll(".progress-bar-fill").forEach(t=>{const n=t.getAttribute("data-adv-progress"),i=e.find(r=>r.id===n);if(i&&i.status==="exploring"&&i.maxTimer>0){const r=Math.max(0,(1-i.timer/i.maxTimer)*100);t.style.width=`${r}%`}})}}class a_{constructor(e,t){this.dayCycle=e,this.reputation=t}render(){const e=document.getElementById("tab-stats");if(!e)return;const t=Ln,n=t.getAverageDailySales(7),i=t.totalCustomersServed+t.totalCustomersLost>0?Math.round(t.totalCustomersServed/(t.totalCustomersServed+t.totalCustomersLost)*100):0;e.innerHTML=`
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
          <canvas id="stats-chart" width="500" height="160"></canvas>
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
    `,this._drawChart(t.dailySales)}_renderCategoryBars(e){const t=[{key:"equipment",name:"装備",icon:"⚔️",color:"#e8b84b"},{key:"consumable",name:"消耗品",icon:"🧪",color:"#7bc96f"},{key:"accessory",name:"アクセ",icon:"💎",color:"#6bb5e8"},{key:"material",name:"素材",icon:"🪨",color:"#a08060"}],n=Object.values(e.salesByType).reduce((i,r)=>i+r,0)||1;return t.map(i=>{const r=e.salesByType[i.key]||0,a=Math.round(r/n*100);return`
        <div class="stats-category-row">
          <span class="stats-cat-label">${i.icon} ${i.name}</span>
          <div class="stats-cat-bar">
            <div class="stats-cat-fill" style="width:${a}%; background:${i.color}"></div>
          </div>
          <span class="stats-cat-value">${r}G (${a}%)</span>
        </div>
      `}).join("")}_renderAchievements(e){return[{name:"初めての販売",check:e.totalItemsSold>=1,icon:"🎯"},{name:"10個販売",check:e.totalItemsSold>=10,icon:"📦"},{name:"50個販売",check:e.totalItemsSold>=50,icon:"🏬"},{name:"初めてのパズル",check:e.totalPuzzlesPlayed>=1,icon:"🧩"},{name:"パズルマスター",check:e.bestPuzzleScore>=500,icon:"🌟"},{name:"接客率80%以上",check:e.totalCustomersServed/Math.max(1,e.totalCustomersServed+e.totalCustomersLost)>=.8,icon:"💫"},{name:"累計売上1000G",check:e.totalGoldEarned>=1e3,icon:"💰"},{name:"累計売上5000G",check:e.totalGoldEarned>=5e3,icon:"👑"}].map(n=>`
      <div class="stats-achievement ${n.check?"achieved":""}">
        <span class="stats-ach-icon">${n.icon}</span>
        <span class="stats-ach-name">${n.name}</span>
        ${n.check?'<span class="stats-ach-done">✓</span>':""}
      </div>
    `).join("")}_drawChart(e){const t=document.getElementById("stats-chart");if(!t)return;const n=t.getContext("2d"),i=t.width,r=t.height,a={top:10,right:10,bottom:25,left:40},o=i-a.left-a.right,l=r-a.top-a.bottom;if(n.clearRect(0,0,i,r),e.length===0){n.fillStyle="rgba(200,180,140,0.3)",n.font="13px sans-serif",n.textAlign="center",n.fillText("データなし — 1日目が完了すると表示されます",i/2,r/2);return}const c=Math.max(...e,1),d=Math.min(30,o/e.length-2),f=(o-d*e.length)/(e.length+1);n.strokeStyle="rgba(200,180,140,0.15)",n.lineWidth=1;for(let p=0;p<=4;p++){const _=a.top+l*(1-p/4);n.beginPath(),n.moveTo(a.left,_),n.lineTo(i-a.right,_),n.stroke(),n.fillStyle="rgba(200,180,140,0.4)",n.font="9px sans-serif",n.textAlign="right",n.fillText(`${Math.round(c*p/4)}`,a.left-4,_+3)}const h=n.createLinearGradient(0,a.top,0,r-a.bottom);h.addColorStop(0,"#e8b84b"),h.addColorStop(1,"#a07830"),e.forEach((p,_)=>{const v=a.left+f+_*(d+f),m=p/c*l,u=a.top+l-m;n.fillStyle=h,n.beginPath(),n.roundRect(v,u,d,m,[3,3,0,0]),n.fill(),n.fillStyle="rgba(200,180,140,0.5)",n.font="8px sans-serif",n.textAlign="center",n.fillText(`${_+1}日`,v+d/2,r-5)})}}const hn={rank2:[{id:"q2_sell_3",name:"初めての商売",description:"商品を3個売る",conditionType:"sell_count",target:3,icon:"💰"},{id:"q2_craft_3",name:"調合入門",description:"アイテムを3個調合する",conditionType:"craft_count",target:3,icon:"🔨"},{id:"q2_explore_2",name:"冒険の始まり",description:"探索を2回完了する",conditionType:"explore_count",target:2,icon:"🗺️"}],rank3:[{id:"q3_quality_50",name:"品質へのこだわり",description:"品質50以上のアイテムを調合する",conditionType:"craft_quality",target:50,icon:"⭐"},{id:"q3_daily_100",name:"一日百金",description:"1日の売上100Gを達成する",conditionType:"daily_sales",target:100,icon:"📈"},{id:"q3_cave_3",name:"洞窟探検家",description:"洞窟を3回探索する",conditionType:"explore_area",target:3,targetArea:"cave",icon:"⛏️"}],rank4:[{id:"q4_serve_noble",name:"貴族のお気に入り",description:"貴族に商品を売る",conditionType:"serve_customer",target:1,targetCustomer:"noble",icon:"👑"},{id:"q4_trait_5",name:"特性マスター",description:"特性付きアイテムを5個調合する",conditionType:"craft_with_trait",target:5,icon:"✨"},{id:"q4_sell_equip_8",name:"武器商人",description:"装備品を8個売る",conditionType:"sell_type",target:8,targetType:"equipment",icon:"⚔️"}],rank5:[{id:"q5_quality_70",name:"匠の技",description:"品質70以上のアイテムを調合する",conditionType:"craft_quality",target:70,icon:"🏅"},{id:"q5_sell_10k",name:"一万金の壁",description:"累計売上10,000Gを達成する",conditionType:"total_sales",target:1e4,icon:"💎"},{id:"q5_explore_forest",name:"森の守護者",description:"妖精の森を5回探索する",conditionType:"explore_area",target:5,targetArea:"forest",icon:"🌲"}],rank6:[{id:"q6_customers_20",name:"人気店の証",description:"お客様を20人接客する",conditionType:"total_customers",target:20,icon:"🤝"},{id:"q6_craft_30",name:"熟練の調合師",description:"アイテムを30個調合する",conditionType:"craft_count",target:30,icon:"🔬"},{id:"q6_daily_300",name:"三百金の日",description:"1日の売上300Gを達成する",conditionType:"daily_sales",target:300,icon:"📊"},{id:"q6_sell_consumable",name:"薬師の道",description:"消耗品を12個売る",conditionType:"sell_type",target:12,targetType:"consumable",icon:"🧪"}],rank7:[{id:"q7_quality_85",name:"至高の品質",description:"品質85以上のアイテムを調合する",conditionType:"craft_quality",target:85,icon:"👑"},{id:"q7_explore_dragon",name:"竜狩り",description:"竜の巣を3回探索する",conditionType:"explore_area",target:3,targetArea:"dragon_nest",icon:"🐉"},{id:"q7_sell_acc_5",name:"宝飾品鑑定士",description:"アクセサリーを5個売る",conditionType:"sell_type",target:5,targetType:"accessory",icon:"💍"},{id:"q7_upgrades_10",name:"設備投資家",description:"アップグレードを10個購入する",conditionType:"upgrade_count",target:10,icon:"🏗️"}],rank8:[{id:"q8_quality_95",name:"伝説の調合",description:"品質95以上のアイテムを調合する",conditionType:"craft_quality",target:95,icon:"🌟"},{id:"q8_sell_50k",name:"五万金の王",description:"累計売上50,000Gを達成する",conditionType:"total_sales",target:5e4,icon:"👸"},{id:"q8_explore_sky",name:"天空の覇者",description:"天空の塔を3回探索する",conditionType:"explore_area",target:3,targetArea:"sky_tower",icon:"☁️"},{id:"q8_serve_50",name:"百客万来",description:"お客様を50人接客する",conditionType:"total_customers",target:50,icon:"🏆"},{id:"q8_craft_trait_3",name:"究極の付呪",description:"特性3つ付きのアイテムを調合する",conditionType:"craft_max_traits",target:3,icon:"🔮"}]};class o_{constructor(e,t,n,i){this.inventory=e,this.shop=t,this.dayCycle=n,this.quest=i}render(){const e=document.getElementById("section-upgrade");if(!e)return;const t=this.dayCycle.currentRankIndex+1,n=this.dayCycle.currentRankIndex+1,i=n<qe.ranks.length?qe.ranks[n]:null;let r="";if(i&&this.quest){const c=this.quest.getQuestsForRank(i.rank),d=this.quest.getRequiredCount(i.rank),f=c.filter(h=>h.complete).length;c.length>0&&(r=`
          <div class="upgrade-quest-panel">
            <h3 class="upgrade-section-title">🗺️ ランク${i.rank}昇格クエスト <span class="quest-progress-badge">${f}/${d} 達成</span></h3>
            <div class="quest-list">
              ${c.map(h=>`
                <div class="quest-item ${h.complete?"quest-complete":""}">
                  <span class="quest-icon">${h.icon}</span>
                  <div class="quest-info">
                    <span class="quest-name">${h.name}</span>
                    <span class="quest-desc">${h.description}</span>
                  </div>
                  <div class="quest-counter">
                    <span class="quest-count">${Math.min(h.current,h.target)}/${h.target}</span>
                    ${h.complete?'<span class="quest-check">✅</span>':""}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `)}else i||(r='<div class="upgrade-quest-panel"><p class="quest-max">🏆 最高ランク達成！</p></div>');const a=Object.entries(Om).sort((c,d)=>c[1].order-d[1].order);let o="";for(const[c,d]of a){const f=Ql.filter(h=>h.category===c);f.length!==0&&(o+=`
        <div class="upgrade-category">
          <h3 class="upgrade-section-title">${d.name}</h3>
          <div class="upgrade-grid">
            ${f.map(h=>{const p=this.shop.isPurchased(h.id),_=this.inventory.gold>=h.cost,m=!(t>=h.requiredRank);let u="",S="";return p?(u="upgrade-purchased",S="購入済み"):m?(u="upgrade-locked",S=`Rank ${h.requiredRank} 必要`):_?(u="upgrade-available",S=`${h.cost}G`):(u="upgrade-expensive",S=`${h.cost}G`),`
                <div class="upgrade-card ${u}" data-id="${h.id}">
                  <div class="upgrade-card-icon">${h.icon}</div>
                  <div class="upgrade-card-body">
                    <span class="upgrade-card-name">${h.name}</span>
                    <span class="upgrade-card-desc">${h.description}</span>
                  </div>
                  <div class="upgrade-card-price">
                    ${p?"✅":m?"🔒":S}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `)}const l=`
      <div class="upgrade-capacity-bar">
        <span>📦 倉庫: ${this.inventory.items.length} / ${this.inventory.maxCapacity}</span>
        <span>🏪 販売棚: ${this.shop.displayedItems.length} / ${this.shop.maxSlots}</span>
      </div>
    `;e.innerHTML=l+r+o,e.querySelectorAll(".upgrade-available").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.id;this.shop.purchaseUpgrade(d,t)&&(this.render(),H.emit("inventory:changed"))})})}}class Qa{constructor(){this.el=null,this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this._create(),document.body.appendChild(this.el),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.el.classList.add("settings-visible")})}))}close(){this.isOpen&&(this.isOpen=!1,this.el.classList.remove("settings-visible"),setTimeout(()=>{var e;(e=this.el)==null||e.remove(),this.el=null},300))}_create(){this.el=document.createElement("div"),this.el.className="settings-overlay",this.el.innerHTML=`
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
                  min="0" max="100" value="${Math.round(yt.masterVolume*100)}" />
                <span class="settings-slider-val" id="val-master">${Math.round(yt.masterVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-bgm">BGM</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-bgm" class="settings-slider"
                  min="0" max="100" value="${Math.round(yt.bgmVolume*100)}" />
                <span class="settings-slider-val" id="val-bgm">${Math.round(yt.bgmVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-se">効果音</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-se" class="settings-slider"
                  min="0" max="100" value="${Math.round(yt.seVolume*100)}" />
                <span class="settings-slider-val" id="val-se">${Math.round(yt.seVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label">ミュート</label>
              <button class="settings-toggle-btn ${yt.muted?"active":""}" id="btn-mute">
                ${yt.muted?"ON":"OFF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.el.querySelector("#settings-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",e=>{e.target===this.el&&this.close()}),this._bindSlider("vol-master","val-master",e=>yt.setMasterVolume(e/100)),this._bindSlider("vol-bgm","val-bgm",e=>yt.setBgmVolume(e/100)),this._bindSlider("vol-se","val-se",e=>yt.setSeVolume(e/100)),this.el.querySelector("#btn-mute").addEventListener("click",e=>{const t=yt.toggleMute();e.target.textContent=t?"ON":"OFF",e.target.classList.toggle("active",t)})}_bindSlider(e,t,n){const i=this.el.querySelector(`#${e}`),r=this.el.querySelector(`#${t}`);i.addEventListener("input",()=>{const a=parseInt(i.value);r.textContent=`${a}%`,n(a)})}static createGearButton(){const e=document.createElement("button");return e.className="settings-gear-btn",e.title="設定",e.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>`,e.addEventListener("click",()=>l_.toggle()),e}}const l_=new Qa,vi=.25,yi=.6,xi=.8,c_=15;class d_{constructor(e,t,n,i,r,a,o,l){this.inventory=e,this.shop=t,this.customer=i,this.dayCycle=r,this.events=a,this.reputation=o,this.quest=l,this.activeTab="tab-inventory",this._displayedGold=e.gold,this._targetGold=e.gold,this._goldAnimTimer=0,this.elGold=document.getElementById("gold-value"),this.elDay=document.getElementById("day-value"),this.elRent=document.getElementById("rent-value"),this.elRank=document.getElementById("rank-value"),this.elDayProgress=document.getElementById("day-progress-fill"),this.elEventBanner=document.getElementById("event-banner"),this.elTabs=document.querySelectorAll(".tab-btn"),this.elSections=document.querySelectorAll(".content-section"),this._createRankProgressBar(),this.tabs={"tab-inventory":new Qm(e),"tab-crafting":new i_(e),"tab-shop":new s_(e,t,i),"tab-dispatch":new r_(n,e),"tab-stats":new a_(r,o),"tab-upgrade":new o_(e,t,r,l)},this._unsubscribers=[H.on("item:sold",()=>this.updateAll()),H.on("adventurer:return",()=>this.updateAll()),H.on("inventory:changed",()=>this.updateAll()),H.on("gold:changed",()=>this._onGoldChanged()),H.on("day:newDay",()=>this.updateAll()),H.on("rank:up",()=>this.updateAll()),H.on("recipe:unlocked",()=>{this.activeTab==="tab-crafting"&&this.updateAll()}),H.on("customer:arrived",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),H.on("customer:left",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),H.on("customer:bought",()=>{this._updateCustomerBadge(),this.updateAll()}),H.on("reputation:changed",()=>this._updateStatusBar()),H.on("reputation:levelUp",c=>{H.emit("toast",{message:`⭐ 評判UP！「${c.name}」になりました！`,type:"success"})}),H.on("upgrade:purchased",()=>this.updateAll()),H.on("save:completed",()=>this._showSaveIndicator()),H.on("item:sold",c=>this._showSaleFloatingText(c)),H.on("rank:up",c=>this._showRankUpOverlay(c)),H.on("item:crafted",c=>this._onItemCrafted(c))],this._init()}update(e){if(this._updateDayProgressBar(),this._animateGold(e),this._updateTimeOfDayUI(),this.activeTab==="tab-dispatch"){const t=this.tabs["tab-dispatch"];t&&t.updateTimers&&t.updateTimers()}if(this.activeTab==="tab-shop"){const t=this.tabs["tab-shop"];t&&t.updateCustomerTimers&&t.updateCustomerTimers()}}updateAll(){this._updateStatusBar(),this._updateCustomerBadge();const e=this.tabs[this.activeTab];e&&e.render()}_init(){this.elTabs.forEach(t=>{t.addEventListener("click",n=>{const i=n.currentTarget.getAttribute("data-target");this._switchTab(i)})});const e=document.getElementById("skip-day-btn");e&&e.addEventListener("click",()=>{this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()}),this.updateAll(),this._addSettingsButton(),this._initKeyboardShortcuts(),this._initAmbientParticles()}_initAmbientParticles(){const e=document.createElement("div");e.className="ambient-particles",document.body.insertBefore(e,document.body.firstChild);for(let t=0;t<c_;t++){const n=document.createElement("div");n.className="ambient-particle",n.style.left=`${Math.random()*100}%`,n.style.animationDuration=`${12+Math.random()*18}s`,n.style.animationDelay=`${Math.random()*15}s`,n.style.width=`${2+Math.random()*3}px`,n.style.height=n.style.width,e.appendChild(n)}}_addSettingsButton(){const e=document.querySelector(".status-bar");if(!e)return;const t=Qa.createGearButton();t.classList.add("game-gear-btn"),e.appendChild(t)}_switchTab(e){this.activeTab=e,this.elTabs.forEach(t=>{t.classList.toggle("active",t.getAttribute("data-target")===e)}),this.elSections.forEach(t=>{t.classList.toggle("active",t.id===e)}),this.updateAll(),H.emit("tab:switched",{tabId:e})}_onGoldChanged(){const e=this.inventory.gold,t=e-this._targetGold;if(this._targetGold=e,this._goldAnimTimer=0,this.elGold){const n=this.elGold.closest(".gold-display");n&&(t>0?(n.classList.add("gold-flash-up"),setTimeout(()=>n.classList.remove("gold-flash-up"),600)):t<0&&(n.classList.add("gold-flash-down"),setTimeout(()=>n.classList.remove("gold-flash-down"),600)))}}_animateGold(e){if(Math.abs(this._displayedGold-this._targetGold)<1)this._displayedGold=this._targetGold;else{const t=Math.max(1,Math.abs(this._targetGold-this._displayedGold)*5);this._displayedGold<this._targetGold?this._displayedGold=Math.min(this._targetGold,this._displayedGold+t*e):this._displayedGold=Math.max(this._targetGold,this._displayedGold-t*e)}this.elGold&&(this.elGold.textContent=this._formatGold(Math.round(this._displayedGold)))}_formatGold(e){return e.toLocaleString("ja-JP")}_updateStatusBar(){if(this._targetGold=this.inventory.gold,this.dayCycle&&(this.elDay&&(this.elDay.textContent=`${this.dayCycle.day}日目`),this.elRent&&(this.elRent.textContent=`${this._formatGold(this.dayCycle.currentRent)}G`),this.elRank&&(this.elRank.textContent=this.dayCycle.currentRank.name),this._updateRankProgress()),this.reputation){const e=document.getElementById("reputation-value");if(e){const t=this.reputation.currentLevel;e.textContent=`${t.icon} ${t.name}`}}if(this.events&&this.elEventBanner){const e=this.events.getActiveEffects();e.length>0?(this.elEventBanner.innerHTML=e.map(t=>`<span class="event-badge">${t.icon} ${t.name}</span>`).join(""),this.elEventBanner.style.display="flex"):this.elEventBanner.style.display="none"}}_createRankProgressBar(){const e=document.querySelector(".status-item:has(#rank-value)");if(!e)return;const t=document.createElement("div");t.className="rank-progress-container",t.innerHTML=`
      <div class="rank-progress-bar">
        <div id="rank-progress-fill" class="rank-progress-fill"></div>
      </div>
      <span id="rank-progress-text" class="rank-progress-text"></span>
    `,e.appendChild(t),this.elRankProgress=document.getElementById("rank-progress-fill"),this.elRankProgressText=document.getElementById("rank-progress-text")}_updateRankProgress(){if(!this.elRankProgress||!this.dayCycle)return;const e=qe.ranks,t=this.dayCycle.currentRankIndex;if(t>=e.length-1){this.elRankProgress.style.width="100%",this.elRankProgressText&&(this.elRankProgressText.textContent="MAX");return}const n=e[t].requiredSales,r=e[t+1].requiredSales-n,a=this.dayCycle.totalSales-n,o=Math.min(100,Math.max(0,a/r*100));this.elRankProgress.style.width=`${o}%`,this.elRankProgressText&&(this.elRankProgressText.textContent=`${this._formatGold(Math.floor(a))} / ${this._formatGold(r)}G`)}_updateCustomerBadge(){const e=document.querySelector('[data-target="tab-shop"]');if(!e)return;const t=e.querySelector(".tab-badge");t&&t.remove();const n=this.customer?this.customer.getActiveCustomers().length:0;if(n>0){const i=document.createElement("span");i.className="tab-badge",i.textContent=n,e.appendChild(i)}}_updateDayProgressBar(){if(!this.dayCycle||!this.elDayProgress)return;const e=this.dayCycle.dayProgress*100;this.elDayProgress.style.width=`${e}%`;const t=e/100;t<vi?this.elDayProgress.style.background="linear-gradient(90deg, #27ae60, #2ecc71)":t<yi?this.elDayProgress.style.background="linear-gradient(90deg, #2ecc71, #f1c40f)":t<xi?this.elDayProgress.style.background="linear-gradient(90deg, #f39c12, #e67e22)":this.elDayProgress.style.background="linear-gradient(90deg, #e74c3c, #c0392b)";const n=document.getElementById("ap-label");n&&(this.dayCycle.paused?n.textContent="⏸ 調合中…":t<vi?n.textContent="🌅 朝":t<yi?n.textContent="☀️ 昼":t<xi?n.textContent="🌇 夕方":n.textContent="🌙 夜")}_showSaveIndicator(){const e=document.querySelector(".save-indicator");e&&e.remove();const t=document.createElement("div");t.className="save-indicator",t.textContent="💾 保存しました",document.body.appendChild(t),setTimeout(()=>{t.classList.add("save-indicator-hide"),setTimeout(()=>t.remove(),500)},1500)}_showSaleFloatingText(e){var r;const t=(e==null?void 0:e.price)||((r=e==null?void 0:e.item)==null?void 0:r.value)||0;if(t<=0)return;const n=document.createElement("div");n.className="sale-floating-text",n.textContent=`+${t.toLocaleString("ja-JP")}G`;const i=document.querySelector(".gold-display");if(i){const a=i.getBoundingClientRect();n.style.left=`${a.left+a.width/2}px`,n.style.top=`${a.top}px`}else n.style.right="200px",n.style.top="40px";document.body.appendChild(n),setTimeout(()=>n.remove(),1500)}_showRankUpOverlay(e){const t=(e==null?void 0:e.rank)||"ランクアップ！",n=document.createElement("div");n.className="rankup-overlay",n.innerHTML=`
      <div class="rankup-confetti-layer"></div>
      <div class="rankup-content">
        <div class="rankup-icon">👑</div>
        <div class="rankup-label">ランクアップ！</div>
        <div class="rankup-name">${t}</div>
      </div>
    `,document.body.appendChild(n);const i=n.querySelector(".rankup-confetti-layer"),r=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff"];for(let a=0;a<60;a++){const o=document.createElement("div");o.className="rankup-confetti-particle",o.style.left=`${Math.random()*100}%`,o.style.backgroundColor=r[Math.floor(Math.random()*r.length)],o.style.animationDelay=`${Math.random()*2}s`,o.style.animationDuration=`${2+Math.random()*2}s`,o.style.width=`${4+Math.random()*6}px`,o.style.height=`${3+Math.random()*5}px`,i.appendChild(o)}setTimeout(()=>{n.classList.add("rankup-overlay-hide"),setTimeout(()=>n.remove(),600)},3e3)}_onItemCrafted(e){if(!(e!=null&&e.item))return;const t=e.item.quality;if(t>=81){const n=document.createElement("div");n.className="legendary-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),1200)}else if(t>=61){const n=document.createElement("div");n.className="excellent-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),800)}}_updateTimeOfDayUI(){if(!this.dayCycle)return;const e=this.dayCycle.dayTimer/this.dayCycle.dayDuration,t=document.documentElement;let n,i,r,a,o;if(e<vi){const l=e/vi;n=255,i=220,r=180,a=.03*l,o=`rgba(255, 200, 140, ${.08*l})`}else if(e<yi){const l=(e-vi)/(yi-vi);n=255,i=248,r=230,a=.03*(1-l),o="rgba(160, 132, 92, 0.08)"}else if(e<xi){const l=(e-yi)/(xi-yi);n=255,i=150,r=80,a=.04*l,o=`rgba(196, 122, 90, ${.12*l})`}else{const l=(e-xi)/(1-xi);n=30,i=40,r=80,a=.04*(.5+l*.5),o=`rgba(50, 60, 120, ${.08*l})`}t.style.setProperty("--time-tint",`rgba(${n}, ${i}, ${r}, ${a})`),t.style.setProperty("--time-border",o)}_initKeyboardShortcuts(){const e={1:"tab-inventory",2:"tab-crafting",3:"tab-shop",4:"tab-dispatch",5:"tab-upgrade",6:"tab-stats"};this._keyHandler=t=>{document.querySelector(".puzzle-overlay, .craft-result-overlay, .gameover-overlay, .title-overlay")||t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"||(e[t.key]&&(t.preventDefault(),this._switchTab(e[t.key])),t.code==="Space"&&(t.preventDefault(),this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()))},document.addEventListener("keydown",this._keyHandler)}dispose(){this._unsubscribers.forEach(e=>e()),this._keyHandler&&document.removeEventListener("keydown",this._keyHandler)}}const Or=5;class u_{constructor(){this.container=document.createElement("div"),this.container.className="toast-container",document.body.appendChild(this.container),H.on("item:sold",e=>this.show(`${e.item.name} が ${e.price||e.item.value}G で売れました！`,"gold")),H.on("adventurer:return",e=>this._showAdventurerReturn(e)),H.on("day:newDay",e=>this.show(`${e.day}日目 — 維持費 ${e.rent}G を支払いました`,"default")),H.on("rank:up",e=>this.show(`🎉 ランクアップ！ ${e.rank}`,"special")),H.on("recipe:unlocked",e=>this.show(`📜 新レシピ解放: ${e.name}`,"green")),H.on("area:unlocked",e=>this.show(`🗺️ 新エリア解放: ${e.name}`,"green")),H.on("customer:arrived",e=>this.show(`${e.customer.icon} ${e.customer.name}が来店！「${e.customer.dialogue}」`,"default")),H.on("customer:left",e=>this.show(`${e.customer.name}は帰ってしまった…`,"red")),H.on("customer:bought",e=>this.show(`${e.customer.name}が ${e.item.name} を購入！`,"gold")),H.on("adventurer:levelUp",e=>this.show(`⬆️ ${e.adventurer.name} が Lv.${e.adventurer.level} になった！`,"special")),H.on("adventurer:joined",e=>this.show(`🆕 ${e.adventurer.name} が仲間に加わった！`,"special")),H.on("event:triggered",e=>this.show(`${e.icon} ${e.name}：${e.description}`,"special"))}_showAdventurerReturn(e){var o;const t=e.items||[],n=((o=e.adventurer)==null?void 0:o.name)||"冒険者",i=document.createElement("div");i.className="toast-text",i.textContent=`${n} が帰還！ ${t.length}個の素材を入手`;const r=document.createElement("div");r.className="toast-item-icons";const a=Math.min(t.length,Or);for(let l=0;l<a;l++){const c=t[l],d=nn[c.blueprintId],f=d==null?void 0:d.image,h=document.createElement("div");if(h.className="toast-item-icon",h.title=c.name,f){const p=document.createElement("img");p.src=ei(f),p.alt=c.name,p.loading="lazy",h.appendChild(p)}else h.textContent=(c.name||"?")[0];r.appendChild(h)}if(t.length>Or){const l=document.createElement("div");l.className="toast-item-icon toast-item-more",l.textContent=`+${t.length-Or}`,r.appendChild(l)}this.showHtml([i,r],"green")}show(e,t="default"){const n=document.createElement("div");n.className=`toast toast-${t}`,n.textContent=e,this._present(n)}showHtml(e,t="default"){const n=document.createElement("div");n.className=`toast toast-${t}`;for(const i of e)n.appendChild(i);this._present(n)}_present(e){for(e.addEventListener("click",()=>this._dismiss(e)),this.container.appendChild(e),requestAnimationFrame(()=>e.classList.add("toast-show")),setTimeout(()=>this._dismiss(e),5e3);this.container.children.length>5;)this._dismiss(this.container.firstChild)}_dismiss(e){!e||!e.parentNode||(e.classList.add("toast-hide"),setTimeout(()=>e.remove(),300))}}class h_{constructor(){this.el=document.createElement("div"),this.el.className="gameover-overlay",this.el.style.display="none",document.body.appendChild(this.el),H.on("game:over",e=>this._showGameOver(e)),H.on("game:clear",e=>this._showGameClear(e))}_showGameOver(e){var t;this.el.innerHTML=`
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
    `,this.el.style.display="flex";const t=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff","#ffd700"];this._spawnParticles(".gameover-confetti-layer",80,t,!1),this._spawnFireworks(".gameover-fireworks-layer",30),document.getElementById("btn-continue").addEventListener("click",()=>{this.el.style.display="none"}),document.getElementById("btn-newgame").addEventListener("click",()=>{location.reload()})}_spawnParticles(e,t,n,i){const r=this.el.querySelector(e);if(r)for(let a=0;a<t;a++){const o=document.createElement("div");o.className=i?"gameover-dark-particle":"gameover-confetti-piece",o.style.left=`${Math.random()*100}%`,o.style.backgroundColor=n[Math.floor(Math.random()*n.length)],o.style.animationDelay=`${Math.random()*4}s`,o.style.animationDuration=`${2+Math.random()*3}s`,i||(o.style.width=`${4+Math.random()*8}px`,o.style.height=`${3+Math.random()*6}px`),r.appendChild(o)}}_spawnFireworks(e,t){const n=this.el.querySelector(e);if(!n)return;const i=["#e8b84b","#ff6b6b","#7daa68","#7ab0c4","#ff9955","#ffd700"];for(let r=0;r<t;r++){const a=document.createElement("div");a.className="gameover-firework",a.style.left=`${10+Math.random()*80}%`,a.style.backgroundColor=i[Math.floor(Math.random()*i.length)],a.style.animationDelay=`${Math.random()*5}s`,a.style.animationDuration=`${1.5+Math.random()*2}s`,n.appendChild(a)}}}const Ai=class Ai{constructor(e){this.onStart=e,this.el=document.createElement("div"),this.el.className="title-overlay",this._render(),document.body.appendChild(this.el),this._waitForAssets().then(()=>{this._startRippleSequence()})}async _waitForAssets(){const e=[],t=this.el.querySelector(".title-logo-img");t&&!t.complete&&e.push(new Promise(n=>{t.onload=n,t.onerror=n})),e.push(yt.waitForCurrentTrack()),await Promise.all(e)}_startRippleSequence(){const e=this.el.querySelector(".title-ripple-container"),t=Ai.RIPPLE_DELAYS;t.forEach(i=>{setTimeout(()=>{const r=20+Math.random()*40,a=20+Math.random()*40,o=document.createElement("div");o.className="title-ripple",o.style.left=`${r}%`,o.style.top=`${a}%`,e.appendChild(o),o.addEventListener("animationend",()=>o.remove())},i)});const n=t[t.length-1];setTimeout(()=>{this.el.classList.add("title-animate")},n+Ai.FOREST_DELAY_AFTER_RIPPLES)}_render(){var c;const e=Ws.getSaveInfo(),t=e?((c=qe.ranks[e.rankIndex])==null?void 0:c.name)||"—":"",n=e?new Date(e.timestamp).toLocaleString("ja-JP"):"";let i="";const r=5;for(let d=0;d<r;d++){const f=4+d*2;let h="";for(let m=0;m<f;m++){const u=m/f*100+(Math.random()-.5)*(70/f),S=50+Math.random()*50,E=Math.random()>.45?"pine":"oak",M=8+Math.random()*6+d*2;h+=`<div class="tree-sil tree-${E}"
          style="left:${u}%; height:${S}%; width:${M}%;"></div>`}const p=d*.35,_=2.5+d*.3,v=.15+d*.2;i+=`<div class="forest-depth-layer" style="
        --layer-delay:${p}s; --layer-dur:${_}s; --start-scale:${v};
        z-index:${d+1};">${h}</div>`}let a="";for(let d=0;d<25;d++){const f=Math.random()*100,h=20+Math.random()*70,p=2+Math.random()*3,_=3+Math.random()*4,v=Math.random()*6;a+=`<div class="title-particle"
        style="left:${f}%; top:${h}%; width:${p}px; height:${p}px;
               --dur:${_}s; --delay:${v}s;"></div>`}this.el.innerHTML=`
      <div class="title-ripple-container"></div>
      <div class="title-sky-layer"></div>
      <div class="title-forest-tunnel">${i}</div>
      <div class="title-light-rays"></div>
      <div class="title-fog-layer"></div>
      <div class="title-particles">${a}</div>
      <div class="title-content">
        <div class="title-logo">
          <img src="${ei("/art/Title_logo.png")}" alt="ひだまり森の錬金工房" class="title-logo-img" />
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
    `,this.el.querySelector("#btn-new-game").addEventListener("click",()=>{if(e){if(!confirm("セーブデータを削除して新しく始めますか？"))return;Ws.deleteSave()}this._close(null)});const o=Qa.createGearButton();o.classList.add("title-gear-btn"),this.el.appendChild(o);const l=this.el.querySelector("#btn-continue");l&&l.addEventListener("click",()=>{this._close(Ws.loadSaveData())})}_close(e){this.el.classList.add("title-fade-out"),setTimeout(()=>{this.el.remove(),this.onStart(e)},600)}};nr(Ai,"RIPPLE_DELAYS",[200,900,1500]),nr(Ai,"FOREST_DELAY_AFTER_RIPPLES",800);let Ca=Ai;const vl="voxelshop_tutorial_done",Os=[{id:"welcome",title:"ようこそ！",text:`Voxel Shop Tycoon へようこそ！
ファンタジー世界で小さなアイテムショップを経営しましょう。`,highlight:null,trigger:null},{id:"dispatch",title:"① 冒険者を派遣しよう",text:`まずは「派遣」タブを開いて、冒険者を草原に派遣しましょう。
帰還すると素材が手に入ります。`,highlight:'[data-target="tab-dispatch"]',trigger:"adventurer:return"},{id:"crafting",title:"② アイテムを調合しよう",text:`集めた素材で「調合」タブからアイテムを作りましょう。
品質(Q)が高いほど高く売れます！`,highlight:'[data-target="tab-crafting"]',trigger:"inventory:changed"},{id:"shop",title:"③ お店に陳列しよう",text:`「お店」タブでアイテムを陳列しましょう。
お客さんが来て、欲しいものを買ってくれます。`,highlight:'[data-target="tab-shop"]',trigger:"item:sold"},{id:"survive",title:"④ 維持費に注意！",text:`毎日 維持費がかかります。払えなくなるとゲームオーバー！
探索→調合→販売のサイクルを回して生き残りましょう。`,highlight:"#rent-value",trigger:null}];class f_{constructor(){localStorage.getItem(vl)||(this.stepIndex=0,this.el=document.createElement("div"),this.el.className="tutorial-overlay",document.body.appendChild(this.el),this._unsubscribers=[],this._showStep())}_showStep(){if(this.stepIndex>=Os.length){this._complete();return}const e=Os[this.stepIndex];if(this.el.innerHTML=`
      <div class="tutorial-box">
        <div class="tutorial-step-indicator">
          ${Os.map((t,n)=>`<span class="tutorial-dot ${n===this.stepIndex?"active":n<this.stepIndex?"done":""}"></span>`).join("")}
        </div>
        <h3 class="tutorial-title">${e.title}</h3>
        <p class="tutorial-text">${e.text.replace(/\n/g,"<br>")}</p>
        <div class="tutorial-actions">
          <button class="btn tutorial-skip-btn" id="btn-tutorial-skip">スキップ</button>
          <button class="btn primary tutorial-next-btn" id="btn-tutorial-next">${e.trigger?"了解！":this.stepIndex===Os.length-1?"はじめる！":"次へ"}</button>
        </div>
      </div>
    `,e.highlight){const t=document.querySelector(e.highlight);t&&(t.classList.add("tutorial-highlight"),this._lastHighlight=t)}document.getElementById("btn-tutorial-skip").addEventListener("click",()=>this._complete()),document.getElementById("btn-tutorial-next").addEventListener("click",()=>{if(this._clearHighlight(),e.trigger){this.el.innerHTML=`
          <div class="tutorial-box tutorial-waiting">
            <p class="tutorial-text">やってみましょう…！</p>
          </div>
        `;const t=H.on(e.trigger,()=>{t(),this.stepIndex++,this._showStep()});this._unsubscribers.push(t)}else this.stepIndex++,this._showStep()})}_clearHighlight(){this._lastHighlight&&(this._lastHighlight.classList.remove("tutorial-highlight"),this._lastHighlight=null)}_complete(){this._clearHighlight(),localStorage.setItem(vl,"1"),this._unsubscribers.forEach(e=>e()),this.el.classList.add("tutorial-fade-out"),setTimeout(()=>this.el.remove(),400)}}const En=[{level:1,name:"無名の店",icon:"☆",minRep:0,customerRate:1,priceBonus:0,customerPool:["villager","adventurer_customer"]},{level:2,name:"知られた店",icon:"★",minRep:30,customerRate:1.3,priceBonus:.05,customerPool:["villager","adventurer_customer","soldier","healer"]},{level:3,name:"人気店",icon:"★★",minRep:80,customerRate:1.6,priceBonus:.1,customerPool:["villager","adventurer_customer","soldier","healer","merchant","scholar","alchemist"]},{level:4,name:"王国御用達",icon:"★★★",minRep:150,customerRate:2,priceBonus:.15,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch","scholar","alchemist","knight","dancer"]},{level:5,name:"伝説の名店",icon:"🌟",minRep:250,customerRate:2.5,priceBonus:.2,customerPool:["villager","adventurer_customer","soldier","healer","merchant","noble","witch","scholar","alchemist","knight","dancer","pirate","fairy"]}];class p_{constructor(){this.reputation=0,this.currentLevel=En[0],this._bindEvents()}_bindEvents(){H.on("customer:bought",e=>{var i;const t=((i=e.item)==null?void 0:i.quality)||30;let n=1;t>=80?n=4:t>=60?n=3:t>=40&&(n=2),this.addReputation(n)}),H.on("customer:left",e=>{((e==null?void 0:e.reason)==="no_match"||(e==null?void 0:e.reason)==="timeout")&&this.addReputation(-2)}),H.on("rank:up",()=>{this.addReputation(10)}),H.on("item:crafted",()=>{this.addReputation(1)})}addReputation(e){const t=this.currentLevel;this.reputation=Math.max(0,this.reputation+e),this._updateLevel(),this.currentLevel!==t&&H.emit("reputation:levelUp",{level:this.currentLevel.level,name:this.currentLevel.name,icon:this.currentLevel.icon}),H.emit("reputation:changed",{reputation:this.reputation,level:this.currentLevel})}_updateLevel(){for(let e=En.length-1;e>=0;e--)if(this.reputation>=En[e].minRep){this.currentLevel=En[e];return}this.currentLevel=En[0]}getCustomerRateMultiplier(){return this.currentLevel.customerRate}getPriceBonus(){return this.currentLevel.priceBonus}getAvailableCustomerPool(){return this.currentLevel.customerPool}getProgress(){const e=En.indexOf(this.currentLevel);if(e>=En.length-1)return 1;const n=En[e+1].minRep-this.currentLevel.minRep,i=this.reputation-this.currentLevel.minRep;return Math.min(1,i/n)}toSaveData(){return{reputation:this.reputation}}loadSaveData(e){e&&typeof e.reputation=="number"&&(this.reputation=e.reputation,this._updateLevel())}}class m_{constructor(){this.progress={},this._currentDaySales=0,this._bestDaySales=0,this.upgradeCount=0,this._initProgress(),this._bindEvents()}_initProgress(){for(const[,e]of Object.entries(hn))for(const t of e)t.id in this.progress||(this.progress[t.id]=0)}_bindEvents(){H.on("item:sold",e=>{var n,i;this._increment("sell_count",1);const t=(n=e.item)==null?void 0:n.type;t&&this._incrementFiltered("sell_type",t,1),this._currentDaySales+=((i=e.item)==null?void 0:i.value)||0}),H.on("customer:bought",e=>{var n;this._increment("total_customers",1);const t=(n=e.customer)==null?void 0:n.id;t&&this._incrementFiltered("serve_customer",t,1)}),H.on("item:crafted",e=>{var i,r,a,o,l;this._increment("craft_count",1);const t=((i=e.item)==null?void 0:i.quality)||0;this._updateMax("craft_quality",t),((a=(r=e.item)==null?void 0:r.traits)==null?void 0:a.length)>0&&this._increment("craft_with_trait",1);const n=((l=(o=e.item)==null?void 0:o.traits)==null?void 0:l.length)||0;this._updateMax("craft_max_traits",n)}),H.on("adventurer:return",e=>{this._increment("explore_count",1);const t=e.areaId;t&&this._incrementFiltered("explore_area",t,1)}),H.on("day:newDay",()=>{this._currentDaySales>this._bestDaySales&&(this._bestDaySales=this._currentDaySales),this._updateDailySales(),this._currentDaySales=0}),H.on("upgrade:purchased",()=>{this.upgradeCount++,this._updateUpgradeCount()})}_increment(e,t){for(const[,n]of Object.entries(hn))for(const i of n)i.conditionType===e&&(this.progress[i.id]=(this.progress[i.id]||0)+t)}_incrementFiltered(e,t,n){for(const[,i]of Object.entries(hn))for(const r of i){if(r.conditionType!==e)continue;(r.targetArea&&r.targetArea===t||r.targetType&&r.targetType===t||r.targetCustomer&&r.targetCustomer===t)&&(this.progress[r.id]=(this.progress[r.id]||0)+n)}}_updateMax(e,t){for(const[,n]of Object.entries(hn))for(const i of n)i.conditionType===e&&(this.progress[i.id]=Math.max(this.progress[i.id]||0,t))}_updateDailySales(){for(const[,e]of Object.entries(hn))for(const t of e)t.conditionType==="daily_sales"&&(this.progress[t.id]=Math.max(this.progress[t.id]||0,this._bestDaySales))}_updateUpgradeCount(){for(const[,e]of Object.entries(hn))for(const t of e)t.conditionType==="upgrade_count"&&(this.progress[t.id]=this.upgradeCount)}updateTotalSales(e){for(const[,t]of Object.entries(hn))for(const n of t)n.conditionType==="total_sales"&&(this.progress[n.id]=e)}isQuestComplete(e){const t=this._findQuest(e);return t?(this.progress[e]||0)>=t.target:!1}getQuestsForRank(e){const t=`rank${e}`;return(hn[t]||[]).map(i=>({...i,current:this.progress[i.id]||0,complete:(this.progress[i.id]||0)>=i.target}))}isRankQuestSatisfied(e){const t=this.getQuestsForRank(e);if(t.length===0)return!0;const n=t.filter(r=>r.complete).length,i=Math.ceil(t.length*qe.questRequiredRatio);return n>=i}getRequiredCount(e){const t=this.getQuestsForRank(e);return Math.ceil(t.length*qe.questRequiredRatio)}_findQuest(e){for(const[,t]of Object.entries(hn))for(const n of t)if(n.id===e)return n;return null}toSaveData(){return{progress:{...this.progress},bestDaySales:this._bestDaySales,upgradeCount:this.upgradeCount}}loadSaveData(e){e&&(e.progress&&Object.assign(this.progress,e.progress),this._bestDaySales=e.bestDaySales||0,this.upgradeCount=e.upgradeCount||0)}}const nc=[];let wn=null,Ei=null,kt=null,sn=null,jn=null,jt=null,Zs=null,kr=null,Ti=null,wi=null,Ra=null,Ia=null,ic=!1;async function __(){wn=new Am("game-canvas"),Ei=new Um(wn.scene,wn.camera,nc,wn),await Ei.init()}async function g_(){try{await __(),v_(()=>{yt.init(),yt.startTitleBGM(),new Ca(s=>{y_(s)})})}catch(s){console.error("[VoxelGame] Failed to load:",s)}}function v_(s){const e=document.createElement("div");e.className="splash-overlay",e.innerHTML=`
    <div class="splash-content">
      <p class="splash-text">Click to Start</p>
    </div>
  `,document.body.appendChild(e);const t=document.getElementById("initial-loader");t&&t.remove();const n=()=>{e.removeEventListener("click",n),e.classList.add("splash-fade-out"),setTimeout(()=>{e.remove(),s()},600)};e.addEventListener("click",n)}function y_(s){kt=new Fm,sn=new zm(kt),jn=new Gm(kt),wi=new m_,jt=new Hm(kt,wi),kr=new Wm(kt),Ti=new p_,Zs=new qm(kt,sn,kr,Ti),s&&x_(s),Ra=new Ws(kt,jn,jt,sn,Ti,wi),Ia=new d_(kt,sn,jn,Zs,jt,kr,Ti,wi),new u_,new h_,s||new f_,ic=!0,H.on("game:pause",()=>{Pa=!0}),H.on("game:resume",()=>{Pa=!1}),yt.startGameBGM(),console.log("[VoxelGame] Game started."+(s?" (loaded save)":""))}function x_(s){kt.gold=s.gold,kt.items=[];for(const e of s.items)kt.items.push(Yn(e.blueprintId,e.quality,e.traits));sn.displayedItems=[];for(const e of s.displayedItems||[])sn.displayedItems.push(Yn(e.blueprintId,e.quality,e.traits));for(const e of s.unlockedRecipes||[])rn[e]&&(rn[e].unlocked=!0);for(const e of s.unlockedAreas||[])Lt[e]&&(Lt[e].unlocked=!0);if(jt.day=s.day||1,jt.dayTimer=s.dayTimer||0,jt.totalSales=s.totalSales||0,jt.currentRankIndex=s.currentRankIndex||0,s.purchasedUpgrades&&(sn.purchasedUpgrades=[...s.purchasedUpgrades]),s.maxSlots&&(sn.maxSlots=s.maxSlots),s.maxCapacity&&(kt.maxCapacity=s.maxCapacity),s.quest&&wi&&wi.loadSaveData(s.quest),s.adventurers)for(const e of s.adventurers){let t=jn.adventurers.find(n=>n.id===e.id);if(!t){const n=ec.find(i=>i.id===e.id);n&&(t={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}},jn.adventurers.push(t))}t&&(t.level=e.level||1,t.exp=e.exp||0,t.assignedArea=e.assignedArea||"plains",e.weapon&&(t.equipment.weapon=Yn(e.weapon.blueprintId,e.weapon.quality,e.weapon.traits)))}s.reputation&&Ti&&Ti.loadSaveData(s.reputation),s.stats&&Ln.loadSaveData(s.stats)}g_();const M_=new Vd;let Pa=!1;function sc(){requestAnimationFrame(sc);const s=M_.getDelta();for(const e of nc)e.update(s);if(!ic){wn&&wn.render();return}Pa||(Ei&&Ei.update(s),jt&&jt.update(s),sn&&sn.update(s),jn&&jn.update(s),Zs&&Zs.update(s),Ra&&Ra.update(s),Ei&&jt&&Ei.setDayProgress(jt.dayProgress)),Ia&&Ia.update(s),wn&&wn.render()}sc();
