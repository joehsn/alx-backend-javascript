const fs = require('fs');

/**
 * Function to count students from a CSV file.
 * @param {string} path - Path to the CSV file.
 */
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');

        const lines = data.trim().split('\n');
        if (lines.length < 2) throw new Error('No valid data found');

        const [header, ...students] = lines;

        const studentRecords = students
            .map((line) => line.split(','))
            .filter((fields) => fields.length === header.split(',').length);

        console.log(`Number of students: ${studentRecords.length}`);

        const fields = {};
        for (const record of studentRecords) {
            const firstName = record[0];
            const field = record[3];
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstName);
        }

        for (const [field, names] of Object.entries(fields)) {
            console.log(
                `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
            );
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

