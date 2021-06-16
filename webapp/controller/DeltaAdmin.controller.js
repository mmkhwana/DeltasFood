sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
], function (Controller, JSONModel) {
	"use strict";
	
	
	return Controller.extend("sap.ui.demo.walkthrough.DeltaAdmin", {

		onInit: function () {
			var oJSONModel = new sap.ui.model.json.JSONModel("src/SupplierData.json");
			this.getView().setModel(oJSONModel,"JSN");
		},
		onItemSelected: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("listItem");
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oAppDetailPanel = this.byId("appDetailsPanel");
			oAppDetailPanel.bindElement({
				path: sPath

			});
		},
		onPressAccept: function(){

		},
		onPressAccept: function(){

		},
		
	});
	
});