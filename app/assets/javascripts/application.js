// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery.min
//= require jquery.easing.min
//= require bootstrap.bundle.min
//= require new-age
//= require turbolinks
//= require_tree .

            var XMLHttpRequestObject = false;

            if (window.XMLHttpRequest) {
                XMLHttpRequestObject = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
            }

            function sendMail(dataSource, divID)
            {
                if (XMLHttpRequestObject) {
                    XMLHttpRequestObject.open("GET", dataSource);

                    XMLHttpRequestObject.onreadystatechange = function()
                    {
                        if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                                obj.innerHTML = XMLHttpRequestObject.response;
                        }
                    }

                    XMLHttpRequestObject.send(null);
                }
            }