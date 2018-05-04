webpackJsonp([1],{AohX:function(t,e){},"E/Wt":function(t,e,i){"use strict";var o={name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){this.visible=window.pageYOffset>parseInt(this.visibleoffset)},backToTop:function(){window.smoothscroll()}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"back-to-top-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:this.backToTop}},[this._t("default",[e("div",{staticClass:"default"},[e("span",[this._v("\n          "+this._s(this.text)+"\n        ")])])])],2)])},staticRenderFns:[]};var a=i("VU/8")(o,r,!1,function(t){i("AohX")},null,null);e.a=a.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7+uW"),r=i("vJRe"),a=(i("GDE4"),{name:"app",components:{BackToTop:r.a},data:function(){return{form:{sitetype:"Standard",designChoices:"Template",speed:"Less than 1 month",pages:1,copywriting:"",features:[]},options:{sitetype:[{text:"Standard",price:{low:800,high:1500}},{text:"E-Commerce",price:{low:2e3,high:4e3}},{text:"Custom Production",price:{low:5e3,high:8e3}}],designChoices:[{text:"Template",price:{low:200,high:500}},{text:"Custom Design",price:{low:1200,high:2e3}}],speed:[{text:"Less than 1 month",price:{low:1e3,high:3e3}},{text:"Around 1 to 2 months",price:{low:500,high:1e3}},{text:"More than 2 months",price:{low:250,high:500}}],features:[{id:"seo",price:{low:250,high:500},text:"Search Engine Optimisation (SEO)"},{id:"smo",price:{low:400,high:800},text:"Social Media Optimisation (SMO)"},{id:"security",price:{low:500,high:1e3},text:"Security Setup"},{id:"caching",price:{low:700,high:1400},text:"Caching & Compression Setup"},{id:"cdn",price:{low:200,high:400},text:"Content Delivery Network (CDN) Setup"},{id:"server",price:{low:350,high:700},text:"Server/Webhost Setup"},{id:"mail",price:{low:150,high:300},text:"Mail Setup"},{id:"gallery",price:{low:250,high:500},text:"Image/Sliders Gallery"},{id:"pagebuilder",price:{low:150,high:300},text:"PageBuilder Support"},{id:"contactform",price:{low:150,high:300},text:"Contact Form"},{id:"multilingual",price:{low:500,high:1e3},text:"Multilingual Support"},{id:"backup",price:{low:250,high:500},text:"Backup (Offsite/Server side backup configuration)"}]}}},computed:{calcMin:function(){var t=this,e=0,i="Yes"==this.form.copywriting?2.5:1;return this.form.features.forEach(function(i){t.options.features.forEach(function(t){i==t.text&&(e+=t.price.low,0)})}),e+50*this.form.pages*i},calcMax:function(){return 100*this.form.pages}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("main",{attrs:{id:"webcalc"}},[i("section",{attrs:{id:"calculator"}},[i("aside",{attrs:{id:"priceCalculator"}},[i("h3",[t._v("Estimated Price:")]),t._v(" "),i("label",[t._v("€"+t._s(t.calcMin)+" to €"+t._s(t.calcMax)+" excl. VAT")])]),t._v(" "),i("h1",[t._v("The Easy Website Price Calculator")]),t._v(" "),i("form",{staticClass:"calcForm",attrs:{action:"#"}},[i("div",{staticClass:"cl"},[i("div",[t._m(1),t._v(" "),i("div",{staticClass:"selectbox"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sitetype,expression:"form.sitetype"}],attrs:{id:"sitetype",name:"sitetype"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"sitetype",e.target.multiple?i:i[0])}}},t._l(t.options.sitetype,function(e){return i("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))])]),t._v(" "),i("div",[t._m(2),t._v(" "),i("div",{staticClass:"selectbox"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.designChoices,expression:"form.designChoices"}],attrs:{id:"design",name:"design"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"designChoices",e.target.multiple?i:i[0])}}},t._l(t.options.designChoices,function(e){return i("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))])]),t._v(" "),i("div",[t._m(3),t._v(" "),i("div",{staticClass:"selectbox"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.speed,expression:"form.speed"}],attrs:{id:"speed",name:"speed"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"speed",e.target.multiple?i:i[0])}}},t._l(t.options.speed,function(e){return i("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},["Custom Design"==t.form.designChoices?i("h2",[t._v("Show new labels")]):t._e()]),t._v(" "),i("div",{staticClass:"cl"},[i("div",[t._m(4),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pages,expression:"form.pages"}],attrs:{id:"amountPages",name:"amountPages",type:"number",value:"1",min:"1",max:"250"},domProps:{value:t.form.pages},on:{input:function(e){e.target.composing||t.$set(t.form,"pages",e.target.value)}}})]),t._v(" "),i("div",[t._m(5),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.copywriting,expression:"form.copywriting"}],staticClass:"copywriting",attrs:{name:"copywriting",type:"radio",id:"copywrite-yes",value:"Yes"},domProps:{checked:t._q(t.form.copywriting,"Yes")},on:{change:function(e){t.$set(t.form,"copywriting","Yes")}}}),i("label",{attrs:{for:"copywrite-yes"}},[t._v("Yes")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.copywriting,expression:"form.copywriting"}],staticClass:"copywriting",attrs:{name:"copywriting",type:"radio",id:"copywrite-no",value:"No"},domProps:{checked:t._q(t.form.copywriting,"No")},on:{change:function(e){t.$set(t.form,"copywriting","No")}}}),i("label",{attrs:{for:"copywrite-no"}},[t._v("No")])])]),t._v(" "),t._m(6),t._v(" "),i("ul",{attrs:{id:"features"}},t._l(t.options.features,function(e){return i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.features,expression:"form.features"}],staticClass:"features",attrs:{name:"features",type:"checkbox",id:e.id},domProps:{value:e.text,checked:Array.isArray(t.form.features)?t._i(t.form.features,e.text)>-1:t.form.features},on:{change:function(i){var o=t.form.features,r=i.target,a=!!r.checked;if(Array.isArray(o)){var s=e.text,n=t._i(o,s);r.checked?n<0&&t.$set(t.form,"features",o.concat([s])):n>-1&&t.$set(t.form,"features",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.form,"features",a)}}}),i("label",{attrs:{for:e.id}},[t._v(t._s(e.text))])])}))],1),t._v(" "),i("section",{attrs:{id:"siteresults"}},[i("h2",[t._v("Your currently configured site")]),t._v(" "),i("ul",t._l(t.form,function(e,o){return i("li",[i("strong",[t._v(t._s(o)+":")]),t._v(" "+t._s(e))])}))])]),t._v(" "),t._m(7)]),t._v(" "),i("footer",{attrs:{id:"copyright"}},[t._v("Copyright © "+t._s((new Date).getFullYear())+" | Web Calc | "),i("a",{attrs:{href:"https://www.rafaeldejongh.com",target:"_blank"}},[t._v("www.RafaelDeJongh.com")]),t._v(" | All Rights Reserved.")]),t._v(" "),i("back-to-top",{attrs:{visibleoffset:"250"}},[i("button",{attrs:{id:"totop"}})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{attrs:{src:i("ZSGi"),alt:"Web Calc Logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"sitetype"}},[this._v("What type of site do you want? "),e("a",{attrs:{href:"#","tooltip-info":"Info about type of site."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"design"}},[this._v("What kind of design? "),e("a",{attrs:{href:"#","tooltip-info":"Info about what kind of design you need."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"speed"}},[this._v("How fast do you need it build? "),e("a",{attrs:{href:"#","tooltip-info":"Info about how fast you want the website to be made."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"amountPages"}},[this._v("How many pages do you require? "),e("a",{attrs:{href:"#","tooltip-info":"Info about how much pages you require."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"copywriting"}},[this._v("Do your pages need copywriting? "),e("a",{attrs:{href:"#","tooltip-info":"Info about if you require your pages to be copyrighted."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"features"}},[this._v("Do you require any of the following features?  "),e("a",{attrs:{href:"#","tooltip-info":"Select all the features you think you will require."}},[e("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"price"}},[e("h2",[this._v("Why exactly does a website has this price?")])])}]};var n=i("VU/8")(a,s,!1,function(t){i("j6Fb")},null,null).exports;o.a.config.productionTip=!0,new o.a({el:"#app",components:{App:n},template:"<App/>"})},ZSGi:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMTQwIiBmaWxsPSIjYzJiNDlhIj48cGF0aCBkPSJNMzAuNCAzMi40SDguNWwxOS4xIDU5LjIgMTAuOC0zMy44LTgtMjUuNHptODEuNiAwTDk2LjIgODAuOWwtOC44IDI2LjhoMjAuNWwyNC40LTc1LjNIMTEyem0tMzAuOSAwSDYxLjVsLTE1LjkgNDgtOC40IDI3LjJoMTguNWwxNS4xLTQ1LjggOCAyNS40IDEwLjEtMjkuOS03LjgtMjQuOXptMTE4LjQgMGgtNTkuN3YxNi40aDU5LjdWMzIuNHptMCAyOS4xaC01OS43djE1LjloNTkuN1Y2MS41em0tNTkuNiAyOS43djE2LjRoNTkuN1Y5MS4yaC01OS43em0xNDAuMi0xNS43Yy0yLjUtMy4yLTUuOS01LjYtMTAuMS03LjEgMy4xLTEuNiA1LjctMy45IDcuNC02LjcgMS43LTIuOCAyLjctNiAyLjctOS43IDAtNi0yLjYtMTAuOC03LjUtMTQuMy01LjEtMy41LTEyLjQtNS40LTIxLjktNS40aC0zOC41djE1LjRoMzUuN2M3LjEgMCAxMC44IDIuNSAxMC44IDcuMiAwIDQuOS0zLjcgNy4zLTEwLjggNy4zaC0zNS43Vjc3SDI1MWM3LjQgMCAxMS4yIDIuNiAxMS4yIDcuNiAwIDUuMi0zLjggNy42LTExLjIgNy42aC0zOC45djE1LjRoNDAuNmMxMCAwIDE3LjYtMS43IDIzLTUuNCA1LjMtMy41IDgtOC42IDgtMTUuMyAwLTQuNC0xLjMtOC4yLTMuNi0xMS40em0zMSAyOC43YzYuMiAzLjMgMTMuMyA0LjkgMjEuMyA0LjkgNi45IDAgMTMtMS4yIDE4LjYtMy43IDUuNS0yLjQgMTAuMS01LjkgMTMuOC0xMC41bC0xMy41LTEyLjNjLTQuOSA1LjktMTAuOSA4LjgtMTcuNyA4LjgtNC4xIDAtNy43LS45LTExLTIuNy0zLjItMS43LTUuNy00LjMtNy40LTcuNS0xLjctMy4yLTIuNi03LTIuNi0xMS4zIDAtNC4yLjktOCAyLjYtMTEuMiAxLjctMy4yIDQuMi01LjggNy40LTcuNiAzLjItMS43IDYuOS0yLjcgMTEtMi43IDYuOSAwIDEyLjggMyAxNy43IDguOGwxMy41LTEyLjNjLTMuNy00LjUtOC4zLTguMS0xMy44LTEwLjUtNS42LTIuNC0xMS43LTMuNy0xOC42LTMuNy04IDAtMTUuMSAxLjctMjEuMyA1LjEtNi4yIDMuMy0xMS4yIDgtMTQuNyAxMy45LTMuNyA2LTUuNCAxMi43LTUuNCAyMC4yczEuNyAxNC4zIDUuNCAyMC4yYzMuNSA2LjEgOC40IDEwLjggMTQuNyAxNC4xek00MTggMzIuNGgtMjFsLTMzLjIgNzUuM2gyMS43bDUuOS0xNC42IDYuMi0xNS43IDkuNy0yNC4xIDkuNyAyNC4xIDYuMiAxNS43IDUuOSAxNC42aDIyLjFMNDE4IDMyLjR6bTM5LjQgMHY3NS4zaDU3LjJ2LTE3aC0zNS45VjMyLjRoLTIxLjN6bTgwLjUgNzEuOGM2LjIgMy4zIDEzLjMgNC45IDIxLjMgNC45IDYuOSAwIDEzLTEuMiAxOC42LTMuNyA1LjUtMi40IDEwLjEtNS45IDEzLjgtMTAuNUw1NzggODIuN2MtNC45IDUuOS0xMC45IDguOC0xNy43IDguOC00LjEgMC03LjctLjktMTEtMi43LTMuMi0xLjctNS43LTQuMy03LjQtNy41LTEuNy0zLjItMi42LTctMi42LTExLjMgMC00LjIuOS04IDIuNi0xMS4yIDEuNy0zLjIgNC4yLTUuOCA3LjQtNy42IDMuMi0xLjcgNi45LTIuNyAxMS0yLjcgNi45IDAgMTIuOCAzIDE3LjcgOC44TDU5MS41IDQ1Yy0zLjctNC41LTguMy04LjEtMTMuOC0xMC41LTUuNi0yLjQtMTEuNy0zLjctMTguNi0zLjctOCAwLTE1LjEgMS43LTIxLjMgNS4xLTYuMiAzLjMtMTEuMiA4LTE0LjcgMTMuOS0zLjcgNi01LjQgMTIuNy01LjQgMjAuMnMxLjcgMTQuMyA1LjQgMjAuMmMzLjYgNiA4LjUgMTAuNyAxNC44IDE0eiIgY2xhc3M9InN0MCIvPjwvc3ZnPg=="},j6Fb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e1b5f78daba3d51a18c.js.map