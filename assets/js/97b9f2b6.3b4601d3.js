"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},s="API Rest Endpoints",l={unversionedId:"tutorial-extras/intro",id:"tutorial-extras/intro",title:"API Rest Endpoints",description:"L'api rest que vous avez lanc\xe9e aux requ\xeates suivantes :",source:"@site/docs/tutorial-extras/intro.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/intro",permalink:"/decouvrez_react/docs/tutorial-extras/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Serveur API Rest",permalink:"/decouvrez_react/docs/category/serveur-api-rest"}},i={},p=[{value:"Create todo :",id:"create-todo-",level:2},{value:"Get todos :",id:"get-todos-",level:2},{value:"Get todo by id:",id:"get-todo-by-id",level:2},{value:"Delete todo by id:",id:"delete-todo-by-id",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-rest-endpoints"},"API Rest Endpoints"),(0,a.kt)("p",null,"L'api rest que vous avez lanc\xe9e aux requ\xeates suivantes :"),(0,a.kt)("h1",{id:"todo"},"Todo"),(0,a.kt)("h2",{id:"create-todo-"},"Create todo :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'http POST http://localhost:3333/todos\n{\n  "titre","desc","couleur",\n}\n')),(0,a.kt)("h2",{id:"get-todos-"},"Get todos :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http GET http://localhost:3333/todos\n")),(0,a.kt)("h2",{id:"get-todo-by-id"},"Get todo by id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http GET http://localhost:3333/todos/${:id}\n")),(0,a.kt)("h2",{id:"delete-todo-by-id"},"Delete todo by id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http DELETE http://localhost:3333/todos/${:id}\n")),(0,a.kt)("h1",{id:"projects-"},"Projects :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cr\xe9er une projets"',title:'"Cr\xe9er',une:!0,'projets"':!0},'http POST http://localhost:3333/projects\n{\n  "titre","desc"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="R\xe9cup\xe9rer les projets"',title:'"R\xe9cup\xe9rer',les:!0,'projets"':!0},"http GET http://localhost:3333/projects\nresult\n[\n  {_id,titre,desc,creationDate,\n  demandes:[\n          {desc,date,etat,demandeType,_id}\n          ]\n  }\n]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="R\xe9cup\xe9rer un projet"',title:'"R\xe9cup\xe9rer',un:!0,'projet"':!0},"http GET http://localhost:3333/projects/:idProjet\nresult\n  {_id,titre,desc,creationDate,\n  demandes:[\n          {desc,date,etat,demandeType,_id}\n          ]\n  }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Supprimer un projet"',title:'"Supprimer',un:!0,'projet"':!0},"http DELETE http://localhost:3333/projects/:idProjet\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cr\xe9ation d\'une demande"',title:'"Cr\xe9ation',"d'une":!0,'demande"':!0},"http POST http://localhost:3333/projects/:id\npayload:\n{desc,etat,demandeType,}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Mettre \xe0 jour une demande"',title:'"Mettre',"\xe0":!0,jour:!0,une:!0,'demande"':!0},"http PATCH http://localhost:3333/projects/:idProject/:idDemande\npayload:\n{newEtat}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Supprimer une demande"',title:'"Supprimer',une:!0,'demande"':!0},"http DELETE http://localhost:3333/projects/:idProject/:idDemande\n")),(0,a.kt)("p",null,"Toutes les requ\xeates doivent \xeatre accompagn\xe9es d'un JWT fourni par le serveur Keycloak."))}u.isMDXComponent=!0}}]);