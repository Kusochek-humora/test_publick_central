import{i as e,n as t,r as n,t as r}from"./api-CdOMEbQT.js";import{$ as i,A as a,C as o,Ct as s,D as c,Dt as l,E as u,Et as d,F as f,H as p,K as m,M as h,Ot as g,Q as _,S as v,St as y,Tt as b,V as x,X as S,Y as C,Z as w,_ as T,_t as E,a as D,at as O,b as ee,bt as te,c as k,ct as A,d as ne,dt as j,et as M,f as re,ft as N,g as ie,gt as P,h as ae,ht as F,i as oe,it as I,k as se,kt as L,l as ce,lt as R,m as le,mt as ue,n as de,nt as fe,o as pe,p as me,pt as he,q as ge,r as _e,rt as z,s as ve,t as ye,tt as B,u as V,ut as H,v as U,vt as be,w as xe,wt as Se,x as Ce,xt as W,y as we,yt as G}from"./index-B5XoGYrT.js";import{a as Te,i as Ee,n as De,t as Oe}from"./events-BKdizLU0.js";import{t as K}from"./inputtext-DP0bfjTN.js";var ke=class extends m{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),x(this.options,t)||this.#e.getMutationCache().notify({type:`observerOptionsUpdated`,mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&f(t.mutationKey)!==f(this.options.mutationKey)?this.reset():this.#n?.state.status===`pending`&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#a()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??a();this.#t={...e,isPending:e.status===`pending`,isSuccess:e.status===`success`,isError:e.status===`error`,isIdle:e.status===`idle`,mutate:this.mutate,reset:this.reset}}#a(e){h.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type===`success`){try{this.#r.onSuccess?.(e.data,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,n,r)}catch(e){Promise.reject(e)}}else if(e?.type===`error`){try{this.#r.onError?.(e.error,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,n,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}};function Ae(t,n){let r=n||e(),i=w(()=>{let e=typeof t==`function`?t():t;return r.defaultMutationOptions(c(e))}),a=new ke(r,i.value),o=i.value.shallow?y(a.getCurrentResult()):G(a.getCurrentResult()),l=a.subscribe(e=>{se(o,e)}),u=(e,t)=>{a.mutate(e,t).catch(()=>{})};F(i,()=>{a.setOptions(i.value)}),be(()=>{l()});let d=Se(i.value.shallow?s(o):te(o));return F(()=>o.error,e=>{if(e&&p(i.value.throwOnError,[e]))throw e}),{...d,mutate:u,mutateAsync:o.mutate,reset:o.reset}}var je={name:`WindowMaximizeIcon`,extends:oe};function Me(e){return Ie(e)||Fe(e)||Pe(e)||Ne()}function Ne(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){if(e){if(typeof e==`string`)return q(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function Fe(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ie(e){if(Array.isArray(e))return q(e)}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Le(e,t,n,r,i,a){return R(),B(`svg`,A({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Me(t[0]||=[_(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z`,fill:`currentColor`},null,-1)]),16)}je.render=Le;var Re={name:`WindowMinimizeIcon`,extends:oe};function ze(e){return Ue(e)||He(e)||Ve(e)||Be()}function Be(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(e,t){if(e){if(typeof e==`string`)return J(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function He(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ue(e){if(Array.isArray(e))return J(e)}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function We(e,t,n,r,i,a){return R(),B(`svg`,A({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),ze(t[0]||=[_(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z`,fill:`currentColor`},null,-1)]),16)}Re.render=We;var Ge=k.extend({name:`focustrap-directive`}),Ke=de.extend({style:Ge});function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qe(Object(n),!0).forEach(function(t){Ye(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ye(e,t,n){return(t=Xe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xe(e){var t=Ze(e,`string`);return Y(t)==`symbol`?t:t+``}function Ze(e,t){if(Y(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Y(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Qe=Ke.extend(`focustrap`,{mounted:function(e,t){(t.value||{}).disabled||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute(`data-pd-focustrap`,!0),this.$el=e},updated:function(e,t){(t.value||{}).disabled&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??``}`},bind:function(e,t){var n=this,r=t.value||{},i=r.onFocusIn,a=r.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(t){t.forEach(function(t){if(t.type===`childList`&&!e.contains(document.activeElement)){var r=function(t){var i=re(t)?re(t,n.getComputedSelector(e.$_pfocustrap_focusableselector))?t:o(e,n.getComputedSelector(e.$_pfocustrap_focusableselector)):o(t);return u(i)?i:t.nextSibling&&r(t.nextSibling)};U(r(t.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(e){return i&&i(e)},e.$_pfocustrap_focusoutlistener=function(e){return a&&a(e)},e.addEventListener(`focusin`,e.$_pfocustrap_focusinlistener),e.addEventListener(`focusout`,e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener(`focusin`,e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener(`focusout`,e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:Je(Je({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var n=t.value||{},r=n.autoFocusSelector,i=r===void 0?``:r,a=n.firstFocusableSelector,s=a===void 0?``:a,c=n.autoFocus,l=c===void 0?!1:c,u=o(e,`[autofocus]${this.getComputedSelector(i)}`);l&&!u&&(u=o(e,this.getComputedSelector(s))),U(u)},onFirstHiddenElementFocus:function(e){var t,n=e.currentTarget,r=e.relatedTarget;U(r===n.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!=null&&t.contains(r))?o(n.parentElement,this.getComputedSelector(n.$_pfocustrap_focusableselector)):n.$_pfocustrap_lasthiddenfocusableelement)},onLastHiddenElementFocus:function(e){var t,n=e.currentTarget,r=e.relatedTarget;U(r===n.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!=null&&t.contains(r))?me(n.parentElement,this.getComputedSelector(n.$_pfocustrap_focusableselector)):n.$_pfocustrap_firsthiddenfocusableelement)},createHiddenFocusableElements:function(e,t){var n=this,r=t.value||{},i=r.tabIndex,a=i===void 0?0:i,o=r.firstFocusableSelector,s=o===void 0?``:o,c=r.lastFocusableSelector,l=c===void 0?``:c,u=function(e){return ae(`span`,{class:`p-hidden-accessible p-hidden-focusable`,tabIndex:a,role:`presentation`,"aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:e?.bind(n)})},d=u(this.onFirstHiddenElementFocus),f=u(this.onLastHiddenElementFocus);d.$_pfocustrap_lasthiddenfocusableelement=f,d.$_pfocustrap_focusableselector=s,d.setAttribute(`data-pc-section`,`firstfocusableelement`),f.$_pfocustrap_firsthiddenfocusableelement=d,f.$_pfocustrap_focusableselector=l,f.setAttribute(`data-pc-section`,`lastfocusableelement`),e.prepend(d),e.append(f)}}});function $e(){Ce({variableName:ce(`scrollbar.width`).name})}function et(){we({variableName:ce(`scrollbar.width`).name})}var tt=k.extend({name:`dialog`,style:`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:function(e){var t=e.props,n=[`left`,`right`,`top`,`topleft`,`topright`,`bottom`,`bottomleft`,`bottomright`].find(function(e){return e===t.position});return[`p-dialog-mask`,{"p-overlay-mask p-overlay-mask-enter-active":t.modal},n?`p-dialog-${n}`:``]},root:function(e){var t=e.props,n=e.instance;return[`p-dialog p-component`,{"p-dialog-maximized":t.maximizable&&n.maximized}]},header:`p-dialog-header`,title:`p-dialog-title`,headerActions:`p-dialog-header-actions`,pcMaximizeButton:`p-dialog-maximize-button`,pcCloseButton:`p-dialog-close-button`,content:`p-dialog-content`,footer:`p-dialog-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`||t===`topleft`||t===`bottomleft`?`flex-start`:t===`right`||t===`topright`||t===`bottomright`?`flex-end`:`center`,alignItems:t===`top`||t===`topleft`||t===`topright`?`flex-start`:t===`bottom`||t===`bottomleft`||t===`bottomright`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{display:`flex`,flexDirection:`column`,pointerEvents:`auto`}}}),nt={name:`Dialog`,extends:{name:`BaseDialog`,extends:D,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:`center`},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:`body`},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},_instance:null},style:tt,provide:function(){return{$pcDialog:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:visible`,`show`,`hide`,`after-hide`,`maximize`,`unmaximize`,`dragstart`,`dragend`],provide:function(){var e=this;return{dialogRef:w(function(){return e._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&V.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&V.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ie(this.mask,`p-overlay-mask-leave-active`),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit(`hide`),U(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&V.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit(`after-hide`)},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&U(t,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit(`unmaximize`,e)):(this.maximized=!0,this.$emit(`maximize`,e)),this.modal||(this.maximized?$e():et())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&$e()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&et()},onKeyDown:function(e){e.code===`Escape`&&this.closeOnEscape&&!e.isComposing&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement(`style`),this.styleElement.type=`text/css`,T(this.styleElement,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.head.appendChild(this.styleElement);var t=``;for(var n in this.breakpoints)t+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.$attrSelector}] {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&=(document.head.removeChild(this.styleElement),null)},initDrag:function(e){e.target.closest(`div`).getAttribute(`data-pc-section`)!==`headeractions`&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin=`0`,document.body.setAttribute(`data-p-unselectable-text`,`true`),!this.isUnstyled&&le(document.body,{"user-select":`none`}),this.$emit(`dragstart`,e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(t){if(e.dragging){var n=v(e.container),r=ne(e.container),i=t.pageX-e.lastPageX,a=t.pageY-e.lastPageY,o=e.container.getBoundingClientRect(),s=o.left+i,c=o.top+a,l=ee(),u=getComputedStyle(e.container),d=parseFloat(u.marginLeft),f=parseFloat(u.marginTop);e.container.style.position=`fixed`,e.keepInViewport?(s>=e.minX&&s+n<l.width&&(e.lastPageX=t.pageX,e.container.style.left=s-d+`px`),c>=e.minY&&c+r<l.height&&(e.lastPageY=t.pageY,e.container.style.top=c-f+`px`)):(e.lastPageX=t.pageX,e.container.style.left=s-d+`px`,e.lastPageY=t.pageY,e.container.style.top=c-f+`px`)}},window.document.addEventListener(`mousemove`,this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&=(window.document.removeEventListener(`mousemove`,this.documentDragListener),null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(t){e.dragging&&(e.dragging=!1,document.body.removeAttribute(`data-p-unselectable-text`),!e.isUnstyled&&(document.body.style[`user-select`]=``),e.$emit(`dragend`,t))},window.document.addEventListener(`mouseup`,this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&=(window.document.removeEventListener(`mouseup`,this.documentDragEndListener),null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?`span`:`WindowMinimizeIcon`:this.maximizeIcon?`span`:`WindowMaximizeIcon`},ariaLabelledById:function(){return this.header!=null||this.$attrs[`aria-labelledby`]!==null?this.$id+`_header`:null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return xe({maximized:this.maximized,modal:this.modal})}},directives:{ripple:ye,focustrap:Qe},components:{Button:t,Portal:pe,WindowMinimizeIcon:Re,WindowMaximizeIcon:je,TimesIcon:_e}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rt(Object(n),!0).forEach(function(t){at(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function at(e,t,n){return(t=ot(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ot(e){var t=st(e,`string`);return X(t)==`symbol`?t:t+``}function st(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ct=[`data-p`],lt=[`aria-labelledby`,`aria-modal`,`data-p`],ut=[`id`],dt=[`data-p`];function ft(e,t,n,r,a,o){var s=N(`Button`),c=N(`Portal`),u=he(`focustrap`);return R(),i(c,{appendTo:e.appendTo},{default:P(function(){return[a.containerVisible?(R(),B(`div`,A({key:0,ref:o.maskRef,class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||=function(){return o.onMaskMouseDown&&o.onMaskMouseDown.apply(o,arguments)},onMouseup:t[2]||=function(){return o.onMaskMouseUp&&o.onMaskMouseUp.apply(o,arguments)},"data-p":o.dataP},e.ptm(`mask`)),[I(ge,A({name:`p-dialog`,onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:``},e.ptm(`transition`)),{default:P(function(){return[e.visible?E((R(),B(`div`,A({key:0,ref:o.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:`dialog`,"aria-labelledby":o.ariaLabelledById,"aria-modal":e.modal,"data-p":o.dataP},e.ptmi(`root`)),[e.$slots.container?j(e.$slots,`container`,{key:0,closeCallback:o.close,maximizeCallback:function(e){return o.maximize(e)},initDragCallback:o.initDrag}):(R(),B(S,{key:1},[e.showHeader?(R(),B(`div`,A({key:0,ref:o.headerContainerRef,class:e.cx(`header`),onMousedown:t[0]||=function(){return o.initDrag&&o.initDrag.apply(o,arguments)}},e.ptm(`header`)),[j(e.$slots,`header`,{class:l(e.cx(`title`))},function(){return[e.header?(R(),B(`span`,A({key:0,id:o.ariaLabelledById,class:e.cx(`title`)},e.ptm(`title`)),L(e.header),17,ut)):M(``,!0)]}),_(`div`,A({class:e.cx(`headerActions`)},e.ptm(`headerActions`)),[e.maximizable?j(e.$slots,`maximizebutton`,{key:0,maximized:a.maximized,maximizeCallback:function(e){return o.maximize(e)}},function(){return[I(s,A({ref:o.maximizableRef,autofocus:a.focusableMax,class:e.cx(`pcMaximizeButton`),onClick:o.maximize,tabindex:e.maximizable?`0`:`-1`,unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm(`pcMaximizeButton`),"data-pc-group-section":`headericon`}),{icon:P(function(t){return[j(e.$slots,`maximizeicon`,{maximized:a.maximized},function(){return[(R(),i(ue(o.maximizeIconComponent),A({class:[t.class,a.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm(`pcMaximizeButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`autofocus`,`class`,`onClick`,`tabindex`,`unstyled`,`pt`])]}):M(``,!0),e.closable?j(e.$slots,`closebutton`,{key:1,closeCallback:o.close},function(){return[I(s,A({ref:o.closeButtonRef,autofocus:a.focusableClose,class:e.cx(`pcCloseButton`),onClick:o.close,"aria-label":o.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`headericon`}),{icon:P(function(t){return[j(e.$slots,`closeicon`,{},function(){return[(R(),i(ue(e.closeIcon?`span`:`TimesIcon`),A({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`autofocus`,`class`,`onClick`,`aria-label`,`unstyled`,`pt`])]}):M(``,!0)],16)],16)):M(``,!0),_(`div`,A({ref:o.contentRef,class:[e.cx(`content`),e.contentClass],style:e.contentStyle,"data-p":o.dataP},it(it({},e.contentProps),e.ptm(`content`))),[j(e.$slots,`default`)],16,dt),e.footer||e.$slots.footer?(R(),B(`div`,A({key:1,ref:o.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[j(e.$slots,`footer`,{},function(){return[z(L(e.footer),1)]})],16)):M(``,!0)],64))],16,lt)),[[u,{disabled:!e.modal}]]):M(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,ct)):M(``,!0)]}),_:3},8,[`appendTo`])}nt.render=ft;var Z={all:[`venues`],detail:e=>[`venues`,e],priceZones:e=>[`venues`,e,`price-zones`],seatGroups:e=>[`venues`,e,`seat-groups`]};function pt(e){return n({queryKey:w(()=>Z.detail(b(e))),queryFn:()=>r(`/venues/${b(e)}`),enabled:w(()=>b(e)>0)})}function mt(e){return n({queryKey:w(()=>Z.priceZones(b(e))),queryFn:()=>r(`/venues/${b(e)}/price-zones`),enabled:w(()=>b(e)>0)})}function ht(e){return n({queryKey:w(()=>Z.seatGroups(b(e))),queryFn:()=>r(`/venues/${b(e)}/seat-groups`),enabled:w(()=>b(e)>0)})}var gt=[`transform`],_t=[`fill`,`stroke`,`opacity`],vt=[`fill`],yt=O({__name:`SeatItem`,props:{seat:{},eventSeat:{},zoneColor:{},isSelected:{type:Boolean}},emits:[`click`],setup(e,{emit:t}){let n=e,r=t,i=w(()=>n.eventSeat?.status===`reserved`||n.eventSeat?.status===`sold`),a=w(()=>!i.value),o=w(()=>i.value?`#334155`:n.isSelected?`#facc15`:n.seat.priceZone?.color??n.zoneColor),s=w(()=>n.isSelected?`#fbbf24`:i.value?`#475569`:`transparent`),c=w(()=>{let e=n.eventSeat?.status;return e===`reserved`?`Место ${n.seat.seatNumber} — забронировано`:e===`sold`?`Место ${n.seat.seatNumber} — продано`:`Место ${n.seat.seatNumber}`});function l(){a.value&&r(`click`)}return(t,n)=>(R(),B(`g`,{transform:`translate(${e.seat.offsetX}, ${e.seat.offsetY})`,style:g({cursor:a.value?`pointer`:`not-allowed`}),onClick:l},[_(`circle`,{r:`14`,fill:o.value,stroke:s.value,"stroke-width":`2`,class:`transition-all duration-150`,opacity:i.value?.5:1},null,8,_t),_(`text`,{"text-anchor":`middle`,"dominant-baseline":`central`,"font-size":`9`,"font-weight":`600`,fill:i.value?`#64748b`:`#fff`,"font-family":`system-ui, sans-serif`,style:{"pointer-events":`none`}},L(e.seat.seatNumber),9,vt),_(`title`,null,L(c.value),1)],12,gt))}}),bt=[`transform`],xt={y:`-30`,"text-anchor":`middle`,"font-size":`12`,fill:`#94a3b8`,"font-family":`system-ui, sans-serif`},St=[`x`,`y`,`width`,`height`],Ct=[`x`,`y`,`width`,`height`],wt=O({__name:`SeatGroupItem`,props:{group:{},eventSeats:{},selectedIds:{}},emits:[`seatClick`],setup(e,{emit:t}){let n=e,r=t,a=w(()=>n.group.type.startsWith(`table`)),o=w(()=>n.group.type.startsWith(`sofa`)),s=w(()=>{let e=n.group.type.match(/\d+/);return e?parseInt(e[0]):n.group.seats.length}),c=w(()=>Math.min(s.value*40,200)),l=w(()=>60),u=w(()=>s.value*35+20),d=w(()=>50),f=w(()=>n.group.priceZone?.color??`#64748b`);return(t,n)=>(R(),B(`g`,{transform:`translate(${e.group.cx}, ${e.group.cy}) rotate(${e.group.rotation})`},[_(`text`,xt,L(e.group.label),1),a.value?(R(),B(`rect`,{key:0,x:-c.value/2,y:-l.value/2,width:c.value,height:l.value,rx:`8`,fill:`#1e293b`,stroke:`#334155`,"stroke-width":`2`},null,8,St)):o.value?(R(),B(`rect`,{key:1,x:-u.value/2,y:-d.value/2,width:u.value,height:d.value,rx:`12`,fill:`#1e293b`,stroke:`#334155`,"stroke-width":`2`},null,8,Ct)):M(``,!0),(R(!0),B(S,null,H(e.group.seats,t=>(R(),i(yt,{key:t.id,seat:t,"event-seat":e.eventSeats.get(t.id),"zone-color":f.value,"is-selected":e.selectedIds.includes(t.id),onClick:e=>r(`seatClick`,t.id)},null,8,[`seat`,`event-seat`,`zone-color`,`is-selected`,`onClick`]))),128))],8,bt))}}),Tt={class:`relative w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-700 select-none`},Et={class:`absolute top-3 right-3 z-10 flex flex-col gap-1`},Dt=[`viewBox`],Ot=[`transform`],kt=[`href`,`width`,`height`],At={class:`absolute bottom-3 left-3 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur rounded-lg p-2 border border-slate-700`},jt={class:`text-slate-300`},Mt={class:`text-slate-500 ml-1`},Nt=O({__name:`VenueMap`,props:{venue:{},seatGroups:{},priceZones:{},eventSeats:{},selectedSeatIds:{}},emits:[`seatClick`],setup(e,{emit:t}){let n=e,r=t,a=W(1),o=W({x:0,y:0}),s=W(!1),c=W({x:0,y:0}),l=W(new Map);F(()=>n.eventSeats,e=>{l.value=new Map(e.map(e=>[e.seatId,e]))},{immediate:!0});function u(e){a.value=Math.max(.3,Math.min(4,a.value+e))}function d(e){u(e.deltaY<0?.1:-.1)}function f(){a.value=1,o.value={x:0,y:0}}function p(e){s.value=!0,c.value={x:e.clientX-o.value.x,y:e.clientY-o.value.y}}function m(e){s.value&&(o.value={x:e.clientX-c.value.x,y:e.clientY-c.value.y})}function h(){s.value=!1}function v(e){r(`seatClick`,e)}return(t,n)=>(R(),B(`div`,Tt,[_(`div`,Et,[_(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:n[0]||=e=>u(.15)},[...n[2]||=[_(`i`,{class:`pi pi-plus text-xs`},null,-1)]]),_(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:n[1]||=e=>u(-.15)},[...n[3]||=[_(`i`,{class:`pi pi-minus text-xs`},null,-1)]]),_(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:f},[...n[4]||=[_(`i`,{class:`pi pi-expand text-xs`},null,-1)]])]),(R(),B(`svg`,{ref:`svgRef`,viewBox:`0 0 ${e.venue.width} ${e.venue.height}`,class:`w-full`,style:g({aspectRatio:`${e.venue.width} / ${e.venue.height}`}),onWheel:C(d,[`prevent`]),onMousedown:p,onMousemove:m,onMouseup:h,onMouseleave:h},[n[6]||=_(`defs`,null,[_(`pattern`,{id:`grid`,width:`40`,height:`40`,patternUnits:`userSpaceOnUse`},[_(`path`,{d:`M 40 0 L 0 0 0 40`,fill:`none`,stroke:`#1e293b`,"stroke-width":`1`})])],-1),_(`g`,{transform:`translate(${o.value.x}, ${o.value.y}) scale(${a.value})`},[n[5]||=_(`rect`,{width:`100%`,height:`100%`,fill:`url(#grid)`},null,-1),e.venue.svgBackground?(R(),B(`image`,{key:0,href:e.venue.svgBackground,x:`0`,y:`0`,width:e.venue.width,height:e.venue.height},null,8,kt)):M(``,!0),(R(!0),B(S,null,H(e.seatGroups,t=>(R(),i(wt,{key:t.id,group:t,"event-seats":l.value,"selected-ids":e.selectedSeatIds,onSeatClick:v},null,8,[`group`,`event-seats`,`selected-ids`]))),128))],8,Ot)],44,Dt)),_(`div`,At,[(R(!0),B(S,null,H(e.priceZones,e=>(R(),B(`div`,{key:e.id,class:`flex items-center gap-2 text-xs`},[_(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:g({background:e.color})},null,4),_(`span`,jt,L(e.name),1),_(`span`,Mt,L(e.price.toLocaleString(`ru`))+` ₽`,1)]))),128)),n[7]||=fe(`<div class="border-t border-slate-700 mt-1 pt-1 flex flex-col gap-1"><div class="flex items-center gap-2 text-xs"><span class="w-3 h-3 rounded-full bg-slate-600 flex-shrink-0"></span><span class="text-slate-400">Занято</span></div><div class="flex items-center gap-2 text-xs"><span class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></span><span class="text-slate-400">Выбрано</span></div></div>`,1)])]))}}),Pt=k.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),Ft={name:`BaseMessage`,extends:D,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Pt,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function It(e,t,n){return(t=Lt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lt(e){var t=Rt(e,`string`);return Q(t)==`symbol`?t:t+``}function Rt(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var zt={name:`Message`,extends:Ft,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return xe(It(It({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:ye},components:{TimesIcon:_e}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function Bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Bt(Object(n),!0).forEach(function(t){Ht(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ht(e,t,n){return(t=Ut(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ut(e){var t=Wt(e,`string`);return $(t)==`symbol`?t:t+``}function Wt(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Gt=[`data-p`],Kt=[`data-p`],qt=[`data-p`],Jt=[`aria-label`,`data-p`],Yt=[`data-p`];function Xt(e,t,n,r,a,o){var s=N(`TimesIcon`),c=he(`ripple`);return R(),i(ge,A({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:P(function(){return[a.visible?(R(),B(`div`,A({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":o.dataP},e.ptm(`root`)),[_(`div`,A({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?j(e.$slots,`container`,{key:0,closeCallback:o.close}):(R(),B(`div`,A({key:1,class:e.cx(`content`),"data-p":o.dataP},e.ptm(`content`)),[j(e.$slots,`icon`,{class:l(e.cx(`icon`))},function(){return[(R(),i(ue(e.icon?`span`:null),A({class:[e.cx(`icon`),e.icon],"data-p":o.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(R(),B(`div`,A({key:0,class:e.cx(`text`),"data-p":o.dataP},e.ptm(`text`)),[j(e.$slots,`default`)],16,qt)):M(``,!0),e.closable?E((R(),B(`button`,A({key:1,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return o.close(e)},"data-p":o.dataP},Vt(Vt({},e.closeButtonProps),e.ptm(`closeButton`))),[j(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(R(),B(`i`,A({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,Yt)):(R(),i(s,A({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Jt)),[[c]]):M(``,!0)],16,Kt))],16)],16,Gt)):M(``,!0)]}),_:3},16)}zt.render=Xt;function Zt(){return Ae({mutationFn:e=>r(`/orders`,{method:`POST`,body:JSON.stringify(e)})})}var Qt={class:`bg-slate-800 rounded-lg p-3 flex justify-between text-sm mb-1`},$t={class:`text-slate-400`},en={class:`text-white font-semibold`},tn={class:`flex flex-col gap-1`},nn={key:0,class:`text-red-400`},rn={class:`flex flex-col gap-1`},an={key:0,class:`text-red-400`},on={class:`flex flex-col gap-1`},sn={key:0,class:`text-red-400`},cn={class:`flex gap-3 mt-2`},ln=O({__name:`OrderForm`,props:{eventId:{},seatIds:{},totalAmount:{}},emits:[`success`,`cancel`],setup(e,{emit:n}){let r=e,a=n,o=G({customerName:``,customerEmail:``,customerPhone:``}),s=G({customerName:``,customerEmail:``,customerPhone:``}),c=W(``),{mutateAsync:u,isPending:f}=Zt();function p(){return s.customerName=o.customerName.trim()?``:`Укажите имя`,s.customerEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.customerEmail)?``:`Укажите корректный email`,s.customerPhone=o.customerPhone.trim()?``:`Укажите телефон`,!s.customerName&&!s.customerEmail&&!s.customerPhone}async function m(){if(p()){c.value=``;try{a(`success`,await u({eventId:r.eventId,seatIds:r.seatIds,customerName:o.customerName,customerEmail:o.customerEmail,customerPhone:o.customerPhone}))}catch(e){e.status===409&&e.data?.unavailableSeats?c.value=`Некоторые места уже заняты: ${e.data.unavailableSeats.join(`, `)}`:c.value=e.message??`Ошибка при оформлении заказа`}}}return(n,r)=>(R(),B(`form`,{class:`flex flex-col gap-4`,onSubmit:C(m,[`prevent`])},[_(`div`,Qt,[_(`span`,$t,`Мест: `+L(e.seatIds.length),1),_(`span`,en,L(e.totalAmount.toLocaleString(`ru`))+` ₽`,1)]),_(`div`,tn,[r[4]||=_(`label`,{class:`text-xs text-slate-400`},`Имя *`,-1),I(d(K),{modelValue:o.customerName,"onUpdate:modelValue":r[0]||=e=>o.customerName=e,placeholder:`Иван Петров`,class:l([{"p-invalid":s.customerName},`w-full`])},null,8,[`modelValue`,`class`]),s.customerName?(R(),B(`small`,nn,L(s.customerName),1)):M(``,!0)]),_(`div`,rn,[r[5]||=_(`label`,{class:`text-xs text-slate-400`},`Email *`,-1),I(d(K),{modelValue:o.customerEmail,"onUpdate:modelValue":r[1]||=e=>o.customerEmail=e,type:`email`,placeholder:`ivan@example.com`,class:l([{"p-invalid":s.customerEmail},`w-full`])},null,8,[`modelValue`,`class`]),s.customerEmail?(R(),B(`small`,an,L(s.customerEmail),1)):M(``,!0)]),_(`div`,on,[r[6]||=_(`label`,{class:`text-xs text-slate-400`},`Телефон *`,-1),I(d(K),{modelValue:o.customerPhone,"onUpdate:modelValue":r[2]||=e=>o.customerPhone=e,placeholder:`+79001234567`,class:l([{"p-invalid":s.customerPhone},`w-full`])},null,8,[`modelValue`,`class`]),s.customerPhone?(R(),B(`small`,sn,L(s.customerPhone),1)):M(``,!0)]),c.value?(R(),i(d(zt),{key:0,severity:`error`,class:`mt-1`},{default:P(()=>[z(L(c.value),1)]),_:1})):M(``,!0),_(`div`,cn,[I(d(t),{label:`Отмена`,severity:`secondary`,class:`flex-1`,type:`button`,onClick:r[3]||=e=>a(`cancel`)}),I(d(t),{label:`Оплатить`,icon:`pi pi-credit-card`,class:`flex-1`,type:`submit`,loading:d(f)},null,8,[`loading`])])],32))}}),un={class:`max-w-7xl mx-auto px-6 py-8`},dn={key:0,class:`space-y-4`},fn={key:1,class:`flex flex-col items-center py-20 gap-4`},pn={class:`flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6`},mn={class:`flex items-center gap-3 mb-1`},hn={class:`text-3xl font-bold text-white`},gn={class:`text-slate-400 mb-2`},_n={class:`flex items-center gap-4 text-sm text-slate-500`},vn={class:`flex items-center gap-1.5`},yn={class:`flex items-center gap-1.5`},bn={key:0,class:`flex-shrink-0 bg-slate-800 border border-slate-700 rounded-xl p-4 min-w-52`},xn={class:`text-2xl font-bold text-white mb-1`},Sn={class:`text-violet-400 font-semibold mb-3`},Cn={class:`grid grid-cols-1 xl:grid-cols-4 gap-6`},wn={class:`xl:col-span-3`},Tn={class:`flex flex-col gap-4`},En={class:`bg-slate-800 border border-slate-700 rounded-xl p-4`},Dn={class:`flex flex-col gap-2`},On={class:`flex items-center gap-2`},kn={class:`text-sm text-slate-300`},An={class:`text-sm font-medium text-white`},jn={key:0,class:`bg-slate-800 border border-slate-700 rounded-xl p-4`},Mn={class:`flex flex-col gap-1.5 max-h-48 overflow-y-auto`},Nn={class:`text-slate-300`},Pn={class:`flex items-center gap-2`},Fn={class:`text-white`},In=[`onClick`],Ln={class:`border-t border-slate-700 mt-3 pt-3 flex justify-between text-sm font-semibold`},Rn={class:`text-white`},zn={key:1,class:`bg-slate-800/50 border border-slate-700 border-dashed rounded-xl p-4 text-center`},Bn=O({__name:`EventDetailView`,props:{id:{}},setup(e){let n=e,r=ve(),{data:a,isPending:o,isError:s}=Oe(n.id),{data:c,isPending:l,refetch:u}=De(n.id),f=w(()=>a.value?.venueId??0),{data:p}=pt(f),{data:m}=mt(f),{data:h,isPending:v}=ht(f),y=W([]),b=W(!1);function x(e){let t=y.value.indexOf(e);t===-1?y.value.push(e):y.value.splice(t,1)}function C(e){return c.value?.find(t=>t.seatId===e)}function T(e){let t=C(e);if(t?.priceOverride!=null)return t.priceOverride;let n=t?.seat;return(n?.priceZone??n?.group?.priceZone)?.price??0}function E(e){let t=C(e)?.seat;return`${t?.group?.label??`—`}, место ${t?.seatNumber??e}`}let D=w(()=>y.value.reduce((e,t)=>e+T(t),0));function O(e){b.value=!1,y.value=[],u(),r.add({severity:`success`,summary:`Заказ оформлен`,detail:`Заказ #${e.orderId} на сумму ${e.totalAmount.toLocaleString(`ru`)} ₽`,life:5e3})}function ee(e){return{published:`Открыта продажа`,draft:`Черновик`,cancelled:`Отменено`}[e]??e}function te(e){return{published:`success`,draft:`secondary`,cancelled:`danger`}[e]??`secondary`}function k(e){return new Date(e).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`})}return(e,r)=>{let u=N(`RouterLink`);return R(),B(`div`,un,[I(u,{to:`/events`,class:`inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors`},{default:P(()=>[...r[3]||=[_(`i`,{class:`pi pi-arrow-left`},null,-1),z(` Назад к мероприятиям `,-1)]]),_:1}),d(o)||d(l)||d(v)?(R(),B(`div`,dn,[I(d(Te),{height:`3rem`,width:`20rem`}),I(d(Te),{height:`60vh`,class:`rounded-xl`})])):d(s)?(R(),B(`div`,fn,[...r[4]||=[_(`i`,{class:`pi pi-exclamation-triangle text-4xl text-red-400`},null,-1),_(`p`,{class:`text-slate-400`},`Мероприятие не найдено`,-1)]])):d(a)?(R(),B(S,{key:2},[_(`div`,pn,[_(`div`,null,[_(`div`,mn,[_(`h1`,hn,L(d(a).title),1),I(d(Ee),{severity:te(d(a).status),value:ee(d(a).status)},null,8,[`severity`,`value`])]),_(`p`,gn,L(d(a).description),1),_(`div`,_n,[_(`span`,vn,[r[5]||=_(`i`,{class:`pi pi-calendar`},null,-1),z(L(k(d(a).date)),1)]),_(`span`,yn,[r[6]||=_(`i`,{class:`pi pi-clock`},null,-1),z(L(d(a).time),1)])])]),y.value.length?(R(),B(`div`,bn,[r[7]||=_(`p`,{class:`text-xs text-slate-400 mb-1`},`Выбрано мест`,-1),_(`p`,xn,L(y.value.length),1),_(`p`,Sn,L(D.value.toLocaleString(`ru`))+` ₽`,1),I(d(t),{label:`Оформить заказ`,icon:`pi pi-shopping-cart`,class:`w-full`,onClick:r[0]||=e=>b.value=!0})])):M(``,!0)]),_(`div`,Cn,[_(`div`,wn,[d(p)&&d(h)&&d(m)&&d(c)?(R(),i(Nt,{key:0,venue:d(p),"seat-groups":d(h),"price-zones":d(m),"event-seats":d(c),"selected-seat-ids":y.value,onSeatClick:x},null,8,[`venue`,`seat-groups`,`price-zones`,`event-seats`,`selected-seat-ids`])):M(``,!0)]),_(`div`,Tn,[_(`div`,En,[r[8]||=_(`h3`,{class:`text-sm font-semibold text-slate-300 mb-3`},`Ценовые зоны`,-1),_(`div`,Dn,[(R(!0),B(S,null,H(d(m),e=>(R(),B(`div`,{key:e.id,class:`flex items-center justify-between`},[_(`div`,On,[_(`span`,{class:`w-3 h-3 rounded-full`,style:g({background:e.color})},null,4),_(`span`,kn,L(e.name),1)]),_(`span`,An,L(e.price.toLocaleString(`ru`))+` ₽`,1)]))),128))])]),y.value.length?(R(),B(`div`,jn,[r[11]||=_(`h3`,{class:`text-sm font-semibold text-slate-300 mb-3`},`Выбранные места`,-1),_(`div`,Mn,[(R(!0),B(S,null,H(y.value,e=>(R(),B(`div`,{key:e,class:`flex items-center justify-between text-sm`},[_(`span`,Nn,L(E(e)),1),_(`div`,Pn,[_(`span`,Fn,L(T(e).toLocaleString(`ru`))+` ₽`,1),_(`button`,{class:`text-slate-500 hover:text-red-400 transition-colors`,onClick:t=>x(e)},[...r[9]||=[_(`i`,{class:`pi pi-times text-xs`},null,-1)]],8,In)])]))),128))]),_(`div`,Ln,[r[10]||=_(`span`,{class:`text-slate-400`},`Итого`,-1),_(`span`,Rn,L(D.value.toLocaleString(`ru`))+` ₽`,1)])])):(R(),B(`div`,zn,[...r[12]||=[_(`i`,{class:`pi pi-hand-pointer text-2xl text-slate-600 mb-2 block`},null,-1),_(`p`,{class:`text-sm text-slate-500`},`Нажмите на свободное место, чтобы выбрать`,-1)]]))])])],64)):M(``,!0),I(d(nt),{visible:b.value,"onUpdate:visible":r[2]||=e=>b.value=e,header:`Оформление заказа`,style:{width:`26rem`},modal:``,class:`!bg-slate-900`},{default:P(()=>[I(ln,{"event-id":n.id,"seat-ids":y.value,"total-amount":D.value,onSuccess:O,onCancel:r[1]||=e=>b.value=!1},null,8,[`event-id`,`seat-ids`,`total-amount`])]),_:1},8,[`visible`])])}}});export{Bn as default};