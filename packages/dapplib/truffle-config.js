require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pulse coconut hidden arm blue tree'; 
let testAccounts = [
"0x433a215d18a4e091b91d2873f3664fdd311f93e1885ebf66728f4fa67f9c0d29",
"0x37ae5c6c5d45a36ffd9100a2070ad2912a7267ccc5e5de02532446bc99bd09ce",
"0x56e0ab6b641d1352eebcddc37051a1ee40771e9f84c293cb6cbb9f0bc1c27b15",
"0x4deceb4a5629581fad253feceaa4f12a13d9c3deda9a78262626257716a65a2a",
"0x9d9469b8a86114f794c90f533b652eabada4eb60ecf7060957e87cb47ae94ff4",
"0x28272e6e7a63bf0607e0040e1113a76659e74ee2187cb57265b068788d6a53bb",
"0xc72c9d6cbec3305f1613ebce03f0ee70a2197f99902316c73c36060ea46339a6",
"0xc18326007fdd1c35e4a18d631511adf15223abafbf2fa117ca0d4fce1844c6f7",
"0xaa6e8e2eedf4820668b268d4700e9fd38901cf66d2f4be80ddba76fd8853b7b2",
"0x8f5c1844d1fdb1c8b822d029044894ff2d26e3a0f79bb822fde3982cc7d5095c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


