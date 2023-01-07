import create from 'zustand';
import produce from 'immer';

const useRequestStore = create(set => ({
  fetchedStartingInfo: false,
  setFetchedStartingInfo: (cond) => set(produce(state => {
    state.fetchedStartingInfo = cond;
  }))
}));

export default useRequestStore;