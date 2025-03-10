import React from 'react'

function Loading() {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    )
}

export default Loading