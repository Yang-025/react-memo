0 兩個 Text
1 用 React.memo 可以讓右邊的 Text 不會 re-render
2 多了 onClick 後，React.memo 不管用
2-1 用 areEqual 解決
2-2 用 useCalback 解決
2-3 useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)
3 useMemo
4 為什麼 useCalback 要第二個參數