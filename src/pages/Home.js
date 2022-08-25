import React from 'react'
import PageFrame from '../components/PageFrame'
import FormNode from '../components/FormNode'
import ListNodeContainer from '../components/ListNodeContainer'

const Home = () => {

  return (
    <PageFrame>
      <h2>Home</h2>
      <ListNodeContainer />
      <FormNode />
    </PageFrame>
  )
}

export default Home