(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3857)}])},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=r(8754),i=r(1757),s=i._(r(7294)),l=r(3935),o=n._(r(2636)),a=r(5471),c=r(3735),d=r(3341);r(4210);let u=r(9955),f=n._(r(7746)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Ubiquiti-Project/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,s){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=s.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:o,decoding:a,className:c,style:d,fetchPriority:u,placeholder:f,loading:m,unoptimized:p,fill:b,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:j,onLoad:y,onError:N,...C}=e;return s.default.createElement("img",{...C,...g(u),loading:m,width:o,height:l,decoding:a,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&h(e,f,x,v,w,p))},[r,f,x,v,w,N,p,t]),onLoad:e=>{let t=e.currentTarget;h(t,f,x,v,w,p)},onError:e=>{j(!0),"empty"!==f&&w(!0),N&&N(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,n),null):s.default.createElement(o.default,null,s.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(u.RouterContext),n=(0,s.useContext)(d.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:o}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let g=(0,s.useRef)(o);(0,s.useEffect)(()=>{g.current=o},[o]);let[x,v]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),{props:y,meta:N}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:x,showAltText:w});return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,{...y,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:j,ref:t}),N.priority?s.default.createElement(b,{isAppRouter:!r,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(4210);let n=r(7757),i=r(3735);function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,a,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:h,className:g,quality:p,width:b,height:x,fill:v=!1,style:w,onLoad:j,onLoadingComplete:y,placeholder:N="empty",blurDataURL:C,fetchPriority:S,layout:_,objectFit:E,objectPosition:k,lazyBoundary:P,lazyRoot:O,...z}=e,{imgConf:I,showAltText:L,blurComplete:R,defaultLoader:M}=t,A=I||i.imageConfigDefault;if("allSizes"in A)o=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);o={...A,allSizes:e,deviceSizes:t}}let D=z.loader||M;delete z.loader,delete z.srcSet;let G="__next_img_default"in D;if(G){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(_){"fill"===_&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!u&&(u=t)}let B="",T=l(b),W=l(x);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,B=e.src,!v){if(T||W){if(T&&!W){let t=T/e.width;W=Math.round(e.height*t)}else if(!T&&W){let t=W/e.height;T=Math.round(e.width*t)}}else T=e.width,W=e.height}}let F=!m&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,F=!1),o.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let U=l(p),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:k}:{},L?{}:{color:"transparent"},w),V=R||"empty"===N?null:"blur"===N?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:T,heightInt:W,blurWidth:a,blurHeight:c,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+N+'")',H=V?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:l,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:s,kind:"x"}}(t,i,l),d=a.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:a.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:o({config:t,src:r,quality:s,width:a[d]})}}({config:o,src:d,unoptimized:f,width:T,quality:U,sizes:u,loader:D}),X={...z,loading:F?"lazy":h,fetchPriority:S,width:T,height:W,decoding:"async",className:g,style:{...q,...H},sizes:J.sizes,srcSet:J.srcSet,src:J.src},Y={unoptimized:f,priority:m,placeholder:N,fill:v};return{props:X,meta:Y}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:l}=e,o=n?40*n:t,a=i?40*i:r,c=o&&a?"viewBox='0 0 "+o+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let n=r(8754),i=r(5471),s=r(4210),l=r(8872),o=n._(r(7746)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Ubiquiti-Project/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3857:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return g}});var n=r(5893),i=r(7294),s=r(9583),l=r(7516),o=e=>{let{children:t,isHeader:r=!1}=e,i="border-b-1 border-grey-light-2 hover:bg-grey-light-2 focus:border-t-1 focus:border-b-1 focus:border-blue-dark-1";return r?(0,n.jsx)("th",{className:i,children:t}):(0,n.jsx)("td",{className:i,children:t})},a=e=>{let{children:t,...r}=e;return(0,n.jsx)("button",{className:"transition duration-200 rounded p-2 font-bold bg-grey-light-2 text-dark hover:bg-grey-dark-1",...r,children:t})},c=r(5675),d=r.n(c),u=e=>{let{searchTerm:t,setSearchTerm:r,suggestions:l,...o}=e,[a,c]=(0,i.useState)(!1),[u,f]=(0,i.useState)([]),m=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let h=e=>{r("".concat(e.deviceName," ").concat(e.productName)),c(!1),f([])},g=(e,t)=>{let r=e.productName.toLowerCase().indexOf(t.toLowerCase()),i=e.productName.slice(0,r),s=e.productName.slice(r,r+t.length),l=e.productName.slice(r+t.length);return(0,n.jsxs)("div",{className:"inline-flex justify-between w-full",children:[(0,n.jsxs)("span",{className:"text-left",children:[i,(0,n.jsx)("span",{className:"font-semibold underline",children:s}),l]}),(0,n.jsx)("span",{className:"text-right text-grey-light-3",children:e.deviceName})]})};return(0,n.jsx)("div",{className:"flex justify-between items-center",ref:m,children:(0,n.jsxs)("div",{className:"relative w-[20rem]",children:[(0,n.jsx)("input",{type:"text",placeholder:a?"":"Search",value:t,onChange:e=>{r(e.target.value);let t=e.target.value.toLowerCase(),n=l.filter(e=>e.deviceName.toLowerCase().includes(t)||e.productName.toLowerCase().includes(t));f(n)},onFocus:()=>c(!0),className:"w-[20rem] pl-10 py-2 bg-grey-light-2 placeholder-grey-dark-1 text-dark font-core-sans rounded outline-blue-dark-2 active:outline-blue-dark-2 focus:outline-blue-dark-2 hover:outline-blue-dark-2",...o}),(0,n.jsx)("div",{className:"absolute left-2 top-1/2 transform -translate-y-1/2",children:(0,n.jsx)(d(),{src:"/search.svg",height:24,width:24,className:"rounded",alt:"Search"})}),t&&(0,n.jsx)("div",{className:"absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer",children:(0,n.jsx)(s.aHS,{onClick:()=>r("")})}),a&&u.length?(0,n.jsx)("div",{className:"absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg",children:(0,n.jsx)("div",{className:"py-1",children:u.map((e,r)=>(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("button",{className:"px-4 py-2 text-sm text-grey-dark-2 hover:bg-grey-light-4 transition-all cursor-pointer z-50 w-full",onClick:()=>h(e),children:g(e,t)})},r))})}):null]})})},f=e=>{let{href:t,children:r}=e;return(0,n.jsx)("a",{href:t,className:"text-blue-dark-1 hover:text-blue-dark-2 focus:border focus:border-blue-dark-1 focus:my-2",children:r})},m=e=>{let t,r,{device:i,w:s,h:l}=e;if(s&&l){var o;[t,r]=(null===(o=i.icon.resolutions.find(e=>{let[t,r]=e.map(e=>Number(e));return t>=t&&r>=r}))||void 0===o?void 0:o.map(e=>Number(e)))||[48,48]}else[t,r]=i.icon.resolutions[0].map(e=>Number(e))||[48,48];return(0,n.jsx)(d(),{src:"https://static.ui.com/fingerprint/ui/icons/".concat(i.icon.id,"_").concat(t,"x").concat(r,".png"),alt:i.product.name,width:t,height:r})},h=!0;function g(e){let{data:t,error:r}=e,[c,d]=(0,i.useState)(""),[h,g]=(0,i.useState)(1),[p,b]=(0,i.useState)("table"),x=(null==t?void 0:t.devices.filter(e=>{let t=c.toLowerCase(),r=e.product.name.toLowerCase(),n=e.shortnames[e.shortnames.length-1].toLowerCase();return n.includes(t)||n.toLowerCase().includes(t)||"".concat(n," ").concat(r).includes(t)}))||[],v=Math.ceil(x.length/20),w=x.slice((h-1)*20,20*h);return!t||r?(0,n.jsx)("div",{className:"flex h-screen bg-gray-100",children:(0,n.jsxs)("div",{className:"w-[20rem] drop-shadow-lg mx-auto my-auto",children:[(0,n.jsx)("div",{className:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"}),(0,n.jsx)("div",{className:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",children:(0,n.jsxs)("div",{className:"mb-8 text-center",children:[(0,n.jsx)(l.iBG,{className:"mx-auto",size:"3rem"}),(0,n.jsx)("div",{className:"text-gray-900 font-bold text-xl mb-2",children:"There was an error..."}),(0,n.jsx)("p",{className:"text-gray-700 text-base",children:r||"Something went wrong loading the page."})]})})]})}):(0,n.jsx)("div",{className:"flex h-screen bg-gray-100",children:(0,n.jsxs)("div",{className:"flex-1 p-10",children:[(0,n.jsxs)("header",{className:"flex justify-between items-center mb-8",children:[(0,n.jsx)(u,{searchTerm:c,setSearchTerm:d,suggestions:t.devices.map(e=>({productName:e.product.name,deviceName:e.shortnames[e.shortnames.length-1]}))}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(s.xyo,{onClick:()=>b("grid")}),(0,n.jsx)(s.AeW,{onClick:()=>b("table")})]})]}),(0,n.jsxs)("main",{className:"mt-10",children:["table"===p?(0,n.jsxs)("table",{className:"w-full",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"w-10"}),(0,n.jsx)("th",{className:"text-left",children:"Product Line"}),(0,n.jsx)("th",{className:"text-left",children:"Name"})]})}),(0,n.jsx)("tbody",{children:w.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)(o,{children:(0,n.jsx)(m,{device:e,w:24,h:24})}),(0,n.jsx)(o,{children:e.line.name}),(0,n.jsx)(o,{children:(0,n.jsx)(f,{href:"#",children:e.product.name})})]},e.id))})]}):(0,n.jsx)("div",{className:"grid grid-cols-3 gap-4",children:w.map(e=>(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)(m,{device:e,w:48,h:48}),(0,n.jsx)("h3",{children:e.product.name}),(0,n.jsx)("p",{children:e.line.name})]},e.id))}),(0,n.jsxs)("footer",{className:"mt-8",children:[(0,n.jsx)(a,{onClick:()=>g(h>1?h-1:h),children:"Previous"}),(0,n.jsx)("span",{className:"mx-2",children:h}),(0,n.jsx)(a,{onClick:()=>g(h<v?h+1:h),children:"Next"})]})]})]})})}},5675:function(e,t,r){e.exports=r(2555)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function a(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,s=e.size,a=e.title,c=o(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){e.O(0,[445,874,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);