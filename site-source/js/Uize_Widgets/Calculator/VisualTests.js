/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Calculator.VisualTests Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.Calculator.VisualTests= class implements a set of visual tests for the =Uize.Widgets.Calculator.Widget= class.

		*DEVELOPERS:* 
*/

Uize.module ({
	name:'Uize.Widgets.Calculator.VisualTests',
	superclass:'Uize.Widgets.VisualTests.Widget',
	required:[
		'Uize.Widgets.Calculator.Widget',
		'Uize.Widgets.CssUtil'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateCombinationTestCases ({
					size:Uize.keys (Uize.Widgets.CssUtil.sizes)
				});
			},

			staticProperties:{
				widgetClass:Uize.Widgets.Calculator.Widget
			}
		});
	}
});
