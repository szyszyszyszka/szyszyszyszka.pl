<!DOCTYPE HTML>
<html>
<head>
	<meta charset = "utf-8">
	<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1">
    <meta name = "author" content = "Szymon Szałach">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel = "stylesheet" href = "style.css" type = "text/css">
	<link rel="icon" type="image/x-icon" href="img/szyszka.jpg">
	<script src = "jquery-3.6.0.min.js"></script>
    <?php
    if(!isset($_POST["language"]))
    {
        $lang = locale_accept_from_http($_SERVER['HTTP_ACCEPT_LANGUAGE']);
        if($lang == "pl_PL" || $lang == "pl")
        {
            echo('<script src = "script-pl.js"></script>');
        }else
        {
            echo('<script src = "script-ang.js"></script>');
        }
    }else
    {
        $lang = $_POST["language"];
        if($lang == "PL")
        {
            echo('<script src = "script-pl.js"></script>');
        }else
        {
            echo('<script src = "script-ang.js"></script>');
        }
        unset($_POST["language"]);
    }
    unset($lang);
    ?>
	<title>Szymon Szałach</title>
	<meta name="robots" content="all">
	<meta name = "description" content = "Osobista strona Szymona Szałacha, gdzie dzieli się on swoją osobowością oraz osiągnięciami"/>
	<meta name = "keywords" content = "Szymon Szałach, szymon szałach, Szymon, szymon, Szałach, szałach, Szalach, szalach, szymon szalach, Szymon Szalach, szyszyszyszka, SzySzySzyszka, Szy Szy, szy szy, Szyszka, szyszka, Szy Szy Szyszka, szy szy szyszka, Szymon Szyszka, szymon szyszka, Simon Szałach, simon szałach, Simon, simon" />
</head>
<body>
	<form method = "post">
    <input type = "submit" id = "polish" name = "language" value = "PL"/>
    <input type = "submit" id = "english" name = "language" value = "ENG"/>
    </form>
	<h1>Szymon Szałach</h1>
	<nav></nav>
	<div id = "pisanie"></div>
</body>
</html><?php exit();?>
