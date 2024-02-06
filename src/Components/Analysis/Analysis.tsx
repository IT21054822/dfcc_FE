import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import './Analysis.css'

function Analysis() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  const initializeChart = (chartRef, data) => {
    if (chartRef.current) {
      chartRef.current.getContext("2d").clearRect(0, 0, chartRef.current.width, chartRef.current.height);
    }

    return new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors,
          },
        ],
      },
    });
  };

  useEffect(() => {
    const data1 = {
      labels: ["Label1", "Label2", "Label3"],
      values: [500, 50, 100],
      colors: [
        "#d62424",
        "rgb(54, 162, 235)",
        "rgb(208, 208, 208)"
      ],
    };

    const data2 = {
      labels: ["LabelA", "LabelB", "LabelC"],
      values: [200, 300, 150],
      colors: [
        "#d62424",
        "rgb(40, 0, 0)",
        "rgb(208, 208, 208)",
      ],
    };

    chartInstance1.current = initializeChart(chartRef1, data1);
    chartInstance2.current = initializeChart(chartRef2, data2);

    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div className="containerr">
      <canvas ref={chartRef1} />
      <canvas ref={chartRef2} />
    </div>
  );
}

export default Analysis;
