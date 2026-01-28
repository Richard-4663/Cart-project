# 🛒 Cart Project - E-commerce Completo em React

Um projeto de e-commerce moderno e totalmente funcional construído com **React + Vite**, apresentando um sistema robusto de carrinho de compras, navegação entre páginas e gerenciamento de estado.

## ✨ Características Principais

### 🛍️ Sistema de Carrinho
- ✅ Adicionar e remover produtos do carrinho
- ✅ Incrementar e decrementar quantidade de itens
- ✅ Persiste durante a navegação entre páginas
- ✅ Context API para gerenciamento de estado global
- ✅ Validação de itens duplicados

### 📦 Catálogo de Produtos
- 🎯 Filtragem por categorias (Eletrônicos, Roupas, Calçados, Livros)
- 🔥 Seção de ofertas do dia
- ♾️ Scroll infinito para carregamento de produtos
- 🎨 Showcase dinâmico de produtos

### 🧭 Navegação
- 🏠 Página inicial com carrossel
- 📄 Página de produtos individual
- 🛒 Página do carrinho com resumo
- 🎁 Página de ofertas especiais
- 🔐 Página de login

### 💻 Tecnologia
- **Frontend**: React 18+ com Hooks
- **Build Tool**: Vite (desenvolvimento ultrarrápido)
- **Roteamento**: React Router v6
- **Estilização**: Bootstrap 5
- **Gerenciamento de Estado**: Context API

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone seu-repositorio

# Entre no diretório
cd Cart-project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Cart/
│   ├── Layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Carrossel/
│   ├── Products/
│   │   ├── ProductShowCase/
│   │   ├── ProductsScrollInfitine/
│   │   └── ProductOffertsPage/
│   ├── UI/
│   │   └── Category/
│   └── PageProduct/
│       └── PriceSection/
├── context/
│   ├── CartContext.jsx      # Contexto global do carrinho
│   └── ContextProduct.jsx   # Contexto de produtos
├── pages/
│   ├── ProductPage/
│   ├── Cart/
│   ├── Login/
│   └── OfertasDia/
├── data/
│   └── offersDay.js        # Dados das ofertas
└── App.jsx
```

## 🎯 Funcionalidades do Carrinho

### Adicionar Produto
```javascript
AddItemCart(produto) // Adiciona com quantidade inicial de 1
```

### Gerenciar Quantidade
```javascript
incrementQuantity(itemId)  // Aumenta quantidade
decrementQuantity(itemId)  // Diminui e remove se chegar a 0
```

### Remover Produto
```javascript
removeItemCart(id) // Remove produto do carrinho
```

## 🔄 Fluxo de Navegação

```
Home (/) 
  ├── Product (/product)
  ├── Ofertas (/ofertas)
  ├── Cart (/cart)
  └── Login (/login)
```

**O estado do carrinho persiste entre todas as páginas!** 🎉

## 🛠️ Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Build para produção
npm run preview   # Visualiza build em produção
npm run lint      # Verifica código com ESLint
```

## 🎨 Bootstrap Integration

O projeto utiliza Bootstrap 5 para uma interface responsiva e moderna:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
```

## 📝 Próximas Melhorias Planejadas

- [ ] Converter alertas para modais customizadas
- [ ] Implementar busca de produtos
- [ ] Adicionar filtros avançados
- [ ] Sistema de favoritos
- [ ] Integração com pagamento

## 👨‍💻 Desenvolvedor

Richard - Desenvolvedor React em aprendizado contínuo

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

**Feito usando React + Vite**