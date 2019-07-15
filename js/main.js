(function(){
  'use strict';
$(function(){
   var $this = $('.wrapper'),
       $search = $this.find('.search_j'),
       $form = $this.find('.search_this'),
       $target = $form.find('input');
       $search.click(function(event){
         console.log('ok');
           event.preventDefault();
           $target.focus();
           $target.css({
             opacity:'1',
             transform:"scale(1,1)",
             'z-index':1
           });
       });
      $target.blur(function(e){
          e.preventDefault();
          $target.css({
            transform:"scale(0,1)",
            opacity:'0',
            "z-index":-99
          });
        });
      // ページ内リンクスムーズスクロール 
      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-75;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      });

})();
