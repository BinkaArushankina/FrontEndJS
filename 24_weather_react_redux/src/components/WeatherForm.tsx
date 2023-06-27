import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../reducer/weatherReducer';

const WeatherForm: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {//schto sa sobitie i s kakim tipom
        e.preventDefault();//otmenaem defaultnoe powedenie formi
        dispatch(fetchWeather(city));//functia fetchweather otrabatiwaet s opr gorodom
        setCity('');
    }

  return (
    <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder='Enter city name'   
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>Get Weather</button>
    </form>
  );
};

export default WeatherForm;