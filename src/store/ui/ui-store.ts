import { create } from 'zustand'

interface State {
    isSideMenuOpen: boolean;
    isSideMenuLateralOpen: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;
    openSideLateralMenu: () => void;
    closeSideLateralMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    isSideMenuLateralOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
    openSideLateralMenu: () => set({ isSideMenuLateralOpen: true }),
    closeSideLateralMenu: () => set({ isSideMenuLateralOpen: false })
}))