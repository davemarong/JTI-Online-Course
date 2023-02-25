exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      envvar: process.env.EMAIL_PASSWORD,
    }),
  };
};
