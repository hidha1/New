import {createContext, useState} from 'react';
export const AppContext = createContext();
export const AppProvider = ({children}) => {
    const[user,setUser]= useState(null);
    const[formData,setFormData]=useState(null);
        return(
            <AppContext.Provider value ={{user,setUser,formData,setFormData}}>
              {children}
            </AppContext.Provider>
        );
};