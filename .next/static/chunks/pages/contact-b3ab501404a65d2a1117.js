_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{ALdH:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),f=o.a.createElement;t.default=function(e){return f("div",null,f("p",null,"get at me breh"),f(c.a,{href:"/"},f("a",null,"BACK HOME")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),f=n("elyg"),u=(n("g/15"),n("nOHt")),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,f.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",w=c.default.useMemo((function(){var t=(0,f.resolveHref)(v,e.href);return{href:t,as:e.as?(0,f.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),y=w.href,E=w.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,f.isLocalURL)(y)&&!l[y+"%"+E])return p(a,(function(){d(h,y,E)}))}),[t,a,y,E,h]);var g=e.children,_=e.replace,b=e.shallow,m=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var L=c.Children.only(g),M={ref:function(e){e&&i(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,f.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,E,_,b,m)}};return t&&(M.onMouseEnter=function(e){(0,f.isLocalURL)(y)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(h,y,E,{priority:!0}))}),!e.passHref&&("a"!==L.type||"href"in L.props)||(M.href=(0,f.addBasePath)(E)),c.default.cloneElement(L,M)};t.default=h},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])}},[["lqnA",0,1,2]]]);