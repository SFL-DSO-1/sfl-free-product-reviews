$('#freeProduct').change(function(){
    if($('#freeProduct').val() == 'T-Shirt'){
        $('#sku').val('tshirt');
        console.log('tshirt selected');
    } else if($('#freeProduct').val() == 'Water Bottle') {
        $('#sku').val('waterbottle');
        console.log('Water Bottle');
    } else if($('#freeProduct').val() == 'S\'mores Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTSMOR');
        console.log('S\'mores Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Cinnamon Pecan Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTCINPCAN');
        console.log('Cinnamon Pecan Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Strawberry & Cream Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTSTRAWCRM');
        console.log('Strawberry & Cream Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Peanut Butter Chocolate Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSPB');
        console.log('Peanut Butter Chocolate Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Irresistible Winner Chocolate Cookies 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIWPB');
        console.log('Irresistible Winner Chocolate Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Sleep & Relax 7 Day') {
        $('#sku').val('SFLSUPL1X7CTSLEPREL');
        console.log('Sleep & Relax 7 Day');
    } else if($('#freeProduct').val() == 'Probiotic 30 Ct.') {
        $('#sku').val('SFLSUPL1X30CT50BPRO');
        console.log('Probiotic 30 Ct.');
    }
});