"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6264],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=h(n),p=r,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var h=2;h<a;h++)s[h]=n[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={slug:"hacking-dark-themes-with-css-blend-modes/",title:"Hacking dark themes with CSS blend modes",date:new Date("2019-06-25T00:00:00.000Z"),tags:["CSS","frontend","design"],authors:["david-\xe5se"]},l=void 0,h={permalink:"/blog/hacking-dark-themes-with-css-blend-modes/",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2019-06-25-hacking-dark-themes-with-blend-modes.md",source:"@site/../blog/2019-06-25-hacking-dark-themes-with-blend-modes.md",title:"Hacking dark themes with CSS blend modes",description:"Like many other companies, Working Group Two has a number of applications which are",date:"2019-06-25T00:00:00.000Z",formattedDate:"June 25, 2019",tags:[{label:"CSS",permalink:"/blog/tags/css"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"design",permalink:"/blog/tags/design"}],readingTime:5.72,hasTruncateMarker:!0,authors:[{name:"David \xc5se",title:"Engineering Manager for Ecosystem",url:"https://linkedin.com/in/davidaase",imageURL:"/img/author-photos/daa.jpg",key:"david-\xe5se"}],frontMatter:{slug:"hacking-dark-themes-with-css-blend-modes/",title:"Hacking dark themes with CSS blend modes",date:"2019-06-25T00:00:00.000Z",tags:["CSS","frontend","design"],authors:["david-\xe5se"]},prevItem:{title:"We killed the butler: Replacing Jenkins with Concourse",permalink:"/blog/replacing-jenkins-with-concourse"}},d={authorsImageUrls:[void 0]},c=[{value:"What are CSS blend modes?",id:"what-are-css-blend-modes",level:2},{value:"Working with a non-standard blend mode",id:"working-with-a-non-standard-blend-mode",level:2},{value:"More comparison screenshots",id:"more-comparison-screenshots",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:c},p="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Like many other companies, ",(0,a.kt)("a",{parentName:"p",href:"/"},"Working Group Two")," has a number of applications which are\nonly available internally or to partners.\nOur UI designer (that's me) prefers light backgrounds with dark text, but one of our\npartners have wanted a dark theme for one of our applications for some time.\nWe haven't been able to prioritize this, but we were using CSS blend modes for a different project,\nand wondered if we could use them to quickly put together a dark theme."),(0,a.kt)("p",null,"The application in this post is one of our partner portals, which follows the Material Design\nguidelines. It\u2019s built with ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue")," and ",(0,a.kt)("a",{parentName:"p",href:"https://vuetifyjs.com/en/"},"Vuetify"),",\nbut also has some custom components and JS plugins (for uploads, charts, etc).\nIt took two hours to create the dark theme and deploy it to production, and we'll walk\nyou through the whole process (with screenshots) in this post."),(0,a.kt)("h2",{id:"what-are-css-blend-modes"},"What are CSS blend modes?"),(0,a.kt)("p",null,"Mozilla has a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode"},"page")," which explains\nthe concept fairly well. In short, blend modes decide what should happen when two colors are\nput on top of each other. The default blend mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"normal"),", which is what most people are used to.\nAs an example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"normal")," blend mode paints dark text on top of a light background on the\npage you\u2019re reading right now."),(0,a.kt)("p",null,"The application we have is light and we want it to be dark, so we need to look for blend modes that\ncan help with that. Scrolling through the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode"},"list at MDN"),",\none mode in particular stands out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"difference\n    The final color is the result of subtracting the darker of the two colors from the lighter one.\n    A black layer has no effect, while a white layer inverts the other layer's color.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Starting point, mostly basic Vuetify",src:n(24500).Z,width:"1337",height:"859"}),"\n",(0,a.kt)("img",{alt:"After applying",src:n(39446).Z,width:"1337",height:"859"})),(0,a.kt)("p",null,"Okay, that\u2019s actually not too bad. There are some obvious issues, like the color hues being\ninverted and everything being way too dark, but it should be possible to make some adjustments."),(0,a.kt)("h2",{id:"working-with-a-non-standard-blend-mode"},"Working with a non-standard blend mode"),(0,a.kt)("p",null,'The most jarring issue is that the colors have been inverted.\nOur teal logo is now red, and the red "unlocked account" icon we use in development mode is now teal.\nThis is in line with the documentation for the ',(0,a.kt)("inlineCode",{parentName:"p"},"difference")," blend mode, but luckily CSS also supports hue-rotation,\nso we can just rotate the hue back 180 degrees. Our base style now looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"html.dark-mode {\n   mix-blend-mode: difference;\n   filter: hue-rotate(180deg);\n}\n")),(0,a.kt)("p",null,"Hue is measured in degrees from 0 to 360, so we're flipping the hues twice.\nBelow, you can see a color wheel with no effects (1), with blend-mode (2), and with blend mode and hue rotate (3).\nAll the effects are applied to the same image here in your browser."),(0,a.kt)("p",null,"As you can see from the illustration, brightness and saturation\nis not accounted for with hue-rotate, so most colors won't look the same.\nThey will have the same hue though, so semantic meaning (red = danger, green = safe) is preserved.","\\","\nWe're lucky that our brand color doesn't change too much!"),(0,a.kt)("p",null,"So, this fixes our colors, but we also have to do something about the darkness.\nThe whole application is pretty much pitch black, and to make it brighter we need to \u2026 turn down the brightness:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"html.dark-mode {\n   mix-blend-mode: difference;\n   filter: hue-rotate(180deg) brightness(0.67);\n}\n")),(0,a.kt)("p",null,"Let's have a look ",(0,a.kt)("small",null,"(click to enlarge)"),":"),(0,a.kt)("p",null,"That\u2019s a lot better (blend modes are fun!). Our dark theme is close to done now,\nbut we have one problem remaining: shadows. Because of our blend mode, making\nthings darker means making them brighter, so all our shadows look like white glows.\nSince our base color is white/light gray, we can\u2019t simply change our shadows to white as there would be no contrast.\nOur solution was to embrace the \u201cglow\u201d feel and change the shadows to brand colored glows ",(0,a.kt)("small",null,"(click to enlarge)"),":"),(0,a.kt)("p",null,"As you might have noticed in the previous screenshot, we also made some other adjustments.\nWe made the logo white using a brightness filter, and we set the base font-weight to 700 (bold),\nsince contrast is lower in the dark theme."),(0,a.kt)("h2",{id:"more-comparison-screenshots"},"More comparison screenshots"),(0,a.kt)("p",null,"The following gallery shows some screenshots with custom components and JavaScript plugins.\nNo additional CSS was written for any of the views ",(0,a.kt)("small",null,"(click to enlarge)"),":"),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"All in all, it took around two hours to create this dark theme. Most of the time was\nspent experimenting with different settings to get acceptable contrast ratios.\nThere are probably better ways of doing this, but this was incredibly quick,\nand allowed us to deliver something we normally wouldn't be able to deliver.\nOther than the shadows, nothing is particularly ugly, so we consider this a success.\nThe whole style sheet is just a couple of selectors :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"html.dark-mode {\n    mix-blend-mode: difference;\n    filter: brightness(0.67) hue-rotate(180deg);\n    font-weight: 700 !important;\n}\n\n/* Glow for dropdown/card-hover*/\n.dark-mode .v-menu__content,\n.dark-mode .v-card--hover:hover {\n    box-shadow: 0 5px 20px rgba(142, 255, 252, 0.74);\n}\n\n.dark-mode .logo {\n    filter: brightness(0);\n}\n")),(0,a.kt)("p",null,"Thanks for reading!"),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cMany CSS frameworks have a dark-mode, why not use that?\u201d"),"\\","\nVuetify also has a dark-mode. Most of the components they offer look okay in dark-mode, but we would have\nto write custom CSS for our own components, and for other libraries we\u2019re using (primarily for charts).\nThe great thing about the blend-mode hack is that is operates independently of any framework.\nYou set it on an HTML tag and it treats everything the same way."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cWhat about accessibility?\u201d"),"\\","\nYeah, this isn't great for accessibility. Since we're lowering the brightness to 67% we're losing a lot of contrast.\nWe increased the font-weight to mitigate the effects of this, but you shouldn't use this technique for your primary theme."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cWhat about browser support?\u201d"),"\\","\nSupported in modern browsers, except Edge.\nThere's a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode#Browser_Compatibility"},"detailed table")," available on MDN."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cWhat about performance?\u201d"),"\\","\nWe haven't had any problems with performance, but some readers noted that they tried\nthe trick on a complex website (Jira), which resulted in sluggish behavior."))}m.isMDXComponent=!0},39446:function(e,t,n){t.Z=n.p+"assets/images/01-console-subs-difference-4045fc8e52600e88c507fea828b111fc.png"},24500:function(e,t,n){t.Z=n.p+"assets/images/01-console-subs-light-075d22a876ee12009b47dd134e9085a1.png"}}]);