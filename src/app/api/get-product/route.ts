import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request) {
  try {
    const searchParams = request?.nextUrl.searchParams;
    const productId = searchParams.get("productId");
    const productDetails = await prisma.product.findUnique({
      where: {
        productId,
      },
    });

    return NextResponse.json({
      success: "successfully fetched products",
      status: true,
      productId,
      productDetails,
    });
  } catch (error) {
    console.error("Error in fetching product details:", error);

    return new Response(
      JSON.stringify({ error: "Error in fetching product details:" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
