import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with default count value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  it('should increment count by custom val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
    expect(result.current.val).toBe(5);
  });

  it('should decrement count by custom val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-3);
    expect(result.current.val).toBe(3);
  });

  it('should handle multiple increments and decrements', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment(); // count = 1
      result.current.increment(); // count = 2
    });
    act(() => {
      result.current.setVal(2);
    });
    act(() => {
      result.current.increment(); // count = 4
      result.current.decrement(); // count = 2
    });
    expect(result.current.count).toBe(2);
    expect(result.current.val).toBe(2);
  });
});
