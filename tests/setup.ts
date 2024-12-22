import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/dom';
import { beforeEach, afterEach } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = '';
});

afterEach(() => {
  cleanup();
});