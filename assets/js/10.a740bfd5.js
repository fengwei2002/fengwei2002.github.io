(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{474:function(e,n,r){"use strict";var t=r(4),i=r(42).findIndex,u=r(74),l=!0;"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),t({target:"Array",proto:!0,forced:l},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),u("findIndex")},487:function(e,n,r){"use strict";r.r(n);r(474),r(73),r(41);var t={name:"TableOfContents",props:{includeLevel:{type:Array,required:!1,default:function(){return[2,3]}}},computed:{headers:function(){if(this.$page&&this.$page.headers){var e=this.includeLevel[0],n=this.includeLevel[1];return function r(t){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,u=[],l=0;l!==t.length;){var d=t.slice(l+1).findIndex((function(e){return e.level===i})),s=-1===d?t.length:d+l+1,c=t[l];if(c.level>=i&&c.level<=n){var a=t.slice(l+1,s),o=i<n&&a.length>0?r(a,i+1):null;u.push(Object.assign(Object.assign({},c),{children:o}))}l=s}return u}(this.$page.headers)}return null}},render:function(e){if(!this.headers)return null;return e("div",[function n(r){return e("ul",r.map((function(r){return e("li",[e("RouterLink",{props:{to:"#".concat(r.slug)}},r.title),r.children?n(r.children):null])})))}(this.headers)])}};n.default=t}}]);