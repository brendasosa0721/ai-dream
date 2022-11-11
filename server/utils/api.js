require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = { 
  generateImage: async function(req) {
    console.log(">>>>>>>>>> FETCHING AI");
    const result = await openai.createImage({
      prompt: generatePrompt(req.prompt),
      n: 1,
      size: "512x512",
    });
    generatePrompt(req.prompt);
    return result;
  }
}

function generatePrompt(data) {
  obj = JSON.parse(data);
  console.log(obj);
  let specialPrompt = "logo design concept " + data;
  return specialPrompt;
}

