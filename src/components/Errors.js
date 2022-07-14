export const Error = {
  errorName(short, long, pattern) {
    if (short) {
      return "Min 2 letters";
    } else if (long) {
      return "Max 60 letters";
    } else if (pattern) {
      return "Only letters. Example: Jhon";
    }
  },
  errorEmail(short, long, pattern) {
    if (short) {
      return "Min 2 letters";
    } else if (long) {
      return "Max 100 letters";
    } else if (pattern) {
      return "Example: jhon@mail.com";
    }
  },
  errorPassword(short, long, pattern) {
    if (short) {
      return "Min 6 letters";
    } else if (long) {
      return "Max 100 letters";
    } else if (pattern) {
      return "Example: jhon2587";
    }
  },
  errorMax(under, over) {
    if (under) {
      return "Min value 10000";
    } else if (over) {
      return "Max value 1000000000";
    }
  },
};
