export  async function GetUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const user = await response.json();
        return user;
    } catch (error) {

        console.error(error);

    }
}

export  async function GetAlbum() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
            throw new Error('Failed to fetch album');
        }
        const albums = await response.json();
        return albums;
    } catch (error) {

        console.error(error);

    }
}
export async function PostAlbum(albumData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(albumData),
        });

        const jsonData = await response.json();
        return jsonData;
       
    } catch (error) {
        console.error('Error creating album:', error);
    }
}