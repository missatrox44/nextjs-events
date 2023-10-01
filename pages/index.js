import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function StartingPage() {
  // get all featured events
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default StartingPage;
