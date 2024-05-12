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
import newsData from "../../newsData";
export default function ShareData() {
    const params = useParams();
    const selectedShare = sharedata.find((s) => s.id === params.id);
    return (
        <section className="bgImg shareDetailsSection">
            <div className="sdmaindiv">
                <div className="sdsubdiv">
                    <div className="shareDetailsDiv">
                        <div className="sdd2">
                            <img
                                src={`../../public/${selectedShare.image}`}
                                alt={selectedShare.shareName}
                                className="imagelogo"
                            />
                            <span>{selectedShare.shareName}</span>
                            <span>₹ {selectedShare.high}</span>
                        </div>
                    </div>
                    <LineChart
                        width={800}
                        height={450}
                        data={selectedShare.data}
                    >
                        {/* <CartesianGrid strokeDasharray="5 5" /> */}
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#008000"
                            strokeWidth={5}
                        />
                    </LineChart>
                    <div className="selectedShareDescription">
                        {selectedShare.description}
                    </div>
                </div>
                <div className="sdnews">
                    <div>
                        {selectedShare.gainLoss == 0 ? (
                            <img src="../../public/up.svg" alt="Image 1" />
                        ) : (
                            <img
                                src="../../public/down.jpg"
                                alt="Image 2"
                                className="down"
                            />
                        )}
                    </div>
                    <h2>News</h2>
                    {newsData.map((data, index) => (
                        <NewsCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
const NewsCard = ({ data }) => {
    return <div className="ncard sdnewsCard">{data}</div>;
};
