(this.webpackJsonppizzapal=this.webpackJsonppizzapal||[]).push([[8],{227:function(e,r,a){"use strict";a.r(r);var s=a(96),t=a(20),l=a(0),n=a.n(l),i=a(209),u=a(196),o=a(104),d=a(230),m=a(194),c=a(107),p=a(108),f=a(51),b=a(2);r.default=function(e){var r=Object(l.useContext)(f.a),a=Object(l.useState)({user:e.history.location.state.user}),j=Object(t.a)(a,2),h=j[0],g=j[1],v=Object(l.useState)({error:!1,errorMessage:null}),O=Object(t.a)(v,2),w=O[0],x=O[1],C=Object(l.useState)({rules:[{id:"form-input-name",message:"Please enter your name (letters and spaces only, min length 2)",required:!0,valid:!1},{id:"form-input-email",message:"Please enter a valid email address (something@something.something)",required:!0,valid:!1},{id:"form-input-password",message:"Please enter a password (letters and numbers only, min length 6)",required:!0,valid:!1}],formValid:!1}),k=Object(t.a)(C,2),q=k[0],y=k[1],z=Object(l.useState)({name:null,email:null,address:null}),I=Object(t.a)(z,2),P=I[0],A=I[1],M=function(e,r){var a=Object(s.a)({},q),t=a.rules.findIndex((function(e){return e.id===r})),l=null;if(a.rules[t].required&&""===e.trim())l=a.rules[t].message,a.rules[t].valid=!1;else if("form-input-email"===r){/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,l=a.rules[t].message)}else if("form-input-password"===r){/^[A-Za-z0-9\s]{6,}$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,l=a.rules[t].message)}else if(a.rules[t].required&&"form-input-name"===r){/^[A-Za-z\s]{2,30}$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,l=a.rules[t].message)}else l=null,a.rules[t].valid=!0;var n=Object(s.a)({},P);switch(r){case"form-input-name":n.name=l;break;case"form-input-email":n.email=l;break;case"form-input-password":n.password=l}A(Object(s.a)({},n));var i=!0;for(var u in a.rules)a.rules[u].valid||(i=!1);y({rules:a.rules,formValid:i})},S=function(e,r){var a=h.user;switch(r){case"form-input-name":a.name=e.target.value,M(e.target.value,r);break;case"form-input-email":a.email=e.target.value,M(e.target.value,r);break;case"form-input-password":var s=e.target.value.trim();a.password=s,M(s,r)}g({user:a})},V=!q.formValid,$=null;return $=w.error?Object(b.jsx)(p.a,{error:w.errorMessage,onClear:function(){x({error:!1,errorMessage:null})}}):Object(b.jsx)(i.a,{children:Object(b.jsx)(i.a.Row,{centered:!0,children:Object(b.jsx)(i.a.Column,{width:10,children:Object(b.jsxs)(u.a,{color:"red",children:[Object(b.jsx)(o.a,{as:"h2",textAlign:"center",color:"red",children:"Update Your Details"}),Object(b.jsxs)(d.a,{id:"form",children:[Object(b.jsx)(d.a.Input,{error:P.email,autoComplete:"off",required:!0,label:"Email",placeholder:"Email e.g. username@mail.com",id:"form-input-email",onChange:function(e){return S(e,"form-input-email")}}),Object(b.jsx)(d.a.Input,{error:P.password,type:"password",autoComplete:"off",required:!0,label:"Password",placeholder:"Password",id:"form-input-password",onChange:function(e){return S(e,"form-input-password")}}),Object(b.jsx)(d.a.Input,{error:P.name,autoComplete:"off",required:!0,label:"Name",placeholder:"Name",id:"form-input-name",onChange:function(e){return S(e,"form-input-name")}}),Object(b.jsx)(m.a,{type:"submit",color:"green",disabled:V,onClick:function(){var a="/updateuser/"+r.userId;c.a.put(a,h.user,{headers:{Authorization:"Bearer "+r.token}}).then((function(a){e.history.push("/users/"+r.userId)})).catch((function(e){var r="";r=e.response?e.response.data.message:"There was a problem updating your account",x({error:!0,errorMessage:r})}))},children:"Update Details"})]})]})})})}),Object(b.jsx)(n.a.Fragment,{children:$})}}}]);
//# sourceMappingURL=8.b37d980f.chunk.js.map