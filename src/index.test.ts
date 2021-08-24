import {
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
} from '../src';

const COUNTRY = {
  name: 'Afghanistan',
  alpha2: 'AF',
  alpha3: 'AFG',
  code: '004',
};

describe('Utils', () => {
  it('Should get country from name', () => {
    expect(getCountryFromName(COUNTRY.name)?.name).toEqual(COUNTRY.name);
  });

  it('Should get country from name on lowercase', () => {
    expect(getCountryFromName(COUNTRY.name.toLowerCase())?.name).toEqual(
      COUNTRY.name
    );
  });

  it('Should get country from alpha2', () => {
    expect(getCountryFromAlpha2(COUNTRY.alpha2)?.alpha2).toEqual(
      COUNTRY.alpha2
    );
  });

  it('Should get country from alpha3', () => {
    expect(getCountryFromAlpha3(COUNTRY.alpha3)?.alpha3).toEqual(
      COUNTRY.alpha3
    );
  });

  it('Should get country from code', () => {
    expect(getCountryFromCode(COUNTRY.code)?.code).toEqual(COUNTRY.code);
  });

  it('Should be undefined if value not found', () => {
    expect(getCountryFromName(COUNTRY.code)).toEqual(undefined);
  });
});
