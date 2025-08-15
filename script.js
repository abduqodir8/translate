const fromLang = document.getElementById('from-lang');
const toLang = document.getElementById('to-lang');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');

// Tillarning ro‘yxati
const languages = {
    "af": "Afrikaans",
    "ar": "Arabic",
    "az": "Azerbaijani",
    "be": "Belarusian",
    "bg": "Bulgarian",
    "bn": "Bengali",
    "ca": "Catalan",
    "cs": "Czech",
    "cy": "Welsh",
    "da": "Danish",
    "de": "German",
    "el": "Greek",
    "en": "English",
    "eo": "Esperanto",
    "es": "Spanish",
    "et": "Estonian",
    "fa": "Persian",
    "fi": "Finnish",
    "fr": "French",
    "ga": "Irish",
    "gl": "Galician",
    "gu": "Gujarati",
    "hi": "Hindi",
    "hr": "Croatian",
    "ht": "Haitian Creole",
    "hu": "Hungarian",
    "hy": "Armenian",
    "id": "Indonesian",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "ka": "Georgian",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "lt": "Lithuanian",
    "lv": "Latvian",
    "mg": "Malagasy",
    "mk": "Macedonian",
    "ml": "Malayalam",
    "mn": "Mongolian",
    "mr": "Marathi",
    "ms": "Malay",
    "mt": "Maltese",
    "ne": "Nepali",
    "nl": "Dutch",
    "no": "Norwegian",
    "pa": "Punjabi",
    "pl": "Polish",
    "pt": "Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "sq": "Albanian",
    "sr": "Serbian",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tl": "Tagalog",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "zh": "Chinese"
};

for (let code in languages) {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    option1.value = option2.value = code;
    option1.textContent = option2.textContent = languages[code];
    fromLang.appendChild(option1);
    toLang.appendChild(option2);
}
fromLang.value = "en";
toLang.value = "uz";

// Tarjima qilish
translateBtn.addEventListener("click", () => {
    let text = inputText.value;
    let from = fromLang.value;
    let to = toLang.value;
    if (!text) return;

    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`)
    .then(res => res.json())
    .then(data => {
        outputText.value = data.responseData.translatedText;
    });
});

// Ovoz bilan o‘qish
function speakText(id) {
    let text = document.getElementById(id).value;
    if (!text) return;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = (id === "input-text") ? fromLang.value : toLang.value;
    speechSynthesis.speak(utterance);
}
