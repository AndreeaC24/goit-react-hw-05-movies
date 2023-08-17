"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var c=t(9439),s=t(7689),a=t(1087),r=t(2791),i=t(7157),o=t(3200),l=t(5647),d="MovieItem_custom-img-size__rPLbw",u=t(184),f=function(){var e,n,t,f,m,h,v,x=(0,s.UO)().movieId,j=(0,r.useState)(null),p=(0,c.Z)(j,2),b=p[0],g=p[1],N=(0,r.useState)(!0),w=(0,c.Z)(N,2),k=w[0],_=w[1],y=(0,r.useState)(!1),O=(0,c.Z)(y,2),S=O[0],U=O[1],Z=(0,r.useState)(!1),C=(0,c.Z)(Z,2),L=C[0],q=C[1],E=(0,s.TH)();return(0,r.useEffect)((function(){(0,l.Ny)(x).then((function(e){!1===e.success?(g(null),q(!0)):g(e)})).catch((function(e){console.log(e),U(!0)})).finally((function(){_(!1)}))}),[x]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)(a.rU,{to:null!==(e=null===E||void 0===E||null===(n=E.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",className:"btn btn-light mb-3 mt-1",children:["\u2190"," Go Back"]}),k&&(0,u.jsx)(i.a,{}),S&&(0,u.jsx)(o.j,{}),L&&(0,u.jsx)("h1",{children:"Requested movie does not exist"}),b&&(0,u.jsx)("div",{className:"card mb-3",children:(0,u.jsxs)("div",{className:"row g-0",children:[(0,u.jsx)("div",{className:"col-md-4 d-flex justify-content-center align-items-center d-md-block",children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(b.poster_path),alt:"Movie Poster",className:"img-fluid rounded-start ".concat(d," ")})}),(0,u.jsx)("div",{className:"col-md-8",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsxs)("h4",{className:"card-title fs-2 fw-bold pb-3",children:[null!==(t=b.title)&&void 0!==t?t:"Unknown",(0,u.jsxs)("span",{children:["(",b.release_date.split("-")[0],")"]})]}),(0,u.jsxs)("p",{className:"card-text pb-2",children:[" User score:",(0,u.jsxs)("span",{className:"card-text fw-light",children:[" ",(10*b.vote_average).toFixed(0),"% "]})]}),(0,u.jsx)("p",{className:"card-text fs-6 fw-bold",children:"Overview:"}),(0,u.jsxs)("span",{className:"card-text fw-light pt-1",children:[" ",b.overview]}),(0,u.jsx)("p",{className:"card-text fs-6 fw-bold mt-4",children:"Genres:"}),b.genres&&b.genres.length>0&&(0,u.jsxs)("span",{className:"card-text fw-light",children:[" ",b.genres.map((function(e){return e.name})).join(", ")]})]})}),(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"card-title fs-4 fw-bold p-3",children:" Additional information: "}),(0,u.jsxs)("ul",{className:"nav col-12 col-lg-auto me-lg-auto gap-5 pb-3 mb-3",children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{className:"nav-link px-3 mx-2 text-dark border btn btn-hover btn-info",to:"cast",state:{from:null!==(f=null===E||void 0===E||null===(m=E.state)||void 0===m?void 0:m.from)&&void 0!==f?f:"/"},children:" Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{className:"nav-link px-3 text-dark border btn btn-hover btn-info",to:"reviews",state:{from:null!==(h=null===E||void 0===E||null===(v=E.state)||void 0===v?void 0:v.from)&&void 0!==h?h:"/"},children:" Reviews"})})]}),(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(i.a,{}),children:(0,u.jsx)(s.j3,{})})]})})]})})]})}},5647:function(e,n,t){t.d(n,{Ny:function(){return r},Tg:function(){return a},oO:function(){return o},on:function(){return l},y:function(){return i}});var c="https://api.themoviedb.org/3/",s="44cd7d40e9c9ffc80f6b2e51bac6d9ee",a=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(s)).then((function(e){return e.json()}))},r=function(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(s)).then((function(e){return e.json()}))},i=function(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(s)).then((function(e){return e.json()}))},o=function(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(s)).then((function(e){return e.json()}))},l=function(e){return fetch("".concat(c,"search/movie?page=1&api_key=").concat(s,"&query=").concat(e)).then((function(e){return e.json()}))}},3200:function(e,n,t){t.d(n,{j:function(){return s}});var c=t(184),s=function(){return(0,c.jsx)("h2",{children:"Error loading movies"})}}}]);
//# sourceMappingURL=416.b828142b.chunk.js.map