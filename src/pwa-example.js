let request = window.indexedDB.open('betaDB', 1);

request.onerror = event => {
    console.error('ERROR: Unable to open a database', event)
}

request.onsuccess = event => {
    console.log('SUCCESS: Database retrieved', event)
}