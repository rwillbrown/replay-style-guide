import { ReplayStyleGuidePage } from './app.po';

describe('replay-style-guide App', () => {
  let page: ReplayStyleGuidePage;

  beforeEach(() => {
    page = new ReplayStyleGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
