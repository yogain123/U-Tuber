const throttle = function(fn, timeout) {
  let flag = true;
  return (...rest) => {
    if (flag) {
      fn(...rest);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timeout);
    }
  };
};

export default throttle;
