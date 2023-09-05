export function iniciarSitefTypes() {
    return {
        getConfigType: function() {
            return {
                sitefIp: "",
                storeId: "",
                terminalId: "",
            }
        },
        getPagamentoType: function() {
            return {
                valor: "",
                data: "",
                hora: "",
            }
        },
        getPagamentoCreditoType: function() {
            return {
                status: ""
            }
        },
        getStartTransactionRequestType: function() {
            return {
                sitefIp: "",
                storeId: "",
                terminalId: "",
                functionId: "",
                trnAmount: "",
                taxInvoiceNumber: "",
                taxInvoiceDate: "",
                taxInvoiceTime: "",
                cashierOperator: "",
                trnAdditionalParameters: "",
                trnInitParameters: "",
            }
        },
        getStartTransactionResponseType: function(data) {
            return {
                serviceStatus: data.serviceStatus,
                clisitefStatus: data.clisitefStatus,
                sessionId: data.sessionId,
            }
        },
        getContinueTransactionRequestType: function() {
            return {
                sessionId: "",
                data: "",
                continue: "",
            }
        },
        getContinueTransactionResponseType: function(data) {
            return {
                serviceStatus: data.serviceStatus,
                serviceMessage: data.serviceMessage,
                sessionId: data.sessionId,
                clisitefStatus: data.clisitefStatus,
                data: data.data,
                commandId: data.commandId,
                fieldId: data.fieldId,
                fieldMinLength: data.fieldMinLength,
                fieldMaxLength: data.fieldMaxLength,
            }
        },
    }
}