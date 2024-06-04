
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const ShareCard = ({ data, allData, stockData }) => {
    const stockDataArray = allData[data.name] || [];
    const lastData = stockDataArray[0] || {};
    
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
                    data={stockDataArray}
                >
                    <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#00ff00"
                        dot={false}
                    />
                    <XAxis hide
                        dataKey="date" 
                        reversed={true} // Reverse the x-axis direction
                    />
                    <YAxis hide />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="shareCarddiv2">
                <p>{Math.round(lastData.high)}</p>
                <p>{Math.round(lastData.low)}</p>
                <p>{Math.round(lastData.close)}</p>
            </div>
        </div>
    );
};

export default React.memo(ShareCard);
