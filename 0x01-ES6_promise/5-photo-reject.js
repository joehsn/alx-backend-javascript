export default function uploadPhoto(filename) {
  const err = new Error(`${filename} cannot be processed`);
  return Promise.reject(err);
}
