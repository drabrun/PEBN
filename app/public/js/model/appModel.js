App.reqres.setHandler('AppManager', function() {
   if(App.AppManager) return App.AppManager;
   var manager = App.AppManager = new MarionetteApp.models.AppManager(/* whatever */);
   return manager;
});
App.request('AppManager');