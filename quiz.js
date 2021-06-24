// data

var questions = [
    {
      text: "Вопрос о наболевшем: как пандемия коронавируса повлияла на наши сексуальные желания?",
      answers: ["сексуальные фантазии стали связаны с пандемией. Секс открытом воздухе, секс вдали от дома, секс в масках и так далее", "никак", "жанр хентай стал самым востребованным в россии", "трафик снизился, потому что все были дома с семьей"],
      explanation: "question 1 explanation",
      explanationImage: "tiles/tiles-01.jpg",
      correctAnswerIndex: 0,
    },
    {
      text: "В какие праздники интернет-пользователи больше всего заинтересованы в порно?",
      answers: ["всегда", "в новогодние праздники", "в лентие каникулы и сезон отпусков", "день святого валентина"],
      explanation: "question 2 explanation",
      explanationImage: "tiles/tiles-02.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "К 8 марта porhub представил аналитику порно, которое нравится женщинам по всему миру, в среднем женщины предпочитают практически одно и то же, но Россия и здесь идет своим путем. Каким стал самый популярный жанр",
      answers: ["хентай", "лесбpiйское порно", "футфетиш", "фвебкам"],
      explanation: "question 3 explanation",
      explanationImage: "tiles/tiles-03.jpg",
      correctAnswerIndex: 0,
    },
    {
      text: "Самый популярный  популярный день недели для просмотра порно",
      answers: ["понедельник", "среда", "пятница", "воскресенье"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 4,
    },
    {
      text: "Давайте проверим вашу порно-эрудицию, что значит термин POV?",
      answers: ["Pussy Orgasm Vagina", "Point Of View", "Pretend Of Vulva", "Punishment Of Vagina"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "Как и у всего в мире, у порно есть свои темные стороны. Какие?",
      answers: ["Анализ популярных порнографических фильмов обнаружил, что в 88% сцен присутствовала вербальная или физическая агрессия, как правило, по отношению к женщине", "Просмотр порно превращает людей в геев и лесбиянок", "Современные порно-актрисы и актеры работают в рабских условиях", "Современное порно искажает представление о сексе у людей"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 0,
    },
    {
      text: "Вопрос с подвохом. Какой жанр предпочитают люди старше 65 лет?",
      answers: ["Никакой, люди старше 65 не смотрят порно", "БДСМ", "Young and teen", "Retro"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "Найдите верный факт о порно и его целевой аудитории",
      answers: ["Чем выше доля консервативного населения в районе, тем выше шансы, что его житель смотрит порно", "Люди стали охотнее платить за порно-контент", "Порно смотрят люди с преимущественно гетеросексуальной ориентацией", "Феминистки не смотрят порно"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "Почти последний вопрос про статистику, в какой стране один из четырёх взрослых в  возрасте от 20 до 30 лет — девственник?",
      answers: ["Россия", "Ирландия", "Япония", "Канада"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "Вы❓",
      answers: ["депутат, который хочет запретить порно", "активный пользователь порно-ресурсов", "случайный интернет прохожий", "автор этого теста"],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 2,
    },
  ];
  
  var results = [
    {
      text: "you scored 0",
      minScore: 0,
    },
    {
      text: "вы порно-нуб",
      minScore: 3,
    },
    {
      text: "вы случайный интернет-прохожий",
      minScore: 6,
    },
    {
      text: "вы порно-эксперт",
      minScore: 10,
    },
  ];
  
  // state
  
  var score = 0;
  var currentQuestionIndex = 0;
  var wasAnswerGiven = false;
  var isQuizFinished = false;
  
  // shared elements
  
  var quizBox = document.querySelector(".quiz-box");
  
  // rendering functions
  
  function clearQuizBox() {
    var quizBoxContentElement = quizBox.firstChild;
    if (quizBoxContentElement) {
      quizBox.removeChild(quizBoxContentElement);
    }
  }
  
  function renderQuestion() {
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
    nextQuestion.innerHTML = "next question ⟹";
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
  
    var reset = document.createElement("button");
    reset.classList.add("reset-button");
    reset.innerHTML = "reset ∅";
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
    if (isQuizFinished) {
      renderResults();
    } else if (wasAnswerGiven) {
      renderExplanation();
    } else {
      renderQuestion();
    }
  }
  
  renderQuiz();
