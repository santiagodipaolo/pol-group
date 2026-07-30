import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { withTheme } from "styled-components"
import Breadcrumbs from "../common/breadcrumbs"

import { PROJECT_NAME } from "../../constants/Constants"
import { breakpoints, colors } from "../../theme"

const star = "../../images/star.png"
const rabbit = "../../images/rabbit-products.png"
const rabbitBack = "../../images/rabbit-products-back.png"
const tweet = "/tweet.jpeg"

const Content = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
  }

  .tweetImg {
    max-width: 100%;
    padding: 10px 0;
  }
`

const LinkWrapper = styled.div`
  position: relative;
  margin: 15px 0;
  cursor: pointer;
  &:hover,
  .active {
    color: ${colors.primary};
  }
`

const Link = styled.span`
  font-family: Hatton;
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

const ActionColumn = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 10px !important;
  border-left: 1px solid ${colors.fontColor};
  border-right: 1px solid ${colors.fontColor};
  border-bottom: 1px solid ${colors.fontColor};

  @media (min-width: ${breakpoints.large}) {
    border-bottom: 0;
  }
`

const TextColumn = styled.div`
  padding: 35px !important;
  flex: 1;
  white-space: pre-line;

  @media (min-width: ${breakpoints.large}) {
    padding: 70px !important;
  }
`

const Star = styled.div`
  position: absolute;
  right: -6%;
  top: 0%;
  display: none;
  padding: 2px 0;
  background: ${colors.headerBg};

  &.active {
    display: block;
  }

  img {
    width: 24px !important;
  }
`

const Title = styled.h2`
  font-family: Hatton;
  font-size: 30px;
  text-decoration: underline;
  text-decoration-thickness: from-font;
  font-weight: 300;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.large}) {
    font-size: 40px;
  }
`

const Rabbit = styled.div`
  position: absolute;
  bottom: 0%;
  right: -120px;

  img {
    width: 200px !important;
  }
`

const RabbitBack = styled.div`
  position: absolute;
  top: 3%;
  right: -30%;

  img {
    width: 360px !important;
  }
`

const ProductsTable = ({ path }) => {
  const activeSelectedTab = path?.split("#")

  const tabs = [
    {
      key: "tokenomics",
      title: "MATH & TOKEN ENGINEERING DESIGN",
      text: "We create economically sustainable and non-deterministic token emission schedules, as well as intelligent token allocation through the use of sophisticated mathematical modeling and supervised machine learning algorithms.\n\nWe understand that designing token economics that achieve long-term success requires a deep understanding of mathematical models and algorithms. That's why we have a team of experts with a strong background in mathematics, economics, finance and machine learning who are dedicated to designing customized solutions that meet our clients' unique needs. We work closely with our clients to ensure that the resulting token economics are sustainable and tailored to their specific business objectives.\n\nWhether you are a startup launching a new token, or an established company looking to optimize your existing token economics, our MATH & TOKEN ENGINEERING DESIGN service can help you achieve your goals with confidence.",
    },
    {
      key: "audit",
      title: "MATHEMATICAL-FINANCIAL AUDITS",
      text: "While audits in the realm of DeFi have traditionally focused on detecting code vulnerabilities and programming errors, there is growing concern that a significant number of “hacks” are actually the result of poor protocol design and inadequate adjustment mechanisms. Recent high-profile security breaches of DeFi platforms such as Terra and Mango Markets have underscored the need for audits to extend beyond code review and assess the overall security and design of these systems.\n\nTake a look at what the Mango Markets hacker had to openly say on his personal Twitter account:\n <TwitterTweetEmbed tweetId='1581326199682265088' />\nIt is becoming increasingly clear that a comprehensive approach to auditing is necessary to safeguard against financial loss and promote the growth of the ecosystem.\n\nIn this sense, our team provides comprehensive mathematical-financial auditing services that cover the accuracy of mathematical equations, proper alignment of agent incentives, and stress testing using Agent-Based Modeling (ABM).  We also simulate scenarios in extreme conditions and validate results through Reinforcement Learning frameworks to ensure the robustness of your financial protocols.\n\nBy leveraging advanced mathematical and statistical techniques, these audits enable businesses to gain insights into their financial performance, identify potential risks, make more informed decisions, and above all, avoid catastrophes",
    },
    {
      key: "risk",
      title: "RISK MANAGEMENT",
      text: "We offer a tailored risk management plan based on the results of our simulations and analysis, helping you stay ahead of potential risks and maintain the integrity of your financial systems.\n\n We provide you with a real-time information dashboard, allowing you to stay informed on market status, competitors, and critical parameters, as well as take advantage of unexpected events.\n\nOur risk management plan is designed to be dynamic, allowing for the modification of parameters to assess how the plan would perform in response to exogenous or endogenous changes. This approach ensures that your risk management plan remains relevant and effective over time, helping you to protect your financial systems and achieve your business objectives with confidence.",
    },
  ]

  const [activeTab, setActiveTab] = useState(
    tabs.find(tab => tab.key === activeSelectedTab?.[1]) || tabs[0]
  )

  const handleActiveTab = tab => {
    setActiveTab(tab)
  }
  return (
    <div className="d-flex h-100 flex-grow-1">
      <Content className="container">
        <div className="row no-gutters h-100 position-relative">
          <ActionColumn className="col-md-4 d-lg-flex flex-lg-column">
            <Breadcrumbs links={[{ src: "products", title: "Products" }]} />
            {tabs.map(tab => (
              <LinkWrapper key={tab.key} onClick={() => handleActiveTab(tab)}>
                <Link className={activeTab.key === tab.key ? "active" : ""}>
                  {tab.title}
                </Link>
                <Star className={activeTab.key === tab.key ? "active" : ""}>
                  <StaticImage src={star} placeholder="none" alt="" />
                </Star>
              </LinkWrapper>
            ))}
          </ActionColumn>
          <TextColumn className="col-md-8 d-lg-flex flex-lg-column h-100 position-relative">
            <Title>{activeTab.title}</Title>
            {activeTab.text
              .replace(
                /<TwitterTweetEmbed tweetId='1581326199682265088'\/>/g,
                "<TwitterTweetEmbed tweetId='1581326199682265088' />"
              )
              .split(/(<TwitterTweetEmbed tweetId='1581326199682265088' \/>)/)
              .map((part, index) => {
                if (
                  part === "<TwitterTweetEmbed tweetId='1581326199682265088' />"
                ) {
                  return (
                    <a
                      href="https://twitter.com/avi_eisen/status/1581326199682265088"
                      target="_blank"
                      rel="no-follow"
                    >
                      <img
                        className="tweetImg"
                        src={tweet}
                        placeholder="fade"
                        alt={PROJECT_NAME}
                      />
                    </a>
                  )
                } else {
                  return <span key={`text-${index}`}>{part}</span>
                }
              })}
            <RabbitBack className="d-none d-lg-flex">
              <StaticImage src={rabbitBack} placeholder="none" alt="" />
            </RabbitBack>
            <Rabbit className="d-none d-lg-flex">
              <StaticImage src={rabbit} placeholder="none" alt="" />
            </Rabbit>
          </TextColumn>
        </div>
      </Content>
    </div>
  )
}

export default withTheme(ProductsTable)
