export function iniciarSitefTables() {

    let result = {};

    result.CODIGO_FUNCAO = {
        GENERICO: 0,
        CHEQUE: 1,
        DEBITO: 2,
        CREDITO: 3,
        CREDITO_DIGITADO: 100,
        ADM: 110,
        MENU_REIMPRESSAO: 112,
        VENDA_CARTEIRA_DIGITAL: 122,
        CANCELAMENTO_CARTEIRA_DIGITAL: 123,
        CANCELAMENTO_CARTAO_CREDITO: 210,
        CANCELAMENTO_CARTAO_DEBITO: 211
    };

    result.TIPO_CAMPO = {
        
    },

    result.IDENT_CARTEIRAS_DIGITAIS = {
        PIX: '60110024',
        MERCADO_PAGO: '00290006',
        PIC_PAY: '00600012',
        ITAU: '00300007'
    };

    return result;
}