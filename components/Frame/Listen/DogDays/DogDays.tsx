import { useEffect, useState } from "react"

const DogDays: React.FC = () => {
    const [ isDogOut, setIsDogOut ] = useState<boolean>(false)
    const [ isPaperOut, setPaperOut ] = useState<boolean>(false)

    useEffect(() => {
        function dogInterval() {
            if (window.innerWidth >= 800) {
                setInterval(() => {
                    setIsDogOut(true)
                }, 2500)
            } else if (window.innerWidth < 800) {
                setInterval(() => {
                    setIsDogOut(true)
                }, 4500)
            }
        }

        dogInterval()
    }, [])

    useEffect(() => {
        function interval() {
            if (window.innerWidth >= 800) {
                setInterval(() => {
                    setPaperOut(true)
                }, 3500)
            } else if (window.innerWidth < 800) {
                setInterval(() => {
                    setPaperOut(true)
                }, 5500)
            }
        }

        interval()
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