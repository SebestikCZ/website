import{r as n,o as s,c as a,b as t,w as e,a as o,F as c,d as l,f as u}from"./app.17907cf2.js";const p={},r=o("h1",{id:"creating-your-first-command",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#creating-your-first-command","aria-hidden":"true"},"#"),l(" Creating your first command")],-1),i=o("p",null,[l("Remember the path we set when creating the client? Navigate to your "),o("code",null,"commands"),l(" folder, or create it. In that folder create a new JS file. You will create your first command there, exited?")],-1),m=o("p",null,[l("GCommands support two ways to create commands. You can use "),o("code",null,"new Command({ ...settings })"),l(" or "),o("code",null,"new class extends Command"),l(". We'll demonstrate both cases, and we'll discuss the advantages and disadvantages.")],-1),d=o("div",{class:"language-javascript ext-js line-numbers-mode"},[o("pre",{class:"language-javascript"},[o("code",null,[o("span",{class:"token keyword"},"const"),l(),o("span",{class:"token punctuation"},"{"),l(" Command"),o("span",{class:"token punctuation"},","),l(" CommandType "),o("span",{class:"token punctuation"},"}"),l(),o("span",{class:"token operator"},"="),l(),o("span",{class:"token function"},"require"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'gcommands'"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n\n"),o("span",{class:"token comment"},"// Create a new command with the name 'hello'"),l("\n"),o("span",{class:"token keyword"},"new"),l(),o("span",{class:"token class-name"},"Command"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),l("\n\tname"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token string"},"'hello'"),o("span",{class:"token punctuation"},","),l("\n\tdescription"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token string"},"'Says hello!'"),o("span",{class:"token punctuation"},","),l("\n\t"),o("span",{class:"token comment"},"// GCommands Next offers different types of commands, we will only use slash and message commands here."),l("\n\ttype"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token punctuation"},"["),l("CommandType"),o("span",{class:"token punctuation"},"."),o("span",{class:"token constant"},"SLASH"),o("span",{class:"token punctuation"},","),l(" CommandType"),o("span",{class:"token punctuation"},"."),o("span",{class:"token constant"},"MESSAGE"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),l("\n\t"),o("span",{class:"token comment"},"// The function thats executed when the user uses the command."),l("\n\t"),o("span",{class:"token function-variable function"},"run"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"ctx"),o("span",{class:"token punctuation"},")"),l(),o("span",{class:"token operator"},"=>"),l(),o("span",{class:"token punctuation"},"{"),l("\n\t\t"),o("span",{class:"token keyword"},"return"),l(" ctx"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"reply"),o("span",{class:"token punctuation"},"("),o("span",{class:"token template-string"},[o("span",{class:"token template-punctuation string"},"`"),o("span",{class:"token string"},"Hello "),o("span",{class:"token interpolation"},[o("span",{class:"token interpolation-punctuation punctuation"},"${"),l("ctx"),o("span",{class:"token punctuation"},"."),l("user"),o("span",{class:"token punctuation"},"."),l("username"),o("span",{class:"token interpolation-punctuation punctuation"},"}")]),o("span",{class:"token string"},"!"),o("span",{class:"token template-punctuation string"},"`")]),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n\t"),o("span",{class:"token punctuation"},"}"),l("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br"),o("span",{class:"line-number"},"8"),o("br"),o("span",{class:"line-number"},"9"),o("br"),o("span",{class:"line-number"},"10"),o("br"),o("span",{class:"line-number"},"11"),o("br"),o("span",{class:"line-number"},"12"),o("br"),o("span",{class:"line-number"},"13"),o("br")])],-1),k=o("div",{class:"language-javascript ext-js line-numbers-mode"},[o("pre",{class:"language-javascript"},[o("code",null,[o("span",{class:"token keyword"},"const"),l(),o("span",{class:"token punctuation"},"{"),l(" Command"),o("span",{class:"token punctuation"},","),l(" CommandType "),o("span",{class:"token punctuation"},"}"),l(),o("span",{class:"token operator"},"="),l(),o("span",{class:"token function"},"require"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'gcommands'"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n\n"),o("span",{class:"token comment"},"// Create a new command with the name 'hello-class'"),l("\n"),o("span",{class:"token keyword"},"new"),l(),o("span",{class:"token class-name"},"class"),l(),o("span",{class:"token keyword"},"extends"),l(),o("span",{class:"token class-name"},"Command"),l(),o("span",{class:"token punctuation"},"{"),l("\n\t"),o("span",{class:"token function"},"constructor"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),l(),o("span",{class:"token punctuation"},"{"),l("\n\t\t"),o("span",{class:"token keyword"},"super"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),l("\n\t\t\tname"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token string"},"'hello'"),o("span",{class:"token punctuation"},","),l("\n\t\t\tdescription"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token string"},"'Says hello!'"),o("span",{class:"token punctuation"},","),l("\n\t\t\t"),o("span",{class:"token comment"},"// GCommands Next offers different types of commands, we will only use slash and message commands here."),l("\n\t\t\ttype"),o("span",{class:"token operator"},":"),l(),o("span",{class:"token punctuation"},"["),l("CommandType"),o("span",{class:"token punctuation"},"."),o("span",{class:"token constant"},"SLASH"),o("span",{class:"token punctuation"},","),l(" CommandType"),o("span",{class:"token punctuation"},"."),o("span",{class:"token constant"},"MESSAGE"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),l("\n\t\t"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n\t"),o("span",{class:"token punctuation"},"}"),l("\n\n\t"),o("span",{class:"token comment"},"// The function thats executed when the user uses the command."),l("\n\t"),o("span",{class:"token function"},"run"),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"ctx"),o("span",{class:"token punctuation"},")"),l(),o("span",{class:"token punctuation"},"{"),l("\n\t\t"),o("span",{class:"token keyword"},"return"),l(" ctx"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"reply"),o("span",{class:"token punctuation"},"("),o("span",{class:"token template-string"},[o("span",{class:"token template-punctuation string"},"`"),o("span",{class:"token string"},"Hello "),o("span",{class:"token interpolation"},[o("span",{class:"token interpolation-punctuation punctuation"},"${"),l("ctx"),o("span",{class:"token punctuation"},"."),l("user"),o("span",{class:"token punctuation"},"."),l("username"),o("span",{class:"token interpolation-punctuation punctuation"},"}")]),o("span",{class:"token string"},"!"),o("span",{class:"token template-punctuation string"},"`")]),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),l("\n\t"),o("span",{class:"token punctuation"},"}"),l("\n"),o("span",{class:"token punctuation"},"}"),l("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br"),o("span",{class:"line-number"},"8"),o("br"),o("span",{class:"line-number"},"9"),o("br"),o("span",{class:"line-number"},"10"),o("br"),o("span",{class:"line-number"},"11"),o("br"),o("span",{class:"line-number"},"12"),o("br"),o("span",{class:"line-number"},"13"),o("br"),o("span",{class:"line-number"},"14"),o("br"),o("span",{class:"line-number"},"15"),o("br"),o("span",{class:"line-number"},"16"),o("br"),o("span",{class:"line-number"},"17"),o("br"),o("span",{class:"line-number"},"18"),o("br")])],-1),b=o("p",null,[l("The advantage of the new style is that you have straight typings for the "),o("code",null,"run"),l(" function. In the case of the "),o("code",null,"class"),l(" command, you have to add jsdocs at the run function to have auto-complete. The new style is also cleaner, shorter to type.")],-1),h=l("You insert normal code into the run function as you would with "),f={href:"https://discord.js.org",target:"_blank",rel:"noopener noreferrer"},y=l("discord.js"),g=u(", except that you use <code>ctx</code> instead of <code>message</code> or <code>interaction</code>.<br> The <code>ctx</code> is just a variable that you can rename however you want, or you can import just certain functions using <code>{ reply, user }</code> instead of <code>ctx</code>.<br> You may find that you don&#39;t find some parameters like <code>author</code>. Don&#39;t despair, just use <code>user</code> instead of <code>author</code>.",23),w=o("p",null,[l("When you want to define a client, you can use "),o("code",null,"this.client"),l(" in case of class, or just use "),o("code",null,"ctx.client"),l(".")],-1),x=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"TIP"),o("p",null,"Creating commands with new was introduced in GCommands Next with the main purpose of making your code look more clean! You can use the method your prefer.")],-1),C=o("p",null,[l("Restart your bot, and you should see the "),o("code",null,"hello"),l(" slash command pop-up in your dev-server. Go ahead and give it a try!")],-1),v=l("hello"),j=l(" Hello S222em! "),S=o("p",null,"You can also use the message command",-1),T=l(" .hello "),G=l(" Hello S222em! ");p.render=function(l,u){const p=n("CodeGroupItem"),_=n("CodeGroup"),H=n("OutboundLink"),Y=n("DiscordInteraction"),I=n("DiscordMessage"),A=n("DiscordMessages");return s(),a(c,null,[r,i,m,t(_,null,{default:e((()=>[t(p,{title:"command"},{default:e((()=>[d])),_:1}),t(p,{title:"class extends"},{default:e((()=>[k])),_:1})])),_:1}),b,o("p",null,[h,o("a",f,[y,t(H)]),g]),w,x,C,t(A,null,{default:e((()=>[t(I,{profile:"bot"},{interactions:e((()=>[t(Y,{profile:"user",author:"GCommands",command:!0},{default:e((()=>[v])),_:1})])),default:e((()=>[j])),_:1})])),_:1}),S,t(A,null,{default:e((()=>[t(I,{profile:"user"},{default:e((()=>[T])),_:1}),t(I,{profile:"bot"},{default:e((()=>[G])),_:1})])),_:1})],64)};export{p as default};
