!function(a){"use strict";function b(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a){this.options=b({},this.options),b(this.options,a),this._init()}var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},e=d['WebkitTransition'];c.prototype.options={elementId:"svg"},c.prototype._init=function(){this.svg=document.getElementById(this.options.elementId),this.paths=this.svg.querySelectorAll("path"),this._initAnimation()},c.prototype._initAnimation=function(){for(var a=0;a<this.paths.length;a++){var b=this.paths[a],c=b.getTotalLength();b.style.fillOpacity=0,b.style.strokeOpacity=1,b.style.transition=b.style.WebkitTransition="none",b.style.strokeDasharray=c+" "+c,b.style.strokeDashoffset=c,b.getBoundingClientRect(),b.style.transition=b.style.WebkitTransition="stroke-dashoffset 4s ease-in-out",b.style.strokeDashoffset=0,this._fillPath(b)}},c.prototype._fillPath=function(a){a.addEventListener(e,function(){a.style.transition=a.style.WebkitTransition="none",a.style.transition=a.style.WebkitTransition="fill-opacity 1s ease-in-out, stroke-opacity 1s ease-in-out",a.style.fillOpacity=1,a.style.strokeOpacity=0})},c.prototype.replay=function(){this._initAnimation()},a.DrawFillSVG=c}(window); var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=document.documentElement,b=window,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.6",init:function(a,d,e){return this._wdw=a===b,this._target=a,this._tween=e,"object"!=typeof d&&(d={y:d}),this.vars=d,this._autoKill=d.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=d.x?(this._addTween(this,"x",this.x,"max"===d.x?c(a,"x"):d.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=d.y?(this._addTween(this,"y",this.y,"max"===d.y?c(a,"y"):d.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>7||-7>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>7||-7>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),e=d.prototype;d.max=c,e.getX=function(){return this._wdw?null!=b.pageXOffset?b.pageXOffset:null!=a.scrollLeft?a.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},e.getY=function(){return this._wdw?null!=b.pageYOffset?b.pageYOffset:null!=a.scrollTop?a.scrollTop:document.body.scrollTop:this._target.scrollTop},e._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();