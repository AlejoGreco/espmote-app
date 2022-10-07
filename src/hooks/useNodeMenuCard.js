import { useNavigate } from "react-router-dom"

export const useNodeMenuCard = handleClose => {
    const navigate = useNavigate()

    return {
        openNodeDetail: nodeId => { navigate(`/node/${nodeId}`) },
        handleItemClick: callback => {
            handleClose()
            return callback
        }
    }
}