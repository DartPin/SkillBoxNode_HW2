const currentDateTime = require("./date")
let timeNow = currentDateTime.currentDateTime()

console.log("Today is " + timeNow.date + ", the current time is " + timeNow.time)
