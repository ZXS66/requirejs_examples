// https://github.com/Microsoft/TypeScript/issues/3538
//    typescript does not yet support conditional compilation and dead code removal
//    but if we concat and uglify all/some javascript files into one file r.js will
//    allow for static comiple options (has(somevalue) replaced by true or false)
//    and the uglify.js will remove dead code (functions that are not called and if(true) blocks


/*


Let's say you are working on a file and do not want to re compile every time you change it. 
In this build we will set useHas to true, exclude 
1. PieChart.js from the minified build
2. Exclude has.js from the build (PieChart.js uses it)
3. Exclude settings.js from the build as this has functions that set has values used in PieChart.js
4. Set useHas to true to make sure settings.js loads values from settings.DEBUG to be used for has.js 
		only in PieChart since code that is compiled has the "has('something')" calls replaced with true or false
This build is based on build5 (production build) but whith files you are working on exluded

*/
({
	baseUrl:".",//execute r.js -o build1.js in Scripts directory (for Windows use r.js.cmd)
	optimize:"none",
	paths: {
		has:"3rd/has",//use actual has
		jquery:"3rd/jQuery1.10.2"
	},
	excludeShallow : [
		"jquery"//excliding this one will cause it to load by require (not part of the minified file)
		,"PieChart"//exluding this onw can help with debugging, this could be a file you are still working on
				   //	no need to re compile with r.js while working on this file, just save and reload
		,"settings"
		,"has"//likely to have to load has if you are working on a file, do not include the dummy
	],
	has:{
		"DEBUG.useHas": true,
		"DEBUG": false,
		"DEBUG.PieChart": false,
		"DEBUG.PieChart.getSeries": false,
		"DEBUG.PieChart.setConfig": false,
		"DEBUG.logDebugObject": false
	},
	name:"main",
	out:"./main-min.js",
})
