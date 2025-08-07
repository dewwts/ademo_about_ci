import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with default count value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count by 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement count by 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  it('should set count to a specific value', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    expect(result.current.count).toBe(5);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(5); // This asserts increment uses the new value
  });
});