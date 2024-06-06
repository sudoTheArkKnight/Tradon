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
import sharedata from "../../sharedata";
export default function Apple() {
    // const params = useParams();
    // const sharedata[2] = sharedata.find((s) => s.id === params.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/getApple")
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
                                src={`../../public/${sharedata[4].image}`}
                                alt={sharedata[4].shareName}
                                className="imagelogo"
                            />
                            <span>{sharedata[4].shareName}</span>
                            <span>₹ {sharedata[4].high}</span>
                        </div>
                    </div>
                    <div className="graph">
                        <LineChart width={800} height={400} data={data}>
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
                            {sharedata[2].description}
                        </div>
                    </div>
                </div>
                <div className="sdnews">
                    <div className="sdnewsimage">
                        {sharedata[2].gainLoss == 0 ? (
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
