import{d as t,l as e,c as n,O as a,o as s,b as o,e as r,f as l}from"./vendor.35ad4842.js";import{u as p}from"./index.46ad2ade.js";import{_ as i,m as u}from"./SourceButton.vue_vue&type=script&setup=true&lang.f055b156.js";const m={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tmx-auto\n\t\t\tpy-16\n\t\t\tpx-4\n\t\t\tbreak-words-legacy\n\t\t\tsm:px-8\n\t\t\tlg:py-8\n\t\t\tw-full\n\t\t\tmax-w-4xl\n\t\t\tlg:max-w-full\n\t\t"};var c=t({setup(t){const c=e(),d=p(),f=n((()=>d.state.docs)),v=n((()=>d.state.file)),y=n((()=>{var t;const e=null==(t=f.value)?void 0:t.custom[c.params.category].files[c.params.file];if(!e)return;let n;return d.commit({type:"setFile",file:e}),n="md"===e.type?e.content:`# ${e.name}\n\`\`\`${e.type}\n${e.content}\n\`\`\``,u(n)}));return a((()=>{const t=document.getElementById("container");t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"})})),(t,e)=>{var n;return s(),o("div",m,[r(i,{class:"float-right mt-2",path:null==(n=l(v))?void 0:n.path},null,8,["path"]),r("div",{innerHTML:l(y)},null,8,["innerHTML"])])}}});export{c as default};
