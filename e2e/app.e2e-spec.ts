import { DocumentDemoPage } from './app.po';

describe('document-demo App', () => {
  let page: DocumentDemoPage;

  beforeEach(() => {
    page = new DocumentDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
