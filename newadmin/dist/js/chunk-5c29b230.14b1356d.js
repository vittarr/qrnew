(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c29b230"],{"159d":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("h2",{staticClass:"title is-flex is-align-items-center"},[t._m(0),t._v(" "+t._s(t.$t("orders.pagename"))+" ")]),s("div",{staticClass:"box"},[s("div",{staticClass:"is-flex is-justify-content-space-between"},[s("div",{staticClass:"content"},[s("h4",{staticClass:"is-uppercase"},[t._v(t._s(t.$t("orders.subheader")))]),s("p",[t._v(" "+t._s(t.$t("orders.description"))+" ")])])])]),t.orders&&t.orders.length>0?s("div",{staticClass:"box"},[s("div",{staticClass:"tabs"},[s("ul",{staticClass:"ml-0"},t._l(t.tabsList,(function(e){return s("li",{key:e,class:{"is-active":e==t.tabActive},on:{click:function(s){return t.tabSelect(e)}}},[s("a",[t._v(" "+t._s(t.$t("orders.tabs."+e))+" ")])])})),0)]),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table is-hoverable is-fullwidth"},[s("thead",[s("tr",{staticClass:"is-uppercase"},[s("th",[t._v(t._s(t.$t("orders.table.table")))]),s("th",{staticClass:"w15",class:{asc:"amount"==t.sort.field&&"asc"==t.sort.direction,desc:"amount"==t.sort.field&&"desc"==t.sort.direction},on:{click:function(e){return t.handleSort("amount")}}},[t._v(" "+t._s(t.$t("orders.table.order"))+" ")]),s("th",{class:{asc:"qty"==t.sort.field&&"asc"==t.sort.direction,desc:"qty"==t.sort.field&&"desc"==t.sort.direction},on:{click:function(e){return t.handleSort("qty")}}},[t._v(" "+t._s(t.$t("orders.table.items"))+" ")]),s("th",{staticClass:"has-text-centered w15",class:{asc:"orderTime"==t.sort.field&&"asc"==t.sort.direction,desc:"orderTime"==t.sort.field&&"desc"==t.sort.direction},on:{click:function(e){return t.handleSort("orderTime")}}},[t._v(" "+t._s(t.$t("orders.table.ordered"))+" ")]),s("th",{staticClass:"has-text-centered w15"},[t._v(" "+t._s(t.$t("orders.table.control"))+" ")])])]),s("tbody",t._l(t.ordersFiltered,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.table||"no tbl"))]),s("td",[s("b",[t._v(" "+t._s(e.qty)+" ")]),t._v(" items for "),s("br"),s("b",[t._v(" "+t._s(e.amount)+" ")]),t._v(" UAH ")]),s("td",[t._v(" "+t._s(e.order.map((function(t){return"("+t.qty+") "+t.name})).join("; "))+" ")]),s("td",[s("OrderTime",{attrs:{timeEnd:e.compleatTime&&e.compleatTime.toDate(),timeStart:e.orderTime.toDate(),timeCurrent:t.currentTime,timeWarning:40}})],1),s("td",{staticClass:"has-text-centered"},[e.compleatTime?t._e():s("button",{staticClass:"button is-primary is-uppercase",on:{click:function(s){return t.changeOrderState(e.id)}}},[t._v(" "+t._s(e.acceptTime>0?e.compleatTime>0?"done":"compleat":"accept")+" ")])])])})),0)])])]):s("div",{staticClass:"box"},[s("h4",{staticClass:"subtitle is-4 has-text-danger"},[t._v(" "+t._s(t.$t("orders.empyMessage"))+" ")])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon has-text-danger mr-4"},[s("i",{staticClass:"fas fa-tasks"})])}],a=s("1da1"),n=s("5530"),c=(s("96cf"),s("4de4"),s("2ef0")),o=s.n(c),d=s("2f62"),l=s("2df5"),u=s("4e3e"),m={name:"Orders",components:{OrderTime:l["a"]},data:function(){return{modal:{show:!1},currentTime:new Date,sort:{field:"acceptTime",direction:"desc"},tabsList:["all","notCompleated","compleated"],tabActive:"all"}},computed:Object(n["a"])(Object(n["a"])({},Object(d["d"])(["orders"])),{},{ordersSorted:function(){return o.a.orderBy(this.orders,[this.sort.field],[this.sort.direction])},ordersFiltered:function(){return"compleated"==this.tabActive?this.ordersSorted.filter((function(t){return t["compleatTime"]>0})):"notCompleated"==this.tabActive?this.ordersSorted.filter((function(t){return!(t["compleatTime"]>0)})):this.ordersSorted}}),methods:{dateDiff:u["a"],tabSelect:function(t){this.tabActive=t},handleSort:function(t){this.sort.field!=t?this.sort.field=t:this.sort.direction="desc"==this.sort.direction?"asc":"desc"},changeOrderState:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(r=e.orders.filter((function(e){return e.id==t}))[0],console.log("changeOrderState",r),!(r.acceptTime>0)){s.next=14;break}if(!(r.compleatTime>0)){s.next=8;break}return s.next=6,e.$store.dispatch("updateOrder",Object(n["a"])(Object(n["a"])({},r),{},{acceptTime:null,compleatTime:null}));case 6:s.next=12;break;case 8:return s.next=10,e.$store.dispatch("updateOrder",Object(n["a"])(Object(n["a"])({},r),{},{compleatTime:new Date}));case 10:return s.next=12,e.$store.dispatch("compleatOrder",Object(n["a"])(Object(n["a"])({},r),{},{compleatTime:new Date}));case 12:s.next=16;break;case 14:return s.next=16,e.$store.dispatch("updateOrder",Object(n["a"])(Object(n["a"])({},r),{},{acceptTime:new Date}));case 16:case"end":return s.stop()}}),s)})))()}},mounted:function(){var t=this;setInterval((function(){t.currentTime=new Date}),1e3)}},f=m,h=(s("3b40"),s("2877")),b=Object(h["a"])(f,r,i,!1,null,"d25f9cd8",null);e["default"]=b.exports},"2df5":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"tag is-large",class:t.timeleft},[t._v(" "+t._s(t.timeShow)+" "),s("i",{directives:[{name:"show",rawName:"v-show",value:"red"==t.timeleft,expression:"timeleft == 'red'"}],staticClass:"material-icons icon"},[t._v("warning_amber")])])},i=[],a=s("c1df"),n=s.n(a),c={props:["timeStart","timeEnd","timeCurrent","timeWarning"],data:function(){return{moment:n.a}},computed:{timediff:function(){return n()(this.timeEnd?this.timeEnd:this.timeCurrent).diff(this.timeStart)},timeShow:function(){return n.a.utc(this.timediff).format("HH:mm:ss")},timeleft:function(){if(!this.timeEnd)return n()(this.timeEnd?this.timeEnd:this.timeCurrent).diff(this.timeStart,"minutes")>this.timeWarning?"is-danger is-light":"is-success is-light"}}},o=c,d=(s("9305"),s("2877")),l=Object(d["a"])(o,r,i,!1,null,"215b79cc",null);e["a"]=l.exports},"3b40":function(t,e,s){"use strict";s("50a7")},"50a7":function(t,e,s){},"619b":function(t,e,s){},9305:function(t,e,s){"use strict";s("619b")}}]);
//# sourceMappingURL=chunk-5c29b230.14b1356d.js.map