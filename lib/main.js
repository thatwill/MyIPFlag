// Uses flags from www.icondrawer.com
// Uses GeoIP API www.ipinfo.io

var buttons = require('sdk/ui/button/action');
var Request = require("sdk/request").Request;

var MyIPAddress="";
var MyCountry="";

var MyIPButton = buttons.ActionButton({
  id: "MyIPButton",
  label:"MyIPFlag",
  icon: {
    "16": "./16/UN.png",
    "32": "./32/UN.png",
    "64": "./64/UN.png"
  },
  onClick: refreshIP
});

function refreshIP() {
  Request({
    url: "http://ipinfo.io/geo",
    onComplete: function (response) {
      MyIPAddress = response.json.ip;
      MyCountry  = response.json.country;
      MyIPButton.state("window", {
        label: MyCountry+" \r\n"+MyIPAddress,
        icon: {
          "16": "./16/"+MyCountry.toLowerCase()+".png",
          "32": "./32/"+MyCountry.toLowerCase()+".png",
          "64": "./64/"+MyCountry.toLowerCase()+".png"
        }
       });
    },
  }).get();
};

refreshIP();



