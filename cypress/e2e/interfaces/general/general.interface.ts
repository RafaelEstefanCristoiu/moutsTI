interface IGeneral {
  loginGeneralFailed(): any;
  loginGeneralFailedEmptyUser(pass: string): any;
  loginGeneralFailedEmptyPass(user: string): any;
};
export default IGeneral;
