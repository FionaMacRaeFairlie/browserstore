import { useState, useEffect } from "react";

function useIndexedDB(databaseName, storeName, key) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const request = window.indexedDB.open(databaseName);

    request.onerror = function(event) {
      console.error("Error opening IndexedDB database");
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      db.createObjectStore(storeName);
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      request.onerror = function(event) {
        console.error("Error getting value from IndexedDB");
      };
      request.onsuccess = function(event) {
        setValue(event.target.result);
      };
    };
  }, [databaseName, storeName, key]);

  function setValueToIndexedDB(newValue) {
    const request = window.indexedDB.open(databaseName);
    request.onerror = function(event) {
      console.error("Error opening IndexedDB database");
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(newValue, key);
      request.onerror = function(event) {
        console.error("Error saving value to IndexedDB");
      };
      request.onsuccess = function(event) {
        setValue(newValue);
      };
    };
  }

  return [value, setValueToIndexedDB];
}

export default useIndexedDB;