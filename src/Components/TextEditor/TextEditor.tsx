import React, { useEffect } from 'react'
import './summernote.css'
import './bootstrap.css'

type TextEditorProps = {
  edit: boolean
  isNew: boolean
  html: string
  setTextEditor?: React.Dispatch<React.SetStateAction<string>>
}

const TextEditor: React.FC<TextEditorProps> = ({
  edit,
  isNew,
  html,
  setTextEditor,
}) => {
  useEffect(() => {
    const selector = isNew ? '.add' : '.rte'
    if (edit) {
      //@ts-ignore
      initializeSummernote(selector, setTextEditor)
    } else {
      displayContent(selector, html)
    }

    return () => {
      // Destroy summernote on component unmount
      //@ts-ignore
      $(selector).summernote('destroy')
    }
  }, [edit, isNew, html, setTextEditor])

  const initializeSummernote = (
    selector: string,
    OnSave: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    //@ts-ignore
    $(selector).summernote({
      height: 600,
      dialogsInBody: true,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic']],
        ['fontname', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['codeview', 'help']],
      ],
      callbacks: {
        onChange: (contents: any) => {
          OnSave(contents)
        },
      },
    })
  }

  const displayContent = (selector: string, content: string) => {
    //@ts-ignore
    $(selector).summernote('code', content || '')
  }

  return (
    <div>
      {isNew ? <div className="add"></div> : <div className="rte"></div>}
    </div>
  )
}

export default TextEditor
