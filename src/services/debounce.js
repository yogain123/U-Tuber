const debounce = function(fn, timeout) {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...rest);
    }, timeout);
  };
};

export default debounce;
