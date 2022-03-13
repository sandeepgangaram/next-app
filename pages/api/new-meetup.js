// mydomain.com/api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://Sand:WvtN7Q8GgONWjvRf@cluster0.xb6jj.mongodb.net/NextProjectMeetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups"); //to create meetup

    const result = await meetupCollection.insertOne(data); //we insert as it is as we recieve as it is, we can change it to our requirement
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
