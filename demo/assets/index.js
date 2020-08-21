const loadSearchResults = () => {
    var theResult = '<span class = "result"><strong>Lorem Ipsum dolor sit amet</strong><span class="bread-crumbs">example.com > dir > path > to > page</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna dolor, aliquet eu pretium sed, convallis sit amet diam. Etiam nibh felis, consectetur dapibus fermentum cursus, consectetur eu mi. Quisque non ultrices justo. Suspendisse vestibulum pulvinar est a tempus.</p></span>'
    const appendTo = document.querySelector(".web-results .results")
    for(var result = 0; result < 3; result++)
        appendTo.innerHTML += theResult
}
loadSearchResults();

var clicked1 = false;
document.querySelector(".sch-rls .web-results .rlt-header .showl-btn .status").addEventListener("click", function(){
    var results = document.querySelectorAll(".sch-rls .web-results .results .result:hover > p, .sch-rls .web-results .results .result")
    var resultSize = results.length
    if(clicked1){
        this.setAttribute("data-status", "0");
        for(var i = 0; i < resultSize; i++)
            results[i].classList.remove("show-dsc")
        clicked1 = false;
    }
    else{
        this.setAttribute("data-status", "1");
        for(var i = 0; i < resultSize; i++)
            results[i].classList.add("show-dsc")
        clicked1 = true;
    }
});