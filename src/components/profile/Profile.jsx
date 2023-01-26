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
import { Link } from "react-router-dom";
import add from "../../assets/add.png";
import axios from 'axios';
import { _url, _urlNuovo, _urlResources } from "../config";
import provideDiagram from "../../ssi/ElaborateDiagram";
import StatusBar from '../statusBar/StatusBar'

const Profile = (props) => {

    const [files, setFiles] = useState([]);
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
        
        // getModels()
        getAllModels();
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

    function getModels(id) {
        id
            ? $.ajax({
                method: "GET",
                url: _url + "/getMyFiles",
                data: { id: id, },
                success: function (data) {
                    setModels(data)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
                }
            })
            : console.log('nessun id')
    }
    function getSvg(id) {
        id
            ? $.ajax({
                method: "GET",
                url: _url + "/getMySvg",
                data: { id: id, },
                success: function (data) {
                    setSvg(data)
                    console.log("chiamata data",data)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
                }
            })
            : console.log('nessun id')
    }

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        console.log('files0', files[0]);
        //const imgBlob = new Blob([files[0]], { type: 'xml' });
        //for (let i = 0; i < files.length; i++) {
        data.append('upload', files[0],
            "static/" + id + "/" + files[0].name + ".bpmn");
        //data.append('svg', files[1]);

        //}
        //data.append("id", id);
        data.append("tenant-id", id);

        console.log(data, "data");

        $.ajax({
            method: 'POST',
            url: _urlNuovo + "/engine-rest/deployment/create",
            data: data,
            processData: false,
            contentType: false
        }).done(function (result) {
            // do something with the result now

            console.log(result);
        }).fail(function (a, b, c) {
            alert("error");
        });
    };

    function elimina(d) {
        $.ajax({
            method: "GET",
            url: _url + "/deleteDiagram",
            data: {
                path: d,
                user: id
            },
            success: function (data) {
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
            }
        })
    }

    function getAllModels() {
        
        $.ajax({
            method: "GET",
            url: _urlNuovo + "/engine-rest/process-definition",
            success: function (data) {
                setProcess(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
            }
        })

    }

    function eliminaDaNome(models, name) {
        //console.log("MODELSS", models);
        //console.log("NAME",name);
        name = "static/" + id + "/" + name;
        models.map((d) => {
            if (name === d.resource) {
                $.ajax({
                    method: "DELETE",
                    url: _urlNuovo + "/engine-rest/process-definition/" + d.id,
                    success: function (data) {
                        console.log("data", data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
                    }
                })
                $.ajax({
                    method: "DELETE",
                    url: _urlNuovo + "/engine-rest/deployment/" + d.deploymentId + "?cascade=true",
                    success: function (data) {
                        console.log("data", data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("funzione chiamata quando la chiamata fallisce", jqXHR, textStatus, errorThrown);
                    }
                })
            }
        }
        );
    }

    return (
        <div className="profile" id="profile">
            <h1>Agents </h1>
            <StatusBar />
        
         

        </div>
    );
}

export default Profile;

