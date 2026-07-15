// store.ts
import { create } from "zustand";

const STORAGE_KEY = "whiteboard-history";

// helper: save current history to localStorage
function saveToStorage(moveHistory: any, drawingHistory: any) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ moveHistory, drawingHistory })
    );
  } catch (e) {
    console.error("Failed to save whiteboard:", e);
  }
}

interface ZoomState {
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  maximumZoom: () => void;
  minimumZoom: () => void;
}
interface HistoryState {
    moveHistory: [number, number, number, number][];
    drawingHistory: [number, number][];

    appendMoveHistory: (num1 : number, num2 : number, num3 : number, num4 : number) => void;
    appendDrawingHistory: (num1 : number, num2 : number) => void;
    clearHistory: () => void;
}

// make sure only one of these is true at a time.
interface ActiveState {

  drawing: boolean;
  panning: boolean;

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


export const useHistoryStore = create<HistoryState>()((set, get) => ({

    moveHistory: [] as [number, number, number, number][],
    drawingHistory: [] as [number, number][],

    appendMoveHistory: (num1 : number, num2 : number, num3 : number, num4 : number) => set((state) => {
      const updated = [...state.moveHistory, [num1, num2, num3, num4]] as [number, number, number, number][];
      saveToStorage(updated, get().drawingHistory);
      return { moveHistory: updated };
    }),
    appendDrawingHistory: (num1 : number, num2 : number) => set((state) => {
      const updated = [...state.drawingHistory, [num1, num2]] as [number, number][];
      saveToStorage(get().moveHistory, updated);
      return { drawingHistory: updated };
    }),
    clearHistory: () => {
      saveToStorage([], []);
      set({ moveHistory: [], drawingHistory: [] });
    },
    // type not assignable??
    
  }));

// set 1 as false and the rest as default
export const useActiveStore = create<ActiveState>()((set) => ({
  drawing: false,
  panning: false,
  

  changeState: (mode : number) => set(() => ({ drawing: mode === 1 ? true : false, panning: mode === 2 ? true : false })),




}));