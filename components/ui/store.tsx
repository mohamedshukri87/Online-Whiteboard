// store.ts
import { create } from "zustand";

interface ZoomState {
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  maximumZoom: () => void;
  minimumZoom: () => void;
}
interface HistoryState {
    moveHistory: [number, number][];
    drawingHistory: [number, number][];

    appendMoveHistory: (num1 : number, num2 : number) => void;
    appendDrawingHistory: (num1 : number, num2 : number) => void;
}

export const useZoomStore = create<ZoomState>()((set) => ({
  zoom: 1,
  increaseZoom: () =>
    set((state: { zoom: number }) => ({
      zoom: state.zoom < 5 ? state.zoom * 1.1 : 5,
    })),
  decreaseZoom: () =>
    set((state: { zoom: number }) => ({
      zoom: state.zoom > 0.899 ? state.zoom * 0.9 : 0.899,
    })),
  maximumZoom: () => set(() => ({ zoom: 5 })),
  minimumZoom: () => set(() => ({ zoom: 0.899 })),
}));


export const useHistoryStore = create<HistoryState>()((set) => ({

    moveHistory: [] as [number, number][],
    drawingHistory: [] as [number, number][],

    appendMoveHistory: (num1 : number, num2 : number) => set((state) => ({ moveHistory: [...state.moveHistory, [num1, num2]] })),
    appendDrawingHistory: (num1 : number, num2 : number) => set((state) => ({ drawingHistory: [...state.drawingHistory, [num1, num2]] })),

}));