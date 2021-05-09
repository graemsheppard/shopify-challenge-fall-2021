(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{16:function(t){t.exports=JSON.parse('{"a":"4573e593"}')},22:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n.n(i),a=n(14),o=n.n(a),c=(n(22),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),i(t),s(t),a(t),o(t)}))}),r=(n(23),n(17)),l=n(8),h=n(11),m=n.n(h),d=n(15),u=n(3),b=n(4),j=n(6),p=n(5),v=n(13),f=n(12),O=n(0),x=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"card movie-card",children:[Object(O.jsx)("img",{className:"card-img-top movie-card-img",src:this.props.url,alt:"Movie poster for ".concat(this.props.title)}),Object(O.jsxs)("div",{className:"card-body movie-card-body",children:[Object(O.jsx)("span",{className:"font-weight-normal",children:this.props.title}),Object(O.jsx)("button",{disabled:this.props.nominated&&!this.props.nominatedSection,onClick:this.props.onClick,type:"button",className:this.getButtonClasses(),children:this.getButtonText()})]})]})}},{key:"getButtonText",value:function(){return this.props.nominatedSection?"Remove":this.props.nominated?"Nominated":"Vote"}},{key:"getButtonClasses",value:function(){var t="btn mt-2 ";return t+=this.props.nominatedSection?"btn-danger":this.props.nominated?"btn-secondary":"btn-primary"}}]),n}(s.a.Component),g=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"movie-container",children:this.props.movies.map((function(t){return Object(O.jsx)(x,{imdbID:t.imdbID,title:t.title,url:t.url,nominated:t.nominated,nominatedSection:t.nominatedSection,onClick:t.onClick},t.imdbID)}))})}}]),n}(i.Component),y=n(16),N=(n(31),function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).requestId=void 0,i.worker=void 0,i.handleKeyUp=function(t){i.setState({searching:!0}),i.requestId++,clearTimeout(i.worker),i.worker=setTimeout((function(){i.fetchMovies(t.target.value)}),300)},i.requestId=0,i.state={movies:[],nominations:[],searching:!1},i}return Object(b.a)(n,[{key:"fetchMovies",value:function(){var t=Object(d.a)(m.a.mark((function t(e){var n,i=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.requestId,t.next=3,fetch("https://www.omdbapi.com/?apikey=".concat(y.a,"&s=").concat(e)).then((function(t){if(!t.ok)throw new Error("Failed to fetch data");return t.json()})).then((function(t){var e={};t.Search.forEach((function(t){e[t.imdbID]={title:t.Title,imdbID:t.imdbID,url:t.Poster,onClick:function(){i.nominate(t)},nominated:i.state.nominations.filter((function(e){return e.imdbID===t.imdbID})).length>0,nominatedSection:!1}}));var n=[];for(var s in e)n.push(e[s]);return n})).then((function(t){i.requestId===n&&i.setState({movies:t,searching:!1})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"nominate",value:function(t){var e=this;if(!(this.state.nominations.length>=5)){var n=Object(l.a)(this.state.nominations),i=Object(l.a)(this.state.movies),s=i.filter((function(e){return e.imdbID===t.imdbID}))[0];s.nominated=!0;var a=Object(r.a)({},s);a.nominatedSection=!0,a.onClick=function(){e.deNominate(a)},n.push(a),this.setState({nominations:n,movies:i})}}},{key:"deNominate",value:function(t){var e=this,n=Object(l.a)(this.state.movies),i=n.filter((function(e){return e.imdbID===t.imdbID}))[0];i&&(i.nominated=!1,i.onClick=function(){e.nominate(i)});var s=Object(l.a)(this.state.nominations);s=s.filter((function(e){return e.imdbID!==t.imdbID})),this.setState({nominations:s,movies:n})}},{key:"getSearchIcon",value:function(){return this.state.searching?Object(O.jsx)(f.a,{icon:v.b,spin:!0}):Object(O.jsx)(f.a,{icon:v.a})}},{key:"render",value:function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("div",{className:"jumbotron jumbotron-fluid bg-dark text-light text-center",children:[Object(O.jsx)("h1",{className:"display-1",children:"The Shoppies"}),Object(O.jsx)("h3",{className:"lead my-4",children:"Nominate your favourite movies for the Shoppies!"}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("input",{onChange:this.handleKeyUp,type:"text",className:"form-control form-control-lg",placeholder:"Search Movies","aria-label":"Search Movies","aria-describedby":"basic-addon2"}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{className:"btn btn-light",type:"button",children:this.getSearchIcon()})})]})})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row mb-4",children:Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("h4",{className:"my-4 text-dark",children:["Nominations (",this.state.nominations.length,"/5)"]}),Object(O.jsx)("hr",{className:"my-4 bg-light"}),Object(O.jsx)(g,{movies:this.state.nominations})]})}),Object(O.jsx)("div",{className:"row mt-4",children:Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("h4",{className:"my-4 text-dark",children:["Showing Results (",this.state.movies.length,")"]}),Object(O.jsx)("hr",{className:"my-4"}),Object(O.jsx)(g,{movies:this.state.movies})]})})]})]})}}]),n}(s.a.Component));o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),c()}},[[32,1,2]]]);
//# sourceMappingURL=main.3ee02bae.chunk.js.map