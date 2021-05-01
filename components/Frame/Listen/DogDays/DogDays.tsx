import { useEffect, useState } from "react"

const DogDays: React.FC = () => {
    const [ isDogOut, setIsDogOut ] = useState<boolean>(false)
    const [ isPaperOut, setPaperOut ] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsDogOut(true)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setPaperOut(true)
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="dog">
            <div className="dog__left-tree">
                <img src="/images/main/left-tree.png" alt="Young Planet | left tree" />
            </div>
            <div className="dog__right-tree">
                <img src="/images/main/right-tree.png" alt="Young Planet | right tree" />
            </div>
            <div className={`dog__dog ${isDogOut ? "dog-out": ""} ${isPaperOut ? "dog-back" : ""}`}>
                <img src="/images/frame/listen/dog/dog.png" alt="Young Planet | dog" />
            </div>
            <div className="dog__door">
                <img src="/images/frame/listen/dog/door.png" alt="Young Planet | door" />
            </div>
            <div className={`dog__paper ${isPaperOut ? "paper-out" : ""}`}>
                <img src="/images/frame/listen/dog/paper.png" alt="Young Planet | newspaper" />
            </div>
        </div>
    )
}

export default DogDays