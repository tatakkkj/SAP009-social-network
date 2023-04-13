import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import {
  signIn,
  signInWithGoogle,
} from '../src/lib/firebase.js';

jest.mock('firebase/auth');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('signIn', () => {
  it('deve fazer login com email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({ dados: {} });

    const email = 'teste@email.com';
    const senha = '123456';

    signIn(email, senha);

    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, senha);
  });
});

describe('signInWithGoogle', () => {
  it('deve fazer login com google', () => {
    signInWithPopup.mockResolvedValue();
    signInWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});
