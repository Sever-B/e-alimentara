const URL = "https://670fe595a85f4164ef2c616f.mockapi.io/alimente";

export async function getAllProducts() {
    const response = await fetch(URL);
    const products =await response.json();

    return products;
}