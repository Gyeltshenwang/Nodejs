import mongoose from "mongoose";

const Canidate = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    }
})
var CanidateDetailes = mongoose.model('CanidateDetailes', Canidate);
export default CanidateDetailes;
