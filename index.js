


var globalCtx = (function(){ return this; })();

// reset the global console object

var ticonsole = globalCtx.console;

globalCtx.console = {};

// ascii line reset

var reset = '\u001b[0G\u001b[2K\u001b[0G';

/**
 * [log description]
 * @return {[type]} [description]
 */

globalCtx.console.log = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(ticonsole.info, console, args);
};

/**
 * [debug description]
 * @return {[type]} [description]
 */

globalCtx.console.debug = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(ticonsole.debug, console, args);
};

/**
 * [error description]
 * @return {[type]} [description]
 */

globalCtx.console.error = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(ticonsole.error, console, args);
};

/**
 * [trace description]
 * @return {[type]} [description]
 */

globalCtx.console.trace = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(ticonsole.trace, console, args);
};

/**
 * [warn description]
 * @return {[type]} [description]
 */

globalCtx.console.warn = function(){
  var args = unFormat(arguments);
  Function.prototype.apply.call(ticonsole.warn, console, args);
};

/**
 * [unFormat description]
 * @param  {[type]} rawArgs [description]
 * @return {[type]}         [description]
 */

function unFormat(rawArgs){
  var delim = '<<DELIM>>';
  var args  = (Array.prototype.slice.call(rawArgs,0)).join(delim);

  args = (reset + args)
    .split(/(?:\r\n|\n|\r)/)
    .join('\n' + reset)
    .split(delim);
  return args;
}
