(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(e,t,n){"use strict";n.r(t);var a,r=n(244),o=n.n(r),c=n(0),i=n.n(c),u=n(187),l=n(197),s=n(183),f=function(e){var t=e.title,n=e.category,a=e.selectCategory;return i.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},i.a.createElement("div",{onClick:function(){return a(t)}},t))},d=n(180),m=(n(170),function(e){var t=e.categories,n=e.category,a=e.selectCategory;return i.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(d.a)(.75)}},i.a.createElement(f,{title:"All",category:n,selectCategory:a}),t.map(function(e,t){return i.a.createElement(f,{key:t,title:e,category:n,selectCategory:a})}))}),h=(n(171),i.a.memo(function(e){var t=e.children;return i.a.createElement("div",{className:"thumbnail-container"},t)})),g=n(176),p=(n(38),n(36),n(181)),b="#___gatsby",v="observed",E="visible",y="20px",w=.8;function A(e){return e.filter(function(e){return e.isIntersecting}).forEach(function(e){var t=e.target;return p.a(t,E)})}function k(){return p.e("."+v).forEach(function(e){return a.observe(e)})}function S(){if(!a)throw Error("Not found IntersectionObserver instance");return Promise.resolve(a.disconnect())}n(172);var N=function(e){var t=e.node;return i.a.createElement(g.a,{className:"thumbnail "+v,to:t.fields.slug},i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},x=n(178),I=function(e){var t=e.posts,n=e.countOfInitialPost,a=e.count,r=e.category,o=Object(c.useMemo)(function(){return t.filter(function(e){var t=e.node;return r===x.a.ALL||t.frontmatter.category===r}).slice(0,a*n)});return i.a.createElement(h,null,o.map(function(e,t){var n=e.node;return i.a.createElement(N,{node:n,key:"item_"+t})}))},C=n(202),O=n(216),L=n.n(O);function H(e){return!e||e==={}}function R(e,t){if(!H(e)){var n=e.getItem(t);if(n)return JSON.parse(n)}}function j(e,t,n){if(!H(e))return e.setItem(t,JSON.stringify(n))}var q="undefined"!=typeof window?window:{},M=q.localStorage,T=q.sessionStorage,D=L()(j,T),Q=L()(R,T),B=(L()(j,M),L()(R,M),"__felog_session_storage_key__");n.d(t,"pageQuery",function(){return J});t.default=function(e){var t,n=e.data,r=e.location,f=(t=1,Q(B+"/count")||t),d=function(e){return Q(B+"/category")||e}(x.a.ALL),h=Object(c.useState)(f),g=h[0],v=h[1],E=Object(c.useRef)(g),N=Object(c.useState)(d),O=N[0],L=N[1],H=n.site.siteMetadata,R=H.configs.countOfInitialPost,j=n.allMarkdownRemark.edges,q=o()(j.map(function(e){return e.node.frontmatter.category}));Object(c.useEffect)(function(){return window.addEventListener("scroll",M,{passive:!1}),a=new IntersectionObserver(A,{root:p.d(b),rootMargin:y,threshold:w}),k(),C.c(),function(){window.removeEventListener("scroll",M,{passive:!1}),S().then(function(){return a=null}),C.a()}},[]),Object(c.useEffect)(function(){E.current=g,S().then(k),D(B+"/count",g),function(e){D(B+"/category",e)}(O)});var M=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return p.c()-e}(e)<80};return function(e,t){var n=t.dismissCondition,a=void 0===n?function(){return!1}:n,r=t.triggerCondition,o=void 0===r?function(){return!0}:r;if(!e)throw Error("Invalid required arguments");var c=!1;return function(){if(!c)return c=!0,requestAnimationFrame(function(){if(!a())return o()?(c=!1,e()):void 0;c=!1})}}(function(){return v(function(e){return e+1})},{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&j.length>E.current*R}})()};return i.a.createElement(u.a,{location:r,title:H.title},i.a.createElement(s.a,{title:x.c,keywords:H.keywords}),i.a.createElement(l.a,null),i.a.createElement(m,{categories:q,category:O,selectCategory:function(e){L(e),C.b(316)}}),i.a.createElement(I,{posts:j,countOfInitialPost:R,count:g,category:O}))};var J="751586297"},176:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(33),u=n.n(i);n.d(t,"a",function(){return u.a});n(179);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},178:function(e,t,n){"use strict";var a={ALL:"All"},r={LIGHT:"light",DARK:"dark"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return"en"})},179:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},180:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(188),r=n.n(a),o=n(189),c=n.n(o);c.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var i=new r.a(c.a);var u=i.rhythm;i.scale},181:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return s});var a=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},o=function(e,t){return e.classList.add(t)},c=function(){return r("body")},i=function(e){return o(c(),e)},u=function(e){return function(e,t){return e.classList.remove(t)}(c(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(c(),e)},s=function(){return document.documentElement.offsetHeight}},182:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(184),r=n(0),o=n.n(r),c=n(4),i=n.n(c),u=n(196),l=n.n(u),s=n(176);function f(e){var t=e.description,n=e.lang,r=e.meta,c=e.keywords,i=e.title;return o.a.createElement(s.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:a})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired};var d="1025518380"},184:function(e){e.exports={data:{site:{siteMetadata:{title:"정리노트",description:"개발중 생각했던것들을 정리하는 공간",author:"김대완"}}}}},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(176),c=(n(153),function(){return r.a.createElement("a",{href:"https://github.com/JaeYeopHan/felog",className:"github","aria-label":"GitHub"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),i=(n(154),function(e){var t=e.title,n=e.location,a=e.rootPath,i=n.pathname===a;return r.a.createElement("div",{className:"top"},!i&&r.a.createElement(o.a,{to:"/",className:"link"},t),r.a.createElement(c,null))}),u=(n(155),function(e){var t=e.title,n=e.location,a=e.rootPath;return n.pathname===a&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.a,{to:"/",className:"link"},t))}),l=n(195),s=n.n(l),f=n(181),d=n(178);n(156);var m=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],o=function(e){var t=function(e){return e?d.d.DARK:d.d.LIGHT}(e);n(e),function(e){switch(e){case d.d.LIGHT:f.b(d.d.LIGHT),f.g(d.d.DARK);break;case d.d.DARK:f.b(d.d.DARK),f.g(d.d.LIGHT)}}(t)};return Object(a.useEffect)(function(){var e=f.f(d.d.DARK);o(e)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(s.a,{onChange:o,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},h=(n(157),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),g=n(180);n(158);n.d(t,"a",function(){return p});var p=function(e){var t=e.location,n=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{title:n,location:t,rootPath:"/blog/"}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(g.a)(24),padding:Object(g.a)(1.5)+" "+Object(g.a)(.75)}},r.a.createElement(m,null),r.a.createElement(u,{title:n,location:t,rootPath:"/blog/"}),a,r.a.createElement(h,null)))}},197:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(198);var a=n(200),r=n(0),o=n.n(r),c=n(176),i=n(201),u=n.n(i),l=(n(159),function(){return o.a.createElement(c.b,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social,r=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(u.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"작성자, "),o.a.createElement(c.a,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",n)),o.a.createElement("div",{className:"author-introduction"},r),o.a.createElement("p",{className:"author-socials"},a.github&&o.a.createElement("a",{href:"https://github.com/"+a.github},"GitHub"),a.medium&&o.a.createElement("a",{href:"https://medium.com/"+a.medium},"Medium"),a.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"Twitter"),a.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook},"Facebook"))))))},data:a})}),s="1177532027"},200:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA6ElEQVQY042Q3W6DMAyFef+X21QuuFgHIQEWLYSQf0go7RlSpVXiol8sS1Z87CMXhJC+7zjnWmtz0KPumJSKC6VdRPDfqe8HIQR+9cE8z0qpYhyllJPz3jok75yrqqosy6Zp2pa2lLWUMtYBxhh9pbh+f13Ky8dnSQjaaF3X2uhJTFqaEIO1BoGpedtuiH9s21Ywhh1XzBwGuO3gOaW0+CUvKWoDLzCZU7qfUXgfQoj+STgQP6NVZnV/oMSSc7F5Yg/Qjc3e+hUvBJS4DYaei+0rzrqcczAxLWsy2h1X3Pf9LTHAMe7v8QBeFMfRwm6TbQAAAABJRU5ErkJggg==",width:72,height:72,src:"/blog/static/156b2d52c74c296a0c604b2a44cacf67/f53aa/profile.png",srcSet:"/blog/static/156b2d52c74c296a0c604b2a44cacf67/f53aa/profile.png 1x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/0ccf0/profile.png 1.5x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/34113/profile.png 2x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/5584e/profile.png 3x"}}},site:{siteMetadata:{author:"김대완",introduction:"현재 스타트업에서 근무중이며, 내년에 한양대에리카 입학 예정입니다.",social:{twitter:"",github:"https://github.com/dawan0111",medium:"",facebook:""}}}}}},202:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var a,r=n(203),o=n.n(r);function c(){return a=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function i(){if(!a)throw Error("Not founded SmoothScroll instance");return a.destroy(),a=null}function u(e){if(!a)throw Error("Not founded SmoothScroll instance");return a.animateScroll(e),a}}}]);
//# sourceMappingURL=component---src-pages-index-js-df95ecd382757f0bbb64.js.map