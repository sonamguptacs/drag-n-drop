import ListItem from './listItem'

const data = [
  { id: '1', name: 'First' },
  { id: '2', name: 'Second' },
  { id: '3', name: 'Third' },
  { id: '4', name: 'Fourth' },
  { id: '5', name: 'Fifth' },
]
function List() {
  return (
    <div style={{ display: 'inline-flex' }}>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {data.map((item: any) => {
          return <ListItem item={item} />
        })}
      </ul>
    </div>
  )
}

export default List
