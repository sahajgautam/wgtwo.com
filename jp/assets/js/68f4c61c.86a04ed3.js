"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[2898],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77484:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(62450),l=["components"],u={slug:"tuning-flux",title:"Tuning flux",date:new Date("2023-04-05T00:00:00.000Z"),tags:["infrastructure","automation","gitops"],authors:["anna-kennedy"],image:"./flux-flow-3.png"},c=void 0,s={permalink:"/jp/blog/tuning-flux",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2023-04-05-tuning-flux/index.md",source:"@site/../blog/2023-04-05-tuning-flux/index.md",title:"Tuning flux",description:"Last year we upgraded from flux v1 to v2, flux v2 being a full rewrite, splitting the single binary into a number of dedicated controllers to improve performance. We installed flux v2 to each of our clusters, and let it run for a while before revisiting it to see what needed tuning, and what improvements could be made.",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"infrastructure",permalink:"/jp/blog/tags/infrastructure"},{label:"automation",permalink:"/jp/blog/tags/automation"},{label:"gitops",permalink:"/jp/blog/tags/gitops"}],readingTime:2.58,hasTruncateMarker:!0,authors:[{name:"Anna Kennedy",title:"Tech Lead for Cloud and Edge Infrastructure",url:"https://www.linkedin.com/in/annaken",imageURL:"/img/author-photos/ak.jpg",key:"anna-kennedy"}],frontMatter:{slug:"tuning-flux",title:"Tuning flux",date:"2023-04-05T00:00:00.000Z",tags:["infrastructure","automation","gitops"],authors:["anna-kennedy"],image:"./flux-flow-3.png"},prevItem:{title:"Achieving ISO 27001:2022 Certification: What You Need to Know",permalink:"/jp/blog/iso27001"},nextItem:{title:"Using automation to drive down complexity and increase scalability of private networks",permalink:"/jp/blog/automating-private-networks"}},m={image:n(4055).Z,authorsImageUrls:[void 0]},p=[{value:"Controller behaviour and intervals",id:"controller-behaviour-and-intervals",level:2},{value:"Limit yaml parsing",id:"limit-yaml-parsing",level:2},{value:"Performance improvements",id:"performance-improvements",level:2}],f={toc:p};function d(e){var t=e.components,u=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last year we upgraded from flux v1 to v2, flux v2 being a full rewrite, splitting the single binary into a number of dedicated controllers to improve performance. We installed flux v2 to each of our clusters, and let it run for a while before revisiting it to see what needed tuning, and what improvements could be made."),(0,i.kt)("h2",{id:"controller-behaviour-and-intervals"},"Controller behaviour and intervals"),(0,i.kt)("p",null,"As we dug down into the documentation, we realised that our mental model of how the controllers worked wasn't the whole picture. We'd been thinking about the four main controllers (image-reflector, image-automation, source and kustomize) as four totally separate entities, and accordingly set their \"doing-stuff\" intervals very low (typically ~1 min) thinking that that would mean changes were deployed quickly."),(0,i.kt)(a.Z,{caption:"Incorrect model - no communication between controllers",src:n(81325).Z,mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"As it turns out, there is a lot of interaction between the controllers, and the discovery of a new image or a new git commit initates a workflow that ends up in a kustomize controller reconciliation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The image-reflector controller polls the registry for new images every minute, but upon discovery of a new image it notifies the  image-automation controller to write the new image tag to git."),(0,i.kt)("li",{parentName:"ul"},"The source controller polls github for new commits, but when a new commit is discovered the it notifies the kustomize controller to start a new reconciliation.")),(0,i.kt)(a.Z,{caption:"Correct model - communication between controllers",src:n(45350).Z,mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"To improve performance further, we added a webhook so that a new commit to github would be pushed to the source controller."),(0,i.kt)(a.Z,{caption:"Improved model - webhook initiates reconciliation",src:n(31878).Z,mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"Now we only need the image-reflector controller to poll the registry every minute; the other three controllers are event-driven, not interval driven."),(0,i.kt)("p",null,"This meant we could increase the interval timings to around an hour, and this would be primarily as a backstop (in case something broke) and to revert any manual changes made to the cluster."),(0,i.kt)("p",null,"Setting high intervals meant that the controllers were only invoked when there was action for them to take, and as a result ran much faster when a new image or commit arrived, instead of spinning constantly."),(0,i.kt)("h2",{id:"limit-yaml-parsing"},"Limit yaml parsing"),(0,i.kt)("p",null,"The other major improvement we made was to limit how much yaml needed to be parsed for each cluster. We have essentially a kubernetes monorepo, with config for all clusters laid out like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"monorepo\n    - library\n    - cluster1\n    - cluster2\n    - cluster3\n")),(0,i.kt)("p",null,"There's no point parsing the yaml for cluster 2 when we're reconciling cluster 1, so we limit this in the source resource like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: GitRepository\nmetadata:\n\xa0\xa0name: kubeconf\n\xa0\xa0namespace: flux-system\nspec:\n\xa0\xa0ignore: |\n\xa0\xa0\xa0\xa0/*\n\xa0\xa0\xa0\xa0!/cluster1\n\xa0\xa0\xa0\xa0!/library\n")),(0,i.kt)("p",null,"That is, ignore all yaml except what is directly applicable to this cluster."),(0,i.kt)("h2",{id:"performance-improvements"},"Performance improvements"),(0,i.kt)("p",null,"The net result of these changes was that we went from an average of 10-20 minutes from a new image arriving in the registry to being deployed, down to 1-2 minutes."),(0,i.kt)("p",null,"Note: we used ",(0,i.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/guides/monitoring/#flux-dashboards"},"https://fluxcd.io/flux/guides/monitoring/#flux-dashboards")," for excellent insights into how flux wass performing in the clusters."))}d.isMDXComponent=!0},62450:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),o=n(63366),i=n(67294),a="figure_JG9S",l="image_HilK",u="caption_lOvI",c=n(79524),s=["src","caption"];var m=function(e){var t=e.src,n=e.caption,m=(0,o.Z)(e,s);return i.createElement("figure",(0,r.Z)({className:a},m),i.createElement("img",{src:(0,c.Z)(t),alt:n,className:l}),i.createElement("figcaption",{className:u},n))}},81325:function(e,t,n){t.Z=n.p+"d3a3146b3de3c3ed8bdf5db2912cc17b.png"},45350:function(e,t,n){t.Z=n.p+"3bbfef77947b4db5418d93a11bfda84b.png"},31878:function(e,t,n){t.Z=n.p+"f3b01ef6e0a885c9e17bc7ce52a7c4c1.png"},4055:function(e,t,n){t.Z=n.p+"assets/images/flux-flow-3-f3b01ef6e0a885c9e17bc7ce52a7c4c1.png"}}]);