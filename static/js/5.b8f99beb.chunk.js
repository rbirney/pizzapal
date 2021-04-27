(this.webpackJsonppizzapal=this.webpackJsonppizzapal||[]).push([[5],{226:function(e,r,a){"use strict";a.r(r);var s=a(96),t=a(20),n=a(0),i=a(196),l=a(104),o=a(230),d=a(194),u=a(209),m=a(108),c=a(51),p=a(107),f=a(2);r.default=function(e){var r=Object(n.useContext)(c.a),a=Object(n.useState)(!1),g=Object(t.a)(a,2),j=g[0],h=g[1],b=Object(n.useState)({error:!1,errorMessage:null}),O=Object(t.a)(b,2),w=O[0],v=O[1],x=function(){h((function(e){return!e})),k({details:{name:"",email:"",password:""}}),z({rules:[{id:"form-input-name",message:"Please enter your name (letters and spaces only, min length 2)",required:!0,valid:!1},{id:"form-input-email",message:"Please enter a valid email address (something@something.something)",required:!0,valid:!1},{id:"form-input-password",message:"Please enter a password (letters and numbers only, min length 6)",required:!0,valid:!1}],formValid:!1}),document.getElementById("form").reset()},C=Object(n.useState)({details:{name:"",email:"",password:""}}),y=Object(t.a)(C,2),q=y[0],k=y[1],I=Object(n.useState)({rules:[{id:"form-input-name",message:"Please enter your name (letters and spaces only, min length 2)",required:!0,valid:!1},{id:"form-input-email",message:"Please enter a valid email address (something@something.something)",required:!0,valid:!1},{id:"form-input-password",message:"Please enter a password (letters and numbers only, min length 6)",required:!0,valid:!1}],formValid:!1}),P=Object(t.a)(I,2),S=P[0],z=P[1],A=Object(n.useState)({name:null,email:null,address:null}),E=Object(t.a)(A,2),M=E[0],V=E[1],L=function(e,r){var a=Object(s.a)({},S),t=a.rules.findIndex((function(e){return e.id===r})),n=null;if(a.rules[t].required&&""===e.trim())n=a.rules[t].message,a.rules[t].valid=!1;else if("form-input-email"===r){/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,n=a.rules[t].message)}else if("form-input-password"===r){/^[A-Za-z0-9\s]{6,}$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,n=a.rules[t].message)}else if(a.rules[t].required&&"form-input-name"===r){/^[A-Za-z\s]{2,30}$/.test(e)?a.rules[t].valid=!0:(a.rules[t].valid=!1,n=a.rules[t].message)}else n=null,a.rules[t].valid=!0;var i=Object(s.a)({},M);switch(r){case"form-input-name":i.name=n;break;case"form-input-email":i.email=n;break;case"form-input-password":i.password=n}V(Object(s.a)({},i));var l=!0;for(var o in a.rules)j&&0==o||a.rules[o].valid||(l=!1);z({rules:a.rules,formValid:l})},U=function(e,r){var a=q.details;switch(r){case"form-input-name":a.name=e.target.value,L(e.target.value,r);break;case"form-input-email":a.email=e.target.value,L(e.target.value,r);break;case"form-input-password":var s=e.target.value.trim();a.password=s,L(s,r)}k({details:a})},$=!S.formValid,J="grey",N="grey",Z=null;return w.error?Z=Object(f.jsx)(m.a,{error:w.errorMessage,onClear:function(){v({error:!1,errorMessage:null})}}):j?(Z=Object(f.jsxs)(i.a,{color:"red",children:[Object(f.jsx)(l.a,{as:"h2",textAlign:"center",color:"red",children:"Already registered? Log In!"}),Object(f.jsxs)(o.a,{id:"form",children:[Object(f.jsx)(o.a.Input,{error:M.email,autoComplete:"off",required:!0,label:"Email",placeholder:"Email e.g. username@mail.com",id:"form-input-email",onChange:function(e){return U(e,"form-input-email")}}),Object(f.jsx)(o.a.Input,{error:M.password,type:"password",autoComplete:"off",required:!0,label:"Password",placeholder:"Password",id:"form-input-password",onChange:function(e){return U(e,"form-input-password")}}),Object(f.jsx)(d.a,{type:"submit",color:"green",disabled:$,onClick:function(){p.a.post("/login",q.details).then((function(a){r.login(a.data.userId,a.data.token),e.history.push("/")})).catch((function(e){var r="";r=e.response?e.response.data.message:"Something went wrong - login failed",v({error:!0,errorMessage:r})}))},children:"Log In"})]})]}),N="red"):(Z=Object(f.jsxs)(i.a,{color:"red",children:[Object(f.jsx)(l.a,{as:"h2",textAlign:"center",color:"red",children:"First time here? Sign Up!"}),Object(f.jsxs)(o.a,{id:"form",children:[Object(f.jsx)(o.a.Input,{error:M.email,autoComplete:"off",required:!0,label:"Email",placeholder:"Email e.g. username@mail.com",id:"form-input-email",onChange:function(e){return U(e,"form-input-email")}}),Object(f.jsx)(o.a.Input,{error:M.password,type:"password",autoComplete:"off",required:!0,label:"Password",placeholder:"Password",id:"form-input-password",onChange:function(e){return U(e,"form-input-password")}}),Object(f.jsx)(o.a.Input,{error:M.name,autoComplete:"off",required:!0,label:"Name",placeholder:"Name",id:"form-input-name",onChange:function(e){return U(e,"form-input-name")}}),Object(f.jsx)(d.a,{type:"submit",color:"green",disabled:$,onClick:function(){p.a.post("/signup",q.details).then((function(a){r.login(a.data.userId,a.data.token),e.history.push("/")})).catch((function(e){var r="";r=e.response?e.response.data.message:"Something went wrong - signup failed",v({error:!0,errorMessage:r})}))},children:"Sign Up"})]})]}),J="red"),Object(f.jsx)(u.a,{children:Object(f.jsx)(u.a.Row,{centered:!0,children:Object(f.jsxs)(u.a.Column,{width:10,children:[Object(f.jsxs)(d.a.Group,{widths:"2",children:[Object(f.jsx)(d.a,{size:"large",color:J,onClick:x,children:"Sign Up"}),Object(f.jsx)(d.a.Or,{}),Object(f.jsx)(d.a,{size:"large",color:N,onClick:x,children:"Log In"})]}),Z]})})})}}}]);
//# sourceMappingURL=5.b8f99beb.chunk.js.map