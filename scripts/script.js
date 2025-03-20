const commands = {
    "help": "Available commands: \n- projects\n- about\n- contact",
    "projects": "Opening projects...\n",
    "about": "Opening about page...\n",
    "contact": "Opening contact form...\n"
};

const output = document.getElementById("output");
const inputField = document.getElementById("input");
const bootScreen = document.getElementById("bootScreen");
const mainWindow = document.getElementById("mainWindow");

// boot animation c:
if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) {
    setTimeout(() => {
        bootScreen.style.opacity = "0";
        setTimeout(() => { // animation
            bootScreen.style.display = "none";
            mainWindow.style.display = "block";
            gsap.from(".window", { opacity: 0, y: -50, duration: 0.2 });  
        }, 200);
    }, 500); // can change this num to make it faster (lower it)
}

function printMessage(message) {
    output.innerHTML += `<p>${message}</p>`;
    output.scrollTop = output.scrollHeight;
}

// to redirect to the pages
function processCommand(command) { 
    const cmd = command.toLowerCase();
    if (commands[cmd] !== undefined) {
        printMessage(commands[cmd]);

        setTimeout(() => {
            if (cmd === "projects") window.location.href = "projects.html";
            if (cmd === "about") window.location.href = "about.html";
            if (cmd === "contact") window.location.href = "contact.html";
        }, 1000);
    } else {
        printMessage("> Command not found. Type 'help' for available commands.");
    }
}

// makes the input work ijjiij
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let command = inputField.value;
        printMessage(`<span class="prompt">C:\\User></span> ${command}`);
        inputField.value = "";
        processCommand(command);
    }
});

// first thing that shows 
function initializeTerminal() {
    const terminalHeader = document.createElement("div");
    terminalHeader.classList.add("terminal-header");

    terminalHeader.innerHTML = `
        <img src="assets/logo.png" alt="Logo">
        <h1>Welcome to Sinka.no</h1>
        <div class="instructions">
            Type 'help' for available commands
        </div>
    `;

    document.querySelector(".terminal").prepend(terminalHeader);
}


initializeTerminal();
