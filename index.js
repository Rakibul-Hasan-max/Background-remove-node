var request = require("request");
var fs = require("fs");

request.post(
  {
    url: "https://api.remove.bg/v1.0/removebg",
    formData: {
      image_url:
        "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?cs=srgb&dl=pexels-pixabay-67552.jpg&fm=jpg",
      size: "auto",
    },
    headers: {
      "X-Api-Key": "RP9tWe75G3r5SFEVtjT9Lqa8",
    },
    encoding: null,
  },
  function (error, response, body) {
    if (error)
      return console.error(
        "Request Failed Because Invalid URL or File:",
        error
      );
    if (response.statusCode != 200)
      return console.error(
        "Error:",
        response.statusCode,
        body.toString("utf8")
      );

    fs.writeFileSync("./transparent-image/remove.png", body);
  }
);
