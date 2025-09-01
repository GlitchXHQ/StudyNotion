const express=require("express")
const app=express()
const fileUpload=require("express-fileupload")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const userRoutes=require("./routes/user")
const courseRoutes=require("./routes/Course")
const paymentRoutes=require("./routes/Payment")
const profileRoutes=require("./routes/Profile")
const database=require("./config/db")
const cloudinaryConnect=require("./config/cloudinary")
const { auth } = require("./middleware/auth")
const dotenv=require("dotenv")

// 1. Load environment and connect DB
dotenv.config();
database();

// 3. Apply Middleware (CORRECT ORDER IS IMPORTANT)
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// 4. Connect Cloudinary
cloudinaryConnect();

// 5. Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

// 6. Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Connection Established Successfully and Running....",
  });
});

// 7. Start Server (MUST be last)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server established at PORT : http://localhost:${PORT}`);
});