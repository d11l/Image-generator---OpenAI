const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function GenerateImage(req, res){
const {prompt , size} = req.body;

const Imgsize = size === "small" ? "256x256" :
size === "medium" ? "512x512" : "1024x1024";

try{                        // All functions
  const response = await openai.createImage({
    prompt, // Text description for the image
     n : 1 ,  // Number of images  
    size:Imgsize
    });
    const imageUrl = response.data.data[0].url ;

    res.status(200).json({
        success: true ,
        data : imageUrl
    })

}
 catch(e){
    if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log(e.message);
      } 
    res.status(400).json({
        success: false ,
        e : "The image could not be generated"
    })
}
};

module.exports = {GenerateImage} ;
