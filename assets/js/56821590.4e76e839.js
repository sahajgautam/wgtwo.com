"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3533],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=p(n),k=r,c=h["".concat(l,".").concat(k)]||h[k]||d[k]||o;return n?a.createElement(c,s(s({ref:t},m),{},{components:n})):a.createElement(c,s({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={slug:"what-is-a-short-message",title:"What the heck is a short message?",date:new Date("2020-10-01T00:00:00.000Z"),tags:["telco","MAP","TCAP","SS7","Forward-SM","SMS"],authors:"seba"},l=void 0,p={permalink:"/blog/what-is-a-short-message",editUrl:"https://github.com/working-group-two/wg2.com/edit/main/blog/../blog/2020-10-01-what-is-short-messages.md",source:"@site/../blog/2020-10-01-what-is-short-messages.md",title:"What the heck is a short message?",description:"I will try as best as I can to give an explanation of what happens",date:"2020-10-01T00:00:00.000Z",formattedDate:"October 1, 2020",tags:[{label:"telco",permalink:"/blog/tags/telco"},{label:"MAP",permalink:"/blog/tags/map"},{label:"TCAP",permalink:"/blog/tags/tcap"},{label:"SS7",permalink:"/blog/tags/ss-7"},{label:"Forward-SM",permalink:"/blog/tags/forward-sm"},{label:"SMS",permalink:"/blog/tags/sms"}],readingTime:13.255,hasTruncateMarker:!0,authors:[{name:"Sebastian Weddmark Olsson",title:"Tech Lead for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/sebastian-weddmark-olsson/",imageURL:"/img/author-photos/swo.jpg",key:"seba"}],frontMatter:{slug:"what-is-a-short-message",title:"What the heck is a short message?",date:"2020-10-01T00:00:00.000Z",tags:["telco","MAP","TCAP","SS7","Forward-SM","SMS"],authors:"seba"},prevItem:{title:"October Virtual Hackdays",permalink:"/blog/hackdays-october-2020"},nextItem:{title:"A new hope for products in telecom",permalink:"/blog/a-new-hope-for-products-in-telecom"}},m={authorsImageUrls:[void 0]},d=[{value:"Ever wondered why there is a limit to the size of the text message you are sending?",id:"ever-wondered-why-there-is-a-limit-to-the-size-of-the-text-message-you-are-sending",level:2},{value:"Addition from <em>Bung</em>",id:"addition-from-bung",level:4}],h={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I will try as best as I can to give an explanation of what happens\nwhen you send an SMS from your phone."),(0,o.kt)("p",null,"Disclaimer: Telco stuff is hard."),(0,o.kt)("p",null,"Also disclaimer: this blog post will also contain alot of ackronyms,\nafter all, it is telco."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Aaand down the rabbit hole we go...")),(0,o.kt)("h1",{id:"where-to-even-start"},"Where to even start"),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"SS7")," (telco/telecom/telecommunications) network there are many\ndifferent nodes (servers), with different kinds of tasks."),(0,o.kt)("p",null,"The group of protocols that is used to send signals over ",(0,o.kt)("em",{parentName:"p"},"IP")," between\nthese nodes is called ",(0,o.kt)("em",{parentName:"p"},"SIGTRAN"),' (derived from "signaling transport").\nOlder networks that have not switched to ',(0,o.kt)("em",{parentName:"p"},"IP")," do not use ",(0,o.kt)("em",{parentName:"p"},"SIGTRAN"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SIGTRAN")," protocols are the lower layer protocols used for signaling,\nthey range from ",(0,o.kt)("em",{parentName:"p"},"SCTP")," (Stream Control Transmission Protocol) to\n",(0,o.kt)("em",{parentName:"p"},"M2PA")," (Message Transfer Part 2 User Peer-to-Peer Adaptation Layer)\nand ",(0,o.kt)("em",{parentName:"p"},"M3UA")," (Message Transfer Part 3 User Adaptation Layer)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SCTP")," is like a mix between ",(0,o.kt)("em",{parentName:"p"},"UDP")," and ",(0,o.kt)("em",{parentName:"p"},"TCP"),". It is supposed to be\nquicker than ",(0,o.kt)("em",{parentName:"p"},"TCP"),", but more reliable than ",(0,o.kt)("em",{parentName:"p"},"UDP"),"."),(0,o.kt)("p",null,"Both ",(0,o.kt)("em",{parentName:"p"},"M2PA")," and ",(0,o.kt)("em",{parentName:"p"},"M3UA")," support ",(0,o.kt)("em",{parentName:"p"},"SCTP")," management, and the reporting of\nstatus changes of those, as well as providing transfer of ",(0,o.kt)("em",{parentName:"p"},"MTP3"),"\n(Message Transfer Part 3) messages."),(0,o.kt)("p",null,"On top of ",(0,o.kt)("em",{parentName:"p"},"SIGTRAN")," are the ",(0,o.kt)("em",{parentName:"p"},"SS7")," protocols."),(0,o.kt)("p",null,"What I'm going to talk about are the protocols on the very top of ",(0,o.kt)("em",{parentName:"p"},"SS7"),",\nspecifically the ",(0,o.kt)("em",{parentName:"p"},"MAP")," (Mobile Application Part) as well as the ",(0,o.kt)("em",{parentName:"p"},"TCAP"),"\n(Transaction Capabilities Application Part). There are other protocols\ninbetween, for instance ",(0,o.kt)("em",{parentName:"p"},"SCCP")," (Signalling Connection Control Part)\nwhich handles some handshaking, routing, and resilience."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"MAP")," layer is used when talking to some of the telco nodes such\nas ",(0,o.kt)("em",{parentName:"p"},"HLR")," (Home location registry), ",(0,o.kt)("em",{parentName:"p"},"VLR")," (Visitor location registry),\n",(0,o.kt)("em",{parentName:"p"},"MSC")," (Mobile switching centre), ",(0,o.kt)("em",{parentName:"p"},"SGSN")," (Serving ",(0,o.kt)("em",{parentName:"p"},"GPRS")," ","[ackronym in\nackronyms; go telco!]"," support node) and the ",(0,o.kt)("em",{parentName:"p"},"SMSC")," (Short message\nservice centre)."),(0,o.kt)("h1",{id:"map-versions-and-tcap-dialogues"},"MAP versions and TCAP dialogues"),(0,o.kt)("p",null,"There are some iterations of ",(0,o.kt)("em",{parentName:"p"},"MAP")," (v1, v2, v3, and v4) and messages\nalmost always come in pairs, an acknowledgement (",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnResult")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnError"),") for each sent message (",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke"),")."),(0,o.kt)("p",null,"To determine which version to use between two nodes, the sending node\ntries to start the transaction (called a dialogue) by sending a ",(0,o.kt)("em",{parentName:"p"},"TCAP"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Begin")," message with the ",(0,o.kt)("em",{parentName:"p"},"MAP")," message and it's highest compatible\nversion. If the receiving node cannot talk that version, it sends a\n",(0,o.kt)("em",{parentName:"p"},"TCAP")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Abort")," message with it's highest compatible version. In v1\nthere might not even be a reason, just an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Abort"),"; the sending\nnode might then try to send the ",(0,o.kt)("em",{parentName:"p"},"MAP")," message as v1 anyway."),(0,o.kt)("p",null,"In my head it goes like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Node 1: "Hi, I want to talk version 3 to you about this"\nNode 2: "No I don\'t understand you, but we can talk version 2 about it instead"\nNode 1: "Ok, then I want to talk version 2 to you about this instead"\nNode 2: "Aah, now I see..."\n')),(0,o.kt)("p",null,"Or maybe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Node 1: "Hi, I want to talk version 3 to you about this"\nNode 2: "No"\nNode 1: "Ok, then I want to talk to you about this in version 1 instead"\nNode 2: "Maybe I will talk to you, maybe I will not"\n')),(0,o.kt)("p",null,"For ",(0,o.kt)("em",{parentName:"p"},"TCAP")," dialogues there are (mainly) four message types.  ",(0,o.kt)("inlineCode",{parentName:"p"},"Begin"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Abort"),". Each of the types have an ID (or two, as I\nsaid, telco is complicated), a component and a dialogue part. The\ncomponent contains the ",(0,o.kt)("em",{parentName:"p"},"MAP")," message. The dialogue part contains\nthe version and application to use (that is ",(0,o.kt)("em",{parentName:"p"},"MAP")," Application;\ni.e. which type of message it contains), but it is only used in the\nfirst message from both nodes for the version negotiation."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"I think this covers most of it, let's get back to the fun part.")),(0,o.kt)("h1",{id:"how-does-sms-work"},"How does SMS work?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SMS")," was initally implemented because of the wish to send text\nmessages to pagers using the phoneline when it was not in use for\nphonecalls. It was decided at a meeting in Oslo to be released to the\npublic when some French and German company understood it's\nvalue. (Don't quote me on any of this)."),(0,o.kt)("p",null,"When you send an ",(0,o.kt)("em",{parentName:"p"},"SMS"),", the ",(0,o.kt)("em",{parentName:"p"},"SMS")," is transfered to the ",(0,o.kt)("em",{parentName:"p"},"MSC")," or the\n",(0,o.kt)("em",{parentName:"p"},"SGSN")," in your current (serving) network. The ",(0,o.kt)("em",{parentName:"p"},"MSC")," or ",(0,o.kt)("em",{parentName:"p"},"SGSN")," then\nsends an packet called ",(0,o.kt)("inlineCode",{parentName:"p"},"MO-Forward-SM")," towards the ",(0,o.kt)("em",{parentName:"p"},"SMSC"),' in your\ncurrent network. It stands for "Mobile Originating Forward Short\nMessage" meaning it started from your (mobile-)phone.'),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"SMSC")," then asks the recipients HLR about the routing details for\nthe ",(0,o.kt)("em",{parentName:"p"},"SMS"),". It does so by sending another ",(0,o.kt)("em",{parentName:"p"},"MAP")," message of type\n",(0,o.kt)("inlineCode",{parentName:"p"},"sendRoutingInfoForSM")," requesting the location of the recipients ",(0,o.kt)("em",{parentName:"p"},"MSC"),"\nor ",(0,o.kt)("em",{parentName:"p"},"SGSN"),", or both."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"SMSC")," then sends another packet, this time a ",(0,o.kt)("inlineCode",{parentName:"p"},"MT-Forward-SM"),",\ntowards the ",(0,o.kt)("em",{parentName:"p"},"MSC")," in the recipients network. In this case ",(0,o.kt)("em",{parentName:"p"},"MT")," stands\nfor Mobile Terminated, meaning it goes towards the recipients phone."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Dia have amazing icons:")),(0,o.kt)("div",null,(0,o.kt)("img",{src:"/img/blog/sms/forward-sm.svg",alt:"You calling your mom"})),(0,o.kt)("p",null,"The similarities in ",(0,o.kt)("em",{parentName:"p"},"MO")," and ",(0,o.kt)("em",{parentName:"p"},"MT")," requests are that they both contain\na origin and destination address as well as the user data (your actual\ntext message), and a possibly a correlation id which is basically a\nmapping between your SIM-card id and a temporary id and was originally\nused for making sure that the sending network paid for ",(0,o.kt)("em",{parentName:"p"},"SMS"),"s towards\nthe receiving network."),(0,o.kt)("p",null,"For ",(0,o.kt)("em",{parentName:"p"},"MO")," the origin address is your ",(0,o.kt)("em",{parentName:"p"},"MSISDN")," (read telephone number),\nand the destination is the ",(0,o.kt)("em",{parentName:"p"},"GT")," address (Global title; a way to route\nstuff) of the ",(0,o.kt)("em",{parentName:"p"},"SMSC"),". For ",(0,o.kt)("em",{parentName:"p"},"MT")," messages the origin address is the ",(0,o.kt)("em",{parentName:"p"},"GT"),"\nof the ",(0,o.kt)("em",{parentName:"p"},"SMSC")," and the destination address is either the recipients\n",(0,o.kt)("em",{parentName:"p"},"IMSI")," (read SIM-card) or the recipients correlation id. It could also\nbe a ",(0,o.kt)("em",{parentName:"p"},"LMSI")," which is a 4-byte network location identifier if the\nrecipient is also within the same network as the sender."),(0,o.kt)("h2",{id:"ever-wondered-why-there-is-a-limit-to-the-size-of-the-text-message-you-are-sending"},"Ever wondered why there is a limit to the size of the text message you are sending?"),(0,o.kt)("div",{class:"left-right-row"},(0,o.kt)("div",{class:"text"},"Two characters left on a GSM7 encoded SMS."),(0,o.kt)("img",{class:"image",src:"/img/blog/sms/160_chars.png",alt:"Characters left: 2/160"})),(0,o.kt)("p",null,"If you (god forbid) you would break the protocol and send a text\nmessage greater than 140 bytes, which translates to 160, 152, or 70\ncharacters depending on locale ","[1]",", then your phone would break up the\nmessage into multiple text messages. This arbitrary size of 140 bytes\nis not really arbitrary at all. It was chosen because it would\nprecisely fit into a single ",(0,o.kt)("em",{parentName:"p"},"MTP3")," ",(0,o.kt)("em",{parentName:"p"},"SIF")," (Signalling Information\nField) when routing label, ",(0,o.kt)("em",{parentName:"p"},"SCCP"),", ",(0,o.kt)("em",{parentName:"p"},"TCAP")," and ",(0,o.kt)("em",{parentName:"p"},"MAP")," layers were taken\ninto account."),(0,o.kt)("p",null,"[1]"," There is something called ",(0,o.kt)("em",{parentName:"p"},"GSM7")," bit-packing. Instead of using 1\nbyte (8 bits) per character, ",(0,o.kt)("em",{parentName:"p"},"GSM7")," uses 7 bits. This means that\ninstead of 140 characters, you can get up to 160 characters per\n",(0,o.kt)("em",{parentName:"p"},"SMS"),". The drawback is that you will have a smaller subset of\ncharacters to use, only the most common is supported. If you include\nany non-",(0,o.kt)("em",{parentName:"p"},"GSM7")," characters in your ",(0,o.kt)("em",{parentName:"p"},"SMS")," then the ",(0,o.kt)("em",{parentName:"p"},"SMS")," will\nautomatically be converted to use either ",(0,o.kt)("em",{parentName:"p"},"USC-2")," or ",(0,o.kt)("em",{parentName:"p"},"GSM7")," with a\ndifferent charset instead. ",(0,o.kt)("em",{parentName:"p"},"USC-2")," uses 2 bytes, or 16 bits, instead\nof ",(0,o.kt)("em",{parentName:"p"},"GSM7"),"s 7 bits. That leaves you with 70 characters per\n",(0,o.kt)("em",{parentName:"p"},"SMS"),". ",(0,o.kt)("em",{parentName:"p"},"USC-2")," is similar for the basic multilingual plane (",(0,o.kt)("em",{parentName:"p"},"BMP"),") to\n",(0,o.kt)("em",{parentName:"p"},"UTF-16"),". In fact ",(0,o.kt)("em",{parentName:"p"},"UTF-16")," is an extension of ",(0,o.kt)("em",{parentName:"p"},"UCS-2"),". The main\ndifference is that ",(0,o.kt)("em",{parentName:"p"},"USC-2")," is fixed width and does not allow for the\nextended characters in the private use area of ",(0,o.kt)("em",{parentName:"p"},"BMP"),". ",(0,o.kt)("em",{parentName:"p"},"UTF-16"),' is\nvariable width of one or two 16-bits code points, and does allow the\nextended characters. For extended characters to work (for instance\n"praying/folded hands" ',"\ud83d\ude4f","), phones might try to fake ",(0,o.kt)("em",{parentName:"p"},"UTF-16"),"\nby using two ",(0,o.kt)("em",{parentName:"p"},"USC-2")," characters. New phones can handle this fine, but\nolder phones might receive two question marks as they cannot decode it\nproperly."),(0,o.kt)("p",null,"If ",(0,o.kt)("em",{parentName:"p"},"GSM7")," have a modified charset (i.e. not the default ",(0,o.kt)("em",{parentName:"p"},"BMP"),") then\nthere will be a header in front that specifies that. That header will\ntake up 7 bytes after packing (in other words 8 characters), making\nthe maximum length of the ",(0,o.kt)("em",{parentName:"p"},"SMS")," 152 characters."),(0,o.kt)("div",{class:"left-right-row"},(0,o.kt)("img",{class:"image",src:"/img/blog/sms/67_chars.png",alt:"Characters left: 45/67 (3)"}),(0,o.kt)("div",{class:"text"},"Using emojis will convert the encoding to USC-2. Note the missing 3 characters and that there are multiple SMSes. When multiple messages are sent, the phone needs some way of telling how to reassemble the messages. The headers take up 6 bytes per message for this purpose.")),(0,o.kt)("p",null,"However when ",(0,o.kt)("em",{parentName:"p"},"MAP")," v2 started to use ",(0,o.kt)("em",{parentName:"p"},"TCAP")," dialogues there was more\ninformation to put into the packet and 140 bytes might not be left for\nthe ",(0,o.kt)("em",{parentName:"p"},"SMS"),". The ",(0,o.kt)("em",{parentName:"p"},"SMSC")," would then need to break up the message into\nchunks, and start the transaction an empty ",(0,o.kt)("em",{parentName:"p"},"TCAP")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Begin")," message and\nset a flag in the ",(0,o.kt)("em",{parentName:"p"},"MT")," request called ",(0,o.kt)("inlineCode",{parentName:"p"},"moreMessagesToSend"),". It would\nthen send the actual text inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," messages. In the end\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"End")," (",(0,o.kt)("em",{parentName:"p"},"hehe"),") message is transmitted as a response and the\ntransaction is finished."),(0,o.kt)("p",null,"The response back to a ",(0,o.kt)("em",{parentName:"p"},"MO")," request is, as previous stated, an\nacknowledgement if the ",(0,o.kt)("em",{parentName:"p"},"SMS")," have been successfully submitted to the\n",(0,o.kt)("em",{parentName:"p"},"SMSC")," or not (again either ",(0,o.kt)("inlineCode",{parentName:"p"},"returnResult")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"returnError"),"). For ",(0,o.kt)("em",{parentName:"p"},"MT"),"\nrequests the acknowledgement is if the ",(0,o.kt)("em",{parentName:"p"},"SMS")," is successfully delivered\nor not."),(0,o.kt)("p",null,"If the ",(0,o.kt)("em",{parentName:"p"},"MT")," request is not successful, the ",(0,o.kt)("em",{parentName:"p"},"SMSC")," could ask the ",(0,o.kt)("em",{parentName:"p"},"HLR"),"\n(the Home Location Registry is basically a database containing user\nsubscriptions and knowledge of which nodes the mobile talked to\nlatest) to be notified when the user comes back online. A bunch of\nother ",(0,o.kt)("em",{parentName:"p"},"MAP")," messages are then involved, such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reportSMDeliveryStatus"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"informServiceCentre"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"alterServiceCentre"),", and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"readyForSM"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"At least this is main idea I think...")),(0,o.kt)("h1",{id:"differences-in-map-versions-for-sms"},"Differences in MAP versions for SMS"),(0,o.kt)("p",null,"There are three ",(0,o.kt)("em",{parentName:"p"},"MAP")," versions defined for ",(0,o.kt)("em",{parentName:"p"},"SMS"),". The latest version\n(v4) is not used in the context of ",(0,o.kt)("em",{parentName:"p"},"SMS"),"."),(0,o.kt)("p",null,"In version 1, the dialogue portion was not invented and all chunks are\nsent in new ",(0,o.kt)("em",{parentName:"p"},"TCAP")," dialogues. The size of the user data could then\nbe 140 bytes."),(0,o.kt)("p",null,"In version 1 and version 2 there is no difference between ",(0,o.kt)("em",{parentName:"p"},"MT")," and\n",(0,o.kt)("em",{parentName:"p"},"MO"),". Everything is sent as another type of message ",(0,o.kt)("inlineCode",{parentName:"p"},"Forward-SM"),",\nwhich does not include any privacy correlation ids, and there are no\nfancy responses with delivery status. There is still an\nacknowledgement, but is in a form of an empty message."),(0,o.kt)("p",null,"Only way to see difference between an ",(0,o.kt)("em",{parentName:"p"},"MO")," and a ",(0,o.kt)("em",{parentName:"p"},"MT")," in version 1 is\nto look at the addresses and see if they are either coming from an\n",(0,o.kt)("em",{parentName:"p"},"SMSC")," or going to an ",(0,o.kt)("em",{parentName:"p"},"SMSC"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moreMessagesToSend")," flag was implemented in version 2, so it exist\nonly for version 2 and version 3."),(0,o.kt)("p",null,"Ok, to recap, what do we have now"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Begin"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Continue"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"End"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Abort")," messages."),(0,o.kt)("li",{parentName:"ul"},"Dialogue handshake in the first request/response messages sent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MT-Forward-SM"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MO-Forward-SM"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Forward-SM")),(0,o.kt)("li",{parentName:"ul"},"Involved parties: Mobile phones, ",(0,o.kt)("em",{parentName:"li"},"MSC")," and ",(0,o.kt)("em",{parentName:"li"},"SMSC"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wait we are missing something. I've only covered 2G,3G..")),(0,o.kt)("h1",{id:"what-about-4glte-and-beyond-5g"},"What about 4G/LTE and beyond (5G)?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ouch.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"LTE")," networks does not use any of the ",(0,o.kt)("em",{parentName:"p"},"M3UA"),", ",(0,o.kt)("em",{parentName:"p"},"SCCP"),", ",(0,o.kt)("em",{parentName:"p"},"TCAP"),", ",(0,o.kt)("em",{parentName:"p"},"MAP"),"\nprotocols. In ",(0,o.kt)("em",{parentName:"p"},"LTE")," networks the main message type is ",(0,o.kt)("em",{parentName:"p"},"Diameter")," which\ndoesn't contain fragmentation and can contain larger\nmessages. Everything is sent in one request and every request is\nanswered with a response. ",(0,o.kt)("em",{parentName:"p"},"Diameter")," could use either ",(0,o.kt)("em",{parentName:"p"},"TCP")," or ",(0,o.kt)("em",{parentName:"p"},"SCTP")," as\ntransport layer."),(0,o.kt)("p",null,"To make ",(0,o.kt)("em",{parentName:"p"},"SMSes")," work on ",(0,o.kt)("em",{parentName:"p"},"LTE")," networks a new interface ",(0,o.kt)("em",{parentName:"p"},"SGs")," was\ninvented which translates ",(0,o.kt)("em",{parentName:"p"},"SS7")," messages to ",(0,o.kt)("em",{parentName:"p"},"Diameter")," messages.  This\ninterface is in most cases used by the ",(0,o.kt)("em",{parentName:"p"},"MSC")," to translate the messages\nto ",(0,o.kt)("em",{parentName:"p"},"Diameter")," and forward it to the ",(0,o.kt)("em",{parentName:"p"},"MME")," (Mobility Management Entity,\nsimilar to ",(0,o.kt)("em",{parentName:"p"},"SGSN")," but in the ",(0,o.kt)("em",{parentName:"p"},"LTE")," network). The ",(0,o.kt)("em",{parentName:"p"},"MME")," then forwards\nit to the ",(0,o.kt)("em",{parentName:"p"},"UE")," (user equipment, same as mobile subscriber or ",(0,o.kt)("em",{parentName:"p"},"MS")," in\n",(0,o.kt)("em",{parentName:"p"},"GSM"),"/",(0,o.kt)("em",{parentName:"p"},"GPRS")," networks)."),(0,o.kt)("p",null,"There is also the ",(0,o.kt)("em",{parentName:"p"},"SM-over-IP")," that does not use ",(0,o.kt)("em",{parentName:"p"},"Diameter"),". Instead\nit uses the ",(0,o.kt)("em",{parentName:"p"},"SIP"),"-protocol (Session Initiation Protocol) to transfer\nmessages over ",(0,o.kt)("em",{parentName:"p"},"IP")," and ",(0,o.kt)("em",{parentName:"p"},"TCP")," or ",(0,o.kt)("em",{parentName:"p"},"UDP")," to the ",(0,o.kt)("em",{parentName:"p"},"IMS")," (IP Multimedia\nSubsystem). ",(0,o.kt)("em",{parentName:"p"},"SIP")," is also used to enable VoLTE (Voice over ",(0,o.kt)("em",{parentName:"p"},"LTE"),")."),(0,o.kt)("p",null,"For 5G the ",(0,o.kt)("em",{parentName:"p"},"SMSC")," is called ",(0,o.kt)("em",{parentName:"p"},"SMSF"),"; The Centre becomes a Function. The\nsignalling will be based on ",(0,o.kt)("em",{parentName:"p"},"HTTP2"),"/",(0,o.kt)("em",{parentName:"p"},"JSON")," ontop of ",(0,o.kt)("em",{parentName:"p"},"TCP"),". The ",(0,o.kt)("em",{parentName:"p"},"SMSF"),"\nwill still need to support both ",(0,o.kt)("em",{parentName:"p"},"MAP")," and ",(0,o.kt)("em",{parentName:"p"},"Diameter"),"."),(0,o.kt)("p",null,"Relevant ",(0,o.kt)("a",{parentName:"p",href:"https://xkcd.com"},"xkcd"),":"),(0,o.kt)("div",{class:"left-right-row"},(0,o.kt)("table",{class:"text"},(0,o.kt)("tr",null,(0,o.kt)("td",null,"Generation"),(0,o.kt)("td",null,"2G/3G"),(0,o.kt)("td",null,"4G"),(0,o.kt)("td",null,"5G")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Radio technology"),(0,o.kt)("td",null,"GSM/GPRS"),(0,o.kt)("td",null,"LTE"),(0,o.kt)("td",null,"NR")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Protocol group"),(0,o.kt)("td",null,"SS7"),(0,o.kt)("td",null,"Diameter"),(0,o.kt)("td",null,"HTTP2/JSON")),(0,o.kt)("tr",null,(0,o.kt)("td",null),(0,o.kt)("td",null,"Node"),(0,o.kt)("td",null,"Agent"),(0,o.kt)("td",null,"Function")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Session management"),(0,o.kt)("td",null,"SGSN"),(0,o.kt)("td",null,"MME"),(0,o.kt)("td",null,"AMF")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SM management"),(0,o.kt)("td",null,"SMSC"),(0,o.kt)("td",null,"SMSC"),(0,o.kt)("td",null,"SMSF")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"User management"),(0,o.kt)("td",null,"HLR"),(0,o.kt)("td",null,"HSS"),(0,o.kt)("td",null,"UDM")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Device"),(0,o.kt)("td",null,"MS"),(0,o.kt)("td",null,"UE"),(0,o.kt)("td",null,"UE"))),(0,o.kt)("a",{class:"image",href:"https://xkcd.com/2365/"},(0,o.kt)("img",{src:"https://imgs.xkcd.com/comics/messaging_systems.png"}))),(0,o.kt)("h1",{id:"headache"},"Headache"),(0,o.kt)("p",null,"Hopefully you did not get a (too severe) headache by reading this\npost."),(0,o.kt)("p",null,"I've spared you with ",(0,o.kt)("strong",{parentName:"p"},"a lot")," of details on the lower level of\nprotocols. There are loads of implementation details that must match\nthe specifications, otherwise you will get all kinds of aborts and\npossibly even dropped traffic.\nFor instance we learned that we accidentally sent dialogue portions in\nmore than the first response back, which seemed to work at first\nglance; at closer inspection we found out that some messages were\ndropped because the length of the packet became larger in size than an\nallowed value. We could still send them, but the other side was not\nable to receive them."),(0,o.kt)("p",null,"Remember: Telco is old and complex. However, it should still function\nwith different setups and on different hardware, vendors and with\nenvironment."),(0,o.kt)("p",null,"Fun-fact: Sometimes a boolean value is not just encoded as a 1\nor 0. To save bandwith telco decided that you could also just define\nit as a ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL OPTIONAL")," meaning that if it is defined (but lacks a\nvalue), then it is considered true.  if it is not defined then it is\nconsidered false. This is the case for the ",(0,o.kt)("inlineCode",{parentName:"p"},"moreMessagesToSend")," flag."),(0,o.kt)("p",null,"Hope you enjoy the reading as much as I enjoy digging into these\nprotocols!"),(0,o.kt)("p",null,"Special thanks to ",(0,o.kt)("em",{parentName:"p"},"Stein Eldar")," and ",(0,o.kt)("em",{parentName:"p"},"Tobias")," for giving me feedback\nand answering all my stupid questions on this subject, and ",(0,o.kt)("em",{parentName:"p"},"Atanas"),"\nfor making me realize there are yet other protocols to carry ",(0,o.kt)("em",{parentName:"p"},"SMS"),".\nAlso ",(0,o.kt)("em",{parentName:"p"},"Bung")," for this amazing addition:"),(0,o.kt)("h4",{id:"addition-from-bung"},"Addition from ",(0,o.kt)("em",{parentName:"h4"},"Bung")),(0,o.kt)("p",null,'"I\u2019ve spared you with a lot of details on the lower level of\nprotocols" needs a lot of emphasis.'),(0,o.kt)("p",null,"Some funny extra complexities that just came into my mind while\nreading:"),(0,o.kt)("p",null,"The actual ",(0,o.kt)("em",{parentName:"p"},"SMS"),' text goes into a field called "user data". There is a\nfield called "user data length". When the message is ',(0,o.kt)("em",{parentName:"p"},"GSM7"),' encoded, the\n"user data length" is the number of characters in the text message,\notherwise it\'s the number of bytes in the user data.'),(0,o.kt)("p",null,'Normally the user data only contains the (encoded) text of the\nmessage, but there is a field called "user data header" which\nindicates that there is a length prefixed TLV header in the "user\ndata". If the message is ',(0,o.kt)("em",{parentName:"p"},"GSM7"),' encoded, then the "user data lenght"\nfield needs to be filled as if the "user data header" was really ',(0,o.kt)("em",{parentName:"p"},"GSM7"),"\nencoded, which it isn't."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"GSM7")," is really a variably septet encoding, one character can consist\nof either 7 or 14 bits similar to how a ",(0,o.kt)("em",{parentName:"p"},"UTF-8")," code point can be 8,\n16, 24, or 32 bits. Unlike ",(0,o.kt)("em",{parentName:"p"},"UTF-8")," however, there are not multiple\nbyte ranges corresponding to the different locales (called code pages\nin Unicode) but a single 7 bit shift character that says that\nfollowing 7 bits should be interpreted as a character from a\ntranslation table which is communicated out of band."),(0,o.kt)("p",null,"So all that is only the complexities of a single field (the user data)\nfor a single encoding (",(0,o.kt)("em",{parentName:"p"},"GSM7"),")."),(0,o.kt)("p",null,"Then the real kicker: The protocol for ",(0,o.kt)("em",{parentName:"p"},"SMS")," is really called ",(0,o.kt)("em",{parentName:"p"},"SM-TP"),"\n(Short Message Transfer Protocol). ",(0,o.kt)("em",{parentName:"p"},"SM-TP")," is the same for 2G/3G (on top\nof ",(0,o.kt)("em",{parentName:"p"},"MAP"),"), 4G (on top of ",(0,o.kt)("em",{parentName:"p"},"SIP"),"), 5G (on top of ",(0,o.kt)("em",{parentName:"p"},"HTTP"),'). So the very\nsame stupid "length prefixed TLV encoded headers concatenated with\nencoded text with length either in characters or in bytes depending on\nencoding and actual meaning of the encoding communicated out of band\nbut only sometimes" field exists no matter if your talking over old\nlegacy ',(0,o.kt)("em",{parentName:"p"},"MAP")," or the modern ",(0,o.kt)("em",{parentName:"p"},"HTTP/XML")," based 5G."))}k.isMDXComponent=!0}}]);