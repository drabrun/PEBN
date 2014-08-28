var App = new Marionette.Application();
 
 

var Route = Backbone.Marionette.AppRouter.extend({
  // map path to function
  routes : {
    ''     : 'goHome',
    'home' : 'goHome',
    'about': 'goAbout',
    'contact': 'goContact'
  }, 
  goContact: function(){
  	var appManager = App.request('AppManager');
	App.mainRegion.show(new ContactView());
	appManager.attributes.currentNav = "contact";
	appManager.trigger("navigationChanged");
  },
  goHome: function(){
  	var appManager = App.request('AppManager');
	App.mainRegion.show(new HomeView());
	appManager.attributes.currentNav = "home";
	appManager.trigger("navigationChanged");
  },
  goAbout: function(){
  	var appManager = App.request('AppManager');
	App.mainRegion.show(new AboutView());
	appManager.attributes.currentNav = "about";
	appManager.trigger("navigationChanged");
  }
});

App.addRegions({
	mainRegion: "#main-region",  
    navigationRegion: "#nav-region",    
    footerRegion: "#footer-region"
})

App.reqres.setHandler('AppManager', function() {
   if(App.AppManager) return App.AppManager;
   
   App.AppManager = Backbone.Model.extend({}); 
   var manager = App.AppManager = new App.AppManager({ currentNav : "home"});
   return manager;
});



App.request('AppManager');


