// src/utils/PerformanceMonitor.js
export const PerformanceMonitor = {
  mark: (name) => {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  },
  
  measure: (name, startMark, endMark) => {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        return performance.getEntriesByName(name)[0];
      } catch (error) {
        console.warn('Performance measure failed:', error);
      }
    }
    return null;
  }
};
