"use client";

import React, { useState } from 'react'

type Props = {
  fileName?: string;
}

const VsCodeBottomMenuBar = (props: Props) => {
  const [codeSnippetLanguage, setCodeSnippetLanguage] = useState("Plain Text" as string)

  // Get the file extension from the fileName
  // Set the language on mount
  React.useEffect(() => {
    const getFileExtension = (fileName: string): string => {
      return fileName.split('.').pop() as string
    }

    // Set the language based on the file extension
    const setLanguage = (fileName: string): void => {
      const fileExtension = getFileExtension(fileName)
      switch (fileExtension) {
        case "js":
          setCodeSnippetLanguage("JavaScript")
          break
        case "ts":
          setCodeSnippetLanguage("TypeScript")
          break
        case "tsx":
          setCodeSnippetLanguage("TypeScript React")
          break
        case "jsx":
          setCodeSnippetLanguage("JavaScript React")
          break
        case "html":
          setCodeSnippetLanguage("HTML")
          break
        case "css":
          setCodeSnippetLanguage("CSS")
          break
        case "scss":
          setCodeSnippetLanguage("SCSS")
          break
        case "json":
          setCodeSnippetLanguage("JSON")
          break
        case "md":
          setCodeSnippetLanguage("Markdown")
          break
        case "txt":
          setCodeSnippetLanguage("Plain Text")
          break
        default:
          setCodeSnippetLanguage("Plain Text")
          break
      }
    }

    if (props.fileName) {
      setLanguage(props.fileName)
    }
  }, [props.fileName, setCodeSnippetLanguage])

  
  return (
    <>
        {/* 
          Bottom Tool Strip like in VS Code
          - File Name
          - Line Number
          - Language
          - Line Ending
          - Spaces
          - Tab Size
          - Encoding
          - Line Count
          - Column Count
          - Selection Count
          - File Size
          - File Path
          - File Type

          Blue Background with white text
        */}
        <div className="mt-4 bg-blue-500 p-2 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-xs text-white font-bold">
                {props.fileName}
              </div>
              <div className="text-xs text-white mx-2">|</div>
              <div className="text-xs text-white font-bold">Line: 1, Column: 1</div>
            </div>
            <div className="flex items-center">
              <div className="text-xs text-white mx-2">
                {/* Language */}
                {codeSnippetLanguage ? codeSnippetLanguage : "Plain Text"}
              </div>
              <div className="text-xs text-white mx-2">UTF-8</div>
              <div className="text-xs text-white mx-2">LF</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default VsCodeBottomMenuBar
