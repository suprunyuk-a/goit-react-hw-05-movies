"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{895:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(885),r=n(635),c=n(791),o=n(689),s=n(731),a="MovieDetails_MovieDetailsSection__Uum1e",u="MovieDetails_MovieDetails__YjM5F",h="MovieDetails_button__PGjyO",d=n(184),v=function(){var e,t,n=(0,o.UO)().id,v=(0,c.useState)(""),f=(0,i.Z)(v,2),l=f[0],p=f[1],_=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,c.useEffect)((function(){(0,r.Mc)(n).then((function(e){return p(e)}))}),[n]);return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)(s.rU,{to:_,children:(0,d.jsx)("button",{type:"button",className:h,children:"Go back"})}),l&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.poster_path),alt:"poster",width:"350"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:l.original_title}),(0,d.jsxs)("p",{children:["User score: ",l.vote_average]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:l.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:function(e){var t=[];return e.map((function(e){return t.push(e.name)})),t}(l.genres).join(" ")})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsx)(s.rU,{className:"navigation__item",to:"cast",children:"Cast"}),(0,d.jsx)(s.rU,{className:"navigation__item",to:"reviews",children:"Reviews"})]})]}),(0,d.jsx)(c.Suspense,{children:(0,d.jsx)(o.j3,{})})]})}},635:function(e,t,n){n.d(t,{DC:function(){return r},Mc:function(){return o},hC:function(){return s},mv:function(){return c},oJ:function(){return a}});var i="f7ffdce4cad751b792655bd09ea4613c",r=function(){return fetch("https://api.themoviedb.org/3//trending/movie/week?api_key=".concat(i)).then((function(e){return e.json()}))},c=function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i)).then((function(e){return e.json()}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i)).then((function(e){return e.json()}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i)).then((function(e){return e.json()}))},a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i)).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=888.b313979c.chunk.js.map