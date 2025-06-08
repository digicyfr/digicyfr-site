// src/utils/webVitals.js
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      console.log('web-vitals not available');
    });
  }
};

export const getCLS = () => {};
export const getFID = () => {};
export const getFCP = () => {};
export const getLCP = () => {};
export const getTTFB = () => {};