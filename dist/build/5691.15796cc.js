"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5691],{35691:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var a=o(91854),n=o(1464),r=o(7103),l=o(25199),u=o(52850);const s=[{text:"About Jupyter",url:"https://jupyter.org"},{text:"Markdown Reference",url:"https://commonmark.org/help/"},{text:"Documentation",url:"https://jupyter-notebook.readthedocs.io/en/stable/"}];var p;!function(e){e.open="help:open",e.about="help:about"}(p||(p={}));const c=[{id:"@jupyter-notebook/help-extension:open",autoStart:!0,activate:e=>{const{commands:t}=e;t.addCommand(p.open,{label:e=>e.text,execute:e=>{const t=e.url;window.open(t)}})}},{id:"@jupyter-notebook/help-extension:about",autoStart:!0,requires:[r.ITranslator],optional:[n.IMainMenu,a.ICommandPalette],activate:(e,t,o,n)=>{const{commands:r}=e,c=t.load("notebook"),b=c.__("Help");r.addCommand(p.about,{label:c.__("About %1",e.name),execute:()=>{const t=u.createElement(u.Fragment,null,u.createElement("span",{className:"jp-AboutNotebook-header"},u.createElement(l.jupyterIcon.react,{width:"196px",height:"auto"}))),o=c.__("JUPYTER NOTEBOOK ON GITHUB"),n=c.__("CONTRIBUTOR LIST"),r=u.createElement("span",null,u.createElement("a",{href:"https://github.com/jupyter/notebook",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat jp-AboutNotebook-about-externalLinks"},o),u.createElement("a",{href:"https://github.com/jupyter/notebook/pulse",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat jp-AboutNotebook-about-externalLinks"},n)),s=c.__("Version: %1",e.version),p=c.__("© 2021-2023 Jupyter Notebook Contributors"),b=u.createElement(u.Fragment,null,u.createElement("span",{className:"jp-AboutNotebook-version"},s),u.createElement("div",null,r),u.createElement("span",{className:"jp-AboutNotebook-about-copyright"},p)),m=new a.Dialog({title:t,body:b,buttons:[a.Dialog.createButton({label:c.__("Dismiss"),className:"jp-AboutNotebook-about-button jp-mod-reject jp-mod-styled"})]});m.addClass("jp-AboutNotebook"),m.launch()}}),n&&n.addItem({command:p.about,category:b});const m=s.map((e=>({args:e,command:p.open})));o&&o.helpMenu.addGroup(m,30)}}]}}]);
//# sourceMappingURL=5691.15796cc.js.map