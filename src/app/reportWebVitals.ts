// src/reportWebVitals.ts
import type { Metric } from 'web-vitals';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

export function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (!onPerfEntry) return;

  onCLS(onPerfEntry);
  onFCP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
  onINP(onPerfEntry);
}
