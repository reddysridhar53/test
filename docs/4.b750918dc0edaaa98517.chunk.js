(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{f29132bae59dd776a208:function(e,n,t){"use strict";t.r(n);var o=t("8af190b70a6bc55c6f1b"),r=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),i=t("0d7f0986bcd2f33d8a2a"),a=t("a28fc3c963a1d4d1a2e5"),c=t("ab4cb61bcb2dc161defb"),d=t("adc20f99e57c573c589c"),l=t("d95b0cf107403b178365"),s=t("54f683fcda7806277002"),f="GET_CONTINENT_BY_CODE",p="GET_CONTINENT_BY_CODE_SUCCESS",u="GET_CONTINENT_BY_CODE_ERROR",m=Object(s.fromJS)({loadingContinent:!1,continent:{}});var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return e.set("loadingContinent",!0);case u:return e.set("loadingContinent",!1);case p:return e.set("loadingContinent",!1).set("continent",Object(s.fromJS)(n.payload.continent));default:return e}},y=function(e){return e.get("continentPage",m)},g=t("6c68d13fe9e3e77d8fc4"),h=t("74c8eb96ab0c694f20d1");function v(e){return{type:u,payload:e}}var x=regeneratorRuntime.mark(C),w=regeneratorRuntime.mark(_);function C(e){var n,t,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(g.b)(h.a,n);case 4:return t=r.sent,o=t.data,r.next=8,Object(g.c)({type:p,payload:o});case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(g.c)(v(r.t0));case 14:case"end":return r.stop()}},x,this,[[1,10]])}function _(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.d)(f,C)]);case 2:case"end":return e.stop()}},w,this)}var O,k=t("0b3cb19af78752326f59"),E=t("e95a63b25fb92ed15721"),j=Object(k.c)(E.Link).withConfig({displayName:"BackButton",componentId:"sc-4dvl2d-0"})(["color:rgb(162,103,214);display:flex;font-size:1.5em;margin:1em 0;cursor:pointer;text-decoration:none;&:hover{color:rgb(83,77,253);}"]),N=t("f3e27fd1cdba8fb4b92c"),P=k.c.div.withConfig({displayName:"styledElements__PostPageWrapper",componentId:"sc-1by0kg3-0"})(["display:flex;flex:1;width:100%;height:100%;flex-direction:column;"]),I=k.c.h1.withConfig({displayName:"styledElements__H",componentId:"sc-1by0kg3-1"})(["font-size:2.4em;font-weight:600;color:rgba(0,0,0,1);text-transform:capitalize;"]),S=k.c.div.withConfig({displayName:"styledElements__CountryItemWrapper",componentId:"sc-1by0kg3-2"})(["background:#fff;padding:1em;flex:0 32%;display:flex;flex-direction:column;margin-bottom:1%;margin-right:1%;border-radius:5px;box-shadow:2px 2px 2px 0px rgba(0,0,0,0.01);@media only screen and (max-width:964px) and (min-width:424px){flex:0 48%;}@media only screen and (max-width:424px){flex:0 100%;margin-right:0%;}"]),T=k.c.div.withConfig({displayName:"styledElements__ContinentCountriesWrapper",componentId:"sc-1by0kg3-3"})(["width:100%;max-width:964px;margin:0 auto;@media screen and (max-width:964px){padding:10px;}"]),z=k.c.table.withConfig({displayName:"styledElements__CountryTable",componentId:"sc-1by0kg3-4"})(["boder"]),R=k.c.tr.withConfig({displayName:"styledElements__CountryTr",componentId:"sc-1by0kg3-5"})(["border:1px solid rgba(0,0,0,0.1);"]),B=k.c.td.withConfig({displayName:"styledElements__CountryTd",componentId:"sc-1by0kg3-6"})(["font-size:1.2em;padding:5px 10px;text-transform:capitalize;color:rgba(0,0,0,1);border:1px solid rgba(0,0,0,0.1);&:first-child{color:rgba(0,0,0,0.75);}"]),D=k.c.div.withConfig({displayName:"styledElements__ContinentContainer",componentId:"sc-1by0kg3-7"})(["display:flex;flex:1;flex-direction:column;"]),G=k.c.div.withConfig({displayName:"styledElements__CountriesContent",componentId:"sc-1by0kg3-8"})(["font-size:1.4em;display:flex;flex-wrap:wrap;flex:1;"]),J=(k.c.div.withConfig({displayName:"styledElements__PostItem",componentId:"sc-1by0kg3-9"})(["background:#fff;padding:2em;display:flex;flex-direction:column;margin-bottom:1em;border-radius:5px;box-shadow:2px 2px 2px 0px rgba(0,0,0,0.01);"]),k.c.h2.withConfig({displayName:"styledElements__PostTitle",componentId:"sc-1by0kg3-10"})(["font-size:2em;color:rgba(0,0,0,0.75);margin:0;margin-bottom:0.5em;@media screen and (max-width:964px){font-size:1.5em;}"]),k.c.div.withConfig({displayName:"styledElements__PostBody",componentId:"sc-1by0kg3-11"})(["font-size:1.5em;font-weight:500;color:rgba(0,0,0,0.75);text-transform:capitalize;@media screen and (max-width:964px){font-size:1.2em;}"]),k.c.div.withConfig({displayName:"styledElements__PageTitle",componentId:"sc-1by0kg3-12"})(["display:flex;flex:1;font-size:2em;margin:1em 0 0.5em;font-weight:600;color:rgba(0,0,0,1);text-transform:capitalize;"])),A=k.c.div.withConfig({displayName:"styledElements__PageTitleWrapper",componentId:"sc-1by0kg3-13"})(["display:flex;align-items:center;justify-content:space-between;"]);function W(e,n,t,o){O||(O="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var c=new Array(i),d=0;d<i;d++)c[d]=arguments[d+3];n.children=c}return{$$typeof:O,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var $,Y=function(e){var n=e.country,t=Object.keys(n),r=Object(o.useMemo)(function(){return t.filter(function(e){return"__typename"!==e})},[1]);return W(S,{},void 0,W(z,{},void 0,r.map(function(e){var t=n[e]||"-";return W(R,{},e,W(B,{main:!0},void 0,e),W(B,{},void 0,"languages"!==e?t:t.map(function(e,n){return W("span",{},e.name,"".concat(e.name).concat(n!==t.length-1?", ":""))})))})))};function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,n,t,o){$||($="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var c=new Array(i),d=0;d<i;d++)c[d]=arguments[d+3];n.children=c}return{$$typeof:$,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function M(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,"PostPage",function(){return ee});var K=H(N.a,{}),Q=H(I,{},void 0,"No Continent Found."),V=H(i.Helmet,{},void 0,H("title",{},void 0,"AasanJobs Continent Detail Page - Frontend Task"),H("meta",{name:"description",content:"Continent Detail Page"})),X=H(N.a,{}),Z=H(j,{to:"/"},void 0,"Go to Continents"),ee=function(e){function n(){var e,t,o,r,i,a,c;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var d=arguments.length,l=new Array(d),s=0;s<d;s++)l[s]=arguments[s];return o=this,r=(e=L(n)).call.apply(e,[this].concat(l)),t=!r||"object"!==F(r)&&"function"!==typeof r?q(o):r,i=q(q(t)),c=function(){var e=t.props,n=e.continent;return e.loadingContinent?K:Object.keys(n).length?n.countries.map(function(e){return H(Y,{country:e},e.code)}):Q},(a="renderCountries")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,t}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(n,o["Component"]),t=n,(r=[{key:"componentDidMount",value:function(){var e=this.props.match.params.continentCode;this.props.onGetContinent(e)}},{key:"render",value:function(){var e=this.props,n=e.loadingContinent,t=e.continent;return H(P,{},void 0,V,n?X:H(T,{},void 0,Z,H(D,{},void 0,H(A,{},void 0,H(J,{},void 0,"Continent - ".concat(t.name))),H(G,{},void 0,this.renderCountries()))))}}])&&M(t.prototype,r),i&&M(t,i),n}(),ne=Object(a.b)({continent:Object(a.a)(y,function(e){return e.get("continent").toJS()}),loadingContinent:Object(a.a)(y,function(e){return e.get("loadingContinent")})}),te=Object(r.connect)(ne,function(e){return{onGetContinent:function(n){return e({type:f,payload:n})}}}),oe=Object(l.a)({key:"continentPage",reducer:b}),re=Object(d.a)({key:"continentPage",saga:_});n.default=Object(c.compose)(oe,re,te)(ee)}}]);