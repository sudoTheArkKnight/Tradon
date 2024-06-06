import React, { useState, useEffect } from "react";
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
import sharedata from "../../sharedata";
import port from "../../../backendPort";

export default function Hdfc() {
    const [data, setData] = useState([]);
    const [shareInfo, setShareInfo] = useState(null);

    useEffect(() => {
        // Fetch the share data from the API
        axios
            .get(`${port}/getHdfc`)
            .then((response) => {
                const fetchedData = response.data.map((item) => ({
                    date: new Date(item.date).toLocaleDateString(),
                    open: item.Open,
                    high: item.High,
                    low: item.Low,
                    close: item.Close,
                    volume: item.Volume,
                    tomorrow: item.Tomorrow,
                    target: item.Target,
                }));
                setData(fetchedData);
                // Assuming the first entry contains the share info we need to display
                const lastEntry = fetchedData[fetchedData.length - 1];
                setShareInfo({
                    high: lastEntry.high,
                    gainLoss: lastEntry.target,
                });
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the graph data!",
                    error
                );
            });
    }, []);

    if (!shareInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className="bgImg shareDetailsSection">
            <div className="sdmaindiv">
                <div className="sdsubdiv">
                    <div className="shareDetailsDiv">
                        <div className="sdd2">
                            <img
                                src={`../../public/${sharedata[1].image}`}
                                alt={sharedata[1].shareName}
                                className="imagelogo"
                            />
                            <span>{sharedata[1].shareName}</span>
                            <span>₹ {shareInfo.high}</span>
                        </div>
                    </div>
                    <div className="graph">
                        <LineChart width={1400} height={600} data={data}>
                            <Line
                                type="monotone"
                                dataKey="close"
                                stroke="#00ff00"
                                dot={false}
                            />
                            {/* <CartesianGrid stroke="#ccc" /> */}
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                        <div className="selectedShareDescription">
                            {sharedata[1].description}
                        </div>
                    </div>
                </div>
                <div className="sdnews">
                    <div className="sdnewsimage">
                        {shareInfo.gainLoss === 1 ? (
                            <img src="../../public/up.svg" alt="Gain" />
                        ) : (
                            <img src="../../public/down.svg" alt="Loss" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
