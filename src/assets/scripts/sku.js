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
        case 'Chocolate Chip Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTCHOCOC');
            console.log('Chocolate Chip Cookies 12 Ct.');
        break;
               
        case 'Gluten Free Banana Chocolate Chip Cookies 12 Ct.':
        case 'Biscuits aux pépites de chocolat à la banane sans gluten 12 Ct.':
            $('#sku').val('SFLCK1X12CTBANCC');
            console.log('Gluten Free Banana Chocolate Chip Cookies 12 Ct.');
        break;

        case 'Irresistible Chocolate Banana Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTIRRCHOBANA');
            console.log('Irresistible Chocolate Banana Cookies 12 Ct.');
        break;

        case 'Irresistible Chocolate Cookies 12 Ct.':
        case 'Biscuits aux pépites de chocolat irrésistibles 12 Ct.':
            $('#sku').val('SFLCK1X12CTIWCC');
            console.log('Irresistible Chocolate Cookies 12 Ct.');
        break;

        case 'Irresistible Peanut Butter Cookies 12 Ct.':
        case 'Biscuits au beurre de cacahuète irrésistibles 12 Ct.':
            $('#sku').val('SFLCK1X12CTIWPB');
            console.log('Irresistible Peanut Butter Cookies 12 Ct.');
        break;

        case 'Oatmeal Raisin Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTGOAT');
            console.log('Oatmeal Raisin Cookies 12 Ct.');
        break;

        case 'Pumpkin Spice Cookies 12 Ct.':
            $('#sku').val('SFLCK1X12CTPUMPKSPICE');
            console.log('Pumpkin Spice Cookies 12 Ct.');
        break;

        /* Supplements */
        case '10 Green Veggies 90 Ct.':
            $('#sku').val('SFLSUPL1X90CT10GRNVEG');
            console.log('10 Green Veggies 90 Ct.');
        break;

        case 'ADK Capsules 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTADK');
            console.log('ADK Capsules 90 Ct.');
        break;

        case 'ADK Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTVITADKGUM');
            console.log('ADK Gummies 60 Ct.');
        break;

        case 'Apple Cider Vinegar Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTACV');
            console.log('Apple Cider Vinegar Gummies 60 Ct.');
        break;

        case 'BurnCor with Lepticore® 120 Ct.':
            $('#sku').val('SFLSUP1X120CTBURN');
            console.log('BurnCor with Lepticore® 120 Ct.');
        break;

        case 'CoQ-10 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTCOQ10');
            console.log('CoQ-10 90 Ct.');
        break;

        case 'Cortisol Balancer 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTCOQ10');
            console.log('Cortisol Balancer 90 Ct.');
        break;

        case 'Elderberry Echinacea Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTPROECHI');
            console.log('Elderberry Echinacea Gummies 60 Ct.');
        break;

        case 'Elderberry Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTIMMUN');
            console.log('Elderberry Gummies 60 Ct.');
        break;

        case 'Hunger Block 90 Ct.':
            $('#sku').val('SFLSUPL90CTHUNBLOC');
            console.log('Hunger Block 90 Ct.');
        break;

        case 'Melatonin & Magnesium Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTMAGMELA');
            console.log('Melatonin & Magnesium Gummies 60 Ct.');
        break;

        case 'Melatonin & Magnesium Gummies with Zinc 60 Ct.':
            $('#sku').val('SFLGUM1X60CTMAGMELAZINC');
            console.log('Melatonin & Magnesium Gummies with Zinc 60 Ct.');
        break;

        case 'MultiVitamin Capsules 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTMULTI');
            console.log('MultiVitamin Capsules 90 Ct.');
        break;

        case 'Multivitamin Kids Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTMULVITKIDS');
            console.log('Multivitamin Kids Gummies 60 Ct.');
        break;

        case 'Multivitamin Men Gummies 60 Ct.':
            $('#sku').val('');
            console.log('Multivitamin Men Gummies 60 Ct.');
        break;

        case 'Multivitamin Women Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTMULVITW');
            console.log('Multivitamin Women Gummies 60 Ct.');
        break;

        case 'Plant Based Omega 3 120 Ct.':
            $('#sku').val('SFLSUPL1X120CTOMGA3');
            console.log('Plant Based Omega 3 120 Ct.');
        break;

        case 'Potassium Magnesium 90 Ct.':
            $('#sku').val('');
            console.log('Potassium Magnesium 90 Ct.');
        break;

        case 'Probiotic 120 Ct.':
            $('#sku').val('SFLSUPL1X120CT50BPRO');
            console.log('Probiotic 120 Ct.');
        break;

        case 'Red Defense 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTREDDEF');
            console.log('Red Defense 90 Ct.');
        break;

        case 'Sleep & Relax 30 Ct.':
            $('#sku').val('SFLSUPL1X30CTSLEPREL');
            console.log('Sleep & Relax 30 Ct.');
        break;

        case 'Vitamin B12 Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTVITB12ENERGY');
            console.log('Vitamin B12 Gummies 60 Ct.');
        break;

        case 'Vitamin B6 Vitality 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTVITB6V');
            console.log('Vitamin B6 Vitality 90 Ct.');
        break;

        case 'Vitamin C Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTVITC');
            console.log('Vitamin C Gummies 60 Ct.');
        break;

        case 'Vitamin D3 90 Ct.':
            $('#sku').val('SFLSUPL1X90CTVITD3');
            console.log('Vitamin D3 90 Ct.');
        break;

        case 'Vitamin D3 Gummies 60 Ct.':
            $('#sku').val('SFLGUM1X60CTVITD3');
            console.log('Vitamin D3 Gummies 60 Ct.');
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
