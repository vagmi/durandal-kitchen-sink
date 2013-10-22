define(['knockout','jquery'],function(ko,$) {
  var MyRating = function(){};
  MyRating.prototype.activate= function(settings) {
    this.settings=settings;
    this.settings.rating.subscribe(this.scoreChanged.bind(this));
  };
  MyRating.prototype.updateScore = function(score) {
    var $element =this.$elem;
    $(".rating",$element).removeClass("selected");
    for(i=1; i<=score; i++) {
      $(".star"+i,$element).addClass("selected");
    }
  };
  MyRating.prototype.scoreChanged = function(score) {
    this.updateScore(parseInt(score));
  };
  MyRating.prototype.setupHandlers = function() {
    var self =this;
    $("span",this.$elem).click(function(){
      self.settings.rating(parseInt($(this).data("val")));
    });
  }
  MyRating.prototype.compositionComplete = function(elem) {
    this.$elem = $(elem);
    this.setupHandlers()
    var score = this.settings.rating();
    this.updateScore(score);
  };
  return MyRating;
})
