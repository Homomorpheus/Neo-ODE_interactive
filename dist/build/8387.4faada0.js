"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8387,3992],{93992:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(28234),a=o(22710),i=o(91857),d=o(81997);const l=[{id:"@jupyter-notebook/docmanager-extension:opener",autoStart:!0,optional:[i.INotebookPathOpener,i.INotebookShell],provides:a.IDocumentWidgetOpener,activate:(e,t,o)=>{const a=n.PageConfig.getBaseUrl(),l=e.docRegistry,r=null!=t?t:i.defaultNotebookPathOpener;let s=0;return new class{constructor(){this._opened=new d.Signal(this)}open(t,i){var d,u,c;const p=null!==(d=null==i?void 0:i.type)&&void 0!==d?d:"",h=null==i?void 0:i.ref,v=null===(c=null===(u=null==o?void 0:o.userLayout)||void 0===u?void 0:u[p])||void 0===c?void 0:c.area;if("_noref"!==h&&void 0===v){const e=t.context.path,o=n.PathExt.extname(e);let i,d="edit";return("default"===p&&".ipynb"===o||p.includes("Notebook"))&&(d="notebooks"),p!==l.defaultWidgetFactory(e).name&&(i=new URLSearchParams({factory:p})),r.open({prefix:n.URLExt.join(a,d),path:e,searchParams:i}),void t.dispose()}t.id||(t.id="document-manager-"+ ++s),t.title.dataset={type:"document-title",...t.title.dataset},t.isAttached||e.shell.add(t,"main",i||{}),e.shell.activateById(t.id),this._opened.emit(t)}get opened(){return this._opened}}}}]}}]);
//# sourceMappingURL=8387.4faada0.js.map