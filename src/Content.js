

import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
        
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        } 
        window.addEventListener('scroll', handleScroll)
        console.log('abc');
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('xyz');
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key = {tab}
                    style = {type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
                {showGoToTop && (
                    <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    >
                        Go to top
                    </button>
                )}

        </div>
    )
}

export default Content

