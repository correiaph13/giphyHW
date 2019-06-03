$(document).ready(function() {

//q: string Search query term or phrase.GIPHY search will automatically look for exact matches to queries + AND match + OR match. Explicit AND + OR boolean clauses in search queries are not supported.

//limit: integer (int32):The maximum number of records to return.
//rating: string Filters results by specified rating.

const showList = ["Psych", "Friends", "The Great British Baking Show", "Charmed", "Game of Thrones", "Futurama", "The Good Place", "Grey's Anatomy", "That 70's Show", "Cosmos: a Spacetime Odyssey"];
var APIkey = "PEPbI49PftvjugqJC7Wq44C4tdprWbSv"
var q;
//empty variable, can be defined later 

//adds the buttons for the default shows 

function buttonGenerator () {

    for (i=0; i<showList.length; i++){

        var newDivShow = $("<button>").text(showList[i]);
        newDivShow.addClass("btn btn-dark btn-md");
        newDivShow.attr(`data-showName`, showList[i]);
        $('#button-group').append(newDivShow);
        // console.log(showList[i])
       
        
        ; }

};

buttonGenerator ();

//performs the API query when a button is pressed, still working on having each search be what is actually in the button text
$("button").on("click", function() {
      var limit = 10;
      q = $(this).attr("data-showName");
    console.log($(this).attr("data-showName"));
      var rating = "g"
      var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${q}&limit=${limit}&offset=0&rating=${rating}&lang=en`;
      
//styling - need to make gifs appear next to each other
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
         
          $(".gifs-section").empty();

          var results = response.data;

            for (var j = 0; j < results.length; j++) {
  
              var gifDiv = $("<div>");
              var rating = results[j].rating;
              var p = $("<p>").text("Rating: " + rating);
              var showImage = $("<img>");
              showImage.attr("src", results[j].images.fixed_height.url);
             
              gifDiv.append(p);
              gifDiv.append(showImage);
              $(".gifs-section").append(gifDiv);
              
            }
          });
          });

  //
});
    
     

