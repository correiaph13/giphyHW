

//q: string Search query term or phrase.GIPHY search will automatically look for exact matches to queries + AND match + OR match. Explicit AND + OR boolean clauses in search queries are not supported.

//limit: integer (int32):The maximum number of records to return.
//rating: string Filters results by specified rating.

    
    var APIkey = "PEPbI49PftvjugqJC7Wq44C4tdprWbSv"
  
     $("button").on("click", function() {
      // var nameOfShow = $(this).attr("data-nameOfShow");
      var limit = 10;
      var q = "psych";
      var rating = "g"
      var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${q}&limit=${limit}&offset=0&rating=${rating}&lang=en`;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
       
          var results = response.data;

            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + rating);
              var showImage = $("<img>");
              showImage.attr("src", results[i].images.fixed_height.url);
              gifDiv.append(p);
              gifDiv.append(showImage);
              $(".gifs-section").prepend(gifDiv);
            }
          });
          });
    
     

