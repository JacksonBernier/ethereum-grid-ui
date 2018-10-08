import React, { Component } from 'react'
import { connect } from 'react-redux';
import "../normalize.css"

import DappItem from './DappItem'

class DappOverview extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    let suggested = this.props.suggestedDapps
    let connectedDapps = this.props.tabs
    return (
      <main className="dapps">
        <h1><strong>Dapps</strong> Overview</h1>

        <h2>Connected</h2>
        <section className="card-container dapps">
        {
          connectedDapps.map(dapp => {
            dapp.name = dapp.name || dapp.url
            dapp.banner = dapp.banner || 'https://www.sols.org/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
            return <DappItem dapp={dapp}></DappItem>
          })
        }
        </section>

        <h2>Suggested</h2>
        <section className="card-container dapps">
        {
          suggested.map(dapp => {
            return <DappItem dapp={dapp}></DappItem>
          })
        }
        </section>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
    suggestedDapps: state.suggestedDapps
  };
}

export default connect(mapStateToProps)(DappOverview)