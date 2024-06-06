import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import sharedata from "../../sharedata";
import port from "../../../backendPort";

const ShareCard = lazy(() => import("../components/ShareCard"));

const collections = [
    { name: "icici", url: "/icici" },
    { name: "hdfc", url: "/hdfc" },
    { name: "google", url: "/google" },
    { name: "hal", url: "/hal" },
    { name: "apple", url: "/apple" },
    { name: "amazon", url: "/amazon" },
];

const SharesScreen = () => {
    const [news, setNews] = useState([]);
    const [allData, setAllData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `${port}/getNews`
                );
                setNews(response.data);
            } catch (error) {
                console.error("There was an error fetching the news!", error);
            }
        };

        const fetchData = async () => {
            try {
                const dataPromises = collections.map((collection) =>
                    axios
                        .get(
                            `${port}/getGraph/${collection.name}`
                        )
                        .then((response) => ({
                            collection: collection.name,
                            data: response.data.slice(-30).map((item) => ({
                                date: new Date(item.date).toLocaleDateString(),
                                close: item.Close,
                                high: item.High,
                                low: item.Low,
                            })),
                        }))
                );
                const allDataResponses = await Promise.all(dataPromises);
                const dataMap = allDataResponses.reduce(
                    (acc, { collection, data }) => {
                        acc[collection] = data;
                        return acc;
                    },
                    {}
                );
                setAllData(dataMap);
            } catch (error) {
                console.error(
                    "There was an error fetching the stock data!",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
        fetchData();
    }, []);

    const memoizedCollections = useMemo(() => collections, []);

    if (loading) {
        return <Loader />;
    }
    console.log(allData);
    return (
        <section className="shareSection bgImg">
            <div className="sharehighlow">
                <h2 className="shareHeading">Welcome</h2>
                <div className="sharehighlow2">
                    <p className="p1">High</p>
                    <p className="p2">Low</p>
                    <p className="p3">Prev Close</p>
                </div>
            </div>
            <div className="shareContainer">
                <div className="shareDiv">
                    {memoizedCollections.map((stockInfo, index) => (
                        <Link to={stockInfo.url} key={index}>
                            <Suspense fallback={<Loader />}>
                                <ShareCard
                                    data={stockInfo}
                                    allData={allData}
                                    stockData={sharedata[index]}
                                />
                            </Suspense>
                        </Link>
                    ))}
                </div>
            </div>
            <h1 className="newsWord">News</h1>
            <div className="newsCard">
                {news.map((user, index) => (
                    <div key={index}>
                        <h2>{user.site_name}</h2>
                        <div>{user.left_block_content}</div>
                        <ul>
                            {user.p_tags.map((tag, i) => (
                                <li key={i}>
                                    {tag} <br /> <br />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SharesScreen;
