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
  'user1name',
  'user1n2ame',
  'user1n1234ame',
  'user12n34ame'
];

test.each(users)('testing Validator', (i) => {
  const user = new Validator(i);
  expect(user.validateUsername()).toEqual(false);
});
