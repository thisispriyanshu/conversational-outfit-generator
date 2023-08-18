const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.APIKEY, // defaults to process.env["OPENAI_API_KEY"]
});

// @desc openAI IMAGE
// @Route POST /image
// @Access Public
const generateOutfit = async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await openai.images.generate({
      prompt,
      n: 1,
      size: "256x256",
    });
    return res.json({ result: result.data });
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
