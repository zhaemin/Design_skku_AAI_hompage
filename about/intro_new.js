$(window).scroll(function() {
  var h = $(window).scrollTop();

  // 스크롤 위치에 따라 투명도 값 계산
  var y1 = (1 / -300) * h + (1000 / 300);
  var y2 = (1 / -300) * h + (1950 / 300);

  // 특정 요소에 투명도 값 적용
  $('.card-box').eq(0).css('opacity', y1);
  $('.card-box').eq(1).css('opacity', y2);

  // 스크롤 위치에 따라 크기 값 계산
  var s = [];
  s[0] = (-2 / 3000) * h + (44 / 30);
  s[1] = (-2 / 3000) * h + (630 / 300);

  // 스크롤 위치에 따라 요소에 크기 값 적용
  for (var i = 0; i < 3; i++) {
      if (h >= 700 && h <= 1000) {
          $('.card-box').eq(i).css('transform', `scale(${s[0]})`);
      } else if (h >= 1650 && h <= 1950) {
          $('.card-box').eq(i).css('transform', `scale(${s[1]})`);
      } else {
          $('.card-box').eq(i).css('transform', 'scale(1)');
      }
  }
});
