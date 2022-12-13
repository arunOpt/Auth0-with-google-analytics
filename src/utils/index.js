var request = require("request");

const getToken = () => {
  var options = {
    method: "POST",
    url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: `${process.env.AUTH0_CLIENT_ID}`,
      client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
      audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
      grant_type: "client_credentials",
    }),
  };
  console.log(options, 33);
  request(options, function (error, response, body) {
    if (error) console.log(222, error);

    console.log(body, 111);
  });
};
export { getToken };
