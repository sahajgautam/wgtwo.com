(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[7499],{23958:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(97325),o=a(19459),c=a(87365),i=a(22190),s=a(18309),l=a(66508),m={company:r.createRef(),email:r.createRef(),name:r.createRef(),subscriptionCount:r.createRef(),message:r.createRef(),button:r.createRef()};t.default=function(){var e=(0,r.useState)(""),t=e[0],a=e[1],u=(0,r.useState)(!1),p=u[0],d=u[1],b=(0,r.useState)(!1),g=b[0],f=b[1],v=(0,r.useState)(!1),E=v[0],h=v[1],y=(0,r.useState)(!1),_=y[0],k=y[1],Z=(0,r.useState)(!1),w=Z[0],N=Z[1];return r.createElement(o.Z,{title:"Request a Demo"},r.createElement("div",{className:c.Z.page},r.createElement("div",{className:c.Z.section},r.createElement("div",{className:c.Z.container},r.createElement("div",{className:c.Z.centeredText},r.createElement("div",{className:c.Z.title},"Request a demo."),r.createElement("div",{className:c.Z.subtitle},r.createElement("br",null),"We'd love to show you around."))),r.createElement("div",{className:c.Z.container},r.createElement("div",{className:i.Z.form},r.createElement("input",{className:p?i.Z.hasError:"",ref:m.company,placeholder:"Company"}),r.createElement("input",{className:g?i.Z.hasError:"",ref:m.email,placeholder:"Work email address"}),r.createElement("input",{className:E?i.Z.hasError:"",ref:m.name,placeholder:"Name"}),r.createElement("input",{className:_?i.Z.hasError:"",ref:m.subscriptionCount,placeholder:"Subscription count"}),r.createElement("input",{className:(w?i.Z.hasError:"")+" "+i.Z.span2,ref:m.message,placeholder:"Most interested in ..."}),r.createElement("button",{ref:m.button,onClick:function(){return function(){if(a(""),d(!1),f(!1),h(!1),k(!1),N(!1),!(0,l.validEmail)(m.email.current.value))return f(!0),void a((0,n.I)({message:"Email address is invalid. Please use a company email.",id:"contact.form.invalidEmail",description:"Error message when the email address is invalid"}));var e=!1;(0,l.containsAngleBrackets)(m.company.current.value)&&(d(!0),e=!0),(0,l.containsAngleBrackets)(m.email.current.value)&&(f(!0),e=!0),(0,l.containsAngleBrackets)(m.name.current.value)&&(h(!0),e=!0),(0,l.containsAngleBrackets)(m.subscriptionCount.current.value)&&(k(!0),e=!0),(0,l.containsAngleBrackets)(m.message.current.value)&&(N(!0),e=!0),e?a((0,n.I)({message:"Text cannot contain < or >",id:"contact.form.angleBracketsInField",description:"Error message when a text field contains < or >"})):((0,s.Z)("Message from wgtwo.com/request-demo\nName: "+m.name.current.value+" \nEmail: "+m.email.current.value+"\nCompany: "+m.company.current.value+"\nNumber of Subscribers: "+m.subscriptionCount.current.value+"\nMessage - Most Interested in: "+m.message.current.value),m.company.current.disabled=!0,m.email.current.disabled=!0,m.name.current.disabled=!0,m.subscriptionCount.current.disabled=!0,m.message.current.disabled=!0,m.button.current.innerText="Request Sent!",m.button.current.disabled=!0)}()},className:c.Z.button+" "+c.Z.buttonPrimary+" "+i.Z.span2},"Request a Demo"),t&&r.createElement("div",{className:i.Z.formError},t))))))}},66508:function(e){e.exports={validEmail:function(e){return/^[^\s@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|zoho\.com|protonmail\.com|gmx\.com|yandex\.com|mail\.com|temp-mail\.org|guerrillamail\.com|10minutemail|mailinator\.com|yopmail\.com|throwawaymail\.com|fakemailgenerator\.com|getnada\.com|tempinbox\.com|mintemail\.com|mailcatch\.com|owlymail\.com|fakeinbox\.com|mytempemail\.com|trashmail\.com|spamgourmet\.com|jetable\.org|mailnesia\.com|inboxbear\.com|mailtemp\.org|mailslurp\.com|33mail\.com|guerrillamail\.net|maildrop\.cc|sharklasers\.com|tempail\.com|spamgourmet\.net|dispostable\.com|tempmailo\.com|mailnesia\.com|getairmail\.com|inboxalias\.com|email\.tst|oastify\.com)[^\s@]+\.[^\s@]+$/i.test(e)},containsAngleBrackets:function(e){return/[<>]+/.test(e)},slugify:function(e){return e.toString().normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")}}},18309:function(e,t,a){"use strict";function r(e){return fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDdCOTlMQkRNL0IwMzEwRjYxVUNDLzNsU0xVQVJmWk52YWlubXpKT0VUUEVGdAo="),{method:"POST",body:'{"text":"'+e.replace(/"/g,'\\"')+'"}'})}a.d(t,{Z:function(){return r}})},87365:function(e,t){"use strict";t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",subtitleJp:"subtitleJp_VtvY",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp",tooltipStyling:"tooltipStyling_Iy7j"}},22190:function(e,t){"use strict";t.Z={form:"form_AMSB",hasError:"hasError_ppfD",formError:"formError_g86z",contactMethods:"contactMethods_hl2S",span2:"span2_l9k5"}}}]);