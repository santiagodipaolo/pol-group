import React, { useState } from "react"

import { PROJECT_DESCRIPTION, PROJECT_NAME } from "../constants/Constants"
import Seo from "./seo"
import Header from "./header/header"
import Modal from "./common/modal"
import Separator from "./separator"
import Footer from "./footer/footer"

function Layout({
  pageTitle,
  title = PROJECT_NAME,
  description = PROJECT_DESCRIPTION,
  children,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const ChildrenWithProps = () => {
    return React.Children.map(children, child =>
      React.cloneElement(child, { toggleModal: handleOpenModal })
    )
  }

  return (
    <div
      className={`d-flex flex-column min-vh-100 ${
        isModalOpen ? "no-scroll" : "scroll"
      }`}
    >
      <Seo
        lang="en"
        pageTitle={pageTitle}
        title={title}
        description={description}
      />
      <Modal isOpen={isModalOpen} toggleModal={handleOpenModal} />
      <Header toggleModal={handleOpenModal} />
      <Separator />
      <ChildrenWithProps />
      <Separator />
      <Footer toggleModal={handleOpenModal} />
    </div>
  )
}

export default Layout
