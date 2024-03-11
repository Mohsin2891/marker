function toTitleCase(str) {
  str = str.replace(/[_\-]+/g, " ");
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
export default toTitleCase;
