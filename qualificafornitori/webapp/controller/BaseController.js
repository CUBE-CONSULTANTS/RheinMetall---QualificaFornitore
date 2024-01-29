sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "qualificafornitori.qualificafornitori.controller.BaseController",
      {
        /**
         * @override
         */
        // Creazione del ruolo dell'utente
        getModel: function (sName) {
          return this.getView().getModel(sName);
        },
        setModel: function (oModel, sName) {
          return this.getView().setModel(oModel, sName);
        },
        _getDbPromised: function (Entity, Property, Filters) {
          debugger;
          let model = this.getOwnerComponent().getModel();
          return new Promise((resolve, reject) => {
            debugger;
            model.read(Entity, {
              //   urlParameters: {
              //     "$expand": $expand
              // },
              filters: Filters,
              success: (odata) => {
                debugger;
                let sProp = Property;
                resolve({
                  [sProp]: odata.results,
                });
              },
              error: (error) => {
                debugger;
                reject(error);
              },
            });
          });
        },
        navback: function (rotta) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo(rotta);
        },
        formatData: function (model) {
          var datinizi = new Date(model);
          var datainizioformat =
            datinizi.getDate() +
            "/" +
            [datinizi.getMonth() + 1] +
            "/" +
            datinizi.getFullYear();
          return datainizioformat;
        },

        formatOra: function (model) {
          var ora_inizio = new Date(model);
          var ora_inizioFormat =
            ora_inizio.getHours() + ":" + ora_inizio.getMinutes();
          return ora_inizioFormat;
        },
      }
    );
  }
);
