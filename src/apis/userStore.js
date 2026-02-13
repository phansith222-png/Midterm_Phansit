import { create } from "zustand";
import { persist } from "zustand/middleware";


const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            logout: () => ({ user: null, token: null })
        })), {
    name: "user-store"
})

export default useUserStore