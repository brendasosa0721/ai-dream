require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = { 
  generateImage: async function(req) {
    obj = JSON.parse(req.prompt);
    console.log(">>>>>>>>>> FETCHING AI");
    const result = await openai.createImage({
      prompt: generatePrompt(obj),
      n: Number(obj.conceptInfo.numCreations),
      size: "512x512",
    });
    generatePrompt(obj);
    return result;
  }
}

function generatePrompt(obj) {

  let propmt;

  if (!obj.currentBusinessType || obj.currentBusinessType === 'Select type...'){
    obj.currentBusinessType = `` 
  } else {
    obj.currentBusinessType = `for a ${obj.currentBusinessType}`;
  }

  if (obj.conceptInfo.detailType === 'Select' || obj.conceptInfo.detailType === 'General Purpose Image') {
    obj.conceptInfo.detailType = 'image';
  }

  if (obj.conceptInfo.pColor) {
    obj.conceptInfo.pColor = `${obj.conceptInfo.pColor}`;
  } else {
    obj.conceptInfo.pColor = '';
  }

  if (obj.conceptInfo.sColor) {
    obj.conceptInfo.sColor = `and ${obj.conceptInfo.sColor}`;
  } else {
    obj.conceptInfo.sColor = '';
  }

  if (!obj.conceptInfo.style){
    obj.conceptInfo.style = ``;
  } else {
    obj.conceptInfo.style = `with style of ${obj.conceptInfo.style}`;
  }

  if (!obj.conceptInfo.imageDetail){
    obj.conceptInfo.imageDetail = `` 
  } 

  if (!obj.conceptInfo.technique){
    obj.conceptInfo.technique = `` 
  } 

  if (!obj.conceptInfo.art){
    obj.conceptInfo.art = `` 
  } 

  if (!obj.conceptInfo.camera){
    obj.conceptInfo.camera = `` 
  } else {
    obj.conceptInfo.camera = `${obj.conceptInfo.camera} photo`
  }
  


  if (obj.conceptInfo.type === 'logo'){
    propmt = `A ${obj.conceptInfo.logoStyle} ${obj.conceptInfo.detailType} ${obj.currentBusinessType},
                     ${obj.conceptInfo.description}, ${obj.conceptInfo.pColor}, ${obj.conceptInfo.sColor}}` 
  }


  if (obj.conceptInfo.type !== 'logo'){
    propmt = `A ${obj.conceptInfo.detailType}, ${obj.conceptInfo.description}, ${obj.conceptInfo.pColor}, 
              ${obj.conceptInfo.sColor}, ${obj.conceptInfo.style}, ${obj.conceptInfo.imageDetail}, 
              ${obj.conceptInfo.technique}, ${obj.conceptInfo.art}, ${obj.conceptInfo.camera}}` 
  }

 
  return propmt;
}


