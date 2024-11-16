/**
 * Query selector shorthand within a specific container
 * @param {string} s - The CSS selector string.
 * @param {HTMLElement | Document} [context=document] - The container to search within.
 * @returns {Element} - The matched element or a newly created <span> element.
 */
const qs = (s, context = document) =>
  context.querySelector(s) ?? document.createElement('span')

/**
 * Query selector all shorthand within a specific container
 * @param {string} s - The CSS selector string.
 * @param {HTMLElement | Document} [context=document] - The container to search within.
 * @returns {NodeList | HTMLElement[]} - The matched elements or a fallback single <span> element wrapped in an array.
 */
const qsa = (s, context = document) => {
  const elements = context.querySelectorAll(s)
  return elements.length ? elements : [document.createElement('span')]
}
