# Grade Calculator Web Application

Welcome to the Grade Calculator web application! This tool helps you calculate your final grade based on the European Credit Transfer and Accumulation System (ECTS). You can input your grades, ECTS credits, and grading scale for each subject, and the app will calculate your approximate final grade.

## Features

- **Dynamic Input**: Easily input the number of subjects you have.
- **Detailed Subject Information**: Enter grades, ECTS credits, and the grading scale for each subject.
- **Accurate Calculation**: Calculates the weighted average grade based on ECTS.
- **Flexible Output**: Displays the final grade on both a scale of 100 and 10.
- **Responsive Design**: Adjusts form size dynamically for a better user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Python 3.x** installed on your computer.
- **Flask** library installed. You can install it using:
  pip install Flask

Installation Steps:

Step 1:

- Clone the Repository:
  
  git clone https://github.com/yourusername/grade_calculator.git
  cd grade_calculator

Step 2:

- Install the dependencies:

  pip install Flask

Step 3:

- Run the app:

  python app.py

Step 4:

- Open in browser:
  
  Navigate to http://127.0.0.1:5000/ in your web browser.

## Usage

- Start the App: When you open the application, you'll be prompted to enter the number of subjects.
- Input Subject Details: For each subject, enter:
- Grade: The grade you received.
- ECTS Credits: The number of ECTS credits for the subject.
- Grading Scale: The scale used for grading (e.g., 30, 50, 100).
- Calculate: Click "Calculate Grade" to get your final grade, displayed on both a scale of 100 and a scale of 10.

## Example

Suppose you have completed 3 subjects with the following details:

- Subject 1: Grade = 27, ECTS = 5, Scale = 30
- Subject 2: Grade = 85, ECTS = 10, Scale = 100
- Subject 3: Grade = 8, ECTS = 5, Scale = 10
- Enter these details into the form, and the application will calculate your approximate final grade based on the weighted average of these inputs.

