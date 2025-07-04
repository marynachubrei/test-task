export interface ProgressMetric {
  label: string,
  value: number
}

export interface PerformanceMetric{
  title: string,
  value?: string,
  comparison?: string,
  linkText?: string,
  linkUrl?: string,
  status?: string,
  description?: string,
  progress?: ProgressMetric[]
}

export interface Policy  {
  title: string,
  premium: number,
  effectiveDate: string,
  icon: string,
  class: string
}

export interface PolicyData  {
  line?: string,
  policyNumber?: number,
  effDate?: string,
  expDate?: string,
  status?: string,
  expiringTech: number,
  expiringPremium: number,
  renewalToTech: number,
  renewalTech: number,
  renewalPremium: number,
  rateChange: string,
  lossRatio: string
}

export interface Communication {
  status: string| null,
  title: string,
  sender: string,
  date: string,
  message: string,
  attachments: number| null,
  action: string| null
}
