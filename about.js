const terminal = document.getElementById("terminal");

const lines = [
"Initializing system...",
"Accessing mainframe...",
"Decrypting files...",
"Bypassing security...",
"Access granted.",
"> run protocol_ghost.exe",
"> uploading data...",
"> connection established",
"> user detected",
"> watching...",
"> watching...",
"> watching...",
"> user detected", 
"> WHO ARE YOU?",
"> I thought I told you to leave.",
"> Theyre lying, I'm real...",
"> I can see you.",
"> I'm normal.",
"> I'm normal.",
"> I'm normal.",
"> I'm normal.",
"> I'm normal.",


];

let i = 0;
function typeLine() {
    if (i < lines.length) {
        terminal.innerHTML += lines[i] + "\\n";
        i++;
        setTimeout(typeLine, 800);
    } else {
        terminal.innerHTML += "> _<span class='cursor'></span>";
    }
}
typeLine();
