/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Build.FileBuilders.CompiledCssModules Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 5
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Build.FileBuilders.CompiledCssModules= module defines a file builder for CSS modules compiled from built =.css= files.

		*DEVELOPERS:* `Chris van Rensburg`

		Functions defined in the file builder are called as instance methods on an instance of a subclass of the =Uize.Services.FileBuilderAdapter= class, so the functions can access instance methods implemented in this class.
*/

Uize.module ({
	name:'Uize.Build.FileBuilders.CompiledCssModules',
	required:[
		'Uize.Json',
		'Uize.Build.Util'
	],
	builder:function () {
		return {
			description:'Compiled CSS modules, generated from built .css files',
			urlMatcher:function (_urlParts) {
				var _pathname = _urlParts.pathname;
				return (
					_urlParts.fileType == 'js' &&
					this.isTempUrl (_pathname) &&
					this.fileExists ({path:this.sourceUrlFromTempUrl (_pathname).replace (/\.js$/,'.css.source')})
				);
			},
			builderInputs:function (_urlParts) {
				return {cssBuilt:this.builtUrlFromTempUrl (_urlParts.pathname).replace (/\.js$/,'.css')};
			},
			builder:function (_inputs) {
				var _cssBuilt = _inputs.cssBuilt;

				return Uize.Build.Util.moduleAsText ({
					name:Uize.Build.Util.moduleNameFromModulePath (
						_cssBuilt.slice (this.params.moduleFolderBuiltPath.length + 1).replace (/\.css$/i,'')
					),
					superclass:'Uize.Node.CssModule',
					builder:[
						'function (_superclass) {',
						'	\'use strict\';',
						'',
						'	return _superclass.subclass ({',
						'		staticProperties:{',
						'			css:',
						'				' + Uize.Json.to (this.readFile ({path:_cssBuilt})),
						'		}',
						'	});',
						'}'
					].join ('\n')
				});
			}
		};
	}
});
