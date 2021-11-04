import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from '@udecode/plate';
import {autoformatBlocks} from "./autoformatBlocks"
import { autoformatMarks } from "./autoformatMarks";


export const autoformatRules = [
  ...autoformatBlocks,
  ...autoformatMarks,
  ...autoformatSmartQuotes,
  ...autoformatPunctuation,
  ...autoformatLegal,
  ...autoformatLegalHtml,
  ...autoformatArrow,
];
