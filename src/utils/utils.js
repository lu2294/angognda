var utf8 = require("crypto-js/enc-utf8");
var AES = require("crypto-js/aes");
var Pkcs7 = require("crypto-js/pad-pkcs7");

// 加密
function aesDecrypt(data) {
    var key = utf8.parse('dfcgbskfprlcn58sjcuwvb23fnwsxdoh');
    var iv = utf8.parse('x73cof0osai3fgpq');
    var encrypted = AES.encrypt(data, key,
        {
            iv: iv,
            padding: Pkcs7
        });
    return encrypted.ciphertext.toString();
}

export { aesDecrypt }