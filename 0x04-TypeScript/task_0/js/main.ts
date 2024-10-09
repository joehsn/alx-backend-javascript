export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const mohammed: Student = {
  firstName: "Mohammed",
  lastName: "Khaled",
  age: 24,
  location: "Somewhere, India",
};
const youssef: Student = {
  firstName: "Youssef",
  lastName: "Hassan",
  age: 22,
  location: "Qena, Egypt",
};

const studentsList: Student[] = [
    youssef,
    mohammed,
];

export function renderer(list: Student[]) {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of list) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
}

renderer(studentsList);
