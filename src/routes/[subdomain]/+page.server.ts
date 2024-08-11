//@ts-nocheck
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebaseConfig';
import { error } from '@sveltejs/kit';

async function getSite(subdomain: string) {
	let x = [];
	try {
		const sitesRef = collection(db, 'sites');
		const q = query(sitesRef, where('subdomain', '==', subdomain));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, ' => ', doc.data());
			x = [...x, { ...doc.data(), id: doc.id }];
		});
		if (x.length == 0) {
			// Go to Error Page
			throw error(420, "Couldn't find this Tandika site");
		} else {
			return x[0];
		}
	} catch (error) {
		console.error(error);
		throw error(420, 'Something went wrong on our end!');
	}
}

export let load = async ({ params }) => {
	let siteData = await getSite(params.subdomain);
	return { siteData };
};
