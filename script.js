let userResponses = {}; // Store user answers

// Function to handle "Next" button
function handleNext(questionKey, questionId) {
    // Get the selected radio value
    const selectedOption = document.querySelector(`#${questionId} input[type="radio"]:checked`);
    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    // Save the selected answer
    userResponses[questionKey] = selectedOption.value;

    // Hide the current question and show the next
    const currentQuestion = document.getElementById(questionId);
    currentQuestion.classList.add('hidden');
    const nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
    }
}

// Function to submit the quiz
function submitQuiz() {
    // Get the selected answer for the last question
    const selectedOption = document.querySelector(`#question-3 input[type="radio"]:checked`);
    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    // Save the final answer
    userResponses['creature'] = selectedOption.value;

    console.log('Submitting quiz:', userResponses);
    alert('Quiz submitted! Check the console for your responses.');
}

function replaceContent() {
    // Get the txt-container element
    const txtContainer = document.getElementById('txt-container');

    // Get the user-info-template content
    const userInfoTemplate = document.getElementById('user-info-template').innerHTML;

    // Replace the content of txt-container
    txtContainer.innerHTML = userInfoTemplate;
}