var qrcode = new QRCode(document.getElementById("qrcode"));

function generateQR() {
    var data = document.getElementById("qr-text").value;
    qrcode.makeCode(data);
}