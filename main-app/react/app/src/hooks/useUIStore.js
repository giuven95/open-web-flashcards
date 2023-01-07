import create from 'zustand';

import produce from 'immer';

const useUIStore = create((set) => ({
  searchTab: 'list',
  setSearchTab: (tab) => set(produce((draft) => {
    draft.searchTab = tab;
  })),
}));

export default useUIStore;
