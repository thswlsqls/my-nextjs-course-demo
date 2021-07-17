// /api/new-meetup
// POST /api//new-meetup
import { MongoClient } from 'mongodb';

async function hander(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { tile, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://eunbin:eunbin@cluster0.qmbs2.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default hander;
