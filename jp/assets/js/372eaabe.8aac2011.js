"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[7778],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38642:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=a(62450),l=["components"],s={slug:"automating-private-networks",title:"Using automation to drive down complexity and increase scalability of private networks",date:new Date("2023-03-30T00:00:00.000Z"),tags:["privatenetworks","aws","automation","saas"],authors:["yan"],image:"./yan2.png"},c=void 0,u={permalink:"/jp/blog/automating-private-networks",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2023-03-30-automatingprivatenetworks/index.md",source:"@site/../blog/2023-03-30-automatingprivatenetworks/index.md",title:"Using automation to drive down complexity and increase scalability of private networks",description:"Recently, as any other engineer on the planet, I asked ChatGPT what is needed to build a private 5G network. Here\u2019s what it said.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"privatenetworks",permalink:"/jp/blog/tags/privatenetworks"},{label:"aws",permalink:"/jp/blog/tags/aws"},{label:"automation",permalink:"/jp/blog/tags/automation"},{label:"saas",permalink:"/jp/blog/tags/saas"}],readingTime:4.97,hasTruncateMarker:!0,authors:[{name:"Yan Grunenberger",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/yangrunenberger/",imageURL:"/img/author-photos/yg.jpg",key:"yan"}],frontMatter:{slug:"automating-private-networks",title:"Using automation to drive down complexity and increase scalability of private networks",date:"2023-03-30T00:00:00.000Z",tags:["privatenetworks","aws","automation","saas"],authors:["yan"],image:"./yan2.png"},prevItem:{title:"Tuning flux",permalink:"/jp/blog/tuning-flux"},nextItem:{title:"How Working Group Two Accelerates the Creation of Mobile Networks with AWS Snow Family",permalink:"/jp/blog/how-working-group-two-accelerates-the-creation-of-mobile-networks-with-aws-snow-family"}},p={image:a(15162).Z,authorsImageUrls:[void 0]},m=[{value:"What you need",id:"what-you-need",level:2},{value:"The approach",id:"the-approach",level:2}],d={toc:m};function h(e){var t=e.components,s=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recently, as any other engineer on the planet, I asked ChatGPT what is needed to build a private 5G network. Here\u2019s what it said. "),(0,r.kt)(i.Z,{style:{width:"100%"},caption:"Talking to AI",src:a(64775).Z,mdxType:"ImgWithCaption"}),"ChatGPT\u2019s AI-generated response is not far from our vision. At WG2, we\u2019re offering a rebuilt, modern core network delivered as a hosted service. It drives the dual benefits of cost savings and revenue growth for our private network customers. Case in point: Recently, [we teamed up with Kyocera Mirai Envison](https://www.wgtwo.com/blog/kcme-teams-up-with-wg2-for-private-networks/) to deliver private networks in Japan, and we\u2019re now deploying our first solution in the agricultural sector.",(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this post, we\u2019ll explore how it would be possible to rationalize costs and reduce the time to onboard a new customer.")),(0,r.kt)("h2",{id:"what-you-need"},"What you need"),(0,r.kt)("p",null,"To build a private network yourself, you essentially need: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cellular-related spectrum. You either need a faraday cage or live in a country that allows some cellular-allocated spectrum to be used (i.e. USA with CBRS, Japan with sXGP, Norway with a license, Germany/Spain with a license from the local regulator - the list is growing every day)."),(0,r.kt)("li",{parentName:"ul"},"RAN equipment - this could be as small as a wifi-sized eNodeB from some vendors to actual macro-like equipment. This equipment will need to be installed. This is the only network hardware you will need, and eventually some compute capabilities if your connectivity needs it (like fast 5G speed are important)."),(0,r.kt)("li",{parentName:"ul"},"IP addresses - bring your own RFC 1918 addresses, like ChatGPT is recommending. "),(0,r.kt)("li",{parentName:"ul"},"SIM cards and some phones (that\u2019s probably what ChatGPT refers to as networking equipment). "),(0,r.kt)("li",{parentName:"ul"},"Network protocols: here, ChatGPT is modest, but you probably want to support protocols: ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Some IPSec to connect and secure your RAN equipment back to the core network by protecting the network traffic"),(0,r.kt)("li",{parentName:"ul"},"Some SCTP traffic to actually enable your RAN equipment to communicate with the core "),(0,r.kt)("li",{parentName:"ul"},"Some GTP traffic to actually transport your Internet traffic from and to your RAN equipment. ")))),(0,r.kt)("li",{parentName:"ul"},"Network hardware and software, and some configuration and administration: this is where WG2 is focusing these days to bring value.  ",(0,r.kt)("a",{parentName:"li",href:"https://www.wgtwo.com/blog/exploring-aws-snowcone/"},"After testing out")," AWS\u2019s fantastic, little on-premises hardware, the AWS Snowcone, we wanted to enable our customers to enjoy a nearly zero-touch network hardware and software experience.")),(0,r.kt)("p",null,"By analyzing the requirements of a few variants of network RAN equipment, in our lab experience we came up with the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each private network customer might bring their own IP / network CIDR requirement"),(0,r.kt)("li",{parentName:"ul"},"Each network needs a public endpoint to connect back to our Core "),(0,r.kt)("li",{parentName:"ul"},"Each network needs some security and configuration knob to be adjusted (i.e. Network identifier or PLMN, Tracking area covered, slice (in case of 5G). ")),(0,r.kt)("p",null,"Eventually, the customer can opt for a packet gateway in the cloud (ideal for voice services) or on premises (ideal for high speed 5G data)"),(0,r.kt)("p",null,"In order to rationalize costs and reduce the time to onboard each customer, we decided to work on automating those minimal deployments, using automation on our clusters running in AWS. This way, our customers will be able to discover our technology at a lower cost and eventually, all by themselves. "),(0,r.kt)("h2",{id:"the-approach"},"The approach"),(0,r.kt)("p",null,"The actual approach is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A manifest for a private network is created - it contains mostly the parameters needed for the network to operate. We focus mostly on the one that the customer will be requesting - i.e. network details (CIDR), network PLMN, tac, etc. These manifests can be created via various means, but a web page and a form can be used. "),(0,r.kt)("li",{parentName:"ul"},"The automation generates the following elements from the manifest:"),(0,r.kt)("li",{parentName:"ul"},"A public endpoint (set of IP addresses) that the customer need to input as IPSec configuration "),(0,r.kt)("li",{parentName:"ul"},"A set of certificates to authenticate the IPSec link with our core "),(0,r.kt)("li",{parentName:"ul"},"A internal, customer specific, MME/AMF IP configuration (set of IP addresses)"),(0,r.kt)("li",{parentName:"ul"},"A set of VPN credentials and commands to onboard an edge based virtual machine or bare metal equipment. ")),(0,r.kt)(i.Z,{style:{},caption:"Architecture",src:a(86813).Z,mdxType:"ImgWithCaption"}),(0,r.kt)("p",null,"At the end of the automation, within seconds, we obtain those elements and we make them available to the customer. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a result:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A set of configuration parameters automatically generated such as Certificate Authority, public and private key, as well as IP addresses parameters to enter in their equipment. We aim to automate this via protocols like TR.069 in the long run, but we found it convenient to enable a common set of technology (like IPSec + certificate) as a solid base to start with. Once introduced into RAN equipment, they are automatically connected on their private network overlay and can access our MME/AMF SCTP endpoint and start to attach their phones, and eventually pass their phone calls, once, of course, they have declared the SIM card of their phones/tablets in our system. "),(0,r.kt)("li",{parentName:"ul"},"Eventually, if they deploy an edge system and execute a simple set of commands, we can onboard their edge computer - such as AWS Snowcone! If they deploy a local version of our packet gateway, voila, their traffic will be automatically offloaded at the edge using the IP range they have provided us. It should be that easy."),(0,r.kt)("li",{parentName:"ul"},"In the end, if they want to close the network, no problem. We\u2019ll remove the manifests from our system and the resources will get cleaned from our internal and AWS systems. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How realistic is this?"),(0,r.kt)("br",{parentName:"p"}),"\n","We are not too far from this - this is the expected and targeted user experience. We plan to work on the user journey to facilitate the onboarding of different kinds of users, but the underlying technology that enables them to connect should be the same and is mostly working for some simple network use cases. We are currently looking at customer feedback and trials in their labs to constantly improve our automation and further reduce the cost of deploying and operating private networks."))}h.isMDXComponent=!0},62450:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),o=a(63366),r=a(67294),i="figure_JG9S",l="image_HilK",s="caption_lOvI",c=a(79524),u=["src","caption"];var p=function(e){var t=e.src,a=e.caption,p=(0,o.Z)(e,u);return r.createElement("figure",(0,n.Z)({className:i},p),r.createElement("img",{src:(0,c.Z)(t),alt:a,className:l}),r.createElement("figcaption",{className:s},a))}},86813:function(e,t,a){t.Z=a.p+"c379017b87d6e34c8f54a0050ba11a8e.png"},64775:function(e,t,a){t.Z=a.p+"c6545227870f8927cd808da9ce9462ad.png"},15162:function(e,t,a){t.Z=a.p+"assets/images/yan2-e423ae34539869772195ed8bcab8f03c.png"}}]);