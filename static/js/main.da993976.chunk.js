(this["webpackJsonpchat-rooms"]=this["webpackJsonpchat-rooms"]||[]).push([[0],{200:function(e,t,n){e.exports=n(358)},350:function(e,t,n){e.exports=n.p+"static/media/chatrooms_logo.ff196929.png"},354:function(e,t,n){e.exports=n.p+"static/media/user.3c77b7c2.jpg"},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=n(49),i=n(50),s=n(53),l=n(52),m=n(122),p=n(16),f=n(33),d=n(6),h=n.n(d),v=n(22),b=n(12),g=n(20),j=n(9),O=n(87),x=n.n(O);n(206),n(208);x.a.initializeApp({apiKey:"AIzaSyABrFCQSJz9_Pt74JlNNrJn-0-8fLTF2ck",authDomain:"chat-c5a1b.firebaseapp.com",databaseURL:"https://chat-c5a1b.firebaseio.com",projectId:"chat-c5a1b",storageBucket:"chat-c5a1b.appspot.com",messagingSenderId:"192394678210",appId:"1:192394678210:web:a1fec82d3182705707d05b",measurementId:"G-NK798QJTRN"});var E=x.a.auth,y=x.a.database(),w=n(8),k=n.n(w),S=n(180),C=n.n(S),U=n(181),A=n.n(U),I=n(182),N=n.n(I),D=n(183),z=n.n(D),L=n(184),B=n.n(L),R=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,r,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.path,a=t.entity,r=y.ref(n),!k()("id",a)){e.next=6;break}e.t0=a.id,e.next=9;break;case 6:return e.next=8,r.push().key;case 8:e.t0=e.sent;case 9:return c=e.t0,o=Object(v.a)({id:c},a),e.next=13,r.child(c).set(o);case 13:return e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.path,a=t.query,r=void 0===a?function(e){return e}:a,e.next=3,r(y.ref(n)).once("value");case 3:return c=e.sent,e.abrupt("return",c.val());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={content:t.content,timestamp:t.timestamp,userId:t.uid,room:t.room},e.next=3,R({path:"/messages",entity:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={displayName:t.displayName,email:t.email,id:t.uid,photoURL:t.photoURL},e.next=3,R({path:"/users",entity:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({path:"users/".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t.title,createdAt:t.timestamp,createBy:t.userId,access:t.access,code:B()(z()(0,9999),4,"0")},e.next=3,R({path:"/rooms",entity:n});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({path:"/rooms",query:function(e){return e.orderByChild("code").equalTo(t).limitToLast(1)}});case 2:return n=e.sent,a=C()(A()("createdAt"),N.a)(Object.values(n)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){return E().createUserWithEmailAndPassword(e,t)},G=function(e,t){return E().signInWithEmailAndPassword(e,t)},K=function(e){E().currentUser.updateProfile(e).then(Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:case"end":return t.stop()}}),t)})))).catch((function(e){console.log("Error updating user data:",e)}))},Q=n(10),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e){case"home":return"/";case"signup":return"/signup";case"rooms":return"/rooms";case"room":return"/room/".concat(t.code);default:return e}},$=n(389);function H(){var e=Object(j.a)(["\n  && {\n    color: #ffffff;\n    border-color: #ffffff;\n  }\n"]);return H=function(){return e},e}function V(){var e=Object(j.a)(["\n  input {\n    margin: 0 3px;\n  }\n  button {\n    margin-right: 5px;\n  }\n"]);return V=function(){return e},e}var X=Q.a.div(V()),Y=Object(Q.a)($.a)(H()),Z=Object(p.g)((function(e){var t=e.history,n=Object(a.useState)(null),c=Object(g.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(""),s=Object(g.a)(i,2),l=s[0],m=s[1],p=Object(a.useState)(""),f=Object(g.a)(p,2),d=f[0],v=f[1],j=function(){var e=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),u(""),e.prev=2,e.next=5,G(l,d);case 5:e.sent&&t.push(_("rooms")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(X,null,r.a.createElement("form",{onSubmit:j},r.a.createElement("input",{placeholder:"Email",name:"email",type:"email",onChange:function(e){return m(e.target.value)},value:l}),r.a.createElement("input",{placeholder:"Password",name:"password",type:"password",onChange:function(e){return v(e.target.value)},value:d}),o?r.a.createElement("p",null,o):null,r.a.createElement(Y,{size:"small",variant:"outlined",type:"submit"},"Login")))})),ee=n(42),te=(n(348),function(e){return{type:"update.current.user",payload:{user:e}}}),ne=function(e){return{type:"entities.remove",payload:{user:e}}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"update.current.user":return Object(v.a)(Object(v.a)({},e),a.user);case"entities.remove":return Object(v.a)({},a.user);default:return e}},re=Object(ee.c)({currentUser:ae});var ce=Object(ee.d)(re,ee.a.apply(void 0,[])),oe=ce.dispatch,ue=ce;function ie(){var e=Object(j.a)(["\n  && {\n    color: #ffffff;\n    border-color: #ffffff;\n  }\n"]);return ie=function(){return e},e}function se(){var e=Object(j.a)(["\n  height: 100%;\n  cursor: pointer;\n"]);return se=function(){return e},e}function le(){var e=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  background-color: #625672;\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n\n  button {\n    margin-right: 5px;\n  }\n"]);return le=function(){return e},e}var me=Q.a.div(le()),pe=Q.a.img(se()),fe=Object(Q.a)($.a)(ie()),de=Object(p.g)((function(e){var t=e.history,c=Object(a.useState)(),o=Object(g.a)(c,2),u=o[0],i=o[1];Object(a.useEffect)((function(){i(E().currentUser)}),[]);var s=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E().signOut();case 2:t=e.sent,oe(ne(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(me,null,r.a.createElement(pe,{src:n(350),alt:"Logo Chat Rooms",onClick:function(){return u?t.push(_("rooms")):t.push(_("home"))}}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Login in as: ",r.a.createElement("strong",null,k()("displayName",u)?k()("displayName",u):"Anonyme")),r.a.createElement(fe,{size:"small",variant:"outlined",type:"submit",onClick:s},"Logout")):r.a.createElement(Z,null))})),he=n(395);function ve(){var e=Object(j.a)(["\n  && {\n    margin: 10px;\n  }\n"]);return ve=function(){return e},e}function be(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return be=function(){return e},e}function ge(){var e=Object(j.a)(["\n  margin-top: 100px;\n"]);return ge=function(){return e},e}function je(){var e=Object(j.a)(["\n  text-align: center;\n"]);return je=function(){return e},e}var Oe=Q.a.div(je()),xe=Q.a.div(ge()),Ee=Q.a.form(be()),ye=Object(Q.a)($.a)(ve()),we=Object(p.g)((function(e){var t=e.history,n=Object(a.useState)(null),c=Object(g.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(""),s=Object(g.a)(i,2),l=s[0],m=s[1],p=function(){var e=Object(b.a)(h.a.mark((function e(n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),u(""),e.prev=2,e.next=5,E().signInAnonymously();case 5:return a=e.sent,r=Object(v.a)(Object(v.a)({},k()("user",a)),{},{displayName:l}),e.next=9,K(r);case 9:oe(te(r)),a&&t.push(_("rooms")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("err",e.t0.message),u(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Oe,null,r.a.createElement(de,null),r.a.createElement(xe,null,r.a.createElement("h2",null,"Join a room and chat with other people or create yours to invite your friends !"),r.a.createElement("p",null,"Create your account: ",r.a.createElement(f.b,{to:"/signup"},"Sign Up")),r.a.createElement("p",null,"Or chat as guest: "),r.a.createElement(Ee,{onSubmit:p},r.a.createElement(he.a,{label:"Username",variant:"outlined",name:"username",onChange:function(e){return m(e.target.value)},value:l}),o?r.a.createElement("p",null,o):null,r.a.createElement(ye,{variant:"contained",color:"primary",type:"submit"},"Start chatting !"))))})),ke=n(35),Se=n(65),Ce=n.n(Se),Ue=n(189),Ae=n.n(Ue),Ie=n(393),Ne=n(399);function De(){var e=Object(j.a)(["\n  && {\n    .MuiBadge-dot {\n      background-color: #44b700;\n    }\n  }\n"]);return De=function(){return e},e}var ze=Object(Q.a)(Ie.a)(De()),Le=function(){return r.a.createElement("div",null,r.a.createElement(ze,{variant:"dot",anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(Ne.a,{alt:"User's avatar",src:n(354)})))};function Be(){var e=Object(j.a)(["\n  background-color: ",";\n  border-radius: 40px;\n  padding: 10px 20px;\n  width: fit-content;\n"]);return Be=function(){return e},e}function Re(){var e=Object(j.a)(["\n  font-weight: bold;\n  margin: 0 5px;\n"]);return Re=function(){return e},e}function Pe(){var e=Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(j.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin: 15px 0;\n"]);return Fe=function(){return e},e}var Je=Q.a.div(Fe()),Me=Q.a.div(Pe()),Te=Q.a.div(Re()),qe=Q.a.div(Be(),(function(e){return e.isCurrentUser?"#f9d3b2":"#cbe3fb"})),We=function(e){var t=e.message,n=Object(a.useState)(),c=Object(g.a)(n,2),o=c[0],u=c[1],i=Object(ke.c)((function(e){return e.currentUser})),s=k()("uid",i)===k()("userId",t);return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(k()("userId",t));case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement(Je,null,r.a.createElement(Me,null,r.a.createElement(Le,null),r.a.createElement(Te,null,k()("displayName",o)?k()("displayName",o):"Anonyme",":")),r.a.createElement(qe,{isCurrentUser:s},k()("content",t)))},Ge=n(394),Ke=n(190),Qe=n.n(Ke),_e={xs:"".concat(0,"em"),sm:"".concat(48,"em"),md:"".concat(64,"em"),lg:"".concat(75,"em")};function $e(){var e=Object(j.a)(["\n  && {\n    background-color: #1977af;\n    color: #ffffff;\n    margin: 10px;\n\n    @media (max-width: ",") {\n      margin: 5px;\n      padding: 9px;\n    }\n  }\n"]);return $e=function(){return e},e}function He(){var e=Object(j.a)(["\n  width: 70%;\n  text-align: center;\n  margin: 10px;\n  display:flex;\n  align-items: center;\n\n  input {\n    height: 40px;\n    border-radius: 20px;\n    border: transparent;\n    padding: 5px 20px;\n    font-size: 16px;\n    flex-grow: 1;\n  }\n\n  @media (max-width: ",") {\n    width: 90%;\n    margin: 0;\n    input {\n      height: 25px;\n    }\n  }\n"]);return He=function(){return e},e}function Ve(){var e=Object(j.a)(["\n  background-color: #ffffff;\n  border: 3px solid #35aef5;\n  border-radius: 20px;\n  padding: 15px;\n  width: 70%;\n  height: 70%;\n  overflow-y: auto;\n\n  @media (max-width: ",") {\n    width: 90%;\n    padding: 7px;\n    font-size: 12px;\n  }\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(j.a)(["\n  color: red;\n  text-align: center;\n  @media (max-width: ",") {\n    font-size: 10px;\n  }\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(j.a)(["\n  color: #1977af;\n  @media (max-width: ",") {\n    font-size: 20px;\n  }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  @media (max-width: ",") {\n    padding-top: 20px;\n  }\n"]);return Ze=function(){return e},e}function et(){var e=Object(j.a)(["\n  background-color: #a0d3ff;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n"]);return et=function(){return e},e}var tt=Q.a.div(et()),nt=Q.a.div(Ze(),_e.sm),at=Q.a.h1(Ye(),_e.sm),rt=Q.a.div(Xe(),_e.sm),ct=Q.a.div(Ve(),_e.sm),ot=Q.a.form(He(),_e.sm),ut=Object(Q.a)(Ge.a)($e(),_e.sm),it=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:E().currentUser,room:void 0,messages:[],content:""},e.handleChange=function(t){return e.setState({content:t.target.value})},e.handleSubmit=function(){var t=Object(b.a)(h.a.mark((function t(n){var a,r,c,o,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.room,c=a.user,o=a.content,n.preventDefault(),t.prev=2,u={content:o,timestamp:Date.now(),uid:c.uid,room:k()("code",r)?k()("code",r):e.props.code},t.next=6,F(u);case 6:e.setState({content:""}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("Fail to write message",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.code,e.prev=1,y.ref("/messages").orderByChild("room").equalTo(t).on("value",(function(e){a.setState({messages:e.val()})})),e.next=5,q(t);case 5:n=e.sent,this.setState({room:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Fail to read messages",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.messages,n=e.content,a=e.room,c=this.props.code;return r.a.createElement(tt,null,r.a.createElement(de,null),r.a.createElement(nt,null,r.a.createElement(at,null,k()("title",a)||Ae()(c)),"private"===k()("access",a)&&r.a.createElement(rt,null,"This room is private, invite your friends to join in: ",r.a.createElement("strong",null,k()("location.href",window))),r.a.createElement(ct,null,Ce()((function(e){return r.a.createElement(We,{key:k()("timestamp",e),message:e})}),t)),r.a.createElement(ot,{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,value:n}),r.a.createElement(ut,{"aria-label":"send",type:"submit"},r.a.createElement(Qe.a,null)))))}}]),n}(a.Component),st=Object(ke.b)((function(e,t){var n=t.match;return{code:k()("params.code",n)}}))(it);function lt(){var e=Object(j.a)(["\n  margin: 10px 0;\n"]);return lt=function(){return e},e}function mt(){var e=Object(j.a)(["\n  margin: 100px;\n"]);return mt=function(){return e},e}var pt=Q.a.form(mt()),ft=Q.a.div(lt()),dt=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(g.a)(o,2),i=u[0],s=u[1],l=Object(a.useState)(""),m=Object(g.a)(l,2),p=m[0],f=m[1],d=Object(a.useState)(""),j=Object(g.a)(d,2),O=j[0],x=j[1],E=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(""),e.prev=2,e.next=5,W(i,p);case 5:return n=e.sent,a=Object(v.a)(Object(v.a)({},k()("user",n)),{},{displayName:O}),e.next=9,K(a);case 9:oe(te(a)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),c(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),y=!i||!p||!O;return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(pt,{onSubmit:E},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("p",null,"Fill in the form below to create an account."),r.a.createElement(ft,null,r.a.createElement(he.a,{label:"Email",variant:"outlined",name:"email",type:"email",onChange:function(e){return s(e.target.value)},value:i})),r.a.createElement(ft,null,r.a.createElement(he.a,{label:"Password",variant:"outlined",name:"password",type:"password",onChange:function(e){return f(e.target.value)},value:p})),r.a.createElement(ft,null,r.a.createElement(he.a,{label:"Username",variant:"outlined",name:"username",onChange:function(e){return x(e.target.value)},value:O})),r.a.createElement("div",null,n?r.a.createElement("p",null,n):null,r.a.createElement($.a,{variant:"contained",color:"primary",type:"submit",disabled:y},"Sign up"))))},ht=n(81),vt=[{title:"General Room",access:"public",id:"1",code:"general"},{title:"Music",access:"public",id:"2",code:"music"},{title:"Movies",access:"public",id:"3",code:"movies"},{title:"Sport",access:"public",id:"4",code:"sport"},{title:"News",access:"public",id:"5",code:"news"}],bt=n(396),gt=n(397),jt=n(398);function Ot(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ot=function(){return e},e}function xt(){var e=Object(j.a)(["\n  padding: 50px;\n"]);return xt=function(){return e},e}function Et(){var e=Object(j.a)(["\n  background-color: #e4dcea;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n"]);return Et=function(){return e},e}var yt=Q.a.div(Et()),wt=Q.a.div(xt()),kt=Q.a.div(Ot()),St=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:null,title:"",access:"",rooms:[]},e.handleSubmit=function(){var t=Object(b.a)(h.a.mark((function t(n){var a,r,c,o,u,i,s,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,r=a.history,c=a.currentUser,o=e.state,u=o.title,i=o.access,n.preventDefault(),e.setState({error:""}),t.prev=4,s={title:u,timestamp:Date.now(),userId:c.uid,access:i},t.next=8,T(s);case 8:(l=t.sent)&&r.push(_("room",{code:k()("code",l)})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){return e.setState(Object(ht.a)({},t.target.name,t.target.value))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{y.ref("/rooms").orderByChild("access").equalTo("public").on("value",(function(e){t.setState({rooms:e.val()})}))}catch(n){console.log("Fail to fetch rooms",n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.title,a=e.access,c=e.rooms;return r.a.createElement(yt,null,r.a.createElement(de,null),r.a.createElement(wt,null,r.a.createElement("h2",null,"Create your room !"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(he.a,{id:"outlined-basic",label:"Room's title",variant:"outlined",name:"title",onChange:this.handleChange,value:n}),r.a.createElement(gt.a,{"aria-label":"access",name:"access",value:a,onChange:this.handleChange},r.a.createElement(jt.a,{value:"public",control:r.a.createElement(bt.a,null),label:"Public"}),r.a.createElement(jt.a,{value:"private",control:r.a.createElement(bt.a,null),label:"Private"})),r.a.createElement("div",null,t?r.a.createElement("p",null,t):null,r.a.createElement($.a,{variant:"contained",color:"primary",type:"submit"},"Create"))),r.a.createElement("hr",null),r.a.createElement("h2",null,"Or join an existing room:"),r.a.createElement(kt,null,Ce()((function(e){return r.a.createElement(f.b,{to:_("room",{code:k()("code",e)}),key:e.id},k()("title",e)?k()("title",e):"Chat Room"," - ",k()("access",e))}),vt),Ce()((function(e){return r.a.createElement(f.b,{to:_("room",{code:k()("code",e)}),key:e.id},k()("title",e)?k()("title",e):"Chat Room"," - ",k()("access",e))}),c))))}}]),n}(a.Component),Ct=Object(p.g)(Object(ke.b)((function(e){return{currentUser:e.currentUser}}))(St)),Ut=function(e){var t=e.component,n=e.authenticated,a=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/",state:{from:e.location}}})}}))},At=function(e){var t=e.component,n=e.authenticated,a=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(p.a,{to:_("rooms")}):r.a.createElement(t,e)}}))},It=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={authenticated:!1,loading:!0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;E().onAuthStateChanged((function(t){t?(e.setState({authenticated:!0,loading:!1}),oe(te(t))):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.authenticated;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement(f.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:_("home"),component:we}),r.a.createElement(Ut,{path:_("rooms"),authenticated:t,component:Ct}),r.a.createElement(Ut,{path:_("room",{code:":code"}),authenticated:t,component:st}),r.a.createElement(At,{path:_("signup"),authenticated:t,component:dt})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(357);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke.a,{store:ue},r.a.createElement(It,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[200,1,2]]]);
//# sourceMappingURL=main.da993976.chunk.js.map