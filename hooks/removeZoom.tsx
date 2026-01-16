"use client"
import React, { useState, useEffect} from 'react';

function RemoveZoom() {
    useEffect(() => {
      const handleWheel = (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
        }
      };
  
      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey)) {
          e.preventDefault();
        }
      };
  
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown, { passive: false });
  
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return null;
  }

export default RemoveZoom;