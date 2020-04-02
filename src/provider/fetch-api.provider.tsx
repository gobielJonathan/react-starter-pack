import React, { useState } from 'react'
import _axios from '../services/_axios'

type Callback = (...args: any[]) => void
type Service = () => Promise<any>

interface IFetchAPI {
    fetch(
        service : Service,
        success : Callback,
        error : Callback
    ): void
}

export const FetchAPIContext = React.createContext({
    ...{} as IFetchAPI
})

const FetchAPIProvider : React.FC = props => {
    const [loading, setLoading] = useState(false)

    function fetch(
        service : Service,
        success : Callback,
        error : Callback
    ) {
        setLoading(true)
        service()
            .then(
                res => success(res),
                err => error(err)
            )
            .catch(err => error(err))
            .finally(() => setLoading(false))
    }

    return (
        <FetchAPIContext.Provider value={{
            fetch
        }}>
            {loading && <p>Loading ....</p>}
            {props.children}
        </FetchAPIContext.Provider>
    )
}
export default FetchAPIProvider