export const MEYVE = "MEYVE";
export const SEBZE = "SEBZE";
export const CHECKLOGIN = "CHECKLOGIN";
export const CHECKREGISTER = "CHECKREGISTER";

export function setMeyve(payload) {
  return {
    type: MEYVE,
    payload,
  };
}
export function setSebze(payload) {
  return {
    type: SEBZE,
    payload,
  };
}
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
