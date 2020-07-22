//jQuery
     $(document).ready(function(){ //jquery method for carousel play/pause button

         $('#mycarousel').carousel({interval: 2000});

         $('#carouselButton').click(function(){
             if($('#carouselButton').children('span').hasClass('fa-pause')) {
                 $('#mycarousel').carousel('pause');
                 $('#carouselButton').children('span').removeClass('fa-pause');
                 $('#carouselButton').children('span').addClass('fa-play');
             }
             else {
                 $('#mycarousel').carousel('cycle');
                 $('#carouselButton').children('span').removeClass('fa-play');
                 $('#carouselButton').children('span').addClass('fa-pause');
             }
         });

         $('#loginClose').click(function(){ //to hide the loginModal using close button
             $('#loginModal').modal('hide');
         });

         $('#loginModalCancel').click(function(){ //to hide the loginModal using cancel button
             $('#loginModal').modal('hide');
         });

         $('#reserveButton').click(function(){ //to show the reserveModal using reserve a table button
             $('#reserveModal').modal('show');
         });

         $('#loginModalButton').click(function(){ //to show the loginModal using login button
             $('#loginModal').modal('show');
         });

     });
