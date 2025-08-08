// Wait until DOM loads
document.addEventListener('DOMContentLoaded', () => {

    const journalForm = document.getElementById('journalForm');
    const output = document.getElementById('output');

    // Load saved entries from localStorage or start empty
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

    // Function to display entries on page
    function displayEntries() {
        if (journalEntries.length === 0) {
            output.innerHTML = `<p>No journal entries yet. Write one above! ✍️</p>`;
            return;
        }
        // Build HTML with template literals
        output.innerHTML = journalEntries.map(entry => `
      <div class="entry">
        <h3>Mood: ${entry.mood}</h3>
        <p>${entry.text}</p>
        <small>Saved on: ${entry.date}</small>
      </div>
    `).join('');
    }

    // Function to save entry
    function saveEntry(mood, text) {
        const date = new Date().toLocaleString();
        const newEntry = { mood, text, date };
        journalEntries.push(newEntry);
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    }

    // Event listener on form submit
    journalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const mood = journalForm.mood.value;
        const text = journalForm.entry.value.trim();

        // Conditional branching: check input validity
        if (mood === "") {
            alert("Please select your mood before submitting!");
            return;
        }
        if (text === "") {
            alert("Please write your thoughts before submitting!");
            return;
        }

        // Save the entry
        saveEntry(mood, text);

        // Clear form inputs
        journalForm.reset();

        // Update displayed entries
        displayEntries();
    });

    // Initial display on page load
    displayEntries();
});
