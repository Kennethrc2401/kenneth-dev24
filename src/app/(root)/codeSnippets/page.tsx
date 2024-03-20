"use client";

import NavbarV2 from "@/components/navigation/NavbarV2";
import Footer from "@/components/footer"
import {CodeSnippetBox} from "@/components/codeSnippetBox/CodeSnippetBox";
import {CodeSnippetsData} from "@/utils/codeSnippetsData";
import MacMenuBar from "@/components/menuBars/macMenuBar";
import VsCodeBottomMenuBar from "@/components/menuBars/vsCodeBottomMenuBar";
import MacDock from "@/components/menuBars/macDock";


const largeScreenStyles = {
  CodeSnippetContainer: "closeButton w-3 h-3 bg-red-500 rounded-full hover:bg-red-600",
  CodeSnippetBoxTitle: 'CodeSnippetBoxTitle text-2xl font-bold text-gray-800',
}

const smallScreenStyles = {
}

const menuIconsHoverStyle = {
  closeButton: 'closeButton w-3 h-3 bg-red-500 rounded-full hover:bg-red-600',
  minimizeButton: 'minimizeButton w-3 h-3 bg-yellow-500 rounded-full mx-1 hover:bg-yellow-600',
  fullscreenButton: 'fullscreenButton w-3 h-3 bg-green-500 rounded-full hover:bg-green-600',
}

const Props = {}

const CodeSnippetsPage = () => {
  return (
    <div
      // Background image will be like that of Mac OS Desktop Background
      // Needs to be beautiful and not too distracting
      // Maybe a blurred image of a city or a beach or desert or night lights
      // style={
      //   {
      //     backgroundImage: 'url("https://images.unsplash.com/photo-1634176763943-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MjIwNzIw&ixlib=rb-1.2.1&q=80&w=400")',
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat',
      //   }
      // }
      
    >
      <div>
        <NavbarV2 />
      </div>
        
      {/* Visual Studio Look Alike without the code snippet component i created */}
      {/* Iterate over each item in the imported codeSnippetsData file */}
      <div 
        className="px-4 py-20 w-full h-full"
      >
        
        <div className="px-4 py-20 w-full h-full">
          <div
          >
          <MacMenuBar />
        </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div 
                  className={`${menuIconsHoverStyle.closeButton}`}
                  // Onclick event just show the close button without any functionality
                  // Also draw in x on the close button
                  onClick={() => {
                    console.log('Close button clicked')
                  }}
                ></div>
                <div 
                  className={menuIconsHoverStyle.minimizeButton}
                  // Onclick event just show the minimize button without any functionality
                  // Also draw in - on the minimize button
                  onClick={() => {
                    console.log('Minimize button clicked')
                  }}
                ></div>
                <div 
                  className={menuIconsHoverStyle.fullscreenButton}
                  // Onclick event just show the fullscreen button without any functionality
                  // Also draw in + on the fullscreen button
                  onClick={() => {
                    console.log('Fullscreen button clicked')
                  }}
                  ></div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
              </div>
            </div>
            <div className="mt-4">
              {/* <div className="text-xs font-mono text-gray-500">index.js</div>
              <div className="text-sm font-mono">console.log(&apos;Hello World&apos;)</div> */}
              {CodeSnippetsData.map((codeSnippet, index) => {
                
                return (
                  <div 
                    key={index}
                    className="mt-4"
                  >
                    <div className="text-xs font-mono text-gray-500">{codeSnippet.fileName}</div>
                    {/* <div className="text-sm font-mono">{codeSnippet.code}</div> */}
                    <CodeSnippetBox 
                      codeSnippet={codeSnippet.code}
                    />
                    <VsCodeBottomMenuBar
                      fileName={codeSnippet.fileName}
                    />
                  </div>
                  
                )
              })}
            </div>
          </div>
          
          {/* <div>
            <VsCodeBottomMenuBar />
          </div> */}

          <div>
            <MacDock />
          </div>
        </div>
        
      </div>

      <div
        className="w-full h-20 bg-gray-500"
      >
        <Footer />
      </div>
    </div>
  )
}

export default CodeSnippetsPage;
