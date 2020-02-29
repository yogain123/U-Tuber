const throttle = function(fn, timeout) {
  let flag = true;
  return (...rest) => {
    if (flag) {
      fn();
      flag = false;
      setTimeout((...rest) => {
        flag = true;
      }, timeout);
    }
  };
};

export default throttle;
