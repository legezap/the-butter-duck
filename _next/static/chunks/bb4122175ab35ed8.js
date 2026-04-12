(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20770,e=>{"use strict";var s=e.i(43476),t=e.i(46932),n=e.i(87652),a=e.i(72328),r=e.i(71645);let l={up:{hidden:{opacity:0,y:24},visible:{opacity:1,y:0}},down:{hidden:{opacity:0,y:-24},visible:{opacity:1,y:0}},left:{hidden:{opacity:0,x:-24},visible:{opacity:1,x:0}},right:{hidden:{opacity:0,x:24},visible:{opacity:1,x:0}},scale:{hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},clip:{hidden:{clipPath:"polygon(0 0, 0 0, 0 100%, 0 100%)"},visible:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}};function i({children:e,className:i,style:c,delay:o=0,direction:d="up"}){let h=(0,r.useRef)(null),u=(0,n.useInView)(h,{once:!0,amount:.1}),m=(0,a.useReducedMotion)(),{hidden:p,visible:x}=l[d];return m?(0,s.jsx)("div",{className:i,style:c,children:e}):(0,s.jsx)(t.motion.div,{ref:h,className:i,style:c,initial:p,animate:u?x:p,transition:{duration:.6,ease:[.16,1,.3,1],delay:o},children:e})}e.s(["default",()=>i])},19697,e=>{"use strict";var s=e.i(43476),t=e.i(87652),n=e.i(72328),a=e.i(71645);function r({target:e,suffix:r="",prefix:l="",duration:i=2e3,className:c}){let o=(0,a.useRef)(null),d=(0,t.useInView)(o,{once:!0,amount:.1}),h=(0,n.useReducedMotion)(),[u,m]=(0,a.useState)(0),p=(0,a.useRef)(!1),x=(0,a.useCallback)(()=>{if(p.current)return;p.current=!0;let s=performance.now();requestAnimationFrame(function t(n){let a=Math.min((n-s)/i,1);m(Math.round((1-Math.pow(1-a,3))*e)),a<1&&requestAnimationFrame(t)})},[e,i]);return(0,a.useEffect)(()=>{if(h){p.current=!0,requestAnimationFrame(()=>m(e));return}d&&x()},[x,d,h,e]),(0,s.jsxs)("span",{ref:o,className:c,children:[l,u,r]})}e.s(["default",()=>r])},38200,e=>{"use strict";var s=e.i(43476),t=e.i(71645);function n({children:e,className:n,speed:a=25}){let r=(0,t.useRef)(null),l=(0,t.useRef)(0),i=(0,t.useRef)(0),c=(0,t.useRef)(0),o=(0,t.useRef)(!1),d=(0,t.useRef)(!1),[h,u]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=r.current;if(!e)return;let s=window.matchMedia("(prefers-reduced-motion: reduce)");o.current=s.matches;let t=()=>{o.current=s.matches};s.addEventListener("change",t);let n=new IntersectionObserver(([e])=>{d.current=e.isIntersecting,u(e.isIntersecting)},{rootMargin:"50px"});n.observe(e);let h=()=>{if(!d.current){c.current=requestAnimationFrame(h);return}if(o.current){e&&(e.style.transform=""),c.current=requestAnimationFrame(h);return}(()=>{if(!e||o.current)return;let s=e.getBoundingClientRect(),t=window.innerHeight;i.current=-((s.top+s.height/2-t/2)/t)*a})(),l.current+=(i.current-l.current)*.08,e.style.transform=`translate3d(0, ${l.current}px, 0) scale(1.03)`,c.current=requestAnimationFrame(h)};return c.current=requestAnimationFrame(h),()=>{cancelAnimationFrame(c.current),s.removeEventListener("change",t),n.disconnect()}},[a]),(0,s.jsx)("div",{ref:r,className:`${n||""}${h?" parallax-active":""}`,children:e})}e.s(["default",()=>n])},94590,e=>{"use strict";var s=e.i(43476),t=e.i(57688),n=e.i(22016),a=e.i(20770),r=e.i(19697),l=e.i(38200),i=e.i(71645);function c({images:e,alt:n}){let[a,r]=(0,i.useState)(null),l=(0,i.useRef)(null),c=(0,i.useRef)(null),o=(0,i.useRef)(null),d=(0,i.useRef)(null),h=(0,i.useRef)(null),u=(0,i.useCallback)(()=>r(null),[]),m=(0,i.useCallback)(()=>r(s=>null!==s?(s-1+e.length)%e.length:null),[e.length]),p=(0,i.useCallback)(()=>r(s=>null!==s?(s+1)%e.length:null),[e.length]);return((0,i.useEffect)(()=>{if(null===a)return;let e=e=>{if("Escape"===e.key&&u(),"ArrowLeft"===e.key&&m(),"ArrowRight"===e.key&&p(),"Tab"===e.key){let s=[l.current,c.current,o.current].filter(e=>null!==e);if(0===s.length)return;let t=s[0],n=s[s.length-1];e.shiftKey?document.activeElement===t&&(e.preventDefault(),n.focus()):document.activeElement===n&&(e.preventDefault(),t.focus())}};return document.body.style.overflow="hidden",setTimeout(()=>l.current?.focus(),50),window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}},[a,u,m,p]),e.length)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",{className:"section-pad",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("span",{className:"section-label section-header-center",children:"Gallery"}),(0,s.jsxs)("h2",{className:"section-title-center",style:{marginBottom:48},children:["Project ",(0,s.jsx)("span",{className:"accent",children:"Photos"})]}),(0,s.jsx)("div",{className:"gallery-grid",children:e.map((e,a)=>(0,s.jsxs)("button",{className:"gallery-item",onClick:()=>r(a),"aria-label":`View photo ${a+1}`,children:[(0,s.jsx)(t.default,{src:e,alt:`${n} — photo ${a+1}`,width:800,height:600,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,s.jsx)("div",{className:"gallery-zoom",children:(0,s.jsx)("span",{children:"⤢"})})]},a))})]})}),null!==a&&(0,s.jsxs)("div",{ref:d,className:"lightbox",role:"dialog","aria-modal":"true","aria-label":"Image lightbox",onClick:u,children:[(0,s.jsxs)("div",{className:"lightbox-content",onClick:e=>e.stopPropagation(),onTouchStart:e=>{h.current=e.touches[0].clientX},onTouchEnd:e=>{if(null===h.current)return;let s=e.changedTouches[0].clientX-h.current;s>50?m():s<-50&&p(),h.current=null},children:[(0,s.jsx)(t.default,{src:e[a],alt:`${n} — photo ${a+1}`,width:1920,height:1080,style:{width:"100%",height:"auto",maxHeight:"85vh",objectFit:"contain"},priority:!0}),(0,s.jsxs)("div",{className:"lightbox-counter",children:[a+1," / ",e.length]})]}),(0,s.jsx)("button",{ref:l,className:"lightbox-close",onClick:u,"aria-label":"Close lightbox",children:"×"}),(0,s.jsx)("button",{ref:c,className:"lightbox-nav lightbox-prev",onClick:e=>{e.stopPropagation(),m()},"aria-label":"Previous photo",children:"‹"}),(0,s.jsx)("button",{ref:o,className:"lightbox-nav lightbox-next",onClick:e=>{e.stopPropagation(),p()},"aria-label":"Next photo",children:"›"})]})]}):null}function o({renders:e,photos:n}){if(0===e.length)return null;let r=Math.min(e.length,n.length),l=e.slice(0,r).map((e,s)=>({render:e,photo:n[s]}));return(0,s.jsx)("section",{className:"section-pad",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("span",{className:"section-label",style:{textAlign:"center",display:"block"},children:"Render vs Reality"}),(0,s.jsxs)("h2",{style:{textAlign:"center",marginBottom:56},children:["From ",(0,s.jsx)("span",{className:"accent",children:"Design"})," to Build"]})]}),(0,s.jsx)("div",{className:"rvr-grid",children:l.map((e,n)=>(0,s.jsx)(a.default,{delay:.1*n,children:(0,s.jsxs)("div",{className:"rvr-pair",children:[(0,s.jsxs)("div",{className:"rvr-side",children:[(0,s.jsx)(t.default,{src:e.render,alt:`Design render ${n+1}`,width:800,height:500,style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,s.jsx)("span",{className:"rvr-label render",children:"Design Render"})]}),(0,s.jsxs)("div",{className:"rvr-side",children:[(0,s.jsx)(t.default,{src:e.photo,alt:`Final build ${n+1}`,width:800,height:500,style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,s.jsx)("span",{className:"rvr-label reality",children:"Final Build"})]})]})},n))})]})})}var d=e.i(46932),h=e.i(87652);let u=[/\b\d[\d,]*\.?\d*\s*(?:sqm|sq\.?\s*m|mm|cm|m²|kg\/sqm|A|kW|dB|K|%|metres?|meters?|days?|hours?|minutes?)\b/gi,/\b\d[\d,]*\+?\b(?=\s+(?:visitor|guest|lead|meeting|deal|SKU|product|share|piece|project|edition|stand|photo|media|countries|people))/gi,/\b\d{1,3}(?:,\d{3})+\b/g,/\b\d+\.?\d*\s*%/g,/\b(?:IPE\s*\d+|\d+x\d+\s*mm|RGBW|DMX|CNC|RCD|UV-cured)\b/gi,/\b\d+-(?:day|storey|metre|meter|phase)\b/gi,/\b(?:LED|AV|HVAC|USB|3D|AR\/VR)\b/g],m=[/\b(?:CreatistaPlus|LEAP|ADIPEC|Intersec|Gulfood|Breakbulk|Airport\s*Show|Civil\s*Defence|Saudi|Riyadh|Dubai|Abu\s*Dhabi|Al\s*Serkal|Global\s*Tech\s*Leader|Premium\s*Lighting\s*Brand|Luxury\s*Beverage\s*Brand|Industrial\s*Automation\s*Leader|Regional\s*Freight\s*Forwarder|Consumer\s*Electronics\s*Brand|Specialty\s*Chemicals\s*Corporation|F&B\s*Distribution\s*Group|Security\s*Solutions\s*Provider)\b/gi],p=`
/* --- Neural Section scoped styles --- */

.nrl-wrap {
  position: relative;
  overflow: hidden;
  background: var(--color-bg-card, #0a0a0a);
  padding: 120px 0;
}
@media (max-width: 768px) {
  .nrl-wrap { padding: 64px 0; }
}

/* Floating dots background */
.nrl-dots {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

@keyframes nrl-float {
  0%, 100% { opacity: 0.1; transform: translateY(0); }
  50% { opacity: 0.25; transform: translateY(-8px); }
}

.nrl-dot {
  fill: var(--color-accent, #fcd940);
  opacity: 0.1;
  animation: nrl-float 7s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

/* Content layer */
.nrl-content {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 32px;
}

.nrl-header {
  text-align: center;
  margin-bottom: 72px;
}

.nrl-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent, #fcd940);
  font-weight: 600;
  margin-bottom: 16px;
  display: block;
  font-family: var(--font-body, "DM Sans", sans-serif);
}

.nrl-title {
  font-family: var(--font-heading, "Plus Jakarta Sans", sans-serif);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--color-text-primary, #fff);
}

/* Node grid */
.nrl-nodes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}
.nrl-nodes--single {
  grid-template-columns: 1fr;
  max-width: 700px;
}
@media (max-width: 768px) {
  .nrl-nodes { grid-template-columns: 1fr; gap: 16px; }
}

/* Individual node card */
.nrl-node {
  position: relative;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-light, rgba(255,255,255,0.1));
  border-radius: var(--radius-default, 12px);
  padding: 28px 28px 28px 72px;
  min-height: 100px;
  display: flex;
  align-items: center;
  transition: border-color 0.4s ease, background 0.4s ease;
}

.nrl-node:hover {
  border-color: var(--color-accent-20);
  background: rgba(255, 255, 255, 0.04);
}

/* Challenge variant: warm border tint on hover */
.nrl-wrap--challenge .nrl-node:hover {
  border-color: rgba(255, 160, 60, 0.25);
}

/* Step number */
.nrl-step {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-heading, "Plus Jakarta Sans", sans-serif);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-accent, #fcd940);
  opacity: 0.35;
  letter-spacing: -0.02em;
  line-height: 1;
}

/* Challenge variant step color */
.nrl-wrap--challenge .nrl-step {
  color: #ffa03c;
}

/* Node text */
.nrl-text {
  font-family: var(--font-body, "DM Sans", sans-serif);
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text-muted, #999);
}

/* Highlighted key terms — static styling, no animation */
.nrl-hl {
  color: var(--color-text-primary, #fff);
  font-weight: 600;
  position: relative;
  display: inline;
  background: linear-gradient(180deg, transparent 65%, var(--color-accent-08) 65%);
  transition: color 0.3s ease;
}

.nrl-hl:hover {
  color: var(--color-accent, #fcd940);
}

/* Challenge variant: orange-tinted highlights */
.nrl-wrap--challenge .nrl-hl {
  background: linear-gradient(180deg, transparent 65%, rgba(255, 160, 60, 0.08) 65%);
}
.nrl-wrap--challenge .nrl-hl:hover {
  color: #ffa03c;
}

/* Solution checkmark */
.nrl-check {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(80, 200, 120, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nrl-check svg {
  width: 10px;
  height: 10px;
}

/* Connector dots between cards */
.nrl-connector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
}
.nrl-connector-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-accent, #fcd940);
  opacity: 0.2;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .nrl-hl { transition: none; }
  .nrl-dot { animation: none !important; opacity: 0.08; }
}
`;function x({label:e,title:t,text:n,variant:a="solution"}){let r=(0,i.useMemo)(()=>{let e;return(e=n.match(/[^.!?]+[.!?]+[\s]?|[^.!?]+$/g))?e.map(e=>e.trim()).filter(Boolean):[n]},[n]),l=(0,i.useMemo)(()=>{let e,s;return e="challenge"===a?42:137,s=()=>((e=16807*e%0x7fffffff)-1)/0x7ffffffe,Array.from({length:20},(e,t)=>({cx:1400*s(),cy:800*s(),r:1+1.5*s(),delay:8*s()}))},[a]),c="challenge"===a;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:p}}),(0,s.jsxs)("section",{className:`nrl-wrap nrl-wrap--${a}`,children:[(0,s.jsx)("svg",{className:"nrl-dots",viewBox:"0 0 1400 800",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:l.map((e,t)=>(0,s.jsx)("circle",{cx:e.cx,cy:e.cy,r:e.r,className:"nrl-dot",style:{animationDelay:`${e.delay}s`}},t))}),(0,s.jsxs)("div",{className:"nrl-content",children:[(0,s.jsxs)("div",{className:"nrl-header",children:[(0,s.jsx)("span",{className:"nrl-label",children:e}),(0,s.jsx)("h2",{className:"nrl-title",children:t})]}),(0,s.jsx)("div",{className:`nrl-nodes${r.length<=2?" nrl-nodes--single":""}`,children:r.map((e,t)=>(0,s.jsx)(g,{index:t,sentence:e,isChallenge:c,total:r.length},t))})]})]})]})}function g({index:e,sentence:t,isChallenge:n,total:a}){let r=(0,i.useRef)(null),l=(0,h.useInView)(r,{once:!0,amount:.25}),c=String(e+1).padStart(2,"0");return(0,s.jsxs)(d.motion.div,{ref:r,className:"nrl-node",initial:{opacity:0,y:28},animate:l?{opacity:1,y:0}:{opacity:0,y:28},transition:{duration:.6,ease:[.16,1,.3,1],delay:.12*e},children:[(0,s.jsx)("span",{className:"nrl-step",children:c}),(0,s.jsx)("p",{className:"nrl-text",children:(function(e){let s=[];for(let t of[...u,...m]){let n,a=new RegExp(t.source,t.flags);for(;null!==(n=a.exec(e));)s.push({start:n.index,end:n.index+n[0].length,value:n[0]})}if(0===s.length)return[e];s.sort((e,s)=>e.start-s.start);let t=[];for(let n of s){let s=t[t.length-1];s&&n.start<s.end?(n.end>s.end&&(s.end=n.end),s.value=e.slice(s.start,s.end)):t.push({...n})}let n=[],a=0;for(let s of t)s.start>a&&n.push(e.slice(a,s.start)),n.push({type:"hl",value:s.value}),a=s.end;return a<e.length&&n.push(e.slice(a)),n})(t).map((e,t)=>"string"==typeof e?e:(0,s.jsx)("span",{className:"nrl-hl",children:e.value},t))}),!n&&(0,s.jsx)("span",{className:"nrl-check",children:(0,s.jsx)("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M2.5 6.5L5 9L9.5 3.5",stroke:"rgba(80,200,120,0.7)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}var f=e.i(74206);function j({project:e,prev:i,next:d}){let{t:h,locale:u}=(0,f.useI18n)(),m="ar"===u,p=m&&e.overview_ar||e.overview,g=m&&e.challenge_ar||e.challenge,j=m&&e.solution_ar||e.solution,v=m&&e.features_ar||e.features,b=m&&e.results_ar||e.results,y=e.gallery.filter(e=>e.includes("-render-")),N=e.gallery.filter(e=>!e.includes("-render-")),w=[(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})},"f0"),(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})},"f1"),(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"6"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"2"})]},"f2"),(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,s.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]},"f3")];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify([{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://thebutterduck.com"},{"@type":"ListItem",position:2,name:"Portfolio",item:"https://thebutterduck.com/portfolio"},{"@type":"ListItem",position:3,name:`${e.client} ${e.event}`,item:`https://thebutterduck.com/projects/${e.slug}`}]},{"@context":"https://schema.org","@type":"CreativeWork",name:`${e.client} ${e.event} Exhibition Stand`,description:p,creator:{"@type":"Organization",name:"The Butter Duck"},image:e.image,locationCreated:{"@type":"Place",name:e.location}}])}}),(0,s.jsx)("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"bc-inner",children:[(0,s.jsx)(n.default,{href:"/",children:h("bc.home")}),(0,s.jsx)("span",{className:"sep",children:"/"}),(0,s.jsx)(n.default,{href:"/portfolio",children:h("bc.portfolio")}),(0,s.jsx)("span",{className:"sep",children:"/"}),(0,s.jsxs)("span",{className:"current",children:[e.client," ",e.event]})]})})}),(0,s.jsxs)("section",{className:"hero",style:{minHeight:"70vh"},children:[(0,s.jsx)(l.default,{className:"hero-bg",children:(0,s.jsx)(t.default,{src:e.image,alt:`${e.client} ${e.event}`,fill:!0,priority:!0,className:"hero-bg-img",style:{objectFit:"cover"}})}),(0,s.jsx)("div",{className:"hero-overlay"}),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("span",{className:"hero-badge",children:(m&&e.tags_ar||e.tags).join(" / ")})}),(0,s.jsx)(a.default,{delay:.1,children:(0,s.jsxs)("h1",{children:[e.client,(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"accent",children:e.event})]})}),(0,s.jsx)(a.default,{delay:.2,children:(0,s.jsxs)("p",{className:"hero-sub",children:[e.size," • ",e.location]})})]})})]}),(0,s.jsx)("section",{className:"section-pad",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"about-grid",children:[(0,s.jsxs)("div",{className:"sd-text",children:[(0,s.jsx)("span",{className:"section-label",children:h("case.overview")}),(0,s.jsx)("h2",{children:h("case.overview.title")}),(0,s.jsx)("p",{children:p})]}),(0,s.jsxs)("div",{className:"specs-card",children:[(0,s.jsxs)("h3",{style:{marginBottom:24},children:[h("case.specs.title")," ",(0,s.jsx)("span",{className:"accent",children:h("case.specs.title.accent")})]}),(0,s.jsxs)("div",{className:"specs-list",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-muted specs-label",children:h("case.specs.client")}),(0,s.jsx)("p",{className:"specs-value",children:e.client})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-muted specs-label",children:h("case.specs.event")}),(0,s.jsx)("p",{className:"specs-value",children:e.event})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-muted specs-label",children:h("case.specs.location")}),(0,s.jsx)("p",{className:"specs-value",children:e.location})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-muted specs-label",children:h("case.specs.size")}),(0,s.jsx)("p",{className:"specs-value",children:e.size})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-muted specs-label",children:h("case.specs.type")}),(0,s.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:8},children:(m&&e.tags_ar||e.tags).map(e=>(0,s.jsx)("span",{className:"tag",children:e},e))})]})]})]})]})})}),(0,s.jsx)(x,{label:h("case.challenge"),title:h("case.challenge.title"),text:g,variant:"challenge"}),(0,s.jsx)(x,{label:h("case.solution"),title:h("case.solution.title"),text:j,variant:"solution"}),N.length>0&&(0,s.jsx)(c,{images:N,alt:`${e.client} ${e.event}`}),y.length>0&&(0,s.jsx)(o,{renders:y,photos:N}),(0,s.jsx)("section",{className:"section-bg-card",style:{padding:"72px 0"},children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("span",{className:"section-label section-header-center",children:h("case.features")}),(0,s.jsxs)("h2",{className:"section-title-center mb-56",children:[h("case.features.title")," ",(0,s.jsx)("span",{className:"accent",children:h("case.features.title.accent")})]})]}),(0,s.jsx)("div",{className:"services-grid",children:v.map((e,t)=>(0,s.jsxs)("div",{className:"service-card",children:[(0,s.jsx)("div",{className:"service-icon",children:w[t%w.length]}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.description})]},e.title))})]})}),(0,s.jsx)("section",{className:"section-pad",children:(0,s.jsxs)("div",{className:"container",style:{maxWidth:800},children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("span",{className:"section-label",children:h("case.results")}),(0,s.jsxs)("h2",{className:"mb-32",children:[h("case.results.title")," ",(0,s.jsx)("span",{className:"accent",children:h("case.results.title.accent")})]})]}),(0,s.jsx)("ul",{className:"result-list",children:b.map((e,t)=>(0,s.jsx)("li",{className:"result-item",children:e},t))})]})}),(0,s.jsx)("section",{className:"stats-section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"stats-grid",children:e.stats.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"stat-num",children:(0,s.jsx)(r.default,{target:e.value,suffix:e.suffix})}),(0,s.jsx)("p",{className:"stat-text",children:e.label})]},e.label))})})}),(0,s.jsx)("section",{className:"cta-section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)(a.default,{children:[(0,s.jsx)("h2",{children:h("case.cta")}),(0,s.jsx)("p",{children:h("case.cta.desc")}),(0,s.jsxs)(n.default,{href:"/contact#rfp-form",className:"btn btn-lg",children:[h("cta.start")," ",(0,s.jsx)("span",{className:"arrow",children:"→"})]})]})})}),(0,s.jsx)("section",{className:"prev-next-nav",children:(0,s.jsxs)("div",{className:"container prev-next-inner",children:[i?(0,s.jsxs)(n.default,{href:`/projects/${i.slug}`,className:"btn btn-ghost",children:[(0,s.jsx)("span",{className:"arrow",style:{transform:"rotate(180deg)"},children:"→"})," ",i.client," ",i.event]}):(0,s.jsx)("span",{}),d?(0,s.jsxs)(n.default,{href:`/projects/${d.slug}`,className:"btn btn-ghost",style:{marginLeft:"auto"},children:[d.client," ",d.event," ",(0,s.jsx)("span",{className:"arrow",children:"→"})]}):(0,s.jsxs)(n.default,{href:"/portfolio",className:"btn btn-ghost",style:{marginLeft:"auto"},children:[h("case.allprojects")," ",(0,s.jsx)("span",{className:"arrow",children:"→"})]})]})})]})}e.s(["default",()=>j],94590)}]);