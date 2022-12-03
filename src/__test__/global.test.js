const Text = 'This is my text';
const Users = ['John Doe', 'Elon Musk', 'Shib Inu'];

test('It should contain a text string', () => {
    expect(Text).toMatch(/text/);
})

test('It should contain Carlos in the users list', () => {
    expect(Users).toContain('John Doe');
})
