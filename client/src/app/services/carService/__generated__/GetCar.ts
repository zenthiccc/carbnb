/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCar
// ====================================================

export interface GetCar_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  thumbnailUrl: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export interface GetCar {
  cars: GetCar_cars[];
}
