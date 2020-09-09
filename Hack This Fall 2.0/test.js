$(function() {
        $('.material-cardss > .mc-btn-action').click(function () {
            var cardss = $(this).parent('.material-cardss');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (cardss.hasClass('mc-active')) {
                cardss.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                cardss.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });
