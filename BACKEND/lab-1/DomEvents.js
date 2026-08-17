// import { EventEmitter } from "node:events";

// function createDomElements() {
//     const button = new EventEmitter();
//     return button;
// }

// const button = createDomElements();

// button.on("save", () => {
//     console.log("Saving...");
// });

// button.on("submit", () => {
//     console.log("Data submitted successfully");
// });

// function handleClick(event) {
//     console.log("Mouse clicked");
//     console.log(event.eventType);
//     console.log(`Message: ${event.detail}`);
// }

// button.on("click", (event) => {
//     handleClick(event);
// });

// button.emit("save");
// button.emit("submit");
// button.emit("click", {
//     eventType: "click",
//     detail: "Button clicked successfully"
// });

import { EventEmitter } from "node:events";

function createDomElements() {
    const emitter = new EventEmitter();

    return {
        addEventListener(eventType, listener) {
            emitter.on(eventType, listener);
        },

        removeEventListener(eventType, listener) {
            emitter.off(eventType, listener);
        },

        dispatchEvent(event) {
            emitter.emit(event.eventType, event);
        }
    };
}

const button = createDomElements();

button.addEventListener("save", () => {
    console.log("saving...");
});

button.dispatchEvent({
    eventType: "save"
});