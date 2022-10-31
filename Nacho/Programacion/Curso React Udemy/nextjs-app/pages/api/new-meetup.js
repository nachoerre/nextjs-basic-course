import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://nacho:a9mmQpECcWSuLSXZ@cluster0.5n9rl1l.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close(); //close de connection once we are done

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
