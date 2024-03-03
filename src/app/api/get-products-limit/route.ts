import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: {
  nextUrl: { searchParams: { page: any; category: any } };
}) {
  try {
    const searchParams = request?.nextUrl.searchParams;
    const page = searchParams.get("page");
    const category = searchParams.get("category");
    // console.log(`Page: ${page}, Category: ${category}`);
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

    return NextResponse.json({
      success: "successfully fetched products",
      status: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in fetching products:", error);

    return new Response(
      JSON.stringify({ error: "Error in fetching products:" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
