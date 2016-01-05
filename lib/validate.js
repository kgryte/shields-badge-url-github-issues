'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );
var isBoolean = require( 'validate.io-boolean-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} options.owner - repository owner
* @param {String} options.repo - repository name
* @param {Boolean} [options.raw] - boolean indicating whether to return "raw" or decorated badge links
* @param {String} [options.style] - badge style
* @param {String} [options.format] - badge format
* @returns {Error|Null} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	opts.owner = options.owner;
	if ( !isString( opts.owner ) ) {
		return new TypeError( 'invalid option. Owner option must be a string. Option: `' + opts.owner + '`.' );
	}
	opts.repo = options.repo;
	if ( !isString( opts.repo ) ) {
		return new TypeError( 'invalid option. Repo option must be a string. Option: `' + opts.repo + '`.' );
	}
	if ( options.hasOwnProperty( 'raw' ) ) {
		opts.raw = options.raw;
		if ( !isBoolean( opts.raw ) ) {
			return new TypeError( 'invalid option. Raw option must be a boolean. Option: `' + opts.raw + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'style' ) ) {
		opts.style = options.style;
		if ( !isString( opts.style ) ) {
			return new TypeError( 'invalid option. Style option must be a string. Option: `' + opts.style + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'format' ) ) {
		opts.format = options.format;
		if ( !isString( opts.format ) ) {
			return new TypeError( 'invalid option. Format option must be a string. Option: `' + opts.format + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
