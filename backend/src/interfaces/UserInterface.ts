export default interface UserInterface {
  username: string;
  email: string;
  password: string;
  description: string;
  image: string;
  posts: any;
  comparePasswords?: Function;
}
