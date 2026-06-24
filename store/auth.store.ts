import { create } from 'zustand';
import { getCurrentUser } from '@/lib/supabase';
import { User } from '@/type';

interface AuthState {
    user: User | null;
    isLogged: boolean;
    loading: boolean;
    setUser: (user: User | null) => void;
    setIsLogged: (isLogged: boolean) => void;
    setLoading: (loading: boolean) => void;
    fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLogged: false,
    loading: true,
    setUser: (user) => set({ user }),
    setIsLogged: (isLogged) => set({ isLogged }),
    setLoading: (loading) => set({ loading }),
    fetchUser: async () => {
        set({ loading: true });
        try {
            const user = await getCurrentUser();
            if (user) {
                set({ user, isLogged: true });
            } else {
                set({ user: null, isLogged: false });
            }
        } catch (error) {
            set({ user: null, isLogged: false });
        } finally {
            set({ loading: false });
        }
    },
}));
