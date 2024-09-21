import { atom } from "recoil"

export const tabState = atom<{ label: string; value: string; svg: any }[]>({
  key: "tabState",
  default: [{ label: "Project01", value: "Project01", svg: "" }],
})

export const activeFileState = atom<string | undefined>({
  key: "activeFileState",
  default: "Project01",
})
