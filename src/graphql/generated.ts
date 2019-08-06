/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getListDemo
// ====================================================

export interface getListDemo_quote_programs_rates_rate {
  __typename: "Number";
  float: number;
  display: string;
  currency: number;
}

export interface getListDemo_quote_programs_rates_payment {
  __typename: "Number";
  float: number;
  display: string;
  currency: number;
}

export interface getListDemo_quote_programs_rates {
  __typename: "Rate";
  term: LoanTerm;
  rate: getListDemo_quote_programs_rates_rate;
  payment: getListDemo_quote_programs_rates_payment;
}

export interface getListDemo_quote_programs {
  __typename: "ProgramResult";
  name: LoanTerm;
  rates: getListDemo_quote_programs_rates[];
}

export interface getListDemo_quote {
  __typename: "Quote";
  generatedDate: any;
  programs: getListDemo_quote_programs[];
}

export interface getListDemo {
  quote: getListDemo_quote | null;
}

export interface getListDemoVariables {
  input: QuoteQueryInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login_user_profile {
  __typename: "UserProfile";
  firstName: string | null;
  lastName: string | null;
}

export interface loginMutation_login_user {
  __typename: "User";
  id: string;
  profile: loginMutation_login_user_profile;
}

export interface loginMutation_login {
  __typename: "AccessToken";
  token: string | null;
  user: loginMutation_login_user | null;
}

export interface loginMutation {
  login: loginMutation_login | null;
}

export interface loginMutationVariables {
  emailAddress: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: childFragment
// ====================================================

export interface childFragment_rate {
  __typename: "Number";
  float: number;
  display: string;
  currency: number;
}

export interface childFragment_payment {
  __typename: "Number";
  float: number;
  display: string;
  currency: number;
}

export interface childFragment {
  __typename: "Rate";
  term: LoanTerm;
  rate: childFragment_rate;
  payment: childFragment_payment;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: userFragment
// ====================================================

export interface userFragment_profile {
  __typename: "UserProfile";
  firstName: string | null;
  lastName: string | null;
}

export interface userFragment {
  __typename: "User";
  id: string;
  profile: userFragment_profile;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LoanTerm {
  ADJUSTABLE_10 = "ADJUSTABLE_10",
  ADJUSTABLE_3 = "ADJUSTABLE_3",
  ADJUSTABLE_5 = "ADJUSTABLE_5",
  ADJUSTABLE_7 = "ADJUSTABLE_7",
  FIXED_10 = "FIXED_10",
  FIXED_15 = "FIXED_15",
  FIXED_20 = "FIXED_20",
  FIXED_25 = "FIXED_25",
  FIXED_30 = "FIXED_30",
  FIXED_5 = "FIXED_5",
}

export enum PropertyType {
  CONDO = "CONDO",
  DUPLEX = "DUPLEX",
  FOURPLEX = "FOURPLEX",
  SINGLE_FAMILY = "SINGLE_FAMILY",
  TOWNHOUSE = "TOWNHOUSE",
  TRIPLEX = "TRIPLEX",
}

export enum PropertyUsage {
  INVESTMENT = "INVESTMENT",
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export enum Purpose {
  PURCHASE = "PURCHASE",
  REFINANCE = "REFINANCE",
}

export interface QuoteQueryInput {
  purpose: Purpose;
  loanAmount: number;
  propertyValue: number;
  propertyType: PropertyType;
  creditScore: number;
  loanTerm: LoanTerm[];
  propertyUsage: PropertyUsage;
  zipCode: number;
  cashOutAmount?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
