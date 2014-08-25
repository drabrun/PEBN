FooterView = Backbone.Marionette.ItemView.extend({
    template: "footer",
    render: function() {
        var that = this;
        Backbone.Marionette.TemplateManager.loadTemplate(this.template, function(template) {
        	var tpl = _.template(template.outerHTML());
        	var html = tpl();
            that.$el.html(html);
        });
    }
});