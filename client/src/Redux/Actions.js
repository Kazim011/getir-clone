export const CHECKLOGIN = "CHECKLOGIN";
export const CHECKREGISTER = "CHECKREGISTER";
export const SEPET = "SEPET";
export const RAND = "RAND";
export const TOTAL = "TOTAL";

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
export function setSepet(payload) {
  return {
    type: SEPET,
    payload,
  };
}
export function setRand() {
  return {
    type: RAND,
    payload: Math.random(),
  };
}
export function setTotal(payload) {
  return {
    type: TOTAL,
    payload,
  };
}
