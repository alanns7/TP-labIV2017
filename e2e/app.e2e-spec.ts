import { PizzeriaPage } from './app.po';

describe('pizzeria App', () => {
  let page: PizzeriaPage;

  beforeEach(() => {
    page = new PizzeriaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
