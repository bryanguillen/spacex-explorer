import { ClientFunction } from 'testcafe';

export const goBack = ClientFunction(() => window.history.back());

export const getLocation = ClientFunction(() => document.location.href);

export const getBaseUrl = () => process.argv.includes('prod') ? 'https://zen-lumiere-da734a.netlify.app' : 'localhost:3000';

export const scrollToBottom = ClientFunction(() => window.scrollTo(0,document.body.scrollHeight));