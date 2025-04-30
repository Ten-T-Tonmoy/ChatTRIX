import { create } from "zustand";
//zustand store

const useConvo = create((set) => ({
  // we choosing object huh
  selectedConvo: null,
  setSelectedConvo: (selectedConvo) => set({ selectedConvo }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConvo;
