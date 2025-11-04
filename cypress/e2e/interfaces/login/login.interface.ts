interface ILogin {
  loginUserFailed(): any;
  loginUserFailedUserEmpty(pass: string): any;
  loginUserFailedPassEmpty(user: string): any;
};
export default ILogin;
