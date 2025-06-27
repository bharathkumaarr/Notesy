import React from 'react'
import Header from './Header'
import TextArea from './TextArea'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Landing() {
  const [content, setContent] = useState('')
  const [noteId, setNoteId] = useState(null)

  useEffect(()=>{
    const idFromUrl = window.location.pathname.split('/')[1]
    if(idFromUrl) {
      axios.get(`http://localhost:3000/notesy/${idFromUrl}`)
      .then(res=>{
        setContent(res.data.content)
        setNoteId(idFromUrl)
      })
      .catch(()=>alert('Note not found'))
    }
  }, [])

  const handleShare = async () =>{
    try {
      if (!noteId) {
        const res = await axios.post(`http://localhost:3000/notesy`, {content})
        const newId = res.data.id
        setNoteId(newId)
        window.history.pushState({}, '', `/${newId}`)
        await navigator.clipboard.writeText(`${window.location.origin}/${newId}`)
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/${noteId}`)
      }
      alert('Link copied to clipboard!')
    }
    catch (err) {
      console.error("Share error:", err); 
      alert('Error sharing note.')

    }
  }




  return (
    <div className='h-screen w-screen bg-neutral-950 text-neutral-200 font-thin'>
      <Header onShare={handleShare} />
      <TextArea 
        content={content}
        setContent={setContent}
        noteId={noteId}
        setNoteId={setNoteId} />
      <Footer />
    </div>
    
    
    
  )
}

export default Landing
