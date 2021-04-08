$(()=>{
  const url = location.href;
  if (url.indexOf("member") != -1) {
    const memberID = url.split("member/")[1];
    document.write("你的會員ID是  " + memberID);
  }

  const showWord = () => {
    $("h2").html('<input />')
  }

  const changeColor = () => {
    console.log($("#name"));
    $("#name td").css('background', 'red')
  };

  const changeWord = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log($("#showWord").html()); // 顯示文字
    $("#showWord").html(e.target.value); // 改變文字
  };


  // Homework1 : jquery 事件綁定.on
  $("#checkboxall").on("click change", () => {
    $(".bubble").each((index, val) => {
      val.checked = $("#checkboxall").prop("checked");
    })
  });

  // Homework1 : tag標籤綁定事件(addEventListener)
  checkboxtag = document.getElementById('tagcheckboxall');
  checkboxtag.addEventListener("click", (e) => {
    bubbleArray = document.getElementsByClassName("tagbubble");
    for (let element of bubbleArray) {
      element.checked = checkboxtag.checked;
    }
  }, false)


  // Homework2 : 
  $("#inputpassword").on("change", () => {
    inputpassword = $("#inputpassword").val();
    $("#confirmpassword").val(inputpassword);
  })


  // Homework3 : 
  $("#inputcolor").on("change", () => {
    inputcolor = $("#inputcolor").val();
    $("#myDiv").attr("style", `background-color: ${inputcolor}`);
  })



  //Homework4 :
  // 列變色
  $("#tb tr").hover(
    function () {
    // mouseenter
      if ($(this).index() % 2 != 0) {
        $(this).addClass('enterEven'); // 奇數列變色
      } else {
        $(this).addClass('enterOdd');  // 偶數列變色
      }
    },
    function () {
    // mouseover
      $(this).removeClass();
    }
  )

  // 點擊td變色
  $("#tb td").click(function(){
    $(this).addClass("clickColor")
    $(this).mouseout(function(){
      $(this).removeClass();
    })  
  })

  // 欄變色
  const rowCount = $('#tb').find('tr').size();
  console.log($(`tr:eq(0) td:eq(1)`));
	$('#tb tr td').hover(
		function () {
			// mouseenter
			const index = $(this).index();
			for (let i = 0; i < rowCount; i++) {
				$(`tr:eq(${i}) td:eq(${index})`).addClass('enterOdd');
			}
		},
		function () {
			// mouseover
			const index = $(this).index();
			for (let i = 0; i < rowCount; i++) {
				$(`tr:eq(${i}) td:eq(${index})`).removeClass();
			}
		}
	);


})