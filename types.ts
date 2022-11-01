export interface iImage {
  url: string;
  hdUrl  : string;
}

interface iBase {
  _id: string;
  name: string;
  cost: number;
  category: string; 
  img: iImage;
}

export interface iProduct extends iBase {};

export interface iHistory extends iBase{
  productId: string;
  createDate: string;
}

export interface iUser {
  _id: string;
  name: string;
  points: number;
  redeemHistory: iHistory[];
  createDate: string;
}

export enum UserStatus {
  LOADING = "LOADING",
  OK = "OK",
  ERROR = "ERROR"
}

export type iAmount = 1000 | 5000 | 7500;

export enum RejectError {
  'PROCESSING',
  'ERROR'
}