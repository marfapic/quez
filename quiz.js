// data

var questions = [
  {
    text: "Вопрос о наболевшем: как пандемия коронавируса повлияла на наши сексуальные желания?",
    answers: ["сексуальные фантазии стали связаны с пандемией. Секс открытом воздухе, секс вдали от дома, секс в масках и так далее", "никак", "жанр хентай стал самым востребованным в россии", "трафик снизился, потому что все были дома с семьей"],
    explanation: "Международная паника, закрытие людей дома и заболевание, передающиеся через контакт не могли не сказаться на том, что мы думаем и делаем друг с другом. На XBIZ опубликовали исследование, сделанное с апреля по июнь организациями World Association of Sex Coaches и Sex Coach U. 20% ответивших отметили, что их сексуальные фантазии стали связаны с пандемией. Почти 5% опрошенных пользовались или начали пользоваться дистанционными секс-игрушками, управляемыми через приложение. Примерно столько же ставили эксперименты в БДСМ. Почти 20% были вдалеке от партнёров, виделись редко и поэтому чаще мастурбировали. Ещё около 18% провели весь карантин в одиночестве",
    explanationImage: "q1-02.svg",
    correctAnswerIndex: 0,
  },
  {
    text: "В какие праздники интернет-пользователи больше всего заинтересованы в порно?",
    answers: ["во все праздники", "в новогодние праздники", "в лентие каникулы и сезон отпусков", "в день святого валентина"],
    explanation: "Статистика googletrends показывает, что пик запроса pornub в глобальной сети приходится на промежуток между 27 декабря и 3 января",
    explanationImage: "q2-02.svg",
    correctAnswerIndex: 1,
  },
  {
    text: "К 8 марта porhub представил аналитику порно, которое нравится женщинам по всему миру, в среднем женщины предпочитают практически одно и то же, но Россия и здесь идет своим путем. Каким стал самый популярный жанр",
    answers: ["хентай", "лесбийское порно", "футфетиш", "вебкам"],
    explanation: "хентай — самый популярный жанр порно в России среди женщин.Лесбийское порно, футфетиш и вебкам идут после. Сатистика pornhub из года в год делает исседования о наших предпочтениях и хентай довольно уверено держится в топе не только у женщин, но и у мужчин. Возможно миллениалы и зуммеры просто ностальгируют о детстве.",
    explanationImage: "q3-02.svg",
    correctAnswerIndex: 0,
  },
  {
    text: "Самый популярный  популярный день недели для просмотра порно",
    answers: ["понедельник", "среда", "пятница", "воскресенье"],
    explanation: "Статистика googletrends показывает, что пик запроса pornub в глобальной сети приходится на воскресенье",
    explanationImage: "q4-02.svg",
    correctAnswerIndex: 3,
  },
  {
    text: "Давайте проверим вашу порно-эрудицию, что значит термин POV?",
    answers: ["Pussy Orgasm Vagina", "Point Of View", "Passion of Vulva", "Punishment Of Vagina"],
    explanation: "От английского point of view — «точка зрения») — под ПОВ-персонажем или просто ПОВом подразумевается «главный» персонаж произведения или его части, глазами которого читатель «смотрит» на происходящие события.Пользователи на самом деле привыкли к порноблогерам, потому что они лучше любой студии работают с эффектом погружения и POV-камерой. Приватность стала первоочередной проблемой: секс-работники понимают, что интернет всё помнит, и даже под ником о ней найдут любую информацию.",
    explanationImage: "q5.png",
    correctAnswerIndex: 1,
  },
  {
    text: "Как и у всего в мире, у порно есть свои темные стороны. Какие?",
    answers: ["Анализ популярных порнографических фильмов обнаружил, что в 88% сцен присутствовала вербальная или физическая агрессия, как правило, по отношению к женщине", "Просмотр порно превращает людей в геев и лесбиянок", "Современные порно-актрисы и актеры работают в рабских условиях", "Современное порно искажает представление о сексе у людей"],
    explanation: "Профессор университета штата Оклахома подтверждает теорию о роли порно в сексуальном насилии и влиянии откровенных фильмов на статистику таких преступлений, а в Индии например в исследовании 2015 года сказано, что рост числа секс-преступлений напрямую связан с ростом доступности интернета и потокового порноконтента.",
    explanationImage: "q6-02.svg",
    correctAnswerIndex: 0,
  },
  {
    text: "Вопрос с подвохом. Какой жанр предпочитают люди старше 65 лет?",
    answers: ["Никакой, люди старше 65 не смотрят порно", "БДСМ", "Young and teen", "Retro"],
    explanation: "Удивительно, но наибольший рост запросов БДСМ — среди людей старше 65 лет. Среди молодёжи (18-24 года) рост от среднего показателя только 2%.",
    explanationImage: "q7-02.svg",
    correctAnswerIndex: 1,
  },
  {
    text: "Найдите верный факт о порно и его целевой аудитории",
    answers: ["Чем выше доля консервативного населения в районе, тем выше шансы, что его житель смотрит порно", "Люди стали охотнее платить за порно-контент", "Порно смотрят люди с преимущественно гетеросексуальной ориентацией", "Феминистки не смотрят порно"],
    explanation: "Молодые люди в возрасте от 13 до 20 лет среди консервативного и/или религиозного окружения чаще смотрят порно. Социолог Фанхао Ни (Fanhao Nie) из Валдостского университета в Джорджии провёл исследование, в котором изучил данные опроса о религиозности и частоте просмотра порнографии. В опросе участвовали 3370 человек в возрасте 13-17 и в 16-20 лет. ",
    explanationImage: "q8.png",
    correctAnswerIndex: 0,
  },
  {
    text: "Почти последний вопрос про статистику, в какой стране один из четырёх взрослых в  возрасте от 20 до 30 лет — девственник?",
    answers: ["Россия", "Ирландия", "Япония", "Канада"],
    explanation: "Один из четырёх взрослых в Японии в возрасте от 20 до 30 лет — девственник. это почти в пять раз больше, чем, например, в США, где уровень гетеросексуальной неопытности составляет от 1% до 5% взрослого населения в возрасте около 30 лет.",
    explanationImage: "q9-02.svg",
    correctAnswerIndex: 2,
  },
  {
    text: "Вы❓",
    answers: ["депутат, который хочет запретить порно", "активный пользователь порно-ресурсов", "случайный интернет прохожий", "автор этого теста"],
    explanation: "question 4 explanation",
    explanationImage: "",
    correctAnswerIndex: 2,
  },
];

