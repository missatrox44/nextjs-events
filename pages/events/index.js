import React, { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';

function Events() {
  const events = getAllEvents();
  const router = useRouter();

  // programmatically navigate to selected year/month
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    // navigate to a different page
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default Events;
