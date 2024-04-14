var dictionary = {
    "Кавун": [
        "Каву́н звичайний, кавун (Citrúllus lanátus) — баштанна культура родини гарбузових. Вирощується в районах з великим сонячним випромінюванням. В Україні традиційним центром виробництва баштанних культур є Херсонська область, де щорічно збирається понад 50 % урожаю кавунів у країні. Українське «кавун» походить від тур. kavun («диня»)."
    ],
    "КП-130": [
        "Кухня причіпна КП-130, надалі іменується кухнею, призначена для забезпечення 3-разового приготування та транспортування гарячої їжі з 2 страв і окропу підрозділів у складі до 130 осіб у польових умовах як на місці, так і в русі. Кухня може буксируватися дорогами усіх категорій із креном не більш ніж 30 градусів."
    ],
    "Тактика": [
        "Та́ктика (від дав.-гр. τακτική taktike — мистецтво шикування) — концептуальна дія, яка здійснюється у вигляді одного або більшої кількості конкретних завдань. Термін використовується у бізнесі та військовій справі, а також у шахах, спорті та акціях протесту."
    ]
};

function searchWord(word) {
    return dictionary[word];
}

function handleSubmit(event) {
    event.preventDefault();
    var wordInput = document.getElementById("wordInput").value;
    var resultDiv = document.getElementById("result");
    if (wordInput.trim() === "") {
        resultDiv.innerText = "Поле вводу порожнє. Будь ласка, введіть слово.";
        return;
    } else if (!isNaN(wordInput)) {
        resultDiv.innerText = "Введене значення не є словом. Будь ласка, введіть слово.";
        return;
    }
    
    var wordMeaning = searchWord(wordInput);
    if (wordMeaning) {
        resultDiv.innerHTML = "<p>Значення слова '" + "<b>" + wordInput + "</b>" + "':</p><p>" + wordMeaning.join("<br>") + "</p>";
    } else {
        resultDiv.innerText = "Слово '" + wordInput + "' не знайдено в словнику.";
    }
    document.getElementById("wordInput").value = "";
}

document.getElementById("dictionaryForm").addEventListener("submit", handleSubmit);
