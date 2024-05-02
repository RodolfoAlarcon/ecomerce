import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            apellido: string;
            nick: string;
            email: string;
            sexo: string | null;
            dni: string | null;
            edad: number | null;
            telefono: string | null;
            paises_id: string | null;
            ciudad_id: string | null;
            provincia_id: string | null;
            sector_id: string | null;
            direccion: string | null;
            rol: string;
            redes: number;
            email_verified_at: Date | null;
            registered: number;
            created_at: Date | null;
            updated_at: Date;
            token: string;
            token_type: string;
            expires_at: Date;
        }
    }
}