// Created by Vince Chang

// BASICS
$(function() {
  $("div").html("oh hai!!");

  // CREATING NEW ELEMENTS: and appending it to the DOM then using setTimeout to
  // remove it 1 second later
  const newSpan = $("<span>");
  newSpan.html("this is a span");
  $("div").append(newSpan);
  window.setTimeout(function() {
    $("div span").remove();
  }, 1000);

  // ADDING CLASSES: can add and remove CSS classes to certain HTML elements
  $("div").addClass("active");
  $("div").removeClass("active");

  // EVENT HANDLERS:
  // This is looking for #btn in the html code, ex is done with listening
  // to buttons
  const $btn = $("#btn");
  $btn.on("click", () => {
    console.log("button was clicked");

    // When the button is clicked it is going to appened this
    const p = $("<p>").text("I just appended something to the body!");
    $("body").append(p);
  });
});
/******************************************************************************/
// USING A SEPEARTE HANDLER
const Somehandler = () => {
  const p = $("<p>").text("Testing someHandler");
  $("body").append(p);

  // TOGGLE the background color to black when the button is clicked
  $("body").toggleClass("yellow");
}; // End of Somehandler

$(function() {
  const btn = $("#btn");
  // Can do things when you click, hover, mouseenter, mouseleave, mouseover
  btn.on("click", Somehandler);
  // $btn.on('mouseenter',Somehandler);
  // btn.on('mouseover',Somehandler);
});
/******************************************************************************/

/* Create an array of "movie" objects.
 * Each movie object has properties like:
 * title, release date, rating, director, list of actors, Create an input
 * use the keyup event to grab the value of this input as the user types if the
 * value of the input matches the title of a movie from your movies array,
 * display that movie's info on your page somewhere
 */

$(function() {
  // Listening for activity in the input field
  $("input").on("keyup", function(event) {
    var movies = [
      {
        title: "Avengers 3",
        releaseDate: "April 27, 2018",
        rating: 5.0,
        director: "Anthony Russo",
        actors: ["Robert Downey Jr", "Scarlet Johanson"]
      },
      {
        title: "Rush Hour 2",
        releaseDate: "August 3, 2001",
        rating: 5.0,
        director: "Brett Ratner",
        actors: ["Jackie Chan", "Chris Tucker"]
      }
    ];

    // If movie matches, it is put back into foundMovies [] and then I print it
    var foundMovies = movies.filter(function(movie) {
      return movie.title === event.target.value;
    });
    console.log(foundMovies);

    // Creating a JQuery object that will inject code into <table> in html code
    const $table = $("<table>");

    // Loop through each movie in the movie array and output into a table
    for (var i = 0; i < foundMovies.length; i++) {
      // Creating the HTML table that will store all the information
      $table.html(
        "<tr><th>Title</th></tr><td>" +
          foundMovies[i].title +
          "</td>" +
          "<tr><th>Release Date</th></tr><td>" +
          foundMovies[i].releaseDate +
          "</td>" +
          "<tr><th>Rating</th></tr><td>" +
          foundMovies[i].rating +
          "</td>" +
          "<tr><th>Director</th></tr><td>" +
          foundMovies[i].director +
          "</td>" +
          "<tr><th>Actors</th></tr><td>" +
          foundMovies[i].actors +
          "</td>"
      );

      // Append the information to the body
      $("body").append($table);
    }
  }); // End of Input
}); // End of function
// /******************************************************************************/
// BUBBLING
$(function() {
  // event.target is what is clicked on
  // currentTarget has the listener on it!

  $(".outside").on("click", event => {
    console.log("OUTSIDE target is: ", event.target);
    console.log("OUTSIDE currentTarget is: ", event.currentTarget);
    // This will stop the Bubbling
    // event.stopPropagation();
    return false;
  });

  $(".inside").on("click", event => {
    console.log("INSIDE target is: ", event.target);
    console.log("INSIDE currentTarget is: ", event.currentTarget);
    return false;
  });

  $("body").on("click", event => {
    console.log("BODY target is: ", event.target);
    console.log("Body currentTarget is: ", event.currentTarget);
    return false;
  });
});
/******************************************************************************/
// CHANGE CSS WITH JQUERY, this will change the what you click on to yellow
$(function() {
  $(".outside").on("click", function() {
    $(event.currentTarget).css("background", "yellow");
  });
});
/******************************************************************************/
// USING A FORM'S SUBMIT EVENT
$(function() {
  const list = [];

  const render = () => {
    // This would empty the ul if there were stuff in it, so when adding a new
    // element, it will not duplicate
    $("ul").empty();
    list.forEach(item => {
      $("ul").append("<li>" + item + "</li>");
    });
  };

  $("form").on("submit", event => {
    list.push($("#input-box").val());
    // Prevents the form from submitting so page doesn't reset
    event.preventDefault();
    $(event.currentTarget).trigger("reset"); // class clears out the text input
    render();
  });
});
/******************************************************************************/

