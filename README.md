# chris_cryptojs_encrypto_decrypto
JavaScript 基于CryptoJS 的 加密解密函数方法

// 使用示例
const secretKey = 'your_secret_key';
const plainText = 'Hello, world!';

// 加密
const encryptedText = encryptText(plainText, secretKey);
console.log('Encrypted Text:', encryptedText);

// 解密
const decryptedText = decryptText(encryptedText, secretKey);
console.log('Decrypted Text:', decryptedText);
