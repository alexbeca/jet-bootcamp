/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore"],function(a,g){(function(){var b="oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "),c={"right-top":"oj-right oj-top","right-middle":"oj-right oj-middle","right-bottom":"oj-right oj-bottom","left-top":"oj-left oj-top","left-middle":"oj-left oj-middle","left-bottom":"oj-left oj-bottom","center-top":"oj-center oj-top","center-middle":"oj-left oj-middle","center-bottom":"oj-center oj-bottom"};a.Pa("oj.ojPopup",g.oj.baseComponent,
{widgetEventPrefix:"oj",options:{autoDismiss:"focusLoss",chrome:"default",initialFocus:"auto",position:{my:"start top",at:"start bottom",of:"",collision:"flip"},tail:"none",modality:"modeless",role:"tooltip",beforeOpen:null,open:null,beforeClose:null,close:null,focus:null},_ComponentCreate:function(){this._super();var a;this.pe?a=g(this.pe):(a=g("\x3cdiv\x3e"),this.element.after(a));this.lg=a.hide().addClass("oj-popup").attr("aria-hidden","true");a.addClass("oj-component");var b=g("\x3cdiv\x3e").addClass("oj-popup-content");
b.attr("role","presentation");b.appendTo(a);this.element.appendTo(b);this.element.show();this.G5();this.xca();this.VE=g.proxy(this.WE,this)},_destroy:function(){this.isOpen()&&this.iv();this.d6();delete this.VE;delete this.wn;a.C.unwrap(this.element,this.lg);this.element.hide();var b=this.vs;isNaN(b)||(delete this.vs,window.clearTimeout(b));this.e6();this._super()},widget:function(){return this.lg},open:function(b,c){if(this.isOpen()&&(this.close(),this.isOpen()))return;this.rDa(b);var f=this.lg;
b=this.Ld;a.cb.jm(f.attr("id"))&&f.attr("id",this.HJ("wrapper"));if(!1!==this._trigger("beforeOpen")){this.Mca(c);var g=this.options;this.kW(g.autoDismiss);this.Qoa();f.attr("role",g.role);c=g.position;var k="rtl"===this.nd();c=a.Gd.ql(c,k);var k="oj-popup-layer",l=g.tail;"none"!==l&&(k+=" "+["oj-popup-tail",l].join("-"));l={};l[a.U.sb.Kh]=f;l[a.U.sb.sB]=b;l[a.U.sb.wB]=c;l[a.U.sb.xu]=this.Ty();l[a.U.sb.Sr]=k;l[a.U.sb.Ak]=g.modality;a.U.Qe().open(l);this._trigger("open");this.NU();this.tya();this._on(f,
{keydown:this.mz,keyup:this.mz});b&&0<b.length&&this._on(b,{keydown:this.mz,keyup:this.mz})}},close:function(){if(this.isOpen()&&(!1!==this._trigger("beforeClose")||this.vD)){this.vCa();var b=this.Ld,c=this.lg;this._off(c,"keydown keyup");b&&0<b.length&&this._off(b,"keydown keyup");this.e6();b={};b[a.U.sb.Kh]=c;a.U.Qe().close(b);this.KBa();this.kW();delete this.Ld;c=this.options.position;c._ofo&&(delete c._ofo,delete c.of);this._trigger("close")}},isOpen:function(){return this.lg.is(":visible")},
refresh:function(){this._super();this.isOpen()&&this.Rba();var b=this.lg;a.U.Qe().jO(b,a.U.Fd.Yp)},_setOption:function(b,c){var f=this.options;switch(b){case "tail":c!==f.tail&&this.EDa(c);break;case "chrome":c!==f.chrome&&this.xca(c);break;case "position":this.Mca(c);this.refresh();return;case "autoDismiss":this.isOpen()&&c!==f.autoDismiss&&this.kW(c);break;case "modality":this.isOpen()&&(f={},f[a.U.sb.Kh]=this.lg,f[a.U.sb.Ak]=c,a.U.Qe().Zz(f))}this._superApply(arguments)},rMa:function(){return"oj-popup"},
EDa:function(a){this.d6();this.G5(a);this.Rba()},G5:function(b){b=b?b:this.options.tail;if("none"!==b){b=["oj-popup-tail",b].join("-");var c=g("\x3cdiv\x3e").hide();c.addClass("oj-popup-tail").addClass(b);c.attr("role","presentation");this.Fda=c.attr("id",this.HJ("tail")).attr("id");var f=this.lg;c.appendTo(f);f.addClass(b);this.isOpen()&&(c={},c[a.U.sb.Kh]=f,c[a.U.sb.Sr]="oj-popup-layer "+b,a.U.Qe().Zz(c))}},E8:function(){var a=this.Fda;return a?g(document.getElementById(a)):null},d6:function(){var b=
this.E8();b&&b.remove();delete this.Fda;b=this.lg;b.removeClass(["oj-popup-tail",this.options.tail].join("-"));if(this.isOpen()){var c={};c[a.U.sb.Kh]=b;c[a.U.sb.Sr]="oj-popup-layer";a.U.Qe().Zz(c)}},xca:function(a){a=a?a:this.options.chrome;var b=this.lg;"default"===a&&b.hasClass("oj-popup-no-chrome")?b.removeClass("oj-popup-no-chrome"):"none"!==a||b.hasClass("oj-popup-no-chrome")||b.addClass("oj-popup-no-chrome")},rDa:function(b){b?"string"===g.type(b)?b=g(b):1===b.nodeType&&(b=g(b)):b=g(document.activeElement);
if(b instanceof jQuery&&1<b.length)for(var c=this.lg,f=0;f<b.length;f++){var h=b[0];if(!a.C.It(c[0],h)){b=g(h);break}}else if(!(b instanceof jQuery)||b instanceof jQuery&&0===b.length)b=g(document.activeElement);this.Ld=b},Mca:function(a){var b=this.options;a&&(b.position=g.extend(b[a],a));a=b.position;b=this.VE;g.isFunction(a.using)&&a.using!==b&&(a.origUsing=a.using);a.using=b;b=this.Ld;a.of||(a.of=b,a._ofo=!0)},WE:function(d,e){var f=e.element.element;if(d.top!==f.css("top")||d.left!==f.css("left")){var h=
this.E8();if(h){h.hide();for(var k=0;k<b.length;k++)h.removeClass(b[k]),f.removeClass(b[k]);h.removeAttr("style");if(e.target&&0===e.target.height&&0===e.target.width&&(k="rtl"===this.nd(),k=a.Gd.ql(this.options.position,k).my,!a.cb.jm(k))){var k=k.split(" "),l="center"===k[0]?k[0]:e.horizontal,m="middle";1<k.length&&(m="center"===k[1]?"middle":k[1]);e.horizontal=l;e.vertical=m}k=c[[e.horizontal,e.vertical].join("-")];h.addClass(k);f.addClass(k);h.show();"left"===e.horizontal?(k=h.outerWidth(),k-=
k+a.C.br(h.css("left")),d.left+=k-2):"right"===e.horizontal&&(k=h.outerWidth(),k-=k+a.C.br(h.css("right")),d.left-=k-2);"top"===e.vertical?(k=h.outerHeight(),k-=k+a.C.br(h.css(e.vertical)),d.top+=k-2):"bottom"===e.vertical&&(k=h.outerHeight(),k-=k+a.C.br(h.css(e.vertical)),d.top-=k-2);f.css(d);"center"===e.horizontal&&"middle"!==e.vertical?(f=f.width(),f=Math.round((f/2-h.outerWidth()/2)/f*100),h.css({left:f+"%"})):"middle"===e.vertical&&(f=f.height(),f=Math.round((f/2-h.outerHeight()/2)/f*100),h.css({top:f+
"%"}))}else f.css(d);h=this.options;(f=h.position.origUsing)&&f(d,e);"focusLoss"===h.autoDismiss&&a.Gd.ZY(e)&&(this.FU=!0,this.vs=this._delay(g.proxy(this.iv,this),1))}},Rba:function(){var b=this.lg,c=this.options.position,f="rtl"===this.nd();b.position(a.Gd.ql(c,f))},NU:function(b){var c=this.msa();b&&"none"===c&&(c="popup");if("firstFocusable"===c){b=this.element.find(":focusable");for(var f,g=0;g<b.length;g++)if(a.oe.AA(b[g])){f=b[g];break}f?(f.focus(),this._trigger("focus")):c="popup"}"popup"===
c&&(c=this.lg,c.attr("tabindex","-1"),c.focus(),this._trigger("focus"))},msa:function(){var b=this.options,c=b.initialFocus;"auto"===c&&(c="modal"===b.modality?a.C.hf()?"popup":"firstFocusable":"none");return c},kK:function(b,c){b||(b=document.activeElement);if(!b)return!1;var f=this.lg;c&&(f=f.parent());return a.C.It(f[0],b)},s$:function(b){b||(b=document.activeElement);return a.C.It(this.Ld[0],b)},vCa:function(){this.FU?delete this.FU:this.kK(null,!0)&&this.Ld.focus()},mz:function(a){if(!a.isDefaultPrevented()){var b=
a.type,c=a.target;if("keyup"===b&&a.keyCode===g.ui.keyCode.ESCAPE&&(this.kK(c)||this.s$(c)))a.preventDefault(),this.close();else if("keydown"===b&&117===a.keyCode)this.kK(c)?(c=this.options,"modeless"===c.modality?(a.preventDefault(),a=this.Ld,a.focus()):this.close()):this.s$(c)&&(a.preventDefault(),this.NU(!0));else if("keydown"===b&&a.keyCode===g.ui.keyCode.TAB&&this.kK(c)){var h=this.element.find(":tabbable");if(0<h.length){var b=h[0],h=h[h.length-1],k=this.lg;b!==c&&k[0]!==c||!a.shiftKey?h!==
c||a.shiftKey||(a.preventDefault(),h===b?(k.attr("tabindex","-1"),k.focus()):g(b).focus()):(a.preventDefault(),b===h&&b===c?(k.attr("tabindex","-1"),k.focus()):g(h).focus())}else a.preventDefault(),c=this.options,"modeless"===c.modality?(a=this.Ld,a.focus()):this.close()}}},kW:function(b){var c=this.W6,f=this.Ty();c&&(delete f[a.U.Fd.Gx],delete this.W6);"focusLoss"===b&&(c=this.W6=g.proxy(this.rsa,this),f[a.U.Fd.Gx]=c);this.isOpen()&&(b={},b[a.U.sb.Kh]=this.lg,b[a.U.sb.xu]=f,a.U.Qe().Zz(b))},rsa:function(b){var c=
this.Ld,f=this.lg.parent(),g=b.target,k=this.WI;if(k&&(k=k.getLink())&&a.C.It(k[0],g))return;if(!a.C.It(c[0],g)&&!a.C.It(f[0],g)){if(a.oe.AA(g)){if("mousedown"===b.type||"touchstart"===b.type)return;this.FU=!0}this.close()}},Qoa:function(){var a=this.Ld,b=this.lg.attr("id"),c=a.attr("aria-describedby"),c=c?c.split(/\s+/):[];c.push(b);c=g.trim(c.join(" "));a.attr("aria-describedby",c)},KBa:function(){var a=this.Ld,b=this.lg.attr("id"),c=a.attr("aria-describedby"),c=c?c.split(/\s+/):[],b=g.inArray(b,
c);-1!==b&&c.splice(b,1);(c=g.trim(c.join(" ")))?a.attr("aria-describedby",c):a.removeAttr("aria-describedby")},tya:function(){var b=a.Xa.Gw().os===a.Xa.Km.TO,c=this.eV;c||(c=this.eV=new a.Dg);var f;f=b?this.F("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNoneTouch":"ariaLiveRegionInitialFocusFirstFocusableTouch"):this.F("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNone":"ariaLiveRegionInitialFocusFirstFocusable");c.xFa(f);if(b){if(!this.WI){var c=this.HJ("focusSkipLink"),
h=this.Ld,b=g.proxy(this.NU,this,!0);f=this.F("ariaFocusSkipLink");this.WI=new a.Cl(h,f,b,c)}this.QR||(c=this.HJ("closeSkipLink"),h=this.element,b=g.proxy(this.iv,this),f=this.F("ariaCloseSkipLink"),this.QR=new a.Cl(h,f,b,c))}},e6:function(){var a=this.eV;a&&(a.destroy(),delete this.eV);if(a=this.WI)a.destroy(),delete this.WI;if(a=this.QR)a.destroy(),delete this.QR},HJ:function(b){var c=this.element.attr("id");a.cb.jm(c)&&(c=this.uuid);return[c,b].join("_")},rw:function(){this.element.remove()},Ty:function(){if(!this.wn){var b=
this.wn={};b[a.U.Fd.Hx]=g.proxy(this.iv,this);b[a.U.Fd.Ix]=g.proxy(this.rw,this);b[a.U.Fd.Yp]=g.proxy(this.refresh,this)}return this.wn},iv:function(){this.vD=!0;this.close();delete this.vD}});a.Components.Op({ojPopup:{modality:a.Components.Sf(function(){return(a.md.Bf("oj-popup-option-defaults")||{}).modality})}})})();a.Components.Wa("ojPopup","baseComponent",{properties:{autoDismiss:{type:"string"},chrome:{type:"string"},initialFocus:{type:"string"},modality:{type:"string"},widget:{},position:{type:"Object"},
role:{type:"string"},tail:{type:"string"}},methods:{close:{},isOpen:{},open:{},refresh:{}},extension:{_hasWrapper:!0,_innerElement:"div",_widgetName:"ojPopup"}});a.Components.register("oj-popup",a.Components.getMetadata("ojPopup"))});