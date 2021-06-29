    // JavaScript Document
    $(document).ready(function() {
        $('#autoWidth1').lightSlider({
            autoWidth:true,
            loop:true,
            autoWidth: true,
            slideMove: 1,
            slideMargin:20,
            addClass: '',
            mode: 'slide',
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
            easing: 'linear', //'for jquery animation',//
            speed: 400, //ms'
            auto: false,
            pauseOnHover: false,
            loop: false,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: true,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        }); 
        
        $('#autoWidth2').lightSlider({
            autoWidth:true,
            loop:true,
            autoWidth: true,
            slideMove: 1,
            slideMargin:20,
            addClass: '',
            mode: 'slide',
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
            easing: 'linear', //'for jquery animation',//
            speed: 400, //ms'
            auto: false,
            pauseOnHover: false,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });
        
        $('#autoWidth3').lightSlider({
            autoWidth:true,
            loop:true,
            autoWidth: true,
            slideMove: 1,
            slideMargin:20,
            addClass: '',
            mode: 'slide',
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
            easing: 'linear', //'for jquery animation',//
            speed: 400, //ms'
            auto: false,
            pauseOnHover: false,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        }); 

        $('#autoWidth4').lightSlider({
            autoWidth:true,
            loop:true,
            autoWidth: true,
            slideMove: 1,
            slideMargin:20,
            addClass: '',
            mode: 'slide',
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
            easing: 'linear', //'for jquery animation',//
            speed: 300, //ms'
            auto: true,
            pauseOnHover: true,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: false,
            controls: false,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });

        
      });

      
