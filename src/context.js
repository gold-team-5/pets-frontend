import React,{ useState,useContext } from "react";

export const SettingsContext = React.createContext();

export default function SettingProvider(props){

    const[showCompleted, setshowCompleted] = useState(true);
    const [perPage, setperPage] = useState(3);

    const state={
        showCompleted,
        setshowCompleted,
        perPage,
        setperPage
    }
    return(
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}
