import { useEffect, useState } from "react"

const DogDays: React.FC = () => {
    const [ isDogOut, setIsDogOut ] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsDogOut(true)
        }, 4000)

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
            <div className={`dog__dog ${isDogOut ? "dog-out": ""}`}>
                <img src="/images/frame/listen/dog/dog.png" alt="Young Planet | dog" />
            </div>
            <div className="dog__door">
                <img src="/images/frame/listen/dog/door.png" alt="Young Planet | door" />
            </div>
            <div className="dog__paper">
                <img src="/images/frame/listen/dog/paper.png" alt="Young Planet | newspaper" />
            </div>
        </div>
    )
}

export default DogDays