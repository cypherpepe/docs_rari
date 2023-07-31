/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// Note - this is generated by `yarn gen-api-docs`
const apiReference = require("./docs/api/reference/sidebar");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaper: [
    "whitepaper",
    "whitepaper/problem_statement",
    "whitepaper/protocol-vision",
    "whitepaper/architecture-and-operating-principles",
    "whitepaper/main-flow-of-messages-transferring",
    "whitepaper/light-wallet-supporting",
    "whitepaper/security-and-efficiency",
    "whitepaper/utilities-of-the-token",
    "whitepaper/governance",
    "whitepaper/summary",
    "whitepaper/sources",
  ],
  overview: [
    "overview",
    "getting-started",
    {
      type: "category",
      label: "Transactions",
      items: [
        "overview/connecting-to-wallets",
        "overview/swapping-tokens",
        "overview/creating-transactions",
      ],
    },
    {
      type: "category",
      label: "Identity",
      link: {
        type: "doc",
        id: "overview/identity",
      },
      items: ["overview/issuing-credentials", "overview/querying-credentials"],
    },
    "glossary",
  ],
  applications: [
    "use-cases",
    "use-cases/nft-checkout",
    "use-cases/proofs",
    "use-cases/minting",
    "use-cases/staking",
    "use-cases/cctp",
    "use-cases/polygon-id",
  ],
  architecture: [
    {
      type: "doc",
      id: "architecture",
    },
    {
      type: "doc",
      label: "Oracles",
      id: "architecture/oracles",
    },
    {
      type: "category",
      label: "Core",
      link: {
        type: "doc",
        id: "architecture/core",
      },
      collapsed: true,
      items: [
        "architecture/core/rarimocore",
        "architecture/core/tokenmanager",
        "architecture/core/oraclemanager",
      ],
    },
    {
      type: "category",
      label: "TSS",
      link: {
        type: "doc",
        id: "architecture/tss",
      },
      collapsed: true,
      items: ["architecture/tss/overview"],
    },
    {
      type: "doc",
      id: "architecture/swap-bridge",
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
    {
      type: "doc",
      id: "glossary",
    },
  ],
  reference: [
    {
      type: "doc",
      id: "reference",
    },
    {
      type: "category",
      label: "Contracts",
      link: {
        type: "doc",
        id: "reference/contracts",
      },
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/contracts/addresses",
        },
        {
          type: "doc",
          id: "reference/contracts/bridge",
        },
        {
          type: "category",
          label: "Guides",
          link: {
            type: "doc",
            id: "reference/contracts/guides",
          },
          collapsed: false,
          items: ["reference/contracts/guides/transfer-nfts"],
        },
        {
          type: "category",
          label: "Interface",
          link: {
            type: "doc",
            id: "reference/contracts/interface",
          },
          collapsed: false,
          items: [
            "reference/contracts/interface/evm-reference",
            "reference/contracts/interface/near-reference",
            "reference/contracts/interface/solana-reference",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API",
      link: {
        type: "doc",
        id: "api",
      },
      collapsed: true,
      items: [
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
    },
    {
      type: "category",
      label: "SDK",
      link: {
        type: "doc",
        id: "sdk",
      },
      collapsed: true,
      items: [
        "sdk/packages-base",
        "sdk/packages-provider",
        "sdk/packages-checkout",
      ],
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
