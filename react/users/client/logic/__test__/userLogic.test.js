import { getLoggedUser } from '../userLogic';

const mockUser = {
    name: 'Rafael Garcia',
    age: 24,
    job: 'Trainee',
    location: 'Mexico',
    imageUrl: '/assets/rafael.jpg',
    skills: ['Leadership', 'Team work'],
};

beforeEach(() => {
    localStorage.clear();
});

test('There is data in localStorage: returns user', () => { 
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));
    const user = getLoggedUser();

    expect(user).toEqual(mockUser);
});

test('There is not data on localStorage: returns null', () =>{
    const user = getLoggedUser();
    expect(user).toBeNull();
});

test('The JSON is invalid: returns null and logs error', () =>{
    console.error = jest.fn();
    localStorage.setItem('loggedUser', 'invalid json');
    const user = getLoggedUser();

    expect(user).toBeNull();
    expect(console.error).toHaveBeenCalled();
});