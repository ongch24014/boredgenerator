import React, { useState } from "react";
import "./Generator.css";
import axios from "axios";

const Generator = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const getQuote = () => {
    setLoading(true);
    axios
      .get(`http://www.boredapi.com/api/activity/`)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setQuote(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="generator-section">
      {quote && 
      <div className="boxed generated">
        <span>{!loading ? quote.activity : "loading..."}</span>
      </div>}
      <button disabled={loading} className="boxed" onClick={getQuote}>
        {quote ? "Next" : "Generate"}
      </button>
    </div>
  );
};

export default Generator;