// AJAX used to call api to render a search to movies
$(function() {
  $("form").on("submit", event => {
    // Whatever the user types in the search box will be saved here
    var userInput = $("#input-box").val();

    // Prevents the form from submitting so page doesn't reset
    event.preventDefault();

    $.ajax({
      url: "http://www.omdbapi.com/?apikey=53aa2cd6&s=" + userInput,
      method: "GET",
      success: function(data, status, jqXHR) {
        console.log(data);
        data.Search.forEach(item => {
          for (property in item) {
            $("ul").append("<li>" + property + item[property] + "</li>");
          }
        });
      },
      error: function(jqXHR, status, error) {
        console.log("bad");
      }
    });
  });
});
/******************************************************************************/

// AJAX returns a promise!
$(function() {
  var promise = $.ajax({
    url: "http://www.omdbapi.com/?apikey=53aa2cd6&s=star",
    method: "GET"
  });

  // SOULUTION 1: This way works, but can shorthand it
  // promise.done(function(data){
  //   console.log('works');
  // });
  // promise.fail(function(error){
  //   console.log('works');
  // });
  // promise.always(function(){
  //   console.log('always runs');
  // });

  // SOLUTION 2: This is more common and does the same above
  promise.then(
    function(data) {
      console.log("success");
      console.log(data);
    },
    function(error) {
      console.log("fail");
    }
  );
}); // End of Function

/******************************************************************************/

// SOLUTION 3, because Ajax returns a promise, do solution 2 and tack it on
$(function() {
  var promise = $.ajax({
    url: "http://www.omdbapi.com/?apikey=53aa2cd6&s=star",
    method: "GET"
  }).then(
    function(data) {
      console.log("success");
      console.log(data);
    },
    function(error) {
      console.log("fail");
    }
  );
}); // End of Function

/******************************************************************************/

// AJAX LAB NOW DONE WITH PROMISES!
$(function() {
  $("form").on("submit", event => {
    // Whatever the user types in the search box will be saved here
    var userInput = $("#input-box").val();

    // Prevents the form from submitting so page doesn't reset
    event.preventDefault();

    var promise = $.ajax({
      url: "http://www.omdbapi.com/?apikey=53aa2cd6&s=" + userInput,
      method: "GET"
    }).then(
      function(data) {
        // $('div').empty();
        console.log(data);
        data.Search.forEach(item => {
          $("div").append("Title" + ": " + item.Title + "</br>");
          $("div").append("Year" + ": " + item.Year + "</br>");
          $("div").append("imdbID" + ": " + item.imdbID + "</br>");
          $("div").append("Type" + ": " + item.Type + "</br>");
          $("div").append("<img src='" + item.Poster + "'><hr>");

          //$('ul').append('</br>'); // Space out information per movie
        });
      },
      function(error) {
        console.log("bad");
        console.log(error);
      }
    );
  });
});
/******************************************************************************/
