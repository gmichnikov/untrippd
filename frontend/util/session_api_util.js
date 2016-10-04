export const signup = (user, signupSuccess, signupError) => {
	$.ajax({
		method: 'POST',
		url: '/api/user',
		data: user,
    success: signupSuccess,
    error: signupError
	});
};

export const login = (user, loginSuccess, loginError) => {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
    success: loginSuccess,
    error: loginError,
	});
};

export const logout = function(logoutSuccess, logoutError) {
	$.ajax({
		method: 'delete',
		url: '/api/session',
    success: logoutSuccess,
    error: logoutError,
	});
};
