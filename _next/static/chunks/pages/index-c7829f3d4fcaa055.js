(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2981)}])},966:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var r=s(5893);s(7294);var i=s(5675),n=s.n(i),a=()=>(0,r.jsxs)("header",{className:"bg-grey-light-4 h-18 flex justify-between items-center text-grey-light-3 p-5",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(n(),{src:"logo.svg",width:24,height:24,alt:"Logo"}),(0,r.jsx)("span",{className:"ml-5",children:"Devices"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("a",{href:"https://github.com/Lewdcario",target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:[(0,r.jsx)("span",{children:"okami.codes"}),(0,r.jsx)(n(),{src:"github.svg",width:24,height:24,alt:"Github Logo",className:"ml-5"})]})})]}),c=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"h-screen bg-white",children:[(0,r.jsx)(a,{}),(0,r.jsx)("div",{className:"py-4 px-10 overflow-hidden",children:t})]})}},7297:function(e,t,s){"use strict";var r=s(5893);s(7294),t.Z=e=>{let{className:t}=e;return(0,r.jsx)("div",{className:"flex mx-auto h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ".concat(t),role:"status",children:(0,r.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})}},2981:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var r=s(5893),i=s(7294),n=s(8193),a=s(8138),c=s(3744),l=s(5675),o=s.n(l),d=s(9583),u=e=>{let{searchTerm:t,setSearchTerm:s,suggestions:n,...a}=e,[c,l]=(0,i.useState)(!1),[u,h]=(0,i.useState)([]),m=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let x=e=>{s("".concat(e.deviceName," ").concat(e.productName)),l(!1),h([])},j=(e,t)=>{let s=e.productName.toLowerCase().indexOf(t.toLowerCase()),i=e.productName.slice(0,s),n=e.productName.slice(s,s+t.length),a=e.productName.slice(s+t.length);return(0,r.jsxs)("div",{className:"inline-flex justify-between w-full",children:[(0,r.jsxs)("span",{className:"text-left",children:[i,(0,r.jsx)("span",{className:"font-semibold underline",children:n}),a]}),(0,r.jsx)("span",{className:"text-right text-grey-light-3",children:e.deviceName})]})};return(0,r.jsx)("div",{className:"flex justify-between items-center",ref:m,children:(0,r.jsxs)("div",{className:"relative w-[20rem]",children:[(0,r.jsx)("input",{type:"text",placeholder:c?"":"Search",value:t,onChange:e=>{s(e.target.value);let t=e.target.value.toLowerCase(),r=n.filter(e=>e.deviceName.toLowerCase().includes(t)||e.productName.toLowerCase().includes(t));h(r)},onFocus:()=>l(!0),className:"w-[20rem] pl-10 py-2 bg-grey-light-2 placeholder-grey-dark-1 text-dark font-core-sans rounded outline-blue-dark-2 active:outline-blue-dark-2 focus:outline-blue-dark-2 hover:outline-blue-dark-2",...a}),(0,r.jsx)("div",{className:"absolute left-2 top-1/2 transform -translate-y-1/2",children:(0,r.jsx)(o(),{src:"search.svg",height:24,width:24,className:"rounded",alt:"Search"})}),t&&(0,r.jsx)("div",{className:"absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer",children:(0,r.jsx)(d.aHS,{onClick:()=>s("")})}),c&&u.length?(0,r.jsx)("div",{className:"absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg",children:(0,r.jsx)("div",{className:"py-1",children:u.map((e,s)=>(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("button",{className:"px-4 py-2 text-sm text-grey-dark-2 hover:bg-grey-light-4 transition-all cursor-pointer z-50 w-full",onClick:()=>x(e),children:j(e,t)})},s))})}):null]})})},h=s(966),m=e=>{let{children:t}=e;return(0,r.jsx)("button",{className:"transition duration-100 p-1 rounded font-bold hover:bg-grey-light-2 text-grey-light-3 focus:border-2 focus:border-blue-dark-1",children:t})},x=e=>{let{children:t,isHeader:s=!1}=e,i="border-b-2 border-grey-light-2 hover:bg-grey-light-2 focus:border-t-1 focus:border-b-1 focus:border-blue-dark-1 p-2";return s?(0,r.jsx)("th",{className:i,children:t}):(0,r.jsx)("td",{className:i,children:t})},j=s(1664),p=s.n(j),g=e=>{let{href:t,children:s}=e;return(0,r.jsx)("div",{className:"focus:border-blue-dark-1 focus:my-2",children:(0,r.jsx)(p(),{href:t,children:s})})},f=e=>{let t,s,{device:i,w:n,h:a}=e;if(n&&a){var c;[t,s]=(null===(c=i.icon.resolutions.find(e=>{let[t,s]=e.map(e=>Number(e));return t>=n&&s>=a}))||void 0===c?void 0:c.map(e=>Number(e)))||[48,48]}else[t,s]=i.icon.resolutions[0].map(e=>Number(e))||[48,48];return(0,r.jsx)(o(),{src:"https://static.ui.com/fingerprint/ui/icons/".concat(i.icon.id,"_").concat(t,"x").concat(s,".png"),alt:i.product.name,width:n,height:a})},v=e=>{let{devices:t}=e;return(0,r.jsx)("div",{className:"h-[84.9vh] overflow-y-auto hide-scrollbar",children:(0,r.jsxs)("table",{className:"table-auto w-full",children:[(0,r.jsx)("thead",{className:"sticky top-0 bg-white",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"w-[2%] sticky top-0"}),(0,r.jsx)("th",{className:"text-left w-[43%] sticky top-0",children:"Product Line"}),(0,r.jsx)("th",{className:"text-left w-auto sticky top-0",children:"Name"})]})}),(0,r.jsx)("tbody",{className:"overflow-y-auto",children:t.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)(x,{children:(0,r.jsx)(f,{device:e,w:24,h:24})}),(0,r.jsx)(x,{children:e.line.name}),(0,r.jsx)(x,{children:(0,r.jsx)(g,{href:"/devices/".concat(e.id),children:e.product.name})})]},e.id))})]})})},b=e=>{let{devices:t}=e;return(0,r.jsx)("div",{className:"grid grid-cols-3 gap-4",children:t.map(e=>(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(f,{device:e,w:84,h:84}),(0,r.jsx)("h3",{children:e.product.name}),(0,r.jsx)("p",{children:e.line.name})]},e.id))})},N=s(7297),w=s(9008),y=s.n(w),k=e=>{let{title:t}=e,s="Project for Ubiquiti",i="Some fancy description may go here.";return(0,r.jsxs)(y(),{children:[t?(0,r.jsx)("title",{children:t}):(0,r.jsx)("title",{children:"Ubiquiti Project"}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{property:"og:url",content:"http://okami.codes/Ubiquiti-Project"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{property:"og:image",content:"logo.svg"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:domain",content:"okami.codes/Ubiquiti-Project"}),(0,r.jsx)("meta",{property:"twitter:url",content:"http://okami.codes/Ubiquiti-Project"}),(0,r.jsx)("meta",{name:"twitter:title",content:s}),(0,r.jsx)("meta",{name:"twitter:description",content:i}),(0,r.jsx)("meta",{name:"twitter:image",content:"".concat("http://okami.codes/Ubiquiti-Project","/logo.svg")})]})};function _(){let[e,t]=(0,i.useState)(""),[s,l]=(0,i.useState)("table"),{data:o,loading:d}=(0,c.r)();if(d)return(0,r.jsx)(h.Z,{children:(0,r.jsx)(N.Z,{})});let x=(null==o?void 0:o.devices.filter(t=>{let s=e.toLowerCase(),r=t.product.name.toLowerCase(),i=t.shortnames[t.shortnames.length-1].toLowerCase();return i.includes(s)||i.toLowerCase().includes(s)||"".concat(i," ").concat(r).includes(s)}))||[];return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(k,{title:"Devices"}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,r.jsxs)("span",{className:"flex space-x-4",children:[(0,r.jsx)(u,{searchTerm:e,setSearchTerm:t,suggestions:(null==o?void 0:o.devices.map(e=>({productName:e.product.name,deviceName:e.shortnames[e.shortnames.length-1]})))||[]}),(0,r.jsxs)("div",{className:"my-auto text-grey-light-5",children:[x.length," Devices"]})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,r.jsx)(m,{children:(0,r.jsx)(n.t5C,{size:"20px",onClick:()=>l("table")})}),(0,r.jsx)(m,{children:(0,r.jsx)(a.r$D,{size:"20px",onClick:()=>l("grid")})})]})]}),(0,r.jsx)("main",{className:"mt-10",children:"table"===s?(0,r.jsx)(v,{devices:x}):(0,r.jsx)(b,{devices:x})})]})]})}}},function(e){e.O(0,[445,401,617,675,664,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);