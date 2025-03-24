// import mongoose from "mongoose";

// export const dbConnection = () => {
//     mongoose.connect(process.env.MONGO_URI, {
//         dbName: "foodResto"
//     }).then(() => {
//         console.log("Connected to database successfully!")
//     }).catch(err => {
//         console.log("Some error occurred while connecting to database!", err)
//     })
// }

import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "moveIt",
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch(err => {
        console.log("Database connection error:", err);
    });
};