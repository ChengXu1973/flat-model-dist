System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/env",[],(function(e){return{execute:function(){e("DEBUG",!1)}}}));

System.register("chunks:///_virtual/maxrects-packer.mjs",["./rollupPluginModLoBabelHelpers.js"],(function(t){var i,h,e;return{setters:[function(t){i=t.inheritsLoose,h=t.createForOfIteratorHelperLoose,e=t.createClass}],execute:function(){t("PACKING_LOGIC",void 0);var s,r=t("Rectangle",function(){function t(t,i,h,e,s,r){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===e&&(e=0),void 0===s&&(s=!1),void 0===r&&(r=void 0),this.oversized=!1,this._rot=!1,this._allowRotation=void 0,this._dirty=0,this._width=t,this._height=i,this._x=h,this._y=e,this._data={},this._rot=s,this._allowRotation=r}t.Collide=function(t,i){return t.collide(i)},t.Contain=function(t,i){return t.contain(i)};var i=t.prototype;return i.area=function(){return this.width*this.height},i.collide=function(t){return t.x<this.x+this.width&&t.x+t.width>this.x&&t.y<this.y+this.height&&t.y+t.height>this.y},i.contain=function(t){return t.x>=this.x&&t.y>=this.y&&t.x+t.width<=this.x+this.width&&t.y+t.height<=this.y+this.height},i.setDirty=function(t){void 0===t&&(t=!0),this._dirty=t?this._dirty+1:0},e(t,[{key:"width",get:function(){return this._width},set:function(t){t!==this._width&&(this._width=t,this._dirty++)}},{key:"height",get:function(){return this._height},set:function(t){t!==this._height&&(this._height=t,this._dirty++)}},{key:"x",get:function(){return this._x},set:function(t){t!==this._x&&(this._x=t,this._dirty++)}},{key:"y",get:function(){return this._y},set:function(t){t!==this._y&&(this._y=t,this._dirty++)}},{key:"rot",get:function(){return this._rot},set:function(t){if(!1!==this._allowRotation&&this._rot!==t){var i=this.width;this.width=this.height,this.height=i,this._rot=t,this._dirty++}}},{key:"allowRotation",get:function(){return this._allowRotation},set:function(t){this._allowRotation!==t&&(this._allowRotation=t,this._dirty++)}},{key:"data",get:function(){return this._data},set:function(t){null!==t&&t!==this._data&&(this._data=t,"object"==typeof t&&t.hasOwnProperty("allowRotation")&&(this._allowRotation=t.allowRotation),this._dirty++)}},{key:"dirty",get:function(){return this._dirty>0}}]),t}()),o=t("Bin",function(){function t(){this._dirty=0}return t.prototype.setDirty=function(t){if(void 0===t&&(t=!0),this._dirty=t?this._dirty+1:0,!t)for(var i,e=h(this.rects);!(i=e()).done;){var s=i.value;s.setDirty&&s.setDirty(!1)}},e(t,[{key:"dirty",get:function(){return this._dirty>0||this.rects.some((function(t){return t.dirty}))}}]),t}()),n=(t("MaxRectsBin",function(t){function e(i,h,e,o){var a;return void 0===i&&(i=n),void 0===h&&(h=n),void 0===e&&(e=0),void 0===o&&(o={}),(a=t.call(this)||this).maxWidth=i,a.maxHeight=h,a.padding=e,a.freeRects=[],a.rects=[],a.verticalExpand=!1,a.options={smart:!0,pot:!0,square:!0,allowRotation:!1,tag:!1,exclusiveTag:!0,border:0,logic:s.MAX_EDGE},a.options=Object.assign(Object.assign({},a.options),o),a.width=a.options.smart?0:i,a.height=a.options.smart?0:h,a.border=a.options.border?a.options.border:0,a.freeRects.push(new r(a.maxWidth+a.padding-2*a.border,a.maxHeight+a.padding-2*a.border,a.border,a.border)),a.stage=new r(a.width,a.height),a}i(e,t);var o=e.prototype;return o.add=function(){var t,i;if(1===arguments.length){if("object"!=typeof(arguments.length<=0?void 0:arguments[0]))throw new Error("MacrectsBin.add(): Wrong parameters");var h=(i=arguments.length<=0?void 0:arguments[0]).data&&i.data.tag?i.data.tag:i.tag?i.tag:void 0;if(this.options.tag&&this.options.exclusiveTag&&this.tag!==h)return}else{if(t=arguments.length>2?arguments.length<=2?void 0:arguments[2]:null,this.options.tag&&this.options.exclusiveTag){if(t&&this.tag!==t.tag)return;if(!t&&this.tag)return}(i=new r(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])).data=t,i.setDirty(!1)}var e=this.place(i);return e&&this.rects.push(e),e},o.repack=function(){var t=[];this.reset(),this.rects.sort((function(t,i){var h=Math.max(i.width,i.height)-Math.max(t.width,t.height);return 0===h&&t.hash&&i.hash?t.hash>i.hash?-1:1:h}));for(var i,e=h(this.rects);!(i=e()).done;){var s=i.value;this.place(s)||t.push(s)}for(var r=0,o=t;r<o.length;r++){var n=o[r];this.rects.splice(this.rects.indexOf(n),1)}return t.length>0?t:void 0},o.reset=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!1),t&&(this.data&&delete this.data,this.tag&&delete this.tag,this.rects=[],i&&(this.options={smart:!0,pot:!0,square:!0,allowRotation:!1,tag:!1,border:0})),this.width=this.options.smart?0:this.maxWidth,this.height=this.options.smart?0:this.maxHeight,this.border=this.options.border?this.options.border:0,this.freeRects=[new r(this.maxWidth+this.padding-2*this.border,this.maxHeight+this.padding-2*this.border,this.border,this.border)],this.stage=new r(this.width,this.height),this._dirty=0},o.clone=function(){for(var t,i=new e(this.maxWidth,this.maxHeight,this.padding,this.options),s=h(this.rects);!(t=s()).done;){var r=t.value;i.add(r)}return i},o.place=function(t){var i=t.data&&t.data.tag?t.data.tag:t.tag?t.tag:void 0;if(!this.options.tag||!this.options.exclusiveTag||this.tag===i){var h,e;if(e=t.hasOwnProperty("_allowRotation")&&void 0!==t.allowRotation?t.allowRotation:this.options.allowRotation,h=this.findNode(t.width+this.padding,t.height+this.padding,e)){this.updateBinSize(h);for(var s=this.freeRects.length,o=0;o<s;)this.splitNode(this.freeRects[o],h)&&(this.freeRects.splice(o,1),s--,o--),o++;return this.pruneFreeList(),this.verticalExpand=this.width>this.height,t.x=h.x,t.y=h.y,void 0===t.rot&&(t.rot=!1),t.rot=h.rot?!t.rot:t.rot,this._dirty++,t}if(this.verticalExpand){if(this.updateBinSize(new r(t.width+this.padding,t.height+this.padding,this.border,this.height+this.padding-this.border))||this.updateBinSize(new r(t.width+this.padding,t.height+this.padding,this.width+this.padding-this.border,this.border)))return this.place(t)}else if(this.updateBinSize(new r(t.width+this.padding,t.height+this.padding,this.width+this.padding-this.border,this.border))||this.updateBinSize(new r(t.width+this.padding,t.height+this.padding,this.border,this.height+this.padding-this.border)))return this.place(t)}},o.findNode=function(t,i,h){var e,o,n,a=Number.MAX_VALUE;for(var d in this.freeRects)(o=this.freeRects[d]).width>=t&&o.height>=i&&(e=this.options.logic===s.MAX_AREA?o.width*o.height-t*i:Math.min(o.width-t,o.height-i))<a&&(n=new r(t,i,o.x,o.y),a=e),h&&o.width>=i&&o.height>=t&&(e=this.options.logic===s.MAX_AREA?o.width*o.height-i*t:Math.min(o.height-t,o.width-i))<a&&(n=new r(i,t,o.x,o.y,!0),a=e);return n},o.splitNode=function(t,i){if(!t.collide(i))return!1;if(i.x<t.x+t.width&&i.x+i.width>t.x){if(i.y>t.y&&i.y<t.y+t.height){var h=new r(t.width,i.y-t.y,t.x,t.y);this.freeRects.push(h)}if(i.y+i.height<t.y+t.height){var e=new r(t.width,t.y+t.height-(i.y+i.height),t.x,i.y+i.height);this.freeRects.push(e)}}if(i.y<t.y+t.height&&i.y+i.height>t.y){if(i.x>t.x&&i.x<t.x+t.width){var s=new r(i.x-t.x,t.height,t.x,t.y);this.freeRects.push(s)}if(i.x+i.width<t.x+t.width){var o=new r(t.x+t.width-(i.x+i.width),t.height,i.x+i.width,t.y);this.freeRects.push(o)}}return!0},o.pruneFreeList=function(){for(var t=0,i=0,h=this.freeRects.length;t<h;){i=t+1;for(var e=this.freeRects[t];i<h;){var s=this.freeRects[i];if(s.contain(e)){this.freeRects.splice(t,1),t--,h--;break}e.contain(s)&&(this.freeRects.splice(i,1),i--,h--),i++}t++}},o.updateBinSize=function(t){if(!this.options.smart)return!1;if(this.stage.contain(t))return!1;var i=Math.max(this.width,t.x+t.width-this.padding+this.border),h=Math.max(this.height,t.y+t.height-this.padding+this.border);if(this.options.allowRotation){var e=Math.max(this.width,t.x+t.height-this.padding+this.border),s=Math.max(this.height,t.y+t.width-this.padding+this.border);e*s<i*h&&(i=e,h=s)}return this.options.pot&&(i=Math.pow(2,Math.ceil(Math.log(i)*Math.LOG2E)),h=Math.pow(2,Math.ceil(Math.log(h)*Math.LOG2E))),this.options.square&&(i=h=Math.max(i,h)),!(i>this.maxWidth+this.padding||h>this.maxHeight+this.padding)&&(this.expandFreeRects(i+this.padding,h+this.padding),this.width=this.stage.width=i,this.height=this.stage.height=h,!0)},o.expandFreeRects=function(t,i){var h=this;this.freeRects.forEach((function(e,s){e.x+e.width>=Math.min(h.width+h.padding-h.border,t)&&(e.width=t-e.x-h.border),e.y+e.height>=Math.min(h.height+h.padding-h.border,i)&&(e.height=i-e.y-h.border)}),this),this.freeRects.push(new r(t-this.width-this.padding,i-2*this.border,this.width+this.padding-this.border,this.border)),this.freeRects.push(new r(t-2*this.border,i-this.height-this.padding,this.border,this.height+this.padding-this.border)),this.freeRects=this.freeRects.filter((function(t){return!(t.width<=0||t.height<=0||t.x<h.border||t.y<h.border)})),this.pruneFreeList()},e}(o)),4096);!function(t){t[t.MAX_AREA=0]="MAX_AREA",t[t.MAX_EDGE=1]="MAX_EDGE"}(s||(s=t("PACKING_LOGIC",{})))}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a(i.key),i)}}function t(r,i){return(t=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e}))(r,i)}function i(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function o(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function a(e){var r=o(e,"string");return"symbol"==typeof r?r:String(r)}e({applyDecoratedDescriptor:function(e,r,t,i,n){var o={};Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},arrayLikeToArray:n,assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},createClass:function(e,t,i){t&&r(e.prototype,t);i&&r(e,i);return Object.defineProperty(e,"prototype",{writable:!1}),e},createForOfIteratorHelperLoose:function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)},initializerDefineProperty:function(e,r,t,i){if(!t)return;Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})},setPrototypeOf:t,toPrimitive:o,toPropertyKey:a,unsupportedIterableToArray:i})}}}));

} }; });