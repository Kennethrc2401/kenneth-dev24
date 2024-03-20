
export interface CodeSnippet {
  title: string;
  fileName: string;
  description: string;
  code: string;
  language: string;
  tags?: string[];
}

export const CodeSnippetsData = [
  // Sample javascript code snippet
    {
        title: "React Syntax Highlighter Example",
        fileName: "react-syntax-highlighter-example.tsx",
        description: "Component to display code snippets",
        // Multiline string
        code: `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';`,
        language: "javascript",
        tags: ["react", "component", "syntax-highlighter"]
    },
    // Sample typescript code snippet
    {
        title: "Typescript code snippet",
        fileName: "typescript-example.ts",
        description: "Sample typescript code snippet",
        code: `const message: string = "Hello World";
console.log(message);`,
        language: "typescript",
        tags: ["typescript", "sample", "code"]
    },
    // Sample python code snippet
    {
        title: "Python code snippet",
        fileName: "python-example.py",
        description: "Sample python code snippet",
        code: `message = "Hello World"
print(message)`,
        language: "python",
        tags: ["python", "sample", "code"]
    },
    // Sample html code snippet
    {
        title: "HTML code snippet",
        fileName: "html-example.html",
        description: "Sample html code snippet",
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
        language: "html",
        tags: ["html", "sample", "code"]
    },
    // Sample css code snippet
    {
        title: "CSS code snippet",
        fileName: "css-example.css",
        description: "Sample css code snippet",
        code: `body { background-color: lightblue; }`,
        language: "css",
        tags: ["css", "sample", "code"]
    },
    
]