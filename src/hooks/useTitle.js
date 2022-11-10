import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Personal Fitness Trainer`
    }, [title])
}

export default useTitle