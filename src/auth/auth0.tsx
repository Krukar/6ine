import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';
import { createContext, useContext } from 'react';

import { useRouter } from '@tanstack/react-router';

import { useEffect } from 'react';

export interface Auth0ContextType {
    isAuthenticated: boolean;
    user: User | undefined;
    login: (options?: { appState?: { returnTo?: string } }) => void;
    logout: () => void;
    isLoading: boolean;
}

const Auth0Context = createContext<Auth0ContextType | undefined>(undefined);

export function Auth0Wrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri:
                    typeof window !== 'undefined' ? window.location.origin : '',
            }}
            onRedirectCallback={() => {
                router.navigate({ to: '/' });
            }}
        >
            <Auth0ContextProvider>{children}</Auth0ContextProvider>
        </Auth0Provider>
    );
}

function Auth0ContextProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const { isAuthenticated, user, loginWithRedirect, logout, isLoading } =
        useAuth0();

    const contextValue = {
        isAuthenticated,
        user,
        login: loginWithRedirect,
        logout: () =>
            logout({ logoutParams: { returnTo: window.location.origin } }),
        isLoading,
    };

    /*========== 
        This gives us auth0 context in Tanstatck router beforeLoad 
    ==========*/
    useEffect(() => {
        router.update({ context: { auth: contextValue } });

        router.invalidate();
    }, [isAuthenticated, isLoading, user?.sub]);

    return (
        <Auth0Context.Provider value={contextValue}>
            {children}
        </Auth0Context.Provider>
    );
}

export function useAuth0Context() {
    const context = useContext(Auth0Context);

    if (context === undefined) {
        throw new Error('useAuth0Context must be used within Auth0Wrapper');
    }

    return context;
}
