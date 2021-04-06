window.onload = () => {
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
  $("#checkboxall").on("click change",()=>{
    $(".bubble").each((index, val) => {
      val.checked = $("#checkboxall").prop("checked");
    })
  });
  
  // Homework1 : tag標籤綁定事件(addEventListener)
  checkboxtag = document.getElementById('tagcheckboxall');
  checkboxtag.addEventListener("click", (e)=>{
    bubbleArray = document.getElementsByClassName("tagbubble");
    for(let element of bubbleArray){
      element.checked = checkboxtag.checked;
    }
  }, false)
  
  
  // Homework2 : 
  $("#inputpassword").on("change", ()=>{
  inputpassword = $("#inputpassword").val();
  $("#confirmpassword").val(inputpassword);
  })
  
  
  // Homework3 : 
  $("#inputcolor").on("change", ()=>{
  inputcolor = $("#inputcolor").val();
  $("#myDiv").attr("style", `background-color: ${inputcolor}`);
  })



  //Homework4 :
  // let tb = document.getElementById("tb_color");
  // tb.addEventListener("click", ()=>{
  //     console.log(tb)
  // })

  let beforecolor = $("#col").css("background-color");

  $("#tb").hover(
    // mouseenter
    function(){
      $("#col").prop("style", `background-color: coral`);
    },
    function(){
      $("#col").prop("style", beforecolor);
    }
  ).click(()=>{
      alert($(this).css("background-color"))
    }
  )







}