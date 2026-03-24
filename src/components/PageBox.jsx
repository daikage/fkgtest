import React from 'react'

export default function PageBox({ children }) {
  return (
    // Outer container handles the layout and centering
    <div className="mx-auto w-full max-w-[1600px] px-5 md:px-4 pt-24 pb-10">
      {/* Inner container: 
          1. Removed 'page-card' class to strip default borders/backgrounds.
          2. Kept 'p-4 md:p-6 lg:p-8' for internal spacing.
          3. Kept 'space-y-6' for vertical spacing between children.
      */}
      <div className="bg-transparent border-none shadow-none p-4 md:p-6 lg:p-8 space-y-6">
        {children}
      </div>
    </div>
  )
}