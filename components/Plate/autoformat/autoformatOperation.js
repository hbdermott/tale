import { ELEMENT_DEFAULT } from '@udecode/plate';
import { DIGITS, DIGITS_WITH_SPACE } from './autoformatConstants';
import { formatText } from './autoformatUtils';

const multiplicationWithoutSpace = DIGITS.map((digit) => ({
  type: ELEMENT_DEFAULT,
  mode: 'block',
  match: [`${digit}*`, `${digit}x`],
  trigger: [...DIGITS, ...DIGITS_WITH_SPACE],
  insertTrigger: true,
  format: (editor) => formatText(editor, `${digit}×`),
}));

const multiplicationWithSpace = DIGITS.map((digit) => ({
  type: ELEMENT_DEFAULT,
  mode: 'block',
  match: [`${digit} *`, `${digit} x`],
  trigger: [...DIGITS, ...DIGITS_WITH_SPACE],
  insertTrigger: true,
  format: (editor) => formatText(editor, `${digit} ×`),
}));

export const autoformatMultiplication = [
  ...multiplicationWithoutSpace,
  ...multiplicationWithSpace,
];
