<?php
include "./simple_html_dom.php";
ini_set('display_errors', 1);
error_reporting(E_ALL);
if(isset($_GET['engine']) && isset($_GET['kw'])){
	$engine = $_GET['engine'];
	$keyword = preg_replace('/\s+/', '+', $_GET['kw']);
	switch ($engine){
		case "duckduckgo":
			$url = 'https://duckduckgo.com/?q=' . $keyword;
			break;
		case "google":
			$url = 'https://google.com/search?q=' . $keyword;
			googleResults(getPageContents($url));
			break;
		case "bing":
			$url = 'https://bing.com/?q=' . $keyword;
			bingResults(getPageContents($url));
			break;
	}


}

function getPageContents($url){
	$page = file_get_contents($url);
	//echo $page;
	$domResults = new simple_html_dom();
	$domResults->load($page);
	return $domResults;
}
function utf8ize( $mixed ) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = utf8ize($value);
        }
    } elseif (is_string($mixed)) {
        return mb_convert_encoding($mixed, "UTF-8", "UTF-8");
    }
    return $mixed;
}
function googleResults($domResults){
	$title = $domResults->find('#main div .ZINbbc.xpd.O9g5cc.uUPGi .kCrYT a .zBAuLc'); //Get the search Title
	$bread = $domResults->find('#main div .ZINbbc .kCrYT a .zBAuLc .BNeawe');          //Get the Breadcrumbs
	$desc = $domResults->find('#main div .ZINbbc .kCrYT div div div div div');         //Get the Description
	$link = $domResults->find('#main div .ZINbbc.xpd.O9g5cc.uUPGi .kCrYT a .zBAuLc');  //Get the link by going backwords from title
	$ajax = array();
	$push_to_array = array();
	for($i = 0; $i < sizeof($title);$i++){
		$push_to_array = array("link" => substr(strval($link[$i]->parent()->href), 7), "title" => strval($title[$i]->plaintext), "bread" => strval($bread[$i]->plaintext), "desc" => strval($desc[$i]->plaintext));		
		$ajax[] = $push_to_array;
		$push_to_array = array();
	}
	echo json_encode( utf8ize($ajax) );
}

function bingResults($domResults){
	$title = $domResults->find('div#b_content main ol#b_results li.b_algo h2');								      //Get the search Title
	$bread = $domResults->find('div#b_content main ol#b_results li.b_algo div.b_caption .b_attribution cite');    //Get the Breadcrumbs
	$desc = $domResults->find('div#b_content main ol#b_results li.b_algo div.b_caption .b_attribution cite');     //Get the Description go bck from bread
	$link = $domResults->find('div#b_content main ol#b_results li.b_algo h2 a');  								  //Get the link
	//echo sizeof($title) . " " . sizeof($desc) . " " . sizeof($bread) . " " . sizeof($link) . " ";
	$ajax = array();
	$push_to_array = array();
	for($i = 0; $i < sizeof($title);$i++){
		$push_to_array = array("link" => substr(strval($link[$i]->href), 0), "title" => strval($title[$i]->plaintext), "bread" => strval($bread[$i]->plaintext), "desc" => strval($desc[$i]->parent()->parent()->plaintext));		
		$ajax[] = $push_to_array;
		$push_to_array = array();
	}
	echo json_encode( utf8ize($ajax) );
}

?>
