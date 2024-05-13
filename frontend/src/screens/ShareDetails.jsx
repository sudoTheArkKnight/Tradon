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
    const filteredNews = newsData.filter(
        (data) => data.company === selectedShare.shareName
    );
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
                    <div className="graph">
                        <LineChart
                            width={1100}
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
                                strokeWidth={4}
                                dot={false}
                            />
                        </LineChart>
                        <div className="selectedShareDescription">
                            {selectedShare.description}
                        </div>
                    </div>
                </div>
                <div className="sdnews">
                    <div className="sdnewsimage">
                        {selectedShare.gainLoss == 0 ? (
                            <img src="../../public/up.svg" alt="Image 1" />
                        ) : (
                            <img src="../../public/down.svg" alt="Image 2" />
                        )}
                    </div>
                    <h2 className="sdnewshead">News</h2>
                    {filteredNews.map((data, index) => (
                        <NewsCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
const NewsCard = ({ data }) => {
    return <div className="ncard2 sdnewsCard">{data}</div>;
};
