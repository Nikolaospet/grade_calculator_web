markdown
Copy code
# Grade Calculator Web Application

Welcome to the Grade Calculator web application! This tool helps you calculate your final grade based on the European Credit Transfer and Accumulation System (ECTS). You can input your grades, ECTS credits, and grading scale for each subject, and the app will calculate your approximate final grade.

## Features

- Input the number of subjects you have.
- Enter grades, ECTS credits, and grading scale for each subject.
- Calculate the weighted average grade based on ECTS.
- Display the final grade on a scale of 100 and 10.
- Dynamic form resizing for better user experience.

## Installation

### Prerequisites

- Python 3.x
- Flask

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/grade_calculator_web.git
   cd grade_calculator_web
Install the required packages:

sh
Copy code
pip install Flask
Run the application:

sh
Copy code
python app.py
Open your browser and navigate to:

arduino
Copy code
http://127.0.0.1:5000/
Usage
Enter Number of Subjects: Start by entering the number of subjects you have completed and click "Submit".

Input Subject Details: For each subject, enter the grade, ECTS credits, and the grading scale.

Calculate Grade: Click "Calculate Grade" to get the approximate final weighted grade, which will be displayed on both a scale of 100 and a scale of 10.

Example
If you have completed 3 subjects with the following details:

Subject 1: Grade = 27, ECTS = 5, Scale = 30
Subject 2: Grade = 85, ECTS = 10, Scale = 100
Subject 3: Grade = 8, ECTS = 5, Scale = 10

Enter these details into the form, and the application will calculate your approximate final grade based on the weighted average of these inputs.