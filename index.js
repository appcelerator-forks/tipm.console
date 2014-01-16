


var globalCtx = (function(){ return this; })();

// reset the global console object

globalCtx.console = {};

var reset = '\u001b[0G\u001b[2K\u001b[0G';

/**
 * [log description]
 * @return {[type]} [description]
 */

globalCtx.console.log = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(Ti.API.info, console, args);
};

/**
 * [debug description]
 * @return {[type]} [description]
 */

globalCtx.console.debug = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(Ti.API.debug, console, args);
};

/**
 * [error description]
 * @return {[type]} [description]
 */

globalCtx.console.error = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(Ti.API.error, console, args);
};

/**
 * [trace description]
 * @return {[type]} [description]
 */

globalCtx.console.trace = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(Ti.API.trace, console, args);
};

/**
 * [warn description]
 * @return {[type]} [description]
 */

globalCtx.console.warn = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(Ti.API.warn, console, args);
};

/**
 * [unFormat description]
 * @param  {[type]} rawArgs [description]
 * @return {[type]}         [description]
 */

function unFormat(rawArgs){
  var args  = Array.prototype.slice.call(rawArgs,0);
  args[0] = reset + (args[0] || '').toString().split(/(?:\r\n|\n|\r)/).join('\n' + reset);
  return args;
}
