import { multiplierForCountry, tierForCountry } from './tiers';

export type PlanId = 'cornerShop' | 'mainStreet' | 'harbor' | 'maintenance' | 'ads';

export const BASE_PRICES_USD: Record<PlanId, number> = {
  cornerShop: 2400,
  mainStreet: 6800,
  harbor: 14000,
  maintenance: 180,
  ads: 950,
};

function roundToNearest50(n: number): number {
  return Math.round(n / 50) * 50;
}

export function priceFor(plan: PlanId, countryCode: string | null | undefined): number {
  const base = BASE_PRICES_USD[plan];
  return roundToNearest50(base * multiplierForCountry(countryCode));
}

export function formatUSD(amount: number): string {
  return amount.toLocaleString('en-US');
}

export type PriceSet = {
  cornerShop: string;
  mainStreet: string;
  harbor: string;
  maintenance: string;
  ads: string;
  tier: ReturnType<typeof tierForCountry>;
};

export function buildPriceSet(countryCode: string | null | undefined): PriceSet {
  return {
    cornerShop: formatUSD(priceFor('cornerShop', countryCode)),
    mainStreet: formatUSD(priceFor('mainStreet', countryCode)),
    harbor: formatUSD(priceFor('harbor', countryCode)),
    maintenance: formatUSD(priceFor('maintenance', countryCode)),
    ads: formatUSD(priceFor('ads', countryCode)),
    tier: tierForCountry(countryCode),
  };
}

export function injectPrices(html: string, prices: PriceSet): string {
  return html
    .replace(/\{\{PRICE_CORNER_SHOP\}\}/g, prices.cornerShop)
    .replace(/\{\{PRICE_MAIN_STREET\}\}/g, prices.mainStreet)
    .replace(/\{\{PRICE_HARBOR\}\}/g, prices.harbor)
    .replace(/\{\{PRICE_MAINTENANCE\}\}/g, prices.maintenance)
    .replace(/\{\{PRICE_ADS\}\}/g, prices.ads);
}
