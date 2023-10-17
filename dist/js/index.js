$(document).ready(function(){
  if (window.innerWidth > 768) {
      $("body").css("background-image", "url('/images/bg-intro-desktop.png')");
  }

  $("button").click(function() {
      const inputs = [
          { selector: "input:eq(0)", message: "First name cannot be empty", target: ".firstName" },
          { selector: "input:eq(1)", message: "Last name cannot be empty", target: ".lastName" },
          { selector: "input:eq(2)", message: "Looks like it is not an email", target: ".email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
          { selector: "input:eq(3)", message: "Password cannot be empty", target: ".password" }
      ];

      inputs.forEach(input => {
          const inputValue = $(input.selector).val();
          const isValid = input.regex ? input.regex.test(inputValue) : inputValue !== "";

          $(input.target).text(isValid ? "" : input.message);
          $(input.selector).css({
              "background-image": isValid ? "none" : "url('/images/icon-error.svg')",
              "background-repeat": "no-repeat",
              "background-position": "right center"
          });
      });
  });
});
