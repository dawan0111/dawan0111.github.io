(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(161),function(){return r.a.createElement("hr",{className:"custom-hr"})}),c=a(187),i=a(183),s=function(e){var t=e.title;return r.a.createElement("h1",null,t)},l=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=(a(162),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),m=(a(163),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),f=(a(164),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return r.a.createElement("div",{className:"social-share"},r.a.createElement(u,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.a.createElement(m,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),d=(a(165),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),h=a(197),p=a(176),g=(a(166),function(e){var t=e.pageContext,a=t.previous,n=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,a&&r.a.createElement(p.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(p.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))}),b=a(35),v=a.n(b),E=a(7),w=a.n(E),y=a(240),A=a.n(y),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(v()(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(v()(a)),a}w()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.post,a=e.shortName,n=e.siteUrl+e.slug;return r.a.createElement(A.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:n,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(n.Component),N=(a(77),a(56),a(36),a(242),function(e){var t=e.repo,a=r.a.createRef();return Object(n.useEffect)(function(){var e=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])}),a.current.appendChild(e)},[]),r.a.createElement("div",{className:"utterences",ref:a})}),x=a(202);a(167);a.d(t,"pageQuery",function(){return C});t.default=function(e){var t=e.data,a=e.pageContext,u=e.location;Object(n.useEffect)(function(){return x.c(),function(){return x.a()}},[]);var m=t.markdownRemark,p=t.site.siteMetadata,b=p.title,v=p.comment,E=p.siteUrl,w=p.author,y=p.sponsor,A=v.disqusShortName,C=v.utterances;return r.a.createElement(c.a,{location:u,title:b},r.a.createElement(i.a,{title:m.frontmatter.title,description:m.excerpt}),r.a.createElement(s,{title:m.frontmatter.title}),r.a.createElement(l,{html:m.html}),r.a.createElement(f,{title:m.frontmatter.title,author:w}),!!y.buyMeACoffeeId&&r.a.createElement(d,{sponsorId:y.buyMeACoffeeId}),r.a.createElement(o,null),r.a.createElement(h.a,null),r.a.createElement(g,{pageContext:a}),!!A&&r.a.createElement(k,{post:m,shortName:A,siteUrl:E,slug:a.slug}),!!C&&r.a.createElement(N,{repo:C}))};var C="1559320954"},176:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(179);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},178:function(e,t,a){"use strict";var n={ALL:"All"},r={LIGHT:"light",DARK:"dark"};a.d(t,"c",function(){return"Home"}),a.d(t,"a",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"b",function(){return"en"})},179:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},180:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(188),r=a.n(n),o=a(189),c=a.n(o);c.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var i=new r.a(c.a);var s=i.rhythm;i.scale},181:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"g",function(){return s}),a.d(t,"f",function(){return l}),a.d(t,"c",function(){return u});var n=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},o=function(e,t){return e.classList.add(t)},c=function(){return r("body")},i=function(e){return o(c(),e)},s=function(e){return function(e,t){return e.classList.remove(t)}(c(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(c(),e)},u=function(){return document.documentElement.offsetHeight}},182:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(184),r=a(0),o=a.n(r),c=a(4),i=a.n(c),s=a(196),l=a.n(s),u=a(176);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return o.a.createElement(u.b,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired};var f="1025518380"},184:function(e){e.exports={data:{site:{siteMetadata:{title:"정리노트",description:"개발중 생각했던것들을 정리하는 공간",author:"김대완"}}}}},187:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(176),c=(a(153),function(){return r.a.createElement("a",{href:"https://github.com/JaeYeopHan/felog",className:"github","aria-label":"GitHub"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),i=(a(154),function(e){var t=e.title,a=e.location,n=e.rootPath,i=a.pathname===n;return r.a.createElement("div",{className:"top"},!i&&r.a.createElement(o.a,{to:"/",className:"link"},t),r.a.createElement(c,null))}),s=(a(155),function(e){var t=e.title,a=e.location,n=e.rootPath;return a.pathname===n&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.a,{to:"/",className:"link"},t))}),l=a(195),u=a.n(l),m=a(181),f=a(178);a(156);var d=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],o=function(e){var t=function(e){return e?f.d.DARK:f.d.LIGHT}(e);a(e),function(e){switch(e){case f.d.LIGHT:m.b(f.d.LIGHT),m.g(f.d.DARK);break;case f.d.DARK:m.b(f.d.DARK),m.g(f.d.LIGHT)}}(t)};return Object(n.useEffect)(function(){var e=m.f(f.d.DARK);o(e)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(u.a,{onChange:o,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},h=(a(157),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),p=a(180);a(158);a.d(t,"a",function(){return g});var g=function(e){var t=e.location,a=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{title:a,location:t,rootPath:"/blog/"}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},r.a.createElement(d,null),r.a.createElement(s,{title:a,location:t,rootPath:"/blog/"}),n,r.a.createElement(h,null)))}},197:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(198);var n=a(200),r=a(0),o=a.n(r),c=a(176),i=a(201),s=a.n(i),l=(a(159),function(){return o.a.createElement(c.b,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social,r=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(s.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"작성자, "),o.a.createElement(c.a,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",a)),o.a.createElement("div",{className:"author-introduction"},r),o.a.createElement("p",{className:"author-socials"},n.github&&o.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub"),n.medium&&o.a.createElement("a",{href:"https://medium.com/"+n.medium},"Medium"),n.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter"),n.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook},"Facebook"))))))},data:n})}),u="1177532027"},200:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA6ElEQVQY042Q3W6DMAyFef+X21QuuFgHIQEWLYSQf0go7RlSpVXiol8sS1Z87CMXhJC+7zjnWmtz0KPumJSKC6VdRPDfqe8HIQR+9cE8z0qpYhyllJPz3jok75yrqqosy6Zp2pa2lLWUMtYBxhh9pbh+f13Ky8dnSQjaaF3X2uhJTFqaEIO1BoGpedtuiH9s21Ywhh1XzBwGuO3gOaW0+CUvKWoDLzCZU7qfUXgfQoj+STgQP6NVZnV/oMSSc7F5Yg/Qjc3e+hUvBJS4DYaei+0rzrqcczAxLWsy2h1X3Pf9LTHAMe7v8QBeFMfRwm6TbQAAAABJRU5ErkJggg==",width:72,height:72,src:"/blog/static/156b2d52c74c296a0c604b2a44cacf67/f53aa/profile.png",srcSet:"/blog/static/156b2d52c74c296a0c604b2a44cacf67/f53aa/profile.png 1x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/0ccf0/profile.png 1.5x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/34113/profile.png 2x,\n/blog/static/156b2d52c74c296a0c604b2a44cacf67/5584e/profile.png 3x"}}},site:{siteMetadata:{author:"김대완",introduction:"현재 스타트업에서 근무중이며, 내년에 한양대에리카 입학 예정입니다.",social:{twitter:"",github:"https://github.com/dawan0111",medium:"",facebook:""}}}}}},202:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s});var n,r=a(203),o=a.n(r);function c(){return n=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function i(){if(!n)throw Error("Not founded SmoothScroll instance");return n.destroy(),n=null}function s(e){if(!n)throw Error("Not founded SmoothScroll instance");return n.animateScroll(e),n}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-926f9c5fee1ae39ba16a.js.map