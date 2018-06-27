sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

		onShowHello : function () {

			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onCloseDialog : function () {
						var oParameters="";
						var oModel = new JSONModel("http://codingshivaay.in/OpenUI5/OpenUI5Health/api/api.php",
							oParameters,true,"POST");
						oDialog.close();
					}
	});

});
