export const KATEGORİLER = "KATEGORİLER";
export const CHECK = "CHECK";

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
