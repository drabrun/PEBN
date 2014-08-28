LoginView = Backbone.Marionette.ItemView.extend({
	events: {
		"click #submitLogin" : "submitLogin"
	},
    template: "login",
    submitLogin: function(){
    	App.request("ModalManager").close()
    },
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
        	var tpl = _.template(template.outerHTML());
        	var html = tpl();
            that.$el.html(html);
        });
    }
});