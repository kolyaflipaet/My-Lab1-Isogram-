function isIsogram(string) {
  string = string.toLowerCase();  // Ignore letter case
  var letterCount = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char.match(/[a-z]/i)) {
      if (letterCount[char]) {
        return false;
      }
      letterCount[char] = 1;
    }
  }
  return true;
}
