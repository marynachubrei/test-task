import {Communication, PerformanceMetric, Policy, PolicyData} from "./models";

export class AccountsConstants {
  public static TITLES ={
    performanceMetrics: "Performance Metrics",
    policies: "Policies",
    accountStatus: "Account Status",
    accountDetails: "Account Details",
    communication: "Communication",
  }


public static PERFORMANCE_METRIC_CARDS: PerformanceMetric[]= [
    {
      title: "Winnability",
      status: "Very Strong",
      linkText: "See all factors",
      linkUrl: "#"
    },
    {
      title: "Loss Ratio",
      value: "25%",
      comparison: "vs 42% target",
      linkText: "View history",
      linkUrl: "#"
    },
    {
      title: "Premium Growth",
      value: "12.4%",
      comparison: "YoY increase $123M vs $150M Target",
      linkText: "View trend",
      linkUrl: "#"
    },
    {
      title: "Exposure Distribution",
      progress: [
        {
          label: "Marine Cargo",
          value: 71.4
        },
        {
          label: "General Liability",
          value: 20.0
        },
        {
          label: "Workers Comp",
          value: 8.6
        }
      ]
    }
  ];

  public static POLICIES: Policy[] = [
    {
      title: "Marine Cargo",
      premium: 625000,
      effectiveDate: "6/30/2026",
      icon: "ship",
      class: "blue"
    },
    {
      title: "General Liability",
      premium: 175000,
      effectiveDate: "6/30/2026",
      icon: "general",
      class: "green"
    },
    {
      title: "Workers Comp",
      premium: 75000,
      effectiveDate: "---",
      icon: "worker",
      class: "purple"
    },
    {
      title: "Property",
      premium: 64829.83,
      effectiveDate: "---",
      icon: "property",
      class: "purple"
    },
    {
      title: "Umbrella",
      premium: 275000,
      effectiveDate: "13/03/2026",
      icon: "umbrella",
      class: "purple"
    }
  ]

public static   ACCOUNT_DETAILS_OPTIONS=[{
  name: 'Decision Support',
  id: 1,
  subOptions:['Winnability','Exposure Review & Suggested Coverage',
    'Portfolio Strategy Alignment',
    'Broker Analytics']
},
  {
    name: 'Risk Assessment',
    id: 2,
    subOptions:['Winnability','Exposure Review & Suggested Coverage',
      'Portfolio Strategy Alignment',
      'Broker Analytics']
  },
  {
    name: 'Documents and compliance',
    id: 3,
    subOptions:['Winnability','Exposure Review & Suggested Coverage',
      'Portfolio Strategy Alignment',
      'Broker Analytics']
  }
]

  public static COMMUNICATION_DATA : Communication[]=[
  {
    status: "NEW",
    title: "Policy Renewal - Auto Insurance 5/15/25",
    sender: "Michael Roberts",
    date: "Apr 5",
    message: "Hello Arthur, I’m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I’ve attached the current policy details and premium breakdown for your reference.",
    attachments: 3,
    action: "Reply"
  },


  {
    status: "Responded",
    title: "Fwd: New Submission - BPM Real Estate - EFF 4/1/24",
    sender: "Joshua Dunmire",
    date: "Mar 25",
    message: "Arthur, attached please find our submission for the above mentioned applicant. We have...",
    attachments: null,
    action: null

  },
  {
    status: "NEW",
    title: "New Quote Request - Workers Comp Insurance",
    sender: "Sarah Chen",
    date: "Apr 5",
    message: "Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I’ve completed the initial risk assessment based",
    attachments: 3,
    action: "Reply"
  },
  {
    status: null,
    title: "New Business: BPM Real Estate Group, LLC",
    sender: "Isabel Kreller",
    date: "Feb 28",
    message: "Hello Arthur, I am pleased to present you with a submission on this client’s upco...",
    attachments: 5,
    action: "Reply"
  }


]
  public static COMMUNICATION_ACTIONS=[    {
    name: 'Filter',
    isSelected: false,
  },
    {
      name: 'Group',
      isSelected: false,
    },]

  public static POLICIES_DATA: PolicyData[]= [
    {
      "line": "Marine Cargo",
      "policyNumber": 17030212,
      "effDate": "6/30/2026",
      "expDate": "6/30/2027",
      "status": "Active",
      "expiringTech": 587500,
      "expiringPremium": 605000,
      "renewalToTech": 610000,
      "renewalTech": 620000,
      "renewalPremium": 625000,
      "rateChange": "3.3%",
      "lossRatio": "22"
    },
    {
      "line": "General Liability",
      "policyNumber": 4631092,
      "effDate": "6/30/2026",
      "expDate": "6/30/2027",
      "status": "Active",
      "expiringTech": 160000,
      "expiringPremium": 165000,
      "renewalToTech": 170000,
      "renewalTech": 172500,
      "renewalPremium": 175000,
      "rateChange": "6.1%",
      "lossRatio": "55"
    },
    {
      "line": "Workers Comp",
      "policyNumber": 9182371,
      "effDate": "Pending",
      "expDate": "Pending",
      "status": "Pending",
      "expiringTech": 0,
      "expiringPremium": 0,
      "renewalToTech": 73500,
      "renewalTech": 75000,
      "renewalPremium": 75000,
      "rateChange": "N/A",
      "lossRatio": ""
    },
    {
      "line": "Umbrella",
      "policyNumber": 5274936,
      "effDate": "13/03/2026",
      "expDate": "13/03/2027",
      "status": "Active",
      "expiringTech": 245000,
      "expiringPremium": 250000,
      "renewalToTech": 267500,
      "renewalTech": 270000,
      "renewalPremium": 275000,
      "rateChange": "10.0%",
      "lossRatio": "78"
    },
    {
      "status": "TOTAL (4)",
      "expiringTech": 992500,
      "expiringPremium": 1020000,
      "renewalToTech": 1121000,
      "renewalTech": 1137500,
      "renewalPremium": 1150000,
      "rateChange": "6.9%",
      "lossRatio": "58.3"
    }
  ]

  public static POLICIES_DATA_COLUMNS = [
    { key: 'line', label: 'Line' },
    { key: 'effDate', label: 'Eff. Date' },
    { key: 'expDate', label: 'Exp. Date' },
    { key: 'status', label: 'Status', uiType:'status',minWidth: 110 },
    { key: 'expiringTech', label: 'Expiring Tech', uiType:'currency', currencyType: "USD" },
    { key: 'expiringPremium', label: 'Expiring Premium', uiType:'currency',currencyType: "USD" },
    { key: 'renewalToTech', label: 'Renewal To Tech', uiType:'currency',currencyType: "USD" },
    { key: 'renewalTech', label: 'Renewal Tech', uiType:'currency',currencyType: "USD" },
    { key: 'renewalPremium', label: 'Renewal Premium', uiType:'currency',currencyType: "USD" },
    { key: 'rateChange', label: 'Rate Change' },
    { key: 'lossRatio', label: 'Loss Ratio', uiType: 'ratio', minWidth: 105 },
    { key: '', label: '', uiType: 'menu', minWidth: 50 }
  ];
}
