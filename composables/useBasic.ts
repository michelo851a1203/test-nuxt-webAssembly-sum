import * as bip39 from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english';

export const useBasic = () => {
  const callWebAssembly = async (golangGlueCodeInitialize: () => void) => {
    golangGlueCodeInitialize();
    const go = new Go()
    const { instance } = await WebAssembly.instantiateStreaming(fetch('/api/getWasmFile'), go.importObject)
    await go.run(instance);
  }

  const testSum = () => {
    const result = globalThis.generateSumKey(2, 3);
    console.log(result);
  }

  const testGenerateMnemonic = async () => {
    const mnemonic = bip39.generateMnemonic(wordlist);
    console.log(mnemonic);
    // generate seeding

    // const seeding = bip39.mnemonicToSeedSync(mnemonic, 'password');
    const seeding = bip39.mnemonicToSeedSync(mnemonic);
    console.log('seeding', seeding);
  }

  return {
    callWebAssembly,
    testGenerateMnemonic,
    testSum,
  }
}
