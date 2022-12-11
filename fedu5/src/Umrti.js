import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import { useState } from "react";

const Umrti = () => {
  const [data, setData] = useState([
    { year: "2018", value: 112920 },
    { year: "2019", value: 112362 },
    { year: "2020", value: 129289 },
    { year: "2021", value: 139891 },
    { year: "2022", value: 59661 },
  ]);

  const removeElement = (year) => {
    const newData = data.filter((dataa) => dataa.year !== year);
    setData(newData);
  };


    return (
      <div className="Umrti">
        <h2>Počet zemřelých v ČR za posledních 5 let</h2>
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
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        <div class="btn-group" role="group" aria-label="Basic example">
        {data.map((dataa) => (
          <div key={dataa.year} className="Umrti-btn">
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

export default Umrti;