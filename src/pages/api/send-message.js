const handler = async (req, res) => {
  if (req.method === "POST") {
    const accountSid = "AC1b336fe8284447f8209c7a0d4d3c19f3";
    const authToken = "4d0d7bf3d993ff8f0ead7552a5004806";

    const jsonBody = req.body;
    const convertedJson = JSON.parse(jsonBody);

    const { name, telephone, details } = convertedJson;

    const client = require("twilio")(accountSid, authToken);
    const response = await client.messages.create({
      body: `Имя: ${name}, телефон: ${telephone} Детали: ${details}`,
      to: "+77754778811", // Text your number
      from: "+13135138013", // From a valid Twilio number
    });

    console.log(response);

    res.status(200).json({ message: "ITS ALIVE" });
  }
};
export default handler;
