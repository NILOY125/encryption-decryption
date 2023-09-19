var Crypto = require("crypto");
var secret_key = 'fd85b494-aaaa'; //define seret key
var secret_iv = 'smslt';
var encryptionMethod = 'AES-256-CBC' //this is encryption method
var key = Crypto.createHash('sha512').update(secret_key,'utf-8').digest('hex').substr(0,32);//create key
var iv = Crypto.createHash('sha512').update(secret_key,'utf-8').digest('hex').substr(0,16);//create iv
//console.log(key,iv);

//call encrypt function

var encryptedMessage = encrypt_string("hello bro,it's me,i have a news for you.That is very secrect",encryptionMethod,key,iv);
console.log(encryptedMessage); //output : 

// add encrypt function 
function encrypt_string(plain_text,encryptionMethod,secret,iv){
    var encryptor = Crypto.createCipheriv(encryptionMethod, secret,iv); //encrypt using AES-256-CBC
    var aes_encrypted = encryptor.update(plain_text,'utf8','base64') + encryptor.final('base64'); //convert to base 64
    return Buffer.from(aes_encrypted).toString('base64');
};

//now call decrypt function 
var decryptMessage = decrypt_string("QUplY3NBaHhSR1RsK3pwN3plSVFKUGhVUW5oaURaTXF6QURKM0JGbkpyMm83V2Z3TjgzbmMvZy9FdkRKYXdhdWdrS1d0cDhhTTBjNnl4N04vU0FKZmc9PQ==",encryptionMethod,key,iv);
console.log(decryptMessage); // check output as a plain_text

//add decrypt function

function decrypt_string(encryptedMessage,encryptionMethod,secret,iv){
    const buff = Buffer.from(encryptedMessage,'base64');
    encryptedMessage = buff.toString('utf-8');
    var decryptor = Crypto.createDecipheriv(encryptionMethod,secret,iv);
    return decryptor.update(encryptedMessage,'base64','utf-8')+ decryptor.final('utf-8');
};

// const test = require('./test')

// const tests = require('./test');

// console.log(tests.test2.ab2());