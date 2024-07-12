from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        subjects = request.json['subjects']
        total_weighted_grade = 0
        total_ects = 0

        for subject in subjects:
            grade = float(subject['grade'])
            ects = float(subject['ects'])
            scale = float(subject['scale'])

            normalized_grade = (grade / scale) * 100
            total_weighted_grade += normalized_grade * ects
            total_ects += ects

        if total_ects == 0:
            return jsonify({'error': 'Total ECTS cannot be zero.'}), 400

        final_grade_100 = total_weighted_grade / total_ects
        final_grade_10 = final_grade_100 / 10

        return jsonify({
            'final_grade_100': round(final_grade_100, 2),
            'final_grade_10': round(final_grade_10, 2)
        })
    except (ValueError, KeyError) as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
