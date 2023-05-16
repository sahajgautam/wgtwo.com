"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6878],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return g}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return o?n.createElement(g,i(i({ref:t},u),{},{components:o})):n.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},20727:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={slug:"building-software-for-a-telecom-core-network",title:"Building software for a telecom core network",date:new Date("2020-08-21T00:00:00.000Z"),tags:["telecom","software-development","core-network","app-ecosystem"],authors:"david-\xe5se"},l=void 0,c={permalink:"/jp/blog/building-software-for-a-telecom-core-network",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-08-21-building-software-for-a-telecom-core-network.md",source:"@site/../blog/2020-08-21-building-software-for-a-telecom-core-network.md",title:"Building software for a telecom core network",description:"One of the goals of wgtwo is to enable operators and third parties to build products and services for the \u201ccore network\u201d of the telecom stack. In short, this means providing API access to a subscription\u2019s telecom functionality (messaging, calling, etc). In this article we will show how we built VoiceBox, a Voicemail forwarding application.",date:"2020-08-21T00:00:00.000Z",formattedDate:"August 21, 2020",tags:[{label:"telecom",permalink:"/jp/blog/tags/telecom"},{label:"software-development",permalink:"/jp/blog/tags/software-development"},{label:"core-network",permalink:"/jp/blog/tags/core-network"},{label:"app-ecosystem",permalink:"/jp/blog/tags/app-ecosystem"}],readingTime:6.12,hasTruncateMarker:!0,authors:[{name:"David \xc5se",title:"Engineering Manager for Ecosystem",url:"https://linkedin.com/in/davidaase",imageURL:"/img/author-photos/daa.jpg",key:"david-\xe5se"}],frontMatter:{slug:"building-software-for-a-telecom-core-network",title:"Building software for a telecom core network",date:"2020-08-21T00:00:00.000Z",tags:["telecom","software-development","core-network","app-ecosystem"],authors:"david-\xe5se"},prevItem:{title:"A new hope for products in telecom",permalink:"/jp/blog/a-new-hope-for-products-in-telecom"},nextItem:{title:"Choosing an Erlang formatter",permalink:"/jp/blog/choosing-erlang-formatter/"}},u={authorsImageUrls:[void 0]},p=[{value:"The product",id:"the-product",level:2},{value:"Developing on the <strong>wgtwo</strong> platform",id:"developing-on-the-wgtwo-platform",level:2},{value:"Obtaining user consent",id:"obtaining-user-consent",level:2},{value:"Connecting to the <strong>wgtwo</strong> API",id:"connecting-to-the-wgtwo-api",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},d="wrapper";function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the goals of ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," is to enable operators and third parties to build products and services for the \u201ccore network\u201d of the telecom stack. In short, this means providing API access to a subscription\u2019s telecom functionality (messaging, calling, etc). In this article we will show how we built VoiceBox, a Voicemail forwarding application."),(0,a.kt)("h2",{id:"the-product"},"The product"),(0,a.kt)("p",null,"One of the most common complaints people have with their Voicemail service in Europe is that you have to call in to your Voicemail to listen to your messages. In order to play the message, you have to navigate through a slow voice menu using your dialpad. We believed this would be easy to improve."),(0,a.kt)("p",null,"Our product idea was simple. When Alice leaves a voicemail message for Bob, Bob receives this message either as an audio file or as a speech-to-text transcript."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VoiceBox splash screen",src:o(84396).Z,width:"360",height:"640"}),"\n",(0,a.kt)("img",{alt:"VoiceBox home screen",src:o(25671).Z,width:"360",height:"640"}),"\n",(0,a.kt)("img",{alt:"Android messaging app",src:o(57945).Z,width:"360",height:"640"})),(0,a.kt)("p",null,"The product idea isn\u2019t what most people would call revolutionary, but almost all of the world's mobile operators have hermetically sealed core networks. This means it would be impossible to build this product without lawyering up and coming to some sort of agreement with one of them. The ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," core network, however, is open and provides API access to Voicemail, MMS and SMS  (among other things), which is just what we need to build our product."),(0,a.kt)("h2",{id:"developing-on-the-wgtwo-platform"},"Developing on the ",(0,a.kt)("strong",{parentName:"h2"},"wgtwo")," platform"),(0,a.kt)("p",null,"To create a product on the ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," platform, the first thing you have to do is create a free developer account at ",(0,a.kt)("a",{href:"https://developer.wgtwo.com",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://developer.wgtwo.com"},"https://developer.wgtwo.com")),". Once you have signed up, you have to create an Organization and add a Product to that organization."),(0,a.kt)("p",null,"You can specify what permissions your product will require in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product > Scopes")," tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Developer Portal Scopes Screen",src:o(88308).Z,width:"740",height:"709"})),(0,a.kt)("p",null,"In an ideal world, VoiceBox would work like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The subscriber signs in and enables the desired functionality in VoiceBox."),(0,a.kt)("li",{parentName:"ol"},"The next time the subscriber receives a voicemail, an event is fired by ",(0,a.kt)("strong",{parentName:"li"},"wgtwo"),"\u2019s core network, which VoiceBox receives."),(0,a.kt)("li",{parentName:"ol"},"VoiceBox triggers an SMS/MMS send using our APIs."),(0,a.kt)("li",{parentName:"ol"},"The subscriber receives an SMS/MMS from the sender \u201cVoiceBox\u201d.")),(0,a.kt)("p",null,"In a few months time this ideal world should be reality, but at the time of writing (mid August 2020) we\u2019re missing the events API and the \u201cSend from Product\u201d API. Currently VoiceBox works like this (changes are highlighted):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The subscriber signs in and enables the desired functionality in VoiceBox."),(0,a.kt)("li",{parentName:"ol"},"The next time the subscriber receives a voicemail, ",(0,a.kt)("strong",{parentName:"li"},"VoiceBox will discover it by polling"),"."),(0,a.kt)("li",{parentName:"ol"},"VoiceBox triggers an MMS send using our APIs."),(0,a.kt)("li",{parentName:"ol"},"The subscriber receives an ",(0,a.kt)("strong",{parentName:"li"},"MMS from their own number"),".")),(0,a.kt)("p",null,"It\u2019s not perfect, but it still demonstrates the potential of the platform. None of this can happen without the subscriber\u2019s consent though, so in the next section we\u2019ll have a look at how that works."),(0,a.kt)("h2",{id:"obtaining-user-consent"},"Obtaining user consent"),(0,a.kt)("p",null,"The app we're building is touching sensitive data, and we can't do that without asking the subscriber if it\u2019s okay. The ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," platform includes an OAuth implementation with SMS authentication, which means that we can be reasonably sure that the subscriber has consented."),(0,a.kt)("p",null,"When a subscriber opens VoiceBox for the first time, they\u2019re met with a login page, and after completing a pin challenge they arrive at an OAuth consent screen. Here they have to accept the terms of VoiceBox, as well as all the required scopes."),(0,a.kt)("p",null,"The login is branded to look like the product (notice the pink action button), while the consent screen is branded to look like the operator (in our case this is ",(0,a.kt)("a",{href:"https://vimla.se",target:"_blank"},"Vimla"),", a Swedish operator which uses our platform):\n",(0,a.kt)("img",{alt:"ID login screen",src:o(88417).Z,width:"360",height:"640"}),"\n",(0,a.kt)("img",{alt:"ID pin screen",src:o(30334).Z,width:"360",height:"640"}),"\n",(0,a.kt)("img",{alt:"ID consent screen",src:o(11041).Z,width:"360",height:"640"})),(0,a.kt)("p",null,"Our platform has a standard ",(0,a.kt)("a",{href:"https://oauth.net/2/",target:"_blank"},"OAuth 2")," flow. When the subscriber taps \u201cAccept\u201d, ",(0,a.kt)("strong",{parentName:"p"},"wgtwo"),' redirects the subscriber to the third-party, which receives an "access token" that allows them to act on behalf of the subscriber. In this case the access token will let the third-party fetch Voicemails and send MMS from the subscriber, so it\u2019s important to keep it safe.\nNext we\u2019ll look at using this access token to perform actions on the subscriber\'s behalf.'),(0,a.kt)("h2",{id:"connecting-to-the-wgtwo-api"},"Connecting to the ",(0,a.kt)("strong",{parentName:"h2"},"wgtwo")," API"),(0,a.kt)("p",null,"All ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," APIs are ",(0,a.kt)("a",{href:"https://grpc.io/",target:"_blank"},"gRPC"),". This can be a bit intimidating if you are used to REST APIs, but luckily we also have official Java clients distributed through Maven/JitPack. If you want to use a different language you can generate your own client using our public proto files. One of the benefits of gRPC is that you don\u2019t have to ever write your own rest adapter for the API."),(0,a.kt)("p",null,"Let\u2019s have a look at how you can fetch a Voicemail file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun getVoicemail(user: User, uuid: String): Voicemail? {\n    val getVoicemailRequest = VoicemailProto.GetVoicemailRequest.newBuilder().setVoicemailId(uuid).build()\n    val voicemail = try {\n        blockingStub\n                .withOAuthTokenFor(user) // this function attaches the access token (from the consent screen)\n                .getVoicemail(getVoicemailRequest)\n    } catch (e: StatusRuntimeException) {\n        logger.warn("Error getting voicemail $uuid; ${e.message}")\n        throw e\n    }\n    if (voicemail.metadata) {\n        return Voicemail(\n            ... // we map the gRPC voicemail object to a VoiceBox specific object\n        )\n    } else {\n        logger.warn("No voicemail metadata for $uuid")\n        return null\n    }\n}\n')),(0,a.kt)("p",null,"We use the official ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," API client to fetch a voicemail based on the UUID of the voicemail, which we polled for earlier (code not shown)."),(0,a.kt)("p",null,"Unlike with REST APIs, we don't have to think about writing client code and handling HTTP responses, this is taken care of by the gRPC client library."),(0,a.kt)("p",null,"Once we have the voicemail, we send it to the subscriber using their own number as the sender:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun sendMms(user: User, phone: Msisdn, audio: ByteString) = try {\n    val request = MmsProto.SendMessageFromSubscriberRequest\n            .newBuilder()\n            .addMessageContent(\n                MmsProto.MessageContent.newBuilder().setAudio(\n                    MmsProto.AudioContent.newBuilder().setWav(audio)\n                )\n            )\n            .setToE164(phone.toPhoneNumberProto()) // the receiver is the same as the sender\n            .setFromSubscriber(phone.toPhoneNumberProto()) // the sender is the same as the receiver\n            .build()\n    val response = blockingStub\n            .withOAuthTokenFor(user) // this function attaches the access token (from the consent screen)\n            .sendMessageFromSubscriber(request)\n    if (response.status == MmsProto.SendResponse.SendStatus.SEND_OK) {\n        true\n    } else {\n        logger.warn("Unable to send MMS to ${phone.e164}: ${response.description} (${response.status.name})")\n        false\n    }\n} catch (e: Exception) {\n    logger.warn("Unable to send MMS to ${phone.e164}: ${e.message}")\n    false\n}\n')),(0,a.kt)("p",null,"This is also pretty straightforward, except for the part where the sender is also the receiver. In the future this will be a bit less confusing, since we\u2019ll be sending the MMS from the product (\u201cVoiceBox\u201d) instead of the subscriber itself."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As you can see, we\u2019re still in the early stages of our developer platform. In the coming year, we will be adding a lot more APIs, as well as building an app-store where subscribers can browse products that they want to add to their subscription. We believe opening up the core network in this way will allow third-party developers to build incredible apps that will lead to much happier subscribers, which will in turn lead to subscriber growth for operators on our platform."),(0,a.kt)("p",null,"At the time of writing, all apps on the platform have to be free, but we are working on a monetization model similar to that of the Apple and Google app-stores. Our main priority is to come up with a model that is fair to both third-party developers and operators."),(0,a.kt)("p",null,"If you\u2019re interested in our platform, please head on over to ",(0,a.kt)("a",{href:"https://developer.wgtwo.com",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://developer.wgtwo.com"},"https://developer.wgtwo.com"))," and create an account. If you have any questions please contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:products@wgtwo.com"},"products@wgtwo.com"),"."))}g.isMDXComponent=!0},11041:function(e,t,o){t.Z=o.p+"assets/images/consent-screen-f6be7afcb64d2bfd259bf029a73a9b16.png"},88308:function(e,t,o){t.Z=o.p+"assets/images/developer-portal-scopes-ef5c424f0dff92f40ac64b2a4fd748bd.png"},57945:function(e,t,o){t.Z=o.p+"assets/images/message-inbox-88042532d7ac1cfaebdfba3e6afb2509.png"},88417:function(e,t,o){t.Z=o.p+"assets/images/msisdn-screen-0938beb47bb12752909ad9b10912f9c4.png"},30334:function(e,t,o){t.Z=o.p+"assets/images/pin-screen-c16025eef0a1d6621d3c29fc54a045fa.png"},25671:function(e,t,o){t.Z=o.p+"assets/images/voicebox-home-068b8f7a8c60ed57cf2d95e6ae99693e.png"},84396:function(e,t,o){t.Z=o.p+"assets/images/voicebox-splash-6d10dc0d5c9ca95802530f5fd836ef96.png"}}]);