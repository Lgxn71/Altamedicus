const handler = async (req, res) => {
  if (req.method === "POST") {
    const accountSid = "AC06f65bb67668c7ca7452a042c037675e";
    const authToken = "62c5ae484abaede0a084d311a23472c7";

    const jsonBody = req.body;
    const convertedJson = JSON.parse(jsonBody);

    const { name, telephone } = convertedJson;

    const client = require("twilio")(accountSid, authToken);
    const response = await client.messages.create({
      body: `Имя:${name} телефон:${telephone}`,
      to: "+821064426041", // Text your number
      from: "+12705176200", // From a valid Twilio number
    });

    res.status(200).json({ message: "ITS ALIVE" });
    console.log(response);
  }
};
export default handler;
