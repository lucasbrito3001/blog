import POSTS from "../../posts";

export async function getPosts(categories, titleSearched) {
    return POSTS.filter((post) => {
        return (
            (
                titleSearched
                ? post.title.toLowerCase().includes(titleSearched ? titleSearched.toLowerCase() : "")
                : true
            ) &&
            (
                categories && categories.length > 0
                ? categories.some((category) => post.categories.find((postCategory) => (category.value === postCategory.value)))
                : true
            )
        );
    });
}

export async function getRecentPosts() {
    try {
        return { status: true, content: POSTS.slice(0, 3) }
    } catch (error) {
        return { status: false, error }
    }
}