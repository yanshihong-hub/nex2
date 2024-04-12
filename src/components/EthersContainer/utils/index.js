import { EthersContext } from '@/components/EthersContainer';
import { ethers } from 'ethers';

export function IsMobile () {
  const plat = navigator.userAgent.match(
    // 判断不同端
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return !!plat;
}

export function clearStorage () {
  sessionStorage.setItem('Token', '');
  sessionStorage.setItem('address', '');
  sessionStorage.setItem('walletType', '');
  sessionStorage.setItem('chainId', '');
}

export function getSubStr (str) {
  const subStr1 = str.substring(0, 4);
  const subStr2 = str.slice(-4);
  const subStr = subStr1 + '...' + subStr2;
  return subStr;
}
// 保留两位小数
export function formatAmount (num) {
  if (!num) {
    return '0.00';
  }
  let value = Math.floor(Number(num) * 100) / 100;
  const xsd = value.toString().split('.');
  if (xsd.length === 1) {
    value = value.toString() + '.00';
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0';
    }
    return value;
  }
  // return Math.floor(Number(num) * 100) / 100;
}


// 保留N位小数

export function formatAmountN (num, sub) {
  if (!Number(num)) {
    return '0.00';
  }
  if (num.split('.').length === 1) {
    return `${num}.00`;
  }
  if (num.split('.').length > 1 && num.split('.')[1].length < sub) {
    return num;
  }
  if (num.split('.')[1].length > sub) {
    return num.substring(0, num.indexOf('.') + sub + 1);
  }
}

// 保留六位小数

export function formatAmount1 (num, sub) {
  if (!Number(num)) {
    return '0.00';
  }
  if (num.split('.').length === 1) {
    return `${num}.00`;
  }
  if (num.split('.').length > 1 && num.split('.')[1].length < 6) {
    return num;
  }
  if (num.split('.')[1].length > 6) {
    return num.substring(0, num.indexOf('.') + 7);
  }
}

// 判断是否结束
export function timeIsEnd (time) {
  return new Date().getTime() > Number(time) * 1000;
}

// 十六进制转十
export function hexToDecimal (hex) {
  return parseInt(hex, 10);
}


export function toEth(transaction) {
  return ethers.utils.formatEther(transaction)
}


// 判断是否是平台币
export function isplatformCoin (address) {
  if (address === '0x0000000000000000000000000000000000000000') {
    return true;
  } else {
    return false;
  }
}
