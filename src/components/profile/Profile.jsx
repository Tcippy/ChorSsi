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
import { getCredDefIdAPI } from "../../components/util/APIUtils";


const Profile = (props) => {

    const [credDef, setCredDef] = useState([]);
    const [status, setStatus] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState();
    const [models, setModels] = useState([]);
    const [svg, setSvg] = useState([]);
    const [process, setProcess] = useState([]);



    const [selected, setSelected] = useState("thor");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "thor",
            title: "Ventilatore"
        },
        {
            id: "ironman",
            title: "Condizionatore"
        },
        {
            id: "hulk",
            title: "Sensore X"
        },
        {
            id: "cap",
            title: "Sensore Y"
        },
    ]

    useEffect(() => {
        //getData();
        
         getCredDef();
        //getAllModels();
    }, [])


    useEffect(() => {
        switch (selected) {
            case "thor":
                setData(thorPortfolio);
                break;
            case "ironman":
                setData(ironmanPortfolio);
                break;
            case "hulk":
                setData(hulkPortfolio);
                break;
            case "cap":
                setData(capPortfolio);
                break;
            default:
                setData(thorPortfolio);
        }
    }, [selected])

    function getData() {
        
         const supp = AgentService.getStatus(8041)
            .then(response => {
                /* setName(response.name)
                setEmail(response.email)
                setImage(response.imageUrl)
                setId(response.id)
                getModels(response.id)
                getSvg(response.id); */
                console.log("response",response);
                //   nome(response.id, response.name)
            }).catch(error => {
                console.log("error", error);
            }) 
    }

    function getCredDef(){
        getCredDefIdAPI(localStorage.getItem("profilePort")).then(

        )
    }

  
    

    return (
        
        <div className="profile" id="profile">
            <h1>Agents </h1>
            <StatusBar />
            {console.log("localst",localStorage.getItem("profilePort"))}

        {console.log("credDef",credDef)}
         

        </div>
    );
}

export default Profile;

