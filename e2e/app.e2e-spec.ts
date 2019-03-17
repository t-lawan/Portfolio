import { AkinsolaPage } from './app.po';

describe('akinsola App', () => {
  let page: AkinsolaPage;

  beforeEach(() => {
    page = new AkinsolaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
