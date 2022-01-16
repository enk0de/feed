export const replaceLast = function (target: string, search: string, replace: string) {
  return target.replace(new RegExp(search + '([^' + search + ']*)$'), replace + '$1');
};
