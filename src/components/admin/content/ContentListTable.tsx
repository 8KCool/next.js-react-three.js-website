import {
  Box,
  Button,
  Loader,
  Modal,
  Table,
  TypographyStylesProvider,
} from '@mantine/core'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

export interface DynamicContent {
  id?: string
  key?: string
  content: {
    name: string
    description: string
  }
}

const htmlDecode = (content: string) => {
  let e = document.createElement('div')
  e.innerHTML = content
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue
}

export const ContentListTable = ({
  dynamicContents,
  fetching,
}: {
  dynamicContents: DynamicContent[]
  fetching: boolean
}) => {
  const [opened, setOpened] = useState(false)
  const [content, setContent] = useState<DynamicContent>()

  const contentModal = content && (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="90%
      "
      title={content.content.name}
    >
      <TypographyStylesProvider>
        {
          <div
            dangerouslySetInnerHTML={{ __html: content.content.description }}
          />
        }
      </TypographyStylesProvider>
    </Modal>
  )
  // console.log(content)

  if (fetching)
    return (
      <main
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Loader />
      </main>
    )
  return dynamicContents.length > 0 ? (
    <>
      <Table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {dynamicContents.map((dynamicContent: DynamicContent) => (
            <tr key={dynamicContent.id}>
              <td>{dynamicContent.key}</td>
              <td>{dynamicContent.content.name}</td>
              <td>
                {
                  <Button
                    variant="outline"
                    onClick={() => {
                      setContent(dynamicContent)
                      setOpened(true)
                    }}
                  >
                    <FaEye />
                  </Button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {contentModal}
    </>
  ) : (
    <div>No dynamic content found</div>
  )
}
