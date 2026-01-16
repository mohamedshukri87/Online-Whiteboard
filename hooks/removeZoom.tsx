"use client"
import React, { useState, useEffect} from 'react';

function useRemoveZoom() {
    useEffect(() => {
      const handleWheel = (e: { ctrlKey: any; metaKey: any; preventDefault: () => void; }) => {
        if (e.ctrlKey ) {
          e.preventDefault();
          return true;
        }
      };
  

  
      window.addEventListener("wheel", handleWheel, { passive: false });
    })}

export default useRemoveZoom;