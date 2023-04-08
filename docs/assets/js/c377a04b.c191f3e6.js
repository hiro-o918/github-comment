"use strict";(self.webpackChunkgithub_comment=self.webpackChunkgithub_comment||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:i,o[1]=u;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:100},o="github-comment",u={unversionedId:"index",id:"index",title:"github-comment",description:"Build Status",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/github-comment/",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/github-comment-docs/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/github-comment/install"}},s={},l=[{value:"Motivation",id:"motivation",level:2},{value:"Features",id:"features",level:2},{value:"Blog",id:"blog",level:2},{value:"Release Notes",id:"release-notes",level:2},{value:"License",id:"license",level:2}],m={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-comment"},"github-comment"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.drone.io/suzuki-shunsuke/github-comment"},(0,i.kt)("img",{parentName:"a",src:"https://cloud.drone.io/api/badges/suzuki-shunsuke/github-comment/status.svg",alt:"Build Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://goreportcard.com/report/github.com/suzuki-shunsuke/github-comment"},(0,i.kt)("img",{parentName:"a",src:"https://goreportcard.com/badge/github.com/suzuki-shunsuke/github-comment",alt:"Go Report Card"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/suzuki-shunsuke/github-comment.svg",alt:"GitHub last commit"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/github-comment/main/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"http://img.shields.io/badge/license-mit-blue.svg?style=flat-square",alt:"License"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment")," is a CLI to create and hide GitHub comments by GitHub REST API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment post -k test\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/suzuki-shunsuke/artifact@master/github-comment/post-test.png",alt:"post-test"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment exec -- go test ./...\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/suzuki-shunsuke/artifact@master/github-comment/exec-go-test.png",alt:"exec-go-test"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment hide\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/161659056-998b566d-f5c4-4f7e-8a60-0191d6543763.png",alt:"image"})),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"github-comment's motivation is to improve CI's user experience.\nUsing github-comment, you can notify the result of CI and\nusers can understand what the problem is and what they should do quickly."),(0,i.kt)("p",null,"It's bothersome to check CI log and investigate what command failed and why it failed.\nIf you run a shell script, it may be difficult to understand what command failed."),(0,i.kt)("p",null,"Please see the following screenshot. ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/suzuki-shunsuke/github-action-validate-envoy-proxy"},"ref"))),(0,i.kt)("p",null,"You would be able to understand the failed command and its log quickly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/146356131-27d9ae75-1c61-4ec0-9f1f-f4f6f15b6b05.png",alt:"image"})),(0,i.kt)("p",null,"You can also post a guide. ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://suzuki-shunsuke.github.io/tfaction/docs/feature/follow-up-pr"},"ref"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/161662650-264959f8-fee7-46fb-bf9b-865b25ba70f9.png",alt:"image"})),(0,i.kt)("p",null,"By the guide, users would be able to solve the problem by temselves.\nThis improves the productivity of both Developer and DevOps Engineer."),(0,i.kt)("p",null,"github-comment also supports hiding old comments, which makes pull requests clean."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to install",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"github-comment is a single executable binary written in Go. No dependency is needed"))),(0,i.kt)("li",{parentName:"ul"},"Post comments according to the result of command",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, you can post comment only when the command failed or the specific phrase is outputted"))),(0,i.kt)("li",{parentName:"ul"},"Support hiding comments conditionally"),(0,i.kt)("li",{parentName:"ul"},"Get CI information automatically from CI Environment variables"),(0,i.kt)("li",{parentName:"ul"},"Manage configuration with YAML",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can separate CI script and github-comment configuration"))),(0,i.kt)("li",{parentName:"ul"},"Provide built-in templates")),(0,i.kt)("h2",{id:"blog"},"Blog"),(0,i.kt)("p",null,"Written in Japanese. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/improve-cicd-with-github-comment"},"2021-12-28 github-comment \u3067 PR \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u3057\u3066 CI \u306e\u7d50\u679c\u3092\u5206\u304b\u308a\u3084\u3059\u304f\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://techblog.szksh.cloud/github-comment/"},"2020-07-31 github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI"))),(0,i.kt)("h2",{id:"release-notes"},"Release Notes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment/releases"},"GitHub Releases")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment/blob/main/LICENSE"},"MIT")))}p.isMDXComponent=!0}}]);