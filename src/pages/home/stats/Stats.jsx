import { useState } from 'react';
import CountUp from 'react-countup';
import { FaAward, FaCalendarAlt, FaLandmark, FaUser } from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="w-[70%] mx-auto mt-20">
      <h1 className="font-bold text-3xl border-l-8 border-blue-500 pl-2 my-5">
        Event Stats
      </h1>

      <div className="flex justify-around text-white font-bold text-4xl bg-gradient-to-l to-blue-600 from-cyan-400 py-10 px-5 rounded-sm">
        <div className="flex gap-2 items-center">
          <span>
            <FaUser />
          </span>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && <CountUp start={2000} end={5500} />}
          </ScrollTrigger>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <FaCalendarAlt />
          </span>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && <CountUp start={400} end={800} />}
          </ScrollTrigger>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <FaLandmark />
          </span>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && <CountUp start={100} end={250} />}
          </ScrollTrigger>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <FaAward />
          </span>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && <CountUp start={20} end={70} />}
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
};

export default Stats;
