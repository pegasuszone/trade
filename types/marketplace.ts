/**
 * This file was automatically generated by cosmwasm-typescript-gen.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */

import {
  CosmWasmClient,
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
export interface AskCountResponse {
  count: number;
  [k: string]: unknown;
}
export type Addr = string;
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export type SaleType = 'fixed_price' | 'auction';
export interface AskCreatedHooksResponse {
  ask: Ask;
  [k: string]: unknown;
}
export interface Ask {
  collection: Addr;
  expires_at: Timestamp;
  finders_fee_bps?: number | null;
  funds_recipient?: Addr | null;
  is_active: boolean;
  price: Uint128;
  reserve_for?: Addr | null;
  sale_type: SaleType;
  seller: Addr;
  token_id: number;
  [k: string]: unknown;
}
export interface AskHooksResponse {
  hooks: string[];
  [k: string]: unknown;
}
export interface AskOffset {
  price: Uint128;
  token_id: number;
  [k: string]: unknown;
}
export interface AskResponse {
  ask?: Ask | null;
  [k: string]: unknown;
}
export interface AsksBySellerResponse {
  asks: Ask[];
  [k: string]: unknown;
}
export interface AsksResponse {
  asks: Ask[];
  [k: string]: unknown;
}
export interface AsksSortedByPriceResponse {
  asks: Ask[];
  [k: string]: unknown;
}
export interface BidHooksResponse {
  hooks: string[];
  [k: string]: unknown;
}
export interface BidOffset {
  bidder: Addr;
  price: Uint128;
  token_id: number;
  [k: string]: unknown;
}
export interface BidResponse {
  bid?: Bid | null;
  [k: string]: unknown;
}
export interface Bid {
  bidder: Addr;
  collection: Addr;
  expires_at: Timestamp;
  finders_fee_bps?: number | null;
  price: Uint128;
  token_id: number;
  [k: string]: unknown;
}
export interface BidsByBidderResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface BidsByBidderSortedByExpirationResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface BidsResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface BidsSortedByPriceResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface CollectionBidOffset {
  bidder: string;
  collection: string;
  price: Uint128;
  [k: string]: unknown;
}
export interface CollectionBidResponse {
  bid?: CollectionBid | null;
  [k: string]: unknown;
}
export interface CollectionBid {
  bidder: Addr;
  collection: Addr;
  expires_at: Timestamp;
  finders_fee_bps?: number | null;
  price: Uint128;
  [k: string]: unknown;
}
export interface CollectionBidsByBidderResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface CollectionBidsByBidderSortedByExpirationResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface CollectionBidsSortedByPriceResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface CollectionOffset {
  collection: string;
  token_id: number;
  [k: string]: unknown;
}
export interface CollectionsResponse {
  collections: Addr[];
  [k: string]: unknown;
}
export type Duration =
  | {
      height: number;
    }
  | {
      time: number;
    };
export interface InstantiateMsg {
  ask_expiry: ExpiryRange;
  bid_expiry: ExpiryRange;
  bid_removal_reward_bps: number;
  max_finders_fee_bps: number;
  min_price: Uint128;
  operators: string[];
  sale_hook?: string | null;
  stale_bid_duration: Duration;
  trading_fee_bps: number;
  [k: string]: unknown;
}
export interface ExpiryRange {
  max: number;
  min: number;
  [k: string]: unknown;
}
export interface ListedCollectionsResponse {
  collections: Addr[];
  [k: string]: unknown;
}
export type MarketplaceContract = Addr;
export type Decimal = string;
export interface ParamsResponse {
  params: SudoParams;
  [k: string]: unknown;
}
export interface SudoParams {
  ask_expiry: ExpiryRange;
  bid_expiry: ExpiryRange;
  bid_removal_reward_percent: Decimal;
  max_finders_fee_percent: Decimal;
  min_price: Uint128;
  operators: Addr[];
  stale_bid_duration: Duration;
  trading_fee_percent: Decimal;
  [k: string]: unknown;
}
export interface ReverseAsksSortedByPriceResponse {
  asks: Ask[];
  [k: string]: unknown;
}
export interface ReverseBidsSortedByPriceResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface ReverseCollectionBidsSortedByPriceResponse {
  bids: Bid[];
  [k: string]: unknown;
}
export interface SaleHooksResponse {
  buyer: string;
  collection: string;
  price: Coin;
  seller: string;
  token_id: number;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type SudoMsg =
  | {
      update_params: {
        ask_expiry?: ExpiryRange | null;
        bid_expiry?: ExpiryRange | null;
        bid_removal_reward_bps?: number | null;
        max_finders_fee_bps?: number | null;
        min_price?: Uint128 | null;
        operators?: string[] | null;
        stale_bid_duration?: number | null;
        trading_fee_bps?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      add_ask_hook: {
        hook: string;
        [k: string]: unknown;
      };
    }
  | {
      add_bid_hook: {
        hook: string;
        [k: string]: unknown;
      };
    }
  | {
      remove_ask_hook: {
        hook: string;
        [k: string]: unknown;
      };
    }
  | {
      remove_bid_hook: {
        hook: string;
        [k: string]: unknown;
      };
    }
  | {
      add_sale_hook: {
        hook: string;
        [k: string]: unknown;
      };
    }
  | {
      remove_sale_hook: {
        hook: string;
        [k: string]: unknown;
      };
    };
export interface MarketplaceReadOnlyInterface {
  contractAddress: string;
  collections: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<CollectionsResponse>;
  ask: ({
    collection,
    tokenId,
  }: {
    collection: string;
    tokenId: number;
  }) => Promise<AskResponse>;
  asks: ({
    collection,
    includeInactive,
    limit,
    startAfter,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startAfter?: number;
  }) => Promise<AsksResponse>;
  asksSortedByPrice: ({
    collection,
    includeInactive,
    limit,
    startAfter,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startAfter?: AskOffset;
  }) => Promise<AsksSortedByPriceResponse>;
  reverseAsksSortedByPrice: ({
    collection,
    includeInactive,
    limit,
    startBefore,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startBefore?: AskOffset;
  }) => Promise<ReverseAsksSortedByPriceResponse>;
  askCount: ({
    collection,
  }: {
    collection: string;
  }) => Promise<AskCountResponse>;
  asksBySeller: ({
    includeInactive,
    limit,
    seller,
    startAfter,
  }: {
    includeInactive?: boolean;
    limit?: number;
    seller: string;
    startAfter?: CollectionOffset;
  }) => Promise<AsksBySellerResponse>;
  bid: ({
    bidder,
    collection,
    tokenId,
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }) => Promise<BidResponse>;
  bidsByBidder: ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }) => Promise<BidsByBidderResponse>;
  bidsByBidderSortedByExpiration: ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }) => Promise<BidsByBidderSortedByExpirationResponse>;
  bids: ({
    collection,
    limit,
    startAfter,
    tokenId,
  }: {
    collection: string;
    limit?: number;
    startAfter?: string;
    tokenId: number;
  }) => Promise<BidsResponse>;
  bidsSortedByPrice: ({
    collection,
    limit,
    startAfter,
  }: {
    collection: string;
    limit?: number;
    startAfter?: BidOffset;
  }) => Promise<BidsSortedByPriceResponse>;
  reverseBidsSortedByPrice: ({
    collection,
    limit,
    startBefore,
  }: {
    collection: string;
    limit?: number;
    startBefore?: BidOffset;
  }) => Promise<ReverseBidsSortedByPriceResponse>;
  collectionBid: ({
    bidder,
    collection,
  }: {
    bidder: string;
    collection: string;
  }) => Promise<CollectionBidResponse>;
  collectionBidsByBidder: ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }) => Promise<CollectionBidsByBidderResponse>;
  collectionBidsByBidderSortedByExpiration: ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionBidOffset;
  }) => Promise<CollectionBidsByBidderSortedByExpirationResponse>;
  collectionBidsSortedByPrice: ({
    collection,
    limit,
    startAfter,
  }: {
    collection: string;
    limit?: number;
    startAfter?: CollectionBidOffset;
  }) => Promise<CollectionBidsSortedByPriceResponse>;
  reverseCollectionBidsSortedByPrice: ({
    collection,
    limit,
    startBefore,
  }: {
    collection: string;
    limit?: number;
    startBefore?: CollectionBidOffset;
  }) => Promise<ReverseCollectionBidsSortedByPriceResponse>;
  askHooks: () => Promise<AskHooksResponse>;
  bidHooks: () => Promise<BidHooksResponse>;
  saleHooks: () => Promise<SaleHooksResponse>;
  params: () => Promise<ParamsResponse>;
}
export class MarketplaceQueryClient implements MarketplaceReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.collections = this.collections.bind(this);
    this.ask = this.ask.bind(this);
    this.asks = this.asks.bind(this);
    this.asksSortedByPrice = this.asksSortedByPrice.bind(this);
    this.reverseAsksSortedByPrice = this.reverseAsksSortedByPrice.bind(this);
    this.askCount = this.askCount.bind(this);
    this.asksBySeller = this.asksBySeller.bind(this);
    this.bid = this.bid.bind(this);
    this.bidsByBidder = this.bidsByBidder.bind(this);
    this.bidsByBidderSortedByExpiration =
      this.bidsByBidderSortedByExpiration.bind(this);
    this.bids = this.bids.bind(this);
    this.bidsSortedByPrice = this.bidsSortedByPrice.bind(this);
    this.reverseBidsSortedByPrice = this.reverseBidsSortedByPrice.bind(this);
    this.collectionBid = this.collectionBid.bind(this);
    this.collectionBidsByBidder = this.collectionBidsByBidder.bind(this);
    this.collectionBidsByBidderSortedByExpiration =
      this.collectionBidsByBidderSortedByExpiration.bind(this);
    this.collectionBidsSortedByPrice =
      this.collectionBidsSortedByPrice.bind(this);
    this.reverseCollectionBidsSortedByPrice =
      this.reverseCollectionBidsSortedByPrice.bind(this);
    this.askHooks = this.askHooks.bind(this);
    this.bidHooks = this.bidHooks.bind(this);
    this.saleHooks = this.saleHooks.bind(this);
    this.params = this.params.bind(this);
  }

  collections = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<CollectionsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collections: {
        limit,
        start_after: startAfter,
      },
    });
  };
  ask = async ({
    collection,
    tokenId,
  }: {
    collection: string;
    tokenId: number;
  }): Promise<AskResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask: {
        collection,
        token_id: tokenId,
      },
    });
  };
  asks = async ({
    collection,
    includeInactive,
    limit,
    startAfter,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startAfter?: number;
  }): Promise<AsksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks: {
        collection,
        include_inactive: includeInactive,
        limit,
        start_after: startAfter,
      },
    });
  };
  asksSortedByPrice = async ({
    collection,
    includeInactive,
    limit,
    startAfter,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startAfter?: AskOffset;
  }): Promise<AsksSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks_sorted_by_price: {
        collection,
        include_inactive: includeInactive,
        limit,
        start_after: startAfter,
      },
    });
  };
  reverseAsksSortedByPrice = async ({
    collection,
    includeInactive,
    limit,
    startBefore,
  }: {
    collection: string;
    includeInactive?: boolean;
    limit?: number;
    startBefore?: AskOffset;
  }): Promise<ReverseAsksSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_asks_sorted_by_price: {
        collection,
        include_inactive: includeInactive,
        limit,
        start_before: startBefore,
      },
    });
  };
  askCount = async ({
    collection,
  }: {
    collection: string;
  }): Promise<AskCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask_count: {
        collection,
      },
    });
  };
  asksBySeller = async ({
    includeInactive,
    limit,
    seller,
    startAfter,
  }: {
    includeInactive?: boolean;
    limit?: number;
    seller: string;
    startAfter?: CollectionOffset;
  }): Promise<AsksBySellerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks_by_seller: {
        include_inactive: includeInactive,
        limit,
        seller,
        start_after: startAfter,
      },
    });
  };
  bid = async ({
    bidder,
    collection,
    tokenId,
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }): Promise<BidResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bid: {
        bidder,
        collection,
        token_id: tokenId,
      },
    });
  };
  bidsByBidder = async ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }): Promise<BidsByBidderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_bidder: {
        bidder,
        limit,
        start_after: startAfter,
      },
    });
  };
  bidsByBidderSortedByExpiration = async ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }): Promise<BidsByBidderSortedByExpirationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_bidder_sorted_by_expiration: {
        bidder,
        limit,
        start_after: startAfter,
      },
    });
  };
  bids = async ({
    collection,
    limit,
    startAfter,
    tokenId,
  }: {
    collection: string;
    limit?: number;
    startAfter?: string;
    tokenId: number;
  }): Promise<BidsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids: {
        collection,
        limit,
        start_after: startAfter,
        token_id: tokenId,
      },
    });
  };
  bidsSortedByPrice = async ({
    collection,
    limit,
    startAfter,
  }: {
    collection: string;
    limit?: number;
    startAfter?: BidOffset;
  }): Promise<BidsSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_sorted_by_price: {
        collection,
        limit,
        start_after: startAfter,
      },
    });
  };
  reverseBidsSortedByPrice = async ({
    collection,
    limit,
    startBefore,
  }: {
    collection: string;
    limit?: number;
    startBefore?: BidOffset;
  }): Promise<ReverseBidsSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_bids_sorted_by_price: {
        collection,
        limit,
        start_before: startBefore,
      },
    });
  };
  collectionBid = async ({
    bidder,
    collection,
  }: {
    bidder: string;
    collection: string;
  }): Promise<CollectionBidResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bid: {
        bidder,
        collection,
      },
    });
  };
  collectionBidsByBidder = async ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionOffset;
  }): Promise<CollectionBidsByBidderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids_by_bidder: {
        bidder,
        limit,
        start_after: startAfter,
      },
    });
  };
  collectionBidsByBidderSortedByExpiration = async ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: number;
    startAfter?: CollectionBidOffset;
  }): Promise<CollectionBidsByBidderSortedByExpirationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids_by_bidder_sorted_by_expiration: {
        bidder,
        limit,
        start_after: startAfter,
      },
    });
  };
  collectionBidsSortedByPrice = async ({
    collection,
    limit,
    startAfter,
  }: {
    collection: string;
    limit?: number;
    startAfter?: CollectionBidOffset;
  }): Promise<CollectionBidsSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids_sorted_by_price: {
        collection,
        limit,
        start_after: startAfter,
      },
    });
  };
  reverseCollectionBidsSortedByPrice = async ({
    collection,
    limit,
    startBefore,
  }: {
    collection: string;
    limit?: number;
    startBefore?: CollectionBidOffset;
  }): Promise<ReverseCollectionBidsSortedByPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_collection_bids_sorted_by_price: {
        collection,
        limit,
        start_before: startBefore,
      },
    });
  };
  askHooks = async (): Promise<AskHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask_hooks: {},
    });
  };
  bidHooks = async (): Promise<BidHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bid_hooks: {},
    });
  };
  saleHooks = async (): Promise<SaleHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      sale_hooks: {},
    });
  };
  params = async (): Promise<ParamsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      params: {},
    });
  };
}
export interface MarketplaceInterface extends MarketplaceReadOnlyInterface {
  contractAddress: string;
  sender: string;
  setAsk: (
    {
      collection,
      expires,
      findersFeeBps,
      fundsRecipient,
      price,
      reserveFor,
      saleType,
      tokenId,
    }: {
      collection: string;
      expires: Timestamp;
      findersFeeBps?: number;
      fundsRecipient?: string;
      price: Coin;
      reserveFor?: string;
      saleType: SaleType;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  removeAsk: (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  updateAskPrice: (
    {
      collection,
      price,
      tokenId,
    }: {
      collection: string;
      price: Coin;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  setBid: (
    {
      collection,
      expires,
      finder,
      findersFeeBps,
      tokenId,
    }: {
      collection: string;
      expires: Timestamp;
      finder?: string;
      findersFeeBps?: number;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  removeBid: (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  acceptBid: (
    {
      bidder,
      collection,
      finder,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      finder?: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  setCollectionBid: (
    {
      collection,
      expires,
      findersFeeBps,
    }: {
      collection: string;
      expires: Timestamp;
      findersFeeBps?: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  removeCollectionBid: (
    {
      collection,
    }: {
      collection: string;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  acceptCollectionBid: (
    {
      bidder,
      collection,
      finder,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      finder?: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  syncAsk: (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  removeStaleBid: (
    {
      bidder,
      collection,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      tokenId: number;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  removeStaleCollectionBid: (
    {
      bidder,
      collection,
    }: {
      bidder: string;
      collection: string;
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
}
export class MarketplaceClient
  extends MarketplaceQueryClient
  implements MarketplaceInterface
{
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setAsk = this.setAsk.bind(this);
    this.removeAsk = this.removeAsk.bind(this);
    this.updateAskPrice = this.updateAskPrice.bind(this);
    this.setBid = this.setBid.bind(this);
    this.removeBid = this.removeBid.bind(this);
    this.acceptBid = this.acceptBid.bind(this);
    this.setCollectionBid = this.setCollectionBid.bind(this);
    this.removeCollectionBid = this.removeCollectionBid.bind(this);
    this.acceptCollectionBid = this.acceptCollectionBid.bind(this);
    this.syncAsk = this.syncAsk.bind(this);
    this.removeStaleBid = this.removeStaleBid.bind(this);
    this.removeStaleCollectionBid = this.removeStaleCollectionBid.bind(this);
  }

  setAsk = async (
    {
      collection,
      expires,
      findersFeeBps,
      fundsRecipient,
      price,
      reserveFor,
      saleType,
      tokenId,
    }: {
      collection: string;
      expires: Timestamp;
      findersFeeBps?: number;
      fundsRecipient?: string;
      price: Coin;
      reserveFor?: string;
      saleType: SaleType;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_ask: {
          collection,
          expires,
          finders_fee_bps: findersFeeBps,
          funds_recipient: fundsRecipient,
          price,
          reserve_for: reserveFor,
          sale_type: saleType,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeAsk = async (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_ask: {
          collection,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  updateAskPrice = async (
    {
      collection,
      price,
      tokenId,
    }: {
      collection: string;
      price: Coin;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_ask_price: {
          collection,
          price,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  setBid = async (
    {
      collection,
      expires,
      finder,
      findersFeeBps,
      tokenId,
    }: {
      collection: string;
      expires: Timestamp;
      finder?: string;
      findersFeeBps?: number;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_bid: {
          collection,
          expires,
          finder,
          finders_fee_bps: findersFeeBps,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeBid = async (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_bid: {
          collection,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  acceptBid = async (
    {
      bidder,
      collection,
      finder,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      finder?: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        accept_bid: {
          bidder,
          collection,
          finder,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  setCollectionBid = async (
    {
      collection,
      expires,
      findersFeeBps,
    }: {
      collection: string;
      expires: Timestamp;
      findersFeeBps?: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_collection_bid: {
          collection,
          expires,
          finders_fee_bps: findersFeeBps,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeCollectionBid = async (
    {
      collection,
    }: {
      collection: string;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_collection_bid: {
          collection,
        },
      },
      fee,
      memo,
      funds
    );
  };
  acceptCollectionBid = async (
    {
      bidder,
      collection,
      finder,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      finder?: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        accept_collection_bid: {
          bidder,
          collection,
          finder,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  syncAsk = async (
    {
      collection,
      tokenId,
    }: {
      collection: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        sync_ask: {
          collection,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeStaleBid = async (
    {
      bidder,
      collection,
      tokenId,
    }: {
      bidder: string;
      collection: string;
      tokenId: number;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_stale_bid: {
          bidder,
          collection,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeStaleCollectionBid = async (
    {
      bidder,
      collection,
    }: {
      bidder: string;
      collection: string;
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_stale_collection_bid: {
          bidder,
          collection,
        },
      },
      fee,
      memo,
      funds
    );
  };
}