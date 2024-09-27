import axios from 'axios';

const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WeatherAPI}`;

        const response = await axios.get(url);
        const data = response.data; // Use response.data directly
        console.log(data);
        return data; // Return the data for further use
    } catch (error) {
        console.log("Error is: " + error);
    }
};

export default search;
