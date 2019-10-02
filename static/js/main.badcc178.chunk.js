(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(239)},126:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(17),i=a.n(l),o=a(93),s=a(94),c=a.n(s),m=a(50),d=a(51),E=a(57),p=a(52),y=a(35),u=a(56),g=a(253),v=a(252),h=a(245),x=a(246),b=a(247),C=a(238),f=a(248),w=a(249),z=a(250),k=a(251),M=a(95),j=a.n(M);a(124),a(126);var N=j()({primary:"#1F2022",secondary:"#b0391e",tertiary:"white",quaternary:"#CECECE"},{primary:"Montserrat",secondary:"Helvetica"}),O=40,A=38,I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).handleKeypress=a.handleKeypress.bind(Object(y.a)(a)),a.state.slideActionIndex=0,a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleKeypress",value:function(e){var t=e.keyCode,a=this.props.slideActionMax;t===A?this.setState(function(e){var t=e.slideActionIndex;return{slideActionIndex:Math.min(t+1,a)}}):t===O&&this.setState(function(e){var t=e.slideActionIndex;return{slideActionIndex:Math.max(t-1,0)}})}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeypress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeypress)}},{key:"render",value:function(){var e=this.state.slideActionIndex;return n.a.createElement(g.a,Object.assign({},this.props,{className:"slide-action-".concat(e)}))}}]),t}(g.a);I.defaultProps={slideActionMax:Math.Infinity};var S=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(v.a,{transition:["zoom","slide"],transitionDuration:500,theme:N},n.a.createElement(g.a,{transition:["zoom"],bgColor:"primary"},n.a.createElement(h.a,{src:"./lavamoat-logo.png",height:"40vh"}),n.a.createElement(x.a,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"secondary"},T("LavaMoat")),n.a.createElement(b.a,{margin:"10px 0 0",textColor:"tertiary",size:1,fit:!0,bold:!0},"whats between the bad guys and your keys?")),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary"},n.a.createElement(x.a,{margin:80,size:1,textColor:"secondary"},"tools for security"),n.a.createElement(x.a,{margin:80,size:4,textColor:"secondary"},"for any javascript app"),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"but especially dapp UIs + wallets")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{size:1,textColor:"tertiary"},"event-stream"),n.a.createElement(x.a,{size:6,textColor:"primary"},"a case study")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary",textColor:"primary"},n.a.createElement("div",{className:"news-tabs-container"},n.a.createElement("div",{className:"news-tab-wrapper"},n.a.createElement(h.a,{className:"news-tab",src:"./event-stream-article-2.png"})),n.a.createElement("div",{className:"news-tab-wrapper"},n.a.createElement(h.a,{className:"news-tab",src:"./event-stream-article-0.png"})),n.a.createElement("div",{className:"news-tab-wrapper"},n.a.createElement(h.a,{className:"news-tab",src:"./event-stream-article-1.png"})),n.a.createElement("div",{className:"news-tab-wrapper"},n.a.createElement(h.a,{className:"news-tab",src:"./npm-event-stream.png"})))),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary",textColor:"tertiary"},n.a.createElement(x.a,{size:4,textColor:"secondary"},"how to fix?"),n.a.createElement(C.a,null,n.a.createElement(f.a,null,"never use dependencies?"),n.a.createElement(f.a,null,"audit all dependencies always?"),n.a.createElement(f.a,null,"...a third way?"))),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary",textColor:"primary"},n.a.createElement(w.a,null,n.a.createElement(z.a,null,"don't add security, remove insecurity"),n.a.createElement(k.a,null,"Mark S. Miller"))),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary"},n.a.createElement(x.a,{size:1,textColor:"secondary"},"Agoric/SES"),n.a.createElement(x.a,{size:3,textColor:"secondary"},"(Secure EcmaScript)"),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"a secure runtime for running third-party code safely")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{size:1,textColor:"tertiary"},"Frozen Intrinsics")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{size:6,textColor:"tertiary"},"( problem, solution )")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{size:1,textColor:"tertiary"},"Explicit Endowments")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{size:6,textColor:"tertiary"},"( problem, solution )")),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary"},n.a.createElement(x.a,{size:6,textColor:"secondary"},"how does this relate to"),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"the event-stream incident")),n.a.createElement(I,{slideActionMax:3,transition:["slide"],bgColor:"secondary"},n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",null,n.a.createElement(h.a,{src:"./svg icons/tree.svg",height:"150px"}),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"deps install")),n.a.createElement(h.a,{src:"./svg icons/arrow-right2.svg",height:"150px"}),n.a.createElement("div",null,n.a.createElement(h.a,{src:"./svg icons/cogs.svg",height:"150px"}),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"build")),n.a.createElement(h.a,{src:"./svg icons/arrow-right2.svg",height:"150px"}),n.a.createElement("div",null,n.a.createElement(h.a,{src:"./svg icons/users.svg",height:"150px"}),n.a.createElement(x.a,{size:6,textColor:"tertiary"},"runtime")),n.a.createElement(h.a,{className:"evil-icon",src:"./svg icons/evil.svg",height:"150px"}))),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary",textColor:"tertiary"},n.a.createElement(x.a,{size:6,textColor:"secondary"},"allows runtime protections"),n.a.createElement(C.a,null,n.a.createElement(f.a,null,"prevent packages from corruption"),n.a.createElement(f.a,null,"per-package platform API access control"))),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary",textColor:"tertiary"},n.a.createElement(x.a,{size:6,textColor:"secondary"},"tools for your bundler and environment"),n.a.createElement(C.a,null,n.a.createElement(f.a,null,"lavamoat-browserify"),n.a.createElement(f.a,null,"lavamoat-viz"),n.a.createElement("br",null),"coming soon",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(f.a,null,"lavamoat-webpack"),n.a.createElement(f.a,null,"lavamoat-rollup"),n.a.createElement(f.a,null,"lavamoat-node"))),n.a.createElement(g.a,{transition:["slide"],bgColor:"tertiary"},n.a.createElement("iframe",{title:"dep-graph viz",src:"./dep-graph/index.html",style:{width:"100%",height:"70vh",border:0}})),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{fit:!0,textColor:"primary"},"2019: LavaMoat is innovative.")),n.a.createElement(g.a,{transition:["slide"],bgColor:"secondary"},n.a.createElement(x.a,{fit:!0,textColor:"tertiary"},"2020: not using LavaMoat is negligent.")),n.a.createElement(g.a,{transition:["slide"],bgColor:"primary"},n.a.createElement(h.a,{src:"./lavamoat-logo.png",height:"40vh"}),n.a.createElement(x.a,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"secondary"},T("LavaMoat")),n.a.createElement(b.a,{margin:"10px 0 0",textColor:"tertiary",size:1,fit:!0,bold:!0},"whats between the bad guys and your keys?")))}}]),t}(n.a.Component);function T(e){return n.a.createElement("svg",{className:"lavamoat-title",viewBox:"0 0 100 20"},n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"gradient",x1:"0",x2:"0",y1:"0",y2:"1"},n.a.createElement("stop",{offset:"5%","stop-color":"red"}),n.a.createElement("stop",{offset:"95%","stop-color":"orange"})),n.a.createElement("pattern",{id:"wave",x:"0",y:"0",width:"120",height:"20",patternUnits:"userSpaceOnUse"},n.a.createElement("path",{id:"wavePath",d:"M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z",mask:"url(#mask)",fill:"url(#gradient)"},n.a.createElement("animateTransform",{attributeName:"transform",begin:"0s",dur:"6s",type:"translate",from:"0,0",to:"40,0",repeatCount:"indefinite"})))),n.a.createElement("text",{"text-anchor":"middle",x:"50",y:"15","font-size":"17",fill:"url(#wave)","fill-opacity":"0.6"},e),n.a.createElement("text",{"text-anchor":"middle",x:"50",y:"15","font-size":"17",fill:"url(#gradient)","fill-opacity":"0.2"},e))}i.a.render(n.a.createElement(o.AppContainer,{errorReporter:function(e){var t=e.error;return n.a.createElement(c.a,{error:t})}},n.a.createElement(S,null)),document.getElementById("root"))}},[[108,2,1]]]);
//# sourceMappingURL=main.badcc178.chunk.js.map