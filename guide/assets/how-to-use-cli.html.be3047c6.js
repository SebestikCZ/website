import{r as n,o as a,c as e,a as s,b as t,w as o,F as r,d as l,f as c}from"./app.5d94a5ab.js";const i={},p=s("h1",{id:"what-is-a-cli",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-is-a-cli","aria-hidden":"true"},"#"),l(" What is a CLI?")],-1),u=l("CLI stands for "),d={href:"https://en.wikipedia.org/wiki/Command-line_interface",target:"_blank",rel:"noopener noreferrer"},m=l("Command-Line Interface"),b=l("."),h=s("p",null,"We created the CLI to make it easier for you to create your projects using GCommands.",-1),g=s("p",null,"Our CLI can generate a basic project, a component (command, listener) for you.",-1),f=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),l(),s("span",{class:"token function"},"install"),l(" @gcommands/cli -g\n")])])],-1),y=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),l(" global "),s("span",{class:"token function"},"add"),l(" @gcommands/cli\n")])])],-1),k=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),l(),s("span",{class:"token function"},"add"),l(" @gcommands/cli --global\n")])])],-1),v=c('<p>Then when you install <code>@gcommands/cli</code>, it will register the <code>gcommands</code> and <code>gc</code> commands</p><p>It is possible that <code>gc</code> will not work, so we also made a long version of <code>gcommands</code></p><h2 id="create-a-project" tabindex="-1"><a class="header-anchor" href="#create-a-project" aria-hidden="true">#</a> Create a project</h2><p>So once you have cli installed and you want to create a project, there is nothing easier than to open the folder in which you want the project to be created and you use:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcommands new\n\n√ What&#39;s the name of your project? <span class="token punctuation">..</span>. myfirstbot\n√ Select a language <span class="token keyword">for</span> your project » JavaScript\n√ Select a template <span class="token keyword">for</span> your project » Bot template\n√ Cloning the repository\n√ Moving the folder <span class="token operator">&amp;</span> Creating config\n√ Installing dependencies\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Then you fill in the questions, and hit enter. The project will be created.</p><h2 id="existing-project" tabindex="-1"><a class="header-anchor" href="#existing-project" aria-hidden="true">#</a> Existing project</h2><p>If you already have a project, and you want to use the GCommands CLI for component generation, just use the <code>gcommands init</code> command</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcommands init\n\n√ Select a language <span class="token keyword">for</span> your project » JavaScript\n√ What<span class="token string">&#39;s the name of your base directory? | Leave empty if you don&#39;</span>t have <span class="token punctuation">..</span>. src\n√ What<span class="token string">&#39;s the name of your commands directory? | Leave empty if you don&#39;</span>t have <span class="token punctuation">..</span>. commands\n√ What<span class="token string">&#39;s the name of your listeners directory? | Leave empty if you don&#39;</span>t have <span class="token punctuation">..</span>. listeners\n√ What<span class="token string">&#39;s the name of your inhibitors directory? | Leave empty if you don&#39;</span>t have <span class="token punctuation">..</span>. inhibitors\n√ What<span class="token string">&#39;s the name of your plugins directory? | Leave empty if you don&#39;</span>t have <span class="token punctuation">..</span>. plugins\n√ Generating config\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├── node_modules\n├── package.json\n└── src\n    └── plugins\n        └── ...\n    └── listeners\n        └── ...\n    └── commands\n        └── ...\n    └── inhibitors\n        └── ...\n    └── index.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',10);i.render=function(l,c){const i=n("OutboundLink"),j=n("CodeGroupItem"),w=n("CodeGroup");return a(),e(r,null,[p,s("p",null,[u,s("a",d,[m,t(i)]),b]),h,g,t(w,null,{default:o((()=>[t(j,{title:"npm"},{default:o((()=>[f])),_:1}),t(j,{title:"yarn"},{default:o((()=>[y])),_:1}),t(j,{title:"pnpm"},{default:o((()=>[k])),_:1})])),_:1}),v],64)};export{i as default};
