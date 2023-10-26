import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center pt-5 md:pt-24 flex flex-col items-center">
      <h2 className="text-base md:text-2xl font-bold text-orange-500">
        Service
      </h2>
      <h2 className="text-2xl md:text-5xl font-bold pb-2 md:pb-5">
        Our Service Area
      </h2>
      <p className="text-base md:w-1/2">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-12">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
