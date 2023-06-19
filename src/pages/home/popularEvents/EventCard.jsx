import React from 'react';

const EventCard = () => {
  return (
    <div className="card card-compact rounded bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.ctfassets.net/zmrtlfup12q3/oTgwCxMXewNZwK0MVfJNW/6751b130c25d4623c6d202a128fd61a4/celonis_demo_gallery_-_meta_image_2x.png?fm=jpg&fl=progressive&fit=fill&q=90&w=1200&h=627"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn w-full btn-sm rounded bg-gradient-to-tl to-blue-400 from-blue-700 text-white font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
