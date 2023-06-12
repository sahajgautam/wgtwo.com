(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[4869],{99248:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(87365),i="deploymentModel_i7eR",r="deploymentModels_q8Oz",a="deploymentModelTitle_giNL",l="splitContainer_DIl1",s="sidebar_AOHV",c=o(67294),m=function(e){var t=(0,c.useState)(!1),o=t[0],n=t[1],r=e.accordionData,l=r.card_number,s=r.title,m=r.content;return c.createElement(c.Fragment,null,c.createElement("div",{className:i},c.createElement("div",{className:a,onClick:function(){return n(!o)}},l," ",c.createElement("br",null),s),o&&c.createElement("div",{className:"accordion-content"},m)))},u=function(e){return c.createElement("div",{className:r},e.processItems)};var d=function(){var e=[{card_number:"01",title:"Meet your recruiter",content:"The goal of this meeting is to get to know each other better. \n      We will introduce you to our organization, and you can tell us how you \n      ended up where you are. We will also discuss compensation and role expectations. \n      How we do this is up to you, we can meet for a coffee, chat on the phone, or \n      have lunch.\n      "},{card_number:"02",title:"Interview with hiring manager",content:"-"},{card_number:"03",title:"High level technical interview",content:"The goal of this session is to see how you deliver solutions \n      to a real problem. This will be a high level discussion with one of our \n      engineers, where we talk about system design, languages, libraries, \n      frameworks, and so on.\n      "},{card_number:"04",title:"Low level technical interview",content:"The goal of this session is to look more deeply into one of your \n      areas of expertise. This discussion will be tailored to the role you are\n      interested in. For example, if you are looking to join us as a Software\n      Engineer, this session will focus on problem solving, code quality and \n      algorithms. We will do some live programming, either with paper/pencil, \n      in a simple text editor on a computer, or on a whiteboard; the choice is yours.\n      "},{card_number:"05",title:"Touch base with your recruiter",content:"After the interviews we should both reflect and give each other \n      feedback to decide on the next step. If you had a bad day during one of the \n      interviews, or if we feel like we are missing some information, we can discuss\n       here whether we add another session.\n      "},{card_number:"06",title:"All done now what?",content:"Now that we both (hopefully) have all the information we need, we will decide if we\u2019re a good fit for each other. This is the time to reach out with any questions you might still have.\n\n      If we both agree you\u2019d be a good fit for the company we will draw up the papers.\n      Even if we don\u2019t feel like it\u2019s a good fit right now, we would still like to keep in touch. Things change fast, and who knows what the future holds for us!\n      "}].map((function(e){return c.createElement(m,{accordionData:e,key:e.card_number})}));return c.createElement("div",{className:n.Z.section+" "+n.Z.sectionDark},c.createElement("div",{className:n.Z.container+" "+l+" "},c.createElement("div",{className:n.Z.text+" "+s},c.createElement("div",{className:n.Z.pillTitle},"our culture"),c.createElement("h2",{className:n.Z.title},"Interview Process"),c.createElement("div",{className:n.Z.subtitle},"At ",c.createElement("b",null,"wgtwo")," we believe in transparency and enabling our teams to work in the way that best suits them - even if that means working remotely from home five days a week. We see this as a strength in our company and want to apply the same principles to our recruitment process.",c.createElement("br",null),c.createElement("br",null),"During each step we will be clear about what we would like to know about you. We leave the how you want to show off your skills up to you! Phone, video conference, or face to face all works for us. And of course, we will cover all your travel expenses.")),c.createElement(u,{processItems:e})))}},1979:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var n=o(67294),i=o(83699),r=o(31514),a=o(19459),l=o(87365),s="jobs_JWaB",c="job_mqgt",m="jobName_sSzD",u="jobLocation_gs0M",d=o(99248),h=(0,o(74515).Z)("ArrowRight",[["line",{x1:"5",y1:"12",x2:"19",y2:"12",key:"1smlys"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]),w=o(66508),p=function(e){var t=e.job;return n.createElement(i.Z,{className:c,to:"/careers/job/"+t.id+"/"+(0,w.slugify)(t.title)},n.createElement("div",{className:"position-text"},n.createElement("div",{className:m},t.title),n.createElement("div",{className:u},t.subtitle)),n.createElement("div",null,n.createElement(h,null)))},f=function(e){var t=e.jobs;return n.createElement(a.Z,{title:"Jobs"},n.createElement(r.Z,null,n.createElement("link",{rel:"preload",href:"https://wgtwo.jobs.personio.de/xml",as:"fetch",crossOrigin:"anonymous"})),n.createElement("div",{className:l.Z.section},n.createElement("div",{className:l.Z.container},n.createElement("div",{className:l.Z.container},n.createElement("div",{className:s},n.createElement("div",{className:l.Z.title},"Jobs"),t.map((function(e){return n.createElement(p,{job:e,key:e.id})})),n.createElement("div",{id:"personio-ads"}))))),n.createElement(d.Z,null))}},66508:function(e){e.exports={validEmail:function(e){return/^[^\s@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|zoho\.com|protonmail\.com|gmx\.com|yandex\.com|mail\.com|temp-mail\.org|guerrillamail\.com|10minutemail|mailinator\.com|yopmail\.com|throwawaymail\.com|fakemailgenerator\.com|getnada\.com|tempinbox\.com|mintemail\.com|mailcatch\.com|owlymail\.com|fakeinbox\.com|mytempemail\.com|trashmail\.com|spamgourmet\.com|jetable\.org|mailnesia\.com|inboxbear\.com|mailtemp\.org|mailslurp\.com|33mail\.com|guerrillamail\.net|maildrop\.cc|sharklasers\.com|tempail\.com|spamgourmet\.net|dispostable\.com|tempmailo\.com|mailnesia\.com|getairmail\.com|inboxalias\.com|email\.tst|oastify\.com)[^\s@]+\.[^\s@]+$/i.test(e)},containsAngleBrackets:function(e){return/[<>]+/.test(e)},slugify:function(e){return e.toString().normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")}}},74515:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(67294),i=o(45697),r=o.n(i),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=["color","size","strokeWidth","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s.apply(this,arguments)}var c=function(e,t){var o=(0,n.forwardRef)((function(o,i){var r,c=o.color,m=void 0===c?"currentColor":c,u=o.size,d=void 0===u?24:u,h=o.strokeWidth,w=void 0===h?2:h,p=o.children,f=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(o,l);return(0,n.createElement)("svg",s({ref:i},a,{width:d,height:d,stroke:m,strokeWidth:w,className:"lucide lucide-"+(r=e,r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())},f),[].concat(t.map((function(e){var t=e[0],o=e[1];return(0,n.createElement)(t,o)})),p||[]))}));return o.propTypes={color:r().string,size:r().oneOfType([r().string,r().number]),strokeWidth:r().oneOfType([r().string,r().number])},o.displayName=""+e,o}},87365:function(e,t){"use strict";t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",subtitleJp:"subtitleJp_VtvY",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp",tooltipStyling:"tooltipStyling_Iy7j"}}}]);