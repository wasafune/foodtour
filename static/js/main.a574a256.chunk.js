(this.webpackJsonpfoodtour=this.webpackJsonpfoodtour||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(102),a(103),a(205)),i=a(207),u=a(162),s=a(200),d=a(11),m=a(208),p=a(196),f=a(211),b=a(206),g=a(210),v=a(9),O=a(54),h=a.n(O),E=a(81),y=a(82),j=a.n(y);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=Object(n.createContext)(),C="https://foodtour-api.herokuapp.com";function N(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)({}),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(n.useState)(!1),p=Object(d.a)(m,2),f=p[0],b=p[1],g=Object(n.useState)({selected:[],items:[]}),O=Object(d.a)(g,2),y=O[0],x=O[1],N=Object(n.useState)(Object.keys(JSON.parse(localStorage.getItem("tourFavorites")||"{}")).length),k=Object(d.a)(N,2),F=k[0],P=k[1],I=function(){var e=Object(E.a)(h.a.mark((function e(t,a,n,r,o){var l,i,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={term:t,location:a,range:n,limit:r,sortBy:o},x({selected:[],items:[]}),e.next=4,j.a.get("".concat(C,"/search"),{params:l});case 4:i=e.sent,u=i.data,c(u),b(!1),s(l);case 9:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o){return e.apply(this,arguments)}}();return r.a.createElement(w.Provider,{value:{tour:o,tourInput:u,tourConfirmed:f,savedTour:y,updateTour:I,toggleTourConfirmed:function(){return b(!f)},updateSavedTour:function(e,t){x({selected:e,items:t})},setFavoriteTour:function(e){var t=localStorage.getItem("tourFavorites")||"{}";t=S({},t=JSON.parse(t),Object(v.a)({},e,{savedTour:y,tourInput:u,tour:o})),localStorage.setItem("tourFavorites",JSON.stringify(t)),P(F+1)},applyFavoriteTour:function(e){var t=localStorage.getItem("tourFavorites"),a=JSON.parse(t)[e];c(a.tour),x(a.savedTour),s(a.tourInput),b(!0)},savedTourCount:F,removeFavoriteTour:function(e){var t=localStorage.getItem("tourFavorites")||"{}";delete(t=S({},t=JSON.parse(t)))[e],localStorage.setItem("tourFavorites",JSON.stringify(t)),P(F-1)}}},e.children)}function k(){var e=F(),t=Object(n.useContext)(w),a=t.savedTourCount,o=t.applyFavoriteTour,c=t.removeFavoriteTour,l=Object(n.useState)(JSON.parse(localStorage.getItem("tourFavorites")||"{}")),u=Object(d.a)(l,2),s=u[0],m=u[1];Object(n.useEffect)((function(){m(JSON.parse(localStorage.getItem("tourFavorites")||"{}"))}),[a]);var v=Object.keys(s).map((function(t,a){return r.a.createElement(i.a,{className:e.box,key:"".concat(t).concat(a)},r.a.createElement(g.a,{value:t,onClick:function(){return o(t)}},t),r.a.createElement(p.a,{className:e.xButton,variant:"contained",color:"primary",value:t,onClick:function(){return c(t)}},"X"))}));return r.a.createElement(i.a,null,r.a.createElement(f.a,null,"Favorites"),r.a.createElement(b.a,{className:e.select,value:"Favorites",label:"Favorites"},v))}var F=Object(s.a)((function(e){return{box:{display:"flex"},select:{width:150},xButton:{width:15}}}));function P(e){var t=I(),a=Object(n.useContext)(w),o=a.tour,c=a.tourInput,l=a.updateTour,u=Object(n.useState)(""),s=Object(d.a)(u,2),v=s[0],O=s[1],h=Object(n.useState)(""),E=Object(d.a)(h,2),y=E[0],j=E[1],x=Object(n.useState)(10),S=Object(d.a)(x,2),C=S[0],N=S[1],F=Object(n.useState)(10),P=Object(d.a)(F,2),D=P[0],T=P[1],A=Object(n.useState)("rating"),R=Object(d.a)(A,2),B=R[0],J=R[1];return Object(n.useEffect)((function(){c.term&&(O(c.term),j(c.location),N(c.range),T(c.limit),J(c.sortBy))}),[c]),r.a.createElement("form",{className:t.container,onSubmit:function(e){e.preventDefault(),l(v,y,C,D,B)}},r.a.createElement("h1",{className:t.h1,style:{display:o.length?"none":"block"}},"Food Tour App!"),r.a.createElement(i.a,{className:t.box},r.a.createElement(m.a,{className:t.textFieldLeft,id:"term-field",label:"Find...",value:v,onChange:function(e){return O(e.target.value)}}),r.a.createElement(m.a,{className:t.textFieldMain,id:"location-field",label:"Location",value:y,onChange:function(e){return j(e.target.value)}}),r.a.createElement(p.a,{className:t.button,variant:"contained",color:"primary",type:"submit"},"Search")),r.a.createElement(i.a,{className:t.boxAdv},r.a.createElement(i.a,null,r.a.createElement(f.a,null,"Search Radius"),r.a.createElement(b.a,{className:t.select,value:C,label:"Search Radius",onChange:function(e){return N(e.target.value)}},r.a.createElement(g.a,{value:5},"5 miles"),r.a.createElement(g.a,{value:10},"10 miles"),r.a.createElement(g.a,{value:15},"15 miles"),r.a.createElement(g.a,{value:20},"20 miles"))),r.a.createElement(i.a,null,r.a.createElement(f.a,null,"Number of Results"),r.a.createElement(b.a,{className:t.select,value:D,label:"Number of Results",onChange:function(e){return T(e.target.value)}},r.a.createElement(g.a,{value:5},"5"),r.a.createElement(g.a,{value:10},"10"),r.a.createElement(g.a,{value:15},"15"),r.a.createElement(g.a,{value:20},"20"))),r.a.createElement(i.a,null,r.a.createElement(f.a,null,"Sort By"),r.a.createElement(b.a,{className:t.select,value:B,label:"Sort By",onChange:function(e){return J(e.target.value)}},r.a.createElement(g.a,{value:"rating"},"Rating"),r.a.createElement(g.a,{value:"distance"},"Distance"),r.a.createElement(g.a,{value:"name"},"Name"))),r.a.createElement(k,null)))}var I=Object(s.a)((function(e){return{container:{display:"flex",flexDirection:"column",justifyContent:"center"},box:{backgroundColor:"white",display:"flex",flexDirection:"row",justifyContent:"center"},boxAdv:{padding:"6px 0 0 0",display:"flex",flexDirection:"row",justifyContent:"center"},textFieldLeft:{width:300,padding:"0 0 0 7px"},textFieldMain:{width:300,padding:"0 0 0 0"},button:{borderRadius:0},select:{width:150},h1:{textAlign:"center"}}})),D=a(204),T=a(38),A=a(201),R=a(202),B=a(203),J=a(163),_=a(209),H=Object(s.a)({cardContent:{display:"flex"},boxContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"30vw"},box:{display:"flex",flexDirection:"column",padding:"10px"}});function L(e){var t=H();return r.a.createElement(A.a,null,r.a.createElement(R.a,{className:t.cardContent},r.a.createElement(B.a,{href:e.url},r.a.createElement("img",{width:"130px",height:"130px",src:e.imageUrl})),r.a.createElement(i.a,{className:t.boxContainer},r.a.createElement(i.a,{className:t.box},r.a.createElement(J.a,{component:"h4"},e.rank,": ",r.a.createElement(B.a,{href:e.url},e.name)),r.a.createElement(_.a,{value:e.rating,precision:.5,size:"small",readOnly:!0}),r.a.createElement(J.a,{component:"h5"},e.displayPhone),r.a.createElement(J.a,{component:"h5"},e.displayAddress),r.a.createElement(J.a,{component:"h5"},e.price)))))}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),o=Object(d.a)(r,1)[0];return n.splice(a,0,o),n},W=function(e,t,a,n){var r=Array.from(e),o=Array.from(t),c=r.splice(a.index,1),l=Object(d.a)(c,1)[0];o.splice(n.index,0,l);var i={};return i[a.droppableId]=r,i[n.droppableId]=o,i},z=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({userSelect:"none",padding:4,margin:"0"},t)},G=function(e,t){return{background:e?"lightblue":"#ff8080",padding:4,width:t?0:"50%",height:650,overflow:"auto",transition:"1s"}},X=function(e,t){return{background:"lightgreen",padding:4,width:t?"100%":"50%",height:650,overflow:"auto",transition:"1s"}},$=Object(s.a)((function(e){return{box:{display:"flex",justifyContent:"center"},boxContainerHidden:{display:"none"},boxBottom:{textAlign:"center",padding:"12px 0",backgroundColor:"burlywood"},textField:{backgroundColor:"white",width:260,margin:"6px 0"},p:{margin:"0 0 4px 0"}}}));function q(){var e=$(),t=Object(n.useContext)(w),a=t.tour,o=t.tourConfirmed,c=t.savedTour,l=t.toggleTourConfirmed,u=t.updateSavedTour,s=t.setFavoriteTour,f=Object(n.useState)([]),b=Object(d.a)(f,2),g=b[0],v=b[1],O=Object(n.useState)([]),h=Object(d.a)(O,2),E=h[0],y=h[1],j=Object(n.useState)(""),x=Object(d.a)(j,2),S=x[0],C=x[1];Object(n.useEffect)((function(){if(c.selected.length)return v(c.items),void y(c.selected);var e=a?a.map((function(e,t){return{id:"".concat(t),content:e}})):[];v(e),y([])}),[a,c]);var N={items:g,selected:E},k=function(e){return N[e]};return r.a.createElement(i.a,{className:a.length?"":e.boxContainerHidden},r.a.createElement(T.a,{onDragEnd:function(e){var t=e.source,a=e.destination;if(a)if(t.droppableId===a.droppableId){var n=M(k(t.droppableId),t.index,a.index);("items"===t.droppableId?v:y)(n)}else{var r=W(k(t.droppableId),k(a.droppableId),t,a);v(r.items),y(r.selected)}}},r.a.createElement(i.a,{className:e.box},r.a.createElement(T.c,{droppableId:"selected"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:X(t.isDraggingOver,o)},E.map((function(e,t){return r.a.createElement(T.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:z(a.isDragging,t.draggableProps.style)}),r.a.createElement(D.a,{in:!0},r.a.createElement(i.a,null,r.a.createElement(L,{key:e.content.id,rank:Number(e.id)+1,name:e.content.name,url:e.content.url,imageUrl:e.content.image_url,rating:e.content.rating,displayAddress:e.content.location.display_address,displayPhone:e.content.display_phone,distance:e.content.distance,price:e.content.price,reviewCount:e.content.review_count}))))}))})),e.placeholder)})),r.a.createElement(T.c,{droppableId:"items"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:G(t.isDraggingOver,o)},g.map((function(e,t){return r.a.createElement(T.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:z(a.isDragging,t.draggableProps.style)}),r.a.createElement(D.a,{in:!0},r.a.createElement(i.a,null,r.a.createElement(L,{key:e.content.id,rank:Number(e.id)+1,name:e.content.name,url:e.content.url,imageUrl:e.content.image_url,rating:e.content.rating,displayAddress:e.content.location.display_address,displayPhone:e.content.display_phone,distance:e.content.distance,price:e.content.price,reviewCount:e.content.review_count}))))}))})),e.placeholder)})))),r.a.createElement(i.a,{className:e.boxBottom},r.a.createElement("p",{className:e.p},"Drag and drop from RED to GREEN to create your tour!"),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){l(),o||u(E,g)}},o?"Back to Edit":"Confirm Tour!"),r.a.createElement(i.a,{visibility:o?"visible":"hidden"},r.a.createElement(m.a,{className:e.textField,id:"term-field",label:"Cool tour name here!",value:S,onChange:function(e){return C(e.target.value)}}),r.a.createElement(i.a,null,r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return s(S)}},"Favorite")))))}var K=Object(s.a)((function(e){return{container:{padding:0},boxSearchFull:{display:"flex",height:"100vh",justifyContent:"center",flexDirection:"row",transition:"1s",background:"teal",padding:"6px 0"},boxSearchCollapsed:{display:"flex",justifyContent:"center",flexDirection:"row",transition:"1s",background:"#f4efef",padding:"6px 0"},paperSearchFull:{display:"flex",margin:"25vh 0 0 0",height:400,width:900,justifyContent:"center",transition:"1s",background:"#f4efef"},paperSearchCollapsed:{display:"flex",width:900,justifyContent:"center",background:"#f4efef",transition:"1s"}}}));function Q(e){var t=K(),a=Object(n.useContext)(w).tour;return r.a.createElement(l.a,{className:t.container},r.a.createElement(i.a,{className:a.length?t.boxSearchCollapsed:t.boxSearchFull},r.a.createElement(u.a,{elevation:a.length?0:3,className:a.length?t.paperSearchCollapsed:t.paperSearchFull},r.a.createElement(P,null))),r.a.createElement(q,null))}var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(161)}},[[97,1,2]]]);
//# sourceMappingURL=main.a574a256.chunk.js.map