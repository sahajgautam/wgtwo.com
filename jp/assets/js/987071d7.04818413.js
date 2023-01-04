"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[7791],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70061:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(8209),["components"]),l={id:"auc",title:"AuC using HSM",sidebar_label:"AuC"},c=void 0,u={unversionedId:"technology/auc",id:"technology/auc",title:"AuC using HSM",description:"Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution.",source:"@site/../docs/technology/auc.md",sourceDirName:"technology",slug:"/technology/auc",permalink:"/jp/docs/technology/auc",draft:!1,editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/docs/../docs/technology/auc.md",tags:[],version:"current",lastUpdatedAt:1672841466,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"auc",title:"AuC using HSM",sidebar_label:"AuC"},sidebar:"myAutogeneratedSidebar",previous:{title:"Small Operators",permalink:"/jp/docs/case-studies/small-operators"},next:{title:"Security Whitepaper",permalink:"/jp/docs/technology/security-whitepaper"}},s={},p=[{value:"Benefits",id:"benefits",level:3},{value:"Compliance",id:"compliance",level:3},{value:"Additional Features",id:"additional-features",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"wgtwo")," CloudAuC is a cloud-based Authentication Center built on top of a Hardware Security Module (HSM) that enables us to leverage cloud computing to securely generate and use encryption keys within our telecom core network. CloudAuC uses auto-generated encryption keys backed by validated HSMs with FIPS 140-2 Level 3 compliance. Additionally, ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," CloudAuC is integrated with ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," Core Network, providing the necessary security, scalability, and availability controls to meet our regulatory and compliance needs."),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage encryption for HLR / HSS / AUSF",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"wgtwo")," CloudAuC presents a single control point for managing keys. Defining software-based policies we are able to easily create, rotate, import, and delete encryption keys via tamper-resistance secure APIs."),(0,o.kt)("li",{parentName:"ul"},"Secure and highly-available by design",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"wgtwo")," CloudAuC automatically load balances requests and securely manages encryption keys across replica sets across multiple availability zones to prevent data failure."),(0,o.kt)("li",{parentName:"ul"},"Built-in auditing",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"wgtwo")," CloudAuC records all API requests, including key management, usage, and access to encryption keys. External logging helps us manage risk, meet compliance requirements, perform event analysis, and conduct forensic.")),(0,o.kt)("h3",{id:"compliance"},"Compliance"),(0,o.kt)("p",null,"The security and quality controls in ",(0,o.kt)("strong",{parentName:"p"},"wgtwo")," CloudAuC components have been certified under multiple compliance schemes such as SOC 2 and FIPS 140-2 Level 3."),(0,o.kt)("h3",{id:"additional-features"},"Additional Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Software-based dedicated HSM"),(0,o.kt)("li",{parentName:"ul"},"Leverage compliance standards"),(0,o.kt)("li",{parentName:"ul"},"Master key backed by a dedicated hardware HSM with FIPS 140-2 certification"),(0,o.kt)("li",{parentName:"ul"},"Master key auto rotation"),(0,o.kt)("li",{parentName:"ul"},"Scalable and secure cloud"),(0,o.kt)("li",{parentName:"ul"},"Automatic failover and disaster recovery"),(0,o.kt)("li",{parentName:"ul"},"Network policies to limit access"),(0,o.kt)("li",{parentName:"ul"},"External audit logging and alerting")))}m.isMDXComponent=!0},8209:function(e,t,n){n(67294)}}]);