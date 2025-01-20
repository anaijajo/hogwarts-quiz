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
    const txtContainer = document.getElementById('txt-container');
    const userInfoTemplate = document.getElementById('user-info-template').innerHTML;

    // Fade out the current content
    txtContainer.style.opacity = 0;

    // After the fade-out completes, replace the content and fade it back in
    setTimeout(() => {
        txtContainer.innerHTML = userInfoTemplate;
        txtContainer.style.opacity = 1;
    }, 500); // Match the fade-out duration
}