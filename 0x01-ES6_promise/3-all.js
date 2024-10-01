import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((result) => {
    const photo = result[0];
    const user = result[1];
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
