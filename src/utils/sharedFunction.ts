import prisma from "../../lib/prisma";

export async function getProducts() {
  const products = await prisma.product.findMany({});
  return products;
}

// get product in batch of 25 and of particular category
export async function getProductsLimit(page: number, category: string) {
  const pageSize = 3; // Number of products per page
  const skip = (page - 1) * pageSize; // Calculate the number of products to skip
  const categoryFilter = category ? { category: category } : {};
  const products = await prisma.product.findMany({
    where: categoryFilter,
    take: pageSize, // Limit the number of products fetched
    skip: skip, // Skip the first N products based on the page number
    orderBy: {
      productName: "asc", // Assuming you want to order by productName, adjust as needed
    },
  });

  return products;
}
