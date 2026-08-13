import React from "react"
import styled, { withTheme } from "styled-components"

import { breakpoints, colors } from "../../theme"
import Text from "../common/text"

const COMPANIES = [
  {
    name: "POL Labs",
    desc:
      "POL Labs is a boutique quantitative research firm for the hardest problems in finance. Where most research ends on the page, POL Labs runs its results in live markets, backed by a team of mathematicians, economists and engineers.",
    link: "https://www.pol.finance",
    cta: "Visit",
  },
  {
    name: "propAMM",
    desc:
      "Onchain market making venue built with Titan Builder, LambdaClass, and Aligned. Already past $1B in cumulative volume, at prices 1.5 bps tighter than Binance and 8 bps tighter than Uniswap on Ethereum.",
    link: "https://pamm.wtf/",
    cta: "Visit",
  },
  {
    name: "Zonda Markets",
    desc:
      "A joint venture with Aligned that brings together quantitative research and top-tier zero-knowledge engineering to build the next generation of DeFi products.",
  },
  // Hidden for now — may re-add later.
  // {
  //   name: "Loom",
  //   desc:
  //     "Real-world asset infrastructure for receivable purchase agreements. Bridging traditional finance with on-chain settlement and coordination.",
  //   link: "https://lambdaclass.com/loom-levenue.pdf",
  //   cta: "Read",
  // },
  {
    name: "Liquid",
    desc:
      "Institutional-grade market making for digital assets. Algorithmic liquidity across centralized and decentralized exchanges, around the clock.",
    link: "https://liquid-inky-seven.vercel.app/",
    cta: "Visit",
  },
]

const Title = styled.h3`
  font-family: Metropolis;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 2.4px;
  text-align: center;
  text-transform: uppercase;
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid ${colors.fontColor};
`

const Content = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid ${colors.fontColor};
  border-left: 1px solid ${colors.fontColor};
`

const Cell = styled.div`
  flex: 0 0 100%;
  padding: 50px 40px;
  text-align: center;
  border-right: 1px solid ${colors.fontColor};
  border-bottom: 1px solid ${colors.fontColor};
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    flex: 0 0 50%;
  }
`

const TitleText = styled.h4`
  font-family: Hatton;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: 0.96px;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.large}) {
    min-height: 60px;
  }
`

const Body = styled.div`
  flex: 1;
`

const Link = styled.a`
  cursor: pointer;
  font-family: "Metropolis";
  font-weight: 700;
  color: ${colors.primary};
  margin-top: 16px;

  &:hover {
    color: ${colors.primaryHover};
  }
`

const Products = () => {
  return (
    <div id="companies" className="container">
      <div className="row">
        <div className="col-12 d-lg-flex flex-lg-column center">
          <Title>Companies</Title>
        </div>
      </div>
      <Content>
        <Grid>
          {COMPANIES.map((c) => (
            <Cell key={c.name}>
              <TitleText>{c.name}</TitleText>
              <Body>
                <Text>{c.desc}</Text>
              </Body>
              {c.link && (
                <Link href={c.link} target="_blank" rel="noopener noreferrer">
                  {c.cta} &rarr;
                </Link>
              )}
            </Cell>
          ))}
        </Grid>
      </Content>
    </div>
  )
}

export default withTheme(Products)
