import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const ShareCard = ({ data, allData, stockData }) => {
    console.log(stockData);
    return (
        <div className="sharecard">
            <div className="shareCarddiv1">
                <img
                    src={stockData.image}
                    alt={stockData.shareName}
                    className="sharecardImage"
                />
                {stockData.shareName}
                <LineChart
                    width={400}
                    height={200}
                    data={allData[data.name] || []}
                >
                    <Line
                        type="monotone"
                        dataKey="open"
                        stroke="#8884d8"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="high"
                        stroke="#82ca9d"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="low"
                        stroke="#ffc658"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#ff7300"
                        dot={false}
                    />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div className="shareCarddiv2">
                <p>{stockData.high}</p>
                <p>{stockData.low}</p>
                <p>{stockData.week}</p>
            </div>
        </div>
    );
};

export default React.memo(ShareCard);
