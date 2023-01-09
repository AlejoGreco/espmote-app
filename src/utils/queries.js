import moment from "moment"
import { filterControlValues } from "../constants"

export const getTimeForQuery = filter => {
    let resultTime
    switch (filter){
        case filterControlValues[0].value:
            // Timestamp 1 dia atras
            resultTime = moment().subtract(1, 'd').valueOf().toString()
            return resultTime
        case filterControlValues[1].value:
            // Timestamp 1 semana atras
            resultTime = moment().subtract(1, 'w').valueOf().toString()
            return resultTime
        case filterControlValues[2].value:
            // Timestamp 1 mes atras
            resultTime = moment().subtract(1, 'M').valueOf().toString()
            return resultTime
        case filterControlValues[3].value:
            // Timestamp 3 meses atras
            resultTime = moment().subtract(3, 'M').valueOf().toString()
            return resultTime
        default:
            // Timestamp 3 dias atras
            resultTime = moment().subtract(3, 'd').valueOf().toString()
            return resultTime
    }
}