(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{21:function(e,t,n){e.exports={center:"Header_center__Lvs4_"}},40:function(e,t,n){e.exports={App:"App_App__2poDA"}},45:function(e,t,n){e.exports={range:"SuperRange_range__2vMR-"}},46:function(e,t,n){e.exports={error:"Error404_error__2PwMc"}},51:function(e,t,n){e.exports=n(62)},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),o=(n(56),n(40)),u=n.n(o),i=n(20),m=n(21),s=n.n(m),v=n(3),E=n(13);var d=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(new Date),o=Object(E.a)(c,2),u=o[0],i=o[1],m=Object(a.useState)(!1),s=Object(E.a)(m,2),v=s[0],d=s[1],g=function(e){return e<10?"0"+e:e},f=function(){clearInterval(n)},p=g(null===u||void 0===u?void 0:u.getHours())+":"+g(null===u||void 0===u?void 0:u.getMinutes())+":"+g(null===u||void 0===u?void 0:u.getSeconds()),h=null===u||void 0===u?void 0:u.toDateString();return Object(a.useEffect)((function(){return f()}),[]),r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},"TIME: ",p),v&&r.a.createElement("div",null,"DATE: ",h),r.a.createElement("button",{onClick:function(){f();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement("button",{onClick:f},"stop"))};var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(d,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},f=n(24),p=n(80),h=function(e){var t=e.error,n=(e.className,e.onClick),a=(e.color,Object(f.a)(e,["error","className","onClick","color"]),t?"secondary":"primary");return r.a.createElement(p.a,{variant:"contained",color:a,onClick:n,style:{margin:"10px 0px"}},"PUSH ")},b=n(29),w=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif",style:{height:200}}))},j=n(48),O={loading:!1},k=function(e){return{type:"LOADING-STATUS",loading:e}};var y=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",t?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement(h,{onClick:function(){e((function(e){e(k(!0)),setTimeout((function(){e(k(!1))}),2e3)}))}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=n(45),S=n.n(C),_=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=(e.className,Object(f.a)(e,["type","onChange","onChangeRange","className"]));return r.a.createElement("div",{className:S.a.istyle},r.a.createElement("input",Object.assign({type:"range","aria-valuenow":50,onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)}},a)))},x=n(79),N=n(81),A=Object(x.a)({root:{width:300,margin:"auto"}});function T(e){return"".concat(e,"\xb0C")}var D=function(e){var t=e.startValue1,n=e.startValue2,a=e.onChangeRange,l=(e.value1,Object(f.a)(e,["startValue1","startValue2","onChangeRange","value1"]),r.a.useState([t,n])),c=Object(E.a)(l,2),o=c[0],u=c[1],i=A();return r.a.createElement("div",{className:i.root},r.a.createElement(N.a,{value:o,onChange:function(e,t){u(t),a&&a(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:T}))};var L=function(){var e=Object(a.useState)(50),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(30),o=Object(E.a)(c,2),u=o[0],i=o[1],m=Object(a.useState)(60),s=Object(E.a)(m,2),v=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,n),r.a.createElement("div",null," ",r.a.createElement(_,{onChangeRange:function(e){return l(e)}}),"   ")),r.a.createElement("div",null,r.a.createElement("span",null," "),r.a.createElement("span",null,u),r.a.createElement("div",null," ",r.a.createElement(D,{startValue1:u,startValue2:v,onChangeRange:function(e){var t=Object(E.a)(e,2),n=t[0],a=t[1];i(n),d(a)}})),r.a.createElement("span",null,v)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var R=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(L,null))},M=n(46),V=n.n(M);var I=function(){return r.a.createElement("div",{className:V.a.error},r.a.createElement("div",null,"404"),r.a.createElement("img",{src:"https://programmist1s.ru/wp-content/uploads/2013/09/Pole-ob'ekta-nedostupno-dlya-zapisi-1S.jpg",alt:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442"}),r.a.createElement("div",null,"Page not found!"))};var P=function(){return r.a.createElement("div",{style:{textAlign:"center",fontSize:"36px"}},r.a.createElement("div",null," \u042f \u0415\u0421\u0422\u042c \u0414\u0416\u0423\u041d "),r.a.createElement("img",{src:"https://www.okino.ua/media/var/news/2017/08/07/baby_groot.jpg"}))};var B=function(){return r.a.createElement("div",{style:{textAlign:"center",fontSize:"36px"}},r.a.createElement("div",null," \u042f \u0415\u0421\u0422\u042c \u0414\u0416\u0423\u041d++++++++++"),r.a.createElement("img",{src:"https://www.film.ru/sites/default/files/styles/thumb_og_800x420/public/filefield_paths/maxresdefault_11.jpg"}))},J="/pre-junior",z="/Jun",H="/JunPlus";var U=function(){return r.a.createElement("div",null,r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0,render:function(){return r.a.createElement(v.a,{to:J})}}),r.a.createElement(v.b,{path:J,render:function(){return r.a.createElement(R,null)}}),"// add routes",r.a.createElement(v.b,{path:z,render:function(){return r.a.createElement(P,null)}}),r.a.createElement(v.b,{path:H,render:function(){return r.a.createElement(B,null)}}),r.a.createElement(v.b,{render:function(){return r.a.createElement(I,null)}})))};var G=function(){return r.a.createElement("div",{className:s.a.item},r.a.createElement("div",null,r.a.createElement(i.b,{to:J,activeClassName:s.a.activeLink},"\u0414\u043e\u043c\u0430\u0448\u043a\u0438")),r.a.createElement("div",null,r.a.createElement(i.b,{to:z,activeClassName:s.a.activeLink},"\u0414\u0436\u0443\u043d")),r.a.createElement("div",null,r.a.createElement(i.b,{to:H,activeClassName:s.a.activeLink},"\u0414\u0436\u0443\u043d \u041f\u041b\u042e\u0421")))};var W=function(){return r.a.createElement("div",{className:s.a.center},r.a.createElement(i.a,null,r.a.createElement(G,null),r.a.createElement(U,null)))};var q=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(25),Y=n(47),$=Object(X.c)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING-STATUS":return Object(j.a)({},e,{loading:t.loading});default:return e}}}),F=Object(X.d)($,Object(X.a)(Y.a));window.store=F,c.a.render(r.a.createElement(b.a,{store:F},r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null))," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.83659206.chunk.js.map