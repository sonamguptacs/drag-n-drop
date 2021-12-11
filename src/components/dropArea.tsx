import { useState } from 'react'
import { useDrop } from 'react-dnd'

function DropArea() {
  const [value, setValue] = useState('')
  const [array, setArray] = useState<any[]>([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'sonam',
    drop: (item: any) => setValue(item.name),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }))

  const [{ ismultipleDropOver }, multipledrop] = useDrop(() => ({
    accept: 'sonam',
    drop: (item: any) => setArray((array) => [...array, item.name]),
    collect: (monitor) => ({ ismultipleDropOver: !!monitor.isOver() }),
  }))

  const removeItem = (index: number) => {
    const copy = [...array]
    setArray(copy.filter((item, idx) => idx !== index))
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '50px',
      }}
    >
      <div style={{ marginBottom: '50px' }}>
        <div
          ref={drop}
          placeholder="drop here"
          style={{
            border: !isOver ? '1px dotted grey' : '1px solid red',

            height: '30px',
          }}
        >
          {value === '' ? (
            'I accept Single Input'
          ) : (
            <div
              style={{
                backgroundColor: 'orange',
                margin: '0px 20px',
                borderRadius: '4px',
              }}
            >
              {value}
            </div>
          )}
        </div>
      </div>
      <div>
        <div
          ref={multipledrop}
          style={{
            border: !ismultipleDropOver ? '1px dotted grey' : '1px solid red',
          }}
        >
          I accept Multiple Inputs
        </div>
        {array.map((item, index) => (
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: 'skyblue',
              margin: '10px 5px',
              borderRadius: '4px',
            }}
          >
            {item}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropArea
