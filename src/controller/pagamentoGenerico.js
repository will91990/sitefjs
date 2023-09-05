import { iniciarTransaction } from "../transactionFactory";

export async function getPagamentoGenerico(config=iniciarSitefTypes().getConfigType(), pagamento=iniciarSitefTypes().getPagamentoType()) {

    let transaction = iniciarSitefTypes().getStartTransactionRequestType();

    async function iniciarPagamento() {
        const startTransactionRequest = montarStartTransactionRequest(config, pagamento);
        transaction = await iniciarTransaction(startTransactionRequest);
    }

    async function enviarPagamento() {
        let data = "";

        while (true) {
            const response = await transaction.continuarToNextDataRequest(data);

            if (response.commandId == '34' && response.fieldId == '146') {
                data = pagamento.valor;
                continue;
            }
            
            if (response.commandId == '30' && response.fieldId == '515') {
                data = pagamento.data;
                continue;
            }

            if (response.commandId == '30' && response.fieldId == '516') {
                data = "";
                continue;
            }

            break;
        }
    }

    return {
        iniciarPagamento,
        enviarPagamento,
    }
}