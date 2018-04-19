$("form").submit(function(event){
    event.preventDefault();
    var $sender = $("input[name=sender]").val()
    var $content = $("textarea[name=content]").val()
    
    var res = $.ajax({
        url: '/mail',
        type: 'post',
        data: {
            sender: $sender,
            content: $content
        },
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'json',
        success: function (data) {
            
            resTxt = data.res

            if (resTxt == "success") {
                swal({
                    title: "Good job!",
                    text: "Your Request has been successfully sent.",
                    icon: "success",
                    button: "Great!",
                });

                setTimeout(function(){
                    window.location.replace("/");
                }, 2000);
            }       
            else {
                    swal({
                    title: "Something went wrong!",
                    text: "Please try again.",
                    icon: "error",
                    button: "Cancel",
                    });
            }
        }
    });
})
