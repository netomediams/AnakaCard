(this.webpackJsonpanakacard=this.webpackJsonpanakacard||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(12),i=a.n(s),l=(a(23),a(24),a(7)),r=a(3),o=a.p+"static/media/header-logo.6e2ae94b.png",d=a(0);var j=function(){return Object(d.jsxs)("header",{className:"ms-main__header",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:o,alt:"Header Logo"})}),Object(d.jsx)(l.b,{to:"/",className:"link",children:Object(d.jsx)("h3",{children:"AnakaCard"})}),Object(d.jsx)(l.b,{to:"mail",className:"link ",children:Object(d.jsx)("h3",{children:"AnakaMail"})})]})};var m=function(){return Object(d.jsx)("footer",{className:"ms-main__footer",children:Object(d.jsxs)("p",{children:["Copytight \xa9 Anakatech ",(new Date).getFullYear()]})})},h=a(8),b=a(2),g=a.n(b),u=a(13),O=a(14),x=a(15),p=a(18),f=a(17),v=a(11),k=a.p+"static/media/Christmas_thank_you_card_v1_800x1075_nameless.1a72efba.jpg",w=a.p+"static/media/Christmas_thank_you_card_v2_800x1075_nameless.b0ef951b.jpg",y=a.p+"static/media/Christmas_thank_you_card_v3_800x1075_nameless.a160c6a9.jpg",N=a.p+"static/media/Christmas_thank_you_card_v4_800x1075_nameless.1a72efba.jpg",_=a.p+"static/media/Christmas_thank_you_card_v5_800x1075_nameless_s.0b699733.jpeg",C=a.p+"static/media/Christmas_thank_you_card_v6_800x1075_nameless_s.e2918914.jpeg",S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var c;return Object(O.a)(this,a),(c=t.call(this,e)).getImage=function(){var e=Object(u.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"jpeg"!==t){e.next=7;break}return e.next=4,Object(v.a)(c.nodeRef.current);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,Object(v.b)(c.nodeRef.current);case 9:a=e.sent;case 10:(n=new Image).src=a,c.setState({img:n.src}),c.download(n.src,"Thank you card",t),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),c.download=function(e,t,a){var n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","".concat(t,".").concat(a)),n.click(),n.remove()},c.handleChangeTemplate=function(e,t){c.setState({selected:t,templateName:e.target.name})},c.handleInputChange=function(e){c.setState(Object(h.a)({},e.target.name,e.target.value))},c.nodeRef=Object(n.createRef)(),c.state={name:"",img:"",selected:k,nameFontSize:40,nameSpacingOffset:40,nameVerticalOffset:47},c}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"anakacard",children:[Object(d.jsxs)("div",{className:"card_config",children:[Object(d.jsx)("h2",{children:"Select a template for team member"}),Object(d.jsxs)("div",{className:"template_picker",children:[Object(d.jsx)("img",{src:k,name:"v1",alt:"",onClick:function(t){return e.handleChangeTemplate(t,k)},className:"img-fluid"}),Object(d.jsx)("img",{src:w,name:"v2",alt:"",onClick:function(t){return e.handleChangeTemplate(t,w)},className:"img-fluid"}),Object(d.jsx)("img",{src:y,name:"v3",alt:"",onClick:function(t){return e.handleChangeTemplate(t,y)},className:"img-fluid"})]}),Object(d.jsx)("h2",{children:"Select a template teams"}),Object(d.jsxs)("div",{className:"template_picker",children:[Object(d.jsx)("img",{src:N,name:"v4",alt:"",onClick:function(t){return e.handleChangeTemplate(t,N)},className:"img-fluid"}),Object(d.jsx)("img",{src:_,name:"v5",alt:"",onClick:function(t){return e.handleChangeTemplate(t,_)},className:"img-fluid"}),Object(d.jsx)("img",{src:C,name:"v6",alt:"",onClick:function(t){return e.handleChangeTemplate(t,C)},className:"img-fluid"})]}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",onChange:function(t){return e.handleInputChange(t)}})]}),Object(d.jsxs)("div",{className:"offsets",children:[Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("label",{children:"font size (pixels)"}),Object(d.jsx)("input",{type:"number",name:"nameFontSize",onChange:function(t){return e.handleInputChange(t)},value:this.state.nameFontSize})]}),Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("label",{children:"horizontal   offset"}),Object(d.jsx)("input",{type:"number",name:"nameSpacingOffset",onChange:function(t){return e.handleInputChange(t)},value:this.state.nameSpacingOffset})]}),Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("label",{children:"vertical offset"}),Object(d.jsx)("input",{type:"number",name:"nameVerticalOffset",onChange:function(t){return e.handleInputChange(t)},value:this.state.nameVerticalOffset})]})]}),Object(d.jsxs)("div",{className:"generate",children:[Object(d.jsx)("h2",{children:"Generate image"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){return e.getImage("jpeg")},children:"Download jpeg"}),Object(d.jsx)("button",{className:"btn",onClick:function(){return e.getImage("png")},children:"Download png"})]})]})]})]}),Object(d.jsxs)("div",{id:"card_container",className:"card_container",ref:this.nodeRef,children:[Object(d.jsx)("img",{src:this.state.selected,alt:"",className:"img-fluid"}),Object(d.jsx)("p",{className:"name",style:{fontSize:this.state.nameFontSize+"px",left:this.state.nameSpacingOffset+"%",bottom:this.state.nameVerticalOffset+"%"},children:this.state.name})]})]})}}]),a}(n.Component),A=a(6),F=a(4);var I=function(e){var t=e.data,a=e.setData;return Object(d.jsxs)("section",{className:"ms-main__editor",children:[Object(d.jsx)("h4",{children:"Your details:"}),Object(d.jsxs)("div",{className:"rows",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{name:"name",placeholder:"name",value:t.name,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{name:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Job Title"}),Object(d.jsx)("input",{name:"title",placeholder:"job title",value:t.title,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{title:e.target.value}))}})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(d.jsx)("input",{name:"phone",placeholder:"phone number",value:t.phone,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{phone:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"fax",children:"Fax"}),Object(d.jsx)("input",{name:"fax",placeholder:"fax",value:t.fax,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{fax:e.target.value}))}})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"website-name",children:"Website name"}),Object(d.jsx)("input",{name:"website-name",placeholder:"website name",value:t.website.name,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{website:Object(F.a)(Object(F.a)({},t.website),{},{name:e.target.value})}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"website-link",children:"Website link"}),Object(d.jsx)("input",{name:"website-link",placeholder:"website link",value:t.website.link,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{website:Object(F.a)(Object(F.a)({},t.website),{},{link:e.target.value})}))}})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"address",children:"Address"}),Object(d.jsx)("input",{name:"address",placeholder:"address",value:t.address,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{address:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"facebook",children:"Facebook"}),Object(d.jsx)("input",{name:"facebook",placeholder:"facebook link",value:t.social.fb.link,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{social:Object(F.a)(Object(F.a)({},t.social),{},{fb:Object(F.a)(Object(F.a)({},t.social.fb),{},{link:e.target.value})})}))}})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"instagram",children:"Instagram"}),Object(d.jsx)("input",{name:"instagram",placeholder:"instagram link",value:t.social.ig.link,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{social:Object(F.a)(Object(F.a)({},t.social),{},{ig:Object(F.a)(Object(F.a)({},t.social.ig),{},{link:e.target.value})})}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"linkedin",children:"LinkedIn"}),Object(d.jsx)("input",{name:"linkedin",placeholder:"linkedin link",value:t.social.linkedin.link,onChange:function(e){return a(Object(F.a)(Object(F.a)({},t),{},{social:Object(F.a)(Object(F.a)({},t.social),{},{linkedin:Object(F.a)(Object(F.a)({},t.social.linkedin),{},{link:e.target.value})})}))}})]})]})]})]})};var R=function(e){var t=e.data,a=e.copied;return Object(d.jsx)("table",{id:"table-content",className:"table ".concat(a),style:{padding:"0 4em",color:"whitesmoke",background:"url('https://raw.githubusercontent.com/netomediams/anakaMail/main/src/images/nm.png')",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",maxWidth:"816px",fontSize:"16px",height:"40vw",maxHeight:"234px"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("tr",{style:{width:"100%"},children:Object(d.jsx)("td",{style:{width:"100%",height:".5em",color:"#262626",fontSize:"24px",fontWeight:"600",whiteSpace:"nowrap"},children:t.name})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",color:"orange",fontWeight:"600",verticalAlign:"top"},children:t.title})}),Object(d.jsx)("tr",{children:t.phone&&Object(d.jsxs)("td",{style:{width:"100%",verticalAlign:"bottom",height:"3em"},children:[Object(d.jsx)("img",{style:{marginRight:".5em",marginBottom:".15em",width:"1.1em",height:"1.1em",display:"inline-block",verticalAlign:"bottom"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/phone.png?raw=true",alt:""}),t.phone]})}),t.fax&&Object(d.jsx)("tr",{children:Object(d.jsxs)("td",{style:{width:"100%",verticalAlign:"top",display:"flex"},children:[Object(d.jsx)("img",{style:{marginRight:".5em",width:"1.1em",height:"1.1em"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/phone.png?raw=true",alt:""}),Object(d.jsx)("p",{style:{margin:"0"},children:t.fax})]})}),Object(d.jsx)("tr",{className:"website-name",children:Object(d.jsx)("td",{style:{width:"100%",verticalAlign:"bottom"},children:Object(d.jsx)("a",{href:t.website.link,style:{textDecoration:"none",color:"whitesmoke",fontWeight:"600"},children:t.website.name})})}),Object(d.jsxs)("tr",{style:{width:"100%"},children:[Object(d.jsx)("td",{style:{width:"50%",verticalAlign:"top"},children:t.address}),Object(d.jsx)("td",{style:{textAlign:"right",width:"100%",display:"flex"},children:Object.entries(t.social).map((function(e,t){if(""!==e[1].link)return Object(d.jsx)("a",{href:e[1].link,style:{margin:"0 .2em"},children:Object(d.jsx)("img",{style:{width:"2em",height:"2em"},src:e[1].icon,alt:"social media"})},t)}))})]})]})})};var z=function(e){return e.data,Object(d.jsx)("table",{id:"table-content",className:"table",style:{padding:"0 4em",color:"whitesmoke",background:"url('https://raw.githubusercontent.com/anakatech-kaykostadinov/mailsig/gh-pages/static/media/nm.f7d08900.png')",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",maxWidth:"816px",fontSize:"16px",height:"40vw",maxHeight:"234px"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",color:"#262626",fontSize:"24px",fontWeight:"600",height:".5em"},children:"asd"})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",color:"orange",fontWeight:"600",verticalAlign:"top"},children:"asd"})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",verticalAlign:"bottom",height:"2em"},children:"asd"})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",verticalAlign:"top"},children:"asd"})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{style:{width:"100%",verticalAlign:"bottom"},children:"asdsadas"})}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{width:"50%",verticalAlign:"top"},children:"asd"}),Object(d.jsxs)("td",{style:{textAlign:"right",width:"50%",display:"flex",paddingRight:"1em"},children:[Object(d.jsx)("img",{style:{width:"2em",height:"2em"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/facebook%20(1).png?raw=true",alt:""}),Object(d.jsx)("img",{style:{width:"2em",height:"2em",marginLeft:".2rem"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/instagram%20(1).png?raw=true",alt:""}),Object(d.jsx)("img",{style:{width:"2em",height:"2em",margin:"0 .2rem"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/linkedin%20(1).png?raw=true",alt:""}),Object(d.jsx)("img",{style:{width:"2em",height:"2em"},src:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/twitter%20(1).png?raw=true",alt:""})]})]})]})})},T=a(16),W=function(){var e=Object(n.useState)({name:"",title:"",phone:"",fax:"",website:{name:"",link:""},address:"",social:{fb:{link:"",icon:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/facebook%20(1).png?raw=true"},ig:{link:"",icon:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/instagram%20(1).png?raw=true"},linkedin:{link:"",icon:"https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/filled_icons/linkedin%20(1).png?raw=true"}}}),t=Object(A.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("nm"),i=Object(A.a)(s,2),l=i[0],r=(i[1],Object(n.useState)("")),o=Object(A.a)(r,2),j=o[0],m=o[1],h=Object(n.useState)({class:"",message:"Copy"}),b=Object(A.a)(h,2),g=b[0],u=b[1],O=T((function(){!function(e){var t=document.getElementById(e),a=document.createRange();a.selectNodeContents(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(a),document.execCommand("copy"),n.removeRange(a)}("table-content"),u({class:"copy-btn--success",message:"Copied to clipboard"}),m("table--success"),setTimeout((function(){u({class:"",message:"Copy"}),m("")}),2e3)}),200);return Object(d.jsx)("div",{className:"ms-main",children:Object(d.jsxs)("main",{children:[Object(d.jsx)(I,{data:a,setData:c}),Object(d.jsxs)("section",{className:"preview-col",children:[Object(d.jsxs)("button",{className:"copy-btn ".concat(g.class),disabled:""!==g.class,onClick:O,children:[Object(d.jsx)("i",{className:""===g.class?"far fa-copy":"fas fa-check"})," ",g.message]}),Object(d.jsx)("div",{className:"form-container",children:function(){switch(l){case"nm":return Object(d.jsx)(R,{data:a,copied:j});case"np":return Object(d.jsx)(z,{data:a,copied:j})}}()}),Object(d.jsx)("div",{style:{maxWidth:"90vw",padding:"0 2em",textAlign:"center"},children:Object(d.jsx)("p",{children:"Note: Items may appear displaced. This preview is not representative of the signature's appearance in emails."})})]})]})})},D=function(){return Object(d.jsx)("div",{className:"ms-main",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(S,{})}),Object(d.jsx)(r.a,{path:"mail",element:Object(d.jsx)(W,{})}),Object(d.jsx)(r.a,{path:"*",element:Object(d.jsx)(S,{})})]}),Object(d.jsx)(m,{})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c48537ca.chunk.js.map