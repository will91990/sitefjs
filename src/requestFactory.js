import { iniciarSitefTables } from "./sitefTables.js";
import { iniciarSitefTypes } from "./types.js";

const sitefTypes = iniciarSitefTypes();

export function montarStartTransactionRequest(config=sitefTypes.getConfigType(), pagamento=sitefTypes.getPagamentoType()) {

    const startTransactionRequest = sitefTypes.getStartTransactionRequestType();
    const sitefTables = iniciarSitefTables();

    setConfig(config);
    setPagamento(pagamento);

    function setConfig(config=sitefTypes.getConfigType()) {
        startTransactionRequest.sitefIp = config.ipSitef;
        startTransactionRequest.storeId = config.storeId;
        startTransactionRequest.terminalId = config.terminalId;
    }

    function setPagamento(pagamento=sitefTypes.getPagamentoType()) {
        startTransactionRequest.taxInvoiceNumber = '';
        startTransactionRequest.taxInvoiceDate = pagamento.data;
        startTransactionRequest.taxInvoiceTime = pagamento.hora;
        startTransactionRequest.cashierOperator = 'AB123456';
        startTransactionRequest.trnAmount = pagamento.valor;
    }

    function vendaCredito() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.CREDITO;
        return startTransactionRequest;
    }

    function vendaDebito() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.DEBITO;
        return startTransactionRequest;
    }

    function vendaPix() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.VENDA_CARTEIRA_DIGITAL;
        startTransactionRequest.trnAdditionalParameters = sitefTables.IDENT_CARTEIRAS_DIGITAIS.PIX;
        return startTransactionRequest;
    }

    function cancelamentoCredito() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.CANCELAMENTO_CARTAO_CREDITO;
        return startTransactionRequest;
    }

    function cancelamentoDebito() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.CANCELAMENTO_CARTAO_DEBITO;
        return startTransactionRequest;
    }

    function cancelamentoPix() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.CANCELAMENTO_CARTEIRA_DIGITAL;
        return startTransactionRequest;
    }

    function auxiliar() {
        startTransactionRequest.functionId = sitefTables.CODIGO_FUNCAO.ADM;
        return startTransactionRequest;
    }

    return {
        setConfig,
        setPagamento,
        vendaCredito,
        vendaDebito,
        vendaPix,
        cancelamentoCredito,
        cancelamentoDebito,
        cancelamentoPix,
        auxiliar,
    }
}

export function montarContinueTransactionRequest(sessionId) {
    const continueTransactionRequest = sitefTypes.getContinueTransactionRequestType();

    continueTransactionRequest.sessionId = sessionId;

    function getPrimeiraChamadaRequest() {
        continueTransactionRequest.data = "";
        continueTransactionRequest.continue = "0";
        return continueTransactionRequest;
    }

    function getContinueRequest(data) {
        continueTransactionRequest.data = data;
        continueTransactionRequest.continue = "0";
        return continueTransactionRequest;
    }
    
    function getRetornarColetaAnteriorRequest() {
        continueTransactionRequest.data = "";
        continueTransactionRequest.continue = "1";
        return continueTransactionRequest;
    }

    function getCancelaPagamentoAtualRequest() {
        continueTransactionRequest.data = "";
        continueTransactionRequest.continue = "2";
        return continueTransactionRequest;
    }

    function getEncerraTransacaoRequest() {
        continueTransactionRequest.data = "";
        continueTransactionRequest.continue = "-1";
        return continueTransactionRequest;
    }

    return {
        getPrimeiraChamadaRequest,
        getContinueRequest,
        getRetornarColetaAnteriorRequest,
        getCancelaPagamentoAtualRequest,
        getEncerraTransacaoRequest,
    }
}

export function montarFinishTransactionRequest(sessionId) {
    
    return {
        
    }
}