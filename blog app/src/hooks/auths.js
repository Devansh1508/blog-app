import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LOGIN, ROOT } from "../lib/routes";


// This code is for fatching User data
export function useAuth() {
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

      useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (token) {
            setUser(user)
        }
    }, []);

    return { user, isLoading };
}

// This code is for Login functionlity
export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({ email, password, redirectTo = ROOT }) {
        setLoading(true);

        try {
            // await signInWithEmailAndPassword(auth, email, password);
            const response = await fetch('http://localhost:3000/api/auth/login', {  
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
        }); 

        if(!response.ok) {
            console.log("error from server while logging in");
        }

        // const token=response.data.token;
        const data = await response.json();
        
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));

            toast({
                title: "You are logged in",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            navigate(redirectTo);
        } catch (error) {
            toast({
                title: "Logging in failed",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return { login, isLoading };
}

// This code is for logout functionlity 
export function useLogout() {
    // const [signOut, isLoading, error] = useSignOut(auth);
    const toast = useToast();
    const navigate = useNavigate();

    async function logout() {
        // if (await signOut()) {
        //     toast({
        //         title: "Successfully logged out",
        //         status: "success",
        //         isClosable: true,
        //         position: "top",
        //         duration: 5000,
        //     });
        //     navigate(LOGIN);
        // }
        // else {
        //     toast({
        //         title: "Having difficulty to logging out of you ",
        //         status: "warning",
        //         isClosable: true,
        //         position: "bottom-left",
        //         duration: 5000,
        //     });
    }

    return { logout};
}

// This code is for user register functionlity
export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function signUp({
        username,
        email,
        password,
        redirectTo = ROOT,
    }) {
        setLoading(true);

        const response = await fetch('http://localhost:3000/api/auth/signup', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, email, password }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Registration failed");
                }


        
            try {
                toast({
                    title: "Account created",
                    description: "You are logged in",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });

                navigate(redirectTo);
            } catch (error) {
                toast({
                    title: "Signing Up failed",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
            } finally {
                setLoading(false);
            }
        }

    return { signUp, isLoading };
}
