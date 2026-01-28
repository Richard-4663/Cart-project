import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    
  //mudar as msgs de alerta para modais futuramente
    function AddItemCart(produto){
    const ItemExist = produtosCarrinho.find(item => item.id == produto.id)

    if (ItemExist){
        alert("item já está no carrinho")
    }else{
        produto.quantidadeCarrinho = 1  
        setProdutosCarrinho([...produtosCarrinho, produto])
        alert("item adicionado ao carrinho")
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

    // CORRIJA ASSIM:
    const decrementQuantity = (itemId) => {
  setProdutosCarrinho(prevCart =>
    prevCart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantidadeCarrinho - 1;
        if (newQuantity <= 0) {
          // Remove o item do carrinho
          return null;
        }
        return { ...item, quantidadeCarrinho: newQuantity };
      }
      return item;
    }).filter(item => item !== null) // Remove os itens null
    );
    };
    

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

  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  return (
    <CartContext.Provider value={{ produtosCarrinho, setProdutosCarrinho, AddItemCart, removeItemCart, incrementQuantity, decrementQuantity, filtro }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartContextProvider");
    }  
    return context;
}