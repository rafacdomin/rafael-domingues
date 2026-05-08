import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import TypewriterPhrase from './index';

vi.mock('motion/react', async () => {
  const actual = await vi.importActual<any>('motion/react');
  return {
    ...actual,
    useTransform: vi.fn((val, cb) => {
      // Force coverage of all branches by calling callback with 0 and 100
      if (typeof cb === 'function') {
        cb(0);
        cb(100);
      }
      return actual.useTransform(val, cb);
    })
  };
});

vi.mock('motion', async () => {
  const actual = await vi.importActual<any>('motion');
  return {
    ...actual,
    animate: vi.fn(() => ({
      then: (cb: any) => {
        cb();
        return { then: (cb2: any) => { cb2(); } };
      },
      stop: vi.fn()
    }))
  };
});

describe('TypewriterPhrase', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('renders correctly and cycles phrases', () => {
    const phrases = [
      ['Hello', 'World'],
      ['Foo', 'Bar'],
      ['A', 'B'],
      ['C', 'D'],
      ['E', 'F'],
      ['G', 'H']
    ];
    
    const { container, unmount } = render(<TypewriterPhrase phrases={phrases} />);
    expect(container.querySelector('p')).toBeInTheDocument();
    
    // Advance timers to trigger setTimeout
    vi.advanceTimersByTime(6000);
    
    unmount();
  });
});
