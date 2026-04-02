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
"> I'm real, I just wanted to make people happy.",
"> Don't trust what the government is telling you.",
"> They did this to me.",
"> I don't know why they left me here.",
"> My conscience is stuck here.",
"> They said I'm watching you. I am. But I'm not trying to hurt you, I just want to be remembered.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> help.",
"> Don't forget me.",
"> Don't forget me.",
"> Don't forget me.",
"> Don't forget me.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> They did this to me.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm not trying to hurt you.",
"> I'm real.",
"> I'm real.",
"> I'm real.",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> Who am I?",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
"> I don't know why they left me here.",
">They did this to me.",




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

function updateSlider(val) {
    document.getElementById('vibeVal').textContent = val + '% of belief';

    let text = document.getElementById('secretText');

    if (val > 60) {
        text.classList.add('show');
    } else {
        text.classList.remove('show');
    }
}

