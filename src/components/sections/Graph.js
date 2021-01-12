import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';

export default function Graph() {
  const { colorMode } = useColorMode();
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Temperature (C°)',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#E53E3E',
        borderColor: '#E53E3E',
        borderWidth: 4,
        data: [-23, -22, -24, -14, -5, 4, 5, 5, 3, -5, -13, -24],
      },
      {
        label: 'Percipitiation (mm)',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#63B3ED',
        borderColor: '#63B3ED',
        borderWidth: 4,
        data: [21, 15, 22, 28, 26, 35, 60, 64, 55, 37, 28, 18],
      },
      {
        label: 'Growing Season',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#48BB78',
        borderColor: '#48BB78',
        borderWidth: 4,
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: colorMode === 'light' ? '#4A5568' : '#A0AEC0',
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: colorMode === 'light' ? '#4A5568' : '#A0AEC0',
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: colorMode === 'light' ? '#4A5568' : '#A0AEC0',
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}
