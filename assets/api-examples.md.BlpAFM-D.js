import{u as p,c as h,o as r,ba as o,j as a,t as e,k as i,a as s}from"./chunks/framework.CchczY-9.js";const d=o(`<h1 id="运行时-api-示例" tabindex="-1">运行时 API 示例 <a class="header-anchor" href="#运行时-api-示例" aria-label="Permalink to &quot;运行时 API 示例&quot;">​</a></h1><p>本页面展示了 VitePress 提供的一些运行时 API 的使用方法。</p><p>主要的 <code>useData()</code> API 可以用来访问当前页面的站点、主题和页面数据。它在 <code>.md</code> 和 <code>.vue</code> 文件中都可以使用：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 结果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 主题数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 页面数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 页面前置数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="结果" tabindex="-1">结果 <a class="header-anchor" href="#结果" aria-label="Permalink to &quot;结果&quot;">​</a></h2><h3 id="主题数据" tabindex="-1">主题数据 <a class="header-anchor" href="#主题数据" aria-label="Permalink to &quot;主题数据&quot;">​</a></h3>`,6),c=a("h3",{id:"页面数据",tabindex:"-1"},[s("页面数据 "),a("a",{class:"header-anchor",href:"#页面数据","aria-label":'Permalink to "页面数据"'},"​")],-1),k=a("h3",{id:"页面前置数据",tabindex:"-1"},[s("页面前置数据 "),a("a",{class:"header-anchor",href:"#页面前置数据","aria-label":'Permalink to "页面前置数据"'},"​")],-1),g=a("h2",{id:"更多内容",tabindex:"-1"},[s("更多内容 "),a("a",{class:"header-anchor",href:"#更多内容","aria-label":'Permalink to "更多内容"'},"​")],-1),_=a("p",null,[s("查看文档获取"),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"完整的运行时 API 列表"),s("。")],-1),y=JSON.parse('{"title":"运行时 API 示例","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md","lastUpdated":1738513456000}'),m={name:"api-examples.md"},x=Object.assign(m,{setup(u){const{site:E,theme:t,page:n,frontmatter:l}=p();return(b,f)=>(r(),h("div",null,[d,a("pre",null,e(i(t)),1),c,a("pre",null,e(i(n)),1),k,a("pre",null,e(i(l)),1),g,_]))}});export{y as __pageData,x as default};
