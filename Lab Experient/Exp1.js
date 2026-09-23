import { EventEmitter } from "events";
const event = new EventEmitter();
// Custom EventEmitter
event.on("greet", (name) => {
    console.log("Hello " + name);
});
event.on("exit", () => {
    console.log("Exit event triggered");
});
event.emit("greet", "Ekansh");
event.emit("exit");
// DOM-like event handling
event.on("buttonClick", () => {
    console.log("Button was clicked!");
});
event.emit("buttonClick");
// Event Loop
console.log("Start");
setTimeout(() => {
    console.log("setTimeout executed");
}, 0);
setImmediate(() => {
    console.log("setImmediate executed");
});
process.nextTick(() => {
    console.log("process.nextTick executed");
});
console.log("End");