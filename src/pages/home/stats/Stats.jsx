import React, { useEffect } from 'react';

const Counter = ({ icon, target, label }) => {
  useEffect(() => {
    const countElement = document.querySelector(`[data-target="${target}"]`);
    const duration = 2000;
    const increment = Math.ceil(target / duration * 50);
    let count = 0;

    const updateCount = () => {
      count += increment;

      if (count >= target) {
        countElement.textContent = target;
      } else {
        countElement.textContent = count;
        setTimeout(updateCount, 50);
      }
    };

    updateCount();
  }, [target]);

  return (
    <div className="flex items-center">
      <img src={icon} alt={label} className="w-8 h-8 mr-2" />
      <h3 data-target={target} className="text-3xl font-bold count">0</h3>
      <h6 className="ml-2 text-sm">{label}</h6>
    </div>
  );
};

const AutoCounter = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-2xl font-bold mb-4 text-center uppercase">Our Statistics</div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Counter icon="./icons/iconmonstr-time-19.svg" target={15000} label="Work Hours" />
        <Counter icon="./icons/iconmonstr-coffee-11.svg" target={1200} label="Cups of Coffee" />
        <Counter icon="./icons/iconmonstr-weather-112.svg" target={500} label="Sleepless Nights" />
      </div>
    </div>
  );
};

export default AutoCounter;
