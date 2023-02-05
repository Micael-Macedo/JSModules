const frete = require('frete');

frete()
    .cepOrigem('40285840')
    .peso(1)
    .formato(frete.formatos.caixaPacote)
    .comprimento(16)
    .altura(2)
    .largura(11)
    .diametro(1)
    .maoPropria("nao")
    .valorDeclarado(50)
    .avisoRecebimento("sim")
    .servico(frete.servicos.pac)
    .precoPrazo('01153000', function (err, results) {
        console.log(err);
        console.log(results);
    });