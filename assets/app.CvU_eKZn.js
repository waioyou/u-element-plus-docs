import{R as p}from"./chunks/theme.BeUs9qU0.js";import{U as s,aZ as i,a_ as u,a$ as c,b0 as l,b1 as f,b2 as d,b3 as m,b4 as b,b5 as h,b6 as g,d as A,u as y,y as v,x as w,b7 as C,b8 as P,b9 as R,aL as E}from"./chunks/framework.CchczY-9.js";function r(e){if(e.extends){const t=r(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=r(p),S=A({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=y();return v(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),P(),R(),n.setup&&n.setup(),()=>E(n.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=x(),t=_();t.provide(u,e);const a=c(e.route);return t.provide(l,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function _(){return g(S)}function x(){let e=s;return b(t=>{let a=h(t),o=null;return a&&(e&&(a=a.replace(/\.js$/,".lean.js")),o=import(a)),s&&(e=!1),o},n.NotFound)}s&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{i(t.route,a.site),e.mount("#app")})});export{T as createApp};
