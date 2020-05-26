require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool crawl shift protect inner cash food genuine'; 
let testAccounts = [
"0xf19f6b6938e616fb6b9260c342bba09e0a31ff9a1123d34c3bbb40506720daf9",
"0x57075c302df332fe83e56b193c665a3e17999ce2e0d067e4368cd45778d2aecb",
"0x45141c6779e6733b80bfc08f10895c757d205b5169a6603c4356d145ddf3b0a1",
"0x3df9d961ce89f4e2c62b8d84bb02c5156cc72026257b199c76777e6b7fdd0849",
"0xc41be964e0390bb24baab4c40a4382ba33b2f03322df04ff15d989094cc9546b",
"0xc34dad392fdf626eaa3f36e40fd272a57183c1cd82ae49b8ad7b868000e778a1",
"0x228927952de3bcf72c3ef2477d675b3554559135f6746cd5f28670d782bd86e6",
"0x9d21ff2546432afb71caca3a7798712ceee437cb39d65da55639e8fbb23e6d89",
"0x4395b4b74b8f2fcf46d9547ea5fce7737e46761734a8ec1d75c9e895341b6dc2",
"0x1d284e46d17eea606502124843368eff852e734519011e1d74feaed9c37ab2a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
