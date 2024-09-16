import { ColorsType, SpaceType } from "@styles/mainTheme"
import styled from "styled-components"
import mainTheme from "@styles/mainTheme"

export interface BoxStyledProps {
  p?: string
  pt?: SpaceType
  pr?: SpaceType
  pb?: SpaceType
  pl?: SpaceType
  m?: string
  mt?: SpaceType
  mr?: SpaceType
  mb?: SpaceType
  ml?: SpaceType
  bg?: ColorsType
  border?: string
  borderRadius?: SpaceType
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  overflowX?: string
  overflowY?: string
  boxShadow?: string
}

export const BoxContainer = styled.div<BoxStyledProps>`
  display: flex;
  padding-top: ${({ pt }) => (pt ? mainTheme.space[pt] : 0)};
  padding-right: ${({ pr }) => (pr ? mainTheme.space[pr] : 0)};
  padding-bottom: ${({ pb }) => (pb ? mainTheme.space[pb] : 0)};
  padding-left: ${({ pl }) => (pl ? mainTheme.space[pl] : 0)};
  padding: ${({ p }) => p};
  margin-top: ${({ mt }) => (mt ? mainTheme.space[mt] : 0)};
  margin-right: ${({ mr }) => (mr ? mainTheme.space[mr] : 0)};
  margin-bottom: ${({ mb }) => (mb ? mainTheme.space[mb] : 0)};
  margin-left: ${({ ml }) => (ml ? mainTheme.space[ml] : 0)};
  margin: ${({ m }) => m};
  background-color: ${({ bg }) => (bg ? mainTheme.colors[bg] : "transparent")};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? mainTheme.space[borderRadius] : 0};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-grow: ${({ flexGrow }) => flexGrow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  box-shadow: ${({ boxShadow }) => boxShadow};
`
