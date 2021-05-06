import React, { useEffect, useState } from 'react';
const TempApp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState('ambala');
    const [time, setTime] = useState()
    var DateTime = new Date().toLocaleTimeString();

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://goweather.herokuapp.com/weather/${search}`
            const wData = await fetch(url);
            const jsonData = await wData.json();
            setCity(jsonData)
            console.log(jsonData)

        }

        fetchApi();
    }, [search])
    const getTime = () => {
        DateTime = new Date().toLocaleTimeString();
        setTime(DateTime)
       

    }
    setInterval(getTime, 1000)
    
    if(search === ""){
        return setSearch('ambala')
    }
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputField"
                        onChange={(e) => {
                            setSearch(e?.target?.value);
                        }} />
                </div>

                <div>
                <h1 className="tempmin_max"></h1>
                    {city?.message!=="NOT_FOUND" && city?.description!==""&& city?.description!=="span" ? <div className="info">

                        <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}


                        </h2>
                        <h1 className="temp">{city?.temperature}</h1>


                        <h3 className="tempmin_max">{city?.description}</h3>
                        <h3 className="tempmin_max">Wind:{city?.wind}</h3>
                        <h3 className="tempmin_max">{time}</h3>



                    </div> : <p className="errorMsg">No Data Found</p>}
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </div>
            </div>
        </>
    )
};
export default TempApp;