(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da79c8f4"],{"218e":function(t,e,s){},"9a0b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"section has-background-white-ter px-1 py-2"},[s("div",{staticClass:"container"},t._l(Object.keys(t.getMenuItemsGroupped),(function(e){return s("div",{key:e},[s("h2",{staticClass:"title my-2"},[t._v(t._s(e))]),s("div",{staticClass:"columns is-multiline"},t._l(t.getMenuItemsGroupped[e],(function(e){return s("div",{key:e.id,staticClass:"column is-half-tablet is-one-third-desktop"},[s("MenuItemImg",{attrs:{item:e},on:{itemadd:function(s){return t.changeOrderItems({id:e.id,qty:1})},itemremove:function(s){return t.changeOrderItems({id:e.id,qty:-1})},itemdetails:function(s){return t.modalToggle(e.id)}}}),s("MenuModal",{attrs:{item:e,modal:t.modal},on:{itemadd:function(s){return t.changeOrderItems({id:e.id,qty:1})},itemremove:function(s){return t.changeOrderItems({id:e.id,qty:-1})},close:function(e){return t.modalToggle(null)}}})],1)})),0)])})),0)]),s("Footer")],1)},a=[],c=s("5530"),n=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box px-2 py-2 mb-3"},[s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-5by3",on:{click:function(e){return t.$emit("itemdetails")}}},[s("img",{attrs:{src:t.item.image,alt:"Placeholder image"}})]),s("div",[0==t.item.qty?s("button",{staticClass:"button is-small is-fullwidth",on:{click:function(e){return t.$emit("itemadd")}}},[s("span",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(" "+t._s(t.item.price)+" ")]),s("span",{staticClass:"is-size-6 pl-1"},[t._v("₴")])]):s("div",{staticClass:"is-flex is-justify-content-space-between is-align-content-center"},[s("button",{staticClass:"button is-small is-white",on:{click:function(e){return t.$emit("itemremove")}}},[t._m(0)]),s("span",{staticClass:"has-text-weight-bold is-size-5"},[t._v(" "+t._s(t.item.qty)+" ")]),s("button",{staticClass:"button is-small is-white",on:{click:function(e){return t.$emit("itemadd")}}},[t._m(1)])])])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",{staticClass:"description",on:{click:function(e){return t.$emit("itemdetails")}}},[s("strong",[t._v(t._s(t.item.name))]),t._v(" "),s("small",[t._v("("+t._s(t.item.weight)+")")]),s("br"),s("span",{staticClass:"has-text-grey"},[t._v(" "+t._s(t.item.description)+" "+t._s(t.item.description)+" "+t._s(t.item.description)+" ")])])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon has-text-danger"},[s("i",{staticClass:"fas fa-2x fa-minus"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon has-text-success"},[s("i",{staticClass:"fas fa-2x fa-plus"})])}],o={props:["item"]},m=o,u=(s("c558"),s("2877")),d=Object(u["a"])(m,l,r,!1,null,"6de79f4f",null),f=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{"is-active":t.show}},[s("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("close")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){return t.$emit("close")}}}),s("figure",{staticClass:"image is-5by3"},[s("img",{attrs:{src:t.item.image,alt:"Placeholder image"}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.item.name))]),s("small",{staticClass:"ml-2"},[t._v("("+t._s(t.item.weight)+")")])]),s("p",[t._v(" "+t._s(t.item.description)+" "+t._s(t.item.description)+" ")])])]),0==t.item.qty?s("footer",{staticClass:"card-footer"},[s("p",{staticClass:"card-footer-item is-size-4 has-text-weight-bold is-primary",on:{click:function(e){return t.$emit("itemadd")}}},[t._v(" "+t._s(t.item.price)+" "),s("span",{staticClass:"is-size-6 pl-1"},[t._v("₴")])])]):s("footer",{staticClass:"card-footer"},[s("p",{staticClass:"card-footer-item is-size-4",on:{click:function(e){return t.$emit("itemremove")}}},[t._m(0)]),s("p",{staticClass:"card-footer-item is-size-4 has-text-weight-bold"},[t._v(" "+t._s(t.item.qty)+" ")]),s("p",{staticClass:"card-footer-item is-size-4",on:{click:function(e){return t.$emit("itemadd")}}},[t._m(1)])])])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon has-text-danger"},[s("i",{staticClass:"fas fa-minus"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon has-text-success"},[s("i",{staticClass:"fas fa-plus"})])}],v={props:["item","modal"],components:{},computed:{show:function(){return this.item.id==this.modal.id}}},C=v,h=Object(u["a"])(C,p,_,!1,null,null,null),g=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer has-background-grey-light py-6"},[s("div",{staticClass:"container"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"content"},[s("h2",[t._v("😍 Contacts")]),t.place.city||t.place.address?s("p",{staticClass:"is-flex is-align-items-center"},[t._m(0),t._v(" "+t._s(t.place.address+" "+t.place.city)+" ")]):t._e(),t.place.facebook?s("p",{staticClass:"is-flex is-align-items-center"},[t._m(1),s("a",{attrs:{href:t.place.facebook}},[t._v(" "+t._s(t.place.facebook))])]):t._e(),t.place.phone?s("p",{staticClass:"is-flex is-align-items-center"},[t._m(2),s("a",{attrs:{href:"tel:"+t.place.phone}},[t._v(" "+t._s(t.place.phone))])]):t._e(),t.place.email?s("p",{staticClass:"is-flex is-align-items-center"},[t._m(3),s("a",{attrs:{href:"mailto:"+t.place.email}},[t._v(" "+t._s(t.place.email))])]):t._e()])]),s("div",{staticClass:"level-item"},[t._v(t._s(t.place.description))])]),t._m(4)])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-lg fa-map-pin"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fab fa-lg fa-facebook-f"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-lg fa-phone"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-lg fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" © created by "),s("b",[t._v(" Super menu ")]),t._v(". If you want similar menu for your place please contact us: phone +380 XXX XXX XXX or email: xxx@xxx.com ")])}],y={computed:Object(c["a"])({},Object(n["e"])(["place"]))},k=y,$=Object(u["a"])(k,b,x,!1,null,null,null),w=$.exports,O={name:"Menu",components:{MenuItemImg:f,MenuModal:g,Footer:w},data:function(){return{modal:{id:null}}},computed:Object(c["a"])({},Object(n["c"])(["getMenuItemsGroupped"])),methods:Object(c["a"])(Object(c["a"])({},Object(n["d"])(["changeOrderItems"])),{},{modalToggle:function(t){this.modal.id=t}})},j=O,E=Object(u["a"])(j,i,a,!1,null,null,null);e["default"]=E.exports},c558:function(t,e,s){"use strict";s("218e")}}]);
//# sourceMappingURL=chunk-da79c8f4.799d084e.js.map