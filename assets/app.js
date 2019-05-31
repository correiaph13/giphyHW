

//q: string Search query term or phrase.GIPHY search will automatically look for exact matches to queries + AND match + OR match. Explicit AND + OR boolean clauses in search queries are not supported.

//limit: integer (int32):The maximum number of records to return.
//rating: string Filters results by specified rating.


    // Example queryURL for Giphy API
    
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    var APIkey = "PEPbI49PftvjugqJC7Wq44C4tdprWbSv"
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  