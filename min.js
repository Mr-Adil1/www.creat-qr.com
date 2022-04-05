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
document.getElementById('qrinput').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        // event.preventDefault();
        document.getElementById('qrbtn').click();
    } else {

    }
})
var down = document.getElementById('down').onclick = (e) => {
    e.preventDefault();
    var elem = document.getElementById('down');
    domtoimage.toPng(elem).then((dataurl) => {
        var img = new Image();
        img.src = dataurl;
        var anchor = document.createElement('a');
        anchor.setAttribute('href', dataurl);
        anchor.setAttribute('download', 'my-QR');
        anchor.click();
        anchor.remove();
    });


}