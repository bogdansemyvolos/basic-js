const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    let activity = Number.parseFloat(sampleActivity);
    if (activity > 0 && activity < 15) {
      return Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / (Math.log(2).toFixed(3) / HALF_LIFE_PERIOD));
    }
}
return false;
};