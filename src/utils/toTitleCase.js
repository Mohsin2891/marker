function toTitleCase(str) {
    // First, replace underscores or hyphens with spaces to normalize the string
    str = str.replace(/[_\-]+/g, ' ');
  
    // Split the string into words, then map over each word to capitalize the first letter
    // and lower the rest. Finally, join the words back into a single string.
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  export default toTitleCase