import { useState, useRef, useCallback, useEffect } from "react";

export default function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const [node, setNode] = useState(null);
  const observerRef = useRef(null);

  const setRef = useCallback((nodeEl) => {
    // detach previous observer when ref changes
    if (observerRef.current && node) {
      observerRef.current.unobserve(node);
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    setNode(nodeEl);
    setInView(false);
  }, [node]);

  useEffect(() => {
    if (!node) return;

    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observerRef.current = obs;
    obs.observe(node);

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(node);
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
    // re-run when observed node or options change
  }, [node, JSON.stringify(options)]);

  return [setRef, inView];
}