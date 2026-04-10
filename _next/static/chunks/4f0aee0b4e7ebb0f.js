(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,14616,e=>{"use strict";var a=e.i(43476),t=e.i(71645);function s({count:e=18,seed:s=42}){let r=(0,t.useMemo)(()=>{let a,t;return a=s,t=()=>((a=16807*a%0x7fffffff)-1)/0x7ffffffe,Array.from({length:e},()=>({cx:100*t(),cy:100*t(),r:1+1.5*t(),delay:8*t(),dur:5+4*t()}))},[e,s]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .amb-dots { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        .amb-dots svg { width: 100%; height: 100%; }
        @keyframes ambFloat {
          0%, 100% { opacity: 0.08; transform: translateY(0); }
          50% { opacity: 0.2; transform: translateY(-6px); }
        }
        .amb-dot {
          fill: var(--color-accent, #fcd940);
          opacity: 0.08;
          animation: ambFloat 6s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @media (prefers-reduced-motion: reduce) {
          .amb-dot { animation: none !important; opacity: 0.06; }
        }
      `}}),(0,a.jsx)("div",{className:"amb-dots","aria-hidden":"true",children:(0,a.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice",children:r.map((e,t)=>(0,a.jsx)("circle",{className:"amb-dot",cx:e.cx,cy:e.cy,r:e.r,style:{animationDelay:`${e.delay}s`,animationDuration:`${e.dur}s`}},t))})})]})}e.s(["default",()=>s])},19697,e=>{"use strict";var a=e.i(43476),t=e.i(87652),s=e.i(72328),r=e.i(71645);function i({target:e,suffix:i="",prefix:l="",duration:c=2e3,className:n}){let o=(0,r.useRef)(null),d=(0,t.useInView)(o,{once:!0,amount:.1}),p=(0,s.useReducedMotion)(),[u,h]=(0,r.useState)(0),m=(0,r.useRef)(!1),x=(0,r.useCallback)(()=>{if(m.current)return;m.current=!0;let a=performance.now();requestAnimationFrame(function t(s){let r=Math.min((s-a)/c,1);h(Math.round((1-Math.pow(1-r,3))*e)),r<1&&requestAnimationFrame(t)})},[e,c]);return(0,r.useEffect)(()=>{if(p){m.current=!0,requestAnimationFrame(()=>h(e));return}d&&x()},[x,d,p,e]),(0,a.jsxs)("span",{ref:o,className:n,children:[l,u,i]})}e.s(["default",()=>i])},61642,e=>{"use strict";var a=e.i(43476),t=e.i(57688),s=e.i(22016),r=e.i(20770),i=e.i(14616),l=e.i(71645),c=e.i(46932),n=e.i(87652);let o=[{title:"aboutpage.values.v1.title",desc:"aboutpage.values.v1.desc"},{title:"aboutpage.values.v2.title",desc:"aboutpage.values.v2.desc"},{title:"aboutpage.values.v3.title",desc:"aboutpage.values.v3.desc"},{title:"aboutpage.values.v4.title",desc:"aboutpage.values.v4.desc"},{title:"aboutpage.values.v5.title",desc:"aboutpage.values.v5.desc"},{title:"aboutpage.values.v6.title",desc:"aboutpage.values.v6.desc"}],d=["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4v6l4 2","M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z","M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2zM8 8h8M8 12h6M8 16h4","M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z","M6 3h12l4 6-10 13L2 9zM2 9h20M10 3l-4 6 6 13 6-13-4-6","M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"],p=["aboutpage.cap.3d","aboutpage.cap.structural","aboutpage.cap.fabrication","aboutpage.cap.av","aboutpage.cap.logistics","aboutpage.cap.installation","aboutpage.cap.graphic","aboutpage.cap.content","aboutpage.cap.branding","aboutpage.cap.finance","aboutpage.cap.comms"],u=["M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12","M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5","M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z","M2 3h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 21h8M12 17v4","M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z","M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z","M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z","M2 2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5","M12 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM8.21 13.89 7 23l5-3 5 3-1.21-9.12","M18 20V10M12 20V4M6 20v-6","M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"];var h=e.i(74206);function m({index:e,title:t,desc:s}){let r=(0,l.useRef)(null),i=(0,n.useInView)(r,{once:!0,amount:.4}),[o,p]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(i){let a=setTimeout(()=>p(!0),120*e);return()=>clearTimeout(a)}},[i,e]),(0,a.jsxs)(c.motion.div,{ref:r,className:"vs-card",initial:{opacity:0,y:32},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1*e,ease:[.16,1,.3,1]},children:[(0,a.jsx)("div",{className:"vs-icon-wrap",children:(0,a.jsx)("svg",{className:"vs-svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:d[e],className:`vs-path ${o?"vs-drawn":""}`})})}),(0,a.jsx)("h3",{className:"vs-title",children:t}),(0,a.jsx)("p",{className:"vs-desc",children:s})]})}function x(){let{t:e}=(0,h.useI18n)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .vs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .vs-card {
          position: relative;
          padding: 48px 32px 40px;
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-large, 20px);
          background: var(--color-bg-card);
          cursor: default;
          transition: border-color 0.4s ease;
        }

        .vs-card:hover {
          border-color: rgba(252, 217, 64, 0.35);
        }

        /* Icon wrapper */
        .vs-icon-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .vs-icon-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(252, 217, 64, 0.12);
          background: linear-gradient(135deg, rgba(252, 217, 64, 0.06) 0%, transparent 60%);
        }

        /* SVG icon */
        .vs-svg {
          position: relative;
          z-index: 1;
          color: var(--color-accent);
        }

        /* Stroke draw animation */
        .vs-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .vs-path.vs-drawn {
          stroke-dashoffset: 0;
        }

        .vs-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .vs-desc {
          color: var(--color-text-muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .vs-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }

        @media (max-width: 600px) {
          .vs-grid { grid-template-columns: 1fr; gap: 20px; }
          .vs-card { padding: 36px 24px 32px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-path { stroke-dasharray: none !important; stroke-dashoffset: 0 !important; transition: none !important; }
        }
      `}}),(0,a.jsx)("section",{className:"section-pad",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("span",{className:"section-label",style:{textAlign:"center",display:"block"},children:e("aboutpage.values.label")}),(0,a.jsxs)("h2",{style:{textAlign:"center",marginBottom:56},children:[e("aboutpage.values.title.alt")," ",(0,a.jsx)("span",{className:"accent",children:e("aboutpage.values.title.accent.alt")})]})]}),(0,a.jsx)("div",{className:"vs-grid",children:o.map((t,s)=>(0,a.jsx)(m,{index:s,title:e(t.title),desc:e(t.desc)},t.title))})]})})]})}function g({index:e,label:t}){let s=(0,l.useRef)(null),r=(0,n.useInView)(s,{once:!0,amount:.5}),[i,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(r){let a=setTimeout(()=>o(!0),80*e);return()=>clearTimeout(a)}},[r,e]),(0,a.jsxs)(c.motion.div,{ref:s,className:"cap-card",initial:{opacity:0,scale:.92},animate:r?{opacity:1,scale:1}:{},transition:{duration:.5,delay:.06*e,ease:[.16,1,.3,1]},children:[(0,a.jsx)("div",{className:"cap-icon-wrap",children:(0,a.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"cap-svg",children:(0,a.jsx)("path",{d:u[e],className:`cap-path ${i?"cap-drawn":""}`})})}),(0,a.jsx)("h3",{className:"cap-label",children:t})]})}function b(){let{t:e}=(0,h.useI18n)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .cap-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          border-top: 1px solid var(--color-border-default);
          border-bottom: 1px solid var(--color-border-default);
        }

        .cap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }

        .cap-card {
          text-align: center;
          padding: 40px 16px 32px;
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-default);
          background: rgba(255,255,255,0.02);
          cursor: default;
          transition: border-color 0.4s ease;
        }

        .cap-card:hover {
          border-color: rgba(252,217,64,0.2);
        }

        .cap-icon-wrap {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.4s ease;
        }
        .cap-card:hover .cap-icon-wrap {
          border-color: rgba(252,217,64,0.25);
        }

        .cap-svg { color: var(--color-text-muted); transition: color 0.4s ease; }
        .cap-card:hover .cap-svg { color: var(--color-accent); }

        /* Stroke draw animation */
        .cap-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .cap-path.cap-drawn { stroke-dashoffset: 0; }

        .cap-label {
          font-size: 0.9rem;
          letter-spacing: -0.01em;
        }

        @media (prefers-reduced-motion: reduce) {
          .cap-path { stroke-dasharray: none !important; stroke-dashoffset: 0 !important; transition: none !important; }
        }
      `}}),(0,a.jsx)("section",{className:"cap-section",style:{background:"var(--color-bg-card)"},children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("span",{className:"section-label",style:{textAlign:"center",display:"block"},children:e("aboutpage.cap.label")}),(0,a.jsxs)("h2",{style:{textAlign:"center",marginBottom:56},children:[e("aboutpage.cap.title.alt")," ",(0,a.jsx)("span",{className:"accent",children:e("aboutpage.cap.title.accent.alt")})]})]}),(0,a.jsx)("div",{className:"cap-grid",children:p.map((t,s)=>(0,a.jsx)(g,{index:s,label:e(t)},t))})]})})]})}var v=e.i(19697);let f=[{target:80,suffix:"+",key:"stats.projects"},{target:10,suffix:"",key:"stats.countries"},{target:15,suffix:"+",key:"stats.industries"},{target:98,suffix:"%+",key:"stats.ontime"}];function j(){let{t:e}=(0,h.useI18n)();return(0,a.jsx)("section",{className:"stats-section",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(r.default,{children:(0,a.jsx)("div",{className:"stats-grid",children:f.map(t=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"stat-num",children:(0,a.jsx)(v.default,{target:t.target,suffix:t.suffix})}),(0,a.jsx)("div",{className:"stat-text",children:e(t.key)})]},t.key))})})})})}var y=e.i(52239);let M=["2019","2020","2021","2022","2024","2025"],N=[{title:"aboutpage.tl.2019.title",desc:"aboutpage.tl.2019.desc"},{title:"aboutpage.tl.2020.title",desc:"aboutpage.tl.2020.desc"},{title:"aboutpage.tl.2021.title",desc:"aboutpage.tl.2021.desc"},{title:"aboutpage.tl.2022.title",desc:"aboutpage.tl.2022.desc"},{title:"aboutpage.tl.2024.title",desc:"aboutpage.tl.2024.desc"},{title:"aboutpage.tl.2025.title",desc:"aboutpage.tl.2025.desc"}];function k(){let{t:e}=(0,h.useI18n)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"bc-inner",children:[(0,a.jsx)(s.default,{href:"/",children:e("bc.home")}),(0,a.jsx)("span",{className:"sep",children:"/"}),(0,a.jsx)("span",{className:"current",children:e("bc.about")})]})})}),(0,a.jsxs)("section",{className:"page-hero",children:[(0,a.jsx)(i.default,{seed:55}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)("span",{className:"section-label",children:e("aboutpage.hero.label")}),(0,a.jsxs)("h1",{children:[e("aboutpage.title"),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"accent",children:e("aboutpage.title.accent")})]}),(0,a.jsx)("p",{children:e("aboutpage.hero.desc")})]})})]}),(0,a.jsx)("section",{className:"section-pad",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"about-grid",children:[(0,a.jsxs)("div",{className:"sd-text",children:[(0,a.jsx)("span",{className:"section-label",children:e("aboutpage.story.label")}),(0,a.jsxs)("h2",{children:[e("aboutpage.story.title.alt")," ",(0,a.jsx)("span",{className:"accent",children:e("aboutpage.story.title.accent.alt")})]}),(0,a.jsx)("p",{className:"body-text",style:{marginBottom:16},children:e("aboutpage.story.p1")}),(0,a.jsx)("p",{className:"body-text",children:e("aboutpage.story.p2")})]}),(0,a.jsxs)("div",{className:"about-visual",children:[(0,a.jsx)("div",{className:"about-img",children:(0,a.jsx)(t.default,{src:(0,y.asset)("/assets/photos/duck-brand.jpg"),alt:"The Butter Duck UAE HQ",width:720,height:540,loading:"lazy",style:{width:"100%",height:"auto",objectFit:"cover"}})}),(0,a.jsx)("span",{className:"about-badge",children:e("aboutpage.story.badge")})]})]})})}),(0,a.jsx)(x,{}),(0,a.jsx)(b,{}),(0,a.jsx)("section",{className:"section-pad",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("span",{className:"section-label section-header-center",children:e("aboutpage.track.label.alt")}),(0,a.jsxs)("h2",{className:"section-title-center",style:{marginBottom:16},children:[e("aboutpage.track.title.alt")," ",(0,a.jsx)("span",{className:"accent",children:e("aboutpage.track.title.accent.alt")})]})]}),(0,a.jsx)("div",{className:"timeline",children:N.map((t,s)=>(0,a.jsxs)("div",{className:"tl-item",children:[(0,a.jsxs)("h3",{children:[M[s]," — ",e(t.title)]}),(0,a.jsx)("p",{children:e(t.desc)})]},M[s]))})]})}),(0,a.jsx)(j,{}),(0,a.jsx)("section",{className:"cta-section",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)("h2",{children:e("aboutpage.cta")}),(0,a.jsx)("p",{children:e("aboutpage.cta.desc")}),(0,a.jsxs)(s.default,{href:"/contact#rfp-form",className:"btn btn-lg",children:[e("aboutpage.cta.btn")," ",(0,a.jsx)("span",{className:"arrow",children:"→"})]})]})})})]})}e.s(["default",()=>k],61642)}]);