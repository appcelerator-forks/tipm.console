


var globalCtx = (function(){ return this; })();

// reset the global console object

globalCtx.console = {};

var reset = '\u001b[0G\u001b[2K\u001b[0G';

/**
 * [log description]
 * @return {[type]} [description]
 */

globalCtx.console.log = function(){
  var args  = Array.prototype.slice.call(arguments,0);
  args.unshift(reset);

  Function.prototype.apply.call(Ti.API.info, console, args);
};

/**
 * [debug description]
 * @return {[type]} [description]
 */

globalCtx.console.debug = function(){
  var args  = Array.prototype.slice.call(arguments,0);
  args.unshift(reset);

  Function.prototype.apply.call(Ti.API.debug, console, args);
};

/**
 * [error description]
 * @return {[type]} [description]
 */

globalCtx.console.error = function(){
  var args  = Array.prototype.slice.call(arguments,0);
  args.unshift(reset);

  Function.prototype.apply.call(Ti.API.error, console, args);
};

/**
 * [trace description]
 * @return {[type]} [description]
 */

globalCtx.console.trace = function(){
  var args  = Array.prototype.slice.call(arguments,0);
  args.unshift(reset);

  Function.prototype.apply.call(Ti.API.trace, console, args);
};

/**
 * [warn description]
 * @return {[type]} [description]
 */

globalCtx.console.warn = function(){
  var args  = Array.prototype.slice.call(arguments,0);
  args.unshift(reset);

  Function.prototype.apply.call(Ti.API.warn, console, args);
};
