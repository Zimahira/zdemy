import { create } from "zustand";

const useStore = create((set) => ({
  user: {},
  removeUserData: () => {
    set({ user: {} });
  },

  saveUserData: (userInfo) => set({ user: userInfo }),
}));

export default useStore;
