"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return w}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,w=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return n?o.createElement(w,r(r({ref:t},u),{},{components:n})):o.createElement(w,r({ref:t},u))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return w},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=(n(62450),["components"]),l={slug:"exploring-aws-snowcone",title:"Unboxing the AWS Snowcone and using it as a local UPF",date:new Date("2022-11-21T00:00:00.000Z"),tags:["5G","aws","snowcone"],authors:["holger-ihrig"]},s=void 0,c={permalink:"/blog/exploring-aws-snowcone",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2022-11-21-snowcone/index.md",source:"@site/../blog/2022-11-21-snowcone/index.md",title:"Unboxing the AWS Snowcone and using it as a local UPF",description:"The AWS Snowcone is a small form factor server that was originally meant for data transport to AWS data centers.",date:"2022-11-21T00:00:00.000Z",formattedDate:"November 21, 2022",tags:[{label:"5G",permalink:"/blog/tags/5-g"},{label:"aws",permalink:"/blog/tags/aws"},{label:"snowcone",permalink:"/blog/tags/snowcone"}],readingTime:7.875,hasTruncateMarker:!0,authors:[{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"}],frontMatter:{slug:"exploring-aws-snowcone",title:"Unboxing the AWS Snowcone and using it as a local UPF",date:"2022-11-21T00:00:00.000Z",tags:["5G","aws","snowcone"],authors:["holger-ihrig"]},prevItem:{title:"Working Group Two steps up to support regional carriers in the United States",permalink:"/blog/joining-cca"},nextItem:{title:"We have just completed our first VoNR (5G) calls in a multi-handset environment",permalink:"/blog/first-voice-calls-on-5g"}},u={authorsImageUrls:[void 0]},h=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Compute",id:"compute",level:2},{value:"Instance",id:"instance",level:2},{value:"Performance",id:"performance",level:2},{value:"Update",id:"update",level:2}],d={toc:h},p="wrapper";function w(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)(p,(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The AWS Snowcone is a small form factor server that was originally meant for data transport to AWS data centers.\nHowever it can also be used as a small device running compute workloads. We wanted to evaluate the performance of the\nSnowcone as it is a quite intriguing piece of technology which we might want to use as a an on-premise UPF (User Plane\nFunction) in low-throughput 5G networks (think IoT or Proof of Concept deployments)."),(0,i.kt)("p",null,"Specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Dimensions: 227 mm x 148.6 mm x 82.65 mm\nWeight: 2,1 kg\nvCPU(usable): 2\nMemory(usable): 4GB\nStorage(SSD): 14TB\nNetwork: 2x10GB RJ45\nDisplay: e-Ink for displaying shipping label or status\nPower: 65W USB-C (not included)\n")),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"Once receiving the Snowcone it still displays the shipping label on the top of the unit. The IO Ports are hidden behind\na flap at the back of the unit and the power switch including two LEDs are at the front of the unit."),(0,i.kt)("p",null,"Upon powering it on, the Display will show the IP address of the Snowcone along with a message that the device is Locked\nand needs to be unlocked using the AWS OpsHub Software which is available for Windows, OSx and Linux (AppImage)."),(0,i.kt)("img",{width:"100%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(40567).Z}),(0,i.kt)("p",null,"In our case we wanted to use a local device, so we selected this option"),(0,i.kt)("img",{width:"80%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(99489).Z}),(0,i.kt)("p",null,"Next up was selecting a Snowcone Device followed by the following login screen"),(0,i.kt)("img",{width:"60%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(67259).Z}),(0,i.kt)("p",null,"At this point you have to login to your AWS Console and navigate to the \u201cSnow Family\u201d Service where you should see\na so-called JobID for a Snowcone. The Snowcone Job Details will let you get your Unlock Code and the Manifest File,\nwhich are both needed to sign into the Snowcone device."),(0,i.kt)("img",{width:"100%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(5472).Z}),(0,i.kt)("p",null,"From that point on the Snowcone is usable. It did take a few more minutes though until it downloaded the AMI images\nthat will run on the Snowcone."),(0,i.kt)("h2",{id:"compute"},"Compute"),(0,i.kt)("p",null,"Since the Snowcone is very limited in resources, there are special Instance types for it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"snc1.micro (1 vCPU, 1 GB RAM)"),(0,i.kt)("li",{parentName:"ul"},"snc1.small (1 vCPU, 2 GB RAM)"),(0,i.kt)("li",{parentName:"ul"},"snc1.medium (2 vCPU, 4GB RAM)")),(0,i.kt)("p",null,"Also there are only two AMIs available for it now. However it is possible to import EBS Snapshots onto the Snowcone,\nwhich we have not done as the procedure was too long and we could do with the AMIs provided."),(0,i.kt)("img",{width:"60%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(49508).Z}),(0,i.kt)("h2",{id:"instance"},"Instance"),(0,i.kt)("p",null,"Since our use case was to run a UPF on it, we started the largest instance type the Snowcone would allow us and\nstarted exploring."),(0,i.kt)("p",null,"Since the available AMI is an Amazon Linux 2 AMI we were not super familiar with it. However, since it is Red Hat-based\nwe kind of knew what to expect."),(0,i.kt)("p",null,"The kernel coming with that AMI was a 4.14 kernel, which was too old for us, so the first thing was updating to\na 5.15 kernel. We followed this ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/amazon-linux-2-kernel-upgrade/"},"guide"),"\nfirst kind of sluggish and noticed that it's not a good idea to skip instructions, thereby bricking our instance.\nWhich made us find out that there are no logs of the boot process or a webshell, like we are used to from EC2."),(0,i.kt)("p",null,"Second time's the charm though and we did have a working instance with a 5.15 kernel. Interestingly enough the\ndevice key for SSH changed when upgrading from 4.14 to 5.4, but that was only a minor nuisance.\nSo we thought let's do some exploring what we actually have here."),(0,i.kt)("img",{width:"60%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(66528).Z}),(0,i.kt)("p",null,"There was not too much information here. So let's have a look at the CPU Information."),(0,i.kt)("img",{width:"80%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(46317).Z}),(0,i.kt)("p",null,"So a CPU from the Xeon E3-12xx v2 line. Even though this might be the virtualization engine telling us that this is\nthe CPU, we are assuming that it will be something from the Ivy Bridge line. Furthermore we are assuming that it will\nbe a low-powered 4 Core CPU working there, where only 2 CPUs are available for the consumer."),(0,i.kt)("p",null,"After digging a bit through dmidecode (we are engineers right?) we also found this additional piece of information"),(0,i.kt)("img",{width:"70%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(74650).Z}),(0,i.kt)("p",null,"The interesting part here is that the Manufacturer is designated as Bochs, which is a x86 and AMD64 emulator.\nSo maybe it's not a virtualization engine driving the Instance, but an emulator?"),(0,i.kt)("p",null,"But now back to our original plan to run a UPF (User Plane Function for 5G) on the Snowcone. For this to work we\nneeded 2 network interfaces as our original plan was to use DPDK to run it. This is where we quickly found out that\nan Instance on Snowcone can only have 1 Virtual Network Interface (VNI)."),(0,i.kt)("p",null,"After scouring through the documentation about Snowcone, we however found out that first of all there is another way\nto configure the Snowcone. You can also configure the Snowcone with a CLI, the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/snowball/resources/"},"SnowballEdgeClient"),"."),(0,i.kt)("p",null,"In there we found a different type of network Interface, the so called Direct Network Interface (DNI), and according\nto documentation, the Snowcone supports up to 63 DNIs attached to it.\nSo we created a DNI and attached it to our instance.\nTo our surprise it showed up as an Intel X553 Virtual Network Function(VNF), so this is basically\nSingle-Root IO-Virtualization (SRIOV) at work here. Which also makes sense because the X500 series supports up\nto 64 VNFs (minus the one used by the snowcone itself)."),(0,i.kt)("p",null,"So we started deploying our DPDK-based UPF on the snowcone. Creating a DNI and attaching it to an instance was fairly\neasy with the SnowballEdgeClient. However, when restarting the instance, it would not come back.\nAfter talking to AWS we were informed that this is a bug that is related with the interface naming and\nshould be fixed in a future release."),(0,i.kt)("p",null,"For the meantime it can be circumvented by switching to ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/"},"Predictable Network Interface Names"),"."),(0,i.kt)("img",{width:"80%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(62274).Z}),(0,i.kt)("p",null,"Once the DNI is attached to the instance, one has to do some additional configuration on the instance for both\nthe VNI and DNI to get IP addresses. We found the relevant ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/snowball/latest/developer-guide/network-config-ec2.html"},"guide"),"\nin the AWS Documentation and our DNI got an IP Address."),(0,i.kt)("p",null,"With those parts out of the way, we could deploy our DPDK-based UPF on the Snowcone and could use it as a UPF."),(0,i.kt)("h2",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Evaluating the performance of the Snowcone device was actually what triggered this whole exploration. So let's look mainly at the networking performance and also slightly at the cpu performance."),(0,i.kt)("p",null,"For this we are mainly using iperf3 to evaluate the throughput. The Snowcone as well as our test machine here in the lab have a Intel X55x 10Gbit NIC."),(0,i.kt)("p",null,"When the Snowcone snc1.medium instance is the iperf Server:"),(0,i.kt)("img",{width:"80%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(22889).Z}),(0,i.kt)("p",null,"When the Snowcone snc1.medium instance is the iperf Client:"),(0,i.kt)("img",{width:"80%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(21043).Z}),(0,i.kt)("p",null,"From these very simple benchmarks we can already see that the EC2 instance is struggling with pushing out anywhere\nnear line speed. In other words it seems like it is CPU bottlenecked. When running a htop while running this speedtest\ndoes confirm that one of the CPUs hits 100% utilization every now and then. This makes sense because iperf3 is\nsingle-threaded by design."),(0,i.kt)("p",null,"We then did run a speedtest to a local speedtest server using our userland UPF from a UE and this is basically\nthe result."),(0,i.kt)("img",{width:"50%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(67071).Z}),(0,i.kt)("p",null,"Looking at htop again, we can see that now both CPU cores are pegged at 100% since the UPF is actually multithreaded.\nSo even if the EC2 instance in Snowcone can push about 6 Gbit/s on iperf3, with the additional overhead of\nGTP encapsulation and de-encapsulation, it can only do about 180 Mbit/s."),(0,i.kt)("p",null,"We know that our userland UPF will be able to push around 500 Mbit/s on other machines, so this is a clear limitation\nof the Snowcone."),(0,i.kt)("p",null,"With the DPDK based UPF however we are able to have higher throughput. DPDK will take control over the DNI and use\na poll-mode driver for packet processing. So one CPU core will always be pinned at 100% and the NIC will\ndisappear from the instance."),(0,i.kt)("img",{width:"50%",align:"middle",style:{display:"block",margin:"auto 10px"},src:n(94265).Z}),(0,i.kt)("p",null,"This is actually the maximum speed we can get out of our gNodeB. So we are pretty happy with the result."),(0,i.kt)("p",null,"We hope you liked this short look at the AWS Snowcone, and we will for sure explore the Snowcone further. It's a\nnice little device that will be especially useful for smaller deployments or PoCs of our Packet Core as it can be easily\nremote-managed and transported everywhere."),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("p",null,"Since the original Blog Post about Snowcone we were able to debug the problem with the DNI detach process further\nand with help from AWS were able to resolve it. The fix for this should be released with an updated version of\nAmazon Linux in the future according to AWS."))}w.isMDXComponent=!0},62450:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(87462),a=n(63366),i=n(67294),r="figure_JG9S",l="image_HilK",s="caption_lOvI",c=n(79524),u=["src","caption"];var h=function(e){var t=e.src,n=e.caption,h=(0,a.Z)(e,u);return i.createElement("figure",(0,o.Z)({className:r},h),i.createElement("img",{src:(0,c.Z)(t),alt:n,className:l}),i.createElement("figcaption",{className:s},n))}},66528:function(e,t,n){t.Z=n.p+"9821a6bddaf75c2cdd9a4d9f114343d0.png"},49508:function(e,t,n){t.Z=n.p+"fd89d16106a3f2ba8e73127c313c4dd6.png"},5472:function(e,t,n){t.Z=n.p+"f1587c7f6ca4901b5f1a95b76a98e7ca.png"},99489:function(e,t,n){t.Z=n.p+"34f26115c5b9238bd3a8f82c55e12e15.png"},40567:function(e,t,n){t.Z=n.p+"0ad3488d3abe1a33f2f0946076588d34.png"},67259:function(e,t,n){t.Z=n.p+"26a61d82feca52e29871f4ec05007217.png"},62274:function(e,t,n){t.Z=n.p+"69fce8ddf8fe909599ae567925f1b4a9.png"},74650:function(e,t,n){t.Z=n.p+"eb881c8f4425f7e31f227546e6763274.png"},21043:function(e,t,n){t.Z=n.p+"93d63f2c994532e36653bf5d8010cb69.png"},22889:function(e,t,n){t.Z=n.p+"494c7b1581c6b71594c5104a274b5911.png"},46317:function(e,t,n){t.Z=n.p+"ef9e87547e91bfd94ab2a93e7eed2414.png"},67071:function(e,t,n){t.Z=n.p+"8d2e41892f7155a1057ff23255d18748.png"},94265:function(e,t,n){t.Z=n.p+"5fad862c769c4ccdb51a613a4fca714d.png"}}]);