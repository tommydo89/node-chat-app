const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Tommy',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Mike',
			room: 'React Course'
		}, {
			id: '3',
			name: 'Jen',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id:'123',
			name: 'Tommy',
			room: 'The Office Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual['Tommy', 'Jen'];
	});

	it('should return names for react course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual['Mike'];
	});

	it('should remove a user', () => {
		var userId = '1';
		var removedUser = users.removeUser(userId);
		expect(removedUser.id).toEqual(userId);
		expect(users.users.length).toEqual(2);
	});

	it('should not remove user', () => {
		var userId = '2435'
		var removedUser = users.removeUser(userId);
		expect(removedUser).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '1'
		var foundUser = users.getUser('1');
		expect(foundUser.id).toEqual(userId);
	});

	it('should not find user', () => {
		userId = '135432'
		var foundUser = users.getUser(userId);
		expect(foundUser).toBeFalsy();
	});
})