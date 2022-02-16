const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = require('./data.json');
const host = 'http://localhost:3000/01.Messenger/';
const endpoint = "http://localhost:3030/jsonstore/messenger";

function json(data) {
  return {
      status: 200,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  };
}

let browser;
let context;
let page;

describe('E2E tests', function () {
  this.timeout(6000);

  before(async () => {
      browser = await chromium.launch({ headless: false, slowMo: 1000, devtools: true });
      // browser = await chromium.launch();
  });

  after(async () => {
      await browser.close();
  });

  beforeEach(async () => {
      context = await browser.newContext();

      // block intensive resources and external calls (page routes take precedence)
      await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
  /*
      await context.route(url => {
          return url.hostname != 'localhost';
      }, route => route.abort());
  */
      await context.route('**' + endpoint, route => route.fulfill(json(3)));

      page = await context.newPage();
  });

  afterEach(async () => {
      await page.close();
      await context.close();
  });

  describe('Load', () => {
      it('show most recent comments before and after refresh', async () => {
          page.route('**' + endpoint + "*", route => route.fulfill(json(mockData)));

          await page.goto(host);

          const messages = await page.$eval('#messages', t => t.value);
          expect(messages.length).to.equal(0);

          const [response] = await Promise.all([
            page.waitForResponse(endpoint),
            page.click('#refresh')
        ]);
        const postData = await response.json();
        const messagesData = Object.values(postData).map(v => `${v.author}: ${v.content}`).join('\n');
        const textMessage = await page.$eval('#messages', t => t.value);
        expect(messagesData).to.equal(textMessage)
      });
  });


  describe('Send', () => {
      it('send message to server', async () => {
        const mock = {
          author: 'Name1',
          content: 'Somting stupid!',
      };
          page.route('**' + endpoint + '**', route => route.fulfill(json(mock)));

          await page.goto(host);
          await page.fill("#author", mock.author);
          await page.fill("#content", 'Somting stupid!')

          const [response] = await Promise.all([
            page.waitForResponse(endpoint),
            page.click('#submit')
        ]);
        const postData = await response.json();
        expect(postData.author).to.equal(mock.author);
        expect(postData.content).to.be.equal(mock.content)
        
      });
  });

});