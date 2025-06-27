import React from 'react'
import debounce from 'lodash/debounce'
import { useRef, useEffect } from 'react'
import axios from 'axios'

function TextArea({content, setContent, noteId, setNoteId}) {

  const isFirstLoad = useRef(true)
  const noteIdRef = useRef(noteId)
  const hasPushedURL = useRef(false)

  useEffect(() => {
    noteIdRef.current = noteId
  }, [noteId])

const autoSave = useRef(
  debounce(async (text) => {
    try {
      if (noteIdRef.current) {
        await axios.put(`http://localhost:3000/notesy/${noteIdRef.current}`, { content: text })
      } else {
        const res = await axios.post('http://localhost:3000/notesy', { content: text })
        const newId = res.data.id
        noteIdRef.current = newId
        setNoteId(newId)

        if (!hasPushedURL.current) {
          window.history.pushState({}, '', `/${newId}`)
          hasPushedURL.current = true
        }
      }
    } catch (err) {
      console.error('Auto-save failed', err)
    }
  }, 1000)
).current

useEffect(() => {
    if (!isFirstLoad.current) {
      autoSave(content)
    } else {
      isFirstLoad.current = false
    }
  }, [content])


  
  return (
    <div className='flex h-[80vh]'>
      <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>

      <div className='w-2/4 border border-neutral-400/10 p-2'>
        <textarea rows="10" 
          className='w-full h-full p-10 outline-0 text-neutral-300 max-h-19/20' placeholder='The only thing getting laid tonight is the idea on this page..' 
          value={content} onChange={(e)=> setContent(e.target.value)}>
        </textarea>
        
      </div>

      <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>
    </div>
  )
}

export default TextArea
