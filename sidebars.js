/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-check

// Note - this is generated by `yarn docusaurus gen-api-docs all`
const apiReference = require("./docs/api/reference/sidebar");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
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
      type: "doc",
      id: "overview/applications",
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
      id: "overview/addresses",
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
      type: "category",
      label: "Guides",
      link: {
        type: "doc",
        id: "smart-contracts/guides",
      },
      items: [
        "smart-contracts/guides/passing-a-message",
        "smart-contracts/guides/passing-a-token",
      ],
    },
    {
      type: "category",
      label: "Interface",
      link: {
        type: "doc",
        id: "smart-contracts/interface",
      },
      items: [
        "smart-contracts/interface/evm-reference",
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
      items: [
        "api/guides/retrieving-tokens",
        "api/guides/building-transactions",
      ],
    },
    // @ts-ignore
    ...apiReference,
  ],
  solutions: [
    {
      type: "doc",
      id: "solutions",
    },
    {
      type: "category",
      label: "Cross-Chain NFT Settlement",
      link: {
        type: "doc",
        id: "solutions/cross-chain-nft-settlement",
      },
      items: [
        "solutions/cross-chain-nft-settlement/installation",
        "solutions/cross-chain-nft-settlement/configuration",
      ],
    },
  ],
};

module.exports = sidebars;
