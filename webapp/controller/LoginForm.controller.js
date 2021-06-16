sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log",
	"sap/ui/core/UIComponent"
], function (Controller,Log, UIComponent ) {
	"use strict";
	
	return Controller.extend("sap.ui.demo.walkthrough.LoginForm",{
        
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
		onPressLogin:function(){
			var uname = this.getView().byId("idICname").getValue();
			var pwd = this.getView().byId("idIPwd").getValue();
			if ( uname=="" || pwd=="" )
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Both input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}
			else
			{ if (uname=="test" && pwd=="test")
				{
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					// var oApp = sap.ui.getCore().byId("idApp");
					// oApp.to("idApp--idSplitApp");
					// this.getSplitAppObj().to(this.createId("idSplitApp"));
					sap.ui.core.UIComponent.getRouterFor(this).navTo("SplitAppRout");
					console.log('Load SplitApp')

				}else if (uname=="admin" && pwd=="admin"){
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					sap.ui.core.UIComponent.getRouterFor(this).navTo("DeltaAdminRout");
				}
			}
		},
    });
});