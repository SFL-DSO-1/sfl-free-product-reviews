function formSent(){
    window.location.href = "thanks.php";
};
function formSentCaEnglish(){
    window.location.href = "thanks-ca.php";
};
function formSentCaFrench(){
    window.location.href = "merci.php";
};

function submitGeneric() {
    console.log('BV review container called');
    $BV.ui('rr', 'submit_generic', {
        bvcampaignId: 'sfl-free-product-01'
    });
}
function timestampInit() {
    var currentdate = new Date();

    var date = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getDate();

    $('#date').attr('value',date);   
    console.log(date);

    var time = currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

    $('#time').attr('value',time);
    console.log(time);
}

$('#btn-01').click(function(){
    $('#view-01').hide();
    $('#view-02').show();
    $('.progress-bar').css('width','20%').text('20%').css('color','#fff');
    timestampInit();
    
});
$('#btn-02').click(function(){
    if($('#firstName').val() == ''){
        $('#view-02 input').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#firstNameWarning').show();
        $('#firstName').css('border-color','red');
    } else if($('#lastName').val() == ''){
        $('#view-02 input').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#lastNameWarning').show();
        $('#lastName').css('border-color','red');
    } else if($('#email').val() == ''){
        $('#view-02 input').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#emailWarning').show();
        $('#email').css('border-color','red');
    } else {
        $('#view-02').hide();
        $('#view-03').show();
        $('.progress-bar').css('width','40%').text('40%');
    }
    
});
$('#btn-03').click(function(){
    $('#view-03').hide();
    submitGeneric();
    $('#view-04').show(); 
    $('.progress-bar').css('width','60%').text('60%');
});
$('#btn-04').click(function(){
    if($('#freeProduct').val() == ''){
        $('#view-04 input').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#freeProductWarning').show();
        $('#freeProduct').css('border-color','red');
    } else {
        $('#view-04').hide();
        $('#view-05').show();
        $('.progress-bar').css('width','80%').text('80%');
    }   
});

/* US Submit Button */
$('#submit-form').click(function(){
    if($('#address').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#addressWarning').show();
        $('#address').css('border-color','red');
    } else if($('#city').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#cityWarning').show();
        $('#city').css('border-color','red');
    } else if($('#state').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#stateWarning').show();
        $('#state').css('border-color','red');
    } else if($('#zip').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#zipWarning').show();
        $('#zip').css('border-color','red');
    } else {
        var $form = $('form#freeProductForm'),
            url = 'https://script.google.com/macros/s/AKfycbyIOPZVpbJpRVkv8nl8jhcAOL_qdThLjk875JQmszVN0OuB9GlY/exec'

            $('#submit-form').on('click', function(e) {
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: $form.serialize()
            }).done(
                formSent()
            )
        });
    }
});

/* CA English Submit Button */
$('#submit-form-ca-en').click(function(){
    if($('#address').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#addressWarning').show();
        $('#address').css('border-color','red');
    } else if($('#city').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#cityWarning').show();
        $('#city').css('border-color','red');
    } else if($('#state').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#stateWarning').show();
        $('#state').css('border-color','red');
    } else if($('#zip').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#zipWarning').show();
        $('#zip').css('border-color','red');
    } else {
        var $form = $('form#freeProductForm'),
            url = 'https://script.google.com/macros/s/AKfycbyIOPZVpbJpRVkv8nl8jhcAOL_qdThLjk875JQmszVN0OuB9GlY/exec'

            $('#submit-form-ca-en').on('click', function(e) {
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: $form.serialize()
            }).done(
                formSentCaEnglish()
            )
        });
    }
});

/* CA French Submit Button */
$('#submit-form-ca-fr').click(function(){
    if($('#address').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#addressWarning').show();
        $('#address').css('border-color','red');
    } else if($('#city').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#cityWarning').show();
        $('#city').css('border-color','red');
    } else if($('#state').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#stateWarning').show();
        $('#state').css('border-color','red');
    } else if($('#zip').val() == ''){
        $('#view-05 input').css('border-color','#ced4da');
        $('#view-05 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#zipWarning').show();
        $('#zip').css('border-color','red');
    } else {
        var $form = $('form#freeProductForm'),
            url = 'https://script.google.com/macros/s/AKfycbyIOPZVpbJpRVkv8nl8jhcAOL_qdThLjk875JQmszVN0OuB9GlY/exec'

            $('#submit-form-ca-fr').on('click', function(e) {
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: $form.serialize()
            }).done(
                formSentCaFrench()
            )
        });
    }
});