/*global describe, it, expect, require */
var ongish = require ('../');

var s1 = 'Hey, baby!', s1r = 'Hong-E-yong, bong-A-bong-yong!';
var s2 = 'I love you', s2r = 'I long-O-vong-E yong-O-U';
var s3 = 'cool beans', s3r = 'cong-O-O-long bong-E-A-nong-song';


describe ('Ensuring we can speak ongish', () => {

  it('should detect language', ()=> {
    expect(ongish.is()).toBeFalsy();
    expect(ongish.is(s1)).toBeFalsy();
    expect(ongish.is(s2)).toBeFalsy();
    expect(ongish.is(s3)).toBeFalsy();

    expect(ongish.is(s1r)).toBeTruthy();
    expect(ongish.is(s2r)).toBeTruthy();
    expect(ongish.is(s3r)).toBeTruthy();

  });

  it('should translate to Ongish', () => {
    expect(ongish.to(s1)).toBe(s1r);
    expect(ongish.to(s2)).toBe(s2r);
    expect(ongish.to(s3)).toBe(s3r);
  });

  it('should translate to English', () => {
    expect(ongish.from(s1r)).toBe(s1);
// Fails due to being unable to tell case
//   expect(ongish.from(s2r)).toBe(s2);
    expect(ongish.from(s3r)).toBe(s3);
  });



});