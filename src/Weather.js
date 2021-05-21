import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';



import axios from 'axios';
import weathers from './weathers.jpg';

import {Avatar, Button, FormControlLabel, Grid ,Paper, TextField} from'@material-ui/core';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import SettingsSystemDaydreamTwoToneIcon from '@material-ui/icons/SettingsSystemDaydreamTwoTone';
import OpacityTwoToneIcon from '@material-ui/icons/OpacityTwoTone';
import './style.css'

const AxwInd = () => {
   const[temperature,setTemperature]=useState("");
   const[tempmin,settempmin]=useState("")  
   const[city,setCity]=useState("");
   const[description,setDescription]=useState("")
   const[country,setCountry]=useState("")
   const [wind,setWind]=useState("")
   const getweatherData=(city)=>{ 
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f947f7e94f4456388049aaab1737b815`).then(response=>{
        console.log(response.data.main.temp)
       setTemperature(response.data.main.temp -273.15)
       settempmin(response.data.main.temp_min-273.15)
       setDescription(response.data.weather[0].description)
       setWind(response.data.wind.speed)

 })
    .catch(er=>console.log(er))
    
}
    
    return ( <div className='ima'>
    <img src={weathers}></img>
    <div>
    <p> <LanguageTwoToneIcon />COUNTRY :<h6>{country}</h6> </p>
    <p> <LocationCityRoundedIcon />City :  <h6>{city}</h6></p>
    
   
   <p>Temperature: <h6>{Math.floor (temperature)}°C'</h6></p>
   <p>Temp_min: <h6>{Math.floor (tempmin)}°C'</h6></p>
   <p>Wind : <h6>{wind}</h6></p>
   <p>Description:<h6> {description}</h6></p>
   
   
   <div className='inputs'>
   <TextField label='Contry' fullWidth required value={country}onChange={(e)=>setCountry(e.target.value)}/>
       <TextField  label='City'  fullWidth required value={city}onChange={(e)=>setCity(e.target.value)}/>
      
    
   
    </div></div>
    <Grid >
   <Button className='b' type='submit' color='secondary'fullWidth variant='contained'onClick={()=>{
       getweatherData(city);
   }}>GET</Button></Grid>


   </div> 
)
}
export default AxwInd
