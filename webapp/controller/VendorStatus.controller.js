sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
], function (Controller) {
	"use strict";
	

	return Controller.extend("sap.ui.demo.walkthrough.VendorStatus", {

		onInit: function () {
			var oJSONModel = new sap.ui.model.json.JSONModel("src/SupplierData.json");
			this.getView().setModel(oJSONModel,"JSN");
		},
	});
	
});