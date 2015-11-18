var format = function(string, options) {
  options = options || {};
  // for nth position
  // foo.match(new RegExp('.{1,'+n+'}', 'g'));
  // for mac, we split at 2nd position
  var ss = string.match(/.{1,2}/g);
  var macAddress = ss.join(':');

  if (options.convertCase === 'l') {
    macAddress = macAddress.toLowerCase();
  } else if (options.convertCase === 'u') {
    macAddress = macAddress.toUpperCase();
  }
  return macAddress;
}

module.exports = format;
