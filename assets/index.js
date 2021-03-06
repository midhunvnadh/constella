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
    $defaultSearchEngine = "bing";
    // Replace above on time of search with
    // the one modifed from System Settings
    crawlPage($defaultSearchEngine, "James Bond");
    $(".sch-rls .web-results .rlt-header .showl-btn .status").click(
        function(){
            showPageDesc($(this));
        }
    );
    var $typingTimer;
    var $doneTypingInterval = 800;
    var $input = $('.front-header .search-bar input');
    $input.on('keyup', function () {
        clearTimeout($typingTimer);
        $typingTimer = setTimeout(doneTyping, $doneTypingInterval, $defaultSearchEngine ,$input);
    });
    $input.on('keydown', function () {
        clearTimeout($typingTimer);
    });
    function doneTyping ($defaultSearchEngine, $input) {
        crawlPage($defaultSearchEngine, $($input).val());
    }
});