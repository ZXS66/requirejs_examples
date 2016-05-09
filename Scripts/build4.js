// https://github.com/Microsoft/TypeScript/issues/3538
//    typescript does not yet support conditional compilation and dead code removal
//    but if we concat and uglify all/some javascript files into one file r.js will
//    allow for static comiple options (has(somevalue) replaced by true or false)
//    and the uglify.js will remove dead code (functions that are not called and if(true) blocks


/*


Since has is not used (all has calles will be replaced with either true or false) in code 
But code still requires has and the js file is still loaded.
So we will replace has with an empty dummy called emptyhas.js
And include this in the output so has does not exist anymore.


*/
({
	baseUrl:".",//execute r.js -o build1.js in Scripts directory (for Windows use r.js.cmd)
	optimize:"none",
	paths: {
		has:"3rd/emptyhas",
		jquery:"3rd/jQuery1.10.2"
	},
	excludeShallow : [
		"jquery"//excliding this one will cause it to load by require (not part of the minified file)
		// ,"PieChart"//exluding this onw can help with debugging, this could be a file you are still working on
		// 		   //	no need to re compile with r.js while working on this file, just save and reload
		// ,"settings"
		//,"has"//likely to have to load has if you are working on a file, do not include the dummy
	],
	has:{
		"DEBUG.useHas": false,
		"DEBUG": false,
		"DEBUG.PieChart": false,
		"DEBUG.PieChart.getSeries": false,
		"DEBUG.PieChart.setConfig": false,
		"DEBUG.logDebugObject": false
	},
	name:"main",
	out:"./main-min.js",
})
