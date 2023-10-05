import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const events = getAllEvents();

function Events() {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default Events;
