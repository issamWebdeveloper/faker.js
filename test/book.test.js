var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var Faker = require('../lib/index');

describe('Book', function () {
  describe('title()', function () {
    it('should return a random book title', function () {
      var faker = new Faker({ locale: 'fr' });
      var title = faker.book.title();
      expect(title).to.be.a('string');
      expect(title).to.not.be.empty;
    });

    it('should return a random book title in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var title = faker.book.title();
      expect(title).to.be.a('string');
      expect(title).to.not.be.empty;
    });

    it('should return different titles on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var title1 = faker.book.title();
      var title2 = faker.book.title();
      expect(title1).to.not.equal(title2);
    });
  });

  describe('author()', function () {
    it('should return a random author name', function () {
      var faker = new Faker({ locale: 'fr' });
      var author = faker.book.author();
      expect(author).to.be.a('string');
      expect(author).to.not.be.empty;
    });

    it('should return a random author name in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var author = faker.book.author();
      expect(author).to.be.a('string');
      expect(author).to.not.be.empty;
    });

    it('should return different authors on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var author1 = faker.book.author();
      var author2 = faker.book.author();
      expect(author1).to.not.equal(author2);
    });
  });

  describe('genre()', function () {
    it('should return a random book genre', function () {
      var faker = new Faker({ locale: 'fr' });
      var genre = faker.book.genre();
      expect(genre).to.be.a('string');
      expect(genre).to.not.be.empty;
    });

    it('should return a random book genre in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var genre = faker.book.genre();
      expect(genre).to.be.a('string');
      expect(genre).to.not.be.empty;
    });

    it('should return different genres on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var genre1 = faker.book.genre();
      var genre2 = faker.book.genre();
      expect(genre1).to.not.equal(genre2);
    });
  });

  describe('publisher()', function () {
    it('should return a random publisher name', function () {
      var faker = new Faker({ locale: 'fr' });
      var publisher = faker.book.publisher();
      expect(publisher).to.be.a('string');
      expect(publisher).to.not.be.empty;
    });

    it('should return a random publisher name in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var publisher = faker.book.publisher();
      expect(publisher).to.be.a('string');
      expect(publisher).to.not.be.empty;
    });

    it('should return different publishers on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var publisher1 = faker.book.publisher();
      var publisher2 = faker.book.publisher();
      expect(publisher1).to.not.equal(publisher2);
    });
  });

  describe('isbn()', function () {
    it('should return a random ISBN number', function () {
      var faker = new Faker({ locale: 'fr' });
      var isbn = faker.book.isbn();
      expect(isbn).to.be.a('string');
      expect(isbn).to.not.be.empty;
      expect(isbn).to.match(/^\d+-\d+-\d+-\d+-\d+$/);
    });

    it('should return an ISBN-10 when variant is 10', function () {
      var faker = new Faker({ locale: 'fr' });
      var isbn = faker.book.isbn(10);
      expect(isbn).to.be.a('string');
      expect(isbn).to.not.be.empty;
      expect(isbn).to.match(/^\d+-\d+-\d+-\d+-\d+$/);
    });

    it('should return an ISBN-13 when variant is 13', function () {
      var faker = new Faker({ locale: 'fr' });
      var isbn = faker.book.isbn(13);
      expect(isbn).to.be.a('string');
      expect(isbn).to.not.be.empty;
      expect(isbn).to.match(/^\d+-\d+-\d+-\d+-\d+$/);
    });

    it('should return different ISBNs on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var isbn1 = faker.book.isbn();
      var isbn2 = faker.book.isbn();
      expect(isbn1).to.not.equal(isbn2);
    });
  });

  describe('series()', function () {
    it('should return a random series name', function () {
      var faker = new Faker({ locale: 'fr' });
      var series = faker.book.series();
      expect(series).to.be.a('string');
      expect(series).to.not.be.empty;
    });

    it('should return a random series name in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var series = faker.book.series();
      expect(series).to.be.a('string');
      expect(series).to.not.be.empty;
    });

    it('should return different series on multiple calls', function () {
      var faker = new Faker({ locale: 'fr' });
      var series1 = faker.book.series();
      var series2 = faker.book.series();
      expect(series1).to.not.equal(series2);
    });
  });

  describe('Integration', function () {
    it('should generate a complete book profile', function () {
      var faker = new Faker({ locale: 'fr' });
      var book = {
        title: faker.book.title(),
        author: faker.book.author(),
        genre: faker.book.genre(),
        publisher: faker.book.publisher(),
        isbn: faker.book.isbn(),
        series: faker.book.series()
      };
      
      expect(book.title).to.be.a('string');
      expect(book.author).to.be.a('string');
      expect(book.genre).to.be.a('string');
      expect(book.publisher).to.be.a('string');
      expect(book.isbn).to.be.a('string');
      expect(book.series).to.be.a('string');
    });

    it('should generate a complete book profile in Arabic', function () {
      var faker = new Faker({ locale: 'ar' });
      var book = {
        title: faker.book.title(),
        author: faker.book.author(),
        genre: faker.book.genre(),
        publisher: faker.book.publisher(),
        isbn: faker.book.isbn(),
        series: faker.book.series()
      };
      
      expect(book.title).to.be.a('string');
      expect(book.author).to.be.a('string');
      expect(book.genre).to.be.a('string');
      expect(book.publisher).to.be.a('string');
      expect(book.isbn).to.be.a('string');
      expect(book.series).to.be.a('string');
    });
  });

  describe('Multilingual', function () {
    it('should support switching between locales', function () {
      var faker = new Faker({ locale: 'fr' });
      var frenchTitle = faker.book.title();
      
      faker.setLocale('ar');
      var arabicTitle = faker.book.title();
      
      expect(frenchTitle).to.be.a('string');
      expect(arabicTitle).to.be.a('string');
      expect(frenchTitle).to.not.equal(arabicTitle);
    });
  });

  describe('Edge Cases', function () {
    it('should handle missing locale gracefully', function () {
      var faker = new Faker({ locale: 'unknown' });
      var title = faker.book.title();
      expect(title).to.be.a('string');
      expect(title).to.not.be.empty;
    });
  });
});