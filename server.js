

const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const  Configuration = require("openai");
const OpenAIApi = require("openai");


const config = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/chat",async(req,res)=>{res.status(200).send({message:'hello from chat',})});
// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js


// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const Configuration = require("openai");
// const OpenAIApi = require("openai");

// const config = new Configuration({
//   apiKey:
//     "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",
// });

// const openai = new OpenAIApi(config);

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/chat", async (req, res) => {
//   const { prompt } = req.body;

//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     max_tokens: 512,
//     temperature: 0,
//     prompt: prompt,
//   });
//   res.send(completion.data.choices[0].text);
// });
// const PORT = 8020;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
