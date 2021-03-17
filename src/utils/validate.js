/**
 * 是否是外部链接
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 是否是电话号码
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhone(phone) {
  return phone.length === 11;
}
