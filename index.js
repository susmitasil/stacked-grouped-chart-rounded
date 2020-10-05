import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Bar } from 'react-chartjs-2';

require ('./RoundedBars.js')

class App extends Component {
  constructor() {
    super();


    
    this.state = {
      data: {
       labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [20, 10, 30, 15],
            stack: 1,
            name:'AMR'
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [60, 20, 20, 30],
            stack: 1,
            
          },
          {
            label: "Approved",
            backgroundColor: "green",
            data: [40, 50, 20, 45],
            stack: 1,
          
          },
           {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [25, 5, 20, 10],
            stack: 2
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 2
          },
          {
            label: "Approved",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 2
          },
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [35, 5, 25, 10],
            stack: 3
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 3
          },
          {
            label: "Approved",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 3
          },
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [15, 5, 21, 17],
            stack: 4
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 4
          },
          {
            label: "Approved",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 4
          },
          
          
        ]
      },

      options: {
         cornerRadius: 10,
        legend: {
          labels: {
            generateLabels: function(chart) {
              return Chart.defaults.global.legend.labels.generateLabels.apply(this, [chart]).filter(function(item, i){
                  return i <= 2;
              });
            }
          }
        },
        scales: {
            xAxes: [
              {
                id:'xAxis1',
                type:"category",
                ticks:{
                  beginAtZero:true,
                  callback:function(label, data, index, datasetIndex, labels){
                    console.log(data)
                    var region = ['W1 W2 W3 W4'];
                    return region;
                  }
                }
              },
              
              {
                stacked: true
              },
            ],
            yAxes: [{
                stacked: true
            }]
        },
        tooltips: {
            mode: 'nearest',
            callbacks: {
                    title: function(tooltipItem, data) {
                      const arr = ['W1', 'W1','W1','W2', 'W2','W2','W3','W3','W3', 'W4','W4','W4']
                      console.log(tooltipItem)
                        return arr[tooltipItem[0].datasetIndex]
                    }
              }
        }
      }
    };
  }

  render() {
    return (
      <div>
         <Bar   data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
