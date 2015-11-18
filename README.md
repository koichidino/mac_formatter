# mac_formatter

Convert string to mac address format.

***For example:***

```AABBCCDDEEFF``` will be convert to ```AA:BB:CC:DD:EE:FF```

## Usage ##

```javascript

var mac_formatter = require('mac_formatter');

var originalStr = 'AABBCCDDEEFF';

var options = {
  convertCase: 'l'  // 'l' to Lowercase, 'u' to Uppercase
};

var macAddress = mac_formatter(originalStr, options); // aa:bb:cc:dd:ee:ff

```
