export const filterUsers = (users, search, roleFilter, campus) => {
	const caseInsenstiveSearch = search.toLowerCase();
	return users.filter(user => {
		const searchFilter =
			user.firstName.toLowerCase().includes(caseInsenstiveSearch) ||
			user.lastName.toLowerCase().includes(caseInsenstiveSearch);

		const isStudent = roleFilter.student && user.role === "student";
		const isTeacher = roleFilter.teacher && user.role === "teacher";

		const campusFilter = campus ? campus === user.campus : true;

		return searchFilter && (isStudent || isTeacher) && campusFilter;
	});
};
