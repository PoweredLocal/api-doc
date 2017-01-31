import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { config } from 'config'
import find from 'lodash/find'

// Import styles.
import 'css/paper.min.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
      const childPages = config.docPages.map((p) => {
          const page = find(this.props.route.pages, (_p) => (_p.path === p))

          return {
              title: page.data.title,
              path: page.path,
          }
      })

      const docOptions = childPages.map((child) =>
          <option
              key={prefixLink(child.path)}
              value={prefixLink(child.path)}
          >
              {child.title}
          </option>

      )

      const docPages = childPages.map((child) => {
          const isActive = prefixLink(child.path) === this.props.location.pathname

          return (
                  <Link
                      key={child.path}
                      to={prefixLink(child.path)}
                      className="list-group-item"
                  >
                      {isActive ? <strong>{child.title}</strong> : child.title}
                  </Link>
          )
      })


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                    <Link className="logo" to={prefixLink('/')}>
                        <h4 style={{color: '#58ddb7'}}><strong>{config.siteTitle}</strong></h4>
                    </Link>

                    <div className="list-group" style={{marginTop: '20px'}}>
                        {docPages}
                    </div>
                </div>

                <div className="col-md-9" style={{paddingTop: '50px'}}>
                    { this.props.children }
                </div>

                <footer className="footer col-md-12">
                    2017 © PoweredLocal. Made in Melbourne. Powered by GatsbyJs.
                </footer>

            </div>

        </div>)
  },
})
