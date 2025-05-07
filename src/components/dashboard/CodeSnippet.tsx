import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '../ui/dialog'; // Ensure this path is correct for your Shadcn UI setup
import { Button } from '@/components/ui/button'; // Ensure this path is correct

// Import SyntaxHighlighter and a style (e.g., dracula)
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style you like

const CodeSnippet = ({ code, language = "python", title = "Algo Code Snippet" }) => {
    const [codeSnippet, setCodeSnippet] = useState(code);

    useEffect(() => {
        setCodeSnippet(code);
    }, [code]);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="default" size="sm">Show Code</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] p-0 data-[state=open]:max-h-[90vh] data-[state=open]:flex data-[state=open]:flex-col">
                {/* Removed DialogContent padding, will add to specific sections */}
                <DialogTitle className="p-6 pb-2 border-b"> {/* Added padding and border to title */}
                    {title}
                </DialogTitle>
                <div className="flex-grow overflow-y-auto p-1"> {/* Wrapper for highlighter to control padding and scrolling */}
                    <SyntaxHighlighter
                        language={language}
                        style={dracula} // Apply the chosen style
                        customStyle={{
                            margin: 0, // Remove default margin from SyntaxHighlighter
                            padding: '1rem', // Internal padding for the code block
                            borderRadius: '0px', // No border radius if it's filling the space
                            // The maxHeight and overflow will be handled by the parent div
                            // so the scrollbar appears on the div, not inside the code block's padding
                            fontSize: '0.875rem', // text-sm
                            backgroundColor: dracula.hljs ? dracula.hljs.background : '#282a36', // Ensure bg matches theme
                        }}
                        showLineNumbers // Optional: shows line numbers
                        wrapLines={true} // Optional: wraps long lines
                        lineNumberStyle={{ color: '#6272a4', minWidth: '2.25em' }} // Style for line numbers
                    >
                        {String(codeSnippet || '')}
                    </SyntaxHighlighter>
                </div>
                <DialogClose className="p-4 pt-2 border-t"> {/* Added padding and border to close area */}
                    <Button variant="outline">Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default CodeSnippet;