import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
    console.time("Request time");
    res.on("finish", () => {
      console.timeEnd("Request time");
    });
    next();
  });
  

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

