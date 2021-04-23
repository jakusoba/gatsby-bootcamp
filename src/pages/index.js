import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
    return (
      <Layout>
        <Head title="Home" />
        <h1>Hey there!</h1>
          <h2>I'm Jane, a Software Developer</h2>
        
      </Layout>
    )
    
}

export default IndexPage

/**Moved from line 14
<p>Need a Developer? <Link to="/contact">Contact me.</Link></p>**/