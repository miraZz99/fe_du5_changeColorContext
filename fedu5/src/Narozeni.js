import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";

const Narozeni = () => {
  const [data, setData] = useState([
    { year: "2018", value: 114036 },
    { year: "2019", value: 112231 },
    { year: "2020", value: 110200 },
    { year: "2021", value: 111793 },
    { year: "2022", value: 50011 },
  ]);

  const removeElement = (year) => {
    const newData = data.filter((dataa) => dataa.year !== year);
    setData(newData);
  };


  return (
    <div className="Narozeni">
      <h2>Počet živě narozených v ČR za posledních 5 let</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="year" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value"  background={{ fill: "#eee" }} />
      </BarChart>
      <div class="btn-group" role="group" aria-label="Basic example">
        {data.map((dataa) => (
          <div key={dataa.year} className="Narozeni-btn">
            <button
              onClick={() => removeElement(dataa.year)}
              type="button"
              class="btn btn-secondary"
            >
              {dataa.year}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Narozeni;
