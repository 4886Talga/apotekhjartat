type CheapestReplacement = {
    id: string,
    productName: string,
    productLongName: string,
    pharmaceuticalForm: string,
    packagingText: string,
    strength: string,
    description: string | null,
    canBePurchased: boolean,
    stock: number | null,
    stockStatus: string,
    originalUnitPrice: number,
    cheapestReplacement: string | null,
    articleLink: string,
    activeSubstance: string,
    extraCost: number,
    numericalNumber: number,
    isNarcotic: boolean,
    articleInfoText: string | null,
    articleNumber: string,
    header: string,
    preamble: string,
    purchaseStatus: {
        text: string | null,
        code: string | null,
        level: string
    },
    articleStatus: {
        text: string | null,
        code: string | null,
        level: string
    },
    nplpackid: string
}

export type Prescription = {
  prescriptionId: number,
  active: boolean,
  numberOfWithdrawals: number,
  numberOfWithdrawalsLeft: number,
  maxNumberOfPacks: number,
  dosage: string | null,
  prescriber: {
      name: string | null,
      workplace: string | null,
      profession: string | null,
      phoneNumber: string | null
  },
  article: {
      id: string,
      productName: string,
      productLongName: string,
      pharmaceuticalForm: string | null,
      packagingText: string | null,
      strength: string | null,
      description: string | null,
      canBePurchased: boolean,
      stock: number | null,
      stockStatus: string,
      originalUnitPrice: number,
      cheapestReplacement: CheapestReplacement | null,
      articleLink: string | null,
      activeSubstance: string,
      extraCost: number,
      numericalNumber: number,
      isNarcotic: boolean,
      articleInfoText: string | null,
      articleNumber: string | null,
      header: string,
      preamble: string,
      purchaseStatus: {
          text: string | null,
          code: string | null,
          level: string
      },
      articleStatus: {
          text: string | null,
          code: string | null,
          level: string
      },
      nplpackid: string | null
  },
  isNotReplaceable: boolean,
  replacements: CheapestReplacement[] | null,
  expeditionInterval: number,
  expeditionIntervalUnit: string | null,
  benefitType: string,
  prescriptionDate: string,
  validityDate: string,
  nextWithdrawalDate: string | null,
  nextWithdrawalWithinHcpDate: string | null,
  latestWithdrawalDate: string | null,
  firstWithdrawalBeforeDate: string | null,
  isNew: boolean,
  isAnimalPrescription: boolean,
  inCart: boolean,
  canBePurchased: boolean,
  isAboutToExpire: boolean,
  canBeRenewed: boolean,
  isAvailableWithinHcpPeriod: boolean,
  isAvailableWithinExpeditionInterval: boolean,
  isStarterPackAvailable: boolean,
  purchaseInfoText: string | null,
  purchaseBarrierText: string | null,
  benefitInfoText: string | null,
  statusInfoText: string,
  personalNumber: string,
  totalAmountRemaining: number,
  amountUnit: string,
  isPrescribedWithBenefit: boolean,
  header: string,
  preamble: string,
  buyableArticlesState: string,
  purchaseStatus: {
      text: string | null,
      code: string | null,
      level: string
  },
  prescriptionStatus: {
      text: string | null,
      code: string | null,
      level: string
  }
}
  
export type PageDirection = "next" | "previous";
