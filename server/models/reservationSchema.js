import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name Must be atleast 3 characters"],
        maxLength: [20, "First Name Must be max 20 characters"]
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must be atleast 3 characters"],
        maxLength: [20, "Last Name Must be max 20 characters"]
    },

    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide an Email"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Cannot be less than 11 digits"],
        maxLength: [11, "Cannot be more than 11 digits"],
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema)