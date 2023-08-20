const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.APIKEY, // defaults to process.env["OPENAI_API_KEY"]
});

const SYSTEM_PROMPT = "You are a fashion designer. Generate optimized prompt of less than 1000 characters for image generation model";

const getImagePrompt = async (prompt) => {
  try{
    const result = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{role:'user', content: SYSTEM_PROMPT}, ...Array.from(prompt)],
    });
    return result.choices[0].message.content;
  } catch(error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};


const generateOutfit = async (req, res) => {
  const { prompt } = await req.body;
  const optimizedPrompt = await getImagePrompt(prompt, res);
  // return res.json({ type: 'text', content: optimizedPrompt, self: false });
  console.log(optimizedPrompt);
  try {
    const result = await openai.images.generate({
      prompt: optimizedPrompt,
      n: 1,
      size: "256x256",
    });
    console.log(result);
    return res.json({ type: 'image', content: result.data[0].url, self: false });
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
