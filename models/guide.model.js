import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema({
    guideData:{
        type: String,
        required: true
    }
});

const Guide = mongoose.model('Guides', guideSchema);

export default Guide;