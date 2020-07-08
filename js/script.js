(function(){
    let i;
	names = ["Ram","John","Mark"];
	
	for(i=0; i<names.length; i++)
	{
      var first_char = names[i].charAt(0);
      if(first_char == 'j' || first_char == 'J'){
      	console.log("Goodbye "+ names[i]);
      }
      else{
      	console.log("Hello "+names[i]);
      }
    }
})();
