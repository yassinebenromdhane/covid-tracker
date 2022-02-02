import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: props.yAxis,
            fill: false,
            backgroundColor: 'rgba(4, 0, 216, 0.467);',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

    return (
        <div  style={{
            width : '600px' ,
            height : '600px',
            margin : '50px auto',
        }}
        >
            <Line data= { data }
            options = { options }
            />
        </div>
    )
}

export default LineGraph
