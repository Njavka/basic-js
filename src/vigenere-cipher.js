const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // direct or reverse
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0; // Index for the key

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char >= "A" && char <= "Z") {
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - "A"
            .charCodeAt(0) + key[j % key.length]
            .charCodeAt(0) - "A"
            .charCodeAt(0)) % 26) + "A"
            .charCodeAt(0)
        );
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char >= "A" && char <= "Z") {
        const decryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - "A"
            .charCodeAt(0) - (key[j % key.length]
            .charCodeAt(0) - "A"
            .charCodeAt(0)) + 26) % 26) + "A"
            .charCodeAt(0)
        );
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