var results = [
  {
    text: "вы набрали 0 баллов",
    minScore: 0,
  },
  {
    text: "вы порно-нуб",
    minScore: 3,
    resultsImage: "q9-02.svg"
  },
  {
    text: "вы знаток-любитель",
    minScore: 6,
  },
  {
    text: "вы порно-эксперт",
    minScore: 8,
  },
];

// state

var score = 0;
var currentQuestionIndex = 0;
var wasAnswerGiven = false;
var isQuizFinished = false;
var isStart = true;

// shared elements

var quizBox = document.querySelector(".quiz-box");
var numbering = document.querySelector(".numbering");

// rendering functions

function clearQuizBox() {
  var quizBoxContentElement = quizBox.firstChild;
  if (quizBoxContentElement) {
    quizBox.removeChild(quizBoxContentElement);
  }
}

function setNumbering() {
  numbering.innerHTML = "" + (currentQuestionIndex + 1) + "/" + questions.length;
}

function clearNumbering() {
  numbering.innerHTML = "";
}

function renderQuestion() {
  setNumbering();

  var currentQuestion = questions[currentQuestionIndex];
  var questionElement = document.createElement("div");
  questionElement.classList.add("question");

  var questionText = document.createElement("div");
  questionText.classList.add("question-text");
  questionText.innerHTML = currentQuestion.text;
  questionElement.appendChild(questionText);

  var quizScore = document.createElement("div");
  quizScore.classList.add("score");
  quizScore.innerHTML = "(Score: " + score + ")";
  questionElement.appendChild(quizScore);

  currentQuestion.answers.forEach(function (answer, answerIndex) {
    var answerElement = document.createElement("button");
    answerElement.classList.add("answer");
    answerElement.innerHTML = answer;
    answerElement.addEventListener("click", function () {
      submitAnswer(answerIndex);
    });
    questionElement.appendChild(answerElement);
  });

  quizBox.appendChild(questionElement);
}

