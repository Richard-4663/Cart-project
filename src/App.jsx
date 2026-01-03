import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Header from './components/Header/Header.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './components/Cart/Cart.jsx'
import Carrossel from './components/Carrossel/Carrossel.jsx'
import { useState } from 'react'


function App() {

  let produtos = [
    {id: 1, nome: "Iphone 13", preco: 5999.99, categoria: "eletronico", qntEstoque: 5, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://lojaibyte.vteximg.com.br/arquivos/ids/335736-540-540/iphone-13-pro-apple-128gb-gold-desbloqueado-mlvc3bz-a-01.jpg?v=637707793565630000'},
    {id: 2, nome: "Camiseta Polo", preco: 89.99, categoria: "roupas", qntEstoque: 10, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://inspiringfans4takes.vteximg.com.br/arquivos/ids/196760-800-800/88549_024_60535-024_CAMISA-POLO-CLASSIC-BRANCO-MASCULINO-FIATWEAR-FIAT-60535-1.jpg?v=638754194741000000'},
    {id: 3, nome: "Notebook Dell XPS", preco: 7299.99, categoria: "eletronico", qntEstoque: 3, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://microexato.com.br/wp-content/uploads/2021/11/Lancamento-de-2020-novo-notebook-Dell-XPS-13.webp'},
    {id: 4, nome: "Calça Jeans Slim", preco: 159.99, categoria: "roupas", qntEstoque: 15, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://dkloed91apca8.cloudfront.net/Custom/Content/Products/73/13/7313_calca-jeans-slim-fit-preta-51422_l1_638566578334981971.webp'},
    {id: 5, nome: "Livro JavaScript Moderno", preco: 79.90, categoria: "livros", qntEstoque: 8, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://brasilcode.com.br/wp-content/uploads/2021/12/livros_javascript_6-1024x944.jpg'},
    {id: 6, nome: "Fone Bluetooth Sony", preco: 349.90, categoria: "eletronico", qntEstoque: 12, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/kvdsbpel/file.png'},
    {id: 7, nome: "Tênis Nike Air Max", preco: 499.90, categoria: "calcados", qntEstoque: 6, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://grupooscar.vteximg.com.br/arquivos/ids/2163097/Nike-IF2621-001.jpg?v=638882760945900000'},
    {id: 8, nome: "Smartwatch Apple", preco: 2999.90, categoria: "eletronico", qntEstoque: 4, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s11-case-unselect-gallery-1-202509_GEO_BR_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=WldDSmZlQ1ladGVha0lMWUJJK2M4ZHlVRllKam5abHNZRGludXlMbytKNjQ1MVVjRGl4Ti9qUEZOZGIzelhyUndNcFdFNWZtdVQ0djE1UTRwRU5lcXlaSE1Qa0haZTFvMWVJTkxjaWwxSnlpeUlldENlcWUwU1RFbkFmYitxUFRIb2VDTkJjTVo4bS9tNXFPb0d3Ymln'},
    {id: 9, nome: "Moletom Com Capuz", preco: 129.90, categoria: "roupas", qntEstoque: 20, quantidadeCarrinho: 0, resultadoQtnCar: 0 , imagem: 'https://cdn.sistemawbuy.com.br/arquivos/dd397de530f9abc45cd6bec1f2a8113d/produtos/670969e4ef26c/costas-moletom-com-capuz-67096a2a85475.webp'},
    {id: 10, nome: "Livro HTML e CSS", preco: 99.90, categoria: "livros", qntEstoque: 5, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://i.zst.com.br/thumbs/12/11/39/1458119531.jpg'},
    {id: 11, nome: "Tablet Samsung Galaxy", preco: 1599.90, categoria: "eletronico", qntEstoque: 7, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/169544'},
    {id: 12, nome: "Bermuda Tactel", preco: 69.90, categoria: "roupas", qntEstoque: 18, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://static.ferju.com.br/public/ferju/imagens/produtos/bermuda-tactel-masculina-juvenil-lisa-31561-vanton-preto-634eb7fe2e8b1.jpg  '},
    {id: 13, nome: "Livro Clean Code", preco: 89.90, categoria: "livros", qntEstoque: 9, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/057/98/0010579897.jpg&v=513f2000k&w=375&h=375'},
    {id: 14, nome: "Console PlayStation 5", preco: 3999.90, categoria: "eletronico", qntEstoque: 2, quantidadeCarrinho: 0, resultadoQtnCar: 0, imagem: 'https://webfones.vtexassets.com/arquivos/ids/245413/console-ps5-pro-2tb-ssd-120hz-sony-1.jpg.jpg?v=638749818662470000'}, 
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
            return 0;
          }
          return { ...item, quantidadeCarrinho: newQuantity };
        }
        return item;
      }).filter(Boolean) // Remove nulls
    );
  };


  return (
    <div className='cont-back'>
    <Header /> 
    <Carrossel img1={'../public/assets/imgCarrosel/img1.png'} img2={'../public/assets/imgCarrosel/img2.png'} img3={'../public/assets/imgCarrosel/img3.png'}/>
      <div className="wrapper"> 
        <div className='app-container'>
          <div className='content bg-light'>
            <Products produtos={produtos} onClick={AddItemCart}/>
            <Cart itemsCart={produtosCarrinho} onClick={removeItemCart} increment={incrementQuantity} decrement={decrementQuantity} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App