(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2603)}])},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(8754),n=r(1757),s=n._(r(7294)),l=r(3935),o=i._(r(2636)),a=r(5471),c=r(3735),u=r(3341);r(4210);let d=r(9955),f=i._(r(7746)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Ubiquiti-Project/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,s){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function p(e){let[t,r]=s.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:o,decoding:a,className:c,style:u,fetchPriority:d,placeholder:f,loading:m,unoptimized:g,fill:v,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:y,onLoad:j,onError:_,...S}=e;return s.default.createElement("img",{...S,...p(d),loading:m,width:o,height:l,decoding:a,"data-nimg":v?"fill":"1",className:c,style:u,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,f,b,x,w,g))},[r,f,b,x,w,_,g,t]),onLoad:e=>{let t=e.currentTarget;h(t,f,b,x,w,g)},onError:e=>{y(!0),"empty"!==f&&w(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,i),null):s.default.createElement(o.default,null,s.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let b=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(d.RouterContext),i=(0,s.useContext)(u.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:o}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let p=(0,s.useRef)(o);(0,s.useEffect)(()=>{p.current=o},[o]);let[b,x]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),{props:j,meta:_}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:b,showAltText:w});return s.default.createElement(s.default.Fragment,null,s.default.createElement(g,{...j,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:p,setBlurComplete:x,setShowAltText:y,ref:t}),_.priority?s.default.createElement(v,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(4210);let i=r(7757),n=r(3735);function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,a,c,{src:u,sizes:d,unoptimized:f=!1,priority:m=!1,loading:h,className:p,quality:g,width:v,height:b,fill:x=!1,style:w,onLoad:y,onLoadingComplete:j,placeholder:_="empty",blurDataURL:S,fetchPriority:C,layout:N,objectFit:E,objectPosition:P,lazyBoundary:O,lazyRoot:z,...k}=e,{imgConf:I,showAltText:R,blurComplete:M,defaultLoader:L}=t,A=I||n.imageConfigDefault;if("allSizes"in A)o=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);o={...A,allSizes:e,deviceSizes:t}}let D=k.loader||L;delete k.loader,delete k.srcSet;let G="__next_img_default"in D;if(G){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(N){"fill"===N&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!d&&(d=t)}let W="",B=l(v),F=l(b);if("object"==typeof(r=u)&&(s(r)||void 0!==r.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,W=e.src,!x){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let U=!m&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,U=!1),o.unoptimized&&(f=!0),G&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),m&&(C="high");let T=l(g),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:P}:{},R?{}:{color:"transparent"},w),q=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:a,blurHeight:c,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+_+'")',J=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:l,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,l),u=a.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:a.map((e,i)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:o({config:t,src:r,quality:s,width:a[u]})}}({config:o,src:u,unoptimized:f,width:B,quality:T,sizes:d,loader:D}),Y={...k,loading:U?"lazy":h,fetchPriority:C,width:B,height:F,decoding:"async",className:p,style:{...V,...J},sizes:X.sizes,srcSet:X.srcSet,src:X.src},H={unoptimized:f,priority:m,placeholder:_,fill:x};return{props:Y,meta:H}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:l}=e,o=i?40*i:t,a=n?40*n:r,c=o&&a?"viewBox='0 0 "+o+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let i=r(8754),n=r(5471),s=r(4210),l=r(8872),o=i._(r(7746)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Ubiquiti-Project/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},2603:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return c}});var i=r(5893),n=r(7294),s=r(5675),l=r.n(s),o=r(9583),a=!0;function c(e){let{data:t}=e,[r,s]=(0,n.useState)(""),[a,c]=(0,n.useState)(1),[u,d]=(0,n.useState)("table"),f=t.devices.filter(e=>e.product.name.toLowerCase().includes(r.toLowerCase())||e.line.name.toLowerCase().includes(r.toLowerCase())),m=Math.ceil(f.length/20),h=f.slice((a-1)*20,20*a),p=e=>"https://static.ui.com/fingerprint/ui/icons/".concat(e.icon.id,"_").concat(e.icon.resolutions[1][0],"x").concat(e.icon.resolutions[1][1],".png"),g=(e,t,r)=>(0,i.jsx)(l(),{src:p(e),alt:e.product.name,width:t,height:r});return(0,i.jsx)("div",{className:"flex h-screen bg-gray-100",children:(0,i.jsxs)("div",{className:"flex-1 p-10",children:[(0,i.jsxs)("header",{className:"flex justify-between items-center mb-8",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"text",className:"p-2 border rounded",placeholder:"Search...",value:r,onChange:e=>s(e.target.value)}),(0,i.jsxs)("span",{className:"ml-4 text-lg",children:[f.length," Devices"]})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(l(),{src:t.devices[0].icon.resolutions[0],alt:"Row View",className:"w-6 h-6 mr-2"}),(0,i.jsx)(l(),{src:t.devices[0].icon.resolutions[0],alt:"Grid View",className:"w-6 h-6"})]}),(0,i.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search...",value:r,onChange:e=>s(e.target.value)}),(0,i.jsxs)("div",{children:[(0,i.jsx)(o.xyo,{onClick:()=>d("grid")}),(0,i.jsx)(o.AeW,{onClick:()=>d("table")})]})]})]}),(0,i.jsxs)("main",{className:"mt-10",children:["table"===u?(0,i.jsxs)("table",{className:"w-full",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"w-10"}),(0,i.jsx)("th",{className:"text-left",children:"Product Line"}),(0,i.jsx)("th",{className:"text-left",children:"Name"})]})}),(0,i.jsx)("tbody",{children:h.map(e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:g(e,24,24)}),(0,i.jsx)("td",{children:e.product.name}),(0,i.jsx)("td",{children:e.line.name})]},e.id))})]}):(0,i.jsx)("div",{className:"grid grid-cols-3 gap-4",children:h.map(e=>(0,i.jsxs)("div",{className:"card",children:[g(e,48,48),(0,i.jsx)("h3",{children:e.product.name}),(0,i.jsx)("p",{children:e.line.name})]},e.id))}),(0,i.jsxs)("footer",{className:"mt-8",children:[(0,i.jsx)("button",{onClick:()=>c(a>1?a-1:a),children:"Previous"}),(0,i.jsx)("span",{className:"mx-2",children:a}),(0,i.jsx)("button",{onClick:()=>c(a<m?a+1:a),children:"Next"})]})]})]})})}},5675:function(e,t,r){e.exports=r(2555)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var i=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=i.createContext&&i.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};function a(e){return function(t){return i.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return i.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,n=e.attr,s=e.size,a=e.title,c=o(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==s?i.createElement(s.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);