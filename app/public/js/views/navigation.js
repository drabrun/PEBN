NavigationView = Backbone.Marionette.ItemView.extend({
    template: "navigation",
    initialize : function(){
    	this.listenTo(App.request('AppManager'), 'navigationChanged', this.changeNav);
    	this.listenTo(App.request('AppManager'), 'loggedIn', this.changeNav);
    	this.listenTo(App.request('AppManager'), 'loggedOut', this.changeNav);
    },
    options : {currentNav : null, currentUser : null},
    changeNav : function(){
    	this.options.currentNav = App.request('AppManager').attributes.currentNav;
    	this.options.loggedIn = App.request('AppManager').attributes.currentUser == null ? null : App.request('AppManager').attributes.currentUser;
    	this.render();
    },
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
        	$(that.el).html(_.template(template.outerHTML(), this.options));
			 
        });
    }
    
});