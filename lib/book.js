/**
 * @namespace faker.book
 * @description Module for generating book-related data including titles, authors, genres, publishers, and more.
 * Supports multiple locales (French, Arabic) for international book data generation.
 */
var Book = function (faker) {
  var self = this;
  
  /**
   * Generates a random book title.
   * 
   * @method faker.book.title
   * @description Returns a random book title from the current locale's book definitions.
   * The book titles are localized and will vary based on the selected locale.
   * 
   * @returns {string} A random book title.
   * 
   * @example
   * // Returns a random book title in the current locale
   * var title = faker.book.title();
   */
  self.title = function () {
    return faker.random.arrayElement(faker.definitions.book.title);
  };
  
  /**
   * Generates a random author name.
   * 
   * @method faker.book.author
   * @description Returns a random author name from the current locale's book definitions.
   * The author names are localized and will vary based on the selected locale.
   * 
   * @returns {string} A random author name.
   * 
   * @example
   * // Returns a random author name in the current locale
   * var author = faker.book.author();
   */
  self.author = function () {
    return faker.random.arrayElement(faker.definitions.book.author);
  };
  
  /**
   * Generates a random book genre.
   * 
   * @method faker.book.genre
   * @description Returns a random book genre from the current locale's book definitions.
   * The book genres are localized and will vary based on the selected locale.
   * 
   * @returns {string} A random book genre.
   * 
   * @example
   * // Returns a random book genre in the current locale
   * var genre = faker.book.genre();
   */
  self.genre = function () {
    return faker.random.arrayElement(faker.definitions.book.genre);
  };
  
  /**
   * Generates a random publisher name.
   * 
   * @method faker.book.publisher
   * @description Returns a random publisher name from the current locale's book definitions.
   * The publisher names are localized and will vary based on the selected locale.
   * 
   * @returns {string} A random publisher name.
   * 
   * @example
   * // Returns a random publisher name in the current locale
   * var publisher = faker.book.publisher();
   */
  self.publisher = function () {
    return faker.random.arrayElement(faker.definitions.book.publisher);
  };
  
  /**
   * Generates a random ISBN number.
   * 
   * @method faker.book.isbn
   * @description Returns a random ISBN-10 or ISBN-13 number.
   * The format follows the standard ISBN specification.
   * 
   * @param {number} [variant] - Optional variant to specify ISBN-10 or ISBN-13. Default is random between both.
   * @returns {string} A random ISBN number.
   * 
   * @example
   * // Returns a random ISBN number
   * var isbn = faker.book.isbn();
   * // Example output: "978-3-16-148410-0"
   * 
   * @example
   * // Returns an ISBN-10 number
   * var isbn10 = faker.book.isbn(10);
   * // Example output: "0-306-40615-2"
   * 
   * @example
   * // Returns an ISBN-13 number
   * var isbn13 = faker.book.isbn(13);
   * // Example output: "978-0-306-40615-7"
   */
  self.isbn = function (variant) {
    variant = variant || Math.random() > 0.5 ? 13 : 10;
    
    if (variant === 10) {
      // Generate ISBN-10
      var prefix = Math.floor(Math.random() * 10);
      var group = Math.floor(Math.random() * 100000);
      var publisher = Math.floor(Math.random() * 1000);
      var title = Math.floor(Math.random() * 10000);
      var check = Math.floor(Math.random() * 10);
      
      return prefix + '-' + group + '-' + publisher + '-' + title + '-' + check;
    } else if (variant === 13) {
      // Generate ISBN-13
      var prefix = '978'; // Bookland prefix
      var group = Math.floor(Math.random() * 100);
      var publisher = Math.floor(Math.random() * 100000);
      var title = Math.floor(Math.random() * 100000);
      var check = Math.floor(Math.random() * 10);
      
      return prefix + '-' + group + '-' + publisher + '-' + title + '-' + check;
    } else {
      // Random between ISBN-10 and ISBN-13
      return self.isbn(Math.random() > 0.5 ? 10 : 13);
    }
  };
  
  /**
   * Generates a random series name.
   * 
   * @method faker.book.series
   * @description Returns a random book series name from the current locale's book definitions.
   * The series names are localized and will vary based on the selected locale.
   * 
   * @returns {string} A random book series name.
   * 
   * @example
   * // Returns a random book series name in the current locale
   * var series = faker.book.series();
   */
  self.series = function () {
    return faker.random.arrayElement(faker.definitions.book.series);
  };
  
  return self;
};

module['exports'] = Book;