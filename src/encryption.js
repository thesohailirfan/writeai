import * as CryptoJS from 'crypto-js';

export function encrypt(data){
    var ciphertext = CryptoJS.AES.encrypt(data, process.env.REACT_APP_ENCRYPTION_KEY).toString();
    return ciphertext
}

export function decrypt(data){
    var bytes  = CryptoJS.AES.decrypt(data, process.env.REACT_APP_ENCRYPTION_KEY);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8) ? bytes.toString(CryptoJS.enc.Utf8) : null;
    return decryptedData
}