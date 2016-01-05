'use strict';

// MODULES //

var mustache = require( 'mustache' );
var validate = require( './validate.js' );


// TEMPLATES //

var URL = 'https://github.com/{{owner}}/{{repo}}/issues';
var IMAGE = 'https://img.shields.io/github/issues{{#raw}}-raw{{/raw}}/{{owner}}/{{repo}}.{{format}}?style={{style}}';

mustache.parse( URL );
mustache.parse( IMAGE );


// URLS //

/**
* FUNCTION: urls( options )
*	Creates Shields.io badge URLs.
*
* @param {Object} options - function options
* @param {String} options.owner - repository owner
* @param {String} options.repo - repository name
* @param {Boolean} [options.raw=false] - boolean indicating whether to return "raw" or decorated badge links
* @param {String} [options.style="flat"] - badge style
* @param {String} [options.format="svg"] - badge format
* @returns {Object}
*/
function urls( options ) {
	var opts;
	var out;
	var err;

	opts = {};
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	opts.raw = opts.raw || false;
	opts.style = opts.style || 'flat';
	opts.format = opts.format || 'svg';

	out = {};
	out.image = mustache.render( IMAGE, opts );
	out.url = mustache.render( URL, opts );

	return out;
} // end FUNCTION urls()


// EXPORTS //

module.exports = urls;
