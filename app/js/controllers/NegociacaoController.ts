class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _inputNegociacoes: Negociacoes = new Negociacoes;

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
                new Date(this._inputData.value.replace(/-/g, ',')), 
                parseInt(this._inputQuantidade.value), 
                parseFloat(this._inputValor.value)
            );

        this._inputNegociacoes.adiciona(negociacao);

       this._inputNegociacoes.paraArray().forEach(negociacao => {
           console.log(negociacao.data)
           console.log(negociacao.quantidade)
           console.log(negociacao.valor)
       })
    }
}
