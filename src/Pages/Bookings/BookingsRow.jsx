const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, service, customerName, date, price, email, status } = booking;

  return (
    <tr>
      <td>
        <img src={img} alt="" className="rounded w-24 h-14 foutline-none" />
      </td>
      <td className="font-bold text-base">{service} </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{date} </td>
      <td className="font-semibold">{price} </td>
      <th><button onClick={() => handleDelete(_id)} className="btn btn-sm rounded btn-outline border-orange-200 text-orange-500 normal-case">Delete</button></th>

      <th>
          {
            status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span>
            : <button onClick={() => handleBookingConfirm(_id)} className="btn rounded btn-outline text-orange-800 normal-case font-bold">Please Confirm </button>
          }
      </th>
    </tr>
  );
};

export default BookingsRow;
