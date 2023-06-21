function createTabIndexer() {
    let index = 1;

    return () => {
        return index++;
    }
}

const getTabIndex = createTabIndexer();

export default getTabIndex;