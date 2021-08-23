import { Renderer } from 'marked';

export class PreviewRenderer extends Renderer {
    text(t: string) {
      return t;
    }
  
    paragraph(p: string) {
      return p;
    }
  
    heading() {
      return '';
    }
  
    blockquote(b: string) {
      return b;
    }
  
    br() {
      return '';
    }
  
    checkbox() {
      return '';
    }
  
    code() {
      return '';
    }
  
    codespan(c: string) {
      return c;
    }
  
    del(d: string) {
      return d;
    }
  
    em(e: string) {
      return e;
    }
  
    hr() {
      return '';
    }
  
    html() {
      return '';
    }
  
    image() {
      return '';
    }
  
    link(_: string, __: string, l: string) {
      return l;
    }
  
    list(l: string) {
      return l;
    }
  
    listitem(l: string) {
      return l;
    }
  
    strong(s: string) {
      return s;
    }
  
    table() {
      return '';
    }
  
    tablecell() {
      return '';
    }
  
    tablerow() {
      return '';
    }
}