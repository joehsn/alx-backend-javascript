export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('TypeError: Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    this._students = newStudents;
  }

  get students() {
    return this._students;
  }
}
