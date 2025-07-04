import {WorkQueue} from "./models";

export class DashboardConstants {
  public static TITLES ={
    workQueue: "Work Queue",
    myAccounts: "My Accounts",
    quickActions: "Quick actions",
    marketIntelligence: "Market Intelligence"
  }

  public static WORK_QUEUE_TABLE_ACTIONS = [
    {
      name: "Assigned to me(18)",
      isSelected: true,
    },
    {
      name: "Pending Review(8)",
      isSelected: false
    },
    {
      name: "Referrals(3)",
      isSelected: false
    }
  ]

  public static WORK_QUEUE_TABLE_DATA = [
    { key: 'name', label: 'Originator', uiType: 'userInitials' },
    { key: 'client.name', subKey: 'client.line', label: 'Client/line' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status', uiType: 'status', minWidth: 150 },
    { key: 'created', label: 'Created',minWidth: 100 },
    { key: '', label: '', uiType: 'menu', minWidth: 50 }
  ];

  public static WORK_QUEUE_DATA: WorkQueue []= [
    { name: 'Sam Masters', client: {name: 'NAMEX Tech Solutions', line: 'Cyber Liability'}, type: 'Underwriter Referral',
      status: 'New', created: '04/16/2025' },
    { name: 'Annalise Willis', client: {name: 'Maritime Logistics Corp', line: 'Marine Cargo'}, type: 'Underwriter Referral',
      status: 'New', created: '04/20/2025' },
    { name: 'Patrick Devenport', client: {name: 'GreenField Energy Ltd', line: 'Environmental'}, type: 'Loss Control Request',
      status: 'New', created: '04/16/2025' },
    { name: 'Ana Killian', client: {name: 'NorthStar Financial Group', line: 'D&O Liability'}, type: 'Underwriter Referral',
      status: 'Pending Review', created: '04/22/2025' },
    { name: 'Ana Killian', client: {name: 'Alliance Healthcare Systems', line: 'Medical Malpractice'}, type: 'Email',
      status: 'Completed', created: '04/28/2025' },
    { name: 'M K', client: {name: 'QuantumTech Industries', line: 'Product Liability'}, type: 'Email',
      status: 'Completed', created: '04/20/2025' },
  ];

  public static QUICK_ACTIONS = [
    {
      icon: "",
      name: "New Submission"
    },
    {
      icon: "",
      name: "Quote Builder"
    },
    {
      icon: "",
      name: "Risks Models"
    },
    {
      icon: "",
      name: "Documents Upload"
    }

  ]

  public static   ACCOUNT_LIST_DATA = [
    {
      name: 'NAMEX Tech Solutions',
      type:"Large Enterprise",
      line: 'D&O Liability',
      broker: 'Willis Towers',
      date: '04/16/2025',
      premium: '$2.3M',
      ratedPremium: '$2.8M',
      lossRatio: '32',
      appetite: 'HIGH',
      status: 'Active',
      triage: 180,
      winnAbility: 'Very Strong'
    },
    {
      name: 'Alliance Healthcare Systems',
      type:"Mid-Market",
      line: 'Medical Malpractice',
      broker: 'Aon Risk',
      date: '06/30/2025',
      premium: '$1.7M',
      ratedPremium: '$1.9M',
      lossRatio: '38',
      appetite: 'MEDIUM',
      status: 'Under review',
      triage: 165,
      winnAbility: 'Strong'
    },
    {
      name: 'Maritime Logistics Corp',
      type:"Shipping/Logistics",
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      date: '09/05/2025',
      premium: '$875K',
      ratedPremium: '$920K',
      lossRatio: '25',
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnAbility: 'Very Strong'
    },
    {
      name: 'GreenField Energy Ltd',
      type:"Energy Sector",
      line: 'Environmental Liability',
      broker: 'Aon Risk',
      date: '07/22/2025',
      premium: '$1.2M',
      ratedPremium: '$1.4M',
      lossRatio: '67',
      appetite: 'CAUTIOUS',
      status: 'Under review',
      triage: 152,
      winnAbility: 'Medium'
    }
  ];

  public static ACCOUNT_COLUMNS = [
    { key: 'name',subKey: "type", label: 'Account Name/Type' },
    { key: 'line', label: 'Line' },
    { key: 'broker', label: 'Broker' },
    { key: 'date', label: 'Renewal Date' },
    { key: 'premium', label: 'Premium', uiType: "highlightedAmount", minWidth: 150 },
    { key: 'ratedPremium', label: 'Rated Premium',minWidth: 100 },
    { key: 'lossRatio', label: 'Loss Ratio', uiType: 'ratio', minWidth: 100 },
    { key: 'appetite', label: 'Appetite',uiType: "categoryBadge", minWidth: 100 },
    { key: 'status', label: 'Status', uiType:'status',minWidth: 100 },
    { key: 'triage', label: 'Triage',minWidth: 100 },
    { key: 'winnAbility', label: 'Winnability', uiType: 'strengthIndicator',minWidth: 182 },
    { key: '', label: '', uiType: 'menu', minWidth: 50 }
  ];

  public static ACCOUNT_ACTION_BUTTONS =[
    {
      name: 'Filter',
      isSelected: false,
    },
    {
      name: 'Sort',
      isSelected: false,
    },
    {
      name: 'Group',
      isSelected: false,
    },
    {
      name: '+New',
      isSelected: true,
    }
  ]
}
