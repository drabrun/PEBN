//Extensions I deemed necessary for PEBB
(function(){
  var promises = {};
 
  // Cache the returned deferred/promise by the id of the template
  // so that we can prevent multiple requests for the same template
  // from making the ajax call.
  //
  // This code is only safe to run synchronously. There exists a
  // race condition in this function, when run asynchronously,
  // which would nullify the benefit under certain circumstances.
  var loadTemplateAsync = function(tmpId){
    var promise = promises[tmpId] || $.get("/templates/" + tmpId);
    promises[tmpId] = promise;
    return promise;
  }
  Backbone.Marionette.TemplateManager = {};
 
  // Use jQuery to asynchronously load the template. 
  Backbone.Marionette.TemplateManager.loadTemplate = function(templateId, callback){
    var tmpId = templateId.replace("#", "");
    var promise = loadTemplateAsync(tmpId);
    promise.done(function(template){
      callback.call(this, $(template));
    });
  }
})();

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};
