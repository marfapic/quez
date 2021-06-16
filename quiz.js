// data

var questions = [
    {
      text: "Как пандемия коронавируса повлияла на наши сексуальные желания?",
      answers: ["сексуальные фантазии стали связаны с пандемией. Секс открытом воздухе, секс вдали от дома, секс в масках и так далее", "никак", "жанр хентай стал самым востребованным в россии", "трафик снизился, потому что все были дома с семьей"],
      explanation: "question 1 explanation",
      explanationImage: "tiles/tiles-01.jpg",
      correctAnswerIndex: 0,
    },
    {
      text: "единственные страны где люди смотрят порно с ноутбуков",
      answers: ["Индия и Италия", "США и Китай", "Россия и Германия", "Япония и Китай"],
      explanation: "question 2 explanation",
      explanationImage: "tiles/tiles-02.jpg",
      correctAnswerIndex: 3,
    },
    {
      text: "какой жанр прдепочитают центристы?",
      answers: ["гей-порно", "куколд", "MILF", "gangbang"],
      explanation: "question 3 explanation",
      explanationImage: "tiles/tiles-03.jpg",
      correctAnswerIndex: 2,
    },
    {
      text: "сколько существует видов женского оргазма?",
      answers: ["11", "2", "8", ""],
      explanation: "question 4 explanation",
      explanationImage: "tiles/tiles-04.jpg",
      correctAnswerIndex: 1,
    },
  ];
  
  var results = [
    {
      text: "you scored 0",
      minScore: 0,
    },
    {
      text: "you scored 1-2",
      minScore: 1,
    },
    {
      text: "you scored 3",
      minScore: 3,
    },
    {
      text: "you scored 4",
      minScore: 4,
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
  