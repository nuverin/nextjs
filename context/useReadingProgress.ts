import {useState, useEffect} from 'react'

export function useReadingProgress(){
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        function updateScrollCompletion(){
            const currentProgress = window.scrollY
        }
    })
}