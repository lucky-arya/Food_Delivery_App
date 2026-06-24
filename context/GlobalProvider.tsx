// import React, { createContext, useContext, useEffect, useState } from "react";
// import { getCurrentUser } from "../lib/supabase";
// import { User } from "../type";

// interface GlobalContextType {
//     isLogged: boolean;
//     setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
//     user: User | null;
//     setUser: React.Dispatch<React.SetStateAction<User | null>>;
//     loading: boolean;
//     setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//     refetch: () => Promise<void>;
// }

// const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// export const useGlobalContext = () => {
//     const context = useContext(GlobalContext);
//     if (!context) {
//         throw new Error("useGlobalContext must be used within a GlobalProvider");
//     }
//     return context;
// };

// export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
//     const [isLogged, setIsLogged] = useState(false);
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);

//     const fetchUser = async () => {
//         try {
//             const res = await getCurrentUser();
//             if (res) {
//                 setIsLogged(true);
//                 setUser(res as unknown as User);
//             } else {
//                 setIsLogged(false);
//                 setUser(null);
//             }
//         } catch (error) {
//             setIsLogged(false);
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUser();
//     }, []);

//     return (
//         <GlobalContext.Provider
//             value={{
//                 isLogged,
//                 setIsLogged,
//                 user,
//                 setUser,
//                 loading,
//                 setLoading,
//                 refetch: fetchUser,
//             }}
//         >
//             {children}
//         </GlobalContext.Provider>
//     );
// };

// now shifted to the zustand for the gloabal state management 
