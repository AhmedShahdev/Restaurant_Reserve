import Errorhandling from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

 const sendReservation = async (req, res, next)=>{
    const {firstName, lastName, date, time, email, phone} = req.body;
    if(!firstName || !lastName || !date || !time || !email || !phone){
        return next(new Errorhandling("Please fill out form ", 400))
    }
    try{
        await Reservation.create({firstName, lastName, date, time, email, phone})
        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!"
        });
    }catch(error){
        if(error.name === "ValidationError"){
            const validationerros = Object.values(error.errors).map(err=>err.message);
      return next(new Errorhandling(validationerros.join(', '), 400));
        }
        return next(error);
    }
};

export default sendReservation;