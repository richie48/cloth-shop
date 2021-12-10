const mongoose =require('mongoose')

const userSchema = new mongoose.schema({
    firstName: {
        type: String,
        required: [true, 'please enter a first name'],
    },
    lastName: {
        type: String,
        required: [true, 'please enter a last name']
    },
    email:{
        type:String,
        required:[true,'please add an email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter a valid email'],
        unique:true
    },
    phone: {
        type: String,
        required: [true, 'please enter a phone number'],
        minLength: 11,
      },
})