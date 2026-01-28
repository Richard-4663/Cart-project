import { createContext, useContext } from 'react';
import { produtos } from '../data/products.js';
import { ofertasDoDia } from '../data/offersDay.js';

export const ContextProdutos = createContext();

export const MeuProvider = ({ children }) => {
  
  return (
    <ContextProdutos.Provider value={{ produtos, ofertasDoDia }}>
      {children}
    </ContextProdutos.Provider>
  );
};

export function useProdutos(){
    return useContext(ContextProdutos)
}
