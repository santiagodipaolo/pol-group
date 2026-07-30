import React from "react"
import styled, { withTheme } from "styled-components"
import { colors } from "../../theme"

import { DATA_AUDITS } from "../../constants/Constants"
import Text from "../common/text"

import { breakpoints } from "../../theme"

import DownloadIcon from "../../assets/download.svg"
import Breadcrumbs from "../common/breadcrumbs"

const Container = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;
`

const Title = styled.p`
  font-family: Hatton;
  font-size: 29px;
  font-weight: 300;
  text-align: left;
  text-decoration: underline;
  text-decoration-thickness: from-font;
`

const TableHeader = styled.div`
  border-bottom: 1px solid ${colors.fontColor};
`

const TableTitle = styled.p`
  text-transform: uppercase;
  margin: 0;
  height: auto;
  padding-bottom: 5px;

  p {
    margin: 0;
  }
`

const TableItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${colors.fontColor};
  border-left: 1px solid ${colors.fontColor};
  border-right: 1px solid ${colors.fontColor};
  align-items: center;

  &:hover {
    transition: 0.3s;
    background-color: ${colors.darkBg};
  }
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  object-fit: cover;
  margin: 0 10px;

  @media (min-width: ${breakpoints.large}) {
    height: 30px;
    width: 30px;
    border-radius: 30px;
  }
`
const RowMobile = styled.div`
  padding: 0 10px !important;
  align-items: center;

  p {
    width: 100%;
  }
`

const AuditsTable = () => {
  const hasAudits = DATA_AUDITS.length > 0
  return (
    <Container className="container">
      <Breadcrumbs links={[{ src: "reports", title: "Reports" }]} />
      <div className="row">
        <div className="col">
          <Title>Reports</Title>
        </div>
      </div>
      {hasAudits ? (
        <>
          <TableHeader className="row lg-flex no-gutters">
            <div className="col-lg-4 d-none d-lg-flex">
              <TableTitle>
                <Text>Name</Text>
              </TableTitle>
            </div>
            <div className="col-lg-3 d-none d-lg-flex">
              <TableTitle>
                <Text>Protocol</Text>
              </TableTitle>
            </div>
            <div className="col-lg-3 d-none d-lg-flex">
              <TableTitle>
                <Text>Stages</Text>
              </TableTitle>
            </div>
            <div className="col-lg-1 d-none d-lg-flex" />
          </TableHeader>

          {DATA_AUDITS.map((item, index) => (
            <TableItem className="row no-gutters" key={index}>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="d-none d-lg-flex">
                  <Text bold>{item.company.name}</Text>
                </div>
                <div className="col d-lg-none">
                  <Text bold>{item.company.name}</Text>
                  <Text>{item.platform.name}</Text>
                </div>
              </div>
              <div className="col-lg-3 d-none d-lg-flex align-items-center">
                <Text> {item.platform.name}</Text>
              </div>
              <div className="col-lg-3 d-none d-lg-flex align-items-center">
                <Text> {item.stages.status}</Text>
              </div>
              <div className="col-lg-1 d-flex d-lg-flex">
                <a
                  href={item.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  title={item.company.name}
                >
                  <img src={DownloadIcon} alt="Download" width={20} />
                </a>
              </div>
            </TableItem>
          ))}
        </>
      ) : (
        <Text>Available soon</Text>
      )}
    </Container>
  )
}

export default withTheme(AuditsTable)
