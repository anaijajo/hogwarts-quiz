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

function startQuiz() {
    // 1. Fade Out `#intro` and `#user-info-template` Upwards
    const intro = document.getElementById('intro');
    intro.classList.add('fade-up');

    // Delay to ensure the fade-up finishes before removing
    setTimeout(() => {
        intro.style.display = 'none';
document.getElementById('user-info-template').style.display = 'none'; // Ensure user-info-template is removed as well // Hide the intro completely
    }, 800); // Match the duration of the fade-up animation

    // 2. Change Body Background to a New Color, Then Transition to a GIF
    document.body.style.backgroundColor = '#000'; // Change to black
    document.body.style.transition = 'background-color 1s ease'; // Smooth transition to black background color
    setTimeout(() => {
        setTimeout(() => {
        document.body.style.backgroundImage = "url('/assets/castle-background.gif')";
document.body.style.transition = 'background-color 1s ease, background-image 1s ease'; // Ensure smooth transition to GIF
        document.body.style.transition = 'background-image 1s ease'; // Smooth transition to GIF
    }, 1000);
document.body.style.backgroundSize = "cover"; // Ensure the background image covers the screen immediately
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed"; // Prevent glitches by fixing the image position during transition

// Optionally, manage the user-info-template
const userInfoTemplate = document.getElementById('user-info-template');
if (userInfoTemplate) {
    userInfoTemplate.classList.add('fade-up');
    setTimeout(() => {
        userInfoTemplate.style.display = 'none';
    }, 800); // Matches fade-up duration
}
    }, 1000); // Change to GIF after 1s

    // 3. Fade In Quiz Questions
    const quiz = document.getElementById('quiz');
    setTimeout(() => {
        quiz.classList.remove('hidden');
quiz.style.position = 'relative'; // Keep it inside the flex container
quiz.style.margin = '0 auto';
quiz.classList.add('fade-in');

// Add logo dynamically at the top
const logo = document.createElement('img');
logo.src = '/assets/harry-potter-sorting-text.png'; // Path to the small logo
logo.alt = 'Logo';
logo.style.width = '100px';
logo.style.display = 'block';
logo.style.margin = '0 auto 20px auto'; // Centered with space below
quiz.insertBefore(logo, quiz.firstChild);
quiz.style.position = 'absolute'; // Align quiz in the same position as intro
quiz.style.top = '50%';
quiz.style.left = '50%';
quiz.style.transform = 'translate(-50%, -50%)'; // Center the quiz
quiz.classList.add('fade-in'); // Remove hidden class
        quiz.classList.add('fade-in');  // Trigger fade-in animation
    }, 1500); // Delay to ensure background change completes
}