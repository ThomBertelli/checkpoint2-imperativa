var produtos = [
    {
        nomeDoProduto: 'papel 04',
        valorDoProduto: 19,
        qualidadeDoProduto: 8,
        statusDoProduto: true
    },
    {
        nomeDoProduto: 'caneta azul',
        valorDoProduto: 1.55,
        qualidadeDoProduto: 5,
        statusDoProduto: false
    },
    {
        nomeDoProduto: 'caneta preta',
        valorDoProduto: 2.99,
        qualidadeDoProduto: 7,
        statusDoProduto: true
    },
    {
        nomeDoProduto: 'pincel atômico',
        valorDoProduto: 7.99,
        qualidadeDoProduto: 2,
        statusDoProduto: true
    },
    {
        nomeDoProduto: 'régua',
        valorDoProduto: 1.18,
        qualidadeDoProduto: 7,
        statusDoProduto: false
    },

]

var carrinho = produtos.filter((produto)=>{
    
    return produto.statusDoProduto == true && produto.valorDoProduto < 482 && produto.valorDoProduto < 1600 && produto.qualidadeDoProduto > 60;
});

function monstraCarrinho(){
var valorTotal = 0
for(var i = 0;i < carrinho.length;i++){
   valorTotal = valorTotal + carrinho[i].valorDoProduto  ;
}
for(var i = 0;i < carrinho.length;i++){
    console.log(`Produto:${carrinho[i].nomeDoProduto} valor R$ ${carrinho[i].valorDoProduto.toFixed(2)}`);
 }
 console.log(`Valor Total = R$ ${valorTotal.toFixed(2)}` )
};

monstraCarrinho();