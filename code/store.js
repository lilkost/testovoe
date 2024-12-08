import { create } from 'zustand';

export const useProducts = create(set=>({
    products:[],
    favorites: [],
    paggination: 1,
    openModalUpdate: false,
    changeItem: [],

    changeStateOpenModalUpdate: () => set((state) => ({ openModalUpdate: !state.openModalUpdate })), 
    setItem: (item) => set((state) => ({ changeItem: item })), 
}));