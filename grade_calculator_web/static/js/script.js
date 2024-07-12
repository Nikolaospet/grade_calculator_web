document.getElementById('subjectCountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subjectCount = document.getElementById('subjectCount').value;
    const subjectsContainer = document.getElementById('subjectsContainer');
    subjectsContainer.innerHTML = '';  // Clear previous subjects

    for (let i = 0; i < subjectCount; i++) {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';

        subjectDiv.innerHTML = `
            <label>Subject ${i + 1}</label>
            <input type="number" class="grade" placeholder="Grade" required>
            <input type="number" class="ects" placeholder="ECTS" required>
            <input type="number" class="scale" placeholder="Scale (e.g., 30, 50, 100)" required>
        `;

        subjectsContainer.appendChild(subjectDiv);
    }

    document.getElementById('subjectCountForm').style.display = 'none';
    document.getElementById('gradeForm').style.display = 'block';

    // Adjust the container height based on content
    const container = document.getElementById('container');
    container.style.maxHeight = '90%';
    container.style.overflowY = 'auto';
});

document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subjectsContainer = document.getElementById('subjectsContainer');
    const subjectElements = subjectsContainer.getElementsByClassName('subject');
    const subjects = [];

    for (let subjectElement of subjectElements) {
        const grade = subjectElement.querySelector('.grade').value;
        const ects = subjectElement.querySelector('.ects').value;
        const scale = subjectElement.querySelector('.scale').value;
        subjects.push({ grade, ects, scale });
    }

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subjects }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').textContent = `Error: ${data.error}`;
        } else {
            document.getElementById('result').textContent = 
                `Approximate Final Grade: ${data.final_grade_100} (out of 100), ${data.final_grade_10} (out of 10)`;
        }
    })
    .catch(error => console.error('Error:', error));
});
