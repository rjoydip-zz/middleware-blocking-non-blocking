module.exports = (miliseconds, fn) => {
  let currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
  if (fn) fn();
};
