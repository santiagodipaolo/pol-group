import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../theme"

const LOGOS = [
  { src: "/images/lambda.png", alt: "LambdaClass" },
  { src: "/images/hummingbot.png", alt: "Hummingbot" },
  { src: "/images/gattaca.png?v=2", alt: "Titan", op: 0.62, pad: 12 },
  { src: "/images/aligned-Photoroom.png", alt: "Aligned" },
  // Hidden for now — may re-add later. { src: "/images/levenue.png", alt: "Levenue" },
]

const Section = styled.div`
  width: 100%;
  padding: 56px 0 66px;
`

const Label = styled.p`
  font-family: "Metropolis";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #8b8578;
  margin-bottom: 36px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px 40px;

  @media (min-width: ${breakpoints.large}) {
    gap: 24px 56px;
  }
`

/* pol.finance carousel sizing: 180 x 100 box, logo contained inside */
const Box = styled.div`
  width: 150px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: ${breakpoints.large}) {
    width: 180px;
    height: 100px;
  }
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
  filter: grayscale(100%);
  opacity: 0.55;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.08);
  }
`

const Partners = () => (
  <Section className="container">
    <Label>Building with</Label>
    <Row>
      {LOGOS.map((l) => (
        <Box key={l.alt} style={l.pad ? { padding: `${l.pad}px` } : undefined}>
          <Logo src={l.src} alt={l.alt} style={l.op ? { opacity: l.op } : undefined} />
        </Box>
      ))}
    </Row>
  </Section>
)

export default Partners
