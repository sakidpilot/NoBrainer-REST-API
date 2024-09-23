import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/DBConnect.js';
import Guide from './models/guide.model.js';

const app = express();

app.use(express.json());

dotenv.config();

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server available");
})

app.get("/", (req, res) => {
    res.send("No Brainer Quiz App client server is available");
})

app.get("/api/guide", async (req, res) =>{
    try{
        const guide = await Guide.find({});
        res.status(200).json({success: true, data: guide});
    }
    catch(error){
        console.log("Error in fetching user guide", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});

app.post("/api/postguide" , async (req, res) =>{
    const guide = req.body;
    if(!guide.guideData){
        return res.status(400).json({success: false, message: "Please provide user guide data!"})
    }

    const newGuide = new Guide(guide);
    try {
        await newGuide.save();
        res.status(201).json({success: true, data: newGuide});
    } catch (error) {
        console.error("Error in adding guide: ", error.message);
        res.status(500).json({sucess: false, message: "Server error"});
    }

});
