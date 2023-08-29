export type TTrains = {
    name: string,
    description: string,
    characteristics: TCharacteristicsItem[]
}

export type TCharacteristicsItem = {
  speed: number;
  force: number;
  engineAmperage: number;
}
