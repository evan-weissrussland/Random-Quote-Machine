interface Item {
    id: number;
}
export const getItemFromState = <T extends Item>(state: T[], id: number): T | undefined => {
    return state.find(i => i.id === id);
};