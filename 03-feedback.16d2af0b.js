function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function O(e){return c=e,a=setTimeout(j,t),l?y(e):f}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(S(e))return h(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function w(){var e=v(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return O(u);if(s)return a=setTimeout(j,t),y(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget,n=new FormData(t),o={};for(const[e,t]of n.entries()){if(!t)return void alert("Все поля должны быть заполнены!!");o[e]=t}console.log(o),t.reset(),localStorage.removeItem("feedback - form - state")})),y.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target,o=JSON.parse(localStorage.getItem("feedback - form - state"));if(o){const e={...o,[t]:n};localStorage.setItem("feedback - form - state",JSON.stringify(e))}else{const e={[t]:n};localStorage.setItem("feedback - form - state",JSON.stringify(e))}}),1e3)),function(){const e=JSON.parse(localStorage.getItem("feedback - form - state"));if(e){Object.keys(e).forEach((t=>{y.elements[t].value=e[t]}))}}();
//# sourceMappingURL=03-feedback.16d2af0b.js.map
