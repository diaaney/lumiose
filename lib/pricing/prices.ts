import type { Region } from '@/lib/i18n/config';

export type PlanId = 'cornerShop' | 'mainStreet' | 'enterprise' | 'maintenance' | 'ads';

type PriceValues = {
  setup: number;
  monthly?: number;
};

type CurrencyConfig = {
  code: string;
  suffix: string;
};

const CURRENCIES: Record<Region, CurrencyConfig> = {
  us: { code: 'USD', suffix: '' },
  mx: { code: 'MXN', suffix: ' MXN' },
};

const PRICES: Record<Region, Record<PlanId, PriceValues>> = {
  us: {
    cornerShop:  { setup: 1800,  monthly: 59 },
    mainStreet:  { setup: 4500,  monthly: 129 },
    enterprise:  { setup: 9500,  monthly: 299 },
    maintenance: { setup: 39 },
    ads:         { setup: 299 },
  },
  mx: {
    cornerShop:  { setup: 5999,  monthly: 499 },
    mainStreet:  { setup: 14999, monthly: 1199 },
    enterprise:  { setup: 34999, monthly: 2999 },
    maintenance: { setup: 499 },
    ads:         { setup: 4999 },
  },
};

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export type PriceSet = {
  region: Region;
  currencySuffix: string;
  cornerShop: string;
  cornerShopMo: string;
  mainStreet: string;
  mainStreetMo: string;
  enterprise: string;
  enterpriseMo: string;
  maintenance: string;
  ads: string;
};

export function buildPriceSet(region: Region): PriceSet {
  const p = PRICES[region];
  return {
    region,
    currencySuffix: CURRENCIES[region].suffix,
    cornerShop:   formatNumber(p.cornerShop.setup),
    cornerShopMo: formatNumber(p.cornerShop.monthly!),
    mainStreet:   formatNumber(p.mainStreet.setup),
    mainStreetMo: formatNumber(p.mainStreet.monthly!),
    enterprise:   formatNumber(p.enterprise.setup),
    enterpriseMo: formatNumber(p.enterprise.monthly!),
    maintenance:  formatNumber(p.maintenance.setup),
    ads:          formatNumber(p.ads.setup),
  };
}

export function injectPrices(html: string, prices: PriceSet): string {
  return html
    .replace(/\{\{PRICE_CORNER_SHOP_MO\}\}/g, prices.cornerShopMo)
    .replace(/\{\{PRICE_CORNER_SHOP\}\}/g, prices.cornerShop)
    .replace(/\{\{PRICE_MAIN_STREET_MO\}\}/g, prices.mainStreetMo)
    .replace(/\{\{PRICE_MAIN_STREET\}\}/g, prices.mainStreet)
    .replace(/\{\{PRICE_ENTERPRISE_MO\}\}/g, prices.enterpriseMo)
    .replace(/\{\{PRICE_ENTERPRISE\}\}/g, prices.enterprise)
    .replace(/\{\{PRICE_HARBOR\}\}/g, prices.enterprise)
    .replace(/\{\{PRICE_MAINTENANCE\}\}/g, prices.maintenance)
    .replace(/\{\{PRICE_ADS\}\}/g, prices.ads)
    .replace(/\{\{CURRENCY_SUFFIX\}\}/g, prices.currencySuffix);
}
