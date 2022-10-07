import React from 'react'
import { useParams } from 'react-router-dom'
import PageFrame from '../components/PageFrame'

const NodeDetails = () => {
    const { id } = useParams()
    return (
        <PageFrame>
            <h2>{`Node ${id} details`}</h2>
        </PageFrame>
    )
}

export default NodeDetails