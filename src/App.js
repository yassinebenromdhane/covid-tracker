import "./App.css";
import CovidSummary from "./components/CovidSummary";
import LineGraph from "./components/LineGraph";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import image from "./images/image.png";
import { Select, option, Spinner } from "evergreen-ui";


function App() {
  const [selectedOrder, setSelectedOrder] = React.useState("asc");
  const [selectedField, setSelectedField] = React.useState("asc");
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState("");
  const [countrySummary, setCountrySummary] = useState([]);
  const [coronaCountAr, setCoronaCountAr] = useState([]);
  const [todayCases, setTodayCases] = useState(0);
  const [todayDeaths, setTodayDeaths] = useState(0);
  const [todayRecovered, setTodayRecovered] = useState(0);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/all`)
      .then((res) => {
        setLoading(false);
        console.log(res);

        if (res.status === 200) {
          setTotalConfirmed(res.data.cases);
          setTotalRecovered(res.data.recovered);
          setTotalDeaths(res.data.deaths);
          setCovidSummary(res.data);
          setTodayCases(res.data.todayCases);
          setTodayDeaths(res.data.todayDeaths);
          setTodayRecovered(res.data.todayRecovered);
          console.log(covidSummary, "ok");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/countries`)
      .then((res) => {
        setLoading(false);
        console.log(res);

        if (res.status === 200) {
          console.log(res.data);
          const c = res.data;
          console.log(c, "ok1");
          setCountrySummary(res.data);
          console.log(countrySummary, "countires");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <h1>
        Fetching Data From APi Postman.... <Spinner />
      </h1>
    );
  }

  /* const formatDate = (date) => {
    const d = new Date(date);
    const y =  d.getFullYear();
    const m = `0${d.getMonth()+1}`.slice(-2);
    const day = d.getDate();
    return `${y}-${m}-${day}`; 
  }   

  const countryHandler = (e) => {
    const d = new Date();
    const to =  formatDate(d);
    const tog = parseInt(days);
    const from = formatDate(d.setDate(d.getDate() - days));
    setCountry(e.target.value);
     console.log(country);
     console.log(from , to)
     getCovidReportByDateRange(e.target.value,from,to);
  }
  const getCovidReportByDateRange = (countrySlug, from, to) => {
     axios.get(`https://api.covid19api.com/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
     .then(res => {
        console.log(res)
        const yAxisCovidCount = res.data.map(d => d.Cases);
        setCoronaCountAr(yAxisCovidCount);
     })
     .catch(error => {
       console.log(error)
     })
  }*/

  const dayHandler = (e) => {
    setDays(e.target.value);
    console.log(days);
  };

  return (
    <div className="App">
      
       
      <img src={image} />

      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
        todayCases={todayCases}
        todayDeaths={todayDeaths}
        todayRecovered={todayRecovered}
      />

      <div>
        <Select width="20%" value={country}>
          {countrySummary && countrySummary.map(country => (
            <option value={country.countryInfo.iso2} key={country.country}>
              {country.country}
            </option>
          ))}
        </Select>

        <Select value={days} onChange={dayHandler} width="20%">
          <option value="7">7 days</option>
          <option value="30"> 30 days</option>
          <option value="364"> 1 year</option>
        </Select>
      </div>
      <LineGraph yAxis={coronaCountAr} />
    </div>
  );
}

export default App;
