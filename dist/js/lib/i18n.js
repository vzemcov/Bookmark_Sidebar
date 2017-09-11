/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.I18nHelper=function(a){let t=null,l={},n={i18n:"data-i18n",i18nReplaces:"data-i18nReplaces"};this.init=(()=>new Promise(n=>{l={},a.helper.model.call("languageInfos").then(g=>{let i=a.helper.model.getData("b/language");"default"===i&&(i=e.api.i18n.getUILanguage());let s=this.getDefaultLanguage();[i,s].some(e=>{if(g.infos&&g.infos[e]&&g.infos[e].available)return t=e,a.helper.model.call("langvars",{lang:e,defaultLang:s}).then(e=>{e&&e.langVars&&(l=e.langVars,n())}),!0})})})),this.getLanguage=(()=>t),this.getDefaultLanguage=(()=>a.opts.manifest.default_locale),this.getLocaleSortCollator=(()=>new Intl.Collator([e.api.i18n.getUILanguage(),this.getDefaultLanguage()])),this.getLocaleDate=(a=>a.toLocaleDateString([e.api.i18n.getUILanguage(),this.getDefaultLanguage()],{year:"numeric",month:"2-digit",day:"2-digit"})),this.parseHtml=(a=>{e(a).find("["+n.i18n+"]").forEach(a=>{let t=null,l=e(a).attr(n.i18n);if(l){let g=[],i=e(a).attr(n.i18nReplaces);i&&(g=i.split(",")),t=this.get(l,g)}t?(e(a).removeAttr(n.i18n),e(a).html(t)):e(a).remove()})}),this.get=((e,a=[])=>{let t="",n=l[e];return n&&n.message&&(t=n.message,a.forEach((e,a)=>{t=t.replace(new RegExp("\\{"+(a+1)+"\\}"),e)}),t=t.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>"),t=t.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),t=t.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),t})}})(jsu);