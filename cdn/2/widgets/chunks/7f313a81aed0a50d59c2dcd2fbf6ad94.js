/*! For license information please see 7f313a81aed0a50d59c2dcd2fbf6ad94.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[96440],{96440:(t,e,n)=>{n.d(e,{a:()=>R,f:()=>b,i:()=>E,t:()=>S});var r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],o=r.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!i&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},u=function t(e,n){var r;void 0===n&&(n=!0);var o=null==e||null===(r=e.getAttribute)||void 0===r?void 0:r.call(e,"inert");return""===o||"true"===o||n&&e&&t(e.parentNode)},c=function(t,e,n){if(u(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(o));return e&&a.call(t,o)&&r.unshift(t),r.filter(n)},d=function t(e,n,r){for(var i=[],l=Array.from(e);l.length;){var c=l.shift();if(!u(c,!1))if("SLOT"===c.tagName){var d=c.assignedElements(),f=t(d.length?d:c.children,!0,r);r.flatten?i.push.apply(i,f):i.push({scopeParent:c,candidates:f})}else{a.call(c,o)&&r.filter(c)&&(n||!e.includes(c))&&i.push(c);var s=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),p=!u(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(c));if(s&&p){var h=t(!0===s?c.children:s.children,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:c,candidates:h})}else l.unshift.apply(l,c.children)}}return i},f=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},s=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!f(t)?0:t.tabIndex},p=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},h=function(t){return"INPUT"===t.tagName},v=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},m=function(t,e){return!(e.disabled||u(e)||function(t){return h(t)&&"hidden"===t.type}(e)||function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=a.call(t,"details>summary:first-of-type")?t.parentElement:t;if(a.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return v(t)}else{if("function"==typeof r){for(var i=t;t;){var u=t.parentElement,c=l(t);if(u&&!u.shadowRoot&&!0===r(u))return v(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=i}if(function(t){var e,n,r,o,i=t&&l(t),a=null===(e=i)||void 0===e?void 0:e.host,u=!1;if(i&&i!==t)for(u=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!u&&a;){var c,d,f;u=!(null===(d=a=null===(c=i=l(a))||void 0===c?void 0:c.host)||void 0===d||null===(f=d.ownerDocument)||void 0===f||!f.contains(a))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!a.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},g=function(t,e){return!(function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||l(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!o||o===t}(t)}(e)||s(e)<0||!m(t,e))},w=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},y=function t(e){var n=[],r=[];return e.forEach((function(e,o){var i=!!e.scopeParent,a=i?e.scopeParent:e,l=function(t,e){var n=s(t);return n<0&&e&&!f(t)?0:n}(a,i),u=i?t(e.candidates):a;0===l?i?n.push.apply(n,u):n.push(a):r.push({documentOrder:o,tabIndex:l,item:e,isScope:i,content:u})})),r.sort(p).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},S=function(t,e){var n;return n=(e=e||{}).getShadowRoot?d([t],e.includeContainer,{filter:g.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:w}):c(t,e.includeContainer,g.bind(null,e)),y(n)},b=function(t,e){return(e=e||{}).getShadowRoot?d([t],e.includeContainer,{filter:m.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):c(t,e.includeContainer,m.bind(null,e))},E=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==a.call(t,o)&&g(e,t)},N=r.concat("iframe").join(","),R=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==a.call(t,N)&&m(e,t)}}}]);