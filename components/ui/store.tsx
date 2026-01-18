// store.ts
import { create } from 'zustand'

interface ZoomState {
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  maximumZoom: () => void;
  minimumZoom: () => void;


}

export const useZoomStore = create<ZoomState>()((set) => ({
  zoom: 1,
  increaseZoom: () => set((state: { zoom: number; }) => ({ zoom: (state.zoom < 5 ) ? state.zoom * 1.1 : 5 })), 
  decreaseZoom: () => set((state: { zoom: number; }) => ({ zoom: (state.zoom > 0.899) ?  state.zoom * 0.9  : 0.899})), 
  maximumZoom: () => set(() => ({ zoom: 5})),
  minimumZoom: () => set(() => ({ zoom: 0.899})),
}))
