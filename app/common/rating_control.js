define(['knockout','jquery','text!./rating_control.html'],function(ko,$,ratingHTML) {
  var updateScore = function(element, score) {
    console.log("updateing score", score);
      var $element = element;
      $(".rating",$element).removeClass("selected");
      for(i=1; i<=score; i++) {
        $(".star"+i,$element).addClass("selected");
      }
    }
  ko.bindingHandlers.rating = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      console.log(bindingContext);
      $(element).html(ratingHTML);
      var score=ko.unwrap(valueAccessor())
      updateScore(element,score);
      $("span",$(element)).click(function(){
        var score=valueAccessor()
        score(parseInt($(this).data("val")));
      });
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      var score=ko.unwrap(valueAccessor())
      updateScore(element,score);
    }

  }
  return ko;
})
