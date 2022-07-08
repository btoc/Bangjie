/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (condition,arr) => {
	return arr.map(el=>{
		condition.forEach(i=>{
			if(el[i]){
				delete el[i]
			}
		})
		return el
	})
};
exports.excludeByProperty = (condition,arr) => {
	let list = []
	arr.forEach(el=>{
		if(!el[condition]){
			list.push(el)
		}
		
	})
	return list
};
exports.sumDeep = (arr) => {
	return arr.map(item=>{
		let sum = 0
		item.objects.forEach(item=>{
			sum += item.val
		})
		item.objects = sum
		return item
	})
};
exports.applyStatusColor = (condition,arr) => {
	let list = []
	arr.forEach(item=>{
		for(i in condition){
			if(condition[i].includes(item.status)){
				item.color = i
				list.push(item)
			}
		}
	})
	return list
};
exports.createGreeting = (fn, greeting) => {
	return name=>fn(greeting, name)
};
exports.setDefaults = (obj) => {
	return params=>({...obj, ...params})
};
exports.fetchUserByNameAndUsersCompany = async (str, services) => {
	const { fetchUsers, fetchStatus, fetchCompanyById } = services
	const users = await fetchUsers()
	let user
	users.forEach(item=>{
		if(item.name === str){
			user = item
		}
	})
	const [company, status] = await Promise.all([fetchCompanyById(user.companyId),fetchStatus()])
	return{
		company,
		status,
		user
	}
};
