import { LotteryCompany, LotteryGroup, LotteryResult, WinResult } from '@/types'

export const LotteryGroups = {
  mien_bac: new LotteryGroup('mien_bac', 'Miền Bắc'),
  mien_nam: new LotteryGroup('mien_nam', 'Miền Nam'),
  mien_trung: new LotteryGroup('mien_trung', 'Miền Trung'),
}

export const LotteryCompanies = {
  // Xo so mien Bac
  // xsmb: new LotteryCompany("xsmb", "Mien Bac", LotteryGroups.xsmb),
  // Xo so mien Trung
  xsdlk: new LotteryCompany('xsdlk', 'Đắk Lắk', LotteryGroups.mien_trung.id),
  xskh: new LotteryCompany('xskh', 'Khánh Hòa', LotteryGroups.mien_trung.id),
  xsbdi: new LotteryCompany('xsbdi', 'Bình Định', LotteryGroups.mien_trung.id),
  xsgl: new LotteryCompany('xsgl', 'Gia Lai', LotteryGroups.mien_trung.id),
  xsnt: new LotteryCompany('xsnt', 'Ninh Thuận', LotteryGroups.mien_trung.id),
  xshue: new LotteryCompany('xshue', 'Thừa Thiên Huế', LotteryGroups.mien_trung.id),
  xsdng: new LotteryCompany('xsdng', 'Đà Nẵng', LotteryGroups.mien_trung.id),
  xspy: new LotteryCompany('xspy', 'Phú Yên', LotteryGroups.mien_trung.id),
  xsqn: new LotteryCompany('xsqn', 'Quảng Nam', LotteryGroups.mien_trung.id),
  xsqt: new LotteryCompany('xsqt', 'Quảng Trị', LotteryGroups.mien_trung.id),
  xsdno: new LotteryCompany('xsdno', 'Đắk Nông', LotteryGroups.mien_trung.id),
  xsqng: new LotteryCompany('xsqng', 'Quảng Ngãi', LotteryGroups.mien_trung.id),
  xsqb: new LotteryCompany('xsqb', 'Quảng Bình', LotteryGroups.mien_trung.id),
  xskt: new LotteryCompany('xskt', 'Kon Tum', LotteryGroups.mien_trung.id),
  // Xo so mien Nam
  xskg: new LotteryCompany('xskg', 'Kiên Giang', LotteryGroups.mien_nam.id),
  xsdl: new LotteryCompany('xsdl', 'Đà Lạt', LotteryGroups.mien_nam.id),
  xsdt: new LotteryCompany('xsdt', 'Đồng Tháp', LotteryGroups.mien_nam.id),
  xsdn: new LotteryCompany('xsdn', 'Đồng Nai', LotteryGroups.mien_nam.id),
  xsvt: new LotteryCompany('xsvt', 'Vũng Tàu', LotteryGroups.mien_nam.id),
  xsbtr: new LotteryCompany('xsbtr', 'Bến Tre', LotteryGroups.mien_nam.id),
  xsbl: new LotteryCompany('xsbl', 'Bạc Liêu', LotteryGroups.mien_nam.id),
  xshcm: new LotteryCompany('xshcm', 'Hồ Chí Minh', LotteryGroups.mien_nam.id),
  xsct: new LotteryCompany('xsct', 'Cần Thơ', LotteryGroups.mien_nam.id),
  xsst: new LotteryCompany('xsst', 'Sóc Trăng', LotteryGroups.mien_nam.id),
  xsbt: new LotteryCompany('xsbth', 'Bình Thuậnn', LotteryGroups.mien_nam.id),
  xsbp: new LotteryCompany('xsbp', 'Bình Phước', LotteryGroups.mien_nam.id),
  xscm: new LotteryCompany('xscm', 'Cà Mau', LotteryGroups.mien_nam.id),
  xsag: new LotteryCompany('xsag', 'An Giang', LotteryGroups.mien_nam.id),
  xstn: new LotteryCompany('xstn', 'Tây Ninh', LotteryGroups.mien_nam.id),
  xstv: new LotteryCompany('xstv', 'Trà Vinh', LotteryGroups.mien_nam.id),
  xstg: new LotteryCompany('xstg', 'Tiền Giang', LotteryGroups.mien_nam.id),
  xsvl: new LotteryCompany('xsvl', 'Vĩnh Long', LotteryGroups.mien_nam.id),
  xsbd: new LotteryCompany('xsbd', 'Bình Dương', LotteryGroups.mien_nam.id),
  xsla: new LotteryCompany('xsla', 'Long An', LotteryGroups.mien_nam.id),
  xshg: new LotteryCompany('xshg', 'Hậu Giang', LotteryGroups.mien_nam.id),
}

export function getGroupFromId(id: string): LotteryGroup {
  const lotteryGroup = (LotteryGroups as { [key: string]: LotteryGroup })[id] as LotteryGroup
  return lotteryGroup
}

export function getCompanyFromId(id: string): LotteryGroup {
  const company = (LotteryCompanies as { [key: string]: LotteryCompany })[id] as LotteryCompany
  return company
}

export function getPrizeName(id: number): string {
  const Names: { [key: number]: string } = {
    0: 'Giải đặc biệt',
    1: 'Giải nhất',
    2: 'Giải nhì',
    3: 'Giải ba',
    4: 'Giải bốn',
    5: 'Giải năm',
    6: 'Giải sáu',
    7: 'Giải bảy',
    8: 'Giải tám',
    9: 'Giải phụ đặc biệt',
  }
  return Names[id] || ''
}

export function isSecondarySpecialPrize(expect: string, digits: string): boolean {
  let wrong = false
  for (let i = 0; i < 6; i++) {
    if (expect[i] !== digits[i]) {
      if (!wrong) {
        wrong = true
      } else {
        return false
      }
    }
  }
  return true
}

export function checkLotteryResults(results: LotteryResult[], digits: string): WinResult[] {
  let ans: WinResult[] = []
  for (let result of results) {
    for (let i = 0; i < 9; i++) {
      const expects = (result as { [key: string]: any })[`prize${i}`] as string[]
      for (let e of expects) {
        if (digits === e || (e.length < digits.length && digits.slice(-e.length) === e)) {
          ans.push({
            prize: i,
            expect: e,
            company: result.company_id,
          })
        }
      }
    }

    if (isSecondarySpecialPrize(result.prize0[0], digits)) {
      ans.push({
        prize: 9,
        expect: result.prize0[0],
        company: result.company_id,
      })
    }
  }
  return ans
}
