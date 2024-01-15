import { removeAccents } from './utils/format'

export type LotteryResult = {
  id: string
  company_id: string
  group: string
  drawn_at: number
  prize0: string[]
  prize1: string[]
  prize2: string[]
  prize3: string[]
  prize4: string[]
  prize5: string[]
  prize6: string[]
  prize7: string[]
  prize8?: string[]
}

export class LotteryCompany {
  id: string
  name: string
  group: string

  constructor(id: string, name: string, group: string) {
    this.id = id
    this.name = name
    this.group = group
  }

  isSameCompany(name: string | null | undefined) {
    if (!name) return false
    return removeAccents(name).toLowerCase().includes(this.name.toLowerCase())
  }
}

export class LotteryGroup {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

export type WinResult = {
  prize: number
  company: string
  expect: string
}
