define(["has"],function(has){

  var settings = {
    DEBUG : {
		PieChart:{
			getSeries:false,
			setConfig:true
		},
		logDebugObject:true,
		useHas:true	//use has in code, this should be false when minifying (from build.js)
					//  as the minifyer will replace has calls with hard coded true or false
					//  if the build.js has excludeShallow has will then be the actual has file
					//  set DEBUG.useHas also to true to allow logging for files not compiled (files in excludeShallow)
    }
  };
  //when minified has does not exist (empty dummy), so add if possible
  has && typeof has.add === "function" && has.add("DEBUG.useHas",function(){return settings.DEBUG.useHas});
  function addHas(key){//this function will be tatally removed if DEBUG.useHas is fale in build.js because it is never called
	  has.add(key,function(){
		  var keys = key.split("."),retObj=settings;
		  keys.filter(function(val){return val!=="";})
		  .forEach(function(val){
			  retObj=retObj[val];
		  })
		  return retObj === true || !!retObj;
	  })
  }
  function process(o,key){//this function will be tatally removed if DEBUG.useHas is fale in build.js because it is never called
	  Object.keys(o).forEach(function(oKey){
		  addHas(key+"."+oKey);
		  process(o[oKey],key+"."+oKey);
	  });
  }
  if(has("DEBUG.useHas")){
		addHas("DEBUG");
		process(settings.DEBUG,"DEBUG");
  }

  //window.has = has;
  if(has("DEBUG.logDebugObject")){
	  (function logDebugObject(){//function to dump the debug object, can be used in build
			if(typeof has.all !== "function"){return;}
		  var o = {};
		  Object.keys(has.all()).filter(function(val){return val.indexOf("DEBUG")===0;})
			.forEach(function(key){o[key]=has(key)});
		  console.log(JSON.stringify(o,null,2));
	  }());	  
  }
  return settings;
})


