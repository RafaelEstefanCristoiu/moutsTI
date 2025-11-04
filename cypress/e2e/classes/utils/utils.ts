import IUtils from "../../interfaces/utils/utils.interface";
class Utils implements IUtils {
  validateField(r: string) {
    expect(r).not.be.empty;
    expect(r).not.be.null;
    expect(r).to.be.string;
    expect(r).not.be.undefined;
  };
  validateFieldEmpty(r: string) {
    expect(r).to.be.empty;
    expect(r).not.to.be.null;
    expect(r).to.be.string;
  };
  validateHttpFailed(r: string) {
    expect(r).not.be.eq(500);
    expect(r).not.be.eq(502);
    expect(r).not.be.eq(503);
    expect(r).not.be.eq(504);
    expect(r).not.be.eq(401);
    expect(r).not.be.eq(403);
  };
  validateHttpSuccess(r: string) {
    expect(r).not.be.eq(200);
    expect(r).not.be.eq(201);
    expect(r).not.be.eq(202);
    expect(r).not.be.eq(203);
    expect(r).not.be.eq(204);
    expect(r).not.be.eq(206);
  };
  randowCharacter(len: any) {
    let caracter = "";
    do {
      caracter += Math.random().toString(36).substring(2);
    } while (caracter.length < len);
    return caracter;
  };
  generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  };
  generateRandowNumber() {
    const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
    return randomNumber.toString();
  };
};
export default new Utils();
