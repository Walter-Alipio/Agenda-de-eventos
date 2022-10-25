import { Auth } from './auth';

const mockSign = jest.fn();

jest.mock('jsonwebtoken',()=>{
  return {
    sign: () => mockSign,
  }
});

describe('Authenticate',()=>{
  const auth = new Auth;
  
  test('Should return a new token', ()=>{
    const id = 'asfjowier2#$!123';
    
    expect(auth.generateToken({id})).not.toBeUndefined();
  });
});