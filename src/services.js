import { iniciarSitefTypes } from "./types";

const AGENTE_CLI_SITEF_URL = 'https://127.0.0.1/agente/clisitef';

export async function startTransaction(startTransactionRequest=iniciarSitefTypes().getStartTransactionRequestType()) {
    const response = await fetchTransaction(AGENTE_CLI_SITEF_URL + '/startTransaction', startTransactionRequest);
    const data = await response.json();
    return iniciarSitefTypes().getStartTransactionResponseType(data);
}

export async function continueTransaction(continueTransactionRequest=iniciarSitefTypes().getContinueTransactionRequestType()) {
    const response = await fetchTransaction(AGENTE_CLI_SITEF_URL + '/continueTransaction', continueTransactionRequest);
    const data = await response.json();
    return iniciarSitefTypes().getContinueTransactionResponseType(data);
}

export async function finishTransaction(finishTransactionRequest) {
    const response = await fetchTransaction(AGENTE_CLI_SITEF_URL + '/finishTransaction', finishTransactionRequest);
    const data = await response.json();
    return data;
}

async function fetchTransaction(url, obj) {
    return await fetch(
        url,
        {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(obj)
    });
}