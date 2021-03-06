/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Tools.PseudoLocalizer.VisualSampler Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014-2015 UIZE
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
		The =Uize.Widgets.Tools.PseudoLocalizer.VisualSampler= class implements a visual sampler widget for the =Uize.Widgets.Tools.PseudoLocalizer.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.Tools.PseudoLocalizer.VisualSampler',
	superclass:'Uize.Widgets.VisualSampler.Widget',
	required:'Uize.Widgets.Tools.PseudoLocalizer.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addSample ({
					source:[
						'This is some text that should be pseudo-localized.',
						'',
						'Text may contain <span style="font-weight: bold;">HTML<span> tags, and the tags will not be pseudo-localized.',
						'',
						'Expansion is based on the character count of the pseudo-localizable words, and is not influenced by numbers (123456789.0123456789), or whitespace (        ) or punctuation (!?.,;:&-=[]).'
					].join ('\n')
				});
			},

			set:{
				samplerWidgetClass:Uize.Widgets.Tools.PseudoLocalizer.Widget
			}
		});
	}
});

