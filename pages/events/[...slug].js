import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // get year and object from filterData array
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // transform data to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // add validation to make sure its a valid slug
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>;
  }

  // get filteredEvents array and pass in converted values
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth, 
  });

  // check if its an empty array or valid
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
