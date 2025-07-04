export interface Client {
  name: string;
  line: string;
}

export interface WorkQueue {
  name: string;
  client: Client,
  type: string;
  status: string,
  created: string
}

export interface Account {
  name: string,
  type:string,
  line: string,
  broker: string,
  date: string,
  premium: string,
  ratedPremium: string,
  lossRatio: string,
  appetite: string,
  status: string,
  triage: number,
  winnAbility: string
}
