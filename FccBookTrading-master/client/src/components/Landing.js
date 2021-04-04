import React from 'react'

const Landing = () => {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br /><br />
          <h1 className="header center teal-text">Book Trading Club</h1>
          <div className="row center">
            <h5 className="header col s12 light">Exchange Books Online For Free </h5>
          </div>
          <br /><br />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons" style={{fontSize:"4rem"}}>add</i></h2>
                <h5 className="center">Add Your Book</h5>

              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons" style={{fontSize:"4rem"}}>done</i></h2>
                <h5 className="center">Select A Book To Exchange</h5>

              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons" style={{fontSize:"4rem"}}>compare_arrows</i></h2>
                <h5 className="center">Send A Trade Request</h5>

              </div>
            </div>
          </div>

        </div>
        <br /><br />
      </div>
      <footer className="page-footer teal lighten-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 ">
              <h6 className="white-text ">A FreeCodeCamp Project written by Moetez Chaabene</h6>
            </div>
          </div>
        </div>
        <div className="footer-copyright ">
          <div className="container">
            © 2018
      <a className="grey-text text-lighten-4 right" href="https://github.com/moetezch/FccBookTrading">Github</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing