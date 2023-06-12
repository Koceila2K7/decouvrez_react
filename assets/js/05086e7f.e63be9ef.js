"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:11},i="Ajoutez de jolies notifications \xe0 votre application :",c={unversionedId:"tutorial-basics/notification",id:"tutorial-basics/notification",title:"Ajoutez de jolies notifications \xe0 votre application :",description:'Nous alons voir comment ajouter des notification dans le fomulaire "ajouter une todo"',source:"@site/docs/tutorial-basics/notification.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/notification",permalink:"/decouvrez_react/docs/tutorial-basics/notification",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/notification.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Exercice bonus :",permalink:"/decouvrez_react/docs/tutorial-basics/bonus"},next:{title:"Serveur API Rest",permalink:"/decouvrez_react/docs/category/serveur-api-rest"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ajoutez-de-jolies-notifications-\xe0-votre-application-"},"Ajoutez de jolies notifications \xe0 votre application :"),(0,r.kt)("p",null,'Nous alons voir comment ajouter des notification dans le fomulaire "ajouter une todo"'),(0,r.kt)("p",null,"Ajoutez cette ligne dans le fichier index.js "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/client/index.js"',title:'"/client/index.js"'},"import 'notyf/notyf.min.css';\n")),(0,r.kt)("p",null,"Modifiez le fonction de cr\xe9ation dans le fichier FormAdd.jsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/client/src/FormAdd.jsx"',title:'"/client/src/FormAdd.jsx"'},'...\n  const notyf = new Notyf();\n  const handleAjouter = async (e) => {\n    try {\n      await createTodo({ titre, desc, couleur: selectedColor });\n      notyf.success("Cr\xe9ation avec succ\xe8s");\n      setOpen(false);\n    } catch (error) {\n      notyf.error("Erreur de cr\xe9ation");\n    }\n  };\n...\n')),(0,r.kt)("p",null,"Voici le code complet "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/client/src/components/FormAdd.jsx"',title:'"/client/src/components/FormAdd.jsx"'},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Typography from "@mui/material/Typography";\nimport Modal from "@mui/material/Modal";\nimport { Button, TextField } from "@mui/material";\nimport { useState } from "react";\nimport { createTodo } from "../api/todo.api";\nimport { Notyf } from "notyf";\n\nconst style = {\n  position: "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function FormAdd({ open, setOpen }) {\n  const handleClose = () => setOpen(false);\n  const [titre, setTitre] = useState("");\n  const [desc, setDesc] = useState("");\n  const [selectedColor, setSelectedColor] = useState("#000");\n  const handleTitreChange = (e) => setTitre(e.target.value);\n  const handleDescChange = (e) => setDesc(e.target.value);\n\n  const notyf = new Notyf();\n  const handleAjouter = async (e) => {\n    try {\n      await createTodo({ titre, desc, couleur: selectedColor });\n      notyf.success("Cr\xe9ation avec succ\xe8s");\n      setOpen(false);\n    } catch (error) {\n      notyf.error("Erreur de cr\xe9ation");\n    }\n  };\n\n  return (\n    <div>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="modal-modal-title"\n        aria-describedby="modal-modal-description"\n      >\n        <Box sx={style}>\n          <Typography variant="h5" style={{ marginBottom: 10 }}>\n            Ajouter une todo :\n          </Typography>\n          <TextField\n            value={titre}\n            fullWidth\n            label="Titre :"\n            variant="outlined"\n            style={{ marginBottom: 10 }}\n            onChange={handleTitreChange}\n          />\n          <TextField\n            value={desc}\n            onChange={handleDescChange}\n            fullWidth\n            label="Desc :"\n            variant="outlined"\n            multiline\n            minRows={2}\n            style={{ marginBottom: 10 }}\n          />\n          <input\n            type="color"\n            style={{ width: "100%", display: "block", marginBottom: 15 }}\n            value={selectedColor}\n            onChange={(e) => setSelectedColor(e.target.value)}\n          />\n          <Button variant="contained" fullWidth onClick={handleAjouter}>\n            Ajouter\n          </Button>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n')))}p.isMDXComponent=!0}}]);