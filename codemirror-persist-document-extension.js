(function () {
    const { ViewPlugin } = CM["@codemirror/view"];

    CM["@overpy/codemirror-persist-document"] = {
        persistDocument(storageKey, storage = window.sessionStorage) {
            return ViewPlugin.define((view) => {
                let saveDebounceTimeout = null;

                const initialValue = storage.getItem(storageKey);
                if (initialValue != null) {
                    setTimeout(() => {
                        // Wait for codemirror to initialize
                        view.dispatch({
                            changes: {
                                from: 0,
                                to: view.state.doc.toString().length,
                                insert: initialValue,
                            },
                        });
                    }, 0);
                }

                return {
                    update(viewUpdate) {
                        if (viewUpdate.docChanged) {
                            if (saveDebounceTimeout != null) {
                                clearTimeout(saveDebounceTimeout);
                            }
                            saveDebounceTimeout = setTimeout(() => {
                                storage.setItem(storageKey, viewUpdate.state.doc.toString());
                                saveDebounceTimeout = null;
                            }, 500);
                        }
                    },
                };
            });
        },
    };
})();
