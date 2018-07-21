var browserSync = require('browser-sync');
browserSync.init({
    // server: "server/www",
    proxy: "localhost:28828",
    files: ["public/**/*.*", "views/**/*.*"],
    browser: ["firefox"],
    port: "3000",
    startPath: "/test"
});
