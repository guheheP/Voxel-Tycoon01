var Nc=Object.defineProperty;var Fc=(s,t,e)=>t in s?Nc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Wi=(s,t,e)=>Fc(s,typeof t!="symbol"?t+"":t,e);import{A as se,R as he,G as Ut,I as Bt,T as Jt,a as Zn,b as us,L as Ys,c as cs,U as ii,M as bo}from"./adventurers-Dqg5heZB.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xr="172",Bc=0,Mo=1,kc=2,Oc=0,Fl=1,Bl=2,yn=3,un=0,Ue=1,sn=2,Nn=0,Pi=1,So=2,Eo=3,To=4,zc=5,jn=100,Gc=101,Hc=102,Vc=103,$c=104,qc=200,Wc=201,Xc=202,Yc=203,Ja=204,tr=205,jc=206,Kc=207,Zc=208,Qc=209,Jc=210,td=211,ed=212,nd=213,id=214,er=0,nr=1,ir=2,Di=3,sr=4,ar=5,rr=6,or=7,Yr=0,sd=1,ad=2,Fn=0,rd=1,od=2,ld=3,kl=4,cd=5,dd=6,hd=7,Ol=300,Ui=301,Ni=302,lr=303,cr=304,ha=306,dr=1e3,Qn=1001,hr=1002,He=1003,ud=1004,_s=1005,dn=1006,ma=1007,Jn=1008,En=1009,zl=1010,Gl=1011,hs=1012,jr=1013,ei=1014,hn=1015,fs=1016,Kr=1017,Zr=1018,Fi=1020,Hl=35902,Vl=1021,$l=1022,an=1023,ql=1024,Wl=1025,Ii=1026,Bi=1027,Qr=1028,Jr=1029,Xl=1030,to=1031,eo=1033,js=33776,Ks=33777,Zs=33778,Qs=33779,ur=35840,fr=35841,pr=35842,mr=35843,gr=36196,vr=37492,_r=37496,yr=37808,xr=37809,br=37810,Mr=37811,Sr=37812,Er=37813,Tr=37814,wr=37815,Ar=37816,Cr=37817,Rr=37818,Pr=37819,Ir=37820,Lr=37821,Js=36492,Dr=36494,Ur=36495,Yl=36283,Nr=36284,Fr=36285,Br=36286,fd=3200,pd=3201,no=0,md=1,Dn="",Xe="srgb",ki="srgb-linear",ia="linear",Zt="srgb",oi=7680,wo=519,gd=512,vd=513,_d=514,jl=515,yd=516,xd=517,bd=518,Md=519,Ao=35044,Co="300 es",Mn=2e3,sa=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,kr=180/Math.PI;function ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function Sd(s,t){return(s%t+t)%t}function ga(s,t,e){return(1-e)*s+e*t}function Xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,a,r,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=o,d[3]=e,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],v=i[0],p=i[3],u=i[6],_=i[1],b=i[4],x=i[7],R=i[2],T=i[5],A=i[8];return a[0]=r*v+o*_+l*R,a[3]=r*p+o*b+l*T,a[6]=r*u+o*x+l*A,a[1]=c*v+d*_+h*R,a[4]=c*p+d*b+h*T,a[7]=c*u+d*x+h*A,a[2]=f*v+m*_+g*R,a[5]=f*p+m*b+g*T,a[8]=f*u+m*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*o*c-n*a*d+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,f=o*l-d*a,m=c*a-r*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(i*c-d*n)*v,t[2]=(o*n-i*r)*v,t[3]=f*v,t[4]=(d*e-i*l)*v,t[5]=(i*a-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new It;function Kl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ed(){const s=aa("canvas");return s.style.display="block",s}const Ro={};function Si(s){s in Ro||(Ro[s]=!0,console.warn(s))}function Td(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function wd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ad(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Po=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cd(){const s={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Zt&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Zt&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},toWorkingColorSpace:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ki]:{primaries:t,whitePoint:n,transfer:ia,toXYZ:Po,fromXYZ:Io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:Po,fromXYZ:Io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}const Xt=Cd();function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Li(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=aa("canvas")),li.width=t.width,li.height=t.height;const n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Sn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(_a(i[r].image)):a.push(_a(i[r]))}else a=_a(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class Pe extends Gi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Qn,i=Qn,a=dn,r=Jn,o=an,l=En,c=Pe.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ps(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Ol;Pe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(m+1)/2,R=(u+1)/2,T=(d+f)/4,A=(h+v)/4,I=(g+p)/4;return b>x&&b>R?b<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(b),i=T/n,a=A/n):x>R?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=T/i,a=I/i):R<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(R),n=A/a,i=I/a),this.set(n,i,a,e),this}let _=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ql extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const f=a[r+0],m=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==m||d!==g){let p=1-o;const u=l*f+c*m+d*g+h*v,_=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,u*_);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}const x=o*_;if(l=l*p+f*x,c=c*p+m*x,d=d*p+g*x,h=h*p+v*x,p===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=a[r],f=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+d*h+l*m-c*f,t[e+1]=l*g+d*f+c*h-o*m,t[e+2]=c*g+d*m+o*f-l*h,t[e+3]=d*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(a/2),f=l(n/2),m=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(r-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(a-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(r-i)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+r*o+i*c-a*l,this._y=i*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-i*o,this._w=r*d-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),d=2*(o*e-a*i),h=2*(a*n-r*e);return this.x=e+l*c+r*h-o*d,this.y=n+l*d+o*c-a*h,this.z=i+l*h+a*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new F,Lo=new ms;class si{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Je):Je.fromBufferAttribute(a,r),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),xs.subVectors(this.max,Yi),ci.subVectors(t.a,Yi),di.subVectors(t.b,Yi),hi.subVectors(t.c,Yi),wn.subVectors(di,ci),An.subVectors(hi,di),Gn.subVectors(ci,hi);let e=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,An.z,0,-An.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Gn.y,Gn.x,0];return!xa(e,ci,di,hi,xs)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,ci,di,hi,xs))?!1:(bs.crossVectors(wn,An),e=[bs.x,bs.y,bs.z],xa(e,ci,di,hi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new F,new F,new F,new F,new F,new F,new F,new F],Je=new F,ys=new si,ci=new F,di=new F,hi=new F,wn=new F,An=new F,Gn=new F,Yi=new F,xs=new F,bs=new F,Hn=new F;function xa(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Hn.fromArray(s,a);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),d=n.dot(Hn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ud=new si,ji=new F,ba=new F;class Hi{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(ba)),this.expandByPoint(ji.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new F,Ma=new F,Ms=new F,Cn=new F,Sa=new F,Ss=new F,Ea=new F;class Jl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ma.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Ma);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Ms),o=Cn.dot(this.direction),l=-Cn.dot(Ms),c=Cn.lengthSq(),d=Math.abs(1-r*r);let h,f,m,g;if(d>0)if(h=r*l-o,f=r*o-l,g=a*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,m=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(h=Math.max(0,-(r*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c);else f=r>0?-a:a,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ma).addScaledVector(Ms,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),d>=0?(a=(t.min.y-f.y)*d,r=(t.max.y-f.y)*d):(a=(t.max.y-f.y)*d,r=(t.min.y-f.y)*d),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,a){Sa.subVectors(e,t),Ss.subVectors(n,t),Ea.crossVectors(Sa,Ss);let r=this.direction.dot(Ea),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(Ss.crossVectors(Cn,Ss));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(Cn));if(c<0||l+c>r)return null;const d=-o*Cn.dot(Ea);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,a,r,o,l,c,d,h,f,m,g,v,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,d,h,f,m,g,v,p)}set(t,e,n,i,a,r,o,l,c,d,h,f,m,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),a=1/ui.setFromMatrixColumn(t,1).length(),r=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const f=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,g=c*d,v=c*h;e[0]=f+v*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*h,e[5]=r*d,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,g=c*d,v=c*h;e[0]=f-v*o,e[4]=-r*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*d,e[9]=v-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=g*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=v-f*h,e[8]=g*h+m,e[1]=h,e[5]=r*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+v,e[5]=r*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*d,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Rn.crossVectors(n,Fe),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Rn.crossVectors(n,Fe)),Rn.normalize(),Es.crossVectors(Fe,Rn),i[0]=Rn.x,i[4]=Es.x,i[8]=Fe.x,i[1]=Rn.y,i[5]=Es.y,i[9]=Fe.y,i[2]=Rn.z,i[6]=Es.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],_=n[3],b=n[7],x=n[11],R=n[15],T=i[0],A=i[4],I=i[8],E=i[12],M=i[1],P=i[5],G=i[9],z=i[13],$=i[2],Z=i[6],q=i[10],Q=i[14],V=i[3],at=i[7],ht=i[11],yt=i[15];return a[0]=r*T+o*M+l*$+c*V,a[4]=r*A+o*P+l*Z+c*at,a[8]=r*I+o*G+l*q+c*ht,a[12]=r*E+o*z+l*Q+c*yt,a[1]=d*T+h*M+f*$+m*V,a[5]=d*A+h*P+f*Z+m*at,a[9]=d*I+h*G+f*q+m*ht,a[13]=d*E+h*z+f*Q+m*yt,a[2]=g*T+v*M+p*$+u*V,a[6]=g*A+v*P+p*Z+u*at,a[10]=g*I+v*G+p*q+u*ht,a[14]=g*E+v*z+p*Q+u*yt,a[3]=_*T+b*M+x*$+R*V,a[7]=_*A+b*P+x*Z+R*at,a[11]=_*I+b*G+x*q+R*ht,a[15]=_*E+b*z+x*Q+R*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+a*l*h-i*c*h-a*o*f+n*c*f+i*o*m-n*l*m)+v*(+e*l*m-e*c*f+a*r*f-i*r*m+i*c*d-a*l*d)+p*(+e*c*h-e*o*m-a*r*h+n*r*m+a*o*d-n*c*d)+u*(-i*o*d-e*l*h+e*o*f+i*r*h-n*r*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],_=h*p*c-v*f*c+v*l*m-o*p*m-h*l*u+o*f*u,b=g*f*c-d*p*c-g*l*m+r*p*m+d*l*u-r*f*u,x=d*v*c-g*h*c+g*o*m-r*v*m-d*o*u+r*h*u,R=g*h*l-d*v*l-g*o*f+r*v*f+d*o*p-r*h*p,T=e*_+n*b+i*x+a*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(v*f*a-h*p*a-v*i*m+n*p*m+h*i*u-n*f*u)*A,t[2]=(o*p*a-v*l*a+v*i*c-n*p*c-o*i*u+n*l*u)*A,t[3]=(h*l*a-o*f*a-h*i*c+n*f*c+o*i*m-n*l*m)*A,t[4]=b*A,t[5]=(d*p*a-g*f*a+g*i*m-e*p*m-d*i*u+e*f*u)*A,t[6]=(g*l*a-r*p*a-g*i*c+e*p*c+r*i*u-e*l*u)*A,t[7]=(r*f*a-d*l*a+d*i*c-e*f*c-r*i*m+e*l*m)*A,t[8]=x*A,t[9]=(g*h*a-d*v*a-g*n*m+e*v*m+d*n*u-e*h*u)*A,t[10]=(r*v*a-g*o*a+g*n*c-e*v*c-r*n*u+e*o*u)*A,t[11]=(d*o*a-r*h*a-d*n*c+e*h*c+r*n*m-e*o*m)*A,t[12]=R*A,t[13]=(d*v*i-g*h*i+g*n*f-e*v*f-d*n*p+e*h*p)*A,t[14]=(g*o*i-r*v*i-g*n*l+e*v*l+r*n*p-e*o*p)*A,t[15]=(r*h*i-d*o*i+d*n*l-e*h*l-r*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*r,0,c*l-i*o,d*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,d=r+r,h=o+o,f=a*c,m=a*d,g=a*h,v=r*d,p=r*h,u=o*h,_=l*c,b=l*d,x=l*h,R=n.x,T=n.y,A=n.z;return i[0]=(1-(v+u))*R,i[1]=(m+x)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(m-x)*T,i[5]=(1-(f+u))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(g+b)*A,i[9]=(p-_)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=ui.set(i[0],i[1],i[2]).length();const r=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/a,d=1/r,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,e.setFromRotationMatrix(tn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=Mn){const l=this.elements,c=2*a/(e-t),d=2*a/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===Mn)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===sa)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=Mn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(r-a),f=(e+t)*c,m=(n+i)*d;let g,v;if(o===Mn)g=(r+a)*h,v=-2*h;else if(o===sa)g=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new F,tn=new ee,Nd=new F(0,0,0),Fd=new F(1,1,1),Rn=new F,Es=new F,Fe=new F,Do=new ee,Uo=new ms;class on{constructor(t=0,e=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const No=new F,fi=new ms,gn=new ee,Ts=new F,Ki=new F,kd=new F,Od=new ms,Fo=new F(1,0,0),Bo=new F(0,1,0),ko=new F(0,0,1),Oo={type:"added"},zd={type:"removed"},pi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class me extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new F,e=new on,n=new ms,i=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ki,Ts,this.up):gn.lookAt(Ts,Ki,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(gn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),f=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new F(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new F,vn=new F,wa=new F,_n=new F,mi=new F,gi=new F,zo=new F,Aa=new F,Ca=new F,Ra=new F,Pa=new ce,Ia=new ce,La=new ce;class je{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){en.subVectors(i,e),vn.subVectors(n,e),wa.subVectors(t,e);const r=en.dot(en),o=en.dot(vn),l=en.dot(wa),c=vn.dot(vn),d=vn.dot(wa),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,g=(r*d-o*l)*f;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_n.x),l.addScaledVector(r,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return Pa.setScalar(0),Ia.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),La.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Pa,a.x),r.addScaledVector(Ia,a.y),r.addScaledVector(La,a.z),r}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),vn.subVectors(t,e),en.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;mi.subVectors(i,n),gi.subVectors(a,n),Aa.subVectors(t,n);const l=mi.dot(Aa),c=gi.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,i);const d=mi.dot(Ca),h=gi.dot(Ca);if(d>=0&&h<=d)return e.copy(i);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(n).addScaledVector(mi,r);Ra.subVectors(t,a);const m=mi.dot(Ra),g=gi.dot(Ra);if(g>=0&&m<=g)return e.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gi,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return zo.subVectors(a,i),o=(h-d)/(h-d+(m-g)),e.copy(i).addScaledVector(zo,o);const u=1/(p+v+f);return r=v*u,o=f*u,e.copy(n).addScaledVector(mi,r).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Da(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Sd(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Da(r,a,t+1/3),this.g=Da(r,a,t),this.b=Da(r,a,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Xt.fromWorkingColorSpace(Me.copy(this),t),Math.round(kt(Me.r*255,0,255))*65536+Math.round(kt(Me.g*255,0,255))*256+Math.round(kt(Me.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,a=Me.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Xe){Xt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ws);const n=ga(Pn.h,ws.h,e),i=ga(Pn.s,ws.s,e),a=ga(Pn.l,ws.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Et;Et.NAMES=ec;let Gd=0;class ai extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Pi,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=tr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nc extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new F,As=new Ht;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),a=Le(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class ic extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hd=0;const We=new ee,Ua=new me,vi=new F,Be=new si,Zi=new si,_e=new F;class ln extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new It().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Be.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Be.min,Zi.min),Be.expandByPoint(_e),_e.addVectors(Be.max,Zi.max),Be.expandByPoint(_e)):(Be.expandByPoint(Zi.min),Be.expandByPoint(Zi.max))}Be.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)_e.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)_e.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),_e.add(vi)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new F,l[I]=new F;const c=new F,d=new F,h=new F,f=new Ht,m=new Ht,g=new Ht,v=new F,p=new F;function u(I,E,M){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(a,I),m.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),d.sub(c),h.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),o[I].add(v),o[E].add(v),o[M].add(v),l[I].add(p),l[E].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,E=_.length;I<E;++I){const M=_[I],P=M.start,G=M.count;for(let z=P,$=P+G;z<$;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new F,x=new F,R=new F,T=new F;function A(I){R.fromBufferAttribute(i,I),T.copy(R);const E=o[I];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(T,E);const P=x.dot(l[I])<0?-1:1;r.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,E=_.length;I<E;++I){const M=_[I],P=M.start,G=M.count;for(let z=P,$=P+G;z<$;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,a=new F,r=new F,o=new F,l=new F,c=new F,d=new F,h=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,p),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new rn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(i[l]=d,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const a=t.morphAttributes;for(const c in a){const d=[],h=a[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new ee,Vn=new Jl,Cs=new Hi,Ho=new F,Rs=new F,Ps=new F,Is=new F,Na=new F,Ls=new F,Vo=new F,Ds=new F;class Ge extends me{constructor(t=new ln,e=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){Ls.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Na.fromBufferAttribute(h,t),r?Ls.addScaledVector(Na,d):Ls.addScaledVector(Na.sub(e),d))}e.add(Ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),Vn.copy(t.ray).recast(t.near),!(Cs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Cs,Ho)===null||Vn.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Go.copy(a).invert(),Vn.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=r[p.materialIndex],_=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=_,R=b;x<R;x+=3){const T=o.getX(x),A=o.getX(x+1),I=o.getX(x+2);i=Us(this,u,t,n,c,d,h,T,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const _=o.getX(p),b=o.getX(p+1),x=o.getX(p+2);i=Us(this,r,t,n,c,d,h,_,b,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=r[p.materialIndex],_=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=_,R=b;x<R;x+=3){const T=x,A=x+1,I=x+2;i=Us(this,u,t,n,c,d,h,T,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const _=p,b=p+1,x=p+2;i=Us(this,r,t,n,c,d,h,_,b,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Vd(s,t,e,n,i,a,r,o){let l;if(t.side===Ue?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===un,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:s}}function Us(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,Rs),s.getVertexPosition(l,Ps),s.getVertexPosition(c,Is);const d=Vd(s,t,e,n,Rs,Ps,Is,Vo);if(d){const h=new F;je.getBarycoord(Vo,Rs,Ps,Is,h),i&&(d.uv=je.getInterpolatedAttribute(i,o,l,c,h,new Ht)),a&&(d.uv1=je.getInterpolatedAttribute(a,o,l,c,h,new Ht)),r&&(d.normal=je.getInterpolatedAttribute(r,o,l,c,h,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};je.getNormal(Rs,Ps,Is,f.normal),d.face=f,d.barycoord=h}return d}class Bn extends ln{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(h,2));function g(v,p,u,_,b,x,R,T,A,I,E){const M=x/A,P=R/I,G=x/2,z=R/2,$=T/2,Z=A+1,q=I+1;let Q=0,V=0;const at=new F;for(let ht=0;ht<q;ht++){const yt=ht*P-z;for(let Nt=0;Nt<Z;Nt++){const Qt=Nt*M-G;at[v]=Qt*_,at[p]=yt*b,at[u]=$,c.push(at.x,at.y,at.z),at[v]=0,at[p]=0,at[u]=T>0?1:-1,d.push(at.x,at.y,at.z),h.push(Nt/A),h.push(1-ht/I),Q+=1}}for(let ht=0;ht<I;ht++)for(let yt=0;yt<A;yt++){const Nt=f+yt+Z*ht,Qt=f+yt+Z*(ht+1),X=f+(yt+1)+Z*(ht+1),et=f+(yt+1)+Z*ht;l.push(Nt,Qt,et),l.push(Qt,X,et),V+=6}o.addGroup(m,V,E),m+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Oi(s[e]);for(const i in n)t[i]=n[i]}return t}function $d(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ac(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const qd={clone:Oi,merge:Re};var Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new F,$o=new Ht,qo=new Ht;class ze extends rc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,$o,qo),e.subVectors(qo,$o)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,yi=1;class Yd extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(_i,yi,t,e);i.layers=this.layers,this.add(i);const a=new ze(_i,yi,t,e);a.layers=this.layers,this.add(a);const r=new ze(_i,yi,t,e);r.layers=this.layers,this.add(r);const o=new ze(_i,yi,t,e);o.layers=this.layers,this.add(o);const l=new ze(_i,yi,t,e);l.layers=this.layers,this.add(l);const c=new ze(_i,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class oc extends Pe{constructor(t,e,n,i,a,r,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,i,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bn(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Nn});a.uniforms.tEquirect.value=e;const r=new Ge(i,a),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=dn),new Yd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}class io{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new io(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lc extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kd extends Pe{constructor(t=null,e=1,n=1,i,a,r,o,l,c=He,d=He,h,f){super(null,r,o,l,c,d,i,a,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo extends rn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new ee,Xo=new ee,Ns=[],Yo=new si,Zd=new ee,Qi=new Ge,Ji=new Hi;class Qd extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Yo.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Ji.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),t.ray.intersectsSphere(Ji)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,xi),Xo.multiplyMatrices(n,xi),Qi.matrixWorld=Xo,Qi.raycast(t,Ns);for(let r=0,o=Ns.length;r<o;r++){const l=Ns[r];l.instanceId=a,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kd(new Float32Array(i*this.count),i,this.count,Qr,hn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Fa=new F,Jd=new F,th=new It;class Xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fa.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),i=this.coplanarPoint(Fa).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Hi,Fs=new F;class so{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,a=new Xn,r=new Xn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],f=i[7],m=i[8],g=i[9],v=i[10],p=i[11],u=i[12],_=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-a,f-c,p-m,x-u).normalize(),n[1].setComponents(l+a,f+c,p+m,x+u).normalize(),n[2].setComponents(l+r,f+d,p+g,x+_).normalize(),n[3].setComponents(l-r,f-d,p-g,x-_).normalize(),n[4].setComponents(l-o,f-h,p-v,x-b).normalize(),e===Mn)n[5].setComponents(l+o,f+h,p+v,x+b).normalize();else if(e===sa)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ra=new F,oa=new F,jo=new ee,ts=new Jl,Bs=new Hi,Ba=new F,Ko=new F;class eh extends me{constructor(t=new ln,e=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,a=e.count;i<a;i++)ra.fromBufferAttribute(e,i-1),oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ra.distanceTo(oa);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=a,t.ray.intersectsSphere(Bs)===!1)return;jo.copy(i).invert(),ts.copy(t.ray).applyMatrix4(jo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const u=d.getX(v),_=d.getX(v+1),b=ks(this,t,ts,l,u,_);b&&e.push(b)}if(this.isLineLoop){const v=d.getX(g-1),p=d.getX(m),u=ks(this,t,ts,l,v,p);u&&e.push(u)}}else{const m=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const u=ks(this,t,ts,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=ks(this,t,ts,l,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ks(s,t,e,n,i,a){const r=s.geometry.attributes.position;if(ra.fromBufferAttribute(r,i),oa.fromBufferAttribute(r,a),e.distanceSqToSegment(ra,oa,Ba,Ko)>n)return;Ba.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ba);if(!(l<t.near||l>t.far))return{distance:l,point:Ko.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Zo=new F,Qo=new F;class nh extends eh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,a=e.count;i<a;i+=2)Zo.fromBufferAttribute(e,i),Qo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zo.distanceTo(Qo);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ei extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dc extends Pe{constructor(t,e,n,i,a,r,o,l,c,d=Ii){if(d!==Ii&&d!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ii&&(n=ei),n===void 0&&d===Bi&&(n=Fi),super(null,i,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ao extends ln{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),c(n),d(),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(a.slice(),3)),this.setAttribute("uv",new we(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new F,x=new F,R=new F;for(let T=0;T<e.length;T+=3)m(e[T+0],b),m(e[T+1],x),m(e[T+2],R),l(b,x,R,_)}function l(_,b,x,R){const T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const E=_.clone().lerp(x,I/T),M=b.clone().lerp(x,I/T),P=T-I;for(let G=0;G<=P;G++)G===0&&I===T?A[I][G]=E:A[I][G]=E.clone().lerp(M,G/P)}for(let I=0;I<T;I++)for(let E=0;E<2*(T-I)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[I][M+1]),f(A[I+1][M]),f(A[I][M])):(f(A[I][M+1]),f(A[I+1][M+1]),f(A[I+1][M]))}}function c(_){const b=new F;for(let x=0;x<a.length;x+=3)b.x=a[x+0],b.y=a[x+1],b.z=a[x+2],b.normalize().multiplyScalar(_),a[x+0]=b.x,a[x+1]=b.y,a[x+2]=b.z}function d(){const _=new F;for(let b=0;b<a.length;b+=3){_.x=a[b+0],_.y=a[b+1],_.z=a[b+2];const x=p(_)/2/Math.PI+.5,R=u(_)/Math.PI+.5;r.push(x,1-R)}g(),h()}function h(){for(let _=0;_<r.length;_+=6){const b=r[_+0],x=r[_+2],R=r[_+4],T=Math.max(b,x,R),A=Math.min(b,x,R);T>.9&&A<.1&&(b<.2&&(r[_+0]+=1),x<.2&&(r[_+2]+=1),R<.2&&(r[_+4]+=1))}}function f(_){a.push(_.x,_.y,_.z)}function m(_,b){const x=_*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const _=new F,b=new F,x=new F,R=new F,T=new Ht,A=new Ht,I=new Ht;for(let E=0,M=0;E<a.length;E+=9,M+=6){_.set(a[E+0],a[E+1],a[E+2]),b.set(a[E+3],a[E+4],a[E+5]),x.set(a[E+6],a[E+7],a[E+8]),T.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),I.set(r[M+4],r[M+5]),R.copy(_).add(b).add(x).divideScalar(3);const P=p(R);v(T,M+0,_,P),v(A,M+2,b,P),v(I,M+4,x,P)}}function v(_,b,x,R){R<0&&_.x===1&&(r[b]=_.x-1),x.x===0&&x.z===0&&(r[b]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.vertices,t.indices,t.radius,t.details)}}const Os=new F,zs=new F,ka=new F,Gs=new je;class ih extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),a=Math.cos(ta*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:u}=Gs;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Gs.getNormal(ka),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const b=(_+1)%3,x=h[_],R=h[b],T=Gs[d[_]],A=Gs[d[b]],I=`${x}_${R}`,E=`${R}_${x}`;E in f&&f[E]?(ka.dot(f[E].normal)<=a&&(m.push(T.x,T.y,T.z),m.push(A.x,A.y,A.z)),f[E]=null):I in f||(f[I]={index0:c[_],index1:c[b],normal:ka.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:p}=f[g];Os.fromBufferAttribute(o,v),zs.fromBufferAttribute(o,p),m.push(Os.x,Os.y,Os.z),m.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new we(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ro extends ao{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class Vi extends ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=t/o,f=e/l,m=[],g=[],v=[],p=[];for(let u=0;u<d;u++){const _=u*f-r;for(let b=0;b<c;b++){const x=b*h-a;g.push(x,-_,0),v.push(0,0,1),p.push(b/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const b=_+c*u,x=_+c*(u+1),R=_+1+c*(u+1),T=_+1+c*u;m.push(b,x,T),m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class oo extends ln{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new F,f=new F,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){const _=[],b=u/n;let x=0;u===0&&r===0?x=.5/e:u===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;h.x=-t*Math.cos(i+T*a)*Math.sin(r+b*o),h.y=t*Math.cos(r+b*o),h.z=t*Math.sin(i+T*a)*Math.sin(r+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(T+x,1-b),_.push(c++)}d.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){const b=d[u][_+1],x=d[u][_],R=d[u+1][_],T=d[u+1][_+1];(u!==0||r>0)&&m.push(b,x,T),(u!==n-1||l<Math.PI)&&m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sh extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Or extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rh extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lo extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class oh extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new ee,Jo=new F,tl=new F;class lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jo),tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tl),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hc extends rc{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ch extends lh{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new ch}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fc extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dh extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=el(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=el();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function el(){return performance.now()}function nl(s,t,e,n){const i=uh(n);switch(e){case Vl:return s*t;case ql:return s*t;case Wl:return s*t*2;case Qr:return s*t/i.components*i.byteLength;case Jr:return s*t/i.components*i.byteLength;case Xl:return s*t*2/i.components*i.byteLength;case to:return s*t*2/i.components*i.byteLength;case $l:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case eo:return s*t*4/i.components*i.byteLength;case js:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fr:case mr:return Math.max(s,16)*Math.max(t,8)/4;case ur:case pr:return Math.max(s,8)*Math.max(t,8)/2;case gr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case br:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Mr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Er:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ar:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ir:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Lr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Js:case Dr:case Ur:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yl:case Nr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fr:case Br:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uh(s){switch(s){case En:case zl:return{byteLength:1,components:1};case hs:case Gl:case fs:return{byteLength:2,components:1};case Kr:case Zr:return{byteLength:2,components:4};case ei:case jr:case hn:return{byteLength:4,components:1};case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pc(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function fh(s){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
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
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mh=`#ifdef USE_BATCHING
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
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,Ch=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bh=`#define PI 3.141592653589793
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
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
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
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,uu=`struct PhysicalMaterial {
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
}`,fu=`
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Su=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qu=`float getShadowMask() {
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
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`#define DISTANCE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,Df=`#define MATCAP
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,zf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:vh,alphatest_fragment:_h,alphatest_pars_fragment:yh,aomap_fragment:xh,aomap_pars_fragment:bh,batching_pars_vertex:Mh,batching_vertex:Sh,begin_vertex:Eh,beginnormal_vertex:Th,bsdfs:wh,iridescence_fragment:Ah,bumpmap_pars_fragment:Ch,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Bh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:zh,displacementmap_vertex:Gh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Vh,colorspace_fragment:$h,colorspace_pars_fragment:qh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:Yh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:ru,envmap_vertex:Kh,fog_vertex:Zh,fog_pars_vertex:Qh,fog_fragment:Jh,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:au,lights_toon_fragment:ou,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:du,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:yu,map_fragment:xu,map_pars_fragment:bu,map_particle_fragment:Mu,map_particle_pars_fragment:Su,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:wu,morphcolor_vertex:Au,morphnormal_vertex:Cu,morphtarget_pars_vertex:Ru,morphtarget_vertex:Pu,normal_fragment_begin:Iu,normal_fragment_maps:Lu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:zu,opaque_fragment:Gu,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:$u,dithering_fragment:qu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Ku,shadowmap_vertex:Zu,shadowmask_pars_fragment:Qu,skinbase_vertex:Ju,skinning_pars_vertex:tf,skinning_vertex:ef,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:af,tonemapping_fragment:rf,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:df,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:vf,cube_vert:_f,cube_frag:yf,depth_vert:xf,depth_frag:bf,distanceRGBA_vert:Mf,distanceRGBA_frag:Sf,equirect_vert:Ef,equirect_frag:Tf,linedashed_vert:wf,linedashed_frag:Af,meshbasic_vert:Cf,meshbasic_frag:Rf,meshlambert_vert:Pf,meshlambert_frag:If,meshmatcap_vert:Lf,meshmatcap_frag:Df,meshnormal_vert:Uf,meshnormal_frag:Nf,meshphong_vert:Ff,meshphong_frag:Bf,meshphysical_vert:kf,meshphysical_frag:Of,meshtoon_vert:zf,meshtoon_frag:Gf,points_vert:Hf,points_frag:Vf,shadow_vert:$f,shadow_frag:qf,sprite_vert:Wf,sprite_frag:Xf},nt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},cn={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};cn.physical={uniforms:Re([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Hs={r:0,b:0,g:0},qn=new on,Yf=new ee;function jf(s,t,e,n,i,a,r){const o=new Et(0);let l=a===!0?0:1,c,d,h=null,f=0,m=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function v(b){let x=!1;const R=g(b);R===null?u(o,l):R&&R.isColor&&(u(R,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===ha)?(d===void 0&&(d=new Ge(new Bn(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Oi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(qn)),d.material.toneMapped=Xt.getTransfer(R.colorSpace)!==Zt,(h!==R||f!==R.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=R,f=R.version,m=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ge(new Vi(2,2),new kn({name:"BackgroundMaterial",uniforms:Oi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(R.colorSpace)!==Zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,m=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,x){b.getRGB(Hs,ac(s)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,r)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:p,dispose:_}}function Kf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let a=i,r=!1;function o(M,P,G,z,$){let Z=!1;const q=h(z,G,P);a!==q&&(a=q,c(a.object)),Z=m(M,z,G,$),Z&&g(M,z,G,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,x(M,P,G,z),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function h(M,P,G){const z=G.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Z=$[P.id];Z===void 0&&(Z={},$[P.id]=Z);let q=Z[z];return q===void 0&&(q=f(l()),Z[z]=q),q}function f(M){const P=[],G=[],z=[];for(let $=0;$<e;$++)P[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,P,G,z){const $=a.attributes,Z=P.attributes;let q=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){const ht=$[V];let yt=Z[V];if(yt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;q++}return a.attributesNum!==q||a.index!==z}function g(M,P,G,z){const $={},Z=P.attributes;let q=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){let ht=Z[V];ht===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),$[V]=yt,q++}a.attributes=$,a.attributesNum=q,a.index=z}function v(){const M=a.newAttributes;for(let P=0,G=M.length;P<G;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const G=a.newAttributes,z=a.enabledAttributes,$=a.attributeDivisors;G[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),$[M]!==P&&(s.vertexAttribDivisor(M,P),$[M]=P)}function _(){const M=a.newAttributes,P=a.enabledAttributes;for(let G=0,z=P.length;G<z;G++)P[G]!==M[G]&&(s.disableVertexAttribArray(G),P[G]=0)}function b(M,P,G,z,$,Z,q){q===!0?s.vertexAttribIPointer(M,P,G,$,Z):s.vertexAttribPointer(M,P,G,z,$,Z)}function x(M,P,G,z){v();const $=z.attributes,Z=G.getAttributes(),q=P.defaultAttributeValues;for(const Q in Z){const V=Z[Q];if(V.location>=0){let at=$[Q];if(at===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const ht=at.normalized,yt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;const Qt=Nt.buffer,X=Nt.type,et=Nt.bytesPerElement,gt=X===s.INT||X===s.UNSIGNED_INT||at.gpuType===jr;if(at.isInterleavedBufferAttribute){const rt=at.data,Tt=rt.stride,Ct=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)u(V.location+Ft,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Ft=0;Ft<V.locationSize;Ft++)b(V.location+Ft,yt/V.locationSize,X,ht,Tt*et,(Ct+yt/V.locationSize*Ft)*et,gt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)u(V.location+rt,at.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let rt=0;rt<V.locationSize;rt++)b(V.location+rt,yt/V.locationSize,X,ht,yt*et,yt/V.locationSize*rt*et,gt)}}else if(q!==void 0){const ht=q[Q];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(V.location,ht);break;case 3:s.vertexAttrib3fv(V.location,ht);break;case 4:s.vertexAttrib4fv(V.location,ht);break;default:s.vertexAttrib1fv(V.location,ht)}}}}_()}function R(){I();for(const M in n){const P=n[M];for(const G in P){const z=P[G];for(const $ in z)d(z[$].object),delete z[$];delete P[G]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const G in P){const z=P[G];for(const $ in z)d(z[$].object),delete z[$];delete P[G]}delete n[M.id]}function A(M){for(const P in n){const G=n[P];if(G[M.id]===void 0)continue;const z=G[M.id];for(const $ in z)d(z[$].object),delete z[$];delete G[M.id]}}function I(){E(),r=!0,a!==i&&(a=i,c(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Zf(s,t,e){let n;function i(c){n=c}function a(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function r(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];e.update(m,n,1)}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qf(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==an&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hn&&!I)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function Jf(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new Xn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=s.get(h);if(!i||g===null||g.length===0||a&&!p)a?d(null):c();else{const _=a?0:n,b=_*4;let x=u.clippingState||null;l.value=x,x=d(g,f,b,m);for(let R=0;R!==b;++R)x[R]=e[R];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,x=m;b!==v;++b,x+=4)r.copy(h[b]).applyMatrix4(_,o),r.normal.toArray(p,x),p[x+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function tp(s){let t=new WeakMap;function e(r,o){return o===lr?r.mapping=Ui:o===cr&&(r.mapping=Ni),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===lr||o===cr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const Ti=4,il=[.125,.215,.35,.446,.526,.582],Kn=20,za=new hc,sl=new Et;let Ga=null,Ha=0,Va=0,$a=!1;const Yn=(1+Math.sqrt(5))/2,bi=1/Yn,al=[new F(-Yn,bi,0),new F(Yn,bi,0),new F(-bi,0,Yn),new F(bi,0,Yn),new F(0,Yn,-bi),new F(0,Yn,bi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Ha,Va),this._renderer.xr.enabled=$a,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:fs,format:an,colorSpace:ki,depthBuffer:!1},i=ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(a)),this._blurMaterial=np(a,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,i){const o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(sl),d.toneMapping=Fn,d.autoClear=!1;const m=new nc({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new Ge(new Bn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(sl),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const b=this._cubeSize;Vs(i,_*b,u>2?b:0,b,b),d.setRenderTarget(i),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ui||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Ge(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=al[(i-a-1)%al.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ge(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),v=a/g,p=isFinite(a)?1+Math.floor(d*v):Kn;p>Kn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const u=[];let _=0;for(let A=0;A<Kn;++A){const I=A/v,E=Math.exp(-I*I/2);u.push(E),A===0?_+=E:A<p&&(_+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const x=this._sizeLods[i],R=3*x*(i>b-Ti?i-b+Ti:0),T=4*(this._cubeSize-x);Vs(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(h,za)}}function ep(s){const t=[],e=[],n=[];let i=s;const a=s-Ti+1+il.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-Ti?l=il[r-s+Ti-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,p=2,u=1,_=new Float32Array(v*g*m),b=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,I=T>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(E,v*g*T),b.set(f,p*g*T);const M=[T,T,T,T,T,T];x.set(M,u*g*T)}const R=new ln;R.setAttribute("position",new rn(_,v)),R.setAttribute("uv",new rn(b,p)),R.setAttribute("faceIndex",new rn(x,u)),t.push(R),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ol(s,t,e){const n=new ni(s,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function np(s,t,e){const n=new Float32Array(Kn),i=new F(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:co(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ll(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cl(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function ip(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lr||l===cr,d=l===Ui||l===Ni;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new rl(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&i(m)?(e===null&&(e=new rl(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function sp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Si("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ap(s,t,e,n){const i={},a=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const m=a.get(f);m&&(t.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let b=0,x=_.length;b<x;b+=3){const R=_[b+0],T=_[b+1],A=_[b+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,x=_.length/3-1;b<x;b+=3){const R=b+0,T=b+1,A=b+2;f.push(R,T,T,A,A,R)}}else return;const p=new(Kl(f)?sc:ic)(f,1);p.version=v;const u=a.get(h);u&&t.remove(u),a.set(h,p)}function d(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function rp(s,t,e){let n;function i(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,m){s.drawElements(n,m,a,f*r),e.update(m,n,1)}function c(f,m,g){g!==0&&(s.drawElementsInstanced(n,m,a,f*r,g),e.update(m,n,g))}function d(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function h(f,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/r,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=m[_]*v[_];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function op(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lp(s,t,e){const n=new WeakMap,i=new ce;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=o.attributes.position.count*b,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*R*4*h),A=new Ql(T,x,R,h);A.type=hn,A.needsUpdate=!0;const I=b*4;for(let M=0;M<h;M++){const P=p[M],G=u[M],z=_[M],$=x*R*4*M;for(let Z=0;Z<P.count;Z++){const q=Z*I;m===!0&&(i.fromBufferAttribute(P,Z),T[$+q+0]=i.x,T[$+q+1]=i.y,T[$+q+2]=i.z,T[$+q+3]=0),g===!0&&(i.fromBufferAttribute(G,Z),T[$+q+4]=i.x,T[$+q+5]=i.y,T[$+q+6]=i.z,T[$+q+7]=0),v===!0&&(i.fromBufferAttribute(z,Z),T[$+q+8]=i.x,T[$+q+9]=i.y,T[$+q+10]=i.z,T[$+q+11]=z.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new Ht(x,R)},n.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function cp(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const mc=new Pe,dl=new dc(1,1),gc=new Ql,vc=new Dd,_c=new oc,hl=[],ul=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function $i(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=hl[i];if(a===void 0&&(a=new Float32Array(i),hl[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ua(s,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function pp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;ml.set(n),s.uniformMatrix2fv(this.addr,!1,ml),ve(e,n)}}function mp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;pl.set(n),s.uniformMatrix3fv(this.addr,!1,pl),ve(e,n)}}function gp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;fl.set(n),s.uniformMatrix4fv(this.addr,!1,fl),ve(e,n)}}function vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function Tp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(dl.compareFunction=jl,a=dl):a=mc,e.setTexture2D(t||a,i)}function wp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vc,i)}function Ap(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_c,i)}function Cp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gc,i)}function Rp(s){switch(s){case 5126:return dp;case 35664:return hp;case 35665:return up;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return vp;case 35667:case 35671:return _p;case 35668:case 35672:return yp;case 35669:case 35673:return xp;case 5125:return bp;case 36294:return Mp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}function Pp(s,t){s.uniform1fv(this.addr,t)}function Ip(s,t){const e=$i(t,this.size,2);s.uniform2fv(this.addr,e)}function Lp(s,t){const e=$i(t,this.size,3);s.uniform3fv(this.addr,e)}function Dp(s,t){const e=$i(t,this.size,4);s.uniform4fv(this.addr,e)}function Up(s,t){const e=$i(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Np(s,t){const e=$i(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fp(s,t){const e=$i(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bp(s,t){s.uniform1iv(this.addr,t)}function kp(s,t){s.uniform2iv(this.addr,t)}function Op(s,t){s.uniform3iv(this.addr,t)}function zp(s,t){s.uniform4iv(this.addr,t)}function Gp(s,t){s.uniform1uiv(this.addr,t)}function Hp(s,t){s.uniform2uiv(this.addr,t)}function Vp(s,t){s.uniform3uiv(this.addr,t)}function $p(s,t){s.uniform4uiv(this.addr,t)}function qp(s,t,e){const n=this.cache,i=t.length,a=ua(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),ve(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||mc,a[r])}function Wp(s,t,e){const n=this.cache,i=t.length,a=ua(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),ve(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||vc,a[r])}function Xp(s,t,e){const n=this.cache,i=t.length,a=ua(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),ve(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||_c,a[r])}function Yp(s,t,e){const n=this.cache,i=t.length,a=ua(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),ve(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||gc,a[r])}function jp(s){switch(s){case 5126:return Pp;case 35664:return Ip;case 35665:return Lp;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Op;case 35669:case 35673:return zp;case 5125:return Gp;case 36294:return Hp;case 36295:return Vp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return Yp}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rp(e.type)}}class Zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}}class Qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function gl(s,t){s.seq.push(t),s.map[t.id]=t}function Jp(s,t,e){const n=s.name,i=n.length;for(qa.lastIndex=0;;){const a=qa.exec(n),r=qa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){gl(e,c===void 0?new Kp(o,s,t):new Zp(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new Qp(o),gl(e,h)),e=h}}}class ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);Jp(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function vl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tm=37297;let em=0;function nm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const _l=new It;function im(s){Xt._getMatrix(_l,Xt.workingColorSpace,s);const t=`mat3( ${_l.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case ia:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+nm(s.getShaderSource(t),r)}else return i}function sm(s,t){const e=im(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function am(s,t){let e;switch(t){case rd:e="Linear";break;case od:e="Reinhard";break;case ld:e="Cineon";break;case kl:e="ACESFilmic";break;case dd:e="AgX";break;case hd:e="Neutral";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new F;function rm(){Xt.getLuminanceCoefficients($s);const s=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function lm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function rs(s){return s!==""}function xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zr(s){return s.replace(dm,um)}const hm=new Map;function um(s,t){let e=Dt[t];if(e===void 0){const n=hm.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zr(e)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(s){return s.replace(fm,pm)}function pm(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Sl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function mm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ni:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function _m(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yr:t="ENVMAP_BLENDING_MULTIPLY";break;case sd:t="ENVMAP_BLENDING_MIX";break;case ad:t="ENVMAP_BLENDING_ADD";break}return t}function ym(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xm(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=mm(e),c=gm(e),d=vm(e),h=_m(e),f=ym(e),m=om(e),g=lm(a),v=i.createProgram();let p,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),u.length>0&&(u+=`
`)):(p=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),u=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,sm("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),r=zr(r),r=xl(r,e),r=bl(r,e),o=zr(o),o=xl(o,e),o=bl(o,e),r=Ml(r),o=Ml(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=_+p+r,x=_+u+o,R=vl(i,i.VERTEX_SHADER,b),T=vl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,R),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(P){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(R).trim(),$=i.getShaderInfoLog(T).trim();let Z=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,T);else{const Q=yl(i,R,"vertex"),V=yl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Q+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:$,prefix:u}})}i.deleteShader(R),i.deleteShader(T),I=new ea(i,v),E=cm(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,tm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=em++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let bm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Em(s,t,e,n,i,a,r){const o=new tc,l=new Mm,c=new Set,d=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,P,G,z){const $=G.fog,Z=z.geometry,q=E.isMeshStandardMaterial?G.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),V=Q&&Q.mapping===ha?Q.image.height:null,at=g[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Nt=0;Z.morphAttributes.position!==void 0&&(Nt=1),Z.morphAttributes.normal!==void 0&&(Nt=2),Z.morphAttributes.color!==void 0&&(Nt=3);let Qt,X,et,gt;if(at){const Kt=cn[at];Qt=Kt.vertexShader,X=Kt.fragmentShader}else Qt=E.vertexShader,X=E.fragmentShader,l.update(E),et=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const rt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ct=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,ae=!!E.map,Vt=!!E.matcap,de=!!Q,L=!!E.aoMap,Ve=!!E.lightMap,Ot=!!E.bumpMap,zt=!!E.normalMap,xt=!!E.displacementMap,ne=!!E.emissiveMap,_t=!!E.metalnessMap,w=!!E.roughnessMap,y=E.anisotropy>0,B=E.clearcoat>0,Y=E.dispersion>0,K=E.iridescence>0,W=E.sheen>0,vt=E.transmission>0,ot=y&&!!E.anisotropyMap,ut=B&&!!E.clearcoatMap,$t=B&&!!E.clearcoatNormalMap,tt=B&&!!E.clearcoatRoughnessMap,ft=K&&!!E.iridescenceMap,St=K&&!!E.iridescenceThicknessMap,wt=W&&!!E.sheenColorMap,pt=W&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Lt=!!E.specularColorMap,te=!!E.specularIntensityMap,D=vt&&!!E.transmissionMap,it=vt&&!!E.thicknessMap,H=!!E.gradientMap,j=!!E.alphaMap,ct=E.alphaTest>0,lt=!!E.alphaHash,Pt=!!E.extensions;let re=Fn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(re=s.toneMapping);const xe={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:X,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&z.instanceColor!==null,instancingMorph:Ct&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ki,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:Vt,envMap:de,envMapMode:de&&Q.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Ve,bumpMap:Ot,normalMap:zt,displacementMap:f&&xt,emissiveMap:ne,normalMapObjectSpace:zt&&E.normalMapType===md,normalMapTangentSpace:zt&&E.normalMapType===no,metalnessMap:_t,roughnessMap:w,anisotropy:y,anisotropyMap:ot,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:$t,clearcoatRoughnessMap:tt,dispersion:Y,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:St,sheen:W,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:Gt,specularColorMap:Lt,specularIntensityMap:te,transmission:vt,transmissionMap:D,thicknessMap:it,gradientMap:H,opaque:E.transparent===!1&&E.blending===Pi&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:lt,combine:E.combine,mapUv:ae&&v(E.map.channel),aoMapUv:L&&v(E.aoMap.channel),lightMapUv:Ve&&v(E.lightMap.channel),bumpMapUv:Ot&&v(E.bumpMap.channel),normalMapUv:zt&&v(E.normalMap.channel),displacementMapUv:xt&&v(E.displacementMap.channel),emissiveMapUv:ne&&v(E.emissiveMap.channel),metalnessMapUv:_t&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:ot&&v(E.anisotropyMap.channel),clearcoatMapUv:ut&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:$t&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:St&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(E.sheenRoughnessMap.channel),specularMapUv:Gt&&v(E.specularMap.channel),specularColorMapUv:Lt&&v(E.specularColorMap.channel),specularIntensityMapUv:te&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:it&&v(E.thicknessMap.channel),alphaMapUv:j&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(zt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ae||j),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Zt,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(_(M,E),b(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const M=g[E.type];let P;if(M){const G=cn[M];P=qd.clone(G.uniforms)}else P=E.uniforms;return P}function R(E,M){let P;for(let G=0,z=d.length;G<z;G++){const $=d[G];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new xm(s,M,E,a),d.push(P)),P}function T(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:I}}function Tm(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function wm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function El(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tl(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(h,f,m,g,v,p){let u=s[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},s[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=p),t++,u}function o(h,f,m,g,v,p){const u=r(h,f,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function l(h,f,m,g,v,p){const u=r(h,f,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||wm),n.length>1&&n.sort(f||El),i.length>1&&i.sort(f||El)}function d(){for(let h=t,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:d,sort:c}}function Am(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Tl,s.set(n,[r])):i>=a.length?(r=new Tl,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Et};break;case"SpotLight":e={position:new F,direction:new F,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pm=0;function Im(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lm(s){const t=new Cm,e=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,a=new ee,r=new ee;function o(c){let d=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,_=0,b=0,x=0,R=0,T=0,A=0;c.sort(Im);for(let E=0,M=c.length;E<M;E++){const P=c[E],G=P.color,z=P.intensity,$=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*z,h+=G.g*z,f+=G.b*z;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],z);A++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,_++}n.directional[m]=q,m++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(G).multiplyScalar(z),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Z,x++}v++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(G).multiplyScalar(z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=q,p++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(z),q.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[u]=q,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==_||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=_,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=A,n.version=Pm++)}function l(c,d){let h=0,f=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const b=c[u];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(b.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),r.identity(),a.copy(b.matrixWorld),a.premultiply(p),r.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function wl(s){const t=new Lm(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function a(d){e.push(d)}function r(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Dm(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new wl(s),t.set(i,[o])):a>=r.length?(o=new wl(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
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
}`;function Fm(s,t,e){let n=new so;const i=new Ht,a=new Ht,r=new ce,o=new ah({depthPacking:pd}),l=new rh,c={},d=e.maxTextureSize,h={[un]:Ue,[Ue]:un,[sn]:sn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Um,fragmentShader:Nm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let u=this.type;this.render=function(T,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Nn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==yn&&this.type===yn,$=u===yn&&this.type!==yn;for(let Z=0,q=T.length;Z<q;Z++){const Q=T[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const at=V.getFrameExtents();if(i.multiply(at),a.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/at.x),i.x=a.x*at.x,V.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/at.y),i.y=a.y*at.y,V.mapSize.y=a.y)),V.map===null||z===!0||$===!0){const yt=this.type!==yn?{minFilter:He,magFilter:He}:{};V.map!==null&&V.map.dispose(),V.map=new ni(i.x,i.y,yt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ht=V.getViewportCount();for(let yt=0;yt<ht;yt++){const Nt=V.getViewport(yt);r.set(a.x*Nt.x,a.y*Nt.y,a.x*Nt.z,a.y*Nt.w),G.viewport(r),V.updateMatrices(Q,yt),n=V.getFrustum(),x(A,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&_(V,I),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(E,M,P)};function _(T,A){const I=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,I,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,I,m,v,null)}function b(T,A,I,E){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,z=A.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Z=$[z];Z===void 0&&(Z=M.clone(),$[z]=Z,A.addEventListener("dispose",R)),M=Z}if(M.visible=A.visible,M.wireframe=A.wireframe,E===yn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=I}return M}function x(T,A,I,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const z=t.update(T),$=T.material;if(Array.isArray($)){const Z=z.groups;for(let q=0,Q=Z.length;q<Q;q++){const V=Z[q],at=$[V.materialIndex];if(at&&at.visible){const ht=b(T,at,E,M);T.onBeforeShadow(s,T,A,I,z,ht,V),s.renderBufferDirect(I,null,z,ht,T,V),T.onAfterShadow(s,T,A,I,z,ht,V)}}}else if($.visible){const Z=b(T,$,E,M);T.onBeforeShadow(s,T,A,I,z,Z,null),s.renderBufferDirect(I,null,z,Z,T,null),T.onAfterShadow(s,T,A,I,z,Z,null)}}const G=T.children;for(let z=0,$=G.length;z<$;z++)x(G[z],A,I,E,M)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Bm={[er]:nr,[ir]:rr,[sr]:or,[Di]:ar,[nr]:er,[rr]:ir,[or]:sr,[ar]:Di};function km(s,t){function e(){let D=!1;const it=new ce;let H=null;const j=new ce(0,0,0,0);return{setMask:function(ct){H!==ct&&!D&&(s.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){D=ct},setClear:function(ct,lt,Pt,re,xe){xe===!0&&(ct*=re,lt*=re,Pt*=re),it.set(ct,lt,Pt,re),j.equals(it)===!1&&(s.clearColor(ct,lt,Pt,re),j.copy(it))},reset:function(){D=!1,H=null,j.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,H=null,j=null,ct=null;return{setReversed:function(lt){if(it!==lt){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const re=ct;ct=null,this.setClear(re)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(lt){H!==lt&&!D&&(s.depthMask(lt),H=lt)},setFunc:function(lt){if(it&&(lt=Bm[lt]),j!==lt){switch(lt){case er:s.depthFunc(s.NEVER);break;case nr:s.depthFunc(s.ALWAYS);break;case ir:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case sr:s.depthFunc(s.EQUAL);break;case ar:s.depthFunc(s.GEQUAL);break;case rr:s.depthFunc(s.GREATER);break;case or:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),s.clearDepth(lt),ct=lt)},reset:function(){D=!1,H=null,j=null,ct=null,it=!1}}}function i(){let D=!1,it=null,H=null,j=null,ct=null,lt=null,Pt=null,re=null,xe=null;return{setTest:function(Kt){D||(Kt?rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!D&&(s.stencilMask(Kt),it=Kt)},setFunc:function(Kt,Ze,fn){(H!==Kt||j!==Ze||ct!==fn)&&(s.stencilFunc(Kt,Ze,fn),H=Kt,j=Ze,ct=fn)},setOp:function(Kt,Ze,fn){(lt!==Kt||Pt!==Ze||re!==fn)&&(s.stencilOp(Kt,Ze,fn),lt=Kt,Pt=Ze,re=fn)},setLocked:function(Kt){D=Kt},setClear:function(Kt){xe!==Kt&&(s.clearStencil(Kt),xe=Kt)},reset:function(){D=!1,it=null,H=null,j=null,ct=null,lt=null,Pt=null,re=null,xe=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,_=null,b=null,x=null,R=null,T=null,A=new Et(0,0,0),I=0,E=!1,M=null,P=null,G=null,z=null,$=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Q>=2);let at=null,ht={};const yt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),Qt=new ce().fromArray(yt),X=new ce().fromArray(Nt);function et(D,it,H,j){const ct=new Uint8Array(4),lt=s.createTexture();s.bindTexture(D,lt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<H;Pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(it+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return lt}const gt={};gt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),r.setFunc(Di),Ot(!1),zt(Mo),rt(s.CULL_FACE),L(Nn);function rt(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function Tt(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function Ct(D,it){return h[D]!==it?(s.bindFramebuffer(D,it),h[D]=it,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=it),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(D,it){let H=m,j=!1;if(D){H=f.get(it),H===void 0&&(H=[],f.set(it,H));const ct=D.textures;if(H.length!==ct.length||H[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Pt=ct.length;lt<Pt;lt++)H[lt]=s.COLOR_ATTACHMENT0+lt;H.length=ct.length,j=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,j=!0);j&&s.drawBuffers(H)}function ae(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Vt={[jn]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};Vt[Vc]=s.MIN,Vt[$c]=s.MAX;const de={[qc]:s.ZERO,[Wc]:s.ONE,[Xc]:s.SRC_COLOR,[Ja]:s.SRC_ALPHA,[Jc]:s.SRC_ALPHA_SATURATE,[Zc]:s.DST_COLOR,[jc]:s.DST_ALPHA,[Yc]:s.ONE_MINUS_SRC_COLOR,[tr]:s.ONE_MINUS_SRC_ALPHA,[Qc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[td]:s.CONSTANT_COLOR,[ed]:s.ONE_MINUS_CONSTANT_COLOR,[nd]:s.CONSTANT_ALPHA,[id]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,it,H,j,ct,lt,Pt,re,xe,Kt){if(D===Nn){v===!0&&(Tt(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),D!==zc){if(D!==p||Kt!==E){if((u!==jn||x!==jn)&&(s.blendEquation(s.FUNC_ADD),u=jn,x=jn),Kt)switch(D){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case Eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case To:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case To:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,b=null,R=null,T=null,A.set(0,0,0),I=0,p=D,E=Kt}return}ct=ct||it,lt=lt||H,Pt=Pt||j,(it!==u||ct!==x)&&(s.blendEquationSeparate(Vt[it],Vt[ct]),u=it,x=ct),(H!==_||j!==b||lt!==R||Pt!==T)&&(s.blendFuncSeparate(de[H],de[j],de[lt],de[Pt]),_=H,b=j,R=lt,T=Pt),(re.equals(A)===!1||xe!==I)&&(s.blendColor(re.r,re.g,re.b,xe),A.copy(re),I=xe),p=D,E=!1}function Ve(D,it){D.side===sn?Tt(s.CULL_FACE):rt(s.CULL_FACE);let H=D.side===Ue;it&&(H=!H),Ot(H),D.blending===Pi&&D.transparent===!1?L(Nn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function zt(D){D!==Bc?(rt(s.CULL_FACE),D!==P&&(D===Mo?s.cullFace(s.BACK):D===kc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=D}function xt(D){D!==G&&(q&&s.lineWidth(D),G=D)}function ne(D,it,H){D?(rt(s.POLYGON_OFFSET_FILL),(z!==it||$!==H)&&(s.polygonOffset(it,H),z=it,$=H)):Tt(s.POLYGON_OFFSET_FILL)}function _t(D){D?rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+Z-1),at!==D&&(s.activeTexture(D),at=D)}function y(D,it,H){H===void 0&&(at===null?H=s.TEXTURE0+Z-1:H=at);let j=ht[H];j===void 0&&(j={type:void 0,texture:void 0},ht[H]=j),(j.type!==D||j.texture!==it)&&(at!==H&&(s.activeTexture(H),at=H),s.bindTexture(D,it||gt[D]),j.type=D,j.texture=it)}function B(){const D=ht[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(D){Qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function pt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Gt(D,it){let H=c.get(it);H===void 0&&(H=new WeakMap,c.set(it,H));let j=H.get(D);j===void 0&&(j=s.getUniformBlockIndex(it,D.name),H.set(D,j))}function Lt(D,it){const j=c.get(it).get(D);l.get(it)!==j&&(s.uniformBlockBinding(it,j,D.__bindingPointIndex),l.set(it,j))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},at=null,ht={},h={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,_=null,b=null,x=null,R=null,T=null,A=new Et(0,0,0),I=0,E=!1,M=null,P=null,G=null,z=null,$=null,Qt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Ct,drawBuffers:Ft,useProgram:ae,setBlending:L,setMaterial:Ve,setFlipSided:Ot,setCullFace:zt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:_t,activeTexture:w,bindTexture:y,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ft,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Lt,texStorage2D:$t,texStorage3D:tt,texSubImage2D:W,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:wt,viewport:pt,reset:te}}function Om(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return m?new OffscreenCanvas(w,y):aa("canvas")}function v(w,y,B){let Y=1;const K=_t(w);if((K.width>B||K.height>B)&&(Y=B/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(Y*K.width),vt=Math.floor(Y*K.height);h===void 0&&(h=g(W,vt));const ot=y?g(W,vt):h;return ot.width=W,ot.height=vt,ot.getContext("2d").drawImage(w,0,0,W,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+vt+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function u(w){s.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,y,B,Y,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=y;if(y===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),y===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),y===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),y===s.RGBA){const vt=K?ia:Xt.getTransfer(Y);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=vt===Zt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(w,y){let B;return w?y===null||y===ei||y===Fi?B=s.DEPTH24_STENCIL8:y===hn?B=s.DEPTH32F_STENCIL8:y===hs&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Fi?B=s.DEPTH_COMPONENT24:y===hn?B=s.DEPTH_COMPONENT32F:y===hs&&(B=s.DEPTH_COMPONENT16),B}function R(w,y){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&d.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),M(y)}function I(w){const y=n.get(w);if(y.__webglInit===void 0)return;const B=w.source,Y=f.get(B);if(Y){const K=Y[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(Y).length===0&&f.delete(B)}n.remove(w)}function E(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const B=w.source,Y=f.get(B);delete Y[y.__cacheKey],r.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let K=0;K<y.__webglFramebuffer[Y].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[Y][K]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,K=B.length;Y<K;Y++){const W=n.get(B[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(B[Y])}n.remove(w)}let P=0;function G(){P=0}function z(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function $(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function Z(w,y){const B=n.get(w);if(w.isVideoTexture&&xt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,w,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function q(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){X(B,w,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function Q(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){X(B,w,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function V(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){et(B,w,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const at={[dr]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},ht={[He]:s.NEAREST,[ud]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[ma]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},yt={[gd]:s.NEVER,[Md]:s.ALWAYS,[vd]:s.LESS,[jl]:s.LEQUAL,[_d]:s.EQUAL,[bd]:s.GEQUAL,[yd]:s.GREATER,[xd]:s.NOTEQUAL};function Nt(w,y){if(y.type===hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===ma||y.magFilter===_s||y.magFilter===Jn||y.minFilter===dn||y.minFilter===ma||y.minFilter===_s||y.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,at[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,at[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,at[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ht[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===He||y.minFilter!==_s&&y.minFilter!==Jn||y.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const Y=y.source;let K=f.get(Y);K===void 0&&(K={},f.set(Y,K));const W=$(y);if(W!==w.__cacheKey){K[W]===void 0&&(K[W]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),K[W].usedTimes++;const vt=K[w.__cacheKey];vt!==void 0&&(K[w.__cacheKey].usedTimes--,vt.usedTimes===0&&E(y)),w.__cacheKey=W,w.__webglTexture=K[W].texture}return B}function X(w,y,B){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);const K=Qt(w,y),W=y.source;e.bindTexture(Y,w.__webglTexture,s.TEXTURE0+B);const vt=n.get(W);if(W.version!==vt.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const ot=Xt.getPrimaries(Xt.workingColorSpace),ut=y.colorSpace===Dn?null:Xt.getPrimaries(y.colorSpace),$t=y.colorSpace===Dn||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=v(y.image,!1,i.maxTextureSize);tt=ne(y,tt);const ft=a.convert(y.format,y.colorSpace),St=a.convert(y.type);let wt=b(y.internalFormat,ft,St,y.colorSpace,y.isVideoTexture);Nt(Y,y);let pt;const Gt=y.mipmaps,Lt=y.isVideoTexture!==!0,te=vt.__version===void 0||K===!0,D=W.dataReady,it=R(y,tt);if(y.isDepthTexture)wt=x(y.format===Bi,y.type),te&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,ft,St,null));else if(y.isDataTexture)if(Gt.length>0){Lt&&te&&e.texStorage2D(s.TEXTURE_2D,it,wt,Gt[0].width,Gt[0].height);for(let H=0,j=Gt.length;H<j;H++)pt=Gt[H],Lt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(s.TEXTURE_2D,H,wt,pt.width,pt.height,0,ft,St,pt.data);y.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(s.TEXTURE_2D,it,wt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,St,tt.data)):e.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,ft,St,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,wt,Gt[0].width,Gt[0].height,tt.depth);for(let H=0,j=Gt.length;H<j;H++)if(pt=Gt[H],y.format!==an)if(ft!==null)if(Lt){if(D)if(y.layerUpdates.size>0){const ct=nl(pt.width,pt.height,y.format,y.type);for(const lt of y.layerUpdates){const Pt=pt.data.subarray(lt*ct/pt.data.BYTES_PER_ELEMENT,(lt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,lt,pt.width,pt.height,1,ft,Pt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,wt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,tt.depth,ft,St,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,wt,pt.width,pt.height,tt.depth,0,ft,St,pt.data)}else{Lt&&te&&e.texStorage2D(s.TEXTURE_2D,it,wt,Gt[0].width,Gt[0].height);for(let H=0,j=Gt.length;H<j;H++)pt=Gt[H],y.format!==an?ft!==null?Lt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(s.TEXTURE_2D,H,wt,pt.width,pt.height,0,ft,St,pt.data)}else if(y.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,wt,tt.width,tt.height,tt.depth),D)if(y.layerUpdates.size>0){const H=nl(tt.width,tt.height,y.format,y.type);for(const j of y.layerUpdates){const ct=tt.data.subarray(j*H/tt.data.BYTES_PER_ELEMENT,(j+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ft,St,ct)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,St,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,ft,St,tt.data);else if(y.isData3DTexture)Lt?(te&&e.texStorage3D(s.TEXTURE_3D,it,wt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,St,tt.data)):e.texImage3D(s.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,ft,St,tt.data);else if(y.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(s.TEXTURE_2D,it,wt,tt.width,tt.height);else{let H=tt.width,j=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(s.TEXTURE_2D,ct,wt,H,j,0,ft,St,null),H>>=1,j>>=1}}else if(Gt.length>0){if(Lt&&te){const H=_t(Gt[0]);e.texStorage2D(s.TEXTURE_2D,it,wt,H.width,H.height)}for(let H=0,j=Gt.length;H<j;H++)pt=Gt[H],Lt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ft,St,pt):e.texImage2D(s.TEXTURE_2D,H,wt,ft,St,pt);y.generateMipmaps=!1}else if(Lt){if(te){const H=_t(tt);e.texStorage2D(s.TEXTURE_2D,it,wt,H.width,H.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,St,tt)}else e.texImage2D(s.TEXTURE_2D,0,wt,ft,St,tt);p(y)&&u(Y),vt.__version=W.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function et(w,y,B){if(y.image.length!==6)return;const Y=Qt(w,y),K=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const W=n.get(K);if(K.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+B);const vt=Xt.getPrimaries(Xt.workingColorSpace),ot=y.colorSpace===Dn?null:Xt.getPrimaries(y.colorSpace),ut=y.colorSpace===Dn||vt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!$t&&!tt?ft[j]=v(y.image[j],!0,i.maxCubemapSize):ft[j]=tt?y.image[j].image:y.image[j],ft[j]=ne(y,ft[j]);const St=ft[0],wt=a.convert(y.format,y.colorSpace),pt=a.convert(y.type),Gt=b(y.internalFormat,wt,pt,y.colorSpace),Lt=y.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,D=K.dataReady;let it=R(y,St);Nt(s.TEXTURE_CUBE_MAP,y);let H;if($t){Lt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Gt,St.width,St.height);for(let j=0;j<6;j++){H=ft[j].mipmaps;for(let ct=0;ct<H.length;ct++){const lt=H[ct];y.format!==an?wt!==null?Lt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,lt.width,lt.height,wt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,lt.width,lt.height,wt,pt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Gt,lt.width,lt.height,0,wt,pt,lt.data)}}}else{if(H=y.mipmaps,Lt&&te){H.length>0&&it++;const j=_t(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,wt,pt,ft[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,ft[j].width,ft[j].height,0,wt,pt,ft[j].data);for(let ct=0;ct<H.length;ct++){const Pt=H[ct].image[j].image;Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Pt.width,Pt.height,wt,pt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Gt,Pt.width,Pt.height,0,wt,pt,Pt.data)}}else{Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,pt,ft[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,wt,pt,ft[j]);for(let ct=0;ct<H.length;ct++){const lt=H[ct];Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,wt,pt,lt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Gt,wt,pt,lt.image[j])}}}p(y)&&u(s.TEXTURE_CUBE_MAP),W.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function gt(w,y,B,Y,K,W){const vt=a.convert(B.format,B.colorSpace),ot=a.convert(B.type),ut=b(B.internalFormat,vt,ot,B.colorSpace),$t=n.get(y),tt=n.get(B);if(tt.__renderTarget=y,!$t.__hasExternalTextures){const ft=Math.max(1,y.width>>W),St=Math.max(1,y.height>>W);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,W,ut,ft,St,y.depth,0,vt,ot,null):e.texImage2D(K,W,ut,ft,St,0,vt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),zt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,K,tt.__webglTexture,0,Ot(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,K,tt.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(w,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const Y=y.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=x(y.stencilBuffer,K),vt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Ot(y);zt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,W,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,W,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,W,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,w)}else{const Y=y.textures;for(let K=0;K<Y.length;K++){const W=Y[K],vt=a.convert(W.format,W.colorSpace),ot=a.convert(W.type),ut=b(W.internalFormat,vt,ot,W.colorSpace),$t=Ot(y);B&&zt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ut,y.width,y.height):zt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ut,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ut,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const K=Y.__webglTexture,W=Ot(y);if(y.depthTexture.format===Ii)zt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(y.depthTexture.format===Bi)zt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ct(w){const y=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Y}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Tt(y.__webglFramebuffer,w)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[Y],w,!1);else{const K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(w,y,B){const Y=n.get(w);y!==void 0&&gt(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ct(w)}function ae(w){const y=w.texture,B=n.get(w),Y=n.get(y);w.addEventListener("dispose",A);const K=w.textures,W=w.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,r.memory.textures++),W){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ut=0;ut<y.mipmaps.length;ut++)B.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else B.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)B.__webglFramebuffer[ot]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ot=0,ut=K.length;ot<ut;ot++){const $t=n.get(K[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),r.memory.textures++)}if(w.samples>0&&zt(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const ut=K[ot];B.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const $t=a.convert(ut.format,ut.colorSpace),tt=a.convert(ut.type),ft=b(ut.internalFormat,$t,tt,ut.colorSpace,w.isXRRenderTarget===!0),St=Ot(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,ft,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)gt(B.__webglFramebuffer[ot][ut],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else gt(B.__webglFramebuffer[ot],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(y)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,ut=K.length;ot<ut;ot++){const $t=K[ot],tt=n.get($t);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Nt(s.TEXTURE_2D,$t),gt(B.__webglFramebuffer,w,$t,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),p($t)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Nt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)gt(B.__webglFramebuffer[ut],w,y,s.COLOR_ATTACHMENT0,ot,ut);else gt(B.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,ot,0);p(y)&&u(ot),e.unbindTexture()}w.depthBuffer&&Ct(w)}function Vt(w){const y=w.textures;for(let B=0,Y=y.length;B<Y;B++){const K=y[B];if(p(K)){const W=_(w),vt=n.get(K).__webglTexture;e.bindTexture(W,vt),u(W),e.unbindTexture()}}}const de=[],L=[];function Ve(w){if(w.samples>0){if(zt(w)===!1){const y=w.textures,B=w.width,Y=w.height;let K=s.COLOR_BUFFER_BIT;const W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),ot=y.length>1;if(ot)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const $t=n.get(y[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,K,s.NEAREST),l===!0&&(de.length=0,L.length=0,de.push(s.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(de.push(W),L.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const $t=n.get(y[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ot(w){return Math.min(i.maxSamples,w.samples)}function zt(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(w){const y=r.render.frame;d.get(w)!==y&&(d.set(w,y),w.update())}function ne(w,y){const B=w.colorSpace,Y=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ki&&B!==Dn&&(Xt.getTransfer(B)===Zt?(Y!==an||K!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=zt}function zm(s,t){function e(n,i=Dn){let a;const r=Xt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Kr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return s.BYTE;if(n===Gl)return s.SHORT;if(n===hs)return s.UNSIGNED_SHORT;if(n===jr)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===fs)return s.HALF_FLOAT;if(n===Vl)return s.ALPHA;if(n===$l)return s.RGB;if(n===an)return s.RGBA;if(n===ql)return s.LUMINANCE;if(n===Wl)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Bi)return s.DEPTH_STENCIL;if(n===Qr)return s.RED;if(n===Jr)return s.RED_INTEGER;if(n===Xl)return s.RG;if(n===to)return s.RG_INTEGER;if(n===eo)return s.RGBA_INTEGER;if(n===js||n===Ks||n===Zs||n===Qs)if(r===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ur||n===fr||n===pr||n===mr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ur)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===vr||n===_r)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===gr||n===vr)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===_r)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yr||n===xr||n===br||n===Mr||n===Sr||n===Er||n===Tr||n===wr||n===Ar||n===Cr||n===Rr||n===Pr||n===Ir||n===Lr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===yr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===br)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Er)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ar)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ir)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Dr||n===Ur)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Js)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ur)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Nr||n===Fr||n===Br)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Js)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Nr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Br)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Gm={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
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

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Pe,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Hm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends Gi{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const v=new $m,p=e.getContextAttributes();let u=null,_=null;const b=[],x=[],R=new Ht;let T=null;const A=new ze;A.viewport=new ce;const I=new ze;I.viewport=new ce;const E=[A,I],M=new dh;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=b[X];return et===void 0&&(et=new Wa,b[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=b[X];return et===void 0&&(et=new Wa,b[X]=et),et.getGripSpace()},this.getHand=function(X){let et=b[X];return et===void 0&&(et=new Wa,b[X]=et),et.getHandSpace()};function z(X){const et=x.indexOf(X.inputSource);if(et===-1)return;const gt=b[et];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||r),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Z);for(let X=0;X<b.length;X++){const et=x[X];et!==null&&(x[X]=null,b[X].disconnect(et))}P=null,G=null,v.reset(),t.setRenderTarget(u),m=null,f=null,h=null,i=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let gt=null,rt=null,Tt=null;p.depth&&(Tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=p.stencil?Bi:Ii,rt=p.stencil?Fi:ei);const Ct={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:a};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Ct),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new ni(f.textureWidth,f.textureHeight,{format:an,type:En,depthTexture:new dc(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ni(m.framebufferWidth,m.framebufferHeight,{format:an,type:En,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let et=0;et<X.removed.length;et++){const gt=X.removed[et],rt=x.indexOf(gt);rt>=0&&(x[rt]=null,b[rt].disconnect(gt))}for(let et=0;et<X.added.length;et++){const gt=X.added[et];let rt=x.indexOf(gt);if(rt===-1){for(let Ct=0;Ct<b.length;Ct++)if(Ct>=x.length){x.push(gt),rt=Ct;break}else if(x[Ct]===null){x[Ct]=gt,rt=Ct;break}if(rt===-1)break}const Tt=b[rt];Tt&&Tt.connect(gt)}}const q=new F,Q=new F;function V(X,et,gt){q.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const rt=q.distanceTo(Q),Tt=et.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Ft=Tt[14]/(Tt[10]-1),ae=Tt[14]/(Tt[10]+1),Vt=(Tt[9]+1)/Tt[5],de=(Tt[9]-1)/Tt[5],L=(Tt[8]-1)/Tt[0],Ve=(Ct[8]+1)/Ct[0],Ot=Ft*L,zt=Ft*Ve,xt=rt/(-L+Ve),ne=xt*-L;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const _t=Ft+xt,w=ae+xt,y=Ot-ne,B=zt+(rt-ne),Y=Vt*ae/w*_t,K=de*ae/w*_t;X.projectionMatrix.makePerspective(y,B,Y,K,_t,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,gt=X.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),M.near=I.near=A.near=et,M.far=I.far=A.far=gt,(P!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,G=M.far),A.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const rt=X.parent,Tt=M.cameras;at(M,rt);for(let Ct=0;Ct<Tt.length;Ct++)at(Tt[Ct],rt);Tt.length===2?V(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ht(X,M,rt)};function ht(X,et,gt){gt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=kr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let yt=null;function Nt(X,et){if(d=et.getViewerPose(c||r),g=et,d!==null){const gt=d.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Ct=0;Ct<gt.length;Ct++){const Ft=gt[Ct];let ae=null;if(m!==null)ae=m.getViewport(Ft);else{const de=h.getViewSubImage(f,Ft);ae=de.viewport,Ct===0&&(t.setRenderTargetTextures(_,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(_))}let Vt=E[Ct];Vt===void 0&&(Vt=new ze,Vt.layers.enable(Ct),Vt.viewport=new ce,E[Ct]=Vt),Vt.matrix.fromArray(Ft.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ft.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ct===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Vt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Ct=h.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,i.renderState)}}for(let gt=0;gt<b.length;gt++){const rt=x[gt],Tt=b[gt];rt!==null&&Tt!==void 0&&Tt.update(rt,et,c||r)}yt&&yt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new pc;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}}const Wn=new on,Wm=new ee;function Xm(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ac(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,_,b,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),h(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(a(p,u),g(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),v(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,_,b):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ue&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ue&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=t.get(u),b=_.envMap,x=_.envMapRotation;b&&(p.envMap.value=b,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Wn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=b*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const _=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ym(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const x=b.program;n.uniformBlockBinding(_,x)}function c(_,b){let x=i[_.id];x===void 0&&(g(_),x=d(_),i[_.id]=x,_.addEventListener("dispose",p));const R=b.program;n.updateUBOMapping(_,R);const T=t.render.frame;a[_.id]!==T&&(f(_),a[_.id]=T)}function d(_){const b=h();_.__bindingPointIndex=b;const x=s.createBuffer(),R=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function h(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const b=i[_.id],x=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,A=x.length;T<A;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=I.length;E<M;E++){const P=I[E];if(m(P,T,E,R)===!0){const G=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Z=0;Z<z.length;Z++){const q=z[Z],Q=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,G+$,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(_,b,x,R){const T=_.value,A=b+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(_){const b=_.uniforms;let x=0;const R=16;for(let A=0,I=b.length;A<I;A++){const E=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,P=E.length;M<P;M++){const G=E[M],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Z=z.length;$<Z;$++){const q=z[$],Q=v(q),V=x%R,at=V%Q.boundary,ht=V+at;x+=at,ht!==0&&R-ht<Q.storage&&(x+=R-ht),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Q.storage}}}const T=x%R;return T>0&&(x+=R-T),_.__size=x,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){const b=_.target;b.removeEventListener("dispose",p);const x=r.indexOf(b.__bindingPointIndex);r.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete a[b.id]}function u(){for(const _ in i)s.deleteBuffer(i[_]);r=[],i={},a={}}return{bind:l,update:c,dispose:u}}class yc{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const _=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let R=!1,T=0,A=0,I=null,E=-1,M=null;const P=new ce,G=new ce;let z=null;const $=new Et(0);let Z=0,q=e.width,Q=e.height,V=1,at=null,ht=null;const yt=new ce(0,0,q,Q),Nt=new ce(0,0,q,Q);let Qt=!1;const X=new so;let et=!1,gt=!1;this.transmissionResolutionScale=1;const rt=new ee,Tt=new ee,Ct=new F,Ft=new ce,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function de(){return I===null?V:1}let L=n;function Ve(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xr}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const U="webgl2";if(L=Ve(U,S),L===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ot,zt,xt,ne,_t,w,y,B,Y,K,W,vt,ot,ut,$t,tt,ft,St,wt,pt,Gt,Lt,te,D;function it(){Ot=new sp(L),Ot.init(),Lt=new zm(L,Ot),zt=new Qf(L,Ot,t,Lt),xt=new km(L,Ot),zt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ne=new op(L),_t=new Tm,w=new Om(L,Ot,xt,_t,zt,Lt,ne),y=new tp(x),B=new ip(x),Y=new fh(L),te=new Kf(L,Y),K=new ap(L,Y,ne,te),W=new cp(L,K,Y,ne),wt=new lp(L,zt,w),tt=new Jf(_t),vt=new Em(x,y,B,Ot,zt,te,tt),ot=new Xm(x,_t),ut=new Am,$t=new Dm(Ot),St=new jf(x,y,B,xt,W,m,l),ft=new Fm(x,W,zt),D=new Ym(L,ne,zt,xt),pt=new Zf(L,Ot,ne),Gt=new rp(L,Ot,ne),ne.programs=vt.programs,x.capabilities=zt,x.extensions=Ot,x.properties=_t,x.renderLists=ut,x.shadowMap=ft,x.state=xt,x.info=ne}it();const H=new qm(x,L);this.xr=H,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(q,Q,!1))},this.getSize=function(S){return S.set(q,Q)},this.setSize=function(S,U,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,Q=U,e.width=Math.floor(S*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*V,Q*V).floor()},this.setDrawingBufferSize=function(S,U,k){q=S,Q=U,V=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,U,k,O){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,U,k,O),xt.viewport(P.copy(yt).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Nt)},this.setScissor=function(S,U,k,O){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,U,k,O),xt.scissor(G.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){xt.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(S=!0,U=!0,k=!0){let O=0;if(S){let N=!1;if(I!==null){const J=I.texture.format;N=J===eo||J===to||J===Jr}if(N){const J=I.texture.type,st=J===En||J===ei||J===hs||J===Fi||J===Kr||J===Zr,dt=St.getClearColor(),mt=St.getClearAlpha(),At=dt.r,Rt=dt.g,bt=dt.b;st?(g[0]=At,g[1]=Rt,g[2]=bt,g[3]=mt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=At,v[1]=Rt,v[2]=bt,v[3]=mt,L.clearBufferiv(L.COLOR,0,v))}else O|=L.COLOR_BUFFER_BIT}U&&(O|=L.DEPTH_BUFFER_BIT),k&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),St.dispose(),ut.dispose(),$t.dispose(),_t.dispose(),y.dispose(),B.dispose(),W.dispose(),te.dispose(),D.dispose(),vt.dispose(),H.dispose(),H.removeEventListener("sessionstart",po),H.removeEventListener("sessionend",mo),On.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=ne.autoReset,U=ft.enabled,k=ft.autoUpdate,O=ft.needsUpdate,N=ft.type;it(),ne.autoReset=S,ft.enabled=U,ft.autoUpdate=k,ft.needsUpdate=O,ft.type=N}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pt(S){const U=S.target;U.removeEventListener("dispose",Pt),re(U)}function re(S){xe(S),_t.remove(S)}function xe(S){const U=_t.get(S).programs;U!==void 0&&(U.forEach(function(k){vt.releaseProgram(k)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,O,N,J){U===null&&(U=ae);const st=N.isMesh&&N.matrixWorld.determinant()<0,dt=Rc(S,U,k,O,N);xt.setMaterial(O,st);let mt=k.index,At=1;if(O.wireframe===!0){if(mt=K.getWireframeAttribute(k),mt===void 0)return;At=2}const Rt=k.drawRange,bt=k.attributes.position;let qt=Rt.start*At,Yt=(Rt.start+Rt.count)*At;J!==null&&(qt=Math.max(qt,J.start*At),Yt=Math.min(Yt,(J.start+J.count)*At)),mt!==null?(qt=Math.max(qt,0),Yt=Math.min(Yt,mt.count)):bt!=null&&(qt=Math.max(qt,0),Yt=Math.min(Yt,bt.count));const ue=Yt-qt;if(ue<0||ue===1/0)return;te.setup(N,O,dt,k,mt);let oe,Wt=pt;if(mt!==null&&(oe=Y.get(mt),Wt=Gt,Wt.setIndex(oe)),N.isMesh)O.wireframe===!0?(xt.setLineWidth(O.wireframeLinewidth*de()),Wt.setMode(L.LINES)):Wt.setMode(L.TRIANGLES);else if(N.isLine){let Mt=O.linewidth;Mt===void 0&&(Mt=1),xt.setLineWidth(Mt*de()),N.isLineSegments?Wt.setMode(L.LINES):N.isLineLoop?Wt.setMode(L.LINE_LOOP):Wt.setMode(L.LINE_STRIP)}else N.isPoints?Wt.setMode(L.POINTS):N.isSprite&&Wt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,ye=N._multiDrawCounts,jt=N._multiDrawCount,Qe=mt?Y.get(mt).bytesPerElement:1,ri=_t.get(O).currentProgram.getUniforms();for(let Ne=0;Ne<jt;Ne++)ri.setValue(L,"_gl_DrawID",Ne),Wt.render(Mt[Ne]/Qe,ye[Ne])}else if(N.isInstancedMesh)Wt.renderInstances(qt,ue,N.count);else if(k.isInstancedBufferGeometry){const Mt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ye=Math.min(k.instanceCount,Mt);Wt.renderInstances(qt,ue,ye)}else Wt.render(qt,ue)};function Kt(S,U,k){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,vs(S,U,k),S.side=un,S.needsUpdate=!0,vs(S,U,k),S.side=sn):vs(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),u=$t.get(k),u.init(U),b.push(u),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const O=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const dt=J[st];Kt(dt,k,N),O.add(dt)}else Kt(J,k,N),O.add(J)}),b.pop(),u=null,O},this.compileAsync=function(S,U,k=null){const O=this.compile(S,U,k);return new Promise(N=>{function J(){if(O.forEach(function(st){_t.get(st).currentProgram.isReady()&&O.delete(st)}),O.size===0){N(S);return}setTimeout(J,10)}Ot.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ze=null;function fn(S){Ze&&Ze(S)}function po(){On.stop()}function mo(){On.start()}const On=new pc;On.setAnimationLoop(fn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){Ze=S,H.setAnimationLoop(S),S===null?On.stop():On.start()},H.addEventListener("sessionstart",po),H.addEventListener("sessionend",mo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,I),u=$t.get(S,b.length),u.init(U),b.push(u),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,gt),p=ut.get(S,_.length),p.init(),_.push(p),H.enabled===!0&&H.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&fa(J,U,-1/0,x.sortObjects)}fa(S,U,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(at,ht),Vt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Vt&&St.addToRenderList(p,S),this.info.render.frame++,et===!0&&tt.beginShadows();const k=u.state.shadowsArray;ft.render(k,S,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const J=U.cameras;if(N.length>0)for(let st=0,dt=J.length;st<dt;st++){const mt=J[st];vo(O,N,S,mt)}Vt&&St.render(S);for(let st=0,dt=J.length;st<dt;st++){const mt=J[st];go(p,S,mt,mt.viewport)}}else N.length>0&&vo(O,N,S,U),Vt&&St.render(S),go(p,S,U);I!==null&&A===0&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,U),te.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],et===!0&&tt.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function fa(S,U,k,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){O&&Ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Tt);const st=W.update(S),dt=S.material;dt.visible&&p.push(S,st,dt,k,Ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const st=W.update(S),dt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ft.copy(S.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ft.copy(st.boundingSphere.center)),Ft.applyMatrix4(S.matrixWorld).applyMatrix4(Tt)),Array.isArray(dt)){const mt=st.groups;for(let At=0,Rt=mt.length;At<Rt;At++){const bt=mt[At],qt=dt[bt.materialIndex];qt&&qt.visible&&p.push(S,st,qt,k,Ft.z,bt)}}else dt.visible&&p.push(S,st,dt,k,Ft.z,null)}}const J=S.children;for(let st=0,dt=J.length;st<dt;st++)fa(J[st],U,k,O)}function go(S,U,k,O){const N=S.opaque,J=S.transmissive,st=S.transparent;u.setupLightsView(k),et===!0&&tt.setGlobalState(x.clippingPlanes,k),O&&xt.viewport(P.copy(O)),N.length>0&&gs(N,U,k),J.length>0&&gs(J,U,k),st.length>0&&gs(st,U,k),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function vo(S,U,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new ni(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?fs:En,minFilter:Jn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=u.state.transmissionRenderTarget[O.id],st=O.viewport||P;J.setSize(st.z*x.transmissionResolutionScale,st.w*x.transmissionResolutionScale);const dt=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor($),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&St.render(k);const mt=x.toneMapping;x.toneMapping=Fn;const At=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),et===!0&&tt.setGlobalState(x.clippingPlanes,O),gs(S,k,O),w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let bt=0,qt=U.length;bt<qt;bt++){const Yt=U[bt],ue=Yt.object,oe=Yt.geometry,Wt=Yt.material,Mt=Yt.group;if(Wt.side===sn&&ue.layers.test(O.layers)){const ye=Wt.side;Wt.side=Ue,Wt.needsUpdate=!0,_o(ue,k,O,oe,Wt,Mt),Wt.side=ye,Wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J))}x.setRenderTarget(dt),x.setClearColor($,Z),At!==void 0&&(O.viewport=At),x.toneMapping=mt}function gs(S,U,k){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,J=S.length;N<J;N++){const st=S[N],dt=st.object,mt=st.geometry,At=O===null?st.material:O,Rt=st.group;dt.layers.test(k.layers)&&_o(dt,U,k,mt,At,Rt)}}function _o(S,U,k,O,N,J){S.onBeforeRender(x,U,k,O,N,J),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,k,O,S,J),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,x.renderBufferDirect(k,U,O,N,S,J),N.side=un,N.needsUpdate=!0,x.renderBufferDirect(k,U,O,N,S,J),N.side=sn):x.renderBufferDirect(k,U,O,N,S,J),S.onAfterRender(x,U,k,O,N,J)}function vs(S,U,k){U.isScene!==!0&&(U=ae);const O=_t.get(S),N=u.state.lights,J=u.state.shadowsArray,st=N.state.version,dt=vt.getParameters(S,N.state,J,U,k),mt=vt.getProgramCacheKey(dt);let At=O.programs;O.environment=S.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(S.isMeshStandardMaterial?B:y).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",Pt),At=new Map,O.programs=At);let Rt=At.get(mt);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===st)return xo(S,dt),Rt}else dt.uniforms=vt.getUniforms(S),S.onBeforeCompile(dt,x),Rt=vt.acquireProgram(dt,mt),At.set(mt,Rt),O.uniforms=dt.uniforms;const bt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=tt.uniform),xo(S,dt),O.needsLights=Ic(S),O.lightsStateVersion=st,O.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function yo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ea.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function xo(S,U){const k=_t.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Rc(S,U,k,O,N){U.isScene!==!0&&(U=ae),w.resetTextureUnits();const J=U.fog,st=O.isMeshStandardMaterial?U.environment:null,dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ki,mt=(O.isMeshStandardMaterial?B:y).get(O.envMap||st),At=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),bt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,Yt=!!k.morphAttributes.color;let ue=Fn;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=x.toneMapping);const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Wt=oe!==void 0?oe.length:0,Mt=_t.get(O),ye=u.state.lights;if(et===!0&&(gt===!0||S!==M)){const Ce=S===M&&O.id===E;tt.setState(O,S,Ce)}let jt=!1;O.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==ye.state.version||Mt.outputColorSpace!==dt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==mt||O.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==At||Mt.vertexTangents!==Rt||Mt.morphTargets!==bt||Mt.morphNormals!==qt||Mt.morphColors!==Yt||Mt.toneMapping!==ue||Mt.morphTargetsCount!==Wt)&&(jt=!0):(jt=!0,Mt.__version=O.version);let Qe=Mt.currentProgram;jt===!0&&(Qe=vs(O,U,N));let ri=!1,Ne=!1,qi=!1;const ie=Qe.getUniforms(),$e=Mt.uniforms;if(xt.useProgram(Qe.program)&&(ri=!0,Ne=!0,qi=!0),O.id!==E&&(E=O.id,Ne=!0),ri||M!==S){xt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),wd(rt),Ad(rt),ie.setValue(L,"projectionMatrix",rt)):ie.setValue(L,"projectionMatrix",S.projectionMatrix),ie.setValue(L,"viewMatrix",S.matrixWorldInverse);const Ie=ie.map.cameraPosition;Ie!==void 0&&Ie.setValue(L,Ct.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&ie.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ie.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ne=!0,qi=!0)}if(N.isSkinnedMesh){ie.setOptional(L,N,"bindMatrix"),ie.setOptional(L,N,"bindMatrixInverse");const Ce=N.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ie.setValue(L,"boneTexture",Ce.boneTexture,w))}N.isBatchedMesh&&(ie.setOptional(L,N,"batchingTexture"),ie.setValue(L,"batchingTexture",N._matricesTexture,w),ie.setOptional(L,N,"batchingIdTexture"),ie.setValue(L,"batchingIdTexture",N._indirectTexture,w),ie.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ie.setValue(L,"batchingColorTexture",N._colorsTexture,w));const qe=k.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&wt.update(N,k,Qe),(Ne||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,ie.setValue(L,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&($e.envMap.value=mt,$e.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),Ne&&(ie.setValue(L,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&Pc($e,qi),J&&O.fog===!0&&ot.refreshFogUniforms($e,J),ot.refreshMaterialUniforms($e,O,V,Q,u.state.transmissionRenderTarget[S.id]),ea.upload(L,yo(Mt),$e,w)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ea.upload(L,yo(Mt),$e,w),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ie.setValue(L,"center",N.center),ie.setValue(L,"modelViewMatrix",N.modelViewMatrix),ie.setValue(L,"normalMatrix",N.normalMatrix),ie.setValue(L,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ce=O.uniformsGroups;for(let Ie=0,pa=Ce.length;Ie<pa;Ie++){const zn=Ce[Ie];D.update(zn,Qe),D.bind(zn,Qe)}}return Qe}function Pc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ic(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,U,k){_t.get(S.texture).__webglTexture=U,_t.get(S.depthTexture).__webglTexture=k;const O=_t.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=_t.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Lc=L.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){I=S,T=U,A=k;let O=!0,N=null,J=!1,st=!1;if(S){const mt=_t.get(S);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),O=!1;else if(mt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(mt.__hasExternalTextures)w.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const bt=S.depthTexture;if(mt.__boundDepthTexture!==bt){if(bt!==null&&_t.has(bt)&&(S.width!==bt.image.width||S.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(st=!0);const Rt=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?N=Rt[U][k]:N=Rt[U],J=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[k]:N=Rt,P.copy(S.viewport),G.copy(S.scissor),z=S.scissorTest}else P.copy(yt).multiplyScalar(V).floor(),G.copy(Nt).multiplyScalar(V).floor(),z=Qt;if(k!==0&&(N=Lc),xt.bindFramebuffer(L.FRAMEBUFFER,N)&&O&&xt.drawBuffers(S,N),xt.viewport(P),xt.scissor(G),xt.setScissorTest(z),J){const mt=_t.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(st){const mt=_t.get(S.texture),At=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,k,At)}else if(S!==null&&k!==0){const mt=_t.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(S,U,k,O,N,J,st){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){xt.bindFramebuffer(L.FRAMEBUFFER,dt);try{const mt=S.texture,At=mt.format,Rt=mt.type;if(!zt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&k>=0&&k<=S.height-N&&L.readPixels(U,k,O,N,Lt.convert(At),Lt.convert(Rt),J)}finally{const mt=I!==null?_t.get(I).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,O,N,J,st){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const mt=S.texture,At=mt.format,Rt=mt.type;if(!zt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-O&&k>=0&&k<=S.height-N){xt.bindFramebuffer(L.FRAMEBUFFER,dt);const bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),L.readPixels(U,k,O,N,Lt.convert(At),Lt.convert(Rt),0);const qt=I!==null?_t.get(I).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,qt);const Yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Td(L,Yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(bt),L.deleteSync(Yt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(Si("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-k),N=Math.floor(S.image.width*O),J=Math.floor(S.image.height*O),st=U!==null?U.x:0,dt=U!==null?U.y:0;w.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,st,dt,N,J),xt.unbindTexture()};const Dc=L.createFramebuffer(),Uc=L.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,O=null,N=0,J=null){S.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],U=arguments[2],J=arguments[3]||0,k=null),J===null&&(N!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let st,dt,mt,At,Rt,bt,qt,Yt,ue;const oe=S.isCompressedTexture?S.mipmaps[J]:S.image;if(k!==null)st=k.max.x-k.min.x,dt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,At=k.min.x,Rt=k.min.y,bt=k.isBox3?k.min.z:0;else{const qe=Math.pow(2,-N);st=Math.floor(oe.width*qe),dt=Math.floor(oe.height*qe),S.isDataArrayTexture?mt=oe.depth:S.isData3DTexture?mt=Math.floor(oe.depth*qe):mt=1,At=0,Rt=0,bt=0}O!==null?(qt=O.x,Yt=O.y,ue=O.z):(qt=0,Yt=0,ue=0);const Wt=Lt.convert(U.format),Mt=Lt.convert(U.type);let ye;U.isData3DTexture?(w.setTexture3D(U,0),ye=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),ye=L.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=L.getParameter(L.UNPACK_SKIP_PIXELS),Ne=L.getParameter(L.UNPACK_SKIP_ROWS),qi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);const ie=S.isDataArrayTexture||S.isData3DTexture,$e=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const qe=_t.get(S),Ce=_t.get(U),Ie=_t.get(qe.__renderTarget),pa=_t.get(Ce.__renderTarget);xt.bindFramebuffer(L.READ_FRAMEBUFFER,Ie.__webglFramebuffer),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let zn=0;zn<mt;zn++)ie&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,N,bt+zn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,J,ue+zn)),L.blitFramebuffer(At,Rt,st,dt,qt,Yt,st,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||_t.has(S)){const qe=_t.get(S),Ce=_t.get(U);xt.bindFramebuffer(L.READ_FRAMEBUFFER,Dc),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Uc);for(let Ie=0;Ie<mt;Ie++)ie?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,N,bt+Ie):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,N),$e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,J,ue+Ie):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,J),N!==0?L.blitFramebuffer(At,Rt,st,dt,qt,Yt,st,dt,L.COLOR_BUFFER_BIT,L.NEAREST):$e?L.copyTexSubImage3D(ye,J,qt,Yt,ue+Ie,At,Rt,st,dt):L.copyTexSubImage2D(ye,J,qt,Yt,At,Rt,st,dt);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $e?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(ye,J,qt,Yt,ue,st,dt,mt,Wt,Mt,oe.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,J,qt,Yt,ue,st,dt,mt,Wt,oe.data):L.texSubImage3D(ye,J,qt,Yt,ue,st,dt,mt,Wt,Mt,oe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,qt,Yt,st,dt,Wt,Mt,oe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,qt,Yt,oe.width,oe.height,Wt,oe.data):L.texSubImage2D(L.TEXTURE_2D,J,qt,Yt,st,dt,Wt,Mt,oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qi),J===0&&U.generateMipmaps&&L.generateMipmap(ye),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,O=null,N=0){return S.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,O=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,O,N)},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,xt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class jm{constructor(t="game-canvas"){this._isMobile=window.innerWidth<=768,this.canvas=document.getElementById(t),this.renderer=new yc({canvas:this.canvas,antialias:!this._isMobile}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this._isMobile?Oc:Bl,this.renderer.toneMapping=kl,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(8900331),this.scene=new lc,this.scene.fog=new io(8900331,.003),this.camera=new ze(50,1,.1,500),this.camera.position.set(0,20,30),this._setupLighting(),this._setupGround(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_setupLighting(){this.ambientLight=new fc(13163248,.8),this.scene.add(this.ambientLight),this.hemiLight=new oh(8900331,7049054,.6),this.scene.add(this.hemiLight),this.sunLight=new uc(16775400,1.6),this.sunLight.position.set(20,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(this._isMobile?1024:2048,this._isMobile?1024:2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight)}_setupGround(){const t=new Ge(new Vi(200,200),new Or({color:5938799}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;if(this._isMobile=t<=768,this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this._isMobile?1.5:2)),this._isMobile)return;const n=document.querySelector(".scene-strip");this._stripH=n?n.offsetHeight:120,this.camera.aspect=t/this._stripH,this.camera.fov=25,this.camera.updateProjectionMatrix()}render(){if(this._isMobile)return;const t=window.innerWidth,e=this._stripH||120;this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,t,e),this.renderer.setViewport(0,0,t,e),this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize)}}class Km{constructor(){this._listeners=new Map,this._depth=0}on(t,e){return this._listeners.has(t)||this._listeners.set(t,new Set),this._listeners.get(t).add(e),()=>this.off(t,e)}once(t,e){const n=i=>{this.off(t,n),e(i)};return this.on(t,n)}off(t,e){const n=this._listeners.get(t);n&&(n.delete(e),n.size===0&&this._listeners.delete(t))}emit(t,e){const n=this._listeners.get(t);if(n){if(this._depth++,this._depth>30){console.error(`[EventBus] Max emit depth (30) exceeded at "${t}" — breaking potential infinite loop`),this._depth--;return}for(const i of n)try{i(e)}catch(a){console.error(`[EventBus] Error in listener for "${t}":`,a)}this._depth--}}}const C=new Km;class Zm{constructor(){this.totalGoldEarned=0,this.totalItemsSold=0,this.totalItemsCrafted=0,this.totalCustomersServed=0,this.totalCustomersLost=0,this.totalPuzzlesPlayed=0,this.bestPuzzleScore=0,this.dailySales=[],this._currentDaySales=0,this.salesByType={equipment:0,consumable:0,accessory:0,material:0},this._bindEvents()}_bindEvents(){C.on("item:sold",t=>{var i,a;const e=t.price||((i=t.item)==null?void 0:i.value)||0;this.totalGoldEarned+=e,this.totalItemsSold++,this._currentDaySales+=e;const n=((a=t.item)==null?void 0:a.type)||"material";this.salesByType[n]!==void 0&&(this.salesByType[n]+=e)}),C.on("item:crafted",()=>{this.totalItemsCrafted++}),C.on("customer:bought",()=>{this.totalCustomersServed++}),C.on("customer:left",()=>{this.totalCustomersLost++}),C.on("day:newDay",()=>{this.dailySales.push(this._currentDaySales),this.dailySales.length>30&&this.dailySales.shift(),this._currentDaySales=0})}recordPuzzle(t){this.totalPuzzlesPlayed++,t>this.bestPuzzleScore&&(this.bestPuzzleScore=t)}add(t,e=1){this[t]!==void 0?this[t]+=e:this[t]=e}getAverageDailySales(t=7){const e=this.dailySales.slice(-t);return e.length===0?0:Math.round(e.reduce((n,i)=>n+i,0)/e.length)}toSaveData(){return{totalGoldEarned:this.totalGoldEarned,totalItemsSold:this.totalItemsSold,totalItemsCrafted:this.totalItemsCrafted,totalCustomersServed:this.totalCustomersServed,totalCustomersLost:this.totalCustomersLost,totalPuzzlesPlayed:this.totalPuzzlesPlayed,bestPuzzleScore:this.bestPuzzleScore,dailySales:this.dailySales,salesByType:{...this.salesByType}}}loadSaveData(t){t&&(this.totalGoldEarned=t.totalGoldEarned||0,this.totalItemsSold=t.totalItemsSold||0,this.totalItemsCrafted=t.totalItemsCrafted||0,this.totalCustomersServed=t.totalCustomersServed||0,this.totalCustomersLost=t.totalCustomersLost||0,this.totalPuzzlesPlayed=t.totalPuzzlesPlayed||0,this.bestPuzzleScore=t.bestPuzzleScore||0,this.dailySales=t.dailySales||[],t.salesByType&&Object.assign(this.salesByType,t.salesByType))}}const Tn=new Zm,Mi="voxelshop_save_v5",qs=["voxelshop_save_v4","voxelshop_save_v3","voxelshop_save_v2","voxelshop_save_v1"],Qm=30;class na{constructor(t,e,n,i,a,r,o,l){this.inventory=t,this.adventurers=e,this.dayCycle=n,this.shop=i,this.reputation=a,this.quest=r,this.collection=o,this.autoCraft=l,this.timer=0}update(t){this.timer+=t,this.timer>=Qm&&(this.timer=0,this.save())}save(){try{const t={version:5,timestamp:Date.now(),gold:this.inventory.gold,maxCapacity:this.inventory.maxCapacity,items:this.inventory.items.map(e=>({blueprintId:e.blueprintId,quality:e.quality,traits:e.traits,locked:e.locked||!1})),displayedItems:this.shop.displayedItems.map(e=>({blueprintId:e.blueprintId,quality:e.quality,traits:e.traits})),maxSlots:this.shop.maxSlots,purchasedUpgrades:this.shop.purchasedUpgrades,adventurers:this.adventurers.adventurers.map(e=>({id:e.id,level:e.level,exp:e.exp,assignedArea:e.assignedArea,weapon:e.equipment.weapon?{blueprintId:e.equipment.weapon.blueprintId,quality:e.equipment.weapon.quality,traits:e.equipment.weapon.traits}:null})),day:this.dayCycle.day,dayTimer:this.dayCycle.dayTimer,totalSales:this.dayCycle.totalSales,currentRankIndex:this.dayCycle.currentRankIndex,unlockedRecipes:Object.keys(he).filter(e=>he[e].unlocked),unlockedAreas:Object.keys(se).filter(e=>se[e].unlocked),reputation:this.reputation?this.reputation.toSaveData():null,stats:Tn.toSaveData(),quest:this.quest?this.quest.toSaveData():null,rankBossAvailable:this.dayCycle.rankBossAvailable,defeatedBosses:this.dayCycle.defeatedBosses||[],autoSellEnabled:this.shop.autoSellEnabled||!1,autoSellRules:this.shop.autoSellRules||null,collection:this.collection?this.collection.toSaveData():null,autoCraft:this.autoCraft?this.autoCraft.toSaveData():null};localStorage.setItem(Mi,JSON.stringify(t)),console.log("[Save] ゲームを保存しました (v5)"),C.emit("save:completed")}catch(t){console.error("[Save] 保存失敗:",t)}}static hasSave(){if(localStorage.getItem(Mi))return!0;for(const t of qs)if(localStorage.getItem(t))return!0;return!1}static getSaveInfo(){try{let t=localStorage.getItem(Mi);if(!t){for(const n of qs)if(t=localStorage.getItem(n),t)break}if(!t)return null;const e=JSON.parse(t);return{day:e.day,gold:e.gold,totalSales:e.totalSales,rankIndex:e.currentRankIndex,timestamp:e.timestamp}}catch{return null}}static deleteSave(){localStorage.removeItem(Mi);for(const t of qs)localStorage.removeItem(t)}static loadSaveData(){try{let t=localStorage.getItem(Mi);if(t)return JSON.parse(t);for(const e of qs)if(t=localStorage.getItem(e),t){const n=JSON.parse(t);return n.version<4&&(n.maxCapacity=n.maxCapacity||Ut.initialInventoryCapacity,n.maxSlots=n.maxSlots||Ut.shopMaxDisplaySlots,n.purchasedUpgrades=n.purchasedUpgrades||[],n.quest=n.quest||null,n.dayTimer=0,delete n.ap,delete n.maxAP),n.version<5&&(n.rankBossAvailable=n.rankBossAvailable??!1,n.defeatedBosses=n.defeatedBosses||[]),n.version=5,localStorage.removeItem(e),localStorage.setItem(Mi,JSON.stringify(n)),console.log(`[Save] ${e} → v5 マイグレーション完了`),n}return null}catch{return null}}}class Jm{constructor(){this.currentAnim=null,this.currentDef=null,this.time=0,this.playing=!1,this.speed=1,this.prevAnim=null,this.prevDef=null,this.prevTime=0,this.blendDuration=.3,this.blendElapsed=0,this.blending=!1}play(t,e,n=!1){this.currentAnim===t&&!n||(this.currentDef&&this.playing&&(this.prevAnim=this.currentAnim,this.prevDef=this.currentDef,this.prevTime=this.time,this.blending=!0,this.blendElapsed=0),this.currentAnim=t,this.currentDef=e,this.time=0,this.playing=!0)}stop(){this.playing=!1}update(t){if(!this.playing||!this.currentDef)return{};this.time+=t*this.speed;const e=this.currentDef.duration||1;this.currentDef.loop?this.time=this.time%e:this.time>=e&&(this.time=e,this.playing=!1);const n=this.time/e,i=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1,a=this._interpolate(this.currentDef.keyframes,n*i);if(this.blending){this.blendElapsed+=t;const r=Math.min(this.blendElapsed/this.blendDuration,1),o=r*r*(3-2*r);if(this.prevDef){const l=this.prevDef.duration||1,c=this.prevTime/l,d=this.prevDef.keyframes.length>0?this.prevDef.keyframes[this.prevDef.keyframes.length-1].time:1,h=this._interpolate(this.prevDef.keyframes,c*d),f=this._blendTransforms(h,a,o);return r>=1&&(this.blending=!1,this.prevDef=null),f}r>=1&&(this.blending=!1)}return a}_interpolate(t,e){if(!t||t.length===0)return{};if(t.length===1)return this._cloneFrame(t[0].parts||{});let n=t[0],i=t[t.length-1];for(let l=0;l<t.length-1;l++)if(e>=t[l].time&&e<=t[l+1].time){n=t[l],i=t[l+1];break}const a=i.time-n.time,r=a>0?(e-n.time)/a:0,o=r*r*(3-2*r);return this._lerpFrames(n.parts||{},i.parts||{},o)}_lerpFrames(t,e,n){const i={},a=new Set([...Object.keys(t),...Object.keys(e)]);for(const r of a){const o=t[r]||{},l=e[r]||{};i[r]={rotation:this._lerpVec(o.rotation||[0,0,0],l.rotation||[0,0,0],n),position:this._lerpVec(o.position||[0,0,0],l.position||[0,0,0],n)}}return i}_blendTransforms(t,e,n){const i={},a=new Set([...Object.keys(t),...Object.keys(e)]);for(const r of a){const o=t[r]||{rotation:[0,0,0],position:[0,0,0]},l=e[r]||{rotation:[0,0,0],position:[0,0,0]};i[r]={rotation:this._lerpVec(o.rotation,l.rotation,n),position:this._lerpVec(o.position,l.position,n)}}return i}_lerpVec(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n]}_cloneFrame(t){const e={};for(const[n,i]of Object.entries(t))e[n]={rotation:[...i.rotation||[0,0,0]],position:[...i.position||[0,0,0]]};return e}seekTo(t){if(!this.currentDef)return{};this.time=t*(this.currentDef.duration||1),this.playing=!1,this.blending=!1;const e=this.currentDef.keyframes.length>0?this.currentDef.keyframes[this.currentDef.keyframes.length-1].time:1;return this._interpolate(this.currentDef.keyframes,t*e)}getTransformsAt(t,e){if(!t||!t.keyframes)return{};const n=t.keyframes.length>0?t.keyframes[t.keyframes.length-1].time:1;return this._interpolate(t.keyframes,e*n)}}class Gr{constructor(t,e={}){this.definition=t,this.voxelSize=t.voxelSize||1,this.root=new Ei,this.root.name=t.name,this.partGroups={},this.animController=new Jm,this.currentAnimName=null,this._skipEdges=e.skipEdges||!1,this.materials=t.palette.map(i=>new Or({color:new Et(i)}));const n=this.voxelSize;if(this.boxGeom=new Bn(n*.98,n*.98,n*.98),this.edgeMat=this._skipEdges?null:new cc({color:0,transparent:!0,opacity:.12}),this._buildParts(),e.position&&this.root.position.set(...e.position),e.rotation&&(this.root.rotation.y=e.rotation),e.scale){const i=e.scale;this.root.scale.set(i,i,i)}}_buildParts(){const t=this.voxelSize;for(const e of this.definition.parts){const n=new Ei;n.name=e.name,n.position.set(e.position[0]*t,e.position[1]*t,e.position[2]*t),n.userData.restPosition=n.position.clone(),this._addVoxelMeshes(n,e);const i=e.parent?this.partGroups[e.parent]:this.root;i?i.add(n):this.root.add(n),this.partGroups[e.name]=n}}_addVoxelMeshes(t,e){const n=this.voxelSize,i=e.center[0],a=e.center[1],r=e.center[2],o=new Map;for(let d=0;d<e.voxels.length;d++){const[h,f,m,g]=e.voxels[d];g<0||g>=this.materials.length||(o.has(g)||o.set(g,[]),o.get(g).push({vx:h,vy:f,vz:m,origIdx:d}))}const l=new me,c=this._skipEdges?null:new ih(new Bn(n,n,n));for(const[d,h]of o){const f=new Qd(this.boxGeom,this.materials[d],h.length);f.castShadow=!0,f.receiveShadow=!0,f.userData.isVoxelBatch=!0,f.userData.partName=e.name,f.userData.colorIndex=d,f.userData.voxelMap=[];for(let m=0;m<h.length;m++){const{vx:g,vy:v,vz:p,origIdx:u}=h[m],_=(g-i+.5)*n,b=(v-a+.5)*n,x=(p-r+.5)*n;if(l.position.set(_,b,x),l.updateMatrix(),f.setMatrixAt(m,l.matrix),f.userData.voxelMap[m]={coord:[g,v,p],origIdx:u},c&&this.edgeMat){const R=new nh(c,this.edgeMat);R.position.set(_,b,x),t.add(R)}}f.instanceMatrix.needsUpdate=!0,t.add(f)}t.userData._edgeGeom=c}rebuildPart(t){const e=this.partGroups[t];if(!e)return;const n=this.definition.parts.find(a=>a.name===t);if(!n)return;e.userData._edgeGeom&&e.userData._edgeGeom.dispose();const i=[...e.children];for(const a of i)e.remove(a),a.isInstancedMesh&&a.dispose(),a.geometry&&a.geometry!==this.boxGeom&&a.geometry.dispose(),a.material&&a.material!==this.edgeMat&&!this.materials.includes(a.material)&&a.material.dispose();for(let a=0;a<this.definition.palette.length;a++)a<this.materials.length?this.materials[a].color.set(this.definition.palette[a]):this.materials.push(new Or({color:new Et(this.definition.palette[a])}));this._addVoxelMeshes(e,n)}getVoxelMeshes(){const t=[];return this.root.traverse(e=>{e.isInstancedMesh&&e.userData.isVoxelBatch&&t.push(e)}),t}playAnimation(t){var n;const e=(n=this.definition.animations)==null?void 0:n[t];e&&(this.currentAnimName=t,this.animController.play(t,e))}getAnimationNames(){return Object.keys(this.definition.animations||{})}update(t){const e=this.animController.update(t),n=this.voxelSize;for(const[i,a]of Object.entries(e)){const r=this.partGroups[i];if(r&&(a.rotation&&r.rotation.set(a.rotation[0],a.rotation[1],a.rotation[2]),a.position)){const o=r.userData.restPosition;r.position.set(o.x+a.position[0]*n,o.y+a.position[1]*n,o.z+a.position[2]*n)}}}addTo(t){t.add(this.root)}removeFrom(t){t.remove(this.root)}dispose(){this.root.traverse(t=>{t.isInstancedMesh&&t.dispose(),t.geometry&&t.geometry!==this.boxGeom&&t.geometry.dispose()}),this.boxGeom.dispose(),this.edgeMat.dispose(),this.materials.forEach(t=>t.dispose())}}const da=class da{constructor(t){Wi(this,"_spawnPos",new F);this.scene=t,this.particles=[],this.geometries={box:new Bn(1,.3,1),octahedron:new ro(1,0),plane:new Vi(1,1),sphere:new oo(1,4,4)},this._materialPool=[],this._tempVec=new F}_getMaterial(t,e={}){var i;let n;return this._materialPool.length>0?(n=this._materialPool.pop(),n.color.set(t),(i=n.emissive)==null||i.set(e.emissive??0),n.emissiveIntensity=e.emissiveIntensity??0,n.metalness=e.metalness??0,n.roughness=e.roughness??1,n.opacity=1,n.side=e.doubleSide?sn:un,n.visible=!0,n.needsUpdate=!0):n=new sh({color:t,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,metalness:e.metalness??0,roughness:e.roughness??1,transparent:!0,opacity:1,side:e.doubleSide?sn:un}),n}_recycleMaterial(t){this._materialPool.length<250?(t.visible=!1,this._materialPool.push(t)):t.dispose()}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),this._recycleMaterial(n.mesh.material),this.particles.splice(e,1);continue}n.velocity.y-=n.gravity*t,this._tempVec.copy(n.velocity).multiplyScalar(t),n.mesh.position.add(this._tempVec),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.mesh.rotation.z+=n.spin.z*t;const i=Math.min(1,n.life/n.fadeTime);n.mesh.material.opacity=i,n.mesh.scale.setScalar(n.baseScale*(.5+.5*i))}}_enforceLimit(){for(;this.particles.length>da.MAX_PARTICLES;){const t=this.particles.shift();this.scene.remove(t.mesh),this._recycleMaterial(t.mesh.material)}}_addParticle(t,e,n,i,a,r,o,l,c){const d=new Ge(t,e);d.scale.setScalar(c),d.position.copy(n),this.scene.add(d),this.particles.push({mesh:d,velocity:i,gravity:a,spin:r,life:o,fadeTime:l,baseScale:c})}spawnCoinBurst(t,e=12){const n=this.geometries.box;for(let i=0;i<e;i++){const a=.15+Math.random()*.15,r=.12+Math.random()*.05,o=this._getMaterial(new Et().setHSL(r,.9,.55+Math.random()*.15),{metalness:.8,roughness:.2});this._spawnPos.copy(t),this._spawnPos.x+=Math.random()-.5,this._spawnPos.z+=Math.random()-.5,this._addParticle(n,o,this._spawnPos,new F((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),12,new F((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),1.2+Math.random()*.8,.6,a)}this._enforceLimit()}spawnCraftStars(t,e=10,n="q-common"){const a={"q-poor":8947848,"q-common":13943968,"q-fine":8235624,"q-excellent":8040644,"q-legendary":15251531}[n]||16777215,r=this.geometries.octahedron;for(let o=0;o<e;o++){const l=.08+Math.random()*.12,c=this._getMaterial(a,{emissive:a,emissiveIntensity:.5});this._spawnPos.copy(t),this._spawnPos.x+=(Math.random()-.5)*2,this._spawnPos.z+=(Math.random()-.5)*2,this._addParticle(r,c,this._spawnPos,new F((Math.random()-.5)*2,2+Math.random()*3,(Math.random()-.5)*2),-.5,new F(Math.random()*4,Math.random()*4,Math.random()*4),1.5+Math.random(),.8,l)}this._enforceLimit()}spawnConfetti(t=40){const e=[15251531,8235624,12876378,8040644,16115400,16750933],n=this.geometries.plane;for(let i=0;i<t;i++){const a=.15+Math.random()*.15,r=e[Math.floor(Math.random()*e.length)],o=this._getMaterial(r,{doubleSide:!0});this._spawnPos.set((Math.random()-.5)*30,15+Math.random()*10,(Math.random()-.5)*30),this._addParticle(n,o,this._spawnPos,new F((Math.random()-.5)*3,-(1+Math.random()*2),(Math.random()-.5)*3),1.5,new F((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),4+Math.random()*3,2,a)}this._enforceLimit()}spawnAmbientParticle(t=.5){let e;t<.15?e=16771264:t<.5?e=16775400:t<.75?e=16750933:e=6719675;const n=.04+Math.random()*.06,i=this._getMaterial(e,{emissive:e,emissiveIntensity:t>.75?1:.3});this._spawnPos.set((Math.random()-.5)*40,Math.random()*2,(Math.random()-.5)*40),this._addParticle(this.geometries.sphere,i,this._spawnPos,new F((Math.random()-.5)*.3,.2+Math.random()*.4,(Math.random()-.5)*.3),-.05,new F(0,Math.random()*2,0),8+Math.random()*6,3,n),this._enforceLimit()}dispose(){for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.material.dispose();this.particles.length=0;for(const t of this._materialPool)t.dispose();this._materialPool.length=0,Object.values(this.geometries).forEach(t=>t.dispose())}};Wi(da,"MAX_PARTICLES",200);let la=da;function Ae(s){const t="/Voxel-Tycoon01/",e=s.startsWith("/")?s.slice(1):s;return`${t}${e}`}class tg{constructor(t,e,n,i){this.scene=t,this.camera=e,this.entities=n,this.renderer=i,this.wanderers=[],this.returningNpcs=[],this.dayProgress=0,this._entityDefCache=new Map,this._skyColors={dawn:new Et(16764040),noon:new Et(8900331),sunset:new Et(16750933),night:new Et(1710650)},this._sunColors={dawn:new Et(16771264),noon:new Et(16775400),sunset:new Et(16746564),night:new Et(3359846)},this._tempColor=new Et,this._sunTempColor=new Et}async init(){this.camera.position.set(0,12,25),this.camera.lookAt(0,1,-2),this._isMobile=window.innerWidth<=768,this.particles=new la(this.scene),this._isMobile&&(la.MAX_PARTICLES=80),await this.spawnEnvironment(),this._isMobile||(this._customerNpcs=[],this._customerNpcCount=0,this._customerModels=["/presets/RPG_Characters/Chibi Human.json","/presets/RPG_Characters/Archer.json","/presets/RPG_Characters/Knight.json","/presets/RPG_Characters/Mage.json"],C.on("customer:arrived",t=>this._onCustomerArrived(t)),C.on("customer:bought",t=>this._onCustomerLeft(t.customer.id)),C.on("customer:left",t=>this._onCustomerLeft(t.customer.id)),C.on("adventurer:return",t=>this._onAdventurerReturn(t)),C.on("rank:up",t=>{this._evolveShopExterior(t.rank),this.particles.spawnConfetti(50)}),this._lastCoinBurstTime=0,this._coinBurstPos=new F(0,3,-3),C.on("item:sold",()=>{const t=performance.now();t-this._lastCoinBurstTime<2e3||(this._lastCoinBurstTime=t,this.particles.spawnCoinBurst(this._coinBurstPos,8))}),this._craftStarPos=new F(7,2,-3),C.on("item:crafted",t=>{const e=t.item&&t.item.quality>=81?"q-legendary":t.item&&t.item.quality>=61?"q-excellent":t.item&&t.item.quality>=41?"q-fine":"q-common",n=e==="q-legendary"?15:e==="q-excellent"?10:8;this.particles.spawnCraftStars(this._craftStarPos,n,e)}))}update(t){for(let e=this.returningNpcs.length-1;e>=0;e--){const n=this.returningNpcs[e],i=n.entity;if(!i||!i.root){this.returningNpcs.splice(e,1),this._returnNpcCount=Math.max(0,(this._returnNpcCount||0)-1);continue}if(n.state==="walking")i.root.position.x-=4.5*t,i.root.rotation.y=Math.PI/2,i.root.position.x<=2&&(n.state="idle",n.timer=3,i.playAnimation("idle"));else if(n.state==="idle"&&(n.timer-=t,n.timer<=0)){i.root.visible=!1;const a=this.entities.indexOf(i);a!==-1&&this.entities.splice(a,1),i.removeFrom(this.scene),i.dispose(),this.returningNpcs.splice(e,1),this._returnNpcCount=Math.max(0,(this._returnNpcCount||0)-1)}}for(let e=this._customerNpcs.length-1;e>=0;e--){const n=this._customerNpcs[e],i=n.entity;if(!i||!i.root){this._customerNpcs.splice(e,1),this._customerNpcCount--;continue}if(n.state==="arriving"){const a=3*t,r=n.targetZ-i.root.position.z;Math.abs(r)>.3?(i.root.position.z+=Math.sign(r)*a,i.root.rotation.y=Math.PI):(n.state="browsing",i.playAnimation("idle"),i.root.rotation.y=0)}else if(n.state==="leaving"){const a=4*t;i.root.position.z+=a,i.root.rotation.y=0,i.root.position.z>18&&this._removeCustomerNpc(e)}}if(this._updateDayNightCycle(),this.particles){this.particles.update(t);const e=this._isMobile?6:3;if(this._ambientTimer=(this._ambientTimer||0)+t,this._ambientTimer>=e){this._ambientTimer=0;const n=1+Math.floor(Math.random()*2);for(let i=0;i<n;i++)this.particles.spawnAmbientParticle(this.dayProgress)}}}setDayProgress(t){this.dayProgress=t}_updateDayNightCycle(){if(!this.renderer)return;const t=this.dayProgress;let e,n,i,a;if(t<.15){const r=t/.15;e=this._tempColor.lerpColors(this._skyColors.night,this._skyColors.dawn,r),n=this._sunTempColor.lerpColors(this._sunColors.night,this._sunColors.dawn,r),i=.4+r*.8,a=.3+r*.3}else if(t<.5){const r=(t-.15)/.35;e=this._tempColor.lerpColors(this._skyColors.dawn,this._skyColors.noon,r),n=this._sunTempColor.lerpColors(this._sunColors.dawn,this._sunColors.noon,r),i=1.2+r*.4,a=.6+r*.2}else if(t<.75){const r=(t-.5)/.25;e=this._tempColor.lerpColors(this._skyColors.noon,this._skyColors.sunset,r),n=this._sunTempColor.lerpColors(this._sunColors.noon,this._sunColors.sunset,r),i=1.6-r*.6,a=.8-r*.2}else{const r=(t-.75)/.25;e=this._tempColor.lerpColors(this._skyColors.sunset,this._skyColors.night,r),n=this._sunTempColor.lerpColors(this._sunColors.sunset,this._sunColors.night,r),i=1-r*.6,a=.6-r*.3}this.renderer.renderer&&this.renderer.renderer.setClearColor(e),this.scene.fog&&this.scene.fog.color.copy(e),this.renderer.sunLight&&(this.renderer.sunLight.color.copy(n),this.renderer.sunLight.intensity=i),this.renderer.ambientLight&&(this.renderer.ambientLight.intensity=a),this.renderer.hemiLight&&(this.renderer.hemiLight.intensity=.3+a*.5)}async loadEntity(t,e={}){try{let n=this._entityDefCache.get(t);n||(n=await(await fetch(Ae(t))).json(),this._entityDefCache.set(t,n));const i=new Gr(n,e);return i.addTo(this.scene),this.entities.push(i),i}catch(n){return console.error("[SceneManager] Failed to load entity:",t,n),null}}async spawnEnvironment(){await this.loadEntity("/presets/RPG_Props/House.json",{position:[0,0,-5],scale:1}),await this.loadEntity("/presets/RPG_Props/Barrel.json",{position:[4,0,-1],scale:.45}),await this.loadEntity("/presets/RPG_Props/Chest.json",{position:[-4,0,-1],scale:.5,rotation:Math.PI/6}),await this.loadEntity("/presets/RPG_Props/Anvil.json",{position:[7,0,-3],scale:.5,rotation:-Math.PI/4}),await this.loadEntity("/presets/RPG_Props/Campfire.json",{position:[-3,0,3],scale:.5});const t=[{pos:[-24,-24],scale:1,type:"P"},{pos:[-16,-22],scale:1.1,type:"P"},{pos:[-8,-24],scale:.9,type:"T"},{pos:[-2,-22],scale:1,type:"P"},{pos:[5,-23],scale:1.1,type:"P"},{pos:[12,-21],scale:.9,type:"T"},{pos:[20,-22],scale:1,type:"P"},{pos:[-20,-18],scale:.8,type:"T"},{pos:[-12,-19],scale:1,type:"P"},{pos:[0,-18],scale:.9,type:"T"},{pos:[8,-19],scale:1,type:"P"},{pos:[16,-18],scale:.8,type:"P"},{pos:[24,-20],scale:.9,type:"T"},{pos:[-22,-15],scale:.9,type:"P"},{pos:[-14,-16],scale:1.1,type:"P"},{pos:[-6,-17],scale:.8,type:"T"},{pos:[3,-16],scale:.9,type:"P"},{pos:[10,-15],scale:1,type:"T"},{pos:[18,-16],scale:.9,type:"P"},{pos:[-18,-12],scale:.9,type:"P"},{pos:[-10,-11],scale:.8,type:"T"},{pos:[10,-12],scale:.8,type:"T"},{pos:[16,-11],scale:.9,type:"P"},{pos:[-14,-8],scale:.7,type:"P"},{pos:[14,-9],scale:.7,type:"P"},{pos:[-16,-5],scale:1,type:"P"},{pos:[-20,-2],scale:.9,type:"T"},{pos:[-14,0],scale:.8,type:"P"},{pos:[-18,3],scale:.9,type:"T"},{pos:[-22,1],scale:1,type:"P"},{pos:[-15,6],scale:.8,type:"P"},{pos:[-20,7],scale:.9,type:"T"},{pos:[-12,9],scale:.7,type:"T"},{pos:[-17,11],scale:.9,type:"P"},{pos:[-24,5],scale:.8,type:"P"},{pos:[-26,-3],scale:1,type:"T"},{pos:[-28,-8],scale:.9,type:"P"},{pos:[-30,0],scale:1,type:"P"},{pos:[-27,4],scale:.8,type:"T"},{pos:[-32,-4],scale:.9,type:"T"},{pos:[-25,9],scale:.8,type:"P"},{pos:[-30,7],scale:1,type:"P"},{pos:[-22,12],scale:.7,type:"T"},{pos:[-28,11],scale:.9,type:"P"},{pos:[16,-5],scale:.9,type:"P"},{pos:[20,-2],scale:1,type:"T"},{pos:[14,0],scale:.8,type:"P"},{pos:[18,3],scale:.9,type:"P"},{pos:[22,1],scale:.8,type:"T"},{pos:[15,6],scale:.7,type:"T"},{pos:[20,7],scale:.9,type:"P"},{pos:[13,9],scale:.8,type:"P"},{pos:[17,11],scale:.9,type:"T"},{pos:[24,4],scale:.8,type:"P"},{pos:[26,-4],scale:1,type:"P"},{pos:[28,-8],scale:.9,type:"P"},{pos:[30,0],scale:1,type:"T"},{pos:[27,4],scale:.8,type:"P"},{pos:[32,-4],scale:.9,type:"T"},{pos:[25,9],scale:.8,type:"P"},{pos:[30,7],scale:1,type:"P"},{pos:[22,12],scale:.7,type:"T"},{pos:[28,11],scale:.9,type:"P"},{pos:[-22,14],scale:.8,type:"P"},{pos:[-28,13],scale:.9,type:"T"},{pos:[22,14],scale:.8,type:"P"},{pos:[28,13],scale:.9,type:"T"}];for(const n of t){const i=n.type==="T"?"/presets/RPG_Props/Tree.json":"/presets/RPG_Props/Pine Tree.json";await this.loadEntity(i,{position:[n.pos[0],0,n.pos[1]],scale:n.scale})}const e=[{pos:[-9,-8],scale:.35},{pos:[10,-7],scale:.3},{pos:[-6,6],scale:.25},{pos:[8,5],scale:.3},{pos:[-16,-14],scale:.4},{pos:[18,-10],scale:.35},{pos:[-20,8],scale:.3},{pos:[22,8],scale:.3}];for(const n of e)await this.loadEntity("/presets/RPG_Props/Rock.json",{position:[n.pos[0],0,n.pos[1]],scale:n.scale})}async _onCustomerArrived(t){if(!(this._customerNpcCount>=2)){this._customerNpcCount++;try{const e=this._customerModels[Math.floor(Math.random()*this._customerModels.length)],n=-5+Math.random()*10,i=await this.loadEntity(e,{position:[n,0,16],scale:.3});if(!i){this._customerNpcCount--;return}i.playAnimation("walk"),this._customerNpcs.push({id:t.customer.id,entity:i,state:"arriving",targetZ:2+Math.random()*4,timer:0})}catch{this._customerNpcCount--}}}_onCustomerLeft(t){const e=this._customerNpcs.find(n=>n.id===t);e&&e.state!=="leaving"&&(e.state="leaving",e.entity&&e.entity.playAnimation("walk"))}_removeCustomerNpc(t){const e=this._customerNpcs[t];if(e.entity){e.entity.root.visible=!1;const n=this.entities.indexOf(e.entity);n!==-1&&this.entities.splice(n,1),e.entity.removeFrom(this.scene),e.entity.dispose()}this._customerNpcs.splice(t,1),this._customerNpcCount--}async _onAdventurerReturn(t){if(!(this._returnNpcCount>=2)){this._returnNpcCount=(this._returnNpcCount||0)+1;try{const e=await this.loadEntity("/presets/RPG_Characters/Knight.json",{position:[20,0,2],scale:.3});if(!e){this._returnNpcCount--;return}e.playAnimation("walk"),this.returningNpcs.push({entity:e,state:"walking",timer:0})}catch{this._returnNpcCount--}}}async _evolveShopExterior(t){const e=t==null?void 0:t.index;if(e===void 0)return;const i={1:[{path:"Banner.json",pos:[-3,0,-2],scale:.5,rot:0},{path:"Banner.json",pos:[3,0,-2],scale:.5,rot:0},{path:"Fence.json",pos:[-7,0,2],scale:.4,rot:Math.PI/2},{path:"Fence.json",pos:[7,0,2],scale:.4,rot:Math.PI/2}],2:[{path:"Street Light.json",pos:[-8,0,-1],scale:.5,rot:0},{path:"Street Light.json",pos:[8,0,-1],scale:.5,rot:0},{path:"Well.json",pos:[-8,0,-6],scale:.4,rot:Math.PI/4}],3:[{path:"Tree.json",pos:[-6,0,-9],scale:.6,rot:0},{path:"Tree.json",pos:[6,0,-9],scale:.5,rot:0},{path:"Street Light.json",pos:[0,0,8],scale:.5,rot:0}],4:[{path:"Tent.json",pos:[10,0,-3],scale:.4,rot:-Math.PI/4},{path:"Banner.json",pos:[-6,0,5],scale:.4,rot:Math.PI/4},{path:"Banner.json",pos:[6,0,5],scale:.4,rot:-Math.PI/4}]}[e];if(i)for(const a of i)try{const r=await this.loadEntity(`/presets/RPG_Props/${a.path}`,{position:a.pos,scale:a.scale,rotation:a.rot});if(r&&r.root){const o=r.root.position.y;r.root.position.y=-3,r.root.scale.set(0,0,0);const l=performance.now(),c=800,d=()=>{const h=performance.now()-l,f=Math.min(1,h/c),m=1-Math.pow(1-f,3);r.root.position.y=-3+(o+3)*m,r.root.scale.setScalar(a.scale*m),f<1&&requestAnimationFrame(d)};requestAnimationFrame(d)}}catch(r){console.warn("[SceneManager] Shop decoration failed:",r)}}}const Hr=[{id:"shop_slots_1",category:"shop",name:"販売棚 拡張I",description:"陳列枠 +2",icon:"🏪",cost:150,requiredRank:1,effect:{type:"display_slots",value:2}},{id:"shop_slots_2",category:"shop",name:"販売棚 拡張II",description:"陳列枠 +2",icon:"🏪",cost:500,requiredRank:3,effect:{type:"display_slots",value:2}},{id:"shop_slots_3",category:"shop",name:"販売棚 拡張III",description:"陳列枠 +2",icon:"🏪",cost:1200,requiredRank:5,effect:{type:"display_slots",value:2}},{id:"shop_slots_4",category:"shop",name:"販売棚 拡張IV",description:"陳列枠 +2",icon:"🏪",cost:3e3,requiredRank:7,effect:{type:"display_slots",value:2}},{id:"storage_1",category:"storage",name:"倉庫 拡張I",description:"倉庫容量 +10",icon:"📦",cost:100,requiredRank:1,effect:{type:"inventory_capacity",value:10}},{id:"storage_2",category:"storage",name:"倉庫 拡張II",description:"倉庫容量 +10",icon:"📦",cost:300,requiredRank:2,effect:{type:"inventory_capacity",value:10}},{id:"storage_3",category:"storage",name:"倉庫 拡張III",description:"倉庫容量 +15",icon:"📦",cost:800,requiredRank:4,effect:{type:"inventory_capacity",value:15}},{id:"storage_4",category:"storage",name:"倉庫 拡張IV",description:"倉庫容量 +15",icon:"📦",cost:2e3,requiredRank:6,effect:{type:"inventory_capacity",value:15}},{id:"storage_5",category:"storage",name:"倉庫 拡張V",description:"倉庫容量 +20",icon:"📦",cost:5e3,requiredRank:8,effect:{type:"inventory_capacity",value:20}},{id:"craft_quality_1",category:"workshop",name:"品質管理台",description:"調合品質 +5",icon:"🔨",cost:400,requiredRank:2,effect:{type:"quality_bonus",value:5}},{id:"craft_quality_2",category:"workshop",name:"精密作業台",description:"調合品質 +5",icon:"🔨",cost:1500,requiredRank:5,effect:{type:"quality_bonus",value:5}},{id:"sign_board",category:"decor",name:"看板設置",description:"来客間隔 -15%",icon:"🎪",cost:80,requiredRank:1,effect:{type:"customer_rate",value:.15}},{id:"interior_1",category:"decor",name:"内装改善",description:"お客の滞在 +5秒",icon:"🎪",cost:400,requiredRank:3,effect:{type:"customer_patience",value:5}},{id:"fame_banner",category:"decor",name:"名声の旗",description:"評判獲得 +30%",icon:"🎪",cost:1e3,requiredRank:4,effect:{type:"reputation_bonus",value:.3}},{id:"lucky_cat",category:"decor",name:"招き猫",description:"売値 +10%",icon:"🎪",cost:2e3,requiredRank:5,effect:{type:"sell_bonus",value:.1}},{id:"golden_sign",category:"decor",name:"黄金看板",description:"来客間隔 -15%",icon:"🎪",cost:4e3,requiredRank:7,effect:{type:"customer_rate",value:.15}},{id:"explore_speed_1",category:"expedition",name:"探索地図",description:"探索時間 -10%",icon:"🏕️",cost:300,requiredRank:2,effect:{type:"explore_speed",value:.1}},{id:"explore_speed_2",category:"expedition",name:"冒険者ギルド提携",description:"探索時間 -10%",icon:"🏕️",cost:1200,requiredRank:5,effect:{type:"explore_speed",value:.1}},{id:"battle_slots_1",category:"expedition",name:"携帯用ポーチ",description:"持ち込み枠 +1",icon:"🏕️",cost:800,requiredRank:3,effect:{type:"battle_item_slots",value:1}},{id:"battle_slots_2",category:"expedition",name:"魔法のカバン",description:"持ち込み枠 +1",icon:"🏕️",cost:3e3,requiredRank:6,effect:{type:"battle_item_slots",value:1}}],eg={shop:{name:"🏪 販売棚",order:1},storage:{name:"📦 倉庫",order:2},workshop:{name:"🔨 工房",order:3},decor:{name:"🎪 装飾",order:4},expedition:{name:"🏕️ 冒険支援",order:5}},ng=.15,Ws=50;class zi{constructor(t){this.inventory=t,this.displayedItems=[],this.maxSlots=Ut.shopMaxDisplaySlots,this.sellTimer=0,this.purchasedUpgrades=[],this.autoSellEnabled=!1,this.autoSellRules={types:["equipment","consumable","accessory"],minQuality:0,excludeTraits:!1},this.autoSellTimer=0,this._unsubUpgradeQuery=C.on("upgrade:queryBonus",e=>{e.result=this.getUpgradeBonus(e.effectType)})}update(t){this.autoSellEnabled&&(this.autoSellTimer+=t,this.autoSellTimer>=5&&(this.autoSellTimer=0,this._tryAutoDisplay())),!(this.displayedItems.length===0&&!this.autoSellEnabled)&&(this.sellTimer+=t,this.sellTimer>=Ut.shopSellInterval&&(this.sellTimer=0,this._tryAutoSell()))}displayItem(t){if(this.displayedItems.length>=this.maxSlots)return!1;const e=this.inventory.removeItem(t);return e?(e.value=this._calcValue(e),this.displayedItems.push(e),C.emit("shop:displayed",{item:e}),!0):!1}removeDisplayedItem(t){const e=this.displayedItems.findIndex(i=>i.uid===t);if(e===-1)return null;if(this.inventory.isFull)return C.emit("toast",{message:"⚠️ 倉庫がいっぱいのため取り下げできません！",type:"warning"}),null;const n=this.displayedItems.splice(e,1)[0];return this.inventory.addItem(n),n}processSale(t,e=1){const n=this.displayedItems.findIndex(a=>a.uid===t.uid);if(n===-1)return!1;this.displayedItems.splice(n,1);const i=Math.floor((t.value||10)*e);return this.inventory.addGold(i),C.emit("item:sold",{item:t,price:i}),Tn.add("itemsSold",1),!0}_tryAutoSell(){if(this.displayedItems.length===0)return;const t=this.displayedItems[Math.floor(Math.random()*this.displayedItems.length)];Math.random()<ng&&this.processSale(t)}_calcValue(t){let e=zi.calcValue(t);const n=this.getUpgradeBonus("sell_bonus");return n>0&&(e=Math.max(1,Math.floor(e*(1+n)))),e}static calcValue(t){const e=Bt[t.blueprintId];if(!e)return 10;let n;if(t.quality<=Ws)n=t.quality/Ws;else{const a=(t.quality-Ws)/Ws;n=1+4*(a*a)}let i=Math.max(1,Math.floor(e.baseValue*n));if(e.type==="accessory"&&(i=Math.floor(i*1.3)),t.traits&&t.traits.length>0){let a=0;for(const r of t.traits){const o=Jt[r];o&&o.effects&&o.effects.sellBonus&&(a+=o.effects.sellBonus)}a!==0&&(i=Math.max(1,Math.floor(i*(1+a/100))))}return i}purchaseUpgrade(t,e){if(this.isPurchased(t))return!1;const n=Hr.find(a=>a.id===t);if(!n||e<n.requiredRank||!this.inventory.spendGold(n.cost))return!1;this.purchasedUpgrades.push(t);const i=n.effect;switch(i.type){case"display_slots":this.maxSlots+=i.value,C.emit("toast",{message:`🏪 販売棚が ${i.value} 枠増えました！（${this.maxSlots}枠）`,type:"success"});break;case"inventory_capacity":this.inventory.expandCapacity(i.value);break}return C.emit("upgrade:purchased",{upgradeId:t,effect:i}),!0}getUpgradeBonus(t){let e=0;for(const n of this.purchasedUpgrades){const i=Hr.find(a=>a.id===n);i&&i.effect.type===t&&(e+=i.effect.value)}return e}isPurchased(t){return this.purchasedUpgrades.includes(t)}_tryAutoDisplay(){if(this.displayedItems.length>=this.maxSlots)return;const t=this.autoSellRules,e=this.inventory.items.filter(n=>!(n.locked||!t.types.includes(n.type)||n.quality<t.minQuality||t.excludeTraits&&n.traits&&n.traits.length>0)).map(n=>({item:n,value:this._calcValue(n)})).sort((n,i)=>i.value-n.value);for(const{item:n}of e){if(this.displayedItems.length>=this.maxSlots)break;this.displayItem(n.uid)}e.length>0&&C.emit("inventory:changed")}quickSell(t,e){const n=e.removeItem(t);if(!n)return 0;const i=this._calcValue(n),a=Math.max(1,Math.floor(i*.2));return e.addGold(a),C.emit("item:sold",{item:n,price:a}),Tn.add("itemsSold",1),a}quickSellBulk(t,e){let n=0;for(const i of t)n+=this.quickSell(i,e);return n}}function os(s){return typeof s=="string"&&s.startsWith("@")}function ls(s){return s.slice(1)}function xc(s,t){if(os(t)){const e=ls(t),n=Bt[s];return n&&n.category===e}return s===t}function ti(s,t,e=[]){const n=Bt[s];if(!n)throw new Error(`Unknown blueprint: ${s}`);const i={uid:crypto.randomUUID(),blueprintId:s,name:n.name,type:n.type,quality:Math.floor(t),traits:[...e],value:0};return i.value=zi.calcValue(i),i}function bc(s,t,e=[],n=0){const i=he[s];if(!i)throw new Error(`Unknown recipe: ${s}`);if(i.materials.length!==t.length)throw new Error("素材の数が合いません");const a=new Set;for(const p of i.materials){let u=!1;for(let _=0;_<t.length;_++)if(!a.has(_)&&xc(t[_].blueprintId,p)){a.add(_),u=!0;break}if(!u)throw new Error(`素材が条件を満たしていません: ${p}`)}const r=t.reduce((p,u)=>p+u.quality,0),o=t.length>0?r/t.length:50,l={};t.forEach(p=>{const u=new Set;p.traits.forEach(_=>{u.has(_)||(l[_]=(l[_]||0)+1,u.add(_))})});const c={};for(const[p,u]of Object.entries(l))u>=2&&Zn[p]&&Jt[Zn[p]]&&(c[p]=Zn[p]);const d=new Set;t.forEach(p=>{p.traits.forEach(u=>d.add(u))});for(const p of Object.values(c))d.add(p);const h=[],f=new Set;for(const p of e)c[p]&&!f.has(p)?(h.push(c[p]),f.add(p)):d.has(p)&&(f.has(p)||h.push(p));const m={legendary:0,epic:1,rare:2,uncommon:3,common:4};h.sort((p,u)=>{var x,R;const _=m[(x=Jt[p])==null?void 0:x.rarity]??5,b=m[(R=Jt[u])==null?void 0:R.rarity]??5;return _-b}),h.length=Math.min(h.length,Ut.maxTraitSlots);let g=0;for(const p of t)for(const u of p.traits||[]){const _=Jt[u];_&&_.effects&&_.effects.craftQualityBonus&&(g+=_.effects.craftQualityBonus)}const v=Math.min(100,Math.max(0,o+n+g));return ti(i.targetId,v,h)}class ig{constructor(){this.gold=Ut.initialGold,this.items=[],this.maxCapacity=Ut.initialInventoryCapacity;for(const t of Ut.initialItems)this.items.push(ti(t.blueprintId,t.quality,t.traits))}get isFull(){return this.items.length>=this.maxCapacity}get freeSlots(){return Math.max(0,this.maxCapacity-this.items.length)}addGold(t){this.gold+=t,C.emit("gold:changed",{gold:this.gold})}spendGold(t){return this.gold>=t?(this.gold-=t,C.emit("gold:changed",{gold:this.gold}),!0):!1}addItem(t){if(this.isFull){const e=Date.now();return(!this._lastFullToast||e-this._lastFullToast>5e3)&&(C.emit("toast",{message:"⚠️ 倉庫がいっぱいです！素材を整理しましょう",type:"warning"}),this._lastFullToast=e),!1}return this.items.push(t),C.emit("inventory:changed"),!0}forceAddItem(t){this.items.push(t),C.emit("inventory:changed")}removeItem(t,e=!1){const n=this.items.findIndex(i=>i.uid===t);return n===-1||this.items[n].locked&&!e?null:this.items.splice(n,1)[0]}toggleLock(t){const e=this.items.find(n=>n.uid===t);return e?(e.locked=!e.locked,C.emit("inventory:changed"),e.locked):!1}getUnlockedItems(){return this.items.filter(t=>!t.locked)}getItems(){return this.items}getItemsByBlueprint(t){return this.items.filter(e=>e.blueprintId===t)}getItemsByCategory(t){return this.items.filter(e=>{const n=Bt[e.blueprintId];return n&&n.category===t})}expandCapacity(t){this.maxCapacity+=t,C.emit("toast",{message:`📦 倉庫容量が ${t} 増えました！（${this.maxCapacity}枠）`,type:"success"})}}const sg=50,ag=20;class rg{constructor(t){this.inventory=t,this.adventurers=[],us.forEach(e=>{this.adventurers.push({...e,level:1,exp:0,status:"idle",timer:0,maxTimer:0,assignedArea:"plains",currentArea:null,equipment:{weapon:null}})}),this._unlockUnsub=C.on("adventurer:unlock",e=>{const n=e.adventurer;if(!n||this.adventurers.find(a=>a.id===n.id))return;const i={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}};this.adventurers.push(i),C.emit("adventurer:joined",{adventurer:i})})}update(t){this.adventurers.forEach(e=>{e.status==="exploring"?(e.timer-=t,e.timer<=0&&this._completeExploration(e)):e.status==="idle"&&this._autoDispatch(e)})}assignArea(t,e){const n=this.adventurers.find(a=>a.id===t);if(!n)return!1;const i=se[e];return!i||!i.unlocked?!1:(n.assignedArea=e,!0)}_autoDispatch(t){if(this.inventory.items.length>=this.inventory.maxCapacity*2)return;const e=t.assignedArea,n=se[e];if(!n||!n.unlocked){t.assignedArea="plains";return}const i=this._calcExploreTime(t,n);t.status="exploring",t.currentArea=e,t.timer=i,t.maxTimer=i,Tn.add("expeditionsSent",1)}_calcExploreTime(t,e){const n=Math.max(.1,1-(t.level-1)*Ys.timeReduction),i=this._getWeaponTraitEffects(t).speedBonus||0,a=Math.max(.1,1-i/100),r={effectType:"explore_speed",result:0};C.emit("upgrade:queryBonus",r);const o=Math.max(.1,1-r.result);return Math.max(8,Math.ceil(e.baseTime*(t.exploreTimeMultiplier||1)*n*a*o))}calcSuccessRate(t,e){const n=(t.level-1)*Ys.successBonus,i=this._getWeaponTraitEffects(t).exploreSuccess||0,a=(e.difficulty||0)*ag,r=sg+n+i-a;return Math.min(100,Math.max(10,r))}_getWeaponTraitEffects(t){const e={};if(!t.equipment.weapon||!t.equipment.weapon.traits)return e;for(const n of t.equipment.weapon.traits){const i=Jt[n];if(!(!i||!i.effects))for(const[a,r]of Object.entries(i.effects))e[a]=(e[a]||0)+r}return e}_completeExploration(t){const e=se[t.currentArea],n=t.currentArea;if(!e){t.status="idle";return}const i=this.calcSuccessRate(t,e),a=Math.random()*100<i,r=[];if(a){const c=this._getWeaponTraitEffects(t),d=e.dropCountMin||Ut.exploreDropCountMin,h=e.dropCountMax||Ut.exploreDropCountMax,f=c.dropBonus||0,m=d+Math.floor(Math.random()*(h-d+1))+f,g=e.dropTable,v=g.reduce((p,u)=>p+u.weight,0);for(let p=0;p<m;p++){let u=Math.random()*v,_=g[0].blueprintId;for(const G of g)if(u-=G.weight,u<=0){_=G.blueprintId;break}const b=Bt[_];if(!b)continue;const x=e.qualityMin||Ut.exploreQualityMin,R=e.qualityMax||Ut.exploreQualityMax;let T;if(t.equipment.weapon){const G=t.equipment.weapon.quality,z=x+(R-x)*(G/100),$=(R-x)*.1;T=Math.round(z+(Math.random()*$*2-$))}else T=x+Math.floor(Math.random()*10);T+=(t.level-1)*Ys.qualityBonus,T+=c.qualityBonus||0,T=Math.min(100,Math.max(1,T));const A=[];let I=e.traitPool?[...e.traitPool]:[];I=I.sort(()=>.5-Math.random());const E=c.traitChanceBonus||0;let M=Math.min(.8,Ut.traitChance+E/100);for(const G of I){if(A.length>=3)break;Math.random()<M&&(A.push(G),M=Math.min(.8,M*.35))}if(A.length<3&&Math.random()<Ut.traitBonusRollChance){const G=this._rollBonusTrait(I,A);G&&A.push(G)}const P={uid:crypto.randomUUID(),blueprintId:_,name:b.name,type:b.type,quality:T,traits:A,tier:b.tier||1};r.push(P),this.inventory.addItem(P)||r.pop()}}const o=e.expReward||1,l=a?o:Math.max(1,Math.floor(o/2));t.exp+=l,this._checkLevelUp(t),t.status="idle",t.currentArea=null,t.timer=0,C.emit("adventurer:return",{adventurer:t,items:r,areaId:n,success:a,successRate:i}),a&&Tn.add("materialsGathered",r.length)}_rollBonusTrait(t,e){const n=Ut.traitBonusRarityWeights,i=new Set([...t,...e]),a=[];for(const[l,c]of Object.entries(Jt)){if(i.has(l))continue;const d=c.rarity||"common",h=n[d];h&&h>0&&a.push({name:l,weight:h})}if(a.length===0)return null;const r=a.reduce((l,c)=>l+c.weight,0);let o=Math.random()*r;for(const l of a)if(o-=l.weight,o<=0)return l.name;return a[0].name}_checkLevelUp(t){for(;t.level<cs.length&&t.exp>=cs[t.level];)t.level++,C.emit("adventurer:levelUp",{adventurer:t})}canEquip(t,e){const n=this.adventurers.find(a=>a.id===t);if(!n)return!1;if(!n.allowedEquipTypes||n.allowedEquipTypes.length===0)return!0;const i=Bt[e.blueprintId];return!i||!i.equipType?!0:n.allowedEquipTypes.includes(i.equipType)}equipWeapon(t,e){const n=this.adventurers.find(r=>r.id===t);if(!n)return!1;const i=this.inventory.items.find(r=>r.uid===e);if(i&&!this.canEquip(t,i))return!1;const a=this.inventory.removeItem(e);return a?(n.equipment.weapon&&this.inventory.addItem(n.equipment.weapon),n.equipment.weapon=a,C.emit("inventory:changed"),!0):!1}unequipWeapon(t){const e=this.adventurers.find(n=>n.id===t);return!e||!e.equipment.weapon?!1:(this.inventory.addItem(e.equipment.weapon),e.equipment.weapon=null,C.emit("inventory:changed"),!0)}getAdventurers(){return this.adventurers}getUnlockedAreas(){return Object.values(se).filter(t=>t.unlocked)}dispose(){var t;(t=this._unlockUnsub)==null||t.call(this)}}class og{constructor(t,e){this.inventory=t,this.quest=e,this.day=Ut.startingDay,this.dayTimer=0,this.dayDuration=Ut.dayDurationSeconds,this.totalSales=0,this.isGameOver=!1,this.paused=!1,this.currentRankIndex=0,this.rankBossAvailable=!1,this.defeatedBosses=[],this._unsubs=[],this._unsubs.push(C.on("item:sold",n=>{this.totalSales+=n.price||0,Tn.add("totalRevenue",n.price||0),this.quest&&typeof this.quest.updateTotalSales=="function"&&this.quest.updateTotalSales(this.totalSales),this._checkRankUp()})),this._unsubs.push(C.on("item:crafted",()=>this._checkRankUp())),this._unsubs.push(C.on("day:newDay",()=>this._checkRankUp())),this._unsubs.push(C.on("upgrade:purchased",()=>this._checkRankUp())),this._unsubs.push(C.on("adventurer:return",()=>this._checkRankUp())),this._unsubs.push(C.on("game:pause",()=>{this.paused=!0})),this._unsubs.push(C.on("game:resume",()=>{this.paused=!1})),this._unsubs.push(C.on("battle:win",n=>{n.rankIndex!=null&&this._doRankUp(n.rankIndex)}))}get dayProgress(){return Math.min(1,this.dayTimer/this.dayDuration)}get currentRank(){return Ut.ranks[this.currentRankIndex]}get currentRent(){return Ut.dailyRent+this.currentRankIndex*Ut.rentIncreasePerRank}update(t){this.isGameOver||this.paused||(this.dayTimer+=t,this.dayTimer>=this.dayDuration&&this._advanceDay())}skipDay(){this.isGameOver||this._advanceDay()}setPaused(t){this.paused=t}_advanceDay(){this.dayTimer=0;const t=this.currentRent;if(this.inventory.gold<t){this.isGameOver=!0,C.emit("game:over",{day:this.day,totalSales:this.totalSales,rank:this.currentRank.name,rent:t,reason:`維持費 ${t}G を支払えませんでした…`});return}this.inventory.spendGold(t),this.day++,Tn.add("totalDays",1),C.emit("day:newDay",{day:this.day,rent:t})}_checkRankUp(){const t=Ut.ranks;if(this.currentRankIndex<t.length-1){const e=t[this.currentRankIndex+1];this.totalSales>=e.requiredSales&&(!this.quest||this.quest.isRankQuestSatisfied(this.currentRankIndex+1))&&(this.rankBossAvailable||(this.rankBossAvailable=!0,C.emit("rank:boss_available",{rankIndex:this.currentRankIndex+1,bossId:e.requiredBossId})))}}_doRankUp(t){if(t!==this.currentRankIndex+1||this._rankingUp)return;this._rankingUp=!0,this.currentRankIndex=t,this.rankBossAvailable=!1;const n=Ut.ranks[this.currentRankIndex],i=[];if(n.newRecipes)for(const r of n.newRecipes)he[r]&&(he[r].unlocked=!0,i.push(r));if(i.length>0&&C.emit("recipe:unlocked",{keys:i,count:i.length}),n.newAreas)for(const r of n.newAreas)se[r]&&(se[r].unlocked=!0,C.emit("area:unlocked",{name:se[r].name,key:r}));const a=ii.filter(r=>r.unlockRank===n.rank);for(const r of a)C.emit("adventurer:unlock",{adventurer:r});C.emit("rank:up",{rank:n.name,index:this.currentRankIndex}),this.currentRankIndex>=Ut.goalShopRank-1&&C.emit("game:clear",{day:this.day,totalSales:this.totalSales,rank:n.name}),this._rankingUp=!1,this._checkRankUp()}dispose(){this._unsubs.forEach(t=>t())}}const Al=[{name:"旅の商人",icon:"🧳",dialogue:"珍しいものはないかね？"},{name:"見習い騎士",icon:"⚔️",dialogue:"武器を探しています！"},{name:"森の薬師",icon:"🌿",dialogue:"良い薬草はある？"},{name:"お嬢様",icon:"👗",dialogue:"キラキラしたものが欲しいわ"},{name:"鍛冶屋の親方",icon:"🔨",dialogue:"素材を仕入れたい"},{name:"冒険者",icon:"🗡️",dialogue:"冒険に必要なものを！"},{name:"魔法使い",icon:"🧙",dialogue:"魔法の触媒を探している"},{name:"村の子供",icon:"👦",dialogue:"かっこいいの、ある？"}],Cl=[["equipment"],["consumable"],["accessory"],["material"],["equipment","consumable"],["equipment","accessory"],["consumable","material"]];class lg{constructor(t,e,n,i){this.inventory=t,this.shop=e,this.events=n,this.reputation=i,this.customers=[],this.spawnTimer=0,this.customersToday=0,this._unsub=C.on("day:newDay",()=>{this.customersToday=0,this.spawnTimer=0,this.customers=[]})}_getUpgradeBonus(t){const e={effectType:t,result:0};return C.emit("upgrade:queryBonus",e),e.result}update(t){const e=this.reputation?this.reputation.getCustomerRateMultiplier():1,n=this._getUpgradeBonus("customer_rate"),i=Ut.customerSpawnInterval/(e+n);this.spawnTimer+=t,this.spawnTimer>=i&&(this.spawnTimer=0,this.customersToday<Ut.maxCustomersPerDay&&this._spawnCustomer());for(let a=this.customers.length-1;a>=0;a--){const r=this.customers[a];r.timer-=t,r.checkTimer=(r.checkTimer||0)+t,!(r.checkTimer>=3&&(r.checkTimer=0,this._tryPurchase(r),this.customers.indexOf(r)===-1))&&r.timer<=0&&(this.customers.splice(a,1),C.emit("customer:left",{customer:r,reason:"timeout"}))}}_spawnCustomer(){const t=Al[Math.floor(Math.random()*Al.length)],e=Cl[Math.floor(Math.random()*Cl.length)],n=Ut.customerPatienceSeconds+this._getUpgradeBonus("customer_patience"),i={id:crypto.randomUUID(),...t,demandTypes:e,timer:n,maxTimer:n,checkTimer:0};this.customers.push(i),this.customersToday++,C.emit("customer:arrived",{customer:i})}_tryPurchase(t){const e=this.shop.displayedItems.filter(o=>t.demandTypes.includes(o.type));if(e.length===0)return;const n=e.reduce((o,l)=>(l.value||0)>(o.value||0)?l:o),i=this.reputation?this.reputation.getPriceBonus():0,a=Ut.customerBonusMultiplier*(1+i);if(this.shop.processSale(n,a)){const o=this.customers.indexOf(t);o!==-1&&this.customers.splice(o,1),C.emit("customer:bought",{customer:t,item:n})}}getActiveCustomers(){return this.customers}dispose(){var t;(t=this._unsub)==null||t.call(this)}}const Xa=[{id:"merchant_visit",name:"旅の商人",icon:"🧳",description:"旅の商人が珍しい素材を持ってきた！安く買える。",effect:"bonus_material",duration:0,weight:25},{id:"storm",name:"暴風雨",icon:"🌧️",description:"激しい嵐が来た。探索時間が50%長くなる。",effect:"explore_slow",multiplier:1.5,duration:1,weight:15},{id:"festival",name:"収穫祭",icon:"🎉",description:"町でお祭り！来客数が2倍に。",effect:"double_customers",duration:1,weight:15},{id:"tax",name:"王国の徴税",icon:"📜",description:"王国から臨時の税金が課されました…",effect:"pay_tax",taxAmount:50,duration:0,weight:12},{id:"lucky_find",name:"幸運の発見",icon:"🍀",description:"道端で素材を拾った！",effect:"free_material",duration:0,weight:20},{id:"reputation",name:"評判の広まり",icon:"📢",description:"店の評判が広まった！次の売却価格が30%アップ。",effect:"sell_bonus",multiplier:1.3,duration:1,weight:13}];class cg{constructor(t){this.inventory=t,this.activeEffects=[],this._newDayUnsub=C.on("day:newDay",()=>this._onNewDay())}getActiveEffects(){return this.activeEffects}hasEffect(t){return this.activeEffects.some(e=>e.effect===t)}getEffectMultiplier(t){const e=this.activeEffects.find(n=>n.effect===t);return e?e.multiplier:1}_onNewDay(){this.activeEffects=this.activeEffects.filter(t=>(t.remainingDays--,t.remainingDays>0)),Math.random()<.5&&this._triggerRandomEvent()}_triggerRandomEvent(){const t=this._rollEvent();if(t)switch(C.emit("event:triggered",{name:t.name,icon:t.icon,description:t.description}),t.effect){case"bonus_material":{const e=Object.values(se).filter(i=>i.unlocked),n=e[Math.floor(Math.random()*e.length)];if(n&&n.dropTable&&n.dropTable.length>0)for(let i=0;i<2;i++){const a=n.dropTable[Math.floor(Math.random()*n.dropTable.length)];try{const r=ti(a.blueprintId,30+Math.floor(Math.random()*30),[]);this.inventory.addItem(r)}catch{console.warn("[RandomEvent] 素材生成失敗:",a.blueprintId)}}C.emit("inventory:changed");break}case"free_material":{const e=["wood","stone","herb","slime_jelly"],n=e[Math.floor(Math.random()*e.length)],i=ti(n,40+Math.floor(Math.random()*30),[]);this.inventory.addItem(i),C.emit("inventory:changed");break}case"pay_tax":{this.inventory.spendGold(t.taxAmount)||C.emit("toast",{message:"ゴールド不足のため税金を支払えませんでした",type:"warning"});break}case"explore_slow":case"double_customers":case"sell_bonus":{this.activeEffects.push({effect:t.effect,multiplier:t.multiplier||1,remainingDays:t.duration,name:t.name,icon:t.icon});break}}}dispose(){var t;(t=this._newDayUnsub)==null||t.call(this)}_rollEvent(){const t=Xa.reduce((n,i)=>n+i.weight,0);let e=Math.random()*t;for(const n of Xa)if(e-=n.weight,e<=0)return n;return Xa[0]}}const dg=Ae("/bgm/title_01.mp3"),hg=Ae("/bgm/Ending_01.mp3"),ug=Ae("/bgm/battle_01.mp3"),fg=Array.from({length:15},(s,t)=>Ae(`/bgm/bgm_${String(t+1).padStart(2,"0")}.mp3`));class pg{constructor(){this.ctx=null,this.masterGain=null,this.bgmGain=null,this.seGain=null,this.muted=!1,this.initialized=!1,this.masterVolume=.3,this.bgmVolume=.5,this.seVolume=.5,this.audioEl=null,this.bgmSource=null,this.shuffledPlaylist=[],this.currentTrackIndex=0,this.isTitleBGM=!1,this.isBattleBGM=!1,this.preBattleTrackSrc=null,this.preBattleTrackTime=0,this.isFading=!1,this.proceduralActive=!1,this._bgmTimeout=null;const t=localStorage.getItem("voxelshop_sound");if(t)try{const e=JSON.parse(t);this.muted=e.muted||!1,e.masterVolume!==void 0&&(this.masterVolume=e.masterVolume),e.bgmVolume!==void 0&&(this.bgmVolume=e.bgmVolume),e.seVolume!==void 0&&(this.seVolume=e.seVolume)}catch{}}init(){if(!this.initialized){this.initialized=!0,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.masterVolume,this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=this.bgmVolume,this.bgmGain.connect(this.masterGain),this.seGain=this.ctx.createGain(),this.seGain.gain.value=this.seVolume,this.seGain.connect(this.masterGain),this.audioEl=new Audio,this.audioEl.crossOrigin="anonymous",this.audioEl.loop=!1,this.audioEl.volume=1;try{this.bgmSource=this.ctx.createMediaElementSource(this.audioEl),this.bgmSource.connect(this.bgmGain)}catch{console.warn("[SoundManager] MediaElementSource not supported, using direct audio")}this.audioEl.addEventListener("ended",()=>{this.isTitleBGM?(this.audioEl.currentTime=0,this.audioEl.play().catch(()=>{})):this.playNextTrack()}),this._shufflePlaylist(),this._bindEvents()}}_bindEvents(){C.on("item:crafted",t=>{var e;((e=t==null?void 0:t.item)==null?void 0:e.quality)>=81?this.playLegendaryCraft():this.playCraftSuccess()}),C.on("item:sold",()=>this.playSellCoin()),C.on("customer:arrived",()=>this.playDoorBell()),C.on("rank:up",()=>this.playFanfare()),C.on("adventurer:levelUp",()=>this.playLevelUp()),C.on("event:triggered",()=>this.playEventChime()),C.on("day:tick",()=>this.playDayTick()),C.on("game:over",()=>this.playGameOver()),C.on("tab:switched",()=>this.playTabSwitch()),C.on("item:displayed",()=>this.playItemDisplay()),C.on("item:removed",()=>this.playItemRemove()),C.on("adventurer:return",()=>this.playItemAcquire()),C.on("day:newDay",()=>this._onNewDay()),C.on("game:clear",()=>this.playEndingBGM()),C.on("battle:start",()=>this.startBattleBGM()),C.on("battle:win",()=>{this.playBattleVictory(),setTimeout(()=>this.stopBattleBGM(),2500)}),C.on("battle:lose",()=>{this.playBattleDefeat(),setTimeout(()=>this.stopBattleBGM(),2e3)}),C.on("battle:se:advAttack",()=>this.playBattleAdvAttack()),C.on("battle:se:bossAttack",()=>this.playBattleBossAttack()),C.on("battle:se:itemUse",()=>this.playBattleItemUse()),C.on("battle:se:heal",()=>this.playBattleHeal()),C.on("battle:se:buff",()=>this.playBattleBuff()),C.on("battle:se:debuff",()=>this.playBattleDebuff()),C.on("battle:se:damage",()=>this.playBattleDamage()),C.on("battle:se:stun",()=>this.playBattleStun()),C.on("battle:se:ko",()=>this.playBattleKO()),C.on("battle:se:revive",()=>this.playBattleRevive()),C.on("battle:se:phaseShift",()=>this.playBattlePhaseShift()),C.on("battle:se:bossAoe",()=>this.playBattleBossAttack()),C.on("battle:se:bossHeavy",()=>this.playBattleBossAttack()),C.on("battle:se:bossHeal",()=>this.playBattleHeal()),C.on("battle:se:chain",()=>this.playBattleBuff())}_saveSettings(){localStorage.setItem("voxelshop_sound",JSON.stringify({muted:this.muted,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,seVolume:this.seVolume}))}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.masterGain.gain.setTargetAtTime(this.muted?0:this.masterVolume,this.ctx.currentTime,.1),!this.bgmSource&&this.audioEl&&(this.audioEl.volume=this.muted?0:this.masterVolume),this._saveSettings(),this.muted}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&!this.muted&&this.masterGain.gain.setTargetAtTime(this.masterVolume,this.ctx.currentTime,.05),this._saveSettings()}setBgmVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.bgmGain&&this.bgmGain.gain.setTargetAtTime(this.bgmVolume,this.ctx.currentTime,.05),this._saveSettings()}setSeVolume(t){this.seVolume=Math.max(0,Math.min(1,t)),this.seGain&&this.seGain.gain.setTargetAtTime(this.seVolume,this.ctx.currentTime,.05),this._saveSettings()}waitForCurrentTrack(){return new Promise(t=>{if(!this.audioEl||this.audioEl.readyState>=3)return t();const e=()=>{this.audioEl.removeEventListener("canplaythrough",e),this.audioEl.removeEventListener("error",e),t()};this.audioEl.addEventListener("canplaythrough",e,{once:!0}),this.audioEl.addEventListener("error",e,{once:!0})})}startTitleBGM(){this.isTitleBGM=!0,this._playTrack(dg)}startGameBGM(){if(this.isTitleBGM=!1,this.audioEl&&!this.audioEl.paused&&this.audioEl.src.includes("title_01")){this.audioEl.loop=!1;const t=()=>{this.audioEl.removeEventListener("ended",t),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])};this.audioEl.addEventListener("ended",t,{once:!0});return}this._playTrack(this.shuffledPlaylist[this.currentTrackIndex])}startBattleBGM(){this.audioEl&&!this.isBattleBGM&&(this.preBattleTrackSrc=this.audioEl.src,this.preBattleTrackTime=this.audioEl.currentTime),this.isBattleBGM=!0,this._fadeOutThen(()=>{this._playTrack(ug),this.audioEl&&(this.audioEl.loop=!0)},800)}stopBattleBGM(){this.isBattleBGM&&(this.isBattleBGM=!1,this._fadeOutThen(()=>{this.audioEl&&(this.audioEl.loop=!1),this.preBattleTrackSrc?(this._playTrack(this.preBattleTrackSrc),this.audioEl&&(this.audioEl.currentTime=Math.max(0,this.preBattleTrackTime-2)),this.preBattleTrackSrc=null):this.playNextTrack()},1200))}playEndingBGM(){this.isTitleBGM=!1,this._fadeOutThen(()=>{this._playTrack(hg)})}playNextTrack(){this.isTitleBGM||(this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this._shufflePlaylist(),this._playTrack(this.shuffledPlaylist[this.currentTrackIndex]))}stopBGM(){this.audioEl&&(this.audioEl.pause(),this.audioEl.currentTime=0),this._stopProcedural()}_onNewDay(){this.isTitleBGM||this.isBattleBGM||this._fadeOutThen(()=>{this.playNextTrack()})}_fadeOutThen(t,e=2e3){if(!this.bgmGain||this.isFading){t();return}this.isFading=!0;const n=this.ctx.currentTime;this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value,n),this.bgmGain.gain.linearRampToValueAtTime(0,n+e/1e3),setTimeout(()=>{this.audioEl&&this.audioEl.pause(),this.bgmGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.isFading=!1,t()},e)}_playTrack(t){if(!this.audioEl)return;this._stopProcedural(),this.audioEl.pause(),this.audioEl.src=t,this.audioEl.load();const e=this.audioEl.play();e&&e.catch(n=>{n.name!=="AbortError"&&(console.warn("[SoundManager] Track play failed:",n.message),this._startProcedural())})}_shufflePlaylist(){this.shuffledPlaylist=[...fg];for(let t=this.shuffledPlaylist.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[this.shuffledPlaylist[t],this.shuffledPlaylist[e]]=[this.shuffledPlaylist[e],this.shuffledPlaylist[t]]}this.currentTrackIndex=0}_startProcedural(){this.proceduralActive||(this.proceduralActive=!0,this._playProceduralLoop())}_stopProcedural(){this.proceduralActive=!1,this._bgmTimeout&&(clearTimeout(this._bgmTimeout),this._bgmTimeout=null)}_playProceduralLoop(){if(!this.proceduralActive||!this.ctx)return;const t=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],e=this.ctx.currentTime,n=6+Math.floor(Math.random()*4),i=n*1.2;for(let r=0;r<n;r++){const o=t[Math.floor(Math.random()*t.length)],l=e+r*1.2+Math.random()*.2,c=.8+Math.random()*.6;this._playBGMNote(o,l,c)}const a=t[Math.floor(Math.random()*4)];this._playPad(a,e,i+1),this._bgmTimeout=setTimeout(()=>this._playProceduralLoop(),(i+1.5)*1e3)}_playBGMNote(t,e,n){const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="sine",i.frequency.value=t,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.15,e+.08),a.gain.exponentialRampToValueAtTime(.001,e+n),i.connect(a),a.connect(this.bgmGain),i.start(e),i.stop(e+n+.1),i.onended=()=>{i.disconnect(),a.disconnect()}}_playPad(t,e,n){[t*.5,t*.5*1.25,t*.5*1.5].forEach(a=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();r.type="triangle",r.frequency.value=a,l.type="lowpass",l.frequency.value=400,l.Q.value=.5,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.04,e+1),o.gain.linearRampToValueAtTime(.04,e+n-1),o.gain.exponentialRampToValueAtTime(.001,e+n),r.connect(l),l.connect(o),o.connect(this.bgmGain),r.start(e),r.stop(e+n+.1),r.onended=()=>{r.disconnect(),l.disconnect(),o.disconnect()}})}playCraftSuccess(){if(!this.ctx)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{this._playSENote(n,t+i*.08,.3,"sine",.15)})}playPuzzleMatch(t=1){if(!this.ctx)return;const e=this.ctx.currentTime,n=440+t*80;this._playSENote(n,e,.15,"square",.08),this._playSENote(n*1.25,e+.06,.12,"square",.06)}playSellCoin(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(1200,t,.08,"square",.06),this._playSENote(1800,t+.04,.06,"square",.04),this._playSENote(2400,t+.07,.1,"sine",.05)}playDoorBell(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(880,t,.4,"sine",.12),this._playSENote(1108.73,t+.15,.35,"sine",.1)}playFanfare(){if(!this.ctx)return;const t=this.ctx.currentTime,e=[523.25,523.25,659.25,783.99,659.25,783.99,1046.5],n=[0,.12,.24,.36,.48,.6,.72],i=[.1,.1,.1,.15,.1,.15,.6];e.forEach((a,r)=>{this._playSENote(a,t+n[r],i[r],"square",.1)})}playLevelUp(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<6;e++)this._playSENote(400+e*120,t+e*.06,.15,"sine",.1)}playEventChime(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(660,t,.25,"sine",.1),this._playSENote(880,t+.12,.3,"sine",.08),this._playSENote(1100,t+.24,.25,"sine",.06)}playDayTick(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(440,t,.15,"triangle",.05)}playGameOver(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(110,t,1.5,"sawtooth",.15),this._playSENote(82.41,t+.1,1.2,"sine",.12)}playLegendaryCraft(){if(!this.ctx)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51,1567.98].forEach((n,i)=>{this._playSENote(n,t+i*.06,.4,"sine",.12)}),this._playSENote(1046.5,t+.4,.8,"sine",.08),this._playSENote(1318.51,t+.4,.8,"sine",.06),this._playSENote(1567.98,t+.4,.8,"sine",.05)}playTabSwitch(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(600,t,.05,"sine",.04),this._playSENote(800,t+.03,.04,"sine",.03)}playItemDisplay(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(300,t,.1,"triangle",.06),this._playSENote(450,t+.05,.08,"sine",.04)}playItemRemove(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(500,t,.06,"sine",.04),this._playSENote(350,t+.04,.08,"sine",.03)}playItemAcquire(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(880,t,.12,"sine",.08),this._playSENote(1320,t+.06,.15,"sine",.06),this._playSENote(1760,t+.12,.1,"sine",.04)}playError(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(150,t,.08,"square",.08),this._playSENote(120,t+.1,.1,"square",.06)}playBattleAdvAttack(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(800,t,.06,"sawtooth",.1),this._playSENote(1200,t+.02,.04,"square",.08),this._playSENote(600,t+.05,.08,"triangle",.05),this._playNoiseBurst(t+.01,.04,.06)}playBattleBossAttack(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(120,t,.15,"sawtooth",.14),this._playSENote(80,t+.02,.2,"sine",.1),this._playSENote(200,t+.04,.08,"square",.08),this._playNoiseBurst(t,.06,.1)}playBattleItemUse(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(660,t,.08,"sine",.1),this._playSENote(990,t+.04,.06,"sine",.08),this._playSENote(1320,t+.08,.1,"sine",.06)}playBattleHeal(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047,1319].forEach((n,i)=>{this._playSENote(n,t+i*.06,.25,"sine",.08)})}playBattleBuff(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(440,t,.12,"triangle",.08),this._playSENote(554,t+.06,.12,"triangle",.07),this._playSENote(659,t+.12,.2,"sine",.09),this._playSENote(880,t+.18,.25,"sine",.06)}playBattleDebuff(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(500,t,.12,"sawtooth",.06),this._playSENote(350,t+.08,.15,"sawtooth",.05),this._playSENote(200,t+.16,.2,"sine",.07)}playBattleKO(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(300,t,.1,"sawtooth",.1),this._playSENote(200,t+.08,.15,"sine",.08),this._playSENote(100,t+.18,.3,"sine",.06)}playBattleDamage(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(150,t,.12,"sawtooth",.12),this._playSENote(300,t+.02,.08,"square",.1),this._playSENote(100,t+.05,.15,"sine",.08),this._playNoiseBurst(t,.08,.1),this._playSENote(500,t+.08,.06,"sawtooth",.06)}playBattleStun(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(800,t,.04,"square",.1),this._playSENote(1200,t+.03,.03,"square",.08),this._playSENote(600,t+.06,.05,"sawtooth",.07),this._playSENote(1e3,t+.09,.04,"square",.06),this._playSENote(400,t+.12,.08,"triangle",.05),this._playNoiseBurst(t+.02,.06,.06)}playBattlePhaseShift(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(80,t,.6,"sawtooth",.12),this._playSENote(100,t+.1,.5,"sine",.1),this._playSENote(60,t+.2,.4,"sawtooth",.08),this._playSENote(200,t+.3,.2,"square",.06),this._playSENote(400,t+.4,.2,"square",.05),this._playSENote(600,t+.5,.3,"sine",.04),this._playNoiseBurst(t+.1,.15,.08)}playBattleRevive(){if(!this.ctx)return;const t=this.ctx.currentTime;[330,440,554,659,880,1047].forEach((n,i)=>{this._playSENote(n,t+i*.07,.3,"sine",.07)})}playBattleVictory(){if(!this.ctx)return;const t=this.ctx.currentTime,e=[523,523,659,784,1047,784,1047,1319],n=[0,.15,.3,.45,.6,.75,.95,1.15],i=[.12,.12,.12,.15,.12,.15,.2,.8];e.forEach((a,r)=>{this._playSENote(a,t+n[r],i[r],"square",.12)}),this._playSENote(1047,t+1.15,.8,"sine",.06),this._playSENote(1319,t+1.15,.8,"sine",.05),this._playSENote(1568,t+1.15,.8,"sine",.04)}playBattleDefeat(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(220,t,.5,"sine",.1),this._playSENote(196,t+.3,.5,"sine",.08),this._playSENote(165,t+.6,.6,"sine",.1),this._playSENote(110,t+1,1.2,"sine",.12)}_playNoiseBurst(t,e,n=.05){if(!this.ctx)return;const i=this.ctx.sampleRate*e,a=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=a.getChannelData(0);for(let d=0;d<i;d++)r[d]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=a;const l=this.ctx.createGain();l.gain.setValueAtTime(n,t),l.gain.exponentialRampToValueAtTime(.001,t+e);const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1e3,c.Q.value=.8,o.connect(c),c.connect(l),l.connect(this.seGain),o.start(t),o.stop(t+e+.05),o.onended=()=>{o.disconnect(),c.disconnect(),l.disconnect()}}playHover(){if(!this.ctx)return;const t=this.ctx.currentTime;this._playSENote(700,t,.02,"sine",.02)}_playSENote(t,e,n,i="sine",a=.1){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=i,r.frequency.value=t,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(a,e+.01),o.gain.exponentialRampToValueAtTime(.001,e+n),r.connect(o),o.connect(this.seGain),r.start(e),r.stop(e+n+.1),r.onended=()=>{r.disconnect(),o.disconnect()}}}const Ee=new pg,Rl=[{name:"粗悪",min:0,max:20,css:"q-poor",icon:"▪",color:"#888"},{name:"普通",min:21,max:40,css:"q-common",icon:"▫",color:"#c8bea7"},{name:"良品",min:41,max:60,css:"q-fine",icon:"◆",color:"#7daa68"},{name:"優品",min:61,max:80,css:"q-excellent",icon:"★",color:"#7ab0c4"},{name:"極上",min:81,max:100,css:"q-legendary",icon:"✦",color:"#e8b84b"}],Pl={material:{icon:"🪨",label:"素材",css:"type-material",emoji:"🪨"},equipment:{icon:"⚔️",label:"装備",css:"type-equipment",emoji:"⚔️"},consumable:{icon:"🧪",label:"消耗品",css:"type-consumable",emoji:"🧪"},accessory:{icon:"💎",label:"アクセサリ",css:"type-accessory",emoji:"💎"}};function Ke(s){return Rl.find(t=>s>=t.min&&s<=t.max)||Rl[0]}function Ye(s){return Pl[s]||Pl.material}function mg(s){const t=Jt[s];return t?`trait-rarity-${t.rarity||"common"}`:""}function nn(s,t=""){const e=Jt[s],n=mg(s),i=(e==null?void 0:e.description)??"",a=(e==null?void 0:e.rarity)??"";return`<span class="trait-badge ${n} ${t}" data-tooltip="${i}" data-tooltip-title="${s}" data-tooltip-rarity="${a}">${s}</span>`}function gg(s){const t=Bt[s.blueprintId];return t&&t.image?Ae(t.image):null}function vg(s){const t=Bt[s.blueprintId];if(!t||!t.battleEffect)return"";const e=t.battleEffect;let n="",i="⚔️";return e.type==="heal"?(i="❤️",n=`HP ${e.value} 回復`):e.type==="healfull"?(i="❤️‍🩹",n="HP 全回復"):e.type==="revive"?(i="✨",n=`復活 (HP ${e.value})`):e.type==="buff"?(i="⬆️",n=`${e.stat==="atk"?"攻撃":e.stat==="def"?"防御":"素早さ"}+${e.amount} (${e.duration}秒)`):e.type==="debuff"?(i="⬇️",n=`敵${e.stat==="atk"?"攻撃":e.stat==="def"?"防御":"素早さ"}${e.amount} (${e.duration}秒)`):e.type==="damage"?(i="💥",n=`ボスに ${e.value} ダメージ`):e.type==="stun"&&(i="⚡",n=`ボスをスタン (${e.duration}秒)`),`<div class="item-battle-effect"><span class="battle-effect-icon">${i}</span><span class="battle-effect-desc">戦闘: ${n}</span></div>`}function ho(s,t){const e=gg(s);return e?`<div class="item-card-image"><img src="${e}" alt="${s.name}" /></div>`:`<div class="item-card-image item-card-image-placeholder"><span class="item-card-emoji">${t.emoji}</span></div>`}function _g(s){const t=Jt[s];if(!(t!=null&&t.effects))return"";const e={exploreSuccess:n=>`探索成功率 ${n>0?"+":""}${n}%`,speedBonus:n=>`探索速度 +${n}%`,dropBonus:n=>`ドロップ +${n}`,qualityBonus:n=>`素材品質 +${n}`,craftQualityBonus:n=>`調合品質 +${n}`,sellBonus:n=>`売値 ${n>0?"+":""}${n}%`,battleAtk:n=>`攻撃力 +${n} ※バトル`,battleDef:n=>`防御力 +${n} ※バトル`,battleSpd:n=>`素早さ +${n} ※バトル`,battleHp:n=>`最大HP +${n} ※バトル`,startAtb:n=>`ATB先行 +${n} ※バトル`,battleRegen:n=>`HP毎秒回復 +${n} ※バトル`,battleDmgReduction:n=>`ダメージ軽減 -${n} ※バトル`,traitChanceBonus:n=>`特性付与率 +${n}%`};return Object.entries(t.effects).filter(([,n])=>n!==0).map(([n,i])=>{const a=e[n];return a?`<span class="trait-effect-line">${a(i)}</span>`:""}).filter(Boolean).join("")}function yg(s){const t=Ke(s.quality),e=Ye(s.type),n=s.traits.length>0?s.traits.map(o=>{const l=Jt[o],c=l?`trait-rarity-${l.rarity||"common"}`:"",d=_g(o);return`
          <div class="detail-trait-row">
            <span class="trait-badge ${c}">${o}</span>
            <div class="detail-trait-effects">${d||'<span class="trait-effect-line text-dim">—</span>'}</div>
          </div>
        `}).join(""):'<div class="detail-no-traits text-dim">特性なし</div>',i=Bt[s.blueprintId];let a="";if(i!=null&&i.battleEffect){const o=i.battleEffect;let l="";o.type==="heal"?l=`❤️ HP ${o.value} 回復`:o.type==="healfull"?l="❤️‍🩹 HP 全回復":o.type==="revive"?l=`✨ 復活 (HP ${o.value})`:o.type==="buff"?l=`⬆️ ${o.stat==="atk"?"攻撃":o.stat==="def"?"防御":"素早さ"}+${o.amount} (${o.duration}秒)`:o.type==="debuff"?l=`⬇️ 敵${o.stat==="atk"?"攻撃":o.stat==="def"?"防御":"素早さ"}${o.amount} (${o.duration}秒)`:o.type==="damage"?l=`💥 ボスに ${o.value} ダメージ`:o.type==="stun"&&(l=`⚡ ボスをスタン (${o.duration}秒)`),l&&(a=`
        <div class="detail-section">
          <div class="detail-section-title">── 戦闘効果 ──</div>
          <div class="detail-battle-effect">${l}</div>
        </div>
      `)}const r=document.createElement("div");r.className="item-detail-overlay",r.innerHTML=`
    <div class="item-detail-modal">
      <button class="item-detail-close" id="item-detail-close">✕</button>
      <div class="item-detail-header">
        <span class="item-detail-icon">${e.emoji}</span>
        <div>
          <div class="item-detail-name">${s.name}</div>
          <div class="item-detail-type">${e.icon} ${e.label}</div>
        </div>
      </div>
      <div class="item-detail-quality">
        <span style="color:${t.color}">${t.icon} ${t.name} (Q${s.quality}/100)</span>
        <div class="item-quality-bar" style="margin-top:4px">
          <div class="item-quality-fill" style="width:${s.quality}%"></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">── 特性 ──</div>
        ${n}
      </div>
      ${a}
    </div>
  `,document.body.appendChild(r),r.addEventListener("click",o=>{o.target===r&&r.remove()}),r.querySelector("#item-detail-close").addEventListener("click",()=>r.remove())}function Mc(s){const t=Ke(s.quality),e=Ye(s.type),n=s.traits.map(i=>{const a=Jt[i];return a==null||a.description,nn(i)}).join("");return`
    <div class="item-card ${t.css} ${e.css}" data-uid="${s.uid}">
      ${ho(s,e)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${e.icon}</span>
          <span class="item-type-label">${e.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${t.icon} Q: ${s.quality}</span>
          <span class="item-quality-name">${t.name}</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${s.quality}%"></div>
        </div>
        <div class="item-traits">${n}</div>
        ${vg(s)}
      </div>
    </div>
  `}function xg(s){const t=Ke(s.quality),e=Ye(s.type),n=s.traits.map(i=>{const a=Jt[i];return a==null||a.description,nn(i)}).join("");return`
    <div class="item-card ${t.css} ${e.css} shop-displayable-card" data-uid="${s.uid}">
      ${ho(s,e)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${e.icon}</span>
          <span class="item-type-label">${e.label}</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${t.icon} Q: ${s.quality}</span>
          <span class="item-card-price">💰 ${s.value}G</span>
        </div>
        <div class="item-quality-bar">
          <div class="item-quality-fill" style="width:${s.quality}%"></div>
        </div>
        <div class="item-traits">${n}</div>
        <div class="shop-display-hint">🏪 クリックで陳列</div>
      </div>
    </div>
  `}function bg(s){const t=Ke(s.quality),e=Ye(s.type),n=s.traits.map(i=>{const a=Jt[i];return a==null||a.description,nn(i)}).join("");return`
    <div class="item-card ${t.css} ${e.css} displayed-glow" data-uid="${s.uid}">
      ${ho(s,e)}
      <div class="item-card-body">
        <div class="item-card-type-strip">
          <span class="item-type-icon">${e.icon}</span>
          <span class="item-type-label">${e.label}</span>
          <span class="displayed-badge">陳列中</span>
        </div>
        <div class="item-card-header">
          <span class="item-name">${s.name}</span>
        </div>
        <div class="item-card-quality-row">
          <span class="item-quality">${t.icon} Q: ${s.quality}</span>
          <span class="item-card-price">💰 ${s.value}G</span>
        </div>
        <div class="item-traits">${n}</div>
      </div>
    </div>
  `}class Mg{constructor(t,e){this.inventory=t,this.shop=e,this.el=document.getElementById("inventory-list"),this.filter="all",this.sort="type",this.qualityFilter="all",this.traitFilter="all",this.selectMode=!1,this.selectedUids=new Set}render(){let t=this.inventory.getItems();const e=this.filter==="all"?t:t.filter(h=>h.type===this.filter),n={poor:[0,20],common:[21,40],fine:[41,60],excellent:[61,80],legendary:[81,100]};let i=e;if(this.qualityFilter!=="all"&&n[this.qualityFilter]){const[h,f]=n[this.qualityFilter];i=e.filter(m=>m.quality>=h&&m.quality<=f)}let a=i;this.traitFilter==="with"?a=i.filter(h=>h.traits&&h.traits.length>0):this.traitFilter==="without"&&(a=i.filter(h=>!h.traits||h.traits.length===0));const r=[...a].sort((h,f)=>{if(this.sort==="quality")return f.quality-h.quality;if(this.sort==="name")return h.name.localeCompare(f.name);if(this.sort==="value")return(f.value||0)-(h.value||0);const m={material:0,equipment:1,consumable:2,accessory:3},g=(m[h.type]||0)-(m[f.type]||0);return g!==0?g:f.quality-h.quality}),o={all:t.length,material:0,equipment:0,consumable:0,accessory:0};t.forEach(h=>o[h.type]=(o[h.type]||0)+1);const l=[{key:"all",label:`📦 すべて (${t.length}/${this.inventory.maxCapacity})`},{key:"material",label:"🪨 素材"},{key:"equipment",label:"⚔️ 装備"},{key:"consumable",label:"🧪 消耗品"},{key:"accessory",label:"💎 アクセ"}];let c='<div class="inv-toolbar">';if(c+='<div class="inv-filters">',l.forEach(h=>{const f=this.filter===h.key?"active":"",m=o[h.key]||0;c+=`<button class="btn inv-filter-btn ${f}" data-filter="${h.key}">${h.label} <span class="inv-count">${m}</span></button>`}),c+="</div>",c+='<div class="inv-sort">',c+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="type"?"active":""}" data-sort="type">種類</button>`,c+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="quality"?"active":""}" data-sort="quality">品質</button>`,c+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="name"?"active":""}" data-sort="name">名前</button>`,c+=`<button class="btn btn-sm inv-sort-btn ${this.sort==="value"?"active":""}" data-sort="value">売値</button>`,c+="</div></div>",c+='<div class="inv-advanced-filters">',c+='<div class="inv-adv-group"><span class="inv-adv-label">品質:</span>',[{key:"all",label:"すべて"},{key:"poor",label:"▪ 粗悪"},{key:"common",label:"▫ 普通"},{key:"fine",label:"◆ 良品"},{key:"excellent",label:"★ 優品"},{key:"legendary",label:"✦ 極上"}].forEach(h=>{c+=`<button class="btn btn-xs inv-qf-btn ${this.qualityFilter===h.key?"active":""}" data-qf="${h.key}">${h.label}</button>`}),c+="</div>",c+='<div class="inv-adv-group"><span class="inv-adv-label">特性:</span>',c+=`<button class="btn btn-xs inv-tf-btn ${this.traitFilter==="all"?"active":""}" data-tf="all">すべて</button>`,c+=`<button class="btn btn-xs inv-tf-btn ${this.traitFilter==="with"?"active":""}" data-tf="with">特性あり</button>`,c+=`<button class="btn btn-xs inv-tf-btn ${this.traitFilter==="without"?"active":""}" data-tf="without">特性なし</button>`,c+="</div>",c+="</div>",c+='<div class="inv-bulk-bar">',c+=`<button class="btn btn-sm inv-select-toggle ${this.selectMode?"active":""}" id="inv-select-toggle">${this.selectMode?"✕ 選択解除":"☑ 選択モード"}</button>`,this.selectMode){const h=this.selectedUids.size,m=r.filter(g=>this.selectedUids.has(g.uid)&&!g.locked).reduce((g,v)=>{const p=Bt[v.blueprintId];return p?g+Math.max(1,Math.floor((v.value||p.baseValue||10)*.2)):g},0);c+=`<span class="inv-sel-count">${h}個選択中</span>`,c+='<button class="btn btn-sm inv-select-all" id="inv-select-all">全選択</button>',c+='<button class="btn btn-sm inv-select-filtered" id="inv-select-filtered">表示中を全選択</button>',h>0&&(c+=`<button class="btn btn-sm btn-danger inv-bulk-sell" id="inv-bulk-sell">🗑 まとめて処分 (${m}G)</button>`)}if(c+="</div>",r.length===0){const h=this.filter==="all"&&this.qualityFilter==="all"&&this.traitFilter==="all";c+=`<div class="empty-state">
        <div class="empty-state-icon">${h?"📦":"🔍"}</div>
        <div class="empty-state-text">${h?"まだ何も持っていません":"条件に合うアイテムはありません"}</div>
        <div class="empty-state-hint">${h?"冒険者を派遣して素材を集めましょう！":"フィルターを変更してみましょう"}</div>
      </div>`}else c+='<div class="item-grid">',c+=r.map(h=>{var v;const f=this.selectedUids.has(h.uid),m=Math.max(1,Math.floor((h.value||((v=Bt[h.blueprintId])==null?void 0:v.baseValue)||10)*.2));let g=Mc(h);return h.locked&&(g=g.replace('class="item-card ','class="item-card item-locked ')),g=g.replace('data-uid="'+h.uid+'">',`data-uid="${h.uid}"><button class="item-lock-btn" data-lock-uid="${h.uid}" title="ロック切替">${h.locked?"🔒":"🔓"}</button>`),this.selectMode&&(g=g.replace('class="item-card ',`class="item-card ${f?"inv-selected":""} inv-selectable `),g=g.replace(`</div>
  </div>
  `,`</div><div class="inv-card-actions"><button class="inv-quick-sell-btn" data-uid="${h.uid}" title="即時処分 (${m}G)">🗑 ${m}G</button></div></div>`),g=g.replace('data-uid="'+h.uid+'">',`data-uid="${h.uid}"><div class="inv-check-overlay">${f?"☑":"☐"}</div>`)),g}).join(""),c+="</div>";if(c+='<div class="inv-footer-stats">',c+=`<span>表示: ${r.length}/${t.length}個</span>`,r.length>0){const h=Math.round(r.reduce((f,m)=>f+m.quality,0)/r.length);c+=`<span>平均品質: Q${h}</span>`}c+="</div>",this.el.innerHTML=c,this._bindEvents(r)}_bindEvents(t){this.el.querySelectorAll(".inv-filter-btn").forEach(o=>{o.addEventListener("click",l=>{this.filter=l.currentTarget.dataset.filter,this.render()})}),this.el.querySelectorAll(".inv-sort-btn").forEach(o=>{o.addEventListener("click",l=>{this.sort=l.currentTarget.dataset.sort,this.render()})}),this.el.querySelectorAll(".inv-qf-btn").forEach(o=>{o.addEventListener("click",l=>{this.qualityFilter=l.currentTarget.dataset.qf,this.render()})}),this.el.querySelectorAll(".inv-tf-btn").forEach(o=>{o.addEventListener("click",l=>{this.traitFilter=l.currentTarget.dataset.tf,this.render()})});const e=this.el.querySelector("#inv-select-toggle");e&&e.addEventListener("click",()=>{this.selectMode=!this.selectMode,this.selectedUids.clear(),this.render()});const n=this.el.querySelector("#inv-select-all");n&&n.addEventListener("click",()=>{t.forEach(o=>this.selectedUids.add(o.uid)),this.render()});const i=this.el.querySelector("#inv-select-filtered");i&&i.addEventListener("click",()=>{t.forEach(o=>this.selectedUids.add(o.uid)),this.render()});const a=this.el.querySelector("#inv-bulk-sell");a&&a.addEventListener("click",()=>{const o=this.selectedUids.size;o!==0&&this._showConfirm(`${o}個のアイテムを処分しますか？（売値の20%で即時売却）`,()=>{const l=[...this.selectedUids],c=this.shop.quickSellBulk(l,this.inventory);this.selectedUids.clear(),C.emit("inventory:changed"),C.emit("toast",{message:`${o}個を処分しました (+${c}G)`,type:"success"}),this.render()})});const r=this.el.querySelector(".item-grid");r&&r.addEventListener("click",o=>{const l=o.target.closest(".inv-quick-sell-btn");if(l){o.stopPropagation();const f=l.dataset.uid,m=this.inventory.items.find(v=>v.uid===f);if(!m)return;const g=this.shop.quickSell(f,this.inventory);g>0&&(this.selectedUids.delete(f),C.emit("inventory:changed"),C.emit("toast",{message:`${m.name}を処分しました (+${g}G)`,type:"info"}),this.render());return}const c=o.target.closest(".item-lock-btn");if(c){o.stopPropagation();const f=c.dataset.lockUid;f&&(this.inventory.toggleLock(f),this.render());return}const d=o.target.closest(".item-card[data-uid]");if(!d)return;const h=d.dataset.uid;if(this.selectMode)this.selectedUids.has(h)?this.selectedUids.delete(h):this.selectedUids.add(h),this.render();else{const f=t.find(m=>m.uid===h);f&&yg(f)}})}_showConfirm(t,e){const n=document.createElement("div");n.className="inv-confirm-overlay",n.innerHTML=`
      <div class="inv-confirm-box">
        <div class="inv-confirm-msg">${t}</div>
        <div class="inv-confirm-btns">
          <button class="btn btn-danger" id="inv-confirm-yes">はい</button>
          <button class="btn" id="inv-confirm-no">いいえ</button>
        </div>
      </div>
    `,document.body.appendChild(n),n.querySelector("#inv-confirm-yes").addEventListener("click",()=>{n.remove(),e()}),n.querySelector("#inv-confirm-no").addEventListener("click",()=>n.remove()),n.addEventListener("click",i=>{i.target===n&&n.remove()})}}const Se=6,ke=12,le=40,Xs=45,Ya=1,Sg=.3,Eg=.02,es=[{id:0,emoji:"🪨",label:"石",color:"#8a8a7a",glow:"rgba(138,138,122,0.4)"},{id:1,emoji:"🌿",label:"草",color:"#7daa68",glow:"rgba(125,170,104,0.4)"},{id:2,emoji:"🔥",label:"火",color:"#c46a5a",glow:"rgba(196,106,90,0.4)"},{id:3,emoji:"💎",label:"結晶",color:"#7ab0c4",glow:"rgba(122,176,196,0.4)"},{id:4,emoji:"⚔️",label:"金属",color:"#c4a87a",glow:"rgba(196,168,122,0.4)"},{id:5,emoji:"🧪",label:"薬品",color:"#b87ae8",glow:"rgba(184,122,232,0.4)"}],ns=[{min:0,bonus:0,rank:"なし",color:"#888"},{min:300,bonus:1,rank:"銅",color:"#c4a87a"},{min:800,bonus:2,rank:"銀",color:"#c0c0c0"},{min:1500,bonus:3,rank:"金",color:"#e8b84b"},{min:2800,bonus:5,rank:"極",color:"#e87ae8"}];class Tg{constructor(){this.overlay=null,this.canvas=null,this.ctx=null,this.running=!1,this.resolveCallback=null,this.grid=[],this.currentPiece=null,this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Xs,this.dropTimer=0,this.dropInterval=Ya,this.linesCleared=0,this.paused=!1,this.clearingCells=[],this.shakeTimer=0,this._boundKeyDown=this._onKeyDown.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundMouseMove=this._onMouseMove.bind(this),this._boundTouchStart=this._onTouchStart.bind(this),this._boundTouchMove=this._onTouchMove.bind(this),this._touchStartX=0,this._touchStartY=0,this._mouseCol=-1}start(t,e=[]){return new Promise(n=>{this.resolveCallback=n,this.recipeName=t,this.materialHints=e,this._initGame(),this._createUI(),this._startLoop()})}_initGame(){this.grid=[];for(let t=0;t<ke;t++)this.grid.push(new Array(Se).fill(-1));this.score=0,this.combo=0,this.maxCombo=0,this.timeLeft=Xs,this.dropTimer=0,this.dropInterval=Ya,this.linesCleared=0,this.clearingCells=[],this.shakeTimer=0,this.paused=!1,this.running=!0,this._spawnPiece()}_spawnPiece(){const t=Math.floor(Math.random()*es.length);this.currentPiece={col:Math.floor(Se/2),row:0,blocks:[t,es[Math.floor(Math.random()*es.length)].id],rotation:0},this.grid[0][this.currentPiece.col]!==-1&&this._endGame()}_createUI(){this.overlay=document.createElement("div"),this.overlay.className="puzzle-overlay",this.overlay.innerHTML=`
      <div class="puzzle-container">
        <div class="puzzle-header">
          <h3>🧩 錬金パズル — ${this.recipeName}</h3>
          <div class="puzzle-timer" id="puzzle-timer">${Xs}秒</div>
        </div>
        <div class="puzzle-body">
          <canvas id="puzzle-canvas" width="${Se*le}" height="${ke*le}"></canvas>
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
    `,document.body.appendChild(this.overlay),this.canvas=document.getElementById("puzzle-canvas"),this.ctx=this.canvas.getContext("2d"),document.getElementById("puzzle-skip").addEventListener("click",()=>{this._endGame(!0)}),document.addEventListener("keydown",this._boundKeyDown),this.canvas.addEventListener("mousedown",this._boundMouseDown),this.canvas.addEventListener("mousemove",this._boundMouseMove),this.canvas.addEventListener("touchstart",this._boundTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._boundTouchMove,{passive:!1}),requestAnimationFrame(()=>this.overlay.classList.add("puzzle-visible"))}_startLoop(){this._lastTime=performance.now(),this._loop()}_loop(){if(!this.running)return;const t=performance.now(),e=(t-this._lastTime)/1e3;this._lastTime=t,this.paused||this._update(e),this._draw(),this._animFrame=requestAnimationFrame(()=>this._loop())}_update(t){if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this._endGame();return}const e=document.getElementById("puzzle-timer");if(e){const n=Math.ceil(this.timeLeft);e.textContent=`${n}秒`,e.style.color=n<=10?"#c46a5a":""}if(this.clearingCells.length>0){let n=!0;for(const i of this.clearingCells)i.timer-=t*4,i.timer>0&&(n=!1);if(n){for(const a of this.clearingCells)this.grid[a.row][a.col]=-1;this.clearingCells=[],this._applyGravity();const i=this._findMatches();i.length>0?(this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this._scoreMatches(i),this.clearingCells=i.map(a=>({...a,timer:1}))):this.combo=0}return}this.dropInterval=Math.max(Sg,Ya-(Xs-this.timeLeft)*Eg),this.dropTimer+=t,this.dropTimer>=this.dropInterval&&(this.dropTimer=0,this._movePiece(0,1)||this._placePiece())}_movePiece(t,e){if(!this.currentPiece)return!1;const n=this.currentPiece,i=n.col+t,a=n.row+e,r=this._getPiecePositions(i,a,n.rotation);for(const[o,l]of r)if(o<0||o>=ke||l<0||l>=Se||this.grid[o][l]!==-1)return!1;return n.col=i,n.row=a,!0}_rotatePiece(){if(!this.currentPiece)return;const t=this.currentPiece,e=(t.rotation+1)%2,n=this._getPiecePositions(t.col,t.row,e);for(const[i,a]of n)if(i<0||i>=ke||a<0||a>=Se||this.grid[i][a]!==-1)return;t.rotation=e}_getPiecePositions(t,e,n){return n===0?[[e,t],[e+1,t]]:[[e,t],[e,t+1]]}_hardDrop(){if(this.currentPiece){for(;this._movePiece(0,1););this._placePiece()}}_placePiece(){if(!this.currentPiece)return;const t=this.currentPiece,e=this._getPiecePositions(t.col,t.row,t.rotation);for(let i=0;i<e.length;i++){const[a,r]=e[i];a>=0&&a<ke&&r>=0&&r<Se&&(this.grid[a][r]=t.blocks[i])}const n=this._findMatches();n.length>0&&(this.combo=1,this.maxCombo=Math.max(this.maxCombo,1),this._scoreMatches(n),this.clearingCells=n.map(i=>({...i,timer:1}))),this._spawnPiece()}_findMatches(){const t=new Set;for(let e=0;e<ke;e++)for(let n=0;n<=Se-3;n++){const i=this.grid[e][n];if(i!==-1&&this.grid[e][n+1]===i&&this.grid[e][n+2]===i){let a=n+2;for(;a+1<Se&&this.grid[e][a+1]===i;)a++;for(let r=n;r<=a;r++)t.add(`${e},${r}`)}}for(let e=0;e<Se;e++)for(let n=0;n<=ke-3;n++){const i=this.grid[n][e];if(i!==-1&&this.grid[n+1][e]===i&&this.grid[n+2][e]===i){let a=n+2;for(;a+1<ke&&this.grid[a+1][e]===i;)a++;for(let r=n;r<=a;r++)t.add(`${r},${e}`)}}return Array.from(t).map(e=>{const[n,i]=e.split(",").map(Number);return{row:n,col:i,type:this.grid[n][i]}})}_scoreMatches(t){const e=t.length*50,n=1+(this.combo-1)*.5,i=Math.floor(e*n);this.score+=i,this.linesCleared+=t.length,this._updateScoreUI()}_updateScoreUI(){const t=document.getElementById("puzzle-score");t&&(t.textContent=this.score);const e=document.getElementById("puzzle-combo");e&&(e.textContent=this.combo>0?`x${this.combo}`:"-",e.style.color=this.combo>=3?"#e8b84b":"");const n=this._getCurrentTier(),i=document.getElementById("puzzle-bonus");i&&(i.textContent=`+${n.bonus}`,i.style.color=n.color);const a=document.getElementById("puzzle-bonus-fill");if(a){const r=ns[ns.length-1].min,o=Math.min(100,this.score/r*100);a.style.width=`${o}%`,a.style.background=n.color}}_getCurrentTier(){let t=ns[0];for(const e of ns)this.score>=e.min&&(t=e);return t}_applyGravity(){for(let t=0;t<Se;t++){let e=ke-1;for(let n=ke-1;n>=0;n--)this.grid[n][t]!==-1&&(n!==e&&(this.grid[e][t]=this.grid[n][t],this.grid[n][t]=-1),e--)}}_draw(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="rgba(30, 25, 18, 0.95)",t.fillRect(0,0,e,n),t.strokeStyle="rgba(160, 132, 92, 0.1)",t.lineWidth=1;for(let a=0;a<=ke;a++)t.beginPath(),t.moveTo(0,a*le),t.lineTo(e,a*le),t.stroke();for(let a=0;a<=Se;a++)t.beginPath(),t.moveTo(a*le,0),t.lineTo(a*le,n),t.stroke();const i=new Map;for(const a of this.clearingCells)i.set(a.row*Se+a.col,a);for(let a=0;a<ke;a++)for(let r=0;r<Se;r++)if(this.grid[a][r]!==-1){const o=i.get(a*Se+r);o?this._drawBlock(r,a,this.grid[a][r],o.timer):this._drawBlock(r,a,this.grid[a][r],1)}if(this.currentPiece&&this.clearingCells.length===0){const a=this.currentPiece;let r=a.row;for(;;){const c=this._getPiecePositions(a.col,r+1,a.rotation);let d=!0;for(const[h,f]of c)if(h>=ke||f<0||f>=Se||h>=0&&this.grid[h][f]!==-1){d=!1;break}if(!d)break;r++}const o=this._getPiecePositions(a.col,r,a.rotation);for(let c=0;c<o.length;c++){const[d,h]=o[c];d>=0&&this._drawGhost(h,d,a.blocks[c])}const l=this._getPiecePositions(a.col,a.row,a.rotation);for(let c=0;c<l.length;c++){const[d,h]=l[c];d>=0&&this._drawBlock(h,d,a.blocks[c],1)}}this._mouseCol>=0&&this._mouseCol<Se&&(t.fillStyle="rgba(232, 184, 75, 0.04)",t.fillRect(this._mouseCol*le,0,le,n))}_drawBlock(t,e,n,i){const a=this.ctx,r=es[n],o=t*le,l=e*le,c=2;a.globalAlpha=i,a.fillStyle=r.color,a.beginPath(),a.roundRect(o+c,l+c,le-c*2,le-c*2,4),a.fill(),a.fillStyle=r.glow,a.beginPath(),a.roundRect(o+c,l+c,le-c*2,(le-c*2)*.4,[4,4,0,0]),a.fill(),a.font="18px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(r.emoji,o+le/2,l+le/2),a.globalAlpha=1}_drawGhost(t,e,n){const i=this.ctx,a=es[n],r=t*le,o=e*le,l=2;i.globalAlpha=.2,i.strokeStyle=a.color,i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.roundRect(r+l,o+l,le-l*2,le-l*2,4),i.stroke(),i.setLineDash([]),i.globalAlpha=1}_onKeyDown(t){if(!(!this.running||this.clearingCells.length>0))switch(t.key){case"ArrowLeft":t.preventDefault(),this._movePiece(-1,0);break;case"ArrowRight":t.preventDefault(),this._movePiece(1,0);break;case"ArrowDown":t.preventDefault(),this._movePiece(0,1),this.dropTimer=0;break;case"ArrowUp":t.preventDefault(),this._rotatePiece();break;case" ":t.preventDefault(),this._hardDrop();break}}_onMouseDown(t){if(!this.running||this.clearingCells.length>0)return;const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=Math.floor(n/le);if(t.button===0&&this.currentPiece){const a=i-this.currentPiece.col;a!==0?this._movePiece(a>0?1:-1,0):this._rotatePiece()}t.button===2&&(t.preventDefault(),this._hardDrop())}_onMouseMove(t){const e=this.canvas.getBoundingClientRect();this._mouseCol=Math.floor((t.clientX-e.left)/le)}_onTouchStart(t){if(!this.running)return;t.preventDefault();const e=t.touches[0];this._touchStartX=e.clientX,this._touchStartY=e.clientY}_onTouchMove(t){if(!this.running||this.clearingCells.length>0)return;t.preventDefault();const e=t.touches[0],n=e.clientX-this._touchStartX,i=e.clientY-this._touchStartY;Math.abs(n)>30&&(this._movePiece(n>0?1:-1,0),this._touchStartX=e.clientX),i>40&&(this._movePiece(0,1),this._touchStartY=e.clientY,this.dropTimer=0),i<-40&&(this._rotatePiece(),this._touchStartY=e.clientY)}_endGame(t=!1){this.running=!1,cancelAnimationFrame(this._animFrame),document.removeEventListener("keydown",this._boundKeyDown),this.canvas.removeEventListener("mousedown",this._boundMouseDown),this.canvas.removeEventListener("mousemove",this._boundMouseMove),this.canvas.removeEventListener("touchstart",this._boundTouchStart),this.canvas.removeEventListener("touchmove",this._boundTouchMove);const e=t?ns[0]:this._getCurrentTier(),n={bonus:e.bonus,score:t?0:this.score,rank:t?"スキップ":e.rank,rankColor:e.color,maxCombo:this.maxCombo,linesCleared:this.linesCleared,skipped:t};this._showResult(n)}_showResult(t){const e=this.overlay.querySelector(".puzzle-container");e.innerHTML=`
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
    `,document.getElementById("puzzle-done").addEventListener("click",()=>{this.overlay.classList.remove("puzzle-visible"),setTimeout(()=>{this.overlay.remove(),this.overlay=null},300),this.resolveCallback&&this.resolveCallback(t)})}}class wg{constructor(t){this.inventory=t,this.el=document.querySelector("#tab-crafting"),this.selectedRecipeId=null,this.selectedMaterials={},this.expandedSlot=null,this.recipeFilter="all",this.craftableOnly=!1}render(){const t=Object.entries(he).filter(([,l])=>l.unlocked),e={all:0,equipment:0,consumable:0,accessory:0,material:0};t.forEach(([,l])=>{const c=Bt[l.targetId];c&&(e.all++,l.isMaterialRecipe?e.material++:e[c.type]!==void 0&&e[c.type]++)});let n=t;this.recipeFilter==="material"?n=n.filter(([,l])=>l.isMaterialRecipe):this.recipeFilter!=="all"&&(n=n.filter(([,l])=>{const c=Bt[l.targetId];return c&&c.type===this.recipeFilter&&!l.isMaterialRecipe})),this.craftableOnly&&(n=n.filter(([,l])=>this._canCraft(l)));const i=n.map(([l,c])=>{const d=Bt[c.targetId];if(!d)return"";const h=this.selectedRecipeId===l,f=this._canCraft(c),m=Ye(d.type),g=d.image?Ae(d.image):null,v=g?`<div class="craft-rcard-img"><img src="${g}" alt="${d.name}" /></div>`:`<div class="craft-rcard-img craft-rcard-img-placeholder"><span>${m.emoji}</span></div>`,p={};c.materials.forEach(_=>{p[_]=(p[_]||0)+1});const u=Object.entries(p).map(([_,b])=>{var A;let x,R;if(os(_)){const I=ls(_),E=bo[I];x=this.inventory.getItemsByCategory(I).length,R=E?`${E.icon} ${E.name}`:_}else x=this.inventory.getItemsByBlueprint(_).length,R=((A=Bt[_])==null?void 0:A.name)??_;return`<span class="craft-mat-badge ${x>=b?"ok":"ng"}">${R} ${x}/${b}</span>`}).join("");return`
        <div class="craft-rcard ${h?"craft-rcard-selected":""} ${f?"":"craft-rcard-disabled"}" data-recipe-id="${l}">
          ${v}
          <div class="craft-rcard-body">
            <span class="craft-rcard-name">${d.name}</span>
            <span class="craft-rcard-meta">${m.icon} ${d.baseValue}G</span>
            <div class="craft-rcard-mats">${u}</div>
          </div>
        </div>
      `}).join(""),a=this._renderAutoCraftPanel(),r=`
      <div class="craft-panel craft-panel-left">
        <div class="craft-panel-header">
          <h4>📖 レシピ一覧</h4>
          <span class="craft-recipe-count">${e.all}種</span>
        </div>
        <div class="shop-inv-filters">
          <button class="shop-filter-btn ${this.recipeFilter==="all"?"active":""}" data-craft-filter="all">すべて <span class="shop-filter-count">${e.all}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="equipment"?"active":""}" data-craft-filter="equipment">⚔️ 武具 <span class="shop-filter-count">${e.equipment}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="consumable"?"active":""}" data-craft-filter="consumable">🧪 消耗品 <span class="shop-filter-count">${e.consumable}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="accessory"?"active":""}" data-craft-filter="accessory">💎 アクセ <span class="shop-filter-count">${e.accessory}</span></button>
          <button class="shop-filter-btn ${this.recipeFilter==="material"?"active":""}" data-craft-filter="material">🧱 素材 <span class="shop-filter-count">${e.material}</span></button>
          <button class="shop-filter-btn craft-craftable-toggle ${this.craftableOnly?"active":""}" id="craft-toggle-craftable">✅ 作成可能のみ</button>
        </div>
        <div class="craft-recipe-scroll">
          <div class="craft-recipe-grid">${i}</div>
        </div>
        ${a}
      </div>
    `,o=`
      <div class="craft-panel craft-panel-right">
        <div class="craft-panel-header">
          <h4>⚒️ 調合ワークスペース</h4>
        </div>
        <div class="craft-workspace" id="craft-workspace">${this._renderWorkspace()}</div>
      </div>
    `;this.el.innerHTML=`
      <div class="craft-layout">
        <div class="craft-columns">${r}${o}</div>
      </div>
    `,this._bindEvents(),this._bindAutoCraftEvents()}_canCraft(t){const e={};t.materials.forEach(n=>{e[n]=(e[n]||0)+1});for(const[n,i]of Object.entries(e)){let a;if(os(n)?a=this.inventory.getItemsByCategory(ls(n)).length:a=this.inventory.getItemsByBlueprint(n).length,a<i)return!1}return!0}_renderWorkspace(){var l;if(!this.selectedRecipeId)return`
        <div class="crafting-empty-state">
          <div class="crafting-empty-icon">⚗️</div>
          <p>左のレシピ一覧から<br>作りたいアイテムを選択してください</p>
        </div>`;const t=he[this.selectedRecipeId];if(!t||!t.unlocked)return this.selectedRecipeId=null,"<p>レシピを選択してください</p>";const e=Bt[t.targetId],n=[];t.materials.forEach((c,d)=>{n.push({matId:c,slotKey:`${c}_${d}`})});let i=`
      <div class="crafting-header">
        <h4>⚒️ ${e.name}</h4>
        <span class="crafting-header-type">${Ye(e.type).icon} ${Ye(e.type).label}</span>
      </div>
      <div class="crafting-section-label">素材を選択</div>
      <div class="crafting-slots">
    `;const a=[],r=new Set;let o=!0;for(const c of n){let d,h;if(os(c.matId)){const _=ls(c.matId),b=bo[_];d=this.inventory.getItemsByCategory(_).sort((x,R)=>R.quality-x.quality),h=b?`${b.icon} ${b.name}`:c.matId}else d=this.inventory.getItemsByBlueprint(c.matId).sort((_,b)=>b.quality-_.quality),h=((l=Bt[c.matId])==null?void 0:l.name)??c.matId;const f=d.filter(_=>!r.has(_.uid)||this.selectedMaterials[c.slotKey]===_.uid),m=f.length>0;let g=this.selectedMaterials[c.slotKey];if(!f.find(_=>_.uid===g)&&m&&(g=f[0].uid,this.selectedMaterials[c.slotKey]=g),g){r.add(g);const _=f.find(b=>b.uid===g);_&&a.push(_)}const p=this.expandedSlot===c.slotKey,u=!!g&&!!f.find(_=>_.uid===g);if(u||(o=!1),!m){i+=`
          <div class="craft-slot craft-slot-empty">
            <div class="craft-slot-label">${h}</div>
            <div class="craft-slot-placeholder craft-slot-missing">
              <span class="craft-slot-missing-icon">✖</span>
              <span>素材不足</span>
            </div>
          </div>
        `,o=!1;continue}if(u){const _=f.find(T=>T.uid===g),b=Ke(_.quality),x=Ye(_.type),R=_.traits.map(T=>nn(T)).join("");i+=`
          <div class="craft-slot craft-slot-filled ${b.css}" data-slot="${c.slotKey}">
            <div class="craft-slot-label">${h} <span class="craft-slot-change">変更 ▾</span></div>
            <div class="craft-slot-card">
              <div class="craft-slot-card-icon">${x.emoji}</div>
              <div class="craft-slot-card-info">
                <div class="craft-slot-card-name">${_.name}</div>
                <div class="craft-slot-card-quality">${b.icon} Q: ${_.quality} <span class="craft-slot-tier">${b.name}</span></div>
                <div class="craft-slot-card-traits">${R||'<span class="text-dim">特性なし</span>'}</div>
              </div>
            </div>
          </div>
        `}else i+=`
          <div class="craft-slot craft-slot-unfilled" data-slot="${c.slotKey}">
            <div class="craft-slot-label">${h}</div>
            <div class="craft-slot-placeholder">
              <span class="craft-slot-placeholder-icon">＋</span>
              <span>クリックで素材を選択 (${f.length}個)</span>
            </div>
          </div>
        `;if(p){i+='<div class="craft-slot-candidates">';for(const _ of f){const b=Ke(_.quality),x=Ye(_.type),R=_.uid===g,T=_.traits.map(A=>nn(A)).join("");i+=`
            <div class="craft-candidate-card ${b.css} ${R?"craft-candidate-selected":""}" data-slot="${c.slotKey}" data-uid="${_.uid}">
              <div class="craft-candidate-icon">${x.emoji}</div>
              <div class="craft-candidate-body">
                <div class="craft-candidate-header">
                  <span class="craft-candidate-name">${_.name}</span>
                  <span class="craft-candidate-quality">${b.icon} Q: ${_.quality}</span>
                </div>
                <div class="item-quality-bar"><div class="item-quality-fill" style="width:${_.quality}%"></div></div>
                <div class="craft-candidate-traits">${T||'<span class="text-dim">特性なし</span>'}</div>
              </div>
              ${R?'<div class="craft-candidate-check">✓</div>':""}
            </div>
          `}i+="</div>"}}if(i+="</div>",o&&a.length===n.length){const c=Math.floor(a.reduce((T,A)=>T+A.quality,0)/a.length),d={};a.forEach(T=>{const A=new Set;T.traits.forEach(I=>{A.has(I)||(d[I]=(d[I]||0)+1,A.add(I))})});const h=[],f=new Set;for(const[T,A]of Object.entries(d))A>=2&&Zn[T]&&Jt[Zn[T]]&&(h.push({from:T,to:Zn[T]}),f.add(T));const m=new Set;a.forEach(T=>T.traits.forEach(A=>m.add(A)));const g=[],v=new Set;for(const T of m)f.has(T)&&!v.has(T)?(g.push(Zn[T]),v.add(T)):f.has(T)||g.push(T);const p={legendary:0,epic:1,rare:2,uncommon:3,common:4};g.sort((T,A)=>{var M,P;const I=p[(M=Jt[T])==null?void 0:M.rarity]??5,E=p[(P=Jt[A])==null?void 0:P.rarity]??5;return I-E});const u=g.slice(0,Ut.maxTraitSlots),_=zi.calcValue({blueprintId:this.selectedRecipeId?he[this.selectedRecipeId].targetId:"",quality:c,traits:u}),b=Ke(c),x=Ye(e.type),R=h.length>0?`<div class="craft-fusion-preview">${h.map(T=>(Jt[T.from],Jt[T.to],`<div class="craft-fusion-row">
              ${nn(T.from)}
              <span class="craft-fusion-arrow">×2 → </span>
              ${nn(T.to,"trait-fused")}
            </div>`)).join("")}</div>`:"";i+=`
        <div class="crafting-preview">
          <div class="crafting-section-label">完成予測</div>
          ${R}
          <div class="crafting-preview-card ${b.css}">
            <div class="craft-preview-icon">${x.emoji}</div>
            <div class="craft-preview-info">
              <div class="craft-preview-name">${e.name}</div>
              <div class="craft-preview-quality">${b.icon} Q ≈ ${c} <span class="craft-slot-tier">${b.name}</span></div>
              <div class="item-quality-bar"><div class="item-quality-fill" style="width:${c}%"></div></div>
              <div class="craft-preview-traits">
                ${u.map(T=>{const A=Jt[T];A&&`${A.color}`;const I=h.some(E=>E.to===T);return nn(T,I?"trait-fused":"")}).join("")||'<span class="text-dim">特性なし</span>'}
              </div>
              <div class="craft-preview-value">💰 推定売値: ${_}G</div>
            </div>
          </div>
          <div class="crafting-buttons">
            <button id="btn-do-craft" class="btn crafting-execute-btn">⚒️ 通常調合</button>
            <button id="btn-puzzle-craft" class="btn primary crafting-execute-btn crafting-puzzle-btn">🧩 パズル調合<span class="puzzle-hint">ボーナスチャンス!</span></button>
          </div>
        </div>
      `}else if(!o&&n.length>0){const c=a.length;i+=`
        <div class="crafting-progress-hint">
          <span>素材: ${c} / ${n.length} 選択済み</span>
        </div>
      `}return i}_bindEvents(){this.el.querySelectorAll(".craft-rcard").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.recipeId;this.selectedRecipeId!==n&&(this.selectedRecipeId=n,this.selectedMaterials={},this.expandedSlot=null,this.render())})}),this.el.querySelectorAll("[data-craft-filter]").forEach(e=>{e.addEventListener("click",n=>{this.recipeFilter=n.currentTarget.dataset.craftFilter,this.render()})});const t=document.getElementById("craft-toggle-craftable");t&&t.addEventListener("click",()=>{this.craftableOnly=!this.craftableOnly,this.render()}),this._bindWorkspaceEvents()}_bindWorkspaceEvents(){const t=document.getElementById("craft-workspace");if(!t)return;const e=this.selectedRecipeId?he[this.selectedRecipeId]:null;if(!e)return;const n=Bt[e.targetId],i=e.materials.map((c,d)=>({matId:c,slotKey:`${c}_${d}`})),a=[],r=new Set;for(const c of i){const d=this.selectedMaterials[c.slotKey];if(d){let h;os(c.matId)?h=this.inventory.getItemsByCategory(ls(c.matId)):h=this.inventory.getItemsByBlueprint(c.matId);const f=h.find(m=>m.uid===d);f&&(a.push(f),r.add(d))}}t.querySelectorAll(".craft-slot-filled, .craft-slot-unfilled").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.slot;this.expandedSlot=this.expandedSlot===d?null:d,t.innerHTML=this._renderWorkspace(),this._bindWorkspaceEvents()})}),t.querySelectorAll(".craft-candidate-card").forEach(c=>{c.addEventListener("click",d=>{d.stopPropagation();const h=c.dataset.slot,f=c.dataset.uid;this.selectedMaterials[h]=f,this.expandedSlot=null,t.innerHTML=this._renderWorkspace(),this._bindWorkspaceEvents()})});const o=document.getElementById("btn-do-craft");o&&o.addEventListener("click",()=>{this._executeCrafting(this.selectedRecipeId,a)});const l=document.getElementById("btn-puzzle-craft");l&&l.addEventListener("click",()=>{this._executePuzzleCrafting(this.selectedRecipeId,a,n.name)})}async _executeCrafting(t,e,n=0){const i=new Set;e.forEach(o=>o.traits.forEach(l=>i.add(l)));const a=Array.from(i),r=document.getElementById("craft-workspace");r&&(r.innerHTML=`
        <div class="crafting-loading">
          <div class="crafting-loading-icon">⚗️</div>
          <div class="crafting-loading-text">調合中...</div>
          <div class="crafting-loading-dots"><span></span><span></span><span></span></div>
        </div>
      `),await new Promise(o=>setTimeout(o,600));try{const o={effectType:"quality_bonus",result:0};C.emit("upgrade:queryBonus",o);const l=bc(t,e,a,n+o.result);e.forEach(d=>this.inventory.removeItem(d.uid));for(const d of l.traits)if(!i.has(d)){C.emit("toast",{message:`✨ 特性融合！ → ${d}`,type:"success"});break}this.inventory.forceAddItem(l),C.emit("inventory:changed"),C.emit("item:crafted",{item:l}),this.selectedMaterials={},this.expandedSlot=null,this.render();const c=document.createElement("div");c.className="craft-flash",document.body.appendChild(c),requestAnimationFrame(()=>c.classList.add("fade-out")),setTimeout(()=>c.remove(),550),this._showCraftResult(l,i)}catch(o){console.error("[CraftingTab]",o)}}_showCraftResult(t,e){const n=Ke(t.quality);Bt[t.blueprintId];const i=t.value||zi.calcValue(t),a=new Set;if(e)for(const d of t.traits)e.has(d)||a.add(d);const r=t.traits.length>0?t.traits.map(d=>{const h=Jt[d];h&&`${h.color}`;const f=a.has(d);return nn(d,f?"trait-fused":"")}).join(""):"",o=a.size>0?'<div class="craft-result-fusion">✨ 特性融合が発生！</div>':"",l=document.createElement("div");l.className="craft-result-overlay",l.innerHTML=`
      <div class="craft-result-modal">
        <div class="craft-result-sparkle">✨</div>
        <h3 class="craft-result-title">調合成功！</h3>
        ${o}
        <div class="craft-result-card">
          ${Mc(t)}
        </div>
        ${r?`<div class="craft-result-traits">${r}</div>`:""}
        <div class="craft-result-stats">
          <span class="craft-result-quality ${n.css}">品質: ${n.icon} ${t.quality}</span>
          <span class="craft-result-value">💰 ${i.toLocaleString("ja-JP")}G</span>
        </div>
        <button class="btn primary craft-result-close">OK</button>
      </div>
    `,document.body.appendChild(l);const c=()=>{l.classList.add("craft-result-fade-out"),setTimeout(()=>l.remove(),300)};l.querySelector(".craft-result-close").addEventListener("click",c),l.addEventListener("click",d=>{d.target===l&&c()})}async _executePuzzleCrafting(t,e,n){C.emit("game:pause");const a=await new Tg().start(n);C.emit("game:resume"),this._executeCrafting(t,e,a.bonus)}_renderAutoCraftPanel(){const t={enabled:!1,mode:"single",recipeId:null,canCraft:!1,materialStatus:null,craftCount:0};C.emit("autoCraft:query",t);const e=t.mode==="all",i=Object.entries(he).filter(([,l])=>l.unlocked).map(([l,c])=>{const d=Bt[c.targetId];if(!d)return"";const h=t.recipeId===l?"selected":"";return`<option value="${l}" ${h}>${d.name}</option>`}).join("");let a="";!e&&t.materialStatus&&(a=t.materialStatus.map(l=>`<span class="ac-mat-badge ${l.available>0?"ac-mat-ok":"ac-mat-ng"}">${l.slotLabel}: ${l.available}個</span>`).join(""));let r;e?r=t.canCraft?'<span class="ac-status-ready">調合可能なレシピあり</span>':'<span class="ac-status-wait">素材不足 — 待機中</span>':r=t.recipeId?t.canCraft?'<span class="ac-status-ready">調合可能</span>':'<span class="ac-status-wait">素材不足 — 待機中</span>':'<span class="ac-status-idle">レシピ未選択</span>';const o=e?"":`
      <div class="autocraft-row">
        <span class="autocraft-label">レシピ:</span>
        <select id="autocraft-recipe" class="autocraft-select">
          <option value="">-- 選択 --</option>
          ${i}
        </select>
      </div>
      ${a?`
      <div class="autocraft-row">
        <span class="autocraft-label">素材:</span>
        <div class="autocraft-mat-status">${a}</div>
      </div>`:""}
    `;return`
      <div class="autocraft-panel">
        <div class="autocraft-header">
          <label class="autocraft-toggle">
            <input type="checkbox" id="autocraft-enabled" ${t.enabled?"checked":""} />
            <span class="autocraft-toggle-label">🤖 オート調合</span>
          </label>
        </div>
        <div class="autocraft-body ${t.enabled?"":"autocraft-body-disabled"}">
          <div class="autocraft-row">
            <span class="autocraft-label">モード:</span>
            <div class="ac-mode-btns">
              <button class="ac-mode-btn ${e?"":"ac-mode-active"}" data-ac-mode="single">指定レシピ</button>
              <button class="ac-mode-btn ${e?"ac-mode-active":""}" data-ac-mode="all">全自動</button>
            </div>
          </div>
          ${o}
          <div class="autocraft-row">
            <span class="autocraft-label">状態:</span>
            ${r}
            ${t.craftCount>0?`<span class="ac-count-badge">${t.craftCount}回</span>`:""}
          </div>
        </div>
      </div>
    `}_bindAutoCraftEvents(){const t=this.el.querySelector("#autocraft-enabled");t&&t.addEventListener("change",()=>{C.emit("autoCraft:setEnabled",{enabled:t.checked}),this.render()}),this.el.querySelectorAll(".ac-mode-btn").forEach(n=>{n.addEventListener("click",()=>{C.emit("autoCraft:setMode",{mode:n.dataset.acMode}),this.render()})});const e=this.el.querySelector("#autocraft-recipe");e&&e.addEventListener("change",()=>{C.emit("autoCraft:setRecipe",{recipeId:e.value||null}),this.render()})}}const Ag={material:"🪨",equipment:"⚔️",consumable:"🧪",accessory:"💎"};class Cg{constructor(t,e,n){this.inventory=t,this.shop=e,this.customers=n,this.el=document.querySelector("#tab-shop"),this.shopFilter="craftable"}render(){const t=this.customers?this.customers.getActiveCustomers():[],e=this.shop.displayedItems,n=this.shop.maxSlots;let i="";t.length>0&&(i=`<div class="shop-customer-bar"><span class="shop-cust-label">🔔 来店中</span>${t.map(u=>{const _=Math.max(0,u.timer/u.maxTimer*100),b=u.demandTypes.map(x=>Ag[x]||x).join("");return`
          <div class="shop-cust-chip" data-customer-id="${u.id}">
            <span class="shop-cust-icon">${u.icon}</span>
            <span class="shop-cust-name">${u.name}</span>
            <span class="shop-cust-wants">${b}</span>
            <div class="shop-cust-bar"><div class="shop-cust-bar-fill" data-customer-bar="${u.id}" style="width:${_}%"></div></div>
          </div>
        `}).join("")}</div>`);let a="";a+=e.map(p=>bg(p)).join("");for(let p=e.length;p<n;p++)a+='<div class="shop-shelf-slot shop-shelf-empty"><span class="shop-shelf-empty-icon">＋</span><span class="shop-shelf-empty-text">空きスロット</span></div>';const r=`
      <div class="shop-panel shop-panel-left">
        <div class="shop-panel-header">
          <h4>📋 陳列棚</h4>
          <span class="shop-shelf-count">${e.length} / ${n}</span>
        </div>
        <div class="shop-shelf-grid">${a}</div>
        ${e.length>0?'<p class="shop-shelf-hint">クリックで取り下げ</p>':""}
      </div>
    `,o=this.inventory.getItems(),l=o.filter(p=>p.type!=="material"),c=o.filter(p=>p.type==="material");let d;this.shopFilter==="craftable"?d=l:this.shopFilter==="material"?d=c:d=o,d=[...d].sort((p,u)=>u.quality-p.quality);let h="";d.length>0?h=`<div class="item-grid shop-inv-grid">${d.map(p=>xg(p)).join("")}</div>`:o.length===0?h='<div class="shop-inv-empty"><span>📦</span><span>倉庫にアイテムがありません</span></div>':h='<div class="shop-inv-empty"><span>🔍</span><span>該当するアイテムがありません</span></div>';const f=e.length>=n,m=`
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
    `,g=this.shop.autoSellRules,v=`
      <div class="autosell-panel">
        <div class="autosell-header">
          <label class="autosell-toggle">
            <input type="checkbox" id="autosell-enabled" ${this.shop.autoSellEnabled?"checked":""} />
            <span class="autosell-toggle-label">🤖 オートセル</span>
          </label>
          <span class="autosell-desc">空き棚にルールに合うアイテムを自動陳列</span>
        </div>
        <div class="autosell-rules ${this.shop.autoSellEnabled?"":"autosell-rules-disabled"}">
          <div class="autosell-rule">
            <span class="autosell-rule-label">対象:</span>
            <label class="autosell-cb"><input type="checkbox" data-as-type="equipment" ${g.types.includes("equipment")?"checked":""} /> ⚔️ 装備</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="consumable" ${g.types.includes("consumable")?"checked":""} /> 🧪 消耗品</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="accessory" ${g.types.includes("accessory")?"checked":""} /> 💎 アクセ</label>
            <label class="autosell-cb"><input type="checkbox" data-as-type="material" ${g.types.includes("material")?"checked":""} /> 🪨 素材</label>
          </div>
          <div class="autosell-rule">
            <span class="autosell-rule-label">最低品質:</span>
            <input type="range" id="autosell-min-q" min="0" max="80" step="10" value="${g.minQuality}" class="autosell-range" />
            <span id="autosell-min-q-val" class="autosell-range-val">Q${g.minQuality}+</span>
          </div>
          <div class="autosell-rule">
            <label class="autosell-cb"><input type="checkbox" id="autosell-exclude-traits" ${g.excludeTraits?"checked":""} /> 特性付きは陳列しない（装備用に温存）</label>
          </div>
        </div>
      </div>
    `;this.el.innerHTML=`
      <div class="shop-layout">
        ${i}
        <div class="shop-columns">${r}${m}</div>
        ${v}
      </div>
    `,this._bindEvents()}_bindEvents(){this.el.querySelectorAll(".shop-displayable-card").forEach(a=>{a.addEventListener("click",()=>{if(this.shop.displayedItems.length>=this.shop.maxSlots)return;const r=a.getAttribute("data-uid");this.shop.displayItem(r),C.emit("inventory:changed"),C.emit("item:displayed"),this.render()})}),this.el.querySelectorAll(".displayed-glow").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{const r=a.dataset.uid;r&&(this.shop.removeDisplayedItem(r),C.emit("inventory:changed"),C.emit("item:removed"),this.render())})}),this.el.querySelectorAll(".shop-filter-btn").forEach(a=>{a.addEventListener("click",r=>{this.shopFilter=r.currentTarget.dataset.shopFilter,this.render()})});const t=this.el.querySelector("#autosell-enabled");t&&t.addEventListener("change",()=>{this.shop.autoSellEnabled=t.checked,this.render()}),this.el.querySelectorAll("[data-as-type]").forEach(a=>{a.addEventListener("change",()=>{const r=a.dataset.asType,o=this.shop.autoSellRules.types;if(a.checked&&!o.includes(r))o.push(r);else if(!a.checked){const l=o.indexOf(r);l!==-1&&o.splice(l,1)}})});const e=this.el.querySelector("#autosell-min-q"),n=this.el.querySelector("#autosell-min-q-val");e&&e.addEventListener("input",()=>{this.shop.autoSellRules.minQuality=parseInt(e.value),n&&(n.textContent=`Q${e.value}+`)});const i=this.el.querySelector("#autosell-exclude-traits");i&&i.addEventListener("change",()=>{this.shop.autoSellRules.excludeTraits=i.checked})}updateCustomerTimers(){(this.customers?this.customers.getActiveCustomers():[]).forEach(e=>{const n=this.el.querySelector(`[data-customer-bar="${e.id}"]`);n&&(n.style.width=`${Math.max(0,e.timer/e.maxTimer*100)}%`)})}}class Rg{constructor(t,e){this.adventurers=t,this.inventory=e,this.el=document.querySelector("#tab-dispatch"),this._pendingLevelUps=new Set,this._unsubLevelUp=C.on("adventurer:levelUp",n=>{this._pendingLevelUps.add(n.adventurer.id)})}render(){const t=this.adventurers.getUnlockedAreas(),e=this.adventurers.getAdventurers(),n={};e.forEach(l=>{l.assignedArea&&(n[l.assignedArea]=(n[l.assignedArea]||0)+1)});const i=t.map(l=>{const d=(l.dropTable||[]).sort((f,m)=>m.weight-f.weight).slice(0,5).map(f=>{const m=Bt[f.blueprintId];return m?m.name:f.blueprintId}).join("、"),h=n[l.id]||0;return`
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
          <span class="disp-area-count">${t.length}エリア</span>
        </div>
        <div class="disp-area-grid">${i}</div>
      </div>
    `,r=e.map(l=>{const c=l.status==="exploring",d=c&&l.maxTimer>0?Math.max(0,(1-l.timer/l.maxTimer)*100):0,h=se[l.assignedArea],f=l.equipment.weapon,m=t.map(g=>`<button class="disp-area-btn ${l.assignedArea===g.id?"disp-area-btn-active":""}" data-adv-id="${l.id}" data-area-id="${g.id}" title="${g.name}">${g.icon}</button>`).join("");return`
        <div class="disp-adv-card" data-adv-id="${l.id}">
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
            <span class="disp-exp-text">EXP ${l.exp}/${cs[l.level]||"—"}</span>
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
            ${m}
          </div>
        </div>
      `}).join(""),o=`
      <div class="disp-panel disp-panel-right">
        <div class="disp-panel-header">
          <h4>👥 冒険者</h4>
          <span class="disp-adv-count">${e.length}人</span>
        </div>
        <div class="disp-adv-list">${r}</div>
      </div>
    `;this.el.innerHTML=`
      <div class="disp-layout">
        <p class="text-dim disp-description">冒険者は割り当てられたエリアを自動で繰り返し探索します。レベルが上がると探索が速くなります。</p>
        <div class="disp-columns">${a}${o}</div>
      </div>
    `,this._bindEvents()}_bindEvents(){this.el.querySelectorAll(".disp-area-btn").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.dataset.advId,i=e.currentTarget.dataset.areaId;this.adventurers.assignArea(n,i),this.render()})}),this.el.querySelectorAll(".disp-equip-slot").forEach(t=>{t.addEventListener("click",e=>{const n=t.dataset.advId;this._showEquipmentPanel(n)})})}_expPct(t){const e=cs[t.level];if(!e)return 100;const n=cs[t.level-1]||0;return Math.min(100,(t.exp-n)/(e-n)*100)}_renderSuccessRate(t,e){const n=this.adventurers.calcSuccessRate(t,e);let i="disp-rate-low";return n>=70?i="disp-rate-high":n>=40&&(i="disp-rate-mid"),`
      <div class="disp-success-bar-wrap" title="探索成功率: ${n}%">
        <div class="disp-success-bar-fill ${i}" style="width:${n}%"></div>
        <span class="disp-success-bar-label">🎯 ${n}%</span>
      </div>
    `}_renderTraitEffects(t){return`<div class="disp-trait-row">${t.traits.map(n=>{const i=Jt[n];return i?(`${i.rarity||"common"}`,nn(n)):""}).join("")}</div>`}_calcTimeText(t,e){const n=Math.max(.1,1-(t.level-1)*Ys.timeReduction),i=Math.max(8,Math.ceil(e.baseTime*(t.exploreTimeMultiplier||1)*n));return i<=12?"とても速い":i<=20?"速い":i<=35?"ふつう":i<=55?"やや遅い":"ゆっくり"}_renderEquipSlot(t){if(!t)return`
        <div class="disp-equip-empty">
          <span class="disp-equip-empty-icon">＋</span>
          <span class="disp-equip-empty-text">装備なし — クリックで装備</span>
        </div>
      `;const e=Bt[t.blueprintId],n=Ke(t.quality),i=e&&e.image?Ae(e.image):null,a=i?`<img class="disp-equip-img" src="${i}" alt="${t.name}" />`:'<span class="disp-equip-emoji">⚔️</span>';return`
      <div class="disp-equip-item ${n.css}">
        ${a}
        <div class="disp-equip-info">
          <span class="disp-equip-name">${t.name}</span>
          <span class="disp-equip-quality" style="color:${n.color}">${n.icon} Q${t.quality}</span>
        </div>
        <span class="disp-equip-change">変更 ▾</span>
      </div>
    `}_showEquipmentPanel(t){var o;const e=this.adventurers.getAdventurers().find(l=>l.id===t);if(!e)return;const n=this.inventory.getItems().filter(l=>l.type==="equipment").sort((l,c)=>{const d=this.adventurers.canEquip(t,l)?0:1,h=this.adventurers.canEquip(t,c)?0:1;return d!==h?d-h:c.quality-l.quality});let i="";e.equipment.weapon&&(i+=`<button class="disp-equip-option disp-equip-unequip" data-adv-id="${t}">❌ 装備を外す</button>`),n.length===0&&!e.equipment.weapon?i='<p class="text-dim" style="padding:12px;text-align:center;">装備可能なアイテムがありません</p>':n.forEach(l=>{const c=Bt[l.blueprintId],d=Ke(l.quality),h=this.adventurers.canEquip(t,l),f=c&&c.image?Ae(c.image):null,m=f?`<img class="disp-equip-opt-img" src="${f}" alt="${l.name}" />`:'<span class="disp-equip-opt-emoji">⚔️</span>';i+=`
          <button class="disp-equip-option ${d.css} ${h?"":"disp-equip-incompatible"}" data-adv-id="${t}" data-uid="${l.uid}" ${h?"":"disabled"}>
            ${m}
            <div class="disp-equip-opt-info">
              <span class="disp-equip-opt-name">${l.name}</span>
              <span class="disp-equip-opt-quality" style="color:${d.color}">${d.icon} Q${l.quality}</span>
              ${h?"":'<span class="disp-equip-lock">装備不可</span>'}
            </div>
          </button>
        `});const a=`
      <div class="disp-equip-panel">
        <div class="disp-equip-panel-header">
          <h4>⚔️ 装備選択 — ${e.name}</h4>
          <button class="disp-equip-panel-close">✕</button>
        </div>
        <div class="disp-equip-panel-list">${i}</div>
      </div>
    `,r=document.createElement("div");r.className="disp-equip-overlay",r.innerHTML=a,this.el.appendChild(r),r.querySelectorAll(".disp-equip-option[data-uid]").forEach(l=>{l.addEventListener("click",c=>{this.adventurers.equipWeapon(c.currentTarget.dataset.advId,c.currentTarget.dataset.uid),r.remove(),this.render()})}),r.querySelectorAll(".disp-equip-unequip").forEach(l=>{l.addEventListener("click",c=>{this.adventurers.unequipWeapon(c.currentTarget.dataset.advId),r.remove(),this.render()})}),(o=r.querySelector(".disp-equip-panel-close"))==null||o.addEventListener("click",()=>r.remove()),r.addEventListener("click",l=>{l.target===r&&r.remove()})}updateTimers(){const t=this.adventurers.getAdventurers();if(this.el.querySelectorAll(".disp-adv-status").forEach(e=>{const n=e.getAttribute("data-adv-id"),i=t.find(a=>a.id===n);i&&(i.status==="exploring"&&i.timer<3?e.textContent="🏠 帰還中...":e.textContent=i.status==="idle"?"☕ 準備中":"🚶 探索中")}),this.el.querySelectorAll(".progress-bar-fill").forEach(e=>{const n=e.getAttribute("data-adv-progress"),i=t.find(a=>a.id===n);if(i&&i.status==="exploring"&&i.maxTimer>0){const a=Math.max(0,(1-i.timer/i.maxTimer)*100);e.style.width=`${a}%`}}),this._pendingLevelUps.size>0)for(const e of this._pendingLevelUps){const n=this.el.querySelector(`.disp-adv-card[data-adv-id="${e}"]`);if(!n)continue;n.classList.add("levelup-flash"),n.addEventListener("animationend",()=>n.classList.remove("levelup-flash"),{once:!0});const i=n.querySelector(".disp-adv-level");if(i){const a=document.createElement("span");a.className="lv-up-badge",a.textContent="+1 Lv",i.insertAdjacentElement("afterend",a),setTimeout(()=>a.remove(),1300)}this._pendingLevelUps.delete(e)}}dispose(){this._unsubLevelUp&&this._unsubLevelUp()}}class Pg{constructor(t,e){this.dayCycle=t,this.reputation=e}render(){const t=document.getElementById("tab-stats");if(!t)return;const e=Tn,n=e.getAverageDailySales(7),i=e.totalCustomersServed+e.totalCustomersLost>0?Math.round(e.totalCustomersServed/(e.totalCustomersServed+e.totalCustomersLost)*100):0;t.innerHTML=`
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
          <canvas id="stats-chart" height="160"></canvas>
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
    `,this._drawChart(e.dailySales)}_renderCategoryBars(t){const e=[{key:"equipment",name:"装備",icon:"⚔️",color:"#e8b84b"},{key:"consumable",name:"消耗品",icon:"🧪",color:"#7bc96f"},{key:"accessory",name:"アクセ",icon:"💎",color:"#6bb5e8"},{key:"material",name:"素材",icon:"🪨",color:"#a08060"}],n=Object.values(t.salesByType).reduce((i,a)=>i+a,0)||1;return e.map(i=>{const a=t.salesByType[i.key]||0,r=Math.round(a/n*100);return`
        <div class="stats-category-row">
          <span class="stats-cat-label">${i.icon} ${i.name}</span>
          <div class="stats-cat-bar">
            <div class="stats-cat-fill" style="width:${r}%; background:${i.color}"></div>
          </div>
          <span class="stats-cat-value">${a}G (${r}%)</span>
        </div>
      `}).join("")}_renderAchievements(t){return[{name:"初めての販売",check:t.totalItemsSold>=1,icon:"🎯"},{name:"10個販売",check:t.totalItemsSold>=10,icon:"📦"},{name:"50個販売",check:t.totalItemsSold>=50,icon:"🏬"},{name:"初めてのパズル",check:t.totalPuzzlesPlayed>=1,icon:"🧩"},{name:"パズルマスター",check:t.bestPuzzleScore>=500,icon:"🌟"},{name:"接客率80%以上",check:t.totalCustomersServed/Math.max(1,t.totalCustomersServed+t.totalCustomersLost)>=.8,icon:"💫"},{name:"累計売上1000G",check:t.totalGoldEarned>=1e3,icon:"💰"},{name:"累計売上5000G",check:t.totalGoldEarned>=5e3,icon:"👑"}].map(n=>`
      <div class="stats-achievement ${n.check?"achieved":""}">
        <span class="stats-ach-icon">${n.icon}</span>
        <span class="stats-ach-name">${n.name}</span>
        ${n.check?'<span class="stats-ach-done">✓</span>':""}
      </div>
    `).join("")}_drawChart(t){const e=document.getElementById("stats-chart");if(!e)return;const n=e.getContext("2d"),i=e.parentElement;i&&(e.width=i.clientWidth);const a=e.width,r=e.height,o={top:10,right:10,bottom:25,left:40},l=a-o.left-o.right,c=r-o.top-o.bottom;if(n.clearRect(0,0,a,r),t.length===0){n.fillStyle="rgba(200,180,140,0.3)",n.font="13px sans-serif",n.textAlign="center",n.fillText("データなし — 1日目が完了すると表示されます",a/2,r/2);return}const d=Math.max(...t,1),h=Math.min(30,l/t.length-2),f=(l-h*t.length)/(t.length+1);n.strokeStyle="rgba(200,180,140,0.15)",n.lineWidth=1;for(let g=0;g<=4;g++){const v=o.top+c*(1-g/4);n.beginPath(),n.moveTo(o.left,v),n.lineTo(a-o.right,v),n.stroke(),n.fillStyle="rgba(200,180,140,0.4)",n.font="9px sans-serif",n.textAlign="right",n.fillText(`${Math.round(d*g/4)}`,o.left-4,v+3)}const m=n.createLinearGradient(0,o.top,0,r-o.bottom);m.addColorStop(0,"#e8b84b"),m.addColorStop(1,"#a07830"),t.forEach((g,v)=>{const p=o.left+f+v*(h+f),u=g/d*c,_=o.top+c-u;n.fillStyle=m,n.beginPath(),n.roundRect(p,_,h,u,[3,3,0,0]),n.fill(),n.fillStyle="rgba(200,180,140,0.5)",n.font="8px sans-serif",n.textAlign="center",n.fillText(`${v+1}日`,p+h/2,r-5)})}}class Ig{constructor(t,e,n){this.inventory=t,this.shop=e,this.dayCycle=n}render(){const t=document.getElementById("section-upgrade");if(!t)return;const e=this.dayCycle.currentRankIndex+1,n=Object.entries(eg).sort((r,o)=>r[1].order-o[1].order);let i="";for(const[r,o]of n){const l=Hr.filter(c=>c.category===r);l.length!==0&&(i+=`
        <div class="upgrade-category">
          <h3 class="upgrade-section-title">${o.name}</h3>
          <div class="upgrade-grid">
            ${l.map(c=>{const d=this.shop.isPurchased(c.id),h=this.inventory.gold>=c.cost,m=!(e>=c.requiredRank);let g="",v="";return d?(g="upgrade-purchased",v="購入済み"):m?(g="upgrade-locked",v=`Rank ${c.requiredRank} 必要`):h?(g="upgrade-available",v=`${c.cost}G`):(g="upgrade-expensive",v=`${c.cost}G`),`
                <div class="upgrade-card ${g}" data-id="${c.id}">
                  <div class="upgrade-card-icon">${c.icon}</div>
                  <div class="upgrade-card-body">
                    <span class="upgrade-card-name">${c.name}</span>
                    <span class="upgrade-card-desc">${c.description}</span>
                  </div>
                  <div class="upgrade-card-price">
                    ${d?"✅":m?"🔒":v}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `)}const a=`
      <div class="upgrade-capacity-bar">
        <span>📦 倉庫: ${this.inventory.items.length} / ${this.inventory.maxCapacity}</span>
        <span>🏪 販売棚: ${this.shop.displayedItems.length} / ${this.shop.maxSlots}</span>
      </div>
    `;t.innerHTML=a+i,t.querySelectorAll(".upgrade-available").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.id;this.shop.purchaseUpgrade(o,e)&&(this.render(),C.emit("inventory:changed"))})})}}const Lg=[...us,...ii];class Dg{constructor(t,e,n){this.dayCycle=t,this.quest=e,this.adventurers=n}render(){const t=document.getElementById("section-quest");if(!t)return;const e=Ut.ranks,n=this.dayCycle.currentRankIndex,i=e[n],a=n+1,r=a<e.length?e[a]:null;let o="";o+=this._renderRankProgress(i,r),o+=this._renderBossChallenge(r,a),o+=this._renderQuests(r),o+=this._renderRewardPreview(r),o+=this._renderAreaStatus(),o+=this._renderAdventurerStatus(),t.innerHTML=o;const l=t.querySelector("#btn-challenge-boss");l&&r&&l.addEventListener("click",()=>{C.emit("battle:requestStart",{rankIndex:a,bossId:r.requiredBossId})})}_renderRankProgress(t,e){if(!e)return`
        <div class="quest-rank-progress">
          <div class="quest-rank-label">🏆 ${t.name} <span class="quest-rank-badge">最高ランク</span></div>
        </div>
      `;const n=t.requiredSales,i=e.requiredSales,a=i-n,r=this.dayCycle.totalSales-n,o=Math.min(100,Math.max(0,r/a*100));return`
      <div class="quest-rank-progress">
        <div class="quest-rank-label">
          <span>${t.name}</span>
          <span class="quest-rank-arrow">→</span>
          <span class="quest-rank-next">${e.name}</span>
        </div>
        <div class="quest-progress-bar-wrap">
          <div class="quest-progress-bar-fill" style="width:${o}%"></div>
        </div>
        <div class="quest-progress-text">${this.dayCycle.totalSales.toLocaleString("ja-JP")}G / ${i.toLocaleString("ja-JP")}G</div>
      </div>
    `}_renderBossChallenge(t,e){if(!this.dayCycle.rankBossAvailable||!(t!=null&&t.requiredBossId))return"";const i=Object.values(se).find(r=>{var o;return((o=r.boss)==null?void 0:o.id)===t.requiredBossId}),a=i==null?void 0:i.boss;return`
      <div class="quest-boss-panel">
        <div class="quest-boss-header">⚠️ 昇格試験に挑戦可能！</div>
        ${a?`<div class="quest-boss-info">${a.icon} ${a.name}</div>`:""}
        <button id="btn-challenge-boss" class="btn btn-boss-challenge">⚔️ ボスに挑戦する</button>
      </div>
    `}_renderQuests(t){if(!t||!this.quest)return"";const e=this.quest.getQuestsForRank(t.rank),n=this.quest.getRequiredCount(t.rank),i=e.filter(a=>a.complete).length;return e.length===0?"":`
      <div class="quest-section">
        <h4 class="quest-section-title">🗺️ 昇格クエスト <span class="quest-progress-badge">${i}/${n}</span></h4>
        <div class="quest-list">
          ${e.map(a=>{const r=a.target>0?Math.min(100,a.current/a.target*100):0;return`
              <div class="quest-item ${a.complete?"quest-complete":""}">
                <span class="quest-icon">${a.icon}</span>
                <div class="quest-info">
                  <span class="quest-name">${a.name}</span>
                  <span class="quest-desc">${a.description}</span>
                  <div class="quest-item-bar-wrap">
                    <div class="quest-item-bar-fill" style="width:${r}%"></div>
                  </div>
                </div>
                <div class="quest-counter">
                  <span class="quest-count">${Math.min(a.current,a.target)}/${a.target}</span>
                  ${a.complete?'<span class="quest-check">✅</span>':""}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `}_renderRewardPreview(t){var a,r;if(!t)return"";const e=[];if(((a=t.newAreas)==null?void 0:a.length)>0)for(const o of t.newAreas){const l=se[o];l&&e.push({icon:l.icon,label:l.name,type:"area"})}const n=ii.filter(o=>o.unlockRank===t.rank);for(const o of n)e.push({icon:o.icon,label:o.name,type:"adventurer"});const i=((r=t.newRecipes)==null?void 0:r.length)||0;return i>0&&e.push({icon:"📜",label:`新レシピ ${i}種`,type:"recipe"}),e.length===0?"":`
      <div class="quest-section">
        <h4 class="quest-section-title">🎁 ランクアップで解放</h4>
        <div class="quest-reward-list">
          ${e.map(o=>`
            <div class="quest-reward-item quest-reward-${o.type}">
              <span class="quest-reward-icon">${o.icon}</span>
              <span class="quest-reward-label">${o.label}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}_renderAreaStatus(){return`
      <div class="quest-section">
        <h4 class="quest-section-title">🗺️ エリア</h4>
        <div class="quest-checklist">
          ${Object.values(se).map(e=>`
            <div class="quest-check-item ${e.unlocked?"quest-unlocked":"quest-locked"}">
              <span class="quest-check-icon">${e.unlocked?e.icon:"🔒"}</span>
              <span class="quest-check-label">${e.unlocked?e.name:"???"}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}_renderAdventurerStatus(){var i;const t=this.dayCycle.currentRankIndex+1,e=((i=this.adventurers)==null?void 0:i.adventurers)||[],n=new Set(e.map(a=>a.id));return`
      <div class="quest-section">
        <h4 class="quest-section-title">👥 冒険者</h4>
        <div class="quest-adv-list">
          ${Lg.map(a=>{const r=n.has(a.id),o=e.find(d=>d.id===a.id),l=a.unlockRank||1,c=a.battle||{maxHp:100,atk:10,def:5,spd:50};if(r){const d=o.level||1,h=c.maxHp+(d-1)*5,f=c.atk+(d-1)*2,m=c.def+(d-1)*1,g=c.spd+(d-1)*2;return`
                <div class="quest-adv-card quest-unlocked">
                  <div class="quest-adv-header">
                    <span class="quest-adv-icon">${a.icon}</span>
                    <span class="quest-adv-name">${a.name}</span>
                    <span class="quest-adv-lv">Lv.${d}</span>
                  </div>
                  <div class="quest-adv-stats">
                    <span>❤️${h}</span>
                    <span>⚔${f}</span>
                    <span>🛡${m}</span>
                    <span>💨${g}</span>
                  </div>
                </div>
              `}else return`
                <div class="quest-adv-card quest-locked">
                  <div class="quest-adv-header">
                    <span class="quest-adv-icon">🔒</span>
                    <span class="quest-adv-name">${t>=l?a.name:"???"}</span>
                    <span class="quest-adv-req">Rank ${l}で加入</span>
                  </div>
                </div>
              `}).join("")}
        </div>
      </div>
    `}}class Ug{constructor(t){this.collection=t,this.el=document.querySelector("#tab-collection"),this.subTab="items",this.typeFilter="all"}render(){if(!this.el)return;const t=this.collection,e=t.getCompletionRate(),n=Math.floor(e*100),i=t.getStatsByType(),a=[{key:"items",label:"📦 アイテム図鑑"},{key:"areas",label:"🗺️ エリア"},{key:"traits",label:"✨ 特性"}];let r=`
      <div class="coll-header">
        <div class="coll-rate">
          <span class="coll-rate-label">図鑑収集率</span>
          <div class="coll-rate-bar"><div class="coll-rate-fill" style="width:${n}%"></div></div>
          <span class="coll-rate-pct">${n}%</span>
        </div>
        <div class="coll-type-stats">
          ${Object.entries(i).map(([o,l])=>`<span class="coll-type-stat">${Ye(o).icon} ${l.found}/${l.total}</span>`).join("")}
        </div>
      </div>
      <div class="coll-subtabs">
        ${a.map(o=>`<button class="btn btn-sm coll-subtab ${this.subTab===o.key?"active":""}" data-subtab="${o.key}">${o.label}</button>`).join("")}
      </div>
    `;this.subTab==="items"?r+=this._renderItemsTab(i):this.subTab==="areas"?r+=this._renderAreasTab():this.subTab==="traits"&&(r+=this._renderTraitsTab()),this.el.innerHTML=r,this._bindEvents()}_renderItemsTab(t){const e=this.collection;let n='<div class="coll-filters">';[{key:"all",label:"すべて"},{key:"material",label:"🪨 素材"},{key:"equipment",label:"⚔️ 装備"},{key:"consumable",label:"🧪 消耗品"},{key:"accessory",label:"💎 アクセ"}].forEach(r=>{n+=`<button class="btn btn-xs coll-type-filter ${this.typeFilter===r.key?"active":""}" data-coll-type="${r.key}">${r.label}</button>`}),n+="</div>";const a=Object.entries(Bt).filter(([,r])=>this.typeFilter==="all"||r.type===this.typeFilter).sort((r,o)=>{const l=e.discoveredItems[r[0]]?1:0,c=e.discoveredItems[o[0]]?1:0;if(l!==c)return c-l;const d={material:0,equipment:1,consumable:2,accessory:3},h=(d[r[1].type]||0)-(d[o[1].type]||0);return h!==0?h:(r[1].tier||1)-(o[1].tier||1)});n+='<div class="coll-grid">';for(const[r,o]of a){const l=e.discoveredItems[r],c=!!l,d=Ye(o.type),h=o.image?Ae(o.image):null;if(c){const f=Ke(l.bestQuality);n+=`
          <div class="coll-card coll-card-found ${d.css}">
            <div class="coll-card-img">
              ${h?`<img src="${h}" alt="${o.name}" />`:`<span>${d.emoji}</span>`}
            </div>
            <div class="coll-card-body">
              <span class="coll-card-name">${o.name}</span>
              <span class="coll-card-meta">${d.icon} ${f.icon} Best Q${l.bestQuality}</span>
              <span class="coll-card-count">入手: ${l.count}回</span>
            </div>
          </div>
        `}else n+=`
          <div class="coll-card coll-card-unknown">
            <div class="coll-card-img coll-card-img-unknown"><span>？</span></div>
            <div class="coll-card-body">
              <span class="coll-card-name">？？？</span>
              <span class="coll-card-meta">${d.icon} 未発見</span>
            </div>
          </div>
        `}return n+="</div>",n}_renderAreasTab(){const t=this.collection;let e='<div class="coll-area-list">';for(const[n,i]of Object.entries(se)){const a=t.discoveredAreas.has(n),r=i.boss,o=r?t.defeatedBosses.has(r.id):!1;a||i.unlocked?e+=`
          <div class="coll-area-card coll-area-found">
            <span class="coll-area-icon">${i.icon}</span>
            <div class="coll-area-info">
              <span class="coll-area-name">${i.name}</span>
              <span class="coll-area-desc">${i.description||""}</span>
              ${r?`<span class="coll-area-boss ${o?"coll-boss-defeated":""}">${r.icon||"👹"} ${r.name} ${o?"✅ 撃破済み":"❓ 未撃破"}</span>`:""}
            </div>
          </div>
        `:e+=`
          <div class="coll-area-card coll-area-locked">
            <span class="coll-area-icon">🔒</span>
            <div class="coll-area-info">
              <span class="coll-area-name">？？？</span>
              <span class="coll-area-desc">未解放のエリア</span>
            </div>
          </div>
        `}return e+="</div>",e}_renderTraitsTab(){const t=this.collection,e=Object.entries(Jt),n=e.filter(([r])=>t.discoveredTraits.has(r)),i=e.filter(([r])=>!t.discoveredTraits.has(r));let a=`<div class="coll-trait-summary">${n.length}/${e.length} 特性を発見</div>`;a+='<div class="coll-trait-grid">';for(const[r,o]of n){const l=`trait-rarity-${o.rarity||"common"}`;a+=`
        <div class="coll-trait-card coll-trait-found">
          <span class="trait-badge ${l}">${r}</span>
          <span class="coll-trait-desc">${o.description||""}</span>
          <span class="coll-trait-rarity">${o.rarity||"common"}</span>
        </div>
      `}for(const[r,o]of i)a+=`
        <div class="coll-trait-card coll-trait-unknown">
          <span class="trait-badge trait-rarity-unknown">？？？</span>
          <span class="coll-trait-desc">未発見の特性</span>
          <span class="coll-trait-rarity">${o.rarity||"common"}</span>
        </div>
      `;return a+="</div>",a}_bindEvents(){this.el.querySelectorAll(".coll-subtab").forEach(t=>{t.addEventListener("click",()=>{this.subTab=t.dataset.subtab,this.render()})}),this.el.querySelectorAll(".coll-type-filter").forEach(t=>{t.addEventListener("click",()=>{this.typeFilter=t.dataset.collType,this.render()})})}}class uo{constructor(){this.el=null,this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this._create(),document.body.appendChild(this.el),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.el.classList.add("settings-visible")})}))}close(){this.isOpen&&(this.isOpen=!1,this.el.classList.remove("settings-visible"),setTimeout(()=>{var t;(t=this.el)==null||t.remove(),this.el=null},300))}_create(){this.el=document.createElement("div"),this.el.className="settings-overlay",this.el.innerHTML=`
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
                  min="0" max="100" value="${Math.round(Ee.masterVolume*100)}" />
                <span class="settings-slider-val" id="val-master">${Math.round(Ee.masterVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-bgm">BGM</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-bgm" class="settings-slider"
                  min="0" max="100" value="${Math.round(Ee.bgmVolume*100)}" />
                <span class="settings-slider-val" id="val-bgm">${Math.round(Ee.bgmVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label" for="vol-se">効果音</label>
              <div class="settings-slider-wrap">
                <input type="range" id="vol-se" class="settings-slider"
                  min="0" max="100" value="${Math.round(Ee.seVolume*100)}" />
                <span class="settings-slider-val" id="val-se">${Math.round(Ee.seVolume*100)}%</span>
              </div>
            </div>

            <div class="settings-row">
              <label class="settings-label">ミュート</label>
              <button class="settings-toggle-btn ${Ee.muted?"active":""}" id="btn-mute">
                ${Ee.muted?"ON":"OFF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.el.querySelector("#settings-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",t=>{t.target===this.el&&this.close()}),this._bindSlider("vol-master","val-master",t=>Ee.setMasterVolume(t/100)),this._bindSlider("vol-bgm","val-bgm",t=>Ee.setBgmVolume(t/100)),this._bindSlider("vol-se","val-se",t=>Ee.setSeVolume(t/100)),this.el.querySelector("#btn-mute").addEventListener("click",t=>{const e=Ee.toggleMute();t.target.textContent=e?"ON":"OFF",t.target.classList.toggle("active",e)})}_bindSlider(t,e,n){const i=this.el.querySelector(`#${t}`),a=this.el.querySelector(`#${e}`);i.addEventListener("input",()=>{const r=parseInt(i.value);a.textContent=`${r}%`,n(r)})}static createGearButton(){const t=document.createElement("button");return t.className="settings-gear-btn",t.title="設定",t.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>`,t.addEventListener("click",()=>Ng.toggle()),t}}const Ng=new uo,is=.25,ss=.6,as=.8,Fg=15;class Bg{constructor(t,e,n,i,a,r,o,l,c){this.inventory=t,this.shop=e,this.customer=i,this.dayCycle=a,this.events=r,this.reputation=o,this.quest=l,this.activeTab="tab-inventory",this._displayedGold=t.gold,this._targetGold=t.gold,this._lastDayProgressPct=-1,this._lastPaused=!1,this._lastDayBg="",this._cachedPauseText="",this._cachedGoldText="",this._lastTimePercent=-1,this._lastTimeTint="",this._updateScheduled=!1,this.elGold=document.getElementById("gold-value"),this.elDay=document.getElementById("day-value"),this.elRent=document.getElementById("rent-value"),this.elRank=document.getElementById("rank-value"),this.elDayProgress=document.getElementById("day-progress-fill"),this.elEventBanner=document.getElementById("event-banner"),this.elTabs=document.querySelectorAll(".tab-btn"),this.elSections=document.querySelectorAll(".content-section"),this._createRankProgressBar(),this.tabs={"tab-inventory":new Mg(t,e),"tab-crafting":new wg(t),"tab-shop":new Cg(t,e,i),"tab-dispatch":new Rg(n,t),"tab-stats":new Pg(a,o),"tab-upgrade":new Ig(t,e,a),"tab-quest":new Dg(a,l,n),"tab-collection":c?new Ug(c):null},this._unsubscribers=[C.on("item:sold",()=>this.updateAll()),C.on("adventurer:return",()=>this.updateAll()),C.on("inventory:changed",()=>this.updateAll()),C.on("gold:changed",()=>this._onGoldChanged()),C.on("day:newDay",()=>this.updateAll()),C.on("rank:up",()=>this.updateAll()),C.on("recipe:unlocked",()=>{this.activeTab==="tab-crafting"&&this.updateAll()}),C.on("customer:arrived",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),C.on("customer:left",()=>{this._updateCustomerBadge(),this.activeTab==="tab-shop"&&this.updateAll()}),C.on("customer:bought",()=>{this._updateCustomerBadge(),this.updateAll()}),C.on("reputation:changed",()=>this._updateStatusBar()),C.on("reputation:levelUp",d=>{C.emit("toast",{message:`⭐ 評判UP！「${d.name}」になりました！`,type:"success"})}),C.on("upgrade:purchased",()=>this.updateAll()),C.on("save:completed",()=>this._showSaveIndicator()),C.on("item:sold",d=>this._showSaleFloatingText(d)),C.on("rank:up",d=>this._showRankUpOverlay(d)),C.on("item:crafted",d=>this._onItemCrafted(d))],this._init()}update(t){if(this._updateDayProgressBar(),this._animateGold(t),this._updateTimeOfDayUI(),this.activeTab==="tab-dispatch"){const e=this.tabs["tab-dispatch"];e&&e.updateTimers&&e.updateTimers()}if(this.activeTab==="tab-shop"){const e=this.tabs["tab-shop"];e&&e.updateCustomerTimers&&e.updateCustomerTimers()}}updateAll(){this._updateScheduled||(this._updateScheduled=!0,requestAnimationFrame(()=>{this._updateScheduled=!1,this._updateStatusBar(),this._updateCustomerBadge();const t=this.tabs[this.activeTab];t&&t.render()}))}_init(){this.elTabs.forEach(e=>{e.addEventListener("click",n=>{const i=n.currentTarget.getAttribute("data-target");this._switchTab(i)})});const t=document.getElementById("skip-day-btn");t&&t.addEventListener("click",()=>{this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()}),this.updateAll(),C.emit("tab:switched",{tabId:this.activeTab}),this._addSettingsButton(),this._initKeyboardShortcuts(),this._initAmbientParticles()}_initAmbientParticles(){const t=window.innerWidth<=768?5:Fg,e=document.createElement("div");e.className="ambient-particles",document.body.insertBefore(e,document.body.firstChild);for(let n=0;n<t;n++){const i=document.createElement("div");i.className="ambient-particle",i.style.left=`${Math.random()*100}%`,i.style.animationDuration=`${12+Math.random()*18}s`,i.style.animationDelay=`${Math.random()*15}s`,i.style.width=`${2+Math.random()*3}px`,i.style.height=i.style.width,e.appendChild(i)}}_addSettingsButton(){const t=document.querySelector(".status-bar");if(!t)return;const e=uo.createGearButton();e.classList.add("game-gear-btn"),t.appendChild(e)}_switchTab(t){this.activeTab=t,this.elTabs.forEach(e=>{e.classList.toggle("active",e.getAttribute("data-target")===t)}),this.elSections.forEach(e=>{e.classList.toggle("active",e.id===t)}),this.updateAll(),C.emit("tab:switched",{tabId:t})}_onGoldChanged(){const t=this.inventory.gold,e=t-this._targetGold;if(this._targetGold=t,this._goldAnimTimer=0,this.elGold){const n=this.elGold.closest(".gold-display");n&&(e>0?(n.classList.add("gold-flash-up"),setTimeout(()=>n.classList.remove("gold-flash-up"),600)):e<0&&(n.classList.add("gold-flash-down"),setTimeout(()=>n.classList.remove("gold-flash-down"),600)))}}_animateGold(t){if(Math.abs(this._displayedGold-this._targetGold)<1)if(this._displayedGold!==this._targetGold)this._displayedGold=this._targetGold;else return;else{const e=Math.max(1,Math.abs(this._targetGold-this._displayedGold)*5);this._displayedGold<this._targetGold?this._displayedGold=Math.min(this._targetGold,this._displayedGold+e*t):this._displayedGold=Math.max(this._targetGold,this._displayedGold-e*t)}if(this.elGold){const e=this._formatGold(Math.round(this._displayedGold));this._cachedGoldText!==e&&(this._cachedGoldText=e,this.elGold.textContent=e)}}_formatGold(t){return t.toLocaleString("ja-JP")}_updateStatusBar(){if(this._targetGold=this.inventory.gold,this.dayCycle&&(this.elDay&&(this.elDay.textContent=`${this.dayCycle.day}日目`),this.elRent&&(this.elRent.textContent=`${this._formatGold(this.dayCycle.currentRent)}G`),this.elRank&&(this.elRank.textContent=this.dayCycle.currentRank.name),this._updateRankProgress()),this.reputation){const t=document.getElementById("reputation-value");if(t){const e=this.reputation.currentLevel;t.textContent=`${e.icon} ${e.name}`}}if(this.events&&this.elEventBanner){const t=this.events.getActiveEffects();t.length>0?(this.elEventBanner.innerHTML=t.map(e=>`<span class="event-badge">${e.icon} ${e.name}</span>`).join(""),this.elEventBanner.style.display="flex"):this.elEventBanner.style.display="none"}}_createRankProgressBar(){const t=document.querySelector(".status-item:has(#rank-value)");if(!t)return;const e=document.createElement("div");e.className="rank-progress-container",e.innerHTML=`
      <div class="rank-progress-bar">
        <div id="rank-progress-fill" class="rank-progress-fill"></div>
      </div>
      <span id="rank-progress-text" class="rank-progress-text"></span>
    `,t.appendChild(e),this.elRankProgress=document.getElementById("rank-progress-fill"),this.elRankProgressText=document.getElementById("rank-progress-text")}_updateRankProgress(){if(!this.elRankProgress||!this.dayCycle)return;const t=Ut.ranks,e=this.dayCycle.currentRankIndex;if(e>=t.length-1){this.elRankProgress.style.width="100%",this.elRankProgressText&&(this.elRankProgressText.textContent="MAX");return}const n=t[e].requiredSales,a=t[e+1].requiredSales-n,r=this.dayCycle.totalSales-n,o=Math.min(100,Math.max(0,r/a*100));this.elRankProgress.style.width=`${o}%`,this.elRankProgressText&&(this.elRankProgressText.textContent=`${this._formatGold(Math.floor(r))} / ${this._formatGold(a)}G`)}_updateCustomerBadge(){const t=document.querySelector('[data-target="tab-shop"]');if(!t)return;const e=t.querySelector(".tab-badge");e&&e.remove();const n=this.customer?this.customer.getActiveCustomers().length:0;if(n>0){const i=document.createElement("span");i.className="tab-badge",i.textContent=n,t.appendChild(i)}}_updateDayProgressBar(){if(!this.dayCycle||!this.elDayProgress)return;const t=Math.floor(this.dayCycle.dayProgress*100);if(this._lastDayProgressPct===t&&this._lastPaused===this.dayCycle.paused)return;this._lastDayProgressPct=t,this._lastPaused=this.dayCycle.paused,this.elDayProgress.style.width=`${t}%`;const e=t/100;let n="",i="";e<is?(n="linear-gradient(90deg, #27ae60, #2ecc71)",i="🌅 朝"):e<ss?(n="linear-gradient(90deg, #2ecc71, #f1c40f)",i="☀️ 昼"):e<as?(n="linear-gradient(90deg, #f39c12, #e67e22)",i="🌇 夕方"):(n="linear-gradient(90deg, #e74c3c, #c0392b)",i="🌙 夜"),this._lastDayBg!==n&&(this.elDayProgress.style.background=n,this._lastDayBg=n);const a=document.getElementById("ap-label");if(a){const r=this.dayCycle.paused?"⏸ 調合中…":i;this._cachedPauseText!==r&&(this._cachedPauseText=r,a.textContent=r)}}_showSaveIndicator(){const t=document.querySelector(".save-indicator");t&&t.remove();const e=document.createElement("div");e.className="save-indicator",e.textContent="💾 保存しました",document.body.appendChild(e),setTimeout(()=>{e.classList.add("save-indicator-hide"),setTimeout(()=>e.remove(),500)},1500)}_showSaleFloatingText(t){var r;const e=(t==null?void 0:t.price)||((r=t==null?void 0:t.item)==null?void 0:r.value)||0;if(e<=0||document.querySelectorAll(".sale-floating-text").length>=10)return;const i=document.createElement("div");i.className="sale-floating-text",i.textContent=`+${e.toLocaleString("ja-JP")}G`;const a=document.querySelector(".gold-display");if(a){const o=a.getBoundingClientRect();i.style.left=`${o.left+o.width/2}px`,i.style.top=`${o.top}px`}else i.style.right="200px",i.style.top="40px";document.body.appendChild(i),setTimeout(()=>i.remove(),1500)}_showRankUpOverlay(t){const e=(t==null?void 0:t.rank)||"ランクアップ！",n=document.createElement("div");n.className="rankup-overlay",n.innerHTML=`
      <div class="rankup-confetti-layer"></div>
      <div class="rankup-content">
        <div class="rankup-icon">👑</div>
        <div class="rankup-label">ランクアップ！</div>
        <div class="rankup-name">${e}</div>
      </div>
    `,document.body.appendChild(n);const i=n.querySelector(".rankup-confetti-layer"),a=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff"],r=window.innerWidth<=768?15:60;for(let o=0;o<r;o++){const l=document.createElement("div");l.className="rankup-confetti-particle",l.style.left=`${Math.random()*100}%`,l.style.backgroundColor=a[Math.floor(Math.random()*a.length)],l.style.animationDelay=`${Math.random()*2}s`,l.style.animationDuration=`${2+Math.random()*2}s`,l.style.width=`${4+Math.random()*6}px`,l.style.height=`${3+Math.random()*5}px`,i.appendChild(l)}setTimeout(()=>{n.classList.add("rankup-overlay-hide"),setTimeout(()=>n.remove(),600)},3e3)}_onItemCrafted(t){if(!(t!=null&&t.item))return;const e=t.item.quality;if(e>=81){const n=document.createElement("div");n.className="legendary-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),1200)}else if(e>=61){const n=document.createElement("div");n.className="excellent-flash",document.body.appendChild(n),setTimeout(()=>n.remove(),800)}}_updateTimeOfDayUI(){if(!this.dayCycle)return;const t=Math.floor(this.dayCycle.dayTimer/this.dayCycle.dayDuration*100)/100;if(this._lastTimePercent===t)return;this._lastTimePercent=t;const e=document.documentElement;let n,i,a,r,o;if(t<is){const c=t/is;n=255,i=220,a=180,r=.03*c,o=`rgba(255, 200, 140, ${.08*c})`}else if(t<ss){const c=(t-is)/(ss-is);n=255,i=248,a=230,r=.03*(1-c),o="rgba(160, 132, 92, 0.08)"}else if(t<as){const c=(t-ss)/(as-ss);n=255,i=150,a=80,r=.04*c,o=`rgba(196, 122, 90, ${.12*c})`}else{const c=(t-as)/(1-as);n=30,i=40,a=80,r=.04*(.5+c*.5),o=`rgba(50, 60, 120, ${.08*c})`}const l=`rgba(${n}, ${i}, ${a}, ${r})`;this._lastTimeTint!==l&&(this._lastTimeTint=l,e.style.setProperty("--time-tint",l),e.style.setProperty("--time-border",o))}_initKeyboardShortcuts(){const t={1:"tab-inventory",2:"tab-crafting",3:"tab-shop",4:"tab-dispatch",5:"tab-upgrade",6:"tab-quest",7:"tab-collection",8:"tab-stats"};this._keyHandler=e=>{document.querySelector(".puzzle-overlay, .craft-result-overlay, .gameover-overlay, .title-overlay")||e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"||(t[e.key]&&(e.preventDefault(),this._switchTab(t[e.key])),e.code==="Space"&&(e.preventDefault(),this.dayCycle&&!this.dayCycle.isGameOver&&this.dayCycle.skipDay()))},document.addEventListener("keydown",this._keyHandler)}dispose(){this._unsubscribers.forEach(t=>t()),this._keyHandler&&document.removeEventListener("keydown",this._keyHandler)}}const ja=5;class kg{constructor(){this.container=document.createElement("div"),this.container.className="toast-container",document.body.appendChild(this.container),this._lastSoldToast=0,this._lastCustomerToast=0,this._soldBatch={count:0,totalPrice:0,timer:null},C.on("item:sold",t=>{var e,n;this._soldBatch.count++,this._soldBatch.totalPrice+=t.price||((e=t.item)==null?void 0:e.value)||0,this._soldBatch.lastName||(this._soldBatch.lastName=((n=t.item)==null?void 0:n.name)||"アイテム"),this._soldBatch.timer||(this._soldBatch.timer=setTimeout(()=>{const i=this._soldBatch;i.count===1?this.show(`${i.lastName} が ${i.totalPrice}G で売れました！`,"gold"):this.show(`${i.count}個のアイテムが売れました！ (+${i.totalPrice}G)`,"gold"),i.count=0,i.totalPrice=0,i.timer=null,i.lastName=null},2e3))}),C.on("adventurer:return",t=>this._showAdventurerReturn(t)),C.on("day:newDay",t=>this.show(`${t.day}日目 — 維持費 ${t.rent}G を支払いました`,"default")),C.on("rank:up",t=>this.show(`🎉 ランクアップ！ ${t.rank}`,"special")),C.on("recipe:unlocked",t=>{const e=t.count||1;this.show(e>1?`📜 新レシピ ${e}種 解放！`:`📜 新レシピ解放: ${t.name||""}`,"green")}),C.on("area:unlocked",t=>this.show(`🗺️ 新エリア解放: ${t.name}`,"green")),C.on("customer:arrived",t=>{const e=Date.now();e-this._lastCustomerToast<3e3||(this._lastCustomerToast=e,this.show(`${t.customer.icon} ${t.customer.name}が来店！`,"default"))}),C.on("customer:left",()=>{}),C.on("customer:bought",t=>{}),C.on("adventurer:levelUp",t=>this.show(`⬆️ ${t.adventurer.name} が Lv.${t.adventurer.level} になった！`,"special")),C.on("adventurer:joined",t=>this.show(`🆕 ${t.adventurer.name} が仲間に加わった！`,"special")),C.on("event:triggered",t=>this.show(`${t.icon} ${t.name}：${t.description}`,"special"))}_showAdventurerReturn(t){var c;const e=t.items||[],n=((c=t.adventurer)==null?void 0:c.name)||"冒険者",i=t.success!==!1,a=document.createElement("div");a.className=`toast toast-${i?"green":"red"}`;const r=document.createElement("div");r.className="toast-text",i?r.textContent=`✅ ${n} が帰還！ ${e.length}個の素材を入手`:r.textContent=`❌ ${n} の探索失敗… 素材を入手できなかった`,a.appendChild(r);const o=document.createElement("div");o.className="toast-item-icons";const l=Math.min(e.length,ja);for(let d=0;d<l;d++){const h=e[d],f=Bt[h.blueprintId],m=f==null?void 0:f.image,g=document.createElement("div");if(g.className="toast-item-icon",g.title=h.name,m){const v=document.createElement("img");v.src=Ae(m),v.alt=h.name,v.loading="lazy",g.appendChild(v)}else g.textContent=(h.name||"?")[0];o.appendChild(g)}if(e.length>ja){const d=document.createElement("div");d.className="toast-item-icon toast-item-more",d.textContent=`+${e.length-ja}`,o.appendChild(d)}if(a.appendChild(o),i&&e.length>0){const d=document.createElement("button");d.className="toast-detail-btn",d.textContent="📋 詳細",d.addEventListener("click",h=>{h.stopPropagation(),this._showReturnDetailModal(t)}),a.appendChild(d)}this._present(a)}_showReturnDetailModal(t){var o;const e=t.items||[],n=((o=t.adventurer)==null?void 0:o.name)||"冒険者",i=t.successRate,a=e.map(l=>{const c=Ke(l.quality),d=(l.traits||[]).map(h=>nn(h)).join("");return`
        <div class="return-item-row">
          <span class="return-item-emoji">📦</span>
          <span class="return-item-name">${l.name}</span>
          <span class="return-item-quality" style="color:${c.color}">${c.icon} Q${l.quality}</span>
          ${d?`<div class="return-item-traits">${d}</div>`:""}
        </div>
      `}).join(""),r=document.createElement("div");r.className="item-detail-overlay",r.innerHTML=`
      <div class="item-detail-modal return-detail-modal">
        <button class="item-detail-close" id="return-modal-close">✕</button>
        <div class="return-modal-title">
          <span>✅ ${n} が帰還</span>
          ${i!=null?`<span class="return-modal-rate">🎯 ${i}%</span>`:""}
        </div>
        <div class="return-modal-items">${a}</div>
      </div>
    `,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#return-modal-close").addEventListener("click",()=>r.remove())}show(t,e="default"){const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=t,this._present(n)}showHtml(t,e="default"){const n=document.createElement("div");n.className=`toast toast-${e}`;for(const i of t)n.appendChild(i);this._present(n)}_present(t){for(t.addEventListener("click",()=>this._dismiss(t)),this.container.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>this._dismiss(t),5e3);this.container.children.length>5;)this._dismiss(this.container.firstChild)}_dismiss(t){!t||!t.parentNode||(t.classList.add("toast-hide"),setTimeout(()=>t.remove(),300))}}class Og{constructor(){this.el=document.createElement("div"),this.el.className="gameover-overlay",this.el.style.display="none",document.body.appendChild(this.el),C.on("game:over",t=>this._showGameOver(t)),C.on("game:clear",t=>this._showGameClear(t))}_showGameOver(t){var e;this.el.innerHTML=`
      <div class="gameover-particles gameover-dark-particles"></div>
      <div class="gameover-box gameover-fail">
        <h2>💀 閉店…</h2>
        <p class="gameover-reason">${t.reason||"維持費を支払えませんでした…"}</p>
        <div class="gameover-stats">
          <div class="gameover-stat">
            <span class="gameover-stat-label">営業日数</span>
            <span class="gameover-stat-value">${t.day}日</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">累計売上</span>
            <span class="gameover-stat-value">${((e=t.totalSales)==null?void 0:e.toLocaleString("ja-JP"))||0}G</span>
          </div>
          <div class="gameover-stat">
            <span class="gameover-stat-label">最終ランク</span>
            <span class="gameover-stat-value">${t.rank}</span>
          </div>
        </div>
        <button class="btn primary gameover-retry-btn" id="btn-retry">もう一度挑戦する</button>
      </div>
    `,this.el.style.display="flex",this._spawnParticles(".gameover-dark-particles",30,["#555","#777","#444","#666"],!0),document.getElementById("btn-retry").addEventListener("click",()=>{location.reload()})}_showGameClear(t){var n;this.el.innerHTML=`
      <div class="gameover-particles gameover-confetti-layer"></div>
      <div class="gameover-particles gameover-fireworks-layer"></div>
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
            <span class="gameover-stat-value">${((n=t.totalSales)==null?void 0:n.toLocaleString("ja-JP"))||0}G</span>
          </div>
        </div>
        <p class="gameover-continue-msg">このまま経営を続けることもできます。</p>
        <div class="gameover-buttons">
          <button class="btn gameover-continue-btn" id="btn-continue">経営を続ける</button>
          <button class="btn primary gameover-retry-btn" id="btn-newgame">新しく始める</button>
        </div>
      </div>
    `,this.el.style.display="flex";const e=["#e8b84b","#7daa68","#c47a5a","#7ab0c4","#f5e6c8","#ff9955","#fff","#ffd700"];this._spawnParticles(".gameover-confetti-layer",80,e,!1),this._spawnFireworks(".gameover-fireworks-layer",30),document.getElementById("btn-continue").addEventListener("click",()=>{this.el.style.display="none"}),document.getElementById("btn-newgame").addEventListener("click",()=>{location.reload()})}_spawnParticles(t,e,n,i){const a=this.el.querySelector(t);if(a)for(let r=0;r<e;r++){const o=document.createElement("div");o.className=i?"gameover-dark-particle":"gameover-confetti-piece",o.style.left=`${Math.random()*100}%`,o.style.backgroundColor=n[Math.floor(Math.random()*n.length)],o.style.animationDelay=`${Math.random()*4}s`,o.style.animationDuration=`${2+Math.random()*3}s`,i||(o.style.width=`${4+Math.random()*8}px`,o.style.height=`${3+Math.random()*6}px`),a.appendChild(o)}}_spawnFireworks(t,e){const n=this.el.querySelector(t);if(!n)return;const i=["#e8b84b","#ff6b6b","#7daa68","#7ab0c4","#ff9955","#ffd700"];for(let a=0;a<e;a++){const r=document.createElement("div");r.className="gameover-firework",r.style.left=`${10+Math.random()*80}%`,r.style.backgroundColor=i[Math.floor(Math.random()*i.length)],r.style.animationDelay=`${Math.random()*5}s`,r.style.animationDuration=`${1.5+Math.random()*2}s`,n.appendChild(r)}}}const Ri=class Ri{constructor(t){this.onStart=t,this.el=document.createElement("div"),this.el.className="title-overlay",this._render(),document.body.appendChild(this.el),this._waitForAssets().then(()=>{this._startRippleSequence()})}async _waitForAssets(){const t=[],e=this.el.querySelector(".title-logo-img");e&&!e.complete&&t.push(new Promise(n=>{e.onload=n,e.onerror=n})),t.push(Ee.waitForCurrentTrack()),await Promise.all(t)}_startRippleSequence(){const t=this.el.querySelector(".title-ripple-container"),e=Ri.RIPPLE_DELAYS;e.forEach(i=>{setTimeout(()=>{const a=20+Math.random()*40,r=20+Math.random()*40,o=document.createElement("div");o.className="title-ripple",o.style.left=`${a}%`,o.style.top=`${r}%`,t.appendChild(o),o.addEventListener("animationend",()=>o.remove())},i)});const n=e[e.length-1];setTimeout(()=>{this.el.classList.add("title-animate")},n+Ri.FOREST_DELAY_AFTER_RIPPLES)}_render(){var c;const t=na.getSaveInfo(),e=t?((c=Ut.ranks[t.rankIndex])==null?void 0:c.name)||"—":"",n=t?new Date(t.timestamp).toLocaleString("ja-JP"):"";let i="";const a=5;for(let d=0;d<a;d++){const h=4+d*2;let f="";for(let p=0;p<h;p++){const u=p/h*100+(Math.random()-.5)*(70/h),_=50+Math.random()*50,b=Math.random()>.45?"pine":"oak",x=8+Math.random()*6+d*2;f+=`<div class="tree-sil tree-${b}"
          style="left:${u}%; height:${_}%; width:${x}%;"></div>`}const m=d*.35,g=2.5+d*.3,v=.15+d*.2;i+=`<div class="forest-depth-layer" style="
        --layer-delay:${m}s; --layer-dur:${g}s; --start-scale:${v};
        z-index:${d+1};">${f}</div>`}let r="";for(let d=0;d<25;d++){const h=Math.random()*100,f=20+Math.random()*70,m=2+Math.random()*3,g=3+Math.random()*4,v=Math.random()*6;r+=`<div class="title-particle"
        style="left:${h}%; top:${f}%; width:${m}px; height:${m}px;
               --dur:${g}s; --delay:${v}s;"></div>`}this.el.innerHTML=`
      <div class="title-ripple-container"></div>
      <div class="title-sky-layer"></div>
      <div class="title-forest-tunnel">${i}</div>
      <div class="title-light-rays"></div>
      <div class="title-fog-layer"></div>
      <div class="title-particles">${r}</div>
      <div class="title-content">
        <div class="title-logo">
          <img src="${Ae("/art/Title_logo.png")}" alt="ひだまり森の錬金工房" class="title-logo-img" />
        </div>
        <div class="title-buttons">
          <button class="title-menu-btn title-menu-btn-primary" id="btn-new-game">
            <span class="title-menu-label">はじめから</span>
          </button>
          ${t?`
            <button class="title-menu-btn title-menu-btn-secondary" id="btn-continue">
              <span class="title-menu-label">つづきから</span>
              <span class="title-save-info">${t.day}日目 / ${e} / ${t.gold}G</span>
              <span class="title-save-date">${n}</span>
            </button>
          `:""}
        </div>
      </div>
    `,this.el.querySelector("#btn-new-game").addEventListener("click",()=>{if(t){if(!confirm("セーブデータを削除して新しく始めますか？"))return;na.deleteSave()}this._close(null)});const o=uo.createGearButton();o.classList.add("title-gear-btn"),this.el.appendChild(o);const l=this.el.querySelector("#btn-continue");l&&l.addEventListener("click",()=>{this._close(na.loadSaveData())})}_close(t){this.el.classList.add("title-fade-out"),setTimeout(()=>{this.el.remove(),this.onStart(t)},600)}};Wi(Ri,"RIPPLE_DELAYS",[200,900,1500]),Wi(Ri,"FOREST_DELAY_AFTER_RIPPLES",800);let Vr=Ri;const Il="voxelshop_tab_guides",zg={"tab-inventory":{icon:"📦",title:"倉庫",lines:["集めた素材やクラフト品を管理する場所です","フィルタで種類ごとに絞り込めます","品質(Q)が高いほどアイテムの価値が上がります"]},"tab-crafting":{icon:"🔨",title:"調合",lines:["素材を組み合わせてアイテムを作れます","パズルをうまくクリアすると品質がアップ！","ランクが上がると新しいレシピが解放されます"]},"tab-shop":{icon:"🏪",title:"お店",lines:["アイテムを陳列するとお客さんが買いに来ます","品質が高いアイテムほど高く売れます","売上を貯めてランクアップを目指しましょう"]},"tab-dispatch":{icon:"🗺️",title:"派遣",lines:["冒険者が自動で探索に出かけ素材を集めます","エリアを選んで割り当て、装備で成功率UP！","レベルが上がると探索が速く・成功しやすくなります"]},"tab-upgrade":{icon:"🏗️",title:"設備",lines:["ゴールドで設備をアップグレードできます","倉庫拡張・販売棚追加などが購入可能です"]},"tab-quest":{icon:"📜",title:"クエスト",lines:["ランクアップに必要なクエストを確認できます","条件を満たしたらボスに挑戦しましょう"]},"tab-stats":{icon:"📊",title:"統計",lines:["これまでの冒険の記録を振り返れます","売上やクラフト数など各種実績を確認できます"]}};class Gg{constructor(){this._shown={};try{const t=localStorage.getItem(Il);t&&(this._shown=JSON.parse(t))}catch{}this._activeGuide=null,this._autoHideTimer=null,this._shown._welcome||(this._shown._welcome=!0,this._shown["tab-inventory"]=!0,this._save(),setTimeout(()=>this._showWelcome(),600)),this._unsub=C.on("tab:switched",t=>{t!=null&&t.tabId&&this._onTabVisit(t.tabId)})}_onTabVisit(t){if(this._shown[t])return;const e=zg[t];e&&(this._shown[t]=!0,this._save(),this._showGuide(e))}_showWelcome(){this._showGuide({icon:"🌿",title:"ひだまり森の錬金工房へようこそ！",lines:["冒険者が集めた素材を調合して販売しましょう","売上を伸ばしてお店のランクを上げていきます","各タブを開くと使い方をお教えします"]})}_showGuide(t){this._dismiss();const e=document.createElement("div");e.className="tab-guide",e.innerHTML=`
      <div class="tab-guide-card">
        <div class="tab-guide-header">
          <span class="tab-guide-icon">${t.icon}</span>
          <span class="tab-guide-title">${t.title}</span>
          <button class="tab-guide-close" aria-label="閉じる">✕</button>
        </div>
        <ul class="tab-guide-list">
          ${t.lines.map(n=>`<li>${n}</li>`).join("")}
        </ul>
      </div>
    `,document.body.appendChild(e),this._activeGuide=e,e.querySelector(".tab-guide-close").addEventListener("click",()=>this._dismiss()),e.addEventListener("click",n=>{n.target===e&&this._dismiss()}),this._autoHideTimer=setTimeout(()=>this._dismiss(),8e3)}_dismiss(){if(this._autoHideTimer&&(clearTimeout(this._autoHideTimer),this._autoHideTimer=null),this._activeGuide){const t=this._activeGuide;t.classList.add("tab-guide-exit"),setTimeout(()=>t.remove(),400),this._activeGuide=null}}_save(){try{localStorage.setItem(Il,JSON.stringify(this._shown))}catch{}}dispose(){this._unsub&&this._unsub(),this._dismiss()}}const Ln=[{level:1,name:"無名の店",icon:"☆",minRep:0,customerRate:1,priceBonus:0},{level:2,name:"知られた店",icon:"★",minRep:30,customerRate:1.3,priceBonus:.05},{level:3,name:"人気店",icon:"★★",minRep:80,customerRate:1.6,priceBonus:.1},{level:4,name:"王国御用達",icon:"★★★",minRep:150,customerRate:2,priceBonus:.15},{level:5,name:"伝説の名店",icon:"🌟",minRep:250,customerRate:2.5,priceBonus:.2}];class Hg{constructor(){this.reputation=0,this.currentLevel=Ln[0],this._bindEvents()}_bindEvents(){this._unsubBought=C.on("customer:bought",t=>{var i;const e=((i=t.item)==null?void 0:i.quality)||30;let n=1;e>=80?n=4:e>=60?n=3:e>=40&&(n=2),this.addReputation(n)}),this._unsubLeft=C.on("customer:left",t=>{((t==null?void 0:t.reason)==="no_match"||(t==null?void 0:t.reason)==="timeout")&&this.addReputation(-2)}),this._unsubRankUp=C.on("rank:up",()=>{this.addReputation(10)}),this._unsubCrafted=C.on("item:crafted",()=>{this.addReputation(1)})}addReputation(t){const e=this.currentLevel;if(t>0){const n={effectType:"reputation_bonus",result:0};C.emit("upgrade:queryBonus",n),n.result>0&&(t=Math.ceil(t*(1+n.result)))}this.reputation=Math.max(0,this.reputation+t),this._updateLevel(),this.currentLevel!==e&&C.emit("reputation:levelUp",{level:this.currentLevel.level,name:this.currentLevel.name,icon:this.currentLevel.icon}),C.emit("reputation:changed",{reputation:this.reputation,level:this.currentLevel})}_updateLevel(){for(let t=Ln.length-1;t>=0;t--)if(this.reputation>=Ln[t].minRep){this.currentLevel=Ln[t];return}this.currentLevel=Ln[0]}getCustomerRateMultiplier(){return this.currentLevel.customerRate}getPriceBonus(){return this.currentLevel.priceBonus}getProgress(){const t=Ln.indexOf(this.currentLevel);if(t>=Ln.length-1)return 1;const n=Ln[t+1].minRep-this.currentLevel.minRep;if(n<=0)return 1;const i=this.reputation-this.currentLevel.minRep;return Math.min(1,i/n)}toSaveData(){return{reputation:this.reputation}}loadSaveData(t){t&&typeof t.reputation=="number"&&(this.reputation=t.reputation,this._updateLevel())}dispose(){var t,e,n,i;(t=this._unsubBought)==null||t.call(this),(e=this._unsubLeft)==null||e.call(this),(n=this._unsubRankUp)==null||n.call(this),(i=this._unsubCrafted)==null||i.call(this)}}const Ll={rank2:[{id:"q2_sell_3",name:"初めての商売",description:"商品を3個売る",conditionType:"sell_count",target:3,icon:"💰"},{id:"q2_craft_3",name:"調合入門",description:"アイテムを3個調合する",conditionType:"craft_count",target:3,icon:"🔨"},{id:"q2_explore_2",name:"冒険の始まり",description:"探索を2回完了する",conditionType:"explore_count",target:2,icon:"🗺️"}],rank3:[{id:"q3_quality_50",name:"品質へのこだわり",description:"品質50以上のアイテムを調合する",conditionType:"craft_quality",target:50,icon:"⭐"},{id:"q3_daily_100",name:"一日百金",description:"1日の売上100Gを達成する",conditionType:"daily_sales",target:100,icon:"📈"},{id:"q3_cave_3",name:"洞窟探検家",description:"洞窟を3回探索する",conditionType:"explore_area",target:3,targetArea:"cave",icon:"⛏️"}],rank4:[{id:"q4_serve_noble",name:"貴族のお気に入り",description:"貴族に商品を売る",conditionType:"serve_customer",target:1,targetCustomer:"noble",icon:"👑"},{id:"q4_trait_5",name:"特性マスター",description:"特性付きアイテムを5個調合する",conditionType:"craft_with_trait",target:5,icon:"✨"},{id:"q4_sell_equip_8",name:"武器商人",description:"装備品を8個売る",conditionType:"sell_type",target:8,targetType:"equipment",icon:"⚔️"}],rank5:[{id:"q5_quality_70",name:"匠の技",description:"品質70以上のアイテムを調合する",conditionType:"craft_quality",target:70,icon:"🏅"},{id:"q5_sell_10k",name:"一万金の壁",description:"累計売上10,000Gを達成する",conditionType:"total_sales",target:1e4,icon:"💎"},{id:"q5_explore_forest",name:"森の守護者",description:"妖精の森を5回探索する",conditionType:"explore_area",target:5,targetArea:"forest",icon:"🌲"}],rank6:[{id:"q6_customers_20",name:"人気店の証",description:"お客様を20人接客する",conditionType:"total_customers",target:20,icon:"🤝"},{id:"q6_craft_30",name:"熟練の調合師",description:"アイテムを30個調合する",conditionType:"craft_count",target:30,icon:"🔬"},{id:"q6_daily_300",name:"三百金の日",description:"1日の売上300Gを達成する",conditionType:"daily_sales",target:300,icon:"📊"},{id:"q6_sell_consumable",name:"薬師の道",description:"消耗品を12個売る",conditionType:"sell_type",target:12,targetType:"consumable",icon:"🧪"}],rank7:[{id:"q7_quality_85",name:"至高の品質",description:"品質85以上のアイテムを調合する",conditionType:"craft_quality",target:85,icon:"👑"},{id:"q7_explore_dragon",name:"竜狩り",description:"竜の巣を3回探索する",conditionType:"explore_area",target:3,targetArea:"dragon_nest",icon:"🐉"},{id:"q7_sell_acc_5",name:"宝飾品鑑定士",description:"アクセサリーを5個売る",conditionType:"sell_type",target:5,targetType:"accessory",icon:"💍"},{id:"q7_upgrades_10",name:"設備投資家",description:"アップグレードを10個購入する",conditionType:"upgrade_count",target:10,icon:"🏗️"}],rank8:[{id:"q8_quality_95",name:"伝説の調合",description:"品質95以上のアイテムを調合する",conditionType:"craft_quality",target:95,icon:"🌟"},{id:"q8_sell_50k",name:"五万金の王",description:"累計売上50,000Gを達成する",conditionType:"total_sales",target:5e4,icon:"👸"},{id:"q8_explore_sky",name:"天空の覇者",description:"天空の塔を3回探索する",conditionType:"explore_area",target:3,targetArea:"sky_tower",icon:"☁️"},{id:"q8_serve_50",name:"百客万来",description:"お客様を50人接客する",conditionType:"total_customers",target:50,icon:"🏆"},{id:"q8_craft_trait_3",name:"究極の付呪",description:"特性3つ付きのアイテムを調合する",conditionType:"craft_max_traits",target:3,icon:"🔮"}]};class Vg{constructor(){this.progress={},this._currentDaySales=0,this._bestDaySales=0,this.upgradeCount=0,this._initProgress(),this._bindEvents()}_initProgress(){this._forEachQuest(t=>{t.id in this.progress||(this.progress[t.id]=0)})}_bindEvents(){this._unsubSold=C.on("item:sold",t=>{var n,i;this._increment("sell_count",1);const e=(n=t.item)==null?void 0:n.type;e&&this._incrementFiltered("sell_type",e,1),this._currentDaySales+=((i=t.item)==null?void 0:i.value)||0}),this._unsubBought=C.on("customer:bought",t=>{var n;this._increment("total_customers",1);const e=(n=t.customer)==null?void 0:n.id;e&&this._incrementFiltered("serve_customer",e,1)}),this._unsubCrafted=C.on("item:crafted",t=>{var i,a,r,o,l;this._increment("craft_count",1);const e=((i=t.item)==null?void 0:i.quality)||0;this._updateMax("craft_quality",e),((r=(a=t.item)==null?void 0:a.traits)==null?void 0:r.length)>0&&this._increment("craft_with_trait",1);const n=((l=(o=t.item)==null?void 0:o.traits)==null?void 0:l.length)||0;this._updateMax("craft_max_traits",n)}),this._unsubReturn=C.on("adventurer:return",t=>{this._increment("explore_count",1);const e=t.areaId;e&&this._incrementFiltered("explore_area",e,1)}),this._unsubNewDay=C.on("day:newDay",()=>{this._currentDaySales>this._bestDaySales&&(this._bestDaySales=this._currentDaySales),this._updateDailySales(),this._currentDaySales=0}),this._unsubUpgrade=C.on("upgrade:purchased",()=>{this.upgradeCount++,this._updateUpgradeCount()})}_forEachQuest(t){for(const[,e]of Object.entries(Ll))for(const n of e)t(n)}_increment(t,e){this._forEachQuest(n=>{n.conditionType===t&&(this.progress[n.id]=(this.progress[n.id]||0)+e)})}_incrementFiltered(t,e,n){this._forEachQuest(i=>{if(i.conditionType!==t)return;(i.targetArea&&i.targetArea===e||i.targetType&&i.targetType===e||i.targetCustomer&&i.targetCustomer===e)&&(this.progress[i.id]=(this.progress[i.id]||0)+n)})}_updateMax(t,e){this._forEachQuest(n=>{n.conditionType===t&&(this.progress[n.id]=Math.max(this.progress[n.id]||0,e))})}_updateDailySales(){this._forEachQuest(t=>{t.conditionType==="daily_sales"&&(this.progress[t.id]=Math.max(this.progress[t.id]||0,this._bestDaySales))})}_updateUpgradeCount(){this._forEachQuest(t=>{t.conditionType==="upgrade_count"&&(this.progress[t.id]=this.upgradeCount)})}updateTotalSales(t){this._forEachQuest(e=>{e.conditionType==="total_sales"&&(this.progress[e.id]=t)})}isQuestComplete(t){const e=this._findQuest(t);return e?(this.progress[t]||0)>=e.target:!1}getQuestsForRank(t){const e=`rank${t}`;return(Ll[e]||[]).map(i=>({...i,current:this.progress[i.id]||0,complete:(this.progress[i.id]||0)>=i.target}))}isRankQuestSatisfied(t){const e=this.getQuestsForRank(t);if(e.length===0)return!0;const n=e.filter(a=>a.complete).length,i=Math.ceil(e.length*Ut.questRequiredRatio);return n>=i}getRequiredCount(t){const e=this.getQuestsForRank(t);return Math.ceil(e.length*Ut.questRequiredRatio)}_findQuest(t){let e=null;return this._forEachQuest(n=>{n.id===t&&(e=n)}),e}toSaveData(){return{progress:{...this.progress},bestDaySales:this._bestDaySales,upgradeCount:this.upgradeCount}}loadSaveData(t){t&&(t.progress&&Object.assign(this.progress,t.progress),this._bestDaySales=t.bestDaySales||0,this.upgradeCount=t.upgradeCount||0)}dispose(){var t,e,n,i,a,r;(t=this._unsubSold)==null||t.call(this),(e=this._unsubBought)==null||e.call(this),(n=this._unsubCrafted)==null||n.call(this),(i=this._unsubReturn)==null||i.call(this),(a=this._unsubNewDay)==null||a.call(this),(r=this._unsubUpgrade)==null||r.call(this)}}const $g=[...us,...ii];function qg(s){return $g.find(t=>t.id===s)}class Wg{constructor(t,e){this.adventurers=t,this.inventory=e,this.active=!1,this.state=null}startBattle(t,e,n=null){var g;this.selectedItems=n;const i=this.adventurers.adventurers.map(v=>{var $;const p=qg(v.id),u=v.level||1,_=p&&p.battle||{maxHp:100,atk:10,def:5,spd:50},b=_.spd+(u-1)*2,x=_.maxHp+(u-1)*5,R=_.atk+(u-1)*2,T=_.def+(u-1)*1;let A=0,I=0,E=0,M=0,P=0,G=0,z=0;if(($=v.equipment)!=null&&$.weapon){const Z=v.equipment.weapon.value||0;A+=Math.floor(Z/10);for(const q of v.equipment.weapon.traits||[]){const Q=Jt[q];Q!=null&&Q.effects&&(A+=Q.effects.battleAtk||0,I+=Q.effects.battleDef||0,E+=Q.effects.battleSpd||0,M+=Q.effects.battleHp||0,P=Math.max(P,Q.effects.startAtb||0),G+=Q.effects.battleRegen||0,z+=Q.effects.battleDmgReduction||0)}}return{id:v.id,name:v.name,icon:v.icon,level:u,hp:x+M,maxHp:x+M,baseAtk:R+A,baseDef:T+I,baseSpd:b+E,atbGauge:Math.min(50,P),status:"active",regen:G,dmgReduction:z,activeBuffs:[]}});if(i.length===0)return C.emit("toast",{message:"冒険者がいません！",type:"error"}),!1;const a=i.reduce((v,p)=>v+p.level,0)/i.length,r=1+(a-1)*.05,o=Math.floor(e.maxHp*r),l=Math.floor(e.atk*r),c=Math.floor(e.def*r),d=Math.floor(e.spd*(1+(a-1)*.025));this.state={rankIndex:t,phase:"fighting",boss:{id:e.id,name:e.name,icon:e.icon,preset:e.preset||null,hp:o,maxHp:o,baseAtk:l,baseDef:c,baseSpd:d,atbGauge:0,activeBuffs:[],stunTimer:0,phases:e.phases||[],triggeredPhases:[],currentPhaseName:null,skills:e.skills||[],healCooldownTimer:0},adventurers:i,log:[],itemCooldown:0,itemCooldowns:{},chainCount:0,chainTimer:0,chainMax:0,selectedItems:n,itemUses:{}};const h=Ut.bossBattle.defaultItemUses,f=this.inventory.items.filter(v=>{const p=Bt[v.blueprintId];return p&&p.battleEffect}),m=n?f.filter(v=>n.includes(v.uid)):f;for(const v of m){let p=0;for(const _ of v.traits||[]){const b=Jt[_];(g=b==null?void 0:b.effects)!=null&&g.battleItemUses&&(p+=b.effects.battleItemUses)}const u=h+p;this.state.itemUses[v.uid]={remaining:u,max:u}}return this.active=!0,C.emit("battle:start",this.state),this._log("ボスバトル開始！"),!0}update(t){if(!this.active||!this.state||this.state.phase!=="fighting")return;const e=this.state,n=Ut.bossBattle.atbFillRate;e.chainTimer>0&&(e.chainTimer-=t,e.chainTimer<=0&&(e.chainTimer=0,e.chainCount=0));for(const a of Object.keys(e.itemCooldowns))e.itemCooldowns[a]>0&&(e.itemCooldowns[a]-=t,e.itemCooldowns[a]<0&&(e.itemCooldowns[a]=0));const i=Object.values(e.itemCooldowns);e.itemCooldown=i.length>0?Math.max(0,...i):0,this._updateBuffs(e.boss,t);for(const a of e.adventurers)a.status==="active"&&this._updateBuffs(a,t);e.boss.stunTimer>0?e.boss.stunTimer=Math.max(0,e.boss.stunTimer-t):(e.boss.atbGauge+=this._getSpd(e.boss)*t*n,e.boss.atbGauge>=100&&this.state.phase==="fighting"&&this._executeBossAction());for(const a of e.adventurers)a.status==="active"&&a.regen>0&&(a.hp=Math.min(a.maxHp,a.hp+a.regen*t));for(const a of e.adventurers)a.status!=="dead"&&(a.atbGauge+=this._getSpd(a)*t*n,a.atbGauge>=100&&this.state.phase==="fighting"&&this._executeAdvAction(a));C.emit("battle:tick",this.state)}useItem(t,e=null){if(!this.active||this.state.phase!=="fighting"||(this.state.itemCooldowns[t]||0)>0)return!1;const n=this.state.itemUses[t];if(!n||n.remaining<=0)return!1;const i=this.inventory.items.find(u=>u.uid===t);if(!i)return!1;const a=Bt[i.blueprintId];if(!a||!a.battleEffect)return!1;const r=a.battleEffect,l=.7+(i.quality??50)/100*.8;let c=0,d=0,h=0;for(const u of i.traits||[]){const _=Jt[u];_!=null&&_.effects&&(c+=(_.effects.battleAtk||0)+(_.effects.battleDef||0),d+=_.effects.battleHealBonus||0,h+=_.effects.battleHealFlat||0)}const f=1+Math.min(c/100,.5),m=1+d/100,g=l*f;n.remaining--,this._log(`プレイヤーが ${i.name} を使った！`),C.emit("battle:se:itemUse");const v=r.type==="revive"&&(r.target==="ally"||r.target==="all")?"dead_ally":r.target,p=this._resolveTargets(v,e);for(const u of p)if(r.type==="heal"){if(u.status==="dead")continue;const _=typeof r.value=="number"?r.value:50,b=Math.floor(_*g*m);u.hp=Math.min(u.maxHp,u.hp+b),this._log(`${u.name}のHPが ${b} 回復！`),C.emit("battle:se:heal")}else if(r.type==="healfull"){if(u.status==="dead")continue;u.hp=u.maxHp,this._log(`${u.name}のHPが 全回復！`),C.emit("battle:se:heal")}else if(r.type==="revive"){if(u.status==="dead"){u.status="active";const _=typeof r.value=="number"?r.value:Math.floor(u.maxHp/2);u.hp=Math.floor(_*l*m),u.atbGauge=0,this._log(`${u.name}が復活した！`),C.emit("battle:se:revive")}}else if(r.type==="damage"){const _=r.value??30,b=Math.floor(_*g);if(this.state.boss.hp=Math.max(0,this.state.boss.hp-b),this._log(`${i.name} がボスに ${b} ダメージ！`),C.emit("battle:se:damage"),this.state.boss.hp<=0){this._doWin();break}}else if(r.type==="stun"){this.state.boss.atbGauge=0;const _=r.duration??8;this.state.boss.stunTimer=Math.floor(_*l),this._log(`${i.name} がボスをスタンさせた！`),C.emit("battle:se:stun")}else if(r.type==="buff"||r.type==="debuff"){if(u.status==="dead")continue;const _=r.amount,b=Math.floor(_*g);u.activeBuffs.push({stat:r.stat,amount:b,timer:Math.floor((r.duration||10)*l)});const x=r.stat==="atk"?"攻撃力":r.stat==="def"?"防御力":"素早さ",R=r.type==="buff"?"アップ":"ダウン";this._log(`${u.name}の${x}が${R}！`),r.type==="buff"?C.emit("battle:se:buff"):C.emit("battle:se:debuff")}if(h>0&&this.state.phase==="fighting"){const u=Math.floor(h*l);let _=!1;for(const b of this.state.adventurers)b.status==="dead"||b.hp>=b.maxHp||(b.hp=Math.min(b.maxHp,b.hp+u),_=!0);_&&(this._log(`生命の力で味方全体が ${u} HP回復！`),C.emit("battle:se:heal"))}if(this.state.phase==="fighting"){const u=r.cooldown??Ut.bossBattle.itemCooldownSeconds;this.state.itemCooldowns[t]=u,C.emit("battle:tick",this.state)}return!0}flee(){this.active&&(this._log("逃走した..."),this.state.phase="lose",this.active=!1,this._discardBattleItems(),C.emit("battle:lose",{reason:"flee"}))}getState(){return this.state}dispose(){}_updateBuffs(t,e){t.activeBuffs&&(t.activeBuffs.forEach(n=>n.timer-=e),t.activeBuffs=t.activeBuffs.filter(n=>n.timer>0))}_getSpd(t){let e=t.baseSpd;if(t.activeBuffs)for(const n of t.activeBuffs)n.stat==="spd"&&(e+=n.amount);return Math.max(10,e)}_getAtk(t){let e=t.baseAtk;if(t.activeBuffs)for(const n of t.activeBuffs)n.stat==="atk"&&(e+=n.amount);return Math.max(1,e)}_getDef(t){let e=t.baseDef;if(t.activeBuffs)for(const n of t.activeBuffs)n.stat==="def"&&(e+=n.amount);return Math.max(0,e)}_executeBossAction(){const t=this.state;t.boss.atbGauge=0,t.boss.healCooldownTimer>0&&t.boss.healCooldownTimer--;const e=t.adventurers.filter(i=>i.status==="active");if(e.length===0)return;const n=this._selectBossSkill(t.boss);if(n&&n.type==="aoe"){const i=this._getAtk(t.boss),a=n.damageMult||.6;this._log(`ボスの${n.name}！ 全体攻撃！`),C.emit("battle:se:bossAoe");for(const r of e){const o=this._getDef(r),l=r.dmgReduction||0,c=Math.max(1,Math.floor(i*a*(1+Math.random()*.2)-o)-l);r.hp-=c,this._log(`${r.name}に ${c} のダメージ！`),r.hp<=0&&(r.hp=0,r.status="dead",r.atbGauge=0,r.activeBuffs=[],this._log(`${r.name}は倒れた！`),C.emit("battle:se:ko"))}this._checkLose()}else if(n&&n.type==="heavy"){const i=e[Math.floor(Math.random()*e.length)],a=this._getAtk(t.boss),r=this._getDef(i),o=n.damageMult||1.5,l=i.dmgReduction||0,c=Math.max(1,Math.floor(a*o*(1+Math.random()*.2)-r)-l);i.hp-=c,this._log(`ボスの${n.name}！ ${i.name}に ${c} の大ダメージ！`),C.emit("battle:se:bossHeavy"),t.boss.atbGauge=-30,i.hp<=0&&(i.hp=0,i.status="dead",i.atbGauge=0,i.activeBuffs=[],this._log(`${i.name}は倒れた！`),C.emit("battle:se:ko"),this._checkLose())}else if(n&&n.type==="heal"){const i=n.healPercent||10,a=Math.floor(t.boss.maxHp*i/100);t.boss.hp=Math.min(t.boss.maxHp,t.boss.hp+a),t.boss.healCooldownTimer=3,this._log(`ボスの${n.name}！ HPが ${a} 回復した！`),C.emit("battle:se:bossHeal")}else{const i=e[Math.floor(Math.random()*e.length)],a=this._getAtk(t.boss),r=this._getDef(i),o=i.dmgReduction||0,l=Math.max(1,Math.floor(a*(1+Math.random()*.2)-r)-o);i.hp-=l;const c=n?n.name:"攻撃";this._log(`ボスの${c}！ ${i.name}に ${l} のダメージ！`),C.emit("battle:se:bossAttack"),i.hp<=0&&(i.hp=0,i.status="dead",i.atbGauge=0,i.activeBuffs=[],this._log(`${i.name}は倒れた！`),C.emit("battle:se:ko"),this._checkLose())}}_selectBossSkill(t){const e=t.skills;if(!e||e.length===0)return null;const n=e.filter(r=>!(r.type==="heal"&&(t.hp/t.maxHp>.5||t.healCooldownTimer>0)));if(n.length===0)return null;const i=n.reduce((r,o)=>r+o.chance,0);let a=Math.random()*i;for(const r of n)if(a-=r.chance,a<=0)return r;return n[n.length-1]}_executeAdvAction(t){const e=this.state;t.atbGauge=0,e.chainTimer>0?e.chainCount++:e.chainCount=1,e.chainTimer=2;const n=Math.min(1.5,1+(e.chainCount-1)*.1),i=this._getAtk(t),a=this._getDef(e.boss),r=Math.max(1,Math.floor(i*(1+Math.random()*.2)-a)),o=Math.max(1,Math.floor(r*n));if(e.boss.hp-=o,this._log(`${t.name}の攻撃！ ボスに ${o} のダメージ！`),C.emit("battle:se:advAttack"),e.chainCount>e.chainMax&&(e.chainMax=e.chainCount),e.chainCount>=2){const l=Math.round((n-1)*100);this._log(`🔗 ${e.chainCount} Chain! ダメージ+${l}%`),C.emit("battle:se:chain")}this._checkPhaseShift(),e.boss.hp<=0&&(e.boss.hp=0,this._doWin())}_resolveTargets(t,e){const n=this.state;if(t==="all")return n.adventurers;if(t==="all_dead")return n.adventurers.filter(i=>i.status==="dead");if(t==="enemy")return[n.boss];if(t==="ally"){if(e){const a=n.adventurers.find(r=>r.id===e);return a?[a]:[]}const i=n.adventurers.filter(a=>a.status==="active");return i.length===0?[]:(i.sort((a,r)=>a.hp/a.maxHp-r.hp/r.maxHp),[i[0]])}if(t==="dead_ally"){if(e){const a=n.adventurers.find(r=>r.id===e&&r.status==="dead");return a?[a]:[]}const i=n.adventurers.filter(a=>a.status==="dead");return i.length>0?[i[0]]:[]}return[]}_checkLose(){if(this.state.phase!=="fighting")return;this.state.adventurers.filter(e=>e.status==="active").length===0&&(this._log("パーティは全滅した..."),this.state.phase="lose",this.active=!1,this._discardBattleItems(),C.emit("battle:lose",{reason:"wipeout"}))}_doWin(){this.state.phase==="fighting"&&(this._log("ボスを撃破した！！"),this.state.phase="win",this.active=!1,this._discardBattleItems(),C.emit("battle:win",{rankIndex:this.state.rankIndex}))}_discardBattleItems(){if(!this.selectedItems||this.selectedItems.length===0)return;const t=[];for(const e of this.selectedItems){const n=this.inventory.removeItem(e,!0);n&&t.push(n.name)}t.length>0&&this._log(`持ち込みアイテム ${t.length} 個を消費した`)}_log(t){this.state&&(this.state.log.unshift({time:Date.now(),msg:t}),this.state.log.length>50&&this.state.log.pop())}_checkPhaseShift(){var n,i,a;const t=this.state.boss;if(!t.phases||t.phases.length===0)return;const e=t.hp/t.maxHp;for(const r of t.phases)if(!t.triggeredPhases.includes(r.name)&&e<=r.hpThreshold){if(t.triggeredPhases.push(r.name),t.currentPhaseName=r.name,r.effect){const l=r.effect.stat,c=r.effect.amount;l==="atk"?t.baseAtk+=c:l==="def"?t.baseDef+=c:l==="spd"&&(t.baseSpd+=c)}this._log(`── ${r.name} ──`),r.message&&this._log(r.message);const o=((n=r.effect)==null?void 0:n.stat)==="atk"?"攻撃力":((i=r.effect)==null?void 0:i.stat)==="def"?"防御力":((a=r.effect)==null?void 0:a.stat)==="spd"?"素早さ":"";o&&this._log(`ボスの${o}が上がった！`),C.emit("battle:phaseShift",{phase:r}),C.emit("battle:se:phaseShift");break}}}const Sc={};for(const s of[...us,...ii])s.preset&&(Sc[s.id]=s.preset);const Ka=new Map;async function Dl(s){if(Ka.has(s))return Ka.get(s);try{const e=await(await fetch(Ae(s))).json();return Ka.set(s,e),e}catch{return null}}class Xg{constructor(){this.canvas=null,this.renderer=null,this.scene=null,this.camera=null,this.entities=[],this.bossEntity=null,this.advEntities=[],this._animId=null,this._disposed=!1}async init(t,e,n){var f,m;if(!t||!(e!=null&&e.preset))return;this.canvas=document.createElement("canvas"),this.canvas.className="battle-3d-canvas",t.appendChild(this.canvas),this.renderer=new yc({canvas:this.canvas,alpha:!0,antialias:!0});const i=t.clientWidth,a=t.clientHeight;this.renderer.setSize(i,a),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new lc;const r=new fc(16777215,.6);this.scene.add(r);const o=new uc(16773341,.8);o.position.set(3,8,5),this.scene.add(o),this.camera=new ze(35,i/a,.1,200),this.camera.position.set(0,6,14),this.camera.lookAt(0,1,0);const l=await Dl(e.preset);l&&!this._disposed&&(this.bossEntity=new Gr(l,{scale:1.8,skipEdges:!0}),this.bossEntity.root.position.set(0,0,-3),this.bossEntity.addTo(this.scene),this.entities.push(this.bossEntity),this.bossEntity.animController&&((f=l.animations)!=null&&f.idle)&&this.bossEntity.playAnimation("idle",{loop:!0}));const c=Math.min(n.length,5),d=3,h=-((c-1)*d)/2;for(let g=0;g<c;g++){const v=n[g],p=Sc[v.id];if(!p)continue;const u=await Dl(p);if(!u||this._disposed)continue;const _=new Gr(u,{scale:1.2,skipEdges:!0});_.root.position.set(h+g*d,0,3),_.root.rotation.y=Math.PI,_.addTo(this.scene),this.entities.push(_),this.advEntities.push({id:v.id,entity:_}),_.animController&&((m=u.animations)!=null&&m.idle)&&_.playAnimation("idle",{loop:!0})}this._startLoop()}_startLoop(){const t=()=>{if(this._disposed)return;this._animId=requestAnimationFrame(t);const e=1/60;for(const n of this.entities)n.update(e);this.renderer.render(this.scene,this.camera)};t()}animateBossHit(){if(!this.bossEntity)return;const t=this.bossEntity.root,e=t.position.x;let n=0;const i=()=>{this._disposed||(n+=.05,t.position.x=e+Math.sin(n*20)*.3*Math.max(0,1-n),n<1?requestAnimationFrame(i):t.position.x=e)};i()}animateAdvHit(t){const e=this.advEntities.find(o=>o.id===t);if(!e)return;const n=e.entity.root,i=n.position.z;let a=0;const r=()=>{this._disposed||(a+=.06,n.position.z=i+Math.sin(a*15)*.2*Math.max(0,1-a),a<1?requestAnimationFrame(r):n.position.z=i)};r()}updateBossHpVisual(t){this.bossEntity}dispose(){this._disposed=!0,this._animId&&cancelAnimationFrame(this._animId);for(const t of this.entities)t.removeFrom(this.scene);this.entities=[],this.advEntities=[],this.bossEntity=null,this.scene&&(this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.scene=null),this.camera=null,this.renderer&&(this.renderer.dispose(),this.renderer=null),this.canvas&&this.canvas.parentNode&&this.canvas.remove(),this.canvas=null}}class Yg{constructor(t){this.inventory=t,this.overlay=null,this.state=null,this.itemsWithEffects=[],this._lastLogLength=0,this._lastUsesKey="",this._els={},this._lastBuffKeys={},this._resultShown=!1,this._pendingTimers=[],this._scene3d=null,this._unsubs=[C.on("battle:start",e=>this.show(e)),C.on("battle:tick",e=>this.update(e)),C.on("battle:win",()=>this.showResult("win")),C.on("battle:lose",e=>this.showResult(e.reason)),C.on("battle:phaseShift",e=>this._onPhaseShift(e)),C.on("battle:se:advAttack",()=>this._animateBossHit()),C.on("battle:se:bossAttack",()=>this._animateAdvHit()),C.on("battle:se:bossAoe",()=>this._animateAoeHit()),C.on("battle:se:heal",()=>this._animateItemFx("heal")),C.on("battle:se:revive",()=>this._animateItemFx("revive")),C.on("battle:se:damage",()=>this._animateItemFx("damage")),C.on("battle:se:stun",()=>this._animateItemFx("stun")),C.on("battle:se:buff",()=>this._animateItemFx("buff")),C.on("battle:se:debuff",()=>this._animateItemFx("debuff"))]}_trackedTimeout(t,e){const n=setTimeout(()=>{t();const i=this._pendingTimers.indexOf(n);i!==-1&&this._pendingTimers.splice(i,1)},e);return this._pendingTimers.push(n),n}_clearAllTimers(){for(const t of this._pendingTimers)clearTimeout(t);this._pendingTimers.length=0}show(t){this.state=t,this._lastLogLength=0,this._lastUsesKey="",this._clearAllTimers(),C.emit("game:pause");const e=this.inventory.items.filter(n=>{const i=Bt[n.blueprintId];return i&&i.battleEffect});t.selectedItems&&t.selectedItems.length>0?this.itemsWithEffects=e.filter(n=>t.selectedItems.includes(n.uid)):this.itemsWithEffects=e,this.overlay=document.createElement("div"),this.overlay.className="battle-overlay",this.overlay.innerHTML=`
      <div class="battle-container">
        <!-- HEADER / BOSS -->
        <div class="battle-header">
           <div class="boss-info">
             <div class="boss-icon" id="boss-icon">${t.boss.icon}</div>
             <div class="boss-name">${t.boss.name}</div>
             <div class="bar-container">
               <div class="bar-fill hp-fill boss-hp" id="boss-hp-fill" style="width:100%"></div>
             </div>
             <div class="bar-text" id="boss-hp-text">${t.boss.hp}/${t.boss.maxHp}</div>
             <div class="boss-phase-badge" id="boss-phase-badge"></div>
             <div class="bar-container atb-container">
               <div class="bar-fill atb-fill boss-atb" id="boss-atb-fill" style="width:0%"></div>
             </div>
           </div>
        </div>

        <div class="battle-main">
           <!-- PARTY -->
           <div class="party-container" id="party-container">
              ${this._renderParty(t)}
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
    `,document.body.appendChild(this.overlay),window.innerWidth>768&&t.boss.preset&&this._init3DScene(t),this._els={bossHpFill:this.overlay.querySelector("#boss-hp-fill"),bossHpText:this.overlay.querySelector("#boss-hp-text"),bossAtbFill:this.overlay.querySelector("#boss-atb-fill"),bossIcon:this.overlay.querySelector("#boss-icon"),logContainer:this.overlay.querySelector("#battle-log"),cdBar:this.overlay.querySelector("#item-cooldown-bar"),inventory:this.overlay.querySelector("#battle-inventory"),advEls:{}};for(const n of t.adventurers)this._els.advEls[n.id]={card:this.overlay.querySelector(`#adv-${n.id}`),hpFill:this.overlay.querySelector(`#adv-hp-fill-${n.id}`),hpText:this.overlay.querySelector(`#adv-hp-text-${n.id}`),atbFill:this.overlay.querySelector(`#adv-atb-fill-${n.id}`),buffs:this.overlay.querySelector(`#adv-buffs-${n.id}`)};this.overlay.querySelector("#btn-flee").addEventListener("click",()=>{this._showConfirmModal("本当に逃げますか？（HPは回復しません）",()=>{C.emit("battle:command",{action:"flee"})})}),this._els.inventory.addEventListener("click",n=>{var r;const i=n.target.closest(".battle-item-btn");if(!i)return;const a=i.dataset.uid;this.state&&(((r=this.state.itemCooldowns)==null?void 0:r[a])||0)>0||C.emit("battle:command",{action:"useItem",uid:a})}),this.update(t)}_renderParty(t){return t.adventurers.map(e=>`
      <div class="party-member ${e.status==="dead"?"dead":""}" id="adv-${e.id}">
        <div class="adv-icon">${e.icon}</div>
        <div class="adv-details">
           <div class="adv-name">${e.name}</div>
           <div class="bar-container">
             <div class="bar-fill hp-fill adv-hp" id="adv-hp-fill-${e.id}" style="width:${e.hp/e.maxHp*100}%"></div>
           </div>
           <div class="bar-text" id="adv-hp-text-${e.id}">${e.hp}/${e.maxHp}</div>
           <div class="bar-container atb-container">
             <div class="bar-fill atb-fill adv-atb" id="adv-atb-fill-${e.id}" style="width:${Math.min(100,e.atbGauge)}%"></div>
           </div>
           <div class="adv-buffs" id="adv-buffs-${e.id}"></div>
           <div class="adv-passives">
             ${e.regen>0?'<span class="adv-passive-badge regen">再生</span>':""}
             ${e.dmgReduction>0?'<span class="adv-passive-badge guard">鉄壁</span>':""}
             ${e.atbGauge>0?'<span class="adv-passive-badge quick">先制</span>':""}
           </div>
        </div>
      </div>
    `).join("")}_renderItems(){var n,i;if(this.itemsWithEffects.length===0)return'<div class="no-items">使えるアイテムがありません</div>';const t=((n=this.state)==null?void 0:n.itemUses)||{},e=((i=this.state)==null?void 0:i.itemCooldowns)||{};return this.itemsWithEffects.map(a=>{const r=Bt[a.blueprintId],o=t[a.uid],l=o?o.remaining:0,c=o?o.max:0,d=l<=0,h=e[a.uid]||0,f=h>0,m=r.image?Ae(r.image):null,g=m?`<img src="${m}" alt="${a.name}" />`:'<span class="battle-item-emoji">💊</span>';return`
        <div class="battle-item-btn ${d?"disabled":""} ${f?"on-cooldown":""}" data-uid="${a.uid}">
          ${g}
          <div class="item-name">${a.name}</div>
          <div class="item-uses-badge">${l}/${c}</div>
          ${f?`<div class="item-cd-overlay">${Math.ceil(h)}s</div>`:""}
        </div>
      `}).join("")}update(t){if(!this.overlay||!t||this._resultShown)return;this.state=t;const e=this._els,n=Math.max(0,t.boss.hp/t.boss.maxHp*100);if(e.bossHpFill&&(e.bossHpFill.style.width=`${n}%`,e.bossHpFill.classList.remove("hp-mid","hp-low"),n<=20?e.bossHpFill.classList.add("hp-low"):n<=50&&e.bossHpFill.classList.add("hp-mid")),e.bossHpText&&(e.bossHpText.textContent=`${Math.floor(t.boss.hp)}/${t.boss.maxHp}`),e.bossAtbFill){const i=Math.min(100,t.boss.atbGauge);e.bossAtbFill.style.width=`${i}%`,e.bossAtbFill.classList.toggle("atb-full",i>=95)}e.bossIcon&&(t.boss.stunTimer>0?e.bossIcon.classList.add("boss-stunned"):e.bossIcon.classList.remove("boss-stunned"));for(const i of t.adventurers){const a=e.advEls[i.id];if(!a||!a.hpFill)continue;i.status==="dead"?a.card.classList.add("dead"):a.card.classList.remove("dead");const r=Math.max(0,i.hp/i.maxHp*100);a.hpFill.style.width=`${r}%`,a.hpFill.classList.remove("hp-mid","hp-low"),r<=20?a.hpFill.classList.add("hp-low"):r<=50&&a.hpFill.classList.add("hp-mid"),a.hpText.textContent=`${Math.floor(i.hp)}/${i.maxHp}`;const o=Math.min(100,i.atbGauge);if(a.atbFill.style.width=`${o}%`,a.atbFill.classList.toggle("atb-full",o>=95),a.buffs){const l=i.activeBuffs?i.activeBuffs.map(c=>`${c.stat}${c.amount>0?"+":"-"}`).join(","):"";this._lastBuffKeys[i.id]!==l&&(this._lastBuffKeys[i.id]=l,i.activeBuffs&&i.activeBuffs.length>0?a.buffs.innerHTML=i.activeBuffs.map(c=>{const d=c.stat==="atk"?"攻撃":c.stat==="def"?"防御":"速度",h=c.amount>0;return`<span class="adv-buff-badge ${h?"buff-up":"buff-down"}">${d}${h?"↑":"↓"}</span>`}).join(""):a.buffs.innerHTML="")}}if(e.logContainer&&t.log.length!==this._lastLogLength){const i=t.log.length-this._lastLogLength,a=t.log.slice(0,i);this._lastLogLength=t.log.length,e.logContainer.innerHTML=t.log.map(r=>`<div class="log-line">${r.msg}</div>`).join("");for(const r of a)this._processLogForPopup(r.msg)}if(e.cdBar){e.cdBar.style.display="none",e.inventory&&e.inventory.classList.remove("cooldown-active");const i=t.itemCooldowns?Object.entries(t.itemCooldowns).map(([o,l])=>`${o}:${Math.ceil(l)}`).join(","):"",r=(t.itemUses?Object.entries(t.itemUses).map(([o,l])=>`${o}:${l.remaining}`).join(","):"")+"|"+i;r!==this._lastUsesKey&&(this._lastUsesKey=r,e.inventory&&(e.inventory.innerHTML=this._renderItems()))}}showResult(t){var o,l,c,d,h,f,m,g,v;if(!this.overlay||this._resultShown)return;this._resultShown=!0,this._clearAllTimers(),this._dispose3DScene();let e="",n="",i="",a="戻る";if(t==="win"){e='<div class="result-win">VICTORY!</div>';const p=["#fca311","#e63946","#457b9d","#7ddd88","#ff6b35","#a855f7"];let u="";for(let T=0;T<40;T++){const A=p[Math.floor(Math.random()*p.length)],I=Math.random()*100,E=Math.random()*.8,M=1.5+Math.random()*1.5,P=5+Math.random()*6;u+=`<div class="confetti-piece" style="left:${I}%;background:${A};width:${P}px;height:${P}px;animation-delay:${E}s;animation-duration:${M}s"></div>`}i=`<div class="battle-confetti">${u}</div>`;const _=((o=this.state)==null?void 0:o.adventurers.filter(T=>T.status==="active").length)||0,b=((l=this.state)==null?void 0:l.adventurers.length)||0,x=((c=this.state)==null?void 0:c.chainMax)||0,R=((h=(d=this.state)==null?void 0:d.selectedItems)==null?void 0:h.length)||0;n=`
        <div class="battle-result-rewards">
          <div class="reward-line"><span class="reward-icon">⚔️</span> ボス撃破！ランクアップ条件クリア</div>
          <div class="reward-line"><span class="reward-icon">👥</span> 生存者: <span class="reward-text">${_}/${b}</span></div>
          ${x>=2?`<div class="reward-line"><span class="reward-icon">🔗</span> 最大チェイン: <span class="reward-text">${x}</span></div>`:""}
          ${R>0?`<div class="reward-line"><span class="reward-icon">📦</span> 消費アイテム: <span class="reward-text">${R}個</span></div>`:""}
        </div>`}else if(t==="wipeout"){const p=((m=(f=this.state)==null?void 0:f.selectedItems)==null?void 0:m.length)||0;e='<div class="result-lose">DEFEAT...</div><div style="color:#888;font-size:0.9rem;margin-top:8px">全滅してしまった。装備を強化して再挑戦しよう。</div>',p>0&&(e+=`<div style="color:#e57373;font-size:0.85rem;margin-top:4px">持ち込みアイテム ${p}個 を失った...</div>`)}else{const p=((v=(g=this.state)==null?void 0:g.selectedItems)==null?void 0:v.length)||0;e='<div class="result-lose">逃走した。</div><div style="color:#888;font-size:0.9rem;margin-top:8px">態勢を整えてから再挑戦しよう。</div>',p>0&&(e+=`<div style="color:#e57373;font-size:0.85rem;margin-top:4px">持ち込みアイテム ${p}個 を失った...</div>`)}const r=document.createElement("div");r.className="battle-result-overlay",r.innerHTML=`
      ${i}
      <div class="battle-result-box">
         ${e}
         ${n}
         <button class="btn btn-primary mt-4 w-full" id="btn-close-result" style="margin-top:16px">${a}</button>
      </div>
    `,this.overlay.appendChild(r),r.querySelector("#btn-close-result").addEventListener("click",()=>{this._dispose3DScene(),C.emit("game:resume"),this.overlay.remove(),this.overlay=null,this.state=null,this._els={},this._resultShown=!1})}_onPhaseShift(t){if(!this.overlay||!(t!=null&&t.phase))return;const e=t.phase,n=this._els.bossIcon;n&&(n.classList.add("boss-phase-shake"),this._trackedTimeout(()=>n.classList.remove("boss-phase-shake"),1e3));const i=this.overlay.querySelector("#boss-phase-badge");i&&(i.textContent=`🔥 ${e.name}`,i.classList.add("phase-badge-active"));const a=document.createElement("div");a.className="battle-phase-flash",this.overlay.appendChild(a),this._trackedTimeout(()=>a.remove(),800)}_showConfirmModal(t,e){if(!this.overlay)return;const n=document.createElement("div");n.className="battle-result-overlay",n.innerHTML=`
      <div class="battle-result-box">
        <div class="result-lose" style="font-size:14px; margin-bottom:12px">${t}</div>
        <div style="display:flex; gap:8px; justify-content:center">
          <button class="btn btn-danger" id="confirm-yes">はい</button>
          <button class="btn" id="confirm-no">いいえ</button>
        </div>
      </div>
    `,this.overlay.appendChild(n),n.querySelector("#confirm-yes").addEventListener("click",()=>{n.remove(),e()}),n.querySelector("#confirm-no").addEventListener("click",()=>{n.remove()})}_processLogForPopup(t){var r,o,l,c;const e=this._els,n=t.match(/ボスに (\d+) (?:のダメージ|ダメージ)/);if(n&&e.bossIcon){this._spawnDamagePopup(`-${n[1]}`,e.bossIcon,"dmg-enemy");return}const i=t.match(/(.+?)に (\d+) のダメージ/);if(i){const d=i[1].replace(/^.*?！ /,""),h=(r=this.state)==null?void 0:r.adventurers.find(f=>f.name===d);if(h&&((o=e.advEls[h.id])!=null&&o.card)){this._spawnDamagePopup(`-${i[2]}`,e.advEls[h.id].card,"dmg-ally");return}}const a=t.match(/(.+?)のHPが (\d+) 回復/);if(a){const d=a[1],h=(l=this.state)==null?void 0:l.adventurers.find(f=>f.name===d);h&&((c=e.advEls[h.id])!=null&&c.card)&&this._spawnDamagePopup(`+${a[2]}`,e.advEls[h.id].card,"dmg-heal")}}_spawnDamagePopup(t,e,n){if(!e||!e.parentNode)return;const i=document.createElement("div");i.className=`dmg-popup ${n}`,i.textContent=t;const a=(Math.random()-.5)*28;i.style.left=`calc(50% + ${a}px)`,i.style.top="10%",e.style.position||(e.style.position="relative"),e.appendChild(i),this._trackedTimeout(()=>i.remove(),900)}async _init3DScene(t){var n;this._scene3d&&this._scene3d.dispose(),this._scene3d=new Xg;const e=(n=this.overlay)==null?void 0:n.querySelector(".battle-header");e&&await this._scene3d.init(e,t.boss,t.adventurers)}_dispose3DScene(){this._scene3d&&(this._scene3d.dispose(),this._scene3d=null)}_animateBossHit(){const t=this._els.bossIcon;t&&(t.classList.remove("boss-hit"),t.offsetWidth,t.classList.add("boss-hit"),this._trackedTimeout(()=>t.classList.remove("boss-hit"),400),this._scene3d&&this._scene3d.animateBossHit())}_animateAdvHit(){var r,o;if(!this.state)return;const e=(((r=this.state.log[0])==null?void 0:r.msg)||"").match(/(.+?)に \d+ のダメージ/);if(!e)return;const n=e[1].replace(/^.*?！ /,""),i=this.state.adventurers.find(l=>l.name===n);if(!i)return;const a=(o=this._els.advEls[i.id])==null?void 0:o.card;a&&(a.classList.remove("adv-hit"),a.offsetWidth,a.classList.add("adv-hit"),this._trackedTimeout(()=>a.classList.remove("adv-hit"),350),this._scene3d&&this._scene3d.animateAdvHit(i.id))}_animateAoeHit(){var t;if(this.state)for(const e of this.state.adventurers){if(e.status==="dead")continue;const n=(t=this._els.advEls[e.id])==null?void 0:t.card;n&&(n.classList.remove("boss-aoe-hit"),n.offsetWidth,n.classList.add("boss-aoe-hit"),this._trackedTimeout(()=>n.classList.remove("boss-aoe-hit"),500))}}_animateItemFx(t){if(!this.overlay)return;const e=`item-fx-${t}`,n=this.overlay.querySelector(".battle-container");n&&(n.classList.remove(e),n.offsetWidth,n.classList.add(e),this._trackedTimeout(()=>n.classList.remove(e),800))}showTargetSelection(t,e){if(!this.overlay||!this.state)return;const n=this.overlay.querySelector(".battle-container");if(!n)return;const i=e==="dead_ally",a=this.state.adventurers.filter(l=>i?l.status==="dead":l.status==="active");if(a.length===0){C.emit("toast",{message:i?"蘇生対象がいません":"回復対象がいません",type:"warning"});return}if(a.length===1){C.emit("battle:command",{action:"useItem",uid:t});return}const r=i?"蘇生対象を選択":"回復対象を選択",o=document.createElement("div");o.className="target-select-overlay",o.innerHTML=`
      <div class="target-select-title">💚 ${r}</div>
      <div class="target-select-list">
        ${a.map(l=>{const c=Math.floor(l.hp/l.maxHp*100);return`<button class="target-select-btn ${i?"target-dead":""}" data-adv-id="${l.id}">
            <span>${l.icon}</span>
            <span>${l.name}</span>
            <span style="font-size:0.8rem;color:#aaa">${i?"💀":`HP ${c}%`}</span>
          </button>`}).join("")}
      </div>
      <div class="target-select-cancel">キャンセル</div>
    `,n.appendChild(o),o.querySelectorAll(".target-select-btn").forEach(l=>{l.addEventListener("click",()=>{o.remove(),C.emit("battle:command",{action:"useItem",uid:t,targetAdvId:l.dataset.advId})})}),o.querySelector(".target-select-cancel").addEventListener("click",()=>{o.remove()})}dispose(){this._clearAllTimers(),this._dispose3DScene(),this._unsubs.forEach(t=>t())}}const jg=[...us,...ii];function Kg(s){return jg.find(t=>t.id===s)}class Zg{constructor(t,e,n){var a;this.inventory=t,this.adventurers=e,this.dayCycle=n,this.overlay=null,this.selectedItems=[];const i=((a=this.dayCycle)==null?void 0:a.currentRankIndex)??0;this.maxSlots=this._calcMaxSlots(i),this._pendingBattle=null}_calcMaxSlots(t){var a;const e=Ut.ranks[t],n=(e==null?void 0:e.battleItemSlots)||((a=Ut.bossBattle)==null?void 0:a.baseItemSlots),i={effectType:"battle_item_slots",result:0};return C.emit("upgrade:queryBonus",i),n+i.result}show(t,e){var o;this._pendingBattle={rankIndex:t,bossDef:e},this.selectedItems=[];const n=((o=this.dayCycle)==null?void 0:o.currentRankIndex)??0;this.maxSlots=this._calcMaxSlots(n);const a=this.inventory.items.filter(l=>{const c=Bt[l.blueprintId];return c&&c.battleEffect}),r=this.adventurers.adventurers;this.overlay=document.createElement("div"),this.overlay.className="battle-prep-overlay",this.overlay.innerHTML=`
      <div class="battle-prep-container">
        <div class="prep-header">
          <h2>⚔️ 戦闘準備</h2>
          <div class="prep-boss-info">
            <span class="prep-boss-icon">${e.icon}</span>
            <span class="prep-boss-name">${e.name}</span>
          </div>
        </div>

        <div class="prep-body">
          <div class="prep-section prep-party">
            <h3>👥 参加冒険者</h3>
            <div class="prep-party-list" id="prep-party-list">
              ${r.map(l=>this._renderAdvCard(l)).join("")}
            </div>
          </div>

          <div class="prep-section prep-items">
            <h3>🎒 持ち込みアイテム（最大${this.maxSlots}つ）</h3>
            <p class="prep-item-warning">⚠ 持ち込みアイテムはバトル終了後に消費されます</p>
            <div class="prep-slots" id="prep-slots">
              ${Array.from({length:this.maxSlots},(l,c)=>`
                <div class="prep-slot" data-slot="${c}">
                  <span class="prep-slot-empty">＋</span>
                </div>
              `).join("")}
            </div>
            <div class="prep-item-grid" id="prep-item-grid">
              ${a.length>0?a.map(l=>this._renderItemOption(l)).join(""):'<p class="prep-no-items">戦闘用アイテムがありません</p>'}
            </div>
          </div>
        </div>

        <div class="prep-footer">
          <button class="prep-btn prep-btn-cancel" id="prep-cancel">← 戻る</button>
          <button class="prep-btn prep-btn-start" id="prep-start">⚔️ バトル開始！</button>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this._bindEvents(a)}_renderAdvCard(t){var b,x;const e=Kg(t.id),n=e&&e.battle||{maxHp:100,atk:10,def:5,spd:50},i=t.level||1,a=n.maxHp+(i-1)*5,r=n.atk+(i-1)*2,o=n.def+(i-1)*1,l=n.spd+(i-1)*2;let c=0,d=0,h=0,f=0;if((b=t.equipment)!=null&&b.weapon){const R=t.equipment.weapon.value||0;c+=Math.floor(R/10);for(const T of t.equipment.weapon.traits||[]){const A=Jt[T];A!=null&&A.effects&&(c+=A.effects.battleAtk||0,d+=A.effects.battleDef||0,h+=A.effects.battleSpd||0,f+=A.effects.battleHp||0)}}const m=a+f,g=r+c,v=o+d,p=l+h,u=(R,T)=>T>0?`${R} <span class="prep-stat-bonus">(+${T})</span>`:`${R}`,_=(x=t.equipment)!=null&&x.weapon?t.equipment.weapon.name:null;return`
      <div class="prep-adv-card">
        <span class="prep-adv-icon">${t.icon}</span>
        <div class="prep-adv-info">
          <div class="prep-adv-name">${t.name} <span class="prep-adv-lv">Lv.${i}</span></div>
          <div class="prep-adv-stats">
            <span>❤️ ${u(m,f)}</span>
            <span>⚔ ${u(g,c)}</span>
            <span>🛡 ${u(v,d)}</span>
            <span>💨 ${u(p,h)}</span>
          </div>
          ${_?`<div class="prep-adv-equip">🗡️ ${_}</div>`:'<div class="prep-adv-equip prep-no-equip">装備なし</div>'}
        </div>
      </div>
    `}_renderItemOption(t){const e=Bt[t.blueprintId],n=this._getEffectText(e.battleEffect),i=e.image?Ae(e.image):null,a=i?`<img class="prep-item-img" src="${i}" alt="${t.name}" />`:'<span class="prep-item-emoji">💊</span>';return`
      <button class="prep-item-option" data-uid="${t.uid}" title="${n}">
        ${a}
        <div class="prep-item-info">
          <span class="prep-item-name">${t.name}</span>
          <span class="prep-item-effect">${n}</span>
        </div>
      </button>
    `}_getEffectText(t){if(!t)return"";switch(t.type){case"heal":return`回復 ${t.value}HP`;case"healfull":return"全体完全回復";case"revive":return`蘇生 ${t.value||50}%`;case"buff":return`${t.stat}↑${t.amount} (${t.duration}s)`;case"debuff":return`敵${t.stat}↓${Math.abs(t.amount)} (${t.duration}s)`;case"damage":return`敵に${t.value}ダメージ`;case"stun":return`敵スタン ${t.duration}s`;default:return t.type}}_bindEvents(t){this.overlay.querySelectorAll(".prep-item-option").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.uid;this.selectedItems.includes(n)?(this.selectedItems=this.selectedItems.filter(i=>i!==n),e.classList.remove("prep-item-selected")):this.selectedItems.length<this.maxSlots&&(this.selectedItems.push(n),e.classList.add("prep-item-selected")),this._updateSlots(t)})}),this.overlay.querySelector("#prep-cancel").addEventListener("click",()=>{this._close()}),this.overlay.querySelector("#prep-start").addEventListener("click",()=>{if(!this._pendingBattle)return;const{rankIndex:e,bossDef:n}=this._pendingBattle,i=[...this.selectedItems];this._close(),C.emit("battle:prepComplete",{rankIndex:e,bossDef:n,selectedItems:i})})}_updateSlots(t){const e=this.overlay.querySelector("#prep-slots");if(!e)return;const n=this.inventory.items;e.querySelectorAll(".prep-slot").forEach((a,r)=>{if(r<this.selectedItems.length){const o=this.selectedItems[r],l=n.find(c=>c.uid===o);if(l){const c=Bt[l.blueprintId],d=c!=null&&c.image?Ae(c.image):null;a.innerHTML=d?`<img class="prep-slot-img" src="${d}" alt="${l.name}" />`:`<span class="prep-slot-name">${l.name.slice(0,2)}</span>`,a.classList.add("prep-slot-filled")}}else a.innerHTML='<span class="prep-slot-empty">＋</span>',a.classList.remove("prep-slot-filled")})}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null),this._pendingBattle=null,this.selectedItems=[]}}class Qg{constructor(){this.discoveredItems={},this.discoveredAreas=new Set,this.defeatedBosses=new Set,this.discoveredTraits=new Set,this._bindEvents()}_bindEvents(){this._unsubs=[C.on("item:crafted",t=>{t.item&&(this._registerItem(t.item,"craft"),(t.item.traits||[]).forEach(e=>this.discoveredTraits.add(e)))}),C.on("adventurer:return",t=>{t.areaId&&this.discoveredAreas.add(t.areaId),t.items&&t.items.forEach(e=>{this._registerItem(e,"explore"),(e.traits||[]).forEach(n=>this.discoveredTraits.add(n))})}),C.on("item:sold",t=>{t.item&&this._registerItem(t.item,"sell")}),C.on("battle:win",t=>{if(t.rankIndex!=null){const e=Ut.ranks[t.rankIndex];e!=null&&e.requiredBossId&&this.defeatedBosses.add(e.requiredBossId)}}),C.on("area:unlocked",t=>{t.key&&this.discoveredAreas.add(t.key)})]}_registerItem(t,e){const n=t.blueprintId;if(!this.discoveredItems[n])this.discoveredItems[n]={firstDiscovered:Date.now(),bestQuality:t.quality,count:1},C.emit("collection:newItem",{blueprintId:n,name:t.name});else{const i=this.discoveredItems[n];i.count++,t.quality>i.bestQuality&&(i.bestQuality=t.quality)}}getCompletionRate(){const t=Object.keys(Bt).length,e=Object.keys(this.discoveredItems).length;return t>0?e/t:0}getReputationBonus(){const t=this.getCompletionRate();return Math.floor(t*10)}getStatsByType(){const t={material:{total:0,found:0},equipment:{total:0,found:0},consumable:{total:0,found:0},accessory:{total:0,found:0}};for(const[e,n]of Object.entries(Bt)){const i=n.type||"material";t[i]&&(t[i].total++,this.discoveredItems[e]&&t[i].found++)}return t}toSaveData(){return{discoveredItems:{...this.discoveredItems},discoveredAreas:[...this.discoveredAreas],defeatedBosses:[...this.defeatedBosses],discoveredTraits:[...this.discoveredTraits]}}loadSaveData(t){t&&(t.discoveredItems&&Object.assign(this.discoveredItems,t.discoveredItems),t.discoveredAreas&&t.discoveredAreas.forEach(e=>this.discoveredAreas.add(e)),t.defeatedBosses&&t.defeatedBosses.forEach(e=>this.defeatedBosses.add(e)),t.discoveredTraits&&t.discoveredTraits.forEach(e=>this.discoveredTraits.add(e)))}dispose(){var t;(t=this._unsubs)==null||t.forEach(e=>e())}}let Ul=null;class fo{static init(){Ul||(Ul=new fo)}constructor(){this.el=document.createElement("div"),this.el.className="game-tooltip",this.el.setAttribute("role","tooltip"),document.body.appendChild(this.el),this._visible=!1,this._currentTarget=null,document.addEventListener("pointerenter",t=>this._onEnter(t),!0),document.addEventListener("pointerleave",t=>this._onLeave(t),!0),document.addEventListener("pointermove",t=>this._onMove(t))}_onEnter(t){var o;if(!((o=t.target)!=null&&o.closest))return;const e=t.target.closest("[data-tooltip]");if(!e)return;const n=e.dataset.tooltip;if(!n)return;const i=e.dataset.tooltipTitle||"",a=e.dataset.tooltipRarity||"";let r="";i&&(r+=`<div class="game-tooltip-title ${a?`tooltip-${a}`:""}">${i}</div>`),r+=`<div class="game-tooltip-body">${n}</div>`,this.el.innerHTML=r,this.el.classList.add("game-tooltip-visible"),this._visible=!0,this._currentTarget=e,e.hasAttribute("title")&&(e.dataset._origTitle=e.getAttribute("title"),e.removeAttribute("title")),this._position(t)}_onLeave(t){var n;if(!((n=t.target)!=null&&n.closest))return;const e=t.target.closest("[data-tooltip]");!e||e!==this._currentTarget||(this._hide(),e.dataset._origTitle&&(e.setAttribute("title",e.dataset._origTitle),delete e.dataset._origTitle))}_onMove(t){this._visible&&this._position(t)}_position(t){const n=this.el,i=window.innerWidth,a=window.innerHeight;let r=t.clientX+12,o=t.clientY+12;const l=n.getBoundingClientRect();r+l.width>i-12&&(r=t.clientX-l.width-12),o+l.height>a-12&&(o=t.clientY-l.height-12),n.style.left=`${Math.max(12,r)}px`,n.style.top=`${Math.max(12,o)}px`}_hide(){this.el.classList.remove("game-tooltip-visible"),this._visible=!1,this._currentTarget=null}}const Jg=8;class tv{constructor(t){this.inventory=t,this.enabled=!1,this.mode="single",this.recipeId=null,this.timer=0,this.craftCount=0}update(t){this.enabled&&(this.mode==="single"&&!this.recipeId||(this.timer+=t,!(this.timer<Jg)&&(this.timer=0,this.mode==="all"?this._tryAutoCraftAll():this._tryAutoCraft(this.recipeId))))}setEnabled(t){this.enabled=t,this.timer=0,t||(this.craftCount=0)}setMode(t){(t==="single"||t==="all")&&(this.mode=t)}setRecipe(t){t&&!he[t]||(this.recipeId=t,this.timer=0)}canCraft(){if(this.mode==="all")return this._findCraftableRecipe()!==null;if(!this.recipeId)return!1;const t=he[this.recipeId];return!t||!t.unlocked?!1:this._findMaterials(t)!==null}getMaterialStatus(){if(this.mode==="all"||!this.recipeId)return null;const t=he[this.recipeId];if(!t)return null;const e=[];for(const n of t.materials){const i=this._getCandidatesForSlot(n,new Set);e.push({slot:n,slotLabel:this._getSlotLabel(n),available:i.length})}return e}_tryAutoCraft(t){const e=he[t];if(!e||!e.unlocked||this.inventory.isFull)return;const n=this._findMaterials(e);n&&this._executeCraft(t,n)}_tryAutoCraftAll(){if(this.inventory.isFull)return;const t=this._findCraftableRecipe();if(!t)return;const e=he[t],n=this._findMaterials(e);n&&this._executeCraft(t,n)}_findCraftableRecipe(){const t=[];for(const[n,i]of Object.entries(he))i.unlocked&&this._findMaterials(i)&&t.push({key:n,isMat:i.isMaterialRecipe||!1});if(t.length===0)return null;const e=t.filter(n=>!n.isMat);return e.length>0?e[Math.floor(Math.random()*e.length)].key:t[Math.floor(Math.random()*t.length)].key}_executeCraft(t,e){const n=new Set;e.forEach(r=>r.traits.forEach(o=>n.add(o)));const i=Array.from(n),a={effectType:"quality_bonus",result:0};C.emit("upgrade:queryBonus",a);try{const r=bc(t,e,i,a.result);for(const o of e)this.inventory.removeItem(o.uid);this.inventory.forceAddItem(r),this.craftCount++,C.emit("inventory:changed"),C.emit("item:crafted",{item:r}),C.emit("autoCraft:crafted",{item:r,recipeId:t,count:this.craftCount})}catch{}}_findMaterials(t){const e=new Set,n=[];for(const i of t.materials){const a=this._getCandidatesForSlot(i,e);if(a.length===0)return null;a.sort((o,l)=>l.quality-o.quality);const r=a[0];n.push(r),e.add(r.uid)}return n}_getCandidatesForSlot(t,e){return this.inventory.items.filter(n=>n.locked||e.has(n.uid)||n.type!=="material"?!1:xc(n.blueprintId,t))}_getSlotLabel(t){if(typeof t=="string"&&t.startsWith("@"))return t.slice(1).replace("_type","系");const e=Bt[t];return e?e.name:t}toSaveData(){return{enabled:this.enabled,mode:this.mode,recipeId:this.recipeId}}loadSaveData(t){t&&(this.enabled=t.enabled||!1,this.mode=t.mode||"single",this.recipeId=t.recipeId||null)}}const Ec=[];let Un=null,wi=null,Te=null,Oe=null,xn=null,De=null,ca=null,Za=null,Ai=null,Ci=null,$r=null,qr=null,bn=null,Nl=null,ds=null,pe=null,Tc=!1,Qa=null;async function ev(){Un=new jm("game-canvas"),wi=new tg(Un.scene,Un.camera,Ec,Un),await wi.init()}async function nv(){try{fo.init(),await ev(),iv(()=>{Ee.init(),Ee.startTitleBGM(),new Vr(async s=>{const t=sv();await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),await rv(s),av(t)})})}catch(s){console.error("[VoxelGame] Failed to load:",s)}}function iv(s){const t=document.createElement("div");t.className="splash-overlay",t.innerHTML=`
    <div class="splash-content">
      <p class="splash-text">Click to Start</p>
    </div>
  `,document.body.appendChild(t);const e=document.getElementById("initial-loader");e&&e.remove();const n=()=>{t.removeEventListener("click",n),s(),t.classList.add("splash-fade-out"),setTimeout(()=>{t.remove()},600)};t.addEventListener("click",n)}function sv(){const s=document.createElement("div");return s.className="loading-overlay",s.innerHTML=`
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p class="loading-text">Now Loading...</p>
    </div>
  `,document.body.appendChild(s),s}function av(s){s&&(s.classList.add("loading-fade-out"),setTimeout(()=>s.remove(),500))}const wc={};for(const[s,t]of Object.entries(he))wc[s]=!!t.unlocked;const Ac={};for(const[s,t]of Object.entries(se))Ac[s]=!!t.unlocked;async function rv(s){for(const t in he)he[t].unlocked=wc[t]||!1;for(const t in se)se[t].unlocked=Ac[t]||!1;Te=new ig,Oe=new zi(Te),xn=new rg(Te),Ci=new Vg,De=new og(Te,Ci),Za=new cg(Te),Ai=new Hg,ca=new lg(Te,Oe,Za,Ai),pe=new tv(Te),s&&ov(s),ds=new Qg,$r=new na(Te,xn,De,Oe,Ai,Ci,ds,pe),qr=new Bg(Te,Oe,xn,ca,De,Za,Ai,Ci,ds),new kg,new Og,new Gg,bn=new Wg(xn,Te),new Yg(Te),Nl=new Zg(Te,xn,De),Qa&&Qa.forEach(t=>t()),Qa=[C.on("battle:requestStart",t=>{let e=null;for(const n in se)if(se[n].boss&&se[n].boss.id===t.bossId){e=se[n].boss;break}e?Nl.show(t.rankIndex,e):C.emit("toast",{message:"ボスの情報が見つかりません",type:"error"})}),C.on("battle:prepComplete",t=>{bn.startBattle(t.rankIndex,t.bossDef,t.selectedItems)}),C.on("battle:command",t=>{t.action==="flee"?bn.flee():t.action==="useItem"&&bn.useItem(t.uid,t.targetAdvId||null)}),C.on("game:pause",()=>{Wr=!0}),C.on("game:resume",()=>{Wr=!1}),C.on("autoCraft:query",t=>{pe&&(t.enabled=pe.enabled,t.mode=pe.mode,t.recipeId=pe.recipeId,t.canCraft=pe.canCraft(),t.materialStatus=pe.getMaterialStatus(),t.craftCount=pe.craftCount)}),C.on("autoCraft:setEnabled",t=>{pe&&pe.setEnabled(t.enabled)}),C.on("autoCraft:setMode",t=>{pe&&pe.setMode(t.mode)}),C.on("autoCraft:setRecipe",t=>{pe&&pe.setRecipe(t.recipeId)})],Tc=!0,Ee.startGameBGM(),console.log("[VoxelGame] Game started."+(s?" (loaded save)":""))}function ov(s){Te.gold=s.gold,Te.items=[];for(const t of s.items)try{const e=ti(t.blueprintId,t.quality,t.traits);t.locked&&(e.locked=!0),Te.items.push(e)}catch(e){console.warn("[Load] 不明なアイテムをスキップ:",t.blueprintId,e.message)}Oe.displayedItems=[];for(const t of s.displayedItems||[])try{const e=ti(t.blueprintId,t.quality,t.traits);e.value=Oe._calcValue(e),Oe.displayedItems.push(e)}catch(e){console.warn("[Load] 不明な陳列アイテムをスキップ:",t.blueprintId,e.message)}for(const t of s.unlockedRecipes||[])he[t]&&(he[t].unlocked=!0);for(const t of s.unlockedAreas||[])se[t]&&(se[t].unlocked=!0);if(De.day=s.day||1,De.dayTimer=s.dayTimer||0,De.totalSales=s.totalSales||0,De.currentRankIndex=s.currentRankIndex||0,De.rankBossAvailable=s.rankBossAvailable||!1,De.defeatedBosses=s.defeatedBosses||[],s.purchasedUpgrades&&(Oe.purchasedUpgrades=[...s.purchasedUpgrades]),s.maxSlots&&(Oe.maxSlots=s.maxSlots),s.maxCapacity&&(Te.maxCapacity=s.maxCapacity),s.quest&&Ci&&Ci.loadSaveData(s.quest),s.autoSellEnabled!=null&&(Oe.autoSellEnabled=s.autoSellEnabled),s.autoSellRules&&Object.assign(Oe.autoSellRules,s.autoSellRules),s.autoCraft&&pe&&pe.loadSaveData(s.autoCraft),s.adventurers)for(const t of s.adventurers){let e=xn.adventurers.find(n=>n.id===t.id);if(!e){const n=ii.find(i=>i.id===t.id);n&&(e={id:n.id,name:n.name,icon:n.icon,status:"idle",timer:0,maxTimer:0,exploreTimeMultiplier:n.exploreTimeMultiplier,assignedArea:"plains",currentArea:null,level:1,exp:0,equipment:{weapon:null}},xn.adventurers.push(e))}if(e&&(e.level=t.level||1,e.exp=t.exp||0,e.assignedArea=t.assignedArea||"plains",t.weapon))try{e.equipment.weapon=ti(t.weapon.blueprintId,t.weapon.quality,t.weapon.traits)}catch(n){console.warn("[Load] 不明な武器をスキップ:",t.weapon.blueprintId,n.message),e.equipment.weapon=null}}s.reputation&&Ai&&Ai.loadSaveData(s.reputation),s.stats&&Tn.loadSaveData(s.stats),s.collection&&ds&&ds.loadSaveData(s.collection)}nv();const lv=new hh;let Wr=!1;function Cc(){requestAnimationFrame(Cc);const s=Math.min(lv.getDelta(),.1),t=Un&&!Un._isMobile;if(t)for(const e of Ec)e.update(s);if(!Tc){t&&Un.render();return}bn&&bn.active&&bn.update(s),!Wr&&!(bn&&bn.active)&&(t&&wi&&wi.update(s),De&&De.update(s),Oe&&Oe.update(s),xn&&xn.update(s),ca&&ca.update(s),pe&&pe.update(s),$r&&$r.update(s),t&&wi&&De&&wi.setDayProgress(De.dayProgress)),qr&&qr.update(s),t&&Un.render()}Cc();
