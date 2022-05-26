"use strict";(self.webpackChunkgithub_comment=self.webpackChunkgithub_comment||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,k=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={sidebar_position:900},u="Builtin Templates",p={unversionedId:"builtin-template",id:"builtin-template",title:"Builtin Templates",description:"Some default templates are provided.",source:"@site/docs/builtin-template.md",sourceDirName:".",slug:"/builtin-template",permalink:"/github-comment/builtin-template",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/github-comment-docs/edit/main/docs/builtin-template.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"tutorialSidebar",previous:{title:"Complement",permalink:"/github-comment/complement"},next:{title:"GitHub Enterprise Support",permalink:"/github-comment/github-enterprise"}},c={},d=[{value:"status",id:"status",level:2},{value:"join_command",id:"join_command",level:2},{value:"hidden_combined_output",id:"hidden_combined_output",level:2},{value:"link",id:"link",level:2},{value:"CircleCI",id:"circleci",level:3},{value:"CodeBuild",id:"codebuild",level:3},{value:"Drone",id:"drone",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"<code>exec</code>&#39;s default template",id:"execs-default-template",level:2}],m={toc:d};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"builtin-templates"},"Builtin Templates"),(0,i.kt)("p",null,"Some default templates are provided.\nThey are overwritten if the same name templates are defined in the configuration file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#status"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#join_command"},"join_command")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hidden_combined_output"},"hidden_combined_output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#link"},"link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#execs-default-template"},(0,i.kt)("inlineCode",{parentName:"a"},"exec"),"'s default template"))),(0,i.kt)("h2",{id:"status"},"status"),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{{template "status" .}}\n')),(0,i.kt)("p",null,"Content of the template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":{{if eq .ExitCode 0}}white_check_mark{{else}}x{{end}}:\n")),(0,i.kt)("h2",{id:"join_command"},"join_command"),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{{template "join_command" .}}\n')),(0,i.kt)("p",null,"Content of the template:"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},".JoinCommand")," includes ","`","`","`",","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<pre><code>$ {{.JoinCommand | AvoidHTMLEscape}}</pre></code>\n")),(0,i.kt)("p",null,"Otherwise,"),(0,i.kt)("pre",null,(0,i.kt)("code",null,"```",(0,i.kt)("br",null),"$ ","{{",".JoinCommand | AvoidHTMLEscape","}}",(0,i.kt)("br",null),"```")),(0,i.kt)("h2",{id:"hidden_combined_output"},"hidden_combined_output"),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{{template "hidden_combined_output" .}}\n')),(0,i.kt)("p",null,"Content of the template:"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},".CombinedOutput")," includes ","`","`","`"," ,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<details><pre><code>{{.CombinedOutput | AvoidHTMLEscape}}</code></pre></details>\n")),(0,i.kt)("p",null,"Otherwise,"),(0,i.kt)("pre",null,(0,i.kt)("code",null,"<details>",(0,i.kt)("br",null),"```",(0,i.kt)("br",null),"{{",".CombinedOutput | AvoidHTMLEscape","}}",(0,i.kt)("br",null),"```",(0,i.kt)("br",null),"</details>")),(0,i.kt)("h2",{id:"link"},"link"),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{{template "link" .}}\n')),(0,i.kt)("p",null,"Content of the template:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"link")," is different per CI service."),(0,i.kt)("h3",{id:"circleci"},"CircleCI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[workflow](https://circleci.com/workflow-run/{{env "CIRCLE_WORKFLOW_ID" }}) [job]({{env "CIRCLE_BUILD_URL"}}) (job: {{env "CIRCLE_JOB"}})\n')),(0,i.kt)("h3",{id:"codebuild"},"CodeBuild"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Build link]({{env "CODEBUILD_BUILD_URL"}})\n')),(0,i.kt)("h3",{id:"drone"},"Drone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[build]({{env "DRONE_BUILD_LINK"}}) [step]({{env "DRONE_BUILD_LINK"}}/{{env "DRONE_STAGE_NUMBER"}}/{{env "DRONE_STEP_NUMBER"}})\n')),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Build link](https://github.com/{{env "GITHUB_REPOSITORY"}}/actions/runs/{{env "GITHUB_RUN_ID"}})\n')),(0,i.kt)("h2",{id:"execs-default-template"},(0,i.kt)("inlineCode",{parentName:"h2"},"exec"),"'s default template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'when: ExitCode != 0\ntemplate: |\n  {{template "status" .}} {{template "link" .}}\n\n  {{template "join_command" .}}\n\n  {{template "hidden_combined_output" .}}\n')))}s.isMDXComponent=!0}}]);