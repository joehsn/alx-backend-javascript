export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((acc, cur) => acc + cur.id, 0);
}
