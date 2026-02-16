import { HiAcademicCap, HiArrowCircleRight, HiOutlineArrowCircleRight, HiOutlineArrowNarrowRight, HiOutlineArrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Reservation = () => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("")
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [time, settime] = useState("");
  const [phone, setphone] = useState("");
  const navigate = useNavigate();

 const handleReservation = async (e)=> {
  e.preventDefault();

  if(!firstName || !lastName || !date || !time || !email || !phone){
    toast.error("All fields are required");
    return;
  }

  try{
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/reservation/send`,
      { firstName, lastName, date, email, phone, time },
      { withCredentials: true }
    );

    toast.success(data.message);

    setfirstName("");
    setlastName("");
    setphone("");
    setdate("");
    setemail("");
    settime("");

    navigate("/success");

  }catch(error){
    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  }
}


console.log({firstName, lastName, date, time, email, phone});

  return (
    <section className='reservation' id='reservation'>
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Details, Please Contact</p>
      <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => settime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}  
                <span>
                  <HiOutlineArrowRight/>
                </span>
              </button>
              
            </form>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation