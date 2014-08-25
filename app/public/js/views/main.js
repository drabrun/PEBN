HomeView = Backbone.Marionette.ItemView.extend({
    template: "main",
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
            that.$el.html(template);
        });
    }
});