import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Chart({ labels, data }) {
  return (
    <>
      {(labels && data) ?
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
                color: (opacity = 0.1) => `rgba(90, 104, 230, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={300}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 0.1) => `rgba(75, 75, 75, ${opacity})`,
            strokeWidth: 2,
          }}
          bezier
        />
      : <ActivityIndicator size="large" color="#5A68E6" />}
    </>
  );
}
