/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.Util.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Util',required:['Uize.Wsh','Uize.Url','Uize.Template','Uize.Data.Simple','Uize.String','Uize.String.Lines','Uize.Json','Uize.Array.Sort'],builder:function(){var _a=function(){};var _b={};_a.getHtmlFilesInfo=function(_c,_d){var _e=[];if(!_d)_d=Uize.returnX;for(var _f= -1,_g=Uize.Wsh.getFiles(_c),_h=_g.length;++_f<_h;){var _i=_g[_f],_j=Uize.Url.from(_i).file;if(/\.html$/i.test(_j)&&_j.charAt(0)!='~'){var _k=Uize.Wsh.readFile(_i),_l=_k.match(/<meta name="keywords" content="(.*?)"\/>/),_m=_k.match(/<meta name="description" content="(.*?)"\/>/),_n=_k.match(/<link rel="image_src" href="(.*?)"\/>/);_e.push({path:_c+'/'+_j,title:_d(_k.match(/<title>(.*?)<\/title>/)[1]),keywords:_l?_l[1]:'',description:_m?_m[1]:'',imageSrc:_n?Uize.Url.toAbsolute(_c,_n[1]):''});}}Uize.Array.Sort.sortBy(_e,'value.title.toLowerCase ()');return _e;};_a.readSimpleDataFile=function(_o){return Uize.Data.Simple.parse({simple:Uize.Wsh.readFile(_o),collapseChildren:true});};_a.compileJstFile=function(_p){
var _q=_b[_p];if(!_q){if(!Uize.Wsh.fileExists(_p))return;_q=_b[_p]=Uize.Template.compile(Uize.Wsh.readFile(_p),{result:'full'});Uize.module({required:_q.required});}return _q.templateFunction;};_a.processJstFile=function(_p,_r){var _q=_a.compileJstFile(_p);_q&&Uize.Wsh.writeFile({path:_p.replace(/\.jst$/,''),text:_q(_r)});};_a.runScripts=function(_s){var _t;if(!Uize.isArray(_s))_s=[_s];for(var _u= -1,_v=_s.length,_w=new ActiveXObject('WScript.Shell'),_x;++_u<_v&& !_t;)if(_x=_w.Run('WScript '+_s[_u],0,true))_t={script:_s[_u],errorCode:_x};return _t;};_a.runUnitTests=function(_y){if(typeof _y=='string'){Uize.module({required:_y,builder:function(){_a.runUnitTests(eval(_y))}});}else{var _z=new _y,_A=[];_z.wire({Start:function(_B){_A.push(Uize.String.repeat('\t',_B.source.getDepth())+_B.source.get('title'));},Done:function(_B){var _C=_B.source,_D=_C.get('reasonForFailure');_A.push(Uize.String.repeat('\t',_C.getDepth()+1)+(_C.get('result')?('PASSED!!! (duration: '+_C.get('duration')+'ms)')
:('*** FAILED *** '+(_D||''))));_D&&_A.push('','',_C.getSynopsis());if(_C==_z|| !_C.get('result')){(WScript.Arguments.Count()&&WScript.Arguments.Item(0)=='silent')||alert(_C.getSynopsis());Uize.Wsh.writeFile({path:WScript.ScriptName.replace(/\.js$/,'.log'),text:_A.join('\n')});_C.get('result')||WScript.Quit(1);}}});_z.run();}};_a.writeDataModule=function(_E,_F,_G){Uize.Wsh.writeFile({path:_E+'\\'+_F+'.js',text:'Uize.module ({\n'+'\tname:\''+_F+'\',\n'+'\tbuilder:function () {\n'+'\t\treturn function () {\n'+'\t\t\treturn '+Uize.String.Lines.indent(Uize.Json.to(_G),3,'\t',false)+';\n'+'\t\t};\n'+'\t}\n'+'});\n'});};return _a;}});