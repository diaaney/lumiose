export type TierId = 'premium' | 'standard' | 'latam-high' | 'latam-sea' | 'emerging';

export type Tier = {
  id: TierId;
  multiplier: number;
  countries: readonly string[];
};

export const TIERS: Record<TierId, Tier> = {
  premium: {
    id: 'premium',
    multiplier: 1.15,
    countries: ['CH', 'NO', 'DK', 'IS', 'LU'],
  },
  standard: {
    id: 'standard',
    multiplier: 1.0,
    countries: [
      'US', 'CA', 'GB', 'IE', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE',
      'AT', 'SE', 'FI', 'PT', 'AU', 'NZ', 'JP', 'SG', 'KR', 'IL',
      'AE', 'QA',
    ],
  },
  'latam-high': {
    id: 'latam-high',
    multiplier: 0.45,
    countries: ['MX', 'CL', 'UY', 'AR', 'PA', 'CR'],
  },
  'latam-sea': {
    id: 'latam-sea',
    multiplier: 0.35,
    countries: ['CO', 'PE', 'BR', 'EC', 'DO', 'GT', 'TH', 'MY', 'ZA', 'TR'],
  },
  emerging: {
    id: 'emerging',
    multiplier: 0.25,
    countries: ['IN', 'ID', 'PH', 'VN', 'BD', 'PK', 'EG', 'NG', 'KE'],
  },
};

const DEFAULT_TIER: TierId = 'standard';

export function tierForCountry(countryCode: string | null | undefined): TierId {
  if (!countryCode) return DEFAULT_TIER;
  const cc = countryCode.toUpperCase();
  for (const tier of Object.values(TIERS)) {
    if (tier.countries.includes(cc)) return tier.id;
  }
  return DEFAULT_TIER;
}

export function multiplierForCountry(countryCode: string | null | undefined): number {
  return TIERS[tierForCountry(countryCode)].multiplier;
}
