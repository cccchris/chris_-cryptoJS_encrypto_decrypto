// 导入 CryptoJS 库
const CryptoJS = require('crypto-js');

import dayjs from 'dayjs';

// 加密函数
function encryptText(text, key) {
    const encrypted = CryptoJS.AES.encrypt(text, key);
    return encrypted.toString();
}

// 解密函数
function decryptText(ciphertext, key) {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}

// 日期检测 检测当前日期是否在 date 之后
export function isAfter(currentTime, compareTime) {
  // 使用 Day.js 解析时间
  const current = dayjs(currentTime);
  const compare = dayjs(compareTime);
  
  // 判断当前时间是否在比较时间之后
  return current.isAfter(compare);
}