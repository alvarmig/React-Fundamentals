(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){e.exports=a(63)},45:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(31),c=a.n(l),r=a(19),s=a(6),i=a(7),m=a(9),d=a(8),u=a(10),p=a(14),h=a(11),b=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("li",{className:"list-group-item checkbox"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}))),o.a.createElement("div",{id:"taskText",className:"col-xs-9 task-text",style:this.getStyle()},o.a.createElement("p",null,a)),o.a.createElement("div",{className:"col-xs-2 delete-icon-area"},o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,t)},o.a.createElement("i",{className:"delete-icon glyphicon glyphicon-trash"})))))}}]),t}(n.Component)),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})}))}}]),t}(n.Component);var v=function(){return o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-default"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-header"},o.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},o.a.createElement("span",{className:"sr-only"},"Toggle navigation"),o.a.createElement("span",{className:"icon-bar"}),o.a.createElement("span",{className:"icon-bar"}),o.a.createElement("span",{className:"icon-bar"})),o.a.createElement("span",{className:"navbar-brand"},"Todo-App")),o.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",{className:"active"},o.a.createElement(p.b,{to:"/React-Fundamentals/"},"Home"),o.a.createElement("span",{className:"sr-only"},"(current)")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/about"},"About")))))))},f=a(34),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row input-area"},o.a.createElement("div",{className:"col-xs-10"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add new task ...",className:"form-control",id:"taskInput",value:this.state.title,onChange:this.onChange})),o.a.createElement("div",{className:"col-xs-2"},o.a.createElement("button",{id:"addBtn",className:"btn btn-primary",onClick:this.onSubmit},"Add")))}}]),t}(n.Component);var N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList App v1.0.0. It is part of a React crash course."))},y=(a(45),a(15)),j=a.n(y),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.deleteTodo=function(e){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){return a.setState({todos:Object(r.a)(a.state.todos.filter((function(t){return t.id!==e})))})}))},a.addTodo=function(e){j.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return a.setState({todos:[].concat(Object(r.a)(a.state.todos),[e.data])})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return console.log(this.state.todos),o.a.createElement(p.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(v,null),o.a.createElement(h.a,{exact:!0,path:"/React-Fundamentals/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"content-area row"},o.a.createElement("div",{className:"col-xs-8 col-xs-offset-2"},o.a.createElement("h2",null,"To-do List"),o.a.createElement("div",{className:"App"},o.a.createElement(g,{addTodo:e.addTodo}),o.a.createElement("ul",{className:"list-group",id:"taskList"},o.a.createElement(E,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))))))}}),o.a.createElement(h.a,{exact:!0,path:"/about",component:N})))}}]),t}(o.a.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fff38dc7.chunk.js.map