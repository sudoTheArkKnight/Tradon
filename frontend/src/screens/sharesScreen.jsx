import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import sharedata from "../../stockData";
import newsData from "../../newsData";
import { Link } from "react-router-dom";
const SharesScreen = () => {
    const [selectedShareName, setSelectedShareName] = useState(
        sharedata[3].shareName
    );
    const selectedShare = sharedata.find(
        (s) => s.shareName === selectedShareName
    );
    console.log(selectedShareName);
    return (
        <section className="shareSection bgImg">
            <h2 className="shareHeading">Welcome</h2>
            <div className="shareDiv">
                <a href={`/share/${selectedShare.id}`}>
                    {/* <Link
                    to={{
                        pathname: `share/1`,
                        state: selectedShare,
                    }}
                > */}
                    {sharedata.map((stockInfo, index) => (
                        <div
                            onClick={() =>
                                setSelectedShareName(stockInfo.shareName)
                            }
                            key={index}
                        >
                            <ShareCard {...stockInfo} />
                        </div>
                    ))}
                    {/* </Link> */}
                </a>
            </div>
            <h1>News</h1>
            <div className="newsCard">
                {newsData.map((data, index) => (
                    <NewsCard key={index} {...data} />
                ))}
            </div>
            {/* <Link
                to={{
                    pathname: "/ShareDetails",
                    state: { shareData: selectedShare }, // Pass your ShareData here
                }}
            >
                <div className="newsCard">
                    {newsData.map((data, index) => (
                        <NewsCard key={index} {...data} />
                    ))}
                </div>
            </Link> */}
            {/* <Link to="/ShareDetails">
                <ShareDetails share={selectedShare} />
            </Link> */}
        </section>
    );
};

const ShareCard = ({ image, shareName, high, low, week, data, id }) => {
    return (
        <div className="sharecard">
            <img src={image} alt={shareName} className="sharecardImage" />
            <h3>{shareName}</h3>
            <LineChart width={400} height={150} data={data}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#008000" />
            </LineChart>
            <h3>{high}</h3>
            <h3>{low}</h3>
            <h3>{week}</h3>
        </div>
    );
};

const NewsCard = ({ data }) => {
    return <div className="ncard">{data}</div>;
};
export default SharesScreen;
