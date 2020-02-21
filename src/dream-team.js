module.exports = function createDreamTeam(members) {
  if (members!= undefined &&typeof members === "object" && members.length > 0) {
    return members.filter(x => typeof x === "string").map(x => x.trim().split('')[0].toUpperCase()).sort().join('');
  }
  return false;
};