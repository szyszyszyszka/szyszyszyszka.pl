//Instructions and functions executed after page is loaded
$(document).ready(function()
		{
			var menu = document.querySelector("nav");
			var write = document.getElementById("pisanie");
			var langselect = document.getElementById("polish");
			var html_tag = document.querySelector("html");
			write.innerHTML = "<span id = 'welcome_screen'>Witaj podróżniku!<br/>Aby uzyskać dostęp do treści strony po prostu kliknij w przyciski powyżej!</span>";
			menu.innerHTML = "<button class = 'nav' id = 'nav_one'>O mnie</button> <button class = 'nav' id = 'nav_two'>Gdzie można mnie znaleźć</button> <button class = 'nav' id = 'nav_three'>Moje projekty</button>";
			html_tag.setAttribute("lang","pl");
			langselect.setAttribute("style","color: rgb(63,219,63)");
			langselect.setAttribute("disabled","disabled");
			$("#pisanie").hide().delay(2500).fadeIn();
			setTimeout(function(){document.getElementById('nav_one').addEventListener('click', omnie);},2500);
			setTimeout(function(){document.getElementById('nav_two').addEventListener('click', gdziemnznl);},2500);
			setTimeout(function(){document.getElementById('nav_three').addEventListener('click', mojeprojekty);},2500);
		});
//Instructions and functions for content in "About me" sectio
function omnie()
{
	$("#pisanie").fadeOut(500,function()
	{
		var write = document.getElementById("pisanie");
		var tekst = "Jestem przypadkowym nastolatkiem z internetu, którego pasją jest szeroko pojęte programowanie. Obecnie specjalizuje się w tzw. programowaniu webowym jednak wciąż poszerzam swoje umiejętności między innymi w kierunku programowania aplikacji desktopowych i mobilnych.";
		write.innerHTML = tekst;
	});	
	$("#pisanie").fadeIn();
}

//Instructions and functions for content in "Where to find me" section
function gdziemnznl()
{
	$("#pisanie").fadeOut(500,function()
	{
		var write = document.getElementById("pisanie");
		var tekst = "Prywatne konta w mediach społecznościowych jakie posiadam to: <a href = 'https://www.instagram.com/szyszyszyszka343' target = '_blank'>Instagram</a><br/>Opublikowane kody źródłowe moich projektów znajdziesz na <a href = 'https://github.com/szyszyszyszka' target = '_blank'>GitHubie</a><br/>Jeżeli chciałbyś, żebym stworzył dla ciebie stronę internetową zapraszam cię tutaj: <a href = 'https://www.fiverr.com/superpinecone' target = '_blank'>Fiverr</a><br/>Ewentualnie skontaktuj się ze mną przez podane wyżej social media";
		write.innerHTML = tekst;
	});	
	$("#pisanie").fadeIn();
}

