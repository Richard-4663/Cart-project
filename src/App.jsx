import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Header from './components/Header/Header.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './components/Cart/Cart.jsx'
import { useState } from 'react'


function App() {

  let produtos = [
    {id: 1, nome: "Iphone 13", preco: 5999.99, categoria: "eletronico", qntEstoque: 5, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 2, nome: "Camiseta Polo", preco: 89.99, categoria: "roupas", qntEstoque: 10, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 3, nome: "Notebook Dell XPS", preco: 7299.99, categoria: "eletronico", qntEstoque: 3, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 4, nome: "Calça Jeans Slim", preco: 159.99, categoria: "roupas", qntEstoque: 15, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 5, nome: "Livro JavaScript Moderno", preco: 79.90, categoria: "livros", qntEstoque: 8, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 6, nome: "Fone Bluetooth Sony", preco: 349.90, categoria: "eletronico", qntEstoque: 12, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 7, nome: "Tênis Nike Air Max", preco: 499.90, categoria: "calcados", qntEstoque: 6, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 8, nome: "Smartwatch Apple", preco: 2999.90, categoria: "eletronico", qntEstoque: 4, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 9, nome: "Moletom Com Capuz", preco: 129.90, categoria: "roupas", qntEstoque: 20, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 10, nome: "Livro React Avançado", preco: 99.90, categoria: "livros", qntEstoque: 5, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 11, nome: "Tablet Samsung Galaxy", preco: 1599.90, categoria: "eletronico", qntEstoque: 7, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 12, nome: "Bermuda Tactel", preco: 69.90, categoria: "roupas", qntEstoque: 18, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 13, nome: "Livro Clean Code", preco: 89.90, categoria: "livros", qntEstoque: 9, quantidadeCarrinho: 0, resultadoQtnCar: 0},
    {id: 14, nome: "Console PlayStation 5", preco: 3999.90, categoria: "eletronico", qntEstoque: 2, quantidadeCarrinho: 0, resultadoQtnCar: 0}
];

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
    );
  };

    const decrementQuantity = (itemId) => {
    setProdutosCarrinho(prevCart =>
      prevCart.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantidadeCarrinho - 1;
          if (newQuantity <= 0) {
            // Remove o item se chegar a 0
            return null;
          }
          return { ...item, quantidadeCarrinho: newQuantity };
        }
        return item;
      }).filter(Boolean) // Remove nulls
    );
  };


  return (
    <div className="wrapper">
      <div className='app-container'>
        <Header />  
        <div className='content bg-light'>
          <Products produtos={produtos} onClick={AddItemCart}/>
          <Cart itemCart={produtosCarrinho} onClick={removeItemCart} increment={incrementQuantity} decrement={decrementQuantity} />
        </div>
      </div>
        
    </div>
  )
}

export default App