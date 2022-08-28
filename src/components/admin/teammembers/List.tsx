// this component is to easily edit any array of strings state variable it returns a text field to add to the list
// and a list with buttons next to it to remove or edit each item

import { useState } from 'react'
import { Button, TextInput, List, Badge } from '@mantine/core'
import {
  IconPlus,
  IconCheck,
  IconX,
  IconPencil,
  IconTrash,
} from '@tabler/icons'

const classes = {
  listItemFlex: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  mainList: {
    width: '100%',
  },
}

export const ListItems = ({ array, setArray }: any) => {
  const [input, setInput] = useState('')
  const [edit, setEdit] = useState({ isEdit: false, text: '', id: '' })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (input !== '') setArray([...array, input])
    setInput('')
  }
  const handleUpdate = (e: any) => {
    e.preventDefault()
    setArray((prev: any) => {
      if (edit.text !== '') prev.splice(edit.id, 1, edit.text)
      return [...prev]
    })
    setEdit({ isEdit: false, text: '', id: '' })
  }
  const handleDelete = (e: any, index: any) => {
    e.preventDefault()
    setArray(() => {
      if (array[index] === '') return array
      array.splice(index, 1, '')
      return [...array]
    })
    setEdit({ isEdit: false, text: '', id: '' })
    setArray(() => {
      return array.filter((item: any) => item !== '')
    })
  }

  const editItem = (index: any, text: any) => {
    setEdit({ isEdit: true, text: text, id: index })
  }

  return (
    <List style={classes.mainList}>
      {array &&
        array?.map((item: any, index: any) => {
          if (edit.isEdit && edit.id === index)
            return (
              <List.Item key={index}>
                <form
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                  onSubmit={handleUpdate}
                >
                  <TextInput
                    autoFocus
                    value={edit.text}
                    onChange={(e) => setEdit({ ...edit, text: e.target.value })}
                  />
                  <div>
                    <Button
                      variant="outline"
                      type="submit"
                      onClick={handleUpdate}
                    >
                      <IconCheck />
                    </Button>
                    <Button
                      variant="outline"
                      color="gray"
                      onClick={() => {
                        setEdit({ ...edit, isEdit: false })
                      }}
                    >
                      <IconX />
                    </Button>
                  </div>
                </form>
              </List.Item>
            )
          return (
            <List.Item key={index}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Badge size="xl">{item}</Badge>
                <div>
                  <Button
                    variant="outline"
                    size="xs"
                    radius="xl"
                    onClick={() => editItem(index, item)}
                  >
                    <IconPencil />
                  </Button>
                  <Button
                    variant="outline"
                    size="xs"
                    radius="xl"
                    color={'red'}
                    onClick={(e: any) => {
                      handleDelete(e, index)
                    }}
                  >
                    <IconTrash />
                  </Button>
                </div>
              </div>
            </List.Item>
          )
        })}
      <List.Item>
        <form style={classes.listItemFlex} onSubmit={handleSubmit}>
          <TextInput
            label="Add new item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit} variant="outline">
            <IconPlus />
          </Button>
        </form>
      </List.Item>
    </List>
  )
}
