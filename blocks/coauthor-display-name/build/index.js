!function(){var e={779:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.blocks,t=window.wp.element,r=window.wp.blockEditor,o=window.wp.components,a=window.wp.i18n,l=window.wp.data,i=n(779),c=n.n(i),u=JSON.parse('{"u2":"cap/coauthor-display-name"}');(0,e.registerBlockType)(u.u2,{edit:function(e){let{context:n,attributes:i,setAttributes:u}=e;const{isLink:s,rel:p,textAlign:f}=i,g=(0,l.useSelect)((e=>e(r.store).getSettings()),[]),m=n["cap/author"]||g["cap/author-example"],{link:d,display_name:w}=m;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.BlockControls,null,(0,t.createElement)(r.AlignmentControl,{value:f,onChange:e=>{u({textAlign:e})}})),(0,t.createElement)("p",(0,r.useBlockProps)({className:c()({[`has-text-align-${f}`]:f})}),s?(0,t.createElement)("a",{href:d,rel:p,onClick:e=>e.preventDefault()},w):w),(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Settings")},(0,t.createElement)(o.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Make coauthor name a link"),onChange:()=>u({isLink:!s}),checked:s}),s&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.TextControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Link rel"),value:p,onChange:e=>u({rel:e})})))))}})}()}();