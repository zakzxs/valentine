
const messages = [
    "masaaa?",
    "beneraannn??",
    "inii pastii ngetess doaangg",
    "gaa mungkiinnn!",
    "masaaa beneraann gamauuu?",
    "oh gitu",
    "padahal aku berharap :(",
    "ywdh.",
    "ngpain msh pnct",
    "sana,hus hus",
    "apsh.",
    "pliss maauuu ಥ_ಥ",

];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "y-valentine.html";
}
