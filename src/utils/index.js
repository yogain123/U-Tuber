import _ from "lodash";
export function generateRandom(min, max) {
  return _.random(min, max); // generate random number between min and max(inclusive)
}
