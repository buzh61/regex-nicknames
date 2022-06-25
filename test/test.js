import Validator from '../src/js/app';

const users = [
  '_username',
  '-username',
  'username-',
  'username123123',
  '1username',
  'username1',
  'юзерname',
  'user,name',
];

test.each(users)('testing Validator', (i) => {
  const user = new Validator(i);
  expect(user.validateUsername()).toEqual(false);
});
