(document).ready(function() {
    var
    el = $('.element'),
    box_width = 249;
    
    el.on('click', function() {
        var 
        this_el = $(this),
        this_val = this_el.html(),
        box = $('#box');
        
        if( box.hasClass('open') ) {
            is_open = true;
        } else {
            is_open = false;
        }
        
        if( this_el.hasClass('selected') ) {
            el.removeClass('selected');
            close_box();
        } else {
            el.removeClass('selected');
            this_el.addClass('selected');
            open_box(this_val, is_open);
        }
    });
    
    function open_box(label, is_open) {
        var
        box = $('#box'),
        box_label = $('#box-label'),
        wall = $('.box-wall');
        
        if( is_open ) {
            close_box();
            setTimeout(function() {
                run_open();
            }, 500);
        } else {
            run_open();
        }    
            
        function run_open() {
            box_label.html(label);
            box.width( box_width + (box_label.width() + 50) );
            box_label.addClass('active');
            box.addClass('open');
            wall.addClass('open');
        }
    }
    
    function close_box() {
        var
        box = $('#box'),
        box_label = $('#box-label'),
        wall = $('.box-wall');
        
        box.width(box_width);
        box.removeClass('open');
        wall.removeClass('open');
        box_label.removeClass('active');
    }
});