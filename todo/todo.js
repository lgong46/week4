// This code runs when the page loads
$(function() {

  $(".task").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()
    // remove the element
  })

})
