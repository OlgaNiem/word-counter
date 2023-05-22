import { useState, ChangeEvent } from 'react'

const WordCounter = () => {
  const [text, setText] = useState('')
  const words = text.trim().length === 0 ? [] : text.trim().split(/\s+/)
  const characters = text.length
  const charactersWithoutSpaces = text.replace(/\s+/g, '').length

  const textChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg ">
      <h1 className="text-2xl font-bold mb-4 text-center">Word Counter</h1>
      <textarea
        className="w-full h-40 p-2 mb-4 resize-none bg-white rounded"
        placeholder="Enter text..."
        value={text}
        onChange={textChange}
      />
      <div className="mb-4">
        <p>
          Words: <span className="font-bold">{words.length}</span>
        </p>
        <p>
          Characters: <span className="font-bold">{characters}</span>
        </p>
        <p>
          Characters without spaces:{' '}
          <span className="font-bold">{charactersWithoutSpaces}</span>
        </p>
      </div>
    </div>
  )
}

export default WordCounter
