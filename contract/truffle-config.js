const HDWalletProvider = require('truffle-hdwallet-provider')

require('dotenv').config()

module.exports = {
  contracts_build_directory: '../frontend/src/contracts',
  networks: {
    development: {
      host: '127.0.0.1',
      port: '8545',
      network_id: '*', // Match any network id
    },
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL)
      },
      network_id: '*',
      // Necessary due to https://github.com/trufflesuite/truffle/issues/1971
      // Should be fixed in Truffle 5.0.17
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.5.11',
      settings: {
        optimizer: {
          enabled: true,
          runs: 2,
        },
      },
    },
  },
}
