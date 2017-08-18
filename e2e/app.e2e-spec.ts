import { OptimuxPage } from './app.po';

describe('optimux App', () => {
  let page: OptimuxPage;

  beforeEach(() => {
    page = new OptimuxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
