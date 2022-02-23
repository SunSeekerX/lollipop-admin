import * as bip39 from 'bip39'

// 生成助记词
export function generateMnemonic(mnemonicLength) {
  const strength = mnemonicLength === 24 ? 256 : 128
  return bip39.generateMnemonic(strength)
}

// 校验助记词
export function validateMnemonic(mnemonic, wordList) {
  return bip39.validateMnemonic(mnemonic, wordList)
}
