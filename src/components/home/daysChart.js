import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import faker from "@faker-js/faker";
import "./daysChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "7 Days Forecast",
    },
  },
};

export default function DaysChart() {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const getData = () => {
    setLoading(true);
    if (days?.length) {
      setLoading(false);
    }

    return {
      days,
      datasets: [
        {
          label: "High Temp",
          data: [90, 90, 40, 40, 60, 80, 40, 30, 20, 10, 0, 100],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Low Temp",
          data: [90, 90, 40, 40, 60, 80, 40, 30, 20, 10, 0, 100],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  };
  useEffect(() => {
    setLoading(true);
    const labels = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    let info = [];
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-73.93&appid=b7b87b0335c725dc048bea24f1743fc6"
    )
      .then((r) => r.json())
      .then((r) => {
        r.daily.forEach((element) => {
          let date = new Date(element.dt * 1000);
          let day = date.getDay();
          info.push(labels[day]);
        });
        info.pop();
        setDays(info);
        setLoading(false);
      });
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
      <div className="main-block">
        <Line options={options} data={getData()} />
      </div>
    </React.Fragment>
  );
}
