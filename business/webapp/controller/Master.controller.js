sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("app04.business.controller.Master", {
            onInit: function () {

            },

            itemPress: function (oEvent) {
                //resgatar a coluna clicada
                let oColumnListItem = oEvent.getSource();

                // resgata o binding da coluna clicada. O Modelo não tem nome, então o getBindingContext fica sem parâmetro
                let oItem = oColumnListItem.getBindingContext().getObject();

                // resgata o ID do parceiro
                let iPartnerId = oItem.PartnerId;

                //resgata o Roteador
                let oRouter = this.getOwnerComponent().getRouter();

                //navega p/ rota de detalhe
                oRouter.navTo("RotaDetalhe", {
                    PartnerId: iPartnerId
                });
            },

            btnAdicionar: function(oEvent){
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RotaAdicionar");
            }


        });
    });
