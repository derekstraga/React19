(this.webpackJsonpreact19=this.webpackJsonpreact19||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(22),a(2)),s=a(3),i=a(5),u=a(4),d=a(16),m=a.n(d),h=function(){return m.a.get("https://randomuser.me/api/?results=50")};var f=function(e){var t=e.handleSearchChange;return r.a.createElement("div",{className:"Search"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})))};var v=function(e){var t=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",null,r.a.createElement(f,{handleSearchChange:t})))};var p=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=(e.picture,e.phone),l=(e.email,e.dob);return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"}),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-left"},a.first," ",a.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},n,function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(l.date)))})):r.a.createElement(r.a.Fragment,null))},g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.labels=[{name:"Image",width:"30%"},{name:"Name",width:"40%"},{name:"Phone",width:"30%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"table-body"},r.a.createElement(p,{labels:this.labels,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Employee Finder"))}}]),a}(n.Component);a(40);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.38c76d49.chunk.js.map