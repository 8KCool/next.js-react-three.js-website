import { ReactNode, useState } from 'react'
import { FadeInWhenVisible } from '../FadeInWhenVisible'
import { Title } from '../Title'
// import { Page, Text, View, Document, StyleSheet, Font, PDFViewer  } from '@react-pdf/renderer';
// import TriganWhitePaperDAO from './document';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

// import TriganWhitePaper from '../../../assets/TriganWhitePaper.pdf';
// import Driver from 'driver.js';

interface WhitepaperSectionProps {
  children?: ReactNode
}

export const WhitepaperSection: React.FC<WhitepaperSectionProps> = () => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  // const [file, setFile] = useState('');

  // useEffect(() => {
  //   setFile(typeof global?.window !== 'undefined' ? global?.window.location.origin + '/file/TriganWhitePaper.pdf' : '');
  //   console.log(global?.window.location.origin)
  // }, [global?.window]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const navigateOnDocument = (flow: string) => {
    let page = 1
    if (flow === 'next') {
      page = pageNumber < numPages ? pageNumber + 1 : pageNumber
    } else {
      page = pageNumber > 1 ? pageNumber - 1 : pageNumber
    }
    setPageNumber(page)
  }

  return (
    <section id="whitepaper" className="pb-4">
      <div className="py-5">
        <Title title="Whitepaper Title Here" />
      </div>

      <div className="mx-auto max-w-5xl py-5">
        <FadeInWhenVisible>
          <div className="flex">
            {/* <div className="flex flex-shrink m-4 p-4" style={{ borderRight: `1px solid`}}>
              <div
                className="pl-4"
                onClick={() => {
                  const driver = window && new window.Driver();
                  driver.highlight('wp-title-abstract')
                }}
              >
                - Abstract
                <div
                  className="pl-6"
                  onClick={() => {
                    // driver.highlight('wp-subtitle-aims')
                  }}
                >
                  - Aims
                </div>
                <div
                  className="pl-6"
                  onClick={() => {
                    // driver.highlight('wp-content-aims')
                  }}
                >
                  - Content
                </div>
              </div>
            </div> */}
            <div className="m-4 flex flex-1 justify-center p-4">
              {/* <TriganWhitePaperDAO /> */}
              {typeof global?.window !== 'undefined' && (
                <div>
                  <Document
                    file={window.location.origin + '/file/TriganWhitePaper.pdf'}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page
                      className="PDFPage PDFPageOne"
                      key={`page_${pageNumber}`}
                      pageNumber={pageNumber}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </Document>
                  <p className="flex justify-center">
                    <button
                      className="btn m-2 rounded border py-2 px-4 font-bold text-white"
                      onClick={() => navigateOnDocument('back')}
                    >
                      Back
                    </button>
                    <div className="m-4">
                      Page {pageNumber} of {numPages}
                    </div>
                    <button
                      className="btn m-2 rounded border py-2 px-4 font-bold text-white"
                      onClick={() => navigateOnDocument('next')}
                    >
                      Next
                    </button>
                  </p>
                  <p className="underlined flex justify-center">
                    <a
                      href="/file/TriganWhitePaper.pdf"
                      target="_blank"
                      download
                    >
                      Download file here
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
