const fs = require('fs');

const countStudents = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the 1  database'));
            } else {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const fields = lines[0].split(',');
                const studentsByField = {};

                lines.slice(1).forEach(line => {
                    const student = line.split(',');
                    const field = student[student.length - 1];
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(student[0]);
                });

                console.log(`Number of students: ${lines.length - 1}`);
                for (const field in studentsByField) {
                    console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
                }
                resolve();
            }
        });
    });
};

module.exports = countStudents;
