export async function createUser(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
