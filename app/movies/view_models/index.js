define(['knockout','./movie','common/rating_control','plugins/widget'],function(ko,Movie,ko1,widget){
  var movies = ko.observableArray([
    new Movie({title: "Shawshank Redemption", rating: 5}),
    new Movie({title: "The man from the earch", rating: 5}),
    new Movie({title: "Eternal sunshine of a spotless mind", rating: 5}),
    new Movie({title: "Snakes on a plane", rating: 2})
  ]);
  return {
    movies: movies
  }
});

