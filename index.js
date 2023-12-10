class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9- ']/g, ''); // Removes non-alphanumeric characters except dashes, single quotes, and spaces
  }

  // Static method to titleize a string
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize('hello')); // Output: Hello
console.log(Formatter.sanitize('he@llo^ worl!d')); // Output: hello world
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // Output: The Quick Brown Fox Jumps Over the Lazy Dog
