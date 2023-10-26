import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title, img, price } = service;
  return (
    <div className="w-full bg-base-100 shadow-xl rounded">
      <div className="p-2">
        <img className="h-[220px] w-full object-cover rounded" src={img} alt="" />
      </div>
      <div className="text-left p-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center pt-1">
            <p className="text-xl text-[#FF3811] font-semibold">Price: $ {price}</p>
            <Link to='/'><FiArrowRight className='text-2xl text-[#FF3811] hover:rounded-full hover:outline' /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
