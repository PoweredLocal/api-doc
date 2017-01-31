import React from 'react'
import { config } from 'config'
import documentation from './swagger.json'
import Swagger from 'components/Swagger'
import DocumentTitle from 'react-document-title'

exports.data = {
    title: 'Visitors',
}

const Page = React.createClass({
    render () {
        const page = this.props.route.page

        return (
            <DocumentTitle title={`${page.data.title} | ${config.siteTitle}`}>
                <Swagger documentation={documentation} prefix={config.apiUrl} />
            </DocumentTitle>
        )
    },
})

export default Page