import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/*
 * As we do not have backend server, the refresh token feature has not been incorporated into the template.
 * Please refer https://next-auth.js.org/tutorials/refresh-token-rotation link for a reference.
 */

const handler = NextAuth({

    // ** Configure one or more authentication providers
    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
    providers: [
        CredentialsProvider({
            // ** The name to display on the sign in form (e.g. 'Sign in with...')
            // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
            name: 'Credentials',
            type: 'credentials',

            /*
             * As we are using our own Sign-in page, we do not need to change
             * username or password attributes manually in following credentials object.
             */
            credentials: {},
            async authorize(credentials) {

                const { email, password } = credentials as { email: string; password: string }
                console.log(8)

                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                
                console.log("Response status:", res.status); // Verifica el estado de la respuesta
                
                if (!res.ok) {
                    const errorText = await res.text(); // Mejor manejo del texto de error
                    console.error("Failed to log in:", errorText);
                    return null;
                }
                
                const user = await res.json();
                console.log(41, user); // Ahora deberías ver esto si la autenticación es correcta
                
                if (user && user.user) {
                    return user.user;
                } else {
                    return null;
                }
                
                

            }
        }),

    ],
    // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
    pages: {
        signIn: '/'
    },

    //secret: process.env.NEXTAUTH_SECRET,

    // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
    /*callbacks: {
        jwt: async ({ token, user }) => {
            return { ...token, ...user }
        },
        session: async ({ session, token }) => {
            return session;
        }
        
    }*/
})

export { handler as GET, handler as POST }