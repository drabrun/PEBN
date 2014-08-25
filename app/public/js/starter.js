$(function(){
	var route = new Route();
	var navView = new NavigationView();
	var footerView = new FooterView();
	App.navigationRegion.show(navView);
	App.footerRegion.show(footerView);
	Backbone.history.start();
});
