const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.IMAGE_BB_API_KEY}`
const getImageUrl = async (buffer, prompt) => {
  // console.log(buffer);
  const imageFormData = new FormData();
  imageFormData.append(
    "image",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpg`
  );

  const response = await fetch(image_hosting_api, {
    method: "POST",
    // headers: {
    //     'content-type' : "multipart/form-data"
    // },
    body: imageFormData,
  });

  const imgData = await response.json();

  return imgData;
};

module.exports = { getImageUrl };
