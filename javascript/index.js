function artworkFilter(dataFilter) {
    var video_section = $('div.video_section'), cont = video_section.children('div.filtering')
    cont.detach().sort(function (a, b) {
        var contentA =parseInt( $(a).attr(dataFilter));
        var contentB =parseInt( $(b).attr(dataFilter));
        return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    });
    video_section.append(cont)
}

function artworkFilterUpsideDown(dataFilter) {
    var video_section = $('div.video_section'), cont = video_section.children('div.filtering')
    cont.detach().sort(function (a, b) {
        var contentA =parseInt( $(a).attr(dataFilter));
        var contentB =parseInt( $(b).attr(dataFilter));
        return (contentB < contentA) ? -1 : (contentB > contentA) ? 1 : 0;
    });
    video_section.append(cont)
}

function randomSelection() {
    (function($){
        $.fn.shuffle = function() {    
            var allElems = this.get(),
                getRandom = function(max) {
                    return Math.floor(Math.random() * max);
                },
                shuffled = $.map(allElems, function(){
                    var random = getRandom(allElems.length),
                        randEl = $(allElems[random]).clone(true)[0];
                    allElems.splice(random, 1);
                    return randEl;
               });    
            this.each(function(i){
                $(this).replaceWith($(shuffled[i]));
            });    
            return $(shuffled);     
        };     
    })(jQuery);
    var video_section = $('div.video_section'), cont = video_section.children('div.filtering')
    $(cont).shuffle()
}  