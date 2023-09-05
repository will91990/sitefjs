import { montarContinueTransactionRequest } from "./requestFactory";
import { startTransaction, continueTransaction } from "./services";
import { iniciarSitefTypes } from "./types";

export async function iniciarTransaction(startTransactionRequest=iniciarSitefTypes().getStartTransactionRequestType()) {

    if (startTransactionRequest === iniciarSitefTypes().getStartTransactionRequestType()) {
        return;
    }

    let continueResponseList = [];

    const startTransactionResponse = await startTransaction(startTransactionRequest);

    switch (startTransactionResponse.serviceStatus) {
        case '0':
            break;
        case '1':
            //ERRO
            break;
    }

    if (startTransactionResponse.clisitefStatus != 10000) {
        //ERRO
    }

    const continueTransactionRequest = montarContinueTransactionRequest(startTransactionResponse.sessionId).getPrimeiraChamadaRequest();
    const continueTransactionResponse = await continueTransaction(continueTransactionRequest);

    if (continueTransactionResponse.commandId != '1' && continueTransactionResponse.fieldId != '-1') {
        //
    }

    async function continuar(data) {
        const continueTransactionRequest = montarContinueTransactionRequest(startTransactionResponse.sessionId).getContinueRequest(data);
        const continueTransactionResponse = await continueTransaction(continueTransactionRequest);
        continueResponseList.push(continueTransactionResponse);
        return continueTransactionResponse;
    }

    async function continuarToNextDataRequest(data="") {
        while (true) {
            const response = await continuar(data);

            if (response.commandId == '1' && response.fieldId == '-1') {
                data = "";
                continue;
            }

            if (response.commandId == '30' || response.commandId == '34') {
                return response;
            }

            break;
        }
    }

    function getUltimaResponse() {
        return iniciarSitefTypes().getContinueTransactionResponseType(continueResponseList[continueResponseList.length() -1]);
    }

    function getResponseList() {
        return continueResponseList;
    }

    return {
        getUltimaResponse,
        getResponseList,
        continuar,
        continuarToNextDataRequest,
    }
}