//Instructions and functions executed after page is loaded
$(document).ready(function()
		{
			var menu = document.querySelector("nav");
			var write = document.getElementById("pisanie");
			var langselect = document.getElementById("english");
			var html_tag = document.querySelector("html");
			write.innerHTML = "<span id = 'welcome_screen'>Hello traveler!<br/>In order to access this site's content just press the buttons above!</span>";
			menu.innerHTML = "<button class = 'nav' id = 'nav_one'>About me</button> <button class = 'nav' id = 'nav_two'>Where you can find me</button> <button class = 'nav' id = 'nav_three'>My projects</button>";
			html_tag.setAttribute("lang","en");
			langselect.setAttribute("style","color: rgb(63,219,63)");
			langselect.setAttribute("disabled","disabled");
			$("#pisanie").hide().delay(2200).fadeIn();
			setTimeout(function(){document.getElementById('nav_one').addEventListener('click', omnie);},2500);
			setTimeout(function(){document.getElementById('nav_two').addEventListener('click', gdziemnznl);},2500);
			setTimeout(function(){document.getElementById('nav_three').addEventListener('click', mojeprojekty);},2500);
		});

//Instructions and functions for content in "About me" section
function omnie()
{
	$("#pisanie").fadeOut(500,function()
	{
		var write = document.getElementById("pisanie");
		var tekst = "I'm random teenager from internet who's passionate about broadly understood programming. Right now my only specialization is web programming but I consistently expand my skills in programming desktop and mobile applications";
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
		var tekst = "Private accounts on social media that I have: <a href = 'https://www.instagram.com/szyszyszyszka343' target = '_blank'>Instagram</a><br/>You can find published source codes of my projects on <a href = 'https://github.com/szyszyszyszka' target = '_blank'>GitHub</a><br/>If you'd like me to create a website for you I invite you here: <a href = 'https://www.fiverr.com/superpinecone' target = '_blank'>Fiverr</a><br/>Alternatively you can send me a message via above-mentioned social media";
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
		var tekst = "<h3 id = 'PESELnumbervalidator_header'>PESEL number validator <span id = 'PESELnumbervalidator_arrow' class = 'content_arrow'>&#8595;</span></h3><div id = 'PESELnumbervalidator_content'>One of the more interesting projects that I've made is <a href = 'walidatorPESEL/index.html' target = '_blank'>validator of polish PESEL number.</a> It was written using JavaScript at the beginning of my studies on it thus it has many lines of code which probably can be shorten and <b>it was not created with security in mind</b>.<br/><u><b>But it works very well</b></u></div><h3 id = 'Pinecone_Notes_header'>Pinecone Notes <span id = 'Pinecone_Notes_arrow' class = 'content_arrow'>&#8595;</span></h3><div id = 'Pinecone_Notes_content'><u><b>Pinecone Notes</b></u> is a straightforward web app for taking notes with synchronization between many devices using MySQL database. It was at first built with only personal use in mind but it was decided to publish it as an open beta to a broader audience. Publishing it to a broader audience can help finding and fixing bugs that I have missed, it is a good skill practice, and Pinecone Notes turned out to work really well in my opinion so maybe it will help someone be more productive in everyday life.<br/><u><b>Pinecone Notes</b></u> was made using technologies like: HTML, CSS, JavaScript (+ <a href = 'https://jquery.com/' target = '_blank'>jQuery</a> framework + <a href = 'https://github.com/imakewebthings/waypoints' target = '_blank'>Waypoint</a> and <a href = 'https://github.com/ro31337/jquery.ns-autogrow' target = '_blank'>jquery.ns-autogrow</a> plugins) and PHP (+ <a href = 'https://github.com/defuse/php-encryption' target = '_blank'>php-encryption</a> library).<br/>The project will be evolving. Many more <a href = 'https://github.com/szyszyszyszka/pinecone_notes#roadmap'>features and enhancements</a> are going to be implemented, plus there is an idea for full mobile Android application for Pinecone Notes :)<br/>Soon it will be avalible for everyone at <u>notes.szyszyszyszka.pl</u> but <a href = 'https://github.com/szyszyszyszka/pinecone_notes/releases/tag/beta' target = '_blank'>source code</a> is already avalible if you want and have skills to check it out on your own. Stayed tuned for more info!</div>";
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
}*/