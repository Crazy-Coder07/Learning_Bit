const express=require("express")
const dotenv = require("dotenv");
const morgan=require("morgan");
const cors=require("cors");
const connectDb=require("./config/db");
const userRoutes = require("./routes/authRoutes");
const instructorRoutes = require("./routes/instructorRoutes");

const app=express();
// dotenv for security purposes
dotenv.config();
// mongoDB connection 
connectDb();

// middlware 
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(morgan("dev"));
app.use(express.static('./utils'))

// auth 
app.use("/api/v1/auth",userRoutes);

// instructor 
app.use("/api/v1/instructor",instructorRoutes);


const PORT=process.env.PORT ||8080;
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} mode on the port ${PORT}`);
})