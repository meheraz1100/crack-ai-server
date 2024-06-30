const { db } = require("../utils/dbconnect");
const { getImageData } = require("../utils/getImageData");
const { getImageUrl } = require("../utils/getImageUrl");

const paintingCollection = db.collection('paintings')
const testRoute = (req, res) => {
  res.send("painting hitted");
};

const generatePaint = async (req, res) => {
    const {body} = req || {};
    const {prompt, email, category, type} = body || {};
    const buffer = await getImageData(prompt)
    const imageData = await getImageUrl(buffer, prompt);
    
    const data = {
      title: imageData?.data.title,
      prompt: prompt,
      email,
      category,
      type,
      thumb: imageData?.data?.thumb?.url,
      url: imageData?.data?.url,
      medium_url: imageData?.data?.medium?.url
    };
    const result = await paintingCollection.insertOne(data)
    res.send(result);
}

module.exports={ testRoute, generatePaint };