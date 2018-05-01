webpackJsonp([0],{AohX:function(t,e){},"E/Wt":function(t,e,a){"use strict";var i={name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){this.visible=window.pageYOffset>parseInt(this.visibleoffset)},backToTop:function(){window.smoothscroll()}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"back-to-top-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:this.backToTop}},[this._t("default",[e("div",{staticClass:"default"},[e("span",[this._v("\n          "+this._s(this.text)+"\n        ")])])])],2)])},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(t){a("AohX")},null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={name:"app",components:{BackToTop:a("vJRe").a},data:function(){return{designChoices:"template"}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("main",{attrs:{id:"webcalc"}},[a("section",{attrs:{id:"calculator"}},[t._m(1),t._v(" "),a("h1",[t._v("The Easy Website Price Calculator")]),t._v(" "),a("form",{staticClass:"calcForm",attrs:{action:"#"}},[a("div",{staticClass:"cl"},[t._m(2),t._v(" "),a("div",[t._m(3),t._v(" "),a("div",{staticClass:"selectbox"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.designChoices,expression:"designChoices"}],attrs:{id:"design",name:"design"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.designChoices=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"template"}},[t._v("Template")]),t._v(" "),a("option",{attrs:{value:"custom"}},[t._v("Custom Design")])])])]),t._v(" "),t._m(4)]),t._v(" "),a("transition",{attrs:{name:"fade"}},["custom"==t.designChoices?a("h2",[t._v("Show new labels")]):t._e()]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)],1)]),t._v(" "),t._m(8)]),t._v(" "),a("footer",{attrs:{id:"copyright"}},[t._v("Copyright ©\t"+t._s((new Date).getFullYear())+" | Web Calc | "),a("a",{attrs:{href:"https://www.rafaeldejongh.com",target:"_blank"}},[t._v("www.RafaelDeJongh.com")]),t._v(" | All Rights Reserved.")]),t._v(" "),a("back-to-top",{attrs:{visibleoffset:"250"}},[a("button",{attrs:{id:"totop"}})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{attrs:{src:a("ZSGi"),alt:"Web Calc Logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{attrs:{id:"priceCalculator"}},[e("h3",[this._v("Estimated Price:")]),this._v(" "),e("label",[this._v("€1000 to €3000 excl. VAT")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("label",{attrs:{for:"sitetype"}},[this._v("What type of site do you want? "),e("a",{attrs:{href:"#","tooltip-info":"Info about type of site."}},[e("i",{staticClass:"fas fa-info-circle"})])]),this._v(" "),e("div",{staticClass:"selectbox"},[e("select",{attrs:{id:"sitetype",name:"sitetype"}},[e("option",{attrs:{value:"standard"}},[this._v("Standard")]),this._v(" "),e("option",{attrs:{value:"ecommerce"}},[this._v("E-Commerce")]),this._v(" "),e("option",{attrs:{value:"customProduction"}},[this._v("Custom Production")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"design"}},[this._v("What kind of design? "),e("a",{attrs:{href:"#","tooltip-info":"Info about what kind of design you need."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("label",{attrs:{for:"speed"}},[this._v("How fast do you need it build?  "),e("a",{attrs:{href:"#","tooltip-info":"Info about how fast you want the website to be made."}},[e("i",{staticClass:"fas fa-info-circle"})])]),this._v(" "),e("div",{staticClass:"selectbox"},[e("select",{attrs:{id:"speed",name:"speed"}},[e("option",{attrs:{value:"fast"}},[this._v("Less than 1 month")]),this._v(" "),e("option",{attrs:{value:"normal"}},[this._v("Around 1 to 2 months")]),this._v(" "),e("option",{attrs:{value:"slow"}},[this._v("More than 2 months")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cl"},[a("div",[a("label",{attrs:{for:"amountPages"}},[t._v("How many pages do you require? "),a("a",{attrs:{href:"#","tooltip-info":"Info about how much pages you require."}},[a("i",{staticClass:"fas fa-info-circle"})])]),t._v(" "),a("input",{attrs:{id:"amountPages",name:"amountPages",type:"number",value:"1",min:"1",max:"250"}})]),t._v(" "),a("div",[a("label",{attrs:{for:"copywriting"}},[t._v("Do your pages need copywriting? "),a("a",{attrs:{href:"#","tooltip-info":"Info about if you require your pages to be copyrighted."}},[a("i",{staticClass:"fas fa-info-circle"})])]),t._v(" "),a("input",{staticClass:"copywriting",attrs:{name:"copywriting",type:"radio",id:"copywrite-yes",value:"yes"}}),a("label",{attrs:{for:"copywrite-yes"}},[t._v("Yes")]),t._v(" "),a("input",{staticClass:"copywriting",attrs:{name:"copywriting",type:"radio",id:"copywrite-no",value:"no"}}),a("label",{attrs:{for:"copywrite-no"}},[t._v("No")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"features"}},[this._v("Do you require any of the following features?  "),e("a",{attrs:{href:"#","tooltip-info":"Select all the features you think you will require."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{attrs:{id:"features"}},[a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"seo",value:"seo"}}),a("label",{attrs:{for:"seo"}},[t._v("Search Engine Optimisation (SEO)")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"smo",value:"smo"}}),a("label",{attrs:{for:"smo"}},[t._v("Social Media Optimisation (SMO)")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"security",value:"security"}}),a("label",{attrs:{for:"security"}},[t._v("Security Setup")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"caching",value:"caching"}}),a("label",{attrs:{for:"caching"}},[t._v("Caching & Compression setup")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"cdn",value:"cdn"}}),a("label",{attrs:{for:"cdn"}},[t._v("Content Delivery Network (CDN) Setup")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"server",value:"server"}}),a("label",{attrs:{for:"server"}},[t._v("Server/Webhost Setup")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"mail",value:"mail"}}),a("label",{attrs:{for:"mail"}},[t._v("Mail Setup")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"gallery",value:"gallery"}}),a("label",{attrs:{for:"gallery"}},[t._v("Image/Sliders gallery")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"pagebuilder",value:"pagebuilder"}}),a("label",{attrs:{for:"pagebuilder"}},[t._v("PageBuilder Support)")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"contactform",value:"contactform"}}),a("label",{attrs:{for:"contactform"}},[t._v("Contact Form")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"multilingual",value:"multilingual"}}),a("label",{attrs:{for:"multilingual"}},[t._v("Multilingual support")])]),t._v(" "),a("li",[a("input",{staticClass:"features",attrs:{name:"features",type:"checkbox",id:"backup",value:"backup"}}),a("label",{attrs:{for:"backup"}},[t._v("Backup (Offsite/Server side backup configuration)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"price"}},[e("h2",[this._v("Why exactly does a website has this price?")])])}]};var r=a("VU/8")(s,o,!1,function(t){a("c9hJ")},null,null).exports;i.a.config.productionTip=!0,new i.a({el:"#app",components:{App:r},template:"<App/>"})},ZSGi:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMTQwIiBmaWxsPSIjYzJiNDlhIj48cGF0aCBkPSJNMzAuNCAzMi40SDguNWwxOS4xIDU5LjIgMTAuOC0zMy44LTgtMjUuNHptODEuNiAwTDk2LjIgODAuOWwtOC44IDI2LjhoMjAuNWwyNC40LTc1LjNIMTEyem0tMzAuOSAwSDYxLjVsLTE1LjkgNDgtOC40IDI3LjJoMTguNWwxNS4xLTQ1LjggOCAyNS40IDEwLjEtMjkuOS03LjgtMjQuOXptMTE4LjQgMGgtNTkuN3YxNi40aDU5LjdWMzIuNHptMCAyOS4xaC01OS43djE1LjloNTkuN1Y2MS41em0tNTkuNiAyOS43djE2LjRoNTkuN1Y5MS4yaC01OS43em0xNDAuMi0xNS43Yy0yLjUtMy4yLTUuOS01LjYtMTAuMS03LjEgMy4xLTEuNiA1LjctMy45IDcuNC02LjcgMS43LTIuOCAyLjctNiAyLjctOS43IDAtNi0yLjYtMTAuOC03LjUtMTQuMy01LjEtMy41LTEyLjQtNS40LTIxLjktNS40aC0zOC41djE1LjRoMzUuN2M3LjEgMCAxMC44IDIuNSAxMC44IDcuMiAwIDQuOS0zLjcgNy4zLTEwLjggNy4zaC0zNS43Vjc3SDI1MWM3LjQgMCAxMS4yIDIuNiAxMS4yIDcuNiAwIDUuMi0zLjggNy42LTExLjIgNy42aC0zOC45djE1LjRoNDAuNmMxMCAwIDE3LjYtMS43IDIzLTUuNCA1LjMtMy41IDgtOC42IDgtMTUuMyAwLTQuNC0xLjMtOC4yLTMuNi0xMS40em0zMSAyOC43YzYuMiAzLjMgMTMuMyA0LjkgMjEuMyA0LjkgNi45IDAgMTMtMS4yIDE4LjYtMy43IDUuNS0yLjQgMTAuMS01LjkgMTMuOC0xMC41bC0xMy41LTEyLjNjLTQuOSA1LjktMTAuOSA4LjgtMTcuNyA4LjgtNC4xIDAtNy43LS45LTExLTIuNy0zLjItMS43LTUuNy00LjMtNy40LTcuNS0xLjctMy4yLTIuNi03LTIuNi0xMS4zIDAtNC4yLjktOCAyLjYtMTEuMiAxLjctMy4yIDQuMi01LjggNy40LTcuNiAzLjItMS43IDYuOS0yLjcgMTEtMi43IDYuOSAwIDEyLjggMyAxNy43IDguOGwxMy41LTEyLjNjLTMuNy00LjUtOC4zLTguMS0xMy44LTEwLjUtNS42LTIuNC0xMS43LTMuNy0xOC42LTMuNy04IDAtMTUuMSAxLjctMjEuMyA1LjEtNi4yIDMuMy0xMS4yIDgtMTQuNyAxMy45LTMuNyA2LTUuNCAxMi43LTUuNCAyMC4yczEuNyAxNC4zIDUuNCAyMC4yYzMuNSA2LjEgOC40IDEwLjggMTQuNyAxNC4xek00MTggMzIuNGgtMjFsLTMzLjIgNzUuM2gyMS43bDUuOS0xNC42IDYuMi0xNS43IDkuNy0yNC4xIDkuNyAyNC4xIDYuMiAxNS43IDUuOSAxNC42aDIyLjFMNDE4IDMyLjR6bTM5LjQgMHY3NS4zaDU3LjJ2LTE3aC0zNS45VjMyLjRoLTIxLjN6bTgwLjUgNzEuOGM2LjIgMy4zIDEzLjMgNC45IDIxLjMgNC45IDYuOSAwIDEzLTEuMiAxOC42LTMuNyA1LjUtMi40IDEwLjEtNS45IDEzLjgtMTAuNUw1NzggODIuN2MtNC45IDUuOS0xMC45IDguOC0xNy43IDguOC00LjEgMC03LjctLjktMTEtMi43LTMuMi0xLjctNS43LTQuMy03LjQtNy41LTEuNy0zLjItMi42LTctMi42LTExLjMgMC00LjIuOS04IDIuNi0xMS4yIDEuNy0zLjIgNC4yLTUuOCA3LjQtNy42IDMuMi0xLjcgNi45LTIuNyAxMS0yLjcgNi45IDAgMTIuOCAzIDE3LjcgOC44TDU5MS41IDQ1Yy0zLjctNC41LTguMy04LjEtMTMuOC0xMC41LTUuNi0yLjQtMTEuNy0zLjctMTguNi0zLjctOCAwLTE1LjEgMS43LTIxLjMgNS4xLTYuMiAzLjMtMTEuMiA4LTE0LjcgMTMuOS0zLjcgNi01LjQgMTIuNy01LjQgMjAuMnMxLjcgMTQuMyA1LjQgMjAuMmMzLjYgNiA4LjUgMTAuNyAxNC44IDE0eiIgY2xhc3M9InN0MCIvPjwvc3ZnPg=="},c9hJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e86b73a36b8a1d03dd2.js.map