export default async ({ req, res, log, error }) => {
  if (req.method === "GET") {
    return res.send('res from get request')
  }
  if (req.method === "POST") {
    return res.json({
      'sendData': req.body,
      'NEWENV': process.env.NEW_NAME,
      'OLDENV': process.env.OLD_NAME,
      "TESTENV": process.env.TEST_NAME
    });
  }
};
