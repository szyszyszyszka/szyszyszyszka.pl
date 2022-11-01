function walidacja()
{
	var pesel = document.getElementById('pesel').value;
	var peselt = pesel.includes('e');
	var peselt2 = pesel.includes('-');
	var peselt3 = pesel.includes('.');
	var peselt4 = pesel.includes(',');
	var peselt5 = pesel.includes('+');
	if(peselt == false && peselt2 == false && peselt3 == false && peselt4 == false && peselt5 == false)
	{
		var parsowanie1 = parseInt(pesel[0], 10);
		var parsowanie2 = parseInt(pesel[1], 10);
		var parsowanie3 = parseInt(pesel[2], 10);
		var parsowanie4 = parseInt(pesel[3], 10);
		var parsowanie5 = parseInt(pesel[4], 10);
		var parsowanie6 = parseInt(pesel[5], 10);
		var parsowanie7 = parseInt(pesel[6], 10);
		var parsowanie8 = parseInt(pesel[7], 10);
		var parsowanie9 = parseInt(pesel[8], 10);
		var parsowanie10 = parseInt(pesel[9], 10);
		var parsowanie11= parseInt(pesel[10], 10); 
		var par_wynik1 = parsowanie1;
		var par_wynik2 = parsowanie2;
		var par_wynik3 = parsowanie3;
		var par_wynik4 = parsowanie4;
		var par_wynik5 = parsowanie5;
		var par_wynik6 = parsowanie6;
		var par_wynik7 = parsowanie7;
		var par_wynik8 = parsowanie8;
		var par_wynik9 = parsowanie9;
		var par_wynik10 = parsowanie10;
		var par_wynik11 = parsowanie11;
		var dlugosc_pesel = pesel.length;
		if(dlugosc_pesel == 11)
		{
			var plecM = document.getElementsByName('plec')[0].checked;
			var plecK = document.getElementsByName('plec')[1].checked;
			if(plecM == true)
			{
				if(par_wynik10 == 1 || par_wynik10 == 3 || par_wynik10 == 5 || par_wynik10 == 7 || par_wynik10 == 9)
				{
					var data = document.getElementById('data_urodzenia').value;
					var dwie_pierwsze_rok_string = data[0] + data[1];
					var dwie_ostatnie_rok_string = data[2] + data[3];
					var pars_dwie_pierwsze_rok = parseInt(dwie_pierwsze_rok_string, 10);
					var pars_dwie_ostatnie_rok =parseInt(dwie_ostatnie_rok_string, 10);
					if(pars_dwie_ostatnie_rok < 10)
					{
						if(pars_dwie_ostatnie_rok == par_wynik2)
						{
							var miesiac = data[5] + data[6];
							var pars_mies = parseInt(miesiac, 10);
							if(pars_dwie_pierwsze_rok == 19)
							{
								var pier_mies = parseInt(miesiac[0], 10);
								var dwa_mies = parseInt(miesiac[1], 10);
								if(pier_mies == par_wynik3 && dwa_mies == par_wynik4)
								{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
								}else
								{
									document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!"
								}
							}else if(pars_dwie_pierwsze_rok == 18)
							{
									var mies_dodaj = pars_mies + 80;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}	 
							}else if(pars_dwie_pierwsze_rok == 20)
							{
									var mies_dodaj = pars_mies + 20;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 21)
							{
									var mies_dodaj = pars_mies + 40;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 22)
							{
									var mies_dodaj = pars_mies + 60;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}
						}else
						{
							document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - rok urodzenia nie zgadza się z numerem PESEL lub nie podałeś/aś daty urodzenia";
						}
					}else if(pars_dwie_ostatnie_rok => 10)
					{
						var dwie_rok_pesel = pesel[0] + pesel[1];
						var pars_dwie_rok_pesel = parseInt(dwie_rok_pesel);
						if(pars_dwie_ostatnie_rok == pars_dwie_rok_pesel)
						{
							var miesiac = data[5] + data[6];
							var pars_mies = parseInt(miesiac, 10);
							if(pars_dwie_pierwsze_rok == 19)
							{
								var pier_mies = parseInt(miesiac[0], 10);
								var dwa_mies = parseInt(miesiac[1], 10);
								if(pier_mies == par_wynik3 && dwa_mies == par_wynik4)
								{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
								}else
								{
									document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
								}
							}else if(pars_dwie_pierwsze_rok == 18)
							{
									var mies_dodaj = pars_mies + 80;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}	 
							}else if(pars_dwie_pierwsze_rok == 20)
							{
									var mies_dodaj = pars_mies + 20;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 21)
							{
									var mies_dodaj = pars_mies + 40;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 22)
							{
									var mies_dodaj = pars_mies + 60;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}
						}else
						{
							document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - rok urodzenia nie zgadza się z numerem PESEL lub nie podałeś/aś daty urodzenia";
						}
					}
					
				}else
				{
					document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - płeć (mężczyzna) nie zgadza się z numerem PESEL";
				}
			}else if(plecK == true)
			{
				if(par_wynik10 == 0 || par_wynik10 == 2 || par_wynik10 == 4 || par_wynik10 == 6 || par_wynik10 == 8)
				{
					var data = document.getElementById('data_urodzenia').value;
					var dwie_pierwsze_rok_string = data[0] + data[1];
					var dwie_ostatnie_rok_string = data[2] + data[3];
					var pars_dwie_pierwsze_rok = parseInt(dwie_pierwsze_rok_string, 10);
					var pars_dwie_ostatnie_rok =parseInt(dwie_ostatnie_rok_string, 10);
					if(pars_dwie_ostatnie_rok < 10)
					{
						if(pars_dwie_ostatnie_rok == par_wynik2)
						{
							var miesiac = data[5] + data[6];
							var pars_mies = parseInt(miesiac, 10);
							if(pars_dwie_pierwsze_rok == 19)
							{
								var pier_mies = parseInt(miesiac[0], 10);
								var dwa_mies = parseInt(miesiac[1], 10);
								if(pier_mies == par_wynik3 && dwa_mies == par_wynik4)
								{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
								}else
								{
									document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
								}
							}else if(pars_dwie_pierwsze_rok == 18)
							{
									var mies_dodaj = pars_mies + 80;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}	 
							}else if(pars_dwie_pierwsze_rok == 20)
							{
									var mies_dodaj = pars_mies + 20;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 21)
							{
									var mies_dodaj = pars_mies + 40;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 22)
							{
									var mies_dodaj = pars_mies + 60;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}
						}else
						{
							document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - rok urodzenia nie zgadza się z numerem PESEL lub nie podałeś/aś daty urodzenia";
						}
					}else if(pars_dwie_ostatnie_rok => 10)
					{
						var dwie_rok_pesel = pesel[0] + pesel[1];
						var pars_dwie_rok_pesel = parseInt(dwie_rok_pesel);
						if(pars_dwie_ostatnie_rok == pars_dwie_rok_pesel)
						{
							var miesiac = data[5] + data[6];
							var pars_mies = parseInt(miesiac, 10);
							if(pars_dwie_pierwsze_rok == 19)
							{
								var pier_mies = parseInt(miesiac[0], 10);
								var dwa_mies = parseInt(miesiac[1], 10);
								if(pier_mies == par_wynik3 && dwa_mies == par_wynik4)
								{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
								}else
								{
									document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
								}
							}else if(pars_dwie_pierwsze_rok == 18)
							{
									var mies_dodaj = pars_mies + 80;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}	 
							}else if(pars_dwie_pierwsze_rok == 20)
							{
									var mies_dodaj = pars_mies + 20;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 21)
							{
									var mies_dodaj = pars_mies + 40
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}else if(pars_dwie_pierwsze_rok == 22)
							{
									var mies_dodaj = pars_mies + 60;
									var pesel_dodaj = parseInt(pesel[2] + pesel[3], 10);
									if(mies_dodaj == pesel_dodaj)
									{
									var dzien1 = data[8];
									var dzien2 = data[9];
									var pars_dzien1 = parseInt(dzien1, 10);
									var pars_dzien2 = parseInt(dzien2, 10);
									if(pars_dzien1 == par_wynik5 && pars_dzien2 == par_wynik6)
									{
										var suma_kontrolna = par_wynik1 * 1+ par_wynik2 * 3 + par_wynik3 * 7 + par_wynik4 * 9 + par_wynik5 * 1 + par_wynik6 * 3 + par_wynik7 * 7 + par_wynik8 * 9 + par_wynik9 * 1 + par_wynik10 * 3 + par_wynik11 * 1;
										var suma_tekst = String(suma_kontrolna);
										var suma_tekst_zero = suma_tekst.includes('0');
										if(suma_tekst_zero == true)
										{
											document.getElementById('pisanie').innerHTML =  "Podany numer PESEL jest poprawny";
										}else
										{
											document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - suma kontrolna jest niepoprawna";
										}
									}else
									{
										document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - dzień urodzenia niepoprawny!";
									}
									}else
									{
									 	document.getElementById('pisanie').innerHTML =  "Podano niepoprawny numer PESEL - miesiąc urodzenia niepoprawny!";
									}		 
							}
						}else
						{
							document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - rok urodzenia nie zgadza się z numerem PESEL lub nie podałeś/aś daty urodzenia";
						}
					}
				}else
				{
					document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - płeć (kobieta) nie zgadza się z numerem PESEL";
				}
			}else
			{
				document.getElementById('pisanie').innerHTML = "Nie podałeś płci";
			}
				
		}else
		{
			document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - jest on za długi lub zbyt krótki, albo zawiera znak!";
		}
	}else
	{
		document.getElementById('pisanie').innerHTML = "Podano niepoprawny numer PESEL - nie może on zawierać żadnych znaków!";
	}
}