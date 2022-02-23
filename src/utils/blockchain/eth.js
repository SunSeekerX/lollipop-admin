import { ethers } from 'ethers'

/**
 * 将 eth 转成 BigNumber
 * parseEther(ether:String): BigNumber === parseUnits(ether:String, 18) : BigNumber
 * parseUnits 将任何单位转成 wei 输出 BigNumber
 * formatUnits 将 wei 转成 任何单位 输出 String
 * 将 BigNumber 转成 String
 * formatEther(wei:BigNumber):String === formatUnits(wei: BigNumber, 18)
 * const names = [
    "wei",
    "kwei",
    "mwei",
    "gwei",
    "szabo",
    "finney",
    "ether",
];
 */

// 校验是否为 eth 地址
export function isValidAddress(address) {
  return ethers.utils.isAddress(address)
}

// 通过助记词获取地址
export function getAddressByMnemonic(mnemonic) {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic)
  return wallet.address
}

// 通过助记词获取私钥
export function getPrivateKey(mnemonic) {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic)
  return wallet.privateKey
}
