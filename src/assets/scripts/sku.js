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
    } else if($('#freeProduct').val() == 'Irresistible Winner Chocolate Cookies 12 Ct.' || $('#freeProduct').val() == 'Biscuits aux pépites de chocolat irrésistibles 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIWCC');
        console.log('Irresistible Winner Chocolate Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Sleep & Relax 7 Day') {
        $('#sku').val('SFLSUPL1X7CTSLEPREL');
        console.log('Sleep & Relax 7 Day');
    } else if($('#freeProduct').val() == 'Probiotic 30 Ct.') {
        $('#sku').val('SFLSUPL1X30CT50BPRO');
        console.log('Probiotic 30 Ct.');
    } else if($('#freeProduct').val() == 'Gluten Free Banana Chocolate Chip Cookies 12 Ct.' || $('#freeProduct').val() == 'Biscuits aux pépites de chocolat à la banane sans gluten 12 Ct.') {
        $('#sku').val('SFLCK1X12CTBANCC');
        console.log('Gluten Free Banana Chocolate Chip Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Irresistible Winner Peanut Butter Cookies 12 Ct.' || $('#freeProduct').val() == 'Biscuits au beurre de cacahuète irrésistibles 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIWPB');
        console.log('Irresistible Winner Peanut Butter Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Keto Triple Choco Crisp Protein Bars 12 Ct.' || $('#freeProduct').val() == 'Barres protéinées Keto Triple Chocolat 12 Ct.') {
        $('#sku').val('SFLPB1X12CTKTO3CHO');
        console.log('Keto Triple Chocolate Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Choco Crisp Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSCHO');
        console.log('Low Sugar Choco Crisp Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Luscious Lemon Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLEM');
        console.log('Luscious Lemon Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Peanut Butter Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSPB');
        console.log('Low Sugar Peanut Butter Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Caramel Almond Protein Bars 12 Ct.') {
        $('#sku').val('SFLPB1X12CTLSCARALM');
        console.log('Low Sugar Caramel Almond Protein Bars 12 Ct.');
    } else if($('#freeProduct').val() == 'Vitamin B12 Gummies 60 Ct.') {
        $('#sku').val('SFLGUM1X60CTVITB12ENERGY');
        console.log('Vitamin B12 Gummies 60 Ct.');
    } else if($('#freeProduct').val() == 'Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry') {
        $('#sku').val('SFLGUM1X60CTVITD3');
        console.log('Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry');
    } else if($('#freeProduct').val() == 'Melatonin & Magnesium Gummies 60 Ct.') {
        $('#sku').val('SFLGUM1X60CTMAGMELA');
        console.log('Melatonin & Magnesium Gummies 60 Ct.');
    }  else if($('#freeProduct').val() == 'Multivitamin 90 Ct.') {
        $('#sku').val('SFLSUPL1X90CTMULTI');
        console.log('Multivitamin 90 Ct.');
    } else if($('#freeProduct').val() == 'Irresistible Winner Chocolate Banana Cookies 12 Ct.') {
        $('#sku').val('SFLCK1X12CTIRRCHOBANA');
        console.log('Irresistible Winner Chocolate Banana Cookies 12 Ct.');
    } else if($('#freeProduct').val() == 'Low Sugar Variety Protein Bar Box 18 Ct.') {
        $('#sku').val('SFLPBLS1X18VRBXDRKB');
        console.log('Low Sugar Variety Protein Bar Box 18 Ct.');
    } else if($('#freeProduct').val() == 'Keto Variety Protein Bar Box 18 Ct.') {
        $('#sku').val('SFLPBLS1X18ENGKETOVRBX');
        console.log('Keto Variety Protein Bar Box 18 Ct.');
    } else {
        $('#sku').val('Error - No SKU found.');
    }
});
