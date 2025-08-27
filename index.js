function isTibetan(text) {
  return /[\u0F00-\u0FFF]/.test(text);
}

module.exports = isTibetan;
