(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{196:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),s=n(6610),a=n(5991),i=n(5255),c=n(6089),o=n(7608),l=n(7294),u=n(8650),f=n.n(u),d=n(5675);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var s=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var p=function(e){(0,i.Z)(n,e);var t=h(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)("div",{className:f().dialogue,children:[(0,r.jsx)("div",{className:f().relative,children:this.renderUserResponse()}),this.renderLoganResponse()]})}},{key:"renderUserResponse",value:function(){return""===this.props.userResponse?null:(0,r.jsx)("div",{className:f().userResponse,children:this.props.userResponse})}},{key:"renderLoganResponse",value:function(){if(this.props.clickable){var e=[];return e.push(f().logan),e.push(f().clickable),this.props.bold&&e.push(f().bold),(0,r.jsxs)("div",{className:e.join(" "),onClick:this.props.clickHandler,children:[(0,r.jsx)("div",{className:f().text,children:this.props.text}),(0,r.jsx)("div",{className:f().arrow,children:(0,r.jsx)(d.default,{src:"/Arrow.svg",alt:"Next",width:37,height:22})})]})}return(0,r.jsx)("div",{className:f().logan,onClick:this.props.clickHandler,children:(0,r.jsx)("div",{className:f().text,children:this.props.text})})}}]),n}(l.Component)},173:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),s=n(6610),a=n(5991),i=n(3349),c=n(5255),o=n(6089),l=n(7608),u=n(7294),f=n(678),d=n.n(f),h=n(1664),p=n(4506),v=n.n(p),_=n(5675);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var x=function(e){(0,c.Z)(n,e);var t=g(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)("div",{className:v().logo,children:[(0,r.jsx)("div",{className:v().png,children:(0,r.jsx)(_.default,{src:"/Whaleshark Logo 2 Outline.svg",alt:"Whaleshark Logo",layout:"responsive",width:100,height:100})}),(0,r.jsx)("div",{className:v().name,children:"LOGAN WANG"})]})}}]),n}(u.Component);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var y=function(e){(0,c.Z)(n,e);var t=m(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={sidebar:!1},r.toggleSidebar=r.toggleSidebar.bind((0,i.Z)(r)),r}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)("div",{className:d().navBar,children:[(0,r.jsx)(x,{}),(0,r.jsx)("div",{className:d().gap}),(0,r.jsxs)("div",{className:this.state.sidebar?d().sidebarActive:d().links,children:[(0,r.jsx)("div",{className:d().close,onClick:this.toggleSidebar,children:(0,r.jsx)(_.default,{src:"/x.svg",alt:"Close",width:24,height:15})}),(0,r.jsx)("div",{className:d().gap}),(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{className:"about"==this.props.active?d().active:d().link,children:"About"})}),(0,r.jsx)(h.default,{href:"/stuff",children:(0,r.jsx)("a",{className:"stuff"==this.props.active?d().active:d().link,children:"Stuff"})}),(0,r.jsx)(h.default,{href:"/contact",children:(0,r.jsx)("a",{className:"contact"==this.props.active?d().active:d().link,children:"Contact"})}),(0,r.jsx)("div",{className:d().gap})]}),(0,r.jsx)("div",{className:d().menu,onClick:this.toggleSidebar,children:(0,r.jsx)(_.default,{src:"/menu.svg",alt:"Hamburger Menu",layout:"responsive",width:100,height:100})}),(0,r.jsx)("div",{className:this.state.sidebar?d().dim:d().notDim,onClick:this.toggleSidebar})]})}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{sidebar:!e.sidebar}}))}}]),n}(u.Component)},4815:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),s=n(6610),a=n(5991),i=n(5255),c=n(6089),o=n(7608),l=n(7294),u=n(3775),f=n.n(u);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var s=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=d(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsx)("div",{className:f().response,onClick:this.props.clickHandler,children:this.props.text})}}]),n}(l.Component)},9865:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),s=n(6610),a=n(5991),i=n(3349),c=n(5255),o=n(6089),l=n(7608),u=n(7294),f=n(5385),d=n.n(f),h=n(173),p=n(196),v=n(4815);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var g=["Hello hello, feel free to leave me a message about anything!","For example: How your day's been going","If you want to play League or Valorant","*Any recruiting opportunities*","If you have any good jokes, etc.","Just let me know, you know? Thanks![END]"],x=/(^\*).*(\*$)/g,m=/\[END\]$/g,y=function(e){(0,c.Z)(n,e);var t=_(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={messageIndex:0},r.increment=r.increment.bind((0,i.Z)(r)),r}return(0,a.Z)(n,[{key:"render",value:function(){var e=g[this.state.messageIndex],t=null!==g[this.state.messageIndex].match(x);t&&(e=e.substr(1,e.length-2));var n=null===g[this.state.messageIndex].match(m);return n||(e=e.replace(m,"")),(0,r.jsxs)("div",{className:d().contact,children:[(0,r.jsx)(h.Z,{active:"contact"}),(0,r.jsx)("div",{className:d().flexTop}),(0,r.jsx)(p.Z,{text:e,userResponse:"",clickHandler:this.increment,clickable:n,bold:t}),(0,r.jsx)("div",{className:d().smallGap}),(0,r.jsx)("div",{className:d().button,children:(0,r.jsx)(v.Z,{text:"Contact"})}),(0,r.jsx)("div",{className:d().flexBot})]})}},{key:"increment",value:function(){this.state.messageIndex<g.length-1&&this.setState((function(e){return{messageIndex:e.messageIndex+1}}))}}]),n}(u.Component)},603:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(9865)}])},8650:function(e){e.exports={dialogue:"Dialogue_dialogue__3DJgf",userResponse:"Dialogue_userResponse__2k3IC",logan:"Dialogue_logan__3-jKT",text:"Dialogue_text__1pZLQ",arrow:"Dialogue_arrow__3Jl48",breathe:"Dialogue_breathe__NI3_U",relative:"Dialogue_relative__1t7CO",clickable:"Dialogue_clickable__ZI0xg",bold:"Dialogue_bold__1J6L0"}},4506:function(e){e.exports={logo:"Logo_logo__1AbpY",png:"Logo_png__wVFjA",name:"Logo_name__GQIdL"}},678:function(e){e.exports={navBar:"NavBar_navBar__3AGsl",gap:"NavBar_gap__1a9tj",link:"NavBar_link__ElhDU",active:"NavBar_active__tS6Ku",close:"NavBar_close__iuriv",menu:"NavBar_menu__3I-Tv",links:"NavBar_links__3DO-o",sidebarActive:"NavBar_sidebarActive__30aye",dim:"NavBar_dim__22neC",notDim:"NavBar_notDim__2myFH"}},3775:function(e){e.exports={response:"Response_response__3xPV8"}},5385:function(e){e.exports={contact:"Contact_contact__4DQ_E",flexTop:"Contact_flexTop__1VK_C",flexBot:"Contact_flexBot__3Hy1A",smallGap:"Contact_smallGap__Arx3y",button:"Contact_button__3M1DU"}}},function(e){e.O(0,[417,774,888,179],(function(){return t=603,e(e.s=t);var t}));var t=e.O();_N_E=t}]);