import React from 'react'
import { config } from 'config'
import documentation from './swagger.json'
import Swagger from 'components/Swagger'
import DocumentTitle from 'react-document-title'

exports.data = {
    title: 'Networks',
}

const Page = (props) => (
    <DocumentTitle title={`${props.route.page.data.title} | ${config.siteTitle}`}>
        <Swagger documentation={documentation} prefix={config.apiUrl} />
    </DocumentTitle>
)

export default Page