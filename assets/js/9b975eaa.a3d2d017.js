"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},i="G\xe9rez vos appels r\xe9seau avec AXIOS",l={unversionedId:"tutorial-basics/api-add-todo",id:"tutorial-basics/api-add-todo",title:"G\xe9rez vos appels r\xe9seau avec AXIOS",description:"Maintenant nous allons connecter notre application au serveur d'api Rest",source:"@site/docs/tutorial-basics/api-add-todo.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/api-add-todo",permalink:"/decouvrez_react/docs/tutorial-basics/api-add-todo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/api-add-todo.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Ajoutez de la s\xe9curit\xe9 \xe0 votre application :",permalink:"/decouvrez_react/docs/tutorial-basics/keycloak"},next:{title:"R\xe9cup\xe9ration des Todos :",permalink:"/decouvrez_react/docs/tutorial-basics/api-get-all"}},s={},c=[{value:"Cr\xe9ation de todos :",id:"cr\xe9ation-de-todos-",level:2},{value:"Gestion de la cr\xe9ation :",id:"gestion-de-la-cr\xe9ation-",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"g\xe9rez-vos-appels-r\xe9seau-avec-axios"},"G\xe9rez vos appels r\xe9seau avec AXIOS"),(0,r.kt)("p",null,"Maintenant nous allons connecter notre application au serveur d'api Rest"),(0,r.kt)("admonition",{title:"Bonnes pratiques :",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'Il est vivement recommand\xe9 de regrouper toute la logique de l\'API dans un dossier "api".')),(0,r.kt)("p",null,"Cr\xe9ez un dossier api dans src"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/client/src"',title:'"/client/src"'},"mkdri api\n")),(0,r.kt)("p",null,"Dans le dossier api cr\xe9ez les deux fichiers index.js et todo.api.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/client/src/api"',title:'"/client/src/api"'},"touch index.js todo.api.js\n")),(0,r.kt)("p",null,"Dans le fichier index.js collez le code suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/client/src/api/index.js"',title:'"/client/src/api/index.js"'},'export * from "./todo.api.js";\n')),(0,r.kt)("p",null,"Dans le fichier todo.api.ts collez le code suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/client/src/api/index.js"',title:'"/client/src/api/index.js"'},'import axios from "axios";\n\nconst todoApiClient = axios.create({\n  baseURL: "http://localhost:3333",\n});\n\ntodoApiClient.interceptors.request.use((req) => {\n  const token = sessionStorage.getItem("TOKEN");\n  console.log({ token });\n  req.headers.Authorization = `Bearer ${token}`;\n  return req;\n});\n\nexport const getTodos = () => {\n  return todoApiClient.get("/todos");\n};\n\nexport const createTodo = ({ titre, dec, couleur }) => {\n  return todoApiClient.post("/todos", { titre, dec, couleur });\n};\n\nexport const getTodoById = (id) => todoApiClient.get(`/todos/${id}`);\nexport const deleteTodoById = (id) => todoApiClient.delete(`/todos/${id}`);\n')),(0,r.kt)("h2",{id:"cr\xe9ation-de-todos-"},"Cr\xe9ation de todos :"),(0,r.kt)("p",null,"Nous allons commencer par connecter l'interface de cr\xe9ation de todos"),(0,r.kt)("h4",{id:"gestion-de-la-cr\xe9ation-"},"Gestion de la cr\xe9ation :"),(0,r.kt)("p",null,'Voici la fonction qui encapsule la logique de cr\xe9ation apr\xe8s le clic sur "Ajouter" :'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handleAjouter = async (e) => {\n  try {\n    await createTodo({ titre, desc, couleur: selectedColor });\n    //Cr\xe9ation avec succ\xe8s\n  } catch (error) {\n    //echec de la cr\xe9ation\n  }\n};\n")),(0,r.kt)("p",null,"Remplacez le code du fichier FormAdd.jsx par le code suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/client/src/components/FormAdd.jsx"',title:'"/client/src/components/FormAdd.jsx"'},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Typography from "@mui/material/Typography";\nimport Modal from "@mui/material/Modal";\nimport { Button, TextField } from "@mui/material";\nimport { useState } from "react";\nimport { createTodo } from "../api/todo.api";\n\nconst style = {\n  position: "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function FormAdd({ open, setOpen }) {\n  const handleClose = () => setOpen(false);\n  const [titre, setTitre] = useState("");\n  const [desc, setDesc] = useState("");\n  const [selectedColor, setSelectedColor] = useState("#000");\n  const handleTitreChange = (e) => setTitre(e.target.value);\n  const handleDescChange = (e) => setDesc(e.target.value);\n\n  const handleAjouter = async (e) => {\n    try {\n      await createTodo({ titre, desc, couleur: selectedColor });\n      //Cr\xe9ation avec succ\xe8s\n    } catch (error) {\n      //echec de la cr\xe9ation\n    }\n  };\n\n  return (\n    <div>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="modal-modal-title"\n        aria-describedby="modal-modal-description"\n      >\n        <Box sx={style}>\n          <Typography variant="h5" style={{ marginBottom: 10 }}>\n            Ajouter une todo :\n          </Typography>\n          <TextField\n            value={titre}\n            fullWidth\n            label="Titre :"\n            variant="outlined"\n            style={{ marginBottom: 10 }}\n            onChange={handleTitreChange}\n          />\n          <TextField\n            value={desc}\n            onChange={handleDescChange}\n            fullWidth\n            label="Desc :"\n            variant="outlined"\n            multiline\n            minRows={2}\n            style={{ marginBottom: 10 }}\n          />\n          <input\n            type="color"\n            style={{ width: "100%", display: "block", marginBottom: 15 }}\n            value={selectedColor}\n            onChange={(e) => setSelectedColor(e.target.value)}\n          />\n          <Button variant="contained" fullWidth onClick={handleAjouter}>\n            Ajouter\n          </Button>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n')))}u.isMDXComponent=!0}}]);