import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const ResidentInfo = ({link}) =>{

    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`${link}`)
            .then(res=>{
                //console.log(res.data);
                setInfo(res.data);
            })
    },[link]);

        let episodies = info.episode?.length;

    return (
        <div className='card'>
            <img src={info.image} alt="img-card" />
            <div className='container_info'>
                <h2>Name:{info.name}</h2>
                <div className='line'><hr/></div>
                <h5>Race: {info.species}</h5>
                <h5>Origen: {info.origin?.name}</h5>
                <h5>Status: {info.status}</h5>
                <h5>Episodes where appear: {episodies}</h5>
            </div>
        </div>
    );
}

export default ResidentInfo;