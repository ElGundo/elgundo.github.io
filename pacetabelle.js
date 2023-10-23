function GundiPaceTabelle(form) {
	  
	var Kilometer = 1;
	
	  
	while (Kilometer <= form.km.value){
		
		var tStunden = 0;
		var tMinuten = form.minuten.value
		var tSekunden = form.sekunden.value
		
		var Zeit = ((tStunden * 3600) + (tMinuten * 60) + (tSekunden * 1)) * Kilometer;
		
		tStunden = Math.floor(Zeit / 3600);
		tMinuten = Math.floor(60 * ((Zeit / 3600) - tStunden));
		tSekunden = Math.floor(60 * ((60 * ((Zeit / 3600) - tStunden)) - tMinuten));
		
		var text = 'Kilometer ' + Kilometer + ' : ' + tStunden + ':' + tMinuten + ':' + tSekunden;
		
		//neuen Link erzeugen:
		var newtext = document.createElement("li");
		newtext.innerHTML = text;
            
		//in die Liste einfügen:
		var list = document.getElementById("list");
		list.appendChild(newtext);
		
		Kilometer++;
	  }  
   }