const loadSearchResults = ($results) => {
    console.log($results);
    const appendTo = document.querySelector(".web-results .results")
    for(var result = 0; result < $results.length; result++){
        var theResult = '<span class = "result"><strong>' + $results[result].title + '</strong><span class="bread-crumbs">' + $results[result].bread + '</span><p>' + $results[result].desc + '</p></span>'
        appendTo.innerHTML += theResult
    }
}

var clicked1 = false;
const showPageDesc = (elem) => {
    var result = $(".sch-rls .web-results .results .result:hover > p, .sch-rls .web-results .results .result")
    if(clicked1){
        elem.attr("data-status", "0");
        result.removeClass("show-dsc")
        clicked1 = false;
    }
    else{
        elem.attr("data-status", "1");
        result.addClass("show-dsc")
        clicked1 = true;
    }
}

$(document).ready(function(){
    $(".sch-rls .web-results .rlt-header .showl-btn .status").click(
        function(){
            showPageDesc($(this));
        }
    );
    crawlPage("google", "James Bond");
});