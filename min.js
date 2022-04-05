'use strict';
var qrbtn = document.getElementById('qrbtn').addEventListener('click', () => {
    var qrinput = document.getElementById('qrinput').value;
    if (!qrinput) {
        alert('you have to write somthing.')
    } else {
        $(document).ready(function() {
            $('.container').animate({ height: 500 })
            $('#qrdiv').animate({ left: 0 });
            $('#qrdiv').animate({ width: 350 });
        });
    }
    var qrimg = document.getElementById('qrimg');
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput}`;
})