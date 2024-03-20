import React, { useState } from 'react'
import { AppleIcon } from 'lucide-react'
import './macMenuBarStyles.css'

const MacToolbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [menuButtonSelected, setMenuButtonSelected ] = useState(false);

    const toggleMenu = (menuName: string, event: React.MouseEvent) => {
        const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setShowMenu(showMenu === menuName ? null : menuName);
    };

    return (
        <div 
            // Will need z index above all else and bg will be full opacity
            className="macMenuBar w-full h-8 bg-gray-800 flex items-center justify-between px-4"
        >
            <div className="macMenuBarItems">
                <div className="macMenuBarItem">
                    {/* Apple Logo */}
                    <div 
                        className="appleLogo"
                        onClick={(e) => toggleMenu('appleMenu', e)}
                    >
                        <AppleIcon 
                            size={20} 
                            onClick={() => {
                                setMenuButtonSelected(!menuButtonSelected)
                            }}
                        />
                    </div>
                    
                    {/* Apple Logo Menu */}
                    {showMenu === 'appleMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>About Visual Studio Code</div>
                            <div>Preferences</div>
                            <div>Services</div>
                            <div>Hide Visual Studio Code</div>
                            <div>Hide Others</div>
                            <div>Show All</div>
                            <div>Quit Visual Studio Code</div>
                        </div>
                    )}
                </div>
                {/* File menu items */}
                <div className="macMenuBarItem">
                    {/* File Menu */}
                    <div 
                    // Icon or item will have a bluish box around it when selected
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('fileMenu', e)}                           
                    >
                        File
                    </div>
                    {/* File Menu Dropdown */}
                    {showMenu === 'fileMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>New File</div>
                            <div>New Window</div>
                            <div>Open File</div>
                            <div>Open Folder</div>
                            <div>Open Workspace</div>
                            <div>Open Recent</div>
                            <div>Close Workspace</div>
                            <div>Close Window</div>
                            <div>Save</div>
                            <div>Save As</div>
                            <div>Save All</div>
                            <div>Auto Save</div>
                            <div>Preferences</div>
                            <div>Revert File</div>
                            <div>Exit</div>
                        </div>
                    )}
                </div>
                {/* Edit menu items */}
                <div className="macMenuBarItem">
                    {/* Edit Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('editMenu', e)}
                    >
                        Edit
                    </div>
                    {/* Edit Menu Dropdown */}
                    {showMenu === 'editMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Undo</div>
                            <div>Redo</div>
                            <div>Cut</div>
                            <div>Copy</div>
                            <div>Paste</div>
                        </div>
                    )}
                </div>
                {/* Selection menu items */}
                <div className="macMenuBarItem">
                    {/* Selection Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('selectionMenu', e)}
                    >
                        Selection
                    </div>
                    {/* Selection Menu Dropdown */}
                    {showMenu === 'selectionMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Select All</div>
                            <div>Expand Selection</div>
                            <div>Shrink Selection</div>
                            <div>Column Selection Mode
                            </div>
                        </div>
                    )}
                </div>
                {/* View menu items */}
                <div className="macMenuBarItem">
                    {/* View Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('viewMenu', e)}
                    >
                        View
                    </div>
                    {/* View Menu Dropdown */}
                    {showMenu === 'viewMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Appearance</div>
                            <div>Editor Layout</div>
                            <div>Editor Group Layout</div>
                            <div>Zoom In</div>
                            <div>Zoom Out</div>
                            <div>Reset Zoom</div>
                            <div>Toggle Full Screen</div>
                            <div>Toggle Zen Mode</div>
                            <div>Toggle Menu Bar</div>
                            <div>Toggle Side Bar</div>
                            <div>Toggle Panel</div>
                            <div>Toggle Status Bar</div>
                            <div>Toggle Activity Bar</div>
                        </div>
                    )}
                </div>
                {/* Go menu items */}
                <div className="macMenuBarItem">
                    {/* Go Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('goMenu', e)}
                    >
                        Go
                    </div>
                    {/* Go Menu Dropdown */}
                    {showMenu === 'goMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Back</div>
                            <div>Forward</div>
                            <div>Switch Editor</div>
                            <div>Switch Group</div>
                            <div>Next Editor</div>
                            <div>Previous Editor</div>
                            <div>Next Used Editor</div>
                            <div>Previous Used Editor</div>
                            <div>Next Editor In Group</div>
                            <div>Previous Editor In Group</div>
                            <div>First Editor In Group</div>
                            <div>Last Editor In Group</div>
                            <div>Go to File...</div>
                            <div>Go to Symbol...</div>
                            <div>Go to Line...</div>
                            <div>Go to Bracket</div>
                            <div>Go to Next Problem</div>
                            <div>Go to Previous Problem</div>
                            <div>Go to Submenu</div>
                        </div>
                    )}
                </div>
                {/* Run menu items */}
                <div className="macMenuBarItem">
                    {/* Run Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('runMenu', e)}
                    >
                        Run
                    </div>
                    {/* Run Menu Dropdown */}
                    {showMenu === 'runMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Start Debugging</div>
                            <div>Run Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                            <div>Conditional Breakpoint...</div>
                            <div>Logpoint...</div>
                            <div>New Breakpoint</div>
                            <div>Run to Cursor</div>
                            <div>Add Configuration...</div>
                            <div>Open Configurations</div>
                            <div>Select and Start Debugging</div>
                            <div>Start Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                            <div>Conditional Breakpoint...</div>
                            <div>Logpoint...</div>
                            <div>New Breakpoint</div>
                            <div>Run to Cursor</div>
                            <div>Add Configuration...</div>
                            <div>Open Configurations</div>
                            <div>Select and Start Debugging</div>
                            <div>Start Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                            <div>Conditional Breakpoint...</div>
                        </div>
                    )}
                </div>
                {/* Terminal menu items */}
                <div className="macMenuBarItem">
                    {/* Terminal Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('terminalMenu', e)}
                    >
                        Terminal
                    </div>
                    {/* Terminal Menu Dropdown */}
                    {showMenu === 'terminalMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>New Terminal</div>
                            <div>Split Terminal</div>
                            <div>Run Task</div>
                            <div>Run Build Task</div>
                            <div>Run Test Task</div>
                            <div>Run Run Task</div>
                            <div>Run Start Task</div>
                            <div>Run Configure Task</div>
                            <div>Run Show Output</div>
                            <div>Run Hide Output</div>
                            <div>Run Toggle Output</div>
                            <div>Run Select Default Shell</div>
                            <div>Run Run Active File</div>
                            <div>Run Run Active File Without Debugging</div>
                            <div>Run Run Selected Text</div>
                            <div>Run Run Selected Text Without Debugging</div>
                            <div>Run Run Last Task</div>
                            <div>Run Restart Running
                            </div>
                        </div>
                    )}
                </div>
                {/* Debug menu items */}
                <div className="macMenuBarItem">
                    {/* Debug Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('debugMenu', e)}
                    >
                        Debug
                    </div>
                    {/* Debug Menu Dropdown */}
                    {showMenu === 'debugMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Start Debugging</div>
                            <div>Run Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                            <div>Conditional Breakpoint...</div>
                            <div>Logpoint...</div>
                            <div>New Breakpoint</div>
                            <div>Run to Cursor</div>
                            <div>Add Configuration...</div>
                            <div>Open Configurations</div>
                            <div>Select and Start Debugging</div>
                            <div>Start Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                            <div>Conditional Breakpoint...</div>
                            <div>Logpoint...</div>
                            <div>New Breakpoint</div>
                            <div>Run to Cursor</div>
                            <div>Add Configuration...</div>
                            <div>Open Configurations</div>
                            <div>Select and Start Debugging</div>
                            <div>Start Without Debugging</div>
                            <div>Stop Debugging</div>
                            <div>Restart Debugging</div>
                            <div>Step Over</div>
                            <div>Step Into</div>
                            <div>Step Out</div>
                            <div>Continue</div>
                            <div>Toggle Breakpoint</div>
                        </div>
                    )}
                </div>
                {/* Help menu Items */}
                <div className="macMenuBarItem">
                    {/* Help Menu */}
                    <div 
                        className="menuTrigger"
                        onClick={(e) => toggleMenu('helpMenu', e)}
                    >
                        Help
                    </div>
                    {/* Help Menu Dropdown */}
                    {showMenu === 'helpMenu' && (
                        <div 
                            className='flex flex-col items-start justify-start w-40 h-auto shadow-md p-2 absolute z-50'
                            style={{ 
                                top: menuPosition.top, 
                                left: menuPosition.left,
                                backgroundColor: '#fff'
                            }}
                            onClick={() => setShowMenu(null)}
                        >
                            <div>Documentation</div>
                            <div>Release Notes</div>
                            <div>Introductory Videos</div>
                            <div>Tips and Tricks</div>
                            <div>Join Community</div>
                            <div>Report Issue</div>
                            <div>View License</div>
                            <div>Privacy Statement</div>
                            <div>Keyboard Shortcuts Reference</div>
                            <div>Check for Updates</div>
                            <div>Install Additional Debuggers</div>
                            <div>Install Extension</div>
                            <div>Install Keymap</div>
                            <div>Toggle Developer Tools</div>
                            <div>Toggle Shared Process</div>
                            <div>Toggle Window Process</div>
                            <div>Toggle Window Process</div>
                        </div>
                    )}
                </div>
                {/* Repeat the same pattern for other menu items */}
            </div>

            {/* Right Side of Menu Bar */}
            <div
                className="rightSide"
            >
                {/* Time */}
                <div className="time">
                    12:00 PM
                </div>
                {/* Wifi */}
                <div className="wifi">
                    <div className="wifiIcon"></div>
                </div>
                {/* Battery */}
                <div className="battery">
                    <div className="batteryIcon"></div>
                </div>
                {/* Date */}
                <div className="date">
                    12/25/2021
                </div>
            </div>
            
        </div>
    );
};

export default MacToolbar;