//Instructions and functions for content in "My projects" section
function mojeprojekty()
{
	$("#pisanie").fadeOut(500,function()
	{
		var write = document.getElementById("pisanie");
		var tekst = "<h3 id = 'PESELnumbervalidator_header'>Walidator numeru PESEL <span id = 'PESELnumbervalidator_arrow' class = 'content_arrow'>&#8595;</span></h3><div id = 'PESELnumbervalidator_content'>Jednym z ciekawszych projektów, które zrobiłem jest <a href = 'walidatorPESEL/index.html' target = '_blank'>walidator polskiego numeru PESEL.</a> Powstał on jako amatorski projekt szkolny na poczatku mojej przygody z językiem JavaScript przez co składa się z dość dużej liczby linijek kodu, których ilość prawdopodobnie da się skrócić i <b>nie był tworzony z myślą o bezpieczeństwie.</b><br/><u><b>Lecz działa bardzo dobrze</b></u></div><h3 id = 'Pinecone_Notes_header'>Pinecone Notes <span id = 'Pinecone_Notes_arrow' class = 'content_arrow'>&#8595;</span></h3><div id = 'Pinecone_Notes_content'><u><b>Pinecone Notes</b></u> to prosta aplikacja webowa do notatek, która synchronizuje je pomiędzy wieloma urządzeniami przy użyciu bazy danych MySQL. Na poczatku była budowana z myślą tylko o użytku ososbistym jednak zdecydowałem się na jej opublikowanie jako otwartą wersję beta. Pomoże to w znajdywaniu i naprawianiu błędów, które po prostu mogłem przeoczyć oraz Pinecone Notes wyszło naprawdę całkiem dobrze, więc może komuś pomoże w byciu bardziej produktywnym na codzień.<br/><u><b>Pinecone Notes</u></b> zbudowano przy uzyciu technologii takich jak: HTML, CSS, JavaScript (+ framework <a href = 'https://jquery.com/' target = '_blank'>jQuery</a> + wtyczki <a href = 'https://github.com/imakewebthings/waypoints' target = '_blank'>Waypoint</a> oraz <a href = 'https://github.com/ro31337/jquery.ns-autogrow' target = '_blank'>jquery.ns-autogrow</a>) i PHP (+ biblioteka <a href = 'https://github.com/defuse/php-encryption' target = '_blank'>php-encryption</a>).<br/>Projekt nie będzie stał w miejscu! Wiele nowych <a href = 'https://github.com/szyszyszyszka/pinecone_notes#roadmap'>funkcjonalności oraz ulepszeń</a> zostanie dodanych, a także w planach jest aplikacja mobilna Pinecone Notes na Androida :)<br/>Wkrótce Pinecone Notes będzie dostępne dla wszystkich pod adresem <u>notes.szyszyszyszka.pl</u>, lecz <a href = 'https://github.com/szyszyszyszka/pinecone_notes/releases/tag/beta' target = '_blank'>kod źródłowy</a> jest już dostępny jeżeli masz ochotę (oraz umiejętności) aby przetestować Pinecone Notes na własną ręke. Wkrótce pojawi się więcej informacji!</div>";
		write.innerHTML = tekst;
		$("#PESELnumbervalidator_content").slideUp();
		$("#Pinecone_Notes_content").slideUp();
	});	
	$("#pisanie").fadeIn();
	setTimeout(function(){document.getElementById("PESELnumbervalidator_header").addEventListener('click',show_PESELnumbervalidator_content)},1000);
	setTimeout(function(){document.getElementById("Pinecone_Notes_header").addEventListener('click',show_Pinecone_Notes_content)},1000);
	//setTimeout(function(){document.getElementById("ComingSoon_header").addEventListener('click',show_ComingSoon_content)},1000);
}
function show_PESELnumbervalidator_content()
{
	$("#PESELnumbervalidator_content").slideToggle(function()
		{
			if(document.getElementById("PESELnumbervalidator_content").style.display == "none")
			{
				document.getElementById("PESELnumbervalidator_arrow").innerHTML = "&#8595;";
			}else
			{
				document.getElementById("PESELnumbervalidator_arrow").innerHTML = "&#8593;";
			}
		});
}
function show_Pinecone_Notes_content()
{
	$("#Pinecone_Notes_content").slideToggle(function()
		{
			if(document.getElementById("Pinecone_Notes_content").style.display == "none")
			{
				document.getElementById("Pinecone_Notes_arrow").innerHTML = "&#8595;";
			}else
			{
				document.getElementById("Pinecone_Notes_arrow").innerHTML = "&#8593;";
			}
		});
}
/*
function show_ComingSoon_content()
{
	$("#ComingSoon_content").slideToggle(function()
		{
			if(document.getElementById("ComingSoon_content").style.display == "none")
			{
				document.getElementById("ComingSoon_arrow").innerHTML = "&#8595;";
			}else
			{
				document.getElementById("ComingSoon_arrow").innerHTML = "&#8593;";
			}
		});
}
*/