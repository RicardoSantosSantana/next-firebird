import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
}
export interface IUser {
    uid: string;
    email: string;
    name: string;
    token: string;
    provider: string;
    photoUrl: string;
}
//Create context type
export type authContextType = {        
    signInGoogle:<Promise>() => void;
    signInGithub:<Promise>() => void;
    logOut:<Promise>() => void;
    user: IUser | null;
    error:object,
    loading:boolean;
};
export type returnAuthentication = {
    success:string;
    user:any;
    error:any 
}

//Create context default values
export const authContextDefaultValues: authContextType = {    
    signInGoogle: () => {},
    signInGithub: () => {},
    logOut: () => {},
    user: null,    
    error: {},
    loading: false, 
}; 