var k=true,l=null,m=false;function aa(a){return function(){return a}}var o=Object,p=Array,q=RegExp,r=Date,t=String,u=Number,v=Math,ba=typeof global!=="undefined"?global:this,ca=o.defineProperty&&o.defineProperties,w="Array,Boolean,Date,Function,Number,String,RegExp".split(","),fa=x(w[0]),ga=x(w[1]),ha=x(w[2]),A=x(w[3]),B=x(w[4]),D=x(w[5]),E=x(w[6]);function x(a){return function(b){return o.prototype.toString.call(b)==="[object "+a+"]"}}
function ia(a){if(!a.SugarMethods){ja(a,"SugarMethods",{});F(a,m,m,{restore:function(){var b=arguments.length===0,c=G(arguments);H(a.SugarMethods,function(d,e){if(b||c.indexOf(d)>-1)ja(e.va?a.prototype:a,d,e.method)})},extend:function(b,c,d){F(a,d!==m,c,b)}})}}function F(a,b,c,d){var e=b?a.prototype:a,f;ia(a);H(d,function(g,j){f=e[g];if(typeof c==="function")j=ka(e[g],j,c);if(c!==m||!e[g])ja(e,g,j);a.SugarMethods[g]={va:b,method:j,Da:f}})}
function I(a,b,c,d,e){var f={};d=D(d)?d.split(","):d;d.forEach(function(g,j){e(f,g,j)});F(a,b,c,f)}function ka(a,b,c){return function(){return a&&(c===k||!c.apply(this,arguments))?a.apply(this,arguments):b.apply(this,arguments)}}function ja(a,b,c){if(ca)o.defineProperty(a,b,{value:c,configurable:k,enumerable:m,writable:k});else a[b]=c}function G(a,b){var c=[],d;for(d=0;d<a.length;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function J(a){return a!==void 0}function K(a){return a===void 0}
function la(a){return a&&typeof a==="object"}function L(a){return!!a&&o.prototype.toString.call(a)==="[object Object]"&&"hasOwnProperty"in a}function ma(a,b){return o.hasOwnProperty.call(a,b)}function H(a,b){for(var c in a)if(ma(a,c))if(b.call(a,c,a[c])===m)break}function na(a,b){H(b,function(c){a[c]=b[c]});return a}function M(a){na(this,a)}M.prototype.constructor=o;function N(a,b,c,d){var e=[];a=parseInt(a);for(var f=d<0;!f&&a<=b||f&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}
function O(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function oa(a,b){return O(a,b,"floor")}function P(a,b,c,d){d=v.abs(a).toString(d||10);d=pa(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}function qa(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}
function ra(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function pa(a,b){return p(v.max(0,J(a)?a:1)+1).join(b||"")}function sa(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}function R(a){D(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}
function ta(a,b){var c=typeof a,d,e,f,g,j,i;if(c==="string")return a;f=o.prototype.toString.call(a);d=L(a);e=f==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(i=b.length;i--;)if(b[i]===a)return"CYC";b.push(a);d=t(a.constructor);g=e?a:o.keys(a).sort();for(i=0;i<g.length;i++){j=e?i:g[i];d+=j+ta(a[j],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+f+d}
function ua(a){var b=o.prototype.toString.call(a);return b==="[object Date]"||b==="[object Array]"||b==="[object String]"||b==="[object Number]"||b==="[object RegExp]"||b==="[object Boolean]"||b==="[object Arguments]"||L(a)}function va(a,b,c){var d=[],e=a.length,f=b[b.length-1]!==m,g;G(b,function(j){if(ga(j))return m;if(f){j%=e;if(j<0)j=e+j}g=c?a.charAt(j)||"":a[j];d.push(g)});return d.length<2?d[0]:d}
function wa(a,b){I(b,k,m,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return o[d].apply(l,[this].concat(G(arguments)))}})}ia(o);H(w,function(a,b){ia(ba[b])});
