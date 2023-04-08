"use strict";(self.webpackChunkgithub_comment=self.webpackChunkgithub_comment||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(m,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:850},i="Hide comments",l={unversionedId:"hide",id:"hide",title:"Hide comments",description:"#210",source:"@site/docs/hide.md",sourceDirName:".",slug:"/hide",permalink:"/github-comment/hide",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/github-comment-docs/edit/main/docs/hide.md",tags:[],version:"current",sidebarPosition:850,frontMatter:{sidebar_position:850},sidebar:"tutorialSidebar",previous:{title:"Complement",permalink:"/github-comment/complement"},next:{title:"Builtin Templates",permalink:"/github-comment/builtin-template"}},m={},p=[],u={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hide-comments"},"Hide comments"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment/pull/210"},"#210")),(0,o.kt)("p",null,"When github-comment is used at CI, github-comment posts a comment at every builds.\nSo outdated comments would remain.\nYou would like to hide outdated comments."),(0,o.kt)("p",null,"By the subcommand ",(0,o.kt)("inlineCode",{parentName:"p"},"hide"),", you can hide outdated comments.\nFrom github-comment v3, github-comments injects meta data like SHA1 into comments as HTML comment."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\x3c!-- github-comment: {"JobID":"xxx","JobName":"plan","SHA1":"79acc0778da6660712a65fd41a48b72cb7ad16c0","TemplateKey":"default","Vars":{}} --\x3e\n')),(0,o.kt)("p",null,"The following meta data is injected."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JobName (support only some CI platform)"),(0,o.kt)("li",{parentName:"ul"},"JobID (support only some CI platform)"),(0,o.kt)("li",{parentName:"ul"},"WorkflowName (support only some CI platform)"),(0,o.kt)("li",{parentName:"ul"},"TemplateKey"),(0,o.kt)("li",{parentName:"ul"},"Vars"),(0,o.kt)("li",{parentName:"ul"},"SHA1")),(0,o.kt)("p",null,"From github-comment v4, only variables specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"embedded_var_names")," are embedded into the comment."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"hide")," command, github-comment does the following things."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"gets the list of pull request (issue) comments"),(0,o.kt)("li",{parentName:"ol"},"extracts the injected meta data from comments"),(0,o.kt)("li",{parentName:"ol"},"hide comments which match the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"expr")," expression")),(0,o.kt)("p",null,"The following variable is passed to the expression."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Org"),(0,o.kt)("li",{parentName:"ul"},"Repo"),(0,o.kt)("li",{parentName:"ul"},"PRNumber"),(0,o.kt)("li",{parentName:"ul"},"SHA1"))),(0,o.kt)("li",{parentName:"ul"},"Comment",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Body"),(0,o.kt)("li",{parentName:"ul"},"HasMeta"),(0,o.kt)("li",{parentName:"ul"},"Meta",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SHA1"),(0,o.kt)("li",{parentName:"ul"},"TemplateKey"),(0,o.kt)("li",{parentName:"ul"},"Vars"))))),(0,o.kt)("li",{parentName:"ul"},"HideKey"),(0,o.kt)("li",{parentName:"ul"},"Vars"),(0,o.kt)("li",{parentName:"ul"},"Env: ",(0,o.kt)("inlineCode",{parentName:"li"},"func(string) string"))),(0,o.kt)("p",null,"The default condition is ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment.HasMeta && Comment.Meta.SHA1 != Commit.SHA1"),".\nyou can configure the condition in the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'hide:\n  default: "true"\n  hello: \'Comment.HasMeta && (Comment.Meta.SHA1 != Commit.SHA1 && Comment.Meta.Vars.target == "hello")\'\n')),(0,o.kt)("p",null,"you can specify the template with ",(0,o.kt)("inlineCode",{parentName:"p"},"--hide-key (-k)")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment hide -k hello\n")),(0,o.kt)("p",null,"If the template isn't specified, the template ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," is used."),(0,o.kt)("p",null,"you can specify the condition with ",(0,o.kt)("inlineCode",{parentName:"p"},"-condition")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment hide -condition 'Comment.Body contains \"foo\"'\n")))}s.isMDXComponent=!0}}]);