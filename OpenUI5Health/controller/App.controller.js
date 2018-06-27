sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		onOpenDialog : function () {
			var oView = this.getView();
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
            oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough.view.HelloDialog",this);
            oView.addDependent(oDialog);
         }


         oDialog.open();
		},
		onCloseDialog1 : function () {
			var oParameters ={
					Run:"",
					Sugar:"",
					Junk:"",
					Sleep:"",
					WakeUp:""
				};
			switch(this.getView().byId("combo").getSelectedKey()){
				
				case 'Run':
				oParameters.Run = "X";
				break;
				case "Sugar":
				oParameters.Sugar = "X";
				break;
				case "Junk Food":
				oParameters.Junk = "X";
				break;
				case "Sleep":
				oParameters.Sleep = "X";
				break;
				case "WakeUp":
				oParameters.WakeUp = "X";
				break;
			};
			var myJSON = JSON.stringify(oParameters);
			$.ajax({
				type: '`POST',
			    url: "http://codingshivaay.in/OpenUI5/OpenUI5Health/api/api.php",
			    dataType: 'json',
			    data:myJSON,
			    success: function(result) {
			      
			        window.location.reload();
			    }

});

			this.getView().byId("helloDialog").close();
		},
		onCloseDialog : function () {
			var oParameters ={
					Run:"",
					Sugar:"",
					Junk:"",
					Sleep:"",
					WakeUp:""
				};
			switch(this.getView().byId("combo").getSelectedKey()){
				
				case 'Run':
				oParameters.Run = "X";
				break;
				case "Sugar":
				oParameters.Sugar = "X";
				break;
				case "Junk Food":
				oParameters.Junk = "X";
				break;
				case "Sleep":
				oParameters.Sleep = "X";
				break;
				case "WakeUp":
				oParameters.WakeUp = "X";
				break;
			};
			var myJSON = JSON.stringify(oParameters);
			$.ajax({
				type: '`POST',
			    url: "http://codingshivaay.in/OpenUI5/OpenUI5Health/api/reset.php",
			    dataType: 'json',
			    data:myJSON,
			    success: function(result) {
			        window.location.reload();

			    }

});

			this.getView().byId("helloDialog").close();
		}
	});

});
