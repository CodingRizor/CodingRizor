$(document).ready(function () {
  $("#submit").click(function () {
    var email = $("#username").val();
    var psw = $("#pass").val();
   // console.log({ email, psw });

    let settings = {
      url: "https://nigwa.prodigi.media/index.php/rest/V1/integration/customer/token",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        username: "vkant89@gmail.com",
        password: "vishnu@123",
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    if (email == "vkant89@gmail.com" && psw == "vishnu@123") {
      $.post(
        "https://nigwa.prodigi.media/index.php/rest/V1/integration/customer/token",
        {
          username: email,
          password: psw,
        },
        function (response) {
          console.log(response);
        }
      );
    } else {
      alert("error");
    }
  });
});
