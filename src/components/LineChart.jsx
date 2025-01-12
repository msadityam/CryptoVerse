import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  let len=coinHistory?.data?.history?.length
  console.log(len);
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTimestamp.push(
      new Date(coinHistory.data.history[len-i-1].timestamp).toLocaleDateString()
    );
    coinPrice.push(coinHistory.data.history[len-i-1].price);
  }
console.log(coinHistory);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
    // remove the [ & ] here
    yAxes: {
    scaleLabel: {
    display: true,
    fontColor: 'white',
    fontSize: 25,
    labelString: 'Faction Points',
    },
    ticks: {
    beginAtZero: true,
    },
    },
    },
    };
  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-Typography.Title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="chart-container">
          <Typography.Title level={5} className="chart-Typography.Title">
            {coinHistory?.data?.change}
          </Typography.Title>
          <Typography.Title level={5} className="chart-Typography.Title">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};


export default LineChart