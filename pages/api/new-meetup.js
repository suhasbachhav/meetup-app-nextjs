import { MongoClient } from "mongodb";


async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

    
        const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.jlz31gi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201);
        res.json({message: 'Meetup inserted'});
    }
}

export default handler;