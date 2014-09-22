SigninView = Backbone.Marionette.ItemView.extend({
    template: "signin",
        events: {
                "click #submitLogin" : "submitLogin",
                "click #loginAlertClose" : "hideAlert",
                "keyup input" : "enterSubmit"
        },
        inputChanged : function(e){

        },
    enterSubmit : function(evt){
                if(evt.keyCode == 13){
                this.$("#submitLogin").click();
        }
    },
    submitLogin: function(evt){
        var username = $("#loginUsernameInput").val();
        var password = $("#loginPasswordInput").val();

        if(password == null || username == null
           || password.length == 0 || username.length == 0){
                this.showAlert('Username & Password Required');
           }
        else{
                App.request("ModalManager").close()
        }
    },
    showAlert : function(message){
        $("#loginAlertMsg").html(message);
                $("#alertBox").removeClass("hide");
    },
    hideAlert : function(){
        $("#alertBox").addClass("hide");
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
