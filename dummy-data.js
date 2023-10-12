const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e4',
    title: 'Yoga for Developers',
    description:
      'Stretch out those stiff muscles and find inner peace! This session focuses on Yoga practices tailored for developers.',
    location: 'Peace Lane 7, 11111 Tranquil Town',
    date: '2022-06-20',
    image: 'images/pic10.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Startup Pitch Night',
    description:
      'Have an idea? Pitch in front of venture capitalists and get feedback directly from professionals!',
    location: 'Innovation Hub, 22222 Tech Valley',
    date: '2022-07-15',
    image: 'images/pic1.jpg',
    isFeatured: false,
  },
  {
    id: 'e6',
    title: 'Digital Art Workshop',
    description:
      'Dive into the world of digital art and learn from the best in the industry.',
    location: 'Creativity Street 44, 33333 Art City',
    date: '2022-08-05',
    image: 'images/pic5.jpg',
    isFeatured: false,
  },
  {
    id: 'e7',
    title: 'Eco-friendly Living',
    description:
      'Learn about sustainable living practices and how to reduce your carbon footprint.',
    location: 'Green Road 18, 44444 Eco Town',
    date: '2022-09-12',
    image: 'images/pci11.jpg',
    isFeatured: false,
  },
  {
    id: 'e8',
    title: 'Astronomy Night',
    description:
      'Join fellow stargazers as we take a closer look at the constellations and planets.',
    location: 'Starry Boulevard 52, 55555 Sky City',
    date: '2022-10-17',
    image: 'images/pic2.jpg',
    isFeatured: false,
  },
  {
    id: 'e9',
    title: 'Chocolate Tasting Event',
    description:
      'Indulge in the finest chocolates and learn about the art of chocolate making.',
    location: 'Sweet Street 64, 66666 Choco Town',
    date: '2022-11-21',
    image: 'images/pic4.jpg',
    isFeatured: false,
  },
  {
    id: 'e10',
    title: 'Vintage Car Rally',
    description:
      'Experience the charm of vintage cars and learn about their history and mechanics.',
    location: 'Retro Road 32, 77777 Motor City',
    date: '2022-12-05',
    image: 'images/pic6.jpg',
    isFeatured: false,
  },
  {
    id: 'e11',
    title: 'Meditation Retreat',
    description:
      'Recharge your mind and body at this serene meditation retreat.',
    location: 'Zen Way 46, 88888 Peaceful Place',
    date: '2023-01-20',
    image: 'images/pic7.jpg',
    isFeatured: true,
  },
  {
    id: 'e12',
    title: 'Photography Expo',
    description:
      'Showcase your photos and learn from experienced photographers.',
    location: 'Picture Path 99, 99999 Snap City',
    date: '2023-02-10',
    image: 'images/pic8.jpg',
    isFeatured: false,
  },
  {
    id: 'e13',
    title: 'Jazz Night',
    description:
      'Immerse yourself in the world of jazz. Enjoy performances from renowned artists.',
    location: 'Music Avenue 27, 10101 Rhythm Town',
    date: '2023-03-05',
    image: 'images/pic3.jpg',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
