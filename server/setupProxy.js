const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/createUser", {
            target: "http://localhost:3001",
            secure: false,
            changeOrigin: true,
        })
    );
};