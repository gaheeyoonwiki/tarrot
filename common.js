$(function(){
  $('.p-txt').click(function() {
    randomNum = Math.floor(Math.random() * arr.length);
    $(this).html(arr[randomNum]);

  });
});

var arr = [
  "REST<br><br>아무것도 하지 마세요.<br>에너지를 충전할 시간이 필요합니다.",
  "EXPECT<br><br>마음껏 기대하고 상상하세요.<br>상상 이상의 일드이 편쳐집니다.",
  "TRUST<br><br>잘할 수 있다고 믿고 지켜 봐주세요.<br>믿음이 에너지로 전달됩니다.",
  "DEDICATE<br><br>확신이 생겼다면 전력을 다해보세요.<br>큰 성과가 기다리고 있습니다."
]
