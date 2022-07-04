export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: Region;
  subregion: Subregion;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Region[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  borders?: string[];
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Europe = 'Europe',
}

export interface Currencies {
  EUR?: All;
  MKD?: All;
  HRK?: All;
  RON?: All;
  DKK?: All;
  FOK?: All;
  MDL?: All;
  RUB?: All;
  BAM?: BAM;
  NOK?: All;
  SEK?: All;
  HUF?: All;
  PLN?: All;
  ISK?: All;
  CHF?: All;
  BYN?: All;
  GBP?: All;
  GGP?: All;
  RSD?: All;
  JEP?: All;
  UAH?: All;
  GIP?: All;
  IMP?: All;
  ALL?: All;
  CZK?: All;
  BGN?: All;
}

export interface All {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  ell?: string;
  tur?: string;
  mkd?: string;
  lav?: string;
  est?: string;
  hrv?: string;
  ron?: string;
  dan?: string;
  fao?: string;
  rus?: string;
  deu?: string;
  bos?: string;
  srp?: string;
  eng?: string;
  gle?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  swe?: string;
  hun?: string;
  pol?: string;
  ita?: string;
  por?: string;
  isl?: string;
  bel?: string;
  fra?: string;
  nfr?: string;
  sqi?: string;
  lit?: string;
  slk?: string;
  nrf?: string;
  lat?: string;
  spa?: string;
  ukr?: string;
  glv?: string;
  ltz?: string;
  bar?: string;
  nld?: string;
  cat?: string;
  nor?: string;
  ces?: string;
  bul?: string;
  cnr?: string;
  gsw?: string;
  roh?: string;
  mlt?: string;
  fin?: string;
  slv?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = 'monday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}

export enum Subregion {
  CentralEurope = 'Central Europe',
  EasternEurope = 'Eastern Europe',
  NorthernEurope = 'Northern Europe',
  SoutheastEurope = 'Southeast Europe',
  SouthernEurope = 'Southern Europe',
  WesternEurope = 'Western Europe',
}
