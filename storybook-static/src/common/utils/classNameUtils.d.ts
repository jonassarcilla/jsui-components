import { ClassValue } from 'clsx';
/**
 * Merges classes using clsx and tailwind-merge
 * @example
 * clsxMerge('text-red-500', 'text-2xl', 'font-bold', 'text-center')
 * // => 'text-red-500 text-2xl font-bold text-center'
 * @param classes {ClassValue[]} - Array of classes to merge
 * @returns {string}
 */
declare const clsxMerge: (...classes: ClassValue[]) => string;
export default clsxMerge;
