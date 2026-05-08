import { describe, it, expect, vi } from 'vitest';
import { cn, formatCurrency, generateUniqueId, truncateText, formatDate, debounce, throttle } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('merges class names correctly', () => {
      expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
      expect(cn('px-2 py-1', { 'bg-blue-500': true, 'text-black': false })).toBe('px-2 py-1 bg-blue-500');
    });
  });

  describe('formatCurrency', () => {
    it('formats currency correctly', () => {
      // Different environments format differently (spaces, etc). We check for components.
      const result = formatCurrency(1000);
      expect(result).toContain('1,000.00');
      expect(result).toContain('$');
      
      const resultEur = formatCurrency(1000, 'EUR');
      expect(resultEur).toContain('1,000.00');
      expect(resultEur).toContain('€');
    });
  });

  describe('generateUniqueId', () => {
    it('generates a unique id with prefix', () => {
      const id1 = generateUniqueId('test');
      const id2 = generateUniqueId('test');
      expect(id1).toMatch(/^test-[a-z0-9]+$/);
      expect(id1).not.toBe(id2);
    });
  });

  describe('truncateText', () => {
    it('truncates text correctly', () => {
      expect(truncateText('hello world', 5)).toBe('hello...');
      expect(truncateText('hello', 10)).toBe('hello');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2023-01-01T12:00:00Z');
      expect(formatDate(date)).toContain('2023');
      expect(formatDate(date)).toContain('1');
    });
  });

  describe('debounce', () => {
    it('debounces function calls', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debounced = debounce(fn, 100);
      
      debounced();
      debounced();
      debounced();
      
      expect(fn).not.toHaveBeenCalled();
      
      vi.advanceTimersByTime(100);
      
      expect(fn).toHaveBeenCalledTimes(1);
      vi.useRealTimers();
    });
  });

  describe('throttle', () => {
    it('throttles function calls', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttled = throttle(fn, 100);
      
      throttled();
      throttled();
      throttled();
      
      expect(fn).toHaveBeenCalledTimes(1);
      
      vi.advanceTimersByTime(100);
      throttled();
      
      expect(fn).toHaveBeenCalledTimes(2);
      vi.useRealTimers();
    });
  });
});
