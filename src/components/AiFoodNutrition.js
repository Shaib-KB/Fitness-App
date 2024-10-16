import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../App.css";
import axios from "axios";

export default function AiFoodNutrition() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const HTTP = "http://localhost:3001"; // Ensure correct port

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        setPrompt("");  // Reset the prompt only after successful response
      })
      .catch((error) => {
        setError("Failed to fetch data");
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      <Typography variant="h5" className="title text-center text-darkGreen">
        ChatGPT API
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Ask for food nutrition</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
        <button className="btn btn-accept w-100" type="submit" disabled={loading}>
          {loading ? "Fetching..." : "Go"}
        </button>
      </form>

      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
          {error && <span style={{ color: "red" }}>{error}</span>}

        </p>
      </div>
    </div>
  );
}
