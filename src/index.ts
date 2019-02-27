import server from "./server";

server.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        throw new Error(err.message);
    }

    console.log(`Listening at port ${process.env.PORT || 3000} 🚀`);
});
