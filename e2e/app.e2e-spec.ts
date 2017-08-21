import { AnalyticsAngularPage } from './app.po';

describe('analytics-angular App', () => {
  let page: AnalyticsAngularPage;

  beforeEach(() => {
    page = new AnalyticsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
