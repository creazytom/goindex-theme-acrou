(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8849b3c"],{"2a7a":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"g2-grid-view"},[e("div",{staticClass:"columns is-multiline"},i._l(i.folders,(function(t,a){return e("div",{key:"folder_"+a,staticClass:"column is-one-quarter",on:{click:function(e){return i.go(t)}}},[e("div",{staticClass:"card g2-grid-view-card g2-grid-view-folder"},[e("div",{staticClass:"media"},[e("div",{staticClass:"content"},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":i.getIcon(t.mimeType)}})]),i._v(" "+i._s(t.name)+" ")])])])])})),0),e("div",{staticClass:"columns is-multiline"},i._l(i.files,(function(t,a){return e("div",{key:"file_"+a,staticClass:"column is-one-quarter",on:{click:function(e){return i.go(t,"view")}}},[e("div",{staticClass:"card g2-grid-view-card"},[e("div",{class:"card-image"+(-1!=t.mimeType.indexOf("video")?" g2-grid-view-play":"")},[e("i"),e("figure",{staticClass:"image is-square"},[t.thumbnailLink?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thum(t.thumbnailLink),expression:"thum(file.thumbnailLink)"}],attrs:{alt:t.name}}):i._e()])]),e("div",{staticClass:"media g2-grid-view-file"},[e("div",{staticClass:"content"},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":i.getIcon(t.mimeType)}})]),i._v(" "+i._s(t.name)+" ")])]),e("div",{staticClass:"media g2-grid-view-file",staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"content"},[e("a",{attrs:{href:"iina://weblink?url="+i.window.location.origin+t.path}},[i._v(i._s(t.path))])])])])])})),0)])},n=[],s=(e("4de4"),{name:"GridView",props:{data:{type:Array,default:function(){return[]}},getIcon:{type:Function},go:{type:Function},thum:{type:Function}},data:function(){return{}},computed:{folders:function(){return this.data.filter((function(i){return i.isFolder}))},files:function(){return this.data.filter((function(i){return!i.isFolder}))}},methods:{}}),r=s,c=(e("4fdf"),e("2877")),l=Object(c["a"])(r,a,n,!1,null,"290248c1",null);t["default"]=l.exports},3889:function(i,t,e){},"4fdf":function(i,t,e){"use strict";var a=e("3889"),n=e.n(a);n.a}}]);