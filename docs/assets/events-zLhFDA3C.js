import{r as e,t}from"./api-DmUaz18J.js";import{$ as n,Q as r,Tt as i,Z as a,a as o,c as s,ct as c,dt as l,et as u,kt as d,lt as f,mt as p,tt as m,w as h}from"./index-D1GOVFNd.js";var g=s.extend({name:`skeleton`,style:`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-skeleton p-component`,{"p-skeleton-circle":t.shape===`circle`,"p-skeleton-animation-none":t.animation===`none`}]}},inlineStyles:{root:{position:`relative`}}}),_={name:`BaseSkeleton`,extends:o,props:{shape:{type:String,default:`rectangle`},size:{type:String,default:null},width:{type:String,default:`100%`},height:{type:String,default:`1rem`},borderRadius:{type:String,default:null},animation:{type:String,default:`wave`}},style:g,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},v(e)}function y(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=x(e,`string`);return v(t)==`symbol`?t:t+``}function x(e,t){if(v(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(v(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var S={name:`Skeleton`,extends:_,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return h(y({},this.shape,this.shape))}}},C=[`data-p`];function w(e,t,n,r,i,a){return f(),m(`div`,c({class:e.cx(`root`),style:[e.sx(`root`),a.containerStyle],"aria-hidden":`true`},e.ptmi(`root`),{"data-p":a.dataP}),null,16,C)}S.render=w;var T=s.extend({name:`tag`,style:`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,classes:{root:function(e){var t=e.props;return[`p-tag p-component`,{"p-tag-info":t.severity===`info`,"p-tag-success":t.severity===`success`,"p-tag-warn":t.severity===`warn`,"p-tag-danger":t.severity===`danger`,"p-tag-secondary":t.severity===`secondary`,"p-tag-contrast":t.severity===`contrast`,"p-tag-rounded":t.rounded}]},icon:`p-tag-icon`,label:`p-tag-label`}}),E={name:`BaseTag`,extends:o,props:{value:null,severity:null,rounded:Boolean,icon:String},style:T,provide:function(){return{$pcTag:this,$parentInstance:this}}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},D(e)}function O(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=A(e,`string`);return D(t)==`symbol`?t:t+``}function A(e,t){if(D(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(D(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var j={name:`Tag`,extends:E,inheritAttrs:!1,computed:{dataP:function(){return h(O({rounded:this.rounded},this.severity,this.severity))}}},M=[`data-p`];function N(e,t,i,a,o,s){return f(),m(`span`,c({class:e.cx(`root`),"data-p":s.dataP},e.ptmi(`root`)),[e.$slots.icon?(f(),n(p(e.$slots.icon),c({key:0,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(f(),m(`span`,c({key:1,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):u(``,!0),e.value!=null||e.$slots.default?l(e.$slots,`default`,{key:2},function(){return[r(`span`,c({class:e.cx(`label`)},e.ptm(`label`)),d(e.value),17)]}):u(``,!0)],16,M)}j.render=N;var P={all:[`events`],detail:e=>[`events`,e],seats:e=>[`events`,e,`seats`]};function F(){return e({queryKey:P.all,queryFn:()=>t(`/ticket-events`)})}function I(n){return e({queryKey:a(()=>P.detail(i(n))),queryFn:()=>t(`/ticket-events/${i(n)}`)})}function L(n){return e({queryKey:a(()=>P.seats(i(n))),queryFn:()=>t(`/ticket-events/${i(n)}/seats`),refetchInterval:15e3})}export{S as a,j as i,L as n,F as r,I as t};