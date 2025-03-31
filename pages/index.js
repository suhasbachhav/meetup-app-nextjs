import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';


function HomePage(props) {
    return (
        <>
            <Head>
                <title>Meetup page</title>
                <meta
                    name='Meetup page'
                    decription='Meetup page'
                />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </>
    );
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.jlz31gi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.find().toArray();
    const meetupData = result.map(meetup=> ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString()
    }));

    client.close();
    return {
        props: {
            meetups: meetupData
        },
        revalidate: 1
    };
}

export default HomePage;
