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
import { useParams } from "react-router-dom";
import sharedata from "../../stockData";
export default function ShareData() {
    const params = useParams();
    const selectedShare = sharedata.find((s) => s.id === params.id);
    return (
        <>
            <div>
                <img src={selectedShare.image} alt={selectedShare.shareName} />
                <span>{selectedShare.high}</span>
            </div>
            <LineChart width={800} height={450} data={selectedShare.data}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#008000" />
            </LineChart>
        </>
    );
}
