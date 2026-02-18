// store.ts
import { PanelBottomOpen } from "lucide-react";
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

// make sure only one of these is true at a time.
interface ActiveState {

  drawing: boolean;
  panning: boolean;
  panningCounter: number;

  changeState: (mode : number) => void;
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

// set 1 as false and the rest as default
export const useActiveStore = create<ActiveState>()((set) => ({
  drawing: false,
  panning: false,
  panningCounter: 0,

  changeState: (mode : number) => set((state) => ({ drawing: mode === 1 ? true : false, panning: mode === 2 ? true : false, panningCounter: mode === 2 ? state.panningCounter + 1 : 0 })),




}));