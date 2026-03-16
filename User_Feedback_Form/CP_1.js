const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const submitButton = document.getElementById('submit-button');
const feedbackList = document.getElementById('feedback-list');
const tooltip = document.getElementById('tooltip');
const feedbackCount = document.getElementById('feedback-count');
const nameError = document.getElementById('name-error');
const feedbackError = document.getElementById('feedback-error');
const Feedback_Max_Length = 500;

form.addEventListener('submit', function(event) {
    const target = event.target;
    if (target === form) {
        const length = feedbackInput.value.length;
        feedbackCount.textContent = `${length}/${Feedback_Max_Length}`;
        feedbackCount.style.color = length > Feedback_Max_Length ? 'red' : 'black';
    }

    FormData.addEventListener(mouseover, function(event) {
        const group = event.target.closest('.form-group');
        if (group) {
            const tooltipText = group.getAttribute('data-tooltip');
            tooltip.classList.add('visible');
            movetooltip(event);

        }
    });
    form.addEventListener('mouseout', function(event) {
        tooltip.classList.remove('visible');
    });
    form .addEventListener('click', function(event) {
        nameInput.classList.remove('error');
        feedbackInput.classList.remove('error');
        nameError.textContent = '';
        feedbackError.textContent = '';
    }
    );
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameError.textContent = 'Name is required.';
        event.preventDefault();
    }
    
