import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

function MeetupDetails(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    decription={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.jlz31gi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: false,
        paths: result.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.jlz31gi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    const singleMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupId)});
    client.close();

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: singleMeetup._id.toString(),  // Convert _id to string
                title: singleMeetup.title,
                image: singleMeetup.image,
                address: singleMeetup.address,
                description: singleMeetup.description,
            },
        },
    };
}

export default MeetupDetails;