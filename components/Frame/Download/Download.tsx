import { useEffect, useState } from 'react'

const Download: React.FC = () => {
    const [ isPhoneDrop, setIsPhoneDrop ] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPhoneDrop(true)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="download">
            <div className="download__left-tree">
                <img src="/images/main/left-tree.png" alt="Young Planet | left tree" />
            </div>
            <div className="download__right-tree">
                <img src="/images/main/right-tree.png" alt="Young Planet | right tree" />
            </div>
            <div className={`download__phone ${isPhoneDrop ? "phone-down" : ""}`}>
                <img src="/images/frame/download/phone.png" alt="Young Planet | floating phone" />
            </div>
            <div className="download__hand">
                <img src="/images/frame/download/hand.png" alt="Young Planet | floating hand" />
            </div>
        </div>
    )
}

export default Download