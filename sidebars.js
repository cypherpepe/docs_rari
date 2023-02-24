/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// Note - this is generated by `yarn gen-api-docs`
const apiReference = require("./docs/api/reference/sidebar");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaper: [
    {
      type: "doc",
      id: "whitepaper",
    },
    {
      type: "doc",
      id: "whitepaper/problem_statement",
    },
    {
      type: "doc",
      id: "whitepaper/protocol-vision",
    },
    {
      type: "doc",
      id: "whitepaper/architecture-and-operating-principles",
    },
    {
      type: "doc",
      id: "whitepaper/main-flow-of-messages-transferring",
    },
    {
      type: "doc",
      id: "whitepaper/light-wallet-supporting",
    },
    {
      type: "doc",
      id: "whitepaper/security-and-efficiency",
    },
    {
      type: "doc",
      id: "whitepaper/utilities-of-the-token",
    },
    {
      type: "doc",
      id: "whitepaper/governance",
    },
    {
      type: "doc",
      id: "whitepaper/summary",
    },
    {
      type: "doc",
      id: "whitepaper/sources",
    },
  ],
  overview: [
    {
      type: "doc",
      id: "overview",
    },
    {
      type: "doc",
      id: "overview/design",
    },
    {
      type: "category",
      label: "Applications",
      link: {
        type: "doc",
        id: "overview/applications",
      },
      collapsed: false,
      items: [
        "overview/applications/settlement-integration",
        "overview/applications/cross-chain-proofs",
      ],
    },
    {
      type: "doc",
      id: "overview/bundling",
    },
    {
      type: "doc",
      id: "overview/security",
    },
    {
      type: "doc",
      id: "overview/fees",
    },
  ],
  smartContracts: [
    {
      type: "doc",
      id: "smart-contracts",
    },
    {
      type: "doc",
      id: "smart-contracts/addresses",
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "doc",
        id: "smart-contracts/guides",
      },
      collapsed: false,
      items: [
        "smart-contracts/guides/moving-liquidity",
        "smart-contracts/guides/transfer-nfts",
      ],
    },
    {
      type: "category",
      label: "Interface",
      link: {
        type: "doc",
        id: "smart-contracts/interface",
      },
      collapsed: false,
      items: [
        "smart-contracts/interface/evm-reference",
        "smart-contracts/interface/near-reference",
        "smart-contracts/interface/solana-reference",
      ],
    },
  ],
  api: [
    {
      type: "doc",
      id: "api",
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "doc",
        id: "api/guides",
      },
      collapsed: false,
      items: [
        "api/guides/retrieving-tokens",
        "api/guides/building-transactions",
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "doc",
        id: "api/reference",
      },
      collapsed: false,
      items: apiReference,
    },
  ],
  sdk: [
    {
      type: "doc",
      id: "sdk",
    },
  ],
  solutions: [
    {
      type: "doc",
      id: "solutions",
    },
    {
      type: "category",
      label: "Cross-Chain Settlement",
      link: {
        type: "doc",
        id: "solutions/cross-chain-nft-settlement",
      },
      collapsed: false,
      items: [
        "solutions/cross-chain-nft-settlement/installation",
        "solutions/cross-chain-nft-settlement/configuration",
      ],
    },
  ],
};

module.exports = sidebars;
