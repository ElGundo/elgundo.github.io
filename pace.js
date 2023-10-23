function GundiPace(form)
{
	//Kilometer in Variable Strecke speichern
	var Strecke = form.km.value;
	
	//Berechnung der Zeit in Variable Zeit
	var Zeit = ((form.h.value * 3600) + (form.min.value * 60) + (form.sek.value * 1));
		
	//Berechnung der Pace
	if ((Zeit != 0) && (Strecke != 0))
	{
		var result = (Zeit / Strecke);
		form.minuten.value = Math.floor(result / 60);
		form.sekunden.value = Math.floor(60 * ((result / 60) - form.minuten.value));
		form.kmh.value = Math.floor((3600/result)*100) /100;
	}
	
	//Berechnung der Kilometer von der Pace
	else if(Strecke == '') 
	{
		var result = ((form.sekunden.value * 1) + (form.minuten.value * 60));
		form.km.value = Math.floor((Zeit / result)*10) /10;
	}
	
	//Berechnung der Zeit von der Pace
	else if(Zeit == '')
	{
		var result = ((form.sekunden.value * 1) + (form.minuten.value * 60));
		var Zeit= result * Strecke
		form.h.value = Math.floor(Zeit / 3600);
		form.min.value = Math.floor(60 * ((Zeit / 3600) - form.h.value));
		form.sek.value = Math.floor(60 * ((60 * ((Zeit / 3600) - form.h.value)) - form.min.value));
		
	}
}