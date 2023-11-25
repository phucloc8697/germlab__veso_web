import { LotteryCompany, LotteryGroup } from '@/types'

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
