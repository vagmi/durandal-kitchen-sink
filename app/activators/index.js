define(['./custom_model', 'durandal/activator', 'knockout'], function (CustomModel, activator, ko) {
    var tools = ko.observableArray([
      new CustomModel({name: "Git", description:"The awesome source control tool"}),
      new CustomModel({name: "Vim", description:"The editor par excellence"}),
      new CustomModel({name: "Clojure", description:"Lisp for Java"})
    ]);

    return {
        tools: tools,
        activeTool: activator.create().forItems(tools)
    };
});

