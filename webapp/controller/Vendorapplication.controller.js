sap.ui.define([
    "sap/ui/core/mvc/Controller"

], function (Controller ) {
	"use strict";
	var fs = sap.ui.require('fs');
	var writeFile = sap.ui.require('writeFile');
	
    return Controller.extend("sap.ui.demo.walkthrough.Vendorapplication",{
		
        onPressSubmit: function () {
			
			var comName = this.getView().byId("CompanyName").getValue();
			var comEmail = this.getView().byId("CompanyEmail").getValue();
			var comProduct = this.getView().byId("ProductType").getValue();
			var comNumber = this.getView().byId("CompanyNumber").getValue();
			var comTel = this.getView().byId("TelNumber").getValue();
			var NewPwd = this.getView().byId("NewPwd").getValue();
			var ConPwd = this.getView().byId("ConPwd").getValue();

			if(comName=="" || comEmail=="" || comProduct=="" || comNumber=="" || comTel=="" || NewPwd=="" || ConPwd=="")
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("All input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}else{
				var companies = [];
				var company = {
					CompanyName: comName,
					ContactEmail: comEmail,
					CompanyProduct: comProduct,
					CompanyRegNumber: comNumber,
					ContactNumber: comTel,
					password: NewPwd	
				}
				companies.push(company);
				console.warn('added', {companies});
				fs.writeFile("clientData.json", JSON.stringify(companies, null, 2), function(err) {
					if (err) throw err;
					console.log('complete');
					})


				Email.send({
					Host : "smtp.mailtrap.io",
					Username : "2c71efb4e01421",
					Password : "c72b87c57ffbd1",
					To : comEmail,
					From : "c.m.mkhwanazi@gmail.com",
					Subject : "Applicattion Notificarion",
					Body : "<html><h2>We have received your Application</h2><strong>Your application is under review, You will from us soon.</strong><br></br><em>Team Delta's Food</em></html>"
				});
				
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Check your email for verification",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Verification",
					actions : [sap.m.MessageBox.Action.OK]
				});
				// window.location.reset()

			}
		}
    });
});