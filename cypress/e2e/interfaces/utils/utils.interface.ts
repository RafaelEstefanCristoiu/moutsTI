interface IUtils {
  validateField(r: string): any;
  validateHttpFailed(r: string): any;
  validateHttpSuccess(r: string): any;
  validateFieldEmpty(r: string): any;
  randowCharacter(len: any): any;
  generateGuid(): any;
  generateRandowNumber(): any;
};
export default IUtils;
