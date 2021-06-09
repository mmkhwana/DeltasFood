sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
	
], function (Controller, UIComponent) {
	"use strict";
	

	return Controller.extend("sap.ui.demo.walkthrough.Master", {
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
			
		gotoVendorApply: function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("VendorapplicationRout",{});
		},
		gotoVendorStatus: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("VendorStatusRout", {});
		}
	});
	
});