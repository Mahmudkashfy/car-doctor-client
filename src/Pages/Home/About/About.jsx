import person from './../../../assets/images/about_us/person.jpg';
import parts from './../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero pt-5 md:pt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 md:h-full relative">
            <img src={person} className="w-3/4 md:h-96 rounded shadow-2xl object-cover"/>
            <img src={parts} className="w-2/3 rounded shadow-2xl absolute -bottom-14 left-32 border-8 border-white"/>
        </div>
        <div className="md:w-1/2 md:pr-5 pt-5 md:pt-0 ">
            <h2 className='text-xl font-bold text-orange-500'>About Us</h2>
          <h2 className="text-5xl font-bold">We are qualified & of experience in this field</h2>
          <p className="py-6 text-base"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="text-base pb-5"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
          </p>
          <button className="btn btn-neutral rounded bg-orange-700">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
