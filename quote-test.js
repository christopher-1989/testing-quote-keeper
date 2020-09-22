// test/models/quote-test.js
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

const Quote = require('../../models/quote');

const {connectAndDrop, disconnect} = require('../../database');

describe('Quote', () => {
  beforeEach(connectAndDrop);
  afterEach(disconnect);

  describe("#quote", () => {
    it('is a String', () => {
      const comp = "Hello, World!";
      const citation = new Quote({quote: comp});

      assert.strictEqual(citation.quote, comp);
    });
  });

    describe("#attributed", () => {
    it('is a String', () => {
      const comp = "David";
      const citation = new Quote({attributed: comp});

      assert.strictEqual(citation.attributed, comp);
    });
  });

    describe("#source", () => {
    it('is a String', () => {
      const comp = "Chris's PC";
      const citation = new Quote({source: comp});

      assert.strictEqual(citation.source, comp);
    });
  });
});