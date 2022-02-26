const fadeInBelow = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

const fadeInUp = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

export { fadeInBelow, fadeInUp };
