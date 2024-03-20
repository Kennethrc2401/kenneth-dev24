"use client";

import Image from 'next/image'

import IOS_Finder_Icon from '@/components/menuBars/macUiAssets/IOS_Finder_Icon.jpg'
import Mac_Safari_Icon from '@/components/menuBars/macUiAssets/Mac_Safari_Icon.png'
import Mac_Notes_Icon from '@/components/menuBars/macUiAssets/Mac_Notes_Icon.jpg'
import itunes_13_el_capitan_itunes_icon_thumbnail from '@/components/menuBars/macUiAssets/itunes-13-el-capitan-itunes-icon-thumbnail.jpg'
import imgbin_mac_app_store_apple_computer_icons_apple_bA1zcs2Leha9LiiNHZhaTKFRT from '@/components/menuBars/macUiAssets/imgbin-mac-app-store-apple-computer-icons-apple-bA1zcs2Leha9LiiNHZhaTKFRT.jpg'
import macos_app_icons_system_preferences_png_icon from '@/components/menuBars/macUiAssets/macos-app-icons-system-preferences-png-icon.jpg'
import png_transparent_microsoft_visual_studio_code_alt_macos_bigsur_icon_thumbnail from '@/components/menuBars/macUiAssets/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png'

type Props = {}

const MacDock = (props: Props) => {
  return (
    <div>
        {/* MAC OS Desktop Dock / TaskBar */}
        <div className="flex justify-center items-center w-full h-16 bg-gray-800">
          <div className="flex justify-between items-center w-1/2">
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={IOS_Finder_Icon} alt="finder" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={Mac_Safari_Icon} alt="safari" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={Mac_Notes_Icon} alt="notes" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={itunes_13_el_capitan_itunes_icon_thumbnail} alt="itunes" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={imgbin_mac_app_store_apple_computer_icons_apple_bA1zcs2Leha9LiiNHZhaTKFRT} alt="app-store" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={macos_app_icons_system_preferences_png_icon} alt="system-preferences" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
              <Image src={png_transparent_microsoft_visual_studio_code_alt_macos_bigsur_icon_thumbnail} alt="vs-code" />
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default MacDock