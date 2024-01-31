sap.ui.define(
  ["./BaseController"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend(
      "qualificafornitori.qualificafornitori.controller.Master",
      {
        onInit: function () {
          this.userType = this.getOwnerComponent()
            .getModel("userModel")
            .getProperty("/tipoUtente");
          let oRouter = this.getOwnerComponent().getRouter();
          let oTargetRicercaForn = oRouter.getTarget("TargetRicercaForn");
          let oTargetAnagrafica = oRouter.getTarget("TargetAnagrafica");
          debugger;

          if (this.userType !== "Interno") {
            oTargetRicercaForn._oOptions._visible = false;
            oTargetAnagrafica._oOptions._visible = true;
          }
        },

        navToMaster: function () {
          this.getRouter().navTo("Master");
        },

        navToRicerca: function () {
          this.getRouter().navTo("RicercaForn");
        },

        navToDocumenti: function () {
          this.getRouter().navTo("Documenti");
        },

        navToTemplate: function () {
          this.getRouter().navTo("Template");
        },
        navToAnagrafica: function () {
          this.getRouter().navTo("Anagrafica");
        },
        onAnagraficaBtnPress: function () {
          debugger;
          this.userType === "Interno"
            ? this.navToRicerca()
            : this.navToAnagrafica();
        },
      }
    );
  }
);
