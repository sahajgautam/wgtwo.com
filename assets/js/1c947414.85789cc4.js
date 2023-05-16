"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[261],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46470:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={title:"Responsible Disclosure"},s="Responsible Disclosure",u={type:"mdx",permalink:"/security/responsible-disclosure",source:"@site/src/pages/security/responsible-disclosure.md",title:"Responsible Disclosure",description:"Updated November 14, 2022",frontMatter:{title:"Responsible Disclosure"}},c=[{value:"Services in scope",id:"services-in-scope",level:2},{value:"Qualifying vulnerabilities",id:"qualifying-vulnerabilities",level:2},{value:"Responsible Disclosure Policy",id:"responsible-disclosure-policy",level:2},{value:"Security Research Hall of Fame",id:"security-research-hall-of-fame",level:2}],p={toc:c},f="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"responsible-disclosure"},"Responsible Disclosure"),(0,o.kt)("div",{class:"pill"},"Updated November 14, 2022"),(0,o.kt)("p",null,"If you believe you have discovered a vulnerability in a Working Group Two product please report it. Visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.wgtwo.com/.well-known/security.txt"},"https://www.wgtwo.com/.well-known/security.txt")," for contact information."),(0,o.kt)("h2",{id:"services-in-scope"},"Services in scope"),(0,o.kt)("p",null,"In principle, any Working Group Two owned web service that handles reasonably sensitive user data is intended to be in scope. This includes virtually all the content in the following domains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*.wgtwo.com"))),(0,o.kt)("p",null,"On the flip side, the program has the following important exclusions to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*.dev.wgtwo.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\*.sandbox.*.wgtwo.com"))),(0,o.kt)("h2",{id:"qualifying-vulnerabilities"},"Qualifying vulnerabilities"),(0,o.kt)("p",null,"Any design or implementation issue that substantially affects the confidentiality or integrity of user data is likely to be in scope for the program. Common examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross-site scripting"),(0,o.kt)("li",{parentName:"ul"},"Cross-site request forgery"),(0,o.kt)("li",{parentName:"ul"},"Authentication or authorization flaws"),(0,o.kt)("li",{parentName:"ul"},"Server-side code execution bugs")),(0,o.kt)("h2",{id:"responsible-disclosure-policy"},"Responsible Disclosure Policy"),(0,o.kt)("p",null,"Safety and data security is of utmost priority for Working Group Two. If you are a security researcher and have discovered a security vulnerability in our code base, application, or API, we appreciate your help in disclosing it to us in a responsible manner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please refrain from requesting compensation for reporting vulnerabilities."),(0,o.kt)("li",{parentName:"ul"},"We will acknowledge receipt of your vulnerability report and send you regular updates about our progress."),(0,o.kt)("li",{parentName:"ul"},"If your report is reproducible as an exploit and results in a change to the code base or documentation of a Working Group Two product, we will, at your option, publicly acknowledge your responsible disclosure in our ",(0,o.kt)("a",{parentName:"li",href:"https://www.wgtwo.com/security/bugbounty#security-research-hall-of-fame"},"Hall of Fame")," after a fix is applied."),(0,o.kt)("li",{parentName:"ul"},"After the fix, we ask security researchers to wait 30 days after a release before announcing the specific details of a vulnerability and to provide Working Group Two with a link to any such announcements.")),(0,o.kt)("p",null,"Many thanks to the security researchers who have responsibly contributed their findings to make the Working Group Two products and services more secure."),(0,o.kt)("h2",{id:"security-research-hall-of-fame"},"Security Research Hall of Fame"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rajat Waghade (2023)"),(0,o.kt)("li",{parentName:"ul"},"Druvash Jani (2023)")))}d.isMDXComponent=!0}}]);