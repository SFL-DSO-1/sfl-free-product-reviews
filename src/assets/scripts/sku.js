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
        $('#sku').val('SFLPB1X12CTPB');
        console.log('Peanut Butter Chocolate Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Irresistible Winner Chocolate Cookies 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIWCC');
        console.log('Irresistible Winner Chocolate Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Sleep & Relax 7 Day') {
        $('#sku').val('SFLSUPL1X7CTSLEPREL');
        console.log('Sleep & Relax 7 Day');
    } else if($('#freeProduct').val() == 'Probiotic 30 Ct.') {
        $('#sku').val('SFLSUPL1X30CT50BPRO');
        console.log('Probiotic 30 Ct.');
    } else if($('#freeProduct').val() == 'Gluten Free Banana Chocolate Chip Cookies 12 Ct.') {
        $('#sku').val('SFLCK1X12CTBANCC');
        console.log('Gluten Free Banana Chocolate Chip Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Irresistible Winner Peanut Butter Cookies 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIWPB');
        console.log('Irresistible Winner Peanut Butter Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Keto Triple Chocolate Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTKTO3CHO');
        console.log('Keto Triple Chocolate Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Choco Crisp Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSCHO');
        console.log('Low Sugar Choco Crisp Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Caramel Almond Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTCALM');
        console.log('Caramel Almond Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Luscious Lemon Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLEM');
        console.log('Low Sugar Luscious Lemon Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Peanut Butter Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSPB');
        console.log('Low Sugar Peanut Butter Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Coffee Latte Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTCOFFLATTE');
        console.log('Coffee Latte Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Caramel Almond Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSCARALM');
        console.log('Low Sugar Caramel Almond Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Vitamin B12 Gummies 60 Ct.') {
        $('#sku').val('SFLGUM1X60CTVITB12ENERGY');
        console.log('Vitamin B12 Gummies 60 Ct.');
    } else if($('#freeProduct').val() == 'Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry') {
        $('#sku').val('SFLGUM1X60CTVITD3');
        console.log('Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry');
    } else {
        $('#sku').val('Error - No SKU found.');
    }
});