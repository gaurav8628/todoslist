(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(18),o=c.n(a),l=(c(25),c(11)),i=c(20),r=(c(26),c(8)),d=c(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.deafultProps={title:"Title is not available",searchBar:!0};var j=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{display:"block",padding:"20px",height:"60px",width:"100%"}}),Object(d.jsx)("div",{style:{backgroundColor:"black",color:"white",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},children:"Copyright \xa9 MyTodosList.com"})]})},h=function(e){var t=e.todo,c=e.onDelete;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){c(t)},children:"Delete"})]})},u=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No todos To display":e.todos.map((function(t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{todo:t,onDelete:e.onDelete},t.sno)," "]})}))]})},m=function(e){var t=e.addTodo,c=Object(n.useState)(""),s=Object(l.a)(c,2),a=s[0],o=s[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),b=r[0],j=r[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&b?(t(a,b),o(""),j("")):alert("title or description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",sName:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)},className:"form-control",id:"title",placeholder:"Enter your title"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"type",value:b,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc",placeholder:"Enter Todo Description"})})]}),Object(d.jsx)("div",{className:"col-auto",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success mb-3",children:"Add Todo"})})]})]})},x=function(){return Object(d.jsx)("div",{children:"this is about page"})},O=c(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am onDelete for todo:",e),h(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},c=function(e,t){console.log("I am adding this todo",e,t);var c={sno:0===o.length?1:o[o.length-1].sno+1,title:e,desc:t};h([].concat(Object(i.a)(o),[c])),console.log(c)},s=Object(n.useState)(e),a=Object(l.a)(s,2),o=a[0],h=a[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{title:"My Todos List",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addTodo:c}),Object(d.jsx)(u,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(j,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.8d2c4897.chunk.js.map