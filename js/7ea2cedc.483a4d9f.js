(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7ea2cedc"],{"23c4":function(t,e,i){},"5c2e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{attrs:{id:"ingredients_page"}},[i("q-modal",{attrs:{position:"bottom"},model:{value:t.add_voice_prompt,callback:function(e){t.add_voice_prompt=e},expression:"add_voice_prompt"}},[i("div",{staticClass:"modal-content-head"},[i("h3",{staticClass:"modal-content-head-title"},[t._v(t._s(t.$t("44.add.ingredients")))])]),i("div",{staticClass:"speak-history-wrap"},[i("div",{staticClass:"speak-history-list"},t._l(t.api.state.voice_ingredients_to_confirm,function(e){return i("div",{staticClass:"speak-history-list-item"},[i("a",{staticClass:"speak-history-text"},[t._v(t._s(e))]),i("a",{staticClass:"speak-history-remove-icon",on:{click:function(i){t.remove_v_ingredient(e)}}},[t._v("x")])])})),i("div",{staticClass:"speak-small-icon"},[t.text_entry_mode?t._e():i("img",{attrs:{src:"statics/images/icon-lyrics.png",alt:""}})]),i("div",{staticClass:"speak-action-buttons"},[i("a",{staticClass:"btn btn-black",on:{click:t.confirm_voice_ingredients}},[t._v(t._s(t.$t("270.add.to.ingredients")))]),t.text_entry_mode?t._e():i("a",{staticClass:"btn btn-link",on:{click:function(e){t.get_voice_query(t.append=!0)}}},[t._v(" "+t._s(t.$t("45.add.more"))+"  ")])])])]),i("q-modal",{attrs:{position:"bottom"},model:{value:t.add_voice_prompt_resolve,callback:function(e){t.add_voice_prompt_resolve=e},expression:"add_voice_prompt_resolve"}},[i("div",{staticClass:"modal-content-head"},[i("h3",{staticClass:"modal-content-head-title"},[t._v(t._s(t.$t("34.quick.question")))])]),t._l(t.resolvers,function(e,s){return i("div",{staticClass:"ingredients-category-item",staticStyle:{"box-shadow":"none"}},[i("a",{staticClass:"ingredients-category-link-block w-inline-block",on:{click:function(i){t.choose_category(e)}}},[i("div",{staticClass:"ingredients-name-block"},[i("h4",{staticClass:"ingredients-name"},[t._v(" "+t._s(t.$t("35.what.kind.of.x",{x:e.word}))+" ")])])]),i("div",{staticClass:"ingredients-category-list"},[i("div",[i("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:200,leave:50}}},t._l(e.options,function(e){return i("a",{key:e,staticClass:"tags-mini-item",class:{"selected-tag":t.api.state.voice_ingredients_to_confirm.includes(e)},on:{click:function(i){t.flip_resolved_ingredient(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])}))],1)])])}),i("div",{staticClass:"speak-history-wrap"},[i("div",{staticClass:"speak-action-buttons"},[i("a",{staticClass:"btn btn-black",on:{click:t.switch_from_resolve_to_confirm}},[t._v(t._s(t.$t("36.next")))])])])],2),t.voice_active?i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"center-modal-content"},[i("img",{staticClass:"center-modal-icon",attrs:{src:"statics/images/music-player.gif",alt:""}}),i("p",{staticClass:"center-modal-text"},[t._v(t._s(t.$t("30.speak.now")))])]),i("div",{staticClass:"modal-overlap"})]):t._e(),i("header",{staticClass:"header-block"},[i("div",{staticClass:"head-navigation"},[i("a",{staticClass:"head-nav-left w-inline-block",attrs:{id:"w-node-ca3c72dbf773-402b0e17"}},[t.$q.platform.is.desktop?i("span",{on:{click:function(e){t.api.state.side_route="pantry"}}},[i("q-icon",{staticStyle:{color:"white"},attrs:{name:"list",size:"25px"}})],1):i("span",{on:{click:function(e){t.account_click()}}},[t.api.state.login_hash?i("img",{attrs:{src:"statics/images/male-user-white.png",alt:""}}):i("img",{attrs:{src:"statics/images/male-user-100.png",alt:""}})])]),i("div",{staticClass:"head-nav-center",attrs:{id:"w-node-ca3c72dbf775-402b0e17"}},[i("h1",{staticClass:"head-title"},[t._v(t._s(t.$t("24.my.ingredients")))]),i("div",{staticClass:"head-sub-title"},[t._v("\n              "+t._s(t.$t("25.you.have.x.ingredients",{x:t.$api.get_selected_ingredients().length}))+"\n            ")])]),i("div",{staticClass:"head-nav-right",attrs:{id:"w-node-ca3c72dbf77a-402b0e17"}},[i("q-icon",{class:{supercook_greenaz:t.api.state.az_sort,azicon:!t.api.state.az_sort},attrs:{name:"sort_by_alpha"},nativeOn:{click:function(e){t.az_sort_toggle()}}}),i("q-icon",{staticClass:"shopping-more-vert",attrs:{name:"more_vert"}},[i("q-popover",[i("q-list",[i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.delete_all()}}},[i("q-item-side",{attrs:{icon:"delete"}}),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("39.remove.all.ingredients")))])],1)],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.copy_ingredients()}}},[i("q-item-side",{attrs:{icon:"file_copy"}}),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("40.copy.to.clipboard")))])],1)],1)],1)],1)],1)],1)]),i("div",{staticClass:"search-bar-wrap w-form"},[i("q-search",{staticClass:"form-control w-input",attrs:{"hide-underline":"",id:"search",placeholder:t.$t("43.add.remove.paste.ingredients"),autocomplete:"off",color:"black"},on:{focus:function(e){t.kwfocus()},blur:function(e){t.kwblur()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.kw_enter(e):null}},model:{value:t.kitchen_input,callback:function(e){t.kitchen_input=e},expression:"kitchen_input"}},[i("q-autocomplete",{on:{search:t.autoc2,selected:t.add_ingredient_from_autoc}})],1),i("input",{staticClass:"search-button w-button",attrs:{type:"submit",value:"Search"}})],1)]),i("section",{staticClass:"content-block"},[i("div",{staticClass:"wrapper-fixed-group"},[i("div",{staticClass:"section-block"},[t.$q.platform.is.desktop?t._e():i("div",{staticClass:"ingredients-category-item row justify-between items-center",staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[i("div",{staticClass:"column"}),i("div",{staticClass:"column",staticStyle:{"text-align":"center"}},[i("div",{staticClass:"ingredients-name-block33"},[i("h4",{staticStyle:{margin:"0","font-size":"4vw","font-weight":"400"}},[t._v(t._s(t.$t("235.use.your.voice")))]),i("div",{staticStyle:{margin:"0",color:"rgba(79, 80, 90, 0.6)","font-size":"3vw","line-height":"5vw"}},[t._v(t._s(t.$t("236.dictate.many.ingredients")))]),i("a",{staticClass:"fab-icon-wrap-2 group-fixed3 w-inline-block3 secondary-bk",staticStyle:{"margin-top":"3px"},on:{click:function(e){t.get_voice_query(t.append=!1)}}},[i("img",{staticClass:"fab-icon-img",attrs:{src:"statics/images/mic-icon-white.png",alt:""}})])])]),i("div",{staticClass:"column"})])]),t.salt_pepper_confirmed?t._e():i("div",{staticClass:"assume_you_have",class:{margin20px:t.$q.platform.is.desktop}},[i("q-icon",{staticStyle:{float:"right"},attrs:{name:"close",size:"20px"},nativeOn:{click:function(e){t.confirm_salt_pepper()}}}),t._v("\n              \n              "+t._s(t.$t("314.we.assume.you.have"))+"\n          ")],1),i("div",{staticClass:"section-block"},t._l(t.api.state.ingredients,function(e,s){return i("div",{staticClass:"ingredients-category-item"},[i("a",{staticClass:"ingredients-category-link-block w-inline-block",on:{click:function(i){t.choose_category(e.category)}}},[i("div",{staticClass:"ingredients-category-icon",class:{"ingredients-category-icon-desktop":t.$q.platform.is.desktop}},[i("img",{staticClass:"ingredients-category-icon-img",class:{"ingredients-category-img-desktop":t.$q.platform.is.desktop},attrs:{src:"statics/sicons/"+e.icon,alt:""}})]),i("div",{staticClass:"ingredients-name-block"},[i("h4",{staticClass:"ingredients-name",class:{"ingredients-name-desktop":t.$q.platform.is.desktop}},[t._v(t._s(e.category))]),i("div",{staticClass:"ingredients-name-values",class:{"ingredients-name-values-desktop":t.$q.platform.is.desktop}},[t._v(t._s(t.selected_in_category(e.category))+"/"+t._s(t.api.ingredients_of_category(e.category).length)+" "+t._s(t.$t("173.ingredients")))])]),t.api.ingredients_of_category(e.category).length>10?i("q-icon",{staticStyle:{position:"absolute",right:"40px"},attrs:{name:t.open_categories.includes(e.category)?"keyboard_arrow_up":"keyboard_arrow_down",size:"20px"}}):t._e()],1),i("div",{staticClass:"section-divider"}),i("div",{staticClass:"ingredients-category-list"},[i("div",[i("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:200,leave:50}}},t._l(t.get_category_subset(e.category),function(e){return i("a",{key:e.i,staticClass:"tags-mini-item noselect",class:{"selected-tag":t.is_selected(e.i),"tags-mini-item-desktop":t.$q.platform.is.desktop},on:{click:function(i){t.ingc2(e)}}},[t._v("\n                      "+t._s(e.i)+"\n                    ")])})),t.api.ingredients_of_category(e.category).length>10&&!t.open_categories.includes(e.category)?i("a",{staticClass:"tags-mini-item more-tag",class:{"tags-mini-item-desktop":t.$q.platform.is.desktop},on:{click:function(i){t.choose_category(e.category)}}},[i("span",[t._v("\n                      +"+t._s(t.api.ingredients_of_category(e.category).length-10)+" "+t._s(t.$t("257.more"))+"\n                    ")])]):t._e()],1)])])})),i("button",{staticStyle:{"margin-left":"20px","margin-right":"20px",display:"block",margin:"0 auto","margin-top":"35px",height:"40px",width:"300px"},on:{click:function(e){t.suggest_new()}}},[t._v("  "+t._s(t.$t("244.suggest.ingredient"))+"    ")])])]),t.$q.platform.is.desktop?t._e():i("div",{staticClass:"button-group-fixed"},[i("div",{staticClass:"d-flex-col"},[i("a",{staticClass:"btn btn-black grey w-inline-block pantry_foot_btn",class:{pantry_foot_btn_el:"el"==t.api.state.lang||"da"==t.api.state.lang||"it"==t.api.state.lang},on:{click:function(e){t.pantry_btn_click()}}},[i("div",{staticClass:"white-space-no"},[t._v(t._s(t.$t("27.my.pantry"))+"\n              "),i("span",{staticClass:"btn-number-span"},[t._v(t._s(t.$api.get_selected_ingredients().length))])])])]),i("div",{staticClass:"d-flex-col"},[i("a",{staticClass:"btn btn-black w-inline-block pantry_foot_btn",class:{grey:0==t.$api.get_selected_ingredients().length},on:{click:function(e){t.see_recipes_click()}}},[i("div",{staticClass:"white-space-no"},[t._v(t._s(t.$t("41.see.recipes")))])])])]),i("transition",{attrs:{"enter-active-class":"animated slideInDown",mode:"out-in",duration:{enter:0,leave:0}}},[t.small_header?i("div",{key:"smallheader",staticClass:"button-group-fixed small-header-kitchen"},[i("div",{staticClass:"head-navigation-fixed"},[i("a",{staticClass:"head-nav-left w-inline-block kitchen_profile",on:{click:function(e){t.$router.push("account")}}},[t.api.state.login_hash?i("img",{attrs:{src:"statics/images/male-user-white.png",alt:""}}):i("img",{attrs:{src:"statics/images/male-user-100.png",alt:""}})]),i("div",{staticClass:"head-nav-center",attrs:{id:"w-node-6aa32991a2ae-2991a2aa"}},[i("div",{staticClass:"search-bar-wrap-fixed w-form"},[i("q-search",{staticClass:"form-control-search-fixed w-input",attrs:{"hide-underline":"",id:"search",placeholder:t.$t("44.add.ingredients"),autocomplete:"off",color:"black"},on:{focus:function(e){t.kwfocus()},blur:function(e){t.kwblur()}},model:{value:t.kitchen_input,callback:function(e){t.kitchen_input=e},expression:"kitchen_input"}},[i("q-autocomplete",{on:{search:t.autoc2,selected:t.add_ingredient_from_autoc}})],1),i("input",{staticClass:"search-button w-button",attrs:{type:"submit",value:"Search"}})],1)]),i("div",{staticClass:"head-nav-right kitchen-az-icon",on:{click:function(e){t.az_sort_toggle()}}},[i("q-icon",{class:{supercook_greenaz:t.api.state.az_sort,azicon:!t.api.state.az_sort},attrs:{name:"sort_by_alpha"}})],1)]),i("div",{staticClass:"small_header_active_filters_kitchen"})]):t._e()]),t.voice_active&&t.$q.platform.is.ios?i("a",{staticClass:"fab-icon-wrap group-fixed w-inline-block secondary-bk",staticStyle:{right:"42%","margin-top":"5px"},on:{click:function(e){t.stop_voice()}}},[i("img",{staticClass:"fab-icon-img",attrs:{src:"statics/images/stopmic.png",alt:""}})]):t._e(),t.small_header?i("a",{staticClass:"fab-icon-wrap group-fixed w-inline-block secondary-bk",on:{click:function(e){t.get_voice_query(t.append=!1)}}},[i("img",{staticClass:"fab-icon-img",attrs:{src:"statics/images/mic-icon-white.png",alt:""}})]):t._e()],1)},a=[];s._withStripped=!0;i("ac4d"),i("8a81"),i("ac6a"),i("7f7f"),i("55dd");var n=i("448a"),o=i.n(n),c=(i("6762"),i("2fdb"),i("2ef0")),r=i.n(c),l=i("96a1"),d={data:function(){return{mymodal:0,loading:!1,az_sort:!1,ingredients:[],kitchen:[],selectOptions:[],left_drawer:0,right_drawer:0,times_left_drawer_closed:0,times_right_drawer_closed:0,results:!1,last_search_request:"",active_tab:"categories",kitchen_input:"",throttled_search:0,leap_data:{},recipes_loading:!1,disable_cuisine:!1,disable_mealtype:!1,title:"Supercook",api:this.$api,add_voice_prompt:!1,voice_append:!1,open_categories:[],voice_active:!1,small_header:!1,text_entry_mode:!1,resolvers:[],add_voice_prompt_resolve:!1,dragged:!1,dragTimeout:0,salt_pepper_confirmed:!1}},methods:{is_selected:function(t){return[this.api.state.ingredients_reactive_counter].concat(o()(this.api.get_selected_ingredients())).includes(t)},account_click:function(){this.$q.platform.is.desktop?this.api.state.desktop_route="account":this.$router.push("account")},confirm_salt_pepper:function(){this.api.persist("sp","1"),this.salt_pepper_confirmed=!0},onDragStart:function(){var t=this;clearTimeout(this.dragTimeout),this.dragged=!1,this.dragTimeout=setTimeout(function(){t.dragged=!0},100)},onDragClick:function(t){this.dragged&&(t.preventDefault(),t.stopPropagation()),this.dragged=!1},suggest_new:function(){var t=this.api.api_domain+"/dyn/suggest?lang="+this.api.state.lang;this.$q.platform.is.cordova?SafariViewController.isAvailable(function(e){e?SafariViewController.show({url:t}):cordova.InAppBrowser.open(t,"_blank","footer=no,location=yes,toolbarcolor=#d8456b,closebuttoncolor=white,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncaption=X        suggest")}):Object(l["a"])(t)},pantry_btn_click:function(){this.$router.push("/ingredients/pantry")},see_recipes_click:function(){this.$router.push("menu")},az_sort_toggle:function(){this.api.state.az_sort=!this.api.state.az_sort,this.api.state.az_sort?this.api.analytics("az sort enabled"):this.api.analytics("az sort disabled")},copy_to_clipboard:function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},copy_ingredients:function(){var t=this.api.get_selected_ingredients();0!=t.length?(t.sort(),this.copy_to_clipboard(t.join("\r\n")),this.api.analytics("copy to clipboard"),this.$q.dialog({title:this.$t("47.success"),message:this.$t("48.your.ingredients.in.clipboard"),ok:{color:"pink",label:this.$t("263.ok"),push:!1}})):this.$q.dialog({title:this.$t("31.woops"),message:this.$t("237.you.have.no.ingredients"),ok:{color:"pink",label:this.$t("263.ok"),push:!1}})},delete_all:function(){var t=this;this.$q.dialog({title:this.$t("46.confirm"),message:this.$t("49.are.you.sure.remove.all"),ok:{color:"pink",label:this.$t("263.ok"),push:!1},cancel:{color:"grey",label:this.$t("264.cancel"),push:!1}}).then(function(){t.api.analytics("remove all ingredients"),t.api.set_these_ingredients([]),t.api.clear_all_filters(),t.api.persist_ingredients(),t.api.remove_all_from_server(),t.$root.$emit("ingredients_cleared"),t.$root.$emit("clear_results")}).catch(function(){})},stop_voice:function(){window.plugins.speechRecognition.stopListening(),this.voice_active=!1},kwfocus:function(){this.$q.platform.is.desktop||(document.querySelector(".button-group-fixed").style.visibility="hidden",document.querySelector(".footer-block").style.visibility="hidden")},kwblur:function(){this.$q.platform.is.desktop||(document.querySelector(".button-group-fixed").style.visibility="visible",document.querySelector(".footer-block").style.visibility="visible")},kw_enter:function(){if(this.kitchen_input=this.kitchen_input.toLowerCase(),this.kitchen_input){var t=this.api.get_selected_ingredients();return t.includes(this.kitchen_input)?(this.$q.notify({message:"".concat(this.kitchen_input," ").concat(this.$t("261.removed")),timeout:1500}),this.api.disable_ingredient(this.kitchen_input),this.api.persist_ingredients(),void(this.kitchen_input="")):this.api.enable_ingredient(this.kitchen_input)?(this.$q.notify({message:"".concat(this.kitchen_input," ").concat(this.$t("262.added")),timeout:500}),this.api.persist_ingredients(),void(this.kitchen_input="")):void this.get_voice_ingredients(this.kitchen_input)}},switch_from_resolve_to_confirm:function(){this.add_voice_prompt_resolve=!1,this.add_voice_prompt=!0},get_category_subset:function(t){var e=this.api.ingredients_of_category(t,this.api.state.az_sort);return this.open_categories.includes(t)?e:e.slice(0,10)},confirm_voice_ingredients:function(){for(var t=0;t<this.api.state.voice_ingredients_to_confirm.length;t++)this.api.enable_ingredient(this.api.state.voice_ingredients_to_confirm[t]);this.api.persist_ingredients(),this.add_voice_prompt=!1},remove_v_ingredient:function(t){for(var e=0;e<this.api.state.voice_ingredients_to_confirm.length;e++)if(this.api.state.voice_ingredients_to_confirm[e]==t)return void this.api.state.voice_ingredients_to_confirm.splice(e,1)},choose_category:function(t){this.open_categories.includes(t)?this.open_categories=this.open_categories.filter(function(e){return e!=t}):this.open_categories.push(t)},selected_in_category:function(t){for(var e=this,i=0;i<this.api.state.ingredients.length;i++)if(this.api.state.ingredients[i].category==t)return this.api.state.ingredients[i].ingredients.filter(function(t){return e.api.state.selected_ingredients.has(t.i)}).length},get_voice_query:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$q.platform.is.cordova?(this.voice_append=e,this.add_voice_prompt=!1,this.api.request_voice_permission().then(function(e){if(e){var i={lang:"en-US",showPopup:!1};i.lang="";var s=t;t.voice_active=!0,window.plugins.speechRecognition.startListening(function(t){s.text_entry_mode=!1,s.get_voice_ingredients(t[0])},function(t){s.voice_active=!1},i)}})):this.$q.dialog({title:this.$t("242.app.only"),message:this.$t("243.voice.mode.only.for.app"),yes:!0,cancel:!0}).then(function(){t.$q.platform.is.ios?Object(l["a"])("https://www.supercook.com/ios"):Object(l["a"])("https://www.supercook.com/android")}).catch(function(){})},ingc:function(t){t.enabled=!t.enabled,this.api.state.results_need_updating=!0,this.api.persist_ingredients(),this.$root.$emit("filter_update"),0==this.api.get_selected_ingredients().length&&this.$root.$emit("clear_results")},ingc2:function(t){this.api.state.selected_ingredients.has(t.i)?this.api.state.selected_ingredients.delete(t.i):this.api.state.selected_ingredients.add(t.i),this.api.state.ingredients_reactive_counter+=1,this.api.state.results_need_updating=!0,this.api.persist_ingredients(),this.$root.$emit("filter_update"),0==this.api.state.selected_ingredients.length&&this.$root.$emit("clear_results")},delete_ingredient:function(t){this.api.unselect_ingredient(t),this.$api.state.results_need_updating=!0,this.api.persist_ingredients()},add_ingredient_from_autoc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e){this.kwblur();var i=t.value;"pink-6"==t.leftColor?(this.api.disable_ingredient(i),this.$q.notify("".concat(i," ").concat(this.$t("261.removed")))):(this.api.enable_ingredient(i),this.$q.notify({message:"".concat(i," ").concat(this.$t("262.added")),timeout:1500})),this.kitchen_input="",this.api.persist_ingredients(),this.$q.platform.is.desktop&&this.$root.$emit("filter_update")}},autoc2:function(t,e){var i=this,s=this.api.get_selected_ingredients();this.$axios.get(this.api.api_domain+"/dyn/iautoc?lang=".concat(this.api.state.lang,"&term=").concat(t)).then(function(t){var a=t.data,n=a.map(function(t){if(s.includes(t.name)||s.includes(t.parent)){var e={label:t.name,value:t.parent,icon:"delete_outline",leftColor:"pink-6",stamp:i.$t("275.remove")};return t.parent!==t.name&&(e.label="".concat(e.label," (").concat(t.parent,")")),e}e={label:t.name,value:t.parent,icon:"add",leftColor:"light-green-5",stamp:i.$t("274.add")};return t.parent!==t.name&&(e.label="".concat(e.label," (").concat(t.parent,")")),e});return e(n)}).catch(function(t){})},autoc:function(t,e){var i=this,s=this.api.search_ingredients(t),a=this.api.get_selected_ingredients(),n=s.map(function(t){return a.includes(t)?{label:t,value:t,icon:"delete_outline",leftColor:"pink-6",stamp:i.$t("275.remove")}:{label:t,value:t,icon:"add",leftColor:"light-green-5",stamp:i.$t("274.add")}});e(n)},resizeHeaderOnScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=200;this.small_header=t>e},flip_resolved_ingredient:function(t){this.api.state.voice_ingredients_to_confirm.includes(t)?this.api.state.voice_ingredients_to_confirm=this.api.state.voice_ingredients_to_confirm.filter(function(e){return e!=t}):this.api.state.voice_ingredients_to_confirm.push(t)},get_voice_ingredients:function(t){var e=this;this.$q.loading.show({message:""}),this.$axios.get(this.api.api_domain+"/dyn/voice_input?lang="+this.api.state.lang+"&q="+t).then(function(t){if(e.$q.loading.hide(),t.data.suggestions.length>0)return e.resolvers=t.data.suggestions,e.add_voice_prompt_resolve=!0,e.voice_active=!1,void(e.api.state.voice_ingredients_to_confirm=t.data.ingredients);var i=t.data.ingredients;if(e.voice_active=!1,0==i.length)return e.api.analytics("dictate no ingredients found-"+e.api.state.lang),void e.$q.dialog({title:e.$t("31.woops"),message:e.$t("32.no.ingredients.recognized")});if(e.voice_append){var s=!0,a=!1,n=void 0;try{for(var o,c=i[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){var r=o.value;-1==e.api.state.voice_ingredients_to_confirm.indexOf(r)&&e.api.state.voice_ingredients_to_confirm.push(r)}}catch(t){a=!0,n=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw n}}}else e.api.analytics("dictate success-"+e.api.state.lang),e.api.state.voice_ingredients_to_confirm=i;if(e.$q.platform.is.desktop){var l=!0,d=!1,p=void 0;try{for(var _,u=i[Symbol.iterator]();!(l=(_=u.next()).done);l=!0){var g=_.value;e.api.enable_ingredient(g)}}catch(t){d=!0,p=t}finally{try{l||null==u.return||u.return()}finally{if(d)throw p}}e.$q.notify({message:"".concat(i.join(", ")," ").concat(e.$t("262.added")),timeout:1500}),e.kitchen_input="",e.$root.$emit("filter_update")}else e.add_voice_prompt=!0})}},computed:{ingredients_for_filter:function(){return r.a.orderBy(r.a.map(this.$api.get_selected_ingredients(),function(t){return r.a.zipObject(["label","value"],[t,t])}),["label"])}},created:function(){window.addEventListener("scroll",this.resizeHeaderOnScroll)},destroyed:function(){window.removeEventListener("scroll",this.resizeHeaderOnScroll)},beforeDestroy:function(){},mounted:function(){this.api.state.app_loaded||this.$router.push("/"),this.salt_pepper_confirmed=this.api.get_persisted("sp")},activated:function(){}},p=d,_=(i("c922"),i("2877")),u=Object(_["a"])(p,s,a,!1,null,null,null);u.options.__file="ingredients2.vue";e["default"]=u.exports},"96a1":function(t,e,i){"use strict";var s=i("a60d");e["a"]=function(t,e){if(s["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var i=window.open(t,"_blank");if(i)return i.focus(),i;e&&e()}},c922:function(t,e,i){"use strict";var s=i("23c4"),a=i.n(s);a.a}}]);