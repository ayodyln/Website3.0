import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    theme();
	return {
		posts: []
	};
};

function theme() {
    console.log("Theme")

    return {
        // Add theme properties here
    };
}