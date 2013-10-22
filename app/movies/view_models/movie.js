define(['knockout'],function(ko){
  var Movie=function(options) {
    for(var k in options) {
      console.log(options);
      this[k] = ko.observable(options[k])
    }
  }
  return Movie;
})
