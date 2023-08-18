const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.APIKEY,
});
const openai = new OpenAIApi(configuration);

// @desc openAI IMAGE
// @Route POST /image
// @Access Public
const generateOutfit = async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await openai.createImage({
      prompt,
      n: 1,
      size: "256x256",
    });
    return res.json({ result: result.data.data[0].url });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return res
        .status(error.response.status)
        .json({ error: error.response.data });
    } else {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { generateOutfit };
