import parse, { attributesToProps, domToReact, htmlToDOM } from 'html-react-parser';
import type {
  Comment,
  DOMNode,
  Element,
  HTMLReactParserOptions,
  ProcessingInstruction,
  Text,
} from 'html-react-parser';

let comment: Comment;
let domNode: DOMNode;
let element: Element;
let options: HTMLReactParserOptions;
let processingInstruction: ProcessingInstruction;
let text: Text;

const output = parse('');
attributesToProps();
domToReact([]);
htmlToDOM('');