function renderExplanation() {
  setNumbering();

  var currentQuestion = questions[currentQuestionIndex];

  var explanationElement = document.createElement("div");
  explanationElement.classList.add("explanation");

  var questionText = document.createElement("div");
  questionText.classList.add("question-text");
  questionText.innerHTML = currentQuestion.text;
  explanationElement.appendChild(questionText);

  var quizScore = document.createElement("div");
  quizScore.classList.add("score");
  quizScore.innerHTML = "(Score: " + score + ")";
  explanationElement.appendChild(quizScore);

  var explanationText = document.createElement("div");
  explanationText.classList.add("explanation-text");
  explanationText.innerHTML = currentQuestion.explanation;
  explanationElement.appendChild(explanationText);

  var explanationImageBox = document.createElement("div");
  explanationImageBox.classList.add("explanation-image-box");

  var explanationImage = document.createElement("img");
  explanationImage.classList.add("explanation-image");
  explanationImage.src = currentQuestion.explanationImage;
  explanationImageBox.appendChild(explanationImage);
  explanationElement.appendChild(explanationImageBox);

  var nextQuestion = document.createElement("button");
  nextQuestion.classList.add("next-question");
  nextQuestion.innerHTML = "next question";
  explanationElement.appendChild(nextQuestion);

  nextQuestion.addEventListener("click", function () {
    wasAnswerGiven = false;
    currentQuestionIndex++;
    if (currentQuestionIndex > questions.length - 1) {
      isQuizFinished = true;
    }
    renderQuiz();
  });

  quizBox.appendChild(explanationElement);
}

function renderResults() {
  clearNumbering();

  var resultsElement = document.createElement("div");
  resultsElement.classList.add("results");

  var scoreElement = document.createElement("div");
  scoreElement.classList.add("results-score");
  resultsElement.appendChild(scoreElement);

  var filteredResults = results.filter(function (result) {
    return result.minScore <= score;
  });
  var result = filteredResults[filteredResults.length - 1];
  console.log(result);

  var resultTextElement = document.createElement("div");
  resultTextElement.classList.add("results-text");
  resultTextElement.innerHTML = result.text;
  resultsElement.appendChild(resultTextElement);

  const image = document.createElement("img");
  image.src = "test1.png";
  resultsElement.appendChild(image);

  var reset = document.createElement("button");
  reset.classList.add("reset-button");
  reset.innerHTML = "reset";
  resultsElement.appendChild(reset);

  reset.addEventListener("click", function () {
    wasAnswerGiven = false;
    isQuizFinished = false;
    score = 0;
    currentQuestionIndex = 0;
    renderQuiz();
  });

  quizBox.appendChild(resultsElement);
}

function renderStartPage() {
  clearNumbering();

  const landing = document.createElement("div");
  landing.classList.add("landing-body");

  const title = document.createElement("div");
  title.classList.add("landing-text");
  title.innerHTML = "тест: как хорошо вы разбираетесь в порно?";

  const button = document.createElement("button");
  button.classList.add("landing-button");
  button.innerHTML = "начать";
  button.addEventListener("click", function () {
    isStart = false;
    renderQuiz();
  });

  const img = document.createElement("img");
  img.classList.add("landing-image");
  img.src = "main1-02.svg";

  landing.appendChild(title);
  landing.appendChild(button);
  landing.appendChild(img);

  quizBox.appendChild(landing);
}

// event handlers

function submitAnswer(answerIndex) {
  // проверяем правильность ответа
  var currentQuestion = questions[currentQuestionIndex];
  var isCorrect = currentQuestion.correctAnswerIndex === answerIndex;
  // обновляем score
  if (isCorrect) {
    score++;
  }
  // показываем объяснение
  wasAnswerGiven = true;
  renderQuiz();
}

// main render function

function renderQuiz() {
  clearQuizBox();
  if (isStart) {
    renderStartPage();
  } else if (isQuizFinished) {
    renderResults();
  } else if (wasAnswerGiven) {
    renderExplanation();
  } else {
    renderQuestion();
  }
}

renderQuiz();
