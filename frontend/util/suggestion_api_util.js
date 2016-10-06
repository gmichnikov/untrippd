export const signup = (user, signupSuccess, signupError) => {
	$.ajax({
		method: 'POST',
		url: '/api/user',
		data: user,
    success: signupSuccess,
    error: signupError
	});
};
