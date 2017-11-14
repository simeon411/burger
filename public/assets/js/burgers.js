// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("planid");
    console.log(id);

    var updateBurger = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updateBurger
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };

    console.log (newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delplan").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("Burger eaten!", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
