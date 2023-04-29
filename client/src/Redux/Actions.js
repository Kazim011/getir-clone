export const CHECKLOGIN = "CHECKLOGIN";
export const CHECKREGISTER = "CHECKREGISTER";

export function setCheckLogin(payload) {
  return {
    type: CHECKLOGIN,
    payload,
  };
}
export function setCheckRegister(payload) {
  return {
    type: CHECKREGISTER,
    payload,
  };
}
