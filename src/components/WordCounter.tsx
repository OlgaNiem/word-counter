import { useState, ChangeEvent } from 'react'

const WordCounter = () => {
  const [text, setText] = useState('')
  const words = text.trim().length === 0 ? [] : text.trim().split(/\s+/)
  const symbols = text.length
  const symbolsWithoutSpaces = text.split('').filter((char) => char !== ' ').length;


  const textChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-blue-300 rounded-md ">
      <h1 className="text-2xl font-bold mb-4 text-center">Word Counter</h1>
      <textarea
        className="w-full h-40 p-2 mb-4 resize-none bg-white rounded"
        placeholder="Write your text here..."
        value={text}
        onChange={textChange}
      />
      <div className="mb-4">
        <p className="text-lg"> Words {' '}
          <span className="font-bold text-blue-600">{words.length}</span>
        </p>
        <p className="text-lg">Characters {' '}
          <span className="font-bold text-green-600">{symbols}</span>
        </p>
        <p className="text-lg">Characters without spaces {' '}
          <span className="font-bold text-red-600">{symbolsWithoutSpaces}</span>
        </p>
      </div>

    </div>
  )
}

export default WordCounter
