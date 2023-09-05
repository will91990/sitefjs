import { iniciarNxSiTefLib } from "./nXSitefLib";

async function exemploPagamento() {
    const config = sitefTypes.getConfigType();
    config.ipSitef = '';
    config.storeId = '';
    config.terminalId = '';

    const pagamento = sitefTypes.getPagamentoType();
    pagamento.data = '';
    pagamento.hora = '';
    pagamento.valor = '';

    const nxSitefLib = iniciarNxSiTefLib(config);
    const pagamentoCredito = await nxSitefLib.iniciarPagamentoCredito(pagamento);
    await pagamentoCredito.iniciarPagamento();
    await pagamentoCredito.enviarPagamento();
}