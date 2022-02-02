import React from 'react';
import Card  from './Card';
const CovidSummary = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country,
        todayCases,
        todayDeaths,
        todayRecovered
    } = props
    return (
      <div>
        <div>
          <div>
            <h1>{ country === '' ? 'World Wild Corona 19 Report' : country}</h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent : "center"
          }}
        >
          <Card >
            <span>Total Confirmed</span> <br />
            <span>+ {todayCases}</span><br />
            <span>+ {totalConfirmed}</span>
            <hr className="covBlue"/>
          </Card>
          <Card >
            <span>Total Recovered</span><br />
            <span>+ {todayRecovered}</span> <br />
            <span>+ {totalRecovered}</span>
            <hr className="covGreen"/>
          </Card>
          <Card>
            <span>Total Deaths</span> <br />
            <span>+ {todayDeaths}</span> <br />
            <span>+ {totalDeaths}</span>
            <hr className="covRed"/>
          </Card>
        </div>
      </div>
    );
}

export default CovidSummary
