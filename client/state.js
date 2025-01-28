import { create } from "zustand";

const useZust = create((set) => ({
  user: {},
  removeUserData: () => {
    set({ user: {} });
  },

  saveUserData: (userInfo) => set({ user: userInfo }),
}));

export default useZust;
