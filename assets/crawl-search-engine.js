const crawlPage = (engineToUse, keyword) => {
    var url = "http://localhost:999/getContents.php" + "?kw=" + keyword + '&engine=' + engineToUse;
    url = encodeURI(url);
    console.log(url);
    $.ajax({
        url:url,
        dataType: 'json',
        success:function(json){
            loadSearchResults(json);
        },
        error:function(){
            alert("Error");
        }      
   });
}