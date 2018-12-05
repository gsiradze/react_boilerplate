import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        content
        <Footer />
      </div>
    )
  }
}

export default Index
