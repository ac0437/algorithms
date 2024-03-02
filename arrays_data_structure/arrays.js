const a = new ArrayBuffer(6);
const a8 = new Uint8Array(a);
const a16 = new Uint16Array(a);
console.log(`Array buffer:`, a);

a8[0] = 45
console.log(`Unit 8 array: `, a8);

a16[0] = 0x4545
console.log(`Unit 16 array: `, a16)