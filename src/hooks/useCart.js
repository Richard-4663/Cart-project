import { useState } from "react"

export default function useCart(){

    const [produtosCarrinho, setProdutosCarrinho] = useState([])

    function AddItemCart(produto){
    const ItemExist = produtosCarrinho.find(item => item.id == produto.id)

    if (ItemExist){
        alert("item já está no carrinho")
    }else{
        produto.quantidadeCarrinho = 1
        setProdutosCarrinho([...produtosCarrinho, produto])
    }
    }

    function removeItemCart(id){
    const filtro = produtosCarrinho.filter(produto => produto.id != id)
    setProdutosCarrinho(filtro)
    }
    
    //ESTUDAR ISSO AQUI URGENTEMENTE
    const incrementQuantity = (itemId) => {
    setProdutosCarrinho(prevCart =>
        prevCart.map(item =>
        item.id === itemId
            ? { ...item, quantidadeCarrinho: item.quantidadeCarrinho + 1 }
            : item
        )
    )};

    const decrementQuantity = (itemId) => {
    setProdutosCarrinho(prevCart =>
        prevCart.map(item => {
        if (item.id === itemId) {
            const newQuantity = item.quantidadeCarrinho - 1;
            if (newQuantity <= 0) {
            // Remove o item se chegar a 0
            return 0;
            }
            return { ...item, quantidadeCarrinho: newQuantity };
        }
        return item;
        }).filter(Boolean) // Remove nulls
    )};

    const filtro = (produtos, categoria) => {

        if (categoria === 'eletronicos') {
            return produtos.filter(produto => produto.categoria === categoria);
        } else if (categoria === 'roupas') {
            return produtos.filter(produto => produto.categoria === categoria);
        } else if (categoria === 'calcados') {
            return produtos.filter(produto => produto.categoria === categoria);
        } else if (categoria === 'livros') {
            return produtos.filter(produto => produto.categoria === categoria);
        } else if (categoria === 'emEstoque') {
            return produtos.filter(produto => produto.qntEstoque > 0);
        } else {
            return [...produtos];
        }
    };

    
    return {
    produtosCarrinho,
    AddItemCart,
    removeItemCart,
    incrementQuantity,
    decrementQuantity,
    filtro
  }
}

