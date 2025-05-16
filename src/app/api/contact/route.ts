import { NextRequest, NextResponse } from "next/server";

interface formData {
  name: string;
  email: string;
  message: string;
}
export async function POST(request: Request) {
  try {
    (await request.json()) as formData;
    return NextResponse.json(
      { message: "Success" },
      {
        status: 200,
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return NextResponse.json(
      {
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
