define(["jquery","has"],function($,has){
console.log("**********************************");
	function PieChart(){
		if(has("DEBUG.PieChart")){
			console.log("it has debug piechart in PieChart.js");
		}
		if(has("DEBUG.PieChart") && has("DEBUG")){//when minifying you can use multiple has()
			console.log("it has debug and debug piechart in PieChart.js");
		}
		if(has("DEBUG.PieChart") || has("DEBUG")){//when minifying you can use multiple has()
			console.log("it has debug or debug piechart in PieChart.js");
		}
	};
	PieChart.prototype.getSeries = function(){
		if(has("DEBUG.PieChart.getSeries")){
			console.log("it has debug piechart getseries in PieChart.js");
		}
	}
	PieChart.prototype.setConfig = function(){
		if(has("DEBUG.PieChart.setConfig")){
			console.log("it has debug piechart setConfig in PieChart.js");
		}
	}
	return PieChart;
})


