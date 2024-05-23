import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../itemcard/ItemCard";
import "./itemList.css";

function Itemlist() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: "https://real-time-amazon-data.p.rapidapi.com/best-sellers",
        params: {
          category: "fashion",
          page: "1",
          country: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "5419ea82demsh7de455811ba4e22p1cc8f4jsnaf47c28990ca",
          "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        localStorage.setItem(
          "data",
          JSON.stringify(response.data.data.best_sellers)
        );
        console.log(response.data);
        // setData(response?.data?.data?.best_sellers);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div className="main-container" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
        alignItems: "baseline",
      
      }}>
        {data.map((item, index) => {
          return <ItemCard item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Itemlist;
