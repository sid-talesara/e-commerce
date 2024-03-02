import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: { json: () => any }) {
  try {
    const res = await request.json();
    const {
      productName,
      productDescription,
      productSmallDesc,
      price,
      discountedPrice,
      category,
      inventory,
    } = res;

    const result = await prisma.product.create({
      data: {
        productId: uuidv4(),
        productName,
        productDescription,
        productSmallDesc,
        price,
        discountedPrice,
        category,
        inventory,
      },
    });
    return NextResponse.json({
      success: "product added successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    console.error("Error creating product:", error);

    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
