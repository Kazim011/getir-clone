export const KATEGORİLER = "KATEGORİLER";
export const CHECK = "CHECK";
export const DELETECHECK = "DELETECHECK";
export const URUN = "URUN";
export const EDITCHECK = "EDİTCHECK";
export const RAND = "RAND";
export function setKategori(payload) {
  return {
    type: KATEGORİLER,
    payload,
  };
}
export function setCheck(payload) {
  return {
    type: CHECK,
    payload,
  };
}
export function setDeleteCheck(payload) {
  return {
    type: DELETECHECK,
    payload,
  };
}
export function setUrun(payload) {
  return {
    type: URUN,
    payload,
  };
}
export function setEditCheck(payload) {
  return {
    type: EDITCHECK,
    payload,
  };
}
export function setRand() {
  return {
    type: RAND,
    payload: Math.random(),
  };
}
