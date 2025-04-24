import { loginUser } from '../authLogic';

jest.mock('../../assets/users.json', () =>[
    {
        name: 'Rafa',
        email: 'rafael.garcia@aspiresys.com',
        password: 'Rafa106',
        age: 24,
    }
]);

const user = {
    name: 'Rafa',
    email: 'rafael.garcia@aspiresys.com',
    password: 'Rafa106',
    age: 24,
}

beforeEach(() => {
    localStorage.clear();
});

test('Successful login: returns user and sets localStorage', () =>{
    const result = loginUser('rafael.garcia@aspiresys.com', 'Rafa106');

    expect(result.success).toBe(true);
    expect(result.data).toEqual(user);

    const storedUser = JSON.parse(localStorage.getItem('loggedUser'));
    expect(storedUser).toEqual(user); 
});

test('Unsuccessful login: returns a message of invalid credentials', () =>{
    const result = loginUser('alfredo.garcia@aspiresys.com', 'Alfred0108');

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid credentials. Please try again');
    expect(localStorage.getItem('loggedUser')).toBeNull();
});