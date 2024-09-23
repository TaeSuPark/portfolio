import { atom } from "recoil"

export const tabState = atom<{ label: string; value: string; svg: any }[]>({
  key: "tabState",
  default: [],
})

export const activeFileState = atom<string | undefined>({
  key: "activeFileState",
  default: undefined,
})
