import Nightmare from 'nightmare';

const nightmare = new Nightmare({ show: true });

test('duckduckgo', async () => {
  const link = await nightmare
    .goto('http://website-templates.github.io/jekyll-inclusion/')
    .type('#search_form_input_homepage', 'github nightmare')
    .click('#search_button_homepage')
    .wait('#zero_click_wrapper .c-info__title a')
    .evaluate(() => document.querySelector('.c-info__title a').href);
  expect(link).toBe('http://website-templates.github.io/jekyll-inclusion/');
});