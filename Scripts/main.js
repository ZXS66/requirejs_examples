require(["settings","has","PieChart","jquery"],function(settings,has,PieChart){
	if(has("DEBUG")){
		console.log("it has debug in main");
	}
	var p = new PieChart();
	p.getSeries();
	p.setConfig();
	console.log("-- settings is:",settings);
})
