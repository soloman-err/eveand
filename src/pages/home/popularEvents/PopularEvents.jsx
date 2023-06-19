import React from 'react';
import EventCard from './EventCard';

const PopularEvents = () => {
  return (
    <section className="mt-20 mx-5 lg:mx-20">
      <h1 className="font-bold text-4xl border-l-8 border-blue-500 pl-2 my-5">Popular Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default PopularEvents;
