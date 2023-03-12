import React, { useEffect, useState } from "react";
import { Person, Mail } from "@mui/icons-material";
import "./profile.scss";
import {
    thorPortfolio,
    capPortfolio,
    hulkPortfolio,
    ironmanPortfolio
} from '../../data';
import AgentService from '../../ssi/AgentService';
import $, { get } from 'jquery';
import StatusBar from '../statusBar/StatusBar';
import { getCredDefIdAPI, getCredDefIdDetailsAPI, getCredentialWalletAPI } from "../../components/util/APIUtils";
import { _agents } from "../../ssi/config";
import { values } from "min-dash";



const Profile = (props) => {

    const [credDef, setCredDef] = useState([]);
    const [status, setStatus] = useState([]);

    const [value, setValue] = useState("");
   

   

    useEffect(() => {
        getData();

        //getAllModels();
    }, [])


    function getData(value) {
        if (value === undefined || "") {
            value = 8041;
        }


        console.log('argument from Child: ', value);

        getCredDefIdAPI(value).then(res =>

            getCredDefIdDetailsAPI(value, res.credential_definition_ids[0]).then(res =>
                console.log("res", res.credential_definition))
        )

        getCredentialWalletAPI(value).then(res => console.log("credentialWallet", res))
    }



    const handleChange = (value) => {
        // 👇️ take the parameter passed from the Child component
        value === "one" ? setValue(8041) : setValue(value);
        getData(value);
    };



    return (

        <div className="profile" id="profile">
            <h1>Agents </h1>
            <StatusBar onValue={handleChange} />
            {console.log("valueee", value)}

            {console.log("credDef", credDef)}


        </div>
    );
}

export default Profile;

