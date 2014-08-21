var AppManager = new Marionette.Application();
 



AppManager.addRegions({
	mainRegion: "#main-region"
 ,  
    navigationRegion: "#nav-region"
,    footerRegion: "#footer-region"
})


MainView = Backbone.Marionette.ItemView.extend({
    template: "main",
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
            that.$el.html(template);
        });
    }
});


NavigationView = Backbone.Marionette.ItemView.extend({
    template: "navigation",
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
            that.$el.html(template);
        });
    }
});

FooterView = Backbone.Marionette.ItemView.extend({
    template: "footer",
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
            that.$el.html(template);
        });
    }
});

 
AppManager.on("start", function() {
	var main = new MainView();
	
    var main = new MainView();
	var nav = new NavigationView();
	var footer = new FooterView();

	AppManager.mainRegion.show(main);
	AppManager.navigationRegion.show(nav);
	AppManager.footerRegion.show(footer);
	 
});



AppManager.start();