import{i as e,n as t,r as n,t as r}from"./api-VAlx65Id.js";import{$ as i,A as a,At as o,C as s,Ct as c,D as l,Dt as u,E as d,Et as f,F as p,H as m,K as h,M as g,Ot as _,Q as v,S as y,St as b,Tt as x,V as S,X as C,Y as w,Z as T,_ as E,_t as D,a as O,at as k,b as ee,bt as A,c as j,ct as M,d as te,dt as N,et as P,f as ne,ft as F,g as re,gt as ie,h as ae,ht as I,i as oe,it as L,k as se,kt as R,l as ce,lt as z,m as le,mt as B,n as ue,nt as de,o as fe,p as pe,pt as me,q as he,r as ge,rt as V,s as _e,t as ve,tt as H,u as U,ut as W,v as G,vt as ye,w as be,wt as xe,x as Se,xt as Ce,y as we,yt as Te}from"./index-Hb7_W88V.js";import{a as Ee,i as De,n as Oe,t as ke}from"./events-BckYPPUY.js";import{t as K}from"./inputtext-JXISv2Ca.js";var Ae=class extends h{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),S(this.options,t)||this.#e.getMutationCache().notify({type:`observerOptionsUpdated`,mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&p(t.mutationKey)!==p(this.options.mutationKey)?this.reset():this.#n?.state.status===`pending`&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#a()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??a();this.#t={...e,isPending:e.status===`pending`,isSuccess:e.status===`success`,isError:e.status===`error`,isIdle:e.status===`idle`,mutate:this.mutate,reset:this.reset}}#a(e){g.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type===`success`){try{this.#r.onSuccess?.(e.data,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,n,r)}catch(e){Promise.reject(e)}}else if(e?.type===`error`){try{this.#r.onError?.(e.error,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,n,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}};function je(t,n){let r=n||e(),i=T(()=>{let e=typeof t==`function`?t():t;return r.defaultMutationOptions(l(e))}),a=new Ae(r,i.value),o=i.value.shallow?c(a.getCurrentResult()):A(a.getCurrentResult()),s=a.subscribe(e=>{se(o,e)}),u=(e,t)=>{a.mutate(e,t).catch(()=>{})};I(i,()=>{a.setOptions(i.value)}),Te(()=>{s()});let d=x(i.value.shallow?xe(o):Ce(o));return I(()=>o.error,e=>{if(e&&m(i.value.throwOnError,[e]))throw e}),{...d,mutate:u,mutateAsync:o.mutate,reset:o.reset}}var Me={name:`WindowMaximizeIcon`,extends:oe};function Ne(e){return Le(e)||Ie(e)||Fe(e)||Pe()}function Pe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,t){if(e){if(typeof e==`string`)return q(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function Ie(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Le(e){if(Array.isArray(e))return q(e)}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Re(e,t,n,r,i,a){return z(),H(`svg`,M({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Ne(t[0]||=[v(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z`,fill:`currentColor`},null,-1)]),16)}Me.render=Re;var ze={name:`WindowMinimizeIcon`,extends:oe};function Be(e){return We(e)||Ue(e)||He(e)||Ve()}function Ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,t){if(e){if(typeof e==`string`)return J(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function Ue(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function We(e){if(Array.isArray(e))return J(e)}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ge(e,t,n,r,i,a){return z(),H(`svg`,M({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Be(t[0]||=[v(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z`,fill:`currentColor`},null,-1)]),16)}ze.render=Ge;var Ke=j.extend({name:`focustrap-directive`}),qe=ue.extend({style:Ke});function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Je(Object(n),!0).forEach(function(t){Xe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Xe(e,t,n){return(t=Ze(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){var t=Qe(e,`string`);return Y(t)==`symbol`?t:t+``}function Qe(e,t){if(Y(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Y(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $e=qe.extend(`focustrap`,{mounted:function(e,t){(t.value||{}).disabled||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute(`data-pd-focustrap`,!0),this.$el=e},updated:function(e,t){(t.value||{}).disabled&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??``}`},bind:function(e,t){var n=this,r=t.value||{},i=r.onFocusIn,a=r.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(t){t.forEach(function(t){if(t.type===`childList`&&!e.contains(document.activeElement)){var r=function(t){var i=ne(t)?ne(t,n.getComputedSelector(e.$_pfocustrap_focusableselector))?t:s(e,n.getComputedSelector(e.$_pfocustrap_focusableselector)):s(t);return d(i)?i:t.nextSibling&&r(t.nextSibling)};G(r(t.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(e){return i&&i(e)},e.$_pfocustrap_focusoutlistener=function(e){return a&&a(e)},e.addEventListener(`focusin`,e.$_pfocustrap_focusinlistener),e.addEventListener(`focusout`,e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener(`focusin`,e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener(`focusout`,e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:Ye(Ye({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var n=t.value||{},r=n.autoFocusSelector,i=r===void 0?``:r,a=n.firstFocusableSelector,o=a===void 0?``:a,c=n.autoFocus,l=c===void 0?!1:c,u=s(e,`[autofocus]${this.getComputedSelector(i)}`);l&&!u&&(u=s(e,this.getComputedSelector(o))),G(u)},onFirstHiddenElementFocus:function(e){var t,n=e.currentTarget,r=e.relatedTarget;G(r===n.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!=null&&t.contains(r))?s(n.parentElement,this.getComputedSelector(n.$_pfocustrap_focusableselector)):n.$_pfocustrap_lasthiddenfocusableelement)},onLastHiddenElementFocus:function(e){var t,n=e.currentTarget,r=e.relatedTarget;G(r===n.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!=null&&t.contains(r))?pe(n.parentElement,this.getComputedSelector(n.$_pfocustrap_focusableselector)):n.$_pfocustrap_firsthiddenfocusableelement)},createHiddenFocusableElements:function(e,t){var n=this,r=t.value||{},i=r.tabIndex,a=i===void 0?0:i,o=r.firstFocusableSelector,s=o===void 0?``:o,c=r.lastFocusableSelector,l=c===void 0?``:c,u=function(e){return ae(`span`,{class:`p-hidden-accessible p-hidden-focusable`,tabIndex:a,role:`presentation`,"aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:e?.bind(n)})},d=u(this.onFirstHiddenElementFocus),f=u(this.onLastHiddenElementFocus);d.$_pfocustrap_lasthiddenfocusableelement=f,d.$_pfocustrap_focusableselector=s,d.setAttribute(`data-pc-section`,`firstfocusableelement`),f.$_pfocustrap_firsthiddenfocusableelement=d,f.$_pfocustrap_focusableselector=l,f.setAttribute(`data-pc-section`,`lastfocusableelement`),e.prepend(d),e.append(f)}}});function et(){Se({variableName:ce(`scrollbar.width`).name})}function tt(){we({variableName:ce(`scrollbar.width`).name})}var nt=j.extend({name:`dialog`,style:`
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
`,classes:{mask:function(e){var t=e.props,n=[`left`,`right`,`top`,`topleft`,`topright`,`bottom`,`bottomleft`,`bottomright`].find(function(e){return e===t.position});return[`p-dialog-mask`,{"p-overlay-mask p-overlay-mask-enter-active":t.modal},n?`p-dialog-${n}`:``]},root:function(e){var t=e.props,n=e.instance;return[`p-dialog p-component`,{"p-dialog-maximized":t.maximizable&&n.maximized}]},header:`p-dialog-header`,title:`p-dialog-title`,headerActions:`p-dialog-header-actions`,pcMaximizeButton:`p-dialog-maximize-button`,pcCloseButton:`p-dialog-close-button`,content:`p-dialog-content`,footer:`p-dialog-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`||t===`topleft`||t===`bottomleft`?`flex-start`:t===`right`||t===`topright`||t===`bottomright`?`flex-end`:`center`,alignItems:t===`top`||t===`topleft`||t===`topright`?`flex-start`:t===`bottom`||t===`bottomleft`||t===`bottomright`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{display:`flex`,flexDirection:`column`,pointerEvents:`auto`}}}),rt={name:`Dialog`,extends:{name:`BaseDialog`,extends:O,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:`center`},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:`body`},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},_instance:null},style:nt,provide:function(){return{$pcDialog:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:visible`,`show`,`hide`,`after-hide`,`maximize`,`unmaximize`,`dragstart`,`dragend`],provide:function(){var e=this;return{dialogRef:T(function(){return e._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&U.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&U.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&re(this.mask,`p-overlay-mask-leave-active`),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit(`hide`),G(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&U.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit(`after-hide`)},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&G(t,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit(`unmaximize`,e)):(this.maximized=!0,this.$emit(`maximize`,e)),this.modal||(this.maximized?et():tt())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&et()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&tt()},onKeyDown:function(e){e.code===`Escape`&&this.closeOnEscape&&!e.isComposing&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement(`style`),this.styleElement.type=`text/css`,E(this.styleElement,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.head.appendChild(this.styleElement);var t=``;for(var n in this.breakpoints)t+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.$attrSelector}] {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&=(document.head.removeChild(this.styleElement),null)},initDrag:function(e){e.target.closest(`div`).getAttribute(`data-pc-section`)!==`headeractions`&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin=`0`,document.body.setAttribute(`data-p-unselectable-text`,`true`),!this.isUnstyled&&le(document.body,{"user-select":`none`}),this.$emit(`dragstart`,e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(t){if(e.dragging){var n=y(e.container),r=te(e.container),i=t.pageX-e.lastPageX,a=t.pageY-e.lastPageY,o=e.container.getBoundingClientRect(),s=o.left+i,c=o.top+a,l=ee(),u=getComputedStyle(e.container),d=parseFloat(u.marginLeft),f=parseFloat(u.marginTop);e.container.style.position=`fixed`,e.keepInViewport?(s>=e.minX&&s+n<l.width&&(e.lastPageX=t.pageX,e.container.style.left=s-d+`px`),c>=e.minY&&c+r<l.height&&(e.lastPageY=t.pageY,e.container.style.top=c-f+`px`)):(e.lastPageX=t.pageX,e.container.style.left=s-d+`px`,e.lastPageY=t.pageY,e.container.style.top=c-f+`px`)}},window.document.addEventListener(`mousemove`,this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&=(window.document.removeEventListener(`mousemove`,this.documentDragListener),null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(t){e.dragging&&(e.dragging=!1,document.body.removeAttribute(`data-p-unselectable-text`),!e.isUnstyled&&(document.body.style[`user-select`]=``),e.$emit(`dragend`,t))},window.document.addEventListener(`mouseup`,this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&=(window.document.removeEventListener(`mouseup`,this.documentDragEndListener),null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?`span`:`WindowMinimizeIcon`:this.maximizeIcon?`span`:`WindowMaximizeIcon`},ariaLabelledById:function(){return this.header!=null||this.$attrs[`aria-labelledby`]!==null?this.$id+`_header`:null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return be({maximized:this.maximized,modal:this.modal})}},directives:{ripple:ve,focustrap:$e},components:{Button:t,Portal:fe,WindowMinimizeIcon:ze,WindowMaximizeIcon:Me,TimesIcon:ge}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?it(Object(n),!0).forEach(function(t){ot(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ot(e,t,n){return(t=st(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e){var t=ct(e,`string`);return X(t)==`symbol`?t:t+``}function ct(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var lt=[`data-p`],ut=[`aria-labelledby`,`aria-modal`,`data-p`],dt=[`id`],ft=[`data-p`];function pt(e,t,n,r,a,s){var c=F(`Button`),l=F(`Portal`),u=me(`focustrap`);return z(),i(l,{appendTo:e.appendTo},{default:D(function(){return[a.containerVisible?(z(),H(`div`,M({key:0,ref:s.maskRef,class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||=function(){return s.onMaskMouseDown&&s.onMaskMouseDown.apply(s,arguments)},onMouseup:t[2]||=function(){return s.onMaskMouseUp&&s.onMaskMouseUp.apply(s,arguments)},"data-p":s.dataP},e.ptm(`mask`)),[L(he,M({name:`p-dialog`,onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:``},e.ptm(`transition`)),{default:D(function(){return[e.visible?ye((z(),H(`div`,M({key:0,ref:s.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:`dialog`,"aria-labelledby":s.ariaLabelledById,"aria-modal":e.modal,"data-p":s.dataP},e.ptmi(`root`)),[e.$slots.container?N(e.$slots,`container`,{key:0,closeCallback:s.close,maximizeCallback:function(e){return s.maximize(e)},initDragCallback:s.initDrag}):(z(),H(C,{key:1},[e.showHeader?(z(),H(`div`,M({key:0,ref:s.headerContainerRef,class:e.cx(`header`),onMousedown:t[0]||=function(){return s.initDrag&&s.initDrag.apply(s,arguments)}},e.ptm(`header`)),[N(e.$slots,`header`,{class:_(e.cx(`title`))},function(){return[e.header?(z(),H(`span`,M({key:0,id:s.ariaLabelledById,class:e.cx(`title`)},e.ptm(`title`)),o(e.header),17,dt)):P(``,!0)]}),v(`div`,M({class:e.cx(`headerActions`)},e.ptm(`headerActions`)),[e.maximizable?N(e.$slots,`maximizebutton`,{key:0,maximized:a.maximized,maximizeCallback:function(e){return s.maximize(e)}},function(){return[L(c,M({ref:s.maximizableRef,autofocus:a.focusableMax,class:e.cx(`pcMaximizeButton`),onClick:s.maximize,tabindex:e.maximizable?`0`:`-1`,unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm(`pcMaximizeButton`),"data-pc-group-section":`headericon`}),{icon:D(function(t){return[N(e.$slots,`maximizeicon`,{maximized:a.maximized},function(){return[(z(),i(B(s.maximizeIconComponent),M({class:[t.class,a.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm(`pcMaximizeButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`autofocus`,`class`,`onClick`,`tabindex`,`unstyled`,`pt`])]}):P(``,!0),e.closable?N(e.$slots,`closebutton`,{key:1,closeCallback:s.close},function(){return[L(c,M({ref:s.closeButtonRef,autofocus:a.focusableClose,class:e.cx(`pcCloseButton`),onClick:s.close,"aria-label":s.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`headericon`}),{icon:D(function(t){return[N(e.$slots,`closeicon`,{},function(){return[(z(),i(B(e.closeIcon?`span`:`TimesIcon`),M({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`autofocus`,`class`,`onClick`,`aria-label`,`unstyled`,`pt`])]}):P(``,!0)],16)],16)):P(``,!0),v(`div`,M({ref:s.contentRef,class:[e.cx(`content`),e.contentClass],style:e.contentStyle,"data-p":s.dataP},at(at({},e.contentProps),e.ptm(`content`))),[N(e.$slots,`default`)],16,ft),e.footer||e.$slots.footer?(z(),H(`div`,M({key:1,ref:s.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[N(e.$slots,`footer`,{},function(){return[V(o(e.footer),1)]})],16)):P(``,!0)],64))],16,ut)),[[u,{disabled:!e.modal}]]):P(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,lt)):P(``,!0)]}),_:3},8,[`appendTo`])}rt.render=pt;var Z={all:[`venues`],detail:e=>[`venues`,e],priceZones:e=>[`venues`,e,`price-zones`],seatGroups:e=>[`venues`,e,`seat-groups`]};function mt(e){return n({queryKey:T(()=>Z.detail(f(e))),queryFn:()=>r(`/venues/${f(e)}`),enabled:T(()=>f(e)>0)})}function ht(e){return n({queryKey:T(()=>Z.priceZones(f(e))),queryFn:()=>r(`/venues/${f(e)}/price-zones`),enabled:T(()=>f(e)>0)})}function gt(e){return n({queryKey:T(()=>Z.seatGroups(f(e))),queryFn:()=>r(`/venues/${f(e)}/seat-groups`),enabled:T(()=>f(e)>0)})}var _t=[`transform`],vt=[`fill`,`stroke`,`opacity`],yt=[`fill`],bt=k({__name:`SeatItem`,props:{seat:{},eventSeat:{},zoneColor:{},isSelected:{type:Boolean}},emits:[`click`],setup(e,{emit:t}){let n=e,r=t,i=T(()=>n.eventSeat?.status===`reserved`||n.eventSeat?.status===`sold`),a=T(()=>!i.value),s=T(()=>i.value?`#334155`:n.isSelected?`#facc15`:n.seat.priceZone?.color??n.zoneColor),c=T(()=>n.isSelected?`#fbbf24`:i.value?`#475569`:`transparent`),l=T(()=>{let e=n.eventSeat?.status;return e===`reserved`?`Место ${n.seat.seatNumber} — забронировано`:e===`sold`?`Место ${n.seat.seatNumber} — продано`:`Место ${n.seat.seatNumber}`});function u(){a.value&&r(`click`)}return(t,n)=>(z(),H(`g`,{transform:`translate(${e.seat.offsetX}, ${e.seat.offsetY})`,style:R({cursor:a.value?`pointer`:`not-allowed`}),onClick:u},[v(`circle`,{r:`14`,fill:s.value,stroke:c.value,"stroke-width":`2`,class:`transition-all duration-150`,opacity:i.value?.5:1},null,8,vt),v(`text`,{"text-anchor":`middle`,"dominant-baseline":`central`,"font-size":`9`,"font-weight":`600`,fill:i.value?`#64748b`:`#fff`,"font-family":`system-ui, sans-serif`,style:{"pointer-events":`none`}},o(e.seat.seatNumber),9,yt),v(`title`,null,o(l.value),1)],12,_t))}}),xt=[`transform`],St={y:`-30`,"text-anchor":`middle`,"font-size":`12`,fill:`#94a3b8`,"font-family":`system-ui, sans-serif`},Ct=[`x`,`y`,`width`,`height`],wt=[`x`,`y`,`width`,`height`],Tt=k({__name:`SeatGroupItem`,props:{group:{},eventSeats:{},selectedIds:{},priceZones:{}},emits:[`seatClick`],setup(e,{emit:t}){let n=e,r=t,a=T(()=>n.group.type.startsWith(`table`)),s=T(()=>n.group.type.startsWith(`sofa`)),c=T(()=>{let e=n.group.type.match(/\d+/);return e?parseInt(e[0]):n.group.seats.length}),l=T(()=>Math.min(c.value*40,200)),u=T(()=>60),d=T(()=>c.value*35+20),f=T(()=>50),p=T(()=>{let e=n.group.priceZoneId;return n.priceZones.find(t=>t.id===e)?.color??n.group.priceZone?.color??`#64748b`});return(t,n)=>(z(),H(`g`,{transform:`translate(${e.group.cx}, ${e.group.cy}) rotate(${e.group.rotation})`},[v(`text`,St,o(e.group.label),1),a.value?(z(),H(`rect`,{key:0,x:-l.value/2,y:-u.value/2,width:l.value,height:u.value,rx:`8`,fill:`#1e293b`,stroke:`#334155`,"stroke-width":`2`},null,8,Ct)):s.value?(z(),H(`rect`,{key:1,x:-d.value/2,y:-f.value/2,width:d.value,height:f.value,rx:`12`,fill:`#1e293b`,stroke:`#334155`,"stroke-width":`2`},null,8,wt)):P(``,!0),(z(!0),H(C,null,W(e.group.seats,t=>(z(),i(bt,{key:t.id,seat:t,"event-seat":e.eventSeats.get(t.id),"zone-color":p.value,"is-selected":e.selectedIds.includes(t.id),onClick:e=>r(`seatClick`,t.id)},null,8,[`seat`,`event-seat`,`zone-color`,`is-selected`,`onClick`]))),128))],8,xt))}}),Et={class:`relative w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-700 select-none`},Dt={class:`absolute top-3 right-3 z-10 flex flex-col gap-1`},Ot=[`viewBox`],kt=[`transform`],At=[`href`,`width`,`height`],jt={class:`absolute bottom-3 left-3 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur rounded-lg p-2 border border-slate-700`},Mt={class:`text-slate-300`},Nt={class:`text-slate-500 ml-1`},Pt=k({__name:`VenueMap`,props:{venue:{},seatGroups:{},priceZones:{},eventSeats:{},selectedSeatIds:{}},emits:[`seatClick`],setup(e,{emit:t}){let n=e,r=t,a=b(1),s=b({x:0,y:0}),c=b(!1),l=b({x:0,y:0}),u=b(new Map);I(()=>n.eventSeats,e=>{u.value=new Map(e.map(e=>[e.seatId,e]))},{immediate:!0});function d(e){a.value=Math.max(.3,Math.min(4,a.value+e))}function f(e){d(e.deltaY<0?.1:-.1)}function p(){a.value=1,s.value={x:0,y:0}}function m(e){c.value=!0,l.value={x:e.clientX-s.value.x,y:e.clientY-s.value.y}}function h(e){c.value&&(s.value={x:e.clientX-l.value.x,y:e.clientY-l.value.y})}function g(){c.value=!1}function _(e){r(`seatClick`,e)}return(t,n)=>(z(),H(`div`,Et,[v(`div`,Dt,[v(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:n[0]||=e=>d(.15)},[...n[2]||=[v(`i`,{class:`pi pi-plus text-xs`},null,-1)]]),v(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:n[1]||=e=>d(-.15)},[...n[3]||=[v(`i`,{class:`pi pi-minus text-xs`},null,-1)]]),v(`button`,{class:`w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors`,onClick:p},[...n[4]||=[v(`i`,{class:`pi pi-expand text-xs`},null,-1)]])]),(z(),H(`svg`,{ref:`svgRef`,viewBox:`0 0 ${e.venue.width} ${e.venue.height}`,class:`w-full`,style:R({aspectRatio:`${e.venue.width} / ${e.venue.height}`}),onWheel:w(f,[`prevent`]),onMousedown:m,onMousemove:h,onMouseup:g,onMouseleave:g},[n[6]||=v(`defs`,null,[v(`pattern`,{id:`grid`,width:`40`,height:`40`,patternUnits:`userSpaceOnUse`},[v(`path`,{d:`M 40 0 L 0 0 0 40`,fill:`none`,stroke:`#1e293b`,"stroke-width":`1`})])],-1),v(`g`,{transform:`translate(${s.value.x}, ${s.value.y}) scale(${a.value})`},[n[5]||=v(`rect`,{width:`100%`,height:`100%`,fill:`url(#grid)`},null,-1),e.venue.svgBackground?(z(),H(`image`,{key:0,href:e.venue.svgBackground,x:`0`,y:`0`,width:e.venue.width,height:e.venue.height},null,8,At)):P(``,!0),(z(!0),H(C,null,W(e.seatGroups,t=>(z(),i(Tt,{key:t.id,group:t,"event-seats":u.value,"selected-ids":e.selectedSeatIds,"price-zones":e.priceZones,onSeatClick:_},null,8,[`group`,`event-seats`,`selected-ids`,`price-zones`]))),128))],8,kt)],44,Ot)),v(`div`,jt,[(z(!0),H(C,null,W(e.priceZones,e=>(z(),H(`div`,{key:e.id,class:`flex items-center gap-2 text-xs`},[v(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:R({background:e.color})},null,4),v(`span`,Mt,o(e.name),1),v(`span`,Nt,o(e.price.toLocaleString(`ru`))+` ₽`,1)]))),128)),n[7]||=de(`<div class="border-t border-slate-700 mt-1 pt-1 flex flex-col gap-1"><div class="flex items-center gap-2 text-xs"><span class="w-3 h-3 rounded-full bg-slate-600 flex-shrink-0"></span><span class="text-slate-400">Занято</span></div><div class="flex items-center gap-2 text-xs"><span class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></span><span class="text-slate-400">Выбрано</span></div></div>`,1)])]))}}),Ft=j.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),It={name:`BaseMessage`,extends:O,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Ft,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function Lt(e,t,n){return(t=Rt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rt(e){var t=zt(e,`string`);return Q(t)==`symbol`?t:t+``}function zt(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Bt={name:`Message`,extends:It,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return be(Lt(Lt({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:ve},components:{TimesIcon:ge}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function Vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Vt(Object(n),!0).forEach(function(t){Ut(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ut(e,t,n){return(t=Wt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wt(e){var t=Gt(e,`string`);return $(t)==`symbol`?t:t+``}function Gt(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Kt=[`data-p`],qt=[`data-p`],Jt=[`data-p`],Yt=[`aria-label`,`data-p`],Xt=[`data-p`];function Zt(e,t,n,r,a,o){var s=F(`TimesIcon`),c=me(`ripple`);return z(),i(he,M({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:D(function(){return[a.visible?(z(),H(`div`,M({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":o.dataP},e.ptm(`root`)),[v(`div`,M({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?N(e.$slots,`container`,{key:0,closeCallback:o.close}):(z(),H(`div`,M({key:1,class:e.cx(`content`),"data-p":o.dataP},e.ptm(`content`)),[N(e.$slots,`icon`,{class:_(e.cx(`icon`))},function(){return[(z(),i(B(e.icon?`span`:null),M({class:[e.cx(`icon`),e.icon],"data-p":o.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(z(),H(`div`,M({key:0,class:e.cx(`text`),"data-p":o.dataP},e.ptm(`text`)),[N(e.$slots,`default`)],16,Jt)):P(``,!0),e.closable?ye((z(),H(`button`,M({key:1,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return o.close(e)},"data-p":o.dataP},Ht(Ht({},e.closeButtonProps),e.ptm(`closeButton`))),[N(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(z(),H(`i`,M({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,Xt)):(z(),i(s,M({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Yt)),[[c]]):P(``,!0)],16,qt))],16)],16,Kt)):P(``,!0)]}),_:3},16)}Bt.render=Zt;function Qt(){return je({mutationFn:e=>r(`/orders`,{method:`POST`,body:JSON.stringify(e)})})}function $t(e){return r(`/orders/${e}/payment-url`)}var en={class:`bg-slate-800 rounded-lg p-3 flex justify-between text-sm mb-1`},tn={class:`text-slate-400`},nn={class:`text-white font-semibold`},rn={class:`flex flex-col gap-1`},an={key:0,class:`text-red-400`},on={class:`flex flex-col gap-1`},sn={key:0,class:`text-red-400`},cn={class:`flex flex-col gap-1`},ln={key:0,class:`text-red-400`},un={class:`flex gap-3 mt-2`},dn=k({__name:`OrderForm`,props:{eventId:{},seatIds:{},totalAmount:{}},emits:[`success`,`cancel`],setup(e,{emit:n}){let r=e,a=n,s=A({customerName:``,customerEmail:``,customerPhone:``}),c=A({customerName:``,customerEmail:``,customerPhone:``}),l=b(``),{mutateAsync:d,isPending:f}=Qt();function p(){return c.customerName=s.customerName.trim()?``:`Укажите имя`,c.customerEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.customerEmail)?``:`Укажите корректный email`,c.customerPhone=s.customerPhone.trim()?``:`Укажите телефон`,!c.customerName&&!c.customerEmail&&!c.customerPhone}async function m(){if(p()){l.value=``;try{let e=await d({eventId:r.eventId,seatIds:r.seatIds,customerName:s.customerName,customerEmail:s.customerEmail,customerPhone:s.customerPhone}),t=window.open(``,`_blank`),{paymentUrl:n}=await $t(e.orderId);console.log(`[payment-url]`,n),t&&(t.location.href=n)}catch(e){e.status===409&&e.data?.unavailableSeats?l.value=`Некоторые места уже заняты: ${e.data.unavailableSeats.join(`, `)}`:l.value=e.message??`Ошибка при оформлении заказа`}}}return(n,r)=>(z(),H(`form`,{class:`flex flex-col gap-4`,onSubmit:w(m,[`prevent`])},[v(`div`,en,[v(`span`,tn,`Мест: `+o(e.seatIds.length),1),v(`span`,nn,o(e.totalAmount.toLocaleString(`ru`))+` ₽`,1)]),v(`div`,rn,[r[4]||=v(`label`,{class:`text-xs text-slate-400`},`Имя *`,-1),L(u(K),{modelValue:s.customerName,"onUpdate:modelValue":r[0]||=e=>s.customerName=e,placeholder:`Иван Петров`,class:_([{"p-invalid":c.customerName},`w-full`])},null,8,[`modelValue`,`class`]),c.customerName?(z(),H(`small`,an,o(c.customerName),1)):P(``,!0)]),v(`div`,on,[r[5]||=v(`label`,{class:`text-xs text-slate-400`},`Email *`,-1),L(u(K),{modelValue:s.customerEmail,"onUpdate:modelValue":r[1]||=e=>s.customerEmail=e,type:`email`,placeholder:`ivan@example.com`,class:_([{"p-invalid":c.customerEmail},`w-full`])},null,8,[`modelValue`,`class`]),c.customerEmail?(z(),H(`small`,sn,o(c.customerEmail),1)):P(``,!0)]),v(`div`,cn,[r[6]||=v(`label`,{class:`text-xs text-slate-400`},`Телефон *`,-1),L(u(K),{modelValue:s.customerPhone,"onUpdate:modelValue":r[2]||=e=>s.customerPhone=e,placeholder:`+79001234567`,class:_([{"p-invalid":c.customerPhone},`w-full`])},null,8,[`modelValue`,`class`]),c.customerPhone?(z(),H(`small`,ln,o(c.customerPhone),1)):P(``,!0)]),l.value?(z(),i(u(Bt),{key:0,severity:`error`,class:`mt-1`},{default:D(()=>[V(o(l.value),1)]),_:1})):P(``,!0),v(`div`,un,[L(u(t),{label:`Отмена`,severity:`secondary`,class:`flex-1`,type:`button`,onClick:r[3]||=e=>a(`cancel`)}),L(u(t),{label:`Оплатить`,icon:`pi pi-credit-card`,class:`flex-1`,type:`submit`,loading:u(f)},null,8,[`loading`])])],32))}}),fn={class:`max-w-7xl mx-auto px-6 py-8`},pn={key:0,class:`space-y-4`},mn={key:1,class:`flex flex-col items-center py-20 gap-4`},hn={class:`flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6`},gn={class:`flex items-center gap-3 mb-1`},_n={class:`text-3xl font-bold text-white`},vn={class:`text-slate-400 mb-2`},yn={class:`flex items-center gap-4 text-sm text-slate-500`},bn={class:`flex items-center gap-1.5`},xn={class:`flex items-center gap-1.5`},Sn={key:0,class:`flex-shrink-0 bg-slate-800 border border-slate-700 rounded-xl p-4 min-w-52`},Cn={class:`text-2xl font-bold text-white mb-1`},wn={class:`text-violet-400 font-semibold mb-3`},Tn={class:`grid grid-cols-1 xl:grid-cols-4 gap-6`},En={class:`xl:col-span-3`},Dn={class:`flex flex-col gap-4`},On={class:`bg-slate-800 border border-slate-700 rounded-xl p-4`},kn={class:`flex flex-col gap-2`},An={class:`flex items-center gap-2`},jn={class:`text-sm text-slate-300`},Mn={class:`text-sm font-medium text-white`},Nn={key:0,class:`bg-slate-800 border border-slate-700 rounded-xl p-4`},Pn={class:`flex flex-col gap-1.5 max-h-48 overflow-y-auto`},Fn={class:`text-slate-300`},In={class:`flex items-center gap-2`},Ln={class:`text-white`},Rn=[`onClick`],zn={class:`border-t border-slate-700 mt-3 pt-3 flex justify-between text-sm font-semibold`},Bn={class:`text-white`},Vn={key:1,class:`bg-slate-800/50 border border-slate-700 border-dashed rounded-xl p-4 text-center`},Hn=k({__name:`EventDetailView`,props:{id:{}},setup(e){let n=e,r=_e(),{data:a,isPending:s,isError:c}=ke(n.id),{data:l,isPending:d,refetch:f}=Oe(n.id),p=T(()=>a.value?.venueId??0),{data:m}=mt(p),{data:h}=ht(p),{data:g,isPending:_}=gt(p);ie(()=>{g.value?.length&&console.log(`[seatGroup[0]]`,g.value[0]),l.value?.length&&console.log(`[eventSeat[0]]`,l.value[0])});let y=b([]),x=b(!1);function S(e){let t=y.value.indexOf(e);t===-1?y.value.push(e):y.value.splice(t,1)}function w(e){return l.value?.find(t=>t.seatId===e)}function E(e){let t=w(e);if(t?.priceOverride!=null)return t.priceOverride;let n=t?.seat,r=n?.priceZoneId??n?.group?.priceZoneId;return(h.value?.find(e=>e.id===r)??n?.priceZone??n?.group?.priceZone)?.price??0}function O(e){let t=w(e)?.seat;return`${t?.group?.label??`—`}, место ${t?.seatNumber??e}`}let k=T(()=>y.value.reduce((e,t)=>e+E(t),0));function ee(e){x.value=!1,y.value=[],f(),r.add({severity:`success`,summary:`Заказ оформлен`,detail:`Заказ #${e.orderId} на сумму ${e.totalAmount.toLocaleString(`ru`)} ₽`,life:5e3})}function A(e){return{published:`Открыта продажа`,draft:`Черновик`,cancelled:`Отменено`}[e]??e}function j(e){return{published:`success`,draft:`secondary`,cancelled:`danger`}[e]??`secondary`}function M(e){return new Date(e).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`})}return(e,r)=>{let f=F(`RouterLink`);return z(),H(`div`,fn,[L(f,{to:`/events`,class:`inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors`},{default:D(()=>[...r[3]||=[v(`i`,{class:`pi pi-arrow-left`},null,-1),V(` Назад к мероприятиям `,-1)]]),_:1}),u(s)||u(d)||u(_)?(z(),H(`div`,pn,[L(u(Ee),{height:`3rem`,width:`20rem`}),L(u(Ee),{height:`60vh`,class:`rounded-xl`})])):u(c)?(z(),H(`div`,mn,[...r[4]||=[v(`i`,{class:`pi pi-exclamation-triangle text-4xl text-red-400`},null,-1),v(`p`,{class:`text-slate-400`},`Мероприятие не найдено`,-1)]])):u(a)?(z(),H(C,{key:2},[v(`div`,hn,[v(`div`,null,[v(`div`,gn,[v(`h1`,_n,o(u(a).title),1),L(u(De),{severity:j(u(a).status),value:A(u(a).status)},null,8,[`severity`,`value`])]),v(`p`,vn,o(u(a).description),1),v(`div`,yn,[v(`span`,bn,[r[5]||=v(`i`,{class:`pi pi-calendar`},null,-1),V(o(M(u(a).date)),1)]),v(`span`,xn,[r[6]||=v(`i`,{class:`pi pi-clock`},null,-1),V(o(u(a).time),1)])])]),y.value.length?(z(),H(`div`,Sn,[r[7]||=v(`p`,{class:`text-xs text-slate-400 mb-1`},`Выбрано мест`,-1),v(`p`,Cn,o(y.value.length),1),v(`p`,wn,o(k.value.toLocaleString(`ru`))+` ₽`,1),L(u(t),{label:`Оформить заказ`,icon:`pi pi-shopping-cart`,class:`w-full`,onClick:r[0]||=e=>x.value=!0})])):P(``,!0)]),v(`div`,Tn,[v(`div`,En,[u(m)&&u(g)&&u(h)&&u(l)?(z(),i(Pt,{key:0,venue:u(m),"seat-groups":u(g),"price-zones":u(h),"event-seats":u(l),"selected-seat-ids":y.value,onSeatClick:S},null,8,[`venue`,`seat-groups`,`price-zones`,`event-seats`,`selected-seat-ids`])):P(``,!0)]),v(`div`,Dn,[v(`div`,On,[r[8]||=v(`h3`,{class:`text-sm font-semibold text-slate-300 mb-3`},`Ценовые зоны`,-1),v(`div`,kn,[(z(!0),H(C,null,W(u(h),e=>(z(),H(`div`,{key:e.id,class:`flex items-center justify-between`},[v(`div`,An,[v(`span`,{class:`w-3 h-3 rounded-full`,style:R({background:e.color})},null,4),v(`span`,jn,o(e.name),1)]),v(`span`,Mn,o(e.price.toLocaleString(`ru`))+` ₽`,1)]))),128))])]),y.value.length?(z(),H(`div`,Nn,[r[11]||=v(`h3`,{class:`text-sm font-semibold text-slate-300 mb-3`},`Выбранные места`,-1),v(`div`,Pn,[(z(!0),H(C,null,W(y.value,e=>(z(),H(`div`,{key:e,class:`flex items-center justify-between text-sm`},[v(`span`,Fn,o(O(e)),1),v(`div`,In,[v(`span`,Ln,o(E(e).toLocaleString(`ru`))+` ₽`,1),v(`button`,{class:`text-slate-500 hover:text-red-400 transition-colors`,onClick:t=>S(e)},[...r[9]||=[v(`i`,{class:`pi pi-times text-xs`},null,-1)]],8,Rn)])]))),128))]),v(`div`,zn,[r[10]||=v(`span`,{class:`text-slate-400`},`Итого`,-1),v(`span`,Bn,o(k.value.toLocaleString(`ru`))+` ₽`,1)])])):(z(),H(`div`,Vn,[...r[12]||=[v(`i`,{class:`pi pi-hand-pointer text-2xl text-slate-600 mb-2 block`},null,-1),v(`p`,{class:`text-sm text-slate-500`},`Нажмите на свободное место, чтобы выбрать`,-1)]]))])])],64)):P(``,!0),L(u(rt),{visible:x.value,"onUpdate:visible":r[2]||=e=>x.value=e,header:`Оформление заказа`,style:{width:`26rem`},modal:``,class:`!bg-slate-900`},{default:D(()=>[L(dn,{"event-id":n.id,"seat-ids":y.value,"total-amount":k.value,onSuccess:ee,onCancel:r[1]||=e=>x.value=!1},null,8,[`event-id`,`seat-ids`,`total-amount`])]),_:1},8,[`visible`])])}}});export{Hn as default};