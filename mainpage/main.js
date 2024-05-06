$(document).ready(function() {
    $('.submenu').hide();  // 초기에 모든 서브메뉴 숨김
  
    $('.submenu-trigger').click(function() {
      $(this).next('.submenu').slideToggle(200);
    });
  });
  