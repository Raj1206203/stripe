import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit  from "express-rate-limit";

const app = express();

app.use(helmet());

app.use(
    cors(
        {
            origin : process.env.CLIENT_URL,
            credentials: true,
        }
    )
)

const limiter = rateLimit({
    windowMs : 15 * 60 * 1000,
    limit :  100,
    standardHeaders : "draft-8",
    legacyHeaders : false,
});

app.use("/api",limiter);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);

app.get("/", (req,res)=> {
    res.status(200).json({
        success : true ,
        messaage : "Stripe is Running",
    });
});

app.get("api/health",(req,res)=>{
    res.status(200).json({
        success : true,
        message : "Server is Healthy",
        timestamp : new Date().toISOString(),
    });
});

export default app;