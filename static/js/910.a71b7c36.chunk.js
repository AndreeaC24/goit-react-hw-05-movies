"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{5647:function(e,n,t){t.d(n,{Ny:function(){return i},Tg:function(){return o},oO:function(){return s},on:function(){return u},y:function(){return a}});var r="https://api.themoviedb.org/3/",c="44cd7d40e9c9ffc80f6b2e51bac6d9ee",o=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(c)).then((function(e){return e.json()}))},i=function(e){return fetch("".concat(r,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.json()}))},a=function(e){return fetch("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.json()}))},s=function(e){return fetch("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.json()}))},u=function(e){return fetch("".concat(r,"search/movie?page=1&api_key=").concat(c,"&query=").concat(e)).then((function(e){return e.json()}))}},7280:function(e,n,t){t.d(n,{e:function(){return i}});var r=t(7689),c=t(1087),o=t(184),i=function(e){var n=e.movies,t=e.showTitle,i=void 0===t||t,a=(0,r.TH)();return(0,o.jsxs)("div",{className:"container",children:[i&&(0,o.jsx)("h1",{className:"p-2 mt-3 mb-3",children:"Trending Today"}),n.length>0&&n.map((function(e){return(0,o.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:a},className:"text-decoration-none",children:(0,o.jsx)("ul",{className:"list-group",children:(0,o.jsx)("li",{className:"list-group-item",children:e.title})})},e.id)}))]})}},4910:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(9439),c=t(2791),o=t(1087),i=t(5647),a=t(7280),s=t(1686),u=t.n(s),l=t(184),f=function(){var e=(0,o.lr)(),n=(0,r.Z)(e,1)[0],t=(0,c.useState)(n.get("query")?n.get("query"):""),s=(0,r.Z)(t,2),f=s[0],h=s[1],m=(0,c.useState)([]),d=(0,r.Z)(m,2),p=d[0],v=d[1];return(0,c.useEffect)((function(){h(n.get("query"))}),[n]),(0,c.useEffect)((function(){console.log(f),f&&f.length>2&&(0,i.on)(f).then((function(e){e.results.length>0?v(e.results):u().Notify.failure("No movies found for '".concat(f,"'"))})).catch((function(e){console.error(e),u().Notify.failure("Error fetching movies")}))}),[f]),(0,l.jsxs)(l.Fragment,{children:[f&&(0,l.jsxs)("h6",{className:"mb-4 mt-3 px-3",children:["The search term is: ",(0,l.jsx)("span",{className:"text-info px-2",children:f})]}),p.length>0&&(0,l.jsx)(a.e,{movies:p,showTitle:!1})]})},h=function(){var e=(0,c.useRef)(),n=(0,o.lr)(),t=(0,r.Z)(n,2),i=t[0],a=t[1];return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=e.current.value;t.length>=3?a({query:t}):u().Notify.failure("The search term is too short")},className:"col-12 col-lg-auto mb-3 mb-lg-0 me-lg-4",role:"search",children:(0,l.jsx)("div",{className:"container d-flex justify-content-center",children:(0,l.jsxs)("div",{className:"input-group w-100 w-md-50 w-lg-25",children:[(0,l.jsx)("input",{ref:e,type:"search",className:"form-control rounded mt-3",placeholder:"ex. Harry Potter","aria-label":"Search","aria-describedby":"search-addon"}),(0,l.jsx)("button",{type:"submit",className:"btn btn-outline-info mt-3",children:"search"})]})})}),i.get("query")&&(0,l.jsx)(f,{})]})}}}]);
//# sourceMappingURL=910.a71b7c36.chunk.js.map