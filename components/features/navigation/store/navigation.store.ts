import { create } from "zustand";
import {
  INavigationState,
  INavigationStore,
  INavigationSystemState,
} from "./navigation.types.store";

const createNavigationStore = (
  init: INavigationState,
  _systemInit: INavigationSystemState,
) =>
  create<INavigationStore>()((set) => ({
    ...init,
    _system: {
      ..._systemInit,
      setActiveChildId: (id) =>
        set((state) => ({
          _system: {
            ...state._system,
            activeChildId: id,
            isOpen: id ? true : false,
          },
        })),
      setIsDark: (value: boolean) =>
        set((state) => ({ _system: { ...state._system, isDark: value } })),
      setIsOpen: (value: boolean) =>
        set((state) => ({
          _system: { ...state._system, isDark: value, isOpen: value },
        })),
      setIsMobileOpen: (value: boolean) =>
        set((state) => ({
          _system: { ...state._system, isMobileOpen: value },
        })),
    },
    updateMenus: (value) => set(() => ({ menus: value })),
    updatePrimaryCTA: (value) =>
      set((state) => ({ cta: { ...state.cta, primaryCTA: value } })),
    updateSecondaryCTA: (value) =>
      set((state) => ({ cta: { ...state.cta, secondaryCTA: value } })),
  }));

export { createNavigationStore };
