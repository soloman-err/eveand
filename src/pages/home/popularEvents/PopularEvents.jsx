import React from 'react';
import EventCard from './EventCard';

const PopularEvents = () => {
  return (
    <section className="mt-20 mx-20">
      <h1 className="font-bold text-4xl border-l-8 border-black pl-2 my-5">Popular Events</h1>
      <div className="grid grid-cols-3 gap-3 mt-">
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