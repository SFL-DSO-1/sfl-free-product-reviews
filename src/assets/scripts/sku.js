$('#freeProduct').change(function(){
    var productSelected = $('#freeProduct').val();
    switch (productSelected) {

        /* Protein Bars */
        case 'Caramel Almond Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTLSCARALM');
            console.log('Caramel Almond Protein Bars 12 Ct.');
        break;

        case 'Cinnamon Pecan Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTCINPCAN');
            console.log('Cinnamon Pecan Protein Bars 12 Ct.');
        break;

        case 'Choco Crisp Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTLSCHO');
            console.log('Choco Crisp Protein Bars 12 Ct.');
        break;

        case 'Keto Triple Choco Crisp Protein Bars 12 Ct.':
        case 'Barres protéinées Keto Triple Chocolat 12 Ct.':
            $('#sku').val('SFLPB1X12CTKTO3CHO');
            console.log('Keto Triple Choco Crisp Protein Bars 12 Ct.');
        break;

        case 'Keto Variety Protein Bar Box 18 Ct.':
            $('#sku').val('SFLPBLS1X18ENGKETOVRBX');
            console.log('Keto Variety Protein Bar Box 18 Ct.');
        break;

        case 'Luscious Lemon Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTLEM');
            console.log('Luscious Lemon Protein Bars 12 Ct.');
        break;

        case 'Peanut Butter Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTLSPB');
            console.log('Peanut Butter Protein Bars 12 Ct.');
        break;

        case 'S\'mores Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTSMOR');
            console.log('S\'mores Protein Bars 12 Ct.');
        break;

        case 'Strawberry & Cream Protein Bars 12 Ct.':
            $('#sku').val('SFLPB1X12CTSTRAWCRM');
            console.log('Strawberry & Cream Protein Bars 12 Ct.');
        break;

        case 'Variety Protein Bar Box 18 Ct.':
            $('#sku').val('SFLPBLS1X18VRBXDRKB');
            console.log('Variety Protein Bar Box 18 Ct.');
        break;

        /* Cookies */
        case 'Gluten Free Banana Chocolate Chip Cookies 12 Ct.':
        case 'Biscuits aux pépites de chocolat à la banane sans gluten 12 Ct.':
            $('#sku').val('SFLCK1X12CTBANCC');
            console.log('Gluten Free Banana Chocolate Chip Cookies 12 Ct.');
        break;

        case 'Irresistible Winner Chocolate Banana Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTIRRCHOBANA');
            console.log('Irresistible Winner Chocolate Banana Cookies 12 Ct.');
        break;

        case 'Irresistible Winner Chocolate Cookies 12 Ct.':
        case 'Biscuits aux pépites de chocolat irrésistibles 12 Ct.':
            $('#sku').val('SFLCK1X12CTIWCC');
            console.log('Irresistible Winner Chocolate Cookies 12 Ct.');
        break;

        case 'Irresistible Winner Peanut Butter Cookies 12 Ct.':
        case 'Biscuits au beurre de cacahuète irrésistibles 12 Ct.':
            $('#sku').val('SFLCK1X12CTIWPB');
            console.log('Irresistible Winner Peanut Butter Cookies 12 Ct.');
        break;

        case 'Pumpkin Spice Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTPUMPKSPICE');
            console.log('Pumpkin Spice Cookies 12 Ct.');
        break;

        /* Supplements */
        case 'Melatonin & Magnesium Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTMAGMELA');
            console.log('Melatonin & Magnesium Gummies 60 Ct.');
        break;

        case 'Multivitamin 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTMULTI');
            console.log('Multivitamin 90 Ct.');
        break;

        case 'Sleep & Relax 7 Day':
            $('#sku').val('SFLSUPL1X7CTSLEPREL');
            console.log('Sleep & Relax 7 Day');
        break;

        case 'Probiotic 30 Ct.':
            $('#sku').val('SFLSUPL1X30CT50BPRO');
            console.log('Probiotic 30 Ct.');
        break;

        case 'Vitamin B12 Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTVITB12ENERGY');
            console.log('Vitamin B12 Gummies 60 Ct.');
        break;

        case 'Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry':
            $('#sku').val('SFLGUM1X60CTVITD3');
            console.log('Vitamin D3 Gummies 60Ct Mixed Flavor - Orange, Lemon, Strawberry');
        break;

        /* Other */
        case 'T-Shirt':
            $('#sku').val('tshirt');
            console.log('tshirt selected');
        break;

        case 'Water Bottle':
            $('#sku').val('waterbottle');
            console.log('Water Bottle');
        break;

    } 
});
