import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleCheckout = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const price = form.price.value;
    const massage = form.massage.value;
    
    const bookings = {
        customerName: name,
        email,
        date,
        service: title, 
        img,
        service_id: _id,
        price,
        massage
    }
    console.log(bookings);

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
          alert('Booking successfully')
        }
    })
  }

  return (
    <div className="mt-10 md:mt-16">
      <h2 className="text-3xl font-semibold pb-5 text-centerf">This is CheckOut: {title}</h2>
      <form onSubmit={handleCheckout}>
        <div className="form-control">
          <div className="flex flex-col md:flex-row gap-5 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered rounded flex-1 py-2"
              required
            />
            <input
              type="date"
              name="date"
              className="input input-bordered rounded flex-1 py-2"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <div className="flex flex-col md:flex-row gap-5 mb-6">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered rounded flex-1 py-2"
              required
            />
            <input
              type="price"
              name="price"
              placeholder="Due amount"
              defaultValue={'$ '+ price}
              className="input input-bordered rounded flex-1 py-2"
              required
            />
          </div>
        </div>
        <div className="form-control">
        <textarea className="input-bordered rounded textarea md:h-[150px]" name="massage" placeholder="Your Message"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded bg-orange-700">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
