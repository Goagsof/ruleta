const questions = [
    "¿Cuál es tu mayor fantasía sexual que aún no has cumplido?",
    "Si pudieras hacer algo ahora mismo sin ninguna consecuencia, ¿qué sería?",
    "¿Qué parte de tu cuerpo te gusta más que te toquen?",
    "¿Cuál es la cosa más atrevida que has hecho en la cama?",
    "¿Alguna vez has pensado en alguien más mientras estabas conmigo?",
    "¿Cuál es el lugar más inesperado en el que te gustaría tener sexo?",
    "Descríbeme lo que te gustaría que te hiciera esta noche.",
    "¿Has tenido alguna fantasía con otra persona conocida que ambos conozcamos?",
    "¿Qué te excita más que te hagan durante un beso?",
    "Si pudieras tener una noche salvaje con alguien más que no sea yo, ¿quién sería?",
    "¿Te gustaría jugar a los roles esta noche? ¿Qué papel te gustaría que yo hiciera?",
    "Describe con detalle el encuentro sexual más intenso que has tenido.",
    "¿Alguna vez has enviado fotos atrevidas a alguien? ¿A quién?",
    "¿Cuál es tu recuerdo favorito de algo que hayamos hecho juntos?",
    "Si tuvieras que elegir entre hacerlo con las luces encendidas o apagadas, ¿cuál elegirías y por qué?",
    "¿Te gusta más ser quien domina o ser dominada?",
    "¿Cuál es el lugar más atrevido donde te gustaría que te besara?",
    "¿Qué tipo de ropa interior te hace sentir más sexy?",
    "Si pudieras cambiar algo de nuestra vida sexual, ¿qué sería?",
    "¿Qué es lo más salvaje que estarías dispuesta a hacer para sorprenderme?",
    "¿Te gusta cuando tomo el control o prefieres tomarlo tú?",
    "Si te diera una carta blanca para hacer lo que quisieras esta noche, ¿qué harías?",
    "¿Cuál es tu postura favorita cuando lo hacemos?",
    "¿Qué piensas cuando me ves desnudo/a?",
    "¿Te gustaría que intentáramos algo diferente esta noche? Si es así, ¿qué sería?"
];

const dares = [
    "Envía una foto provocativa, pero sin mostrar nada explícito.",
    "Bésame en el lugar que tú elijas por 30 segundos.",
    "Hazme un striptease lento hasta quedar en ropa interior.",
    "Susúrrame al oído lo que te gustaría que te hiciera esta noche.",
    "Dibuja un corazón en una parte de mi cuerpo con tus labios.",
    "Hazme un masaje sensual durante 5 minutos, usando solo tus manos.",
    "Déjame vendarte los ojos y guiarte con el tacto durante 2 minutos.",
    "Haz que me excite sin tocarme directamente durante 1 minuto.",
    "Desliza un hielo por mi cuerpo desde el cuello hasta el ombligo.",
    "Quítame una prenda de ropa usando solo tus dientes.",
    "Envía un mensaje de texto atrevido a un número que elijamos juntos.",
    "Ponte mi prenda de ropa interior por el resto del juego.",
    "Canta una canción sexy al oído y acompáñala con caricias.",
    "Permíteme hacer lo que quiera contigo durante 2 minutos sin quejarte.",
    "Juega a que soy tu mayor fantasía durante los próximos 5 minutos.",
    "Házme una propuesta indecente y veamos si la acepto.",
    "Descríbeme con detalle qué harías si estuviéramos en una playa desierta.",
    "Hazme sentir celos hablando de un encuentro sexual que hayas tenido.",
    "Toca una parte de mi cuerpo que normalmente no tocas y descríbeme cómo se siente.",
    "Dibuja algo provocativo en mi espalda usando tus dedos.",
    "Cambia una prenda de ropa conmigo por el resto de la noche.",
    "Déjame besarte donde yo quiera durante 10 segundos.",
    "Permíteme tomar el control y guiarte durante la próxima ronda.",
    "Hazme una propuesta atrevida que incluya a los dos esta noche.",
    "Hazme cerrar los ojos y sorpréndeme con algo provocativo."
];

let usedQuestions = [];
let usedDares = [];

const startBtn = document.getElementById('start-btn');
const questionSection = document.getElementById('question-section');
const questionText = document.getElementById('question');
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const truthSection = document.getElementById('truth-section');
const dareSection = document.getElementById('dare-section');
const dareText = document.getElementById('dare');
const doneBtn = document.getElementById('done-btn');
const doneDareBtn = document.getElementById('done-dare-btn');

startBtn.addEventListener('click', () => {
    if (usedQuestions.length === questions.length) {
        alert("¡Se han terminado todas las preguntas!");
        return;
    }

    // Seleccionar una pregunta al azar
    let question;
    do {
        question = questions[Math.floor(Math.random() * questions.length)];
    } while (usedQuestions.includes(question));

    usedQuestions.push(question);
    questionText.textContent = question;

    startBtn.classList.add('hidden');
    questionSection.classList.remove('hidden');
});

truthBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    truthSection.classList.remove('hidden');
});

dareBtn.addEventListener('click', () => {
    if (usedDares.length === dares.length) {
        alert("¡Se han terminado todos los retos!");
        return;
    }

    // Seleccionar un reto al azar
    let dare;
    do {
        dare = dares[Math.floor(Math.random() * dares.length)];
    } while (usedDares.includes(dare));

    usedDares.push(dare);
    dareText.textContent = dare;

    questionSection.classList.add('hidden');
    dareSection.classList.remove('hidden');
});

doneBtn.addEventListener('click', () => {
    truthSection.classList.add('hidden');
    startBtn.classList.remove('hidden');
});

doneDareBtn.addEventListener('click', () => {
    dareSection.classList.add('hidden');
    startBtn.classList.remove('hidden');
});
