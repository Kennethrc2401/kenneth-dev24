"use client";

// Component to display code snippets
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


type CodeSnippetBoxProps = {
    codeSnippet: string;
    language?: string;
    fileName?: string;
};

export const CodeSnippetBox = (props: CodeSnippetBoxProps) => {
    return (
        <div>
            <div>
                <SyntaxHighlighter language={props.language} style={atomDark}>
                    {props.codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};