const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv");
const genContent=require("./routes/chatbot")

dotenv.config();
const port=process.env.PORT || 5000

const app=express();
const allowedOrigins = [
  "http://localhost:5173",                            
  "https://dsa-instructor-liard.vercel.app/",          
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use("/", genContent)
app.use("/reset", genContent )



app.listen(port,()=> console.log(`server is running on port${port}`))