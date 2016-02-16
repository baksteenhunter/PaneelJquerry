$('.knoppen').each( function() {
    var dezeKnop = $(this);
    var actieveKnop = dezeKnop.find('li.actief');
    var link = actieveKnop.find('a')
    var actiefPaneel = $(link.attr('href'));
    
    dezeKnop.on('click', 'a', function(e) {
        e.preventDefault();
        var link = $(this);
        var beoogId = this.hash;
        
        if(beoogId && !link.parent().is('.actief')){
            actiefPaneel.removeClass('actief');
            actieveKnop.removeClass('actief');
            
            actiefPaneel = $(beoogId).addClass('actief');
            actieveKnop = link.parent().addClass('actief');
        }
    })

});