import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WeatherInfo: React.FC = () => {

    const { data, error, loading, } = useSelector((state: RootState) => state.weather);// s pomoschju destructurisazia witaschili eti tri peremennie i teper moschem ispolsowatj

    console.log(data);
    
    //obrabatiwaem kejs, kogda idet sagruska dannic, no oni escho ne polutscheni
    if ( loading ) {//esli sagruska idet, true
        return <div>Loading...</div>//to raspetschataj eto
    };

    //orabatiwaem kejs, kogda pri sagruske dannich proisoschla oschibka
    if ( error ) {//esli oschibka imeetsa
        return <div>Error: {error}</div>//{} - eto infa oschibka, peremennaja
    };

    //orabatiwaem kejs, kogda w date ne sochrarnena infa o pogode( to estj data pawna null)
    if ( !data ) {  //kagda data null(net infi o etom gorode), to sachodim sjuda !data eto !false, toestj true
        return null; //woswr null
    }

    //wo wsech ostalnich slutschajach budet rabotatj eto
    //toFixed ostaw 1 zifru posle sapjatoj w temperature
    return (
        <div>
            <h2>Weather Information</h2>
            <p>City: {data.name}</p>
            <p>Temperature: {(data.main.temp - 273.15).toFixed(1)} °C</p>
            <p>Description: {data.weather[0].description}</p>
        </div>
    );
};

export default WeatherInfo;