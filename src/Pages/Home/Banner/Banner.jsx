import img1 from "./../../../assets/images/banner/2.jpg";
import img2 from "./../../../assets/images/banner/1.jpg";
import img3 from "./../../../assets/images/banner/3.jpg";
import img4 from "./../../../assets/images/banner/4.jpg";
import img5 from "./../../../assets/images/banner/5.jpg";
import img6 from "./../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[600px] rounded">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
          <a href="#slide6" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
          <a href="#slide2" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
            <a href="#slide1" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
            <a href="#slide3" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
            <a href="#slide2" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
            <a href="#slide4" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
            <a href="#slide3" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
            <a href="#slide5" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
            <a href="#slide4" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
            <a href="#slide6" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full object-cover" />
        <div className="absolute text-white h-full w-full flex flex-col justify-center pl-5 md:pl-14  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-lg my-3 md:my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn rounded hover:btn-outline mr-5">Discover More</button>
            <button className="btn rounded btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-12 md:bottom-24 right-4">
            <a href="#slide5" className="btn hover:btn-neutral btn-circle mr-2 md:mr-5">❮</a>
            <a href="#slide1" className="btn hover:btn-neutral btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
