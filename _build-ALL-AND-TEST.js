/*** boilerplate setup code for WSH build scripts ***/
	var _setupFile = new ActiveXObject ('Scripting.FileSystemObject').OpenTextFile ('_build.js',1);
	eval (_setupFile.ReadAll ()) ();
	_setupFile.Close ();

Uize.module ({
	required:'Uize.Build.Util',
	builder:function () {
		var _buildError = Uize.Build.Util.runScripts (
			env.buildSequence.concat ([
				'_Uize.Build.RunUnitTests-source.js silent',
				'_Uize.Build.RunUnitTests-scrunched.js silent'
			])
		);
		(WScript.Arguments.Count () && WScript.Arguments.Item (0) == 'silent') ||
			alert (
				_buildError
					? ('FAILED IN THE FOLLOWING SCRIPT:\n\n' + _buildError.script)
					: 'ALL BUILT AND ALL TESTED!!!'
			)
		;
		_buildError && WScript.Quit (1);
	}
});

