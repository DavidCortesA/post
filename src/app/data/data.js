export async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
}

export async function getPost(id) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching data:", error);
    return null;
  }
}
