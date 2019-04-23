import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>Copyright &copy; {new Date().getFullYear()} Friday Challenge. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer
