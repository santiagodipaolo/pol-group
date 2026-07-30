import React from "react"
import AuditsBanner from "../components/audits/audits-banner"
import AuditsTable from "../components/audits/audits-table"
import Separator from "../components/separator"
import Layout from "../components/layout"

const Audits = () => {
  return (
    <Layout pageTitle="Reports">
      <AuditsBanner />
      <Separator />
      <AuditsTable />
    </Layout>
  )
}

export default Audits
