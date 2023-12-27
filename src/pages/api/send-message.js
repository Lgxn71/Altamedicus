const handler = async (req, res) => {
  if (req.method === "POST") {
    const accountSid = process.env.twilioAccountSid;
    const authToken = process.env.twilioAuthToken;

    const { name, telephone, details } = JSON.parse(req.body);

    if (name.length === 0 || telephone.length === 0 || details.length === 0) {
      console.log("invalid input");
    }

    const client = require("twilio")(accountSid, authToken);
    const response = await client.messages.create({
      body: `Имя: ${name}, телефон: ${telephone} Детали: ${details}`,
      to: "+77754778811",
      from: "+13135138013",
    });
    console.log(response);

    res.status(200).json({ message: "ITS ALIVE" });
  }
};
export default handler;
