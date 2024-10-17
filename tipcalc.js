// clicking the button
function clickButton() {
  $(".btn").addClass("pressed");
}

$(".btn").click(function () {
  clickButton();
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 250);
});

//Solving the math
$(".btn").click(function () {
  let bill = Number($(".total-bill").val());
  let tip = Number($(".tip").val());

  let percentageOfTip = tip * 0.01;

  let tipAmount = bill * percentageOfTip;
  let finalBill = bill + tipAmount;

  $(".tip").text(`Tip: $ ${tipAmount.toFixed(2)}`);
  $(".money").text(`Final Bill: $ ${finalBill.toFixed(2)}`);
  $(".total").show();
});

//Reset button functions

function clearBtn() {
  $(".tip").text("");
  $(".money").text("");
  $(".total").hide();
}

$(".clear").click(function () {
  clearBtn();
});
