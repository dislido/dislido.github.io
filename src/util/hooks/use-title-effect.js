import { useEffect } from 'react';
import { titleSuffix } from '@/util/config';

/**
 * 设置标题
 * @param {string} title title
 */
export default function useTitleEffect(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title}${titleSuffix}`;
    return () => { document.title = prevTitle; };
  }, []);
}
