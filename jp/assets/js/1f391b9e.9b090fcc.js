"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3085],{84960:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(87462),o=n(67294);function i(e){return o.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}},23487:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),o=n(63366),i=n(67294),r=n(86010),s=n(2728),l=n(84172),c=["className"],m="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var t=e.className,n=(0,o.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(l.Z.tableOfContents,"thin-scrollbar",t)},i.createElement(s.Z,(0,a.Z)({},n,{linkClassName:m,linkActiveClassName:d})))}},2728:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(87462),o=n(63366),i=n(67294),r=n(20107),s=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,o.Z)(e,s);n>=0?t[n].children.push(i):a.push(i)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function d(e,t){var n,a,o=t.anchorTopOffset,i=e.find((function(e){return m(e).top>=o}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,i.useRef)(0),t=(0,r.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,i.useRef)(void 0),n=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],o=t;o<=n;o+=1)a.push("h"+o+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),l=d(s,{anchorTopOffset:n.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function h(e){var t=e.toc,n=e.className,a=e.linkClassName,o=e.isChild;return t.length?i.createElement("ul",{className:o?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(h,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var g=i.memo(h),f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function v(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,h=void 0===u?void 0:u,v=e.minHeadingLevel,b=e.maxHeadingLevel,S=(0,o.Z)(e,f),w=(0,r.L)(),y=null!=v?v:w.tableOfContents.minHeadingLevel,C=null!=b?b:w.tableOfContents.maxHeadingLevel,T=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:y,maxHeadingLevel:C});return p((0,i.useMemo)((function(){if(d&&h)return{linkClassName:d,linkActiveClassName:h,minHeadingLevel:y,maxHeadingLevel:C}}),[d,h,y,C])),i.createElement(g,(0,a.Z)({toc:T,className:s,linkClassName:d},S))}},77873:function(e,t){t.Z=[{label:"Messaging",icon:"MessageSquare",color:"#4457a1",type:"category",items:[{name:"SMSC",href:"/smsc",tooltipText:"The short message service center (SMSC) is the portion of a mobile phone network that handles text message operations. It is responsible for receiving, storing, routing and forwarding SMS messages from mobile handsets. It is also referred to as a short message service -- service center (SMS-SC)."},{name:"SMS Router",href:"/sms-router",tooltipText:"An SMS router is a software component in a telecommunications network that manages the routing and delivery of Short Message Service (SMS) messages between mobile devices and applications. SMS routers act as intermediaries between SMS gateways and mobile network operators, and they are responsible for ensuring that SMS messages are delivered to the correct recipient."},{name:"SMS GW",href:"/sms-gw",tooltipText:"An SMS gateway allows a computer to send or receive text messages in the form of Short Message Service transmissions between local and/or international telecommunications networks."},{name:"IP-SM-GW",href:"/ip-sm-gw",tooltipText:"The IP Short Message Gateway is an IMS Application Server which handles SIP based messaging services for IMS subscribers. In addition, the IP-SM-GW will interact with the legacy SMSC using MAP signaling in order to allow IMS to SMS conversion and distribution."},{name:"MMS proxy",href:"/mms-proxy",tooltipText:"The MMS proxy and MMS port settings allow you to configure an HTTP proxy that will be used only for communicating with the MMS Gateway Server."},{name:"MMSC",href:"/mmsc",tooltipText:"The multimedia messaging server center provides a store and forward server for multimedia messages on a mobile network."},{name:"MMSC-GW",href:"/mmsc-gw"},{name:"SMPP GW",href:"/smpp-gw",tooltipText:"A short message peer-to-peer (SMPP) is an industry standard for exchanging short message data between External Short Message Entities (ESME), Routing Entities (RE) and Message Centres (MC). It allows applications to send and receive SMS messages to and from mobile devices."}]},{label:"Voice",icon:"PhoneCall",color:"#4e6ab6",type:"category",items:[{name:"Voicemail",href:"/voicemail",tooltipText:"Voicemail service is a telecommunications feature that allows callers to leave voice messages when the person they are calling is unavailable or does not answer the phone."},{name:"G-MSC",href:"/g-msc",tooltipText:'G-MSC stands for "Gateway Mobile Switching Center". It is a component in the Global System for Mobile Communications (GSM) network that provides call control and switching functions between the mobile network and the public switched telephone network (PSTN). The G-MSC acts as an interface between the mobile network and the PSTN, and it provides functions such as call routing, call setup and teardown, and call transfer. The G-MSC is responsible for routing incoming calls to the appropriate mobile subscriber and for routing outgoing calls from the mobile subscriber to the appropriate destination. It is a critical component of the GSM network and is essential for enabling mobile subscribers to make and receive calls to and from the PSTN.'},{name:"MRFC",href:"/mrfc",tooltipText:"The MRFC is a component in the IMS architecture that controls media resources in real-time during multimedia communications sessions. It manages resources such as codecs, echo cancellers, and other media processing functions."},{name:"MRFP",href:"/mrfp",tooltipText:"The MRFP is a component in the IMS architecture that performs media processing functions such as audio and video transcoding, mixing, and playback. It is responsible for encoding, decoding, and streaming media content during multimedia communications sessions."},{name:"P/I/S-SCSCF Proxy/Interrogating/Serving",href:"/p-i-s-scscf",tooltipText:"Serving Call Session Control Function. It is a component in the IP Multimedia Subsystem (IMS) architecture used in telecommunications networks. The P/I/S-SCSCF provides session control and routing for voice and multimedia communications, and it acts as an intermediary between the user and the network."},{name:"SBC",href:"/sbc",tooltipText:"A session border controller (SBC) is a network element deployed to protect SIP based VoIP networks."},{name:"TAS",href:"/tas",tooltipText:"A TAS is a software application that provides services to enable voice communications over IP-based networks. It is typically used in telecommunications networks to provide features such as call forwarding, voicemail, and interactive voice response (IVR) systems."},{name:"MTAS/SCC-AS",href:"/mtas-scc-as",tooltipText:"Service Centralization and Continuity Application Server (SCC-AS)  acts as a B2BUA within the IMS architecture. Its role is to facilitate service centralization, as well as coordination of SR-VCC handover procedures."}]},{label:"Data",icon:"Binary",color:"#2874bc",type:"category",items:[{name:"GGSN/PGW",href:"/ggsn-pgw",tooltipText:"Gateway GPRS Support Node (GGSN) is part of the core network that connects GSM-based 3G networks to the Internet. The GGSN, sometimes known as a wireless router, works in tandem with the Serving GPRS Support Node (SGSN) to keep mobile users connected to the Internet and IP-based applications."},{name:"S-GW",href:"/s-gw",tooltipText:"The main function of the Serving Gateway (S-GW) is routing and forwarding of user data packets. It is also responsible for inter-eNB handovers in the U-plane and provides mobility between LTE and other types of networks."},{name:"MME",href:"/mme",tooltipText:"The mobility management entity (MME), manages UE access network and mobility, as well as establishing the bearer path for UE's."},{name:"DNS",href:"/dns",tooltipText:"The Domain Name System(DNS) translates Domain Names into corresponding IP Addresses for example websites and Email addresses are translated into HTTPS URL or SMTP."},{name:"CGNAT",href:"/cgnat",tooltipText:"Carrier-grade NAT (CGNAT) is a type of Network address translation for use in IPv4 network design."},{name:"AMF",href:"/amf",tooltipText:"The Authentication Management Field (AMF) is a 16 bit value which is used to set the acceptable synchronization window in both the UE (User Equipment) and the network."},{name:"SMF",href:"/smf",tooltipText:"Service Management Function (SMF) is the set of processes in an IN (Intelligent Network) that support the management of user and/or network information including service data and Service Logic programs that are required for the proper operation of a service."},{name:"UPF",href:"/upf",tooltipText:"The UPF supports features and capabilities to facilitate user plane operation. Examples: packet routing and forwarding, interconnection to the Data Network, policy enforcement and data buffering."}]},{label:"Connectivity",color:"#3456be",type:"category",items:[{name:"HLR/HSS",href:"/hlr-hss",tooltipText:"The HSS is the master database for a given subscriber, acting as a central repository of information for network nodes."},{name:"UDR",href:"/udr",tooltipText:"The UDR is a converged repository of subscriber information and can be used to service a number of network functions"},{name:"AuC",href:"/auc",tooltipText:"Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution."},{name:"UDM",href:"/udm",tooltipText:"Unified data management (UDM) is a process where a range of disparate data sources are consolidated to create a single source of data."},{name:"AUSF",href:"/ausf",tooltipText:"Authentication Server Function (AUSF) is used to facilitate 5G security processes."},{name:"AAA",href:"/aaa",tooltipText:"Authentication, Authorization and Accounting (AAA) systems implemented to securely determine the identity and privileges of a user."},{name:"AAA proxy",href:"/aaa-proxy",tooltipText:"An AAA proxy is used when APs send authentication/accounting messages to the controller and the controller forwards these messages to an external AAA server."},{name:"MNP/ENUM",href:"/mnp-enum",tooltipText:"Mobile number portability (MNP) is a service that allows a cellphone or smartphone customer to change telecom carrier and keep the same phone number."},{name:"XCAP",href:"/xcap",tooltipText:"XCAP is used to store application configuration data, in XML format and allows clients to read, write as well as modify the same configuration data."},{name:"Entitlement server",href:"/entitlement-server",tooltipText:"Entitlement Server ensures correct entitlement of VoLTE subscriptions, allowing only authenticated and authorized devices to use the service."}]},{label:"Charging",color:"#3e5cce",type:"category",items:[{name:"Charging gateway",href:"/charging-gateway",tooltipText:"Charging gateway function (CGF) is an open, convergent mediation system that supports mediation for voice, data, and content in wired/wireless communication and all-IP environment."},{name:"Real-time billing gateway",href:"/real-time-billing-gateway",tooltipText:"Real time billing involves the authorizing, gathering, rating, and posting of account information either at the time of service request or within a short time afterwards. Real time billing is primarily used for prepaid services such as calling cards or prepaid."},{name:"CHF",href:"/chf",tooltipText:"The Charging Function encompasses support for both prepaid and postpaid billing within the same charging system."}]},{label:"Signaling",color:"#117a9b",type:"category",items:[{name:"STP",href:"/stp",tooltipText:"A Signal Transfer Point (STP) is a node in an SS7 network that routes signaling messages based on their destination point code in the SS7 network."},{name:"DRA",href:"/dra",tooltipText:"A Diameter Routing Agent (DRA) provides real-time routing capabilities to ensure that messages are routed among the correct elements in a network."},{name:"SCP",href:"/scp",tooltipText:"A Service Communication Proxy (SCP) provides real-time message forwarding and routing capabilities to a 5G network."},{name:"SS7 Firewall",href:"/ss7-firewall",tooltipText:"The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more."}]},{label:"Policy",color:"#3371b8",type:"category",items:[{name:"Radius",href:"/radius",tooltipText:"Remote Authentication Dial-In User Service (RADIUS) is a protocol used for providing centralized authentication, authorization, and accounting (AAA) management for users who connect and use network resources. RADIUS is commonly used in enterprise networks and internet service provider (ISP) environments to manage user access to network resources."},{name:"PCEF",href:"/pcef",tooltipText:"The Policy and Charging Enforcement Function (PCEF) is a DPI (Deep Packet Inspection) device responsible for the enforcement of rules which have been configured statically or supplied to the PCEF dynamically from the PCRF (Policy and Charging Rules Function)."},{name:"PCRF",href:"/pcrf",tooltipText:"Policy and Charging Rules Function is the software node designated in real-time to determine policy rules in a multimedia network."},{name:"PCF",href:"/pcf",tooltipText:"The policy control function (PCF) determines the resources and services that can be used to support connected devices."}]},{label:"Support",color:"#408eb8",type:"category",items:[{name:"Orchestration and automation"},{name:"Monitoring and alerting"},{name:"Customer service tools and portals"},{name:"24/7 Level 3 On-call"}]},{label:"APIs",color:"#419e98",type:"category",items:[{name:"APIs for developers"},{name:"Develop platform for 3rd party developers"},{name:"Storefront for operators"}]}]},19371:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(67294),o=n(86010),i=n(35463),r=n(23702),s=n(19459),l=n(11441),c=n(23487),m=n(87365),d={mdxPageWrapper:"mdxPageWrapper_yV3F"},u=n(16550),p=n(11685),h=n(83699),g=n(79524),f=n(23672),v=n(53852),b=n(97325),S=n(94894),w=n(19327),y=n(44335),C=n(63654),T=n(84172),x=n(35974),E=n(84960),M={tags:"tags_nwRG",tag:"tag_nH8J"},k=n(39962),N=n(77873);function P(e){var t=e.tags;return a.createElement("div",{className:(0,o.Z)(r.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement("b",null,a.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,o.Z)(M.tags,"padding--none","margin-left--sm")},t.map((function(e){return a.createElement("li",{key:e,className:M.tag},a.createElement(v.Z,{label:e})," ")})))))}var A="/technology/features/";function _(e){(0,k.Z)().siteConfig;var t=(0,u.TH)(),n=null,i=[{type:"link",href:"/technology",label:"Technology"}],m=null,d=!1,v=null,b=function e(a,o){return void 0===o&&(o=null),(a=JSON.parse(JSON.stringify(a))).map((function(a,r){if("category"===a.type){var s=a.label.toLowerCase();a.collapsed=!0,a.collapsible=!0;var l=t.pathname.split("/");(""===l[l.length-1]?l[l.length-3]:l[l.length-2])==s&&(a.collapsed=!1,i.push(a)),a.items=e(a.items,s)}else{if(!a.href)return void(a.label=a.name);var c=t.pathname.split("/"),u=c[c.length-1];u=""===u?c[c.length-2]:u,console.log(a),u==a.href.split("/")[1]?(d=!0,n=a.name,a.className="menu__link--active"):d?v||(v=a):m=a,a.href=""+A+o+a.href,a.label=a.name}})),a}(N.Z);return a.createElement(s.Z,{title:""+n},a.createElement("div",{className:w.Z.docPage+" container margin-vert--lg"},a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,y.Z.docSidebarContainer)},a.createElement(p.Z,{sidebar:b,path:"/technology/features"})),a.createElement("main",{className:(0,o.Z)(S.Z.docMainContainer)},a.createElement("div",{className:(0,o.Z)("container","padding-top--md","padding-bottom--lg")},a.createElement("div",{className:"row"},a.createElement("div",{className:(0,o.Z)("col",C.Z.docItemCol),style:{padding:"0 25px"}},a.createElement("div",{className:T.Z.docItemContainer},a.createElement("article",null,a.createElement("nav",{className:x.Z.breadcrumbsContainer},a.createElement("ul",{className:"breadcrumbs"},a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":"Home page",className:"breadcrumbs__link",href:(0,g.Z)("/")},a.createElement(E.Z,{className:x.Z.breadcrumbHomeIcon}))),i.map((function(e,t){return a.createElement("li",{className:"breadcrumbs__item",key:t},a.createElement(h.Z,{className:"breadcrumbs__link",href:e.href,itemProp:"item"},a.createElement("span",{itemProp:"name"},e.label)))})),a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:"breadcrumbs__item breadcrumbs__item--active"},a.createElement("span",{className:"breadcrumbs__link",itemProp:"name"},n),a.createElement("meta",{itemProp:"position",content:"2"})))),a.createElement("div",{className:(0,o.Z)(r.k.docs.docMarkdown,"markdown")},a.createElement(l.Z,null,e.children)),a.createElement("footer",{className:(0,o.Z)(r.k.docs.docFooter,"docusaurus-mt-lg")},a.createElement(P,{tags:e.tags}))),a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg"},m&&a.createElement(f.Z,{subLabel:"Prev Feature",title:m.name,permalink:m.href}),v&&a.createElement(f.Z,{subLabel:"Next Feature",title:v.name,permalink:v.href,isNext:!0})))),a.createElement("div",{className:"col col--3"},a.createElement(c.Z,{toc:e.toc,minHeadingLevel:1,maxHeadingLevel:6})))))))}function I(e){var t=e.content,n=t.metadata,u=n.title,p=n.description,h=n.frontMatter,g=h.wrapperClassName,f=h.hide_table_of_contents;if(t.metadata.frontMatter.advancedPage)return a.createElement(i.FG,{className:(0,o.Z)(null!=g?g:r.k.wrapper.mdxPages,r.k.page.mdxPage)},a.createElement(i.d,{title:u,description:p}),a.createElement(s.Z,null,a.createElement("main",{className:m.Z.page},a.createElement(l.Z,null,a.createElement(t,null)))));if(t.metadata.frontMatter.techFeaturePage){var v=t.toc,b=t.metadata.frontMatter.tags;return a.createElement(_,{toc:v,tags:b},a.createElement(t,null))}return a.createElement(i.FG,{className:(0,o.Z)(null!=g?g:r.k.wrapper.mdxPages,r.k.page.mdxPage)},a.createElement(i.d,{title:u,description:p}),a.createElement(s.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,o.Z)("row",d.mdxPageWrapper)},a.createElement("div",{className:(0,o.Z)("col",!f&&"col--8")},a.createElement("article",null,a.createElement(l.Z,null,a.createElement(t,null)))),!f&&t.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(c.Z,{toc:t.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level}))))))}},35974:function(e,t){t.Z={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"}},63654:function(e,t){t.Z={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"}},84172:function(e,t){t.Z={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"}},87365:function(e,t){t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",subtitleJp:"subtitleJp_VtvY",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp",tooltipStyling:"tooltipStyling_Iy7j"}}}]);