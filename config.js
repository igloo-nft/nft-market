// const nextEnv = require("next-env");
// const dotenvLoad = require("dotenv-load");

// dotenvLoad();

// const withNextEnv = nextEnv();

export const nftaddress = process.env.NEXT_PUBLIC_NFT_ADDRESS;
export const nftmarketaddress = process.env.NEXT_PUBLIC_MARKET_ADDRESS;

// module.exports = withNextEnv({
//   nftaddress: process.env.NFT_ADDRESS,
//   nftmarketaddress: process.env.MARKET_ADDRESS,
// });
