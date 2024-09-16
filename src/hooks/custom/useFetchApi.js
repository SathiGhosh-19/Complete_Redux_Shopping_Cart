import { useEffect, useState, useCallback } from "react";

export const useFetchApi = (func, searchParam, page = 1, limit = 10) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const skip = (page - 1) * limit;
      const data = await func(searchParam, limit, skip);
      setState({ data, error: null, loading: false });
    } catch (error) {
      setState({ data: null, error, loading: false });
    }
  }, [func, searchParam, page, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};