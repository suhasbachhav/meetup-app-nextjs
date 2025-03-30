import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUP= [{
    id:'m1',
    title: 'A first meetup',
    image: 'https://media.istockphoto.com/id/480807998/photo/ramkund-at-panchavati-in-nasik-india.jpg?s=1024x1024&w=is&k=20&c=jh8TYI8JnKDtRrOtYmTZeW4AKz27aaq_7yBWZgXZjJg=',
    address: 'test address add nashik',
    description: 'lorem lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum'
},{
    id:'m2',
    title: 'A first meetup',
    image: 'https://media.istockphoto.com/id/480807998/photo/ramkund-at-panchavati-in-nasik-india.jpg?s=1024x1024&w=is&k=20&c=jh8TYI8JnKDtRrOtYmTZeW4AKz27aaq_7yBWZgXZjJg=',
    address: 'test address add nashik',
    description: 'lorem lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum'
},{
    id:'m3',
    title: 'A first meetup',
    image: 'https://media.istockphoto.com/id/480807998/photo/ramkund-at-panchavati-in-nasik-india.jpg?s=1024x1024&w=is&k=20&c=jh8TYI8JnKDtRrOtYmTZeW4AKz27aaq_7yBWZgXZjJg=',
    address: 'test address add nashik',
    description: 'lorem lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum lipsum lorem lipsum'
},]

function HomePage() {
    return ( 
        <MeetupList meetups={DUMMY_MEETUP}/>
     );
}

export default HomePage;