sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/model/json/JSONModel"
], function (ManagedObject,JSONModel) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		open : function () {
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");

			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog : function () {
						var oParameters="";
						var oModel = new JSONModel("http://codingshivaay.in/OpenUI5/OpenUI5Health/api/api.php",
							oParameters,true,"POST");
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough.view.HelloDialog", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
				// forward compact/cozy style into dialog
				jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
			}
			// set explored app's demo model on this sample
			oDialog.open();
		}

	});

});