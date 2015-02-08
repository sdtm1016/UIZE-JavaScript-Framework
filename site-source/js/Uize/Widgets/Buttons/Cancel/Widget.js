/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.Cancel.Widget Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 5
*/

/*?
	Introduction
		The =Uize.Widgets.Buttons.Cancel.Widget= module implements a widget class.

		*DEVELOPERS:*

		Visual Sampler
			Below is a visual sampler of the =Uize.Widgets.Buttons.Cancel.Widget= class...

			......................................................
			<< widget >>

			widgetClass: Uize.Widgets.Buttons.Cancel.VisualSampler
			......................................................
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.Cancel.Widget',
	superclass:'Uize.Widgets.Button.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			hasLoc:true,

			stateProperties:{
				text:{derived:'loc_label'}
			}
		});
	}
});
