"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[152],{5647:function(e,n,t){t.d(n,{Ny:function(){return r},Tg:function(){return a},oO:function(){return o},on:function(){return l},y:function(){return i}});var c="https://api.themoviedb.org/3/",s="44cd7d40e9c9ffc80f6b2e51bac6d9ee",a=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(s)).then((function(e){return e.json()}))},r=function(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(s)).then((function(e){return e.json()}))},i=function(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(s)).then((function(e){return e.json()}))},o=function(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(s)).then((function(e){return e.json()}))},l=function(e){return fetch("".concat(c,"search/movie?page=1&api_key=").concat(s,"&query=").concat(e)).then((function(e){return e.json()}))}},3200:function(e,n,t){t.d(n,{j:function(){return s}});var c=t(184),s=function(){return(0,c.jsx)("h2",{children:"Error loading movies"})}},7152:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var c=t(9439),s=t(7689),a=t(1087),r=t(2791),i=t(7157),o=t(3200),l=t(5647),d="MovieItem_custom-img-size__Zz8N9",u=t(184),f=function(){var e,n,t=(0,s.UO)().movieId,f=(0,r.useState)(null),h=(0,c.Z)(f,2),m=h[0],x=h[1],j=(0,r.useState)(!0),v=(0,c.Z)(j,2),p=v[0],b=v[1],g=(0,r.useState)(!1),N=(0,c.Z)(g,2),k=N[0],w=N[1],_=(0,r.useState)(!1),y=(0,c.Z)(_,2),O=y[0],S=y[1],Z=(0,s.TH)();return(0,r.useEffect)((function(){(0,l.Ny)(t).then((function(e){!1===e.success?(x(null),S(!0)):x(e)})).catch((function(e){console.log(e),w(!0)})).finally((function(){b(!1)}))}),[t]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)(a.rU,{to:(null===(e=Z.state)||void 0===e?void 0:e.from)||"/movies",className:"btn btn-light mb-3 mt-1",children:["\u2190"," Go Back"]}),p&&(0,u.jsx)(i.a,{}),k&&(0,u.jsx)(o.j,{}),O&&(0,u.jsx)("h1",{children:"Requested movie does not exist"}),m&&(0,u.jsx)("div",{className:"card mb-3",children:(0,u.jsxs)("div",{className:"row g-0",children:[(0,u.jsx)("div",{className:"col-md-4 d-flex justify-content-center align-items-center d-md-block",children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(m.poster_path),alt:"Movie Poster",className:"img-fluid rounded-start ".concat(d," ")})}),(0,u.jsx)("div",{className:"col-md-8",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsxs)("h4",{className:"card-title fs-2 fw-bold pb-3",children:[null!==(n=m.title)&&void 0!==n?n:"Unknown",(0,u.jsxs)("span",{children:["(",m.release_date.split("-")[0],")"]})]}),(0,u.jsxs)("p",{className:"card-text pb-2",children:[" User score:",(0,u.jsxs)("span",{className:"card-text fw-light",children:[" ",(10*m.vote_average).toFixed(0),"% "]})]}),(0,u.jsx)("p",{className:"card-text fs-6 fw-bold",children:"Overview:"}),(0,u.jsxs)("span",{className:"card-text fw-light pt-1",children:[" ",m.overview]}),(0,u.jsx)("p",{className:"card-text fs-6 fw-bold mt-4",children:"Genres:"}),m.genres&&m.genres.length>0&&(0,u.jsxs)("span",{className:"card-text fw-light",children:[" ",m.genres.map((function(e){return e.name})).join(", ")]})]})}),(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"card-title fs-4 fw-bold p-3",children:" Additional information: "}),(0,u.jsxs)("ul",{className:"nav col-12 col-lg-auto me-lg-auto gap-5 pb-3 mb-3",children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{className:"nav-link px-3 mx-2 text-dark border btn btn-hover btn-info",to:"cast",children:" Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{className:"nav-link px-3 text-dark border btn btn-hover btn-info",to:"reviews",children:" Reviews"})})]}),(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(i.a,{}),children:(0,u.jsx)(s.j3,{})})]})})]})})]})}}}]);
//# sourceMappingURL=152.fb603ad7.chunk.js.map