ModalRegion = Marionette.Region.extend({
    constructor: function() {
        Marionette.Region.prototype.constructor.apply(this, arguments);
 
        //this._ensureElement();
        this.$el.on('hidden', {region:this}, function(event) {
            event.data.region.close();
        });
    },
 	close: function(){
		this.$el.modal('hide');
 	},
    onShow: function() {
        this.$el.modal('show');
    },
 
    onClose: function() {
        this.$el.modal('hide');
    }
});

App.reqres.setHandler('ModalManager', function() {
   if(App.ModalManager) return App.ModalManager;

   var manager = App.ModalManager  = new ModalRegion({el:'#modal'});
   return manager;
});

App.request('ModalManager');