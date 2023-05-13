// Select the node that will be observed for mutations
const targetNode = document.querySelector(".t706__cartwin-content form");

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      for (const nodeItem of mutation.removedNodes) {
        if (nodeItem.className?.includes("t-inputpromocode")) {
          const cb = window.__shPromocodeCallback;

          if (!cb) {
            throw new Error(
              "Переменная window.__shPromocodeCallback не найденна"
            );
          }

          return cb();
        }
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
