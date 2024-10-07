export default function hasValuesFromArray(set, list) {
  return list.every((item) => set.has(item));
}
