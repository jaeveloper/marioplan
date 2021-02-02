export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make async call to api
		//const firestore = getFirestore();
		const firebase = getFirebase();
		const firestore = firebase.firestore();
		firestore
			.collection('projects')
			.add({
				...project, // i.e title = projects.title content = projects.content
				authorFirstName: 'Net',
				authorLaststName: 'Ninja',
				authorId: 12345,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});

		// -------------- OR ------------------
		// async function
		//
		// const firestore = getFirestore();
		//  try{
		//	const result = await firestore.collection('projects').add({
		// 		...project, // i.e title = projects.title content = projects.content
		// 		authorFirstName: 'Net',
		// 		authorLaststName: 'Ninja',
		// 		authorId: 12345,
		// 		createdAt: new Date(),
		// 	})		} catch(e) {
		// 		console.log(e);
		// 	}
		//
		//	dispatch({ type: 'CREATE_PROJECT', project });
		//
		//
	};
};
