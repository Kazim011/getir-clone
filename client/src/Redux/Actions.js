export const MEYVE = "MEYVE";
export const SEBZE = "SEBZE";

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