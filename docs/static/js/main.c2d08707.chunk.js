(this["webpackJsonpreducer-app"]=this["webpackJsonpreducer-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(1),i=a(2),d=a(6),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(d.a)(e),[t.payload]);case"DELETE":return Object(d.a)(e.filter((function(e){return e.id!==t.payload})));case"TOGGLE":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));case"GET":case"UPDATE":break;default:return[e]}},m=a(5),u=function(e){var t=e.todo,a=e.handleToggle,n=e.handleDelete,r=e.idx;return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"list-group-item row form-inline col-md-12 d-flex bd-highlight"},o.a.createElement("div",{className:"col-md-9",style:{borderBlockColor:"red"}},o.a.createElement("p",{className:"".concat(t.done&&"complete"),onClick:function(){return a(t.id)}},r+1,". ",t.desc)),o.a.createElement("div",{className:"col-md-3 "},o.a.createElement("a",{className:"btn btn-outline-danger btn-sm",onClick:function(){n(t.id)}},"   ",o.a.createElement("i",{className:"fa fa-trash"},"   ")," "))))},p=function(e){var t=e.todos,a=e.handleToggle,n=e.handleDelete;return o.a.createElement("div",{className:"list-group list-group-flush"},t.map((function(e,t){return o.a.createElement(u,{todo:e,key:e.id,idx:t,handleToggle:a,handleDelete:n})})))},f=function(e){var t=e.handleAdd,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(l.a)(t,2),o=a[0],r=a[1],c=function(){r(e)},d=function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},o),{},Object(m.a)({},t.name,t.value)))};return[o,d,c]}({description:""}),r=Object(l.a)(a,3),c=r[0].description,d=r[1],s=r[2];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-md-12 form-inline"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={id:(new Date).getTime(),desc:c,done:!1};t(a),s()}},o.a.createElement("input",{placeholder:"Descripcion",type:"text",name:"description",value:c,onChange:d,className:"form-control",style:{width:"400px"}}),o.a.createElement("button",{className:"btn btn-outline-primary",style:{marginLeft:"5px"},type:"submit"},"Agregar"))))},g=function(){return JSON.parse(localStorage.getItem("todos"))||[]},h=function(){var e=Object(n.useReducer)(s,[],g),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Todo App  (",a.length,")"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row",style:{marginBottom:"10px"}},o.a.createElement(f,{handleAdd:function(e){r({type:"ADD",payload:e})}})),o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p,{todos:a,handleDelete:function(e){console.log(),r({type:"DELETE",payload:e})},handleToggle:function(e){r({type:"TOGGLE",payload:e})}})))};c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2d08707.chunk.js.map