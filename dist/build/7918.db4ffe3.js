"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7918,9166],{37918:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=o(87636),a=o(74987),s=o(28234),r=o(91857),c=o(33625);const i={id:"@jupyter-notebook/console-extension:opener",requires:[n.IRouter],autoStart:!0,activate:(e,t)=>{const{commands:o}=e,n=new RegExp("/consoles/(.*)"),a="router:console";o.addCommand(a,{execute:e=>{const t=e.path.match(n);if(!t)return;const[,a]=t;if(!a)return;const s=decodeURIComponent(a);o.execute("console:create",{path:s})}}),t.register({command:a,pattern:n})}},d={id:"@jupyter-notebook/console-extension:redirect",requires:[a.IConsoleTracker],optional:[r.INotebookPathOpener],autoStart:!0,activate:(e,t,o)=>{const n=s.PageConfig.getBaseUrl(),a=null!=o?o:r.defaultNotebookPathOpener;t.widgetAdded.connect((async(t,o)=>{const{sessionContext:r}=o;await r.ready,(0,c.find)(e.shell.widgets("main"),(e=>e.id===o.id))||(a.open({prefix:s.URLExt.join(n,"consoles"),path:r.path,target:"_blank"}),o.dispose())}))}},p=[i,d]}}]);
//# sourceMappingURL=7918.db4ffe3.js.map