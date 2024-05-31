import { React, useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import sharedata from "../../stockData";
import sharedata from "../../sharedata";

export default function Tcs() {
    // const params = useParams();
    // const sharedata[8] = sharedata.find((s) => s.id === params.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/getTcs")
            .then((response) => {
                setData(
                    response.data.map((item) => ({
                        date: new Date(item.date).toLocaleDateString(),
                        open: item.Open,
                        high: item.High,
                        low: item.Low,
                        close: item.Close,
                        volume: item.Volume,
                        tomorrow: item.Tomorrow,
                        target: item.Target,
                    }))
                );
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the graph data!",
                    error
                );
            });
    }, []);
    return (
        <section className="bgImg shareDetailsSection">
            <div className="sdmaindiv">
                <div className="sdsubdiv">
                    <div className="shareDetailsDiv">
                        <div className="sdd2">
                            <img
                                src={`../../public/${sharedata[8].image}`}
                                alt={sharedata[8].shareName}
                                className="imagelogo"
                            />
                            <span>{sharedata[8].shareName}</span>
                            <span>₹ {sharedata[8].high}</span>
                        </div>
                    </div>
                    <div className="graph">
                        <LineChart width={400} height={200} data={data}>
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
                        <div className="selectedShareDescription">
                            {sharedata[8].description}
                        </div>
                    </div>
                </div>
                <div className="sdnews">
                    <div className="sdnewsimage">
                        {sharedata[8].gainLoss == 0 ? (
                            <img src="../../public/up.svg" alt="Image 1" />
                        ) : (
                            <img src="../../public/down.svg" alt="Image 2" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
