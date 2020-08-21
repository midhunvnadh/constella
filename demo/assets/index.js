const loadSearchResults = () => {
    var theResult = '<span class = "result"><strong>Lorem Ipsum dolor sit amet</strong><span class="bread-crumbs">example.com > dir > path > to > page</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna dolor, aliquet eu pretium sed, convallis sit amet diam. Etiam nibh felis, consectetur dapibus fermentum cursus, consectetur eu mi. Quisque non ultrices justo. Suspendisse vestibulum pulvinar est a tempus.</p></span>'
    const appendTo = document.querySelector(".web-results .results")
    for(var result = 0; result < 3; result++)
        appendTo.innerHTML += theResult
}
loadSearchResults();