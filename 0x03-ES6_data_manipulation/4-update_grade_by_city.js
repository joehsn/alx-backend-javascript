export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((obj) => obj.location === city)
    .map((obj) => ({
      ...obj,
      grade: newGrades.find((gradeObj) => gradeObj.studentId === obj.id)?.grade || 'N/A',
    }));
}
