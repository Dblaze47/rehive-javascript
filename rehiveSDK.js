/* axios v0.16.1 | (c) 2017 by Matt Zabriskie USED FOR HTTP CALLS */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.axios=e():t.axios=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(2),i=r(7),s=r(8),u=r(9),f=n(u);f.Axios=s,f.create=function(t){return n(o.merge(u,t))},f.Cancel=r(26),f.CancelToken=r(27),f.isCancel=r(23),f.all=function(t){return Promise.all(t)},f.spread=r(28),t.exports=f,t.exports.default=f},function(t,e,r){(function(e){"use strict";function n(t){return"[object Array]"===_.call(t)}function o(t){return"undefined"!=typeof e&&e.isBuffer&&e.isBuffer(t)}function i(t){return"[object ArrayBuffer]"===_.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function f(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function h(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===_.call(t)}function l(t){return"[object File]"===_.call(t)}function d(t){return"[object Blob]"===_.call(t)}function g(t){return"[object Function]"===_.call(t)}function y(t){return h(t)&&g(t.pipe)}function w(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function m(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function E(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function A(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=A(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)E(arguments[r],t);return e}function b(t,e,r){return E(e,function(e,n){r&&"function"==typeof e?t[n]=R(e,r):t[n]=e}),t}var R=r(7),_=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:i,isBuffer:o,isFormData:s,isArrayBufferView:u,isString:f,isNumber:a,isObject:h,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:m,forEach:E,merge:A,extend:b,trim:v}}).call(e,r(3).Buffer)},function(t,e,r){(function(t){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
    "use strict";

    function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function o(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return u(this,t,e,r)}function u(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?h(t,e,r):d(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,e,r,n){return f(e),e<=0?i(t,e):void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}function c(t,e){if(f(e),t=i(t,e<0?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|w(e,r);t=i(t,n);var o=t.write(e,r);return o!==n&&(t=t.slice(0,o)),t}function p(t,e){var r=e.length<0?0:0|g(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=p(t,e),t}function d(t,e){if(s.isBuffer(e)){var r=0|g(e.length);return t=i(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||G(e.length)?i(t,0):p(t,e);if("Buffer"===e.type&&W(e.data))return p(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function w(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(t).length;default:if(n)return H(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return x(this,e,r);case"ascii":return C(this,e,r);case"latin1":case"binary":return I(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function E(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:A(t,e,r,n,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):A(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function A(t,e,r,n,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,u=t.length,f=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,f/=2,r/=2}var a;if(o){var c=-1;for(a=r;a<u;a++)if(i(t,a)===i(e,c===-1?0:a-c)){if(c===-1&&(c=a),a-c+1===f)return c*s}else c!==-1&&(a-=a-c),c=-1}else for(r+f>u&&(r=u-f),a=r;a>=0;a--){for(var h=!0,p=0;p<f;p++)if(i(t,a+p)!==i(e,p)){h=!1;break}if(h)return a}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n),n>o&&(n=o)):n=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function R(t,e,r,n){return K(H(e,t.length-r),t,r,n)}function _(t,e,r,n){return K(V(e),t,r,n)}function T(t,e,r,n){return _(t,e,r,n)}function B(t,e,r,n){return K($(e),t,r,n)}function S(t,e,r,n){return K(J(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,r))}function x(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],s=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=r){var f,a,c,h;switch(u){case 1:i<128&&(s=i);break;case 2:f=t[o+1],128===(192&f)&&(h=(31&i)<<6|63&f,h>127&&(s=h));break;case 3:f=t[o+1],a=t[o+2],128===(192&f)&&128===(192&a)&&(h=(15&i)<<12|(63&f)<<6|63&a,h>2047&&(h<55296||h>57343)&&(s=h));break;case 4:f=t[o+1],a=t[o+2],c=t[o+3],128===(192&f)&&128===(192&a)&&128===(192&c)&&(h=(15&i)<<18|(63&f)<<12|(63&a)<<6|63&c,h>65535&&h<1114112&&(s=h))}}null===s?(s=65533,u=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=u}return U(n)}function U(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return r}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function I(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function L(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=X(t[i]);return o}function O(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function Y(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,r,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function N(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function j(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function M(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(t,e,r,n,o){return o||M(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,r,n,23,4),r+4}function q(t,e,r,n,o){return o||M(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,r,n,52,8),r+8}function F(t){if(t=z(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function X(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function V(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function J(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function $(t){return Z.toByteArray(F(t))}function K(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function G(t){return t!==t}var Z=r(4),Q=r(5),W=r(6);e.Buffer=s,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=o(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return u(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return a(null,t,e,r)},s.allocUnsafe=function(t){return c(null,t)},s.allocUnsafeSlow=function(t){return c(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=w,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?x(this,0,t):v.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,u=r-e,f=Math.min(i,u),a=this.slice(n,o),c=t.slice(e,r),h=0;h<f;++h)if(a[h]!==c[h]){i=a[h],u=c[h];break}return i<u?-1:u<i?1:0},s.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},s.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return R(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return T(this,t,e,r);case"base64":return B(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var n;if(s.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=s.prototype;else{var o=e-t;n=new s(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},s.prototype.readUInt8=function(t,e){return e||Y(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||Y(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||Y(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||Y(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||Y(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||Y(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||Y(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||Y(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||Y(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||Y(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var o=Math.pow(2,8*r)-1;D(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var o=Math.pow(2,8*r)-1;D(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):j(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);D(this,t,e,r,o-1,-o)}var i=0,s=1,u=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);D(this,t,e,r,o-1,-o)}var i=r-1,s=1,u=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):j(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return q(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return q(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},s.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var u=s.isBuffer(t)?t:H(new s(t,n).toString()),f=u.length;for(i=0;i<r-e;++i)this[i+e]=u[i%f]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return 3*t.length/4-r(t)}function o(t){var e,n,o,i,s,u,f=t.length;s=r(t),u=new c(3*f/4-s),o=s>0?f-4:f;var h=0;for(e=0,n=0;e<o;e+=4,n+=3)i=a[t.charCodeAt(e)]<<18|a[t.charCodeAt(e+1)]<<12|a[t.charCodeAt(e+2)]<<6|a[t.charCodeAt(e+3)],u[h++]=i>>16&255,u[h++]=i>>8&255,u[h++]=255&i;return 2===s?(i=a[t.charCodeAt(e)]<<2|a[t.charCodeAt(e+1)]>>4,u[h++]=255&i):1===s&&(i=a[t.charCodeAt(e)]<<10|a[t.charCodeAt(e+1)]<<4|a[t.charCodeAt(e+2)]>>2,u[h++]=i>>8&255,u[h++]=255&i),u}function i(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function s(t,e,r){for(var n,o=[],s=e;s<r;s+=3)n=(t[s]<<16)+(t[s+1]<<8)+t[s+2],o.push(i(n));return o.join("")}function u(t){for(var e,r=t.length,n=r%3,o="",i=[],u=16383,a=0,c=r-n;a<c;a+=u)i.push(s(t,a,a+u>c?c:a+u));return 1===n?(e=t[r-1],o+=f[e>>2],o+=f[e<<4&63],o+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],o+=f[e>>10],o+=f[e>>4&63],o+=f[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=n,e.toByteArray=o,e.fromByteArray=u;for(var f=[],a=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,l=h.length;p<l;++p)f[p]=h[p],a[h.charCodeAt(p)]=p;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,o){var i,s,u=8*o-n-1,f=(1<<u)-1,a=f>>1,c=-7,h=r?o-1:0,p=r?-1:1,l=t[e+h];for(h+=p,i=l&(1<<-c)-1,l>>=-c,c+=u;c>0;i=256*i+t[e+h],h+=p,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=p,c-=8);if(0===i)i=1-a;else{if(i===f)return s?NaN:(l?-1:1)*(1/0);s+=Math.pow(2,n),i-=a}return(l?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,u,f,a=8*i-o-1,c=(1<<a)-1,h=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),e+=s+h>=1?p/f:p*Math.pow(2,1-h),e*f>=2&&(s++,f/=2),s+h>=c?(u=0,s=c):s+h>=1?(u=(e*f-1)*Math.pow(2,o),s+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;t[r+l]=255&u,l+=d,u/=256,o-=8);for(s=s<<o|u,a+=o;a>0;t[r+l]=255&s,l+=d,s/=256,a-=8);t[r+l-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(9),i=r(2),s=r(20),u=r(21),f=r(24),a=r(25);n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!f(t.url)&&(t.url=a(t.baseURL,t.url));var e=[u,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},function(t,e,r){"use strict";function n(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(11):"undefined"!=typeof process&&(t=r(11)),t}var i=r(2),s=r(10),u={"Content-Type":"application/x-www-form-urlencoded"},f={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};f.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){f.headers[t]={}}),i.forEach(["post","put","patch"],function(t){f.headers[t]=i.merge(u)}),t.exports=f},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},function(t,e,r){"use strict";var n=r(2),o=r(12),i=r(15),s=r(16),u=r(17),f=r(13),a="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(18);t.exports=function(t){return new Promise(function(e,c){var h=t.data,p=t.headers;n.isFormData(h)&&delete p["Content-Type"];var l=new XMLHttpRequest,d="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(t.url)||(l=new window.XDomainRequest,d="onload",g=!0,l.onprogress=function(){},l.ontimeout=function(){}),t.auth){var y=t.auth.username||"",w=t.auth.password||"";p.Authorization="Basic "+a(y+":"+w)}if(l.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l[d]=function(){if(l&&(4===l.readyState||g)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?l.response:l.responseText,i={data:n,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:r,config:t,request:l};o(e,c,i),l=null}},l.onerror=function(){c(f("Network Error",t)),l=null},l.ontimeout=function(){c(f("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),l=null},n.isStandardBrowserEnv()){var v=r(19),m=(t.withCredentials||u(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;m&&(p[t.xsrfHeaderName]=m)}if("setRequestHeader"in l&&n.forEach(p,function(t,e){"undefined"==typeof h&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),c(t),l=null)}),void 0===h&&(h=null),l.send(h)})}},function(t,e,r){"use strict";var n=r(13);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r)):t(r)}},function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e,r,o){var i=new Error(t);return n(i,e,r,o)}},function(t,e){"use strict";t.exports=function(t,e,r,n){return t.config=e,r&&(t.code=r),t.response=n,t}},function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(2);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,r){"use strict";var n=r(2);t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},function(t,e,r){"use strict";var n=r(2);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e){"use strict";function r(){this.message="String contains an invalid character"}function n(t){for(var e,n,i=String(t),s="",u=0,f=o;i.charAt(0|u)||(f="=",u%1);s+=f.charAt(63&e>>8-u%1*8)){if(n=i.charCodeAt(u+=.75),n>255)throw new r;e=e<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=n},function(t,e,r){"use strict";var n=r(2);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(2);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(2),i=r(22),s=r(23),u=r(9);t.exports=function(t){n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||u.adapter;return e(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(26);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t,e=new n(function(e){t=e});return{token:e,cancel:t}},t.exports=n},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}}])});
//# sourceMappingURL=axios.min.map

function Rehive(config){

    this.rehive = {};
    this.rehive.auth = {};
    this.rehive.token = {};
    this.rehive.user = {};
    this.rehive.transactions = {};
    this.rehive.accounts = {};
    this.rehive.company = {};
    var apiVersion = '3',
      baseAPI = 'https://rehive.com/api/'+ apiVersion +'/',
      registerAPI = 'auth/register/',
      registerCompanyAPI = 'auth/company/register/',
      loginAPI = 'auth/login/',
      logoutAPI = 'auth/logout/',
      logoutAllAPI = 'auth/logout/all/',
      changePasswordAPI = 'auth/password/change/',
      resetPasswordAPI = 'auth/password/reset/',
      resetConfirmPasswordAPI = 'auth/password/reset/confirm/',
      resendEmailVerificationAPI = 'auth/email/verify/resend/',
      resendMobileVerificationAPI = 'auth/mobile/verify/resend/',
      verifyMobileAPI = 'auth/mobile/verify/',
      tokensAPI = 'auth/tokens/',
      userProfileAPI = 'user/',
      userAddressAPI = 'user/address/',
      userBankAccountsAPI = 'user/bank_accounts/',
      userBitcoinAccountsAPI = 'user/bitcoin_accounts/',
      userCreateDocumentAPI = 'user/document/',
      userEmailAddressesAPI = 'user/emails/',
      userMobileNumbersAPI = 'user/mobiles/',
      userNotificationsAPI = 'user/notifications/',
      transactionsAPI = 'transactions/',
      totalTransactionsListAPI = 'totals/',
      withdrawalAPI = 'transactions/withdraw/',
      depositAPI = 'transactions/deposit/',
      accountsAPI = 'accounts/',
      accountCurrenciesAPI = '/currencies/',
      companyAPI = 'company/',
      companyCurrenciesAPI = 'company/currencies/',
      companyBanksAPI = 'company/bank/',
      header = {header: 'Content-Type: application/json'};

    if(config){
        config.apiVersion ? apiVersion = config.apiVersion : apiVersion = '3';
        config.authToken ? setToken(config.authToken) : setToken('');

    } else {
        apiVersion = '3';
        setToken('');
    }

    function setToken(newToken){
      sessionStorage.setItem("token",newToken);
    }

    function getToken(){
    return sessionStorage.getItem("token") || '';
    }

    function removeToken(){
      delete axios.defaults.headers.common['Authorization'];
      sessionStorage.removeItem("token");
    }


    //dummy function
    this.rehive.hello = function(){
    console.log(apiVersion);
        console.log(sessionStorage.getItem("token"));
    };

    //dummy function


    var httpPostRehive = function(url,data,cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          delete axios.defaults.headers.common['Authorization'];
      }

      axios.post(baseAPI + url, data , header)
          .then(function (response) {
              if(response.status == 200 || response.status == 201){
                  if(response.data.data){
                      cb(null,response.data.data);
                  } else {
                      cb(null,response.data);
                  }
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    var httpGetRehive = function(url,params,cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          delete axios.defaults.headers.common['Authorization'];
      }

      axios.get(baseAPI + url, params, header )
          .then(function (response) {
              if(response.status == 200){
                  if(response.data.data){
                      cb(null,response.data.data);
                  } else {
                      cb(null,response.data);
                  }
              }
          })
          .catch(function (error) {
            console.log(error.response);
              cb(error.response.data,null);
          });
    };

    var httpPatchRehive = function(url,data,cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          delete axios.defaults.headers.common['Authorization'];
      }

      axios.patch(baseAPI + url, data , header)
          .then(function (response) {
              if(response.status == 200 || response.status == 201){
                  if(response.data.data){
                      cb(null,response.data.data);
                  } else {
                      cb(null,response.data);
                  }
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    var httpDeleteRehive = function(url,data,cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          delete axios.defaults.headers.common['Authorization'];
      }

      axios.delete(baseAPI + url, data , header)
          .then(function (response) {
              console.log(response);
              if(response.status == 200){
                  if(response.data.data){
                      cb(null,response.data.data);
                  } else {
                      cb(null,response.data);
                  }
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    //public functions

    this.rehive.auth.register = function (credentials,cb){
      axios.post(baseAPI + registerAPI, credentials , header)
          .then(function (response) {
              if(response.status == 201){
                  setToken(response.data.data.token);
                  cb(null,response.data.data.user);
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    this.rehive.auth.registerCompany = function(credentials,cb){
      axios.post(baseAPI + registerCompanyAPI, credentials , header)
          .then(function (response) {
              if(response.status == 201){
                  setToken(response.data.data.token);
                  cb(null,response.data.data.user);
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    this.rehive.auth.login = function (credentials,cb){
      axios.post(baseAPI + loginAPI, credentials , header)
          .then(function (response) {
              if(response.status == 200){
                  setToken(response.data.data.token);
                  cb(null,response.data.data.user);
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    this.rehive.auth.logout = function (cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          return cb(null,{message: 'User Already Logged Out'});
      }

      axios.post(baseAPI + logoutAPI, header)
          .then(function (response) {
              if(response.status == 200){
                  removeToken();
                  cb(null,response.data);

              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    this.rehive.auth.logoutAll = function (cb){

      var token = getToken();

      if(token){
          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      } else {
          return cb(null,{message: 'User Already Logged Out'});
      }

      axios.post(baseAPI + logoutAllAPI, header)
          .then(function (response) {
              if(response.status == 200){
                  removeToken();
                  cb(null,response.data);
              }
          })
          .catch(function (error) {
              cb(error.response.data,null);
          });
    };

    this.rehive.auth.changePassword = function (data,cb){
      httpPostRehive(changePasswordAPI,data,cb);
    };

    this.rehive.auth.resetPassword = function (data,cb){
      httpPostRehive(resetPasswordAPI,data,cb);
    };

    this.rehive.auth.resetConfirmPassword = function (data,cb){
      httpPostRehive(resetConfirmPasswordAPI,data,cb);
    };

    this.rehive.auth.resendEmailVerification = function (data,cb){
      httpPostRehive(resendEmailVerificationAPI,data,cb);
    };

    this.rehive.auth.resendMobileVerification = function (data,cb){
      httpPostRehive(resendMobileVerificationAPI,data,cb);
    };

    this.rehive.auth.verifyMobile = function (data,cb){
      httpPostRehive(verifyMobileAPI,data,cb);
    };

    this.rehive.token.getTokensList = function (cb){
      httpGetRehive(tokensAPI,{},cb);
    };

    this.rehive.token.createToken = function (data,cb){
      httpPostRehive(tokensAPI,data,cb);
    };

    this.rehive.token.deleteToken = function (tokenKey,cb){
      httpDeleteRehive(tokensAPI + tokenKey,{},cb);
    };

    this.rehive.user.getUserProfile = function (cb){
      httpGetRehive(userProfileAPI,{},cb);
    };

    this.rehive.user.updateUserProfile = function (data,cb){
      httpPatchRehive(userProfileAPI,data,cb);
    };

    this.rehive.user.getUserAddress = function (cb){
      httpGetRehive(userAddressAPI,{},cb);
    };

    this.rehive.user.updateUserAddress = function (data,cb){
      httpPatchRehive(userAddressAPI,data,cb);
    };

    this.rehive.user.getUserBankAccounts = function (cb){
      httpGetRehive(userBankAccountsAPI,{},cb);
    };

    this.rehive.user.createUserBankAccount = function (data,cb){
      httpPostRehive(userBankAccountsAPI,data,cb);
    };

    this.rehive.user.updateUserBankAccount = function (accountId,data,cb){
      httpPatchRehive(userBankAccountsAPI + accountId,data,cb);
    };

    this.rehive.user.deleteUserBankAccount = function (bankAccountId,cb){
      httpDeleteRehive(userBankAccountsAPI + bankAccountId,{},cb);
    };

    this.rehive.user.getUserBitcoinAccounts = function (cb){
      httpGetRehive(userBitcoinAccountsAPI,{},cb);
    };

    this.rehive.user.createUserBitcoinAccount = function (data,cb){
      httpPostRehive(userBitcoinAccountsAPI,data,cb);
    };

    this.rehive.user.updateUserBitcoinAccount = function (accountId,data,cb){
      httpPatchRehive(userBitcoinAccountsAPI + accountId,data,cb);
    };

    this.rehive.user.createDocument = function (data,cb){
      httpPostRehive(userCreateDocumentAPI,data,cb);
    };

    this.rehive.user.getUserEmailAddresses = function (cb){
      httpGetRehive(userEmailAddressesAPI,{},cb);
    };

    this.rehive.user.createUserEmailAddresses = function (data,cb){
      httpPostRehive(userEmailAddressesAPI,data,cb);
    };

    this.rehive.user.updateUserEmailAddresses = function (emailId,data,cb){
      httpPatchRehive(userEmailAddressesAPI + emailId,data,cb);
    };

    this.rehive.user.getUserMobileNumbers = function (cb){
      httpGetRehive(userMobileNumbersAPI,{},cb);
    };

    this.rehive.user.createUserMobileNumbers = function (data,cb){
      httpPostRehive(userMobileNumbersAPI,data,cb);
    };

    this.rehive.user.updateUserMobileNumbers = function (mobileNumberId,data,cb){
      httpPatchRehive(userMobileNumbersAPI + mobileNumberId,data,cb);
    };

    this.rehive.user.getUserNotifications = function (cb){
      httpGetRehive(userNotificationsAPI,{},cb);
    };

    this.rehive.user.updateUserNotifications = function (notificationsId,data,cb){
      httpPatchRehive(userNotificationsAPI + notificationsId,data,cb);
    };

    this.rehive.transactions.getListTransactions = function (filters,cb){
      if(filters){
          filters = '?' + filters;
      } else {
          filters = '';
      }
      httpGetRehive(transactionsAPI + filters,{},cb);
    };

    this.rehive.transactions.getTotalTransactionsList = function (filters,cb){
      if(filters){
          filters = '?' + filters;
      } else {
          filters = '';
      }
      httpGetRehive(transactionsAPI + totalTransactionsListAPI + filters,{},cb);
    };

    this.rehive.transactions.getTransaction = function (tx_code,cb){
      httpGetRehive(transactionsAPI + tx_code + '/',{},cb);
    };

    this.rehive.transactions.createWithdrawal = function (data,cb){
    httpPostRehive(withdrawalAPI,data,cb);
    };

    this.rehive.transactions.createDeposit = function (data,cb){
    httpPostRehive(depositAPI,data,cb);
    };

    this.rehive.accounts.getAccountsList = function (filter,cb){
      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + filter,{},cb);
    };

    this.rehive.accounts.getAccount = function (reference,filter,cb){

      reference = reference + '/';

      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + reference + filter,{},cb);
    };

    this.rehive.accounts.getAccountCurrenciesList = function (reference,filter,cb){
      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + filter,{},cb);
    };

    this.rehive.accounts.getAccountCurrency =function (reference,code,cb){
      httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + code + '/',{},cb);
    };

    this.rehive.accounts.updateAccountCurrency = function (reference,code,data,cb){
      httpPatchRehive(accountsAPI + reference + accountCurrenciesAPI + code + '/',data,cb);
    };

    this.rehive.company.getCompanyDetails = function getCompanyDetails(cb){
      httpGetRehive(companyAPI,{},cb);
    };

    this.rehive.company.getCompanyCurrencies = function getCompanyCurrencies(code,cb){
    if(code){
      code = code + '/';
    } else {
      code = '';
    }
      httpGetRehive(companyCurrenciesAPI + code,{},cb);
    };

    this.rehive.company.getCompanyBanks = function getCompanyBanks(cb){
      httpGetRehive(companyBanksAPI,{},cb);
    };


    //public functions end

    return ;
}
