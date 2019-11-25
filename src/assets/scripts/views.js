function formSent(){
    window.location.href = "thanks.html";
};

$('#btn-01').click(function(){
    $('#view-01').hide();
    $('#view-02').show();
    $('.progress-bar').css('width','14%').text('14%').css('color','#fff');
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
        $('.progress-bar').css('width','28%').text('28%');
    }
    
});
$('#btn-03').click(function(){
    if($('#purchasedFrom').val() == ''){
        $('#view-03 input').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#purchasedFromWarning').show();
        $('#purchasedFrom').css('border-color','red');
    }  else if($('#orderNumber').val() == ''){
        $('#view-03 input').css('border-color','#ced4da');
        $('#view-03 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#orderNumberWarning').show();
        $('#orderNumber').css('border-color','red');
    } else {
        $('#view-03').hide();
        $('#view-04').show();
        $('.progress-bar').css('width','43%').text('43%');
    }
});
$('#btn-04').click(function(){
    $('#view-04').hide();
    $('#view-05').show(); 
    $('.progress-bar').css('width','57%').text('57%');
});
$('#btn-05').click(function(){
    $('#view-05').hide();
    $('#view-06').show();
    $('.progress-bar').css('width','71%').text('71%');
});
$('#btn-06').click(function(){
    $('#view-06').hide();
    $('#view-07').show();
    $('.progress-bar').css('width','86%').text('86%');
});
$('#submit-form').click(function(){
    if($('#address').val() == ''){
        $('#view-07 input').css('border-color','#ced4da');
        $('#view-07 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#addressWarning').show();
        $('#address').css('border-color','red');
    } else if($('#city').val() == ''){
        $('#view-07 input').css('border-color','#ced4da');
        $('#view-07 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#cityWarning').show();
        $('#city').css('border-color','red');
    } else if($('#state').val() == ''){
        $('#view-07 input').css('border-color','#ced4da');
        $('#view-07 select').css('border-color','#ced4da');
        $('.warningText').hide();
        $('#stateWarning').show();
        $('#state').css('border-color','red');
    } else if($('#zip').val() == ''){
        $('#view-07 input').css('border-color','#ced4da');
        $('#view-07 select').css('border-color','#ced4da');
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