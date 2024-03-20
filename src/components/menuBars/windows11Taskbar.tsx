// Windows 11 Taskbar Component
// This will be a mock of the Windows 11 Taskbar
// tht I will use to create a windows-like experience
// on my CodeSnippets page for my website.
// Styles will be in this file too.

import React from 'react';
import './Windows11Taskbar.css'; // Import CSS file for styling

const Windows11Taskbar: React.FC = () => {
    return (
        <div className="windows11-taskbar">
            {/* Start button */}
            <div className="start-button">
                <img src="windows_icon.png" alt="Windows Icon" />
                <div className="start-label">Start</div>
            </div>
            {/* Taskbar items */}
            <div className="taskbar-items">
                {/* Replace the placeholders with actual icons and labels */}
                <div className="taskbar-item">
                    <img src="placeholder_icon.png" alt="Placeholder Icon" />
                    <div className="item-label">Item 1</div>
                </div>
                <div className="taskbar-item">
                    <img src="placeholder_icon.png" alt="Placeholder Icon" />
                    <div className="item-label">Item 2</div>
                </div>
                <div className="taskbar-item">
                    <img src="placeholder_icon.png" alt="Placeholder Icon" />
                    <div className="item-label">Item 3</div>
                </div>
                {/* Add more taskbar items as needed */}
            </div>
            {/* System tray icons */}
            <div className="system-tray-icons">
                {/* Add system tray icons here */}

                {/* Onedrive */}
                <div className="system-tray-icon">
                    <img src="onedrive_icon.png" alt="Onedrive Icon" />
                    <div className="onedrive-label">Onedrive</div>
                </div>

                {/* Volume icon */}
                <div className="system-tray-icon">
                    <img src="volume_icon.png" alt="Volume Icon" />

                    {/* Volume slider */}
                    <div className="volume-slider">
                        {/* Volume slider goes here */}
                        <div className="volume-slider-track"></div>
                        {/* Volume slider thumb */}
                        <div className="volume-slider-thumb"></div>

                        {/* Volume percentage */}
                        <div className="volume-percentage">100%</div>
                    </div>

                    {/* Volume label */}
                    <div className="volume-label">Volume</div>
                </div>

                {/* Network icon */}
                <div className="system-tray-icon">
                    <img src="network_icon.png" alt="Network Icon" />
                    <div className="network-label">Network</div>

                    {/* Network status */}
                    <div className="network-status">Connected</div>

                    {/* Network speed */}
                    <div className="network-speed">100 Mbps</div>
                </div>

                {/* Battery icon */}
                <div className="system-tray-icon">
                    <img src="battery_icon.png" alt="Battery Icon" />
                    <div className="battery-label">Battery</div>

                    {/* Battery status */}
                    <div className="battery-status">Charging</div>

                    {/* Battery percentage */}
                    <div className="battery-percentage">100%</div>
                </div>

                {/* Clock */}
                <div className="system-tray-clock">
                    <div className="clock-time">12:00 PM</div>
                    <div className="clock-date">Monday, January 1, 2023</div>
                </div>

                {/* Add more system tray icons as needed */}
            </div>
        </div>
    );
};

export default Windows11Taskbar;
