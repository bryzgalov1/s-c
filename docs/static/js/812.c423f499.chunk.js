"use strict";(self.webpackChunk_brz_screen_capture=self.webpackChunk_brz_screen_capture||[]).push([[812],{4084:function(e,n,t){t.d(n,{Z:function(){return o}});t(969);var r="style_footer__Fhcsl",u="style_copy__fKuLv",i="style_link__J74mT",a=t(7574),o=function(){return(0,a.jsx)("div",{className:r,children:(0,a.jsxs)("div",{className:u,children:["\xa9\xa0",(0,a.jsx)("a",{className:i,href:"https://bryzgalov1.github.io",target:"_blank",rel:"noopener noreferrer",children:"bryzgalov1.github.io"})]})})}},2865:function(e,n,t){t.d(n,{Z:function(){return d}});t(969);var r=t(9786),u=t(6822),i="style_Header__mFDpW",a="style_NavLink__f9jFl",o="style_NavLink__active__WLLtf",c=t(7574),s=function(e){var n=e.text,t=e.to;return(0,c.jsx)(u.OL,{to:t,className:function(e){return e.isActive?"".concat(a," ").concat(o):"".concat(a)},children:n})},l=t(8055),f=t(8886),d=function(){var e=(0,f.Z)(l.lv);return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)(s,{to:"/",text:"Home"}),(0,c.jsx)(s,{to:"/demo",text:"Demo"}),!!e&&(0,c.jsx)(s,{to:"/draw",text:"Draw"}),(0,c.jsx)("a",{className:a,href:r.d3,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})}},4027:function(e,n,t){t.d(n,{Z:function(){return c}});t(969);var r=t(3203),u=t(2865),i=t(4084),a={Layout:"style_Layout__oZZt9",Layout__body:"style_Layout__body__o83BX",Layout__bottom:"style_Layout__bottom__+suhk"},o=t(7574),c=function(e){var n=e.loading,t=void 0!==n&&n,c=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:a.Layout,children:[(0,o.jsx)("div",{className:a.Layout__top,children:(0,o.jsx)(u.Z,{})}),!!c&&(0,o.jsx)("div",{className:a.Layout__body,children:c}),(0,o.jsx)("div",{className:a.Layout__bottom,children:(0,o.jsx)(i.Z,{})})]}),t&&(0,o.jsx)(r.gb,{})]})}},8102:function(e,n,t){var r=t(9405).I0;n.Z=r},8886:function(e,n,t){var r=t(9405).v9;n.Z=r},6021:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(969),u=t(3203),i=function(e){return e instanceof Error?e.message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"},a=function(){var e=(0,u.$L)();return{beepError:(0,r.useCallback)((function(n){e.error(i(n))}),[e]),beepInfo:(0,r.useCallback)((function(n){e.info(n)}),[e])}}},5905:function(e,n,t){var r=t(969),u=t(8303),i=t(8102);n.Z=function(){var e=(0,i.Z)();return(0,r.useCallback)((function(n){e(u.S1(n))}),[e])}},5113:function(e,n,t){var r=t(734),u=t(969);n.Z=function(){var e=(0,r.s0)();return(0,u.useCallback)((function(n){e(n)}),[e])}},3812:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(2723),u=t(4795),i=t(6234),a=t(969),o=t(3203),c=function(e){var n=e.videoElement,t=e.width,r=e.height,u=document.createElement("canvas");u.width=t,u.height=r;var i=u.getContext("2d");if(null===i)throw new Error("Error canvas getContext 2d");i.drawImage(n,0,0,t,r);var a=u.toDataURL("image/png");return u.remove(),a},s={video:{cursor:"never",displaySurface:"monitor"},audio:!1},l=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getDisplayMedia(s);case 2:return n=e.sent,t=function(){n&&n.getTracks()[0].stop()},e.abrupt("return",[n,t]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=l,d=function(e){return new Promise((function(n,t){var r=document.createElement("video");r.style.cssText="position:absolute;left:0;top:0;",r.autoplay=!0,r.onloadedmetadata=function(){var e=r.videoWidth,t=r.videoHeight;r.style.width=e+"px",r.style.height=t+"px",n({videoElement:r,width:e,height:t})},r.srcObject=e}))},v=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var n,t,u,a,o,s,l,v,p,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return n=e.sent,t=(0,i.Z)(n,2),u=t[0],a=t[1],e.next=8,d(u);case 8:return o=e.sent,s=o.videoElement,l=o.width,v=o.height,p=c({videoElement:s,width:l,height:v}),h={dataUrl:p,width:l,height:v},a(),e.abrupt("return",h);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=v,h=t(4027),y=t(5113),_=function(){var e=(0,o.$L)(),n=(0,a.useState)(null),t=(0,i.Z)(n,2),c=t[0],s=t[1],l=(0,o.tm)();return(0,a.useEffect)((function(){return document.onpaste=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.clipboardData&&(u=t.clipboardData.items,null!==(i=(0,o.co)(u))?l()&&s(i):e.info("\u041f\u0443\u0441\u0442\u043e!"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){document.onpaste=null}}),[l,e]),c},x=t(5905),m=t(6021),g="style_root__uRFP4",b="style_logo__I+uI2",j="style_h1__GDUir",w="style_features__4fTwK",Z="style_steps__9RDkK",k=t(7574),E=function(){var e=(0,m.Z)().beepError,n=_(),t=(0,o.sS)(!1),c=(0,i.Z)(t,2),s=c[0],l=c[1],f=(0,o.sS)(!1),d=(0,i.Z)(f,2),v=d[0],E=d[1],L=(0,x.Z)(),N=(0,y.Z)(),C=(0,a.useCallback)(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,o.L0)(t);case 4:return u=n.sent,n.next=7,(0,o.oE)(u);case 7:i=n.sent,a={dataUrl:u,width:i.naturalWidth,height:i.naturalHeight},L(a),N("/draw"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),e(n.t0);case 16:l(!1);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}(),[L,N,l,e]);(0,a.useEffect)((function(){n&&C(n)}),[n,C]);var D=(0,a.useCallback)((0,u.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.prev=1,n.next=4,p();case 4:t=n.sent,L(t),N("/draw"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e(n.t0);case 12:E(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])}))),[N,L,E,e]),S=s||v;return(0,k.jsx)(h.Z,{loading:S,children:(0,k.jsxs)("div",{className:g,children:[(0,k.jsx)("div",{className:b,children:"screen-capture"}),(0,k.jsx)("h1",{className:j,children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u043c."}),(0,k.jsxs)("ol",{className:w,children:[(0,k.jsx)("li",{children:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."}),(0,k.jsx)("li",{children:'\u0412\u043e\u0437\u043c\u043e\u043d\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u043f\u0435\u0440\u0435\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u043b\u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u044d\u043a\u0440\u0430\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e "Screen Capture API".'}),(0,k.jsx)("li",{children:"\u0412\u043e\u0437\u043c\u043e\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u0434\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442."}),(0,k.jsx)("li",{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u043c \u0447\u0435\u0440\u0435\u0437 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 \u0438\u043b\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043a\u0430\u043a \u0444\u0430\u0439\u043b."})]}),(0,k.jsxs)("ul",{className:Z,children:[(0,k.jsxs)("li",{children:[(0,k.jsxs)("div",{children:["\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043a\u0440\u0430\u043d \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430",(0,k.jsx)("br",{}),"(Windows: ",(0,k.jsx)("b",{children:"\xabPrint Screen\xbb"}),")"]}),(0,k.jsxs)("div",{children:["\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u043a\u0440\u0430\u043d \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430",(0,k.jsx)("br",{}),"(Windows: ",(0,k.jsx)("b",{children:"\xabCtrl + v\xbb"}),")"]})]}),(0,k.jsx)("li",{children:(0,k.jsx)(o.zx,{text:"\u0417\u0430\u0445\u0432\u0430\u0442 \u044d\u043a\u0440\u0430\u043d\u0430",onClick:D})})]})]})})}},8055:function(e,n,t){t.d(n,{Ko:function(){return s},iI:function(){return a},lv:function(){return i}});var r=t(5033),u=function(e){return e.draw},i=(0,r.P1)(u,(function(e){return e.img})),a=(0,r.P1)(u,(function(e){return e.figures})),o=(0,r.P1)(u,(function(e){return e.figureFocusedId})),c=(0,r.P1)(o,a,(function(e,n){if(null!==e){var t=n.find((function(n){return n.id===e}));if(t)return t}return null})),s=c},5033:function(e,n,t){t.d(n,{P1:function(){return o}});var r="NOT_FOUND";var u=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},i=t.equalityCheck,a=void 0===i?u:i,o=t.maxSize,c=void 0===o?1:o,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(a),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function u(e){var u=t.findIndex((function(t){return n(e,t.key)}));if(u>-1){var i=t[u];return u>0&&(t.splice(u,1),t.unshift(i)),i.value}return r}return{get:u,put:function(n,i){u(n)===r&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function d(){var n=f.get(arguments);if(n===r){if(n=e.apply(null,arguments),s){var t=f.getEntries().find((function(e){return s(e.value,n)}));t&&(n=t.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function a(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var i,a=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o.memoizeOptions,l=void 0===s?t:s,f=Array.isArray(l)?l:[l],d=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}(r),v=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),p=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(p,{resultFunc:c,memoizedResultFunc:v,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),p}}var o=a(i)}}]);
//# sourceMappingURL=812.c423f499.chunk.js.map