"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6636],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,k=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={slug:"kafka-timers",title:"Kafka timers",date:new Date("2021-02-28T00:00:00.000Z"),tags:["kafka","timer","stateless"],authors:"sergey-zyrianov"},l=void 0,c={permalink:"/jp/blog/kafka-timers",editUrl:"https://github.com/working-group-two/wg2.com/edit/main/blog/../blog/2021-02-28-kafka-timers.md",source:"@site/../blog/2021-02-28-kafka-timers.md",title:"Kafka timers",description:"A timer is a cornerstone of any software that communicates over the network. There are plenty of implementations",date:"2021-02-28T00:00:00.000Z",formattedDate:"February 28, 2021",tags:[{label:"kafka",permalink:"/jp/blog/tags/kafka"},{label:"timer",permalink:"/jp/blog/tags/timer"},{label:"stateless",permalink:"/jp/blog/tags/stateless"}],readingTime:4.69,hasTruncateMarker:!0,authors:[{name:"Sergey Zyrianov",title:"Tech Lead for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/sergey-zyrianov-8a7ab34/",imageURL:"/img/author-photos/sz.jpg",key:"sergey-zyrianov"}],frontMatter:{slug:"kafka-timers",title:"Kafka timers",date:"2021-02-28T00:00:00.000Z",tags:["kafka","timer","stateless"],authors:"sergey-zyrianov"},prevItem:{title:"Mitsui Knowledge Industry (MKI) to develop private networks business",permalink:"/jp/blog/mitsui-knowledge-industry-mki-private-networks-business"},nextItem:{title:"Changing the color of your bulbs: The fancy way",permalink:"/jp/blog/mqtt-event-bridge"}},u={authorsImageUrls:[void 0]},p=[{value:"Kafka concepts",id:"kafka-concepts",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Oscillator",id:"oscillator",level:3},{value:"Futures",id:"futures",level:3},{value:"Cancelling a timer",id:"cancelling-a-timer",level:3},{value:"What to worry about",id:"what-to-worry-about",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A timer is a cornerstone of any software that communicates over the network. There are plenty of implementations\nthat provide a timer facility. Most of them are in memory and will lose scheduled timers should the application crash.\nIn this blog we discuss durable Kafka timers that do not depend on in memory state. By design\nwe shall assume 1 second resolution of these timers."),(0,i.kt)("p",null,"Before taking on timers let's cover some Kafka basics."),(0,i.kt)("h2",{id:"kafka-concepts"},"Kafka concepts"),(0,i.kt)("p",null,"There are a few Kafka concepts in play to simulate timers - Kafka topic, Kafka stream, Kafka streams library.\nWhere ",(0,i.kt)("em",{parentName:"p"},"topic")," is append only log of events, ",(0,i.kt)("em",{parentName:"p"},"stream")," is a cache of N most recent events on the ",(0,i.kt)("em",{parentName:"p"},"topic"),",\nand the ",(0,i.kt)("em",{parentName:"p"},"streams library")," is a software library implementing the concept of the ",(0,i.kt)("em",{parentName:"p"},"stream"),"."),(0,i.kt)("p",null,"A kafka topic resides inside the Kafka servers, but Kafka streams library keeps track of a topic's most recent\nevents on the application side - the stream. The stream is a key/value cache with random read access unlike\nappend only topic log. Key/value cache is not the only thing the library provides. It can also join\nthe streams. When an event and its key appear on a stream, the library looks up the same key in the other streams participating in the join.\nIt is using key/value cache associated with each stream and gives the result to the application.\nThe result will have the present event enriched with the matched past events from the joined streams.\nJoining two streams will yield the timer callback. Let's see how."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"Since it is Kafka, timer expiration shall result in an event posted on a topic of user's choice at the right time.\nThis event is delayed until due time by joining two streams: ",(0,i.kt)("em",{parentName:"p"},"oscillator")," and ",(0,i.kt)("em",{parentName:"p"},"timer-request"),". Callback\nevent is pushed to ",(0,i.kt)("em",{parentName:"p"},"timer-request")," topic with key equal to the expiration timestamp. Oscillator topic\nis the clock dial counting seconds since UNIX epoch in real time. At some point it will get to the second\nwhich is equal to the key on ",(0,i.kt)("em",{parentName:"p"},"timer-request")," topic, and the join will come up with the callback event."),(0,i.kt)("p",null,'An excellent summary on "timer wheel" and other timer algorithms can be found in this linux kernel ',(0,i.kt)("a",{parentName:"p",href:"https://lwn.net/Articles/156329/"},"thread"),'.\nOur implementation of timers using Kafka resembles the "timer wheel" algorithm with a bucket on each second to keep callbacks.\n',(0,i.kt)("em",{parentName:"p"},"Oscillator")," topic models rotating clock dial, ",(0,i.kt)("em",{parentName:"p"},"timer-request")," is bucketing callbacks by the expiration timestamp, and join of these two\ncontains content of the expired bucket with all the callbacks in it."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(19398).Z,width:"1024",height:"492"})),(0,i.kt)("p",null,"There are two Kafka applications running together to service these topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Oscillator"),(0,i.kt)("li",{parentName:"ul"},"Futures")),(0,i.kt)("h3",{id:"oscillator"},"Oscillator"),(0,i.kt)("p",null,"With the resolution of 1 second oscillator keeps pushing ",(0,i.kt)("em",{parentName:"p"},"oscillator")," topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'while (running) {\n    val nowSeconds = System.currentTimeMillis() / 1000L\n    while (timestampSeconds < nowSeconds) {\n        timestampSeconds++\n        KafkaProducers.send(\n            "oscillator",\n            timestampSeconds.toString(),\n            "1"\n        )\n    }\n    Thread.sleep(200)\n}\n\n')),(0,i.kt)("h3",{id:"futures"},"Futures"),(0,i.kt)("p",null,"When requesting a timer by pushing ",(0,i.kt)("em",{parentName:"p"},"timer-request")," topic, the user provides a callback structure\nused to dispatch timer event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Future {\n    string callBackTopic = 1;\n    string callBackKey = 2;\n    bytes callBack = 3;\n}\n")),(0,i.kt)("p",null,"Joining two streams on the key equal to the UNIX second will give all expired timers, and\ntheir callback coordinates."),(0,i.kt)("p",null,"First, setup a join with ",(0,i.kt)("em",{parentName:"p"},"WINDOW_SIZE")," large enough to cover the longest timer duration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val oscillator = builder.stream<String, String>("oscillator")\nval timerRequest = builder.stream("timer-request", Consumed.with(Serdes.String(), FutureSerde()))\nval timeoutEvents =\n    oscillator.join(\n            timerRequest,\n            { _: String?, future: Future -> future },\n            JoinWindows.of(WINDOW_SIZE),\n            StreamJoined.with(\n                    Serdes.String(),\n                    Serdes.String(),\n                    FutureSerde()\n            ).withThisStoreSupplier(\n                    Stores.persistentWindowStore(\n                            "join-this-store",\n                            WINDOW_SIZE.plusMinutes(30),\n                            WINDOW_SIZE,\n                            true\n                    )\n            ).withOtherStoreSupplier(\n                    Stores.persistentWindowStore(\n                            "join-other-store",\n                            WINDOW_SIZE.plusMinutes(30),\n                            WINDOW_SIZE,\n                            true\n                    )\n            )\n    )\n')),(0,i.kt)("p",null,"Second, kick of the processing loop looking for expired timers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"timeoutEvents.process(\n        ProcessorSupplier {\n            object : Processor<String, Future> {\n                override fun init(context: ProcessorContext) {}\n                override fun process(key: String, value: Future) {\n                    KafkaProducers.send(Topic.valueOf(value.callBackTopic),\n                            value.callBackKey,\n                            value.callBack.toByteArray()\n                    )\n                    Metrics.timerFired(value.callBackTopic)\n                }\n\n                override fun close() {}\n            }\n        }\n)\n\n")),(0,i.kt)("h3",{id:"cancelling-a-timer"},"Cancelling a timer"),(0,i.kt)("p",null,"There is no way to cancel these timers as events can't be easily removed from the Kafka stream.\nStill, it is possible to ignore timer events by using a token in callback request, and a variable\nin timer receiver state. When scheduling a timer the receiver puts the same token in two places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"callback struct it publishes on the ",(0,i.kt)("em",{parentName:"li"},"timer-request")," topic"),(0,i.kt)("li",{parentName:"ul"},"internal variable timerToken")),(0,i.kt)("p",null,"As timer fires receiver compares value in timerToken and in the callback event. Based on the result it\ndraws a conclusion if timer is to be ignored or not. All it has to do to cancel a timer is to reset\nvalue in its timerToken variable."),(0,i.kt)("p",null,'Since normally Kafka does "at least once" delivery it is a good idea to reset the timerToken immediately\nafter notification event.'),(0,i.kt)("h3",{id:"what-to-worry-about"},"What to worry about"),(0,i.kt)("p",null,"Kafka streams library is using local disk storage to keep the cache. The storage shall be large enough to host\nall timer requests based on the product of ",(0,i.kt)("em",{parentName:"p"},"timer-request")," topic retention, callback size and timer scheduling rate.\nThankfully Kafka is well-equipped to deal with this sort of troubles."),(0,i.kt)("p",null,"Oscillator must keep ticking otherwise timers will stop coming. Make sure to have\nmetrics/alarms in place to stay on top of Oscillator health. Deploy few of them for redundancy having in\nmind the extra load they will generate on timer users."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,'There are many options to export application state to the data tier layer. Timers are often part of that\nstate. Above we showed how to apply Kafka primitives to achieve a goal of making application "stateless" even\nif the state is using timers. It has its costs and benefits.'),(0,i.kt)("p",null,"Check out openings on the ",(0,i.kt)("a",{parentName:"p",href:"/careers/"},"Careers page")," if you\u2019re interested in building the future Telco backbone."))}h.isMDXComponent=!0},19398:function(e,t,n){t.Z=n.p+"assets/images/kt-d3c8c75ee99a5f0c4b9fc155ad9418ea.png"}}]);