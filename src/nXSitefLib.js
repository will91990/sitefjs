import { iniciarSitefTypes } from "./types.js"
import { getPagamentoGenerico } from "./controller/pagamentoGenerico.js";

const sitefTypes = iniciarSitefTypes();

export function iniciarNxSiTefLib(config=sitefTypes.getConfigType()) {
    
    function iniciarPagamentoCredito(pagamento=sitefTypes.getPagamentoType()) {
        return getPagamentoGenerico(config, pagamento);
    }

    function iniciarPagamentoDebito(pagamento=sitefTypes.getPagamentoType()) {
        return getPagamentoGenerico(config, pagamento);
    }

    function iniciarPagamentoPix(pagamento=sitefTypes.getPagamentoType()) {
        return ;
    }

    function iniciarCancelamentoCredito(pagamento=sitefTypes.getPagamentoType()) {
        return ;
    }

    function iniciarCancelamentoDebito(pagamento=sitefTypes.getPagamentoType()) {
        return ;
    }

    function iniciarCancelamentoPix(pagamento=sitefTypes.getPagamentoType()) {
        return ;
    }

    return {
        iniciarPagamentoCredito,
        iniciarPagamentoDebito,
        iniciarPagamentoPix,
        iniciarCancelamentoCredito,
        iniciarCancelamentoDebito,
        iniciarCancelamentoPix,
    }
}